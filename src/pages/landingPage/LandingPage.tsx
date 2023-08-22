import { Outlet } from 'react-router-dom';
import Nav from '../../components/nav/Nav';

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default LandingPage;
