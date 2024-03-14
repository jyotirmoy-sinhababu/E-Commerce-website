import Logo from '../logo/Logo';

import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { BsCartCheckFill } from 'react-icons/bs';
import { FaShop } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <>
      {' '}
      <div className='flex justify-between items-center px-[4%] mt-[2%] bg-bgColor'>
        <Logo />
        <div className='flex items-center gap-4'>
          <div className='flex gap-1'>
            <Avatar name='Jyotirmioy' size='50' round={true} />
            <button>Login</button>
          </div>

          <Link to='' className='flex items-center'>
            <BsCartCheckFill /> Cart
          </Link>
          <button className='flex items-center'>
            <FaShop />
            Become a seller
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default NavBar;
