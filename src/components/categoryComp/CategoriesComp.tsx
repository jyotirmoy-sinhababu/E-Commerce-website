import { useGetCatagoriesByNameQuery } from '../../assets/slice/CategoriesSlice';
import LoadingPage from '../loadingPage/LoadingPage';

const CategoriesComp = () => {
  const { data, isLoading } = useGetCatagoriesByNameQuery('');
  console.log(data);
  return <div>{}</div>;
};

export default CategoriesComp;
