import React, { Component } from 'react';

export default class extends Component {
	constructor(props) {
		super(props);

		this.state = { activeSlide: 0 };
	}
	componentDidMount() {
		setInterval(() => {
			const { activeSlide: currentSlide } = this.state;
			let activeSlide = currentSlide + 1;
			if (activeSlide >= 3) {
				activeSlide = 0;
			}
			this.setState({ activeSlide });
		}, 8000);
	}
	render() {
		const { activeSlide } = this.state;
		return (
			<div id="slider-container">
				<section id="slider">
					<ul className="row multi-slides">
						<li className={activeSlide === 0 ? 'active' : ''}>
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
						<li className={activeSlide === 1 ? 'active' : ''}>
							<section className="slide-img" />
							<blockquote>
								<p>
									<strong>Quand tu veux,</strong><br />
									Dans déjà dix stations!
								</p>
								<a href="/stations" title="Voir la carte" className="simple-button gradient">Parcourir les stations</a>
							</blockquote>
						</li>
						<li className={activeSlide === 2 ? 'active' : ''}>
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
	}
}
