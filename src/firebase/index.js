import firebase from 'firebase';


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDPWyEi1czp8D7Xx-UgwENDd2heCKe9jeY",
    authDomain: "barrier-free-maps.firebaseapp.com",
    databaseURL: "https://barrier-free-maps.firebaseio.com",
    projectId: "barrier-free-maps",
    storageBucket: "barrier-free-maps.appspot.com",
    messagingSenderId: "248483175906",
    appId: "1:248483175906:web:b57a354004eb45dbe3adbb",
    measurementId: "G-Q3T1R1HRQR"
  };

  
firebase.initializeApp(firebaseConfig);