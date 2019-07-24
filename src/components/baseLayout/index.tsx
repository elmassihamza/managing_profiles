import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AppBar from '../appBar';
import Login from '../login';
import Profile from '../profile';

const BaseLayout = () => (
    <div style={{ height: '100vh'}}>
        <header>
            <AppBar />
        </header>
        <div style={{ height: '100%' }}>
            <Switch>
                <Route path="/profile"  component={Profile} />
                <Route exact component={Login} />
            </Switch>
        </div>
    </div>
);

export default BaseLayout;