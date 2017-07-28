import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './container.scss';
import { Home } from '../components/home/home.component';
import { Header } from '../components/header/header.component';
import Login from '../pages/login/login.component';
import { About } from '../components/about/about.component';

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
