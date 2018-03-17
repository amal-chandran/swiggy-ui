import React, { Component } from 'react';
import { Button, Grid, withStyles } from 'material-ui'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';

import { UserLayout } from "./../Layouts";
import { Wrapper, CheckOutSteps, Cart } from './../Components';
import { localActions } from './../Actions';
import { CartEmpty2 } from './../Assets';

class Restaurants extends Component {
    componentDidMount() {
        this.props.actions.setPageTitle("SECURE CHECKOUT");
    }
    render() {
        const { classes } = this.props;
        const { CartItems } = this.props.localState;
        return (
            <UserLayout theme="UserLayoutTheme2">
                <Wrapper>
                    {
                        isEmpty(CartItems) ?
                            <div className={classes.EmptyContainer}>
                                <img src={CartEmpty2} alt="" />
                                <div className={classes.EmptyHead}>Your cart is empty</div>
                                <div className={classes.EmptySubHead}>You can go to home page to view more restaurants</div>
                                <Link to="/">
                                    <Button classes={{ root: classes.GoToHomeButton }}>SEE RESTAURANTS NEAR YOU</Button>
                                </Link>
                            </div>
                            :
                            <Grid container spacing={24}>
                                <Grid xs={8} item>
                                    <CheckOutSteps />
                                </Grid>
                                <Grid xs={4} item>
                                    <Cart type="CheckOut" />
                                </Grid>
                            </Grid>
                    }
                </Wrapper>
            </UserLayout >
        );
    }
    componentWillUnmount() {
        this.props.actions.setPageTitle(null);
    }
}
const mapStateToProps = (state) => {
    const { localState } = state;
    return {
        localState
    };
};
const mapDispatchToProps = (dispatch) => {
    const { setPageTitle } = localActions;

    return {
        actions: bindActionCreators({
            setPageTitle
        }, dispatch)
    };
};

const styles = {
    EmptyContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        height: "100vh",
        "& img": {
            width: "20rem"
        }
    },
    EmptyHead: {
        color: '#484848',
        fontSize: '1.2rem',
        fontWeight: "bold",
        padding: ".5rem"
    },
    EmptySubHead: {
        color: '#868686',
        fontSize: '1rem',
    },
    GoToHomeButton: {
        backgroundColor: "#fc8019", color: "white", padding: "0 1rem",
        borderRadius: "0px", fontWeight: "bold", fontSize: ".8rem",
        marginTop: "1rem"
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Restaurants));

