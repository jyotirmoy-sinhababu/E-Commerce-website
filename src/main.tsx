import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// import DataProvider from './assets/dataProvider/DataProvider.tsx';
import { BrowserRouter } from 'react-router-dom';
import { store } from './assets/store/Store.tsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <DataProvider>
  <Provider store={store}>
    {' '}
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>

  // </DataProvider>
);
