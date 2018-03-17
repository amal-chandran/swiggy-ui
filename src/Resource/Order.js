import { createResource } from "redux-rest-resource";
import config from "./../Config/config.json";
import * as authHelper from "./../Helper/authHelper";

const { actions, rootReducer, types } = createResource({
    name: "order",
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

const getOrder = (orderid) => {
    return (dispatch) => {
        dispatch(
            actions.getOrder(
                {
                    "type": "select",
                    "args": {
                        "table": "orders",
                        "columns": [
                            "*"
                        ],
                        "where": {
                            "orderid": {
                                "$eq": orderid
                            }
                        }
                    }
                }
            )
        );
    }
};

const getOrderList = (data) => {
    console.log(actions);
    return (dispatch) => {
        dispatch(
            actions.fetchOrders(
                {
                    "type": "select",
                    "args": {
                        "table": "orders",
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

const addOrder = (data) => {
    const { CartItems, ...CommonData } = data;
    const Orders = CartItems.map((SingleData) => {
        return { itemid: SingleData.itemid, itemcount: SingleData.ItemCount, ...CommonData };
    })
    console.log(Orders);
    return (dispatch) => {
        dispatch(
            actions.addOrder(
                {
                    "type": "insert",
                    "args": {
                        "table": "orders",
                        "objects": Orders
                    }
                }
            )
        );
    }
};

export { rootReducer, getOrder, getOrderList, addOrder };