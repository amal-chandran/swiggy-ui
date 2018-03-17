import React, { Component } from "react";
import { Control, Form } from 'react-redux-form';
import { Button, withStyles } from 'material-ui';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Auth } from "./../../Resource";
import { TextBoxRRF, SubmitButton } from './Controls';

class AuthForm extends Component {

    onSubmit = (data) => {
        const { actions, page } = this.props;

        if (page === "login")
            actions.loginAuth(data);
        else if (page === "signup")
            actions.signupAuth(data);

    }

    render() {
        const { page } = this.props;
        return (
            <Form model={"authForm"}
                onSubmit={this.onSubmit}
            >
                <div className="textfield-group">
                    {page === "signup" ?
                        [
                            <TextBoxRRF type="text" labelName="Name" model="authForm.name" id="authForm.name" />,
                            <TextBoxRRF type="text" labelName="Mobile" model="authForm.mobile" id="authForm.mobile" />
                        ]
                        : ""}
                    <TextBoxRRF type="text" labelName="Username" model="authForm.username" id="authForm.username" />
                    <TextBoxRRF type="password" labelName="Password" model="authForm.password" id="authForm.password" />
                </div>
                <SubmitButton disabled={this.props.isFetchingItem || this.props.isCreating}>
                    {page === "signup" ? "Sign Up" : "Login"}
                </SubmitButton>
                {/* <Button type="submit" fullWidth
                    className={classes.TriggerButton}
                >

                </Button> */}
                {/* <button className="mui-btn mui-btn--primary" type="submit" >Login</button> */}
            </Form>
        );
    }
}



const mapStateToProps = (state) => {
    const { auth, userAuth } = state;
    return {
        page: userAuth.page,
        isFetchingItem: auth.isFetchingItem,
        isCreating: auth.isCreating
    };
};

const mapDispatchToProps = (dispatch) => {

    const { loginAuth, signupAuth } = Auth;
    return {
        actions: bindActionCreators({
            loginAuth, signupAuth
        }, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);

