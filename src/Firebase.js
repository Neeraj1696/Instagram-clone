

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDeT2dotq_e87yYg3alGfXD25O-O1oKmRE",
  authDomain: "instagram-clone-fe154.firebaseapp.com",
  projectId: "instagram-clone-fe154",
  storageBucket: "instagram-clone-fe154.appspot.com",
  messagingSenderId: "193897302000",
  appId: "1:193897302000:web:37ce095959b99b3febbf35",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default firebaseConfig db;
