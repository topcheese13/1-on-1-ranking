import React from "react";
import { Link } from "react-router-dom";

export default class List extends React.Component {
    render() {
        return (
            <Link to={`/player/${this.props.Alias}`}>{this.props.Alias}</Link>
        );
    }
};
