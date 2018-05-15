import React from "react";
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlayersPage from "./pages/PlayersPage";
import PlayerPage from "./pages/PlayerPage";
import NotFound from "./pages/Notfound";
import StyleGuidePage from "./pages/StyleGuidePage";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} update={this.refreshData}/>
                    <Route exact path='/players' component={PlayersPage}/>
                    <Route path='/player/:alias' component={PlayerPage}/>
                    <Route path='/styleguide' component={StyleGuidePage}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }
};

export default hot(module)(App);
