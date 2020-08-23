import React from 'react';
import {reducer, initialState} from './REDUCER/Reducers'
import redux from 'redux';
import ReactDOM from 'react-dom';
import App from './REDUCER/App';
import 'bulma/css/bulma.css';
import './styles.scss';

// const store = createStore(reducer)
// console.log("initialState", store.getState() )
// const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
// store.dispatch(doSomething())
// unsubscribe()

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
