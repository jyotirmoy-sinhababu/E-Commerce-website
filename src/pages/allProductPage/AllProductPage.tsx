import { useLocation } from 'react-router-dom';
import LoadingPage from '../../components/loadingPage/LoadingPage';

import { AiTwotoneStar } from 'react-icons/ai';

const AllProductPage = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <>
      {data ? (
        <div className='flex items-center p-[107px] '>
          <div>
            {' '}
            <img className='w-[505px]' src={data.image} alt={data.jewelery} />
            <p>{data.title}</p>
          </div>
          <div>
            <p className='flex items-center'>
              {data.rating.rate} <AiTwotoneStar />
            </p>
            <p>{data.category}</p>
            <p>${data.price}</p>
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default AllProductPage;
