import React from "react";
import LeaderIcon from "./LeaderIcon";
import classNames from "classnames";
import WinnerIcon from "./WinnerIcon";

export default class PlayerCard extends React.PureComponent {
    render() {
        const isLeader = this.props.rank === 1;
        const isWinner = this.props.winner;

        const avatar = this.props.avatar ? this.props.avatar : `/images/${(this.props.alias + ".png" || "").toLowerCase().replace(" ", "")}`;
        return (
            <a href={`/player/${this.props.id}`} className={classNames("playerCard", {isWinner, isLoser: !isWinner})}>
                <div className="playerCard-frame">
                    <div className="playerCard-avatar">
                        <div className="playerCard-avatarImage" style={{backgroundImage: `url("${avatar}")`}}/>
                    </div>
                    <div className={classNames("playerCard-rank", {isLeader})}>
                        {this.props.rank === 1 && <LeaderIcon className="playerCard-leaderIcon"/>}
                        {this.props.rank !== 1 && <span className="playerCard-rankNumber">{this.props.rank}</span>}
                    </div>
                </div>
                <div className="playerCard-alias">
                    {isWinner && <WinnerIcon className="playerCard-resultIcon"/>}
                    {this.props.alias}
                </div>
                <div className="playerCard-elo">
                    {this.props.elo}
                </div>
                {isWinner ? (
                    <div className="playerCard-winner playerCard-result">
                        <span className="playerCard-resultText">Winner!</span>
                    </div>
                ) : (
                    <div className="playerCard-loser playerCard-result">
                        <span className="playerCard-resultText">Loser</span>
                    </div>
                )}
            </a>
        );
    }
};
