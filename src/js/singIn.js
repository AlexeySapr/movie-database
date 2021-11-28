// Initialize the FirebaseUI Widget using Firebase.
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const firebaseConfig = {
  apiKey: 'AIzaSyCSltsojn2ByRlj0ch6T0e6-gChUaJoDtY',
  authDomain: 'film-library-d58d7.firebaseapp.com',
  projectId: 'film-library-d58d7',
  storageBucket: 'film-library-d58d7.appspot.com',
  messagingSenderId: '948909391692',
  appId: '1:948909391692:web:601ac58d2f4fb6713c99e9',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: 'https://www.google.com/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  //   tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  //   privacyPolicyUrl: function () {
  //     window.location.assign('<your-privacy-policy-url>');
  //   },
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
