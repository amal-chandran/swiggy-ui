import React, { Component } from 'react';
import { Grid, Button, withStyles } from 'material-ui';

import { Header } from "./../Components";

class UserLayout extends Component {
    static defaultProps = {
        theme: 'UserLayoutTheme1'
    };
    componentDidMount() {
        const { classes } = this.props;
        this.containerRoot = this.props.theme === 'UserLayoutTheme2' ? classes.UserLayoutTheme2 : classes.UserLayoutTheme1;

        document.querySelector("body").classList.add(this.containerRoot);
    }
    componentWillUnmount() {
        document.querySelector("body").classList.remove(this.containerRoot);
    }
    render() {
        return (
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Header layout={"UserLayout"} />
                </Grid>
                <Grid item xs={12} style={{ height: 'auto', }}>
                    {this.props.children}
                </Grid>
            </Grid>
        );
    }
}

const styles = (theme) => ({
    UserLayoutTheme1: {
        background: "#fff"
    },
    UserLayoutTheme2: {
        background: "#E9ECEE"
    }
});

export default withStyles(styles)(UserLayout);