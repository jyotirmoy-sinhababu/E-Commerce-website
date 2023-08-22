const CarouselCard = ({ data }: any) => {
  return (
    <div className='carouselCard-cnt'>
      <img className='carouselImg' src={data.thumbnail} alt='thumnail' />
    </div>
  );
};

export default CarouselCard;
