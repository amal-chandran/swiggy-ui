import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button'
import Dialog, {
	DialogContent,
	DialogTitle,
} from 'material-ui/Dialog';

// import Food1 from '../Resources/Food1.JPG'
// import Food2 from '../Resources/Food2.jpg'
// import Food3 from '../Resources/Food3.jpg'
// import Food4 from '../Resources/Food4.jpg'
// import Food5 from '../Resources/Food5.JPG'
// import Food6 from '../Resources/Food6.jpg'

import IconButton from 'material-ui/IconButton';
// import Quickview from './Quickview.js'
import Close from 'material-ui-icons/Close';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import GridList, { GridListTile, } from 'material-ui/GridList';
import { CircularProgress } from 'material-ui/Progress';
import LineMenu from './LineMenu';
import ProductCard from './ProductCard';
import Wrapper from './Wrapper';
import { CartEmpty } from './../Assets'

const styles = theme => ({
	Cart: {
		background: "url(" + CartEmpty + ")",
		opacity: ".5",
		backgroundRepeat: "no-repeat",
		minHeight: "15em",
		backgroundSize: "contain"
	},
	card: {
		maxWidth: 212,
		height: 'fit-content',
		marginLeft: '1.5em',
		cursor: 'pointer',

	},
	media: {
		height: '8em',
		width: '13.25em',
	},
	cardContent: {
		paddingBottom: 0,
		height: '6.5em',
	},
	addBtn: {
		border: '1px solid #d4d5d9',
		color: '#60b246',
		'&:hover': {
			color: 'white',
			backgroundColor: '#60b246',
		},
	},
	caption: {
		fontSize: '0.9em',
	},
	body2: {
		fontSize: '0.5em',
	},
	gridList: {
		marginBottom: '1em',
		padding: '2em 0 2em 1em',

	},
	button: {
		margin: '8px 0px 0px 4px',
		left: '4em',
	},
	dialogFooter: {
		fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
		'&::selection': {
			"color": "#f5861f",
			"background": "#f5f5f5",
		},
		backgroundColor: "#fffaf1",
		textAlign: "center",
		display: "flex",
		'-webkit-box-align': 'center',
		aliginItems: 'center',
		'-webkit-box-pack': 'center', '-webkit-box-orient': 'vertical', '-webkit-box-direction': 'normal',
		flexDirection: 'column',

	},
	title: {
		padding: '10px 20px',
		textAlign: 'center',
	},


	headline: {
		fontSize: '1em',
		fontWeight: 'bold',
	},
	dialogPaper: {
		width: '100%',
	},


});
const items = [
	{ image: "./Images/Food1.JPG", type: "Weekly Specials", price: 'Rs.250', name: "Cheese Burst Pizza" },
	{ image: "./Images/Food2.JPG", type: "Weekly Specials", price: 'Rs.230', name: "Spaghetti Pomodoro with Paneer Nuggets" },
	{ image: "./Images/Food3.JPG", type: "Weekly Specials", price: 'Rs.120', name: "Chicken Nuggets" },
	{ image: "./Images/Food4.JPG", type: "Weekly Specials", price: 'Rs.200', name: "Dahi Puri" },
	{ image: "./Images/Food5.JPG", type: "Weekly Specials", price: 'Rs.210', name: "Aloo tikki" },
	{ image: "./Images/Food6.JPG", type: "Weekly Specials", price: 'Rs.90', name: "Veg Biryani" }
];

const MenuItems = [
	{
		name: "Recommended",
		icon: "fa  fa-certificate"
	}, {
		name: "Quick Bites",
		icon: "fa fa-fire"
	}, {
		name: "Veg",
		icon: "fa fa-leaf"
	}, {
		name: "Salads",
		icon: "fa fa-leaf"
	}, {
		name: "Beverages",
		icon: "fa fa-beer"
	}
];
class TopBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			viewModalOpen: false,
			restaurant: props.restaurant,
			selected: {},
		};
		setTimeout(() => this.setState({ loading: false }), 1000);
	}
	viewOpen(rest_Selected) {
		console.log("OPEN");
		this.setState({ viewModalOpen: true, selected: rest_Selected });
	}
	viewClose = () => {
		console.log("CLOSE");
		this.setState({ viewModalOpen: false, selected: {} });
	}
	render() {
		const classes = this.props.classes;
		if (this.state.loading) {
			return (
				<div style={{ textAlign: 'center', }}>
					<CircularProgress size={80} style={{ color: '#f5861f' }}>
					</CircularProgress>
				</div>

			);
		}
		else {
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
								{items.map((item, i) => (
									<Grid item key={i} xs={6} style={{ height: 'fit-content' }}>
										<ProductCard data={item} />
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid item xs={3}  >
							<h1 style={{ color: " #7e808c" }}>Cart Empty</h1>
							<div className={classes.Cart}>

							</div>
							<div style={{ color: "#93959f" }}>
								Good food is always cooking! Go ahead, order some yummy items from the menu.
						</div>
						</Grid>
					</Grid>
				</Wrapper>
			);
		}
	}
}

export default withStyles(styles)(TopBar)

