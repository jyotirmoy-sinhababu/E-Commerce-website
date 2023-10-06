import { useLocation } from 'react-router-dom';
import LoadingPage from '../../components/loadingPage/LoadingPage';

import { AiTwotoneStar } from 'react-icons/ai';
import OrderAndCartBtn from '../../sub-components/order&addCart/OrderAndCartBtn';

const AllProductPage = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <>
      {data ? (
        <div className='flex  p-[4%] gap-[14%] '>
          <div className=''>
            {' '}
            <img className='w-[375px]' src={data.image} alt={data.jewelery} />
            <div className='w-[375px] flex justify-end mt-[17px]'>
              <p className='font-serif text-2xl'>{data.title}</p>
            </div>
          </div>
          <div className='flex flex-col gap-[9px]'>
            <p className='flex items-center'>
              <strong>Rate:</strong>
              {data.rating.rate} <AiTwotoneStar />
            </p>
            <p className='font-serif text-xl'>
              <strong>Type:</strong> {data.category}
            </p>
            <p className='font-serif text-xl'>
              <strong>Special price:</strong> ${data.price}
            </p>
            <p className='font-serif text-xl w-4/6'>
              <strong>Description:</strong>
              {data.description}
            </p>
            <OrderAndCartBtn />
          </div>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default AllProductPage;
