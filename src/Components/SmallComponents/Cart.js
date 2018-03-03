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

class Cart extends Component{
	constructor(props){
		super(props);
		this.state={
				open:props.open,
			};
			
	}
	
	render(){
		const classes=this.props.classes;
		return(
						    <Dialog
						          open={this.props.open}
						          onClose={this.props.handleClose}
						          style={{height:"12em",marginTop:"13em"}}
						          
						          aria-labelledby="form-dialog-title"
						        >
						          <DialogTitle id="form-dialog-title" className={classes.title}>
						          		Login to your account
						          		<IconButton className={classes.button} aria-label="close" 
						          		onClick={this.props.handleClose}>
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
				
			);
		}
}
export default withStyles(styles)(Cart)