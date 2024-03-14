import Logo from '../logo/Logo';

import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { BsCartCheckFill } from 'react-icons/bs';
import { FaShop } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <>
      {' '}
      <div className='flex justify-between items-center px-[4%] h-[120px] bg-bgColor'>
        <Logo />
        <div className='flex items-center gap-4'>
          <div className='flex gap-1'>
            <Avatar name='Jyotirmioy' size='50' round={true} />
            <button className='text-xl font-medium text-gray-100'>Login</button>
          </div>

          <Link
            to=''
            className='flex items-center text-xl font-medium text-gray-100'
          >
            <BsCartCheckFill /> Cart
          </Link>
          <button className='flex items-center text-xl font-medium text-gray-100'>
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
