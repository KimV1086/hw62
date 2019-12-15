import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home/Home"
import MainMovie from "./conteiners/MainMovie/MainMovie";
import Contacts from "./components/Contacts/Contacts";

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <div className="container">
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/movie' component={MainMovie} />
                            <Route path='/contacts' component={Contacts} />
                        </Switch>
                    </div>

                </BrowserRouter>
            </Fragment>

        );
    }
}

export default App;
