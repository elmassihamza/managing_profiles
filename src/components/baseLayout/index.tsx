import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'


const BaseLayout = () => (
    <div className="base">
        <header>
            this is the header
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