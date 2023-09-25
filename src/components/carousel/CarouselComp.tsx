import { useNavigate, createSearchParams } from 'react-router-dom';

import { useGetCarouselByNameQuery } from '../../assets/slice/CarouselSlice';

import { useSelector, useDispatch } from 'react-redux';
import { carouselDtlsFiltered } from '../../assets/slice/CarouselDtlsSlice';

import CarouselCard from './CarouselCard';

import './carouselStyle.css';

interface CarouselItem {
  id: number;
  brand: string;
  thumbnail: string;
  description: string;
}

const CarouselComp = () => {
  const navigate = useNavigate();

  const carouselDtlsData = useSelector(
    (state: any) => state.carouselDtls.carouselDtlsData
  );

  const dispatch = useDispatch();

  const { data } = useGetCarouselByNameQuery('');
  console.log(data);

  const param = { data: data };

  return (
    <div className='carouselComp-cnt' data-ride='carousel'>
      {data
        ? data.products?.map((item: CarouselItem) => {
            return (
              <div
                onClick={() => {
                  dispatch(carouselDtlsFiltered(item.id));
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
