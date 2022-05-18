// 1. 산술 연산자 => +, -, /, *, %(나머지), ++, --
var num = 10;
console.log("num + 10 = ", num + 10);
console.log("num - 10 = ", num - 10);
console.log("num * 3 = ", num * 3);
console.log("num / 2 = ", num / 2);
console.log("num % 3 = ", num % 3);

// 증감 연산자
console.log("++num = ", ++num);
//num++ => num = num + 1;
// ++의 순서에 따라 값을 대입하는 시기가 달라진다.
console.log("num-- = ", num--);

// 할당 연산자 => 우항의 값을 계산하여 할당한다.
var newNum = 100;
newNum += 10; // 110 num = num + 10 더하고 나서 할당하는 것
newNum -= 20; //90 num = num-20
newNum *= 2; // 180 num = num*2
newNum /= 3; // 60 num = num / 3
console.log(newNum);

// 연결 연산자 => 문자열을 연결한다.
console.log("나는 " + "김혜민이다.");

// 비교 연산자 => 좌항과 우항을 비교하여 참이면 true, 거짓이면 false 반환
console.log("====비교 연산자 ====");
console.log("3 == 2", 3 == 2);
console.log('3 == "3"', 3 == "3");
console.log('3 === "3"', 3 === "3");
console.log('3 !="3"', 3 != "3");
console.log('3 !=="3"', 3 !== "3");
console.log("3>2", 3 > 2);
console.log("3>=3", 3 >= 3);

//논리 연산자 => true와 false를 처리하는 연산자.
// ! : 피연산자가 false => true. boolean 값을 뒤집는다.
// && : 피연산자 모두 true일 때 => true / 둘 중 하나라도 false면 false
// || : 둘 중에 하나라도
console.log("!true", !true);
console.log(true && true);
console.log(3 > 2 && 4 > 2 * 3);
console.log(3 < 4 && !(3 > 2 + 5));
console.log(true || false);
