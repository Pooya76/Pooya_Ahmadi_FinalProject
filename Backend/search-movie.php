<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));
$searchKey = mysqli_real_escape_string($db, trim($data->searchKey));
$all_movies = mysqli_query($db, "SELECT * FROM `test` WHERE title LIKE '%$searchKey%' OR year LIKE '%$searchKey%'");
if (mysqli_num_rows($all_movies) > 0) {
    $all_movies = mysqli_fetch_all($all_movies, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "movies" => $all_movies]);
} else {
    echo json_encode(["success" => 0]);
}