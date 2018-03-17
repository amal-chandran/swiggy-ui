import localTypes from './localTypes';
import { push } from 'react-router-redux';

export const setLocation = (location) => {
    return {
        type: localTypes.SET_LOCATION,
        payload: {
            location
        }
    };
}

export const setPageTitle = (title) => {
    return {
        type: localTypes.SET_PAGETITLE,
        payload: {
            title
        }
    };
}

export const setAddress = (address) => {
    return {
        type: localTypes.SET_ADDRESS,
        payload: {
            address
        }
    };
}

export const setCheckOutStep = (step) => {
    return {
        type: localTypes.SET_CHECKOUTSTEP,
        payload: {
            step
        }
    };
}

export const CartItem = (Restaurant, Item) => {
    return {
        type: localTypes.CARTITEM_ITEM,
        payload: {
            Restaurant,
            Item
        }
    };
}
