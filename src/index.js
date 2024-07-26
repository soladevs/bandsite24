import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './App.scss'; 

const container = document.getElementById('root');

document.title = "DPS"
document.description = ""
document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1');

const root = createRoot(container);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
