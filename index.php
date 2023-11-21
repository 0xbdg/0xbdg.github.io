<?php
$to = "example@mail.com";
$subject = $_POST["subject"];
$txt = $_POST["message"];
$headers = "From: ".$_POST["email"] . "\r\n" .
"CC: ".$_POST["name"];

mail($to,$subject,$txt,$headers);
?>