import { useState } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../assets/firebaseConfig/Firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { useDispatch } from 'react-redux';

const SignUpComp = () => {
  const [signInput, setSignUpInput] = useState<any>();

  const [err, setErr] = useState<any>({
    nameEr: '',
    emailEr: '',
    passwordEr: '',
  });

  const dispatch = useDispatch();

  const handleSignUp = async () => {
    await createUserWithEmailAndPassword(
      auth,
      signInput.userEmail,
      signInput.userPassword
    ).then((userCredential) => {
      const user: any = userCredential.user;
      console.log(user.reloadUserInfo.email);
      localStorage.setItem('currentUser', user.reloadUserInfo.email);
      onAuthStateChanged(auth, (user) => {});
    });
  };

  const handleChange = (e: any) => {
    setSignUpInput({ ...signInput, [e.target.name]: e.target.value });
  };
  console.log(signInput);

  return (
    <div className='flex mt-[4%]  justify-center'>
      <div className='flex  gap-[22px] border '>
        <div className='flex flex-col w-[310px] p-[12px] bg-[url("https://www.lifewire.com/thmb/2-ZEU_mnPstnWDcF1I_33H6YAD4=/7680x4320/filters:fill(auto,1)/hands-using-computer-to-config-system-vector-illustration-setting-personal-computer-concept-918493164-5ae8e89204d1cf003c57846f.jpg")] gap-[19px]  h-[360px]'>
          <p className='text-3xl font-serif '>Signup</p>
          <p className='text-xl font-serif '>
            Get access to your cart and orders.
          </p>
        </div>
        <form
          className='flex flex-col gap-[8px] p-[12px] '
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <label className='font-serif'>User Name</label>
          <input
            className='border w-[313px] h-[35px]'
            type='text'
            name='userName'
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label className='font-serif'>User Email</label>
          <input
            className='border w-[313px] h-[35px]'
            type='email'
            name='userEmail'
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label className='font-serif'>Password</label>
          <input
            className='border w-[313px] h-[35px]'
            type='password'
            name='userPassword'
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <div className='flex justify-end pt-[54px]'>
            {' '}
            <button
              className='border w-[142px] h-[43px] font-serif bg-teal-400'
              type='submit'
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpComp;
