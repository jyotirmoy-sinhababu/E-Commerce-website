import { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { AiTwotoneStar } from 'react-icons/ai';
import { ImSad2 } from 'react-icons/im';
import { IoMdAdd } from 'react-icons/io';
import { GrSubtract } from 'react-icons/gr';
import OrderAndCartBtn from '../../sub-components/order&addCart/OrderAndCartBtn';

// import './carouselDtlPageStyle.css';

const CarouselDtlPage = () => {
  const [filterImg, setFIlterImg] = useState<string>();
  const location = useLocation();
  const data = location.state;

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
    <div className='flex p-[4%]'>
      <div className='flex gap-[12px] flex-col'>
        {data
          ? data?.images?.map((item: string, index: number) => {
              return (
                <div key={index}>
                  <img
                    className=' w-[100px] h-[96px] cursor-pointer border '
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
      <div className=''>
        {filterImg ? (
          <div className='ms-8'>
            <img className='h-[421px] w-[460px] ' src={filterImg} alt='img' />
          </div>
        ) : (
          <div className='ms-8'>
            {data ? (
              <img
                className='h-[421px] w-[460px] '
                src={data.thumbnail}
                alt=''
              />
            ) : (
              <p>No image found</p>
            )}
          </div>
        )}
        <div className='ms-8 flex mt-[10px] gap-[4px]'>
          <button
            className='border w-[26px] h-[25px] flex justify-center items-center'
            onClick={() => {
              subCount();
            }}
          >
            <GrSubtract />
          </button>
          <p>{count}</p>
          <button
            className='border w-[26px] h-[25px] flex justify-center items-center'
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
        <div className=' ml-[10%] gap-[8px]'>
          <div>
            <h2>{data.title}</h2>
            <p>by {data.brand}</p>
          </div>
          <div className='flex items-center'>
            <p className=''>{data.rating}</p>
            <p className=''>
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
          <OrderAndCartBtn />
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
