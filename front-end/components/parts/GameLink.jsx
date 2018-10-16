import React from "react";
import { Link } from "react-router-dom";

export default class GameLink extends React.Component {
    render() {
        return (
            <Link to={`/game/${this.props.id}`} className="listItem-link listItems-match">
                <span className="listItem-rank">{this.props.index}</span>
                <span className="listItem-winner">
                    <svg className="listItem-winnerIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 162.555">
                        <title>Crown</title>
                        <path fill="currentColor" d="M284.919,83.772s-43.806,5.877-59.61,39a24.438,24.438,0,0,1,7.7,15.474,26.315,26.315,0,0,1,.1,4.752c-.687,11.184-8.211,20.73-18.693,21.891h-.012a18.584,18.584,0,0,1-2.139.12c-11.592,0-20.121-10.077-20.847-22.023a26.148,26.148,0,0,1,.105-4.74,24.09,24.09,0,0,1,9.981-17.283,164.776,164.776,0,0,0-39.213-43.674c-3.207-2.469-6.573-4.872-10.14-7.182-.714-.474-1.425-.924-2.151-1.386q-6.556,4.122-12.294,8.571a164.806,164.806,0,0,0-39.225,43.674,24.045,24.045,0,0,1,9.969,17.283,25.928,25.928,0,0,1,.12,4.74c-.687,11.2-8.2,20.742-18.7,21.9h-.012a18.584,18.584,0,0,1-2.139.12c-11.607,0-20.121-10.077-20.847-22.023a25.928,25.928,0,0,1,.12-4.74,24.481,24.481,0,0,1,7.683-15.474C58.365,93.969,30.624,86.337,19.707,84.411a44.272,44.272,0,0,0-4.62-.636H15s.039.054.105.171c1.44,2.154,15.831,24.375,24.042,60.363a225.951,225.951,0,0,1,5.664,53.367l210.363-.015c-.018-.963-.018-1.911-.018-2.877a226.433,226.433,0,0,1,5.679-50.463c7.644-33.51,20.649-55.071,23.58-59.637.21-.342.369-.594.477-.738.069-.12.108-.174.108-.174Z" transform="translate(-15 -68.724)"/>
                        <rect fill="currentColor" x="30.069" y="136.005" width="209.862" height="26.55"/>
                    </svg>
                    {this.props.winnerAlias}
                </span>
                <span className="listItem-vs">VS</span>
                <span className="listItem-loser" title="Loser">{this.props.loserAlias}</span>
            </Link>
        );
    }
};
