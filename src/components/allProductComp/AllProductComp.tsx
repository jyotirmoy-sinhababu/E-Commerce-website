import { useGetAllProductByNameQuery } from '../../assets/slice/AllProductsSlice';
import LoadingPage from '../loadingPage/LoadingPage';
import AllProductCard from './AllProductCard';

// import './allProductStyle.css';

const AllProductComp = () => {
  const { data, isLoading } = useGetAllProductByNameQuery('?limit=7');
  console.log(data);
  return (
    <div className='flex justify-around p-12 '>
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
