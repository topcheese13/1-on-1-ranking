import React from "react";
import { Link } from "react-router-dom";

export default class PlayerLink extends React.Component {
    render() {
        return (
            <Link to={`/player/${this.props.alias}`}>{this.props.alias}</Link>
        );
    }
};
