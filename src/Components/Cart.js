import React, { Component } from 'react';
import { withStyles } from 'material-ui';

import { CartEmpty } from './../Assets';

class Cart extends Component {
    static defaultProps = { type: "Normal" }

    render() {
        const { classes, type } = this.props;
        const containClass = type === "CheckOut" ? classes.CartContain : "";
        return (
            <div className={containClass}>
                <h1 style={{ color: " #7e808c" }}>Cart Empty</h1>
                <div className={classes.Cart}>

                </div>
                <div style={{ color: "#93959f" }}>
                    Good food is always cooking!
                    Go ahead, order some yummy items from the menu.
                 </div>
            </div>
        );
    }
}

const styles = theme => ({
    Cart: {
        background: "url(" + CartEmpty + ")",
        opacity: ".5",
        backgroundRepeat: "no-repeat",
        minHeight: "15em",
        backgroundSize: "contain"
    },
    CartContain: {
        padding: '26px',
        background: '#fff',
        marginTop: "2.4rem"
    }
});

export default withStyles(styles)(Cart)