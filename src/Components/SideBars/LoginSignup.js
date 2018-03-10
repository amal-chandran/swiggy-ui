import React, { Component } from "react";
import { TextField, Grid, Button, withStyles } from "material-ui";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';

import { Auth } from "./../../Resource";
import { authActions, notifiActions } from "./../../Actions";

const MenuLoginSignup = reduxBurgerMenu(Menu, "LoginSignup");

const MenuStyles = {
    bmMenuWrap: {
        width: '400px'
    }
};

class LoginSignup extends Component {
    state = {
        username: "",
        password: "",
        repassword: ""
    }

    onPageToggle = () => {
        this.props.actions.authPageSet((this.props.page === "login" ? "signup" : "login"));
    };
    componentDidMount() {
        this.props.actions.logoutAuth();
    }
    onLoginHandle = () => {
        this.props.actions.loginAuth({ username: this.state.username, password: this.state.password });
    };

    onSignupHandle = () => {
        this.props.actions.signupAuth({ username: this.state.username, password: this.state.password });
    };

    onHandleInput = (e) => {
        e.persist();
        const { name, value } = e.target;
        let newState = {};
        newState[name] = value;
        this.setState(newState);
    };

    render() {

        const { classes, page } = this.props;
        return (
            <MenuLoginSignup styles={MenuStyles} right customBurgerIcon={false}>
                <div style={{ background: "#fff" }}>

                    <Grid container>
                        <Grid item xs={12}>
                            {
                                page === "login" ?
                                    <div>
                                        <h1 className={classes.Head}>Login</h1>
                                        <span className={classes.PageChangeContain}>or{" "}
                                            <a href="#" onClick={this.onPageToggle} className={classes.PageChangeText}>create an account</a>
                                        </span>
                                    </div> :
                                    <div>
                                        <h1 className={classes.Head}>Sign up</h1>
                                        <span className={classes.PageChangeContain}>or{" "}
                                            <a href="#" onClick={this.onPageToggle} className={classes.PageChangeText}>login to your account</a>
                                        </span>
                                    </div>
                            }
                        </Grid>
                        <Grid item xs={12}>

                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div className={classes.IpputContain}>
                                    <TextField InputProps={{ disableUnderline: true }} name="username" onChange={this.onHandleInput} fullWidth placeholder="Username" />
                                </div>
                                <div className={classes.IpputContain}>
                                    <TextField InputProps={{ disableUnderline: true }} type="password" name="password" onChange={this.onHandleInput} fullWidth placeholder="Password" />
                                </div>
                                {
                                    page === "login" ?
                                        ""
                                        :
                                        <div className={classes.IpputContain}>
                                            <TextField InputProps={{ disableUnderline: true }} type="password" name="repassword" onChange={this.onHandleInput} fullWidth placeholder="Confirm Password" />
                                        </div>

                                }
                            </div>

                        </Grid>


                        <Grid item xs={12}>
                            {
                                page === "login" ?
                                    <Button fullWidth className={classes.TriggerButton} disabled={this.props.isFetchingItem} onClick={this.onLoginHandle}>Login</Button>
                                    :
                                    <Button fullWidth className={classes.TriggerButton} disabled={this.props.isCreating} onClick={this.onSignupHandle}>Sign up</Button>
                            }
                        </Grid>
                        <Grid item xs={12}>
                            {
                                page !== "login" ?
                                    <div className={classes.TextTerms}>By creating an account, I accept the <span>Terms & Conditions</span></div>
                                    :
                                    ""
                            }
                        </Grid>
                    </Grid>
                </div>

            </MenuLoginSignup>
        );
    };
};
const mapStateToProps = (state) => {
    const { auth, userAuth } = state;
    return {
        page: userAuth.page,
        isFetchingItem: auth.isFetchingItem,
        isCreating: auth.isCreating
    };
};

const mapDispatchToProps = (dispatch) => {
    const authPageSet = authActions.authPageSet;
    const addNotifi = notifiActions.addNotifi;

    const { loginAuth, signupAuth, logoutAuth, actions } = Auth;
    return {
        actions: bindActionCreators({
            loginAuth, signupAuth,
            logoutAuth, authPageSet, addNotifi
        }, dispatch)
    }
};

const styles = {
    Head: {
        margin: '0px',
        fontSize: "30px",
        color: "#282C3F",
        marginBottom: "4px"
    },
    TriggerButton: {
        backgroundColor: "#fc8019", color: "white", padding: "0 1rem",
        borderRadius: "0px", fontWeight: "bold", fontSize: "1rem"
    },
    PageChangeContain: {
        color: "#000",
        fontWeight: "500",
        fontSize: ".9rem"
    },
    PageChangeText: {
        fontWeight: "bold",
        color: "#fc8019"
    },
    IpputContain: {
        padding: "10px",
        border: "1px solid #cccccc",
        borderTopWidth: "0px",
        "&:first-child": {
            border: "1px solid #cccccc",
        }, "&:last-child": {
            border: "1px solid #cccccc",
            borderTopWidth: "0px"
        }
    }, TextTerms: {
        fontWeight: "bold",
        fontSize: ".7rem",
        color: "#a9a9a9",
        "& span": {
            color: "#5d8ed5"
        }
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LoginSignup));
