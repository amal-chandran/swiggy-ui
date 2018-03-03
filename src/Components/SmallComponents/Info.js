import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import 'font-awesome/css/font-awesome.min.css'

const styles = theme => ({
  root: {
    width: 'minWidth',
    maxWidth: '100%',
    paddingTop:'1em',

    marginLeft:'2em',
    listStyleType:'disc',
    backgroundColor: theme.palette.background.paper,
    display:'flex',
  },
  list:{
  },
  text:{
    color:'#6E6E6E',
    
    fontSize:'13px',fontWeight:'400',opacity:'.8',marginTop:'em',
    padding:'12px',
  },
  icon:{
    color:'white',
    backgroundColor:'#6E6E6E',
    padding:'0.1em 0.3em',
    border:'1px solid #6E6E6E',
    borderRadius:'4px',
    '&:hover':{
        backgroundColor:'black',
        border:'1px solid black',
    },
  }
});
const swiggy='https://www.swiggy.com/';
const info=[
  {
    string:'About us',
    link:swiggy+'about',
  },
  {string:'Team',link:swiggy+'team'},
  {string:'Careers',link:swiggy+'careers'},
  {string:'Help & Support',link:swiggy+'support'},
  {string:'Terms & Conditions',link:swiggy+'terms-and-conditions'},
  {string:'Refunds & Cancellation Policy',link:swiggy+'refund-policy'},
  {string:'Privacy Policy',link:swiggy+'privacy-policy'},
  {string:'Offer Terms',link:swiggy+'offer-terms'},
  {string:'Swiggy Blog',link:'blog.swiggy.com'},
  {string:'Partner With Us',link:'https://goo.gl/forms/juGUFJwtF5vQkp8w2'},
  {string:'Ride With Us',link:'https://goo.gl/WVbCMr'},
  {string:'Bug Bounty',link:swiggy+'bug-bounty'},
  
];
let i=0;
function Info(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {info.map(infoI=>
        <div className={classes.list} key={i++}>
        <a href={infoI.link} className={classes.text}>
            {infoI.string}
        </a>&bull;
      </div>
        )}
      </div>
  );
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);