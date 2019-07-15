<?php 
$sayfaTitle = 'Aktif Domain Hizmetleri';
require_once 'pages/header.php';
?>

<div class="hk-pg-wrapper">

	<!-- Container -->
	<div class="container">

		<br>
		<div class="hk-pg-header">
			<h4 class="hk-pg-title"><span class="pg-title-icon"><span class="feather-icon"><i data-feather="users"></i></span></span>Aktif Domain Hizmetleri</h4>
			<a href="javascript:void(0);" data-toggle="modal" data-target="#domainekle" class="btn btn-primary">Domain Hizmeti Ekle</a>
		</div>
		<!-- /Title -->

		<div class="modal fade" id="domainekle" tabindex="-1" role="dialog" aria-labelledby="domainekle" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Domain Hizmeti Ekle</h5>
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
								<label>Domain Bitiş Süresi <small>GÜN.AY.YIL Şeklinde Tarih Girin</small></label>
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
								<label>Kayıtlı Firma</label>
								<input type="text" name="reg" class="form-control" placeholder="İsim Tescil">
							</div>
							<div class="form-group">
								<label>Hosting <small>Bu Domaine Hosting Paketi Eklemek İstiyor Musun?</small></label>
								<select class="form-control" name="hosting">
									<option value="1">Evet</option>
									<option value="0" selected="">Hayır</option>
								</select>
							</div>
							<input type="hidden" name="domainekle">
							<button class="btn btn-primary">Domain Ekle</button>
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
											<th>Kayıtlı Firma</th>
											<th>İşlem</th>
										</tr>
									</thead>
									<tbody>
										<?php foreach ($aktifdomain as $key): ?>
											<tr>
												<td><?=$key['domain_ad']?></td>
												<td><a href="musteri-detay?sc=<?=$key['musteri_id']?>"><?=$key['musteri_ad']?></a></td>
												<td><?=$key['musteri_firma']?></td>
												<td><span class="badge badge-warning"><?=kalanSure($key['domain_sure']);?></span></td>
												<td><span class="badge badge-indigo"><?=gecenSure($key['domain_sure'],$key['domain_zaman']);?></span></td>
												<td><span class="badge badge-info"><?=$key['domain_reg'];?></span></td>
												<td>
													<a title="Düzenle" href="domain-duzenle?sc=<?=$key['domain_uniq']?>" class="btn btn-icon btn-icon-only btn-purple btn-icon-style-4"><span class="btn-icon-wrap"><i class="fa fa-edit"></i></span></a>
													<button type="button" title="Sil" class="btn btn-icon btn-icon-only btn-purple btn-icon-style-4 domainsil" id="<?=$key['domain_uniq']?>"><span class="btn-icon-wrap"><i class="fa fa-times"></i></span></button>
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