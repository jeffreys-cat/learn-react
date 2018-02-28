import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './container.scss';
import { Header } from './index/header/header';
import { About } from './index/about/about';
import Apples from './index/apple/apple-basket';
import Counter from './index/counter/counter';
import { GithubUser } from './index/github-user/github-user';

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
                    <Route exact={true} path="/" component={Counter}/>
                    <Route path="/about" component={About}/>
                    <Route path="/apples" component={Apples}/>
                    <Route path="/github-user" component={GithubUser}/>
                </div>
            </Router>
        );
    }
}

export default Container;
