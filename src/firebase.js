import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCBHK0s19JhMKu6TZVesR1Sonnds7xCnPM",
    authDomain: "q-2-goal.firebaseapp.com",
    projectId: "q-2-goal",
    storageBucket: "q-2-goal.appspot.com",
    messagingSenderId: "723697298166",
    appId: "1:723697298166:web:4e07a70332bb885ac51ad7"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth };
  export default db;

