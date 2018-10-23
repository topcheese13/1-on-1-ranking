import React from "react";
import { Link } from "react-router-dom";
import LeaderIcon from "../modules/LeaderIcon";

export default class GameLink extends React.Component {
    render() {
        return (
            <Link to={`/game/${this.props.id}`} className="listItem-link listItems-match">
                <span className="listItem-rank">{this.props.index}</span>
                <span className="listItem-winner">
                    <LeaderIcon className="listItem-winnerIcon"/>
                    {this.props.winnerAlias}
                </span>
                <span className="listItem-vs">VS</span>
                <span className="listItem-loser" title="Loser">{this.props.loserAlias}</span>
            </Link>
        );
    }
};
