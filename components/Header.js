import React from 'react';
import PropTypes from 'prop-types';
import MenuDropdown from './MenuDropdown';

const Header = ({ pageName }) => {
	const elocycloDropdown = {
		dropdownText: 'L\'association',
		links: [
			{
				url: '/apropos',
				text: 'À propos',
				active: pageName === 'apropos',
			},
			{
				url: '/stations',
				text: 'Les stations',
				active: pageName === 'stations',
			},
			{
				url: '/inscription',
				text: 'Inscription',
				active: pageName === 'inscription',
			},
		],
	};
	return (
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
							<MenuDropdown {...elocycloDropdown} />
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
};

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
