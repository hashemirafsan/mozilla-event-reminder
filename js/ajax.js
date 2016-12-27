/*$(document).ready(function(){
  $.ajax({
    type:"GET",
    url: "http://localhost/addon/index.php",
    dataType: 'html',
    data: ""
  }).done(function(response) {
    alert(response);
  }).fail(function(data) {
    $("#demo").html(data);
    alert(data);
    console.log(data);
  });
});
*/
$(document).ready(function(){
$.ajax({
    type:"GET",
    url: 'http://localhost/addon/index.php',                  //the script to call to get data
    data: "",                        //you can insert url argumnets here to pass to api.php
    crossDomain:true,
    async:true,                       //for example "id=5&parent=6"
    dataType: 'json'               //data format
  }).done(function(data){
    var a = data[2];
    $("#demo").html(a);
  }).fail(function(data){
    console.log(data);
    $(".box").hide();
    $("#demo").html(data).show();
  });
});
