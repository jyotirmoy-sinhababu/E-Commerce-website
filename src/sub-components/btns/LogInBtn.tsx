import { BsFillPersonFill } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

// import './btnStyle.css';

const LogInBtn = () => {
  const navigate = useNavigate();
  return (
    <div className='logInBtn-cnt'>
      <button
        onClick={() => {
          navigate('/login');
        }}
        className='logInBtn'
      >
        {' '}
        <BsFillPersonFill /> Log In
      </button>
    </div>
  );
};

export default LogInBtn;
