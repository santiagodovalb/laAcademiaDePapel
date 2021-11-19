import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const {REACT_APP_API_KEY, REACT_APP_API_ID} = process.env
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: "la-academia-de-papel.firebaseapp.com",
    projectId: "la-academia-de-papel",
    storageBucket: "la-academia-de-papel.appspot.com",
    messagingSenderId: "784790586628",
    appId: REACT_APP_API_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db