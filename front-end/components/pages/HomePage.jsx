import React from "react";
import { Link } from "react-router-dom";
import CreateGame from '../modules/CreateGame.jsx';
import PageTitle from "../parts/PageTitle";
import classNames from "classNames";

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="page">
                <PageTitle title="Elo Rankings" className="isHome"/>

                <div className="bar">
                    <div className="content">
                        <div className="grid">
                            <div className="grid-cell">
                                <Link to='/players' className="button button3D isLeft">Players</Link>
                            </div>
                            <div className="grid-cell">
                                <Link to='/games' className="button button3D isRight">Games</Link>
                            </div>
                        </div>
                        <CreateGame/>
                    </div>
                </div>
            </div>
        );
    }
};
