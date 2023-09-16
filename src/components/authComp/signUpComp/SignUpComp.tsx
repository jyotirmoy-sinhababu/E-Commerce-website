import { useState } from 'react';

import './signUpComp.css';

const SignUpComp = () => {
  const [signInput, setSignUpInput] = useState<any>({
    name: '',
    email: '',
    password: '',
  });
  const [err, setErr] = useState<any>({
    nameEr: '',
    emailEr: '',
    passwordEr: '',
  });

  const signUpFunction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signInput.name == '') {
      setErr({ ...err, nameEr: '* Required' });
    } else if (!/^[a-zA-Z ]+$/.test(signInput.name)) {
      setErr({ ...err, nameEr: '* Wrong format' });
    } else if (signInput.email == '') {
      setErr({ ...err, emailEr: '* Required' });
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(signInput.email)
    ) {
      setErr({ ...err, emailEr: '* Wrong format' });
    } else if (signInput.password == '') {
      setErr({ ...err, passwordEr: '* Required' });
    } else if (!/^.{8}$/.test(signInput.password)) {
      setErr({ ...err, passwordEr: '* Wrong format' });
    } else {
    }
  };

  const handleChange = (e: any) => {
    setSignUpInput({ ...signInput, [e.target.name]: e.target.value });
  };

  return (
    <div className='signUp-form-cnt'>
      <form
        onSubmit={(e) => {
          signUpFunction(e);
        }}
        className='signUp-form'
      >
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          name='name'
          className='signUp-field'
          type='text'
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          name='email'
          className='signUp-field'
          type='email'
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          name='password'
          className='signUp-field'
          type='password'
        />
        <div className='signUpBtn-cnt'>
          <button type='submit' className='signUpBtn'>
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpComp;
