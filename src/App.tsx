import './App.css';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import MyAccount from './pages/userProfile/MyAccount';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='auth' element={<AuthPage />} />
      <Route path='account' element={<MyAccount />} />
    </Routes>
  );
}

export default App;
