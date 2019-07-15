<?php 

try{
	$db=new PDO("mysql:host=localhost;dbname=veritabani;charset=utf8",'kullancı','sifre');
}

catch (PDOException $e){
	echo 'Hata: '.$e->getMessage();
}

?>