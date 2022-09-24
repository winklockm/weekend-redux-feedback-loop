import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// import redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

// set up reducers
const feelReducer = (state = (''), action) => {
    if(action.type === 'SET_FEEL') {
        return action.payload;
    }
    return state
}

const understandReducer = (state = (''), action) => {
    if(action.type === 'SET_UNDERSTAND') {
        return action.payload;
    }
    return state
}

const supportReducer = (state = (''), action) => {
    if(action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return state
}

const commentReducer = (state = (''), action) => {
    if(action.type === 'SET_COMMENT') {
        return action.payload;
    }
    return state
}

// set up redux store
const storeInstance = createStore(
    combineReducers(
        feelReducer,
        understandReducer,
        supportReducer,
        commentReducer
    ),
    applyMiddleware(
        logger
    )
);

// add Provider
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
