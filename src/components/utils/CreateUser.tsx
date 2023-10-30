import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../assets/firebaseConfig/Firebase';

export const useCreateUser = async (email: any, password: any) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user: any = userCredential.user;
      localStorage.setItem('currentUser', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
