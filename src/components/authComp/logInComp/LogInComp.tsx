import { NavLink } from 'react-router-dom';

import { auth } from '../../../assets/firebaseConfig/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import { useSelector } from 'react-redux';

const LogInComp = () => {
  const [logInData, setLogInData] = useState<any>();

  const currentUser = useSelector((state: any) => state.user.user);

  const logInHandleChange = (e: any) => {
    setLogInData({ ...logInData, [e.target.name]: e.target.value });
  };

  const logInFunction = async () => {
    if (!currentUser) {
      await signInWithEmailAndPassword(
        auth,
        logInData.userEmail,
        logInData.userPassword
      ).then((userCredential) => {
        const user: any = userCredential.user;
        localStorage.setItem('currentUser', user);
      });
    }
  };

  return (
    <div className='flex flex-col justify-center items-center mt-[11%]'>
      <div>
        <p>E-cart</p>
        <p>Login form</p>
      </div>
      <form className='flex flex-col gap-[8px]'>
        <label>User Email</label>
        <input
          className='border w-[313px] h-[35px]'
          type='email'
          name='userEmail'
          onChange={(e) => {
            logInHandleChange(e);
          }}
        />
        <label>User Password</label>
        <input
          className='border w-[313px] h-[35px]'
          type='password'
          name='userPassword'
          onChange={(e) => {
            logInHandleChange(e);
          }}
        />
        <button
          onClick={() => {
            logInFunction();
          }}
        >
          Log In
        </button>
      </form>
      <div>
        <NavLink to='/signUp'>Sign up</NavLink>
      </div>
    </div>
  );
};

export default LogInComp;
