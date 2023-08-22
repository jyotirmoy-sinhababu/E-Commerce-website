import './searchBarStyle.css';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
      }}
      className='searchBar-form'
    >
      <input
        className='searchBar-inputField'
        type='text'
        placeholder='Search for products'
      />
      <button type='submit' className='searchBtn'>
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
