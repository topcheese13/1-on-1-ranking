import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PageTitle from "../parts/PageTitle";
import GameCard from "../modules/GameCard";

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
        if (this.state.gameData) {
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
                    <GameCard {...this.state.gameData}/>
                </div>
            );
        } else {
            return null;
        }
    }
};
