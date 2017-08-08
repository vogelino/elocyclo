	<?php 
	$pageName = 'Les vélos';
	$tabPage = false;
	include 'header.php'; ?>
	<div id="slider-container" class="page-slider-container">
		<section id="slider" class="page-slider">
			<ul class="row">
				<li>
					<blockquote class="full">
						<p>
							<strong>Prends et laisses où tu le souhaites!</strong>
						</p>
					</blockquote>
				</li>
			</ul>
			<nav id="slider-nav"></nav>
		</section>
	</div>
	<div id="container">
		<section class="noisy">
			<section class="white-box" id="stations-map">
				<div id="google-map">
					<iframe src="https://maps.google.ch/maps/ms?msa=0&amp;msid=215250084757442850896.0004c0c9ca42278c7096c&amp;ie=UTF8&amp;ll=46.429468,6.911647&amp;spn=0.028099,0.033264&amp;t=m&amp;output=embed"></iframe>
				</div>
			</section>
			<section class="white-box" id="map-caption">
				<p>
					Actuellement, l’association dispose de 10 stations de vélos électriques dans le périmètre urbain de
					Montreux, toutes à proximité des centres, noeuds d’échange urbains, gares, parkings périurbains et
					lieux de culture, sport et loisir.
				</p>
			</section>
			<section id="stations-status" class="white-box page-stations">
				<div class="white-box-title">
					<h3>Statuts des stations</h3>
				</div>
				<ul>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Gare de Montreux
							<i class="bike-stat bike-stat-on">
								5
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Auditorium Stravinski
							<i class="bike-stat bike-stat-on">
								15
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Port de Clarens
							<i class="bike-stat bike-stat-on">
								2
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Belmont / Montreux
							<i class="bike-stat bike-stat-on">
								19
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Chernex
							<i class="bike-stat bike-stat-off">
								0
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Gare de Glion
							<i class="bike-stat bike-stat-on">
								7
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Vetaux-Chillon
							<i class="bike-stat bike-stat-on">
								12
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Les planches
							<i class="bike-stat bike-stat-on">
								5
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Casino
							<i class="bike-stat bike-stat-off">
								0
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Port de Territet
							<i class="bike-stat bike-stat-on">
								5
							</i>
						</a>
					</li>
				</ul>
				<a href="#" class="white-box-link" title="Voir la carte <?php echo $siteName; ?>">
					<span>
						Voir la carte >
						<small>
							1
						</small>
					</span>
				</a>
			</section>
		</section>
		<?php include 'footer.php';?>
