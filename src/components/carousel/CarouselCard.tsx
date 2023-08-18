import { useState } from 'react';

const CarouselCard = ({ data }: any) => {
  const [imgCount, setImgCount] = useState(0);

  return (
    <div className='carouselCard-cnt'>
      <img className='carouselImg' src={data.thumbnail} alt='thumnail' />
    </div>
  );
};

export default CarouselCard;
