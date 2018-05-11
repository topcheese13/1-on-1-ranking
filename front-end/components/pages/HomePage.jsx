import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <DocumentTitle title='My Web App'>
                    <h1>Home Page</h1>
                </DocumentTitle>
                <Link to='/players'>Players</Link>
            </div>
        );
    }
};
