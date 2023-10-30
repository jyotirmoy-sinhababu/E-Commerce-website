import { useState } from 'react';

import { useCreateUser } from '../../utils/CreateUser';

const SignUpComp = () => {
  const [signInput, setSignUpInput] = useState<any>();

  const [err, setErr] = useState<any>({
    nameEr: '',
    emailEr: '',
    passwordEr: '',
  });

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
          useCreateUser(signInput.name, signInput.email);
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
