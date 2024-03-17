import SellerAuth from '../../components/seller/SellerAuth';
const SellerPage = () => {
  return (
    <div className='h-[100vh] bg-bgColor '>
      <div className='bg-[url("../../assets/seller.jpg")] '>
        <p className='text-4xl'>Sell online with E-market</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SellerAuth />
      </div>
    </div>
  );
};

export default SellerPage;
