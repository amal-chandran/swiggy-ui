import React, { Component } from 'react';
import { Grid } from 'material-ui'

import { UserLayout } from "./../Layouts";
import { Wrapper, CheckOutSteps, Cart } from './../Components';

class Restaurants extends Component {
    render() {
        return (
            <UserLayout theme="UserLayoutTheme2">
                <Wrapper>
                    <Grid container spacing={24}>
                        <Grid xs={8} item>
                            <CheckOutSteps />
                        </Grid>
                        <Grid xs={4} item>
                            <Cart type="CheckOut" />
                        </Grid>
                    </Grid>
                </Wrapper>
            </UserLayout >
        );
    }
}

export default Restaurants;

