import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { action as toggleMenu } from 'redux-burger-menu';
import { createForms } from 'react-redux-form';

import history from "./history";
import { authActions, notifiActions } from "./../Actions";
import { authReducer, notifiReducer, localStateReducer, menuReducer } from "./../Reducers";
import { Auth, Profile, Location, Restaurants, RestaurantMenuItems } from "./../Resource";

const customMiddleWare = store => next => action => {

    if (action.type === "@@resource/AUTH/GET" && action.status === "resolved") {
        localStorage.setItem("authData", JSON.stringify(action.body));
        store.dispatch(authActions.authLogin(action.body));
        // store.dispatch(push("/home"));
        const { hasura_id } = action.body;

        store.dispatch(Profile.getProfile(hasura_id));
        store.dispatch(toggleMenu(false, "LoginSignup"));
    } else if (action.type === "@@resource/AUTH/SIGNUP" && action.status === "resolved") {
        localStorage.setItem("authData", JSON.stringify(action.body));

        const { hasura_id } = action.body;
        const { name, mobile } = store.getState().authForm;
        let profileData = { name, mobile, uid: hasura_id };

        store.dispatch(Profile.signUpProfile(profileData));
        store.dispatch(authActions.authPageSet("login"));
    }

    if (action.type.includes("LOCAL/")) {
        store.dispatch(toggleMenu(false, "LocationManage"));
        store.dispatch(push("/" + action.payload.location));
    }

    if (action.type === "@@resource/RESTAURANTMENUITEMS/CLEAR_ITEMS" && action.status === "resolved") {
        store.dispatch(RestaurantMenuItems.getRestaurantMenuItemsAfter(action.context.restaurant));
    }

    if (action.type.includes("@@resource/AUTH/") && action.status === "rejected" && "body" in action) {
        if ("message" in action.body) {
            store.dispatch(notifiActions.addNotifi(action.body.message, "error"));
        }
    } else if (action.status === "rejected") {
        store.dispatch(notifiActions.addNotifi("Could not reslove", "error"));
    }

    next(action);
}


const middleware = routerMiddleware(history);

const logger = createLogger({ predicate: 'development' });

const localStateReducerConfig = {
    key: 'localState',
    storage,
}

const localStateReducerPersist = persistReducer(localStateReducerConfig, localStateReducer);

const authFormInitState = {
    name: "",
    mobile: "",
    username: "",
    password: ""
};

const store = createStore(
    combineReducers({
        auth: Auth.rootReducer,
        profile: Profile.rootReducer,
        location: Location.rootReducer,
        restaurants: Restaurants.rootReducer,
        restaurantmenuitems: RestaurantMenuItems.rootReducer,
        userAuth: authReducer,
        notifi: notifiReducer,
        router: routerReducer,
        menu: menuReducer,
        burgerMenu,
        localState: localStateReducerPersist,
        ...createForms({
            authForm: authFormInitState
        })
    }),
    applyMiddleware(
        thunk, logger,
        customMiddleWare,
        middleware)
);

const persistor = persistStore(store);

export default { store, persistor };