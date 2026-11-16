import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/containers/app';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/css/font-awesome.min.css'
import '../src/css/flaticon.css'
import '../src/css/odometer-theme-default.css'
import '../src/css/animate.css'
import './style.scss';

import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
