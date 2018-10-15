import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "../modules/List";
import GameLink from "../parts/GameLink";
import classNames from "classNames";
import PageTitle from "../parts/PageTitle";

export default class GamesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameList: [{
                winner: "slafleche",
                loser: "hyena",
            },{
                winner: "slafleche",
                loser: "hyena",
            },{
                winner: "slafleche",
                loser: "hyena",
            },{
                winner: "slafleche",
                loser: "hyena",
            },{
                winner: "slafleche",
                loser: "hyena",
            },{
                winner: "slafleche",
                loser: "hyena",
            },{
                winner: "slafleche",
                loser: "hyena",
            },{
                winner: "slafleche",
                loser: "hyena",
            },{
                winner: "slafleche",
                loser: "hyena",
            },{
                winner: "slafleche",
                loser: "hyena",
            }],
        };
    }


    componentDidMount() {
        // axios.get('/api/v1/games', {
        // })
        //     .then((response) => {
        //         this.setState({
        //             gameList: response.data || [],
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
                <PageTitle title="Games Page"/>
                <List items={this.state.gameList} component={GameLink}/>
            </div>
        );
    }
};
