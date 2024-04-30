<?php
// Include the PHPMailer Autoload file
require '/home/smarscym/pollaris.me/Scripts/PHPMailerTest/PHPMailer/src/PHPMailer.php';
require '/home/smarscym/pollaris.me/Scripts/PHPMailerTest/PHPMailer/src/SMTP.php';

// Check if the email and data are set in the request
if(isset($_POST['email']) && isset($_POST['data'])) {
    // Retrieve email and data from the POST request
    $email = $_POST['email'];
    $jsonData = $_POST['data'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer\PHPMailer\PHPMailer();

    // Set the SMTP server details
    $mail->isSMTP();
    $mail->Host = 'pollaris.me';
    $mail->SMTPAuth = true;
    $mail->Username = 'admin@pollaris.me';
    $mail->Password = 'Scotts191Polling';
    $mail->SMTPSecure = 'ssl'; // Enable TLS/SSL encryption
    $mail->Port = 465; // Set the SMTP port (465 for SSL)

    // Set the sender and recipient email addresses
    $mail->setFrom('admin@pollaris.me', 'Pollaris Admin');
    $mail->addAddress($email);

    // Set email subject and body
    $mail->Subject = 'Quiz Report';
    $mail->Body = 'Quiz report data: ' . $jsonData;

    // Attempt to send the email
    if ($mail->send()) {
        echo 'Email has been sent successfully!';
    } else {
        echo 'Error: ' . $mail->ErrorInfo;
    }
} else {
    // If email or data is not set in the request, return an error message
    echo 'Error: Email or data is missing in the request!';
}
?>
