import { useState } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../../assets/firebaseConfig/FireBaseConfig';

// import './signUpComp.css';

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

  // const { email, password } = signInput;

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
      // createUserWithEmailAndPassword(auth, email, password)
      //   .then((userCredential) => {
      //     const user = userCredential.user;
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //   });
    }
  };

  const handleChange = (e: any) => {
    setSignUpInput({ ...signInput, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex flex-col justify-center items-center h-[80vh]'>
      <div>
        <p>E-cart</p>
        <p>Sign up form</p>
      </div>
      <form
        className='flex flex-col'
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
      >
        <label>User Name</label>
        <input className='border w-[308px]' type='text' name='userName' />
        <label>User Email</label>
        <input className='border w-[308px]' type='email' name='userEmail' />
        <label>Password</label>
        <input
          className='border w-[308px]'
          type='password'
          name='userPassword'
        />
        <button className='border w-[142px] h-[43px]' type='submit'>
          Log in
        </button>
      </form>
    </div>
  );
};

export default SignUpComp;
