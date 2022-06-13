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

//slider
let btnList = document.querySelectorAll(".slider .btns .btn");
let sliderUl = document.querySelector(".slider .slideContainer ul");
// btnList.addEventListener("click", function (e) {
//   sliderUl.style.transform = "translate(0px)";
// });

btnList.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    sliderUl.style.transform = `translate(${idx * -400}px)`;
  });
});
