import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyCHLvF71hkpvPQdi37LbmTAtMFRbtG6OsY",
//   authDomain: "story-50463.firebaseapp.com",
//   databaseURL: "https://story-50463-default-rtdb.firebaseio.com",
//   projectId: "story-50463",
//   storageBucket: "story-50463.appspot.com",
//   messagingSenderId: "728258014314",
//   appId: "1:728258014314:web:3a5a9da20137814114ee13"
apiKey: process.env.REACT_APP_API_KEY,
authDomain: process.env.REACT_APP_AUTH_DOMAIN,
databaseURL: process.env.REACT_APP_DATABASE_URL,
projectId: process.env.REACT_APP_PROJECT_ID,
storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);