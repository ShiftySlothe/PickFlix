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
                  lineNumber: 69,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)
          }, movie.id, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
            onClick: function onClick() {
              return swipe('right');
            },
            children: "Swipe right!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmNkMTMwMDBhYzRiNjc3ZGFhYTQzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBT0EsSUFBTVMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBcUM7QUFBQTs7QUFBQSxNQUExQkMsQ0FBMEIsUUFBbENDLE1BQWtDO0FBQ3ZELE1BQU1DLGNBQXVCLEdBQUcsRUFBaEM7O0FBQ0Esa0JBQTRCTCwrQ0FBUSxDQUFDRyxDQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVFLFNBQWY7O0FBQ0EsbUJBQTBDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPTyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0QixpQkFIdUQsQ0FLdkQ7OztBQUNBLE1BQU1DLFNBQVMsR0FBR1YsOENBQU8sQ0FBQyxZQUFNO0FBQzlCLFdBQU9XLEtBQUssQ0FBQ1AsQ0FBQyxDQUFDUSxNQUFILENBQUwsQ0FDSkMsSUFESSxDQUNDLENBREQsRUFFSkMsR0FGSSxDQUVBLFVBQUNDLENBQUQ7QUFBQSwwQkFBT2hCLHNEQUFBLEVBQVA7QUFBQSxLQUZBLENBQVA7QUFHRCxHQUp3QixFQUl0QixDQUFDSyxDQUFELENBSnNCLENBQXpCOztBQU1BLE1BQU1hLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLFNBQUQsRUFBdUJDLEtBQXZCLEVBQXdDO0FBQ3JEQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlRixLQUFLLENBQUNHLEtBQWpDO0FBQ0FiLElBQUFBLGdCQUFnQixDQUFDUyxTQUFELENBQWhCO0FBQ0FaLElBQUFBLGNBQWMsQ0FBQ2lCLElBQWYsQ0FBb0JKLEtBQXBCO0FBQ0QsR0FKRDs7QUFNQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDTCxLQUFELEVBQWtCO0FBQ25DQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxLQUFOLEdBQWMsbUJBQTFCO0FBQ0EsUUFBSUcsYUFBYSxHQUFHcEIsTUFBTSxDQUFDcUIsTUFBUCxDQUFjLFVBQUN0QixDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDdUIsRUFBRixLQUFTUixLQUFLLENBQUNRLEVBQXRCO0FBQUEsS0FBZCxDQUFwQjtBQUNBRixJQUFBQSxhQUFhLEdBQUdBLGFBQWEsQ0FBQ0MsTUFBZCxDQUFxQixVQUFDdEIsQ0FBRDtBQUFBLGFBQU8sQ0FBQ0UsY0FBYyxDQUFDc0IsUUFBZixDQUF3QnhCLENBQXhCLENBQVI7QUFBQSxLQUFyQixDQUFoQjtBQUNBRyxJQUFBQSxTQUFTLENBQUNrQixhQUFELENBQVQ7QUFDRCxHQUxEOztBQU9BLE1BQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEdBQUQsRUFBb0I7QUFDaEMsUUFBTUMsVUFBVSxHQUFHMUIsTUFBSCxhQUFHQSxNQUFILHVCQUFHQSxNQUFNLENBQUVxQixNQUFSLENBQWUsVUFBQ3RCLENBQUQ7QUFBQSxhQUFPLENBQUNFLGNBQWMsQ0FBQ3NCLFFBQWYsQ0FBd0J4QixDQUF4QixDQUFSO0FBQUEsS0FBZixDQUFuQjs7QUFDQSxRQUFJMkIsVUFBSixhQUFJQSxVQUFKLGVBQUlBLFVBQVUsQ0FBRW5CLE1BQWhCLEVBQXdCO0FBQUE7O0FBQ3RCLFVBQU1vQixXQUFXLEdBQUdELFVBQVUsQ0FBQ0EsVUFBVSxDQUFDbkIsTUFBWCxHQUFvQixDQUFyQixDQUE5QixDQURzQixDQUNpQzs7QUFDdkQsVUFBTXFCLEtBQUssR0FBRzdCLENBQUMsQ0FBQ1UsR0FBRixDQUFNLFVBQUNWLENBQUQ7QUFBQSxlQUFPQSxDQUFQO0FBQUEsT0FBTixFQUFnQjhCLE9BQWhCLENBQXdCRixXQUF4QixDQUFkLENBRnNCLENBRThCOztBQUNwRDFCLE1BQUFBLGNBQWMsQ0FBQ2lCLElBQWYsQ0FBb0JTLFdBQXBCLEVBSHNCLENBR1k7O0FBQ2xDLCtCQUFBdEIsU0FBUyxDQUFDdUIsS0FBRCxDQUFULENBQWlCRSxPQUFqQixnRkFBMEJOLEtBQTFCLENBQWdDQyxHQUFoQyxFQUpzQixDQUlnQjtBQUN2QztBQUNGLEdBUkQ7O0FBVUEsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBSyxZQUFRLEVBQUMsUUFBZDtBQUFBLDJCQUNFLDhEQUFDLG1EQUFEO0FBQU0sYUFBTyxFQUFDLFFBQWQ7QUFBdUIsY0FBUSxFQUFDLFFBQWhDO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBSyxTQUFDLEVBQUMsTUFBUDtBQUFjLFlBQUksRUFBQyxPQUFuQjtBQUEyQixTQUFDLEVBQUMsT0FBN0I7QUFBcUMsZ0JBQVEsRUFBQyxRQUE5QztBQUFBLGtCQUNHekIsTUFESCxhQUNHQSxNQURILHVCQUNHQSxNQUFNLENBQUVTLEdBQVIsQ0FBWSxVQUFDSyxLQUFELEVBQVFjLEtBQVI7QUFBQSw4QkFDWCw4REFBQyxrREFBRDtBQUFLLG9CQUFRLEVBQUMsVUFBZDtBQUFBLG1DQUNFLDhEQUFDLDJEQUFEO0FBQ0UsaUJBQUcsRUFBRXZCLFNBQVMsQ0FBQ3VCLEtBQUQsQ0FEaEI7QUFFRSxxQkFBTyxFQUFFLGlCQUFDSCxHQUFEO0FBQUEsdUJBQVNiLE1BQU0sQ0FBQ2EsR0FBRCxFQUFNWCxLQUFOLENBQWY7QUFBQSxlQUZYO0FBR0UsOEJBQWdCLEVBQUU7QUFBQSx1QkFBTUssVUFBVSxDQUFDTCxLQUFELENBQWhCO0FBQUEsZUFIcEI7QUFBQSxxQ0FLRSw4REFBQyxtREFBRDtBQUNFLHdCQUFRLEVBQUMsVUFEWDtBQUVFLCtCQUFlLEVBQUMsT0FGbEI7QUFHRSw4QkFBYyxFQUFDLE9BSGpCO0FBSUUsa0NBQWtCLEVBQUMsS0FKckI7QUFLRSw0QkFBWSxFQUFDLEtBTGY7QUFNRSxxQkFBSyxFQUFDLE1BTlI7QUFPRSxvQkFBSSxFQUFDLE9BUFA7QUFRRSxpQkFBQyxFQUFDLE9BUko7QUFTRSwwQkFBVSxFQUFDLFFBVGI7QUFVRSw4QkFBYyxFQUFDLFFBVmpCO0FBQUEsdUNBWUUsOERBQUMsc0RBQUQ7QUFBUyxtQkFBQyxFQUFFLENBQVo7QUFBZSwwQkFBUSxFQUFDLElBQXhCO0FBQUEsNEJBQ0dBLEtBQUssQ0FBQ0c7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixhQUE4QkgsS0FBSyxDQUFDUSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURXO0FBQUEsU0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQThCRSw4REFBQyxtREFBRDtBQUFNLHNCQUFjLEVBQUMsUUFBckI7QUFBOEIsVUFBRSxFQUFFLENBQWxDO0FBQUEsK0JBQ0UsOERBQUMsMERBQUQ7QUFBQSxrQ0FDRSw4REFBQyxxREFBRDtBQUFRLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUUsS0FBSyxDQUFDLE1BQUQsQ0FBWDtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMscURBQUQ7QUFBUSxtQkFBTyxFQUFFO0FBQUEscUJBQU1BLEtBQUssQ0FBQyxPQUFELENBQVg7QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQTVFRDs7R0FBTTFCOztLQUFBQTtBQThFTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaW5kZXJDYXJkL1RpbmRlckNhcmRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gZnJvbSAnQGNoYWtyYS11aS9idXR0b24nO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGluZGVyQ2FyZCwgeyBBUEksIERpcmVjdGlvbiB9IGZyb20gJy4vcmVhY3QtdGluZGVyLWNhcmQnO1xyXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJy5wcmlzbWEvY2xpZW50JztcclxuXHJcbmludGVyZmFjZSBUaW5kZXJDYXJkc1Byb3BzIHtcclxuICBtb3ZpZXM6IE1vdmllW107XHJcbn1cclxuXHJcbmNvbnN0IFRpbmRlckNhcmRzID0gKHsgbW92aWVzOiBtIH06IFRpbmRlckNhcmRzUHJvcHMpID0+IHtcclxuICBjb25zdCBhbHJlYWR5UmVtb3ZlZDogTW92aWVbXSA9IFtdO1xyXG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShtKTtcclxuICBjb25zdCBbbGFzdERpcmVjdGlvbiwgc2V0TGFzdERpcmVjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8vIENyZWF0ZSByZWZzIGZvciBlYWNoIG1vdmllXHJcbiAgY29uc3QgY2hpbGRSZWZzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gQXJyYXkobS5sZW5ndGgpXHJcbiAgICAgIC5maWxsKDApXHJcbiAgICAgIC5tYXAoKGkpID0+IFJlYWN0LmNyZWF0ZVJlZjxBUEk+KCkpO1xyXG4gIH0sIFttXSk7XHJcblxyXG4gIGNvbnN0IHN3aXBlZCA9IChkaXJlY3Rpb246IERpcmVjdGlvbiwgbW92aWU6IE1vdmllKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncmVtb3Zpbmc6ICcgKyBtb3ZpZS50aXRsZSk7XHJcbiAgICBzZXRMYXN0RGlyZWN0aW9uKGRpcmVjdGlvbik7XHJcbiAgICBhbHJlYWR5UmVtb3ZlZC5wdXNoKG1vdmllKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvdXRPZkZyYW1lID0gKG1vdmllOiBNb3ZpZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobW92aWUudGl0bGUgKyAnIGxlZnQgdGhlIHNjcmVlbiEnKTtcclxuICAgIGxldCBuZXdNb3ZpZVN0YXRlID0gbW92aWVzLmZpbHRlcigobSkgPT4gbS5pZCAhPT0gbW92aWUuaWQpO1xyXG4gICAgbmV3TW92aWVTdGF0ZSA9IG5ld01vdmllU3RhdGUuZmlsdGVyKChtKSA9PiAhYWxyZWFkeVJlbW92ZWQuaW5jbHVkZXMobSkpO1xyXG4gICAgc2V0TW92aWVzKG5ld01vdmllU3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN3aXBlID0gKGRpcjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBtb3ZpZXNMZWZ0ID0gbW92aWVzPy5maWx0ZXIoKG0pID0+ICFhbHJlYWR5UmVtb3ZlZC5pbmNsdWRlcyhtKSk7XHJcbiAgICBpZiAobW92aWVzTGVmdD8ubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRvQmVSZW1vdmVkID0gbW92aWVzTGVmdFttb3ZpZXNMZWZ0Lmxlbmd0aCAtIDFdOyAvLyBGaW5kIHRoZSBjYXJkIG9iamVjdCB0byBiZSByZW1vdmVkXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gbS5tYXAoKG0pID0+IG0pLmluZGV4T2YodG9CZVJlbW92ZWQpOyAvLyBGaW5kIHRoZSBpbmRleCBvZiB3aGljaCB0byBtYWtlIHRoZSByZWZlcmVuY2UgdG9cclxuICAgICAgYWxyZWFkeVJlbW92ZWQucHVzaCh0b0JlUmVtb3ZlZCk7IC8vIE1ha2Ugc3VyZSB0aGUgbmV4dCBjYXJkIGdldHMgcmVtb3ZlZCBuZXh0IHRpbWUgaWYgdGhpcyBjYXJkIGRvIG5vdCBoYXZlIHRpbWUgdG8gZXhpdCB0aGUgc2NyZWVuXHJcbiAgICAgIGNoaWxkUmVmc1tpbmRleF0uY3VycmVudD8uc3dpcGUoZGlyKTsgLy8gU3dpcGUgdGhlIGNhcmQhXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgPEZsZXggZmxleERpcj1cImNvbHVtblwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPEJveCB3PVwiOTB2d1wiIG1heFc9XCIyNjBweFwiIGg9XCIzMDBweFwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgICB7bW92aWVzPy5tYXAoKG1vdmllLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBrZXk9e21vdmllLmlkfT5cclxuICAgICAgICAgICAgICA8VGluZGVyQ2FyZFxyXG4gICAgICAgICAgICAgICAgcmVmPXtjaGlsZFJlZnNbaW5kZXhdfVxyXG4gICAgICAgICAgICAgICAgb25Td2lwZT17KGRpcikgPT4gc3dpcGVkKGRpciwgbW92aWUpfVxyXG4gICAgICAgICAgICAgICAgb25DYXJkTGVmdFNjcmVlbj17KCkgPT4gb3V0T2ZGcmFtZShtb3ZpZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbj1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODB2d1wiXHJcbiAgICAgICAgICAgICAgICAgIG1heFc9XCIyNjBweFwiXHJcbiAgICAgICAgICAgICAgICAgIGg9XCIzMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHA9ezJ9IGZvbnRTaXplPVwibWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bW92aWUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICA8L1RpbmRlckNhcmQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbXQ9ezN9PlxyXG4gICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHN3aXBlKCdsZWZ0Jyl9PlN3aXBlIGxlZnQhPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc3dpcGUoJ3JpZ2h0Jyl9PlN3aXBlIHJpZ2h0ITwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW5kZXJDYXJkcztcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiQm94IiwiRmxleCIsIkhlYWRpbmciLCJSZWFjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIlRpbmRlckNhcmQiLCJUaW5kZXJDYXJkcyIsIm0iLCJtb3ZpZXMiLCJhbHJlYWR5UmVtb3ZlZCIsInNldE1vdmllcyIsImxhc3REaXJlY3Rpb24iLCJzZXRMYXN0RGlyZWN0aW9uIiwiY2hpbGRSZWZzIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwibWFwIiwiaSIsImNyZWF0ZVJlZiIsInN3aXBlZCIsImRpcmVjdGlvbiIsIm1vdmllIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwicHVzaCIsIm91dE9mRnJhbWUiLCJuZXdNb3ZpZVN0YXRlIiwiZmlsdGVyIiwiaWQiLCJpbmNsdWRlcyIsInN3aXBlIiwiZGlyIiwibW92aWVzTGVmdCIsInRvQmVSZW1vdmVkIiwiaW5kZXgiLCJpbmRleE9mIiwiY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=