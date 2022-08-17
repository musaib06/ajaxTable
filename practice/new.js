
$('#clickme').on("click",  function () {        
  var value = $(this).attr('id').split('_')[1];
  var skip = value == 1 ? 0 : (value * pageSize) - pageSize;
  // get only data required page no and page size
  $.ajax({
  url: "http://renosoftwares.com:71/api/ClientEmployeeUsers",
  dataType: "json", 
  data:{ skip: skip, take:10 }, 
   success: function(data) {
  var total = result.length;
  if (total > pageSize) {
    var pageTotal = Math.ceil(total / pageSize);
    var result;
    for (var i = 0; i < pageTotal; i++) {
      result= i + 1;
        row = $(
          "<tr><td>" +
            data[i].id+
            "</td><td>" +
            data[i].address1 +
            "</td><td>" +
            data[i].firstName +
            "</td><td>" +
            data[i].lastName +
            "</td><td>" +
            data[i].designation +
            "</td><td>" +
            data[i].JkBank+
            '</td><td> <a href="#" style="font-size:20px; margin-left:12px;color:green;"> link </a> </td><td><a href="abc"><i class="fa fa-info" href="abc.html" style="font-size:24px; margin-left:12px;color:green;"> </i> </a></td></tr>'
        );
        $("#tableData").append(row);
      }
        // $("#example").DataTable();
      
      }
    },
  })
})
