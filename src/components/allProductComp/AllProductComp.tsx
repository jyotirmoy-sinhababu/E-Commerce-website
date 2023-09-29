import { useGetAllProductByNameQuery } from '../../assets/slice/AllProductsSlice';
import LoadingPage from '../loadingPage/LoadingPage';
import AllProductCard from './AllProductCard';

const AllProductComp = () => {
  const { data, isLoading } = useGetAllProductByNameQuery('');
  console.log(data);
  return (
    <div>
      {data ? (
        data.map((item: any) => {
          <div key={item.id}>
            <AllProductCard data={item} />
          </div>;
        })
      ) : isLoading ? (
        <LoadingPage />
      ) : null}
    </div>
  );
};

export default AllProductComp;
