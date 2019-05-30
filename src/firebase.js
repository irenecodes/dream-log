import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmMYmm3roCZ6ftIbMbzjY_PgK3n4nmWyI",
    authDomain: "dream-log.firebaseapp.com",
    databaseURL: "https://dream-log.firebaseio.com",
    projectId: "dream-log",
    storageBucket: "",
    messagingSenderId: "1031898707398",
    appId: "1:1031898707398:web:1d499d0c997394a0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;