import SearchBar from '../../sub-components/searchBar/SearchBar';
import LogInBtn from '../../sub-components/btns/LogInBtn';
import CartBtn from '../../sub-components/btns/CartBtn';

// import './navStyle.css';

const Nav = () => {
  return (
    <div className='flex justify-around items-center p-[30px]'>
      <div className='flex gap-[25px] items-center '>
        <p className='text-4xl '>E-CART</p>
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
