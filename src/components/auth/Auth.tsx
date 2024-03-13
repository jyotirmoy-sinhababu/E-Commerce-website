import Logo from '../logo/Logo';
import { useState } from 'react';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <div className='flex flex-col bgColor h-[100vh]'>
      <div className='flex flex-col'>
        <Logo />
        {isLogin ? <LogIn /> : <SignUp />}
      </div>
      <div className='flex items-center'>
        <div className='h-[1px] w-[280px] bg-black'></div>
        OR
        <div className='h-[1px] w-[280px] bg-black'></div>
      </div>
      <div>
        <div>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
        </div>
        <div
          onClick={() => {
            setIsLogin(!isLogin);
          }}
          className='cursor-pointer'
        >
          {isLogin ? 'Sign up' : 'Log in'}
        </div>
      </div>
    </div>
  );
};

export default Auth;
