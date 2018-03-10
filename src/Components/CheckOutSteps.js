import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel, StepIcon, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Add from "material-ui-icons/Add";

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
        padding: '23px',
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
        borderLeft: "1px dashed #bdbdbd"
    },
    iconContainer: {
        width: "3rem",
        height: "3rem",
        background: "#282C3F",
        position: "absolute",
        fontSize: "2rem",
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

    }
});
const getSteps = () => {
    return [
        { name: "Address", tagLine: "To place your order now, log in to your existing account or sign up." },
        { name: "Payment", tagLine: "To place your order now, log in to your existing account or sign up." }
    ];
}

const getContent = (i) => {
    switch (i) {
        case "1":
            return <div>Hello</div>
            break;
        case "2":
            return <div>Hello</div>
            break;
    }
}

class VerticalLinearStepper extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.borderLine}>
                </div>
                <Stepper connector={<div />} classes={{ root: classes.StepperRoot }} activeStep={activeStep} orientation="vertical">
                    {steps.map((data, i) => {
                        return (
                            <Step classes={{ root: classes.StepRoot }}>
                                <StepLabel classes={{ root: classes.StepLabelRoot, labelContainer: classes.labelContainer, iconContainer: classes.iconContainer }} icon={
                                    <i className="fa fa-map-marker fa-large" />
                                }>
                                    <div style={{ fontSize: "1.8em", fontWeight: "bold" }}>{data.name}</div>
                                    <div style={{ fontSize: "1.2em", color: "#7e808c", marginTop: "5px" }}>{data.tagLine}</div>
                                </StepLabel>
                                <StepContent classes={{ root: classes.StepContentRoot }}>

                                    {getContent()}
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={this.handleBack}
                                                className={classes.button}
                                            >Back</Button>
                                            <Button
                                                variant="raised"
                                                color="primary"
                                                onClick={this.handleNext}
                                                className={classes.button}
                                            > {activeStep === 2 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
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

export default withStyles(styles)(VerticalLinearStepper);