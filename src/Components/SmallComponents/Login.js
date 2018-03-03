import React, { Component } from 'react';
import '../../App.css';
import Grid from 'material-ui/Grid'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Logo from '../../Resources/SwiggyLogo.png'
import Button from 'material-ui/Button'
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui-icons/Close';
const styles= theme=>({
	
	alert:{
		color:'#dd4b39',
		backgroundColor:'#FFCDD2',
	},
	logBtn:{
		fontSize:"12px",
		textTransform:"capitalize",
		borderRadius:"3px",border:"1px solid black",width:"2em",
		fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",

	},
	signinBtn:{
		fontSize:'12px',
		textTransform:'capitalize',
		'&:hover':{
			color:'#f5861f',
			borderBottom:'3px solid #f5861f',	
		},
	},
	button: {
   	    margin: '8px 0px 0px 4px',
   	    marginLeft:'4em',
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
  	},
	checkedCustom: {
    	color: '#f5861f',
  	},
	signupBtn:{
		color:'#f5861f',
		backgroundColor:'transparent',
		fontSize:'15px',
		border:' 1px solid #f5861f',
		borderRadius:'3px',
		left:'5.5em',
		textTransform:'capitalize',
		width:'46%',
		fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
		'&:hover':{
			backgroundColor:'#f5861f',
			color:'#fff',
		},
	},
	textFieldRoot: {
	    padding: 0,
	    'label + &': {
	      marginTop: theme.spacing.unit * 3,

	    },
	  },
	  textFieldInput: {
	    borderRadius: 4,
	    backgroundColor: theme.palette.common.white,
	    border: '1px solid #ced4da',
	    fontSize: 16,
	    padding: '10px 12px',
	    width: '250px',
	    fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
	    transition: theme.transitions.create(['border-color', 'box-shadow']),
	    '&:focus': {
	      borderColor: '#80bdff',
	      boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
	      backgroundColor:"",
	    },
	    
	  },
	  textFieldFormLabel: {
	    fontSize: 18,
	    paddingTop:"10px",
	      color:"black",
	    
	    fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",

	  },
	
});

