import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "../modules/List";
import GameLink from "../parts/GameLink";

export default class GamesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameList: [],
        };
    }


    componentDidMount() {
        axios.get('/api/v1/games', {
        })
            .then((response) => {
                this.setState({
                    gameList: response.data || [],
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
                <List items={this.state.gameList} component={GameLink}/>
            </div>
        );
    }
};
