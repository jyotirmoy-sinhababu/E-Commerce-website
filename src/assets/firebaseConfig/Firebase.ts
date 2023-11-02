// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC2TEUUDhoSaOlK3udfuSzBXZFAKW3YAPM',
  authDomain: 'e-commerce-67a2d.firebaseapp.com',
  projectId: 'e-commerce-67a2d',
  storageBucket: 'e-commerce-67a2d.appspot.com',
  messagingSenderId: '666319417912',
  appId: '1:666319417912:web:f7ce6c60092ec4548aeccd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
