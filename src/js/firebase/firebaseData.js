import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCSltsojn2ByRlj0ch6T0e6-gChUaJoDtY',
  authDomain: 'film-library-d58d7.firebaseapp.com',
  projectId: 'film-library-d58d7',
  storageBucket: 'film-library-d58d7.appspot.com',
  messagingSenderId: '948909391692',
  appId: '1:948909391692:web:601ac58d2f4fb6713c99e9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
