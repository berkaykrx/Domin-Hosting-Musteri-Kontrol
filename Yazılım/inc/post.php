<?php

require_once 'db.php'; 
require_once 'fonksiyon.php'; 



if (isset($_POST['girisyap'])) {

	$kullanici_ad=htmlspecialchars($_POST['kullanici_ad']);

	$kullanici_sifre=md5(htmlspecialchars($_POST['kullanici_sifre']));


	$sor=$db->prepare("SELECT * FROM kullanici WHERE kullanici_ad=? AND kullanici_sifre=? AND kullanici_yetki=?");
	$sor->execute(array($kullanici_ad,$kullanici_sifre,9));
	$say=$sor->rowCount();

	$kulcek=$sor->fetch(PDO::FETCH_ASSOC);

	if ($say==1) {

		$kullanici_id=$kulcek['kullanici_id'];

		$_SESSION['kullanici_id']=$kullanici_id;

		$data["baslik"]="Başarılı";
		$data["status"]="success";
		$data["message"]="Başarılı Şekilde Giriş Yaptınız..";
		echo json_encode($data);

		exit;

	}else{

		$data["baslik"]="Hata";
		$data["status"]="error";
		$data["message"]="Giriş Yaparken Bir Sorun Oluştu!";
		echo json_encode($data);

		exit;

	}

}


