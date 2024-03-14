import { useState } from 'react';
import { toast } from 'react-toastify';

import { firestore, auth } from '../firebase/Firebase';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { useDispatch } from 'react-redux';
import { authentication } from '../components/slice/AuthSlice';

const useCreateUserWithEmailandPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const signedUp = async (inputs: any) => {
    if (!inputs.email || !inputs.password || !inputs.name) {
      toast.error('All fields are required');
    }

    const usersRef = collection(firestore, 'users');

    const q = query(usersRef, where('userName', '==', inputs.name));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      toast.error('User already exists');
      return;
    }

    try {
      setIsLoading(true);
      const newUser = await createUserWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          userName: inputs.name,
          profilePicUrl: '',
          cart: [],
          order: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc);
        setIsLoading(false);
        localStorage.setItem('user-info', JSON.stringify(userDoc));
        dispatch(authentication(userDoc));
      }
    } catch (error) {
      toast.error('something went wrong');
      setIsLoading(false);
    }
  };
  return { isLoading, signedUp };
};

export default useCreateUserWithEmailandPassword;
