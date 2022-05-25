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

// 배열

let arr = [1, 2, 3, 4, 5];

//for문과 배열.length를 통해서 배열을 순회하는 방법 => 배열 고차함수보다 고성능
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 1. Array.forEach() => 배열을 순회하며 함수를 실행. return 값 X
// 인자로 들어온 함수의 매개변수로 각 아이템을 넣어준다.
// 함수(첫번째 아이템) 실행 => 함수 (두번째 아이템) 실행.....=> 함수(마지막 아이템) 실행
// 두번째 인자로 각 아이템의 인덱스를 넣어준다.(두번째 인자 없어도 됨) => map, filter도 마찬가지

arr.forEach(function (item, idx) {
  console.log(idx + 1 + "번째 아이템");
  console.log(item * 2);
});

//2. Array.filter() => 배열을 순회하며 함수를 실행하며 필터링
// => 필터 안의 함수의 return 값이 true냐 false냐에 따라 필터링
// => 필터 안의 함수의 return 값이 true인 차례에만 해당 아이템을 새로운 배열에 넣어서
// => filter 함수가 완전히 끝나면 이 배열을 return

let A = arr.filter(function (item) {
  return item >= 3;
});
console.log(A);

//3. Array.map() => 배열을 순회하며 함수를 실행하며 값을 반환
// => 배열의 각 아이템을 map 안의 함수의 return 값으로 바꾼다.
// 이 바뀐 값들을 모아서 새로운 배열로 반환

let mapArr = arr.map((item) => item + "번째");
console.log(mapArr);

// 함수

// 함수선언식 => 호이스팅 O
// 나머지는 호이스팅 X (함수표현식, 화살표함수)

function getFullName(firstName, LastName) {
  return LastName + firstName;
}

console.log(getFullName("Hyemin", "Kim"));

// 함수 안에서 자기자신(함수)를 호출할 수 있다.
function 재귀함수(num) {
  if (num <= 1) {
    return 1;
  }
  return num + 재귀함수(num - 1);
}
console.log(재귀함수(100));
console.log(재귀함수(2));
console.log(재귀함수(1));

//부록 => 스택, 큐, 이벤트 루프

// NodeList
// [node, node, node];
// document.querySelectorAll(".container li");
// node[0].style.display = "none";
// node[1].style.display = "none";

// 노드리스트.forEach((node) => (node.style.display = "none"));

//클로저
//하위 스코프에서 상위 스코프의 값을 참고하고 있으면 상위스코프의 생명주기가 끝나도 계속 참조

function 클로저() {
  let num = 0;
  return function (type) {
    if (type === "increase") {
      num++;
    } else if (type === "decrease") {
      num--;
    }
  };
}

let B = 클로저();
