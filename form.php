<?php 
  require_once('config.php');

  // Подключаем класс FreakMailer
  require_once('mailClass.inc');

  // // инициализируем класс
  $mailer = new FreakMailer();

  $mailer->CharSet = "UTF-8";

  // Устанавливаем тему письма
  $mailer->Subject = 'Заказ в магазине SportEkipa';

  // Задаем тело письма
  $mailer->Body = '
  Имя: '.$_GET['name'].'
  Телефон: '.$_GET['phone'].'
  Удобное время звонка: '.$_GET['time-to-call'].'
  ';

  // Добавляем адрес в список получателей
  $mailer->AddAddress('lordalurard@gmail.com', 'Eric Rosebrock');

  if(!$mailer->Send())
  {
    echo 'Не могу отослать письмо!';
  }
  else
  {
    echo 'Письмо отослано!';
  }
  $mailer->ClearAddresses();
  $mailer->ClearAttachments();
 ?>