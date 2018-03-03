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

import IconButton from 'material-ui/IconButton';
import Quickview from './Quickview.js'
import Close from 'material-ui-icons/Close';
import Hot1 from '../../Resources/Hot1.jpg'
import Hot2 from '../../Resources/Hot2.jpg'
import Hot3 from '../../Resources/Hot3.jpg'
import Hot4 from '../../Resources/Hot4.jpg'
import Hot5 from '../../Resources/Hot5.jpg'
import Hot6 from '../../Resources/Hot6.jpg'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import GridList, { GridListTile, } from 'material-ui/GridList';
import SideBar from './SideBar.js'
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
	  body1:{
	  	fontSize:'0.75em',
	  },
	  body2:{
	  	fontSize:'0.5em',
	  },
	  gridList:{
	  	marginBottom:'1em',
	  	padding:'2em 0 2em 1em',
	  	'&:hover':{
	  		border:'1px solid #eee',
	  		boxShadow:'1px 2px 4px 0px rgba(0,0,0,0.2)',
	  	},
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
		fontSize:'small',
		fontWeight:'bold',
	},
	dialogPaper:{
		width:'100%',
	},


});

const SampleHotels=[{
	image:Hot1,address:'123,XYZ Nagar',
	name:'Firewood Biryani',
	type:'Chicken biryani,Chicken 65,Chicken Tikka',
	rating:'3.9',
	deliveryTime:'25mins',
	minCost:'Rs.200 for Two',
},{
	image:Hot2,address:'123,ABC Nagar',
	name:'Fresh Bites',
	type:'North Indian,South Indian,Chinese,Fast Food,Juices',
	rating:'4.5',
	deliveryTime:'35mins',
	minCost:'Rs.100 for Two',
},{
	image:Hot3,address:'13,WES Nagar',
	name:'The Bowl Company',
	type:'Continental,Indian,Pan-Asian',
	rating:'4.5',
	deliveryTime:'20mins',
	minCost:'Rs.300 for Two',
},
{
	image:Hot4,address:'344,CVB Nagar',
	name:'Hotel Tom\'s Restaurant',
	type:'North Indian,Biryani',
	rating:'3.8',
	deliveryTime:'50mins',
	minCost:'Rs.150 for Two',
},
{
	image:Hot5,address:'1231,Gru Nagar',
	name:'Tadka Singh',
	type:'Punjabi,North Indian',
	rating:'4.1',
	deliveryTime:'58mins',
	minCost:'Rs.300 for Two',
},
{
	image:Hot6,address:'007,Jamesbond Nagar',
	name:'Art Of Delight',
	type:'IceCream,Desserts',
	rating:'4.5',
	deliveryTime:'42mins',
	minCost:'Rs.250 for Two',
},{
	image:Hot1,address:'143,Valentine Street',
	name:'The Firewood Biryani',
	type:'Chicken biryani,Chicken 65,Chicken Tikka',
	rating:'3.9',
	deliveryTime:'25mins',
	minCost:'Rs.200 for Two',
},{
	image:Hot2,address:'001,Single- Nagar',
	name:'The Fresh Bites',
	type:'North Indian,South Indian,Chinese,Fast Food,Juices',
	rating:'4.5',
	deliveryTime:'35mins',
	minCost:'Rs.100 for Two',
},{
	image:Hot3,address:'35007,Near mental hospital',
	name:'The Bowls Company',
	type:'Continental,Indian,Pan-Asian',
	rating:'4.5',
	deliveryTime:'20mins',
	minCost:'Rs.300 for Two',
},
{
	image:Hot4,address:'3.14,Choco Pie Street',
	name:'Hotel Jerry\'s Restaurant',
	type:'North Indian,Biryani',
	rating:'3.8',
	deliveryTime:'50mins',
	minCost:'Rs.150 for Two',
},
{
	image:Hot5,address:'6,Sachin Nagar',
	name:'Mahendra Singh',
	type:'Punjabi,North Indian',
	rating:'4.1',
	deliveryTime:'58mins',
	minCost:'Rs.300 for Two',
},
{
	image:Hot6,address:'0 C,Cool Captain Street',
	name:'Art Of Eating',
	type:'IceCream,Desserts',
	rating:'4.5',
	deliveryTime:'42mins',
	minCost:'Rs.250 for Two',
},
];
class Menus extends Component{
	constructor(props){
		super(props);
		this.state={
			loading:true,
			viewModalOpen:false,
			selected:{},
		};
		setTimeout(()=>this.setState({loading:false}),5000);
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
    return (
    	<Grid container className="restaurant" style={{minHeight:'20em',paddingTop:'1.5em'}}>
    		<Grid item style={{width:'3em'}}/>
    		<Grid item className="sideBar" style={{padding:0,paddingTop:'0.3em',width:'fit-content',height:'fit-content',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
    			<SideBar/>
    		</Grid>
    		<Grid item xs={8} style={{marginLeft:'3em'}}>
    			 <GridList cellHeight={180} cols={3} >
 					     				  
    				{SampleHotels.map(sample => ( 
          <GridListTile key={sample.name} classes={{tile:classes.gridList}} id="ssh" style={{height:'fit-content'}}>
	          	<Card className={classes.card}>
	          	<a href={"/restaurants/"+sample.name} >
	        
	          	
	        <CardMedia
	          className={classes.media}
	          image={sample.image}
	          title={sample.name}
	        />
	        <CardContent className={classes.cardContent}>
	          <Typography variant="headline" component="h2" classes={{headline:classes.headline}}>
	             {sample.name}
	          </Typography>
	          <Typography component="p" classes={{body1:classes.body1}}>
	          {sample.type}
	          </Typography>
	          <Typography variant="caption" classes={{body1:classes.body1}} style={{display:'flex',paddingTop:'1em'}}>
	             <div style={{width:'fit-content',paddingRight:'0.5em',backgroundColor:'#48c479',color:'white'}}>
	             	<i className="fa fa-star"></i>{sample.rating}
	             </div>&nbsp; &bull; {sample.deliveryTime} &bull;{sample.minCost} 
	          </Typography>
	        </CardContent>
	        </a>
	        <CardActions style={{justifyContent:'center',borderTop:'0.5px solid lightgrey'}}>
	          
	          <Button size="small" onClick={()=>this.viewOpen(sample)} style={{color:'#5d8ed5'}} 
	          			>
	            Quick View
	          </Button>
	        </CardActions>
	      </Card>
	        
          </GridListTile>
          
        ))}
        		
	      <Dialog classes={{paper:classes.dialogPaper}}
						          open={this.state.viewModalOpen}
						          onClose={this.viewClose}
						          style={{height:"12em",marginTop:"13em",width:'100%'}}
						          
						          aria-labelledby="form-dialog-title"
						        >
						          <DialogTitle id="form-dialog-title" className={classes.title}>
						          		Quick View- {this.state.selected.name}
						          		<IconButton className={classes.button} aria-label="close" onClick={this.viewClose}>
									        <Close />
									    </IconButton>
						          </DialogTitle>
						          <DialogContent style={{width:'100%'}}>
						          		<Quickview selected={this.state.selected}/>
						          </DialogContent>
							</Dialog>
			
        </GridList>
			</Grid>
    	</Grid>
    );
  }
}

export default withStyles(styles)(Menus)

