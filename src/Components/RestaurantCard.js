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
            <CardActions className={classes.CardActions} >
                <Button classes={{ root: classes.button }} disableRipple size="small" onClick={() => props.viewOpen(data)} style={{}} >
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
        '& $CardActions': {
            visibility: 'hidden'
        },
        '&:hover $CardActions': {
            visibility: 'visible'
        },
    },
    CardActions: {
        justifyContent: 'center',
        borderTop: '0.5px solid lightgrey'
    },
    media: {
        minHeight: '14em',
    },
    cardContent: {
        padding: "0rem",
        paddingTop: "1rem",
        paddingBottom: ".4rem"
    },
    button: {
        color: '#5d8ed5',
        fontWeight: 'bold',
        "&:hover": {
            background: "none"
        }
    }
});
export default withStyles(styles)(RestaurantCard);