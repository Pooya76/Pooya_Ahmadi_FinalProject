<?php
header("Access-Control-Allow-Origin: *");


require 'db_connection.php';
$all_movies = mysqli_query($db, "SELECT * FROM `test`");
if (mysqli_num_rows($all_movies) > 0) {
    $all_movies = mysqli_fetch_all($all_movies, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "movies" => $all_movies]);
}