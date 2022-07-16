/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { store } from './redux/configureStore';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(

  <BrowserRouter>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>,

);
