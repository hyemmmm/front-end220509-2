let obj = {
  name: "hyemin Kim",
};
console.log(obj.name);

// 1. DOM 객체(Document Object Model)
// 웹 요소에 대한 속성, 값, 함수 등을 담고 있는 객체

// 2. 브라우저 관련 객체
// location, histroy, screen 등 브라우저에 관련된 속성, 값, 함수 등을 담고 있는 객체

// 3. JavaScript 내장 객체
// Math, Date, Array 등 JS가 내장하고 있는 객체

// new
// 생성자 함수 => 틀
// instance => 객체에 속성이나 함수 등을 미리 만들어 놓고 그 형태에 맞게 찍어내는 복제품
// new 객체이름()의 형태로 작성 => 객체의 틀에 맞게 인스턴스가 반환됨

let dateObj = new Date();
let dateObj02 = new Date();
console.log(dateObj);
console.log(dateObj02);
console.log(Math.floor(1.1));
