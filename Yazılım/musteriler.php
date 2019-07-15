<?php require_once 'pages/header.php';?>

<div class="hk-pg-wrapper">

	<!-- Container -->
	<div class="container">

		<br>
		<div class="hk-pg-header">
			<h4 class="hk-pg-title"><span class="pg-title-icon"><span class="feather-icon"><i data-feather="users"></i></span></span>Müşteriler</h4>
			<a href="musteri-ekle" class="btn btn-primary">Müşteri Ekle</a>
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
											<th>Adı Soyadı</th>
											<th>Firma</th>
											<th>Telefon</th>
											<th>E-Posta</th>
											<th>İl</th>
											<th>İlçe</th>
											<th>İşlem</th>
										</tr>
									</thead>
									<tbody>
										<?php foreach ($musterisor as $cek): ?>
											<tr>
												<td><a href="musteri-detay?sc=<?=$cek['musteri_id']?>"><?=$cek['musteri_ad']?></a></td>
												<td><?=$cek['musteri_firma']?></td>
												<td><?=$cek['musteri_tel']?></td>
												<td><?=$cek['musteri_mail']?></td>
												<td><?=$cek['musteri_il']?></td>
												<td><?=$cek['musteri_ilce']?></td>
												<td>
													<a title="Düzenle" href="musteri-duzenle?sc=<?=$cek['musteri_uniq']?>" class="btn btn-icon btn-icon-only btn-purple btn-icon-style-4"><span class="btn-icon-wrap"><i class="fa fa-edit"></i></span></a>
													<button type="button" title="Sil" class="btn btn-icon btn-icon-only btn-purple btn-icon-style-4 bt" id="<?=$cek['musteri_uniq']?>"><span class="btn-icon-wrap"><i class="fa fa-times"></i></span></button>
													<a title="Hizmetler" class="btn btn-icon btn-icon-only btn-purple btn-icon-style-4"><span class="btn-icon-wrap"><i class="fa fa-eye"></i></span></a>
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


<script type="text/javascript">
	$(document).ready(function(){

		$('.bt').click(function(){

			var th = $(this);

			var id = $(this).attr("id");



			Swal({
				title: 'Silmek İstediğine Emin Misin?',
				text: "Bu İşlemin Geri Dönüşü Olmayacaktır!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Sil!',
				cancelButtonText: 'İptal'
			}).then((result) => {
				if (result.value) {

					$.ajax({

						url:'inc/sil.php',
						type:'POST',
						data:{musterisil:id},
						success:function(data){
							th.parents('tr').hide();
						}
					})
					Swal(
						'Silindi!',
						'İşlem Başarılı',
						'success'
						)
				}
			})

		});


	});

</script>