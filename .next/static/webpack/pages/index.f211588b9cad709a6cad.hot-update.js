"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/page-components/Home/HomePage.tsx":
/*!***********************************************!*\
  !*** ./src/page-components/Home/HomePage.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/button */ "./node_modules/@chakra-ui/button/dist/esm/index.js");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.tsx");
/* harmony import */ var _chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/media-query */ "./node_modules/@chakra-ui/media-query/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\dev\\Polish\\pick-flix\\pickflix\\src\\page-components\\Home\\HomePage.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var HomePage = function HomePage() {
  _s();

  var buttonSize = (0,_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
    base: 'xs',
    md: 'md',
    lg: 'lg'
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {
    w: "100vw",
    color: "white",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {
      position: "fixed",
      w: "100vw",
      h: "80px",
      top: "0",
      overflow: "hidden",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {
      h: "calc(100vh - 80px)",
      mt: "80px",
      backgroundImage: "url('/homepage/background.jpg')",
      bgPosition: "center",
      bgRepeat: "no-repeat",
      bgSize: "cover",
      justifyContent: "center",
      alignItems: "center",
      pb: 20,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {
        flexDir: "column",
        alignItems: "center",
        maxW: {
          base: '90vw',
          md: '50vw'
        },
        textAlign: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Heading, {
          textAlign: "center",
          fontSize: {
            base: '3xl',
            md: '5xl',
            lg: '6xl'
          },
          m: {
            base: 1,
            md: 3
          },
          children: "Find the shows you both want to watch."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Text, {
          fontSize: {
            base: 'lg',
            md: '3xl',
            lg: '4xl'
          },
          mb: {
            base: 1,
            md: 3
          },
          children: "Swipe anywhere, anytime."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {
          m: 3,
          textAlign: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Text, {
            fontSize: {
              base: 'md',
              md: 'lg',
              lg: 'xl'
            },
            children: "Ready to swipe? Get started now."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {
            justifyContent: "center",
            mt: 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
              backgroundColor: "#e50914",
              color: "white",
              size: buttonSize,
              variant: "red-button",
              width: "66%",
              onClick: function onClick() {
                importInitialMovies;
              },
              children: "Get started"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(HomePage, "ykuaXPDM+Uf0Ho6LBBhKheBX8Xs=", false, function () {
  return [_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue];
});

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjIxMTU4OGI5Y2FkNzA5YTZjYWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTs7O0FBRUEsSUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxVQUFVLEdBQUdGLDBFQUFrQixDQUFDO0FBQ3BDRyxJQUFBQSxJQUFJLEVBQUUsSUFEOEI7QUFFcENDLElBQUFBLEVBQUUsRUFBRSxJQUZnQztBQUdwQ0MsSUFBQUEsRUFBRSxFQUFFO0FBSGdDLEdBQUQsQ0FBckM7QUFLQSxzQkFDRSw4REFBQyxrREFBRDtBQUFLLEtBQUMsRUFBQyxPQUFQO0FBQWUsU0FBSyxFQUFDLE9BQXJCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBSyxjQUFRLEVBQUMsT0FBZDtBQUFzQixPQUFDLEVBQUMsT0FBeEI7QUFBZ0MsT0FBQyxFQUFDLE1BQWxDO0FBQXlDLFNBQUcsRUFBQyxHQUE3QztBQUFpRCxjQUFRLEVBQUMsUUFBMUQ7QUFBQSw2QkFDRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsOERBQUMsbURBQUQ7QUFDRSxPQUFDLEVBQUMsb0JBREo7QUFFRSxRQUFFLEVBQUMsTUFGTDtBQUdFLHFCQUFlLEVBQUMsaUNBSGxCO0FBSUUsZ0JBQVUsRUFBQyxRQUpiO0FBS0UsY0FBUSxFQUFDLFdBTFg7QUFNRSxZQUFNLEVBQUMsT0FOVDtBQU9FLG9CQUFjLEVBQUMsUUFQakI7QUFRRSxnQkFBVSxFQUFDLFFBUmI7QUFTRSxRQUFFLEVBQUUsRUFUTjtBQUFBLDZCQVdFLDhEQUFDLG1EQUFEO0FBQ0UsZUFBTyxFQUFDLFFBRFY7QUFFRSxrQkFBVSxFQUFDLFFBRmI7QUFHRSxZQUFJLEVBQUU7QUFBRUYsVUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFVBQUFBLEVBQUUsRUFBRTtBQUFwQixTQUhSO0FBSUUsaUJBQVMsRUFBQyxRQUpaO0FBQUEsZ0NBTUUsOERBQUMsc0RBQUQ7QUFDRSxtQkFBUyxFQUFDLFFBRFo7QUFFRSxrQkFBUSxFQUFFO0FBQUVELFlBQUFBLElBQUksRUFBRSxLQUFSO0FBQWVDLFlBQUFBLEVBQUUsRUFBRSxLQUFuQjtBQUEwQkMsWUFBQUEsRUFBRSxFQUFFO0FBQTlCLFdBRlo7QUFHRSxXQUFDLEVBQUU7QUFBRUYsWUFBQUEsSUFBSSxFQUFFLENBQVI7QUFBV0MsWUFBQUEsRUFBRSxFQUFFO0FBQWYsV0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQWFFLDhEQUFDLG1EQUFEO0FBQ0Usa0JBQVEsRUFBRTtBQUFFRCxZQUFBQSxJQUFJLEVBQUUsSUFBUjtBQUFjQyxZQUFBQSxFQUFFLEVBQUUsS0FBbEI7QUFBeUJDLFlBQUFBLEVBQUUsRUFBRTtBQUE3QixXQURaO0FBRUUsWUFBRSxFQUFFO0FBQUVGLFlBQUFBLElBQUksRUFBRSxDQUFSO0FBQVdDLFlBQUFBLEVBQUUsRUFBRTtBQUFmLFdBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsZUFtQkUsOERBQUMsa0RBQUQ7QUFBSyxXQUFDLEVBQUUsQ0FBUjtBQUFXLG1CQUFTLEVBQUMsUUFBckI7QUFBQSxrQ0FDRSw4REFBQyxtREFBRDtBQUFNLG9CQUFRLEVBQUU7QUFBRUQsY0FBQUEsSUFBSSxFQUFFLElBQVI7QUFBY0MsY0FBQUEsRUFBRSxFQUFFLElBQWxCO0FBQXdCQyxjQUFBQSxFQUFFLEVBQUU7QUFBNUIsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSw4REFBQyxtREFBRDtBQUFNLDBCQUFjLEVBQUMsUUFBckI7QUFBOEIsY0FBRSxFQUFFLENBQWxDO0FBQUEsbUNBQ0UsOERBQUMscURBQUQ7QUFDRSw2QkFBZSxFQUFDLFNBRGxCO0FBRUUsbUJBQUssRUFBQyxPQUZSO0FBR0Usa0JBQUksRUFBRUgsVUFIUjtBQUlFLHFCQUFPLEVBQUMsWUFKVjtBQUtFLG1CQUFLLEVBQUMsS0FMUjtBQU1FLHFCQUFPLEVBQUUsbUJBQU07QUFDYkksZ0JBQUFBLG1CQUFtQjtBQUNwQixlQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBERCxDQWhFRDs7R0FBTUw7VUFDZUQ7OztLQURmQztBQWtFTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZS1jb21wb25lbnRzL0hvbWUvSG9tZVBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICdAY2hha3JhLXVpL2J1dHRvbic7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXInO1xyXG5pbXBvcnQgSGVyb0ltZyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaG9tZXBhZ2UvTWFyLUJ1c2luZXNzXy5wbmcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZUJyZWFrcG9pbnRWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvbWVkaWEtcXVlcnknO1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uU2l6ZSA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7XHJcbiAgICBiYXNlOiAneHMnLFxyXG4gICAgbWQ6ICdtZCcsXHJcbiAgICBsZzogJ2xnJyxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCB3PVwiMTAwdndcIiBjb2xvcj1cIndoaXRlXCI+XHJcbiAgICAgIDxCb3ggcG9zaXRpb249XCJmaXhlZFwiIHc9XCIxMDB2d1wiIGg9XCI4MHB4XCIgdG9wPVwiMFwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBoPVwiY2FsYygxMDB2aCAtIDgwcHgpXCJcclxuICAgICAgICBtdD1cIjgwcHhcIlxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZT1cInVybCgnL2hvbWVwYWdlL2JhY2tncm91bmQuanBnJylcIlxyXG4gICAgICAgIGJnUG9zaXRpb249XCJjZW50ZXJcIlxyXG4gICAgICAgIGJnUmVwZWF0PVwibm8tcmVwZWF0XCJcclxuICAgICAgICBiZ1NpemU9XCJjb3ZlclwiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIHBiPXsyMH1cclxuICAgICAgPlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgbWF4Vz17eyBiYXNlOiAnOTB2dycsIG1kOiAnNTB2dycgfX1cclxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogJzN4bCcsIG1kOiAnNXhsJywgbGc6ICc2eGwnIH19XHJcbiAgICAgICAgICAgIG09e3sgYmFzZTogMSwgbWQ6IDMgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRmluZCB0aGUgc2hvd3MgeW91IGJvdGggd2FudCB0byB3YXRjaC5cclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6ICdsZycsIG1kOiAnM3hsJywgbGc6ICc0eGwnIH19XHJcbiAgICAgICAgICAgIG1iPXt7IGJhc2U6IDEsIG1kOiAzIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN3aXBlIGFueXdoZXJlLCBhbnl0aW1lLlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEJveCBtPXszfSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9e3sgYmFzZTogJ21kJywgbWQ6ICdsZycsIGxnOiAneGwnIH19PlxyXG4gICAgICAgICAgICAgIFJlYWR5IHRvIHN3aXBlPyBHZXQgc3RhcnRlZCBub3cuXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtdD17MX0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI2U1MDkxNFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgIHNpemU9e2J1dHRvblNpemV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicmVkLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjY2JVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGltcG9ydEluaXRpYWxNb3ZpZXM7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEdldCBzdGFydGVkXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQm94IiwiRmxleCIsIkhlYWRpbmciLCJUZXh0IiwiTmF2QmFyIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiSG9tZVBhZ2UiLCJidXR0b25TaXplIiwiYmFzZSIsIm1kIiwibGciLCJpbXBvcnRJbml0aWFsTW92aWVzIl0sInNvdXJjZVJvb3QiOiIifQ==