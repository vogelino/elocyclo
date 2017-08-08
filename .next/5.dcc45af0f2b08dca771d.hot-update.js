webpackHotUpdate(5,{

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

var _HtmlHead = __webpack_require__(554);

var _HtmlHead2 = _interopRequireDefault(_HtmlHead);

var _Header = __webpack_require__(555);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(558);

var _Footer2 = _interopRequireDefault(_Footer);

var _Slider = __webpack_require__(556);

var _Slider2 = _interopRequireDefault(_Slider);

var _Home = __webpack_require__(557);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/lucasvogel/Sites/elocyclo/src/pages/index.js?entry';


var currentPage = {
	title: 'Accueil',
	slug: 'home',
	path: '/'
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
	}), _react2.default.createElement(_Slider2.default, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}), _react2.default.createElement(_Home2.default, {
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/lucasvogel/Sites/elocyclo/src/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/lucasvogel/Sites/elocyclo/src/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(108)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(31);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/lucasvogel/Sites/elocyclo/src/components/Footer.js";

exports.default = function () {
	return _react2.default.createElement("footer", { id: "main-footer", __source: {
			fileName: _jsxFileName,
			lineNumber: 4
		}
	}, _react2.default.createElement("div", { id: "back-top-btn", __source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement("a", { href: "#top", __source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}, "Retour au haut")), _react2.default.createElement("div", { id: "footer-content", __source: {
			fileName: _jsxFileName,
			lineNumber: 10
		}
	}, _react2.default.createElement("ul", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 11
		}
	}, _react2.default.createElement("li", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 12
		}
	}, "\xA9 Elocyclo 2012, tous droits reserv\xE9s"), _react2.default.createElement("li", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 15
		}
	}, _react2.default.createElement("a", { href: "#", title: "Mentions l\xE9gales", __source: {
			fileName: _jsxFileName,
			lineNumber: 16
		}
	}, "Mentions l\xE9gales")), _react2.default.createElement("li", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 18
		}
	}, _react2.default.createElement("a", { href: "#", title: "Plan du site", __source: {
			fileName: _jsxFileName,
			lineNumber: 19
		}
	}, "Plan du site")), _react2.default.createElement("li", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 21
		}
	}, _react2.default.createElement("a", { href: "/", title: "Contact", __source: {
			fileName: _jsxFileName,
			lineNumber: 22
		}
	}, "Contact")), _react2.default.createElement("li", {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 24
		}
	}, _react2.default.createElement("a", { href: "mailto:info@elocyclo.org", title: "Contact", __source: {
			fileName: _jsxFileName,
			lineNumber: 25
		}
	}, "info@elocyclo.org")))));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/lucasvogel/Sites/elocyclo/src/components/Footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/lucasvogel/Sites/elocyclo/src/components/Footer.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kY2M0NWFmMGYyYjA4ZGNhNzcxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZDI2ZGE2MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcz9kMjZkYTYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSHRtbEhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IdG1sSGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IFNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL1NsaWRlcic7XG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2VzL0hvbWUnO1xuXG5jb25zdCBjdXJyZW50UGFnZSA9IHtcblx0dGl0bGU6ICdBY2N1ZWlsJyxcblx0c2x1ZzogJ2hvbWUnLFxuXHRwYXRoOiAnLycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1wYWdlXCI+XG5cdFx0PEh0bWxIZWFkIHBhZ2U9e2N1cnJlbnRQYWdlfSAvPlxuXHRcdDxIZWFkZXIgcGFnZU5hbWU9e2N1cnJlbnRQYWdlLnNsdWd9IC8+XG5cdFx0PFNsaWRlciAvPlxuXHRcdDxIb21lIC8+XG5cdFx0PEZvb3RlciBwYWdlTmFtZT17Y3VycmVudFBhZ2Uuc2x1Z30gLz5cblx0PC9kaXY+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG5cdDxmb290ZXIgaWQ9XCJtYWluLWZvb3RlclwiID5cblx0XHQ8ZGl2IGlkPVwiYmFjay10b3AtYnRuXCIgPlxuXHRcdFx0PGEgaHJlZj1cIiN0b3BcIj5cblx0XHRcdFx0UmV0b3VyIGF1IGhhdXRcblx0XHRcdDwvYT5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnRcIj5cblx0XHRcdDx1bD5cblx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdCZjb3B5OyBFbG9jeWNsbyAyMDEyLCB0b3VzIGRyb2l0cyByZXNlcnbDqXNcblx0XHRcdFx0PC9saT5cblx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgdGl0bGU9XCJNZW50aW9ucyBsw6lnYWxlc1wiPk1lbnRpb25zIGzDqWdhbGVzPC9hPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiB0aXRsZT1cIlBsYW4gZHUgc2l0ZVwiPlBsYW4gZHUgc2l0ZTwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvXCIgdGl0bGU9XCJDb250YWN0XCI+Q29udGFjdDwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJtYWlsdG86aW5mb0BlbG9jeWNsby5vcmdcIiB0aXRsZT1cIkNvbnRhY3RcIj5pbmZvQGVsb2N5Y2xvLm9yZzwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvdWw+XG5cdFx0PC9kaXY+XG5cdDwvZm9vdGVyPlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBTkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBdEJBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=