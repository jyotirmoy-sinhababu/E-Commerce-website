import Logo from '../logo/Logo';
import { useState } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <div className='flex flex-col justify-center items-center 5 '>
      <div className='flex flex-col gap-5  '>
        <Logo />
        {!isLogin ? <LogIn /> : <SignUp />}
      </div>
      <div className='flex items-center justify-center'>
        <div className='h-[1px] w-[280px] bg-black'></div>: :
        <div className='h-[1px] w-[280px] bg-black'></div>
      </div>
      <div className='flex gap-1'>
        <div className='text-xl'>
          {!isLogin ? "Don't have an account?" : 'Already have an account?'}
        </div>
        <div
          onClick={() => {
            setIsLogin(!isLogin);
          }}
          className='cursor-pointer text-xl font-semibold'
        >
          {!isLogin ? 'Sign up' : 'Log in'}
        </div>
      </div>
    </div>
  );
};

export default Auth;
