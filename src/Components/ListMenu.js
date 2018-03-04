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
                            <ListItem key={i} button className={classes.ListItem + " " + (active === i ? classes.ListItemActive : "")}
                                onClick={() => this.setActiveItem(i, SingleMenu)}>
                                <Avatar className={classes.avatar}>
                                    <i className={SingleMenu.icon}></i>
                                </Avatar>
                                <ListItemText
                                    classes={{ primary: classes.primary, secondary: classes.secondary }}
                                    primary={SingleMenu.name}
                                    secondary={SingleMenu.subname} />
                            </ListItem>
                        );
                    })
                }
            </List>
        );
    }
}

const styles = theme => ({
    avatar: {
        backgroundColor: '#d51e',
        display: 'flex',
        transition: 'all .2s ease-in-out',
    },
    List: {
        boxShadow: '0px 0px 17px #dadada'
    },
    ListItem: {
        "&:hover $avatar": {
            transform: 'scale(1.2)',
            boxShadow: '0px 0px 4px #9e9e9e',
        },
        "&:hover $secondary,&:hover $primary": {
            color: '#e65100',
        },
    },
    ListItemActive: {
        backgroundColor: '#d51e',
        "& $secondary,& $primary,&:hover $secondary,&:hover $primary": {
            color: "#fff"
        },
        "& $avatar": {
            backgroundColor: 'white',
            transform: 'scale(1.2)',
            boxShadow: '0px 0px 4px #9e9e9e',
            "& i": {
                color: "#e65100"
            }
        },
        "&:hover": {
            backgroundColor: '#e65100',
        },
    },
    secondary: {
        fontSize: 'x-small',
        fontWeight: 'normal',
    },
    primary: {
        fontWeight: '700',
    }
});

export default withStyles(styles)(ListMenu)

