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
