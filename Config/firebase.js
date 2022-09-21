 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 

const firebaseConfig = {
  apiKey: "AIzaSyCkoup5-wkUavrgMYc8TTvMLDG3NMgf0j0",
  authDomain: "myaudiorecorder-22200.firebaseapp.com",
  projectId: "myaudiorecorder-22200",
  storageBucket: "myaudiorecorder-22200.appspot.com",
  messagingSenderId: "1074544688453",
  appId: "1:1074544688453:web:f93c8b298a0edab279522c",
  measurementId: "G-P4PH3JB14H"
};
 
 
 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);