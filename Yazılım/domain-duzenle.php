<?php
require_once 'pages/header.php';

$msor=$db->prepare("SELECT domain.*, musteri.* FROM domain INNER JOIN musteri ON domain.musteri_id=musteri.musteri_id WHERE domain.domain_uniq=?");
$msor->execute(array($_GET['sc']));
while($mcek=$msor->fetch(PDO::FETCH_ASSOC)) {
	?>
	<div class="hk-pg-wrapper">
		<!-- Container -->
		<div class="container mt-xl-50 mt-sm-30 mt-15">
			<!-- Row -->
			<div class="row">
				<div class="col-xl-12">
					<div id="example-basic">
						<h3>
							<span class="wizard-icon-wrap"><i class="feather-icon"><i data-feather="link"></i></i></span>
							<span class="wizard-head-text-wrap">
								<span class="step-head">DOMAİN DÜZENLE</span>
							</span>	
						</h3>
						<section>
							<h3 class="display-4 mb-40">Domain Düzenle</h3>
							<div class="row">
								<div class="col-xl-4 mb-20">
									<p class="mb-10">Domain Süresi Değiştirildiğinde Şimdi Zaman Üzerinden İşlem Yapılacaktır.</p>
								</div>
								<div class="col-xl-8 mb-20">
									<form id="formum">
										<div class="form-group">
											<label>Alan Adı</label>
											<input type="text" name="domain" class="form-control" placeholder="alanadi.com" value="<?=$mcek['domain_ad']?>">
										</div>
										<div class="row" id="bireyselform">
											<div class="col-md-6 form-group">
												<label>Müşteri</label>
												<select class="form-control" name="musteri">
													<optgroup label="Müşteriler">
														<?php foreach ($musterisor as $vcek): ?>
															<option <?php if ($vcek['musteri_id']==$mcek['musteri_id']): echo "selected"; endif ?> value="<?=$vcek['musteri_id']?>"><?=$vcek['musteri_ad']?></option>
														<?php endforeach ?>
													</optgroup>
												</select>
											</div>
											<div class="col-md-6 form-group">
												<label for="lastName">Müşteri Firma</label>
												<input class="form-control" placeholder="Müşteri Firma" name="musteri_firma" value="<?=$mcek['musteri_firma']?>" type="text" disabled>
											</div>
										</div>
										<div class="form-group">
											<label>Domain Bitiş Süresi <small>GÜN.AY.YIL Şeklinde Tarih Girin</small></label>
											<input type="text" name="paket_sure" data-mask="99.99.9999" class="form-control" placeholder="11.02.2020" value="<?=$mcek['domain_sure']?>">
										</div>

										<div class="form-group">
											<label>Ödeme</label>
											<select class="form-control" name="odeme">
												<option value="1" <?php if ($mcek['domain_odeme']==1): echo "selected"; endif ?>>Ödeme Yapıldı</option>
												<option value="2" <?php if ($mcek['domain_odeme']==2): echo "selected"; endif ?>>Ödeme Bekliyor</option>
											</select>
										</div>

										<div class="form-group">
											<label>Fiyat</label>
											<input type="text" name="fiyat" class="form-control" placeholder="200" value="<?=$mcek['domain_fiyat']?>">
										</div>

										<div class="form-group">
											<label>Kayıtlı Firma</label>
											<input type="text" name="reg" class="form-control" placeholder="İsim Tescil" value="<?=$mcek['domain_reg']?>">
										</div>

										<div class="form-group">
											<label>Domain Durum</label>
											<select class="form-control" name="durum">
												<option value="0" <?php if ($mcek['domain_durum']==0): echo "selected"; endif ?>>Pasif</option>
												<option value="1" <?php if ($mcek['domain_durum']==1): echo "selected"; endif ?>>Aktif</option>
												<option value="2" <?php if ($mcek['domain_durum']==2): echo "selected"; endif ?>>Süresi Doldu</option>
											</select>
										</div>
										<hr>
										<input type="hidden" name="domainduzenle">
										<input type="hidden" name="sc" value="<?=$mcek['domain_uniq']?>">
										<div class="custom-control custom-checkbox">
											<button class="btn btn-primary btn-wth-icon btn-rounded icon-right" id="gonder" style="float: right;"><span class="btn-text">Düzenle</span> <span class="icon-label"><span class="feather-icon"><i data-feather="arrow-right-circle"></i></span></span></button>
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
<?php } ?>
<?php require_once 'pages/footer.php'; ?>