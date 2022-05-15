
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.css';
import CryptoContextProvider from './contexts/CryptoContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CryptoContextProvider >
   
        <App />
   
      </CryptoContextProvider >
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

