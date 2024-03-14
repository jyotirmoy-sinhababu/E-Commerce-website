import logo from '../../assets/logo.png';

import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate('/');
      }}
      className='cursor-pointer'
    >
      <img className='w-[201px] rounded' src={logo} alt='logo' />
    </div>
  );
};

export default Logo;
