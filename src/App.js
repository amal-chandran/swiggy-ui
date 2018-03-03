import React, { Component } from 'react';
import Home from './Resources/Home.webp'
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Grid from 'material-ui/Grid'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Logo from './Resources/SwiggyLogo.png'

import Button from 'material-ui/Button'
import Input from 'material-ui/Input';


const styles= theme=>({
	text:{
		fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
		'&::selection':{
			"color":"#f5861f",
			"background":"#f5f5f5",
		},

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
});
const locations=['Ahmedabad','Bangalore','Chennai','Delhi','Gurgaon','Hyderabad','Kolkata','Mumbai','Pune',];
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			userName:props.Location,
			location:window.location.pathname.split('/').slice(-1)[0],
		};
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount(){
		document.title=document.title.replace('online','online in '+window.location.pathname.split('/').slice(-1)[0]);
		document.title=document.title.replace('Order from restaurants near you. ',' ');
	}
	handleChange(event){
		this.setState({
			location:event.target.value,
		});
	}
	changeLocation = () =>{
		const newLocation=this.state.location;
		document.location.href='/show/'+newLocation;
	}
  render() {
  	const classes=this.props.classes;
    return (
      		<Grid container className="page" style={{height:"34em",}}>
      			<Grid item xs={12} style={{height:"8em"}}>
					<Grid container className="navBar" style={{height:"2em",marginTop:"1.2em"}}>
							<Grid item xs={2} />
							<Grid item xs={1} >
							  	<a href="/">
							  		<img src={Logo} alt="logo" style={{transformOrigin:"0 0",transform:"scale(1.2,1.5)",backgroundSize:"25%",height:"1.5em",backgroundRepeat:"no-repeat",width:"100%"}}/>
							  	</a>
							</Grid>
							<Grid item xs={4}/>
							<Grid item xs={1}>
							  	<Typography type="caption"  className={classes.text}  style={{marginTop:"0.9em",cursor:"pointer",color:"#f5861f",aliginItems:"center"}}>
							  			 We are Hiring
							  	</Typography>
							</Grid>
							<Grid item xs={1} >
							  	<Typography type="caption"  className={classes.text} style={{marginTop:"0.8em",color:"#1a1a1a"}}>
							  		Get app:<a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader">
							  					<i className="fa fa-android" 
							  							style={{paddingLeft:"0.8em",fontSize:"1.4em",color:"black"}}>
							  						
							  					</i>
							  				</a>
							  				<a href="https://itunes.apple.com/in/app/id989540920&referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage">
							  					<i className="fa fa-apple" 
							  							style={{paddingLeft:"0.5em",fontSize:"1.4em",color:"black"}}>
							  						
							  					</i>
							  				</a>
							  	</Typography>
							</Grid>
							<Grid item xs={2}>
							
							  	<Button className={classes.text} style={{fontSize:"12px",textTransform:"capitalize",borderRadius:"3px",border:"1px solid black",width:"2em"}}> Login</Button>
							</Grid>
					</Grid>

				</Grid>
				<Grid item xs={12}  style={{marginBottom:"16em",height:"32em",padding:"0px"}}>
					<h1  className={classes.text} style={{textAlign:"center",color:"#fff",textShadow:"1px 1px 4px rgba(0,0,0,.8)",fontWeight:"50"}}>Order from restaurants near you
					</h1>
					<div className={classes.text} style={{position:"relative",float:"left",left:"29%",display:"flex"}}>
						 <label className={classes.text} style={{color:"white",fontWeight:"700",fontSize:"17px",marginTop:"10px"}}> Select your location</label>
						<form  autoComplete="off">
						        <FormControl className={classes.formControl}>
						          <Select className="locationInput"
						          	 value={this.state.location}
						          	 onChange={event => this.handleChange(event)}
						          	 style={{fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",fontWeight:"500",color:"black"}}
						            input={<Input name="Location" classes={{inkbar:classes.inputInkbar}}   
						            					placeholder="Enter Delivery Location" id="locationInputId" />}
						          >	

          						   {locations.map(locationI => 
						          			<MenuItem className={classes.text} style={{fontWeight:"400"}} key={locationI} 
						          			   value={locationI}>
						          					{locationI}
						          			</MenuItem> )}  
						            
						          </Select>
						          <FormHelperText className={classes.text} style={{color:"white",fontSize:"small",fontWeight:"600"}}>
						          				If your location is unavailable please select your nearest city</FormHelperText>
						        </FormControl>
						</form>
					</div>

				<Grid item xs={2}>
				  	<Button raised  className={classes.text} onClick={this.changeLocation}
				  			style={{backgroundColor:"#fc8019",color:"white",fontSize:"12px",width:"80%",left:"245%"}}> 
				  			show restaurants
				  	</Button>
				</Grid>
				</Grid>
			</Grid>
									
    );
  }
}

export default withStyles(styles)(App)

