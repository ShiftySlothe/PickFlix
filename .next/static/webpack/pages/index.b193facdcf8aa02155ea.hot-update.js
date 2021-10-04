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
  var addData = _server_utils_trpc__WEBPACK_IMPORTED_MODULE_3__.trpc.useQuery(['movies.addDummyData']);
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
                        return addData();

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

_s(HomePage, "EeMJoH3Mpte2SxKDxIbb1d7W1cA=", false, function () {
  return [_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_5__.useBreakpointValue, _server_utils_trpc__WEBPACK_IMPORTED_MODULE_3__.trpc.useQuery];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjE5M2ZhY2RjZjhhYTAyMTU1ZWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxVQUFVLEdBQUdILDBFQUFrQixDQUFDO0FBQ3BDSSxJQUFBQSxJQUFJLEVBQUUsSUFEOEI7QUFFcENDLElBQUFBLEVBQUUsRUFBRSxJQUZnQztBQUdwQ0MsSUFBQUEsRUFBRSxFQUFFO0FBSGdDLEdBQUQsQ0FBckM7QUFNQSxNQUFNQyxPQUFPLEdBQUdOLDZEQUFBLENBQWMsQ0FBQyxxQkFBRCxDQUFkLENBQWhCO0FBQ0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFBSyxLQUFDLEVBQUMsT0FBUDtBQUFlLFNBQUssRUFBQyxPQUFyQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUssY0FBUSxFQUFDLE9BQWQ7QUFBc0IsT0FBQyxFQUFDLE9BQXhCO0FBQWdDLE9BQUMsRUFBQyxNQUFsQztBQUF5QyxTQUFHLEVBQUMsR0FBN0M7QUFBaUQsY0FBUSxFQUFDLFFBQTFEO0FBQUEsNkJBQ0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLDhEQUFDLG1EQUFEO0FBQ0UsT0FBQyxFQUFDLG9CQURKO0FBRUUsUUFBRSxFQUFDLE1BRkw7QUFHRSxxQkFBZSxFQUFDLGlDQUhsQjtBQUlFLGdCQUFVLEVBQUMsUUFKYjtBQUtFLGNBQVEsRUFBQyxXQUxYO0FBTUUsWUFBTSxFQUFDLE9BTlQ7QUFPRSxvQkFBYyxFQUFDLFFBUGpCO0FBUUUsZ0JBQVUsRUFBQyxRQVJiO0FBU0UsUUFBRSxFQUFFLEVBVE47QUFBQSw2QkFXRSw4REFBQyxtREFBRDtBQUNFLGVBQU8sRUFBQyxRQURWO0FBRUUsa0JBQVUsRUFBQyxRQUZiO0FBR0UsWUFBSSxFQUFFO0FBQUVHLFVBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxVQUFBQSxFQUFFLEVBQUU7QUFBcEIsU0FIUjtBQUlFLGlCQUFTLEVBQUMsUUFKWjtBQUFBLGdDQU1FLDhEQUFDLHNEQUFEO0FBQ0UsbUJBQVMsRUFBQyxRQURaO0FBRUUsa0JBQVEsRUFBRTtBQUFFRCxZQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlQyxZQUFBQSxFQUFFLEVBQUUsS0FBbkI7QUFBMEJDLFlBQUFBLEVBQUUsRUFBRTtBQUE5QixXQUZaO0FBR0UsV0FBQyxFQUFFO0FBQUVGLFlBQUFBLElBQUksRUFBRSxDQUFSO0FBQVdDLFlBQUFBLEVBQUUsRUFBRTtBQUFmLFdBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFhRSw4REFBQyxtREFBRDtBQUNFLGtCQUFRLEVBQUU7QUFBRUQsWUFBQUEsSUFBSSxFQUFFLElBQVI7QUFBY0MsWUFBQUEsRUFBRSxFQUFFLEtBQWxCO0FBQXlCQyxZQUFBQSxFQUFFLEVBQUU7QUFBN0IsV0FEWjtBQUVFLFlBQUUsRUFBRTtBQUFFRixZQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFBQSxFQUFFLEVBQUU7QUFBZixXQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGLGVBbUJFLDhEQUFDLGtEQUFEO0FBQUssV0FBQyxFQUFFLENBQVI7QUFBVyxtQkFBUyxFQUFDLFFBQXJCO0FBQUEsa0NBQ0UsOERBQUMsbURBQUQ7QUFBTSxvQkFBUSxFQUFFO0FBQUVELGNBQUFBLElBQUksRUFBRSxJQUFSO0FBQWNDLGNBQUFBLEVBQUUsRUFBRSxJQUFsQjtBQUF3QkMsY0FBQUEsRUFBRSxFQUFFO0FBQTVCLGFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUsOERBQUMsbURBQUQ7QUFBTSwwQkFBYyxFQUFDLFFBQXJCO0FBQThCLGNBQUUsRUFBRSxDQUFsQztBQUFBLG1DQUNFLDhEQUFDLHFEQUFEO0FBQ0UsNkJBQWUsRUFBQyxTQURsQjtBQUVFLG1CQUFLLEVBQUMsT0FGUjtBQUdFLGtCQUFJLEVBQUVILFVBSFI7QUFJRSxxQkFBTyxFQUFDLFlBSlY7QUFLRSxtQkFBSyxFQUFDLEtBTFI7QUFNRSxxQkFBTyxxVEFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFDREksT0FBTyxFQUROOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUYsRUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwREQsQ0FsRUQ7O0dBQU1MO1VBQ2VGLHdFQU1IQzs7O0tBUFpDO0FBb0VOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlLWNvbXBvbmVudHMvSG9tZS9Ib21lUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9idXR0b24nO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyJztcclxuaW1wb3J0IHsgdXNlQnJlYWtwb2ludFZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9tZWRpYS1xdWVyeSc7XHJcbmltcG9ydCB7IHRycGMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvdXRpbHMvdHJwYyc7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b25TaXplID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6ICd4cycsXHJcbiAgICBtZDogJ21kJyxcclxuICAgIGxnOiAnbGcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhZGREYXRhID0gdHJwYy51c2VRdWVyeShbJ21vdmllcy5hZGREdW1teURhdGEnXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggdz1cIjEwMHZ3XCIgY29sb3I9XCJ3aGl0ZVwiPlxyXG4gICAgICA8Qm94IHBvc2l0aW9uPVwiZml4ZWRcIiB3PVwiMTAwdndcIiBoPVwiODBweFwiIHRvcD1cIjBcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxyXG4gICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgaD1cImNhbGMoMTAwdmggLSA4MHB4KVwiXHJcbiAgICAgICAgbXQ9XCI4MHB4XCJcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9XCJ1cmwoJy9ob21lcGFnZS9iYWNrZ3JvdW5kLmpwZycpXCJcclxuICAgICAgICBiZ1Bvc2l0aW9uPVwiY2VudGVyXCJcclxuICAgICAgICBiZ1JlcGVhdD1cIm5vLXJlcGVhdFwiXHJcbiAgICAgICAgYmdTaXplPVwiY292ZXJcIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICBwYj17MjB9XHJcbiAgICAgID5cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgIG1heFc9e3sgYmFzZTogJzkwdncnLCBtZDogJzUwdncnIH19XHJcbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6ICczeGwnLCBtZDogJzV4bCcsIGxnOiAnNnhsJyB9fVxyXG4gICAgICAgICAgICBtPXt7IGJhc2U6IDEsIG1kOiAzIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEZpbmQgdGhlIHNob3dzIHlvdSBib3RoIHdhbnQgdG8gd2F0Y2guXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAnbGcnLCBtZDogJzN4bCcsIGxnOiAnNHhsJyB9fVxyXG4gICAgICAgICAgICBtYj17eyBiYXNlOiAxLCBtZDogMyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTd2lwZSBhbnl3aGVyZSwgYW55dGltZS5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxCb3ggbT17M30gdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXt7IGJhc2U6ICdtZCcsIG1kOiAnbGcnLCBsZzogJ3hsJyB9fT5cclxuICAgICAgICAgICAgICBSZWFkeSB0byBzd2lwZT8gR2V0IHN0YXJ0ZWQgbm93LlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbXQ9ezF9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiNlNTA5MTRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBzaXplPXtidXR0b25TaXplfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInJlZC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI2NiVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBhd2FpdCBhZGREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEdldCBzdGFydGVkXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQm94IiwiRmxleCIsIkhlYWRpbmciLCJUZXh0IiwiTmF2QmFyIiwidXNlQnJlYWtwb2ludFZhbHVlIiwidHJwYyIsIkhvbWVQYWdlIiwiYnV0dG9uU2l6ZSIsImJhc2UiLCJtZCIsImxnIiwiYWRkRGF0YSIsInVzZVF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==