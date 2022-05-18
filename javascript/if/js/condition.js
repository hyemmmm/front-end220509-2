// 조건문 => 조건에 따라 코드 블록 안에 있는 코드들을 전부 실행
// 조건문 ()안에는 true나 false가 들어온다.
// var birthYear = 1977;
// var currentYear = 2022;
// var age = currentYear - birthYear + 1;
// if (age >= 40) {
//   if (age > 45) {
//     alert("40대 후반");
//   } else {
//     alert("당신은 40대입니다.");
//   }
// } else if (age >= 30) {
//   alert("당신은 30대입니다.");
// } else {
//   alert("당신은 30대도 40대도 아닙니다.");
// }

// 3의 배수인지 확인하기. prompt('숫자를 입력하세요', '');

var num = prompt("숫자를 입력해주세요", "");

if (num === null) {
  document.write("입력되지 않음");
} else if (num % 3 === 0) {
  document.write("3의 배수입니다.");
} else {
  document.write("3의 배수가 아닙니다.");
}

// var num = prompt("나이", "");

// if (num >= 60) {
//   document.write("60대 이상");
// } else if (num >= 50) {
//   document.write("50대");
// } else {
//   document.write("50대 미만");
// }
