import React, { Component } from "react";
import Wrapper from "./Wrapper";
import { SwiggyLogo } from "./../Assets";
import { Grid } from "material-ui";

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Wrapper>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid item xs>
                            <img className="HeaderLogo" src={SwiggyLogo} alt="logo" />
                        </Grid>
                        <Grid item xs={4} />
                        <Grid item xs> We are Hiring  </Grid>
                        <Grid item xs>
                            <a href="#"> Help & Support </a>
                        </Grid>
                        <Grid item xs={2} >
                            Get app:<a href="#">
                                <i className="fa fa-android HeaderAppIcon" ></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-apple HeaderAppIcon" ></i>
                            </a>
                        </Grid>
                    </Grid>
                </Wrapper>
            </div >
        );
    }
};