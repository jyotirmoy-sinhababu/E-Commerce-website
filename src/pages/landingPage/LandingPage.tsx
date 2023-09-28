import { Outlet } from 'react-router-dom';
import Nav from '../../components/nav/Nav';

const LandingPage = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Nav />
      <Outlet />
    </div>
  );
};

export default LandingPage;
