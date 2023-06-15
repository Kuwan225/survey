// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAExA-Elsp0xPqRGbx7nPQSaC1DBxhAdlg",
  authDomain: "survey-v3.firebaseapp.com",
  projectId: "survey-v3",
  storageBucket: "survey-v3.appspot.com",
  messagingSenderId: "50299302552",
  appId: "1:50299302552:web:7f5b0ecdca1d393df696ed",
  measurementId: "G-9E4WPF1K63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics