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

console.log(str1.replace("world","JavaScript"));

console.log(str1.search("world"));


const str = "The quick brown fox jusmps over the lazzy dog.";

console.log(str.slice(31));

console.log(str.slice(4,19));

console.log(str.slice(-4));

console.log(str.slice(-9,-5));

console.log(str.substring[4,9]);

console.log(str1.toUpperCase());

console.log(str1.toLowerCase());

const str2 = "                 hello                     "
console.log(str2.trim());

// open("https://github.com/blueheart753/Jslecture/blob/main/README.html","naver","width = 800 ,height = 580px, scrollbars=no")

// const userName = prompt("여러분의 이름은?","디지텍고등학교 학생");

console.log(screen.width);
console.log(screen.height);

// alert(screen.width)

console.log(location.href) // 현재 접속 중인 URL
console.log(location.host) // 서버 주소
// location.reload();

// history.forward();