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

                let Items = responce.body[0];
                let MenuItems = responce.body[1];

                Items = Items.map((singledata) => {
                    singledata.imageCover = config.url.downloadfile + singledata.imageCover;
                    return singledata;
                });

                responce.body = { Items, MenuItems };

                return responce;
            }
        },
        fetch: {
            method: 'POST',
            url: config.url.data,
            headers: () => (authHelper.getHeader(false)),
            transformResponse: (responce) => {
                try {
                    responce.body = responce.body[0];
                    responce.body.imageCover = config.url.downloadfile + responce.body.imageCover;
                } catch (e) {
                    responce.body = {};
                }
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
                    "type": "bulk",
                    "args": [
                        {
                            "type": "select",
                            "args": {
                                "table": "restaurantsgrouped",
                                "columns": [
                                    "*"
                                ]
                            }
                        },
                        {
                            "type": "select",
                            "args": {
                                "table": "menuitems",
                                "columns": [
                                    "*"
                                ]
                            }
                        }
                    ]
                }
            )
        );
    }
};

const getRestaurant = (type, data) => {
    console.log(actions);
    return (dispatch) => {
        if (type === "name")
            dispatch(
                actions.fetchRestaurants(
                    {
                        "type": "select",
                        "args": {
                            "table": "restaurants",
                            "columns": [
                                "*"
                            ],
                            "where": {
                                "name": {
                                    "$eq": data
                                }
                            }
                        }
                    }
                )
            );
        if (type === "id")
            dispatch(
                actions.fetchRestaurantss(
                    {
                        "type": "select",
                        "args": {
                            "table": "restaurants",
                            "columns": [
                                "*"
                            ],
                            "where": {
                                "rid": {
                                    "$eq": data
                                }
                            }
                        }
                    }
                )
            );
    }
};

export { rootReducer, getRestaurants, getRestaurant };