### js는 대소문자 구분

> > 날짜 객체

```js
new Date();
// New date() <= Error
```

### 주석

```js
// 한줄 주석방식

/* 
영역 주석방식
*/
```

### 코드 한줄 작성 후 세미콜론

```js
document.wirte("hi");
document.wirte("bye");
```

### 큰 따옴표 작은 따옴표 겹침 주의

> - 백슬래쉬 붙여주거나 작음따옴표 추가

```js
document.wirte("선생님이 '필기를 해'라고 말씀하셨다"); /*Error!!*/
document.wirte("선생님이 '필기를 해'라고 말씀하셨다");
```

### 변수 선언

```js
var age1 = 18; //<- 사용하지 말자!!(

// es6 (ECMA2015)
let age2 = 18;
const age3 = 18;
```

> - 변수 -> 재할당(수정) 가능 or 불가능
>   > - constant : 상수 , 수정 절.대 불가능
>   > - let : 수정 및 재할당 자유로움

<br>

### console.log()

> 브라우저의 Console 영역에 문자열 출력

### 문자형

```js
let firstName = "김";
// 문자열 데이터에 HTML 태그를 표현하여 출력 시, 태그로 인식
let lastName = "미남";
```

### 숫자형

> - 문자열이 아닌 모든 숫자는 "Number"로 인식

```js
let age4 = 18;
let age5 = Number("18"); // 문자열 데이터(숫자만 있는!!) => Number 자료형으로 변환!!
let age6 = Number("18"); // Number 자료형으로 강제 변환 => Not a Number (NaN)으로 변환
```

### 논리형

```js
let isLogined = true;
isLogined = false;

let cheak = 1 < 0;
```

> - 참같은 값은 Boolean으로 반환할 때 값이 들어있으면 'True'로 처리
> - 거짓같은 값은 'False'로 처리한다.
>   > - null, 0, undefinded, "", NaN --> false 형변환한다.

### 빈 데이터 (Null / Undefinded)

```js
let tmp; // undefinded : 변수에 값을 등록하지 전 상태 (의도 X)
let tmp2 = null; // null : 변수에 저장된 데이터를 비울 때! (의도 O)
```

### 데이터 타입 알아내기 (typeOf)

> String,Number,Boolean, Undefinded, => typeOf 출력시 본인 자료형 그대로
>
> > typeOf NaN -> Number
> > typeOf null -> Object(객체) -- (null 이라는 이름의 자료형 XXXXXXX)

### 변수 선언 시 주의사항

> 첫 번째로 오는 글자 : $ , \_ 대소문자

### 연산자

#### 산술 연산자

##### " + - \* / % "

```js
console.log(3 + "3"); // + 연산자 : 하나라도 문자열이 등장 시 문자열 결합으로 작동
```

#### 대입 연산자

##### " = += -= /= %= "

```js
let test = 1;
test += 2; // test = test + 2;
```

#### 증감 연산자

##### " ++ -- "

```js
test = 1;
console.log(test++);
test = 1;
console.log(++test);
```

> 전위 증감 연산자, console.log() 실행 후 값이 증가
>
> > 후위 증감 연산자, console.log() 실행 후 값이 증가

#### 비교 연산자

##### " > < >= <= == != === !== "

```js
console.log(3 == "3");
console.log(3 === "3");
```

> 숫자를 비교할 경우, 표기된 숫자만 일치하면 true 반환
>
> > 숫자를 비교할 경우, 표기된 숫자 & 자료형 까지 일치하면 true반환

#### 논리 연산자

##### "&&(and) ||(or) !(Not)"

```js
console.log(test === 1 && true && "야호");
console.log(test === 1 || false || "바보");
```

> test === 1 (true) && true (true) && "야호" (true)
>
> > test === 1 (true) || false (false) || "바보" (true)

<br>

> && : 하나라도 false가 존재하면 false로 반환
> | | : 하나라도 true 가 존해하면 true로 반환
> ! : 결과 값을 반대로 반환함

###### && 나 | | 연산자의 평가 결과는 반드시 Boolean 값이 아닐 수도 있다.

```js
console.log("dog" && "cat"); // 단축평가
```

> 첫 번째 피연산자 "dog"의 경우, Truthy 값 -> true 평가
>
> > 하지만 이 시점에서는 아직 && 연산을 수행할 수 가 없다! 그래서 우리는 두 번째 피연산자 "cat"으로 넘어감
> >
> > > 이때의 && 연산자는 논리 연산결과를 결정하는 두번째 피연산자, "cat"을 그대로 반환!
> > > (&& || 둘다 논리 연산의 결과를 결정하는 피연산자 타입을 반환하지 않고 그대로 반환)
> > > <br>

