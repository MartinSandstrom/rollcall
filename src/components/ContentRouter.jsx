import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SwipePage from '../pages/SwipePage.jsx';
import MainPage from '../pages/MainPage.jsx';


export default class ContentRouter extends React.Component {

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route path="/team" component={SwipePage} />
                        <Route path="/" component={MainPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}