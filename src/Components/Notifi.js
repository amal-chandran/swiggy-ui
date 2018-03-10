import React, { Component } from "react";
import NotificationSystem from "react-notification-system";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { notifiActions } from "./../Actions";
import isEmpty from "lodash/isEmpty";

class Notifi extends Component {

    notificationSystem = null;

    componentWillReceiveProps(nextProps) {
        this.notificationSystem = this.refs.notificationSystem;
        const { removeData, newData } = nextProps.notifi;

        if (!isEmpty(removeData)) {
            this.notificationSystem.removeNotification(removeData.NotifiID);
        }

        if (!isEmpty(newData)) {
            this.notificationSystem.addNotification({
                uid: newData.NotifiID,
                message: newData.message,
                level: newData.type,
                ...newData
            });
        }
    };

    render() {
        return (
            <div>
                <NotificationSystem ref="notificationSystem" />
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    const { notifi } = state;
    return { notifi };
};

const mapDispatchToProps = (dispatch) => {
    const removeNotifi = notifiActions.removeNotifi;
    return {
        actions: bindActionCreators({ removeNotifi }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifi);