<?php
$sayfaTitle = 'Ayarlar';
require_once 'pages/header.php';

$msor=$db->prepare("SELECT * FROM ayarlar WHERE ayar_id=?");
$msor->execute(array(1));
while($mcek=$msor->fetch(PDO::FETCH_ASSOC)) {
	?>
	<div class="hk-pg-wrapper">
		<!-- Breadcrumb -->
		<nav class="hk-breadcrumb" aria-label="breadcrumb">
			<ol class="breadcrumb breadcrumb-light bg-transparent">
				<li class="breadcrumb-item"><a href="index.php">Anasayfa</a></li>
				<li class="breadcrumb-item active" aria-current="page">Ayarlar</li>
			</ol>
		</nav>
		<!-- /Breadcrumb -->

		<!-- Container -->
		<div class="container">
			<!-- Title -->
			<div class="hk-pg-header">
				<h4 class="hk-pg-title"><span class="pg-title-icon"><span class="feather-icon"><i data-feather="settings"></i></span></span>Ayarlar</h4>
			</div>
			<!-- /Title -->

			<!-- Row -->
			<div class="row">
				<div class="col-xl-12">
					<section class="hk-sec-wrapper">
						<div class="row">
							<div class="col-sm">
								<form id="formum">
									<div class="row">
										<div class="col-md-6 form-group">
											<label>SMTP Host</label>
											<input type="text" name="mail_host" class="form-control" placeholder="SMTP Host" value="<?=$mcek['mail_host']?>">
										</div>
										<div class="col-md-6 form-group">
											<label>SMTP Port</label>
											<input type="text" name="mail_port" class="form-control" placeholder="SMTP Port" value="<?=$mcek['mail_port']?>">
										</div>
										<div class="col-md-6 form-group">
											<label>SMTP Mail</label>
											<input type="email" name="mail_user" class="form-control" placeholder="SMTP Mail" value="<?=$mcek['mail_user']?>">
										</div>
										<div class="col-md-6 form-group">
											<label>SMTP Şifre</label>
											<input type="password" name="mail_pass" class="form-control" placeholder="SMTP Şifre" value="<?=$mcek['mail_pass']?>">
										</div>
										<div class="col-md-12 form-group">
											<label>Yetkili Mail <small>Bilgilendirmek İçin</small></label>
											<input type="text" name="yetkili_mail" class="form-control" placeholder="Mesaj Gönderilecek Mail" value="<?=$mcek['yetkili_mail']?>">
										</div>
									</div>
									<hr>
									<input type="hidden" name="ayarlar">
									<button class="btn btn-primary" id="gonder">Ayarları Güncelle</button>
								</form>
							</div>
						</div>
					</section>
				</div>
			</div>
			<!-- /Row -->
		</div>
		<!-- /Container -->

	</div>
<?php } ?>
<?php require_once 'pages/footer.php'; ?>