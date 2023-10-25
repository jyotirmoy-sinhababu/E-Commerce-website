import { NavLink } from 'react-router-dom';

const LogInComp = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[11%]'>
      <div>
        <p>E-cart</p>
        <p>Login form</p>
      </div>
      <form className='flex flex-col gap-[8px]'>
        <label>User Email</label>
        <input
          className='border w-[313px] h-[35px]'
          type='email'
          name='userEmail'
          onChange={() => {}}
        />
        <label>User Password</label>
        <input
          className='border w-[313px] h-[35px]'
          type='password'
          name='userPassword'
          onChange={() => {}}
        />
      </form>
      <div>
        <NavLink to='/signUp'>Sign up</NavLink>
      </div>
    </div>
  );
};

export default LogInComp;
