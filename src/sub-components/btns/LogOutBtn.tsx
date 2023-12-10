import { signOut } from 'firebase/auth';
import { auth } from '../../assets/firebaseConfig/Firebase';

import { useNavigate } from 'react-router-dom';

import { AiOutlineLogout } from 'react-icons/ai';


const LogOutBtn = () => {
  const navigate = useNavigate();

  const logOutFunction = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('currentUser');
        navigate('/');
        console.log('logOut btn');
      })
      .catch((error) => {});
  };

  return (
    <div>
      <button
        onClick={() => {
          logOutFunction();
        }}
      >
        <AiOutlineLogout /> Log out
      </button>
    </div>
  );
};

export default LogOutBtn;
