import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextApiProvider from './Context/ContextApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ContextApiProvider>
    <App />
  </ContextApiProvider>
);
