<?php
$db = mysqli_connect("localhost","root","");
mysqli_query($db, "CREATE DATABASE IF NOT EXISTS pooyaFinal");
mysqli_select_db($db,"pooyaFinal");


/* to create table for this project*/
/*	$sql = "CREATE TABLE test (
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	year date NOT NULL,
	description VARCHAR(1000),
	poster varchar(500)
	)";
	mysqli_query($db, $sql);
*/
