import React, { Component } from "react";
import { Grid, Button, withStyles } from 'material-ui';
import Select from 'react-select';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { localActions } from "./../Actions";
import { Location } from './../Resource';

class SelectLocations extends React.Component {
    state = {
        selectedOption: '',
    }

    handleChange = (selectedOption) => {
        try {
            this.setState({ selectedOption });
            console.log(`Selected: ${selectedOption.label}`);
        } catch (error) {

        }
    }

    handleFindFood = () => {
        if (this.state.selectedOption) {
            this.props.actions.setLocation(this.state.selectedOption.value);
        }
    }

    componentWillMount() {
        this.props.actions.getLocations();
    }

    componentWillReceiveProps
    render() {
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        const { item } = this.props.location;
        let Items = item === null ? [] : item;
        Items = Items.map((data) => { return { value: data.name, label: data.name } });

        return (
            <div style={{ display: "flex", border: "1px solid rgb(252, 128, 25)" }}>
                <Select
                    style={{ border: "0px solid gray", borderRadius: "0px" }}
                    wrapperStyle={{ flexGrow: '1' }}
                    name="form-field-name"
                    value={value}
                    placeholder="Select your location ..."
                    onChange={this.handleChange}
                    options={Items}
                />
                <Button
                    onClick={this.handleFindFood}
                    style={{
                        backgroundColor: "#fc8019", color: "white", padding: "0 1rem",
                        borderRadius: "0px", fontWeight: "bold", fontSize: "1rem"
                    }}> FIND FOOD </Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { location } = state;
    return {
        location
    }
};

const mapDispatchToProps = (dispatch) => {
    const setLocation = localActions.setLocation;
    const { getLocations } = Location;
    return {
        actions: bindActionCreators({
            setLocation, getLocations
        }, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SelectLocations);


