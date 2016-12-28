
$(document).ready(function(){
$.ajax({
    type:"GET",
    url: 'http://test.partyherenow.com/',                  //the script to call to get data
    data: "",                        //you can insert url argumnets here to pass to api.php
    crossDomain:true,
    async:true,                       //for example "id=5&parent=6"
    dataType: 'json'               //data format
  }).done(function(data){
    if((data instanceof Array) == true) {
      for(var i = 0 ; i < 4 ; i++){
        var a = data[i][1];
        var b = data[i][2];
        var c = data[i][3];
        var d = data[i][4];
        $("#cd-timeline").append("<div class='cd-timeline-block'>	<div class='cd-timeline-img cd-picture'><img src='img/cd-icon-picture.svg' alt='Picture'></div><div class='cd-timeline-content'><h2>"+a+"</h2><p>"+b+"</p><span class='cd-date'>"+d+"</span><span><p class='posted'> Posted by : "+c+"</p></span></div></div>");
      }
    }else{
      $(".error").append(data);
    }

  }).fail(function(data){
    console.log(data);
    $(".box").hide();
    $("#demo").html(data).show();
  });
});
