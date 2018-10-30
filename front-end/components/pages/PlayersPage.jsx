import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "../modules/List";
import PlayerLink from "../parts/PlayerLink";
import PageTitle from "../parts/PageTitle";

export default class PlayersPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerList: []
        }
    }

    componentDidMount() {
        axios.get('/api/v1/players/elo')
            .then(res => {
                const playerList = res.data;
                this.setState({ playerList });
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
                <PageTitle title="Player Roster"/>
                <div className="content">
                    <List items={this.state.playerList} component={PlayerLink} className="playerRoster"/>
                </div>
            </div>
        );
    }
};
