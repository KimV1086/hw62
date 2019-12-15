import React, {Fragment} from 'react';
import Header from "../Header/Header";

const Home = props => {
    return (
        <Fragment>
            <Header/>
            <div className="main">
                <h1>Home page</h1>
            </div>
        </Fragment>
    );
};

export default Home;
