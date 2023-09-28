import { AiOutlineLoading } from 'react-icons/ai';

import './loadingStyle.css';

const LoadingPage = () => {
  return (
    <div className='loading-cnt'>
      <p className='loading-txt'>
        <AiOutlineLoading />
      </p>
    </div>
  );
};

export default LoadingPage;
