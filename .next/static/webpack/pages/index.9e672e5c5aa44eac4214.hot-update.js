self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/page-components/Home/HomePage.tsx":
/*!***********************************************!*\
  !*** ./src/page-components/Home/HomePage.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
          lineNumber: 38,
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
          lineNumber: 45,
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
            lineNumber: 52,
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
                        return addData;

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
              lineNumber: 56,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWU2NzJlNWM1YWE0NGVhYzQyMTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxVQUFVLEdBQUdILDBFQUFrQixDQUFDO0FBQ3BDSSxJQUFBQSxJQUFJLEVBQUUsSUFEOEI7QUFFcENDLElBQUFBLEVBQUUsRUFBRSxJQUZnQztBQUdwQ0MsSUFBQUEsRUFBRSxFQUFFO0FBSGdDLEdBQUQsQ0FBckM7QUFNQSxNQUFNQyxPQUFPLEdBQUdOLGdFQUFBLENBQWlCLHFCQUFqQixDQUFoQjtBQUVBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQUssS0FBQyxFQUFDLE9BQVA7QUFBZSxTQUFLLEVBQUMsT0FBckI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFLLGNBQVEsRUFBQyxPQUFkO0FBQXNCLE9BQUMsRUFBQyxPQUF4QjtBQUFnQyxPQUFDLEVBQUMsTUFBbEM7QUFBeUMsU0FBRyxFQUFDLEdBQTdDO0FBQWlELGNBQVEsRUFBQyxRQUExRDtBQUFBLDZCQUNFLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSw4REFBQyxtREFBRDtBQUNFLE9BQUMsRUFBQyxvQkFESjtBQUVFLFFBQUUsRUFBQyxNQUZMO0FBR0UscUJBQWUsRUFBQyxpQ0FIbEI7QUFJRSxnQkFBVSxFQUFDLFFBSmI7QUFLRSxjQUFRLEVBQUMsV0FMWDtBQU1FLFlBQU0sRUFBQyxPQU5UO0FBT0Usb0JBQWMsRUFBQyxRQVBqQjtBQVFFLGdCQUFVLEVBQUMsUUFSYjtBQVNFLFFBQUUsRUFBRSxFQVROO0FBQUEsNkJBV0UsOERBQUMsbURBQUQ7QUFDRSxlQUFPLEVBQUMsUUFEVjtBQUVFLGtCQUFVLEVBQUMsUUFGYjtBQUdFLFlBQUksRUFBRTtBQUFFRyxVQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBQUEsRUFBRSxFQUFFO0FBQXBCLFNBSFI7QUFJRSxpQkFBUyxFQUFDLFFBSlo7QUFBQSxnQ0FNRSw4REFBQyxzREFBRDtBQUNFLG1CQUFTLEVBQUMsUUFEWjtBQUVFLGtCQUFRLEVBQUU7QUFBRUQsWUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUMsWUFBQUEsRUFBRSxFQUFFLEtBQW5CO0FBQTBCQyxZQUFBQSxFQUFFLEVBQUU7QUFBOUIsV0FGWjtBQUdFLFdBQUMsRUFBRTtBQUFFRixZQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFBQSxFQUFFLEVBQUU7QUFBZixXQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBYUUsOERBQUMsbURBQUQ7QUFDRSxrQkFBUSxFQUFFO0FBQUVELFlBQUFBLElBQUksRUFBRSxJQUFSO0FBQWNDLFlBQUFBLEVBQUUsRUFBRSxLQUFsQjtBQUF5QkMsWUFBQUEsRUFBRSxFQUFFO0FBQTdCLFdBRFo7QUFFRSxZQUFFLEVBQUU7QUFBRUYsWUFBQUEsSUFBSSxFQUFFLENBQVI7QUFBV0MsWUFBQUEsRUFBRSxFQUFFO0FBQWYsV0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRixlQW1CRSw4REFBQyxrREFBRDtBQUFLLFdBQUMsRUFBRSxDQUFSO0FBQVcsbUJBQVMsRUFBQyxRQUFyQjtBQUFBLGtDQUNFLDhEQUFDLG1EQUFEO0FBQU0sb0JBQVEsRUFBRTtBQUFFRCxjQUFBQSxJQUFJLEVBQUUsSUFBUjtBQUFjQyxjQUFBQSxFQUFFLEVBQUUsSUFBbEI7QUFBd0JDLGNBQUFBLEVBQUUsRUFBRTtBQUE1QixhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFLDhEQUFDLG1EQUFEO0FBQU0sMEJBQWMsRUFBQyxRQUFyQjtBQUE4QixjQUFFLEVBQUUsQ0FBbEM7QUFBQSxtQ0FDRSw4REFBQyxxREFBRDtBQUNFLDZCQUFlLEVBQUMsU0FEbEI7QUFFRSxtQkFBSyxFQUFDLE9BRlI7QUFHRSxrQkFBSSxFQUFFSCxVQUhSO0FBSUUscUJBQU8sRUFBQyxZQUpWO0FBS0UsbUJBQUssRUFBQyxLQUxSO0FBTUUscUJBQU8scVRBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ0RJLE9BREM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBRixFQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBERCxDQW5FRDs7R0FBTUw7VUFDZUYsd0VBTUhDOzs7S0FQWkM7QUFxRU4sK0RBQWVBLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUEsZ0hBQStDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlLWNvbXBvbmVudHMvSG9tZS9Ib21lUGFnZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9idXR0b24nO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyJztcclxuaW1wb3J0IHsgdXNlQnJlYWtwb2ludFZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9tZWRpYS1xdWVyeSc7XHJcbmltcG9ydCB7IHRycGMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvdXRpbHMvdHJwYyc7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b25TaXplID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6ICd4cycsXHJcbiAgICBtZDogJ21kJyxcclxuICAgIGxnOiAnbGcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhZGREYXRhID0gdHJwYy51c2VNdXRhdGlvbignbW92aWVzLmFkZER1bW15RGF0YScpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCB3PVwiMTAwdndcIiBjb2xvcj1cIndoaXRlXCI+XHJcbiAgICAgIDxCb3ggcG9zaXRpb249XCJmaXhlZFwiIHc9XCIxMDB2d1wiIGg9XCI4MHB4XCIgdG9wPVwiMFwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEZsZXhcclxuICAgICAgICBoPVwiY2FsYygxMDB2aCAtIDgwcHgpXCJcclxuICAgICAgICBtdD1cIjgwcHhcIlxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZT1cInVybCgnL2hvbWVwYWdlL2JhY2tncm91bmQuanBnJylcIlxyXG4gICAgICAgIGJnUG9zaXRpb249XCJjZW50ZXJcIlxyXG4gICAgICAgIGJnUmVwZWF0PVwibm8tcmVwZWF0XCJcclxuICAgICAgICBiZ1NpemU9XCJjb3ZlclwiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgIHBiPXsyMH1cclxuICAgICAgPlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgbWF4Vz17eyBiYXNlOiAnOTB2dycsIG1kOiAnNTB2dycgfX1cclxuICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogJzN4bCcsIG1kOiAnNXhsJywgbGc6ICc2eGwnIH19XHJcbiAgICAgICAgICAgIG09e3sgYmFzZTogMSwgbWQ6IDMgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRmluZCB0aGUgc2hvd3MgeW91IGJvdGggd2FudCB0byB3YXRjaC5cclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6ICdsZycsIG1kOiAnM3hsJywgbGc6ICc0eGwnIH19XHJcbiAgICAgICAgICAgIG1iPXt7IGJhc2U6IDEsIG1kOiAzIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN3aXBlIGFueXdoZXJlLCBhbnl0aW1lLlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEJveCBtPXszfSB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9e3sgYmFzZTogJ21kJywgbWQ6ICdsZycsIGxnOiAneGwnIH19PlxyXG4gICAgICAgICAgICAgIFJlYWR5IHRvIHN3aXBlPyBHZXQgc3RhcnRlZCBub3cuXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtdD17MX0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI2U1MDkxNFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgIHNpemU9e2J1dHRvblNpemV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicmVkLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjY2JVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGF3YWl0IGFkZERhdGE7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEdldCBzdGFydGVkXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkJveCIsIkZsZXgiLCJIZWFkaW5nIiwiVGV4dCIsIk5hdkJhciIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsInRycGMiLCJIb21lUGFnZSIsImJ1dHRvblNpemUiLCJiYXNlIiwibWQiLCJsZyIsImFkZERhdGEiLCJ1c2VNdXRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=