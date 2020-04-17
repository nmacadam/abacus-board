import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'

ReactDOM.render(
  <App />,                          // Render our App component
  document.getElementById('root'),  // using the HTML doc's element with the id 'root'
  function()                        // and execute this afterwards
  {
    console.log("abacus board v.1.0.0a");
  }
);

window.React = React;
window.ReactDOM = ReactDOM;

//registerServiceWorker();

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
