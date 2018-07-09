import React from "react";
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlayersPage from "./pages/PlayersPage";
import PlayerPage from "./pages/PlayerPage";
import GamesPage from "./pages/GamesPage";
import NotFound from "./pages/Notfound";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} update={this.refreshData}/>
                    <Route exact path='/players' component={PlayersPage}/>
                    <Route exact path='/games' component={GamesPage}/>
                    <Route path='/player/:alias' component={PlayerPage}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
};

export default hot(module)(App);
