import React, { Component } from "react";
import { Grid } from "material-ui";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action as toggleMenu } from 'redux-burger-menu';

import Wrapper from "./Wrapper";
import { SwiggyLogo } from "./../Assets";

class Header extends Component {
    static defaultProps = {
        layout: "Normal"
    }
    render() {
        const { layout, actions, authLogin } = this.props;
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
                                {layout === "Normal" ? <li>We are Hiring</li> : ""}

                                {layout === "Normal" ?
                                    <li>
                                        Get app:<a href="#">
                                            <i className="fa fa-android HeaderAppIcon" ></i>
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-apple HeaderAppIcon" ></i>
                                        </a>
                                    </li>
                                    : ""}
                                <li><a href="#">Help & Support</a></li>
                                {
                                    !authLogin ? <li><a onClick={() => { actions.toggleMenu(true, "LoginSignup") }} href="#">SignIn</a></li>
                                        :
                                        ""
                                }
                            </ul>
                        </Grid>
                    </Grid>
                </Wrapper>
            </ div >
        );
    }
};

const mapStateToProps = (state) => {
    const { userAuth } = state;
    return {
        authLogin: userAuth.authLogin
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            toggleMenu: toggleMenu
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);