import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";
import CreateGame from '../modules/CreateGame.jsx';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <DocumentTitle title='Elo Rankings'>
                    <h1>Home Page</h1>
                </DocumentTitle>
                <p>
                    <Link to='/players'>Players</Link>
                </p>
                <p>
                    <Link to='/games'>Games</Link>
                </p>
                <CreateGame/>
            </div>
        );
    }
};
