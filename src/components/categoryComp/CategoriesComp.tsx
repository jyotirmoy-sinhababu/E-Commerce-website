import { useGetCategoriesByNameQuery } from '../../assets/slice/CategoriesSlice';
import LoadingPage from '../loadingPage/LoadingPage';

const CategoriesComp = () => {
  const { data, isLoading } = useGetCategoriesByNameQuery('');
  data ? console.log(data) : null;

  return <div>{data ? <div></div> : isLoading ? <LoadingPage /> : null}</div>;
};

export default CategoriesComp;
