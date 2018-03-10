import { createResource } from "redux-rest-resource";
import config from "./../Config/config.json";
// import URLSearchParams from "url-search-params";
import * as authHelper from "./../Helper/authHelper";
import { authActions } from "./../Actions";

const { actions, rootReducer, types } = createResource({
    name: "auth",
    actions: {
        get: {
            method: 'POST',
            url: config.url.login,
            headers: authHelper.getHeader(true)
        },
        signup: {
            method: 'POST',
            url: config.url.signup
        },
        logout: {
            method: 'POST',
            url: config.url.logout,
            headers: authHelper.getHeader(false)
        }
    }
});

const loginAuth = (data) => {
    return (dispatch) => {
        let body = {
            "provider": "username",
            data
        };
        dispatch(
            actions.getAuth(JSON.stringify(body))
        );
    }
};

const logoutAuth = (data) => {
    return (dispatch) => {
        if (authHelper.getAuthTocken() !== null) {
            const headers = authHelper.getHeader(false);
            dispatch(
                actions.logoutAuth(JSON.stringify({}, {
                    headers, credentials: 'include'
                }))
            );
            localStorage.setItem("authData", null);
            dispatch(authActions.authLogout());
        }
    }
};

const signupAuth = (data) => {
    return (dispatch) => {
        let body = {
            "provider": "username",
            data
        };
        dispatch(
            actions.signupAuth(JSON.stringify(body))
        );
    }
};

export { rootReducer, loginAuth, signupAuth, logoutAuth, actions };