import React, {Component} from "react";
import PropTypes from "prop-types";

const MessageView = ({statusMessage}) => {
//    render() {
//         const statusMessage = this.props.statusMessage;
//         const id = this.props.key;
        const {from, status, content } = statusMessage;

        return (
            <div className="message">
                <div className="field">
                    <span className="label">From: </span>
                    <span className="value">{from}</span>
                </div>
                <div className="field">
                    <span className="label">Status: </span>
                    <span className="value"> {status}</span>
                </div>
                <div className="field content">
                    <span className="label">Message: </span>
                    <span className="value">{content}</span>
                </div>
            </div>
        )

    // }

}

MessageView.propTypes = {
    statusMessage : PropTypes.object.isRequired
}

export default MessageView;