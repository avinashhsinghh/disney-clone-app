// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAmgPA01jbgkru5A30lfKjHb99PPxIfR0k',
  authDomain: 'disney-clone-app-da106.firebaseapp.com',
  projectId: 'disney-clone-app-da106',
  storageBucket: 'disney-clone-app-da106.appspot.com',
  messagingSenderId: '518986076677',
  appId: '1:518986076677:web:906aac94a1d5359e2b826c',
  measurementId: 'G-2MGE0VZVQ7',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export { app, db, storage };
