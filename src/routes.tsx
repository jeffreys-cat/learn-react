import * as React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Container from './containers/container';
import Login from './pages/login/login.component';

const routes = (
    <HashRouter>
        <div>
            <Route path="/" component={Container}/>
            <Route path="/login" component={Login}/>
            <Redirect from="*" to="/" /> 
        </div>
    </HashRouter>
);

export default routes;
