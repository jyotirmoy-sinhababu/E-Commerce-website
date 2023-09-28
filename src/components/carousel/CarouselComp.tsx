import { useNavigate, createSearchParams } from 'react-router-dom';

import { useGetCarouselByNameQuery } from '../../assets/slice/CarouselSlice';

import CarouselCard from './CarouselCard';

import './carouselStyle.css';
import LoadingPage from '../loadingPage/LoadingPage';

interface CarouselItem {
  id: number;
  brand: string;
  thumbnail: string;
  description: string;
}

const CarouselComp = () => {
  const { data, isLoading } = useGetCarouselByNameQuery('');

  const navigate = useNavigate();

  const filterCarouselData = (id: number) => {
    navigate('/carouselDtl', {
      state: data.products?.filter((item: any) => item.id === id)[0],
    });

    // console.log(data.products?.filter((item: any) => item.id === id)[0]);
  };

  return (
    <div className='carouselComp-cnt' data-ride='carousel'>
      {data ? (
        data.products?.map((item: CarouselItem) => {
          return (
            <div
              onClick={() => {
                filterCarouselData(item.id);
              }}
              className='carouselComp-cardHolder'
              key={item.id}
            >
              <CarouselCard data={item} />
            </div>
          );
        })
      ) : isLoading ? (
        <LoadingPage />
      ) : null}
    </div>
  );
};

export default CarouselComp;
