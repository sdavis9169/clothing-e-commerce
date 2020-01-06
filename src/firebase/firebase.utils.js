import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCRmqkuU_gNrhrDtEeeWkHH6asAsZBDvf4',
  authDomain: 'crown-db-50e01.firebaseapp.com',
  databaseURL: 'https://crown-db-50e01.firebaseio.com',
  projectId: 'crown-db-50e01',
  storageBucket: 'crown-db-50e01.appspot.com',
  messagingSenderId: '1014680731527',
  appId: '1:1014680731527:web:967c10cbeeb4d929941d22',
  measurementId: 'G-N5D7ED6Z4B'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
