import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { action as toggleMenu } from 'redux-burger-menu';

import history from "./history";
import { authActions, notifiActions } from "./../Actions";
import { authReducer, notifiReducer, localStateReducer } from "./../Reducers";
import { Auth } from "./../Resource";

const customMiddleWare = store => next => action => {

    if (action.type === "@@resource/AUTH/GET" && action.status === "resolved") {
        localStorage.setItem("authData", JSON.stringify(action.body));
        store.dispatch(authActions.authLogin(action.body));
        // store.dispatch(push("/home"));
        store.dispatch(toggleMenu(false, "LoginSignup"));
    } else if (action.type === "@@resource/AUTH/SIGNUP" && action.status === "resolved") {
        store.dispatch(authActions.authPageSet("login"));
    }

    if (action.type.includes("LOCAL/")) {
        store.dispatch(toggleMenu(false, "LocationManage"));
        store.dispatch(push("/" + action.payload.location));
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

const store = createStore(
    combineReducers({
        auth: Auth.rootReducer,
        userAuth: authReducer,
        notifi: notifiReducer,
        router: routerReducer,
        burgerMenu,
        localState: localStateReducerPersist
    }),
    applyMiddleware(
        thunk, logger,
        customMiddleWare,
        middleware)
);

const persistor = persistStore(store);

export default { store, persistor };