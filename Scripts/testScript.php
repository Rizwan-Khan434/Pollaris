<?php
// Include the PHPMailer Autoload file
require '/home/smarscym/pollaris.me/Scripts/PHPMailerTest/PHPMailer/src/PHPMailer.php';
require '/home/smarscym/pollaris.me/Scripts/PHPMailerTest/PHPMailer/src/SMTP.php';

// Create a new PHPMailer instance
$mail = new PHPMailer\PHPMailer\PHPMailer();

// Set the SMTP server details
$mail->isSMTP();
$mail->Host = 'pollaris.me';
$mail->SMTPAuth = true;
$mail->Username = 'admin@pollaris.me';
$mail->Password = 'XXXXXXXXXXX';
$mail->SMTPSecure = 'ssl'; // Enable TLS/SSL encryption
$mail->Port = 465; // Set the SMTP port (465 for SSL)

// Set the sender and recipient email addresses
$mail->setFrom('admin@pollaris.me', 'Pollaris Admin');
$mail->addAddress('test@gmail.com', 'Test');

// Set email subject and body
$mail->Subject = 'Test Email Subject';
$mail->Body = 'This is a test email body.';

// Attempt to send the email
if ($mail->send()) {
    echo 'Email has been sent successfully!';
} else {
    echo 'Error: ' . $mail->ErrorInfo;
}
?>
