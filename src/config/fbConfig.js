
import firebase from 'firebase/app'
import firebase from 'firebase/firestore'
import firebase from 'firebase/auth'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDmxiI9J1WLaschWHCfFnaB6icbfSyhsaw",
    authDomain: "project-plan-2347a.firebaseapp.com",
    projectId: "project-plan-2347a",
    storageBucket: "project-plan-2347a.appspot.com",
    messagingSenderId: "1058246416536",
    appId: "1:1058246416536:web:a516ded75731514b6758ed",
    measurementId: "G-F07SMMZ9KB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;