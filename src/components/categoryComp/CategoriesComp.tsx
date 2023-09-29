import { useGetCatagoriesByNameQuery } from '../../assets/slice/CategoriesSlice';
import LoadingPage from '../loadingPage/LoadingPage';
import CategoriesCard from './CategoriesCard';

const CategoriesComp = () => {
  const { data, isLoading } = useGetCatagoriesByNameQuery('');
  console.log(data);
  return (
    <div>
      {data ? (
        data.map((item: any, index: number) => {
          return (
            <div key={index}>
              <CategoriesCard data={item} />
            </div>
          );
        })
      ) : isLoading ? (
        <LoadingPage />
      ) : null}
    </div>
  );
};

export default CategoriesComp;
