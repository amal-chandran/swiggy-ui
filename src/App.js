import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import 'react-select/dist/react-select.css';

// import Showrestaurants from './Components/Showrestaurants';
// import Showmenus from './Components/Showmenus';
// import Welcome from './Components/Welcome';
import { Home, Restaurants, RestaurantMenu, Checkout } from "./Views";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
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
            </BrowserRouter>
        );
    }
}

export default App;
