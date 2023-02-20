# document
### document란  html 문서 파일을 가져옴
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