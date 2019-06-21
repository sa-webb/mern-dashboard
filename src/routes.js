import React from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// eslint-disable-next-line
import { Home } from './pages/home';
import { Inventory } from './pages/inventory';
import { Freight } from './pages/freight';

import MiniDrawer from './temp/home';
import MaterialUIPickers from './components/DatePicker';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MiniDrawer} />
                <Route exact path="/picker" component={MaterialUIPickers} />
                <Route exact path="/createhook" component={MiniDrawer} />
                <Route exact path="/inventory" component={Inventory} />
                <Route exact path="/freight" component={Freight} />
                <Route exact path="/inventory/create" component={Inventory} />
            </Switch>
        </Router>
    )
}