import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import {store} from './store';
import App from './App.js';
import './custom.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

// function Hi() {
//     return <div>Hello World!</div>;
// }

ReactDOM.render(<App/>, document.querySelector('#home'));
//


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
