import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = props => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <NavLink to="/" exact className="logo">Logo</NavLink>
                    <ul className="nav">
                        <li>
                            <NavLink to="/" exact>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movie">Movie</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form">Add Movie</NavLink>
                        </li>
                        <li>
                            <NavLink to="/bingo">Bingo</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
