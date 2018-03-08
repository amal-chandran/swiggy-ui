import React, { Component } from 'react';
import { Grid } from 'material-ui'

import { UserLayout } from "./../Layouts";
import { Wrapper, CheckOutSteps } from './../Components';

class Restaurants extends Component {
    render() {
        return (
            <UserLayout>
                <Wrapper>
                    <CheckOutSteps />

                </Wrapper>
            </UserLayout >
        );
    }
}

export default Restaurants;

