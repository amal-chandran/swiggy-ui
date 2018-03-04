import React, { Component } from 'react';
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar'
import Input from 'material-ui/Input';

import ShoppingCart from 'material-ui-icons/ShoppingCart'
import Hot1 from '../Resources/Hot1.jpg'
import Hot2 from '../Resources/Hot2.jpg'
import Hot3 from '../Resources/Hot3.jpg'
import Hot4 from '../Resources/Hot4.jpg'
import Hot5 from '../Resources/Hot5.jpg'
import Hot6 from '../Resources/Hot6.jpg'
import SwiggyIcon from '../Resources/SwiggyIcon.png'
import TopBar from './../Components/SmallComponents/TopBar.js'
import Typography from 'material-ui/Typography'

import { RestaurantDetails, Wrapper } from './../Components';
import { UserLayout } from './../Layouts';

var header, sticky, slideIndex;
var selected = {};
const styles = theme => ({
    text: {
        fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
        '&::selection': {
            "color": "#f5861f",
            "background": "#f5f5f5",
        },

    },
    colorPrimary: {
        backgroundColor: '#f5861f',
        color: '#fff',

    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    inputInkbar: {
        '&:after': {
            backgroundColor: "#f5861f",
        },
    },
    active: {
        backgroundColor: '#f5861f',
    },
    dot: {
        height: "5px",
        width: '50px',
        margin: '0 2px',
        display: 'inline-block',
        transition: 'background-color 0.6s ease',
    },
    iconAvatar: {
        width: '70%',
        height: '121%',
        left: '2em',
        transform: 'scale(.6)',
    },
});
const locations = ['Ahmedabad', 'Bangalore', 'Chennai', 'Delhi', 'Gurgaon', 'Hyderabad', 'Kolkata', 'Mumbai', 'Pune',];

const SampleHotels = [{
    image: Hot1, address: '123,XYZ Nagar',
    name: 'Firewood Biryani',
    type: 'Chicken biryani,Chicken 65,Chicken Tikka',
    rating: '3.9',
    openingTime: '11.30 pm',
    closingTime: '8.00 am',
    dseliveryTime: '25mins',
    minCost: 'Rs.200 for Two',
}, {
    image: Hot2, address: '123,ABC Nagar',
    name: 'Fresh Bites',
    type: 'North Indian,South Indian,Chinese,Fast Food,Juices',
    rating: '4.5',
    openingTime: '7.30 pm',
    closingTime: '8.00 am',
    deliveryTime: '35mins',
    minCost: 'Rs.100 for Two',
}, {
    image: Hot3, address: '13,WES Nagar',
    name: 'The Bowl Company',
    type: 'Continental,Indian,Pan-Asian',
    rating: '4.5',
    closingTime: '8.00 am', openingTime: '8.30 am',
    deliveryTime: '20mins',
    minCost: 'Rs.300 for Two',
},
{
    image: Hot4, address: '344,CVB Nagar',
    name: 'Hotel Tom\'s Restaurant',
    type: 'North Indian,Biryani',
    rating: '3.8',
    closingTime: '8.00 am', openingTime: '11.30 am',
    deliveryTime: '50mins',
    minCost: 'Rs.150 for Two',
},
{
    image: Hot5, address: '1231,Gru Nagar',
    name: 'Tadka Singh',
    type: 'Punjabi,North Indian',
    closingTime: '8.00 am', rating: '4.1',
    deliveryTime: '58mins',
    openingTime: '9 am',
    minCost: 'Rs.300 for Two',
},
{
    image: Hot6, address: '007,Jamesbond Nagar',
    name: 'Art Of Delight',
    type: 'IceCream,Desserts',
    closingTime: '8.00 am', rating: '4.5',
    deliveryTime: '42mins',
    openingTime: '10 am',
    minCost: 'Rs.250 for Two',
}, {
    image: Hot1, address: '143,Valentine Street',
    name: 'The Firewood Biryani',
    type: 'Chicken biryani,Chicken 65,Chicken Tikka',
    closingTime: '8.00 am', rating: '3.9',
    deliveryTime: '25mins',
    openingTime: '11.30 am',
    minCost: 'Rs.200 for Two',
}, {
    image: Hot2, address: '001,Single- Nagar',
    name: 'The Fresh Bites',
    type: 'North Indian,South Indian,Chinese,Fast Food,Juices',
    closingTime: '8.00 am', rating: '4.5',
    deliveryTime: '35mins',
    openingTime: '7.30 am',
    minCost: 'Rs.100 for Two',
}, {
    image: Hot3, address: '35007,Near mental hospital',
    name: 'The Bowls Company',
    type: 'Continental,Indian,Pan-Asian',
    rating: '4.5',
    closingTime: '8.00 am', openingTime: '8.00 am',
    deliveryTime: '20mins',
    minCost: 'Rs.300 for Two',
},
{
    image: Hot4, address: '3.14,Choco Pie Street',
    name: 'Hotel Jerry\'s Restaurant',
    type: 'North Indian,Biryani',
    closingTime: '8.00 am', rating: '3.8',
    deliveryTime: '50mins',
    openingTime: '8.30 am',
    minCost: 'Rs.150 for Two',
},
{
    image: Hot5, address: '6,Sachin Nagar',
    name: 'Mahendra Singh',
    type: 'Punjabi,North Indian',
    closingTime: '8.00 am', rating: '4.1',
    deliveryTime: '58mins',
    openingTime: '10.30 am',
    minCost: 'Rs.300 for Two',
},
{
    image: Hot6, address: '0 C,Cool Captain Street',
    name: 'Art Of Eating',
    type: 'IceCream,Desserts',
    closingTime: '8.00 am', rating: '4.5',
    deliveryTime: '42mins',
    openingTime: '11.30 am',
    minCost: 'Rs.250 for Two',
},
];



class Showmenus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signInuserName: 'Siva Priya',
            loading: true,
            headerIsActive: false,
            orderedItems: 0,
            cartOpen: false,
            resObj: {},
            resize: false,
        };

        setInterval(this.showSlides, 4000);
        setTimeout(() => this.setState({ loading: false }), 6000);

    };
    componentDidMount() {
        var restaurantName = window.location.pathname.split('/').slice(-1)[0];
        var i;
        var restaurant = decodeURI(restaurantName);
        for (i = 0; i < SampleHotels.length; i++) {
            if (SampleHotels[i].name === restaurant)
                break;
        }
        this.setState({ resObj: SampleHotels[i] });
    };

    render() {
        const classes = this.props.classes;
        const { orderedItems, resObj } = this.state;

        return (
            <UserLayout>
                <Grid container>
                    <Grid style={{
                        background: "#000",
                        color: "#fff",
                        padding: '2rem'
                    }} item xs={12} >
                        <Wrapper>
                            <Grid container spacing={24}>
                                <Grid item>
                                    <div>
                                        <img src={resObj.image} alt="restaurant" style={{ height: '10rem' }} />
                                    </div>
                                </Grid>
                                <Grid item>

                                    <Grid container direction="column" style={{ height: "100%" }} justify="center" alignItems="center" >
                                        <Grid item>
                                            <div style={{
                                                fontWeight: "lighter",
                                                fontSize: "2rem"
                                            }}>{resObj.name}</div>
                                            <div style={{ fontSize: ".8rem", paddingBottom: "10px" }}>{resObj.type}</div>

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
                                                    <i className="fa fa-star"></i>{resObj.rating}
                                                </div>
                                                <div>
                                                    &bull;
                                                </div>
                                                <div>
                                                    {resObj.deliveryTime}
                                                </div>
                                                <div>
                                                    &bull;
                                                </div>
                                                <div>
                                                    {resObj.minCost}
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
                        <TopBar />
                    </Grid>
                </Grid>
            </UserLayout>

        );
    }
}

export default withStyles(styles)(Showmenus)

