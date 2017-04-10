var stringData = $.ajax({
                    url: "77_Province/allProvince.txt",
                    async: false
                 }).responseText;
var stringArray = stringData.split(".txt");
var ndate = new Date();
var gender;
var mottoPath;
var imgPath;

//set loading screen
$body = $("body");
$(document).on({
  ajaxStart: function() { $body.addClass("loading");    },
   ajaxStop: function() { $body.removeClass("loading"); }
});

//when site load
$(document).ready(function(){
  //check cookie
  if (document.cookie.indexOf("myCookie5610404495") >= 0) {
    //split cookie
    var value = document.cookie.split("&");
    var v4 = (value[4] == 'true');
    showData(value[0].slice(19), value[1], value[2], value[3], v4, value[5]);
  }

  else {

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

  //submitbutton action
  $("#submit").click(function(){
    gender = $("input[name='gender']:checked").val();
    if (validateForm()) {
    // if (true) {
          $(".iform").animate({ opacity: 0, top: "10px" }, 'slow',
                function() { $(this).hide();
                  $(".mainShow").animate({ opacity: 0}, 'slow',
                    function() {
                      var fname = document.getElementById("fname").value;
                      var lname = document.getElementById("lname").value;
                      var province = document.getElementById("province").options[document.getElementById("province").value].text;
                      var pId = document.getElementById("province").value;
                      var cTime = compareTime(document.getElementById("bday").value,ndate);
                      var value = fname + "&" + lname + "&" + province + "&" +
                                  pId + "&" + cTime + "&" + gender;
                      setCookie("myCookie5610404495",value)
                      showData(fname, lname, province, pId, cTime, gender);
                    });
                  });
    }
    else {
    alert("กรุณากรอกให้ครบทุกช่องก่อนกดยืนยัน")
    }
  });
}

//back to first indexOf
$("#backBtn").click(function(){
    delete_cookie("myCookie5610404495");
    $(".showUser").animate({ opacity: 0, top: "10px"}, 'slow',
      function() {
        $(".mainShow").animate({ opacity: 0}, 'slow',
          function() {
    location.reload()});
  });
});

  //reset form
  $("#cancel").click(function(){
      $('#inputform')[0].reset();
  });
});

//function config
function compareTime(time1,time2) {
    var year =Number(time2.getFullYear())-13;
    var month =Number(time2.getMonth())+1;
    var day =Number(time2.getDate())+1;
      return new Date(time1) < new Date(year+"-"+month+"-"+day);
  }

function validateForm() {
  return (typeof gender != 'undefined'
          && typeof document.getElementById("bday").value != 'undefined'
          && typeof document.getElementById("fname").value != 'undefined'
          && typeof document.getElementById("lname").value != 'undefined')
}

function showData(name, lname, province, pID, o13, gender) {
  //select stylesheet
  $('link[href="stylesheet/style.css"]').attr('href','stylesheet/mStyle.css');
  if (o13) {
    if (gender == "male") {
        $("div.mainShow").css('background-image', 'url(' + "images/bgmale.jpg" + ')');
        $("div.showUser").css({"font-family": "Mitr",
                               "background-color": "rgba(242,242,242, 0.7)"
                                 });
        $("input[type=button]").css({"font-family": "Mitr", "background-color": "#253E81"});
        $("input[type=button]").hover(function(e) {
               $(this).css("background-color",e.type === "mouseenter"?"#4368CD":"#253E81")
            });
    }
    else if (gender == "female") {
      $("div.mainShow").css('background-image', 'url(' + "images/bgfemale.jpg" + ')');
      $("div.showUser").css({"font-family": "Mitr", "color": "#DDABD7",
                             "background-color": "rgba(242,242,242, 0.9)"
                               });
      $("input[type=button]").css({"font-family": "Mitr", "background-color": "#FF7BED","-webkit-text-stroke": 0});
      $("input[type=button]").hover(function(e) {
             $(this).css("background-color",e.type === "mouseenter"?"#FFCDF9":"#FF7BED")
          });
    }
  }
  else {
    $("div.mainShow").css('background-image', 'url(' + "images/bgkid.jpg" + ')');
    $("div.showUser").css({"font-family": "Itim" });
    $("input[type=button]").css({"font-family": "Itim", "background-color": "#4263BF"});
    $("input[type=button]").hover(function(e) {
           $(this).css("background-color",e.type === "mouseenter"?"#8196CE":"#4263BF")
        });
  }

  //show main div
  $(".mainShow").animate({ opacity: 1}, 'slow')

  //get greeting word
  $.ajax({
           url : "data/greeting.txt",
           dataType: "text",
           success : function (data) {
           var str = data.replace("name", name);
           document.getElementById("greeting").innerHTML = str;
           }
       });

  setProvincePath(pID,province);

  //input name of province
  document.getElementById("pname").innerHTML = province;

  //load motto
  $("#mottoP").load(mottoPath);

  //load sign
  $('#signP').attr('src', imgPath);
  $(".showUser").animate({ opacity: 1, top: "-10px" }, 'slow');
}

function setProvincePath(id,province) {
  //check east
  if (id <= 6) {
    mottoPath = "77_Province/motto/east/" + province + ".txt";
    imgPath   = "77_Province/sign/east/"  + province + ".png";
  }
  //check middle
  else if (id >=7 && id<=28 ) {
      mottoPath = "77_Province/motto/middle/" + province + ".txt";
      imgPath   = "77_Province/sign/middle/"  + province + ".png";
  }
  //north
  else if (id >=29 && id<=37) {
      mottoPath = "77_Province/motto/north/" + province + ".txt";
      imgPath   = "77_Province/sign/north/"  + province + ".png";
  }
  //check north east
  else if (id >=38 && id<=57) {
      mottoPath = "77_Province/motto/north-east/" + province + ".txt";
      imgPath   = "77_Province/sign/north-east/"  + province + ".png";
  }
  //south
  else if (id >=58 && id<=71) {
      mottoPath = "77_Province/motto/south/" + province + ".txt";
      imgPath   = "77_Province/sign/south/"  + province + ".png";
  }
  //check west
  else if (id >=72 ) {
      mottoPath = "77_Province/motto/west/" + province + ".txt";
      imgPath   = "77_Province/sign/west/"  + province + ".png";
  }
}

function setCookie(name,value) {
    document.cookie = name + "=" + value ;
}

function delete_cookie(name) {
  document.cookie = name +'=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
