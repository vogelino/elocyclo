import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchField extends Component {
	constructor(props) {
		super(props);

		this.state = { opened: false, searchQuery: '' };
	}
	setSearchFieldVisibility(opened) {
		if (opened) {
			this.inputField.focus();
			this.inputField.select();
		}
		this.setState({ opened });
	}
	updateSearchQuery(searchQuery) {
		this.setState({ searchQuery });
	}
	render() {
		const { opened, searchQuery } = this.state;
		return (
			<div className={`search-button ${opened ? 'opened' : 'closed'}`}>
				<small
					className="simple-button gradient"
					onClick={() => this.setSearchFieldVisibility(!opened)}
				>
					<b>{opened ? 'X' : 'ô'}</b>
				</small>
				<form>
					<input
						type="text"
						value={searchQuery}
						placeholder="Rechercher"
						onChange={(evt) => this.updateSearchQuery(evt.target.value)}
						ref={(input) => {
							this.inputField = input;
						}}
					/>
					<input type="submit" value="&ocirc;" />
				</form>
			</div>
		);
	}
}

export default SearchField;
