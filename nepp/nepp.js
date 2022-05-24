let userID = "test";
let userPassword = "test123";

//submit했을 때 새로고침 되지 않게
document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();
  // e.preventDefault() => 요소가 가지고 있는 기본 기능을 실행하지 않는다.
});

let id = document.querySelector(".id");
let password = document.querySelector(".password");
let login = document.querySelector(".submit");
let form = document.querySelector(".form");
// let searchID = document.querySelector(".form div");
// let successText = document.querySelector(".successText");

login.addEventListener("click", function (e) {
  if (id.value === userID && password.value === userPassword) {
    form.innerHTML = `<div>로그인 성공</div>`;

    // form.style.display = "none";
    // searchID.style.display = "none";
    // successText.style.display = "block";
  } else {
    alert("로그인 실패");
  }
});

//form 태그 안에 있는 input 태그에 엔터를 누르면 submit 버튼 클릭과 같은 효과
