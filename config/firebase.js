const firebase = require('firebase');

firebase.initializeApp({
  apiKey: "AIzaSyDGLmTYv-0JPhI1dK5WZHob62aIY1vO8cA",
  authDomain: "f4-dev-circle.firebaseapp.com",
  databaseURL: "https://f4-dev-circle.firebaseio.com",
  projectId: "f4-dev-circle",
  storageBucket: "f4-dev-circle.appspot.com",
  messagingSenderId: "529098313057",
  appId: "1:529098313057:web:6db3b0afd2eb14a1958920",
  measurementId: "G-06KG270JRQ"
});

const clientAuth = firebase.auth();

export default firebase;