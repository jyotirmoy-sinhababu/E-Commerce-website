const CarouselCard = ({ data }: any) => {
  return (
    <div className='carousel-item active'>
      <img className='d-block w-100' src={data.thumbnail} alt='thumnail' />
    </div>
  );
};

export default CarouselCard;
