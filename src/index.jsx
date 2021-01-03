import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './App';
import reducer from './reducer';
import './styles/index.css';

let api = {
    txt: [],
    number: 0,
    user: {}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, api, composeEnhancers());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));