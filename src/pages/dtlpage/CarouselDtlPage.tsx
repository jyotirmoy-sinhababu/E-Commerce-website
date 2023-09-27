import { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { AiTwotoneStar } from 'react-icons/ai';
import { ImSad2 } from 'react-icons/im';
import { IoMdAdd } from 'react-icons/io';
import { GrSubtract } from 'react-icons/gr';

import './carouselDtlPageStyle.css';

const CarouselDtlPage = () => {
  const [filterImg, setFIlterImg] = useState<string>();
  const location = useLocation();
  const data = location.state;

  console.log(data);

  const [count, setCount] = useState<number>(1);

  const handleImgClick = (i: number) => {
    const filteredData = data?.images?.filter((item: string, index: number) => {
      if (index == i) {
        return item;
      }
    });
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
        {data
          ? data?.images?.map((item: string, index: number) => {
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
          <div className=''>
            <img className='filterImg' src={filterImg} alt='img' />
          </div>
        ) : (
          <div>
            {data ? <img src={data.thumbnail} alt='' /> : <p>No image found</p>}
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
              if (data.stock != count) {
                addCount();
              }
            }}
          >
            <IoMdAdd />
          </button>
        </div>
      </div>
      {data ? (
        <div>
          <div>
            <h2>{data.title}</h2>
            <p>by {data.brand}</p>
          </div>
          <div className='rating-cnt'>
            <p className='rating'>{data.rating}</p>
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
                  (data.price - (data.discountPercentage / 100) * data.price) *
                  count
                ).toFixed(2)}
              </p>
            </div>
            <div>
              <p>
                {data.discountPercentage}% discount on {data.price}
              </p>
            </div>
            <div>
              <p>Available stock :{data.stock - count}</p>
            </div>
          </div>
          <div className='cart-order-BtnCnt'>
            <button className='orderBtn'>Order</button>
            <button className='Addto-cartBtn'>Add to cart</button>
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
