'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/lucasvogel/Sites/elocyclo/src/components/Header.js';


var Header = function Header(_ref) {
	var pageName = _ref.pageName;
	return _react2.default.createElement('div', { id: 'head-container', className: 'row bordered', __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement('header', { className: 'noisy', id: 'main-header', __source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement('a', { id: 'logo', href: '/', title: 'Accueil', __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}), _react2.default.createElement('nav', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}, _react2.default.createElement('ul', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement('a', {
		className: 'simple-button ' + (pageName === 'home' ? 'active' : '') + ' gradient',
		href: '/',
		title: 'Accueil',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, 'Accueil')), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, _react2.default.createElement('div', {
		className: 'simple-button select-button gradient ' + (pageName === 'elocyclo' ? 'active' : ''),
		id: 'menu-select',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}, 'L\'association', _react2.default.createElement('section', { className: 'simple-button', __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, _react2.default.createElement('small', { className: 'rotate', __source: {
			fileName: _jsxFileName,
			lineNumber: 26
		}
	}, '{')), _react2.default.createElement('ul', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 28
		}
	}, _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 29
		}
	}, _react2.default.createElement('a', {
		href: '/apropos',
		title: '\xC0 propos',
		className: pageName === 'apropos' ? 'active' : '',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 30
		}
	}, '\xC0 propos')), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 38
		}
	}, _react2.default.createElement('a', {
		href: '/stations',
		title: 'Les stations',
		className: pageName === 'stations' ? 'active' : '',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, 'Les stations')), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 47
		}
	}, _react2.default.createElement('a', {
		href: '/inscription',
		title: 'Inscription',
		className: pageName === 'inscription' ? 'active' : '',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 48
		}
	}, 'Inscription'))))), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 59
		}
	}, _react2.default.createElement('a', {
		className: 'simple-button gradient ' + (pageName === 'actualites' ? 'active' : ''),
		href: '/actualites',
		title: 'Actualit\xE9s',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 60
		}
	}, 'Actualit\xE9s')), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 68
		}
	}, _react2.default.createElement('a', {
		className: 'simple-button gradient ' + (pageName === 'contact' ? 'active' : ''),
		href: '/contact',
		title: 'Contact',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 69
		}
	}, 'Contact')))), _react2.default.createElement('ul', { id: 'lang-n-search', __source: {
			fileName: _jsxFileName,
			lineNumber: 79
		}
	}, _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 80
		}
	}, _react2.default.createElement('div', {
		className: 'simple-button gradient',
		id: 'mobile-menu-button',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 81
		}
	}, _react2.default.createElement('span', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 85
		}
	}, 'Menu'), _react2.default.createElement('small', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 86
		}
	}, _react2.default.createElement('b', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 87
		}
	}, 'i'), _react2.default.createElement('b', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 88
		}
	}, 'X')))), _react2.default.createElement('li', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 92
		}
	}, _react2.default.createElement('div', {
		className: 'simple-button gradient',
		id: 'search-button',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 93
		}
	}, _react2.default.createElement('small', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 97
		}
	}, _react2.default.createElement('b', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 98
		}
	}, '\xF4'), _react2.default.createElement('b', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 99
		}
	}, 'X')), _react2.default.createElement('form', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 101
		}
	}, _react2.default.createElement('input', { type: 'text', value: 'Search something', __source: {
			fileName: _jsxFileName,
			lineNumber: 102
		}
	}), _react2.default.createElement('input', { type: 'submit', value: '\xF4', __source: {
			fileName: _jsxFileName,
			lineNumber: 103
		}
	})))))));
};

Header.propTypes = {
	pageName: _propTypes2.default.oneOf(['home', 'elocyclo', 'apropos', 'stations', 'inscription', 'actualites', 'contact']).isRequired
};

exports.default = Header;