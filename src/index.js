import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Use createRoot instead of ReactDOM.render
const root = document.getElementById('root');

const appRoot = ReactDOM.createRoot(root);
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
