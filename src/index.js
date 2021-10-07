import React from 'react';  
import ReactDOM from 'react-dom';  
import App from './App.js';  
import HomePage from './components/HomePage';
import './style/reset.css'

ReactDOM.render(
  <React.StrictMode>
    <App>
        <HomePage/>
    </App>
  </React.StrictMode>,
  document.getElementById('app')
);  