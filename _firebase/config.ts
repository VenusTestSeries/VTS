// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWpUjz_VS2lqqsKjj-4FGN-BTn5w9ZSV8",
    authDomain: "simpleneeeraj.firebaseapp.com",
    projectId: "simpleneeeraj",
    storageBucket: "simpleneeeraj.appspot.com",
    messagingSenderId: "1071521538763",
    appId: "1:1071521538763:web:1645e9c5d0d0b901a0714e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authentication = getAuth(app)
export default authentication





