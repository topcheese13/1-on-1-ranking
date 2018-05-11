import React from "react";
import DocumentTitle from "react-document-title";
import { Link } from "react-router-dom";
import axios from "axios";

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerData: [],
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        axios.get(`/api/v1/player/${params.alias}`, {
        })
            .then((response) => {
                this.setState({
                    playerData: response.data || [],
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
                    <h1>{this.state.playerData.Alias}'s Player Page</h1>
                </DocumentTitle>
                <Link to='/'>Home</Link>
                <div></div>
            </div>
        );
    }
};
