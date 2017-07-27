import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Home } from '../components/home/home.component';
import { Header } from '../components/header/header.component';
const logo = require('../logo.svg');
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
const Topics = () => (
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

class App extends React.Component<{}, {}> {
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
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        );
    }
}

export default App;
