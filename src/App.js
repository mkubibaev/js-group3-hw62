import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainContainer from "./containers/MainContainer/MainContainer";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={MainContainer}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
