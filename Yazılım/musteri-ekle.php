<?php require_once 'pages/header.php';?>
<div class="hk-pg-wrapper">
	<!-- Container -->
	<div class="container mt-xl-50 mt-sm-30 mt-15">
		<!-- Row -->
		<div class="row">
			<div class="col-xl-12">
				<div id="example-basic">
					<h3>
						<span class="wizard-icon-wrap"><i class="feather-icon"><i data-feather="user-plus"></i></i></span>
						<span class="wizard-head-text-wrap">
							<span class="step-head">MÜŞTERİ EKLE</span>
						</span>	
					</h3>
					<section>
						<h3 class="display-4 mb-40">Yeni Müşteri Ekle</h3>
						<div class="row">
							<div class="col-xl-4 mb-20">
								<p class="mb-10">Bir hizmet eklemeden önce müşteri kaydı oluşturmanız gerekmektedir!</p>
								<p><b>Telefon</b> ve <b>E-Posta</b> bilgileri eksiksiz ve doğru girin. Mail veya Sms bildirimleri için kullanılmaktadır!</p>
							</div>
							<div class="col-xl-8 mb-20">
								<form id="formum">
									<div class="row" id="bireyselform">
										<div class="col-md-6 form-group">
											<label for="firstName">Müşteri Ad Soyad</label>
											<input class="form-control" placeholder="Müşteri Adı" name="musteri_ad" type="text">
										</div>
										<div class="col-md-6 form-group">
											<label for="lastName">Müşteri Firma</label>
											<input class="form-control" placeholder="Müşteri Firma" name="musteri_firma" type="text">
										</div>
									</div>
									<div class="form-group">
										<label for="telefonnum">Telefon *</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="icon-phone"></i></span>
											</div>
											<input class="form-control" id="telefonnum" name="musteri_tel" data-mask="+99 999 999 9999" placeholder="05xx-xxx-xxxx" type="phone" required="">
										</div>
									</div>

									<div class="form-group">
										<label for="email">E-Posta *</label>
										<input class="form-control" id="email" placeholder="mail@firmaadi.com" name="musteri_mail" type="email" required="">
									</div>

									<div class="form-group">
										<label for="address">Adres (İsteğe Bağlı)</label>
										<input class="form-control" id="address2" name="musteri_adres" placeholder="Celal Bayar Cd. No:23" type="text">
									</div>

									<div class="row">
										<div class="col-md-4 mb-10">
											<label for="bolge2">Bölge</label>
											<select name="bolge" id="bolge" class="form-control d-block w-100" required="">
												<option value="">Seçin...</option>
											</select>
										</div>
										<div class="col-md-4 mb-10">
											<label for="il">İl</label>
											<select id="il" class="form-control d-block w-100" disabled="disabled" name="musteri_il" required="">
												<option value="">Seçin...</option>
											</select>
										</div>
										<div class="col-md-4 mb-10">
											<label for="ilce2">İlçe</label>
											<select id="ilce" class="form-control d-block w-100" disabled="disabled" name="musteri_ilce" required="">
												<option value="">Seçin...</option>
											</select>
										</div>
									</div>
									<hr>
									<input type="hidden" name="mekle">
									<div class="custom-control custom-checkbox">
										<button class="btn btn-primary btn-wth-icon btn-rounded icon-right" id="gonder" style="float: right;"><span class="btn-text">Müşteri Ekle</span> <span class="icon-label"><span class="feather-icon"><i data-feather="arrow-right-circle"></i></span></span></button>
									</div>
								</form>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
		<!-- /Row -->
	</div>
	<!-- /Container -->

	<!-- Footer -->
	<div class="hk-footer-wrap container">
		<footer class="footer">
			<div class="row">
				<div class="col-md-6 col-sm-12">
					<p>Tüm Hakları Saklıdır © 2019</p>
				</div>
			</div>
		</footer>
	</div>
	<!-- /Footer -->

</div>

<?php require_once 'pages/footer.php'; ?>