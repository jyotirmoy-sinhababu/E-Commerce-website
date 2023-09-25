// import { useContext } from 'react';
// import { dataContext } from '../../assets/dataProvider/DataProvider';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { useGetCarouselByNameQuery } from '../../assets/slice/CarouselSlice';

import CarouselCard from './CarouselCard';

import './carouselStyle.css';

interface CarouselItem {
  id: number;
  brand: string;
  thumbnail: string;
  description: string;
}

const CarouselComp = () => {
  // const { carouselData, filterCarouselDtls } = useContext(dataContext);

  const { data } = useGetCarouselByNameQuery('');
  console.log(data);

  const navigate = useNavigate();
  const param = { data: data };
  return (
    <div className='carouselComp-cnt' data-ride='carousel'>
      {data
        ? data.products?.map((item: CarouselItem) => {
            return (
              <div
                onClick={() => {
                  // filterCarouselDtls(item.id);
                  // navigate({
                  //   pathname: '/carouselDtl',
                  //   search: `?${createSearchParams(param)}`,
                  // });
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
