import React from 'react';
import { Navbar } from './components/Navbar';
import ContentRouter from './components/ContentRouter';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Navbar></Navbar>
                <ContentRouter></ContentRouter>
            </div>
        )
    }
}