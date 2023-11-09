// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAJbnJmbWlyhACFD9L7lo--54Qa-7GJ1s",
  authDomain: "hotel-booking-23f55.firebaseapp.com",
  projectId: "hotel-booking-23f55",
  storageBucket: "hotel-booking-23f55.appspot.com",
  messagingSenderId: "183435488103",
  appId: "1:183435488103:web:09355a3cf008fb379bddc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app