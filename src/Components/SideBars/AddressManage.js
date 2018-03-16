import React, { Component } from "react";
import LocationPicker from 'react-location-picker';
import { slide as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
const AddressManageMenu = reduxBurgerMenu(Menu, "AddressManage");

const MenuStyles = {
    bmMenuWrap: {
        width: '500px'
    }
};
const defaultPosition = {
    lat: 27.9878,
    lng: 86.9250
};

export default class AddressManage extends Component {
    state = {
        address: "Kala Pattar Ascent Trail, Khumjung 56000, Nepal"
    }
    handleLocationChange = ({ position, address }) => {

        // Set new location
        this.setState({ position, address });
    }
    render() {
        return (
            <AddressManageMenu customBurgerIcon={false} styles={MenuStyles}>
                <div>
                    <h1>{this.state.address}</h1>
                    <LocationPicker
                        containerElement={<div style={{ height: '100%' }} />}
                        mapElement={<div style={{ height: '400px' }} />}
                        defaultPosition={defaultPosition}
                        onChange={this.handleLocationChange}
                    />
                </div>
            </AddressManageMenu>
        );
    }
}