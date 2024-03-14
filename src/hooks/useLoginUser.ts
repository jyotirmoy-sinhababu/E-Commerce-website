import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth, firestore } from '../firebase/Firebase';
import { doc, getDoc } from 'firebase/firestore';

import { useDispatch } from 'react-redux';
import { authentication } from '../components/slice/AuthSlice';

const useLoginUser = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const loginUser = async (inputs: any) => {
    setIsLoading(true);
    if (!inputs.email || !inputs.password) {
    }
    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        inputs.email,
        inputs.password
      );
      if (userCred) {
        const docRef = doc(firestore, 'users', userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem('user-info', JSON.stringify(docSnap.data()));
        dispatch(authentication(docSnap.data()));
        console.log(doc);
        setIsLoading(false);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return { loginUser, isLoading };
};

export default useLoginUser;
