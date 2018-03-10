import React, { Component } from 'react';
import { Grid, Button } from 'material-ui';
import { withStyles } from 'material-ui';
import Select from 'react-select';


import { Normal } from "./../Layouts";
// import About from './../Components/SmallComponents/About';

class Home extends Component {

    render() {
        const classes = this.props.classes;
        return (
            <Normal>
                <Grid style={{ height: "30rem" }} container alignItems="center" justify="center">
                    <Grid item>
                        <h1 style={{ textAlign: "center", color: "#fff", textShadow: "1px 1px 4px rgba(0,0,0,.8)", fontWeight: "50" }}>Order from restaurants near you</h1>
                        <SelectLocations />
                        {/* If your location is unavailable please select your nearest city */}
                    </Grid>
                </Grid>
            </Normal>
        );
    }
}

export default Home;

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
                <Button style={{
                    backgroundColor: "#fc8019", color: "white", padding: "0 1rem",
                    borderRadius: "0px", fontWeight: "bold", fontSize: "1rem"
                }}> FIND FOOD </Button>
            </div>
        );
    }
}