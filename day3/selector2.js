// $("#menu li:first").css("background", "#f70");
// $("#menu li:last").css("background", "#f7f");

// $("#menu li:even").css("color", "red");
// $("#menu li:odd").css("color", "blue");

// $("#menu li:nth-child(2n)").css("color", "black");
// $("#menu li:nth-child(2n+1)").css("color", "blue");

// $("#menu li:nth-last-child(2)").css("color", "blue");

// $("#menu li:first-of-type").css("color", "salmon");
// $("#menu li:last-of-type").css("color", "skyblue");

// $("li:only-child").css("border", "1px solid salmon");

// $("#menu li").slice(1, 3).css("background", "salmon");

const obj = [
  {
    area: "서울",
    name: "디지텍고학생",
  },
  {
    area: "대전",
    name: "예지",
  },
  {
    area: "부산",
    area: "갈메기",
  },
];

$(obj).each(function (i, data) {
  console.log(i, ": ", data);
});

$.each($("#menu2 li"), function (i, data) {
  console.log(i + ": ", data);
});

$.each($("#menu2 li"), function (i, data) {
  console.log(i + ": ", $(this));
});

const result = $.map(obj, function (data, idx) {
  if (data.area == "대전") {
    console.log(idx);
    return { ...data, age: 20 };
  }
});

console.log(result);

const result3 = $.grep(obj, function (data, idx) {
  if (data.area == "대전") {
    return true;
  } else {
    return false;
  }
});

const areas = ["서울", "대전", "부산", "전주"];
const countries = ["한국", "일본", "스페인", "프랑스"];
const tmpObj = { name: "예지" };

const targetIdx = $.inArray("대전", areas);

console.log($.isArray(areas));

// $.marge(areas, countries);

console.log($("li").index($("#target")));
