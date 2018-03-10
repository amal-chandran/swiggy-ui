import React, { Component } from 'react';
import { Grid } from 'material-ui';


import { SelectLocations } from "./../Components";
import { Normal } from "./../Layouts";
// import About from './../Components/SmallComponents/About';

class Home extends Component {

    render() {
        const classes = this.props.classes;
        return (
            <Normal>
                <Grid style={{ height: "30rem" }} container alignItems="center" justify="center">
                    <Grid item>
                        <h1 style={{ textAlign: "center", color: "#fff", textShadow: "1px 1px 4px rgba(0,0,0,.8)", fontWeight: "50" }}>Order from restaurants near you</h1>
                        <SelectLocations />
                        {/* If your location is unavailable please select your nearest city */}
                    </Grid>
                </Grid>
            </Normal>
        );
    }
}

export default Home;