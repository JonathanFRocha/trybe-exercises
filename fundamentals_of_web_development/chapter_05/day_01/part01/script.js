document.getElementById("header-container").style.backgroundColor = "rgb(0,255,0)";
document.getElementById("footer-container").style.backgroundColor = "#013220";

const emergencyTask = document.getElementsByClassName("emergency-tasks")[0];
const emergencyTaskTitleAll = document.querySelectorAll(".emergency-tasks h3");

emergencyTask.style.backgroundColor = "rgb(255,160,122)";
for (let h3 of emergencyTaskTitleAll) {
  h3.style.backgroundColor = "darkviolet";
}

const noEmergencyTask = document.getElementsByClassName("no-emergency-tasks")[0];
const noEmergencyTaskTitleAll = document.querySelectorAll(".no-emergency-tasks h3");

noEmergencyTask.style.backgroundColor = "yellow";
for (let h3 of noEmergencyTaskTitleAll) {
  h3.style.backgroundColor = "rgb(0,0,0)";
}
