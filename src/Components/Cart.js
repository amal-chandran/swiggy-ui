import React, { Component } from 'react';
import { withStyles } from 'material-ui';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CartEmpty } from './../Assets';
import ItemCountButton from './ItemCountButton';
import { localActions } from './../Actions';

class Cart extends Component {
    static defaultProps = { type: "Normal" }

    handleItemChange = (ItemData) => {
        return (ItemCount) => {
            ItemData.ItemCount = ItemCount;
            this.props.actions.CartItem(this.props.localState.CartRestaurant, ItemData)
        }
    }

    render() {
        const { classes, type } = this.props;
        const containClass = type === "CheckOut" ? classes.CartContain : "";
        const { CartRestaurant, CartItems } = this.props.localState;
        let SubTotalCost = 0;
        return (
            <div className={containClass}>
                {/* <h1 style={{ color: " #7e808c" }}>Cart Empty</h1>
                <div className={classes.Cart}>

                </div>
                <div style={{ color: "#93959f" }}>
                    Good food is always cooking!
                    Go ahead, order some yummy items from the menu.
                 </div> */}
                {
                    type === "CheckOut" ?
                        <div className={classes.head}>
                            <div className={classes.headImage}>
                                <img src={CartRestaurant.imageCover} alt={CartRestaurant.name} />
                            </div>
                            <div>
                                <div className={classes.headTextHead}>{CartRestaurant.name}</div>
                                <div className={classes.headTextSubHead}>Kilpauk</div>
                            </div>
                        </div>
                        :
                        <div className={classes.CartHead}>
                            <h1>Cart</h1>
                            <div className={classes.CartSubHead}>form <span>{CartRestaurant.name}</span></div>
                            <div className={classes.CartItemHead}>ITEM {CartItems.length}</div>
                        </div>
                }


                <div className={classes.ItemsList}>

                    {CartItems.map((SingleItem) => {
                        const SingleItemPrice = SingleItem.cost * SingleItem.ItemCount;
                        SubTotalCost += SingleItemPrice;
                        return (
                            <div className={classes.Item}>
                                <div>
                                    <span class="icon-foodSymbol icon-veg"></span>
                                </div>
                                <div className={classes.ItemName}>{SingleItem.name}</div>
                                <div>
                                    <ItemCountButton onChange={this.handleItemChange(SingleItem)} count={SingleItem.ItemCount} />
                                </div>
                                <div>{SingleItemPrice}</div>
                            </div>
                        );
                    }
                    )}

                    <div className={classes.Suggestion}>
                        <textarea placeholder="Any suggestions? We will pass it on..." rows="1"></textarea>
                    </div>
                    {
                        type === "CheckOut" ?
                            <div className={classes.Total}>
                                <div>
                                    <div>Item Total</div>
                                    <div>{SubTotalCost}.00</div>
                                </div>
                                <div>
                                    <div>Restaurant Packaging Charges</div>
                                    <div>10.00</div>
                                </div>
                                <div>
                                    <div>GST</div>
                                    <div>9.00</div>
                                </div>
                                <div>
                                    <div>Delivery Charges</div>
                                    <div>0.00</div>
                                </div>
                            </div>
                            :
                            ""
                    }
                </div>
                {
                    type === "CheckOut" ?
                        <div className={classes.TotalPrice}>
                            <div>TO PAY</div>
                            <div>{SubTotalCost + 19}</div>
                        </div>
                        :
                        <div className={classes.CartFooter}>
                            <div className={classes.SubTotalPrice}>
                                <div className={classes.HeadPrice}>
                                    <div>Subtotal</div>
                                    <div>{SubTotalCost}</div>
                                </div>

                                <div className={classes.SubHeadPrice}>Extra charges may apply</div>
                            </div>
                            <Link to="/checkout">
                                <button>CHECKOUT</button>
                            </Link>
                        </div>
                }
            </div>
        );
    }
}

const styles = theme => ({
    Cart: {
        background: "url(" + CartEmpty + ")",
        opacity: ".5",
        backgroundRepeat: "no-repeat",
        minHeight: "15em",
        backgroundSize: "contain",
    },
    CartContain: {
        padding: '26px',
        background: '#fff',
        marginTop: "2.4rem"
    },
    CartHead: {
        "& h1": {
            color: "#282C3F",
            margin: "0px",
            marginTop: "2rem"
        }
    },
    CartSubHead: {
        fontSize: ".88rem",
        color: "#282C3F",
        padding: "0 1px",
        paddingBottom: "5px",
        "& span": {
            color: "#79A2DC",
            fontWeight: "bold"
        }
    },
    CartItemHead: {
        color: "gray",
        fontSize: ".88rem",
        fontWeight: "bold"
    },
    head: {
        display: 'flex', flex: 1, flexDirection: 'row',
    },
    headImage: {
        marginRight: "1rem",
        "& img": {
            width: "4rem"
        }
    },
    headTextHead: { fontWeight: 'bold', fontSize: "1rem" },
    headTextSubHead: { color: "gray", fontSize: ".8rem" },
    Item: {
        display: "flex",
        flexDirection: 'row',
        padding: "1rem 0rem",
        fontSize: ".88rem",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "0px"
    },
    ItemName: {
        width: "40%"
    },
    Total: {
        display: "table",
        width: "100%",
        fontSize: ".8rem",
        color: "#757575",
        "&>div": {
            "&>div": {
                display: "table-cell",
                padding: "4px 0px",
                "&:last-child": {
                    textAlign: "right"
                }
            },
            display: "table-row"
        }
    },
    TotalPrice: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: "1rem 0rem",
        fontWeight: "bold",
        fontSize: ".8rem"
    },
    Suggestion: {
        padding: ".8rem 0px",
        borderTop: "1px dashed gray",
        borderBottom: "1px dashed gray",
        marginBottom: "5px",
        "& textarea": {
            border: "0px",
            resize: "none",
            outline: "none",
            width: "100%",
            font: "inherit",
            fontSize: ".8rem",
            marginTop: "4px"
        }
    },
    ItemsList: {
        padding: "1.5rem 0",
        overflowY: "scroll",
        paddingRight: '.5rem'
    },
    SubTotalPrice: {
        padding: "1rem .5rem",
        paddingLeft: "0px"
    },
    HeadPrice: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        fontWeight: "bold",
        color: "#4B4F5E",
    },
    SubHeadPrice: {
        fontSize: ".8rem",
        color: "gray"
    },
    CartFooter: {
        "& button": {
            background: "#60B246",
            width: "100%",
            padding: "1.5rem 1rem",
            border: "none",
            fontSize: "1.2rem",
            color: "#fff",
            fontWeight: "bold",
            outline: "none"
        }
    }
});
const mapStateToProps = (state) => {
    const { localState } = state;
    return {
        localState
    }
};
const mapDispatchToProps = (dispatch) => {
    const { CartItem } = localActions;

    return {
        actions: bindActionCreators({
            CartItem
        }, dispatch)
    };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Cart));

