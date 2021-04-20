import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './../serviceWorker';

export default function (config: any) {
  try {
    return ReactDOM.render(
      <App config={config} />,
      document.getElementById('root')
    );
  } catch (e) {}
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
