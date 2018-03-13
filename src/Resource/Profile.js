import { createResource } from "redux-rest-resource";
import config from "./../Config/config.json";
import * as authHelper from "./../Helper/authHelper";

const { actions, rootReducer, types } = createResource({
    name: "profile",
    actions: {
        get: {
            method: 'POST',
            url: config.url.data,
            headers: () => (authHelper.getHeader(false))
        },
        signup: {
            method: 'POST',
            url: config.url.data,
            headers: () => (authHelper.getHeader(false))
        }
    }
});

const getProfile = (uid) => {
    return (dispatch) => {
        dispatch(
            actions.getProfile(
                {
                    "type": "select",
                    "args": {
                        "table": "profile",
                        "columns": [
                            "*"
                        ],
                        "where": {
                            "uid": {
                                "$eq": uid
                            }
                        }
                    }
                }
            )
        );
    }
};

const signUpProfile = (data) => {
    return (dispatch) => {
        const { name, mobile, uid } = data;
        dispatch(
            actions.signupProfile(
                {
                    "type": "insert",
                    "args": {
                        "table": "profile",
                        "objects": [
                            {
                                name, mobile, uid
                            }
                        ]
                    }
                }
            )
        );
    }
};

export { rootReducer, getProfile, signUpProfile };