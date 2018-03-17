import React, { Component } from 'react';
import { Button, withStyles } from 'material-ui';

const SubmitButton = (props) => {
    const { classes, children, ...ControlProps } = props;
    return (
        <Button type="submit" fullWidth
            className={classes.TriggerButton}
            {...ControlProps}>
            {children}
        </Button>
    );
}

const styles = {
    TriggerButton: {
        backgroundColor: "#fc8019", color: "white", padding: "0 1rem",
        borderRadius: "0px", fontWeight: "bold", fontSize: ".8rem",
        marginTop: "1rem"
    },
};

export default withStyles(styles)(SubmitButton);