import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepLabel, StepIcon, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Add from "material-ui-icons/Add";
const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
});

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
        // const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    <Step>
                        <StepLabel icon={
                            <i className="fa fa-map-marker fa-large" />
                        }>
                            <div style={{ fontSize: "1.5em", fontWeight: "bold" }}>Address</div>
                            <div style={{ fontSize: "1.2em" }}>To place your order now, log in to your existing account or sign up.</div>
                        </StepLabel>
                        <StepContent>
                            <Typography>
                                {/* {getStepContent(index)} */}
                            </Typography>

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

                    <Step>
                        <StepLabel icon={<Add />}>
                            Login
                        </StepLabel>
                        <StepContent>
                            <Typography>
                                {/* {getStepContent(index)} */}
                            </Typography>

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