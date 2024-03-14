import { useState } from 'react';
import useLoginUser from '../../hooks/useLoginUser';

const LogIn = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  console.log(inputs);

  const { loginUser, isLoading } = useLoginUser();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        loginUser(inputs);
      }}
      className='flex flex-col gap-8 items-center'
    >
      <input
        type='email'
        className='w-[370px] h-[47px] bg-slate-500 pl-2 text-xl text-gray-100'
        placeholder='enter your email'
        onChange={(e) => {
          setInputs({ ...inputs, email: e.target.value });
        }}
      />
      <input
        type='password'
        className='w-[370px]  h-[47px] bg-slate-500 pl-2 text-xl text-gray-100'
        placeholder='enter your password'
        onChange={(e) => {
          setInputs({ ...inputs, password: e.target.value });
        }}
      />
      <div className='flex justify-end w-[340px]'>
        <button
          type='submit'
          className='h-[49px] w-[110px] cursor-pointer font-bold text-xl border-2 border-teal-500 rounded-md'
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
      </div>
    </form>
  );
};

export default LogIn;
3;
