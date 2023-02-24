/*// 이벤트 : 유저가 웹사이트에 방문하여 하는 모든 동작
// 이벤트 핸들러 : 이벤트가 발생했을 때 코드를 실행시키는 것

// 이벤트 등록 : 하나의 이벤트만 등록(listen) / 여러개의 이벤트를 등록
// ex. 요소를 더블클릭했을 때 / 요소에 마우스포인터를 올렸을 때

// $("요소선택").이벤트종류(이벤트핸들러 함수)
// $("#Btn").click(function () {
//   console.log("클릭됨!");
// });

// document.querySelector("#btn").addEventListener("click", function(){
//     console.log("클릭됨");
// })

// 이벤트의 종류들
// 로딩 이벤트
// load() ready() error()

// 마우스 이벤트
// click() dbclick()
// mouseout() hover()
// mousedown() mouseup() mouseenter() mouseleave() mousemove()
// scroll()

// 포커스 이벤트
// focus()
// focusin() focusout()
// blur()
// change()

// 키보드 이벤트
// keypress()
// keydown() keyup()

// 이벤트 등록 방법
// $("요소선택").이벤트등록메서드(이벤트핸들러 함수)
// function BtnClickHendler() {
//   console.log("클릭됨!");
// }
// $("#Btn").click(BtnClickHendler);

$("#btn").click(function () {
  console.log("클릭됨!");
});

// 그룹 이벤트 등록 메서드
// 1.
// $("요소 선택").on("이벤트 종류1 이벤트 종류2",function(){})
// 2.
// $("요소선택").on({"이벤트 종류1 이벤트종류2" : function(){}
// 3.
// $("요소선택").on({
//   "이벤트 종류1": function () { },
//   "이벤트 종류2": function () { },
// })

// btn요소에 마우스를 올리거나 키보드를 사용해서 버튼에 포커스를 맞출 때
// 1.
// $("#Btn").on("mouseover focus", function () {
//   console.log("이벤트 발생!");
// });

// 2.
// $("#Btn").on({
//   "mouseover focus": function () {
//     console.log("이벤트 발생!!");
//   },
// });

// // 3.
$("#Btn").on({
  mouseover: function () {
    console.log("이벤트 발생!!!");
  },
  focus: function () {
    console.log("이벤트 발생!!!");
  },
});

// 강제로 이벤트를 발생시키기
// 사용자에 의해 이벤트X *핸들러*에 의해 이벤트 O

// 1. $("이벤트 대상").단독이벤트등록메서드();
// 2. $("이벤트 대상").trigger("이벤트종류");

$("#Btn").click();
$("#Btn").trigger("click");

// 이벤트를 제거하는 메서드 : off()

$("이벤트 대상").off("제거할 이벤트의 종류"); // <- "이벤트1 이벤트2 이벤트3";
$("#Btn").off("click mouseover focus");

// 로딩 이벤트
// 유저가 브라우저에서 HTML 문서를 요청하여 HTML문서의 로딩이 완료되는 순간!
// ready() : 유저가 사이트를 방문할 때 요청한 HTML 문서(document)의
//로딩이 완료된 순간 이벤트 발생
$(document).ready(function () {
  console.log($("img").height());
});

// load() : 외부에 연동된 소스(iframe ,img ,vdeio)의 로딩이 끝났을 때
$(window).on("load", function () {
  console.log($("img").height());
});

// 마우스 이벤트
// click() : 클릭했을 때
// dblclick() : 떠블 클릭했을 때
$("img").click(function () {
  console.log("클릭!");
});
$("img").dblclick(function () {
  console.log("클!릭!");
});

// a태그나 form 태그의 기본 이벤트를 차단하는 방법
$("a").click(function (event) {
  event.preventDefault(); // 기본 이벤트 차단
  console.log(event);
  console.log("a태그가 클릭됨");
});

$("button").click(function (event) {
  event.preventDefault();
  console.log("제출버튼이 클릭됨");
});

$("button").click(function () {
  console.log("제출버튼이 클릭됨");
  return false; // 기본 이벤트 차단 방법 2번째
});

// mouseover() / mouseout() / hover() 메서드
// mouseover() : 선택한 요소에 마우스를 올리 때마다
// $("a").mouseover(function () {
//   console.log("mouseover() 발생");
// });
// mouseout() : 선택한 요소에서 마우스가 벗어날 때마다
// $("a").mouseout(function () {
//   console.log("mouseout() 발생");
// });
// hover() : 선택한 요소에서 마우스가 올라가거나 벗어날 때 핸들러를 실행시킬 수 있음
//                        올라갈 때 / 벗어날 때 따로 핸들러를 실행 시킬 수 있음
$("a").hover(
  function () {
    console.log("mouseover() 발생시 실행");
  },
  function () {
    console.log("mouseout() 발생시 실행");
  }
);

// mouseover() , mouseout() : 이벤트 버블링 발생
// -> 직계 부모요소에서 이벤트가 전달이 되어 내가 target으로 서렂ㅈㅇ한 요소와

// mouseenter() / mouseleaver 메서드
// mouseenter() : 대상 요소의 경계범위에 마우스가 들어올 때
// mouseleave() : 대상 요소의 경계범위에 마우스가 완전히 나갈 때

$("#box_1").mouseout(function () {
  console.log("mouseout() 이벤트 발생");
  $("#box_1").css("background", "salmon");
});

$("#box_2").mouseleave(function () {
  console.log("mouseleave() 이벤트 발생");
  $("#box_2").css("background", "yellow");
});

// mouseup() mousedown()

// mouseup() : 마우스 커서를 뗐을 때
// mousedawn() : 마우스 커서를 누를때
$("h1").mouseup(function () {
  console.log("mouseup() 발생");
});

$("h1").mouseup(function () {
  console.log("mousedown() 발생");
});

// mousemove() : 선택한 요소 안에서 마우스를 움직일 때 발생

$("body").mousemove(function () {
  console.log("mousemove()발생");
});*/

$(document).mousemove(function (event) {
  $(".posX").text(event.pageX);
  $(".posY").text(event.pageY);
});

// scroll() :
$(window).on("scroll", function () {
  $(".ScollY").text($(this).scrollTop());
  $(".ScollX").text($(this).scrollLeft());
});

// 포커스 이벤트
// 포커스 : 마우스로 a / input 태그를 클릭 or Tab 누를 때 생성

// foucs() : 대상 요소로 포커스가 이동시
// blur() : 대상 요소에서 다른 요소로 포커스가 이동 시

// 밑 두개 이벤트 버블링 발생
// focusin() : 대상 요소의 하위 요소중 입력 요소로 포커스 이동 시
// focusout() : 대상 요소의 하위 요소 중 입력 요소에서 외부 요소로 포커서 이동시

$("#user_id #user_pw").on("focus", function () {
  $(this).css("background", "salmon");
});

$("#user_id  #user_pw").on("blur", function () {
  $(this).css("background", "skyblue");
});
