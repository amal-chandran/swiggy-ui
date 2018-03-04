import React, { Component } from "react";
import Wrapper from "./Wrapper";
import { SwiggyLogo } from "./../Assets";
import { Grid } from "material-ui";

export default class Header extends Component {
    static defaultProps = {
        layout: "Normal"
    }
    render() {
        const { layout } = this.props;

        let HeaderClass = "Header "
        HeaderClass += layout !== "Normal" ? " HeaderRised " : "";

        return (
            <div className={HeaderClass}>
                <Wrapper>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <img className="HeaderLogo" src={SwiggyLogo} alt="logo" />
                        </Grid>
                        <Grid item xs />
                        <Grid item xs={6}>
                            <ul className="Menu">
                                <li>We are Hiring   </li>
                                <li> <a href="#"> Help & Support </a></li>
                                <li>
                                    Get app:<a href="#">
                                        <i className="fa fa-android HeaderAppIcon" ></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-apple HeaderAppIcon" ></i>
                                    </a>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Wrapper>
            </ div >
        );
    }
};