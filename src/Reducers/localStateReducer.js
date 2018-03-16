import { localTypes } from './../Actions';
import isEmpty from 'lodash/isEmpty';

const initalState = {
    location: "",
    CartRestaurant: {},
    CartItems: []
};

export default (state = initalState, action) => {
    switch (action.type) {
        case localTypes.SET_LOCATION:
            return { ...state, location: action.payload.location };
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