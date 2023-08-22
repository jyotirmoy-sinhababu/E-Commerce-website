import './App.css';

import LandingPage from './pages/landingPage/LandingPage';
import Container from './pages/container/Container';

import { Routes, Route } from 'react-router-dom';
import CarouselDtlPage from './pages/dtlpage/CarouselDtlPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<Container />} />
          <Route path='carouselDtl' element={<CarouselDtlPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
