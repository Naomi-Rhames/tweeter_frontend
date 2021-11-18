import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import { reducer } from './redux/reducer'
import thunk from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // create store only takes two arguments so we can combine the midleware and the dev tools

const store = createStore(reducer, composeEnhancers( /// store has access to state in the reducer
applyMiddleware(thunk) /// it a promise it allows asymc method to load in our actionCreators so it allows us to wait until the prosmise is resloved from our fetch ~ Thunk
));

ReactDOM.render(
  <React.StrictMode>
     <Router><Provider store={store}><App /></Provider></Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
