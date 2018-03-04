import React, { Component } from 'react';
import {
    withStyles, Card, CardMedia,
    CardContent, CardActions, Button
} from "material-ui";
import RestaurantDetails from './RestaurantDetails';

const RestaurantCard = (props) => {
    const { classes, data } = props;
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={data.image}
                title={data.name}
            />
            <CardContent className={classes.cardContent}>
                <RestaurantDetails {...data} />
            </CardContent>
            <CardActions style={{ justifyContent: 'center', borderTop: '0.5px solid lightgrey' }}>
                <Button size="small" onClick={() => props.viewOpen(data)} style={{ color: '#5d8ed5' }} >
                    Quick View
											</Button>
            </CardActions>
        </Card>
    );
};

RestaurantCard.defaultProps = {
    viewOpen: () => { }
}
const styles = theme => ({
    card: {
        boxShadow: "none",
        padding: ".8rem",
        borderRadius: 0,
        paddingBottom: 1,
        '&:hover': {
            border: "1px solid #d4d4d4",
            padding: "calc(.8rem - 1px)",
            paddingBottom: '0',
            boxShadow: "0 0 18px #e0e0e0",
        },
    },
    media: {
        height: '14em',
    },
    cardContent: {
        padding: "0rem",
        paddingTop: "1rem",
        height: '6.5em',
    },
    button: {
        margin: '8px 0px 0px 4px',
        left: '4em',
    }
});
export default withStyles(styles)(RestaurantCard);