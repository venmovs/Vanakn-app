<?php

$username = $_POST['username'];
$userData = $_POST['userData'];
$comment = $_POST['comment'];
/*$file = $_POST['file'];*/

$fullMessage = "username - " . $username . "\n userData - ".$userData." \n comment - ".$comment;
mail("vigen94@icloud.com", "Vanakm.com - new message", $fullMessage);