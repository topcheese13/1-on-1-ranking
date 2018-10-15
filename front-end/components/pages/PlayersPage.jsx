import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "../modules/List";
import PlayerLink from "../parts/PlayerLink";
import PageTitle from "../parts/PageTitle";
import classNames from "classNames";

export default class PlayersPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerList: [{
                name: "Stéphane LaFlèche",
                alias: "slafleche",
                animal: "beaver",
            },{
                name: "Player 1",
                alias: "player1"
            },{
                name: "Player 2",
                alias: "player2"
            },,{
                name: "Player 3",
                alias: "player3"
            },{
                name: "Player 4",
                alias: "player4"
            },{
                name: "Player 5",
                alias: "player5"
            },{
                name: "Player 6",
                alias: "player6"
            },{
                name: "Player 7",
                alias: "player7"
            }],
        };
    }


    componentDidMount() {
        // axios.get('/api/v1/players', {
        // })
        //     .then((response) => {
        //         this.setState({
        //             playerList: response.data || [],
        //         });
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
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
