import { NavLink } from 'react-bootstrap';

const LogInComp = () => {
  return (
    <div>
      <div>
        <div>
          <p>Login</p>
          <p>All yours order are here</p>
        </div>
        <form>
          <label>Your email</label>
          <input className='' type='email' />
          <label>Your password</label>
          <input className='' type='password' />
          <button>Login</button>
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
