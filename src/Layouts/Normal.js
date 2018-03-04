import React, { Component } from 'react';
import { Grid, Button } from 'material-ui';

import { Footer, Header } from "./../Components";
import Home from './../Resources/Home.webp';

export default class Normal extends Component {
    render() {
        return (
            <Grid container spacing={0} className="page" style={{ height: "46em", backgroundSize: "cover", backgroundImage: `url(${Home})`, backgroundRepeat: "no-repeat" }}>
                <Grid spacing={0} container>
                    <Grid item xs={12}>
                        <Header />
                    </Grid>
                    <Grid item xs={12}>
                        {this.props.children}
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </Grid >
        );
    }
}