import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, authLogin, ...rest }) => (
    <Route
        {...rest}
        render={props => {
            console.log("Hello");
            return authLogin ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location }
                        }}
                    />
                )
        }
        }
    />
);
const mapStateToProps = (state) => {
    const { userAuth } = state;
    return {
        authLogin: userAuth.authLogin
    };
};

export default connect(mapStateToProps)(PrivateRoute);