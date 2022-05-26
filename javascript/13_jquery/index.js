//dom 접근 => $("선택자")
console.log($(".container").children());

//스타일 변경
// $(".box").css("background-color", "black");
// $(".container").children().css("border", "3px solid red");
// $(".box").parent().css("border", "1px solid blue");
// 인라인 속성으로 스타일변경은 안 하는게 좋다.

//이벤트
$(".box").click(function (e) {
  //this에 jquery api를 적용하려면 $()로 감싼다.
  $(e.target).toggleClass("blue");
  $(this).fadeOut();
});

$(".container").append(`<div class = "box"></div>`); // 문자열 형태로 요소를 추가
// $(".container").empty(); // 자식요소를 다 삭제
$(".box").eq(3).addClass("blue"); //eq() : nth-child()와 같다. 인덱스 0부터 시작

console.log($(".box").siblings().eq(1).addClass("blue"));
// siblings() 형제 요소(모두)를 선택. 자신 포함
console.log($(".box").eq(3).prev().css("background-color", "black"));
//prev() : 이전 형제

let arr = [
  { id: 1, text: "JavaScript" },
  { id: 2, text: "Jquery" },
  { id: 3, text: "React" },
];

arr.forEach((item) => $("ul").append(`<li>${item.text}</li>`));

$("li").click(function (e) {
  $(this).toggleClass("red");
});

// 의사코드 깃허브 읽어보기

// 카드 4*3 12장 화면에 출력
// 처음에는 뒷면 보여주다가 클릭시 앞면
// 두장 겹쳐서 보여서 rotate 아니면 display: none으로
// perspective + rotate => 3d 회전

$(".card").click(function (e) {
  $(this).children().addClass("rotate");
});
