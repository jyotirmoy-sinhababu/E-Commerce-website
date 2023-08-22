import { useContext } from 'react';
import { dataContext } from '../../assets/dataProvider/DataProvider';

const CarouselDtlPage = () => {
  const { carouselDtls } = useContext(dataContext);
  return (
    <div>
      <div>{}</div>
      <div></div>
    </div>
  );
};

export default CarouselDtlPage;
