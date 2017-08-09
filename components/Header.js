import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuDropdown from './MenuDropdown';
import SearchField from './SearchField';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = { menuOpened: false };
	}
	toggleMenu() {
		this.setState({ menuOpened: !this.state.menuOpened });
	}
	render() {
		const { pageName } = this.props;
		const { menuOpened } = this.state;
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
					<nav className={menuOpened ? 'opened' : 'closed'}>
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
								onClick={() => this.toggleMenu()}
							>
								<span>Menu</span>
								<small>
									<b>{menuOpened ? 'X' : 'i'}</b>
								</small>
							</div>
						</li>
						<li>
							<SearchField />
						</li>
					</ul>
				</header>
			</div>
		);
	}
}

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
