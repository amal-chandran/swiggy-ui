import { authTypes } from "./../Actions";

const authState = {
    authLogin: false,
    authData: null,
    page: "login"
};

export default (state = authState, action) => {
    switch (action.type) {
        case authTypes.AUTH_LOGIN:
            return {
                ...state,
                authLogin: true,
                authData: action.payload.authData
            };
            break;
        case authTypes.AUTH_PAGESET:
            return {
                ...state,
                page: action.payload.page
            };
            break;
        case authTypes.AUTH_LOGOUT:
            return {
                ...state,
                authLogin: false,
                authData: null
            };
            break;
        default: return state; break;
    }
};