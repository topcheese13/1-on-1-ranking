import React from "react";
import DocumentTitle from "react-document-title";

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <DocumentTitle title='My Web App'>
                    <h1>Players Page</h1>
                </DocumentTitle>
                <Link to='/'>Home</Link>
            </div>
        );
    }
};
