import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/index.reducer';

import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
