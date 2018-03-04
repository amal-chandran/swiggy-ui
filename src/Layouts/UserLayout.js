import React, { Component } from 'react';
import { Grid, Button } from 'material-ui';

import { Header } from "./../Components";

export default class Normal extends Component {
    render() {
        return (
            <Grid container spacing={0} style={{ height: "9em", }}>
                <Grid item xs={12}>
                    <Header layout={"UserLayout"} />
                </Grid>
                <Grid item xs={12} style={{ height: 'auto', }}>
                    {this.props.children}
                </Grid>
            </Grid>
        );
    }
}