// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ9yIwJmefnwxacSgS8-n4si7iVm1KVVI",
  authDomain: "appg-df9d4.firebaseapp.com",
  projectId: "appg-df9d4",
  storageBucket: "appg-df9d4.appspot.com",
  messagingSenderId: "979879700647",
  appId: "1:979879700647:web:86c13f4164b8290af91382",
  measurementId: "G-W8ESV2642K"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };