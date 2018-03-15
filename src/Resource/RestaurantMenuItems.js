import { createResource } from "redux-rest-resource";
import config from "./../Config/config.json";
import * as authHelper from "./../Helper/authHelper";

const { actions, rootReducer, types } = createResource({
    name: "restaurantmenuitems",
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
        clearItems: { isPure: true, reduce: (state, action) => ({ ...state, items: [] }) }
    }
});

const getRestaurantMenuItems = (restaurant) => {
    return (dispatch) => {
        dispatch(actions.clearItemsRestaurantmenuitems({ restaurant }));
    }
};

const getRestaurantMenuItemsAfter = (restaurant) => {
    return (dispatch) => {
        // console.log(actions.clearItemsRestaurantmenuitems());
        dispatch(
            actions.getRestaurantmenuitems(
                {
                    "type": "bulk",
                    "args": [
                        {
                            "type": "select",
                            "args": {
                                "table": "restaurantsmenugrouped",
                                "columns": [
                                    "*"
                                ],
                                "where": {
                                    "restaurantname": {
                                        "$eq": restaurant
                                    }
                                }
                            }
                        },
                        {
                            "type": "select",
                            "args": {
                                "table": "menuitemsrestaurantmenu",
                                "columns": [
                                    "*"
                                ],
                                "where": {
                                    "restaurant": {
                                        "$eq": restaurant
                                    }
                                }
                            }
                        }
                    ]
                }
            )
        );
    }
};

export { rootReducer, getRestaurantMenuItems, getRestaurantMenuItemsAfter };