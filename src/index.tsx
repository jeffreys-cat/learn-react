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
import { rootEpic } from './epics/root.epics';
import { createEpicMiddleware } from 'redux-observable';
// import { searchUserReducer } from './containers/index/github-user/github-user.reducer';
// import { compose } from 'redux';

const logger = createLogger();
const history = routerMiddleware(createHistory());
const epicMiddleware = createEpicMiddleware(rootEpic);
// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const reducer = combineReducers({
//     searchUserReducer
// });

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
