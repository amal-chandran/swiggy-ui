import React, { Component } from 'react';
import { Avatar, withStyles, List, ListItem, ListItemText } from 'material-ui'

class ListMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
    }

    static defaultProps = {
        selectionChanged: () => { }
    };

    setActiveItem = (id, data) => {
        this.setState({ active: id });
        this.props.selectionChanged(data);
    };

    render() {
        const classes = this.props.classes;
        const { active } = this.state;
        const { data } = this.props;
        return (
            <List className={classes.List}>
                {
                    data.map((SingleMenu, i) => {
                        return (
                            <ListItem key={i} className={classes.ListItem + " " + (active === i ? classes.ListItemActive : "")}
                                onClick={() => this.setActiveItem(i, SingleMenu)}>
                                <ListItemText
                                    classes={{ primary: classes.primary }}
                                    primary={SingleMenu.name} />
                            </ListItem>
                        );
                    })
                }
            </List>
        );
    }
}

const styles = theme => ({
    ListItem: {
        textAlign: "right",
        "&:hover $avatar": {
            transform: 'scale(1.2)',
            boxShadow: '0px 0px 4px #9e9e9e',
        },
        "&:hover $secondary,&:hover $primary": {
            color: '#e65100',
        },
        padding: "0 0px",
        fontSize: "1rem",
        cursor: "pointer",
        paddingRight: "4px"
    },
    ListItemActive: {
        borderRight: '4px solid #d51e',
        "& $primary": {
            color: "#e65100",
            fontWeight: "700"
        },
        "&:hover": {
            backgroundColor: 'none',
        },
        paddingRight: "0px"
    },
    primary: {}
});

export default withStyles(styles)(ListMenu)

