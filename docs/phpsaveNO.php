<?php

$firstName = isset($_POST['firstName']) ? $_POST['firstName'] : null;
$lastName = isset($_POST['lastName']) ? $_POST['lastName'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;

$fp = fopen('lista_noasistentes.csv', 'a');

$campos = array($firstName, $lastName, $email);
fseek($fp, 0, SEEK_END);
fputcsv($fp, $campos,';', '"');

fclose($fp);

?>

