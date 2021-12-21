const firebaseConfig = {
  apiKey: "AIzaSyCF1V3z-MU8fBicN9eSzMPoBm_HnXJb-mc",
  authDomain: "teamsucces-87abf.firebaseapp.com",
  databaseURL: "https://teamsucces-87abf-default-rtdb.firebaseio.com",
  projectId: "teamsucces-87abf",
  storageBucket: "teamsucces-87abf.appspot.com",
  messagingSenderId: "291303589935",
  appId: "1:291303589935:web:59b377fbd84aa12622deda",
  measurementId: "${config.measurementId}"
}; 
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db=firebase.firestore();