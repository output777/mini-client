import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bulma/css/bulma.css';
import { Provider } from 'react-redux';
import store from './redux/config/configStore'
import axios from 'axios';

axios.defaults.baseURL ='http://13.125.227.32/';
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
