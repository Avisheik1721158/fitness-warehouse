// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzvLsT3uLZjR6w-cBY7BFcoVDNcVw13xQ",
    authDomain: "fir-warehouse-2a69c.firebaseapp.com",
    projectId: "fir-warehouse-2a69c",
    storageBucket: "fir-warehouse-2a69c.appspot.com",
    messagingSenderId: "611533702880",
    appId: "1:1:611533702880:web:412ddb22b2e130c9997285",
};
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
