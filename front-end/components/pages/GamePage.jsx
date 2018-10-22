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
            gameData: {id: this.props.match.params.id}
        }
    }


    componentDidMount() {
        axios.get('/api/v1/game/'+this.state.gameData.id)
            .then(res => {
                const gameData = res.data;
                this.setState({ gameData });
                console.log(gameData);
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
                <PageTitle title="Game Page"/>
            </div>
        );
    }
};
