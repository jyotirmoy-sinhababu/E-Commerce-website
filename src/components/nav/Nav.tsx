import SearchBar from '../../sub-components/searchBar/SearchBar';
import LogInBtn from '../../sub-components/btns/LogInBtn';
import CartBtn from '../../sub-components/btns/CartBtn';
import LogOutBtn from '../../sub-components/btns/LogOutBtn';

import { useNavigate } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex justify-around items-center p-[3%]'>
      <div className='flex gap-[25px] items-center '>
        <button onClick={() => {}} className='text-4xl font-serif'>
          E-CART
        </button>
        <SearchBar />
      </div>
      <div className='nav-cartBtn-cnt'>
        <CartBtn />
      </div>
      <div className='nav-logIn-btn-cnt'>
        <LogInBtn />
      </div>
    </div>
  );
};

export default Nav;
