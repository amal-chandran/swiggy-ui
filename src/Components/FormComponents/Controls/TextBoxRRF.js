import React, { Component } from 'react';
import { Control } from 'react-redux-form';

export default (props) => {
    const { labelName, ...ControlProps } = props;
    return (
        <div className="textfield-contain">
            <div className="mui-textfield mui-textfield--float-label">
                <Control {...ControlProps} />
                <label>{labelName}</label>
            </div>
        </div>
    );
}