import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducers from './reducers/root.reducer';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

const logger = createLogger();
const history = routerMiddleware(createHistory());

const store = createStore(
    rootReducers,
    applyMiddleware(thunk, history, logger)
);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
