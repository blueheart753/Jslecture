// 객체 편집 메서드
// $("요소선택").before("새 요소") : 선택한 요소 이전 위치에 새 요소 추가
// $("요소선택").insertBefore("새 요소") : before()와 동일, 사용법만 다름
$("<p>insertBefore() 사용</p>").insertBefore("#wrap");
$("#wrap p:eq(1)").before("<p>before() 사용</p>");
// $("요소선택").after("새 요소") : 선택한 요소 다음 위치에 새 요소 추가
// $("새요소").insertAfter("요소선택") : after 와 동일 사용법만 다름

$("#wrap p:eq(2)").after("<p>after() 사용</p>");
$("<p>insertAfter() 사용</p>").insertAfter("#wrap p:eq(2)");

// $("요소선택").append("새 요소") : 선택한 요소의 마지막 위치에 새 요소 추가
// $("새 요소").appendTo("요소 선텍") : append와 동일, 사용법만 다름.

// $("요소 선택").prepend("새 요소") : 선택한 요소의 맨앞 위치에 새 요소 추가
// $("새 요소").prepend("요소 선텍") : preend와 동일, 사용법만 다름.

$("ul").prepend("<li>prepend()사용</li>");
$("<li>prependTo()사용</li>").prependTo("ul");

// 아래 코드는 li 태그만큼 append가 발생해버림
// $("ul li").append("<li>append() 사용</li>");
$("ul").append("<li>append() 사용</li>");
$("<li>appendTo()사용</li>").appendTo("ul");

// 기본 값은 flase, true-> 이벤트까지 복제, false-> 간순 element(html)만 복제
// $("요소선택").clone([true|false])

// $("요소 선택").remove() : 선택한 요소와 모든 하위요소를 삭제
// $("요소 선택").empty() : 선택한 요소만 남고 모든 하위요소를 삭제

// box1의 자식요소(p태그들)만 복제
const copyObj = $(".box1").children().clone();
$(".box2").remove();
$(".box3").empty();
$(".box3").append(copyObj);

// $("요소선택").replaceWith("새 요소") : 선택한 요소 -> 새 요소로 교체
// $("새 요소").repalceAll("요소 선택") : repalceWith()와 동일
// 주로 선택한 모든 요소를 한 꺼번에 바꿀 때 많이 사용
// *요소를 선택한 경우, 하위 유소까지 한꺼번에 선택되어 교체가 된다.
// $(".box1 p").replaceWith("<h2>repalceWith() 사용</h2>");
// $("<p>replaceAll() 사용</p>").replaceAll(".box3");

//$("요소선택").unwrap() : 선택한 요소의 *부모 요소*를 삭제
$(".box3 p").unwrap();

// $("요소선택").wrap("새 요소") : 선택한 요소를 새 요소로 새 요로소 걱걱 감삼
// $("p").wrap("<div></div>");

// $("요소선택").wrapALl("새 요소") : 선택한 요소를 새 요소로 한꺼번에 감쌈
$("p").wrapALl("<div></div>");

// $("요소선택").wrapInner("새 요소") : 선택한 요소의 모든 하위 요소로 감쌈
$(".box1").wrapInner("<h3></h3>");
