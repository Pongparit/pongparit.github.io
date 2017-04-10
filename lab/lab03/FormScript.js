var theform = "";
var error = "blank field";
var zSignMap = {
  "Aquarius": "pic/zodiac-sign/aquarius-sign.svg",
  "Pisces": "pic/zodiac-sign/pisces-sign.svg",
  "Aries": "pic/zodiac-sign/aries-sign.svg",
  "Taurus": "pic/zodiac-sign/taurus-sign.svg",
  "Gemini": "pic/zodiac-sign/gemini-sign.svg",
  "Cancer": "pic/zodiac-sign/cancer-sign.svg",
  "Leo": "pic/zodiac-sign/leo-sign.svg",
  "Virgo": "pic/zodiac-sign/virgo-sign.svg",
  "Libra": "pic/zodiac-sign/libra-sign.svg",
  "Scorpio": "pic/zodiac-sign/scorpion-sign.svg",
  "Sagittarius": "pic/zodiac-sign/sagittarius-sign.svg",
  "Capricorn": "pic/zodiac-sign/capricorn-sign.svg"
}

var zYearMap = {
  "Rat": "pic/zodiac-year/Rat.svg",
  "Ox": "pic/zodiac-year/Ox.svg",
  "Tiger": "pic/zodiac-year/Tiger.svg",
  "Rabbit": "pic/zodiac-year/Rabbit.svg",
  "Dragon": "pic/zodiac-year/Dragon.svg",
  "Snake": "pic/zodiac-year/Snake.svg",
  "Horse": "pic/zodiac-year/Horse.svg",
  "Goat": "pic/zodiac-year/Goat.svg",
  "Monkey": "pic/zodiac-year/Monkey.svg",
  "Rooster": "pic/zodiac-year/Rooster.svg",
  "Dog": "pic/zodiac-year/Dog.svg",
  "Pig": "pic/zodiac-year/Pig.svg"
}

function isAlphabet(str,type) {
    if (isNaN(str)) {
      error = type;
      return false
    }
    else {
      return true
    }
}

function isAlphabet(str,type) {
    if (isNaN(str)) {
      return true
    }
    else {
      error = type;
      return false
    }
}

function isPhone(str,type) {
    if (str.length == 6) {
      return true
    }
    else {
      error = type;
      return false
    }
}

function isCellPhone(str,type) {
    if (str.length == 9) {
      return true
    }
    else {
      error = type;
      return false
    }
}

function isHouseNumber(str,type) {
  if (/^[0-9/]+$/.test(str)) {
    return true
  }
  else {
    error = type;
    return false
  }
}

function isZipcode(str,type) {
    if (str.length == 5) {
      return true
    }
    else {
      error = type;
      return false
    }
}

function isID(id,type) {
  if(id.length != 13) {
    error = type;
    return false;
  }
  for(i=0, sum=0; i < 12; i++)
      sum += parseFloat(id.charAt(i))*(13-i);
  if((11-sum%11)%10!=parseFloat(id.charAt(12))){
    error = type;
    return false;
  }
  return true;
}

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  var d = date.split("-");

  return d[2] + ' ' + monthNames[parseInt(d[1]-1)] + ' ' + d[0];
}

function ZodiacSign(name) {
  if (name == "") {
    document.getElementById('zSignPic').style.display = "none";
  }
  else {
  document.getElementById('zSignPic').style.display = "block";
  document.getElementById('zSignPic').src = zSignMap[name];
  }
}

function ZodiacYear(name) {
  if (name == "") {
    document.getElementById('zYearPic').style.display = "none";
  }
  else {
  document.getElementById('zYearPic').style.display = "block";
  document.getElementById('zYearPic').src = zYearMap[name];
  }
}

function setCookie(name,value) {
    document.cookie = name + "=" + value ;
}

function retrieveCookie() {
  theform = document.cookie;
}

function recoverForms() {
  var theformlist = theform.split("&");
  document.forms.theForms.firstname.value = theformlist[0].slice(19);
  document.forms.theForms.lastname.value = theformlist[1];
  document.forms.theForms.HouseNumber.value = theformlist[2];
  document.forms.theForms.Street.value = theformlist[3];
  document.forms.theForms.City.value = theformlist[4];
  document.forms.theForms.Province.value = theformlist[5];
  document.forms.theForms.Zipcode.value = theformlist[6];
  document.forms.theForms.Phone.value = theformlist[7];
  document.forms.theForms.Cellphone.value = theformlist[8];
  document.forms.theForms.cID.value = theformlist[9];
  document.forms.theForms.dOB.value = theformlist[10];
  document.forms.theForms.dDOB.value = theformlist[11];
  document.forms.theForms.zSign.value = theformlist[12];
  document.forms.theForms.zYear.value = theformlist[13];
  ZodiacYear(theformlist[13]);
  ZodiacSign(theformlist[12]);
}

