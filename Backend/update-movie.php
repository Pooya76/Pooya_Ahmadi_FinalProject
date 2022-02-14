<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
if (
    (isset($data->title)
    && isset($data->year)
	&& isset($data->description)
    && isset($data->poster)
    && !empty(trim($data->title))
    && !empty(trim($data->year))
	&& !empty(trim($data->description))
    && !empty(trim($data->poster)))
) {
    $title = mysqli_real_escape_string($db, trim($data->title));
    $year = mysqli_real_escape_string($db, trim($data->year));
	$description = mysqli_real_escape_string($db, trim($data->description));
    $poster = mysqli_real_escape_string($db, trim($data->poster));
    $updateMovie = mysqli_query($db, "UPDATE `test` SET `title`='$title', `year`='$year', `description`='$description', `poster`='$poster' WHERE `id`='$data->id'");
    if ($updateMovie) {
        echo json_encode(["success" => 1]);
    }
    
}