function sendMessage() {
  let myName = document.getElementById("input2").value;
  let message = document.getElementById("message").value;

  firebase.database().ref("messages").push().set({
    sender: myName,
    message: message,
  });

  return false;
}

firebase
  .database()
  .ref("messages")
  .on("child_added", function (snapshot) {
    var html = "";
    html += "<li>";
    html +=
      "<span class='username'>" +
      snapshot.val().sender +
      "</span>" +
      " : " +
      snapshot.val().message;
    html += "</li>";

    document.getElementById("messages").innerHTML += html;
  });
