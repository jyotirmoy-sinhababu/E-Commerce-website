import { BsFillPersonFill } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

const LogInBtn = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate('/login');
        }}
        className='flex items-center font-serif gap-[8px] text-2xl'
      >
        {' '}
        <BsFillPersonFill /> Log In
      </button>
    </div>
  );
};

export default LogInBtn;
