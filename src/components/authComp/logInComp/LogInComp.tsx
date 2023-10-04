import { NavLink } from 'react-router-dom';

// import './loginComp.css';

const LogInComp = () => {
  return (
    <div className='login-cnt'>
      <div className='login-txt-cnt'>
        <form className='form-cnt'>
          <label>Your email</label>
          <input className='inputField' type='email' />
          <label>Your password</label>
          <input className='inputField' type='password' />
          <div className='logInBtn-cnt'>
            <button className='logIn-btn' type='submit'>
              Login
            </button>
          </div>
        </form>
      </div>
      <div className='route-btn-cnt'>
        <p className='route-txt'>Your first time?</p>
        <NavLink to='/signUp' className='signUp-route'>
          Sign up
        </NavLink>
      </div>
    </div>
  );
};

export default LogInComp;
