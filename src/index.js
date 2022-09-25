// import react
import React from 'react';
import ReactDOM from 'react-dom';

// import redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'; 
import logger from 'redux-logger';

// import app component
import App from './components/App/App';

// import css
import './index.css';

// import serviceworker
import registerServiceWorker from './registerServiceWorker';

// set up reducers - payload is star rating or comment
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

// set up redux store and combine reducers into one object
const storeInstance = createStore(
    combineReducers(
        {
            feelReducer,
            understandReducer,
            supportReducer,
            commentReducer,
        }
    ),
    applyMiddleware(logger)
);

// wrap app in provider
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
