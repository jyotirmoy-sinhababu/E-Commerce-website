import { useContext, useState } from 'react';
import { dataContext } from '../../assets/dataProvider/DataProvider';

import './carouselDtlPageStyle.css';

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
    <div className='carouselDtl-cnt'>
      <div className='img-btnsCnt'>
        {carouselDtls
          ? carouselDtls[0]?.images?.map((item: string, index: number) => {
              return (
                <div key={index}>
                  <img
                    className='img-btns'
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
          <div>
            {/* {carouselDtls ? (
              carouselDtls[0].map((item: any) => {
                return <img src={item.thumbnail} alt='img' />;
              })
            ) : (
              <p>No image found</p>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselDtlPage;
