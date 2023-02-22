// 객체 조작
// 1. 객체 편집 : 생성, 복제, 삭제, 변경, 추가

// $("요소선택").html()
// 선택한 요소의 하위 요소를 가져와 문자열로 반환

console.log($("#sect1").html());
console.log($("#sect1").html("<h3>하하 20분으로 줄었다! ^^;</h3>"));

$("#sect1").text("<p>18분 남았다~</p>");

const newImg = "https://i.ytimg.com/vi/qCq-V6qDqu4/maxresdefault.jpg";

$("img").attr("src", newImg);

$("#p1").addClass("salmon");
$("#p2").removeClass("salmon");
// $("#p4").toggleCalss("green");

console.log($("#p5").hasClass("inActive"));

console.log($("input").val());
$("input").val("으어어어어어어어어...");

console.log($("input").prop("defalutValue"));
// prop("checked",true) : form요소의 상태 속성값을 업데이트 할 때
