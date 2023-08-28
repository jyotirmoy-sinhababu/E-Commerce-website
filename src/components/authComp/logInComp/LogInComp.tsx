import { NavLink } from 'react-bootstrap';
import './loginComp.css';

const LogInComp = () => {
  return (
    <div className='login-cnt'>
      <div>
        <div>
          <div>
            <p>Login</p>
          </div>
          <p>All yours order are here</p>
        </div>
        <form>
          <label>Your email</label>
          <input className='' type='email' />
          <label>Your password</label>
          <input className='' type='password' />
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
