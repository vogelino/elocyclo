import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ pageName }) => (
	<div id="head-container" className="row bordered">
		<header className="noisy" id="main-header">
			<a id="logo" href="/" title="Accueil" />
			<nav>
				<ul>
					<li>
						<a
							className={`simple-button ${pageName === 'home' ? 'active' : ''} gradient`}
							href="/"
							title="Accueil"
						>
							Accueil
						</a>
					</li>
					<li>
						<div
							className={`simple-button select-button gradient ${pageName === 'elocyclo' ? 'active' : ''}`}
							id="menu-select"
						>
							{'L\'association'}
							<section className="simple-button">
								<small className="rotate">&#123;</small>
							</section>
							<ul>
								<li>
									<a
										href="/apropos"
										title="À propos"
										className={pageName === 'apropos' ? 'active' : ''}
									>
										À propos
									</a>
								</li>
								<li>
									<a
										href="/stations"
										title="Les stations"
										className={pageName === 'stations' ? 'active' : ''}
									>
										Les stations
									</a>
								</li>
								<li>
									<a
										href="/inscription"
										title="Inscription"
										className={pageName === 'inscription' ? 'active' : ''}
									>
										Inscription
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a
							className={`simple-button gradient ${pageName === 'actualites' ? 'active' : ''}`}
							href="/actualites"
							title="Actualités"
						>
							Actualités
						</a>
					</li>
					<li>
						<a
							className={`simple-button gradient ${pageName === 'contact' ? 'active' : ''}`}
							href="/contact"
							title="Contact"
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
			<ul id="lang-n-search">
				<li>
					<div
						className="simple-button gradient"
						id="mobile-menu-button"
					>
						<span>Menu</span>
						<small>
							<b>i</b>
							<b>X</b>
						</small>
					</div>
				</li>
				<li>
					<div
						className="simple-button gradient"
						id="search-button"
					>
						<small>
							<b>&ocirc;</b>
							<b>X</b>
						</small>
						<form>
							<input type="text" value="Search something" />
							<input type="submit" value="&ocirc;" />
						</form>
					</div>
				</li>
			</ul>
		</header>
	</div>
);

Header.propTypes = {
	pageName: PropTypes.oneOf([
		'home',
		'elocyclo',
		'apropos',
		'stations',
		'inscription',
		'actualites',
		'contact',
	]).isRequired,
};

export default Header;
