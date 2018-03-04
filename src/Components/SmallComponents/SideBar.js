import React, { Component } from 'react';
import { Avatar, withStyles, List, ListItem, ListItemText } from 'material-ui'

const MenuItems = [
	{
		name: "All Restaurants",
		subname: "100 OPTIONS",
		icon: "fa fa-arrow-circle-right"
	}, {
		name: "Popular",
		subname: "31 OPTIONS",
		icon: "fa fa-fire"
	}, {
		name: "Offers around you",
		subname: "10 OPTIONS",
		icon: "fa fa-certificate"
	}, {
		name: "Vegetarian Options",
		subname: "23 OPTIONS",
		icon: "fa fa-leaf"
	}, {
		name: "Pocket Friendly",
		subname: "5 OPTIONS",
		icon: "fa fa-credit-card"
	}
];
class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 0
		};
	}

	setActiveItem = (id) => {
		this.setState({ active: id });
	};

	render() {
		const classes = this.props.classes;
		const { active } = this.state;
		return (
			<List className={classes.List}>
				{
					MenuItems.map((SingleMenu, i) => {
						return (
							<ListItem button className={classes.ListItem + " " + (active === i ? classes.ListItemActive : "")}
								onClick={() => this.setActiveItem(i)}>
								<Avatar className={classes.avatar}>
									<i className={SingleMenu.icon}></i>
								</Avatar>
								<ListItemText
									classes={{ primary: classes.primary, secondary: classes.secondary }}
									primary={SingleMenu.name}
									secondary={SingleMenu.subname} />
							</ListItem>
						);
					})
				}
			</List>
		);
	}
}

const styles = theme => ({
	avatar: {
		backgroundColor: '#d51e',
		display: 'flex',
		transition: 'all .2s ease-in-out',
	},
	List: {
		boxShadow: '0px 0px 17px #dadada'
	},
	ListItem: {
		"&:hover $avatar": {
			transform: 'scale(1.2)',
			boxShadow: '0px 0px 4px #9e9e9e',
		},
		"&:hover $secondary,&:hover $primary": {
			color: '#e65100',
		},
	},
	ListItemActive: {
		backgroundColor: '#d51e',
		"& $secondary,& $primary,&:hover $secondary,&:hover $primary": {
			color: "#fff"
		},
		"& $avatar": {
			backgroundColor: 'white',
			transform: 'scale(1.2)',
			boxShadow: '0px 0px 4px #9e9e9e',
			"& i": {
				color: "#e65100"
			}
		},
		"&:hover": {
			backgroundColor: '#e65100',
		},
	},
	secondary: {
		fontSize: 'x-small',
		fontWeight: 'normal',
	},
	primary: {
		fontWeight: '700',
	}
});

export default withStyles(styles)(SideBar)

