import React, { Component } from "react";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { Home, Checkout, Restaurants, RestaurantMenu } from "./../../Views";
import LoactionRouter from './LoactionRouter';
import { history } from "./../../Helper";

class Router extends Component {
    render() {
        const { location } = this.props;
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Switch>
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/:location" component={LoactionRouter} />
                        <Route path="/" render={() => {
                            return location ? <Redirect to={location} /> : <Home />
                        }} />
                    </Switch>
                </div>
            </ConnectedRouter>
        );
    }
}
const mapStateToProps = (state) => {
    const { localState } = state;
    return {
        location: localState.location
    }
};

export default connect(mapStateToProps)(Router);