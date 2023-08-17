import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import DataProvider from './assets/dataProvider/DataProvider.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DataProvider>
    {' '}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataProvider>
);
