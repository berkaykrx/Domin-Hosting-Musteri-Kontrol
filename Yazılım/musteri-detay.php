<?php 
$sayfaTitle = 'Müşteri Hizmetleri';
require_once 'pages/header.php';

$hostingcek = $db->query("SELECT hosting.*, musteri.* FROM hosting INNER JOIN musteri ON hosting.musteri_id=musteri.musteri_id WHERE hosting.musteri_id={$_GET['sc']} ORDER BY hosting.host_id DESC", PDO::FETCH_ASSOC);

$domaincek = $db->query("SELECT domain.*, musteri.* FROM domain INNER JOIN musteri ON domain.musteri_id=musteri.musteri_id WHERE domain.musteri_id={$_GET['sc']} ORDER BY domain.domain_id DESC", PDO::FETCH_ASSOC);
?>

<div class="hk-pg-wrapper">

	<!-- Container -->
	<div class="container">

		<br>
		<div class="hk-pg-header">
			<h4 class="hk-pg-title"><span class="pg-title-icon"><span class="feather-icon"><i data-feather="users"></i></span></span>Müşteri Hizmetleri</h4>
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
											<th>#</th>
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
										<?php foreach ($domaincek as $key): ?>
											<tr>
												<td><span class="badge badge-success">Domain</span></td>
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
									<thead>
										<tr>
											<th>#</th>
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
										<?php foreach ($hostingcek as $key): ?>
											<tr>
												<td><span class="badge badge-success">Hosting</span></td>
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