import React, { Component } from "react";
import { hot } from 'react-hot-loader'

class App extends Component {
    render() {
        return (
            <div className="pageTitle">
                <p>React here! hi</p>
            </div>
        );
    }
};

export default hot(module)(App);