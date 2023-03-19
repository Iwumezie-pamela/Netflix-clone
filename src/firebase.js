// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDLk1Eo-QRLOXdkQO6wWVFKTQAvcHqn2Ds',
  authDomain: 'netflix-clone-a163a.firebaseapp.com',
  projectId: 'netflix-clone-a163a',
  storageBucket: 'netflix-clone-a163a.appspot.com',
  messagingSenderId: '353569753171',
  appId: '1:353569753171:web:5caee86eba511bb36f1ea6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
