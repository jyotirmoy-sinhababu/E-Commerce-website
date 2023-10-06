// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDWBHqySyxpx8NKGVCVw4j5p3LsVoC3WVI',
  authDomain: 'e-commerce-app-cf05f.firebaseapp.com',
  projectId: 'e-commerce-app-cf05f',
  storageBucket: 'e-commerce-app-cf05f.appspot.com',
  messagingSenderId: '902517392652',
  appId: '1:902517392652:web:3ad44e22d9ccb934ea3529',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
