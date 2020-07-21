import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAfNomsrTCytaIIJkSDvqLoqXM3xqwwxp4',
  authDomain: 'udemy-react-b95fc.firebaseapp.com',
  databaseURL: 'https://udemy-react-b95fc.firebaseio.com',
  projectId: 'udemy-react-b95fc',
  storageBucket: 'udemy-react-b95fc.appspot.com',
  messagingSenderId: '48519677968',
  appId: '1:48519677968:web:2031a1cc9ef61011992295',
  measurementId: 'G-VKSRZJD9LM',
};

export const createUserProfileDocument = async (
  userAuth,
  additionalData,
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('ErrorCreatingUser: ', error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
