const SignUp = () => {
  return (
    <form className='flex flex-col gap-8 '>
      <input type='text' className='w-[370px] h-[43px] bg-slate-500' />
      <input type='email' className='w-[370px] h-[43px] bg-slate-500' />
      <input type='password' className='w-[370px] h-[43px] bg-slate-500' />
      <button className='w-[180px]'>Sign up</button>
    </form>
  );
};

export default SignUp;
