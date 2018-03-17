import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import 'react-select/dist/react-select.css';
import 'muicss/dist/css/mui-noglobals.min.css';
import 'react-web-tabs/dist/react-web-tabs.css';
import './App.css';

// import Showrestaurants from './Components/Showrestaurants';
// import Showmenus from './Components/Showmenus';
// import Welcome from './Components/Welcome';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';
import { PersistGate } from 'redux-persist/integration/react'
import { create } from 'jss';
import jssExtend from 'jss-extend';
import jssCamelCase from "jss-camel-case";
import jssNested from "jss-nested";
import jssCompose from "jss-compose";
import JssProvider from 'react-jss/lib/JssProvider';

import { store } from "./Helper";
import { Provider, connect } from "react-redux";
import { PrivateRoute, Notifi } from "./Components";
import { LoginSignup, LocationManage, AddressManage, Router } from "./Components";


// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, jssExtend(), jssNested(), jssCamelCase(), jssCompose()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();
class App extends Component {
    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <Provider store={store.store}>
                    <PersistGate loading={null} persistor={store.persistor}>
                        <AddressManage />
                        <LoginSignup />
                        <LocationManage />
                        <Notifi />
                        <Router />
                    </PersistGate>
                </Provider >
            </JssProvider>

        );
    }
}

export default App;
