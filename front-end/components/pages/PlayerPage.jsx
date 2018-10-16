import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PageTitle from "../parts/PageTitle";
import classNames from "classNames";

export default class PlayerPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerData: {alias: this.props.match.params.alias}
        }
    }

    componentDidMount() {
        axios.get('/api/v1/player/'+this.state.playerData.alias)
            .then(res => {
                const playerData = res.data;
                this.setState({ playerData })
            })
    }

    render() {
        const title = `${this.state.playerData.alias}'s Player Page`;
        return (
            <div className="page">
                <div className="content">
                    <div className="breadcrumbs">
                        <span className="breadcrumb">
                            <Link to='/' className="breadcrumb">Home</Link>
                        </span>
                        <span className="breadcrumb">
                            <span className="breadcrumb-separator"> >> </span>
                        </span>
                        <span className="breadcrumb">
                            <Link to='/players' className="breadcrumb">Player Roster</Link>
                        </span>
                    </div>
                </div>

                <PageTitle title={title}/>

                <div className="content">
                    <div>
                        ID: {this.state.playerData.id}
                    </div>
                    <div>
                        Alias: {this.state.playerData.alias}
                    </div>
                    <div>
                        Elo: {this.state.playerData.elo}
                    </div><div>
                        Rank: {this.state.playerData.rank}
                    </div>
                    <div>
                        TODO: ADD Graph of current season elo evolution
                    </div>
                </div>

            </div>
        );
    }
};
