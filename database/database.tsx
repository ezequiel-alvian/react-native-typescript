// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs7nqYjKS0gQ-qx8Vr79m-1BGO3bvSNMg",
  authDomain: "react-native-win-verde.firebaseapp.com",
  projectId: "react-native-win-verde",
  storageBucket: "react-native-win-verde.appspot.com",
  messagingSenderId: "622390726272",
  appId: "1:622390726272:web:ecf270934c3690de8ea065",
  measurementId: "G-1R2BEE2VTH"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db