#### 단축 평가

- 표현식을 평가하는 도중에 평가 결과가 확정된 경우, 나머지 평가 과정을 생략

###### 삼항 조건 연산자

- 조건식 ? 조건식이 참일때 사용할 결과값 : 거짓일 때 사용할 결과값

```js
test = 1;
console.log(test > 1 ? "맞습니다" : "거짓입니다");
```

### 제어문

> - 프로그램의 흐름을 제어 하며 조건을 만족하는 여부에 따라 조건문 : if - else if - else
>   > - 변수에 일치하는 경우에 따라 코드를 제어하는 선택문 : Switch
>   >   > - 특정 코들르 여러 번 반복해서 실행할 수 이쓴 반복문 : for, while, do while

#### - 조건문 -

```js
if (1 > 3) {
  //
} else if (1 > 2) {
  //
} else if (1 > 1) {
  //
} else {
  //
}

if ("월요일") {
  if (true) {
    console.log("오늘 하루도 얼마 남았다~~~~~~~!!");
  }
} else {
  console.log("falsy한 친구들");
}
```

- 조건식 부분에 true/flase가 아닌 요소가 오더라도, truthy,falsy에 따라 처리함

<br>

#### 선택문(Switch)

```js
let flag = 1;
switch (flag) {
  case 1:
    console.log("첫 번째 조건!");
    break;
  case 2:
    console.log("두 번째 조건!");
    break;
  default:
    console.log("기본값");
}
```

#### 반복문(for, while, do-while)

- while : 조건식을 만족할 때까지 계속 반복

```js
flag = 1;
while (flag < 5) {
  console.log(flag);
  flag++;
}
```

- do-while : 반드시 한 번은 코드를 실행하고 조건식을 검사

```js
do {
  console.log(flag);
  flag++;
} while (flag < 5);
```

- for : 조건식을 만족할 때 까지 계속 반복
  > - for(초기값; 조건식; 증감식;) { }

```js
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
```

> - continue : 뒤의 코드 무시, 바로 조건식 이동
> - break : 반복문을 탈출하고 싶을 때

<br>

### 객체

#### 자바스크립트의 객체 종류

#### 내장객체 : String , Data , Array , Math

> ```js
> const sample = new 생성함수();
> sample = {};
> ```

#### 날짜 정보 객체

> ```js
> const date = new Date("2023/2/1");
> const date = new Date(2020, 2, 1);
> ```

#### get~~~ : 날짜 정보를 가져올 때

> ```js
> console.log(date.getDate()); // 요일 정보 : 0:일요일 ~ 6(토요일)
> console.log(date.getTime()); // 월 정보 : 현재 월 - 1
> console.log(date.getMonth()); // 1970.1.1 ~ 지금까지 경과한 시간
>
> const lastDay = new Date(2023, 11, 31); // 2023-12-31
> let diff = lastDay.getTime() - date.getTime();
> // 1초 = 1000ms , 1분 = 60초 , 1시간 = 60분, 1일 = 24시간
> diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
> document.write("<h3>연말까지 " + diff + "일</h3>");
> ```

> - set~~~ : 날짜 정보를 수정할 때

#### 수학 객체 : Math

> ```js
> Math.abs(); //절대값
> Math.max(2, 3, 4, 5, 6, 199); //넘겨받은 숫자 중 가장 큰 값
> Math.min(1, 2, 3, 4, 5, 6); //넘겨 받은 숫자 중 가장 작은 값
> Math.pow(2, 4); //2^4(숫자, 재곱값)
> Math.random(); //0~1 사이의 난수
>
> Math.PI;
>
> Math.ceil(); // 소숫점 첫번째 자리에서 올림
> Math.round(); // 소숫점 첫번째 자리에서 반올림
> Math.floor(); // 소숫점 첫번째 자리에서 내림
> ```

#### 배열

- 여러 개의 데이터를 묶어서 저장하고자 할 때

- 1번째 방법

```js
const arr = new Array();
arr[0] = 1;
arr[1] = 2;
```

- 2번째 방법

```js
const arr2 = new Array(1, 2);
```

- 3번째 방법

```js
const arr3 = [1, 2];
```

#### Array에서 제공하는 메서드 및 속성

- join(연결문자) | 베열 데이터를 연결 문자 기준으로 이어붙여서 반환

```js
console.log(arr.join("/"));
```

- revers | 데이터 역순으로

```js
arr.revers();
```

- sort | 데이터 오름차순 정렬

```js
arr.sort();
```

