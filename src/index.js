import React from 'react';
import carReducer  from "./CONNECT/Reducers/Reducer";
import redux from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './CONNECT/App';
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer)
// console.log("initialState", store.getState() )
// const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
// store.dispatch(doSomething())
// unsubscribe()

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
    </Provider>,
rootElement);
