<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "car_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id = $_POST['id'];
$brand = $_POST['brand'];
$type = $_POST['type'];
$price = $_POST['price'];

if ($id) {
    $sql = "UPDATE cars SET brand='$brand', type='$type', price='$price' WHERE id=$id";
} else {
    $sql = "INSERT INTO cars (brand, type, price) VALUES ('$brand', '$type', '$price')";
}

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
