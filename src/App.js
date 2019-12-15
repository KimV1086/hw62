import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainMovie from "./conteiners/MainMovie/MainMovie";
import MainBingo from "./conteiners/MainBingo/MainBingo";
import AddMovie from "./conteiners/AddMovie/AddMovie"
import Contacts from "./components/Contacts/Contacts";

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <div className="container">
                        <Switch>
                            <Route path='/' exact component={Contacts} />
                            <Route path='/movie' component={MainMovie} />
                            <Route path='/form' component={AddMovie} />
                            <Route path='/bingo' component={MainBingo}/>
                        </Switch>
                    </div>

                </BrowserRouter>
            </Fragment>

        );
    }
}

export default App;
