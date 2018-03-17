import { localTypes } from './../Actions';
import isEmpty from 'lodash/isEmpty';

const initalState = {
    location: "",
    CartRestaurant: {},
    CartItems: [],
    PageTitle: null,
    SelectedAddress: null,
    CheckOutStep: 0
};

export default (state = initalState, action) => {
    switch (action.type) {
        case localTypes.SET_LOCATION:
            return { ...state, location: action.payload.location };
            break;
        case localTypes.SET_PAGETITLE:
            return { ...state, PageTitle: action.payload.title };
            break;
        case localTypes.SET_ADDRESS:
            return { ...state, SelectedAddress: action.payload.address };
            break;
        case localTypes.SET_CHECKOUTSTEP:
            if ((state.SelectedAddress !== null && action.payload.step === 1) || action.payload.step === 0) {
                return { ...state, CheckOutStep: action.payload.step };
            } else {
                return state;
            }
            break;
        case localTypes.CARTITEM_ITEM:
            const ItemData = action.payload.Item;
            let isNew = true;

            let NewItems = state.CartItems.map((SingleItem) => {
                if (SingleItem.itemid === ItemData.itemid) {
                    SingleItem = ItemData;
                    isNew = false;
                }
                return SingleItem;
            });

            if (isNew) {
                NewItems.push(ItemData);
            }

            NewItems = NewItems.filter((SingleItem) => (SingleItem.ItemCount >= 1));
            if (isEmpty(NewItems)) {
                action.payload.Restaurant = {};
            }
            return {
                ...state,
                CartRestaurant: action.payload.Restaurant,
                CartItems: NewItems
            };
            break;
        default:
            return state;
            break;
    }
};