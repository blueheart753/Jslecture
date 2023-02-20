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

console.log(3+"3");

let test = 1;
test += 2; // test = test + 2;

test = 1;
console.log(test++);
test = 1;
console.log(++test); 

console.log(3 == "3");
console.log(3 === "3"); 

console.log(test === 1 && true && "야호");
console.log(test === 1 || false || "바보");

console.log("dog" && "cat") // 단축평가

test = 1;
console.log(test > 1 ? "맞습니다" : "거짓입니다")

if(1>3) {
  //
}else if(1>2) {
  //
}else if(1>1) {
  //
}else {
  //
}


if ("월요일") {
  if(true) {
    console.log("오늘 하루도 얼마 남았다~~~~~~~!!")
  }
}else {
  console.log("falsy한 친구들")
}

let flag = 1;
switch(flag) {
  case 1:
    console.log("첫 번째 조건!");
    break;
  case 2:
    console.log("두 번째 조건!")
    break;
  default:
    console.log("기본값")
}

flag = 1;
while(flag <5) {
console.log(flag);
flag++;
}

do {
  console.log(flag);
  flag++
}while(flag < 5);

for(let i = 0; i<10; i++) {
  if(i%2==0) {
    console.log(i);
  }
}

for(let i = 0; i<10; i++) {
  if(i%2!==0) {
      continue;
    }
    console.log(i);
}

console.log(new Date());

// window.location.href = "https://releases.jquery.com/";

// const sample = new 생성함수();
// sample = {};

const date = new Date("2023/2/1"); 
const date2 = new Date(2020,2,1);

const lastDay = new Date(2023,11,31); // 2023-12-31
let diff = lastDay.getTime() - date.getTime();
// 1초 = 1000ms , 1분 = 60초 , 1시간 = 60분, 1일 = 24시간
diff = Math.ceil(diff / (1000*60*60*24));
document.write("<h3>연말까지 "+diff +"일</h3>")