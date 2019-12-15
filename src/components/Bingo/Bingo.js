import React, {Fragment} from 'react';
import "./Bingo.css"

const Bingo = props => {
    return (
        <Fragment>
            <div className="main">
                <div className="circle_div">{props.num}</div>
            </div>
        </Fragment>
    );
};

export default Bingo;
