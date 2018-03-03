import React, { Component } from 'react';
import Home from '../Resources/Home.webp'
import '../App.css';
import Footer from './SmallComponents/Footer'
import 'font-awesome/css/font-awesome.min.css'
import Grid from 'material-ui/Grid'
import {withStyles} from 'material-ui/styles'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText  } from 'material-ui/Form'
import About from './SmallComponents/About'
import Info from './SmallComponents/Info'
import Login from './SmallComponents/Login'
import {Redirect} from 'react-router-dom'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input';
const styles= theme=>({
	
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
	iconSelect:{
		top:'calc(50%-6px)',
	},
});
const locations=['Ahmedabad','Bangalore','Chennai','Delhi','Gurgaon','Hyderabad','Kolkata','Mumbai','Pune',];
class Welcome extends Component{
	constructor(props){
		super(props);
		this.state={
			redirect:false,
			signInuserName:props.Name,
			location:"",
			showloading:false,
			
		};
		this.handleChange = this.handleChange.bind(this);
			
	}
	handleChange(event){
		this.setState({
			location:event.target.value,
		});
	};
	
   handleShowClick = () => {
   		if(this.state.location !== ""){
	   		this.setState({ showloading:true});
	    	setTimeout(()=> this.setState({showloading:false,redirect:true}),2000);
	    }
  };

  render() {
	const classes=this.props.classes;
	if(this.state.redirect){
		return <Redirect push to={{
                pathname:"/show/"+this.state.location,
                state:{location:this.state.location}
            }}/>;
	}
    return (
      		<Grid container className="page" style={{height:"46em",backgroundSize:"cover",backgroundImage:`url(${Home})`,backgroundRepeat:"no-repeat"}}>
      			<Grid container>
      			<Grid item xs={12} style={{height:"8em"}}>
					<Login Name={this.state.signInuserName} hire={true}/>

				</Grid>
				<Grid item xs={12}  style={{marginBottom:"16em",height:"12em",padding:"0px"}}>
					<h1  style={{textAlign:"center",color:"#fff",textShadow:"1px 1px 4px rgba(0,0,0,.8)",fontWeight:"50"}}>Order from restaurants near you
					</h1>
					<div className={classes.text} style={{position:"relative",float:"left",left:"29%",display:"flex"}}>
						 <label className={classes.text} style={{color:"white",fontWeight:"600",fontSize:"19px",marginTop:"10px"}}> Select your location</label>
						<form  autoComplete="off">
						        <FormControl className={classes.formControl}>
						          <Select classes={{icon:classes.iconSelect}} 
						          	 value={this.state.location}
						          	 onChange={event => this.handleChange(event)}
						          	 style={{paddingBottom: '15px',background: '#fff',width: '350px',height: '32px',
    											border: '0',outline: '0',textOverflow:' ellipsis',borderRadius: '3px 0 0 3px',fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",fontWeight:"500",color:"black"}}
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
				  	<Button variant="raised"  className={classes.text} onClick={this.handleShowClick}
				  		style={{backgroundColor:"#fc8019",color:"white",fontSize:"12px",width:"80%",left:"245%"}}>
				  	 	{this.state.showloading ?<i className="fa fa-spinner fa-spin"></i>: "SHOW RESTAURANTS"}
				    </Button>
				</Grid>

				<Grid item xs={12} style={{marginTop:"10em",backgroundColor:"#fff",height:"22em",justifyContent:"center",aliginItems:"center"}}>
					<Grid container>
						<Grid item xs={12} style={{borderBottom:'1px solid #e0e0e0'}}>
							<Footer/>
						</Grid>
						<Grid item xs={12}>
							<About/>
						</Grid>

						<Grid item xs={12}>
							<Info/>
						</Grid>
						<Grid item xs={12} style={{textAlign:'center'}}>
							<span className={classes.text} style={{fontSize:'12px',color:'#fc8019'}}>
								&copy;2018 Swiggy
							</span>
						</Grid>
						
					</Grid>
				</Grid>
				</Grid>
				</Grid>
			</Grid>
									
    );
  }
}

export default withStyles(styles)(Welcome)

