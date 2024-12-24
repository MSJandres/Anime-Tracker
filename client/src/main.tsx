import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
 </React.StrictMode>
)
