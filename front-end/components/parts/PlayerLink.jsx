import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import LeaderIcon from "../modules/LeaderIcon";

export default class PlayerLink extends React.Component {
    render() {
        return (
            <Link to={`/player/${this.props.alias}`} className="listItem-link">
                <div className={classNames("listItem-rank", {isLeader: this.props.rank === 1})}>
                    {this.props.rank === 1 && <LeaderIcon className="listItem-leaderIcon"/>}
                    <span className="listItem-rankNumber">{this.props.rank}</span>
                </div>
                <div className="listItem-alias">{this.props.alias}</div>
                <div className="listItem-elo">{this.props.elo}</div>
            </Link>
        );
    }
};
