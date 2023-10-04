// import './searchBarStyle.css';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
      }}
      className='bg-slate-300 pr-[10px]'
    >
      <input
        className='w-[620px] h-[45px] bg-slate-300 text-xl px-[15px] '
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
