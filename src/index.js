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
const feelReducer = (state = (0), action) => {
    if(action.type === 'SET_FEEL') {
        return state + action.payload;
    }
    return state;
}

const understandReducer = (state = (0), action) => {
    if(action.type === 'SET_UNDERSTAND') {
        return state + action.payload;
    }
    return state;
}

const supportReducer = (state = (0), action) => {
    if(action.type === 'SET_SUPPORT') {
        return state + action.payload;
    }
    return state;
}

const commentReducer = (state = (''), action) => {
    if(action.type === 'SET_COMMENT') {
        return state + action.payload;
    }
    return state;
}

// set up redux store
const storeInstance = createStore(
    combineReducers(
        // this is an object. feelReducer: feelReducer
        {
            feelReducer,
            understandReducer,
            supportReducer,
            commentReducer,
        }
    ),
    applyMiddleware(logger)
);

// add Provider
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
