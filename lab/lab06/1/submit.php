<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <?php
$servername = "localhost";
$username = "pongparit";
$password = "P@ssw0rd";
$dbname = "webtech";
$cid = $_POST["cID"];
$czid = $_POST["czID"];
$fname = $_POST["fname"];
$lname = $_POST["lname"];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO customers (customerID, citizenID, firstname, lastname)
    VALUES ('$cid', '$czid', '$fname',' $lname')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }

$conn = null;
?>

</body>
</html>
