import { localTypes } from './../Actions';

const initalState = {
    location: ""
};

export default (state = initalState, action) => {
    switch (action.type) {
        case localTypes.SET_LOCATION:
            return { ...state, location: action.payload.location };
            break;
        default:
            return state;
            break;
    }
};