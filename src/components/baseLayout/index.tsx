import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AppBar from '../appBar';

const BaseLayout = () => (
    <div className="base">
        <header>
            <AppBar />
        </header>
        <div className="container">
            <Switch>
                <Route path="/" exact component={() => (<>/</>)} />
                <Route path="/login" exact component={() => (<>/login</>)} />
                <Route path="/profile"  component={() => (<>/profile</>)} />
                <Route component={() => (<>Not Found 404</>)} />
            </Switch>
        </div>
    </div>
);

export default BaseLayout;