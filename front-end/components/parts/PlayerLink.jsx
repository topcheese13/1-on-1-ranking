import React from "react";
import { Link } from "react-router-dom";
import classNames from "classNames";

export default class PlayerLink extends React.Component {
    render() {
        return (
            <Link to={`/player/${this.props.alias}`} className="listItem-link">
                {this.props.alias}
            </Link>
        );
    }
};
