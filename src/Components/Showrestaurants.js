import React, { Component } from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css'
import Grid from 'material-ui/Grid'
import {withStyles} from 'material-ui/styles'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu';
import Badge from 'material-ui/Badge'
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar'
import Input from 'material-ui/Input';
import Info from './SmallComponents/Info.js'
import ShoppingCart from 'material-ui-icons/ShoppingCart'
import Login from './SmallComponents/Login'
import A from '../Resources/A.png'
import B from '../Resources/B.jpg'
import C from '../Resources/C.jpg'
import D from '../Resources/D.jpg'
import E from '../Resources/E.png'
import F from '../Resources/F.jpg'
import SwiggyIcon from '../Resources/SwiggyIcon.png'
import Restaurants from './SmallComponents/Restaurants.js'
import Cart from './SmallComponents/Cart.js'

import Loading from './SmallComponents/Loading.js'
var header,sticky,slideIndex;
const styles= theme=>({
	text:{
		fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
		'&::selection':{
			"color":"#f5861f",
			"background":"#f5f5f5",
		},

	},
	colorPrimary:{
		backgroundColor:'#f5861f',
		color:'#fff',

	},
	container: {
	    display: 'flex',
	    flexWrap: 'wrap',
	  },
  	formControl: {
    	margin:theme.spacing.unit,
    	minWidth: 120,
  	},
  	inputInkbar: {
	    '&:after': {
	      backgroundColor: "#f5861f",
	    },
	},
	active:{
		backgroundColor:'#f5861f',
	},
	dot:{
		  height: "5px",
		  width: '50px',
		  margin: '0 2px',
		  display: 'inline-block',
		  transition: 'background-color 0.6s ease',
	},
	iconAvatar:{
		width:'70%',
		height:'121%',
		left:'2em',
		transform:'scale(.6)',		
	},
});
const locations=['Ahmedabad','Bangalore','Chennai','Delhi','Gurgaon','Hyderabad','Kolkata','Mumbai','Pune',];
const images=[
	{src:A,alt:'poster1',href:"/sed",},
	{src:B,alt:'poster2',href:"/sed",},
	{src:C,alt:'poster3',href:"/sed",},
	{src:D,alt:'poster4',href:"/sed",},
	{src:E,alt:'poster5',href:"/sed",},
	{src:F,alt:'poster6',href:"/sed",},
];
class Showrestaurants extends Component{
	constructor(props){
		super(props);
		this.state={
			signInuserName:'Siva Priya',
			loading:true,
			location:window.location.pathname.split('/').slice(-1)[0],
			headerIsActive:false,
			orderedItems:0,
			carouselDisplay:Array(images.length).fill('none'),
			activeStyle:Array(images.length).fill(false),
			cartOpen:false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.showSlides = this.showSlides.bind(this);
		this.openCartDialog = this.openCartDialog.bind(this);
		this.closeCartDialog = this.closeCartDialog.bind(this);
		setInterval(this.showSlides,4000);
		setTimeout(()=>this.setState({loading:false}),6000);
		
	};
	componentDidMount(){
		document.title=document.title.replace('online','online in '+window.location.pathname.split('/').slice(-1)[0]);
		document.title=document.title.replace('Order from restaurants near you. ',' ');
		window.addEventListener('scroll', this.handleScroll)
	    window.addEventListener('load', this.showSlides);
	    header = document.getElementById("target");
		sticky = header.offsetTop;
		slideIndex=0;
	};
	showSlides() {
		const carouselDisplay=this.state.carouselDisplay.slice();
		const activeStyle=this.state.activeStyle.slice();
		
	    var i;
	    for (i = 0; i < images.length; i++) 
	    	carouselDisplay[i]='none';
	    this.setState({carouselDisplay:carouselDisplay});
	    slideIndex++;
	    if (slideIndex > images.length) {slideIndex = 1}  

	    for (i = 0; i < images.length; i++) {
	    	activeStyle[i]=false;
	    }
	    this.setState({activeStyle:activeStyle});
        carouselDisplay[slideIndex-1]='block';
	    activeStyle[slideIndex-1]=true;
    this.setState({carouselDisplay:carouselDisplay,activeStyle:activeStyle});
	 //   setTimeout(this.showSlides, 4000); // Change image every 2 seconds
	};
	handleScroll(event){
		if (
				window.pageYOffset >= sticky) {
	    header.classList.add("sticky");
	  } else {
	    header.classList.remove("sticky");
	  }
	};
	openCartDialog(){
		this.setState({cartOpen:true});
	}
	closeCartDialog(){
		this.setState({cartOpen:false});
	}
	
	handleChange(event){
		this.setState({
			location:event.target.value,
		});

		const newLocation=event.target.value;
		document.location.href='/show/'+newLocation;
	};
	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll)
		window.removeEventListener('load', this.showSlides);
	};

  render() {
  	const classes=this.props.classes;
  	const {orderedItems}=this.state;
  	return (
      		<Grid container className="page" style={{height:"9em",}}>
      			<Grid item xs={12} style={{zIndex:'2',position:'relative',height:"3.5em",backgroundColor:'#f9f9f9',borderBottom:'1px solid #f5861f',}}>
					<Login  Name={"Siva"} hire={false}/>
				</Grid>
				<Grid item xs={12} id="target"  style={{zIndex:'4',marginLeft:'0.5em',height:"4em",padding:"0px",alignItems:'center',overflow:'hidden',textAlign:'center',justifyContent:'center'}}>
					
					<div className={classes.text} style={{backgroundColor:'#fff',position:"fixed",width:'100%',display:"flex",height:'6em'}}>
						 <div style={{backgroundColor:'white',width:'20%',justifyItems:'center',height:'inherit',}}>
						 	<a href="/">
						 		<Avatar src={SwiggyIcon} className={classes.iconAvatar}/>
						 	</a>
						 </div>
						 <label className={classes.text} style={{color:"#6e6e6e",fontWeight:"700",fontSize:"12px",marginTop:"4em"}}> 
						 	Change location
						 </label>
						<form  autoComplete="off">
						        <FormControl className={classes.formControl}>
						          <Select id="locationInput" 
						          	 value={this.state.location}
						          	 onChange={event => this.handleChange(event)}
						          	 style={{marginTop:'1em',fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",fontWeight:"500",color:"black"}}
						            input={<Input name="Location" classes={{inkbar:classes.inputInkbar}}   
						            					placeholder="Enter Delivery Location" id="locationInputId" />}
						          >	

          						   {locations.map(locationI => 
						          			<MenuItem className={classes.text} style={{fontWeight:"400"}} key={locationI} 
						          			   value={locationI}>
						          					{locationI}
						          			</MenuItem> )}  
						            
						          </Select>
						         
						          <FormHelperText className={classes.text} style={{color:"#6e6e6e",fontSize:"9px",fontWeight:"600"}}>
						          				If your location is unavailable please select your nearest city</FormHelperText>
						        	
						          </FormControl>
						          <Button variant="raised" onClick={this.openCartDialog}
						          	 style={{marginBottom:'2em',width:'15em',color:orderedItems?'white':'black',backgroundColor:orderedItems?'#69bb27':'default',left:'90%',marginTop:'3em'}}>
						          		Your cart
						          		<Badge classes={{
						          			badge:classes.badge,
						          			colorPrimary:classes.colorPrimary,
						          		}} style={{visibility:orderedItems?'visible':'hidden'}}
						          			badgeContent={orderedItems} color="primary">

						          		<ShoppingCart style={{visibility:'visible'}}/>
						          			</Badge>
						          		
						          </Button>
						          <Cart open={this.state.cartOpen} handleOpen={this.openCartDialog} handleClose={this.closeCartDialog}/>
						</form>
					</div>

				</Grid>
				<Grid item xs={12} className="content" style={{zIndex:'3',marginTop:'2em',height:'20em',backgroundColor:'black'}}>
					<Loading display={this.state.loading} />
					<div className="slideshow-container" style={{display:this.state.loading?'none':'block'}}>

					{images.map(
						image=> 
								<div className="mySlides fade" style= {{display:this.state.carouselDisplay[images.indexOf(image)]}}key={images.indexOf(image)}>
									<a href={image.href}>
								  		<img src={image.src} alt={images.alt } style={{width:'100%',height:'18em'}}/>
								  	</a>
								</div>
							)}
					</div>
					<div style={{textAlign:'center',display:this.state.loading?'none':'block'}}>
						{images.map(
							image=> <span key={images.indexOf(image)} style={{
								cursor:'pointer',marginBottom:'',backgroundColor:this.state.activeStyle[images.indexOf(image)]?'#f5861f':'#bbb'}} className={classes.dot}></span> 
							)}
					</div>
					
				</Grid>
				<Grid item xs={12} style={{height:'auto',}}>
					<Restaurants/>
				
				</Grid>
				<Grid item xs={12} className="footer" style={{height:'5em'}}>
					<Info/>
				
				</Grid>
				
				</Grid>
									
    );
  }
}

export default withStyles(styles)(Showrestaurants)

