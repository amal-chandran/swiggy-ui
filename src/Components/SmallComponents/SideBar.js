import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import {withStyles} from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AccountBalanceWallet from 'material-ui-icons/AccountBalanceWallet';
import Divider from 'material-ui/Divider';

const styles= theme=>({
	primaryActive:{
		fontWeight:'700',
		color:'white',
	},
	secondaryActive:{
		fontSize:'x-small',
		fontWeight:'700',
		color:'white',
	},
	avatar:{
		backgroundColor:'#d51e',
		display:'flex',
		transition: 'all .2s ease-in-out',
		
	},
	activeAvatar:{
		backgroundColor:'white',
		color:'#d51e',
	},
	hoveredAvatar:{
		transform:'scale(1.2)',
		boxShadow:'2px 2px 4px 2px #9e9e9e',
	},
	hoveredPrimary:{
		fontWeight:'700',
		color:'#e65100',
	},
	hoveredSecondary:{
		fontSize:'x-small',
		fontWeight:'700',
		color:'#e65100',
	},
	secondary:{
		fontSize:'x-small',
		fontWeight:'700',
		
	},

	primary:{
		fontWeight:'700',
		
	},
	headline:{
		fontSize:'small',
		fontWeight:'bold',
	},

});
class SideBar extends Component{
	constructor(props){
		super(props);
		this.state={
			active:Array(5).fill(false),
			hovered:Array(5).fill(false),
		};
	}
	componentDidMount(){
		const actives=this.state.active.slice();
		actives[0]=true;
		this.setState({active:actives});
	}
	listChange(i){
		const actives=Array(5).fill(false);
		actives[i]=true;
		this.setState({active:actives});
	}
	hoveredOn(i){
		const hovers=Array(5).fill(false);
		hovers[i]=true;
		this.setState({hovered:hovers});
	}
	hoveredOff(){
		const actives=Array(5).fill(false);
		this.setState({hovered:actives});
	}
	
  render() {
  	const classes=this.props.classes;
   	const activeBack={backgroundColor:'#d51e',};
    return (
    		<List>
		        <ListItem button onMouseOver={()=>this.hoveredOn(0)} onMouseOut={()=>this.hoveredOff()} onClick={()=>this.listChange(0)}  
		        		style={this.state.active[0]?activeBack:null} > 
		          <Avatar className={this.state.active[0]?classes.activeAvatar:classes.avatar} classes={{root:this.state.hovered[0]&&!this.state.active[0]?classes.hoveredAvatar:null}}>
		          	<i className="fa fa-arrow-circle-right"></i>
		          </Avatar>
		          <ListItemText  	classes={{primary:this.state.active[0]?classes.primaryActive:this.state.hovered[0]?classes.hoveredPrimary:classes.primary,secondary:this.state.active[0]?classes.secondaryActive:this.state.hovered[0]?classes.hoveredSecondary :classes.secondary}}
		          	 primary="All Restaurants" secondary="100 OPTIONS" 
		          	 />
		        </ListItem>
		        <ListItem button onMouseOver={()=>this.hoveredOn(1)} onMouseOut={()=>this.hoveredOff()} onClick={()=>this.listChange(1)} style={this.state.active[1]?activeBack:null}>
		          <Avatar className={this.state.active[1]?classes.activeAvatar:classes.avatar} classes={{root:this.state.hovered[1]&&!this.state.active[1]?classes.hoveredAvatar:null}}>
		            <i className="fa fa-fire" ></i>
		          </Avatar>
		          <ListItemText 
		          	classes={{primary:this.state.active[1]?classes.primaryActive:this.state.hovered[1]?classes.hoveredPrimary:classes.primary,secondary:this.state.active[1]?classes.secondaryActive:this.state.hovered[1]?classes.hoveredSecondary :classes.secondary}}
		          	 primary="Popular" secondary="31 OPTIONS" /></ListItem>
		        <li>
		          <Divider inset />
		        </li>
		        <ListItem button onMouseOver={()=>this.hoveredOn(2)} onMouseOut={()=>this.hoveredOff()} onClick={()=>this.listChange(2)} style={this.state.active[2]?activeBack:null}>
		          <Avatar className={this.state.active[2]?classes.activeAvatar:classes.avatar} classes={{root:this.state.hovered[2]&&!this.state.active[2]?classes.hoveredAvatar:null}}>
		          	<i className="fa fa-certificate">
		          		<i className="fa fa-percent"></i>
		          	</i>
		          </Avatar>
		          <ListItemText 	classes={{primary:this.state.active[2]?classes.primaryActive:this.state.hovered[2]?classes.hoveredPrimary:classes.primary,secondary:this.state.active[2]?classes.secondaryActive:this.state.hovered[2]?classes.hoveredSecondary :classes.secondary}}
		          	  primary="Offers around you" secondary="10 OPTIONS" />
		        </ListItem>
		        <Divider inset component="li" />
		        <ListItem button onMouseOver={()=>this.hoveredOn(3)} onMouseOut={()=>this.hoveredOff()} onClick={()=>this.listChange(3)} style={this.state.active[3]?activeBack:null}>
		          <Avatar className={this.state.active[3]?classes.activeAvatar:classes.avatar} 
		          classes={{root:this.state.hovered[3]&&!this.state.active[3]?classes.hoveredAvatar:null}}>
		          	<i className="fa fa-leaf"></i>
		          </Avatar>
		          <ListItemText 	classes={{primary:this.state.active[3]?classes.primaryActive:this.state.hovered[3]?classes.hoveredPrimary:classes.primary,secondary:this.state.active[3]?classes.secondaryActive:this.state.hovered[3]?classes.hoveredSecondary :classes.secondary}}
		          	 
		          	 primary="Vegetarian Options" secondary="23 OPTIONS" />
		        </ListItem>
		        <Divider inset component="li" />
		        <ListItem button onMouseOver={()=>this.hoveredOn(4)} onMouseOut={()=>this.hoveredOff()} onClick={()=>this.listChange(4)} style={this.state.active[4]?activeBack:null}>
		          <Avatar className={this.state.active[4]?classes.activeAvatar:classes.avatar} 
		          	classes={{root:this.state.hovered[4]&&!this.state.active[4]?classes.hoveredAvatar:null}}>
		          	<AccountBalanceWallet/>
		          </Avatar>
		          <ListItemText 
		          		classes={{primary:this.state.active[4]?classes.primaryActive:this.state.hovered[4]?classes.hoveredPrimary:classes.primary,secondary:this.state.active[4]?classes.secondaryActive:this.state.hovered[4]?classes.hoveredSecondary :classes.secondary}}
		          	 primary="Pocket Friendly" secondary="5 OPTIONS" />
		        </ListItem>
		      </List>
    );
  }
}

export default withStyles(styles)(SideBar)

