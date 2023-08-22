import { useContext } from 'react';
import { dataContext } from '../../assets/dataProvider/DataProvider';

const CarouselDtlPage = () => {
  const { carouselDtls } = useContext(dataContext);
  return (
    <div>
      <div>
        <img src={carouselDtls.images[0]} alt='' />
      </div>
      <div></div>
    </div>
  );
};

export default CarouselDtlPage;
