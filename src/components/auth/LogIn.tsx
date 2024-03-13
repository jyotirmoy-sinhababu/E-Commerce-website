const LogIn = () => {
  return (
    <form className='flex flex-col gap-8 items-center'>
      <input type='email' className='w-[370px] h-[43px] bg-slate-500' />
      <input type='password' className='w-[370px]  h-[43px] bg-slate-500' />
      <button className='w-[180px]'>Login</button>
    </form>
  );
};

export default LogIn;
