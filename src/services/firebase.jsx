import { initializeApp } from 'firebase/app';
import toast from 'react-hot-toast';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB22nNUXefLeNXcMfTUSm4Ung_rrfzyxqc',
  authDomain: 'povidom-app.firebaseapp.com',
  projectId: 'povidom-app',
  storageBucket: 'povidom-app.appspot.com',
  messagingSenderId: '556534287263',
  appId: '1:556534287263:web:eea7d9eeafd6ebeee10baa',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    toast.success(`You are wellcome ${user.displayName}!`);
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success(`You are wellcome ${email}!`);
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    toast.success(`You are wellcome ${email}!`);
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
};

export const sendPasswordReset = async email => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast('Password reset link sent!', {
      icon: '👉📧',
    });
    toast('Password reset link sent!');
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
};

export const logout = () => {
  signOut(auth);
};
