const modelContainer = document.querySelector(".sketchfab-embed-wrapper");
const backBtn = document.querySelector(".model-backbtn-container");
const replayBtn = document.querySelector(".replaybtn");

function mobile3dview() {
  modelContainer.style.display = "flex";
  modelContainer.style.position = "fixed";
  modelContainer.style.top = "0";
  modelContainer.style.left = "0";
  document.body.style.overflow = "hidden";
  backBtn.style.display = "block";
}
function mobile3dviewBack() {
  backBtn.style.display = "none";
  modelContainer.style.display = "none";
  document.body.style.overflow = "visible";
  backBtn.style.position = "fixed";
  backBtn.style.top = "10";
  backBtn.style.left = "0";
}

function sendMessage() {
  let myName = localStorage.getItem("username");
  let message = document.getElementById("message").value;

  if (message !== "") {
    firebase.database().ref("messages").push().set({
      sender: myName,
      message: message,
    });
    return false;
  } else {
    document.location = "#last";
  }
}

function sended() {
  setTimeout(function () {
    let message = (document.getElementById("message").value = "");
  }, 30);
  document.location = "#last";
}

const messageInput = document.getElementById("message");
const usernameInput = document.querySelector(".set-input");
const sendButton = document.getElementById("sendBtn");
const saveBtn = document.querySelector(".set-button");

function saveUsername() {
  if (usernameInput.value === "") {
    alert("Please set your username");
  }

  if (usernameInput.value != "fatihcan") {
    messageInput.style.display = "block";
    sendButton.style.display = "block";
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("inputVisible", "true");
    usernameInput.style.display = "none";
    saveBtn.style.display = "none";
  } else {
    alert("you can not take admins username");
  }
}

function check() {
  function inputClick() {
    document.location = "#last";
  }

  function lmbtn() {}

  if (localStorage.getItem("inputVisible") == "true") {
    messageInput.style.display = "block";
    sendButton.style.display = "block";
    usernameInput.style.display = "none";
    saveBtn.style.display = "none";
  } else {
    messageInput.style.display = "none";
    sendButton.style.display = "none";
  }
}

firebase
  .database()
  .ref("votes")
  .on("child_added", function (snapshot) {
    document.querySelector(".up-count").innerHTML = snapshot.val().upvotes;
  });

function upClick() {
  var a = document.querySelector(".up-count").innerHTML;
  var b = parseInt(a);
  firebase
    .database()
    .ref("votes")
    .push()
    .update({
      upvotes: b + 1,
    });
}

