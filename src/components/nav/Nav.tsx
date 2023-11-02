import { useState, useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../assets/firebaseConfig/Firebase';

import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../assets/slice/UserOnlineSlice';

import SearchBar from '../../sub-components/searchBar/SearchBar';
import LogInBtn from '../../sub-components/btns/LogInBtn';
import CartBtn from '../../sub-components/btns/CartBtn';
import LogOutBtn from '../../sub-components/btns/LogOutBtn';

const Nav = () => {
  const user = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();
  // const [currentUser, setCurrentUser] = useState<any>();

  // useEffect(() => {
  //   const currentUser = localStorage.getItem('currentUser');
  //   setCurrentUser(currentUser);
  // }, []);

  return (
    <div className='flex justify-around items-center p-[3%]'>
      <div className='flex gap-[25px] items-center '>
        <p className='text-4xl '>E-CART</p>
        <SearchBar />
      </div>
      <div className='nav-cartBtn-cnt'>
        <CartBtn />
      </div>
      <div className='nav-logIn-btn-cnt'>
        {user ? <LogOutBtn /> : <LogInBtn />}
      </div>
    </div>
  );
};

export default Nav;
