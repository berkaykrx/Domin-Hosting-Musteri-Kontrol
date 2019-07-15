<?php

require_once 'db.php';

$response = array();

if ($_POST['musterisil']) {

	$id = $_POST['musterisil'];
	$sil=$db->prepare("DELETE FROM musteri where musteri_uniq=?");
	$kontrol=$sil->execute(array($id));

	if ($kontrol) {
		$response['status']  = 'success';
		$response['message'] = 'İşlem Başarılı...';
	} else {
		$response['status']  = 'error';
		$response['message'] = 'Bir Sorun Var...';
	}
	echo json_encode($response);
}

if ($_POST['hostingsil']) {

	$id = $_POST['hostingsil'];
	$sil=$db->prepare("DELETE FROM hosting where host_uniq=?");
	$kontrol=$sil->execute(array($id));

	if ($kontrol) {
		$response['status']  = 'success';
		$response['message'] = 'İşlem Başarılı...';
	} else {
		$response['status']  = 'error';
		$response['message'] = 'Bir Sorun Var...';
	}
	echo json_encode($response);
}

if ($_POST['domainsil']) {

	$id = $_POST['domainsil'];
	$sil=$db->prepare("DELETE FROM domain where domain_uniq=?");
	$kontrol=$sil->execute(array($id));

	if ($kontrol) {
		$response['status']  = 'success';
		$response['message'] = 'İşlem Başarılı...';
	} else {
		$response['status']  = 'error';
		$response['message'] = 'Bir Sorun Var...';
	}
	echo json_encode($response);
}

?>