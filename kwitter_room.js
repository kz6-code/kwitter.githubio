var firebaseConfig = {
  apiKey: "AIzaSyA-bhFMeXskP-7zYBnTnnlw1LUXMx9lpHs",
  authDomain: "kwitter-6ed9c.firebaseapp.com",
  databaseURL: "https://kwitter-6ed9c-default-rtdb.firebaseio.com",
  projectId: "kwitter-6ed9c",
  storageBucket: "kwitter-6ed9c.appspot.com",
  messagingSenderId: "763631444254",
  appId: "1:763631444254:web:a30f41609b16086702690f"
};
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}