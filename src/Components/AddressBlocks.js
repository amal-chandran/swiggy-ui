import React, { Component } from 'react';
import { Grid, Button, withStyles } from 'material-ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { action as toggleMenu } from 'redux-burger-menu';
import { Address } from './../Resource';
import { localActions } from './../Actions';

class AddressBlocks extends Component {
    componentWillMount() {
        const { userAuth, actions } = this.props;
        const { authLogin, authData } = userAuth;
        if (authLogin) {
            actions.getAddressList(authData.hasura_id);
        }
    }

    render() {
        const { classes, actions, address } = this.props;
        return (
            <div className={classes.AddressBoxContainer}>
                <Grid container>
                    {address.items.map((SingleBlock) => {
                        return (
                            <Grid item xs={6} classes={{ typeItem: classes.AddressBoxItem }}>
                                <div className={classes.AddressBox}>
                                    <div>
                                        <div className={classes.AddressBoxIcon}>
                                            <i className="icon-marker-checkout"></i>
                                        </div>
                                        <div className={classes.AddressBoxHead}>
                                            {SingleBlock.addresstype}
                                            <div className={classes.AddressBoxSubHead}>
                                                {SingleBlock.address}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div></div>
                                        <div className={classes.AddressBoxTime}>38 MINS</div>
                                    </div>
                                    <div>
                                        <div></div>
                                        <div>
                                            <Button onClick={() => { actions.setAddress(SingleBlock); }} className={classes.AddressBoxButton}>Deliver Here</Button>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        );
                    })}

                    <Grid item xs={6} classes={{ typeItem: classes.AddressBoxItem }}>
                        <div className={classes.AddressBoxNew}>
                            <div>
                                <div className={classes.AddressBoxIcon}>
                                    <i className="icon-location"></i>
                                </div>
                                <div className={classes.AddressBoxHead}>
                                    Add new Address
                                        <div className={classes.AddressBoxSubHead}>
                                        1, 49, Sydenhams Rd, Park Town, Chennai, Tamil Nadu 600003, India
                                        </div>
                                </div>
                            </div>
                            <div>
                                <div></div>
                                <div className={classes.AddressBoxTime}></div>
                            </div>
                            <div>
                                <div></div>
                                <div>
                                    <Button className={classes.AddressBoxButtonNew} onClick={() => { actions.toggleMenu(true, "AddressManage") }}>Add New</Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const styles = {
    AddressBoxContainer: {
        margin: "1rem",
        display: 'flex',
    },
    AddressBoxItem: {
        padding: "1rem !important"
    },
    AddressBox: {
        border: "1px solid #cccccc",
        width: "100%",
        minWidth: "18rem",
        display: "table",
        padding: "1rem",
        height: "100%",
        "&>div": {
            display: "table-row",
            "&>div": {
                display: "table-cell",
                verticalAlign: "top"
            }
        },
        "&:hover": {
            boxShadow: "0 0 14px rgba(0, 0, 0, 0.14)"
        }
    },
    AddressBoxNew: {
        composes: "$AddressBox",
        border: "1px dashed rgba(0, 0, 0, 0.13)",

    },
    AddressBoxIcon: {
        fontSize: "1.1rem",
        padding: "1rem"
    },
    AddressBoxHead: {
        fontSize: "1rem",
        fontWeight: "bold",
        paddingTop: "1rem"
    },
    AddressBoxTime: {
        paddingTop: "2rem",
        fontWeight: "bold",
        fontSize: ".88rem"
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
    AddressBoxButtonNew: {
        composes: "$AddressBoxButton",
        background: "none",
        color: "#60B246",
        "&:hover": {
            background: "none",
        }
    },
    AddressBoxSubHead: {
        fontWeight: "normal",
        fontSize: ".88rem",
        color: "gray"
    },
}

const mapStateToProps = (state) => {
    const { userAuth, address } = state;
    return {
        userAuth, address
    }
};
const mapDispatchToProps = (dispatch) => {
    const { getAddressList } = Address;
    const { setAddress } = localActions;
    return {
        actions: bindActionCreators({
            toggleMenu, getAddressList, setAddress
        }, dispatch)
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AddressBlocks));