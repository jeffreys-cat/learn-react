import * as React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Container from './containers/container';
import Login from './pages/login/login.component';
import { authService } from './utils/auth.service';
import { Redirect } from 'react-router';

const routes = (
    <HashRouter>
        <div>
            <Route path="/" render={() => (
                authService.checkLogin() ? (
                    <Container />
                ) : (
                    <Redirect to="/login" />
                )
            )} />
            <Route path="/login" render={() => (
                authService.checkLogin() ? (
                    <Redirect to="/" />
                ) : (
                    <Login />
                )
            )} />
        </div>
    </HashRouter>
);

export default routes;
