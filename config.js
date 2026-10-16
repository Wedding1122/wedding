// Firebase connection for Mohamed & Basma wedding invitation
// Firebase web config is intended to be public. Protect your data with Firestore Rules.
const firebaseConfig = {
  apiKey: "AIzaSyB_XUe9IhnIdjunw_1XkB_IRcTkCWJO7r8",
  authDomain: "wedding-90a7b.firebaseapp.com",
  projectId: "wedding-90a7b",
  storageBucket: "wedding-90a7b.firebasestorage.app",
  messagingSenderId: "303291472169",
  appId: "1:303291472169:web:19bf1ba42fb8d68c753f38",
  measurementId: "G-WTBQHGWMQ9"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
window.WEDDING_DB = firebase.firestore();
