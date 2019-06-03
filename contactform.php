<?php
//include_once('index.php');

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "l.kezevicius@gmail.com";
    $headers = "From: ".$email;
    $txt = "You have received an e-mail from ".$email.".\n\n".$message;

    mail($mailTo, "By contact form", $txt, $headers);
    header("Location: index.html");
}