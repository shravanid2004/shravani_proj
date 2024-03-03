<?php


$file = 'expenditure.json';


$postData = file_get_contents("php://input");


$existingData = file_get_contents($file);


$decodedData = json_decode($existingData, true);


$newData = json_decode($postData, true);
$decodedData[] = $newData;


$encodedData = json_encode($decodedData, JSON_PRETTY_PRINT);

file_put_contents($file, $encodedData);
?>
