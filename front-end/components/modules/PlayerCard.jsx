import React from "react";
import LeaderIcon from "./LeaderIcon";
import classNames from "classnames";

export default class PlayerCard extends React.PureComponent {
    render() {
        console.log(this.props.alias);
        const avatar = this.props.avatar ? this.props.avatar : `/images/${(this.props.alias + ".png" || "").toLowerCase().replace(" ", "")}`;
        return (
            <a href={`/player/${this.props.id}`} className="playerCard">
                <div className="playerCard-frame">
                    <div className="playerCard-avatar" style={{backgroundImage: `url("${avatar}")`}}/>
                    <div className={classNames("playerCard-rank", {isLeader: this.props.rank === 1})}>
                        {this.props.rank === 1 && <LeaderIcon className="playerCard-leaderIcon"/>}
                        {this.props.rank !== 1 && <span className="playerCard-rankNumber">{this.props.rank}</span>}
                    </div>
                </div>
                <div className="playerCard-alias">
                    {this.props.alias}
                </div>
                <div className="playerCard-elo">
                    {this.props.elo}
                </div>
                {this.props.winner ? <div className="playerCard-winner">Winner!</div> : <div className="playerCard-loser">Loser</div>}
            </a>
        );
    }
};
