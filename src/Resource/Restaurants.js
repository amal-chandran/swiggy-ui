import { createResource } from "redux-rest-resource";
import config from "./../Config/config.json";
import * as authHelper from "./../Helper/authHelper";

const { actions, rootReducer, types } = createResource({
    name: "restaurants",
    actions: {
        get: {
            method: 'POST',
            url: config.url.data,
            headers: () => (authHelper.getHeader(false)),
            transformResponse: (responce) => {
                responce.body = responce.body.map((singledata) => {
                    singledata.imageCover = config.url.downloadfile + singledata.imageCover;
                    return singledata;
                });
                // console.log(responce);
                return responce;
            }
        }
    }
});

const getRestaurants = (location) => {
    return (dispatch) => {
        dispatch(
            actions.getRestaurants(
                {
                    "type": "select",
                    "args": {
                        "table": "restaurants",
                        "columns": [
                            "*"
                        ]
                    }
                }
            )
        );
    }
};

export { rootReducer, getRestaurants };