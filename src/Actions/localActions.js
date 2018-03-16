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

export const CartItem = (Restaurant, Item) => {
    return {
        type: localTypes.CARTITEM_ITEM,
        payload: {
            Restaurant,
            Item
        }
    };
}
