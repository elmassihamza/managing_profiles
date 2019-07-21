import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AppBar from '../appBar';
import Login from '../login';

const BaseLayout = () => (
    <div style={{ height: '100vh'}}>
        <header>
            <AppBar />
        </header>
        <div style={{ height: '100%' }}>
            <Switch>
                <Route path="/" exact component={() => (<>/</>)} />
                <Route path="/login" exact component={Login} />
                <Route path="/profile"  component={() => (<>/profile</>)} />
                <Route component={() => (<>Not Found 404</>)} />
            </Switch>
        </div>
    </div>
);

export default BaseLayout;