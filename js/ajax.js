
$(document).ready(function(){
  $(window).load(function() {
		$(".se-pre-con").fadeOut("slow");;
	});
  function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
  }
  $.ajax({
    type:"GET",
    url:"https://ipinfo.io",
    crossDomain:true,
    async:true,
    dataType: "JSON",
    data : "",
    contentType: 'application/json',
    mimeType : 'application/json'
  }).done(function(ipConfig){
    var country = ipConfig.country;
    $.ajax({
        type:"GET",
        url:"../package/CountryDetails.json",
        crossDomain:true,
        async:true,
        dataType: "JSON",
        data : "",
        contentType: 'application/json',
        mimeType : 'application/json'
      }).done(function(res){
        var shortName = country;
        for(var i = 0; i < res.countries.length; i++){

          if(shortName === res.countries[i].short){
            var countryName = res.countries[i].fullname;
            var limit = res.countries[i].limit;
            var offset = res.countries[i].offset;

            if(typeof limit === "number" && typeof offset === "number"){
              $.ajax({
                  type:"GET",
                  url: "https://reps.mozilla.org/api/v1/event/?country="+countryName+"&limit="+limit+"&offset="+offset+"",                  //the script to call to get data
                  data: "",                        //you can insert url argumnets here to pass to api.php
                  crossDomain:true,
                  async:true,                       //for example "id=5&parent=6"
                  dataType: 'json'               //data format
                }).done(function(data){
                  if((data instanceof Object) == true) {
                    var i = 0;
                    var event = data.objects;
                    var count = 0;
                    for(i = 0 ; i < event.length ; i++){
                      var start1  = event[i].start;
                      var start2  = new Date(event[i].start);
                      var upcoming = start2.getTime();
                      var toDay = new Date();
                      if(upcoming >= toDay.getTime()){

                        $("#cd-timeline").append("<div class='cd-timeline-block'>	<div class='cd-timeline-img cd-picture'><img src='img/cd-icon-location.svg' alt='Picture'></div><div class='cd-timeline-content'><h2>"+event[i].name+"</h2><p>"+event[i].description+"</p><span class='cd-date'>"+start2+"</span><span></span> Venue : "+event[i].venue+" , "+event[i].region+"<span><p class='posted'> Owner name : "+event[i].owner_name+"</p></a></span></div></div>");
                        count++;
                      }
                    }
                      $("title").html("Mozilla Event - "+ capitalize(countryName));
                      $("#titleName").html("Mozilla Event's "+capitalize(countryName));
                    $(".total_event").html("#Total event found : "+ count);
                  }else{
                    $(".error").append("No data have found");
                  }
              });
            } else {
              $(".error").append("Add-ons under in construction"+"<br>"+"Need your contribution");
            }
          }
        }
    });
  });
});
