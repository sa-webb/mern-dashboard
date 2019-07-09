import React from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Home } from './pages/home';
import { Inventory } from './pages/inventory';
import { Freight } from './pages/freight';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/inventory" component={Inventory} />
                <Route exact path="/freight" component={Freight} />
            </Switch>
        </Router>
    )
}