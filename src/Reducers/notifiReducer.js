import { notifiTypes } from "./../Actions";
import { concat, remove } from "lodash";

const notifiState = { newData: {}, removeData: {} };

export default (state = notifiState, actions) => {
    switch (actions.type) {
        case notifiTypes.NOTIFI_ADD:
            return { ...state, newData: actions.payload }
            break;
        case notifiTypes.NOTIFI_REMOVE:
            return { ...state, removeData: actions.payload }
            break;
        default:
            return state;
            break;
    }
}