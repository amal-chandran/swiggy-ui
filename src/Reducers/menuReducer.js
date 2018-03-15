import { menuTypes } from './../Actions';
const initState = {
    RestaurantsListMenu: 0
};

export default (state = initState, action) => {
    switch (action.type) {
        case menuTypes.SET_MENU_ACTIVE:
            return { ...state, RestaurantsListMenu: action.payload.ActiveId }
            break;
        default:
            return state;
            break;
    }
}