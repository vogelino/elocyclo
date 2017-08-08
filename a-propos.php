	<?php 
	$pageName = 'À propos';
	$tabPage = true;
	include 'header.php'; ?>
	<div id="slider-container" class="page-slider-container">
		<section id="slider" class="page-slider">
			<ul class="row">
				<li>
					<blockquote class="full">
						<p>
							<strong>Un concept simple et qui rend service!</strong>
						</p>
					</blockquote>
				</li>
			</ul>
			<nav id="slider-nav"></nav>
		</section>
	</div>
	<div id="container">
		<section class="noisy">
			<section class="tabs">
				<ul id="tab-nav">
					<li class="active"><a href="#concept" class="simple-button gradient tab-button">Concept</a></li>
					<li><a href="#fonctionnement" class="simple-button gradient tab-button ">Fonctionnement</a></li>
				</ul>
				<div class="tab-zone white-box" id="concept">
					<section class="tab-content page-tab-content">
						<h2>Le réseau Elocyclo</h2>
						<p>
							Une initiative de l’association urbaine liée à la commune de Montreux.
							Prendre un vélo électrique dans une station, le déposer dans une autre.
							Elocyclo est <strong>un système d’usage gratuit en libre-service</strong> simple à utiliser, disponible <strong>24 heures sur 24
							et 7 jours sur 7</strong>. Notre association couvre l’entier du territoire de la région de Montreux.
						</p>
						<p class="separated-tab-p">
							Actuellement, l’association dispose de 10 stations de vélos électriques dans <strong>le périmètre urbain de
							Montreux</strong>, toutes à proximité des centres, noeuds d’échange urbains, gares, parkings périurbains et
							lieux de culture, sport et loisir.
						</p>
						<p class="separated-tab-p">
							L'abonnement des membres de <strong>CHFr 50.-</strong> par an ne couvre qu’une petite part du fonctionnement de Elocyclo.
							Nous bénéficions de subventions de la municipalité de Montreux, ainsi que du sponsoring et de la
							vente d’espace publicitaire sur nos stations et vélos. Nous investissons l’intégralité de nos bénéfices
							dans l’entretien, le remplacement et l’achat de nouveaux vélos, électriques ainsi que dans le
							développement de nouvelles stations.
						</p>
					</section>
				</div>
				<div class="tab-zone white-box" id="fonctionnement">
					<section class="tab-content page-tab-content">
						<h2>Comment utiliser le service?</h2>
						<p>
							<strong>Retirer un vélo électrique</strong><br/><br/>
							Vous pouvez utiliser un vélo électrique Elocyclo pendant 24h.
							Pour utiliser un vélo électrique, identifiez-vous sur la borne, avec votre nom, prénom et numéro
							d’identification d’usager. Un message vous indique le numéro du point d’accroche (1 à 20) du vélo
							électrique qui vous est attribué. Les vélos électriques proposés sont tous rechargés. L’autonomie
							moyenne est de 4h. Vous pouvez recharger l’Elocyclo sur la place visiteur de toutes nos stations, ou
							via toute prise 220V.<br/><br/>
							S’il n’y a plus de vélos électriques en station, désolé, il vous faut vous rendre à la station suivante.<br/>
							S’il n’y a plus de vélos électriques chargés, désolé, patientez ou allez à la station suivante.<br/><br/>
							Notre borne vous aidera à localiser les stations, ainsi que leur disponibilité actuelle : choisissez le
							menu « stations ». Elle peut également vous informer sur le statut de charge des vélos de cette
							station: choisissez le menu « charges ».
						</p>
						<p class="separated-tab-p">
							<strong>Restituer son vélo électrique</strong><br/><br/>
							Une fois votre trajet terminé, accrochez le vélo électrique sur un point d'attache libre dans n'importe
							quelle station Elocyclo. Identifiez-vous sur la borne, avec votre nom, prénom et numéro
							d’identification d’usager. La borne vous fournira un numéro de point d’accroche disponible (1 à 20).
							Placez-y votre Elocyclo. Un message vous confirmera que le vélo a bien été restitué, le point
							d’accroche verrouillé et la mise en charge effectuée.<br/><br/>
							Si tous les points d’accroche sont occupés, désolé, il vous faut vous rendre à la station suivante.
							Notre borne vous aidera à localiser les stations, ainsi que leur disponibilité actuelle : choisissez le
							menu «stations».
						</p>
						<p class="separated-tab-p">
							<strong>Retard de restitution, non-restitution, casse et vol</strong><br/><br/>
							Si vous rendez votre Elocyclo en retard (après 24h d’usage), nous vous adresserons par courrier une
							surtaxe de CHFr. 5.- par heure. Si vous ne rendez pas un Elocyclo dans le mois suivant l’usage, nous
							vous adresserons par courrier une facture de remboursement de CHFr 1'000.-<br/><br/>
							Si vous cassez un Elocyclo, que vous soyez coupable ou victime, ou même en cas de léger dégât,
							notre assurance prend les frais en charge. Annoncez-vous sur la borne en choisissant le menu
							«défaut».<br/><br/>
							Si vous vous faites voler un Elocyclo, déclarez le vol à la police et contactez-nous par courrier ou
							courriel. Si le vol est attesté, notre assurance prend en charge les frais de remplacement.
							L’association Elocyclo porte alors plainte pour vol.
						</p>
					</section>
				</div>
			</section>
			<a href="<?php echo $siteUrl; ?>/inscription.php" title="Inscription <?php echo $siteName; ?>" id="want-it" class="about-want gradient">
				S'inscrire
			</a>
		</section>
		<?php include 'footer.php';?>
