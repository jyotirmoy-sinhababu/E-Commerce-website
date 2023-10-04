import { AiOutlineShoppingCart } from 'react-icons/ai';

// import './btnStyle.css';

const CartBtn = () => {
  return (
    <div className=''>
      <button className='flex items-center gap-[8px] text-2xl'>
        <AiOutlineShoppingCart /> Cart
      </button>
    </div>
  );
};

export default CartBtn;
