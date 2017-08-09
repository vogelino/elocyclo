import React from 'react';

export default () => (
	<div id="container">
		<section className="noisy">
			<section className="tabs white-box" >
				<div className="white-box-title">
					<h3>Actualités</h3>
				</div>
				<ul>
					<li className="actu">
						<a className="actu-img" href="#" title="Actualités" />
						<div className="actu-content">
							<h4><a href="#" title="Actualités">Des donations encourageantes</a></h4>
							<div className="actu-txt">
								<p>
									Le bilan des donations du dernier semestre révèle
									une augmentation majeure des dons en comparaison
									au précédent. L’augmentation de l’inscription de
									nouveaux membres s’y ajoutant, Elocyclo prévoit
									d’investir dans le sens d’un agrandissement du
									réseaux cyclable d’ici à la fin de l’année. Ces nouvelles …
								</p>
							</div>
						</div>
						<a href="#" title="Actualités" className="simple-button gradient">
							<small>
								/
							</small>
						</a>
					</li>
					<li className="actu">
						<a className="actu-img" href="#" title="Actualités" />
						<div className="actu-content">
							<h4><a href="#" title="Actualités">Découvrez l{'\''}application Elocyclo</a></h4>
							<div className="actu-txt">
								<p>
									À l{'\''}aide de la récente application Elocyclo,
									chaque utilisateur du service peux se passer
									de la borne et ainsi retirer ou restituer encore
									plus facilement qu{'\''}auparavant. Naturellement
									gratuite elle est d{'\''}utilisation quasi instantanée
									grâce à son ergonomie simple et intuitive …
								</p>
							</div>
						</div>
						<a href="#" title="Actualités" className="simple-button gradient">
							<small>
								/
							</small>
						</a>
					</li>
					<li className="actu">
						<a className="actu-img" href="#" title="Actualités" />
						<div className="actu-content">
							<h4><a href="#" title="Actualités">Une collaboration avec Tandem</a></h4>
							<div className="actu-txt">
								<p>
									Les récents modèles de e-bike qui occupent
									désormais les stations Elocyclo sont issu {'d\'une'}
									collaboration avec le magasin Tandem situé à Vevey.
									Le commerce de vélo munis du meilleurs matériel
									dans le domaine ont sélectionné pour vous le
									modèle de la marque A2B qui garantis qualité et …
								</p>
							</div>
						</div>
						<a href="#" title="Actualités" className="simple-button gradient">
							<small>
								/
							</small>
						</a>
					</li>
				</ul>
				<div className="white-box-link pager">
					<a href="#" className="active">1</a>
					<a href="#">2</a>
					<a href="#">3</a>
					<a href="#">4</a>
					<a href="#">5</a>
					<a href="#">…</a>
				</div>
			</section>
		</section>
	</div>
);
