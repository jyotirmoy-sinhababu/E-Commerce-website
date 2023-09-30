import './allProductStyle.css';

const AllProductCard = ({ data }: any) => {
  return (
    <div className='allProduct-Card_cnt'>
      <img className='allProduct-img' src={data.image} alt={data.category} />
      <p className='allProduct-rate'>{data.rating.rate}</p>
    </div>
  );
};

export default AllProductCard;
