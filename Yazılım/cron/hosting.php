<?php 
date_default_timezone_set('Europe/Istanbul');

require_once '../inc/db.php';
require_once '../inc/fonksiyon.php';

$ayarsor=$db->prepare("SELECT * FROM ayarlar where ayar_id=?");
$ayarsor->execute(array(1));
$ayarcek=$ayarsor->fetch(PDO::FETCH_ASSOC);


$zsor=$db->prepare("SELECT hosting.*, musteri.* FROM hosting INNER JOIN musteri ON hosting.musteri_id=musteri.musteri_id WHERE hosting.host_durum=?");
$zsor->execute(array(1));
while ($zcek=$zsor->fetch(PDO::FETCH_ASSOC)) 
{
  $bitis = strtotime($zcek['host_sure']);
  $suan = strtotime(date('d.m.Y'));
  $fark= abs($bitis - $suan);
  $sonuc=getdate($fark);
  $onbes=1296000;

  if ($fark<=$onbes) {

   $host = $ayarcek['mail_host'];
   $port = $ayarcek['mail_port'];
   $username = $ayarcek['mail_user'];
   $pass = $ayarcek['mail_pass'];
   $alici = $zcek['musteri_mail'];
   $yetkili = $ayarcek['yetkili_mail'];

   $adsoyad = $zcek['musteri_ad'];
   $hizmet = $zcek['host_domain'];
   $eposta = $zcek['musteri_mail'];

   include 'class.phpmailer.php';
                    # PHPMailer class tanımla
   $mail = new PHPMailer();
   $mail->IsSMTP();
   $mail->CharSet  = 'utf-8';
   $mail->SMTPDebug = false;
   $mail->SMTPAuth = true;
   $mail->Host = $host;
   $mail->Port = $port;
   $mail->Username = $username;
   $mail->Password = $pass;
   $mail->SetFrom($yetkili, 'Arya Reklam');
   $mail->Subject = 'Arya Reklam - Hosting Süreniz Dolmaktadır!';
   $body = 'Sayın <b>'. $adsoyad.'</b><br>'.$hizmet.' Adresine Ait Hosting Hizmetinin Bitmesine 15 Gün Kalmıştır!';
   $mail->MsgHTML($body);
   $to = $alici;
   $mail->AddAddress($to, "Arya Reklam");
   if(!$mail->Send())
   {
    echo "Mailer Hata: ";
  }
  else
  {

    $kaydet=$db->prepare("UPDATE hosting SET host_durum=? WHERE host_uniq=?");
    $ekle=$kaydet->execute(array(2,$zcek['host_uniq']));

    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->CharSet  = 'utf-8';
    $mail->SMTPDebug = false;
    $mail->SMTPAuth = true;
    $mail->Host = $host;
    $mail->Port = $port;
    $mail->Username = $username;
    $mail->Password = $pass;
    $mail->SetFrom($yetkili, 'Arya Reklam');
    $mail->Subject = 'Arya Reklam - Hosting Süresi Dolmaktadır!';
    $body = $hizmet.' Hosting Hizmeti Süresinin Bitmesine 15 Gün Kalmıştır!';
    $mail->MsgHTML($body);
    $to = $yetkili;
    $mail->AddAddress($to, "Arya Reklam");

    if(!$mail->Send())
   {
    echo "Mailer Hata: ";
  }
  else
  {
    echo "Mail Gitti";
  }

    echo "Mailer Gitti";
  }

}

}



?>