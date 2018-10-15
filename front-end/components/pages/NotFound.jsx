import React from "react";
import DocumentTitle from "react-document-title";

export default class NotFound extends React.Component {
    render() {
        return (
            <div className="notFound">
                <DocumentTitle title='404 Not Found'>
                    <img src="https://assets.hongkiat.com/uploads/funny-creative-error-404/14-error-404-page.jpg" />
                </DocumentTitle>
            </div>
        );
    }
};
