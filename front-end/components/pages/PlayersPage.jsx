import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "../modules/List";
import PlayerLink from "../parts/PlayerLink";

export default class PlayersPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerList: [],
        };
    }


    componentDidMount() {
        axios.get('/api/v1/players', {
        })
            .then((response) => {
                this.setState({
                    playerList: response.data || [],
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <DocumentTitle title='Elo Rankings'>
                    <h1>Players Page</h1>
                </DocumentTitle>
                <Link to='/'>Home</Link>
                <List items={this.state.playerList} component={PlayerLink}/>
            </div>
        );
    }
};
