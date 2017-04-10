<!DOCTYPE html>
<head>
<title>Php Lab 05 Tutorial</title>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="stylesheet/style.css">
<script src="js/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="js/jsfile.js"></script>
</head>
<body>
  <div class="mainShow">
  <div class="iform" id="divform">
    <form id="inputform" action="province.php" method="post">
      <label for="fname">ชื่อจริง</label>
      <input type="text" id="fname" name="firstname">
      <label for="lname">นามสกุล</label>
      <input type="text" id="lname" name="lastname">
      <label for="lname">เพศ</label>
      <input type="radio" name="gender" id="gmale" value="male"> ชาย
      <input type="radio" name="gender" id="gfemale" value="female"> หญิง
      <label for="lname">วันเกิด</label>
      <input type="date" id="bday" name="birthday" placeholder="dd-mm-yyyy">
      <label for="country">จังหวัด</label>
      <select id="province" name="province" onchange="setTextField(this)"></select>
      <div class="formbtn">
        <input type="button" id='submitBtn' value="ยืนยัน" >
        <input type="button" id='cancelBtn' value="ยกเลิก" >
        <input id="province_text" type = "hidden" name = "province_text" value = "จันทบุรี" />
      </div>
    </form>
  </div>
</body>
</html>
