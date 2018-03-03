import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Food1 from '../../Resources/Food1.JPG'
import Food2 from '../../Resources/Food2.jpg'
import Food3 from '../../Resources/Food3.jpg'
import Food4 from '../../Resources/Food4.jpg'
import Food5 from '../../Resources/Food5.JPG'
import Food6 from '../../Resources/Food6.jpg'
import Typography from 'material-ui/Typography'
import GridList, { GridListTile, } from 'material-ui/GridList';
import List, { ListItem, ListItemText } from 'material-ui/List';
import {CircularProgress} from 'material-ui/Progress'
const styles= theme=>({
	primary:{
		fontSize:'x-small',
		fontWeight:'700',
	},
	root:{
		display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'space-around',
	    overflow: 'hidden',
	    backgroundColor: theme.palette.background.paper,
	},
	gridList:{
		width:'62.333%',
		'&:hover':{
			transform:'scale(1.03)',
		}
	},
});

class Quickview extends Component{
	constructor(props){
		super(props);
		this.state={
			selected:props.selected,
			loading:true,
		};
		setTimeout(()=>this.setState({loading:false}),6000);
	}
  render() {
  	const classes=this.props.classes;
  	if(this.state.loading){
  		return(
  			<div style={{textAlign:'center',}}>
  				<CircularProgress size={80} style={{color:'#f5861f'}}/>
	  		</div>
  			);
  	}
	const menus={
	url:'/restaurants/'+this.state.selected.name,
	categories:
		['North Indian','Chinese','Snacks','Desserts','Juices','Chaat items','Pizzas'],
	items:[{src:Food1,name:"Cheese Burst Pizza",},{src:Food2,name:"Spaghetti Pomodoro with Paneer Nuggets"},{src:Food3,name:"Chicken Nuggets"},
			{src:Food4,name:"Dahi Puri"},{src:Food5,name:"Aloo tikki"},{src:Food6,name:"Veg Biryani"}]
	};
   	return (
   			<a href={menus.url}>
    		<Grid container className="restaurant" style={{minHeight:'20em',paddingTop:'1.5em',width:'100%'}}>
    			<Grid item  className="sideBar" style={{padding:0,paddingTop:'0.3em',height:'fit-content',textAlign:'center',width:'fit-content',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
    				<Typography variant="body2" component="h2" style={{paddingBottom:'0.8em'}}>
		             Menu
		          	</Typography>
		          <Typography variant="caption" component="h2" style={{height:'fit-content',}}>
		             {this.state.selected.address}
		          </Typography>
		          <List>
    					
    					{menus.categories.map(menu=>
    							<ListItem button  key={menu}>
	    							<ListItemText primary={menu} classes={{primary:classes.primary}}/>
	    						</ListItem>
    						
    						)}
    				
    				</List>
    			</Grid>
    			<Grid item xs={8} style={{marginLeft:'1.5em',marginTop:'',backgroundColor:'lightgrey',boxShadow:'1px 2px 4px 0px rgba(0,0,0,0.2)',}}>
    				<div className={classes.root}>
    				<GridList  cols={2} >
 					     				  
    				{menus.items.map(sample => (
          <GridListTile  classes={{root:classes.gridList}} key={sample.name}  style={{height:'fit-content'}}>
	         <img src={sample.src} alt={sample.name}  style={{height:'100%',width:'100%'}}/>
	         <Typography variant="caption" component="h2"  >
	             {sample.name}
	          </Typography>
	        
          </GridListTile>
        ))}
        </GridList>
        </div>
    			</Grid>
    		</Grid>
    	</a>
    );
  }
}

export default withStyles(styles)(Quickview)

