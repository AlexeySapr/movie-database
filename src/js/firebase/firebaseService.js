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

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: this.#baseUserIcon,
    });

    return userCredential.user.uid;
  }

  // signIn(email, password);
  async signIn() {
    const { email, password } = this.authUser;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user.uid;
  }
}
