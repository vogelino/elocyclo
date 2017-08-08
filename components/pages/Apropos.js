import React from 'react';

export default () => (
	<div id="container">
		<section className="noisy">
			<section className="tabs">
				<ul id="tab-nav">
					<li className="active"><a href="#concept" className="simple-button gradient tab-button">Concept</a></li>
					<li><a href="#fonctionnement" className="simple-button gradient tab-button ">Fonctionnement</a></li>
				</ul>
				<div className="tab-zone white-box" id="concept">
					<section className="tab-content page-tab-content">
						<h2>Le réseau Elocyclo</h2>
						<p>
							Une initiative de l&#39;association urbaine liée à
							la commune de Montreux. Prendre un vélo électrique
							dans une station, le déposer dans une autre.
							Elocyclo est <strong>un système d&#39;usage gratuit
							en libre-service</strong> simple à utiliser, disponible
							<strong>24 heures sur 24 et 7 jours sur 7</strong>.
							Notre association couvre l&#39;entier du territoire
							de la région de Montreux.
						</p>
						<p className="separated-tab-p">
							Actuellement, l&#39;association dispose de 10 stations
							de vélos électriques dans <strong>le périmètre urbain de
							Montreux</strong>, toutes à proximité des centres, noeuds
							d&#39;échange urbains, gares, parkings périurbains et
							lieux de culture, sport et loisir.
						</p>
						<p className="separated-tab-p">
							L&#39;abonnement des membres de <strong>CHFr 50.-</strong>
							par an ne couvre qu&#39;une petite part du fonctionnement
							de Elocyclo.
							Nous bénéficions de subventions de la municipalité de
							Montreux, ainsi que du sponsoring et de la
							vente d&#39;espace publicitaire sur nos stations et
							vélos. Nous investissons l&#39;intégralité de nos bénéfices
							dans l&#39;entretien, le remplacement et l&#39;achat
							de nouveaux vélos, électriques ainsi que dans le
							développement de nouvelles stations.
						</p>
					</section>
				</div>
				<div className="tab-zone white-box" id="fonctionnement">
					<section className="tab-content page-tab-content">
						<h2>Comment utiliser le service?</h2>
						<p>
							<strong>Retirer un vélo électrique</strong><br /><br />
							Vous pouvez utiliser un vélo électrique Elocyclo pendant 24h.
							Pour utiliser un vélo électrique, identifiez-vous sur
							la borne, avec votre nom, prénom et numéro d&#39;identification
							d&#39;usager. Un message vous indique le numéro du point
							d&#39;accroche (1 à 20) du vélo électrique qui vous est
							attribué. Les vélos électriques proposés sont tous rechargés.
							L&#39;autonomie moyenne est de 4h. Vous pouvez recharger
							l&#39;Elocyclo sur la place visiteur de toutes nos stations, ou
							via toute prise 220V.<br /><br />
							S&#39;il n&#39;y a plus de vélos électriques en station, désolé,
							il vous faut vous rendre à la station suivante.<br />
							S&#39;il n&#39;y a plus de vélos électriques chargés, désolé,
							patientez ou allez à la station suivante.<br /><br />
							Notre borne vous aidera à localiser les stations, ainsi que leur
							disponibilité actuelle : choisissez le menu « stations ». Elle
							peut également vous informer sur le statut de charge des vélos de cette
							station: choisissez le menu « charges ».
						</p>
						<p className="separated-tab-p">
							<strong>Restituer son vélo électrique</strong><br /><br />
							Une fois votre trajet terminé, accrochez le vélo électrique
							sur un point d&#39;attache libre dans n&#39;importe
							quelle station Elocyclo. Identifiez-vous sur la borne,
							avec votre nom, prénom et numéro d&#39;identification d&#39;usager.
							La borne vous fournira un numéro de point d&#39;accroche disponible (1 à 20).
							Placez-y votre Elocyclo. Un message vous confirmera que
							le vélo a bien été restitué, le point d&#39;accroche verrouillé
							et la mise en charge effectuée.<br /><br />
							Si tous les points d&#39;accroche sont occupés, désolé, il
							vous faut vous rendre à la station suivante.
							Notre borne vous aidera à localiser les stations, ainsi
							que leur disponibilité actuelle : choisissez le
							menu «stations».
						</p>
						<p className="separated-tab-p">
							<strong>Retard de restitution, non-restitution, casse et vol</strong><br /><br />
							Si vous rendez votre Elocyclo en retard (après 24h d&#39;usage),
							nous vous adresserons par courrier une surtaxe de CHFr. 5.-
							par heure. Si vous ne rendez pas un Elocyclo dans le mois
							suivant l&#39;usage, nous vous adresserons par courrier une
							facture de remboursement de CHFr 1&#39;000.-<br /><br />
							Si vous cassez un Elocyclo, que vous soyez coupable ou
							victime, ou même en cas de léger dégât, notre assurance
							prend les frais en charge. Annoncez-vous sur la borne en
							choisissant le menu «défaut».<br /><br />
							Si vous vous faites voler un Elocyclo, déclarez le vol à
							la police et contactez-nous par courrier ou courriel. Si le
							vol est attesté, notre assurance prend en charge les frais de remplacement.
							L&#39;association Elocyclo porte alors plainte pour vol.
						</p>
					</section>
				</div>
			</section>
			<a href="/inscription" title="Inscription <?php echo $siteName; ?>" id="want-it" className="about-want gradient">
				S&#39;inscrire
			</a>
		</section>
	</div>
);
