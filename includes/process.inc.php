<?php

require_once 'dbh.inc.php';

if (isset($_POST['name']) && isset($_POST['sex']) && isset($_POST['hobby'])) {
    $name = mysqli_real_escape_string($conn, trim($_POST['name']));
    $sex = mysqli_real_escape_string($conn, trim($_POST['sex']));
    $hobby = mysqli_real_escape_string($conn, trim($_POST['hobby']));

    if (empty($name) || empty($sex) || empty($hobby)) {
        echo "Fill all forms";
    } else {

        $query = "INSERT INTO users(name, sex, hobby) VALUES ('$name', '$sex', '$hobby')";

        if (mysqli_query($conn, $query)) {
            echo "User Added";
        } else {
            echo "Error:" . mysqli_error($conn);
        }
    }
} else {

    echo "<p class='bg-gray-200 text-red-500 text-center'>There was an Error</p>";
}
