import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './container.scss';
import { Header } from './index/header/header';
import { About } from './index/about/about';
import Apples from './index/apple/apple-basket';
import Home from './index/home/home';

class Container extends React.Component<any, {}> {
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
                    <Route path="/apples" component={Apples}/>
                </div>
            </Router>
        );
    }
}

export default Container;
