"use strict";
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/TinderCard/TinderCards.tsx":
/*!***************************************************!*\
  !*** ./src/components/TinderCard/TinderCards.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/button */ "./node_modules/@chakra-ui/button/dist/esm/index.js");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_tinder_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-tinder-card */ "./src/components/TinderCard/react-tinder-card/index.js");
/* harmony import */ var _react_tinder_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_tinder_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\dev\\Polish\\pick-flix\\pickflix\\src\\components\\TinderCard\\TinderCards.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var TinderCards = function TinderCards(_ref) {
  _s();

  var m = _ref.movies;
  var alreadyRemoved = [];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(m),
      movies = _useState[0],
      setMovies = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      lastDirection = _useState2[0],
      setLastDirection = _useState2[1]; // Create refs for each movie


  var childRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return Array(m.length).fill(0).map(function (i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    });
  }, [m]);

  var swiped = function swiped(direction, movie) {
    console.log('removing: ' + movie.title);
    setLastDirection(direction);
    alreadyRemoved.push(movie);
  };

  var outOfFrame = function outOfFrame(movie) {
    console.log(movie.title + ' left the screen!');
    var newMovieState = movies.filter(function (m) {
      return m.id !== movie.id;
    });
    newMovieState = newMovieState.filter(function (m) {
      return !alreadyRemoved.includes(m);
    });
    setMovies(newMovieState);
  };

  var swipe = function swipe(dir) {
    var moviesLeft = movies === null || movies === void 0 ? void 0 : movies.filter(function (m) {
      return !alreadyRemoved.includes(m);
    });

    if (moviesLeft !== null && moviesLeft !== void 0 && moviesLeft.length) {
      var _childRefs$index$curr;

      var toBeRemoved = moviesLeft[moviesLeft.length - 1]; // Find the card object to be removed

      var index = m.map(function (m) {
        return m;
      }).indexOf(toBeRemoved); // Find the index of which to make the reference to

      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen

      (_childRefs$index$curr = childRefs[index].current) === null || _childRefs$index$curr === void 0 ? void 0 : _childRefs$index$curr.swipe(dir); // Swipe the card!
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {
    overflow: "hidden",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {
      flexDir: "column",
      overflow: "hidden",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {
        w: "90vw",
        maxW: "260px",
        h: "300px",
        overflow: "hidden",
        children: movies === null || movies === void 0 ? void 0 : movies.map(function (movie, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Box, {
            position: "absolute",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((_react_tinder_card__WEBPACK_IMPORTED_MODULE_1___default()), {
              ref: childRefs[index],
              onSwipe: function onSwipe(dir) {
                return swiped(dir, movie);
              },
              onCardLeftScreen: function onCardLeftScreen() {
                return outOfFrame(movie);
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                position: "relative",
                backgroundColor: "white",
                backgroundSize: "cover",
                backgroundPosition: "50%",
                borderRadius: "5px",
                width: "80vw",
                maxW: "260px",
                h: "300px",
                alignItems: "center",
                justifyContent: "center",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                  p: 2,
                  fontSize: "md",
                  children: movie.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this)
          }, movie.id, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Flex, {
        justifyContent: "center",
        mt: 3,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
            onClick: function onClick() {
              return swipe('left');
            },
            children: "Swipe left!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
            onClick: function onClick() {
              return swipe('right');
            },
            children: "Swipe right!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, _this);
};

_s(TinderCards, "Rbvj4w+pCQ1zIBywf3DNv+1Rhx8=");

_c = TinderCards;
/* harmony default export */ __webpack_exports__["default"] = (TinderCards);

var _c;

$RefreshReg$(_c, "TinderCards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjk2ZTUxMDc1MmVmZTUzMDU0ZTA0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBUUEsSUFBTVMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBcUM7QUFBQTs7QUFBQSxNQUExQkMsQ0FBMEIsUUFBbENDLE1BQWtDO0FBQ3ZELE1BQU1DLGNBQXVCLEdBQUcsRUFBaEM7O0FBQ0Esa0JBQTRCTCwrQ0FBUSxDQUFDRyxDQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVFLFNBQWY7O0FBQ0EsbUJBQTBDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPTyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0QixpQkFIdUQsQ0FLdkQ7OztBQUNBLE1BQU1DLFNBQVMsR0FBR1YsOENBQU8sQ0FBQyxZQUFNO0FBQzlCLFdBQU9XLEtBQUssQ0FBQ1AsQ0FBQyxDQUFDUSxNQUFILENBQUwsQ0FDSkMsSUFESSxDQUNDLENBREQsRUFFSkMsR0FGSSxDQUVBLFVBQUNDLENBQUQ7QUFBQSwwQkFBT2hCLHNEQUFBLEVBQVA7QUFBQSxLQUZBLENBQVA7QUFHRCxHQUp3QixFQUl0QixDQUFDSyxDQUFELENBSnNCLENBQXpCOztBQU1BLE1BQU1hLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLFNBQUQsRUFBdUJDLEtBQXZCLEVBQXdDO0FBQ3JEQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlRixLQUFLLENBQUNHLEtBQWpDO0FBQ0FiLElBQUFBLGdCQUFnQixDQUFDUyxTQUFELENBQWhCO0FBQ0FaLElBQUFBLGNBQWMsQ0FBQ2lCLElBQWYsQ0FBb0JKLEtBQXBCO0FBQ0QsR0FKRDs7QUFNQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDTCxLQUFELEVBQWtCO0FBQ25DQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxLQUFOLEdBQWMsbUJBQTFCO0FBQ0EsUUFBSUcsYUFBYSxHQUFHcEIsTUFBTSxDQUFDcUIsTUFBUCxDQUFjLFVBQUN0QixDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDdUIsRUFBRixLQUFTUixLQUFLLENBQUNRLEVBQXRCO0FBQUEsS0FBZCxDQUFwQjtBQUNBRixJQUFBQSxhQUFhLEdBQUdBLGFBQWEsQ0FBQ0MsTUFBZCxDQUFxQixVQUFDdEIsQ0FBRDtBQUFBLGFBQU8sQ0FBQ0UsY0FBYyxDQUFDc0IsUUFBZixDQUF3QnhCLENBQXhCLENBQVI7QUFBQSxLQUFyQixDQUFoQjtBQUNBRyxJQUFBQSxTQUFTLENBQUNrQixhQUFELENBQVQ7QUFDRCxHQUxEOztBQU9BLE1BQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEdBQUQsRUFBb0I7QUFDaEMsUUFBTUMsVUFBVSxHQUFHMUIsTUFBSCxhQUFHQSxNQUFILHVCQUFHQSxNQUFNLENBQUVxQixNQUFSLENBQWUsVUFBQ3RCLENBQUQ7QUFBQSxhQUFPLENBQUNFLGNBQWMsQ0FBQ3NCLFFBQWYsQ0FBd0J4QixDQUF4QixDQUFSO0FBQUEsS0FBZixDQUFuQjs7QUFDQSxRQUFJMkIsVUFBSixhQUFJQSxVQUFKLGVBQUlBLFVBQVUsQ0FBRW5CLE1BQWhCLEVBQXdCO0FBQUE7O0FBQ3RCLFVBQU1vQixXQUFXLEdBQUdELFVBQVUsQ0FBQ0EsVUFBVSxDQUFDbkIsTUFBWCxHQUFvQixDQUFyQixDQUE5QixDQURzQixDQUNpQzs7QUFDdkQsVUFBTXFCLEtBQUssR0FBRzdCLENBQUMsQ0FBQ1UsR0FBRixDQUFNLFVBQUNWLENBQUQ7QUFBQSxlQUFPQSxDQUFQO0FBQUEsT0FBTixFQUFnQjhCLE9BQWhCLENBQXdCRixXQUF4QixDQUFkLENBRnNCLENBRThCOztBQUNwRDFCLE1BQUFBLGNBQWMsQ0FBQ2lCLElBQWYsQ0FBb0JTLFdBQXBCLEVBSHNCLENBR1k7O0FBQ2xDLCtCQUFBdEIsU0FBUyxDQUFDdUIsS0FBRCxDQUFULENBQWlCRSxPQUFqQixnRkFBMEJOLEtBQTFCLENBQWdDQyxHQUFoQyxFQUpzQixDQUlnQjtBQUN2QztBQUNGLEdBUkQ7O0FBVUEsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBSyxZQUFRLEVBQUMsUUFBZDtBQUFBLDJCQUNFLDhEQUFDLG1EQUFEO0FBQU0sYUFBTyxFQUFDLFFBQWQ7QUFBdUIsY0FBUSxFQUFDLFFBQWhDO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBSyxTQUFDLEVBQUMsTUFBUDtBQUFjLFlBQUksRUFBQyxPQUFuQjtBQUEyQixTQUFDLEVBQUMsT0FBN0I7QUFBcUMsZ0JBQVEsRUFBQyxRQUE5QztBQUFBLGtCQUNHekIsTUFESCxhQUNHQSxNQURILHVCQUNHQSxNQUFNLENBQUVTLEdBQVIsQ0FBWSxVQUFDSyxLQUFELEVBQVFjLEtBQVI7QUFBQSw4QkFDWCw4REFBQyxrREFBRDtBQUFLLG9CQUFRLEVBQUMsVUFBZDtBQUFBLG1DQUNFLDhEQUFDLDJEQUFEO0FBQ0UsaUJBQUcsRUFBRXZCLFNBQVMsQ0FBQ3VCLEtBQUQsQ0FEaEI7QUFFRSxxQkFBTyxFQUFFLGlCQUFDSCxHQUFEO0FBQUEsdUJBQVNiLE1BQU0sQ0FBQ2EsR0FBRCxFQUFNWCxLQUFOLENBQWY7QUFBQSxlQUZYO0FBR0UsOEJBQWdCLEVBQUU7QUFBQSx1QkFBTUssVUFBVSxDQUFDTCxLQUFELENBQWhCO0FBQUEsZUFIcEI7QUFBQSxxQ0FLRSw4REFBQyxtREFBRDtBQUNFLHdCQUFRLEVBQUMsVUFEWDtBQUVFLCtCQUFlLEVBQUMsT0FGbEI7QUFHRSw4QkFBYyxFQUFDLE9BSGpCO0FBSUUsa0NBQWtCLEVBQUMsS0FKckI7QUFLRSw0QkFBWSxFQUFDLEtBTGY7QUFNRSxxQkFBSyxFQUFDLE1BTlI7QUFPRSxvQkFBSSxFQUFDLE9BUFA7QUFRRSxpQkFBQyxFQUFDLE9BUko7QUFTRSwwQkFBVSxFQUFDLFFBVGI7QUFVRSw4QkFBYyxFQUFDLFFBVmpCO0FBQUEsdUNBWUUsOERBQUMsc0RBQUQ7QUFBUyxtQkFBQyxFQUFFLENBQVo7QUFBZSwwQkFBUSxFQUFDLElBQXhCO0FBQUEsNEJBQ0dBLEtBQUssQ0FBQ0c7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUE4QkgsS0FBSyxDQUFDUSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURXO0FBQUEsU0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQThCRSw4REFBQyxtREFBRDtBQUFNLHNCQUFjLEVBQUMsUUFBckI7QUFBOEIsVUFBRSxFQUFFLENBQWxDO0FBQUEsK0JBQ0UsOERBQUMsMERBQUQ7QUFBQSxrQ0FDRSw4REFBQyxxREFBRDtBQUFRLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUUsS0FBSyxDQUFDLE1BQUQsQ0FBWDtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMscURBQUQ7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU1BLEtBQUssQ0FBQyxPQUFELENBQVg7QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQTVFRDs7R0FBTTFCOztLQUFBQTtBQThFTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaW5kZXJDYXJkL1RpbmRlckNhcmRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gZnJvbSAnQGNoYWtyYS11aS9idXR0b24nO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGluZGVyQ2FyZCBmcm9tICcuL3JlYWN0LXRpbmRlci1jYXJkJztcclxuaW1wb3J0IHsgQVBJLCBEaXJlY3Rpb24gfSBmcm9tICcuL3JlYWN0LXRpbmRlci1jYXJkJztcclxuaW1wb3J0IHsgTW92aWUgfSBmcm9tICcucHJpc21hL2NsaWVudCc7XHJcblxyXG5pbnRlcmZhY2UgVGluZGVyQ2FyZHNQcm9wcyB7XHJcbiAgbW92aWVzOiBNb3ZpZVtdO1xyXG59XHJcblxyXG5jb25zdCBUaW5kZXJDYXJkcyA9ICh7IG1vdmllczogbSB9OiBUaW5kZXJDYXJkc1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgYWxyZWFkeVJlbW92ZWQ6IE1vdmllW10gPSBbXTtcclxuICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUobSk7XHJcbiAgY29uc3QgW2xhc3REaXJlY3Rpb24sIHNldExhc3REaXJlY3Rpb25dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAvLyBDcmVhdGUgcmVmcyBmb3IgZWFjaCBtb3ZpZVxyXG4gIGNvbnN0IGNoaWxkUmVmcyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgcmV0dXJuIEFycmF5KG0ubGVuZ3RoKVxyXG4gICAgICAuZmlsbCgwKVxyXG4gICAgICAubWFwKChpKSA9PiBSZWFjdC5jcmVhdGVSZWY8QVBJPigpKTtcclxuICB9LCBbbV0pO1xyXG5cclxuICBjb25zdCBzd2lwZWQgPSAoZGlyZWN0aW9uOiBEaXJlY3Rpb24sIG1vdmllOiBNb3ZpZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3JlbW92aW5nOiAnICsgbW92aWUudGl0bGUpO1xyXG4gICAgc2V0TGFzdERpcmVjdGlvbihkaXJlY3Rpb24pO1xyXG4gICAgYWxyZWFkeVJlbW92ZWQucHVzaChtb3ZpZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3V0T2ZGcmFtZSA9IChtb3ZpZTogTW92aWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG1vdmllLnRpdGxlICsgJyBsZWZ0IHRoZSBzY3JlZW4hJyk7XHJcbiAgICBsZXQgbmV3TW92aWVTdGF0ZSA9IG1vdmllcy5maWx0ZXIoKG0pID0+IG0uaWQgIT09IG1vdmllLmlkKTtcclxuICAgIG5ld01vdmllU3RhdGUgPSBuZXdNb3ZpZVN0YXRlLmZpbHRlcigobSkgPT4gIWFscmVhZHlSZW1vdmVkLmluY2x1ZGVzKG0pKTtcclxuICAgIHNldE1vdmllcyhuZXdNb3ZpZVN0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzd2lwZSA9IChkaXI6IERpcmVjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgbW92aWVzTGVmdCA9IG1vdmllcz8uZmlsdGVyKChtKSA9PiAhYWxyZWFkeVJlbW92ZWQuaW5jbHVkZXMobSkpO1xyXG4gICAgaWYgKG1vdmllc0xlZnQ/Lmxlbmd0aCkge1xyXG4gICAgICBjb25zdCB0b0JlUmVtb3ZlZCA9IG1vdmllc0xlZnRbbW92aWVzTGVmdC5sZW5ndGggLSAxXTsgLy8gRmluZCB0aGUgY2FyZCBvYmplY3QgdG8gYmUgcmVtb3ZlZFxyXG4gICAgICBjb25zdCBpbmRleCA9IG0ubWFwKChtKSA9PiBtKS5pbmRleE9mKHRvQmVSZW1vdmVkKTsgLy8gRmluZCB0aGUgaW5kZXggb2Ygd2hpY2ggdG8gbWFrZSB0aGUgcmVmZXJlbmNlIHRvXHJcbiAgICAgIGFscmVhZHlSZW1vdmVkLnB1c2godG9CZVJlbW92ZWQpOyAvLyBNYWtlIHN1cmUgdGhlIG5leHQgY2FyZCBnZXRzIHJlbW92ZWQgbmV4dCB0aW1lIGlmIHRoaXMgY2FyZCBkbyBub3QgaGF2ZSB0aW1lIHRvIGV4aXQgdGhlIHNjcmVlblxyXG4gICAgICBjaGlsZFJlZnNbaW5kZXhdLmN1cnJlbnQ/LnN3aXBlKGRpcik7IC8vIFN3aXBlIHRoZSBjYXJkIVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIiBvdmVyZmxvdz1cImhpZGRlblwiPlxyXG4gICAgICAgIDxCb3ggdz1cIjkwdndcIiBtYXhXPVwiMjYwcHhcIiBoPVwiMzAwcHhcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxyXG4gICAgICAgICAge21vdmllcz8ubWFwKChtb3ZpZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEJveCBwb3NpdGlvbj1cImFic29sdXRlXCIga2V5PXttb3ZpZS5pZH0+XHJcbiAgICAgICAgICAgICAgPFRpbmRlckNhcmRcclxuICAgICAgICAgICAgICAgIHJlZj17Y2hpbGRSZWZzW2luZGV4XX1cclxuICAgICAgICAgICAgICAgIG9uU3dpcGU9eyhkaXIpID0+IHN3aXBlZChkaXIsIG1vdmllKX1cclxuICAgICAgICAgICAgICAgIG9uQ2FyZExlZnRTY3JlZW49eygpID0+IG91dE9mRnJhbWUobW92aWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplPVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb249XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwdndcIlxyXG4gICAgICAgICAgICAgICAgICBtYXhXPVwiMjYwcHhcIlxyXG4gICAgICAgICAgICAgICAgICBoPVwiMzAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBwPXsyfSBmb250U2l6ZT1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge21vdmllLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgPC9UaW5kZXJDYXJkPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG10PXszfT5cclxuICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzd2lwZSgnbGVmdCcpfT5Td2lwZSBsZWZ0ITwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHN3aXBlKCdyaWdodCcpfT5Td2lwZSByaWdodCE8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGluZGVyQ2FyZHM7XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJCdXR0b25Hcm91cCIsIkJveCIsIkZsZXgiLCJIZWFkaW5nIiwiUmVhY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJUaW5kZXJDYXJkIiwiVGluZGVyQ2FyZHMiLCJtIiwibW92aWVzIiwiYWxyZWFkeVJlbW92ZWQiLCJzZXRNb3ZpZXMiLCJsYXN0RGlyZWN0aW9uIiwic2V0TGFzdERpcmVjdGlvbiIsImNoaWxkUmVmcyIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsIm1hcCIsImkiLCJjcmVhdGVSZWYiLCJzd2lwZWQiLCJkaXJlY3Rpb24iLCJtb3ZpZSIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInB1c2giLCJvdXRPZkZyYW1lIiwibmV3TW92aWVTdGF0ZSIsImZpbHRlciIsImlkIiwiaW5jbHVkZXMiLCJzd2lwZSIsImRpciIsIm1vdmllc0xlZnQiLCJ0b0JlUmVtb3ZlZCIsImluZGV4IiwiaW5kZXhPZiIsImN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9