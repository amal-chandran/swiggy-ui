import React, { Component } from "react";
import { Grid, Button, withStyles } from 'material-ui';
import Select from 'react-select';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { localActions } from "./../Actions";

class SelectLocations extends React.Component {
    state = {
        selectedOption: '',
    }
    locations = [{ value: 'Ahmedabad', label: 'Ahmedabad' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Gurgaon', label: 'Gurgaon' },
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Pune', label: 'Pune' }];


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


    render() {
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;

        return (
            <div style={{ display: "flex", border: "1px solid rgb(252, 128, 25)" }}>
                <Select
                    style={{ border: "0px solid gray", borderRadius: "0px" }}
                    wrapperStyle={{ flexGrow: '1' }}
                    name="form-field-name"
                    value={value}
                    placeholder="Select your location ..."
                    onChange={this.handleChange}
                    options={this.locations}
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

const mapDispatchToProps = (dispatch) => {
    const setLocation = localActions.setLocation;
    return {
        actions: bindActionCreators({
            setLocation
        }, dispatch)
    };
};

export default connect(() => ({}), mapDispatchToProps)(SelectLocations);