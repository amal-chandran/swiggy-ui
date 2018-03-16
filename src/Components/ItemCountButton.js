import React, { Component } from "react";
import { withStyles } from 'material-ui';

class ItemCountButton extends Component {

    state = {
        count: 0
    }

    static defaultProps = {
        onChange: (value) => { console.log(value) }
    }
    handleChangeSub = () => {
        if (this.state.count > 0) {
            let count = this.state.count - 1;
            this.setState({ count });
            this.props.onChange(count);
        }
    }
    handleChangeAdd = () => {
        let count = this.state.count + 1;
        this.setState({ count });
        this.props.onChange(count);
    }

    componentWillMount() {
        this.setState({ count: this.props.count });
    }

    componentWillReceiveProps(next) {
        this.setState({ count: next.count });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Container}>
                <button onClick={this.handleChangeSub}>-</button>
                <div>{this.state.count}</div>
                <button onClick={this.handleChangeAdd}>+</button>
            </div>
        );
    }
}

const stylesItemCount = {
    Container: {
        padding: "6px",
        border: "1px solid #d4d4d4",
        display: 'flex',
        flexDirection: 'row',
        fontSize: "1rem",
        color: "#08ad08",
        fontWeight: "bold",
        alignItems: "center",
        "& button": {
            background: "none",
            border: "0px",
            font: "inherit",
            width: "1.5rem",
            outline: "none",
            color: "inherit",
        },
        "& div": {
            padding: "0px 5px",
            fontSize: ".8rem"
        }
    }
};

export default withStyles(stylesItemCount)(ItemCountButton);