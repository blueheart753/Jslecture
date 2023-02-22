// $("li").parent().css("border", "1px solid #faf");

// $("#wrap h1").css("color", "blue");

// // $("#wrap>h1").css("color", "red");
// $("#inner-wrap").children("h1").css("color", "red");
// $("#wrap").children().css("border", "1px solid #f0f");

// $("#innner-wrap > h1").css("color", "red").css("border", "1px solid blue");
// // $("#innner-wrap > h1").css("color", "red").css({ color: red });

// $("#target").prev().css("color", "red");
// $("#target").next().css("color", "grean");
// $("#target + li").css("color", "purple");

// $("#target").prevAll().css("color", "red");
// $("#target").nextAll().css("color", "blue");

// $("#target").siblings().css("color", "red");

// $("#target").prevUntil(".content1").css("color", "red");
// $("#target").nextUntil(".content4").css("color", "blue");

// $("#target").parents("#inner-wrap").css("border", "1px solid red");

$("#target").closest("ul").css("border", "1px solid red");
