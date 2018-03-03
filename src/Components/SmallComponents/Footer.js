import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import FlashOn from 'material-ui-icons/FlashOn';
import RoomService from 'material-ui-icons/RoomService';
import Payment from 'material-ui-icons/Payment';

import 'font-awesome/css/font-awesome.min.css'

const styles = theme => ({
  root: {
    width: 'inherit',
    maxWidth: '100%',
    paddingTop:'1em',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: theme.palette.background.paper,
    display:'flex',
  },
  avatar:{
    width:60,
    height:60,
    left:'1em',
    backgroundColor:'#fff',
    color:'#6E6E6E',
    border:'1px solid #6E6E6E',
    borderRadius:'50px',
  },
  list:{
    float: 'left',
    margin:' 0 15px',

    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
    '&::selection':{
      "color":"#f5861f",
      "background":"#f5f5f5",
    },
    fontSize:'13px',fontWeight:'400',opacity:'.8',
    
    right:'1.2em',
  },
});

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.list}>
        <Avatar className={classes.avatar}>
          <FlashOn/>
        </Avatar>
        <h3 className={classes.text}>Lightning Fast Delivery</h3>
      </div>
      <div className={classes.list} >
        <Avatar className={classes.avatar}>
          <RoomService />
        </Avatar>
        <h3 className={classes.text}>No Minimum Order</h3>
      </div>
      <div className={classes.list} >
        <Avatar className={classes.avatar}>
          <Payment />
          <i className="fa fa-money"/>
        </Avatar>
        <h3 className={classes.text}>Pay via Card/Cash</h3>
      </div>

    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);