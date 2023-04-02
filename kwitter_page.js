 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDYkQyN4PXfUGCxefshnMOml9ht9Km4FJo",
  authDomain: "chit-5f7f1.firebaseapp.com",
  databaseURL: "https://chit-5f7f1-default-rtdb.firebaseio.com",
  projectId: "chit-5f7f1",
  storageBucket: "chit-5f7f1.appspot.com",
  messagingSenderId: "100453179217",
  appId: "1:100453179217:web:8e391597bef5a6a647bd70"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function send() {
    msg = document.getElementById('msg').value;

    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

document.getElementById("msg").value ="";
}




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();



function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
         window.location = "index.html";
}
