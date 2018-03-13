import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Restaurants, RestaurantMenu } from "./../../Views";

export default class LoactionRouter extends Component {
    makePath = (path) => {
        const { match } = this.props;
        return match.url + path
    }

    render() {

        return (
            <Switch>
                <Route path={(this.makePath("/restaurantslist"))} component={Restaurants} />
                <Route path={(this.makePath("/:restaurant"))} component={RestaurantMenu} />
                <Route path={(this.makePath("/"))} render={() => (<Redirect to={(this.makePath("/restaurantslist"))} />)} />
            </Switch>
        );
    }
}