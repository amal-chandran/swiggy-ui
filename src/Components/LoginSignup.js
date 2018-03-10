import React, { Component } from "react";
import { TextField, Grid } from "material-ui";
import { Auth } from "./../Resource";
import { authActions, notifiActions } from "./../Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
const MenuLoginSignup = reduxBurgerMenu(Menu, "LoginSignup");

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
        return (
            <MenuLoginSignup right customBurgerIcon={false}>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-t-85 p-b-20">
                            <div className="login100-form validate-form">
                                <span className="login100-form-title p-b-70">
                                    Welcome
					    </span>
                                <Grid container spacing={16}>
                                    <Grid item xs={12}>
                                        <TextField required name="username" onChange={this.onHandleInput} fullWidth label="Username" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField required type="password" name="password" onChange={this.onHandleInput} fullWidth label="Password" />
                                    </Grid>
                                    {
                                        this.props.page === "login" ?
                                            ""
                                            :
                                            <Grid item xs={12}>
                                                <TextField required type="password" name="repassword" onChange={this.onHandleInput} fullWidth label="Confirm Password" />
                                            </Grid>
                                    }
                                </Grid>
                                <div className="container-login100-form-btn">
                                    {
                                        this.props.page === "login" ?
                                            <button disabled={this.props.isFetchingItem} onClick={this.onLoginHandle} className="login100-form-btn">Login</button>
                                            :
                                            <button disabled={this.props.isCreating} onClick={this.onSignupHandle} className="login100-form-btn">Sign up</button>
                                    }
                                </div>

                                {/* <button onClick={() => { this.props.actions.addNotifi("Hello", "success"); }}>Add Notification</button>
                            <button onClick={() => { this.props.actions.addNotifi("Hello Love You", "success"); }}>Add Notification</button>
                            <Link to="/home">go to home</Link>
                             */}
                                <ul className="login-more p-t-190">
                                    <li className="m-b-8">
                                        <span className="txt1">Forgot</span>{" "}
                                        <a href="#" className="txt2">Username / Password?</a>
                                    </li>
                                    {
                                        this.props.page === "login" ?
                                            <li>
                                                <span className="txt1">Don’t have an account?</span>{" "}
                                                <a href="#" onClick={this.onPageToggle} className="txt2">Sign up</a>
                                            </li> :
                                            <li>
                                                <span className="txt1">I have an account?</span>{" "}
                                                <a href="#" onClick={this.onPageToggle} className="txt2">Log in</a>
                                            </li>
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);