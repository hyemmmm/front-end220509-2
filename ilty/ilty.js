// let depthList = document.querySelector(".depth");
// document
//   .querySelector(".mainUl > li")
//   .addEventListener("mouseout", function (e) {
//     setTimeout(function () {
//       depthList.style.display = "none";
//     }, 1000);
//   });

$(".mainUl > li").mouseleave(function () {
  $(this).children("ul").fadeOut();
});
$(".mainUl > li").mouseover(function () {
  $(this).children("ul").fadeIn();
});
