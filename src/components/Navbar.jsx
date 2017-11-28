import React from 'react';
import logo from '../logo.svg';

export const Navbar = props => {
    return (
        <div>
            <header className="App-header">
                <a href="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
            </header>
        </div>
    )
}