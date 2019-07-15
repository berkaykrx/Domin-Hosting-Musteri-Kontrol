<?php 
require_once 'inc/db.php'; 
require_once 'inc/sorgu.php';
require_once 'inc/fonksiyon.php';

$kulsor=$db->prepare("SELECT * FROM kullanici where kullanici_id=?");
$kulsor->execute(array($_SESSION['kullanici_id']));
$kullanicisay=$kulsor->rowCount();
$kullcek=$kulsor->fetch(PDO::FETCH_ASSOC);

if ($kullanicisay==0) {
	Header("Location:giris.php");
	exit;
}
?>
<!DOCTYPE html>

<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<title>Müşteri Kontrol Sistemi<?php if (isset($sayfaTitle)) { echo ' - '.$sayfaTitle;} ?></title>
	<meta name="description" content="Müşteri Kontrol Sistemi" />

	<!-- Favicon -->
	<link rel="shortcut icon" href="favicon.ico">
	<link rel="icon" href="favicon.ico" type="image/x-icon">
	
	<!-- vector map CSS -->
	<link href="vendors/vectormap/jquery-jvectormap-2.0.3.css" rel="stylesheet" type="text/css" />

	<!-- Toggles CSS -->
	<link href="vendors/jquery-toggles/css/toggles.css" rel="stylesheet" type="text/css">
	<link href="vendors/jquery-toggles/css/themes/toggles-light.css" rel="stylesheet" type="text/css">
	
	<!-- Toastr CSS -->
	<link href="vendors/jquery-toast-plugin/dist/jquery.toast.min.css" rel="stylesheet" type="text/css">
	<link href="vendors/select2/dist/css/select2.min.css" rel="stylesheet" type="text/css" />

	<link rel="stylesheet" href="vendors/jquery-steps/demo/css/jquery.steps.css">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.33.1/sweetalert2.min.css">

	<!-- Custom CSS -->
	<link href="dist/css/style.css" rel="stylesheet" type="text/css">
</head>

