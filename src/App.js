import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import 'react-select/dist/react-select.css';

// import Showrestaurants from './Components/Showrestaurants';
// import Showmenus from './Components/Showmenus';
// import Welcome from './Components/Welcome';
import { Home, Restaurants, RestaurantMenu, Checkout } from "./Views";
import { HashRouter, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import { create } from 'jss';
import jssExtend from 'jss-extend';
import jssCamelCase from "jss-camel-case";
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';

import { store, history } from "./Helper";
import { Provider, connect } from "react-redux";
import { PrivateRoute, Notifi } from "./Components";
import { ConnectedRouter } from 'react-router-redux';
import { LoginSignup } from "./Components";
import { action as toggleMenu } from 'redux-burger-menu';


// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, jssExtend(), jssCamelCase()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();
class App extends Component {
    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <div>
                            <LoginSignup />
                            <Notifi />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/:location/restaurantslist" component={Restaurants} />
                                <Route path="/restaurantmenu" component={RestaurantMenu} />
                                <Route path="/checkout" component={Checkout} />
                                {/* <Route path="/show" component={Showrestaurants} /> */}
                                {/* <Route path="/restaurants" component={Showmenus} /> */}
                                {/* <Route path="/" component={() => <Welcome Name={'Siva'} />} /> */}
                            </Switch>
                        </div>
                    </ConnectedRouter>
                </Provider >
            </JssProvider>

        );
    }
}

export default App;