- concat | 배열 2개를 하나로 결합

```js
arr.concat(arr2);
```

- pop | 마지막 인덱스의 데이터를 반환 후 삭제

```js
arr.pop();
```

- push | 마지막 인덱스에 새로운 데이터 추가

```js
arr.push(3);
```

- shift | 첫번째 인덱스의 데이터를 반환 후 삭제

```js
arr.shift();
```

- unshift | 첫 번째 인덱스에 새로운 데이터를 추가

```js
arr.unshift(3);
```

- length | 배열의 길이 값 (-> 마지막 인덱스 값)

```js
arr.length;
```

```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

#### String Object 문자열

- String | 문자형 데이터를 객체로 취급
  > - 문자열 객체 생성

```js
const str1 = "hello";
str1 = new String("hi");
```

> - charAt | 인덱스 번호에 해당하는 문자 변환

```js
console.log(str1.charAt(1));
console.log(str[1]);
```

- indexOf | 문자열에서 왼쪽에서 일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인덱스 번호 반환
  > - 없으면 -1 반환

```js
console.log(str1.indexOf("world"));
console.log(str1.indexOf("@orld"));
```

- lastIndexOf | 오른쪽에서부터 일치하는 문자를 찾아 찾아 제일 먼저 일치하는 문자의 인덱스 번호 반환

```js
console.log(str1.lastIndexOf("world"));
```

- match | 문자열에서 왼쪽에서 일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인덱스 번호 반환
  > - 없으면 null로 반환

```js
console.log(str1.match("@worid"));
```

- replace | 왼쪽부터 원하는 문자를 찾아 제일 먼저 찾은 문자를 치환
  > - 원본을 건드리지 않고 새로운 문자열 반환

```js
console.log(str1.replace("world", "JavaScript"));
```

- search | 작동방식은 IndexOf와 비슷하지만 특정 패턴을 찾는 것

```js
console.log(str1.search("world"));
```

- slice(A,B) | a개의 문자를 자르고, B번째 이후에 문자를 자른 후 남은 문자 반환
  > - 원본을 건드지않고 새로운 문자열 반환

```js
const str = "The quick brown fox jusmps over the lazzy dog.";
console.log(str.slice(31));

console.log(str.slice(4, 19));

console.log(str.slice(-4));

console.log(str.slice(-9, -5));
```

### substring(a[, b])

- 문자열 a ~ b까지를 반환 (6번째 인덱스는 포함되지 않음)
  > - 원본 건드리지 않고 새로운 문자열 반환
  > - 만약 b를 입력핮 않는 경우, 끝까지~

```js
console.log(str.substing[(4, 9)]);
```

#### split

- 구분 문자를 기준으로 문자 데이터를 쪼개서 새로운 배열에 저장 후 반환
  > - 원본을 건드리지 않고 새로운 배열 반환

```js
console.log(str.split(" "));
```

#### toUpperCase

- 문자열 -> 전부 대문자
  > - 원본 건드리지 않고 새로운 배열 반환

```js
console.log(str1.toUpperCase());

console.log(str1.toUpperCase());
```

#### trim

- 문자열의 양쪽 공백을 제거

```js
const str2 = "                            hello                     ";
console.log(str2.trim());
```

#### trimEnd / trimStart

- 오른쪽 공백만 제거 / 왼쪽 공백만 제거

### 브라우저 객체 모델 ( DOM - DocumentObjectModel - )

> - HTML 문서 구조

#### window

- 가장 최상위 객체

#### window.open()

- URL 전달받은 페이지를 새 창에 표시

```js
window.open("www.naver.com", "naver", "width = 800px", ",580px");
```

#### setInterval(함수,시간)

- 계속해서 일정 시간 간격으로 함수를 호출

#### setTimeout(함수, 시간)

- 단 한번 일정 간이 흐른 후 함수를 호출

#### location, screen, history, navigator, document

##### screen

- 사용자의 모니터 정보(pc,핸드폰,태블릿)

```js
console.log(screen.width);
console.log(screen.height);
```

#### location

- 브라우저와 관련된 현재 URL에 대한 정보, 새로고침 메서드를 제공

#### history

- 사용자가 방문한 사이트의 기록과 이전방문, 다음 방문 한 번씩 제어 가능

```js
history.forward(); // 다음 페이지 이동 (만약X , 이동안함)