<body>
	<!-- Preloader -->
	<div class="preloader-it">
		<div class="loader-pendulums"></div>
	</div>
	<!-- /Preloader -->
	
	<!-- HK Wrapper -->
	<div class="hk-wrapper hk-vertical-nav">

		<!-- Top Navbar -->
		<nav class="navbar navbar-expand-xl navbar-light fixed-top hk-navbar">
			<a id="navbar_toggle_btn" class="navbar-toggle-btn nav-link-hover" href="javascript:void(0);"><span class="feather-icon"><i data-feather="menu"></i></span></a>
			<a class="navbar-brand" href="dashboard1.html">
				<img class="brand-img d-inline-block" src="dist/img/logo-light.png" alt="brand" />
			</a>
			<ul class="navbar-nav hk-navbar-content">
				<li class="nav-item dropdown dropdown-authentication">
					<a class="nav-link dropdown-toggle no-caret" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<div class="media">
							<div class="media-img-wrap">
								<div class="avatar">
									<img src="dist/img/avatar12.jpg" alt="user" class="avatar-img rounded-circle">
								</div>
								<span class="badge badge-success badge-indicator"></span>
							</div>
							<div class="media-body">
								<span>Yönetim Hesabı<i class="zmdi zmdi-chevron-down"></i></span>
							</div>
						</div>
					</a>
					<div class="dropdown-menu dropdown-menu-right" data-dropdown-in="flipInX" data-dropdown-out="flipOutX">
						<a class="dropdown-item" href="ayarlar"><i class="dropdown-icon zmdi zmdi-settings"></i><span>Ayarlar</span></a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="cikis"><i class="dropdown-icon zmdi zmdi-power"></i><span>Çıkış Yap</span></a>
					</div>
				</li>
			</ul>
		</nav>
		<form role="search" class="navbar-search">
			<div class="position-relative">
				<a href="javascript:void(0);" class="navbar-search-icon"><span class="feather-icon"><i data-feather="search"></i></span></a>
				<input type="text" name="example-input1-group2" class="form-control" placeholder="Type here to Search">
				<a id="navbar_search_close" class="navbar-search-close" href="#"><span class="feather-icon"><i data-feather="x"></i></span></a>
			</div>
		</form>
		<!-- /Top Navbar -->

		<!-- Vertical Nav -->
		<nav class="hk-nav hk-nav-light">
			<a href="javascript:void(0);" id="hk_nav_close" class="hk-nav-close"><span class="feather-icon"><i data-feather="x"></i></span></a>
			<div class="nicescroll-bar">
				<div class="navbar-nav-wrap">
					<ul class="navbar-nav flex-column">
						<li class="nav-item active">
							<a class="nav-link" href="index.php">
								<span class="feather-icon"><i data-feather="activity"></i></span>
								<span class="nav-link-text">Kontrol Paneli</span>
							</a>
						</li>
					</ul>
					<hr class="nav-separator">
					<div class="nav-header">
						<span>MÜŞTERİ KONTROL</span>
						<span>MK</span>
					</div>
					<ul class="navbar-nav flex-column">
						<li class="nav-item">
							<a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#musterik">
								<span class="feather-icon"><i data-feather="users"></i></span>
								<span class="nav-link-text">Müşteri Yönetim</span>
							</a>
							<ul id="musterik" class="nav flex-column collapse collapse-level-1">
								<li class="nav-item">
									<ul class="nav flex-column">
										<li class="nav-item">
											<a class="nav-link" href="musteriler">Müşteriler &nbsp;<span class="badge badge-sm badge-success badge-pill"> <?=$musterisaycek['say']?></span></a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
					<ul class="navbar-nav flex-column">
						<li class="nav-item">
							<a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#hostingy">
								<span class="feather-icon"><i data-feather="server"></i></span>
								<span class="nav-link-text">Hosting Yönetim</span>
							</a>
							<ul id="hostingy" class="nav flex-column collapse collapse-level-1">
								<li class="nav-item">
									<ul class="nav flex-column">
										<li class="nav-item">
											<a class="nav-link" href="aktif-hosting">Aktif Hizmetler &nbsp;<span class="badge badge-sm badge-success badge-pill"> <?=$aktifhostcek['say']?></span></a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="biten-hosting">Süresi Az Kalan Hizmetler  &nbsp;<span class="badge badge-sm badge-danger badge-pill"> <?=$bitenhostcek['say']?></span></a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="pasif-hosting">Pasif Hizmetler  &nbsp;<span class="badge badge-sm badge-warning badge-pill"> <?=$pasifhostcek['say']?></span></a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
					<ul class="navbar-nav flex-column">
						<li class="nav-item">
							<a class="nav-link" href="javascript:void(0);" data-toggle="collapse" data-target="#domainy">
								<span class="feather-icon"><i data-feather="link"></i></span>
								<span class="nav-link-text">Domain Yönetim</span>
							</a>
							<ul id="domainy" class="nav flex-column collapse collapse-level-1">
								<li class="nav-item">
									<ul class="nav flex-column">
										<li class="nav-item">
											<a class="nav-link" href="aktif-domain">Aktif Domainler &nbsp;<span class="badge badge-sm badge-success badge-pill"> <?=$aktifhostcek['say']?></span></a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="biten-domain">Süresi Az Kalan Domainler  &nbsp;<span class="badge badge-sm badge-danger badge-pill"> <?=$bitenhostcek['say']?></span></a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="pasif-domain">Pasif Domainler  &nbsp;<span class="badge badge-sm badge-warning badge-pill"> <?=$pasifhostcek['say']?></span></a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
					<hr class="nav-separator">
					<div class="nav-header">
						<span>GENEL</span>
						<span>GL</span>
					</div>
					<ul class="navbar-nav flex-column">
						<li class="nav-item">
							<a class="nav-link link-with-badge" href="ayarlar">
								<span class="feather-icon"><i data-feather="settings"></i></span>
								<span class="nav-link-text">Genel Ayarlar</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="javascript:void(0)">
								<span class="feather-icon"><i data-feather="log-out"></i></span>
								<span class="nav-link-text">Çıkış Yap</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div id="hk_nav_backdrop" class="hk-nav-backdrop"></div>
		<!-- /Vertical Nav -->