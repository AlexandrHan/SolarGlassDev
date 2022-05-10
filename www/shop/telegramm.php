<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
//$email = $_POST['user_email'];
$token = "1717707279:AAHyz0tsU7ML6HAk856qOSXho5258BEER5A";
$chat_id = "-1001203978354";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  //'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot1717707279:AAHyz0tsU7ML6HAk856qOSXho5258BEER5A/sendMessage?chat_id=-1001203978354&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>