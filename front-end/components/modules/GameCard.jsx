import React from "react";
import PlayerCard from "./PlayerCard";

export default class GameCard extends React.PureComponent {
    render() {
        return (
            <div className="gameCard">
                <div className="vs">
                    <PlayerCard {...this.props.winner} winner={true}/>
                    <div className="vs-separator">
                        <div className="vs-vs">
                            VS
                        </div>
                    </div>
                    <PlayerCard {...this.props.loser} winner={false}/>
                </div>
                <ul className="match">
                    <li className="match-statInfo">
                        <span className="match-stat">
                            Season:
                        </span>
                        <span className="match-statValue">
                            {this.props.season_id}
                        </span>
                    </li>
                    <li className="match-statInfo">
                        <span className="match-stat">
                            Time:
                        </span>
                        <span className="match-statValue">
                            {this.props.created_at}
                        </span>
                    </li>
                </ul>
            </div>
        );
    }
};
