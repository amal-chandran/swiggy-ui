import React, { Component } from 'react';
import { withStyles, Grid, CircularProgress } from 'material-ui'

import { RestaurantDetails, Wrapper, ProductList } from './../Components';
import { UserLayout } from './../Layouts';
import { Restaurants } from './../Resource';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

const styles = theme => ({

});

class RestaurantMenu extends Component {

    componentDidMount() {
        this.props.actions.getRestaurant("name", this.props.match.params.restaurant);
    };

    render() {
        const classes = this.props.classes;
        const { isFetching, items } = this.props.restaurants;
        let ItemData = {};

        if (isFetching || isEmpty(items)) {
            return (
                <div style={{ textAlign: 'center', display: "flex", flex: "1", alignItems: "center", justifyContent: "center", height: "calc(100vh - 6rem)" }}>
                    <CircularProgress size={80} style={{ color: '#f5861f' }}>
                    </CircularProgress>
                </div>

            );
        }

        try {
            ItemData = items[0];
        } catch (e) {

        }

        return (
            <UserLayout>
                <Grid container>
                    <Grid style={{
                        background: "#171A29",
                        color: "#fff",
                        padding: '2rem'
                    }} item xs={12} >
                        <Wrapper>
                            <Grid container spacing={24}>
                                <Grid item>
                                    <div>
                                        <img src={ItemData.imageCover} alt="restaurant" style={{ height: '10rem' }} />
                                    </div>
                                </Grid>
                                <Grid item>

                                    <Grid container direction="column" style={{ height: "100%" }} justify="center" alignItems="center" >
                                        <Grid item>
                                            <div style={{
                                                fontWeight: "lighter",
                                                fontSize: "2rem"
                                            }}>{ItemData.name}</div>
                                            <div style={{ color: "rgb(177, 181, 202)", fontSize: "1rem", paddingBottom: "10px" }}>{ItemData.type}</div>

                                            <div style={{
                                                display: "flex",
                                                flex: "1 1 0 %",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }}>

                                                <div style={{
                                                    backgroundColor: "rgb(72, 196, 121)",
                                                    color: "white",
                                                    padding: " 4px 6px",
                                                    textAlign: "center",
                                                    width: 'fit-content'
                                                }}>
                                                    <i className="fa fa-star"></i>{ItemData.rating}
                                                </div>
                                                <div>
                                                    &bull;
                                                </div>
                                                <div>
                                                    {ItemData.servetime}
                                                </div>
                                                <div>
                                                    &bull;
                                                </div>
                                                <div>
                                                    {ItemData.costTwo}
                                                </div>
                                            </div>
                                            {/* <Grid style={{ fontSize: ".8rem" }} justify={"space-between"}
                                                alignItems={"center"} container direction="row" spacing={0}>

                                                <Grid item xs={3}>

                                                </Grid>
                                                <Grid item xs={3}>

                                                </Grid>
                                                <Grid item></Grid>
                                                <Grid item xs={5}>

                                                </Grid>
                                            </Grid> */}
                                        </Grid>
                                    </Grid>
                                    {/* <RestaurantDetails {...resObj} /> */}
                                </Grid>
                            </Grid>
                        </Wrapper>
                    </Grid>
                    <Grid item xs={12} style={{ height: 'auto', }}>
                        <ProductList data={ItemData} />
                    </Grid>
                </Grid>
            </UserLayout>

        );
    }
}

const mapStateToProps = (state) => {
    const { restaurants, localState } = state;
    return {
        restaurants, location: localState.location
    }
};
const mapDispatchToProps = (dispatch) => {
    const { getRestaurant } = Restaurants;

    return {
        actions: bindActionCreators({
            getRestaurant
        }, dispatch)
    };
};


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RestaurantMenu));

