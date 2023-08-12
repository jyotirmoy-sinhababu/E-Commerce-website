const CarouselCard = ({ data }) => {
  return (
    <div>
      <img src={data.thumbnail} alt='thumnail' />
    </div>
  );
};

export default CarouselCard;
