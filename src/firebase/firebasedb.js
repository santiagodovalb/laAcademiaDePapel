import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrVniKxaskBE4AwBcoqscMGtDIf3LpyQQ",
    authDomain: "la-academia-de-papel.firebaseapp.com",
    projectId: "la-academia-de-papel",
    storageBucket: "la-academia-de-papel.appspot.com",
    messagingSenderId: "784790586628",
    appId: "1:784790586628:web:c62a5cde30923460c77c51"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db