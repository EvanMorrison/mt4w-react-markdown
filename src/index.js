import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import registerServiceWorker from './registerServiceWorker';
import './manifest.webmanifest';

ReactDOM.render(<App/>, document.getElementById('root'));

if (process.env.NODE_ENV === 'production') { registerServiceWorker(); }
