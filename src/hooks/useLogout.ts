import { signOut } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import { useDispatch } from 'react-redux';
import { logout } from '../components/slice/AuthSlice';

const useLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user-info');
      dispatch(logout());
      console.log('logged out');
    } catch (error) {}
  };
  return { handleLogout };
};

export default useLogout;
