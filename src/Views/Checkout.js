import React, { Component } from 'react';
import { Grid } from 'material-ui'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { UserLayout } from "./../Layouts";
import { Wrapper, CheckOutSteps, Cart } from './../Components';
import { localActions } from './../Actions';

class Restaurants extends Component {
    componentDidMount() {
        this.props.actions.setPageTitle("SECURE CHECKOUT");
    }
    render() {
        return (
            <UserLayout theme="UserLayoutTheme2">
                <Wrapper>
                    <Grid container spacing={24}>
                        <Grid xs={8} item>
                            <CheckOutSteps />
                        </Grid>
                        <Grid xs={4} item>
                            <Cart type="CheckOut" />
                        </Grid>
                    </Grid>
                </Wrapper>
            </UserLayout >
        );
    }
    componentWillUnmount() {
        this.props.actions.setPageTitle(null);
    }
}
const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    const { setPageTitle } = localActions;

    return {
        actions: bindActionCreators({
            setPageTitle
        }, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);

