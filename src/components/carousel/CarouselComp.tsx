import { useContext } from 'react';
import { dataContext } from '../../assets/dataProvider/DataProvider';

import CarouselCard from './CarouselCard';

interface CarouselItem {
  id: number;
  brand: string;
  thumbnail: string;
  description: string;
}

const CarouselComp = () => {
  const { carouselData } = useContext(dataContext);
  return (
    <div className='carouselComp-cnt'>
      {carouselData
        ? carouselData?.map((item: CarouselItem) => {
            return (
              <div key={item.id}>
                <CarouselCard data={item} />
              </div>
            );
          })
        : null}
    </div>
  );
};

export default CarouselComp;
