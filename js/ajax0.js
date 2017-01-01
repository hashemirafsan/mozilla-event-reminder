
$(document).ready(function(){
$.ajax({
    type:"GET",
    url: 'https://reps.mozilla.org/api/v1/event/?country=bangladesh&limit=0&offset=331',                  //the script to call to get data
    data: "",                        //you can insert url argumnets here to pass to api.php
    crossDomain:true,
    async:true,               //for example "id=5&parent=6"
    dataType: 'jsonp'               //data format
  }).done(function(data){
    var event = data.objects;
    for(var i = 0 ; i < event.length ; i++){
      var name  = event[i].name;
      $(".demo").append(name);
    }
  }).fail(function(data){
    console.log(data);
    $(".box").hide();
    $("#demo").html(data).show();
  });
});