class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			signInuserName:props.Name?props.Name:'',
			loginModalOpen:false,
			userGrid:props.Name&&props.hire?"block":"none",
			buttonType:props.Name?"Logout":"Login",
			signupModalOpen:false,
			showloading:false,
			alert:false,
			checked:false,
			hireBlock:props.hire?true:false,
			mobNo:'',
			password:'',
			username:'',
			email:'',
			};
			this.handleCheckChange = this.handleCheckChange.bind(this);
			this.onValidInputMobno = this.onValidInputMobno.bind(this);
			this.onInputValue = this.onInputValue.bind(this);
			
	}
	handleClickOpen = () => {
   	if (this.state.buttonType === 'Login'||this.state.signInuserName=== '')
    	this.setState({ loginModalOpen: true });
    else if(this.state.hireBlock){
    	this.setState({ loading:true});
    	setTimeout(()=> this.setState({ buttonType: 'Login',userGrid:'none', loading:false,signInuserName:''}),2000);
    }
  };

	handleCheckChange(event){
		this.setState({
			checked:event.target.checked,
		});
	};
	onValidInputMobno(e){
		const onlyNums = e.target.value.replace(/[^0-9]/g, '');
      if (onlyNums.length <= 10) {
        this.setState({ mobNo:onlyNums });
      }
       
	};
	onInputValue(e,name){
        this.setState({ [name]:e.target.value });
	};
   handleShowClick = () => {
   		if(this.state.location !== ""){
	   		this.setState({ showloading:true});
	    	setTimeout(()=> this.setState({showloading:false,redirect:true}),2000);
	    }
  };
  handleClose = () => {
    this.setState({ loginModalOpen: false,mobNo:'',password:'' });
  };
   handleSignupClickOpen = () => {
   	this.handleClose();
    this.setState({signupModalOpen: true,});	
  };
  handleSignupCloseBtn = () => {
    this.setState({ signupModalOpen: false,value:'',loginModalOpen:true,mobNo:'',password:'',email:'',username:''});
  };
  
  handleSignupClose = () => {
    this.setState({ signupModalOpen: false,value:''});
  };
  
	
	render(){
		const classes=this.props.classes;
		return(
				<Grid container className="navBar" style={{height:"2em",marginTop:'0'}}>
							<Grid item xs={2} />
							<Grid item xs={1} style={{paddingTop:'0'}}>
							  	<a href="/">
							  		<img src={Logo} alt="logo" style={{transformOrigin: this.state.hireBlock?"0 0":'inherit',
							  			transform:this.state.hireBlock?"scale(1.2,1.5)":'scale(1,1.8)',backgroundSize:"25%",height:this.state.hireBlock?'4em':"3em",backgroundRepeat:"no-repeat",width:"100%"}}/>
							  	</a>
							</Grid>
							<Grid item xs={4}/>
							<Grid item xs={1} style={{display:this.state.hireBlock?'block':'none',marginTop:'1.8em'}}>
							  	<Typography variant="caption"    style={{marginTop:"0.9em",cursor:"pointer",color:"#f5861f",aliginItems:"center"}}>
							  			 We are Hiring
							  	</Typography>
							</Grid>
							<Grid item xs={1} style={{display:this.state.hireBlock?'none':'block',marginTop:'0.5em'}}>
							  	<Typography variant="caption"     style={{marginTop:"0.9em",cursor:"pointer",color:"#f5861f",aliginItems:"center"}}>
							  			 <a href="https:www.swiggy.com/support">
							  			 	Help & Support
							  			 </a>
							  	</Typography>
							</Grid>
							<Grid item xs={1} style={{marginTop:this.state.hireBlock?'1.8em':'0.5em'}} >
							  	<Typography variant="caption"   style={{marginTop:"0.8em",color:"#1a1a1a"}}>
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
							<Grid item xs={1} style={{display:this.state.userGrid,marginTop:'1.8em'}}>
							 	<Typography variant="caption"    style={{textAlign:'center',textTransform:"capitalize",marginTop:"0.9em",cursor:"pointer",alignItems:"center"}}>
							  			<a href="/account"> {this.state.signInuserName}</a>
							  	</Typography>
							</Grid>
							<Grid item xs={this.state.hireBlock?1:2} style={{marginLeft:'1.5em',marginTop:this.state.hireBlock? '1.8em':'0'}}>	
							  	<Button className={classes.logBtn} style={{display:this.state.hireBlock?'block':'none'}}
							  	      onClick={this.handleClickOpen} >
							  	      	{this.state.loading?<i style= {{fontSize:'14px'}} className="fa fa-spinner fa-spin" aria-hidden="true"></i>:this.state.buttonType}
						        </Button>
						    	<Button className={classes.signinBtn} style={{marginTop:'0.3em',height:'1.8em',width:'100%',display:this.state.hireBlock?'none':'block'}}
							  	       onClick={this.handleClickOpen}>
							  	      	{ this.state.signInuserName?'Welcome, '+this.state.signInuserName:'SIGN IN / REGISTER'}
						        </Button>
						    <Dialog
						          open={this.state.loginModalOpen}
						          onClose={this.handleClose}
						          style={{height:"12em",marginTop:"13em"}}
						          
						          aria-labelledby="form-dialog-title"
						        >
						          <DialogTitle id="form-dialog-title" className={classes.title}>
						          		Login to your account
						          		<IconButton className={classes.button} aria-label="close" onClick={this.handleClose}>
									        <Close />
									    </IconButton>
						          </DialogTitle>
						          <DialogContent>
						           <TextField
						                    required
									        label="Mobile number(+91-)"
									        InputProps={{
									          disableUnderline: true,
									          classes: {
									            root: classes.textFieldRoot,
									            input: classes.textFieldInput,
									          },
									        }}
									        value={this.state.mobNo}
									        onChange={this.onValidInputMobno}
									        InputLabelProps={{
									          shrink: true,
									          className: classes.textFieldFormLabel,
									        }}
									/>
									<br/>
						            <TextField
						            		required
									        label="Password"
									        InputProps={{
									          disableUnderline: true,
									          classes: {
									            root: classes.textFieldRoot,
									            input: classes.textFieldInput,
									          },
									        }}
									         onChange={event=>this.onInputValue(event,'password')}
									       value={this.state.password}
									        variant="password"
									        InputLabelProps={{
									          shrink: true,
									          className: classes.textFieldFormLabel,
									        }}
									/>

						          </DialogContent>
						          <DialogActions>	
							          <Button variant="raised"   
										  	style={{backgroundColor:"#69bb27",color:"white",fontSize:"12px",width:'23em',right:'7.2em'}}>
										  		Login
									  </Button>
						          </DialogActions>
						          <DialogContent  style={{marginTop:"0.7em"}}>
									  <a href="/forgot" style={{marginLeft:"3.5em",color: "#f5861f",right:"1.5em",textDecoration: "underline"}}> Forgot your password ?</a>
						          </DialogContent>
						          <DialogContent className={classes.dialogFooter} style={{marginTop:"0.7em",backgroundColor:"#fffaf1",borderTop: "1px solid #e5e5e5"}}>
								  		<h4>
								  			<strong> Not a member yet?</strong>
								  		</h4>
								  		<h6 style={{maxWidth:'250px',fontWeight:'550',lineHeight:'17px',color:'#585858',marginLeft:'1em'}}>
								  			Join the <b>Swiggy</b> family and wait no more,when you're hungry
								  		</h6>
								  		<Button  className={classes.signupBtn}
								  			onClick={this.handleSignupClickOpen}>
										  		Signup now! 
									  </Button>
								</DialogContent>
							</Dialog>
							 <Dialog
						          open={this.state.signupModalOpen}
						          onClose={this.handleSignupClose}
						          style={{height:"40em",}}
						          
						          aria-labelledby="form-dialog-title"
						        >
						          <DialogTitle id="form-dialog-title"  className={classes.title}>
						          		Register with Swiggy
						          		<IconButton className={classes.button} aria-label="close" onClick={this.handleSignupClose}>
									        <Close />
									    </IconButton>
						          </DialogTitle>
						          <DialogContent>
						          <div className={classes.alert} style={{display:this.state.alert?'block':'none'}}>
						          		Mobile
						          </div>
						          <TextField
						                    required
									        label="Name"
									        error
									        InputProps={{
									          disableUnderline: true,
									          classes: {
									            root: classes.textFieldRoot,
									            input: classes.textFieldInput,
									          },
									        }}
									         onChange={event=>this.onInputValue(event,'username')}
									       value={this.state.username}
									        InputLabelProps={{
									          shrink: true,
									          className: classes.textFieldFormLabel,
									        }}
									/>
									<br/>
						            <TextField
						            		required
									        label="Email"
									        variant="email"
									        InputProps={{
									          disableUnderline: true,
									          classes: {
									            root: classes.textFieldRoot,
									            input: classes.textFieldInput,
									          },
									        }}
											onChange={event=>this.onInputValue(event,'email')}
									       value={this.state.email}
									        InputLabelProps={{
									          shrink: true,
									          className: classes.textFieldFormLabel,
									        }}
									/>
									<br/>
						           <TextField
						                    required
									        label="Mobile number(+91-)"
									        InputProps={{
									          disableUnderline: true,
									          classes: {
									            root: classes.textFieldRoot,
									            input: classes.textFieldInput,
									          },
									        }}
									        value={this.state.mobNo}
									        onChange={this.onValidInputMobno}
									        InputLabelProps={{
									          shrink: true,
									          className: classes.textFieldFormLabel,
									        }}
									/>
									<br/>
						            <TextField
						            		required
									        label="Password"
									        InputProps={{
									          disableUnderline: true,
									          classes: {
									            root: classes.textFieldRoot,
									            input: classes.textFieldInput,
									          },
									        }}
									       onChange={event=>this.onInputValue(event,'password')}
									       value={this.state.password}

									        variant="password"
									        InputLabelProps={{
									          shrink: true,
									          className: classes.textFieldFormLabel,
									        }}
									/>

									<br/>
									<div style={{display:"flex"}}>
									<Checkbox style={{marginLeft:'1px'}}
							              checked={this.state.checked}
							              onChange={this.handleCheckChange}
							              value="checked"
							              classes={{checked: classes.checkedCustom,}}
		                			/>
							         <div style={{marginTop:"0.8em"}}> 
							            I accept the <a href="http://www.swiggy.com/terms-and-conditions" 
							            		style={{color: "#f5861f",textDecoration:'underline'}}> 
							            Terms & conditions</a>
							         </div>
							        </div>
						          </DialogContent>
						          <DialogActions style={{marginTop:'-1em'}}>	
							          <Button variant="raised"   
										  	style={{textTransform:'capitalize',backgroundColor:"#69bb27",color:"white",fontSize:"12px",width:'23em',right:'2.7em'}}>
										  		Register & Continue
									  </Button>
						          </DialogActions>
						          <DialogContent className={classes.dialogFooter} style={{marginTop:"0.7em",height:'9.2em',backgroundColor:"#fffaf1",borderTop: "1px solid #e5e5e5"}}>
								  		<h4>
								  			<strong> Already a member ?</strong>
								  		</h4>
										<Button  className={classes.signupBtn}
								  			onClick={this.handleSignupCloseBtn}>
										  		Login now! 
									  </Button>
								  </DialogContent>
					        </Dialog>
					        </Grid>
					</Grid>
			);
		}
}
export default withStyles(styles)(Login)