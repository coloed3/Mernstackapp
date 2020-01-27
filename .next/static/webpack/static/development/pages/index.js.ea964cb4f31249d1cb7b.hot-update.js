webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "c:\\Users\\ecolon\\projects\\reactproducts\\react-reserve\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Home() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getProducts();
  }, []);

  function getProducts() {
    var url, response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getProducts$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = 'http://localhost:3000/api/products';
            _context.next = 3;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url));

          case 3:
            response = _context.sent;
            console.log(response);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "test"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ea964cb4f31249d1cb7b.hot-update.js.map