<?php 
$sayfaTitle = 'Pasif Hosting Hizmetleri';
require_once 'pages/header.php';
?>

<div class="hk-pg-wrapper">

	<!-- Container -->
	<div class="container">

		<br>
		<div class="hk-pg-header">
			<h4 class="hk-pg-title"><span class="pg-title-icon"><span class="feather-icon"><i data-feather="users"></i></span></span>Pasif Hosting Hizmetleri</h4>
		</div>
		<!-- /Title -->

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
											<th>Paket Süresi</th>
											<th>Geçen Süre</th>
											<th>Yenileme Ücreti</th>
											<th>İşlem</th>
										</tr>
									</thead>
									<tbody>
										<?php foreach ($bitenhost as $key): ?>
											<tr>
												<td><?=$key['host_domain']?></td>
												<td><a href="musteri-detay?sc=<?=$key['musteri_id']?>"><?=$key['musteri_ad']?></a></td>
												<td><?=$key['musteri_firma']?></td>
												<td><?php if ($key['host_sure']==2629743) { echo "1 Aylık";} elseif ($key['host_sure']==15778463) { echo "6 Aylık";} elseif ($key['host_sure']==31556926) { echo "12 Aylık";} elseif ($key['host_sure']==63113851) { echo "24 Aylık";} elseif ($key['host_sure']==94670777) { echo "36 Aylık";} ?></td>
												<td><span class="badge badge-warning">Hizmet Pasif</span></td>
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