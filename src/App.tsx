import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';
import { Home } from './components/home/home';
const logo = require('./logo.svg');
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

class App extends React.Component<{}, {}> {
    // 钩子函数
    componentDidMount() {
        console.log('app mounted!');
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>
                    {/* <Home/> */}
                    {/* <Route path="/" component={Home}/> */}
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
            // <div className="App">
            //     <div className="App-header">
            //         <img src={logo} className="App-logo" alt="logo" />
            //         <h2>Welcome to React</h2>
            //     </div>
            //     <p className="App-intro">
            //         To get started, edit <code>src/App.tsx</code> and save to reload.
            //     </p>
            // </div>
        );
    }
}

export default App;
