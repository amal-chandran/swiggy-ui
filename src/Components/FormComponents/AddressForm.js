import React, { Component } from 'react';
import { Form, Control } from 'react-redux-form';
import LocationPicker from 'react-location-picker';
import { Button } from 'material-ui';
import { actions as RRFActions } from 'react-redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TextBoxRRF, SubmitButton } from './Controls';
import { Address } from './../../Resource';

const defaultPosition = {
    lat: 27.9878,
    lng: 86.9250
};

class AddressForm extends Component {
    state = {
        address: "Kala Pattar Ascent Trail, Khumjung 56000, Nepal"
    }
    handleLocationChange = ({ position, address }) => {
        this.setState({ position, address });
        this.props.actions.change("addressForm.address", address);
    }
    onSubmit = (data) => {
        console.log(data);
        const { authLogin, authData } = this.props.userAuth;
        if (authLogin) {
            const AddressData = { ...data };
            AddressData.uid = authData.hasura_id;
            this.props.actions.addAddress(AddressData);
        }
    }

    render() {
        return (
            <Form model="addressForm" onSubmit={this.onSubmit}>
                <LocationPicker
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '200px' }} />}
                    defaultPosition={defaultPosition}
                    onChange={this.handleLocationChange}
                />
                <TextBoxRRF type="text" labelName={"Address"} model={"addressForm.address"} />
                <div className="control-group">
                    <div className="control-item textfield-group">
                        <TextBoxRRF type="text" labelName={"Door / Falt No"} model={"addressForm.doorflatno"} />
                        <TextBoxRRF type="text" labelName={"Landmark"} model={"addressForm.landmark"} />
                        {/* <TextBoxRRF type="text" labelName={"Address"} model={"addressForm.address"} /> */}
                    </div>

                    <div className="control-item button-group">
                        {
                            [
                                {
                                    value: "home",
                                    name: "Home",
                                    icon: "icon-home",
                                    default: true
                                },
                                {
                                    value: "work",
                                    name: "Work",
                                    icon: "icon-work",
                                    default: true
                                },
                                {
                                    value: "other",
                                    name: "Other",
                                    icon: "icon-location",
                                    default: true
                                }
                            ].map((SingleItem, i) => {
                                return (
                                    <div key={i} className="radio-group">
                                        <Control.radio
                                            id={"addressForm_" + SingleItem.value}
                                            checked={SingleItem.default ? true : false}
                                            value={SingleItem.value}
                                            model={"addressForm.addresstype"} />

                                        <label for={"addressForm_" + SingleItem.value} className="mui-btn">
                                            <i className={SingleItem.icon}></i>
                                            {SingleItem.name}
                                        </label>
                                    </div>
                                );
                            })
                        }

                        {/* <div className="radio-group">
                            <Control.radio id="addressForm_work" value="work" model={"addressForm.type"}></Control.radio>
                            <label for="addressForm_work" className="mui-btn">Work</label>
                        </div>
                        <div className="radio-group">
                            <Control.radio id="addressForm_other" value="other" model={"addressForm.type"}></Control.radio>
                            <label for="addressForm_other" className="mui-btn">Other</label>
                        </div> */}
                    </div>


                </div>
                <SubmitButton>
                    Save
                </SubmitButton>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    const { addressForm, userAuth } = state;
    return {
        addressForm, userAuth
    }
};
const mapDispatchToProps = (dispatch) => {
    const { change } = RRFActions;
    const { addAddress } = Address;

    return {
        actions: bindActionCreators({
            change, addAddress
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);