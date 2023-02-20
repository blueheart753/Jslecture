document.write("<h2>js를 시작했어요!</h2>");

new Date();
// New date() <= Error

document.write("hi");
document.write("bye");

document.write("선생님이 '필기를 해'라고 말씀하셨다"); //Error!!
document.write("선생님이 \'필기를 해'\ 라고 말씀하셨다");

var age1 = 18; //<- 사용하지 말자!!

// es6 (ECMA2015) 
let age2 =  18;
const age3 = 18;

let firstName = "김";
// 문자열 데이터에 HTML 태그를 표현하여 출력 시, 태그로 인식 
let lastName = "미남";

let age4 = 18;
let age5 = "18"; // 문자열 데이터(숫자만 있는!!) => Number 자료형으로 변환!!
let age6 = Number("18"); // Number 자료형으로 강제 변환 => Not a Number (NaN)으로 변환

let isLogined = true;
isLogined = false;

let cheak = 1<0;