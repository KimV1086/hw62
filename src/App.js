import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainContainer from "./conteiner/MainContainer";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={MainContainer} />
                    <Route path='/about' component={About} />
                    <Route path='/contacts' component={Contacts} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
