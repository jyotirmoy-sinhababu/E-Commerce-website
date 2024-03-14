import Logo from '../logo/Logo';

import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { BsCartCheckFill } from 'react-icons/bs';
import { FaShop } from 'react-icons/fa6';
import { Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Logo />
      <div>
        <Avatar name='Jyotirmioy' size='100' round={true} />
        <button>Login</button>
        <Link to=''>
          <BsCartCheckFill /> Cart
        </Link>
        <button>
          <FaShop />
          Become a seller
        </button>
      </div>
    </div>
  );
};

export default NavBar;
