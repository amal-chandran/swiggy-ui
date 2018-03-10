import notifiTypes from "./notifiTypes";
let NotifiID = 0;

const addNotifi = (message, type) => {
    return {
        type: notifiTypes.NOTIFI_ADD,
        payload: {
            NotifiID,
            message,
            type
        }
    };
};

const removeNotifi = (NotifiID) => {
    return {
        type: notifiTypes.NOTIFI_REMOVE,
        payload: {
            NotifiID
        }
    };
};

export { addNotifi, removeNotifi };