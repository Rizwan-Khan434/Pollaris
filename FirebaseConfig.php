<?php
$FirebaseConfig = array(
    'apiKey' => 'AIzaSyDGUnRul8V9HQjbjHqeve6To2np6puXtWE',
    'authDomain' => 'pollaris-fa5dc.firebaseapp.com',
    'databaseURL' => 'https://pollaris-fa5dc-default-rtdb.firebaseio.com',
    'projectId' => 'pollaris-fa5dc',
    'storageBucket' => 'pollaris-fa5dc.appspot.com',
    'messagingSenderId' => '826719629611',
    'appId' => '1:826719629611:web:369cf60056d2e4ffd2556e',
    'measurementId' => 'G-91R1GDZF6L'
);

header('Content-Type: application/json');
echo json_encode($FirebaseConfig);
?>
