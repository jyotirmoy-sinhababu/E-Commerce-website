import './signUpComp.css';

const SignUpComp = () => {
  return (
    <div className='signUp-form-cnt'>
      <form className='signUp-form'>
        <input className='signUp-field' type='text' />
        <input className='signUp-field' type='email' />
        <input className='signUp-field' type='password' />
        <div className='signUpBtn-cnt'>
          <button className='signUpBtn'>SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpComp;
