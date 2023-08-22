import './App.css';

import LandingPage from './pages/landingPage/LandingPage';
import { Container } from 'react-bootstrap';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<Container />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
