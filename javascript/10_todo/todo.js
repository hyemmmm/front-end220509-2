let inputText = document.querySelector("#inputText");
let btnSubmit = document.querySelector(".btnSubmit");
let todoList = document.querySelector(".todoList");

// 버튼 클릭 감지!
let todoArr = JSON.parse(localStorage.getItem("todoArr"));

// let todoArr = [
//   {
//     id: 1,
//     text: "JS 공부하기",
//   },
//   {
//     id: 2,
//     text: "배열 만들기",
//   },
// ];

render();
// render2();
function submit() {
  //innerHTML 사용법
  //   todoList.innerHTML += "<li>" + inputText.value + "</li>";

  //node 만들어서 appendChild

  todoArr.push({
    id: todoArr[todoArr.length - 1].id + 1,
    text: inputText.value,
  });
  let todoArrJson = JSON.stringify(todoArr);
  localStorage.setItem("todoArr", todoArrJson);

  render();
  //   render2();
}

btnSubmit.addEventListener("click", () => {
  submit();
});

function render() {
  //1.
  todoList.innerHTML = "";
  //2. 노드리스트
  //   document.querySelectorAll(".todoList li").forEach((item) => {
  //     item.remove();
  //   });
  //3.
  //   while (todoList.firstChild) {
  //     todoList.removeChild(todoList.lastChild);
  //   }

  todoArr.forEach(function (item) {
    let liElem = document.createElement("li");
    let textNode = document.createTextNode(item.text);

    liElem.appendChild(textNode);
    todoList.appendChild(liElem);
    inputText.value = "";
    inputText.focus();
  });
}

// function render2() {
//   //innerHTML 사용해서 배열 출력하기 => 성능 안 좋음
//   todoList.innerHTML = "";
//   todoArr.forEach(function (todo) {
//     todoList.innerHTML += `<li>${todo.text}</li>`;
//   });
// }

inputText.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    submit();
  }
});

console.log(localStorage.getItem("isSaved"));
// localStorage => 저장공간. 사이트마다 개별적으로 저장한다. => 브라우저를 껐다 켜도 저장되어 있다.
// key : value 형태로 저장
// localStorage.setItem(키값, 저장하려는 데이터값);
// localStorage.getItem(키값) => 키값에 해당하는 데이터값 리턴

let todoArrJson = JSON.stringify(todoArr);
localStorage.setItem("todoArr", todoArrJson);
console.log(todoArrJson);

//버블링, 캡쳐링, 이벤트 위임 공부
console.log(btnSubmit.dataset.buttonId);
