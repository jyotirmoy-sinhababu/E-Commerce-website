import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import './loadingStyle.css';

const LoadingPage = () => {
  return (
    <div className='loading-cnt'>
      <p className='loading-txt'>
        <AiOutlineLoading3Quarters />
      </p>
    </div>
  );
};

export default LoadingPage;
