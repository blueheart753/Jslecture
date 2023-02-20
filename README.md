### js는 대소문자 구분
>> 날짜 객체
``` js
  new Date();
  // New date() <= Error
```
### 주석
``` js
// 한줄 주석방식

/* 
영역 주석방식
*/
```

### 코드 한줄 작성 후 세미콜론
``` js
  document.wirte("hi");
  document.wirte("bye");
```

### 큰 따옴표 작은 따옴표 겹침 주의
>- 백슬래쉬 붙여주거나 작음따옴표 추가
``` js
document.wirte("선생님이 '필기를 해'라고 말씀하셨다"); /*Error!!*/
document.wirte("선생님이 \'필기를 해'\라고 말씀하셨다");
```

### 변수 선언

``` js
  var age1 = 18; //<- 사용하지 말자!!(


  // es6 (ECMA2015) 
  let age2 =  18;
  const age3 = 18;
```

>- 변수 -> 재할당(수정) 가능 or 불가능
>>- constant : 상수 , 수정 절.대 불가능
>>-  let : 수정 및 재할당 자유로움

<br>

### console.log()
> 브라우저의 Console 영역에 문자열 출력

### 문자형
``` js
let firstName = "김";
// 문자열 데이터에 HTML 태그를 표현하여 출력 시, 태그로 인식 
let lastName = "미남";
```
### 숫자형
>- 문자열이 아닌 모든 숫자는 "Number"로 인식
``` js
let age4 = 18;
let age5 = Number("18"); // 문자열 데이터(숫자만 있는!!) => Number 자료형으로 변환!!
let age6 = Number("18"); // Number 자료형으로 강제 변환 => Not a Number (NaN)으로 변환
```
### 논리형
``` js
let isLogined = true;
isLogined = false;

let cheak = 1<0;
```
>- 참같은 값은 Boolean으로 반환할 때 값이 들어있으면 'True'로 처리
>- 거짓같은 값은 'False'로 처리한다.
>>- null, 0, undefinded, "", NaN --> false 형변환한다.

### 빈 데이터 (Null / Undefinded)
``` js
let tmp; // undefinded : 변수에 값을 등록하지 전 상태 (의도 X)
let tmp2 = null; // null : 변수에 저장된 데이터를 비울 때! (의도 O)
```

### 데이터 타입 알아내기 (typeOf)
> String,Number,Boolean, Undefinded, =>  typeOf 출력시 본인 자료형 그대로
>> typeOf NaN -> Number
>> typeOf null -> Object(객체) -- (null 이라는 이름의 자료형 XXXXXXX)

### 변수 선언 시 주의사항
> 첫 번째로 오는 글자 : $ , _ 대소문자

### 연산자
#### 산술 연산자 : + - * / %

```js
console.log(3+"3"); // + 연산자 : 하나라도 문자열이 등장 시 문자열 결합으로 작동
```

#### 대입 연산자
##### " = += -= /= %= "
```js
let test = 1;
test += 2; // test = test + 2;
```

#### 증감 연산자
##### " ++ -- "
``` js
test = 1;
console.log(test++);
test = 1;
console.log(++test); 
```
> 전위 증감 연산자, console.log() 실행 후 값이 증가
>> 후위 증감 연산자, console.log() 실행 후 값이 증가

#### 비교 연산자
##### > < >= <= == != === !==
```js
console.log(3 == "3");
console.log(3 === "3"); 
```
> 숫자를 비교할 경우, 표기된 숫자만 일치하면 true 반환
>> 숫자를 비교할 경우, 표기된 숫자 & 자료형 까지 일치하면 true반환

#### 논리 연산자
##### "&&(and) ||(or) !(Not)"
```js
console.log(test === 1 && true && "야호");
console.log(test === 1 || false || "바보");
```
> test === 1 (true) && true (true) && "야호" (true)
>> test === 1 (true) || false (false) || "바보" (true)

<br>

> && : 하나라도 false가 존재하면 false로 반환
| | : 하나라도 true 가 존해하면 true로 반환
! : 결과 값을 반대로 반환함

