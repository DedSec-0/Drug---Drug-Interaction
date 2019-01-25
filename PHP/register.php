<?php 

	include("connection.php");

	$FName = $_POST["FName"];
	$LName = $_POST["LName"];
	$Email = $_POST["Email"];
	$Country = $_POST["Country"];

	$query = "INSERT INTO `users` (`ID`, `FirstName`, `LastName`, `Email`, `Country`) VALUES (NULL, '$FName', '$LName', '$Email', '$Country')";

	if($conn->query($query) == TRUE){
		echo "Data Inserted";
	}
	else {
		echo "Error: " + $conn->error;
	}

 ?>