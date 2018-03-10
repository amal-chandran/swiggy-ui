import localTypes from './localTypes';

export const setLoction = (location) => {
    return {
        type: localTypes.SET_LOCATION,
        payload: {
            location
        }
    };
}