import { useContext, useState } from 'react';
import { dataContext } from '../../assets/dataProvider/DataProvider';

import { AiTwotoneStar } from 'react-icons/ai';

import './carouselDtlPageStyle.css';

const CarouselDtlPage = () => {
  const { carouselDtls } = useContext(dataContext);

  const [filterImg, setFIlterImg] = useState<string>();

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
          <div>
            <img src={filterImg} alt='img' />
            <p>{carouselDtls[0].description}</p>
          </div>
        ) : (
          <div>
            {/* {carouselDtls ? (
              carouselDtls[0].map((item: any) => {
                return <img src={item.thumbnail} alt='img' />;
              })
            ) : (
              <p>No image found</p>
            )} */}
            <img src={carouselDtls[0].thumbnail} alt='' />
          </div>
        )}
      </div>
      <div>
        <div>
          <h2>{carouselDtls[0].title}</h2>
          <p>by {carouselDtls[0].brand}</p>
        </div>
        <div className='rating-cnt'>
          <p className='rating'>{carouselDtls[0].rating}</p>
          <p className='star'>
            <AiTwotoneStar />
          </p>
        </div>
        <div>
          <p className='price'>{carouselDtls[0].price}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselDtlPage;
