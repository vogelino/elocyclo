'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/lucasvogel/Sites/elocyclo/src/components/HtmlHead.js';


var HtmlHead = function HtmlHead(_ref) {
	var page = _ref.page;
	return _react2.default.createElement(_head2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
			fileName: _jsxFileName,
			lineNumber: 7
		}
	}), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		}
	}), _react2.default.createElement('title', {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 9
		}
	}, page.title + ' | Elocyclo, take it and live it | Location de v\xE9los \xE9l\xE9ctriques \xE0 Monreux'), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/resetbrowser.css', __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/main.css', __source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}));
};

HtmlHead.propTypes = {
	page: _propTypes2.default.shape({
		title: _propTypes2.default.string.isRequired,
		slug: _propTypes2.default.string.isRequired,
		path: _propTypes2.default.string.isRequired
	}).isRequired
};

exports.default = HtmlHead;