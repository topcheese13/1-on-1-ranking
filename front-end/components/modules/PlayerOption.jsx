import React from "react";
import classNames from "classNames";

export default class PlayerOption extends React.Component {
    render() {
        const players = this.props.children.map((player, i) => {
            return <option key={`playerKey-${i}`} value={player.alias} disabled={player.alias === this.props.selectedPlayerID}>{player.alias}</option>
        });
        return (
            <label className={classNames("newGame-player", this.props.className)}>
                <span className="newGame-label">
                    {this.props.label}
                </span>
                <select defaultValue="" className="select" onChange={this.props.onChange}>
                    <option value="">
                        Select Player
                    </option>
                    {players}
                </select>
            </label>
        );
    }
};
