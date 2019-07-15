
<?php require_once 'pages/header.php'; ?>
<!-- Main Content -->
<div class="hk-pg-wrapper">
	<!-- Container -->
	<div class="container mt-xl-50 mt-sm-30 mt-15">
		<!-- Row -->
		<div class="row">
			<div class="col-xl-12">
				<div class="hk-row">
					<div class="col-sm-12">
						<div class="card-group hk-dash-type-2">
							<div class="card card-sm">
								<div class="card-body">
									<div class="d-flex justify-content-between mb-5">
										<div>
											<span class="d-block font-15 text-dark font-weight-500">Aktif Hosting</span>
										</div>
										<div>
											<span class="text-danger font-14 font-weight-500"><?=$bitenhostcek['say']?></span>
										</div>
									</div>
									<div>
										<span class="d-block display-4 text-dark mb-5"><span class="counter-anim"><?=$aktifhostcek['say']?></span></span>
									</div>
								</div>
							</div>

							<div class="card card-sm">
								<div class="card-body">
									<div class="d-flex justify-content-between mb-5">
										<div>
											<span class="d-block font-15 text-dark font-weight-500">Aktif Domain</span>
										</div>
										<div>
											<span class="text-danger font-14 font-weight-500"><?=$bitendomaincek['say']?></span>
										</div>
									</div>
									<div>
										<span class="d-block display-4 text-dark mb-5"><span class="counter-anim"><?=$aktifdomaincek['say']?></span></span>
									</div>
								</div>
							</div>

							<div class="card card-sm">
								<div class="card-body">
									<div class="d-flex justify-content-between mb-5">
										<div>
											<span class="d-block font-15 text-dark font-weight-500">Toplam Müşteri</span>
										</div>
									</div>
									<div>
										<span class="d-block display-4 text-dark mb-5"><span class="counter-anim"><?=$musterisaycek['say']?></span></span>
									</div>
								</div>
							</div>
						</div>
					</div>	
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
<!-- /Main Content -->
<?php require_once 'pages/footer.php'; ?>