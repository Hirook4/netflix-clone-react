import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://uploads.spiritfanfiction.com/fanfics/historias/202009/among-us-um-traidor-20449039-100920200146.png" alt="Usuario"/>
                </a>
            </div>
        </header>
    );
}