history.back(); // 이전 페이지 이동 (만약X , 이동안함)
```

#### navigator

- 현재 사용자가 사용하는 브라우저 정보, 운영체제의 정보

<br>

### 함수(Function)

> - js 코드의 묶음
> - function 키워드를 사용하거나, arrow 하무 형태
>   > - 데이터를 전달받아 사용할 수 있으며, 실행 결과를 반환할 수 도 있다.

<br>

#### 함수 정의 방법

```js
function sayHi() {
  // ....js Codes
}
```

<br>

#### 익명 함수 정의 방법

```js
const sayHi2 = function () {
  console.log("Hi~~2");
};
```

<br>

#### 화살표 함수

- arguments 객체 생성 X

```js
const sayHi3 = () => {
  console.log("Hi~~~1");
};
```

### 매개변수 (Parameter)

- 함수를 실행하기 위해 필요한 값을 함수 외부에서 내부로 전달하기 위해 사용!
  > 함수를 정의 할 때 선언하며 함수 내부에서 변수처럼 사용.

### 인수 (Arguments)

- 함수를 호출할 때 지정, 개수, 타입에 제한 없음

#### 함수 선언문

> 전달받은 값이 없다면 Undefinded, 있으면 그 값으로

```js
function add(x, y) {
  console.log(x, y);
  return x + y;

  x = x || 0; // 인수가 부족 할 때 사용할 수 있는 방법
  y = y || 0;
}
```

#### 함수 호출

```js
ley result = add(1,2);
```

##### JS에서의 함수 => 매개변수의 개수 체크 <-> 인수의 개수 일치하는 체크 X

> 인수가 부족(덜 전달) -> 함수 내부에서는 부족한 데이터는 Undefinded 처리.
> 인수가 과함(더 전달) -> 무시 (버려지지 않고, arguments 갹체에 저장)

#### 매개변수의 기본값을 사용(ES6)

- 기본 값 : 메게변수에 인수 전달 X or undefinded일때만 적용

#### 매개변수가 많아 질 때 최대 3개까지

#### 화살표 함수 정의

```js
const multiply = (x, y) => {
  return x * y;
};
```

#### 만약 매개변수가 1개 인경우, 괄호 생략 가능

```js
const func1 = (x) => {
  console.log(x);
};
```

#### 만약 매개변수가 없으면, 괄호 반드시 적어줘야 함!

```js
const func2 = () => {};
```

### 화살표 함수 VS 일반 함수

- 중복된 매개변수 이름 선언 여부

```js
function f1(a, a) {
  return a + a;
}

const arrowF1 = (a, a) => {
  a + a;
};
```

#### 화살표 함수는 this, arguments , super 사용 불가

- this | 자기 자신 (객체 본인)
- super | 부모(객체가 상속받는 부모 객체)
- But! arguments, 가변인자 사용가능
  > 화살표 함수 : <Rest 파라미터> 방식을 사용
  > Rest파라미터 : 함수에 전달된 인수들을 배열로 전달받는 방법
  > Rest는 반드시 마지막 요소, 단 1개만 사용가능

```js
function f2(...params) {
  console.log(params);
  console.log(arguments);
}
f2(1, 2, 3, 4, 5, 6, 7);
```

#### spread 문법

- 하나로 뭉쳐져 있는 여러 값의 집합을 펼쳐서 개별적인 값의 목록으로 만듦
  > spread 사용 가능 대상 : Array, String, DOM, 컬렉션, arguments 등등등
  >
  > > 순회할 수 있는 이터러블에서 사용가능

```js
console.log(...[1, 2, 3]);
console.log(..."Goodbye~");
// console.log(...{name:"minam",age:20});
```

> 객체에서는 for...of 반복문 X
>
> > 함수 호출 시 인수에서 사용하는 경우

```js
console.log(Math.max(1, 2, 3, 4, 5, 6));
```

#### 배열 내부에서 사용하는 경우

- concat 개신

```js
console.log([1, 2].concat([3, 4]));
const arr = [...[1, 2], ...[3, 4]];
console.log(arr);
```

<br>

### splice를 좀더 잘 쓰기 위해!

#### Splice

- 어떤 배열의 중간에 다른 배열의 요소를 추가하거나 제거하기 위해 사용
- 원본이 수정된다

```js
const arr1 = [1, 4];
const arr2 = [2, 3];
```

#### 배열의 복사를 위해 slice를 사용했음(ES5)

- 동일한 값을 갖는, 완전히 새로운 배열을 생성하는 것

```js
const origin = [10, 20];
const copy = origin.slice();

const trendCopy = [...origin];
```

#### 객체 내부에서 사용하는 경우

```js
const obj1 = { x: 2, y: 2 };
const copyObj1 = { ...obj1 };
const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
```

<br>
# Jquery

<br>

### 라이브러리

- 다양한 함수들의 집합채
