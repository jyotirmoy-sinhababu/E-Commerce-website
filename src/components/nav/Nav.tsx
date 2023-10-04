import SearchBar from '../../sub-components/searchBar/SearchBar';
import LogInBtn from '../../sub-components/btns/LogInBtn';
import CartBtn from '../../sub-components/btns/CartBtn';

// import './navStyle.css';

const Nav = () => {
  return (
    <div className='nav-cnt'>
      <div className='nav-logo-cnt'>
        <p className='nav-logo-txt'>E-CART</p>
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
