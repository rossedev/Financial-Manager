// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDSPzialDs0ENOKKluzeC2UYV0e8cT1IBU',
  authDomain: 'track-finance-ec9ab.firebaseapp.com',
  projectId: 'track-finance-ec9ab',
  storageBucket: 'track-finance-ec9ab.appspot.com',
  messagingSenderId: '198065686560',
  appId: '1:198065686560:web:83e610537e0b91bb949445',
  measurementId: 'G-GBVLERJ0N8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
