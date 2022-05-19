// 1. for문
// (초기값; 조건; 증감식)
// 조건에 충족하면 다음 명령을 실행 => 증감식을 실행
// for (var i = 1; i <= 10; i++) {
//   document.write(i + "번째 실행");
// }

// var num = 0;
// for (var i = 1; i < 1001; i++) {
//   num += i;
// }
// document.write(num);

//구구단 만들기
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 4; j++) {
//     console.log(i, j);
//   }
// }

// for (var i = 2; i < 10; i++) {
//   document.write("<h3>" + i + "단" + "</h3>");
//   for (var j = 1; j < 10; j++) {
//     document.write(i + "X" + j + "=" + i * j + "<br>");
//   }
// }

// 2. while문
// ()안에 있는 값이 true면 계속 반복한다.
// 특정 조건에서 while문 안에서 boolean값을 바꿔서 반복문을 종료 => ex) 특정 버튼 클릭.
// break를 통해 while 문을 탈출.
// continue를 통해서 1번만 건너뛴다.

var i = 0;
while (i < 10) {
  i++;
  if (i == 3) continue;
  console.log(i);
}

//while문 문제
//0~20까지의 수 중에 짝수만 출력 => 0은 출력되면 안됨

var idx = 0;
while (idx <= 20) {
  if (idx === 0) {
    idx += 1;
    continue;
  }
  if (idx % 2 === 0) {
    console.log(idx);
  }
  idx += 1;
}

//while문 문제2
//1부터 입력받은 숫자까지 더하기.

// var num4 = Number(prompt("숫자를 입력하세요", ""));
// var startNum = 1;
// var result = 0;
// while (startNum <= num4) {
//   result += startNum++;
// }
// document.write(result);

var isPaused = false;
while (!isPaused) {
  isPaused = confirm("멈출래?");
}
