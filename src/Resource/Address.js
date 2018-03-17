import { createResource } from "redux-rest-resource";
import config from "./../Config/config.json";
import * as authHelper from "./../Helper/authHelper";

const { actions, rootReducer, types } = createResource({
    name: "address",
    actions: {
        get: {
            method: 'POST',
            url: config.url.data,
            headers: () => (authHelper.getHeader(false))
        },
        fetch: {
            method: 'POST',
            url: config.url.data,
            headers: () => (authHelper.getHeader(false)),
            transformResponse: (responce) => {
                responce.body = responce.body.map((SingleData) => {
                    SingleData.addresstype = SingleData.addresstype.charAt(0).toUpperCase() + SingleData.addresstype.substr(1);
                    return SingleData;
                });
                return responce;
            }
        },
        add: {
            method: 'POST',
            url: config.url.data,
            headers: () => (authHelper.getHeader(false))
        }
    }
});

const getAddress = (addressid) => {
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
                            "addressid": {
                                "$eq": addressid
                            }
                        }
                    }
                }
            )
        );
    }
};

const getAddressList = (data) => {
    console.log(actions);
    return (dispatch) => {
        dispatch(
            actions.fetchAddress(
                {
                    "type": "select",
                    "args": {
                        "table": "address",
                        "columns": [
                            "*"
                        ],
                        "where": {
                            "uid": {
                                "$eq": data
                            }
                        }
                    }
                }
            )
        );
    }
};

const addAddress = (data) => {
    return (dispatch) => {
        dispatch(
            actions.addAddress(
                {
                    "type": "insert",
                    "args": {
                        "table": "address",
                        "objects": [
                            data
                        ]
                    }
                }
            )
        );
    }
};

export { rootReducer, getAddress, getAddressList, addAddress };