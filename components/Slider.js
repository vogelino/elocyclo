import React from 'react';

export default () => (
	<div id="slider-container">
		<section id="slider">
			<ul className="row">
				<li>
					<section className="slide-img" />
					<blockquote>
						<p>
							<strong>Vas-y à vélo!</strong><br />
							{'C\'est tellement'}<br />
							{'plus simple.'}
						</p>
						<a href="/apropos" title="À propos" className="simple-button gradient">Découvres Elocyclo</a>
					</blockquote>
				</li>
				<li>
					<section className="slide-img" />
					<blockquote>
						<p>
							<strong>Quand tu veux,</strong><br />
							Dans déjà dix stations!
						</p>
						<a href="/stations" title="Voir la carte" className="simple-button gradient">Parcourir les stations</a>
					</blockquote>
				</li>
				<li>
					<section className="slide-img" />
					<blockquote>
						<p>
							<strong>Mieux que ton vélo:</strong><br />
							Du matériel de qualité
						</p>
						<a
							href="#"
							title="Matériel"
							className="simple-button gradient"
						>
							Voir les spécificités techniques
						</a>
					</blockquote>
				</li>
			</ul>
			<nav id="slider-nav" />
		</section>
	</div>
);
