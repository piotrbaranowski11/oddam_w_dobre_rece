import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYew1g10ikUH717-l6ttXd59iwni3pNZQ",
    authDomain: "oddamwdobrerece-e3fe6.firebaseapp.com",
    projectId: "oddamwdobrerece-e3fe6",
    storageBucket: "oddamwdobrerece-e3fe6.appspot.com",
    messagingSenderId: "653469420289",
    appId: "1:653469420289:web:f78cded368937b029e2900",
    measurementId: "G-2WK99VP3SE"
  };



  const fire = firebase.initializeApp(firebaseConfig);



  export default fire;
