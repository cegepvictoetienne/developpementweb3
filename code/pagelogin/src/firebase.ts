import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBFBTnP1GW3nRe0BTYl9eksALrHMqb48dY',
  authDomain: 'page-securisee.firebaseapp.com',
  projectId: 'page-securisee',
  storageBucket: 'page-securisee.appspot.com',
  messagingSenderId: '891134233416',
  appId: '1:891134233416:web:b12a35bc7be8a46416417d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  console.log(email, password);
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  signOut(auth);
};

export const getToken = async () => {
  if (!auth.currentUser) return '';

  return await auth.currentUser
    .getIdToken(false)
    .then(function (idToken) {
      return idToken;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
};
