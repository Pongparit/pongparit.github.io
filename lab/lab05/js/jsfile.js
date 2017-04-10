var stringData = $.ajax({
                    url: "77_Province/allProvince.txt",
                    async: false
                 }).responseText;
var stringArray = stringData.split(".txt");

//set loading screen
$body = $("body");
$(document).on({
  ajaxStart: function() { $body.addClass("loading");    },
   ajaxStop: function() { $body.removeClass("loading"); }
});

//when site load
$(document).ready(function(){

  //show fadein form
  $(".mainShow").animate({ opacity: 1}, 'slow',
    function() {
        $(".iform").animate({ opacity: 1, top: "-10px" }, 'slow');
    });

  //set province option
  $.each(stringArray, function(key, value) {
       $('#province')
           .append($("<option></option>")
                      .attr("value",key)
                      .text(value));
  });
  $("#province option[value='77']").remove();

  $("#submitBtn").click(function() {
    console.log(document.getElementById("bday").value);
    console.log(document.getElementById("fname").value);
    console.log(document.getElementById("gender"));
    if (validateForm()) {
    $(".iform").animate({ opacity: 0, top: "10px" }, 'slow',
                 function() {
                   $(".mainShow").animate({ opacity: 0}, 'slow',
                     function() {
        document.getElementById('inputform').submit();
    });
});
}
else {
  alert("กรุณากรอกให้ครบทุกช่องก่อนกดยืนยัน");
}
});

  $("#cancelBtn").click(function(){
      $('#inputform')[0].reset();
  });
});

function compareTime(time1,time2) {
    var year =Number(time2.getFullYear())-13;
    var month =Number(time2.getMonth())+1;
    var day =Number(time2.getDate())+1;
      return new Date(time1) < new Date(year+"-"+month+"-"+day);
  }

function setTextField(t) {
       document.getElementById('province_text').value = t.options[t.selectedIndex].text;
   }

function validateForm() {
     return (typeof $('input[name="gender"]:checked').val() != 'undefined'
             && document.getElementById("bday").value != ''
             && document.getElementById("fname").value != ''
             && document.getElementById("lname").value != '')
   }
