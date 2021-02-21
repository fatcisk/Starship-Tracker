function sendMessage() {
  let myName = document.getElementById("input2").value;
  let message = document.getElementById("message").value;

  firebase.database().ref("messages").push().set({
    sender: myName,
    message: message,
  });

  return false;
}

function closeTab() {
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
