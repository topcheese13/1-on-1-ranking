import React from "react";
import axios from "axios/index";
import PlayerOption from "./PlayerOption";

export default class CreateGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlayerID: "",
            winner: "",
            loser: "",
            playerList: [{
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

        this.setWinner = this.setWinner.bind(this);
        this.setLoser = this.setLoser.bind(this);
        this.submitGame = this.submitGame.bind(this);
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

    setWinner(e) {
        this.setState({
            winner: e.target.value,
            selectedPlayerID: e.target.value,
        });
    }
    setLoser(e) {
        this.setState({
            loser: e.target.value,
            selectedPlayerID: e.target.value,
        });
    }

    submitGame(e) {
        event.preventDefault();
        alert("TO DO!");
    }

    render() {
        return (
            <form className="newGame" method="put" onSubmit={this.submitGame}>
                <h2 className="subTitle">
                    Enter new Game
                </h2>
                <div className="grid">
                    <div className="grid-cell">
                        <PlayerOption label="Select WINNER" className="newGame-winner isLeft" onChange={this.setWinner} children={this.state.playerList} selectedPlayerID={this.state.selectedPlayerID}/>
                    </div>
                    <div className="grid-cell">
                        <PlayerOption label="Select LOSER" className="newGame-loser isRight" onChange={this.setLoser} children={this.state.playerList} selectedPlayerID={this.state.selectedPlayerID}/>
                    </div>
                </div>
                <button type="submit" className="submit" disabled={(this.state.winner === "" || this.state.loser === "")}>
                    Validate
                </button>
            </form>
        );
    }
};
