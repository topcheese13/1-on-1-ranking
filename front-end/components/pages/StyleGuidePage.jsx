import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="app">
                <DocumentTitle title='Vanilla Ping Pong League'>
                    <h1 className="pageTitle">Vanilla Ping Pong League</h1>
                </DocumentTitle>

                <div className="columns widget">
                    <div className="column isHalf">
                        <div className="list">
                            <h2 className="widget-title">Top 10 Players</h2>
                            <ul className="list-items">
                                <li className="list-item">
                                    <div className="ranking">
                                        <div className="ranking-rank">
                                            1
                                        </div>
                                        <div className="ranking-player">
                                            Minou
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item">
                                    <div className="ranking">
                                        <div className="ranking-rank">
                                            2
                                        </div>
                                        <div className="ranking-player">
                                            Pigeon
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <Link to="#" className="viewAll">
                            All Rankings
                        </Link>
                    </div>
                    <div className="column isHalf">
                        <div className="list">
                            <h2 className="widget-title">Latest Games</h2>
                            <ul className="list-items">
                                <li className="list-item">
                                    <div className="ranking">
                                        <div className="ranking-rank">
                                            1
                                        </div>
                                        <div className="ranking-player">
                                            Minou
                                        </div>
                                    </div>
                                </li>
                                <li className="list-item">
                                    <div className="ranking">
                                        <div className="ranking-date">
                                            2
                                        </div>
                                        <div className="ranking-player ranking-winner">
                                            Pigeon
                                        </div>
                                        <div className="ranking-vs">VS</div>
                                        <div className="ranking-player ranking-loser">
                                            Pigeon
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <Link to="#" className="viewAll">
                            All games
                        </Link>
                    </div>
                </div>


                <div class="inputGame widget">
                    <h2 className="widgetTitle">Add New Game</h2>
                    <div className="columns">
                        <div className="column">
                            <h3 className="inputGame-playerType inputGame-winner">
                                Winner
                            </h3>
                            <select class="inputGame-players">
                                <option className="inputGame-player">Player 1</option>
                                <option>Player 2</option>
                            </select>
                        </div>
                        <div className="column">
                            <h3 className="inputGame-playerType inputGame-loser">
                                Loser
                            </h3>
                            <select className="inputGame-players">
                                <option className="inputGame-player">Player 1</option>
                                <option>Player 2</option>
                            </select>
                        </div>
                        <div className="column">

                        </div>
                    </div>
                </div>

                <div className="modal gameConfirmation">
                    <h2 className="modalTitle">Confirm Results</h2>
                    <div className="gameConfirmation-player gameConfirmation-winner">
                        <strong>Winner: </strong>Player 1
                    </div>
                    <div className="gameConfirmation-player gameConfirmation-loser">
                        <strong>Loser: </strong>Player 2
                    </div>
                    <form class="gameConfirmation-form">
                        <button class="button button-cancel" type="button">
                            Cancel
                        </button>
                        <button class="button button-confirm">
                            Confirm
                        </button>
                    </form>
                </div>


                <h2>Player Profile</h2>

                <div className="profile">
                    <div className="widget columns">
                        <div className="column">
                            <div className="profile-avatar"></div>
                        </div>
                        <div className="column">
                            <h2 className="widget-title">
                                Latest Games
                            </h2>
                            [Latest Games List]
                        </div>
                    </div>
                    <div className="widget playerGraph">
                        [Player Graph]
                    </div>
                </div>
            </div>
        );
    }
};
