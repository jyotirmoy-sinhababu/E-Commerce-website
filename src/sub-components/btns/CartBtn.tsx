import { AiOutlineShoppingCart } from 'react-icons/ai';

// import './btnStyle.css';

const CartBtn = () => {
  return (
    <div className='cartBtn-cnt'>
      <button className='cartBtn'>
        <AiOutlineShoppingCart /> Cart
      </button>
    </div>
  );
};

export default CartBtn;
