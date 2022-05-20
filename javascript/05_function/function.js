// 함수 : 여러 명령들을 한번에 실행할 수 있는 코드 블록.
// 원하는 시점에 실행 가능 => 재사용성이 높아진다.

// 1. 함수 선언식(기명함수) => 함수 호이스팅 발생.
// 작성 방법 : function 함수이름(){코드 작성}
func();
function func() {
  console.log("함수 선언식");
}
func();

//2. 함수 표현식(익명함수) => 함수(코드블록) 호이스팅 발생X => 변수만 호이스팅 된다.
//작성 방법 :

// func2();
var func2 = function () {
  console.log("함수 표현식");
};
func2();

//3. 화살표 함수
// 함수 호이스팅 발생 X
// this 바인딩 X

var func3 = () => {
  console.log("화살표 함수");
};
func3();

//매개변수(parameter)
//함수 안에서 사용할 수 있는 값 => 함수를 실행할 때 ()안에 입력
//실제로 매개변수에 입력되는 값 => 인자(argument)
//매개 변수는 원하는 만큼 선언.
//매개 변수와 인자의 개수가 달라도 오류는 발생하지 않음
// (a=3) => 매개변수 a에 입력하지 않았을 때 기본값 3으로 사용
function sum(a, b, c = 3) {
  console.log(a + b + c);
}
sum(1, 3, 5, 7);
sum(3, 4);

// return
//함수 실행 결과를 반환.
//return 이후의 코드는 실행되지 않는다.

// function sub(a, b) {
//   return a - b;
// }
// let result = sub(3, 2);

// console.log(result);

//함수 문제
// 점수 3개 입력시 평균 점수를 구해주는 함수

function sum(korean, math, english) {
  return korean + math + english;
}

function division(value) {
  return value / 3;
}

let average = division(sum(100, 90, 80));

console.log(average);

//스코프
//지역 변수와 전역 변수
//지역 변수 : 유효 범위(코드블록) 내에서만 사용 가능
//전역 변수 : 어디서든 사용 가능한 변수
//클로저 추후에 공부하기 => 면접

function sumString(str) {
  // console.log(average) 전역변수
  let greetingStr = "안녕하세요";
  if (true) {
    let inner = "출력";
    console.log(inner);
    console.log(greetingStr);
  }
  return greetingStr + str + "님";
}
console.log(sumString("김혜민"));
// console.log(greetingStr); 오류

//즉시 실행 함수
//클로저에 사용.
let resultNum = (function () {
  let num = 1;
  return function () {
    num++;
    console.log(num);
  };
})();

resultNum();
resultNum();
resultNum();

function double(a) {
  var varNum = 2;
  return a * varNum;
}
if (true) {
  let firstNum = 1;
  var secondNum = 2;
}
// console.log(varNum);
// console.log(firstNum);
console.log(secondNum);
