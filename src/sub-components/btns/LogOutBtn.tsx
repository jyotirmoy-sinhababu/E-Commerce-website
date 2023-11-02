import { signOut } from 'firebase/auth';
import { auth } from '../../assets/firebaseConfig/Firebase';

import { useNavigate } from 'react-router-dom';

import { AiOutlineLogout } from 'react-icons/ai';

import { addUser } from '../../assets/slice/UserOnlineSlice';
import { useDispatch } from 'react-redux';

const LogOutBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutFunction = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem('currentUser');
        navigate('/');
        dispatch(addUser({}));
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
