import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCGvrCtJqKFtRcQDpsJSA97ulwpQQhJ0i8",
    authDomain: "bartersystem-ffc69.firebaseapp.com",
    projectId: "bartersystem-ffc69",
    storageBucket: "bartersystem-ffc69.appspot.com",
    messagingSenderId: "566979421673",
    appId: "1:566979421673:web:952c1a1ea8338a52be1778"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();