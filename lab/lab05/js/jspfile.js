ndate = new Date();
var mottoPath;
var imgPath;
var data;

function compareTime(time1) {
    var year =Number(ndate.getFullYear())-13;
    var month =Number(ndate.getMonth())+1;
    var day =Number(ndate.getDate())+1;
      return new Date(time1) < new Date(year+"-"+month+"-"+day);
  }

  function setProvincePath(province,id) {
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

$(document).ready(function(){
  var gender = document.getElementById("gender").value;
  var bday = document.getElementById("bday").value;
  var pv = document.getElementById("pv").value;
  var pvt = document.getElementById("pvt").value;
  var cTime = compareTime(bday,ndate);
  showData(pv, pvt, cTime, gender);

  $("#backBtn").click(function(){
        $(".showUser").animate({ opacity: 0, top: "10px"}, 'slow',
              function() {
                  $(".mainShow").animate({ opacity: 0}, 'slow',
                      function() {
                          history.back();
                        });
                      });
              });
    });

function showData(province, pID, o13, gender) {
  //select stylesheet
  if (o13) {
    if (gender == "male") {
        $("div.mainShow").css('background-image', 'url(' + "images/bgmale.jpg" + ')');
        $("div.showUser").css({"font-family": "Mitr",
        "width":" 50%",
        "position": "absolute",
        "margin":  '3% auto',
        "margin-left": '23%',
        'border-radius': '5px',
        "background-color": "rgba(242,242,242,0.7)",
        "padding": "20px",
        "display": "block",
        "opacity": "0" ,
        "box-shadow": "1px 2px 10px #000000",
        "text-align": "center"
       });
        $("input[type=button]").css({"font-family": "Mitr", "background-color": "#253E81"});
        $("input[type=button]").hover(function(e) {
               $(this).css("background-color",e.type === "mouseenter"?"#4368CD":"#253E81")
            });
    }
    else if (gender == "female") {
      $("div.mainShow").css('background-image', 'url(' + "images/bgfemale.jpg" + ')');
      $("div.showUser").css({"font-family": "Mitr", "color": "#FFCDF9",
                             "-webkit-text-stroke": "1px #000000",
                             "background-color": "rgba(242,242,242, 0.9)",
                             "width":" 50%",
                             "position": "absolute",
                             "margin":  '3% auto',
                             "margin-left": '23%',
                             'border-radius': '5px',
                             "background-color": "rgba(242,242,242,0.7)",
                             "padding": "20px",
                             "display": "block",
                             "opacity": "0" ,
                             "box-shadow": "1px 2px 10px #000000",
                             "text-align": "center"
                               });
      $("input[type=button]").css({"font-family": "Mitr", "background-color": "#FF7BED","-webkit-text-stroke": 0});
      $("input[type=button]").hover(function(e) {
             $(this).css("background-color",e.type === "mouseenter"?"#FFCDF9":"#FF7BED")
          });
    }
  }
  else {
    $("div.mainShow").css('background-image', 'url(' + "images/bgkid.jpg" + ')');
    $("div.showUser").css({"font-family": "Itim" ,"background-color": "rgba(242,242,242, 0.9)",
    "width":" 50%",
    "position": "absolute",
    "margin":  '3% auto',
    "margin-left": '23%',
    'border-radius': '5px',
    "background-color": "rgba(242,242,242,0.7)",
    "padding": "20px",
    "display": "block",
    "opacity": "0" ,
    "box-shadow": "1px 2px 10px #000000",
    "text-align": "center"
  });
    $("input[type=button]").css({"font-family": "Itim", "background-color": "#4263BF"});
    $("input[type=button]").hover(function(e) {
           $(this).css("background-color",e.type === "mouseenter"?"#8196CE":"#4263BF")
        });
  }
  setProvincePath(pID,province);
  //show main div

  //load motto
  $("#mottoP").load(mottoPath);

  //load sign
  $('#signP').attr('src', imgPath);
  $("div.mainShow").animate({ opacity: 1}, 'slow',
    function() {
        $("div.showUser").animate({ opacity: 1, top: "-10px" }, 'slow');
    });
}
