import { AiOutlineShoppingCart } from 'react-icons/ai';


const CartBtn = () => {
  return (
    <div className=''>
      <button className='flex items-center gap-[8px] font-serif text-2xl'>
        <AiOutlineShoppingCart /> Cart
      </button>
    </div>
  );
};

export default CartBtn;
