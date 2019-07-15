<?php 

require_once 'db.php'; 

// Müşteri Sorgu

$musterisor = $db->query("SELECT * FROM musteri ORDER BY musteri_id DESC", PDO::FETCH_ASSOC);

// Aktif / Pasif / Biten Hosting Sorguları

$aktifhost = $db->query("SELECT hosting.*, musteri.* FROM hosting INNER JOIN musteri ON hosting.musteri_id=musteri.musteri_id WHERE hosting.host_durum='1' ORDER BY hosting.host_id DESC", PDO::FETCH_ASSOC);
$pasifhost = $db->query("SELECT hosting.*, musteri.* FROM hosting INNER JOIN musteri ON hosting.musteri_id=musteri.musteri_id WHERE hosting.host_durum='0' ORDER BY hosting.host_id DESC", PDO::FETCH_ASSOC);
$bitenhost = $db->query("SELECT hosting.*, musteri.* FROM hosting INNER JOIN musteri ON hosting.musteri_id=musteri.musteri_id WHERE hosting.host_durum='2' ORDER BY hosting.host_id DESC", PDO::FETCH_ASSOC);

// Aktif / Pasif / Biten Domain Sorguları

$aktifdomain = $db->query("SELECT domain.*, musteri.* FROM domain INNER JOIN musteri ON domain.musteri_id=musteri.musteri_id WHERE domain.domain_durum='1' ORDER BY domain.domain_id DESC", PDO::FETCH_ASSOC);
$pasifdomain = $db->query("SELECT domain.*, musteri.* FROM domain INNER JOIN musteri ON domain.musteri_id=musteri.musteri_id WHERE domain.domain_durum='0' ORDER BY domain.domain_id DESC", PDO::FETCH_ASSOC);
$bitendomain = $db->query("SELECT domain.*, musteri.* FROM domain INNER JOIN musteri ON domain.musteri_id=musteri.musteri_id WHERE domain.domain_durum='2' ORDER BY domain.domain_id DESC", PDO::FETCH_ASSOC);


// Müşteri Sayfama Sorgusu

$musterisay=$db->prepare("SELECT COUNT(musteri_id) as say FROM musteri");
$musterisay->execute();
$musterisaycek=$musterisay->fetch(PDO::FETCH_ASSOC);

// Aktif / Pasif / Biten Hosting Sayma Sorgusu

$aktifhostsay=$db->prepare("SELECT COUNT(host_id) as say FROM hosting WHERE host_durum=?");
$aktifhostsay->execute(array(1));
$aktifhostcek=$aktifhostsay->fetch(PDO::FETCH_ASSOC);

$pasifhostsay=$db->prepare("SELECT COUNT(host_id) as say FROM hosting WHERE host_durum=?");
$pasifhostsay->execute(array(0));
$pasifhostcek=$pasifhostsay->fetch(PDO::FETCH_ASSOC);

$bitenhostsay=$db->prepare("SELECT COUNT(host_id) as say FROM hosting WHERE host_durum=?");
$bitenhostsay->execute(array(2));
$bitenhostcek=$bitenhostsay->fetch(PDO::FETCH_ASSOC);

$aktifdomainsay=$db->prepare("SELECT COUNT(domain_id) as say FROM domain WHERE domain_durum=?");
$aktifdomainsay->execute(array(1));
$aktifdomaincek=$aktifdomainsay->fetch(PDO::FETCH_ASSOC);

$bitendomainsay=$db->prepare("SELECT COUNT(domain_id) as say FROM domain WHERE domain_durum=?");
$bitendomainsay->execute(array(2));
$bitendomaincek=$bitendomainsay->fetch(PDO::FETCH_ASSOC);

$pasifdomainsay=$db->prepare("SELECT COUNT(domain_id) as say FROM domain WHERE domain_durum=?");
$pasifdomainsay->execute(array(0));
$pasifdomaincek=$pasifdomainsay->fetch(PDO::FETCH_ASSOC);


?>