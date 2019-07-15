<?php 
$sayfaTitle = 'Aktif Hosting Hizmetleri';
require_once 'pages/header.php';
?>

<div class="hk-pg-wrapper">

	<!-- Container -->
	<div class="container">

		<br>
		<div class="hk-pg-header">
			<h4 class="hk-pg-title"><span class="pg-title-icon"><span class="feather-icon"><i data-feather="users"></i></span></span>Aktif Hosting Hizmetleri</h4>
			<a href="javascript:void(0);" data-toggle="modal" data-target="#hostingekle" class="btn btn-primary">Hosting Hizmeti Ekle</a>
		</div>
		<!-- /Title -->

		<div class="modal fade" id="hostingekle" tabindex="-1" role="dialog" aria-labelledby="hostingekle" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Hosting Hizmeti Ekle</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<form id="formum">
							<div class="form-group">
								<label>Alan Adı</label>
								<input type="text" name="domain" class="form-control" placeholder="alanadi.com">
							</div>
							<div class="form-group">
								<label>Müşteri</label>
								<select class="form-control" name="musteri">
									<optgroup label="Müşteriler">
										<?php foreach ($musterisor as $key): ?>
											<option value="<?=$key['musteri_id']?>"><?=$key['musteri_ad']?></option>
										<?php endforeach ?>
									</optgroup>
								</select>
							</div>
							<div class="form-group">
								<label>Hosting Bitiş Süresi <small>GÜN.AY.YIL Şeklinde Tarih Girin</small></label>
								<input type="text" name="paket_sure" data-mask="99.99.9999" class="form-control" placeholder="11.02.2020">
							</div>
							<div class="form-group">
								<label>Ödeme</label>
								<select class="form-control" name="odeme">
									<option value="1" selected="">Ödeme Yapıldı</option>
									<option value="2">Ödeme Bekliyor</option>
								</select>
							</div>
							<div class="form-group">
								<label>Fiyat</label>
								<input type="text" name="fiyat" class="form-control" placeholder="200">
							</div>
							<div class="form-group">
								<label>Kullanıcı Adı <small>(Zorunlu Değil)</small></label>
								<input type="text" name="kullanici" class="form-control" placeholder="Kullanıcı Adı">
							</div>
							<div class="form-group">
								<label>Şifre <small>(Zorunlu Değil)</small></label>
								<input type="password" name="sifre" class="form-control" placeholder="Şifre">
							</div>
							<input type="hidden" name="hostingekle">
							<button class="btn btn-primary">Hizmeti Ekle</button>
						</form>
					</div>
				</div>
			</div>
		</div>

		<!-- Row -->
		<div class="row">
			<div class="col-xl-12">
				<section class="hk-sec-wrapper">
					<div class="row">
						<div class="col-sm">
							<div class="table-wrap">
								<table id="datable_1" class="table table-hover">
									<thead>
										<tr>
											<th>Domain</th>
											<th>Müşteri Adı</th>
											<th>Müşteri Firma</th>
											<th>Kalan Süre</th>
											<th>Geçen Süre</th>
											<th>Yenileme Ücreti</th>
											<th>İşlem</th>
										</tr>
									</thead>
									<tbody>
										<?php foreach ($aktifhost as $key): ?>
											<tr>
												<td><?=$key['host_domain']?></td>
												<td><a href="musteri-detay?sc=<?=$key['musteri_id']?>"><?=$key['musteri_ad']?></a></td>
												<td><?=$key['musteri_firma']?></td>
												<td><span class="badge badge-warning"><?=kalanSure($key['host_sure']);?></span></td>
												<td><span class="badge badge-indigo"><?=gecenSure($key['host_sure'],$key['host_zaman']);?></span></td>
												<td><?=$key['host_fiyat']?>₺</td>
												<td>
													<a title="Düzenle" href="hosting-duzenle?sc=<?=$key['host_uniq']?>" class="btn btn-icon btn-icon-only btn-purple btn-icon-style-4"><span class="btn-icon-wrap"><i class="fa fa-edit"></i></span></a>
													<button type="button" title="Sil" class="btn btn-icon btn-icon-only btn-purple btn-icon-style-4 hostingsil" id="<?=$key['host_uniq']?>"><span class="btn-icon-wrap"><i class="fa fa-times"></i></span></button>
												</td>
											</tr>
										<?php endforeach ?>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
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

<?php require_once 'pages/footer.php';?>