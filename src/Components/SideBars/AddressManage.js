import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import AddressForm from './../FormComponents/AddressForm';
import { withStyles } from 'material-ui';

const AddressManageMenu = reduxBurgerMenu(Menu, "AddressManage");

const MenuStyles = {
    bmMenuWrap: {
        width: '500px'
    }
};


class AddressManage extends Component {

    render() {
        const { classes } = this.props;

        return (
            <AddressManageMenu customBurgerIcon={false} styles={MenuStyles}>
                <h1 className={classes.h1}>Save delivery address</h1>
                <div>
                    <AddressForm></AddressForm>
                </div>
            </AddressManageMenu>
        );
    }
}

const styles = {
    h1: {
        marginTop: "0px",
        color: "black",
        fontSize: "1rem"
    }
}

export default withStyles(styles)(AddressManage);