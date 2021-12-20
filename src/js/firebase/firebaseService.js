import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseData.js';

export default class AuthService {
  // register(email, password);
  async register({ email, password }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
      //   const userID = userCredential.user.uid;
      //   console.log(userID);
    } catch (error) {
      //   const errorCode = error.code;
      const errorMessage = error.message;
      //   console.log('errorCode: ', errorCode);
      console.log('errorMessage: ', errorMessage);
    }
  }

  // signIn(email, password);
  async signIn({ email, password }) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
  }
}
