import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBOGYeeRxmXzzWubXf5hrzaH0nO7MtIlw0',
  authDomain: 'pagesecurisee.firebaseapp.com',
  projectId: 'pagesecurisee',
  storageBucket: 'pagesecurisee.appspot.com',
  messagingSenderId: '939912110408',
  appId: '1:939912110408:web:205f2ab07d3aef992a537d',
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