function CancelButton() {
   var form = document.forms.theForms;
   form.reset();
   ZodiacYear("");
   ZodiacSign("");
}

function formToString() {
	theform =  document.forms.theForms.firstname.value + "&" + document.forms.theForms.lastname.value
				   + "&" + document.forms.theForms.HouseNumber.value + "&" + document.forms.theForms.Street.value
				   + "&" + document.forms.theForms.City.value + "&" + document.forms.theForms.Province.value
				   + "&" + document.forms.theForms.Zipcode.value + "&" + document.forms.theForms.Phone.value
				   + "&" + document.forms.theForms.Cellphone.value + "&" + document.forms.theForms.cID.value
				   + "&" + document.forms.theForms.dOB.value + "&" + document.forms.theForms.dDOB.value
				   + "&" + document.forms.theForms.zSign.value + "&" + document.forms.theForms.zYear.value;
}

function SaveButton() {
  formToString();
 	setCookie('myCookie5610404495',theform);
}

function clearButton() {
 	delete_cookie('SmyCookie5610404495');
}

function SummitBuutton() {
  if (isAlphabet(document.forms.theForms.firstname.value,"First Name") && isAlphabet(document.forms.theForms.lastname.value,"Last Name") && isHouseNumber(document.forms.theForms.HouseNumber.value,"House Number")
      && isZipcode(document.forms.theForms.Zipcode.value,"Zipcode") && isPhone(document.forms.theForms.Phone.value,"Phone Number")
      && isCellPhone(document.forms.theForms.Cellphone.value,"Cell Phone Number") && isID(document.forms.theForms.cID.value,"Citizenship Number")
      && document.forms.theForms.Street.value.length>0 && document.forms.theForms.HouseNumber.value.length>0
      && document.forms.theForms.City.value.length>0 && document.forms.theForms.Province.value.length>0
      && document.forms.theForms.dOB.value.length>0 && document.forms.theForms.dDOB.value.length>0
      && document.forms.theForms.zSign.value.length>0 && document.forms.theForms.zYear.value.length>0)
       {
  formToString();
 	setCookie('s5610404495',theform);
  alert('Data has been created to Cookie that looks like \"' + document.cookie +'\"');
  location.reload()
  }
  else {
    alert('Please check your \"' + error + '\" is invalid.')
  }
}

function loadForm() {
  if (document.cookie.indexOf("myCookie5610404495") >= 0) {
    retrieveCookie();
  	recoverForms();
    document.getElementById("summittable").style.display = "none";
  }
  else if (document.cookie.indexOf("s5610404495") >= 0) {
    document.forms.theForms.style.display = "none" ;
    retrieveCookie();
    createTable();
    document.getElementById("backBtn").style.visibility = "visible";
  }
  else {
    document.getElementById("summittable").style.display = "none";
    ZodiacYear("");
    ZodiacSign("");

  }
  delete_cookie("myCookie5610404495");
}

function clearTable() {
  delete_cookie("s5610404495");
  location.reload()
}

function createTable() {
  var theformlist = theform.split("&");
  document.getElementById("ntext").innerHTML = theformlist[0].slice(12) + " " + theformlist[1];
  document.getElementById("atext").innerHTML = theformlist[2] + " " + theformlist[3] + " " + theformlist[4]
  + " " + theformlist[5] + " " + theformlist[6];
  document.getElementById("pntext").innerHTML = "+662-" + theformlist[7].slice(0,3) + "-" + theformlist[7].slice(3);
  document.getElementById("cpntext").innerHTML = "+66" + theformlist[8].slice(0,2) + "-" + theformlist[8].slice(2,5) + "-" + theformlist[8].slice(5);
  document.getElementById("cntext").innerHTML = theformlist[9].slice(0,1) + "-"
  + theformlist[9].slice(1,5) + "-" + theformlist[9].slice(5,10) + theformlist[9].slice(10,12)
  + "-" + theformlist[9].slice(12);
  document.getElementById("btext").innerHTML = formatDate(theformlist[10]);
  document.getElementById("bdtext").innerHTML = theformlist[11]
  document.getElementById("zstext").innerHTML = theformlist[12]
  document.getElementById("zytext").innerHTML = theformlist[13]
}

function delete_cookie(name) {
  document.cookie = name +'=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
