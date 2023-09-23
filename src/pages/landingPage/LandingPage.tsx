import { Outlet } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import IntroComp from '../../sub-components/introComp/IntroComp';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: '	rgb(252, 249, 238)', height: '100vh' }}>
      <Nav />
      <IntroComp />
      <Outlet />
    </div>
  );
};

export default LandingPage;
