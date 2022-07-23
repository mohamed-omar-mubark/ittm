import firebase from 'firebase/app'

import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDN5QtAFD8ZJDJozm8GxckN_0vd9_AMWI",
  authDomain: "ittm-6f0ef.firebaseapp.com",
  databaseURL: "https://ittm-6f0ef-default-rtdb.firebaseio.com",
  projectId: "ittm-6f0ef",
  storageBucket: "ittm-6f0ef.appspot.com",
  messagingSenderId: "524293089905",
  appId: "1:524293089905:web:f0d8b7dd53bb0b65a009d0"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
let firebaseAuth = app.auth()

export { firebaseAuth }
