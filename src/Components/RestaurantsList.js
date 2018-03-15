import React, { Component } from 'react';
import {
	Grid, Button, IconButton, Dialog,
	DialogContent, DialogTitle, withStyles
} from 'material-ui'

import { CircularProgress } from 'material-ui/Progress';
import RestaurantDetails from './RestaurantDetails';
import ListMenu from './ListMenu';
import RestaurantCard from './RestaurantCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Restaurants } from './../Resource';
import { Link } from 'react-router-dom';
import { menuActions } from './../Actions';
import Waypoint from 'react-waypoint';
import { StickyContainer, Sticky } from 'react-sticky';

class RestaurantsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			viewModalOpen: false,
			selected: {},
		};
		setTimeout(() => this.setState({ loading: false }), 5000);
	}
	viewOpen(rest_Selected) {
		console.log("OPEN");
		this.setState({ viewModalOpen: true, selected: rest_Selected });
	}
	viewClose = () => {
		console.log("CLOSE");
		this.setState({ viewModalOpen: false, selected: {} });
	}

	componentWillMount() {
		this.props.actions.getRestaurants();
	}

	render() {
		// const classes = this.props.classes;
		const { isFetchingItem, item } = this.props.restaurants;
		const { actions } = this.props;

		if (isFetchingItem || item === null) {
			return (
				<div style={{ textAlign: 'center', display: "flex", flex: "1", alignItems: "center", justifyContent: "center", height: "calc(100vh - 6rem)" }}>
					<CircularProgress size={80} style={{ color: '#f5861f' }}>
					</CircularProgress>
				</div>

			);
		}
		// let SampleHotels=[];
		let MenuItems = [];
		let Items = [];
		try {
			Items = item.Items;
			MenuItems = item.MenuItems;
			MenuItems = MenuItems.map((data) => {
				return { ...data, "subname": data.count + " OPTIONS" }
			});
		} catch (e) {

		};

		return (
			<StickyContainer>
				<Grid container className="restaurant" style={{ minHeight: '20em', paddingTop: '1.5em' }}>
					<Grid item xs={3}>
						<Sticky>
							{({ style, isSticky }) => {
								return (
									<RestaurantsListMenu style={style} data={MenuItems} />
								);
							}}
						</Sticky>
					</Grid>
					<Grid item xs={8}>
						{
							MenuItems.map((SingleSection, i) => {
								return (
									<Waypoint key={i} onEnter={() => { actions.setActive(i); }}>
										<div id={SingleSection.name}>
											<Grid container spacing={8}>
												<Grid item xs={12} style={{ height: 'fit-content' }}>
													<h1 style={{ paddingLeft: "1rem" }}> {SingleSection.name} </h1>
												</Grid>
												{Items.map((SingleRestaurant, j) => {

													if (SingleSection.name === SingleRestaurant.choicename) {

														return (
															<Grid item key={j} xs={4} style={{ height: 'fit-content' }}>
																{/* <a href={"/restaurants/" + sample.name} > */}
																<Link to={"/" + this.props.location + "/" + SingleRestaurant.name}>
																	<RestaurantCard data={SingleRestaurant} />
																</Link>
																{/* </a> */}
															</Grid>
														);
													}
												})}
											</Grid>
										</div>

									</Waypoint>
								);
							})
						}
					</Grid>
				</Grid>
			</StickyContainer>

		);
	}
}
const mapStateToProps = (state) => {
	const { restaurants, localState } = state;
	return {
		restaurants, location: localState.location
	}
};
const mapDispatchToProps = (dispatch) => {
	const { getRestaurants } = Restaurants;
	const { setActive } = menuActions;

	return {
		actions: bindActionCreators({
			getRestaurants, setActive
		}, dispatch)
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);

let RestaurantsListMenu = (props) => {
	return (
		<div style={props.style}>
			<ListMenu
				active={props.RestaurantsListMenu}
				selectionChanged={(id, data) => { window.location = "#" + data.name; props.actions.setActive(id) }}
				data={props.data} />
		</div>
	);
};


const mapStateToPropsList = (state) => {
	const { menu } = state;
	return {
		RestaurantsListMenu: menu.RestaurantsListMenu
	}
};
const mapDispatchToPropsList = (dispatch) => {
	const { setActive } = menuActions;
	return {
		actions: bindActionCreators({
			setActive
		}, dispatch)
	};
};

RestaurantsListMenu = connect(mapStateToPropsList, mapDispatchToPropsList)(RestaurantsListMenu);


// const styles = theme => ({
// 	card: {
// 		boxShadow: "none",
// 		padding: ".8rem",
// 		borderRadius: 0,
// 		paddingBottom: 1,
// 		'&:hover': {
// 			border: "1px solid #d4d4d4",
// 			padding: "calc(.8rem - 1px)",
// 			paddingBottom: '0',
// 			boxShadow: "0 0 18px #e0e0e0",
// 		},
// 	},
// 	media: {
// 		height: '14em',
// 	},
// 	cardContent: {
// 		padding: "0rem",
// 		paddingTop: "1rem",
// 		height: '6.5em',
// 	},
// 	body1: {
// 		fontSize: '0.75em',
// 	},
// 	body2: {
// 		fontSize: '0.5em',
// 	},
// 	gridList: {
// 		marginBottom: '1em',
// 		padding: '2em 0 2em 1em',
// 		'&:hover': {
// 			border: '1px solid #eee',
// 			boxShadow: '1px 2px 4px 0px rgba(0,0,0,0.2)',
// 		},
// 	},
// 	button: {
// 		margin: '8px 0px 0px 4px',
// 		left: '4em',
// 	},
// 	dialogFooter: {
// 		fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
// 		'&::selection': {
// 			"color": "#f5861f",
// 			"background": "#f5f5f5",
// 		},
// 		backgroundColor: "#fffaf1",
// 		textAlign: "center",
// 		display: "flex",
// 		'-webkit-box-align': 'center',
// 		aliginItems: 'center',
// 		'-webkit-box-pack': 'center', '-webkit-box-orient': 'vertical', '-webkit-box-direction': 'normal',
// 		flexDirection: 'column',

// 	},
// 	title: {
// 		padding: '10px 20px',
// 		textAlign: 'center',
// 	},


// 	headline: {
// 		fontSize: 'small',
// 		fontWeight: 'bold',
// 	},
// 	dialogPaper: {
// 		width: '100%',
// 	},


// });

// {/* <Dialog classes={{ paper: classes.dialogPaper }}
// 							open={this.state.viewModalOpen}
// 							onClose={this.viewClose}
// 							style={{ height: "12em", marginTop: "13em", width: '100%' }}

// 							aria-labelledby="form-dialog-title"
// 						>
// 							<DialogTitle id="form-dialog-title" className={classes.title}>
// 								Quick View- {this.state.selected.name}
// 								<IconButton className={classes.button} aria-label="close" onClick={this.viewClose}>
// 									<Close />
// 								</IconButton>
// 							</DialogTitle>
// 							<DialogContent style={{ width: '100%' }}>
// 							</DialogContent>
// 						</Dialog> */}