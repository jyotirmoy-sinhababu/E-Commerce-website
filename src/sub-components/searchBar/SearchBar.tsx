import './searchBarStyle.css';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <form className='searchBar-form'>
      <input
        className='searchBar-inputField'
        type='text'
        placeholder='Search for products'
      />
      <button className='searchBtn'>
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
