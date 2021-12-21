import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from './firebaseData.js';
import userIcon from '../../images/icons/user_icon.png';

export default class AuthService {
  #baseUserIcon = userIcon;

  constructor() {
    this.authUser = {};
  }

  get user() {
    return this.authUser;
  }

  set user({ name, email, password }) {
    this.authUser = { name, email, password };
  }

  // register(email, password);
  async register() {
    const { name, email, password } = this.authUser;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const updateUser = await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: this.#baseUserIcon,
      });
      console.log(userCredential.user);
      console.log('auth.currentUser: ', auth.currentUser);

      //   return userCredential.user;
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
