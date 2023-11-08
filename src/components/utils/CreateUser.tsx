import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../assets/firebaseConfig/Firebase';

export const useCreateUser = async (email: any, password: any) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user: any = userCredential.user;
      console.log(user.reloadUserInfo.email);
      localStorage.setItem('currentUser', user.reloadUserInfo.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};
