const str1 = "hello world";

// str1 = new String("hi");

console.log(str1.charAt(1));
console.log(str1[1]);

console.log(str1.charAt(1));
console.log(str1[1]);

console.log(str1.indexOf("world"));

console.log(str1.indexOf("@orld"));

console.log(str1.lastIndexOf("world"));

console.log(str1.match("@worid"));

console.log(str1.replace("world", "JavaScript"));

console.log(str1.search("world"));

const str = "The quick brown fox jusmps over the lazzy dog.";

console.log(str.slice(31));

console.log(str.slice(4, 19));

console.log(str.slice(-4));

console.log(str.slice(-9, -5));

console.log(str.substring[(4, 9)]);

console.log(str1.toUpperCase());

console.log(str1.toLowerCase());

const str2 = "                 hello                     ";
console.log(str2.trim());

// open("https://github.com/blueheart753/Jslecture/blob/main/README.html","naver","width = 800 ,height = 580px, scrollbars=no")

// const userName = prompt("여러분의 이름은?","디지텍고등학교 학생");

console.log(screen.width);
console.log(screen.height);

// alert(screen.width)

console.log(location.href); // 현재 접속 중인 URL
console.log(location.host); // 서버 주소
// location.reload();

// history.forward();

function sayHi() {
  // ....js Codes
  console.log("Hi~~3");
}

const sayHi2 = function () {
  console.log("Hi~~2");
};

const sayHi3 = () => {
  console.log("Hi~~1");
};

function add(x, y) {
  console.log(x, y);
  return x + y;
  x = x || 0;
  y = y || 0;
}

let result = add(1, 2, 3);
console.log(add(1, 2, 3));

const multiply = (x, y) => {
  return x * y;
};

const func1 = (x) => {
  console.log(x);
};

const func2 = () => {};

const ErrorFunc3 = (id, pw) => {
  id, pw;
};

console.log(ErrorFunc3("kimm", "1111"));

function f1(a, a) {
  return a + a;
}

// const arrowF1 = (a,a) => {
//   a+a
// };

function f2(...params) {
  console.log(params);
  return params.filter((params) => params >= 5);
}
console.log(f2(1, 2, 3, 4, 5, 6, 7));

console.log(...[1, 2, 3]);
console.log(..."Goodbye~");
// console.log(...{name:"minam",age:20});

console.log(Math.max(1, 2, 3, 4, 5, 6));
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(numbers));
console.log(Math.max(...numbers));

console.log([1, 2].concat([3, 4]));
const arr = [...[1, 2], ...[3, 4]];
console.log(arr);

const arr1 = [1, 4];
const arr2 = [2, 3];

const origin = [10, 20];
const copy = origin.slice();

const trendCopy = [...origin];

const obj1 = { x: 2, y: 2 };
const copyObj1 = { ...obj1 };
const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
