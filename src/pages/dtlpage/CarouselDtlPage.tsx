import { useContext, useState } from 'react';
import { dataContext } from '../../assets/dataProvider/DataProvider';

const CarouselDtlPage = () => {
  const { carouselDtls } = useContext(dataContext);

  const [filterImg, setFIlterImg] = useState<string>();
  console.log(filterImg);

  const handleImgClick = (i: number) => {
    const filteredData = carouselDtls[0]?.images?.filter(
      (item: string, index: number) => {
        if (index == i) {
          return item;
        }
      }
    );
    setFIlterImg(filteredData);
  };

  return (
    <div>
      <div>
        {carouselDtls
          ? carouselDtls[0]?.images?.map((item: string, index: number) => {
              return (
                <div key={index}>
                  <img
                    src={item}
                    alt=''
                    onClick={() => {
                      handleImgClick(index);
                    }}
                  />
                </div>
              );
            })
          : null}
      </div>
      <div>
        {filterImg ? (
          <img src={filterImg} alt='img' />
        ) : (
          <img src='https://i.dummyjson.com/data/products/1/3.jpg' alt='img' />
        )}
      </div>
    </div>
  );
};

export default CarouselDtlPage;
