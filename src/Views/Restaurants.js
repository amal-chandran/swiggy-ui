import React, { Component } from 'react';
import Grid from 'material-ui/Grid'

const images = [
    { src: A, alt: 'poster1', href: "/sed", },
    { src: B, alt: 'poster2', href: "/sed", },
    { src: C, alt: 'poster3', href: "/sed", },
    { src: D, alt: 'poster4', href: "/sed", },
    { src: E, alt: 'poster5', href: "/sed", },
    { src: F, alt: 'poster6', href: "/sed", },
];
import { Footer, Header } from "./../Components";

class Showrestaurants extends Component {
    render() {
        return (
            <Grid container className="page" style={{ height: "9em", }}>
                <Grid item xs={12} style={{ zIndex: '2', position: 'relative', height: "3.5em", backgroundColor: '#f9f9f9', borderBottom: '1px solid #f5861f', }}>
                    <Header />
                </Grid>
                <Grid item xs={12} id="target" style={{ zIndex: '4', marginLeft: '0.5em', height: "4em", padding: "0px", alignItems: 'center', overflow: 'hidden', textAlign: 'center', justifyContent: 'center' }}>



                </Grid>
                <Grid item xs={12} style={{ height: 'auto', }}>
                    <Restaurants />
                </Grid>
            </Grid>

        );
    }
}

export default Showrestaurants;

