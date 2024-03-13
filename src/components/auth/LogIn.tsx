const LogIn = () => {
  return (
    <form className='flex flex-col'>
      <input type='email' className='w-[200px] border-black    h-[43px]' />
      <input type='password' className='w-[200px] border-black h-[43px]' />
      <button className='w-[180px]'>Login</button>
    </form>
  );
};

export default LogIn;
