import React, { Component } from "react";
import { Grid } from "material-ui";

export default class Wrapper extends Component {
    render() {
        return (
            <Grid container justify="center" alignItems='center' spacing={0}>
                <Grid item ></Grid>
                <Grid item xs={8}>
                    {this.props.children}
                </Grid>
                <Grid item ></Grid>
            </Grid>
        );
    }
};