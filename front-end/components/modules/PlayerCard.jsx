import React from "react";
import LeaderIcon from "./LeaderIcon";
import classNames from "classnames";
import WinnerIcon from "./WinnerIcon";
import {Link} from "react-router-dom";

export default class PlayerCard extends React.PureComponent {
    render() {
        const userNameURI = (this.props.alias || "").toLowerCase().replace(" ", "_");
        const avatar = this.props.avatar || '/images/generic_player_avatar.png';
        const isLeader = this.props.rank === 1;
        const isWinner = this.props.winner;
        const isLoser = this.props.loser;
        const image = <div className="playerCard-avatarImage" style={{backgroundImage: `url("${avatar}")`}}/>;
        const wrappedImage = isWinner ? image : <div className="playerCard-avatarFlip">{image}</div>;

        const card = (
            <React.Fragment>
                <div className="playerCard-frame">
                    <div className="playerCard-avatar">
                        {wrappedImage}
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
                    <strong>Score:&nbsp;</strong>
                    {this.props.elo}
                </div>
                {isWinner &&
                    <div className="playerCard-winner playerCard-result">
                        <span className="playerCard-resultText">Winner!</span>
                    </div>
                }
                {isLoser &&
                    <div className="playerCard-loser playerCard-result">
                        <span className="playerCard-resultText">Loser</span>
                    </div>
                }
            </React.Fragment>
        );

        if (this.props.asLink) {
            return (
                <Link to={`/player/${userNameURI}`} className={classNames("playerCard", {isWinner, isLoser})}>
                    {card}
                </Link>
            );
        } else {
            return (
                <div className="playerCard">
                    {card}
                </div>
            );
        }
    }
};
