import Logo from '../logo/Logo';

import { Dropdown, DropdownItem } from 'flowbite-react';

import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

import { BsCartCheckFill } from 'react-icons/bs';
import { FaShop } from 'react-icons/fa6';
import { VscAccount } from 'react-icons/vsc';
import { MdBorderColor, MdOutlineLogout } from 'react-icons/md';

import { useSelector } from 'react-redux';

const NavBar = () => {
  const user = useSelector((state: any) => state?.auth.user);
  console.log(user);

  return (
    <>
      {' '}
      <div className='flex justify-between items-center px-[4%] h-[100px] bg-bgColor'>
        <Logo />
        <div className='flex items-center gap-16'>
          <div className='flex gap-1 items-center'>
            <Avatar name={user ? user.userName : ''} size='40' round={true} />
            {user ? (
              <Dropdown label='profile' color='bg - bgColor' size='lg'>
                <DropdownItem>
                  <VscAccount />
                  My Account
                </DropdownItem>
                <DropdownItem>
                  <MdBorderColor /> Orders
                </DropdownItem>
                <DropdownItem>
                  <MdOutlineLogout />
                  Logout
                </DropdownItem>
              </Dropdown>
            ) : (
              <button className='text-xl font-normal text-gray-100'>
                Login
              </button>
            )}
          </div>

          <Link
            to=''
            className='flex items-center text-xl font-normal text-gray-100'
          >
            <BsCartCheckFill /> Cart
          </Link>
          <button className='flex items-center text-xl font-normal text-gray-100'>
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
