import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAZQUYWp6_5yjsU89dACkRkXRsqzbSkUhQ",
  authDomain: "my-project-1519132076951.firebaseapp.com",
  databaseURL: "https://my-project-1519132076951.firebaseio.com",
  projectId: "my-project-1519132076951",
  storageBucket: "my-project-1519132076951.appspot.com",
  messagingSenderId: "660656212842",
  appId: "1:660656212842:web:549b5f7283137336"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
