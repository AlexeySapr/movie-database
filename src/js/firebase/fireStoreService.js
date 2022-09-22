import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  setDoc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';

import { db } from '../firebase/firebaseData';

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

export { addUserToFirestore, getMovies, addMovie, removeMovie };