if (isset($_POST['mekle'])) {

	$uniq = uniqid();

	$kaydet=$db->prepare("INSERT INTO musteri SET
		musteri_ad=:musteri_ad,
		musteri_firma=:musteri_firma,
		musteri_tel=:musteri_tel,
		musteri_mail=:musteri_mail,
		musteri_adres=:musteri_adres,
		musteri_il=:musteri_il,
		musteri_ilce=:musteri_ilce,
		musteri_uniq=:uniq
		");
	$ekle=$kaydet->execute(array(
		'musteri_ad' => $_POST['musteri_ad'],
		'musteri_firma'=> $_POST['musteri_firma'],
		'musteri_tel'=> $_POST['musteri_tel'],
		'musteri_mail' => $_POST['musteri_mail'],
		'musteri_adres' => $_POST['musteri_adres'],
		'musteri_il' => $_POST['musteri_il'],
		'musteri_ilce' => $_POST['musteri_ilce'],
		'uniq' => $uniq
	));

	if ($ekle){
		$data["baslik"]="Başarılı";
		$data["status"]="success";
		$data["message"]="Yeni Müşteri Başarılı Şekilde Eklendi";
		echo json_encode($data);
	}else{
		$data["baslik"]="Hata";
		$data["status"]="danger";
		$data["message"]="Müşteri Eklerken Bir Sorun Oluştu!";
		echo json_encode($data);
	}


}



if (isset($_POST['mduzenle'])) {

	$uniq = uniqid();

	$kaydet=$db->prepare("UPDATE musteri SET
		musteri_ad=:musteri_ad,
		musteri_firma=:musteri_firma,
		musteri_tel=:musteri_tel,
		musteri_mail=:musteri_mail,
		musteri_adres=:musteri_adres,
		musteri_il=:musteri_il,
		musteri_ilce=:musteri_ilce
		WHERE musteri_uniq=:musteri_uniq
		");
	$ekle=$kaydet->execute(array(
		'musteri_ad' => $_POST['musteri_ad'],
		'musteri_firma'=> $_POST['musteri_firma'],
		'musteri_tel'=> $_POST['musteri_tel'],
		'musteri_mail' => $_POST['musteri_mail'],
		'musteri_adres' => $_POST['musteri_adres'],
		'musteri_il' => $_POST['musteri_il'],
		'musteri_ilce' => $_POST['musteri_ilce'],
		'musteri_uniq' => $_POST['uniq']
	));

	if ($ekle){
		$data["baslik"]="Başarılı";
		$data["status"]="success";
		$data["message"]="Müşteri Başarılı Şekilde Düzenlendi";
		echo json_encode($data);
	}else{
		$data["baslik"]="Hata";
		$data["status"]="danger";
		$data["message"]="Müşteri Düzenlerken Bir Sorun Oluştu!";
		echo json_encode($data);
	}


}


if (isset($_POST['hostingekle'])) {

	$uniq = uniqid();

	$kaydet=$db->prepare("INSERT INTO hosting SET
		musteri_id=:musteri_id,
		host_domain=:host_domain,
		host_sure=:host_sure,
		host_odeme=:host_odeme,
		host_fiyat=:host_fiyat,
		host_kul=:host_kul,
		host_sifre=:host_sifre,
		host_uniq=:uniq
		");
	$ekle=$kaydet->execute(array(
		'musteri_id' => $_POST['musteri'],
		'host_domain'=> $_POST['domain'],
		'host_sure'=> $_POST['paket_sure'],
		'host_odeme' => $_POST['odeme'],
		'host_fiyat' => $_POST['fiyat'],
		'host_kul' => $_POST['kullanici'],
		'host_sifre' => $_POST['sifre'],
		'uniq' => $uniq
	));

	if ($ekle){
		$data["baslik"]="Başarılı";
		$data["status"]="success";
		$data["message"]="Yeni Hosting Hizmeti Başarılı Şekilde Eklendi";
		echo json_encode($data);
	}else{
		$data["baslik"]="Hata";
		$data["status"]="danger";
		$data["message"]="Hosting Hizmeti Eklerken Bir Sorun Oluştu!";
		echo json_encode($data);
	}


}

if (isset($_POST['hduzenle'])) {

	$hostingsordur=$db->prepare("SELECT * FROM hosting WHERE host_uniq=?");
	$hostingsordur->execute(array($_POST['sc']));
	$hostingcek=$hostingsordur->fetch(PDO::FETCH_ASSOC);

	if ($hostingcek['host_sure']==$_POST['paket_sure']) {

		$kaydet=$db->prepare("UPDATE hosting SET
			musteri_id=:musteri_id,
			host_domain=:host_domain,
			host_odeme=:host_odeme,
			host_fiyat=:host_fiyat,
			host_kul=:host_kul,
			host_sifre=:host_sifre,
			host_durum=:host_durum
			WHERE host_uniq=:uniq
			");
		$ekle=$kaydet->execute(array(
			'musteri_id' => $_POST['musteri'],
			'host_domain'=> $_POST['domain'],
			'host_odeme' => $_POST['odeme'],
			'host_fiyat' => $_POST['fiyat'],
			'host_kul' => $_POST['kullanici'],
			'host_sifre' => $_POST['sifre'],
			'host_durum' => $_POST['durum'],
			'uniq' => $_POST['sc']
		));

		if ($ekle){
			$data["baslik"]="Başarılı";
			$data["status"]="success";
			$data["message"]="Hosting Hizmeti Başarılı Şekilde Düzenlendi";
			echo json_encode($data);
		}else{
			$data["baslik"]="Hata";
			$data["status"]="danger";
			$data["message"]="Hosting Hizmeti Düzenlerken Bir Sorun Oluştu!";
			echo json_encode($data);
		}
	} else {
		$kaydet=$db->prepare("UPDATE hosting SET
			musteri_id=:musteri_id,
			host_domain=:host_domain,
			host_sure=:host_sure,
			host_odeme=:host_odeme,
			host_fiyat=:host_fiyat,
			host_kul=:host_kul,
			host_sifre=:host_sifre,
			host_zaman=:host_zaman,
			host_durum=:host_durum
			WHERE host_uniq=:uniq
			");
		$ekle=$kaydet->execute(array(
			'musteri_id' => $_POST['musteri'],
			'host_domain'=> $_POST['domain'],
			'host_sure'=> $_POST['paket_sure'],
			'host_odeme' => $_POST['odeme'],
			'host_fiyat' => $_POST['fiyat'],
			'host_kul' => $_POST['kullanici'],
			'host_sifre' => $_POST['sifre'],
			'host_zaman' => date('Y.m.d H:i:s'),
			'host_durum' => $_POST['durum'],
			'uniq' => $_POST['sc']
		));

		if ($ekle){
			$data["baslik"]="Başarılı";
			$data["status"]="success";
			$data["message"]="Hosting Hizmeti Başarılı Şekilde Düzenlendi";
			echo json_encode($data);
		}else{
			$data["baslik"]="Hata";
			$data["status"]="danger";
			$data["message"]="Hosting Hizmeti Düzenlerken Bir Sorun Oluştu!";
			echo json_encode($data);
		}
	}

}


if (isset($_POST['domainekle'])) {


	if ($_POST['hosting']==0) {
		
		$uniq = uniqid();

		$kaydet=$db->prepare("INSERT INTO domain SET
			musteri_id=:musteri_id,
			domain_ad=:domain_ad,
			domain_sure=:domain_sure,
			domain_odeme=:domain_odeme,
			domain_fiyat=:domain_fiyat,
			domain_reg=:domain_reg,
			domain_uniq=:uniq
			");
		$ekle=$kaydet->execute(array(
			'musteri_id' => $_POST['musteri'],
			'domain_ad'=> $_POST['domain'],
			'domain_sure'=> $_POST['paket_sure'],
			'domain_odeme' => $_POST['odeme'],
			'domain_fiyat' => $_POST['fiyat'],
			'domain_reg' => $_POST['reg'],
			'uniq' => $uniq
		));

		if ($ekle){
			$data["baslik"]="Başarılı";
			$data["status"]="success";
			$data["message"]="Domain Başarılı Şekilde Eklendi";
			echo json_encode($data);
		}else{
			$data["baslik"]="Hata";
			$data["status"]="danger";
			$data["message"]="Domain Eklerken Bir Sorun Oluştu!";
			echo json_encode($data);
		}

	} else {

		$uniq = uniqid();

		$kaydet=$db->prepare("INSERT INTO domain SET
			musteri_id=:musteri_id,
			domain_ad=:domain_ad,
			domain_sure=:domain_sure,
			domain_odeme=:domain_odeme,
			domain_fiyat=:domain_fiyat,
			domain_reg=:domain_reg,
			domain_uniq=:uniq
			");
		$ekle=$kaydet->execute(array(
			'musteri_id' => $_POST['musteri'],
			'domain_ad'=> $_POST['domain'],
			'domain_sure'=> $_POST['paket_sure'],
			'domain_odeme' => $_POST['odeme'],
			'domain_fiyat' => $_POST['fiyat'],
			'domain_reg' => $_POST['reg'],
			'uniq' => $uniq
		));

		if ($ekle){

			$uniqq = uniqid();
			
			$kaydet=$db->prepare("INSERT INTO hosting SET
				musteri_id=:musteri_id,
				host_domain=:host_domain,
				host_sure=:host_sure,
				host_odeme=:host_odeme,
				host_fiyat=:host_fiyat,
				host_kul=:host_kul,
				host_sifre=:host_sifre,
				host_uniq=:uniq
				");
			$ekle=$kaydet->execute(array(
				'musteri_id' => $_POST['musteri'],
				'host_domain'=> $_POST['domain'],
				'host_sure'=> $_POST['paket_sure'],
				'host_odeme' => $_POST['odeme'],
				'host_fiyat' => $_POST['fiyat'],
				'host_kul' => "Boş",
				'host_sifre' => "Boş",
				'uniq' => $uniqq
			));

			$data["baslik"]="Başarılı";
			$data["status"]="success";
			$data["message"]="Domain ve Hosting Hizmeti Başarılı Şekilde Eklendi";
			echo json_encode($data);
		}else{
			$data["baslik"]="Hata";
			$data["status"]="danger";
			$data["message"]="Domain ve Hosting Hizmeti Eklerken Bir Sorun Oluştu!";
			echo json_encode($data);
		}

	}
}

if (isset($_POST['domainduzenle'])) {

	$hostingsordur=$db->prepare("SELECT * FROM domain WHERE domain_uniq=?");
	$hostingsordur->execute(array($_POST['sc']));
	$hostingcek=$hostingsordur->fetch(PDO::FETCH_ASSOC);

	if ($hostingcek['domain_sure']==$_POST['paket_sure']) {

		$kaydet=$db->prepare("UPDATE domain SET
			musteri_id=:musteri_id,
			domain_ad=:domain_ad,
			domain_odeme=:domain_odeme,
			domain_fiyat=:domain_fiyat,
			domain_reg=:domain_reg
			WHERE domain_uniq=:uniq
			");
		$ekle=$kaydet->execute(array(
			'musteri_id' => $_POST['musteri'],
			'domain_ad'=> $_POST['domain'],
			'domain_odeme' => $_POST['odeme'],
			'domain_fiyat' => $_POST['fiyat'],
			'domain_reg' => $_POST['reg'],
			'uniq' => $_POST['sc']
		));

		if ($ekle){
			$data["baslik"]="Başarılı";
			$data["status"]="success";
			$data["message"]="Domain Başarılı Şekilde Düzenlendi";
			echo json_encode($data);
		}else{
			$data["baslik"]="Hata";
			$data["status"]="danger";
			$data["message"]="Domain Düzenlerken Bir Sorun Oluştu!";
			echo json_encode($data);
		}
	} else {


		$kaydet=$db->prepare("UPDATE domain SET
			musteri_id=:musteri_id,
			domain_ad=:domain_ad,
			domain_sure=:domain_sure,
			domain_odeme=:domain_odeme,
			domain_fiyat=:domain_fiyat,
			domain_reg=:domain_reg,
			domain_zaman=:zaman
			WHERE domain_uniq=:uniq
			");
		$ekle=$kaydet->execute(array(
			'musteri_id' => $_POST['musteri'],
			'domain_ad'=> $_POST['domain'],
			'domain_sure'=> $_POST['paket_sure'],
			'domain_odeme' => $_POST['odeme'],
			'domain_fiyat' => $_POST['fiyat'],
			'domain_reg' => $_POST['reg'],
			'zaman' => date('Y.m.d H:i:s'),
			'uniq' => $_POST['sc']
		));

		if ($ekle){
			$data["baslik"]="Başarılı";
			$data["status"]="success";
			$data["message"]="Domain Başarılı Şekilde Düzenlendi";
			echo json_encode($data);
		}else{
			$data["baslik"]="Hata";
			$data["status"]="danger";
			$data["message"]="Domain Düzenlerken Bir Sorun Oluştu!";
			echo json_encode($data);
		}
	}

}



if (isset($_POST['ayarlar'])) {

	$kaydet=$db->prepare("UPDATE ayarlar SET
		mail_host=:mail_host,
		mail_port=:mail_port,
		mail_user=:mail_user,
		mail_pass=:mail_pass,
		yetkili_mail=:yetkili_mail
		WHERE ayar_id=:ayar_id
		");
	$ekle=$kaydet->execute(array(
		'mail_host' => $_POST['mail_host'],
		'mail_port'=> $_POST['mail_port'],
		'mail_user' => $_POST['mail_user'],
		'mail_pass' => $_POST['mail_pass'],
		'yetkili_mail' => $_POST['yetkili_mail'],
		'ayar_id' => 1
	));

	if ($ekle){
		$data["baslik"]="Başarılı";
		$data["status"]="success";
		$data["message"]="Ayarlar Başarılı Şekilde Düzenlendi";
		echo json_encode($data);
	}else{
		$data["baslik"]="Hata";
		$data["status"]="danger";
		$data["message"]="Ayarlar Düzenlerken Bir Sorun Oluştu!";
		echo json_encode($data);
	}

}
?>