import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux' /// <Provider> component makes the state available to any nested components 
import { reducer } from './redux/reducer'
import thunk from 'redux-thunk'
import { BrowserRouter as Router} from 'react-router-dom'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // it's an enhancer to connect my middleware  and to use the redux dev tools extension
const store = createStore(reducer, composeEnhancers( 
applyMiddleware(thunk) 
));

/// lines 13 - 16 

ReactDOM.render(
  <React.StrictMode>
     <Router><Provider store={store}>
       <App />
       </Provider>
       </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// /// Rudex is handling my global state which is stored into my index.js so that all components have access to state else each components.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
