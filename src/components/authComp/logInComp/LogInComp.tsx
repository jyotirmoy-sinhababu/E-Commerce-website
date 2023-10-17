import { NavLink } from 'react-router-dom';

const LogInComp = () => {
  return (
    <div className='login-cnt'>
      <div>
        <p>E-cart</p>
        <p>Login form</p>
      </div>
      <form></form>
      <div>
        <NavLink to='/signUp'>Sign up</NavLink>
      </div>
    </div>
  );
};

export default LogInComp;
