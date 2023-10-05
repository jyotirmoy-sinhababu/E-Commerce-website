// import './allProductStyle.css';

const AllProductCard = ({ data }: any) => {
  return (
    <div className='border-2 p-[8px] cursor-pointer'>
      <img
        className='h-[160px] w-[145px]'
        src={data.image}
        alt={data.category}
      />
      <p>{data.category}</p>
      <p className='allProduct-rate'>{data.rating.rate}</p>
    </div>
  );
};

export default AllProductCard;
