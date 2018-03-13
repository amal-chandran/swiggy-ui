import { createResource } from "redux-rest-resource";
import config from "./../Config/config.json";
import * as authHelper from "./../Helper/authHelper";

const { actions, rootReducer, types } = createResource({
    name: "location",
    actions: {
        get: {
            method: 'POST',
            url: config.url.data,
            headers: () => (authHelper.getHeader(false))
        }
    }
});

const getLocations = () => {
    return (dispatch) => {
        dispatch(
            actions.getLocation(
                {
                    "type": "select",
                    "args": {
                        "table": "location",
                        "columns": [
                            "*"
                        ]
                    }
                }
            )
        );
    }
};

export { rootReducer, getLocations };