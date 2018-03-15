import React, { Component } from "react";
import { Grid } from 'material-ui';

export default (props) => {
    return (
        <div>
            <div style={{ fontWeight: "bold" }}>{props.name}</div>
            <div style={{ fontSize: ".8rem", paddingTop: "4px", color: "#686b78", paddingBottom: "10px" }}>{props.type}</div>

            <div style={{
                display: "flex",
                flex: "1 1 0 %",
                alignItems: "center",
                justifyContent: "space-between",
                color: '#535665',
                fontSize: ".7rem"
            }}>

                <div style={{
                    backgroundColor: "rgb(72, 196, 121)",
                    color: "white",
                    padding: " 4px 6px",
                    textAlign: "center",
                    width: 'fit-content',
                }}>
                    <i className="fa fa-star"></i>{"  " + props.rating}
                </div>
                <div>
                    &bull;
                                                </div>
                <div style={{ textTransform: "uppercase" }}>
                    {props.servetime}
                </div>
                <div>
                    &bull;
                                                </div>
                <div style={{ textTransform: "uppercase" }}>
                    {props.costTwo}
                </div>
            </div>

            {/* <Grid style={{ fontSize: ".8rem" }} justify={"space-between"}
                alignItems={"center"} container direction="row" spacing={0}>

                <Grid item xs={3}>
                    <div style={{
                        backgroundColor: "rgb(72, 196, 121)",
                        color: "white",
                        padding: " 4px 6px",
                        textAlign: "center",
                        width: 'fit-content'
                    }}>
                        <i className="fa fa-star"></i>{props.rating}
                    </div>
                </Grid>
                <Grid item>&bull;</Grid>
                <Grid item xs={3}>
                    {props.deliveryTime}
                </Grid>
                <Grid item>&bull;</Grid>
                <Grid item xs={5}>
                    {props.minCost}
                </Grid>
            </Grid> */}
        </div>

    );
}