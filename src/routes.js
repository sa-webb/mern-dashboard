import React from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={NavBar} />
            </Switch>
        </Router>
    )
}