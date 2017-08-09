import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MenuDropdwonLink = ({ url, text, active }) => (
	<li>
		<a
			href={url}
			title={text}
			className={active ? 'active' : ''}
		>
			{text}
		</a>
	</li>
);

MenuDropdwonLink.propTypes = {
	url: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
};

class MenuDropdwon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dropdownOpened: false,
		};
	}
	toggleSubmenuVisibility() {
		this.setState({ dropdownOpened: !this.state.dropdownOpened });
	}
	render() {
		const { dropdownOpened } = this.state;
		const { dropdownText, links } = this.props;
		return (
			<div
				className={`
					simple-button
					select-button
					gradient
					${links.find(({ active }) => active) ? 'active' : ''}
					${dropdownOpened ? 'opened' : 'closed'}
				`}
				id="menu-select"
			>
				<span onClick={() => this.toggleSubmenuVisibility()}>
					{dropdownText}
					<section className="simple-button">
						<small className="rotate">&#123;</small>
					</section>
				</span>
				<ul>
					{links.map((link) => <MenuDropdwonLink key={link.url} {...link} />)}
				</ul>
			</div>
		);
	}
}

MenuDropdwon.propTypes = {
	dropdownText: PropTypes.string.isRequired,
	links: PropTypes.arrayOf(PropTypes.shape(MenuDropdwonLink.propTypes)).isRequired,
};

export default MenuDropdwon;
