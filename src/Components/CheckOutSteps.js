import React from 'react';
import PropTypes from 'prop-types';
import {
    Button, Paper, withStyles,
    Stepper, Step, StepLabel,
    StepIcon, StepContent,
    Grid
} from 'material-ui';
import { action as toggleMenu } from 'redux-burger-menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import AddressBlocks from './AddressBlocks';
import { PayByCash } from './../Assets';
import { localActions } from './../Actions';

const containerAfter = {
    content: "\"\"",
    position: "absolute",
    bottom: "0",
    left: '12px',
    height: "50%",
    width: '1px',
    borderLeft: "1px dashed #b1b1b1",
    zIndex: "0"
};


const styles = theme => ({
    root: {
        width: '100%',
        // backgroundColor: "gray"
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        // marginBottom: theme.spacing.unit * 2,
        backgroundColor: "white",
        padding: '1rem'
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
    labelContainer: {
        marginLeft: "23px",
        background: "gray",
        padding: '30px',
        backgroundColor: "#fff",
        marginTop: '15px'
    },
    StepLabelRoot: {
        position: 'relative'
    },
    StepperRoot: {
        background: "none",
        paddingRight: "0px"
    },
    StepContentRoot: {
        marginTop: "0px",
        paddingRight: "0px",
        paddingLeft: "10px",
        borderLeft: "1px dashed #bdbdbd",
        "&>div": {
            background: "#fff"
        }
    },
    iconContainer: {
        width: "3rem",
        height: "3rem",
        background: "#282C3F",
        position: "absolute",
        fontSize: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "0",
        zIndex: "2",
        left: "-12px",
        color: "#fff"
    },

    StepRoot: {
        "&:first-child $labelContainer::after": {
            extend: containerAfter,
        },
        "& $labelContainer": {
            "&:after": {
                extend: containerAfter,
                height: "100%"
            }
        },
        "&:last-child $labelContainer::after": {
            extend: containerAfter,
            top: "0px",
        },
        "&:last-child $StepContentRoot": {
            borderWidth: "0px",
            paddingLeft: "11px"
        },

    },

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
});
const getSteps = () => {
    return [
        { name: "Address", tagLine: "To place your order now, log in to your existing account or sign up.", icon: "icon-marker-checkout" },
        { name: "Payment", tagLine: "Choose payment method.", icon: "icon-wallet-checkout" }
    ];
}

const getContent = (i, { actions, classes }) => {
    switch (i) {
        case 0:
            return (
                <AddressBlocks />
            );
            break;
        case 1:
            return (
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
                            <Button className={classes.AddressBoxButton}>Place Order</Button>
                        </div>
                    </TabPanel>
                </Tabs>

            );
            break;
    }
}

class VerticalLinearStepper extends React.Component {

    render() {
        const { classes, actions, localState } = this.props;
        const steps = getSteps();
        const { CheckOutStep, SelectedAddress } = localState;

        return (
            <div className={classes.root}>
                <div className={classes.borderLine}>
                </div>
                <Stepper connector={<div />} classes={{ root: classes.StepperRoot }} activeStep={CheckOutStep} orientation="vertical">
                    {steps.map((data, i) => {
                        return (
                            <Step classes={{ root: classes.StepRoot }}>
                                <StepLabel classes={{ root: classes.StepLabelRoot, labelContainer: classes.labelContainer, iconContainer: classes.iconContainer }} icon={
                                    <i className={data.icon} />
                                }>
                                    <div onClick={() => { actions.setCheckOutStep(i) }}>
                                        <div style={{ fontSize: "1.8em", fontWeight: "bold" }}>{data.name}</div>
                                        <div style={{ fontSize: "1.2em", color: "#7e808c", marginTop: "5px", fontWeight: "normal" }}>{data.tagLine}</div>
                                    </div>
                                    {
                                        CheckOutStep !== i && SelectedAddress !== null ?
                                            <div style={{ marginTop: "2rem" }}>
                                                <div style={{ fontSize: "1rem", fontWeight: "bold" }}>{SelectedAddress.addresstype}</div>
                                                <div style={{ fontSize: "1rem", color: "#7e808c", margin: "4px 0", fontWeight: "normal" }}>{SelectedAddress.address}</div>
                                                <div style={{ fontSize: "1rem", fontWeight: "bold" }}>	38 MINS</div>
                                            </div>
                                            : ""
                                    }

                                </StepLabel>
                                <StepContent classes={{ root: classes.StepContentRoot }}>
                                    {getContent(i, this.props)}
                                </StepContent>
                            </Step>
                        )
                    })}
                </Stepper>
                {/* {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>All steps completed - you&quot;re finished</Typography>
                        <Button onClick={this.handleReset} className={classes.button}>
                            Reset
            </Button>
                    </Paper>
                )} */}
            </div>
        );
    }
}

VerticalLinearStepper.propTypes = {
    classes: PropTypes.object,
};

const mapStateToProps = (state) => {
    const { localState } = state;
    return {
        localState
    }
};
const mapDispatchToProps = (dispatch) => {
    const { setCheckOutStep } = localActions;
    return {
        actions: bindActionCreators({
            toggleMenu, setCheckOutStep
        }, dispatch)
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(VerticalLinearStepper));