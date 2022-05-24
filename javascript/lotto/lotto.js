let selectedNum = [];
let lottoNumBox = document.querySelector(".lottoNumBox");

while (selectedNum.length < 6) {
  //Math.random() => 0~1 사이의 실수를 반환 => 44를 곱해서 0~44 범위. 1을 더해 1~45
  //Math.floor() => 내림
  let num = Math.floor(Math.random() * 44) + 1;
  if (selectedNum.indexOf(num) === -1) {
    selectedNum.push(num);
  }
}

selectedNum.sort(function (a, b) {
  return a - b;
  // return 값이 양수냐 음수냐에 따라 정렬
  // 내림차순 b-a
});

selectedNum.forEach(function (item) {
  lottoNumBox.innerHTML += `<div class='lottoNum' >${item}</div>`;
});

// 배열 관련 함수 => forEach, map, filter

//Array.prototype.reduce => 누산값, 현재값을 함수의 매개변수로 넣어준다. 두번째 인자는 초기값
let result = selectedNum.reduce((a, b) => {
  return a + b;
}, 0);
console.log(result);

//배열함수로 id:3인 아이템 빼고 남기기
let arr = [
  { id: 1, text: "html" },
  { id: 2, text: "css" },
  { id: 3, text: "javascript" },
  { id: 4, text: "react" },
];

let resultArr = arr.filter((item) => item.id !== 3);
console.log(resultArr);
// filter 함수는 return 값이 true인 값만 모아서 배열로 반환 => return boolean값이여야만 한다.
//화살표 함수는 {}(코드블록) 생략 시 바로 값을 return

//2번째 방법
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].id === 2) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

const sum = (a, b) => a + b;
console.log(sum(1, 2));

//원시값 => 숫자, 문자, 불리언 등 변하지 않는 값
//참조값 => 값을 참조하는 주소가 변경
let obj = { name: "hyemin" };
let copyObj = obj;
copyObj.name = "hyemin kim";
console.log(obj, copyObj);
