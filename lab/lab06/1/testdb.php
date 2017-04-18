<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>1</title>
  <?php
$servername = "localhost";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=webtech", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
?>
</head>
<body>
  <div class="formi">
    <form class="" action="submit.php" method="post">
      <label>Customer ID : </label><br>
      <input type="text" name="cID" value=""><br>
      <label>Citizen ID : </label><br>
      <input type="text" name="czID" value=""><br>
      <label>First Name : </label><br>
      <input type="text" name="fname" value=""><br>
      <label>Last Name : </label><br>
      <input type="text" name="lname" value=""><br>
      <input type="submit" name="sk" value="Submit">
    </form>
  </div>
</body>
</html>
