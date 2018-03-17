import React, { Component } from 'react';
import { Button, withStyles } from 'material-ui';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PayByCash } from './../Assets';
import { localActions } from './../Actions';
import { Order } from './../Resource';

class PaymentTabs extends Component {

    handlePalceOrder = () => {
        const { authLogin, authData } = this.props.userAuth;
        if (authLogin) {
            const { CartRestaurant, CartItems, SelectedAddress } = this.props.localState
            const dateMaker = new Date();

            let OrderData = {
                restaurantid: CartRestaurant.rid,
                CartItems,
                addressid: SelectedAddress.addressid,
                uid: authData.hasura_id,
                timedata: dateMaker.getTime().toString()
            };

            this.props.actions.addOrder(OrderData);
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Tabs
                    style={{
                        padding: "2rem",
                        paddingTop: "0px"
                    }}
                    defaultTab="vertical-tab-one" vertical>
                    <TabList>
                        <Tab tabFor="vertical-tab-one">
                            <i className="icon-paybycash"></i>Pay on Delivery
                        </Tab>
                    </TabList>
                    <TabPanel tabId="vertical-tab-one">
                        <div className={classes.PayContainer}>

                            <img style={{ width: "125px" }} src={PayByCash} alt="Cash" />
                            <div className={classes.PayHead}>Cash</div>
                            <div className={classes.PayHeadSub}>
                                Please keep exact change handy to help us serve you better
                    </div>
                            <Button onClick={this.handlePalceOrder} className={classes.AddressBoxButton}>Place Order</Button>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

const styles = {
    PayContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: "2rem"
    },
    PayHeadSub: {
        fontSize: ".9rem",
        color: "gray"
    },
    PayHead: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        paddingTop: "1rem"
    },
    AddressBoxButton: {
        background: "#60B246",
        border: "1px solid #60B246",
        fontSize: ".88rem",
        color: "#fff",
        fontWeight: "bold",
        outline: "none",
        marginTop: "1rem",
        marginBottom: "1rem",
        borderRadius: "0px",
        "&:hover": {
            background: "#60B246",
        }
    },
}

const mapStateToProps = (state) => {
    const { userAuth, localState } = state;
    return {
        localState, userAuth
    }
};
const mapDispatchToProps = (dispatch) => {
    const { setCheckOutStep } = localActions;
    const { addOrder } = Order;
    return {
        actions: bindActionCreators({
            setCheckOutStep, addOrder
        }, dispatch)
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PaymentTabs));