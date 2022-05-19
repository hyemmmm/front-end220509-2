let menuButton = document.querySelector(".menuDesign");
let menu = document.querySelector(".menu");
menuButton.onclick = function () {
  if (menuButton.classList.contains("event")) {
    menuButton.classList.remove("event");
  } else {
    menuButton.classList.add("event");
  }
};
