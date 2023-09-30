import { useGetAllProductByNameQuery } from '../../assets/slice/AllProductsSlice';
import LoadingPage from '../loadingPage/LoadingPage';
import AllProductCard from './AllProductCard';

import './allProductStyle.css';

const AllProductComp = () => {
  const { data, isLoading } = useGetAllProductByNameQuery('');
  console.log(data);
  return (
    <div className='allProduct-cnt'>
      {data ? (
        data.map((item: any) => {
          return (
            <div key={item.id}>
              <AllProductCard data={item} />
            </div>
          );
        })
      ) : isLoading ? (
        <LoadingPage />
      ) : null}
    </div>
  );
};

export default AllProductComp;
