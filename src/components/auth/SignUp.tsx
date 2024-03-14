const SignUp = () => {
  return (
    <form className='flex flex-col gap-8 '>
      <input
        type='text'
        className='w-[370px] h-[47px] bg-slate-500 pl-2 text-xl'
        placeholder='enter your name'
      />
      <input
        type='email'
        className='w-[370px] h-[47px] bg-slate-500 pl-2 text-xl'
        placeholder='enter your email'
      />
      <input
        type='password'
        className='w-[370px] h-[47px] bg-slate-500 pl-2 text-xl'
        placeholder='enter your password'
      />
      <div className='flex justify-end w-[340px]'>
        <button className='h-[49px] w-[110px] cursor-pointer font-bold text-xl border-2 border-teal-500 rounded-md'>
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignUp;