'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HtmlHead = require('../components/HtmlHead');

var _HtmlHead2 = _interopRequireDefault(_HtmlHead);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _AproposSlider = require('../components/AproposSlider');

var _AproposSlider2 = _interopRequireDefault(_AproposSlider);

var _Apropos = require('../components/pages/Apropos');

var _Apropos2 = _interopRequireDefault(_Apropos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/lucasvogel/Sites/elocyclo/src/pages/apropos.js?entry';


var currentPage = {
	title: 'À propos',
	slug: 'apropos',
	path: '/apropos'
};

exports.default = function () {
	return _react2.default.createElement('div', { className: 'home-page', __source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement(_HtmlHead2.default, { page: currentPage, __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}), _react2.default.createElement(_Header2.default, { pageName: currentPage.slug, __source: {
			fileName: _jsxFileName,
			lineNumber: 17
		}
	}), _react2.default.createElement(_AproposSlider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}), _react2.default.createElement(_Apropos2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}), _react2.default.createElement(_Footer2.default, { pageName: currentPage.slug, __source: {
			fileName: _jsxFileName,
			lineNumber: 20
		}
	}));
};