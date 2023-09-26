import { useNavigate, createSearchParams } from 'react-router-dom';

import { useGetCarouselByNameQuery } from '../../assets/slice/CarouselSlice';

import { useState } from 'react';

import CarouselCard from './CarouselCard';

import './carouselStyle.css';

interface CarouselItem {
  id: number;
  brand: string;
  thumbnail: string;
  description: string;
}

const CarouselComp = () => {
  const [carouselFilterData, setCarouselFilterData] = useState<object>();

  const { data } = useGetCarouselByNameQuery('');

  const navigate = useNavigate();

  const filterCarouselData = (Id: number) => {
    const filteredData = data.products?.filter((item: any) => {
      return item.id == Id;
    });

    setCarouselFilterData(filteredData);
  };

  console.log(carouselFilterData);

  return (
    <div className='carouselComp-cnt' data-ride='carousel'>
      {data
        ? data.products?.map((item: CarouselItem) => {
            return (
              <div
                onClick={() => {
                  filterCarouselData(item.id);
                  navigate('/carouselDtl', { state: carouselFilterData });
                }}
                className='carouselComp-cardHolder'
                key={item.id}
              >
                <CarouselCard data={item} />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default CarouselComp;
