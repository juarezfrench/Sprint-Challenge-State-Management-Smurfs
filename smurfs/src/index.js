import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import "./index.css";
const store = createStore(rootReducer, applyMiddleware(thunk),)

ReactDOM.render(
<Provider store={store}>   
<App/>
</Provider>,

document.getElementById('root'));