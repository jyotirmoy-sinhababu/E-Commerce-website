import { useNavigate, createSearchParams } from 'react-router-dom';

import { useGetCarouselByNameQuery } from '../../assets/slice/CarouselSlice';

import CarouselCard from './CarouselCard';

// import './carouselStyle.css';
import LoadingPage from '../loadingPage/LoadingPage';
import SwiperCarousel from '../SwiperCarousel/SwiperCarousel';
import { SwiperSlide } from 'swiper/react';

interface CarouselItem {
  id: number;
  brand: string;
  thumbnail: string;
  description: string;
}

const CarouselComp = () => {
  const { data, isLoading, error } = useGetCarouselByNameQuery('?limit=10');

  const navigate = useNavigate();

  const filterCarouselData = (id: number) => {
    navigate('/carouselDtl', {
      state: data.products?.filter((item: any) => item.id === id)[0],
    });
  };

  return (
    <div className='' data-ride='carousel'>
      <SwiperCarousel>
        {data ? (
          data.products?.map((item: CarouselItem) => {
            return (
              <SwiperSlide key={item.id}>
                <div
                  onClick={() => {
                    filterCarouselData(item.id);
                  }}
                  className='cursor-pointer'
                >
                  <CarouselCard data={item} />
                </div>
              </SwiperSlide>
            );
          })
        ) : isLoading ? (
          <LoadingPage />
        ) : error ? (
          <div>
            <p>no data</p>
          </div>
        ) : null}
      </SwiperCarousel>
    </div>
  );
};

export default CarouselComp;
