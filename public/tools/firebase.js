// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkwm9jCHuEG_7W05IyB-5ydudfuBI5uNo",
  authDomain: "rocketcontroller-5e344.firebaseapp.com",
  projectId: "rocketcontroller-5e344",
  storageBucket: "rocketcontroller-5e344.appspot.com",
  messagingSenderId: "886170931726",
  appId: "1:886170931726:web:7a4efcdac5080f9518225f",
  measurementId: "G-W5C3EDT0QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);