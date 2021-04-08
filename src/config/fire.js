import firebase from "@firebase/app";
import "firebase/auth";
import app from "firebase/app";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCYew1g10ikUH717-l6ttXd59iwni3pNZQ",
    authDomain: "oddamwdobrerece-e3fe6.firebaseapp.com",
    projectId: "oddamwdobrerece-e3fe6",
    storageBucket: "oddamwdobrerece-e3fe6.appspot.com",
    messagingSenderId: "653469420289",
    appId: "1:653469420289:web:f78cded368937b029e2900",
    measurementId: "G-2WK99VP3SE"
  };
  
  class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.database();
    }


    getCurrentUser = () => this.auth.currentUser?.email

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

}

  const fire = firebase.initializeApp(firebaseConfig);



  export default fire;
