import firebase from "firebase";



var firebaseConfig = {
    apiKey: "AIzaSyAtzqYG6PqQEQXVoMdY4H_4ZXWbzf0XgDA",
    authDomain: "login-465bb.firebaseapp.com",
    projectId: "login-465bb",
    storageBucket: "login-465bb.appspot.com",
    messagingSenderId: "709697985109",
    appId: "1:709697985109:web:4c7538bf0943a8a79cd2dc"
  };
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;