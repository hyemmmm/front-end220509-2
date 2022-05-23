let menuButton = document.querySelector(".menuDesign");
let menu = document.querySelector(".menu");
menuButton.onclick = function () {
  if (menuButton.classList.contains("event")) {
    menuButton.classList.remove("event");
  } else {
    menuButton.classList.add("event");
  }
};

let popButton = document.querySelector(".close");
let popup = document.querySelector(".background");
popButton.onclick = function () {
  popup.classList.add("none");
  document.body.style.overflow = "auto";
};

//.addEventListener('click', () => {})
