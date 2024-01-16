import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppTest from './AppTest';
//import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTest />
    </BrowserRouter>
  </React.StrictMode>
);

