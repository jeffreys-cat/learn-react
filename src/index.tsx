import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import routes from './routes';
import rootReducers from './reducers/root.reducer';
import registerServiceWorker from './registerServiceWorker';
import { rootEpic } from './epics/root.epics';
import { createEpicMiddleware } from 'redux-observable';

const logger = createLogger();
const history = routerMiddleware(createHistory());
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
    rootReducers,
    applyMiddleware(thunk, epicMiddleware, history, logger)
);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
