import React, { Component } from "react";
import { Grid } from "material-ui";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { action as toggleMenu } from 'redux-burger-menu';

import Wrapper from "./Wrapper";
import { SwiggyLogo, SwiggySymbol } from "./../Assets";

class Header extends Component {
    static defaultProps = {
        layout: "Normal"
    }
    render() {
        const { layout, actions, authLogin, location } = this.props;
        let HeaderClass = "Header "
        HeaderClass += layout !== "Normal" ? " HeaderRised " : "";
        let UserProfileName = "";
        try {
            UserProfileName = this.props.profile.item[0].name;
        } catch (e) {

        }

        return (
            <div className={HeaderClass}>
                <Wrapper>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={2}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                {
                                    layout === "Normal" ?
                                        <img className="HeaderLogo" src={SwiggyLogo} alt="logo" />
                                        :
                                        <img className="HeaderLogo" src={SwiggySymbol} alt="logo" />
                                }
                                <div style={{
                                    marginLeft: "1rem",
                                    fontWeight: "bold",
                                    color: "#3d4152"
                                }}>
                                    <a onClick={() => { actions.toggleMenu(true, "LocationManage"); }}>
                                        {location}
                                    </a>
                                </div>
                            </div>
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
                                        <li><i className="fa fa-user HeaderAppIcon" ></i>{" "}{UserProfileName}</li>
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
    const { userAuth, localState, profile } = state;
    return {
        authLogin: userAuth.authLogin,
        location: localState.location,
        profile
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