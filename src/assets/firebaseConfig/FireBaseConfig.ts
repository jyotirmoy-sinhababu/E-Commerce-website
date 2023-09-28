// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCsV4mrVlS_gnmmjOibh6 - w1M2AxNzzFEo',
  authDomain: 'e-commerce-fee47.firebaseapp.com',
  projectId: 'e-commerce-fee47',
  storageBucket: ' e-commerce-fee47.appspot.com',
  messagingSenderId: '705358317694',
  appId: '1:705358317694:web:fccbbe0ad79824af45b02f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
