import './styles/global.scss';
import './styles/github-markdown.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  container
);
