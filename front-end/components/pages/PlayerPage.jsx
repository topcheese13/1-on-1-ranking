import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PageTitle from "../parts/PageTitle";
import PlayerCard from "../modules/PlayerCard";

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
                this.setState({
                    playerData: res.data
                });
            });
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
                    <PlayerCard {...this.state.playerData}/>
                </div>

            </div>
        );
    }
};
