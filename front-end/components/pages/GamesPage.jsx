import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "../modules/List";
import GameLink from "../parts/GameLink";
import PageTitle from "../parts/PageTitle";
import classNames from "classNames";

export default class GamesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameList: []
        }
    }

    componentDidMount() {
        axios.get('/api/v1/games/latest')
            .then(res => {
                const gameList = res.data;
                this.setState({ gameList });
            })
    }

    render() {
        return (
            <div className="page">
                <div className="content">
                    <div className="breadcrumbs">
                        <span className="breadcrumb">
                            <Link to='/' className="breadcrumb">Home</Link>
                        </span>
                    </div>
                </div>
                <PageTitle title="Games Page"/>
                <div className="content">
                    <List items={this.state.gameList} component={GameLink}/>
                </div>
            </div>
        );
    }
};
