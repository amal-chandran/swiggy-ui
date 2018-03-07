import React, { Component } from 'react';
import Grid from 'material-ui/Grid'

import { UserLayout } from "./../Layouts";
import { Wrapper, RestaurantsList } from './../Components';
// import Restaurants from "./../Components/SmallComponents/Restaurants";

class Showrestaurants extends Component {
    render() {
        return (
            <UserLayout>
                <Wrapper>
                    <RestaurantsList />
                </Wrapper>
            </UserLayout >
        );
    }
}

export default Showrestaurants;

