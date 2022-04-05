import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from "./reducers/rootReducer"
import {createStore,applyMiddleware, compose} from "redux" // compose
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import userReducer from "../src/reducers/userReducer"


const allExtensions = compose(
  applyMiddleware(thunk, promise, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const myStore = createStore(userReducer,allExtensions)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={myStore}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
