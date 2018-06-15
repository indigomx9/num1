import React from 'react';
import ReacDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import App from './components/App.jsx';

let store = createStore(
    rootReducer, composeWithDevTools()
);

ReacDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

