<?php

$recepient = "solarglass.ua@gmail.com"; /* почта получателя */
$sitename = "SolarGlass.com.ua"; /* сайт с которого пришло письмо */

$name = trim($_POST["user_name"]);
$phone = trim($_POST["user_phone"]);

$pagetitle = "Заявка с формы обратного звонка на сайте \"$sitename\"";
$message = "Имя: $user_name \nТелефон: $user_phone";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");



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
  header('Location: thank-you-page.php');
} else {
  echo "Error";
}