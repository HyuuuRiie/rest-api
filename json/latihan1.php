<?php

//     $mahasiswa = [
//     [
//         "nama" => "Udin",
//         "nrp" => "12131",
//         "email" => "udin.ac.id"
//     ],
//     [
//         "nama" => "ok",
//         "nrp" => "12131",
//         "email" => "udin.ac.id"
//     ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=db_pegawai', 'root', '');
$db = $dbh->prepare('SELECT * FROM user');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

    $data = json_encode($mahasiswa);
    echo $data;
?>