import { NavLink } from 'react-router-dom';

import { auth } from '../../../assets/firebaseConfig/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import { useSelector } from 'react-redux';

const LogInComp = () => {
  const [logInData, setLogInData] = useState<any>();

  // const currentUser = useSelector((state: any) => state.user.user);
  // console.log(currentUser);

  const logInHandleChange = (e: any) => {
    setLogInData({ ...logInData, [e.target.name]: e.target.value });
  };
  console.log(logInData);
  const logInFunction = async () => {
    // if (!currentUser) {
    //   await signInWithEmailAndPassword(
    //     auth,
    //     logInData.userEmail,
    //     logInData.userPassword
    //   )
    //     .then((userCredential) => {
    //       const user: any = userCredential.user;
    //       localStorage.setItem('currentUser', user.reloadUserInfo.email);
    //       console.log('login done');
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // }
  };

  return (
    <div className='flex mt-[4%]  justify-center '>
      <div className='flex  gap-[22px] border '>
        {' '}
        <div className='flex flex-col w-[310px] p-[12px] bg-[url("https://www.lifewire.com/thmb/2-ZEU_mnPstnWDcF1I_33H6YAD4=/7680x4320/filters:fill(auto,1)/hands-using-computer-to-config-system-vector-illustration-setting-personal-computer-concept-918493164-5ae8e89204d1cf003c57846f.jpg")] gap-[19px]  h-[360px]'>
          <p className='text-3xl font-serif '>Login form</p>
          <p className='text-xl font-serif '>Login to get access.</p>
        </div>
        <div>
          {' '}
          <form
            className='flex flex-col gap-[8px] p-[12px] '
            onSubmit={(e) => {
              e.preventDefault();
              // logInFunction();
            }}
          >
            <label className='font-serif'>User Email</label>
            <input
              className='border w-[313px] h-[35px]'
              type='email'
              name='userEmail'
              onChange={(e) => {
                logInHandleChange(e);
              }}
            />
            <label className='font-serif'>User Password</label>
            <input
              className='border w-[313px] h-[35px]'
              type='password'
              name='userPassword'
              onChange={(e) => {
                logInHandleChange(e);
              }}
            />
            <div className='flex justify-end pt-[54px] '>
              {' '}
              <button
                type='submit'
                className='border w-[147px] h-[42px] font-serif bg-teal-400  '
              >
                Log In
              </button>
            </div>
          </form>
          <div className='flex'>
            <p>your first time?</p>
            <NavLink className='font-serif text-sky-400 ' to='/signUp'>
              Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInComp;
