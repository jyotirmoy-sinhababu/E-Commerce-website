import { NavLink } from 'react-bootstrap';
import './loginComp.css';

const LogInComp = () => {
  return (
    <div className='login-cnt'>
      <div className='login-txt-cnt'>
        <div>
          <div>
            <p>Login</p>
          </div>
          <p>All yours order are here</p>
        </div>
        <form className='form-cnt'>
          <label>Your email</label>
          <input className='email' type='email' />
          <label>Your password</label>
          <input className='password' type='password' />
          <button type='submit'>Login</button>
        </form>
      </div>
      <div>
        <p>Your first time?</p>
        <NavLink>Sign up</NavLink>
      </div>
    </div>
  );
};

export default LogInComp;
