import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import ContextApi from './ContextApi/ContextApi';

const root = ReactDOM.createRoot(document.getElementById('root'));

const API_Base = "https://fine-tan-clam-wrap.cyclic.cloud"
// const API_Base = "https://blog-desk.onrender.com"
// const API_Base = "http://localhost:3001"
root.render(
  <BrowserRouter>
  <ContextApi.Provider value={{databaseApi: API_Base}}>
    <App />
  </ContextApi.Provider>
  </BrowserRouter>
);

