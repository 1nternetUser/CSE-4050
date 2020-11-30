var app_fireBase = {};
(function(){ 

  var firebaseConfig = {
    apiKey: "AIzaSyA6mtwtdRHqjFU5lYB7FUmF_Rwb8Qfc5Qs",
    authDomain: "fir-loginassignment-264cd.firebaseapp.com",
    databaseURL: "https://fir-loginassignment-264cd.firebaseio.com",
    projectId: "fir-loginassignment-264cd",
    storageBucket: "fir-loginassignment-264cd.appspot.com",
    messagingSenderId: "732082428794",
    appId: "1:732082428794:web:6ac34be458a77e9d8294c3",
    measurementId: "G-MP1H5FZBHF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  app_fireBase = firebase;
  })()