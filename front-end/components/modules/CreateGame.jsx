import React from "react";
import axios from "axios";
import PlayerOption from "./PlayerOption";
import {Redirect} from "react-router";

export default class CreateGame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playerList: [],
            done: false,
        };

        this.setWinner = this.setWinner.bind(this);
        this.setLoser = this.setLoser.bind(this);
        this.submitGame = this.submitGame.bind(this);
        this.done = this.done.bind(this);
    }

    componentDidMount() {
        axios.get('/api/v1/players')
            .then(res => {
                const playerList = res.data;
                this.setState({ playerList });
            })
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

    done() {
        this.setState({
            done: true,
        });
    };

    submitGame(e) {
        e.preventDefault();
        const doneGame = this.done;
        axios.post('/api/v1/game/', { winner: this.state.winner, loser: this.state.loser })
            .then(function(response){
                if(response.data === true) {
                    doneGame();
                }
            });
    }

    render() {
        if (!this.state.done) {
            let playerOption1;
            let playerOption2;


            if (this.state && this.state.playerList) {
                playerOption1 = <PlayerOption label="Select WINNER" className="newGame-winner isLeft" onChange={this.setWinner} children={this.state.playerList} selectedPlayerID={this.state.selectedPlayerID}/>
                playerOption2 = <PlayerOption label="Select LOSER" className="newGame-loser isRight" onChange={this.setLoser} children={this.state.playerList} selectedPlayerID={this.state.selectedPlayerID}/>
            }

            return (
                <form className="newGame" method="put" onSubmit={this.submitGame}>
                    <h2 className="subTitle">
                        Enter new Game
                    </h2>
                    <div className="grid">
                        <div className="grid-cell">
                            {playerOption1}
                        </div>
                        <div className="grid-cell">
                            {playerOption2}
                        </div>
                    </div>
                    <button type="submit" className="submit" disabled={(this.state.winner === "" || this.state.loser === "")}>
                        Validate
                    </button>
                </form>
            );
        } else {
            return <Redirect to="/games" />;
        }
    }
};
