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

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, jssExtend(), jssCamelCase()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();
class App extends Component {
    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <HashRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/restaurantslist" component={Restaurants} />
                            <Route path="/restaurantmenu" component={RestaurantMenu} />
                            <Route path="/checkout" component={Checkout} />
                            {/* <Route path="/show" component={Showrestaurants} /> */}
                            {/* <Route path="/restaurants" component={Showmenus} /> */}
                            {/* <Route path="/" component={() => <Welcome Name={'Siva'} />} /> */}
                        </Switch>
                    </div>
                </HashRouter>
            </JssProvider>

        );
    }
}

export default App;
