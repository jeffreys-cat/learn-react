import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducers from './reducers';
// import todoApp from './reducers/todos.reducers';

import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

const store = createStore(
    counterReducers
);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
