// Array => 배열 객체

let arr = [1, 2, 3]; // 배열을 만들어내는 순간에 인스턴스가 생성 된다.
let arr2 = new Array(10);
console.log(arr.length); // 배열.length : 배열의 크기. 대체로 가지고 있는 데이터 값의 수

// push, pop
// push => 배열의 마지막에 요소를 추가.
// pop => 배열의 마지막 요소를 꺼낸다. => pop() 실행 결과로 꺼내온 요소를 리턴.
let selectedArr = [];
arr.push(4);
selectedArr.push(arr.pop());
console.log(selectedArr);
console.log(arr);
console.log(`arr : ${arr}, selectedArr : ${selectedArr}`);

// shift, unshift
// shift => 배열의 처음 요소를 꺼낸다. => shift() 실행 결과로 꺼내온 요소를 return
// unshift => 배열의 처음에 요소를 추가한다.

//문제 arr의 3,4를 꺼내서 selectedArr에 앞에 추가
let arr3 = [3, 4, 5, 6];
let selectedArr2 = [];

selectedArr2.unshift(arr3.shift());
selectedArr2.push(arr3.shift()); // 3 다음으로 추가하기 위해 push 사용.
console.log(`arr3 : ${arr3} selectedArr2 : ${selectedArr2} `);

// splice, slice
// splice => 원하는 위치에서부터 원하는 개수를 "배열로" 꺼내온다(return). 데이터를 추가하는 것도 가능.
// slice => splice와 같이 꺼내오지만 기존 배열에서는 삭제하지 않는다. => 추가하는 기능은 X.

let arr4 = [10, 20, 30, 40];
// console.log(arr4.splice(1)); //splice()의 인자로 1개만 넣으면 넣은 index부터 마지막까지 꺼낸다.
// console.log(arr4.splice(1, 1)); splice의 두번째 인자는 삭제하고 싶은 갯수
console.log(arr4.splice(1, 1, "h"), arr4); // 세번째 인자는 추가하고 싶은 데이터.

let arr5 = ["apple", "banana", "orange"];
console.log(arr5.slice(0, 1), arr5);

// 배열 고차 함수
// 함수의 인자값으로 함수를 받거나 함수의 return 값으로 함수를 반환하는 함수.
// addEventListener("click", function(){})

// forEach
// 배열에 있는 모든 요소를 함수의 인자로 전달하여 실행
// 두번째 인자로 인덱스값을 전달해준다.

let arr6 = ["apple", "banana", "orange"];

for (let i = 0; i < arr6.length; i++) {
  console.log(arr6[i] + "은 맛있다.");
}

arr6.forEach(function (fruit, i) {
  console.log(`${i + 1}번째` + fruit);
});

// map
// 배열의 각 데이터를 가공해서 새로운 배열에 담아 return.
// map 함수의 인자로 들어온 함수의 return 값을 배열에 담는다.

let arr7 = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr7.length; i++) {
//   arr7[i] = arr7[i] * 2;
// }
let resultArr = arr7.map(function (num) {
  return num * 2;
});
console.log(resultArr);

//map 함수 직접 만들기
function customMap(arr, func) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(func(arr[i]));
  }
  return resultArr;
}
console.log(
  customMap(arr7, function (num) {
    return num * 2;
  })
);

let a = (x) => x + 1;
console.log(a(1));

//화살표 함수로 map
let A = arr7.map((num) => num * 2);
console.log(A);

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for문 안에서 배열의 각 요소를 도는데
// if 문을 통해서 짝수일 때만 배열에 push해서 그 배열을 return
// 담을 배열을 미리 선언.

let container = [];
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] % 2 === 0) {
    container.push(arr8[i]);
  }
}
console.log(container);

//filter
//인자로 전달된 함수의 return 값이 true인 요소들만 배열에 담아서 배열을 return
let evenArr = arr8.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenArr);
