
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyARZvNwpklwrv1S4dMbx8fItcUZqQ1I_-k",
      authDomain: "kwitterclass-93.firebaseapp.com",
      databaseURL: "https://kwitterclass-93-default-rtdb.firebaseio.com",
      projectId: "kwitterclass-93",
      storageBucket: "kwitterclass-93.appspot.com",
      messagingSenderId: "269102753406",
      appId: "1:269102753406:web:b8afbcb2f0f6867c6d9a2f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
