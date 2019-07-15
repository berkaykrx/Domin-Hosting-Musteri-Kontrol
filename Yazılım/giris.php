<?php 
require_once 'inc/db.php';
require_once 'inc/fonksiyon.php';
giriskontrol();
?>
<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<title>Yönetim Paneli</title>

	<!-- Favicon -->
	<link rel="shortcut icon" href="favicon.ico">
	<link rel="icon" href="favicon.ico" type="image/x-icon">

	<!-- Toggles CSS -->
	<link href="vendors/jquery-toggles/css/toggles.css" rel="stylesheet" type="text/css">
	<link href="vendors/jquery-toggles/css/themes/toggles-light.css" rel="stylesheet" type="text/css">

	<!-- Custom CSS -->
	<link href="dist/css/style.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.33.1/sweetalert2.min.css">
</head>
<body>
	<!-- Preloader -->
	<div class="preloader-it">
		<div class="loader-pendulums"></div>
	</div>
	<!-- /Preloader -->

	<!-- HK Wrapper -->
	<div class="hk-wrapper">

		<!-- Main Content -->
		<div class="hk-pg-wrapper hk-auth-wrapper">
			<div class="container-fluid">
				<div class="row">
					<div class="col-xl-12 pa-0">
						<div class="auth-form-wrap pt-xl-0 pt-70">
							<div class="auth-form w-xl-30 w-lg-55 w-sm-75 w-100">
								<a class="auth-brand text-center d-block mb-20" href="#">
									<img class="brand-img" src="dist/img/logo-dark.png" alt="brand"/>
								</a>
								<form id="formum">
									<h1 class="display-4 text-center mb-10">Yönetim Paneli</h1>
									<div class="form-group">
										<input class="form-control" placeholder="Kullanıcı Adı" type="text" name="kullanici_ad">
									</div>
									<div class="form-group">
										<div class="input-group">
											<input class="form-control" placeholder="Şifre" type="password" name="kullanici_sifre">
											<div class="input-group-append">
												<span class="input-group-text"><span class="feather-icon"><i data-feather="eye-off"></i></span></span>
											</div>
										</div>
									</div>
									<input type="hidden" name="girisyap">
									<button class="btn btn-primary btn-block" id="gonder">Giriş Yap</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Main Content -->
		
		<?php require_once 'pages/footer.php' ?>