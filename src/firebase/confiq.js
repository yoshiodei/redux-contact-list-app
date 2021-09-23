import firebase from "firebase/app";
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxUbJl2-PfROZR8o3-1zr7s_gR4JqTDGk",
  authDomain: "fir-project2-5544c.firebaseapp.com",
  projectId: "fir-project2-5544c",
  storageBucket: "fir-project2-5544c.appspot.com",
  messagingSenderId: "530631859137",
  appId: "1:530631859137:web:1ddd2480c928268defad40"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;