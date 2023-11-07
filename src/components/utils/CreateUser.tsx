import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../assets/firebaseConfig/Firebase';

// import { useDispatch } from 'react-redux';
// import { addUser } from '../../assets/slice/UserOnlineSlice';
// import { onAuthStateChanged } from 'firebase/auth';

export const useCreateUser = async (email: any, password: any) => {
  // const dispatch = useDispatch();

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user: any = userCredential.user;
      console.log(user.reloadUserInfo.email);
      localStorage.setItem('currentUser', user.reloadUserInfo.email);
      // onAuthStateChanged(auth, (user) => {
      //   dispatch(addUser(user));
      // });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};
