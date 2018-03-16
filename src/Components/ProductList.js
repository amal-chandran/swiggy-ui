import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'

// import Quickview from './Quickview.js'

import { CircularProgress } from 'material-ui/Progress';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RestaurantMenuItems, Restaurants } from './../Resource';
import { menuActions, localActions } from './../Actions';
import LineMenu from './LineMenu';
import ProductCard from './ProductCard';
import Cart from './Cart';
import Wrapper from './Wrapper';
import keyBy from 'lodash/keyBy';

class ProductList extends Component {

	componentWillMount() {
		this.props.actions.getRestaurantMenuItems(this.props.data.name);
	}

	handleItemChange = (ItemData) => {
		return (ItemCount) => {
			ItemData.ItemCount = ItemCount;
			this.props.actions.CartItem(this.props.data, ItemData)
		}
	}

	render() {
		const { isFetchingItem, item } = this.props.restaurantmenuitems;
		const { CartRestaurant, CartItems } = this.props.localState;

		if (isFetchingItem || item === null) {
			return (
				<div style={{ textAlign: 'center', display: "flex", flex: "1", alignItems: "center", justifyContent: "center", height: "calc(100vh - 6rem)" }}>
					<CircularProgress size={80} style={{ color: '#f5861f' }}>
					</CircularProgress>
				</div>

			);
		}
		let MenuItems = [];
		let Items = [];
		let ItemsInOrderList = [];
		try {
			Items = item.Items;
			MenuItems = item.MenuItems;
			ItemsInOrderList = keyBy(CartItems, 'itemid');
		} catch (e) {

		};

		return (
			<Wrapper>
				<Grid container>
					<Grid style={{
						borderRight: "1px solid #d6d6d6",
						padding: '0px',
						paddingTop: '4rem'
					}} item xs={3}>
						<LineMenu data={MenuItems} />
					</Grid>
					<Grid item xs={6} >
						<Grid style={{ padding: "2rem" }} container>
							{Items.map((item, i) => (
								<Grid item key={i} xs={6} style={{ height: 'fit-content' }}>
									<ProductCard
										OrderCount={ItemsInOrderList[item.itemid] !== undefined ? ItemsInOrderList[item.itemid].ItemCount : 0}
										ItemCountChanges={this.handleItemChange(item)}
										data={item} />
								</Grid>
							))}
						</Grid>
					</Grid>
					<Grid item xs={3}>
						<Cart />
					</Grid>
				</Grid>
			</Wrapper>
		);
	}

}



const mapStateToProps = (state) => {
	const { restaurantmenuitems, restaurants, localState } = state;
	return {
		restaurantmenuitems, restaurants, localState
	}
};
const mapDispatchToProps = (dispatch) => {
	const { getRestaurant } = Restaurants;
	const { CartItem } = localActions;
	const { getRestaurantMenuItems } = RestaurantMenuItems;
	const { setActive } = menuActions;


	return {
		actions: bindActionCreators({
			getRestaurant, getRestaurantMenuItems,
			setActive, CartItem
		}, dispatch)
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
