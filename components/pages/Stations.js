import React from 'react';

export default () => (
	<div id="container">
		<section className="noisy">
			<section className="white-box" id="stations-map">
				<div id="google-map">
					<iframe
						title="stations-map"
						frameBorder="0"
						style={{ border: 0 }}
						src="https://www.google.com/maps/d/embed?mid=1ebGUPZQ9vylKbcagJ_3wkRHWmYU"
					/>
				</div>
			</section>
			<section className="white-box" id="map-caption">
				<p>
					Actuellement, l’association dispose de 10 stations de vélos
					électriques dans le périmètre urbain de Montreux, toutes à
					proximité des centres, noeuds d’échange urbains, gares,
					parkings périurbains et lieux de culture, sport et loisir.
				</p>
			</section>
			<section id="stations-status" className="white-box page-stations">
				<div className="white-box-title">
					<h3>Statuts des stations</h3>
				</div>
				<ul>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Gare de Montreux
							<i className="bike-stat bike-stat-on">
								5
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Auditorium Stravinski
							<i className="bike-stat bike-stat-on">
								15
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Port de Clarens
							<i className="bike-stat bike-stat-on">
								2
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Belmont / Montreux
							<i className="bike-stat bike-stat-on">
								19
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Chernex
							<i className="bike-stat bike-stat-off">
								0
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Gare de Glion
							<i className="bike-stat bike-stat-on">
								7
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Vetaux-Chillon
							<i className="bike-stat bike-stat-on">
								12
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Les planches
							<i className="bike-stat bike-stat-on">
								5
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Casino
							<i className="bike-stat bike-stat-off">
								0
							</i>
						</a>
					</li>
					<li>
						<a href="#" title="Statut de la station <?php echo $siteName; ?>">
							Port de Territet
							<i className="bike-stat bike-stat-on">
								5
							</i>
						</a>
					</li>
				</ul>
			</section>
		</section>
	</div>
);
