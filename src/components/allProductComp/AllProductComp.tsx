import { useGetAllProductByNameQuery } from '../../assets/slice/AllProductsSlice';
import LoadingPage from '../loadingPage/LoadingPage';
import AllProductCard from './AllProductCard';

import { useNavigate } from 'react-router-dom';

// import './allProductStyle.css';

const AllProductComp = () => {
  const { data, isLoading } = useGetAllProductByNameQuery('?limit=7');
  console.log(data);

  const navigate = useNavigate();

  const filterProductData = (id: number) => {
    navigate('/allProduct', {
      state: data?.filter((item: any) => item.id === id)[0],
    });
    console.log(data?.filter((item: any) => item.id === id)[0]);
  };

  return (
    <div className='flex justify-around p-12 '>
      {data ? (
        data.map((item: any) => {
          return (
            <div key={item.id}>
              <div
                onClick={() => {
                  filterProductData(item.id);
                }}
              >
                <AllProductCard data={item} />
              </div>
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
