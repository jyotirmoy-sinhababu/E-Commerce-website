import './carouselStyle.css';

const CarouselCard = ({ data }: any) => {
  return (
    <div>
      <img src={data.thumbnail} alt='thumnail' />
    </div>
  );
};

export default CarouselCard;
