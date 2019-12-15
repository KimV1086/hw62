import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import Bingo from '../../components/Bingo/Bingo';

let arr = [];

const rand = () => {

    while (arr.length < 5) {

        const randomNum = Math.floor(Math.random() * 31 + 5);

        if (!arr.includes(randomNum)) {
            arr.push(randomNum);
            arr.sort((a, b) => a - b);
        }

    }

};
rand();

class MainBingo extends Component {

    state = {
        number: arr,
    };

    changeNumber = () => {
        arr = [];
        rand();
        this.setState({number: arr});
    };


    render() {
        return (
            <Fragment>
                <Header/>
                <div className="App">
                    <div className="block">
                        <button className="btn" onClick={this.changeNumber}>New Numbers</button>
                        <div className="number-box">
                            {this.state.number.map((num, key) => {
                                return <Bingo key={key} num={this.state.number[key]}/>
                            })}
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }
}
export default MainBingo;
