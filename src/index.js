import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

import reducers from './reducers/';
import InitialState from './state/init_state';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<Provider store={createStore(reducers, InitialState)}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
