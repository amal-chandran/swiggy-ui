import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import Grid from 'material-ui/Grid'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button'
import Dialog, {
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import Food1 from '../../Resources/Food1.JPG'
import Food2 from '../../Resources/Food2.jpg'
import Food3 from '../../Resources/Food3.jpg'
import Food4 from '../../Resources/Food4.jpg'
import Food5 from '../../Resources/Food5.JPG'
import Food6 from '../../Resources/Food6.jpg'
import IconButton from 'material-ui/IconButton';
import Quickview from './Quickview.js'
import Close from 'material-ui-icons/Close';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import GridList, { GridListTile, } from 'material-ui/GridList';
import SideTab from './SideTab.js'
import { CircularProgress } from 'material-ui/Progress';
const styles= theme=>({
	 card: {
	    maxWidth: 212,
	    height:'fit-content',
	    marginLeft:'1.5em',
	    cursor:'pointer',
	    
	  },
	  media: {
	    height: '8em',
	    width:'13.25em',
	  },
	  cardContent:{
	  	paddingBottom:0,
	  	height:'6.5em',
	  },
	  addBtn:{
	  	border:'1px solid #d4d5d9',
	  	color:'#60b246',
	  	'&:hover':{
	  		color:'white',
	  		backgroundColor:'#60b246',
	  	},
	  },
	  caption:{
	  	fontSize:'0.9em',
	  },
	  body2:{
	  	fontSize:'0.5em',
	  },
	  gridList:{
	  	marginBottom:'1em',
	  	padding:'2em 0 2em 1em',
	  	
	  },
	  button: {
   	    margin: '8px 0px 0px 4px',
   	    left:'4em',
   	},
   	dialogFooter:{
		fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
		'&::selection':{
			"color":"#f5861f",
			"background":"#f5f5f5",
		},
		backgroundColor:"#fffaf1",
		textAlign:"center",
		display:"flex",
		'-webkit-box-align':'center',
		aliginItems:'center',
		'-webkit-box-pack':'center','-webkit-box-orient':'vertical','-webkit-box-direction':'normal',
		flexDirection:'column',

	},
  	title:{
  		padding:'10px 20px',
  		textAlign:'center',
  	},
	
	
	headline:{
		fontSize:'1em',
		fontWeight:'bold',
	},
	dialogPaper:{
		width:'100%',
	},


});
const items=[{src:Food1,price:'Rs.250',name:"Cheese Burst Pizza"},
			{src:Food2,price:'Rs.230',name:"Spaghetti Pomodoro with Paneer Nuggets"},
			{src:Food3,price:'Rs.120',name:"Chicken Nuggets"},
			{src:Food4,price:'Rs.200',name:"Dahi Puri"},
			{src:Food5,price:'Rs.210',name:"Aloo tikki"},
			{src:Food6,price:'Rs.90',name:"Veg Biryani"},];
  

class TopBar extends Component{
	constructor(props){
		super(props);
		this.state={
			loading:true,
			viewModalOpen:false,
			restaurant:props.restaurant,
			selected:{},
		};
		setTimeout(()=>this.setState({loading:false}),1000);
	}
	viewOpen(rest_Selected){
		console.log("OPEN");
		this.setState({viewModalOpen:true,selected:rest_Selected});
	}
	viewClose=()=>{
		console.log("CLOSE");
		this.setState({viewModalOpen:false,selected:{}});
	}
render() {
  	const classes=this.props.classes;
  	if(this.state.loading){
  		return(
  			<div style={{textAlign:'center',}}>
  				<CircularProgress size={80} style={{color:'#f5861f'}}>
  				</CircularProgress>
	  		</div>

  			);
  	}
  	else{
    return (
     	<Grid container className="restaurant" style={{minHeight:'20em',paddingTop:'1.5em'}}>
    		<Grid item style={{width:'3em'}}/>
    		<Grid item className="sideBar" style={{padding:0,paddingTop:'0.3em',width:'fit-content',height:'fit-content',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
    			<SideTab/>
    		</Grid>
    		<Grid item xs={7} style={{marginRight:'-8em'}} >
    			 <GridList cellHeight={180} cols={2} >
 					     				  
    				{items.map(item => ( 
          <GridListTile key={item.name} classes={{tile:classes.gridList,}}  style={{width:'40%',height:'fit-content'}}>
	          	<Card className={classes.card}>
	        <CardMedia
	          className={classes.media}
	          image={item.src}
	          title={item.name}
	        />
	        <CardContent className={classes.cardContent} >
	          <Typography variant="headline" component="h2" classes={{headline:classes.headline}} style={{height:'3em'}}>
	             {item.name}
	          </Typography>
	          
	          <Typography variant="caption" classes={{caption:classes.caption}} style={{display:'flex',paddingTop:'1em'}}>
	             {item.price} 
	          </Typography>
	        </CardContent>
	       
	        <CardActions style={{justifyContent:'center',borderTop:'0.5px solid lightgrey'}}>
	          
	          <Button size="small" className={classes.addBtn}  onClick={(item)=>this.viewOpen}
	          			>
	            Add
	          </Button>
	        </CardActions>
	      </Card>
	        
          </GridListTile>
        ))}
        		
	      
			
        </GridList>
			</Grid>
			<Grid item xs={2} style={{backgroundColor:'black'}}/>
    	</Grid>
    );
  }
}
}

export default withStyles(styles)(TopBar)

