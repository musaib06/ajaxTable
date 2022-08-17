$(document).ready(function() {
  
  $("#select").change(function(){
    var display=$("#select option:selected").text();
    $("#selectedOption").placeholder=$("#selectedOption").val("Search By"+display)
  })
$.ajax({
  url: "data.json",

  
  dataType: "json",
  success: function (data) {
    for (var i = 0; i < data.length; i++) {
      var row = $(
        '<tr><td>' +
          data[i].Offense_Time +
          '</td><td>' +
          data[i].Licence_no +
          "</td><td>" +
          data[i].Owner +
          '</td><td>' +
          data[i].Name +
          '</td><td>' +
          data[i].Speed +
          '</td><td>' +
          data[i].Location +
          '</td><td> <a href="#" style="font-size:20px; margin-left:12px;color:green;"> link </a> </td><td><a href="abc"><i class="fa fa-info" href="abc.html" style="font-size:24px; margin-left:12px;color:green;"> </i> </a></td></tr>'
      );
      $("#tableData").append(row);
    

    }
    $("#example").DataTable();
  },
});

});
