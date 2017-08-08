	<?php 
	$pageName = 'Accueil';
	$tabPage = true;
	include 'header.php'; ?>
	<div id="slider-container">
		<section id="slider">
			<ul class="row">
				<li>
					<section class="slide-img">
					</section>
					<blockquote>
						<p>
							<strong>Vas-y à vélo!</strong><br />
							C'est tellement <br />plus simple.
						</p>
						<a href="<?php echo $siteUrl; ?>/a-propos.php" title="À propos <?php echo $siteName; ?>" class="simple-button gradient">Découvres Elocyclo</a>
					</blockquote>
				</li>
				<li>
					<section class="slide-img">
					</section>
					<blockquote>
						<p>
							<strong>Quand tu veux,</strong><br />
							Dans déjà dix stations!
						</p>
						<a href="<?php echo $siteUrl; ?>/les-stations.php" title="Voir la carte <?php echo $siteName; ?>" class="simple-button gradient">Parcourir les stations</a>
					</blockquote>
				</li>
				<li>
					<section class="slide-img">
					</section>
					<blockquote>
						<p>
							<strong>Mieux que ton vélo:</strong><br />
							Du matériel de qualité
						</p>
						<a href="#" title="Matériel <?php echo $siteName; ?>" class="simple-button gradient">Voir les spécificités techniques</a>
					</blockquote>
				</li>
			</ul>
			<nav id="slider-nav"></nav>
		</section>
	</div>
	<div id="container">
		<section class="noisy">
			<a href="<?php echo $siteUrl; ?>/inscription.php" title="Inscription <?php echo $siteName; ?>" id="want-it" class="want-home gradient">
				S'inscrire
			</a>
			<section class="tabs home-tabs" id="home-about-tab">
				<ul id="tab-nav">
					<li class="active"><a href="#quoi" class="simple-button gradient tab-button">Quoi?</a></li>
					<li><a href="#ou" class="simple-button gradient tab-button ">Où?</a></li>
					<li><a href="#comment" class="simple-button gradient tab-button ">Comment?</a></li>
				</ul>
				<div class="tab-zone white-box" id="quoi">
					<section class="tab-content">
						<h2>Elocyclo, c'est quoi?</h2>
						<p>
							Une initiative de l’association urbaine liée à la commune de Montreux.
						</p>
						<blockquote >
							Prendre un vélo électrique dans une station, le déposer dans une autre.
						</blockquote>
						<p>
							Elocyclo est un système d’usage gratuit en libre-service simple à utiliser, disponible 24 heures sur 24
							et 7 jours sur 7. Notre association couvre l’entier du territoire de la région de Montreux. 						
						</p>
						<a href="<?php echo $siteUrl; ?>/a-propos.php" title="À propos <?php echo $siteName; ?>">En savoir +</a>
					</section>
				</div>
				<div class="tab-zone white-box" id="ou">
					<section class="tab-content">
						<h2>Où puis-je en profiter?</h2>
						<p>
							Actuellement, l’association dispose de 10 stations de vélos électriques dans le périmètre urbain de
							Montreux, toutes à proximité des centres, noeuds d’échange urbains, gares, parkings périurbains et
							lieux de culture, sport et loisir.
						</p>
						<p>
							Chaque station est dotée d’une vingtaine de vélos électriques, fixés sur un point d’attache qui est lieu
							de recharge.
						</p>
						<a href="<?php echo $siteUrl; ?>/les-station.php" title="À propos <?php echo $siteName; ?>">En savoir +</a>
					</section>
				</div>
				<div class="tab-zone white-box" id="comment">
					<section class="tab-content">
						<h2>Comment ça fonctionne?</h2>
						<p>
							L’usage des vélos électrique est gratuit. Seule l’<a href="#" title="S'inscrire <?php echo $siteName; ?>">inscription</a> est payante !
							CHFr 50.- pour un an.
						</p>
						<p>
							Une borne d’emprunt vous permet de vous identifier, de vous attribuer un vélo électrique
							chargé et de libérer son point d’attache. Chaque station a une place visiteur qui vous permet de
							recharger un vélo Elocyclo dont vous souhaitez conserver l’usage.
						</p>
						<a href="<?php echo $siteUrl; ?>/a-propos.php#fonctionnement-tab" title="À propos <?php echo $siteName; ?>">En savoir +</a>
					</section>
				</div>
			</section>
			<section id="stations-status" class="tierce-zone">
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
				<a href="<?php echo $siteUrl; ?>/les-stations.php" class="white-box-link" title="Voir la carte <?php echo $siteName; ?>">
					<span>
						Voir la carte >
						<small>
							1
						</small>
					</span>
				</a>
			</section>
			<section class="tabs white-box actus" >
				<div class="white-box-title">
					<h3>Actualités</h3>
				</div>
				<ul>
					<li class="actu">
						<a class="actu-img" href="#" title="Actualités <?php echo $siteName; ?>"></a>
						<div class="actu-content">
							<h4><a href="#" title="Actualités <?php echo $siteName; ?>">Des donations encourageantes</a></h4>
							<div class="actu-txt">
								<p>
									Le bilan des donations du dernier semestre révèle une augmentation majeure des dons en comparaison au précédent. L’augmentation de l’inscription de
									nouveaux membres s’y ajoutant, Elocyclo prévoit d’investir dans le sens d’un agrandissement du réseaux cyclable d’ici à la fin de l’année. Ces nouvelles …
								</p>
							</div>
						</div>
						<a href="#" title="Actualités <?php echo $siteName; ?>" class="simple-button gradient">
							<small>
								/
							</small>
						</a>
					</li>
					<li class="actu">
						<a class="actu-img" href="#" title="Actualités <?php echo $siteName; ?>"></a>
						<div class="actu-content">
							<h4><a href="#" title="Actualités <?php echo $siteName; ?>">Découvrez l'application Elocyclo</a></h4>
							<div class="actu-txt">
								<p>
									À l'aide de la récente application Elocyclo, chaque utilisateur du service peux se passer de la borne et ainsi retirer ou restituer encore
									plus facilement qu'auparavant. Naturellement gratuite elle est d'utilisation quasi instantanée grâce à son ergonomie simple et intuitive …
								</p>
							</div>
						</div>
						<a href="#" title="Actualités <?php echo $siteName; ?>" class="simple-button gradient">
							<small>
								/
							</small>
						</a>
					</li>
					<li class="actu">
						<a class="actu-img" href="#" title="Actualités <?php echo $siteName; ?>"></a>
						<div class="actu-content">
							<h4><a href="#" title="Actualités <?php echo $siteName; ?>">Une collaboration avec Tandem</a></h4>
							<div class="actu-txt">
								<p>
									Les récents modèles de e-bike qui occupent désormais les stations Elocyclo sont issu d'une collaboration avec le magasin Tandem situé à Vevey.
									Le commerce de vélo munis du meilleurs matériel dans le domaine ont sélectionné pour vous le modèle de la marque A2B qui garantis qualité et …
								</p>
							</div>
						</div>
						<a href="#" title="Actualités <?php echo $siteName; ?>" class="simple-button gradient">
							<small>
								/
							</small>
						</a>
					</li>
				</ul>
				<a href="#" class="white-box-link" title="Voir les actualités <?php echo $siteName; ?>">
					<span>
						Voir la totalité des actualités >
						<small>
							7
						</small>
					</span>
				</a>
			</section>
			<section id="pub-zone" class="tierce-zone">
				<div class="white-box-title">
					<h3>Contribuer à l'association</h3>
				</div>
				
				<a href="#" title="Inscription <?php echo $siteName; ?>" id="don-it" class="gradient">
					Faire un don
				</a>
			</section>
			<section id="pub-zone" class="tierce-zone">
				<div class="white-box-title">
					<h3>Étendre sa visibilité</h3>
				</div>
				<img src="img/elocyclo-pub.gif" alt="Faire de la publicité via Elocyclo"/>
				<p>
					<strong>Faire de la publicité via Elocyclo</strong><br /><br />
					Les espaces publicitaire disposé sur les vélos Elocyclo offrent aux annonceurs une visibilité exeptionnelle.<br/><br/>
					De par leur nature de moyen de transport, les vélos constituent de réelles affiche ambulates!
				</p>
				<a href="mailto:pub@elocyclo.org" target="_blank" class="white-box-link" title="Voir la carte <?php echo $siteName; ?>">
					<span>
						Contactez-nous!
						<small>
							%
						</small>
					</span>
				</a>
			</section>
		</section>
		<?php include 'footer.php';?>
