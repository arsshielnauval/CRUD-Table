<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "car_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM cars";
$result = $conn->query($sql);

$output = '';
while($row = $result->fetch_assoc()) {
    $output .= '<tr>
                    <td>'.$row['id'].'</td>
                    <td>'.$row['brand'].'</td>
                    <td>'.$row['type'].'</td>
                    <td>'.$row['price'].'</td>
                    <td>
                        <button class="editBtn" data-id="'.$row['id'].'">Edit</button>
                        <button class="deleteBtn" data-id="'.$row['id'].'">Delete</button>
                    </td>
                </tr>';
}

echo $output;

$conn->close();
?>
