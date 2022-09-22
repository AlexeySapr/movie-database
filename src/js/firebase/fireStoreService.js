import { async } from '@firebase/util';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  setDoc,
  serverTimestamp,
  query,
  orderBy,
  startAt,
  startAfter,
  endAt,
  endBefore,
  limit,
} from 'firebase/firestore';
import { db } from '../firebase/firebaseData';

// collection Users ref
// const colUsersRef = collection(db, 'Users');

//get all collection documents (get all Users)
// getDocs(colUsersRef)
//   .then(snapshot => {
//     snapshot.docs.forEach(doc => {
//       console.log('Doc data: ', doc.data());
//       console.log('Doc id: ', doc.id);
//     });
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

//get one doc in collection (get User)
// const userId = 'test2@mail.com';
// const docUserRef = doc(db, 'Users', userId);
// getDoc(docUserRef).then(user => {
//   // console.log('user.data: ', user.data());
//   // console.log('user id: ', user.id);
// });

//get Users watchedMovies collection ref
// const colUsersWatchedMoviesRef = collection(db, 'Users', userId, 'watchedMovies');
// //get Users watchedMovies docs
// getDocs(colUsersWatchedMoviesRef)
//   .then(snapshot => {
//     let watchedMoviesArr = [];
//     snapshot.docs.forEach(doc => {
//       watchedMoviesArr.push({ ...doc.data() });
//       // console.log('watchedMovies data: ', doc.data());
//       // console.log('watchedMovies id: ', doc.id);
//     });
//     // console.log('watchedMoviesArr: ', watchedMoviesArr);
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

/************************************************ */
//add User to firestore
async function addUserToFirestore(user) {
  try {
    await setDoc(doc(db, 'Users', user.email), {
      userName: user.name,
      userEmail: user.email,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.log(error.message);
  }
}

//get Users movies
async function getMovies(collectionName) {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const moviesQuery = query(
    collection(db, 'Users', currentUser.email, collectionName),
    orderBy('timestamp', 'asc'),
  );
  let usersMoviesArr = [];
  try {
    const colSnapshot = await getDocs(moviesQuery);
    colSnapshot.docs.forEach(doc => {
      usersMoviesArr.push({ ...doc.data() });
    });
    return usersMoviesArr;
  } catch (error) {
    console.log(error.message);
  }
}

//add movie to collection
async function addMovie(movieObj, collectionName) {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  try {
    await setDoc(doc(db, 'Users', currentUser.email, collectionName, movieObj.title), {
      ...movieObj,
      timestamp: serverTimestamp(),
    });
    return 'ok';
  } catch (error) {
    console.log(error.message);
  }
}

//remove movie from collection
async function removeMovie(movieTitle, collectionName) {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  try {
    await deleteDoc(doc(db, 'Users', currentUser.email, collectionName, movieTitle));
    return 'ok';
  } catch (error) {
    console.log(error.message);
  }
}

//test!!!!!!!!!!!!!!!!!!
async function getMoviesByPage(collectionName, page) {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const colUsersWatchedMoviesRef = collection(db, 'Users', currentUser.email, collectionName);

  let watchedFirstArr = [];
  const first = query(
    collection(db, 'Users', currentUser.email, collectionName),
    orderBy('title', 'asc'),
    startAt(3),
    limit(20),
  );
  const documentSnapshots = await getDocs(first);
  documentSnapshots.docs.forEach(doc => {
    watchedFirstArr.push({ ...doc.data() });
  });
  console.log('watchedFirstArr: ', watchedFirstArr);

  let watchedMoviesArr = [];
  try {
    const colSnapshot = await getDocs(colUsersWatchedMoviesRef);
    colSnapshot.docs.forEach(doc => {
      watchedMoviesArr.push({ ...doc.data() });
    });
    console.log('watchedMoviesArr: ', watchedMoviesArr);
    return watchedMoviesArr;
  } catch (error) {
    console.log(error.message);
  }
}

export { addUserToFirestore, getMovies, addMovie, removeMovie };
