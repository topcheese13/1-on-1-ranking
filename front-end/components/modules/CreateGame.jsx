import React from "react";
import axios from "axios/index";

export default class CreateGame extends React.Component {
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
        return ( <div>
                <form method="put">
                    <select>
                        {
                            this.state.playerList.map((player, i) => {
                                console.log(player);
                            })
                        }
                    </select>
                </form>
            </div>

        );
    }
};
