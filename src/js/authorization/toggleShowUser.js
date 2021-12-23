import { refs } from '../refs.js';

const currentUser = JSON.parse(localStorage.getItem('userName'));
refs.authUser.innerHTML = `You sign in as "${currentUser}"`;
