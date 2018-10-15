import React from "react";
import DocumentTitle from "react-document-title";
import classNames from "classNames";

export default class GameLink extends React.Component {
    render() {
        return (
            <div className="content">
                <DocumentTitle title={this.props.title}>
                    <h1 className={classNames("pageTitle", this.props.className)}>
                        {this.props.title}
                    </h1>
                </DocumentTitle>
            </div>
        );
    }
};
