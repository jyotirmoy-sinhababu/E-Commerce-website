import SellerAuth from '../../components/seller/SellerAuth';

const SellerPage = () => {
  return (
    <div className='h-[100vh] bg-bgColor flex justify-center items-center'>
      <h2>Become a seller with E-market</h2>
      <SellerAuth />
    </div>
  );
};

export default SellerPage;
