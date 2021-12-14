// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNZoLd9CUWh__lI-6LlFeWn2K6WO7Diso",
  authDomain: "addlist-aa422.firebaseapp.com",
  projectId: "addlist-aa422",
  storageBucket: "addlist-aa422.appspot.com",
  messagingSenderId: "732579227434",
  appId: "1:732579227434:web:5f5359f0453ad45ce52053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {getDatabase,ref,set,child,update,remove}
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const db = getDatabase();
//reference

var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var text3 = document.getElementById("text3");
var text4 = document.getElementById("text4");
var text5 = document.getElementById("text5");

var Instbtn = document.getElementById('Instbtn');

 function InsertData(){
  set(ref(db, "addlist/" + text1.value),{
    Titre: text1.value,
    Description: text2.value,
    Deadline: text3.value,
    Etat: text4.value,
    Priorite:text5.value
})
.then(()=>{
   alert("base de donnee inserer");
})
.catch((error)=>{
    alert("base non inserer"+error);
});
}
Instbtn.addEventListener('click', InsertData);