import React from "react";
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlayersPage from "./pages/PlayersPage";
import StyleGuidePage from "./pages/StyleGuidePage";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/players' component={PlayersPage}/>
                    <Route exact path='/styleguide' component={StyleGuidePage}/>
                    {/*<Route path='/players/:id' component={PlayersPage}/>*/}
                </Switch>
            </BrowserRouter>
        );
    }
};

export default hot(module)(App);
