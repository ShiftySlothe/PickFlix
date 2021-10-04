"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/page-components/Home/HomePage.tsx":
/*!***********************************************!*\
  !*** ./src/page-components/Home/HomePage.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_dev_Polish_pick_flix_pickflix_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_dev_Polish_pick_flix_pickflix_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_dev_Polish_pick_flix_pickflix_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_dev_Polish_pick_flix_pickflix_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/button */ "./node_modules/@chakra-ui/button/dist/esm/index.js");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.tsx");
/* harmony import */ var _chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/media-query */ "./node_modules/@chakra-ui/media-query/dist/esm/index.js");
/* harmony import */ var _server_utils_trpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/utils/trpc */ "./src/server/utils/trpc.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\dev\\Polish\\pick-flix\\pickflix\\src\\page-components\\Home\\HomePage.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var HomePage = function HomePage() {
  _s();

  var buttonSize = (0,_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_5__.useBreakpointValue)({
    base: 'xs',
    md: 'md',
    lg: 'lg'
  });
  var addData = _server_utils_trpc__WEBPACK_IMPORTED_MODULE_3__.trpc.useMutation('movies.addDummyData');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
    w: "100vw",
    color: "white",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
      position: "fixed",
      w: "100vw",
      h: "80px",
      top: "0",
      overflow: "hidden",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Flex, {
      h: "calc(100vh - 80px)",
      mt: "80px",
      backgroundImage: "url('/homepage/background.jpg')",
      bgPosition: "center",
      bgRepeat: "no-repeat",
      bgSize: "cover",
      justifyContent: "center",
      alignItems: "center",
      pb: 20,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Flex, {
        flexDir: "column",
        alignItems: "center",
        maxW: {
          base: '90vw',
          md: '50vw'
        },
        textAlign: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Heading, {
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
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Text, {
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
          lineNumber: 44,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Box, {
          m: 3,
          textAlign: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Text, {
            fontSize: {
              base: 'md',
              md: 'lg',
              lg: 'xl'
            },
            children: "Ready to swipe? Get started now."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_6__.Flex, {
            justifyContent: "center",
            mt: 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_7__.Button, {
              backgroundColor: "#e50914",
              color: "white",
              size: buttonSize,
              variant: "red-button",
              width: "66%",
              onClick: /*#__PURE__*/(0,C_dev_Polish_pick_flix_pickflix_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_dev_Polish_pick_flix_pickflix_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
                return C_dev_Polish_pick_flix_pickflix_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return addData.mutateAsync();

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })),
              children: "Get started"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(HomePage, "vCdhviH+ahRdftdPa+MAroN91s0=", false, function () {
  return [_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_5__.useBreakpointValue, _server_utils_trpc__WEBPACK_IMPORTED_MODULE_3__.trpc.useMutation];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTIyNWQzMTY4NmU0NWNlNTU5N2IuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxVQUFVLEdBQUdILDBFQUFrQixDQUFDO0FBQ3BDSSxJQUFBQSxJQUFJLEVBQUUsSUFEOEI7QUFFcENDLElBQUFBLEVBQUUsRUFBRSxJQUZnQztBQUdwQ0MsSUFBQUEsRUFBRSxFQUFFO0FBSGdDLEdBQUQsQ0FBckM7QUFNQSxNQUFNQyxPQUFPLEdBQUdOLGdFQUFBLENBQWlCLHFCQUFqQixDQUFoQjtBQUNBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQUssS0FBQyxFQUFDLE9BQVA7QUFBZSxTQUFLLEVBQUMsT0FBckI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFLLGNBQVEsRUFBQyxPQUFkO0FBQXNCLE9BQUMsRUFBQyxPQUF4QjtBQUFnQyxPQUFDLEVBQUMsTUFBbEM7QUFBeUMsU0FBRyxFQUFDLEdBQTdDO0FBQWlELGNBQVEsRUFBQyxRQUExRDtBQUFBLDZCQUNFLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSw4REFBQyxtREFBRDtBQUNFLE9BQUMsRUFBQyxvQkFESjtBQUVFLFFBQUUsRUFBQyxNQUZMO0FBR0UscUJBQWUsRUFBQyxpQ0FIbEI7QUFJRSxnQkFBVSxFQUFDLFFBSmI7QUFLRSxjQUFRLEVBQUMsV0FMWDtBQU1FLFlBQU0sRUFBQyxPQU5UO0FBT0Usb0JBQWMsRUFBQyxRQVBqQjtBQVFFLGdCQUFVLEVBQUMsUUFSYjtBQVNFLFFBQUUsRUFBRSxFQVROO0FBQUEsNkJBV0UsOERBQUMsbURBQUQ7QUFDRSxlQUFPLEVBQUMsUUFEVjtBQUVFLGtCQUFVLEVBQUMsUUFGYjtBQUdFLFlBQUksRUFBRTtBQUFFRyxVQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBQUEsRUFBRSxFQUFFO0FBQXBCLFNBSFI7QUFJRSxpQkFBUyxFQUFDLFFBSlo7QUFBQSxnQ0FNRSw4REFBQyxzREFBRDtBQUNFLG1CQUFTLEVBQUMsUUFEWjtBQUVFLGtCQUFRLEVBQUU7QUFBRUQsWUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUMsWUFBQUEsRUFBRSxFQUFFLEtBQW5CO0FBQTBCQyxZQUFBQSxFQUFFLEVBQUU7QUFBOUIsV0FGWjtBQUdFLFdBQUMsRUFBRTtBQUFFRixZQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFBQSxFQUFFLEVBQUU7QUFBZixXQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBYUUsOERBQUMsbURBQUQ7QUFDRSxrQkFBUSxFQUFFO0FBQUVELFlBQUFBLElBQUksRUFBRSxJQUFSO0FBQWNDLFlBQUFBLEVBQUUsRUFBRSxLQUFsQjtBQUF5QkMsWUFBQUEsRUFBRSxFQUFFO0FBQTdCLFdBRFo7QUFFRSxZQUFFLEVBQUU7QUFBRUYsWUFBQUEsSUFBSSxFQUFFLENBQVI7QUFBV0MsWUFBQUEsRUFBRSxFQUFFO0FBQWYsV0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRixlQW1CRSw4REFBQyxrREFBRDtBQUFLLFdBQUMsRUFBRSxDQUFSO0FBQVcsbUJBQVMsRUFBQyxRQUFyQjtBQUFBLGtDQUNFLDhEQUFDLG1EQUFEO0FBQU0sb0JBQVEsRUFBRTtBQUFFRCxjQUFBQSxJQUFJLEVBQUUsSUFBUjtBQUFjQyxjQUFBQSxFQUFFLEVBQUUsSUFBbEI7QUFBd0JDLGNBQUFBLEVBQUUsRUFBRTtBQUE1QixhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFLDhEQUFDLG1EQUFEO0FBQU0sMEJBQWMsRUFBQyxRQUFyQjtBQUE4QixjQUFFLEVBQUUsQ0FBbEM7QUFBQSxtQ0FDRSw4REFBQyxxREFBRDtBQUNFLDZCQUFlLEVBQUMsU0FEbEI7QUFFRSxtQkFBSyxFQUFDLE9BRlI7QUFHRSxrQkFBSSxFQUFFSCxVQUhSO0FBSUUscUJBQU8sRUFBQyxZQUpWO0FBS0UsbUJBQUssRUFBQyxLQUxSO0FBTUUscUJBQU8scVRBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ0RJLE9BQU8sQ0FBQ0UsV0FBUixFQURDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUYsRUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwREQsQ0FsRUQ7O0dBQU1QO1VBQ2VGLHdFQU1IQzs7O0tBUFpDO0FBb0VOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlLWNvbXBvbmVudHMvSG9tZS9Ib21lUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9idXR0b24nO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyJztcclxuaW1wb3J0IHsgdXNlQnJlYWtwb2ludFZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9tZWRpYS1xdWVyeSc7XHJcbmltcG9ydCB7IHRycGMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvdXRpbHMvdHJwYyc7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b25TaXplID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6ICd4cycsXHJcbiAgICBtZDogJ21kJyxcclxuICAgIGxnOiAnbGcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhZGREYXRhID0gdHJwYy51c2VNdXRhdGlvbignbW92aWVzLmFkZER1bW15RGF0YScpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHc9XCIxMDB2d1wiIGNvbG9yPVwid2hpdGVcIj5cclxuICAgICAgPEJveCBwb3NpdGlvbj1cImZpeGVkXCIgdz1cIjEwMHZ3XCIgaD1cIjgwcHhcIiB0b3A9XCIwXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGg9XCJjYWxjKDEwMHZoIC0gODBweClcIlxyXG4gICAgICAgIG10PVwiODBweFwiXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlPVwidXJsKCcvaG9tZXBhZ2UvYmFja2dyb3VuZC5qcGcnKVwiXHJcbiAgICAgICAgYmdQb3NpdGlvbj1cImNlbnRlclwiXHJcbiAgICAgICAgYmdSZXBlYXQ9XCJuby1yZXBlYXRcIlxyXG4gICAgICAgIGJnU2l6ZT1cImNvdmVyXCJcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgcGI9ezIwfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICBtYXhXPXt7IGJhc2U6ICc5MHZ3JywgbWQ6ICc1MHZ3JyB9fVxyXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAnM3hsJywgbWQ6ICc1eGwnLCBsZzogJzZ4bCcgfX1cclxuICAgICAgICAgICAgbT17eyBiYXNlOiAxLCBtZDogMyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBGaW5kIHRoZSBzaG93cyB5b3UgYm90aCB3YW50IHRvIHdhdGNoLlxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogJ2xnJywgbWQ6ICczeGwnLCBsZzogJzR4bCcgfX1cclxuICAgICAgICAgICAgbWI9e3sgYmFzZTogMSwgbWQ6IDMgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3dpcGUgYW55d2hlcmUsIGFueXRpbWUuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8Qm94IG09ezN9IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17eyBiYXNlOiAnbWQnLCBtZDogJ2xnJywgbGc6ICd4bCcgfX0+XHJcbiAgICAgICAgICAgICAgUmVhZHkgdG8gc3dpcGU/IEdldCBzdGFydGVkIG5vdy5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG10PXsxfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjZTUwOTE0XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT17YnV0dG9uU2l6ZX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJyZWQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNjYlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgYXdhaXQgYWRkRGF0YS5tdXRhdGVBc3luYygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkJveCIsIkZsZXgiLCJIZWFkaW5nIiwiVGV4dCIsIk5hdkJhciIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsInRycGMiLCJIb21lUGFnZSIsImJ1dHRvblNpemUiLCJiYXNlIiwibWQiLCJsZyIsImFkZERhdGEiLCJ1c2VNdXRhdGlvbiIsIm11dGF0ZUFzeW5jIl0sInNvdXJjZVJvb3QiOiIifQ==