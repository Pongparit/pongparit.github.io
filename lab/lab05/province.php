<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="js/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="js/jspfile.js"></script>
    <link rel="stylesheet" type="text/css" href="stylesheet/mstyle.css">
    <title>Result of PHP Lab05 Tutorial</title>
  </head>
  <body>
    <?php $fname = $_POST["firstname"];
          $lname = $_POST["lastname"];
          $gender = $_POST["gender"];
          $bday = $_POST["birthday"];
          $pv = $_POST["province"];
          $pvt = $_POST["province_text"];?>
          <input id="gender" type = "hidden" name = "gender" value = "<?php echo $gender; ?>" />
          <input id="bday" type = "hidden" name = "bday" value = "<?php echo $bday; ?>" />
          <input id="pv" type = "hidden" name = "pv" value = "<?php echo $pv; ?>" />
          <input id="pvt" type = "hidden" name = "pvt" value = "<?php echo $pvt; ?>" />
    <div class="mainShow">
    <div class="waitpic"></div>
    <div class="showUser"><p id ="greeting"> สวัสดีคุณ <?php echo $fname; ?> </p>
      <p id="pname"><?php echo $pvt; ?></p>
      <img src="" id="signP"><p id="mottoP"></p>
      <input type="button" id='backBtn' value="ย้อนกลับ" ></div></div>
  </body>
</html>
