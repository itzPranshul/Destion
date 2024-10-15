import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ requirement
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* Add the basename here */}
    <BrowserRouter basename="/Destion">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
