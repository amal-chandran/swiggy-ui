import React, { Component } from "react";
import SelectLocations from "./../SelectLocations";
import { slide as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
const LocationManageMenu = reduxBurgerMenu(Menu, "LocationManage");

const MenuStyles = {
    bmMenuWrap: {
        width: '500px'
    }
};

export default class LocationManage extends Component {
    render() {
        return (
            <LocationManageMenu customBurgerIcon={false} styles={MenuStyles}>
                <div>
                    <SelectLocations />
                </div>
            </LocationManageMenu>
        );
    }
}