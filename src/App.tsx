import './App.css';

import LandingPage from './pages/landingPage/LandingPage';
import Container from './pages/container/Container';

import { Routes, Route } from 'react-router-dom';
import CarouselDtlPage from './pages/dtlpage/CarouselDtlPage';
import LogInComp from './components/authComp/logInComp/LogInComp';
import SignUpComp from './components/authComp/signUpComp/SignUpComp';
import AllProductPage from './pages/allProductPage/AllProductPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<Container />} />
          <Route path='carouselDtl' element={<CarouselDtlPage />} />
          <Route path='login' element={<LogInComp />} />
          <Route path='signUp' element={<SignUpComp />} />
          <Route path='allProduct' element={<AllProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
