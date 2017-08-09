import React from 'react';
import TabbedView from '../TabbedView';

export default () => {
	const tabsProps = {
		className: 'home-tabs',
		id: 'home-about-tab',
		tabs: [
			{
				tabTitle: 'Quoi?',
				tabId: 'quoi',
				tabIndex: 0,
				tabContent: (
					<div>
						<h2>{'Elocyclo, c\'est quoi?'}</h2>
						<p>
							Une initiative de l’association urbaine liée à la commune de Montreux.
						</p>
						<blockquote >
							Prendre un vélo électrique dans une station, le déposer dans une autre.
						</blockquote>
						<p>
							Elocyclo est un système d’usage gratuit en
							libre-service simple à utiliser, disponible 24 heures sur 24
							et 7 jours sur 7. Notre association couvre l’entier
							du territoire de la région de Montreux.
						</p>
						<a href="/apropos" title="À propos">En savoir +</a>
					</div>
				),
			},
			{
				tabTitle: 'Où puis-je en profiter?',
				tabId: 'ou',
				tabIndex: 1,
				tabContent: (
					<div>
						<h2>Où puis-je en profiter?</h2>
						<p>
							Actuellement, l’association dispose de 10 stations
							de vélos électriques dans le périmètre urbain de
							Montreux, toutes à proximité des centres, noeuds
							d’échange urbains, gares, parkings périurbains et
							lieux de culture, sport et loisir.
						</p>
						<p>
							Chaque station est dotée d’une vingtaine de
							vélos électriques, fixés sur un point d’attache
							qui est lieu de recharge.
						</p>
						<a href="/stations" title="À propos">En savoir +</a>
					</div>
				),
			},
			{
				tabTitle: 'Comment ça fonctionne?',
				tabId: 'comment',
				tabIndex: 2,
				tabContent: (
					<div>
						<h2>Comment ça fonctionne?</h2>
						<p>
							L’usage des vélos électrique est gratuit. Seule l’<a href="#" title="S'inscrire">inscription</a> est payante !
							CHFr 50.- pour un an.
						</p>
						<p>
							Une borne d’emprunt vous permet de vous identifier,
							de vous attribuer un vélo électrique
							chargé et de libérer son point d’attache.
							Chaque station a une place visiteur qui vous permet de
							recharger un vélo Elocyclo dont vous souhaitez conserver l’usage.
						</p>
						<a href="/apropos#fonctionnement-tab" title="À propos">En savoir +</a>
					</div>
				),
			},
		],
	};
	return (
		<div id="container">
			<section className="noisy">
				<a href="/inscription" title="Inscription" id="want-it" className="want-home gradient">
					{'S\'inscrire'}
				</a>
				<TabbedView {...tabsProps} />
				<section id="stations-status" className="tierce-zone">
					<div className="white-box-title">
						<h3>Statuts des stations</h3>
					</div>
					<ul>
						<li>
							<a href="#" title="Statut de la station">
								Gare de Montreux
								<i className="bike-stat bike-stat-on">
									5
								</i>
							</a>
						</li>
						<li>
							<a href="#" title="Statut de la station">
								Auditorium Stravinski
								<i className="bike-stat bike-stat-on">
									15
								</i>
							</a>
						</li>
						<li>
							<a href="#" title="Statut de la station">
								Port de Clarens
								<i className="bike-stat bike-stat-on">
									2
								</i>
							</a>
						</li>
						<li>
							<a href="#" title="Statut de la station">
								Belmont / Montreux
								<i className="bike-stat bike-stat-on">
									19
								</i>
							</a>
						</li>
						<li>
							<a href="#" title="Statut de la station">
								Chernex
								<i className="bike-stat bike-stat-off">
									0
								</i>
							</a>
						</li>
						<li>
							<a href="#" title="Statut de la station">
								Gare de Glion
								<i className="bike-stat bike-stat-on">
									7
								</i>
							</a>
						</li>
						<li>
							<a href="#" title="Statut de la station">
								Vetaux-Chillon
								<i className="bike-stat bike-stat-on">
									12
								</i>
							</a>
						</li>
						<li>
							<a href="#" title="Statut de la station">
								Les planches
								<i className="bike-stat bike-stat-on">
									5
								</i>
							</a>
						</li>
						<li>
							<a href="#" title="Statut de la station">
								Casino
								<i className="bike-stat bike-stat-off">
									0
								</i>
							</a>
						</li>
						<li>
							<a href="#" title="Statut de la station">
								Port de Territet
								<i className="bike-stat bike-stat-on">
									5
								</i>
							</a>
						</li>
					</ul>
					<a href="/stations" className="white-box-link" title="Voir la carte">
						<span>
							{'Voir la carte >'}
							<small>
								1
							</small>
						</span>
					</a>
				</section>
				<section className="tabs white-box actus" >
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
										une augmentation majeure des dons en comparaison au précédent.
										L’augmentation de l’inscription de
										nouveaux membres s’y ajoutant, Elocyclo prévoit d’investir dans
										le sens d’un agrandissement du réseaux cyclable d’ici à la fin
										de l’année. Ces nouvelles …
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
								<h4><a href="#" title="Actualités">{'Découvrez l\'application Elocyclo'}</a></h4>
								<div className="actu-txt">
									<p>
										{'À l\'aide de la récente application Elocyclo,'}
										chaque utilisateur du service peux se passer
										de la borne et ainsi retirer ou restituer encore
										{'plus facilement qu\'auparavant. Naturellement gratuite'}
										{'elle est d\'utilisation quasi instantanée grâce à son'}
										ergonomie simple et intuitive …
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
										Les récents modèles de e-bike qui occupent désormais
										{'les stations Elocyclo sont issu d\'une collaboration'}
										avec le magasin Tandem situé à Vevey.
										Le commerce de vélo munis du meilleurs matériel dans
										le domaine ont sélectionné pour vous le modèle de la
										marque A2B qui garantis qualité et …
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
					<a href="#" className="white-box-link" title="Voir les actualités">
						<span>
							{'Voir la totalité des actualités >'}
							<small>
								7
							</small>
						</span>
					</a>
				</section>
				<section id="pub-zone" className="tierce-zone">
					<div className="white-box-title">
						<h3>{'Contribuer à l\'association'}</h3>
					</div>
					<a href="#" title="Inscription" id="don-it" className="gradient">
						Faire un don
					</a>
				</section>
				<section id="pub-zone" className="tierce-zone">
					<div className="white-box-title">
						<h3>Étendre sa visibilité</h3>
					</div>
					<img src="/static/img/elocyclo-pub.gif" alt="Faire de la publicité via Elocyclo" />
					<p>
						<strong>Faire de la publicité via Elocyclo</strong><br /><br />
						Les espaces publicitaire disposé sur les vélos Elocyclo offrent aux
						annonceurs une visibilité exeptionnelle.<br /><br />
						De par leur nature de moyen de transport, les vélos
						constituent de réelles affiche ambulates!
					</p>
					<a
						href="mailto:pub@elocyclo.org"
						target="_blank"
						rel="noreferrer noopener"
						className="white-box-link"
						title="Voir la carte"
					>
						<span>
							Contactez-nous!
							<small>
								%
							</small>
						</span>
					</a>
				</section>
			</section>
		</div>
	);
};
