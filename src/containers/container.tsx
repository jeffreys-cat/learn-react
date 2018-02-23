import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './container.scss';
import Home from '../components/home/home';
import { Header } from '../components/header/header';
// import Login from '../pages/login/login.component';
import { About } from '../components/about/about';
import Apples from '../components/apple/apple-basket';

class Container extends React.Component<any, {}> {
    // 钩子函数
    componentDidMount() {
        console.log('app mounted!');
        if (!localStorage.getItem('isLogined')) {
            this.props.history.push({
                pathname: '/login'
            });
        } else {
            this.props.history.push({
                pathname: '/'
            });
        }
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
