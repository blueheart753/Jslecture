$.ajax({
  url: "/database",
  dataType: "json",
  success: function (data) {
    // data로부터 id,first_name,last_name,email 요소를 받아와서
    // <table></table> 요소 안에 각각 <tr></tr> 안에 데이터로 넣어주세요
    tableElement = $("<table/>");
    if (data.length > 0) {
      for (let i in data) {
        $(tableElement).append(
          $(`
            <tr>
              <td>${data[i].id}</td>
              <td>${data[i].first_name}</td>
              <td>${data[i].last_name}</td>
              <td>${data[i].email}</td>
            </tr>
          `)
        );
        // console.log(data[i]);
      }
    }
    $(".wrap").append(tableElement);
  },
  error: function () {
    alert("DB Json로드를 실패했습니다.");
  },
}).done();
