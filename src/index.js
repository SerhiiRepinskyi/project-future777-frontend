import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-future777-frontend">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// basename="/project-future777-frontend"