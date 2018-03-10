import React, { Component } from 'react';
import { Grid } from 'material-ui'

import { UserLayout } from "./../Layouts";
import { Wrapper, RestaurantsList } from './../Components';

class Restaurants extends Component {
    render() {
        console.log(this.props.match.params.location)
        return (
            <UserLayout>
                <Wrapper>
                    <RestaurantsList />
                </Wrapper>
            </UserLayout >
        );
    }
}

export default Restaurants;

