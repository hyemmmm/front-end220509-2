// 변수 : 변하는 수. 데이터를 저장하는 공간.
// 예약어(키워드) : 특정 기능을 하는 약속된 단어. => 키워드를 변수명으로 작성하면 안됨!
// 변수명 작성법
// 1) 숫자가 먼저 오면 안된다. => ex) 1number
// 2) 언더스코어(_)와 숫자, 문자로만 변수명을 지을 수 있다. => 다른 특수문자 X
// 3) 대소문자를 구분 한다.

// 변수 선언 => 저장할 공간 마련한다.
var str;

// 변수 할당 => 변수라는 공간에 데이터를 저장한다.
str = "hyemin";

//변수 선언과 할당은 동시에 할 수 있다.
var a = 1;
var A = 2;

var currentYear = 2022;
var age;
var birthYear;

// birthYear = prompt("생년월일을 입력하세요.", "");
age = currentYear - birthYear + 1;
age = 40;
document.write(age + "살");

// 변수는 원할 때 언제든지 꺼내서 사용할 수 있다.

// 상수 => 변하지 않는 수.
// 다른 값으로 변경할 수 없다.

const myAge = 29;
// myAge = 50; 에러! 상수는 다른 값으로 변경 불가.
document.write(myAge);

//데이터 타입.
// 1. 숫자형 => 정수와 실수를 number라는 하나의 데이터형으로 다룬다. => 실수의 정밀한 계산이 안된다.
console.log(typeof 3.4234);
console.log(0.1 + 0.2);

// 2. 문자열 => ""나 ''로 묶은 문자형 데이터.
// ""를 출력하고 싶으면 ''로 묶으면 된다. 반대도 가능하다.
console.log(typeof "'문자열'");

// 3. 논리형 => 참(true)이나 거짓(false)으로 논리를 나타내는 데이터.
console.log(true + 1); // true => 1로 평가된다.
console.log(false == 0); // false => 0으로 평가된다.

//4. undefined와 null => 자료형이 정의되지 않았을 때 데이터의 상태를 나타낸다.
// undefined와 null은 falsy한 값 => false처럼 취급한다.
var num;
console.log(num); // 아직 값이 정의되지 않았을 때.
console.log(null); //개발자의 의도에 따라 아무 값도 넣지 않을 때.

//5. 배열(array) => 여러 개의 값을 저장. []안에 원하는 만큼 저장.
// index(순서)로 값을 꺼내 쓸 수 있다. => ex) 배열이름[1];
// JavaScript는 index(순서)가 0부터 시작된다.
var arr = [1, 3, "hyemin"];
console.log(arr);
console.log(arr[0]);

//6. 객체(object) => key와 value로 값을 저장.
//key값을 통해 value를 꺼낼 수 있다 => ex) human.name
// value로는 모든 자료형을 저장할 수 있다. => 함수도 저장 가능.
var human1 = {
  name: "hyemin",
  age: 29,
  phone: {
    name: "galaxy",
    price: 100000,
  },
};
console.log(human1);
console.log(human1.name);
console.log(human1.phone.price);

// 문제 num1과 num2의 값을 서로 바꾸기.

var num1 = 10;
var num2 = 100;
var temp = num2;

num2 = num1;
num1 = temp;

console.log(num1, num2);

//let, const
//1. let
//재선언을 허용하지 않는다. => 같은 이름으로 선언하는 것 불가능
//변수 호이스팅 발생X

// console.log(Str02);
let str02 = "hyem";

//2. const
// 상수 : 변하지 않는 수 => 재선언X 재할당X
// 호이스팅 발생 X

// console.log(country);
const country = "korea";
// country = "japan";
