import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHSu35d-msxpXI_7D61yWWRgmYgqo8tfs",
  authDomain: "simple-firebase-449d0.firebaseapp.com",
  projectId: "simple-firebase-449d0",
  storageBucket: "simple-firebase-449d0.appspot.com",
  messagingSenderId: "505937434869",
  appId: "1:505937434869:web:3d8707bcc3a209fe6f4dbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;