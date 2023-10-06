const OrderAndCartBtn = () => {
  return (
    <div className='flex justify-between w-[380px] h-12  mt-6'>
      <button className='orderBtn h-12 w-[167px] border flex items-center justify-center '>
        Order
      </button>
      <button className='orderBtn h-12 w-[107px]  flex items-center justify-center '>
        Add to cart
      </button>
    </div>
  );
};

export default OrderAndCartBtn;
