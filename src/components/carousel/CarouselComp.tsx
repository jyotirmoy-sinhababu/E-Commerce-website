import { useNavigate, createSearchParams } from 'react-router-dom';

import { useGetCarouselByNameQuery } from '../../assets/slice/CarouselSlice';

import { useDispatch } from 'react-redux';

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

  const dispatch = useDispatch();

  const { data } = useGetCarouselByNameQuery('');
  console.log(data);

  const param = { data: data };

  const filterCarouselData = (Id: number) => {
    const filteredData = data.filter((item: any) => {
      item.id = Id;
    });
    return filteredData;
  };

  return (
    <div className='carouselComp-cnt' data-ride='carousel'>
      {data
        ? data.products?.map((item: CarouselItem) => {
            return (
              <div
                onClick={() => {
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
