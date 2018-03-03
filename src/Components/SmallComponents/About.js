import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import 'font-awesome/css/font-awesome.min.css'

const styles = theme => ({
  root: {
    width: 'inherit',
    maxWidth: '100%',
    paddingTop: '1em',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
    '&::selection': {
      "color": "#f5861f",
      "background": "#f5f5f5",
    },
    fontSize: '13px', fontWeight: '400', opacity: '.8', marginTop: 'em',
    padding: '12px',
  },
  iconFb: {
    color: 'white',
    backgroundColor: '#6E6E6E',
    padding: '0.1em 0.35em',
    border: '1px solid #6E6E6E',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#365899',
      border: 'none',
      transform: "scale(1.5)",
    },
  },
  iconPin: {
    color: 'white',
    backgroundColor: '#6E6E6E',
    padding: '0.1em 0.35em',
    border: '1px solid #6E6E6E',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#C92228',
      border: 'none',
      transform: "scale(1.5)",
    },
  },
  iconInsta: {
    color: 'white',
    backgroundColor: '#6E6E6E',
    padding: '0.1em 0.35em',
    border: '1px solid #6E6E6E',
    borderRadius: '4px',
    '&:hover': {
      background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
      border: 'none',
      transform: "scale(1.5)",
    },
  },
  iconTwitter: {
    color: 'white',
    backgroundColor: '#6E6E6E',
    padding: '0.1em 0.35em',
    border: '1px solid #6E6E6E',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#2196f3',
      border: 'none',
      transform: "scale(1.5)",
    },
  },

});
const list = {
  display: 'inline-block',
  padding: '0.5em',
}
function About(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div style={list}>
        <a href="https://www.facebook.com/swiggy.in" className={classes.iconFb}>
          <i className="fa fa-facebook">
          </i>
        </a>
      </div>
      <div style={list} >
        <a href="http://pinterest.com/swiggyindia" className={classes.iconPin}>
          <i className="fa fa-pinterest-p">
          </i>
        </a>
      </div>
      <div style={list} >
        <a href="https://instagram.com/swiggyindia/" className={classes.iconInsta}>
          <i className="fa fa-instagram">
          </i>
        </a>
      </div>
      <div style={list} >
        <a href="https://twitter.com/swiggy_in" className={classes.iconTwitter}>
          <i className="fa fa-twitter"> </i>
        </a>
      </div>

    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);