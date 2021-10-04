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
        lineNumber: 15,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
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
          lineNumber: 34,
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
          lineNumber: 41,
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
            lineNumber: 48,
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
              lineNumber: 52,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGQ1NjkzZWFhYTViZGY2NDczNzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU8sUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxVQUFVLEdBQUdGLDBFQUFrQixDQUFDO0FBQ3BDRyxJQUFBQSxJQUFJLEVBQUUsSUFEOEI7QUFFcENDLElBQUFBLEVBQUUsRUFBRSxJQUZnQztBQUdwQ0MsSUFBQUEsRUFBRSxFQUFFO0FBSGdDLEdBQUQsQ0FBckM7QUFLQSxzQkFDRSw4REFBQyxrREFBRDtBQUFLLEtBQUMsRUFBQyxPQUFQO0FBQWUsU0FBSyxFQUFDLE9BQXJCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBSyxjQUFRLEVBQUMsT0FBZDtBQUFzQixPQUFDLEVBQUMsT0FBeEI7QUFBZ0MsT0FBQyxFQUFDLE1BQWxDO0FBQXlDLFNBQUcsRUFBQyxHQUE3QztBQUFpRCxjQUFRLEVBQUMsUUFBMUQ7QUFBQSw2QkFDRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsOERBQUMsbURBQUQ7QUFDRSxPQUFDLEVBQUMsb0JBREo7QUFFRSxRQUFFLEVBQUMsTUFGTDtBQUdFLHFCQUFlLEVBQUMsaUNBSGxCO0FBSUUsZ0JBQVUsRUFBQyxRQUpiO0FBS0UsY0FBUSxFQUFDLFdBTFg7QUFNRSxZQUFNLEVBQUMsT0FOVDtBQU9FLG9CQUFjLEVBQUMsUUFQakI7QUFRRSxnQkFBVSxFQUFDLFFBUmI7QUFTRSxRQUFFLEVBQUUsRUFUTjtBQUFBLDZCQVdFLDhEQUFDLG1EQUFEO0FBQ0UsZUFBTyxFQUFDLFFBRFY7QUFFRSxrQkFBVSxFQUFDLFFBRmI7QUFHRSxZQUFJLEVBQUU7QUFBRUYsVUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFVBQUFBLEVBQUUsRUFBRTtBQUFwQixTQUhSO0FBSUUsaUJBQVMsRUFBQyxRQUpaO0FBQUEsZ0NBTUUsOERBQUMsc0RBQUQ7QUFDRSxtQkFBUyxFQUFDLFFBRFo7QUFFRSxrQkFBUSxFQUFFO0FBQUVELFlBQUFBLElBQUksRUFBRSxLQUFSO0FBQWVDLFlBQUFBLEVBQUUsRUFBRSxLQUFuQjtBQUEwQkMsWUFBQUEsRUFBRSxFQUFFO0FBQTlCLFdBRlo7QUFHRSxXQUFDLEVBQUU7QUFBRUYsWUFBQUEsSUFBSSxFQUFFLENBQVI7QUFBV0MsWUFBQUEsRUFBRSxFQUFFO0FBQWYsV0FITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQWFFLDhEQUFDLG1EQUFEO0FBQ0Usa0JBQVEsRUFBRTtBQUFFRCxZQUFBQSxJQUFJLEVBQUUsSUFBUjtBQUFjQyxZQUFBQSxFQUFFLEVBQUUsS0FBbEI7QUFBeUJDLFlBQUFBLEVBQUUsRUFBRTtBQUE3QixXQURaO0FBRUUsWUFBRSxFQUFFO0FBQUVGLFlBQUFBLElBQUksRUFBRSxDQUFSO0FBQVdDLFlBQUFBLEVBQUUsRUFBRTtBQUFmLFdBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsZUFtQkUsOERBQUMsa0RBQUQ7QUFBSyxXQUFDLEVBQUUsQ0FBUjtBQUFXLG1CQUFTLEVBQUMsUUFBckI7QUFBQSxrQ0FDRSw4REFBQyxtREFBRDtBQUFNLG9CQUFRLEVBQUU7QUFBRUQsY0FBQUEsSUFBSSxFQUFFLElBQVI7QUFBY0MsY0FBQUEsRUFBRSxFQUFFLElBQWxCO0FBQXdCQyxjQUFBQSxFQUFFLEVBQUU7QUFBNUIsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSw4REFBQyxtREFBRDtBQUFNLDBCQUFjLEVBQUMsUUFBckI7QUFBOEIsY0FBRSxFQUFFLENBQWxDO0FBQUEsbUNBQ0UsOERBQUMscURBQUQ7QUFDRSw2QkFBZSxFQUFDLFNBRGxCO0FBRUUsbUJBQUssRUFBQyxPQUZSO0FBR0Usa0JBQUksRUFBRUgsVUFIUjtBQUlFLHFCQUFPLEVBQUMsWUFKVjtBQUtFLG1CQUFLLEVBQUMsS0FMUjtBQU1FLHFCQUFPLEVBQUUsbUJBQU07QUFDYkksZ0JBQUFBLG1CQUFtQjtBQUNwQixlQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBERCxDQWhFRDs7R0FBTUw7VUFDZUQ7OztLQURmQztBQWtFTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZS1jb21wb25lbnRzL0hvbWUvSG9tZVBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhcic7XHJcbmltcG9ydCB7IHVzZUJyZWFrcG9pbnRWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvbWVkaWEtcXVlcnknO1xyXG5pbXBvcnQgeyB0cnBjIH0gZnJvbSAnLi4vLi4nO1xyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b25TaXplID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6ICd4cycsXHJcbiAgICBtZDogJ21kJyxcclxuICAgIGxnOiAnbGcnLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHc9XCIxMDB2d1wiIGNvbG9yPVwid2hpdGVcIj5cclxuICAgICAgPEJveCBwb3NpdGlvbj1cImZpeGVkXCIgdz1cIjEwMHZ3XCIgaD1cIjgwcHhcIiB0b3A9XCIwXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGg9XCJjYWxjKDEwMHZoIC0gODBweClcIlxyXG4gICAgICAgIG10PVwiODBweFwiXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlPVwidXJsKCcvaG9tZXBhZ2UvYmFja2dyb3VuZC5qcGcnKVwiXHJcbiAgICAgICAgYmdQb3NpdGlvbj1cImNlbnRlclwiXHJcbiAgICAgICAgYmdSZXBlYXQ9XCJuby1yZXBlYXRcIlxyXG4gICAgICAgIGJnU2l6ZT1cImNvdmVyXCJcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgcGI9ezIwfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICBtYXhXPXt7IGJhc2U6ICc5MHZ3JywgbWQ6ICc1MHZ3JyB9fVxyXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAnM3hsJywgbWQ6ICc1eGwnLCBsZzogJzZ4bCcgfX1cclxuICAgICAgICAgICAgbT17eyBiYXNlOiAxLCBtZDogMyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBGaW5kIHRoZSBzaG93cyB5b3UgYm90aCB3YW50IHRvIHdhdGNoLlxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogJ2xnJywgbWQ6ICczeGwnLCBsZzogJzR4bCcgfX1cclxuICAgICAgICAgICAgbWI9e3sgYmFzZTogMSwgbWQ6IDMgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3dpcGUgYW55d2hlcmUsIGFueXRpbWUuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8Qm94IG09ezN9IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17eyBiYXNlOiAnbWQnLCBtZDogJ2xnJywgbGc6ICd4bCcgfX0+XHJcbiAgICAgICAgICAgICAgUmVhZHkgdG8gc3dpcGU/IEdldCBzdGFydGVkIG5vdy5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG10PXsxfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjZTUwOTE0XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT17YnV0dG9uU2l6ZX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJyZWQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNjYlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaW1wb3J0SW5pdGlhbE1vdmllcztcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR2V0IHN0YXJ0ZWRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJCb3giLCJGbGV4IiwiSGVhZGluZyIsIlRleHQiLCJOYXZCYXIiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJIb21lUGFnZSIsImJ1dHRvblNpemUiLCJiYXNlIiwibWQiLCJsZyIsImltcG9ydEluaXRpYWxNb3ZpZXMiXSwic291cmNlUm9vdCI6IiJ9