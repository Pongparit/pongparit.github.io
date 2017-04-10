<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>5610404495</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <script type="text/javascript" src="tableexport.js"></script>
  <script type="text/javascript" src="html2canvas.js"></script>
  <script type="text/javascript" src="jspdf/jspdf.js"></script>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
  <script type="text/javascript" src="jquery.base64.js"></script>
  <script type="text/javascript" src="jspdf/libs/sprintf.js"></script>
  <script type="text/javascript" src="jspdf/libs/base64.js"></script>
  <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

  <div class="container">
    <div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-8">
          <p class="text-center">Number 17</p>
<table id='tablenaja' class="table table-bordered table-hover" >
<thead><tr><th>Position</th><th>Max Salary</th></tr></thead>
  <?php

class TableRows extends RecursiveIteratorIterator {
    function __construct($it) {
        parent::__construct($it, self::LEAVES_ONLY);
    }

    function current() {
        return "<td >" . parent::current(). "</td>";
    }

    function beginChildren() {
        echo "<tbody><tr>";
    }

    function endChildren() {
        echo "</tr></tbody>" . "\n";
    }
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dreamhome";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("SELECT position, max(salary) FROM staff group by position");
    $stmt->execute();

    // set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
        echo $v;
    }
}
catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;
echo "</table>";
?>


  <div class="dropdown">
    <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Save As
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><a href="#" onclick="$('#tablenaja').tableExport({type:'json',escape:'false',tableName:'Lab07'});"> <img src="images/json.png" width="24px"> JSON</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><a href="#" onclick="$('#tablenaja').tableExport({type:'json',escape:'false',ignoreColumn:'[2,3]',tableName:'Lab07'});"> <img src="images/json.png" width="24px"> JSON (ignoreColumn)</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><a href="#" onclick="$('#tablenaja').tableExport({type:'json',escape:'true',tableName:'Lab07'});"> <img src="images/json.png" width="24px"> JSON (with Escape)</a></li>
      <li role="presentation" class="divider"></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><a href="#" onclick="$('#tablenaja').tableExport({type:'xml',escape:'false',tableName:'Lab07'});"> <img src="images/xml.jpg" width="24px"> XML</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><a href="#" onclick="$('#tablenaja').tableExport({type:'sql'});"> <img src="images/sql.png" width="24px"> SQL</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><a href="#" onclick="$('#tablenaja').tableExport({type:'csv',escape:'false'});"> <img src="images/csv.png" width="24px"> CSV</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><a href="#" onclick="$('#tablenaja').tableExport({type:'txt',escape:'false'});"> <img src="images/txt.png" width="24px"> TXT</a></li>
      <li role="presentation" class="divider"></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><a href="#" onclick="$('#tablenaja').tableExport({type:'excel',escape:'false',tableName:'Lab07'});" id="xlsbtn"> <img src="images/xls.png" width="24px"> XLS</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><a href="#" onclick="$('#tablenaja').tableExport({type:'doc',escape:'false',tableName:'Lab07'});" id="xlsbtn"> <img src="images/doc.png" width="24px"> Word</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><a href="#" onclick="$('#tablenaja').tableExport({type:'powerpoint',escape:'false',tableName:'Lab07'});"> <img src="images/ppt.png" width="24px"> PowerPoint</a></li>
      <li role="presentation" class="divider"></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><a href="#" onclick="$('#tablenaja').tableExport({type:'png',escape:'false',tableName:'Lab07'});"> <img src="images/png.png" width="24px"> PNG</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#"><a href="#" onclick="$('#tablenaja').tableExport({type:'pdf',pdfFontSize:'7',escape:'false',tableName:'Lab07'});"> <img src="images/pdf.png" width="24px"> PDF</a></li>
    </ul>
  </div>
  </div>
  <div class="col-sm-2"></div>
  </div>
  </div>
</head>
<body>

</body>
</html>
