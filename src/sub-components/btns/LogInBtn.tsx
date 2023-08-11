import { BsFillPersonFill } from 'react-icons/bs';

import './btnStyle.css';

const LogInBtn = () => {
  return (
    <div className='logInBtn-cnt'>
      <button className='logInBtn'>
        {' '}
        <BsFillPersonFill /> Log In
      </button>
    </div>
  );
};

export default LogInBtn;
