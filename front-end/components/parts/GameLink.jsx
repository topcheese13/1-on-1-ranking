import React from "react";
import { Link } from "react-router-dom";

export default class GameLink extends React.Component {
    render() {
        return (
            <Link to={`/game/${this.props.id}`}>{this.props.id}</Link>
        );
    }
};
