import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../assets/firebaseConfig/Firebase';

import { userData } from '../../../assets/slice/UserSlice';
import { useDispatch } from 'react-redux';

const SignUpComp = () => {
  const [signInput, setSignUpInput] = useState<any>();

  const [err, setErr] = useState<any>({
    nameEr: '',
    emailEr: '',
    passwordEr: '',
  });

  const dispatch = useDispatch();

  const signUpFunction = async () => {
    await createUserWithEmailAndPassword(
      auth,
      signInput.userEmail,
      signInput.userPassword
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleChange = (e: any) => {
    setSignUpInput({ ...signInput, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex flex-col justify-center items-center mt-[11%] '>
      <div>
        <p>E-cart</p>
        <p>Sign up form</p>
      </div>
      <form
        className='flex flex-col gap-[8px]'
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          signUpFunction();
        }}
      >
        <label>User Name</label>
        <input
          className='border w-[313px] h-[35px]'
          type='text'
          name='userName'
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label>User Email</label>
        <input
          className='border w-[313px] h-[35px]'
          type='email'
          name='userEmail'
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label>Password</label>
        <input
          className='border w-[313px] h-[35px]'
          type='password'
          name='userPassword'
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button className='border w-[142px] h-[43px]' type='submit'>
          Sign Up{' '}
        </button>
      </form>
    </div>
  );
};

export default SignUpComp;
