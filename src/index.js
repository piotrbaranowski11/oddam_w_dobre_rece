import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import { AuthProvider } from "./components/Auth/Auth";


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
