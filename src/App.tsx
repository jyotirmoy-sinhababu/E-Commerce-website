import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import MyAccount from './pages/userProfile/MyAccount';
import MyOrderPage from './pages/myOrder/MyOrderPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='auth' element={<AuthPage />} />
      <Route path='account' element={<MyAccount />} />
      <Route path='order' element={<MyOrderPage />} />
    </Routes>
  );
}

export default App;
