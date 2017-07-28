import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './container.scss';
import { Home } from '../components/home/home.component';
import { Header } from '../components/header/header.component';
import Login from '../pages/login/login.component';

const logo = require('../assets/imgs/logo.svg');
const About = () => (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
    </div>
);

class Container extends React.Component<{}, {}> {
    // 钩子函数
    componentDidMount() {
        console.log('app mounted!');
    }
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Login}/>
                </div>
            </Router>
        );
    }
}

export default Container;
