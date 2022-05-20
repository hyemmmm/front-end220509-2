//코딩문제
let a = 5;
let b = 3;

let str = "";
for (let i = 0; i < a; i++) {
  str += "*";
}
for (let i = 0; i < b; i++) {
  console.log(str);
}
//다른방법
for (let i = 0; i < b; i++) {
  console.log("*".repeat(a));
}
