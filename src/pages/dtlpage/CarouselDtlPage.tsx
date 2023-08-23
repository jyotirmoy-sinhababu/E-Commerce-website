import { useContext, useState } from 'react';
import { dataContext } from '../../assets/dataProvider/DataProvider';

import { AiTwotoneStar } from 'react-icons/ai';
import { ImSad2 } from 'react-icons/im';
import { IoMdAdd } from 'react-icons/io';
import { GrSubtract } from 'react-icons/gr';

import './carouselDtlPageStyle.css';

const CarouselDtlPage = () => {
  const { carouselDtls } = useContext(dataContext);

  const [filterImg, setFIlterImg] = useState<string>();

  const [count, setCount] = useState<number>(1);

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

  const addCount = () => {
    if (count >= 1) {
      setCount(count + 1);
    }
  };

  const subCount = () => {
    if (count != 1) {
      setCount(count - 1);
    }
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
          </div>
        ) : (
          <div>
            {carouselDtls ? (
              <img src={carouselDtls[0].thumbnail} alt='' />
            ) : (
              <p>No image found</p>
            )}
          </div>
        )}
        <div className='countBtn-cnt'>
          <button
            className='countBtn'
            onClick={() => {
              subCount();
            }}
          >
            <GrSubtract />
          </button>
          <p>{count}</p>
          <button
            className='countBtn'
            onClick={() => {
              addCount();
            }}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
      {carouselDtls ? (
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
            <div>
              {' '}
              <p className='price'>
                $
                {(
                  (carouselDtls[0].price -
                    (carouselDtls[0].discountPercentage / 100) *
                      carouselDtls[0].price) *
                  count
                ).toFixed(2)}
              </p>
            </div>
            <div>
              <p>
                {carouselDtls[0].discountPercentage}% discount on{' '}
                {carouselDtls[0].price}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>
          <ImSad2 />
        </p>
      )}
    </div>
  );
};

export default CarouselDtlPage;
