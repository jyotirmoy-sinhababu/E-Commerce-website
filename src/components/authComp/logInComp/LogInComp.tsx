import { NavLink } from 'react-bootstrap';
import './loginComp.css';

const LogInComp = () => {
  return (
    <div className='login-cnt'>
      <div className='login-txt-cnt'>
        <div>
          <div className=''>
            <p className='login-txt'>Login</p>
          </div>
        </div>
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
        <NavLink className='signUp-route'>Sign up</NavLink>
      </div>
    </div>
  );
};

export default LogInComp;
