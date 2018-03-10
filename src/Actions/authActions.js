import authTypes from "./authTypes";
import config from "./../Config/config.json";

const authLogin = (data) => {
    return {
        type: authTypes.AUTH_LOGIN,
        payload: {
            authLogin: true,
            authData: data
        }
    }
};

const authPageSet = (data) => {
    return {
        type: authTypes.AUTH_PAGESET,
        payload: {
            page: data
        }
    }
};

const authLogout = () => {
    return {
        type: authTypes.AUTH_LOGOUT
    }
}

export { authLogin, authLogout, authPageSet };