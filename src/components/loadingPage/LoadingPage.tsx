import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import './loadingStyle.css';
// import CategoriesComp from '../categoryComp/CategoriesComp';

const LoadingPage = () => {
  return (
    <div className='loading-cnt'>
      <p className='loading-txt'>
        <AiOutlineLoading3Quarters />
      </p>
      {/* <CategoriesComp /> */}
    </div>
  );
};

export default LoadingPage;
