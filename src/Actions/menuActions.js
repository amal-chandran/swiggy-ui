import menuTypes from './menuTypes';

export const setActive = (id) => {
    return {
        type: menuTypes.SET_MENU_ACTIVE,
        payload: {
            ActiveId: id
        }
    };
}