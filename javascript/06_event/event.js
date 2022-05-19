//이벤트
//사용자가 브라우저 하는 모든 행동 => ex) 마우스 클릭, 스크롤, 키보드 입력 등

let box = document.querySelector(".box");
let boxList = document.querySelectorAll(".box");
let btns = document.querySelectorAll("button");
console.log(btns);
btns[0].onclick = function () {
  box.style.backgroundColor = "black";
};
btns[1].onclick = function () {
  box.style.backgroundColor = "red";
};
btns[2].onclick = function () {
  box.style.backgroundColor = "blue";
};
btns[3].onclick = function () {
  if (box.classList.contains("box")) {
    box.classList.remove("box");
  } else {
    box.classList.add("box");
  }
};
