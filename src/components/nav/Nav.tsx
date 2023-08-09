import SearchBar from '../../sub-components/searchBar/SearchBar';
import LogInBtn from '../../sub-components/btns/LogInBtn';

const Nav = () => {
  return (
    <div>
      <div>E-CART</div>
      <div>
        <SearchBar />
      </div>
      <div>
        <LogInBtn />
      </div>
    </div>
  );
};

export default Nav;