###### && 나 | | 연산자의 평가 결과는 반드시 Boolean 값이 아닐 수도 있다.
```js
console.log("dog" && "cat") // 단축평가
```
> 첫 번째 피연산자 "dog"의 경우, Truthy 값 -> true 평가
>> 하지만 이 시점에서는 아직 && 연산을 수행할 수 가 없다! 그래서 우리는 두 번째 피연산자 "cat"으로 넘어감
>>> 이때의 && 연산자는 논리 연산결과를 결정하는 두번째 피연산자, "cat"을 그대로 반환!
(&& || 둘다 논리 연산의 결과를 결정하는 피연산자 타입을 반환하지 않고 그대로 반환)
<br>
###### 단축 평가
-  표현식을 평가하는 도중에 평가 결과가 확정된 경우, 나머지 평가 과정을 생략

###### 삼항 조건 연산자
- 조건식 ? 조건식이 참일때 사용할 결과값 : 거짓일 때 사용할 결과값
```js 
test = 1;
console.log(test > 1 ? "맞습니다" : "거짓입니다")
```

### 제어문
>- 프로그램의 흐름을 제어 하며 조건을 만족하는 여부에 따라 조건문 : if - else if - else
>>- 변수에 일치하는 경우에 따라 코드를 제어하는 선택문 : Switch
>>>- 특정 코들르 여러 번 반복해서 실행할 수 이쓴 반복문 : for, while, do while

#### - 조건문 -
```js
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
```

- 조건식 부분에 true/flase가 아닌 요소가 오더라도, truthy,falsy에 따라 처리함

<br>

#### 선택문(Switch)
```js
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
```

#### 반복문(for, while, do-while)
- while : 조건식을 만족할 때까지 계속 반복
```js
flag = 1;
while(flag <5) {
console.log(flag);
flag++;
}
```
-  do-while : 반드시 한 번은 코드를 실행하고 조건식을 검사
```js
do {
  console.log(flag);
  flag++
}while(flag < 5);
```

- for : 조건식을 만족할 때 까지 계속 반복
>- for(초기값; 조건식; 증감식;) { }
```js
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
```
>- continue : 뒤의 코드 무시, 바로 조건식 이동
>- break : 반복문을 탈출하고 싶을 때

<br>

### 객체
#### 자바스크립트의 객체 종류

#### 내장객체 : String , Data , Array , Math
> ```js 
>  const sample = new 생성함수();
>  sample = {};
> ```

#### 날짜 정보 객체
>```js
> const date = new Date("2023/2/1"); 
> const date = new Date(2020,2,1); 
>```

#### get~~~ : 날짜 정보를 가져올 때
> ```js
> console.log(date.getDate()); // 요일 정보 : 0:일요일 ~ 6(토요일)
> console.log(date.getTime()); // 월 정보 : 현재 월 - 1
> console.log(date.getMonth()); // 1970.1.1 ~ 지금까지 경과한 시간
>
> const lastDay = new Date(2023,11,31); // 2023-12-31
> let diff = lastDay.getTime() - date.getTime();
> // 1초 = 1000ms , 1분 = 60초 , 1시간 = 60분, 1일 = 24시간
> diff = Math.ceil(diff / (1000*60*60*24));
> document.write("<h3>연말까지 "+diff +"일</h3>")
>```

>- set~~~ : 날짜 정보를 수정할 때

#### 수학 객체 : Math
>```js
> Math.abs(); //절대값
> Math.max(2,3,4,5,6,199); //넘겨받은 숫자 중 가장 큰 값
> Math.min(1,2,3,4,5,6); //넘겨 받은 숫자 중 가장 작은 값
> Math.pow(2,4); //2^4(숫자, 재곱값)
> Math.random(); //0~1 사이의 난수
>
> Math.PI;
>
> Math.ceil() // 소숫점 첫번째 자리에서 올림
> Math.round() // 소숫점 첫번째 자리에서 반올림
> Math.floor() // 소숫점 첫번째 자리에서 내림
>```

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
 const arr2 = new Array(1,2);
 ```

- 3번째 방법
 ```js
 const arr3 = [1,2];
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
for(let i = 0; i<arr.length; i++) {
  console.log(arr[i]);
}
```

>- 브라우저 객체 모델 ( DOM - DocumentObjectModel - ) : HTML 문서 구조
>>- window , location , screen, history, navigator