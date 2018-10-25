import React from "react";
import PlayerCard from "./PlayerCard";
import moment from "moment";



export default class GameCard extends React.PureComponent {
    render() {
        return (
            <div className="gameCard">
                <div className="vs">
                    <PlayerCard {...this.props.winner} winner={true} asLink={true}/>
                    <div className="vs-separator">
                        <div className="vs-vs">
                            VS
                        </div>
                    </div>
                    <PlayerCard {...this.props.loser} loser={true} asLink={true}/>
                </div>
                <ul className="match">
                    <li className="match-statInfo">
                        <h3 className="match-stat">
                            Season:
                        </h3>
                        &nbsp;
                        <span className="match-statValue">
                            {this.props.season_id}
                        </span>
                    </li>
                    <li className="match-statInfo">
                        <h3 className="match-stat">
                            Time: &nbsp;
                        </h3>
                        <span className="match-statValue">
                            {moment(this.props.created_at).format('MMMM Do YYYY, h:mm a')}
                        </span>
                    </li>
                </ul>
            </div>
        );
    }
};
