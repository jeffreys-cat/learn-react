import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterReducers from './reducers';

import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

const store = createStore(
    counterReducers
);
store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