function closeTab() {
  document.querySelector(".iframee").src =
    "https://sketchfab.com/models/5a708af84ef440c6a91f96c2b8284cc4/embed?autospin=0&autostart=0&preload=1&ui_theme=1";
  document.querySelector(".last-flight2").style.display = "none";
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

function myFunc() {}

function sn9Flight() {
  if (
    document.querySelector(".iframee").src !=
    "https://sketchfab.com/models/5a708af84ef440c6a91f96c2b8284cc4/embed?autospin=1&autostart=1&preload=1&ui_theme=1"
  ) {
    document.querySelector(".iframee").src =
      "https://sketchfab.com/models/5a708af84ef440c6a91f96c2b8284cc4/embed?autospin=1&autostart=1&preload=1&ui_theme=1";
  }

  replayBtn.href = "https://www.youtube.com/watch?v=_zZ7fIkpBgs&t=342s";
  window.location.href = "#";
  document.querySelector(".last-flight2").style.display = "flex";
  document.querySelector(".last-flight-name2").innerHTML =
    "Starship <span class='serial-number'>SN9</span>";
  document.querySelector(".last-flight-description2").innerHTML =
    "high-altitude flight test";
  document.querySelector(".last-flight-status2").style.backgroundColor =
    "#c20000";
  document.querySelector(".curret-status").innerHTML = "DESTROYED ON LANDING";
  document.querySelector(".last-flight-paragraph2").innerHTML =
    "Three Raptor engines, including SN45 and SN49. Test flight on 2 February 2021, during landing, one of the engines failed to ignite, resulting in a hard landing that destroyed SN9.";
  document.querySelector(".date2").innerHTML = "2 February 2021 20:25";
  document.querySelector(".launch-site2").innerHTML = "Boca Chica, Texas";
  document.querySelector(".apogee2").innerHTML = "10 km (6.2 mi)";
  document.querySelector(".duration2").innerHTML = "6 minutes, 26 seconds";
}

function sn8Flight() {
  if (
    document.querySelector(".iframee").src !=
    "https://sketchfab.com/models/5a708af84ef440c6a91f96c2b8284cc4/embed?autospin=1&autostart=1&preload=1&ui_theme=1"
  ) {
    document.querySelector(".iframee").src =
      "https://sketchfab.com/models/5a708af84ef440c6a91f96c2b8284cc4/embed?autospin=1&autostart=1&preload=1&ui_theme=1";
  }

  replayBtn.href = "https://www.youtube.com/watch?v=ap-BkkrRg-o";
  window.location.href = "#";
  document.querySelector(".last-flight2").style.display = "flex";

  document.querySelector(".last-flight-name2").innerHTML =
    "Starship <span class='serial-number'>SN8</span>";

  document.querySelector(".last-flight-description2").innerHTML =
    "high-altitude flight test";

  document.querySelector(".last-flight-status2").style.backgroundColor =
    "#c20000";
  document.querySelector(".curret-status").innerHTML = "DESTROYED ON LANDING";

  document.querySelector(".last-flight-paragraph2").innerHTML =
    "Three Raptor engines, SN30, SN36, and SN42. The vehicle successfully launched, ascended, performed the skydive descent maneuver, relit the engines fueled by the header tanks, and steered to the landing pad. Low pressure in the fuel header tank caused engine issues, resulting in a hard landing and destruction of SN8. However, Elon Musk stated that all the vital telemetry data was acquired from the flight and he seemed pleased with the outcome";

  document.querySelector(".date2").innerHTML = "9 December 2020 22:45";
  document.querySelector(".launch-site2").innerHTML = "Boca Chica, Texas";
  document.querySelector(".apogee2").innerHTML = "12.5 km (7.8 mi)";
  document.querySelector(".duration2").innerHTML = "6 minutes, 42 seconds";
}

function sn6Flight() {
  if (
    document.querySelector(".iframee").src !=
    "https://sketchfab.com/models/5a708af84ef440c6a91f96c2b8284cc4/embed?autospin=1&autostart=1&preload=1&ui_theme=1"
  ) {
    document.querySelector(".iframee").src =
      "https://sketchfab.com/models/5a708af84ef440c6a91f96c2b8284cc4/embed?autospin=1&autostart=1&preload=1&ui_theme=1";
  }
  replayBtn.href = "https://www.youtube.com/watch?v=MdAKrzOLQTg";
  window.location.href = "#";
  document.querySelector(".last-flight2").style.display = "flex";

  document.querySelector(".last-flight-name2").innerHTML =
    "Starship <span class='serial-number'>SN6</span>";

  document.querySelector(".last-flight-description2").innerHTML =
    "150m Flight Test";

  document.querySelector(".last-flight-status2").style.backgroundColor =
    "#03ad00";
  document.querySelector(".curret-status").innerHTML = "SUCCESS";

  document.querySelector(".last-flight-paragraph2").innerHTML =
    "Single Raptor engine, SN29. A successful test hop took place on 3 September 2020";

  document.querySelector(".date2").innerHTML = "3 September 2020 17:47";
  document.querySelector(".launch-site2").innerHTML = "Boca Chica, Texas";
  document.querySelector(".apogee2").innerHTML = "150 m (490 ft)";
  document.querySelector(".duration2").innerHTML = "~45 seconds";
}

function sn5Flight() {
  if (
    document.querySelector(".iframee").src !=
    "https://sketchfab.com/models/5a708af84ef440c6a91f96c2b8284cc4/embed?autospin=1&autostart=1&preload=1&ui_theme=1"
  ) {
    document.querySelector(".iframee").src =
      "https://sketchfab.com/models/5a708af84ef440c6a91f96c2b8284cc4/embed?autospin=1&autostart=1&preload=1&ui_theme=1";
  }
  replayBtn.href = "https://www.youtube.com/watch?v=s1HA9LlFNM0";
  window.location.href = "#";
  document.querySelector(".last-flight2").style.display = "flex";

  document.querySelector(".last-flight-name2").innerHTML =
    "Starship <span class='serial-number'>SN5</span>";

  document.querySelector(".last-flight-description2").innerHTML =
    "150m Flight Test";

  document.querySelector(".last-flight-status2").style.backgroundColor =
    "#03ad00";
  document.querySelector(".curret-status").innerHTML = "SUCCESS";

  document.querySelector(".last-flight-paragraph2").innerHTML =
    "Single Raptor engine, SN27. A successful 150-meter flight was completed on 4 August 2020.";

  document.querySelector(".date2").innerHTML = "4 August 2020 23:57";
  document.querySelector(".launch-site2").innerHTML = "Boca Chica, Texas";
  document.querySelector(".apogee2").innerHTML = "150 m (490 ft)";
  document.querySelector(".duration2").innerHTML = "~45 seconds";
}

function sh3Flight() {
  if (
    document.querySelector(".iframee").src !=
    "https://sketchfab.com/models/3a14e78b7edb4e3baaa40069cdd60a7f/embed?autospin=1&autostart=1&preload=1&ui_theme=1"
  ) {
    document.querySelector(".iframee").src =
      "https://sketchfab.com/models/3a14e78b7edb4e3baaa40069cdd60a7f/embed?autospin=1&autostart=1&preload=1&ui_theme=1";
  }
  replayBtn.href = "https://www.youtube.com/watch?v=bYb3bfA6_sQ";
  window.location.href = "#";
  document.querySelector(".last-flight2").style.display = "flex";

  document.querySelector(".last-flight-name2").innerHTML = "Starhopper";

  document.querySelector(".last-flight-description2").innerHTML =
    "150 Meter Starhopper Test";

  document.querySelector(".last-flight-status2").style.backgroundColor =
    "#03ad00";
  document.querySelector(".curret-status").innerHTML = "SUCCESS";

  document.querySelector(".last-flight-paragraph2").innerHTML =
    "Single Raptor engine, SN6. Starhopper was retired after this launch, with some parts being reused for other tests.";

  document.querySelector(".date2").innerHTML = "27 August 2019 22:00";
  document.querySelector(".launch-site2").innerHTML = "Boca Chica, Texas";
  document.querySelector(".apogee2").innerHTML = "150 m (490 ft)";
  document.querySelector(".duration2").innerHTML = "~58 seconds";
}

function sh2Flight() {
  if (
    document.querySelector(".iframee").src !=
    "https://sketchfab.com/models/3a14e78b7edb4e3baaa40069cdd60a7f/embed?autospin=1&autostart=1&preload=1&ui_theme=1"
  ) {
    document.querySelector(".iframee").src =
      "https://sketchfab.com/models/3a14e78b7edb4e3baaa40069cdd60a7f/embed?autospin=1&autostart=1&preload=1&ui_theme=1";
  }
  replayBtn.href = "https://www.youtube.com/watch?v=bYb3bfA6_sQ";
  window.location.href = "#";
  document.querySelector(".last-flight2").style.display = "flex";

  document.querySelector(".last-flight-name2").innerHTML = "Starhopper";

  document.querySelector(".last-flight-description2").innerHTML =
    "20 Meter Starhopper Test";

  document.querySelector(".last-flight-status2").style.backgroundColor =
    "#03ad00";
  document.querySelector(".curret-status").innerHTML = "SUCCESS";

  document.querySelector(".last-flight-paragraph2").innerHTML =
    "First untethered flight test. Single Raptor engine, SN6.";

  document.querySelector(".date2").innerHTML = "25 July 2019";
  document.querySelector(".launch-site2").innerHTML = "Boca Chica, Texas";
  document.querySelector(".apogee2").innerHTML = "20 m (66 ft)";
  document.querySelector(".duration2").innerHTML = "~22 seconds";
}

function sh1Flight() {
  if (
    document.querySelector(".iframee").src !=
    "https://sketchfab.com/models/3a14e78b7edb4e3baaa40069cdd60a7f/embed?autospin=1&autostart=1&preload=1&ui_theme=1"
  ) {
    document.querySelector(".iframee").src =
      "https://sketchfab.com/models/3a14e78b7edb4e3baaa40069cdd60a7f/embed?autospin=1&autostart=1&preload=1&ui_theme=1";
  }

  replayBtn.href = "https://www.youtube.com/watch?v=bYb3bfA6_sQ";
  window.location.href = "#";

  document.querySelector(".last-flight2").style.display = "flex";

  document.querySelector(".last-flight-name2").innerHTML = "Starhopper";

  document.querySelector(".last-flight-description2").innerHTML =
    "Starhopper Test";

  document.querySelector(".last-flight-status2").style.backgroundColor =
    "#03ad00";
  document.querySelector(".curret-status").innerHTML = "SUCCESS";

  document.querySelector(".last-flight-paragraph2").innerHTML =
    "Tethered hop which hit tethered limits. With a single Raptor SN2 engine.";

  document.querySelector(".date2").innerHTML = "5 April 2019";
  document.querySelector(".launch-site2").innerHTML = "Boca Chica, Texas";
  document.querySelector(".apogee2").innerHTML = "~1 m (3 ft 3 in)";
  document.querySelector(".duration2").innerHTML = "~3 seconds";
}
