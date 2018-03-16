import React, { Component } from "react";

import { slide as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
const AddressManageMenu = reduxBurgerMenu(Menu, "AddressManage");

const MenuStyles = {
    bmMenuWrap: {
        width: '500px'
    }
};

export default class AddressManage extends Component {
    render() {
        return (
            <AddressManageMenu customBurgerIcon={false} styles={MenuStyles}>
                <div>

                </div>
            </AddressManageMenu>
        );
    }
}