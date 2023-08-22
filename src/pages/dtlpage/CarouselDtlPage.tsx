import { useContext } from 'react';
import { dataContext } from '../../assets/dataProvider/DataProvider';

const CarouselDtlPage = () => {
  const { carouselDtls } = useContext(dataContext);
  console.log(carouselDtls[0].images);

  return (
    <div>
      <div>
        {carouselDtls[0]?.images?.map((item: string, index: number) => {
          return (
            <div key={index}>
              <img src={item} alt='' />
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default CarouselDtlPage;
