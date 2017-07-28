import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Container from './containers/container';
import Login from './pages/login/login.component';

const routes = (
    <Router>
        <div>
            <Route path="/" component={Container}/>
            <Route path="/login" component={Login}/>
            <Redirect from="*" to="/login" />
        </div>
    </Router>
);

export default routes;
