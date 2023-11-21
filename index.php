<?php
$to = "example@mail.com";
$subject = $_POST["subject"];
$txt = $_POST["message"];
$headers = "Name: ". $_POST["name"] . "\r\n". "From: ".$_POST["email"] . "\r\n";

mail($to,$subject,$txt,$headers);
?>