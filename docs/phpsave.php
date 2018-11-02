<?php

$firstName = isset($_POST['firstName']) ? $_POST['firstName'] : null;
$lastName = isset($_POST['lastName']) ? $_POST['lastName'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$guestName = isset($_POST['myGuestName']) ? $_POST['myGuestName'] : null;
$song = isset($_POST['songDanceFloor']) ? $_POST['songDanceFloor'] : null;

$fp = fopen('lista_invitados.csv', 'a');

$campos = array($firstName, $lastName, $email, $guestName, $song);
fseek($fp, 0, SEEK_END);
fputcsv($fp, $campos,';', '"');

fclose($fp);

?>

