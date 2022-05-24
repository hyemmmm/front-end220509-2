// setTimeout(함수, 시간(ms))
// 두번째 인자 입력한 시간이 지나고 첫번째 인자로 입력한 함수가 실행됨
// setTimeout, setInterval을 실행하면 id 값을 return
// => clearTimeout, clearInterval 해당 id값을 인자로 실행하면 더 이상 실행되지 않는다.

// 비동기(asynchronous)적으로 작동한다. : 동시에 실행(병렬)
// 동기적 : 코드 순서대로 실행
// JavaScript는 비동기적인 코드 실행 불가
// 브라우저가 비동기적 실행을 도와준다.

// 디바운스 => 일정시간안에 입력하면 clearTimeout을 하고 바로 다시 setTimeout을 등록해서 마지막 입력만 실행
// 스로틀링 => 일정시간 동안은 이벤트 감지돼도 실행X. 그 이후의 시간에 이벤트가 감지되면 실행

let timeOutId = setTimeout(function () {
  console.log("3초 경과");
}, 3000);

function foo() {
  console.log("foo 함수 실행");
}
foo();

let timeId = setInterval(function () {
  console.log("1초마다 실행");
}, 1000);

document.querySelector(".btnStop").onclick = function () {
  clearInterval(timeId);
  clearTimeout(timeOutId);
};
