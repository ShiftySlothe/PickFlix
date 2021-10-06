self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/TinderCard/TinderCards.tsx":
/*!***************************************************!*\
  !*** ./src/components/TinderCard/TinderCards.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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


/***/ }),

/***/ "./src/components/TinderCard/react-tinder-card/index.js":
/*!**************************************************************!*\
  !*** ./src/components/TinderCard/react-tinder-card/index.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _s = $RefreshSig$();

/* global WebKitCSSMatrix */
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var sleep = __webpack_require__(/*! p-sleep */ "./node_modules/p-sleep/index.js");

var settings = {
  snapBackDuration: 300,
  maxTilt: 5,
  bouncePower: 0.2,
  swipeThreshold: 300 // px/s

};

var getElementSize = function getElementSize(element) {
  var elementStyles = window.getComputedStyle(element);
  var widthString = elementStyles.getPropertyValue('width');
  var width = Number(widthString.split('px')[0]);
  var heightString = elementStyles.getPropertyValue('height');
  var height = Number(heightString.split('px')[0]);
  return {
    x: width,
    y: height
  };
};

var pythagoras = function pythagoras(x, y) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

var animateOut = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(element, speed) {
    var easeIn,
        startPos,
        bodySize,
        diagonal,
        velocity,
        time,
        multiplier,
        translateString,
        rotateString,
        rotationPower,
        _args = arguments;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            easeIn = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
            startPos = getTranslate(element);
            bodySize = getElementSize(document.body);
            diagonal = pythagoras(bodySize.x, bodySize.y);
            velocity = pythagoras(speed.x, speed.y);
            time = diagonal / velocity;
            multiplier = diagonal / velocity;
            translateString = translationString(speed.x * multiplier + startPos.x, -speed.y * multiplier + startPos.y);
            rotateString = '';
            rotationPower = 200;

            if (easeIn) {
              element.style.transition = 'ease ' + time + 's';
            } else {
              element.style.transition = 'ease-out ' + time + 's';
            }

            if (getRotation(element) === 0) {
              rotateString = rotationString((Math.random() - 0.5) * rotationPower);
            } else if (getRotation(element) > 0) {
              rotateString = rotationString(Math.random() * rotationPower / 2 + getRotation(element));
            } else {
              rotateString = rotationString((Math.random() - 1) * rotationPower / 2 + getRotation(element));
            }

            element.style.transform = translateString + rotateString;
            _context.next = 15;
            return sleep(time * 1000);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function animateOut(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var animateBack = function animateBack(element) {
  element.style.transition = settings.snapBackDuration + 'ms';
  var startingPoint = getTranslate(element);
  var translation = translationString(startingPoint.x * -settings.bouncePower, startingPoint.y * -settings.bouncePower);
  var rotation = rotationString(getRotation(element) * -settings.bouncePower);
  element.style.transform = translation + rotation;
  setTimeout(function () {
    element.style.transform = 'none';
  }, settings.snapBackDuration * 0.75);
  setTimeout(function () {
    element.style.transition = '10ms';
  }, settings.snapBackDuration);
};

var getSwipeDirection = function getSwipeDirection(speed) {
  if (Math.abs(speed.x) > Math.abs(speed.y)) {
    return speed.x > 0 ? 'right' : 'left';
  } else {
    return speed.y > 0 ? 'up' : 'down';
  }
};

var calcSpeed = function calcSpeed(oldLocation, newLocation) {
  var dx = newLocation.x - oldLocation.x;
  var dy = oldLocation.y - newLocation.y;
  var dt = (newLocation.time - oldLocation.time) / 1000;
  return {
    x: dx / dt,
    y: dy / dt
  };
};

var translationString = function translationString(x, y) {
  var translation = 'translate(' + x + 'px, ' + y + 'px)';
  return translation;
};

var rotationString = function rotationString(rot) {
  var rotation = 'rotate(' + rot + 'deg)';
  return rotation;
};

var getTranslate = function getTranslate(element) {
  var style = window.getComputedStyle(element);
  var matrix = new WebKitCSSMatrix(style.webkitTransform);
  var ans = {
    x: matrix.m41,
    y: matrix.m42
  };
  return ans;
};

var getRotation = function getRotation(element) {
  var style = window.getComputedStyle(element);
  var matrix = new WebKitCSSMatrix(style.webkitTransform);
  var ans = -Math.asin(matrix.m21) / (2 * Math.PI) * 360;
  return ans;
};

var dragableTouchmove = function dragableTouchmove(coordinates, element, offset, lastLocation) {
  var pos = {
    x: coordinates.x + offset.x,
    y: coordinates.y + offset.y
  };
  var newLocation = {
    x: pos.x,
    y: pos.y,
    time: new Date().getTime()
  };
  var translation = translationString(pos.x, pos.y);
  var rotCalc = calcSpeed(lastLocation, newLocation).x / 1000;
  var rotation = rotationString(rotCalc * settings.maxTilt);
  element.style.transform = translation + rotation;
  return newLocation;
};

var touchCoordinatesFromEvent = function touchCoordinatesFromEvent(e) {
  var touchLocation = e.targetTouches[0];
  return {
    x: touchLocation.clientX,
    y: touchLocation.clientY
  };
};

var mouseCoordinatesFromEvent = function mouseCoordinatesFromEvent(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
};

var TinderCard = React.forwardRef(_c = _s(function (_ref2, ref) {
  _s();

  var _ref2$flickOnSwipe = _ref2.flickOnSwipe,
      flickOnSwipe = _ref2$flickOnSwipe === void 0 ? true : _ref2$flickOnSwipe,
      children = _ref2.children,
      onSwipe = _ref2.onSwipe,
      onCardLeftScreen = _ref2.onCardLeftScreen,
      className = _ref2.className,
      _ref2$preventSwipe = _ref2.preventSwipe,
      preventSwipe = _ref2$preventSwipe === void 0 ? [] : _ref2$preventSwipe;
  var swipeAlreadyReleased = React.useRef(false);
  var element = React.useRef();
  React.useImperativeHandle(ref, function () {
    return {
      swipe: function swipe() {
        var _arguments = arguments;
        return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
          var dir, power, disturbance;
          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  dir = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 'right';
                  if (onSwipe) onSwipe(dir);
                  power = 1000;
                  disturbance = (Math.random() - 0.5) * 100;

                  if (!(dir === 'right')) {
                    _context2.next = 9;
                    break;
                  }

                  _context2.next = 7;
                  return animateOut(element.current, {
                    x: power,
                    y: disturbance
                  }, true);

                case 7:
                  _context2.next = 22;
                  break;

                case 9:
                  if (!(dir === 'left')) {
                    _context2.next = 14;
                    break;
                  }

                  _context2.next = 12;
                  return animateOut(element.current, {
                    x: -power,
                    y: disturbance
                  }, true);

                case 12:
                  _context2.next = 22;
                  break;

                case 14:
                  if (!(dir === 'up')) {
                    _context2.next = 19;
                    break;
                  }

                  _context2.next = 17;
                  return animateOut(element.current, {
                    x: disturbance,
                    y: power
                  }, true);

                case 17:
                  _context2.next = 22;
                  break;

                case 19:
                  if (!(dir === 'down')) {
                    _context2.next = 22;
                    break;
                  }

                  _context2.next = 22;
                  return animateOut(element.current, {
                    x: disturbance,
                    y: -power
                  }, true);

                case 22:
                  element.current.style.display = 'none';
                  if (onCardLeftScreen) onCardLeftScreen(dir);

                case 24:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      }
    };
  });
  var handleSwipeReleased = React.useCallback( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(element, speed) {
      var dir;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!swipeAlreadyReleased.current) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              swipeAlreadyReleased.current = true; // Check if this is a swipe

              if (!(Math.abs(speed.x) > settings.swipeThreshold || Math.abs(speed.y) > settings.swipeThreshold)) {
                _context3.next = 13;
                break;
              }

              dir = getSwipeDirection(speed);
              if (onSwipe) onSwipe(dir);

              if (!flickOnSwipe) {
                _context3.next = 13;
                break;
              }

              if (preventSwipe.includes(dir)) {
                _context3.next = 13;
                break;
              }

              _context3.next = 10;
              return animateOut(element, speed);

            case 10:
              element.style.display = 'none';
              if (onCardLeftScreen) onCardLeftScreen(dir);
              return _context3.abrupt("return");

            case 13:
              // Card was not flicked away, animate back to start
              animateBack(element);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }(), [swipeAlreadyReleased, flickOnSwipe, onSwipe, onCardLeftScreen, preventSwipe]);
  var handleSwipeStart = React.useCallback(function () {
    swipeAlreadyReleased.current = false;
  }, [swipeAlreadyReleased]);
  React.useEffect(function () {
    var offset = {
      x: null,
      y: null
    };
    var speed = {
      x: 0,
      y: 0
    };
    var lastLocation = {
      x: 0,
      y: 0,
      time: new Date().getTime()
    };
    var mouseIsClicked = false;
    element.current.addEventListener('touchstart', function (ev) {
      ev.preventDefault();
      handleSwipeStart();
      offset = {
        x: -touchCoordinatesFromEvent(ev).x,
        y: -touchCoordinatesFromEvent(ev).y
      };
    });
    element.current.addEventListener('mousedown', function (ev) {
      ev.preventDefault();
      mouseIsClicked = true;
      handleSwipeStart();
      offset = {
        x: -mouseCoordinatesFromEvent(ev).x,
        y: -mouseCoordinatesFromEvent(ev).y
      };
    });
    element.current.addEventListener('touchmove', function (ev) {
      ev.preventDefault();
      var newLocation = dragableTouchmove(touchCoordinatesFromEvent(ev), element.current, offset, lastLocation);
      speed = calcSpeed(lastLocation, newLocation);
      lastLocation = newLocation;
    });
    element.current.addEventListener('mousemove', function (ev) {
      ev.preventDefault();

      if (mouseIsClicked) {
        var newLocation = dragableTouchmove(mouseCoordinatesFromEvent(ev), element.current, offset, lastLocation);
        speed = calcSpeed(lastLocation, newLocation);
        lastLocation = newLocation;
      }
    });
    element.current.addEventListener('touchend', function (ev) {
      ev.preventDefault();
      handleSwipeReleased(element.current, speed);
    });
    element.current.addEventListener('mouseup', function (ev) {
      if (mouseIsClicked) {
        ev.preventDefault();
        mouseIsClicked = false;
        handleSwipeReleased(element.current, speed);
      }
    });
    element.current.addEventListener('mouseleave', function (ev) {
      if (mouseIsClicked) {
        ev.preventDefault();
        mouseIsClicked = false;
        handleSwipeReleased(element.current, speed);
      }
    });
  }, []);
  return React.createElement('div', {
    ref: element,
    className: className
  }, children);
}, "XQvDsGbjZlfR2u1gESqF15PSWXw=", false, function () {
  return [React.useImperativeHandle];
}));
_c2 = TinderCard;
module.exports = TinderCard;

var _c, _c2;

$RefreshReg$(_c, "TinderCard$React.forwardRef");
$RefreshReg$(_c2, "TinderCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmVlZjY0NWNkMTlmODdiZjdlMmMxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBUUEsSUFBTVMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBcUM7QUFBQTs7QUFBQSxNQUExQkMsQ0FBMEIsUUFBbENDLE1BQWtDO0FBQ3ZELE1BQU1DLGNBQXVCLEdBQUcsRUFBaEM7O0FBQ0Esa0JBQTRCTCwrQ0FBUSxDQUFDRyxDQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVFLFNBQWY7O0FBQ0EsbUJBQTBDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPTyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0QixpQkFIdUQsQ0FLdkQ7OztBQUNBLE1BQU1DLFNBQVMsR0FBR1YsOENBQU8sQ0FBQyxZQUFNO0FBQzlCLFdBQU9XLEtBQUssQ0FBQ1AsQ0FBQyxDQUFDUSxNQUFILENBQUwsQ0FDSkMsSUFESSxDQUNDLENBREQsRUFFSkMsR0FGSSxDQUVBLFVBQUNDLENBQUQ7QUFBQSwwQkFBT2hCLHNEQUFBLEVBQVA7QUFBQSxLQUZBLENBQVA7QUFHRCxHQUp3QixFQUl0QixDQUFDSyxDQUFELENBSnNCLENBQXpCOztBQU1BLE1BQU1hLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLFNBQUQsRUFBdUJDLEtBQXZCLEVBQXdDO0FBQ3JEQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFlRixLQUFLLENBQUNHLEtBQWpDO0FBQ0FiLElBQUFBLGdCQUFnQixDQUFDUyxTQUFELENBQWhCO0FBQ0FaLElBQUFBLGNBQWMsQ0FBQ2lCLElBQWYsQ0FBb0JKLEtBQXBCO0FBQ0QsR0FKRDs7QUFNQSxNQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDTCxLQUFELEVBQWtCO0FBQ25DQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIs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QUFsQyxFQUFpRCxVQUFDQyxFQUFELEVBQVE7QUFDdkQsVUFBSUYsY0FBSixFQUFvQjtBQUNsQkUsUUFBQUEsRUFBRSxDQUFDQyxjQUFIO0FBQ0FILFFBQUFBLGNBQWMsR0FBRyxLQUFqQjtBQUNBSixRQUFBQSxtQkFBbUIsQ0FBQzNGLE9BQU8sQ0FBQ1QsT0FBVCxFQUFrQjJCLEtBQWxCLENBQW5CO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0F2REQsRUF1REcsRUF2REg7QUF5REEsU0FDRS9ELEtBQUssQ0FBQ2dKLGFBQU4sQ0FBb0IsS0FBcEIsRUFBMkI7QUFBRXJCLElBQUFBLEdBQUcsRUFBRTlFLE9BQVA7QUFBZ0JtRixJQUFBQSxTQUFTLEVBQVRBO0FBQWhCLEdBQTNCLEVBQXdESCxRQUF4RCxDQURGO0FBR0QsQ0FoSGtCO0FBQUEsVUFLakI3SCxLQUFLLENBQUNvSSxtQkFMVztBQUFBLEdBQW5CO01BQU1qSTtBQWtITjhJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQi9JLFVBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpbmRlckNhcmQvVGluZGVyQ2FyZHMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaW5kZXJDYXJkL3JlYWN0LXRpbmRlci1jYXJkL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uR3JvdXAgfSBmcm9tICdAY2hha3JhLXVpL2J1dHRvbic7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUaW5kZXJDYXJkIGZyb20gJy4vcmVhY3QtdGluZGVyLWNhcmQnO1xyXG5pbXBvcnQgeyBBUEksIERpcmVjdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBNb3ZpZSB9IGZyb20gJy5wcmlzbWEvY2xpZW50JztcclxuXHJcbmludGVyZmFjZSBUaW5kZXJDYXJkc1Byb3BzIHtcclxuICBtb3ZpZXM6IE1vdmllW107XHJcbn1cclxuXHJcbmNvbnN0IFRpbmRlckNhcmRzID0gKHsgbW92aWVzOiBtIH06IFRpbmRlckNhcmRzUHJvcHMpID0+IHtcclxuICBjb25zdCBhbHJlYWR5UmVtb3ZlZDogTW92aWVbXSA9IFtdO1xyXG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShtKTtcclxuICBjb25zdCBbbGFzdERpcmVjdGlvbiwgc2V0TGFzdERpcmVjdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8vIENyZWF0ZSByZWZzIGZvciBlYWNoIG1vdmllXHJcbiAgY29uc3QgY2hpbGRSZWZzID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICByZXR1cm4gQXJyYXkobS5sZW5ndGgpXHJcbiAgICAgIC5maWxsKDApXHJcbiAgICAgIC5tYXAoKGkpID0+IFJlYWN0LmNyZWF0ZVJlZjxBUEk+KCkpO1xyXG4gIH0sIFttXSk7XHJcblxyXG4gIGNvbnN0IHN3aXBlZCA9IChkaXJlY3Rpb246IERpcmVjdGlvbiwgbW92aWU6IE1vdmllKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygncmVtb3Zpbmc6ICcgKyBtb3ZpZS50aXRsZSk7XHJcbiAgICBzZXRMYXN0RGlyZWN0aW9uKGRpcmVjdGlvbik7XHJcbiAgICBhbHJlYWR5UmVtb3ZlZC5wdXNoKG1vdmllKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvdXRPZkZyYW1lID0gKG1vdmllOiBNb3ZpZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobW92aWUudGl0bGUgKyAnIGxlZnQgdGhlIHNjcmVlbiEnKTtcclxuICAgIGxldCBuZXdNb3ZpZVN0YXRlID0gbW92aWVzLmZpbHRlcigobSkgPT4gbS5pZCAhPT0gbW92aWUuaWQpO1xyXG4gICAgbmV3TW92aWVTdGF0ZSA9IG5ld01vdmllU3RhdGUuZmlsdGVyKChtKSA9PiAhYWxyZWFkeVJlbW92ZWQuaW5jbHVkZXMobSkpO1xyXG4gICAgc2V0TW92aWVzKG5ld01vdmllU3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN3aXBlID0gKGRpcjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBtb3ZpZXNMZWZ0ID0gbW92aWVzPy5maWx0ZXIoKG0pID0+ICFhbHJlYWR5UmVtb3ZlZC5pbmNsdWRlcyhtKSk7XHJcbiAgICBpZiAobW92aWVzTGVmdD8ubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRvQmVSZW1vdmVkID0gbW92aWVzTGVmdFttb3ZpZXNMZWZ0Lmxlbmd0aCAtIDFdOyAvLyBGaW5kIHRoZSBjYXJkIG9iamVjdCB0byBiZSByZW1vdmVkXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gbS5tYXAoKG0pID0+IG0pLmluZGV4T2YodG9CZVJlbW92ZWQpOyAvLyBGaW5kIHRoZSBpbmRleCBvZiB3aGljaCB0byBtYWtlIHRoZSByZWZlcmVuY2UgdG9cclxuICAgICAgYWxyZWFkeVJlbW92ZWQucHVzaCh0b0JlUmVtb3ZlZCk7IC8vIE1ha2Ugc3VyZSB0aGUgbmV4dCBjYXJkIGdldHMgcmVtb3ZlZCBuZXh0IHRpbWUgaWYgdGhpcyBjYXJkIGRvIG5vdCBoYXZlIHRpbWUgdG8gZXhpdCB0aGUgc2NyZWVuXHJcbiAgICAgIGNoaWxkUmVmc1tpbmRleF0uY3VycmVudD8uc3dpcGUoZGlyKTsgLy8gU3dpcGUgdGhlIGNhcmQhXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgPEZsZXggZmxleERpcj1cImNvbHVtblwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPEJveCB3PVwiOTB2d1wiIG1heFc9XCIyNjBweFwiIGg9XCIzMDBweFwiIG92ZXJmbG93PVwiaGlkZGVuXCI+XHJcbiAgICAgICAgICB7bW92aWVzPy5tYXAoKG1vdmllLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBrZXk9e21vdmllLmlkfT5cclxuICAgICAgICAgICAgICA8VGluZGVyQ2FyZFxyXG4gICAgICAgICAgICAgICAgcmVmPXtjaGlsZFJlZnNbaW5kZXhdfVxyXG4gICAgICAgICAgICAgICAgb25Td2lwZT17KGRpcikgPT4gc3dpcGVkKGRpciwgbW92aWUpfVxyXG4gICAgICAgICAgICAgICAgb25DYXJkTGVmdFNjcmVlbj17KCkgPT4gb3V0T2ZGcmFtZShtb3ZpZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbj1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODB2d1wiXHJcbiAgICAgICAgICAgICAgICAgIG1heFc9XCIyNjBweFwiXHJcbiAgICAgICAgICAgICAgICAgIGg9XCIzMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHA9ezJ9IGZvbnRTaXplPVwibWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bW92aWUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICA8L1RpbmRlckNhcmQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbXQ9ezN9PlxyXG4gICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHN3aXBlKCdsZWZ0Jyl9PlN3aXBlIGxlZnQhPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc3dpcGUoJ3JpZ2h0Jyl9PlN3aXBlIHJpZ2h0ITwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW5kZXJDYXJkcztcclxuIiwiLyogZ2xvYmFsIFdlYktpdENTU01hdHJpeCAqL1xuXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcbmNvbnN0IHNsZWVwID0gcmVxdWlyZSgncC1zbGVlcCcpXG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBzbmFwQmFja0R1cmF0aW9uOiAzMDAsXG4gIG1heFRpbHQ6IDUsXG4gIGJvdW5jZVBvd2VyOiAwLjIsXG4gIHN3aXBlVGhyZXNob2xkOiAzMDAgLy8gcHgvc1xufVxuXG5jb25zdCBnZXRFbGVtZW50U2l6ZSA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICBjb25zdCB3aWR0aFN0cmluZyA9IGVsZW1lbnRTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKVxuICBjb25zdCB3aWR0aCA9IE51bWJlcih3aWR0aFN0cmluZy5zcGxpdCgncHgnKVswXSlcbiAgY29uc3QgaGVpZ2h0U3RyaW5nID0gZWxlbWVudFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKVxuICBjb25zdCBoZWlnaHQgPSBOdW1iZXIoaGVpZ2h0U3RyaW5nLnNwbGl0KCdweCcpWzBdKVxuICByZXR1cm4geyB4OiB3aWR0aCwgeTogaGVpZ2h0IH1cbn1cblxuY29uc3QgcHl0aGFnb3JhcyA9ICh4LCB5KSA9PiB7XG4gIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeCwgMikgKyBNYXRoLnBvdyh5LCAyKSlcbn1cblxuY29uc3QgYW5pbWF0ZU91dCA9IGFzeW5jIChlbGVtZW50LCBzcGVlZCwgZWFzZUluID0gZmFsc2UpID0+IHtcbiAgY29uc3Qgc3RhcnRQb3MgPSBnZXRUcmFuc2xhdGUoZWxlbWVudClcbiAgY29uc3QgYm9keVNpemUgPSBnZXRFbGVtZW50U2l6ZShkb2N1bWVudC5ib2R5KVxuICBjb25zdCBkaWFnb25hbCA9IHB5dGhhZ29yYXMoYm9keVNpemUueCwgYm9keVNpemUueSlcblxuICBjb25zdCB2ZWxvY2l0eSA9IHB5dGhhZ29yYXMoc3BlZWQueCwgc3BlZWQueSlcbiAgY29uc3QgdGltZSA9IGRpYWdvbmFsIC8gdmVsb2NpdHlcbiAgY29uc3QgbXVsdGlwbGllciA9IGRpYWdvbmFsIC8gdmVsb2NpdHlcblxuICBjb25zdCB0cmFuc2xhdGVTdHJpbmcgPSB0cmFuc2xhdGlvblN0cmluZyhzcGVlZC54ICogbXVsdGlwbGllciArIHN0YXJ0UG9zLngsIC1zcGVlZC55ICogbXVsdGlwbGllciArIHN0YXJ0UG9zLnkpXG4gIGxldCByb3RhdGVTdHJpbmcgPSAnJ1xuXG4gIGNvbnN0IHJvdGF0aW9uUG93ZXIgPSAyMDBcblxuICBpZiAoZWFzZUluKSB7XG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJ2Vhc2UgJyArIHRpbWUgKyAncydcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnZWFzZS1vdXQgJyArIHRpbWUgKyAncydcbiAgfVxuXG4gIGlmIChnZXRSb3RhdGlvbihlbGVtZW50KSA9PT0gMCkge1xuICAgIHJvdGF0ZVN0cmluZyA9IHJvdGF0aW9uU3RyaW5nKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHJvdGF0aW9uUG93ZXIpXG4gIH0gZWxzZSBpZiAoZ2V0Um90YXRpb24oZWxlbWVudCkgPiAwKSB7XG4gICAgcm90YXRlU3RyaW5nID0gcm90YXRpb25TdHJpbmcoKE1hdGgucmFuZG9tKCkpICogcm90YXRpb25Qb3dlciAvIDIgKyBnZXRSb3RhdGlvbihlbGVtZW50KSlcbiAgfSBlbHNlIHtcbiAgICByb3RhdGVTdHJpbmcgPSByb3RhdGlvblN0cmluZygoTWF0aC5yYW5kb20oKSAtIDEpICogcm90YXRpb25Qb3dlciAvIDIgKyBnZXRSb3RhdGlvbihlbGVtZW50KSlcbiAgfVxuXG4gIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRlU3RyaW5nICsgcm90YXRlU3RyaW5nXG5cbiAgYXdhaXQgc2xlZXAodGltZSAqIDEwMDApXG59XG5cbmNvbnN0IGFuaW1hdGVCYWNrID0gKGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gc2V0dGluZ3Muc25hcEJhY2tEdXJhdGlvbiArICdtcydcbiAgY29uc3Qgc3RhcnRpbmdQb2ludCA9IGdldFRyYW5zbGF0ZShlbGVtZW50KVxuICBjb25zdCB0cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uU3RyaW5nKHN0YXJ0aW5nUG9pbnQueCAqIC1zZXR0aW5ncy5ib3VuY2VQb3dlciwgc3RhcnRpbmdQb2ludC55ICogLXNldHRpbmdzLmJvdW5jZVBvd2VyKVxuICBjb25zdCByb3RhdGlvbiA9IHJvdGF0aW9uU3RyaW5nKGdldFJvdGF0aW9uKGVsZW1lbnQpICogLXNldHRpbmdzLmJvdW5jZVBvd2VyKVxuICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uICsgcm90YXRpb25cblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJ1xuICB9LCBzZXR0aW5ncy5zbmFwQmFja0R1cmF0aW9uICogMC43NSlcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnMTBtcydcbiAgfSwgc2V0dGluZ3Muc25hcEJhY2tEdXJhdGlvbilcbn1cblxuY29uc3QgZ2V0U3dpcGVEaXJlY3Rpb24gPSAoc3BlZWQpID0+IHtcbiAgaWYgKE1hdGguYWJzKHNwZWVkLngpID4gTWF0aC5hYnMoc3BlZWQueSkpIHtcbiAgICByZXR1cm4gKHNwZWVkLnggPiAwKSA/ICdyaWdodCcgOiAnbGVmdCdcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKHNwZWVkLnkgPiAwKSA/ICd1cCcgOiAnZG93bidcbiAgfVxufVxuXG5jb25zdCBjYWxjU3BlZWQgPSAob2xkTG9jYXRpb24sIG5ld0xvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IGR4ID0gbmV3TG9jYXRpb24ueCAtIG9sZExvY2F0aW9uLnhcbiAgY29uc3QgZHkgPSBvbGRMb2NhdGlvbi55IC0gbmV3TG9jYXRpb24ueVxuICBjb25zdCBkdCA9IChuZXdMb2NhdGlvbi50aW1lIC0gb2xkTG9jYXRpb24udGltZSkgLyAxMDAwXG4gIHJldHVybiB7IHg6IGR4IC8gZHQsIHk6IGR5IC8gZHQgfVxufVxuXG5jb25zdCB0cmFuc2xhdGlvblN0cmluZyA9ICh4LCB5KSA9PiB7XG4gIGNvbnN0IHRyYW5zbGF0aW9uID0gJ3RyYW5zbGF0ZSgnICsgeCArICdweCwgJyArIHkgKyAncHgpJ1xuICByZXR1cm4gdHJhbnNsYXRpb25cbn1cblxuY29uc3Qgcm90YXRpb25TdHJpbmcgPSAocm90KSA9PiB7XG4gIGNvbnN0IHJvdGF0aW9uID0gJ3JvdGF0ZSgnICsgcm90ICsgJ2RlZyknXG4gIHJldHVybiByb3RhdGlvblxufVxuXG5jb25zdCBnZXRUcmFuc2xhdGUgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG4gIGNvbnN0IG1hdHJpeCA9IG5ldyBXZWJLaXRDU1NNYXRyaXgoc3R5bGUud2Via2l0VHJhbnNmb3JtKVxuICBjb25zdCBhbnMgPSB7IHg6IG1hdHJpeC5tNDEsIHk6IG1hdHJpeC5tNDIgfVxuICByZXR1cm4gYW5zXG59XG5cbmNvbnN0IGdldFJvdGF0aW9uID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICBjb25zdCBtYXRyaXggPSBuZXcgV2ViS2l0Q1NTTWF0cml4KHN0eWxlLndlYmtpdFRyYW5zZm9ybSlcbiAgY29uc3QgYW5zID0gLU1hdGguYXNpbihtYXRyaXgubTIxKSAvICgyICogTWF0aC5QSSkgKiAzNjBcbiAgcmV0dXJuIGFuc1xufVxuXG5jb25zdCBkcmFnYWJsZVRvdWNobW92ZSA9IChjb29yZGluYXRlcywgZWxlbWVudCwgb2Zmc2V0LCBsYXN0TG9jYXRpb24pID0+IHtcbiAgY29uc3QgcG9zID0geyB4OiBjb29yZGluYXRlcy54ICsgb2Zmc2V0LngsIHk6IGNvb3JkaW5hdGVzLnkgKyBvZmZzZXQueSB9XG4gIGNvbnN0IG5ld0xvY2F0aW9uID0geyB4OiBwb3MueCwgeTogcG9zLnksIHRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH1cbiAgY29uc3QgdHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvblN0cmluZyhwb3MueCwgcG9zLnkpXG4gIGNvbnN0IHJvdENhbGMgPSBjYWxjU3BlZWQobGFzdExvY2F0aW9uLCBuZXdMb2NhdGlvbikueCAvIDEwMDBcbiAgY29uc3Qgcm90YXRpb24gPSByb3RhdGlvblN0cmluZyhyb3RDYWxjICogc2V0dGluZ3MubWF4VGlsdClcbiAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2xhdGlvbiArIHJvdGF0aW9uXG4gIHJldHVybiBuZXdMb2NhdGlvblxufVxuXG5jb25zdCB0b3VjaENvb3JkaW5hdGVzRnJvbUV2ZW50ID0gKGUpID0+IHtcbiAgY29uc3QgdG91Y2hMb2NhdGlvbiA9IGUudGFyZ2V0VG91Y2hlc1swXVxuICByZXR1cm4geyB4OiB0b3VjaExvY2F0aW9uLmNsaWVudFgsIHk6IHRvdWNoTG9jYXRpb24uY2xpZW50WSB9XG59XG5cbmNvbnN0IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQgPSAoZSkgPT4ge1xuICByZXR1cm4geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9XG59XG5cbmNvbnN0IFRpbmRlckNhcmQgPSBSZWFjdC5mb3J3YXJkUmVmKCh7IGZsaWNrT25Td2lwZSA9IHRydWUsIGNoaWxkcmVuLCBvblN3aXBlLCBvbkNhcmRMZWZ0U2NyZWVuLCBjbGFzc05hbWUsIHByZXZlbnRTd2lwZSA9IFtdIH0sIHJlZikgPT4ge1xuICBjb25zdCBzd2lwZUFscmVhZHlSZWxlYXNlZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcblxuICBjb25zdCBlbGVtZW50ID0gUmVhY3QudXNlUmVmKClcblxuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICBhc3luYyBzd2lwZSAoZGlyID0gJ3JpZ2h0Jykge1xuICAgICAgaWYgKG9uU3dpcGUpIG9uU3dpcGUoZGlyKVxuICAgICAgY29uc3QgcG93ZXIgPSAxMDAwXG4gICAgICBjb25zdCBkaXN0dXJiYW5jZSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwMFxuICAgICAgaWYgKGRpciA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBhd2FpdCBhbmltYXRlT3V0KGVsZW1lbnQuY3VycmVudCwgeyB4OiBwb3dlciwgeTogZGlzdHVyYmFuY2UgfSwgdHJ1ZSlcbiAgICAgIH0gZWxzZSBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICAgICAgYXdhaXQgYW5pbWF0ZU91dChlbGVtZW50LmN1cnJlbnQsIHsgeDogLXBvd2VyLCB5OiBkaXN0dXJiYW5jZSB9LCB0cnVlKVxuICAgICAgfSBlbHNlIGlmIChkaXIgPT09ICd1cCcpIHtcbiAgICAgICAgYXdhaXQgYW5pbWF0ZU91dChlbGVtZW50LmN1cnJlbnQsIHsgeDogZGlzdHVyYmFuY2UsIHk6IHBvd2VyIH0sIHRydWUpXG4gICAgICB9IGVsc2UgaWYgKGRpciA9PT0gJ2Rvd24nKSB7XG4gICAgICAgIGF3YWl0IGFuaW1hdGVPdXQoZWxlbWVudC5jdXJyZW50LCB7IHg6IGRpc3R1cmJhbmNlLCB5OiAtcG93ZXIgfSwgdHJ1ZSlcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICBpZiAob25DYXJkTGVmdFNjcmVlbikgb25DYXJkTGVmdFNjcmVlbihkaXIpXG4gICAgfVxuICB9KSlcblxuICBjb25zdCBoYW5kbGVTd2lwZVJlbGVhc2VkID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKGVsZW1lbnQsIHNwZWVkKSA9PiB7XG4gICAgaWYgKHN3aXBlQWxyZWFkeVJlbGVhc2VkLmN1cnJlbnQpIHsgcmV0dXJuIH1cbiAgICBzd2lwZUFscmVhZHlSZWxlYXNlZC5jdXJyZW50ID0gdHJ1ZVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIHN3aXBlXG4gICAgaWYgKE1hdGguYWJzKHNwZWVkLngpID4gc2V0dGluZ3Muc3dpcGVUaHJlc2hvbGQgfHwgTWF0aC5hYnMoc3BlZWQueSkgPiBzZXR0aW5ncy5zd2lwZVRocmVzaG9sZCkge1xuICAgICAgY29uc3QgZGlyID0gZ2V0U3dpcGVEaXJlY3Rpb24oc3BlZWQpXG5cbiAgICAgIGlmIChvblN3aXBlKSBvblN3aXBlKGRpcilcblxuICAgICAgaWYgKGZsaWNrT25Td2lwZSkge1xuICAgICAgICBpZiAoIXByZXZlbnRTd2lwZS5pbmNsdWRlcyhkaXIpKSB7XG4gICAgICAgICAgYXdhaXQgYW5pbWF0ZU91dChlbGVtZW50LCBzcGVlZClcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICBpZiAob25DYXJkTGVmdFNjcmVlbikgb25DYXJkTGVmdFNjcmVlbihkaXIpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDYXJkIHdhcyBub3QgZmxpY2tlZCBhd2F5LCBhbmltYXRlIGJhY2sgdG8gc3RhcnRcbiAgICBhbmltYXRlQmFjayhlbGVtZW50KVxuICB9LCBbc3dpcGVBbHJlYWR5UmVsZWFzZWQsIGZsaWNrT25Td2lwZSwgb25Td2lwZSwgb25DYXJkTGVmdFNjcmVlbiwgcHJldmVudFN3aXBlXSlcblxuICBjb25zdCBoYW5kbGVTd2lwZVN0YXJ0ID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHN3aXBlQWxyZWFkeVJlbGVhc2VkLmN1cnJlbnQgPSBmYWxzZVxuICB9LCBbc3dpcGVBbHJlYWR5UmVsZWFzZWRdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9mZnNldCA9IHsgeDogbnVsbCwgeTogbnVsbCB9XG4gICAgbGV0IHNwZWVkID0geyB4OiAwLCB5OiAwIH1cbiAgICBsZXQgbGFzdExvY2F0aW9uID0geyB4OiAwLCB5OiAwLCB0aW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9XG4gICAgbGV0IG1vdXNlSXNDbGlja2VkID0gZmFsc2VcblxuICAgIGVsZW1lbnQuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCgndG91Y2hzdGFydCcpLCAoZXYpID0+IHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGhhbmRsZVN3aXBlU3RhcnQoKVxuICAgICAgb2Zmc2V0ID0geyB4OiAtdG91Y2hDb29yZGluYXRlc0Zyb21FdmVudChldikueCwgeTogLXRvdWNoQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXYpLnkgfVxuICAgIH0pXG5cbiAgICBlbGVtZW50LmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigoJ21vdXNlZG93bicpLCAoZXYpID0+IHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIG1vdXNlSXNDbGlja2VkID0gdHJ1ZVxuICAgICAgaGFuZGxlU3dpcGVTdGFydCgpXG4gICAgICBvZmZzZXQgPSB7IHg6IC1tb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50KGV2KS54LCB5OiAtbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldikueSB9XG4gICAgfSlcblxuICAgIGVsZW1lbnQuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCgndG91Y2htb3ZlJyksIChldikgPT4ge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgbmV3TG9jYXRpb24gPSBkcmFnYWJsZVRvdWNobW92ZSh0b3VjaENvb3JkaW5hdGVzRnJvbUV2ZW50KGV2KSwgZWxlbWVudC5jdXJyZW50LCBvZmZzZXQsIGxhc3RMb2NhdGlvbilcbiAgICAgIHNwZWVkID0gY2FsY1NwZWVkKGxhc3RMb2NhdGlvbiwgbmV3TG9jYXRpb24pXG4gICAgICBsYXN0TG9jYXRpb24gPSBuZXdMb2NhdGlvblxuICAgIH0pXG5cbiAgICBlbGVtZW50LmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigoJ21vdXNlbW92ZScpLCAoZXYpID0+IHtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmIChtb3VzZUlzQ2xpY2tlZCkge1xuICAgICAgICBjb25zdCBuZXdMb2NhdGlvbiA9IGRyYWdhYmxlVG91Y2htb3ZlKG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXYpLCBlbGVtZW50LmN1cnJlbnQsIG9mZnNldCwgbGFzdExvY2F0aW9uKVxuICAgICAgICBzcGVlZCA9IGNhbGNTcGVlZChsYXN0TG9jYXRpb24sIG5ld0xvY2F0aW9uKVxuICAgICAgICBsYXN0TG9jYXRpb24gPSBuZXdMb2NhdGlvblxuICAgICAgfVxuICAgIH0pXG5cbiAgICBlbGVtZW50LmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigoJ3RvdWNoZW5kJyksIChldikgPT4ge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgaGFuZGxlU3dpcGVSZWxlYXNlZChlbGVtZW50LmN1cnJlbnQsIHNwZWVkKVxuICAgIH0pXG5cbiAgICBlbGVtZW50LmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigoJ21vdXNldXAnKSwgKGV2KSA9PiB7XG4gICAgICBpZiAobW91c2VJc0NsaWNrZWQpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICBtb3VzZUlzQ2xpY2tlZCA9IGZhbHNlXG4gICAgICAgIGhhbmRsZVN3aXBlUmVsZWFzZWQoZWxlbWVudC5jdXJyZW50LCBzcGVlZClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZWxlbWVudC5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoKCdtb3VzZWxlYXZlJyksIChldikgPT4ge1xuICAgICAgaWYgKG1vdXNlSXNDbGlja2VkKSB7XG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgbW91c2VJc0NsaWNrZWQgPSBmYWxzZVxuICAgICAgICBoYW5kbGVTd2lwZVJlbGVhc2VkKGVsZW1lbnQuY3VycmVudCwgc3BlZWQpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHJlZjogZWxlbWVudCwgY2xhc3NOYW1lIH0sIGNoaWxkcmVuKVxuICApXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbmRlckNhcmRcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJCdXR0b25Hcm91cCIsIkJveCIsIkZsZXgiLCJIZWFkaW5nIiwiUmVhY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJUaW5kZXJDYXJkIiwiVGluZGVyQ2FyZHMiLCJtIiwibW92aWVzIiwiYWxyZWFkeVJlbW92ZWQiLCJzZXRNb3ZpZXMiLCJsYXN0RGlyZWN0aW9uIiwic2V0TGFzdERpcmVjdGlvbiIsImNoaWxkUmVmcyIsIkFycmF5IiwibGVuZ3RoIiwiZmlsbCIsIm1hcCIsImkiLCJjcmVhdGVSZWYiLCJzd2lwZWQiLCJkaXJlY3Rpb24iLCJtb3ZpZSIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInB1c2giLCJvdXRPZkZyYW1lIiwibmV3TW92aWVTdGF0ZSIsImZpbHRlciIsImlkIiwiaW5jbHVkZXMiLCJzd2lwZSIsImRpciIsIm1vdmllc0xlZnQiLCJ0b0JlUmVtb3ZlZCIsImluZGV4IiwiaW5kZXhPZiIsImN1cnJlbnQiLCJyZXF1aXJlIiwic2xlZXAiLCJzZXR0aW5ncyIsInNuYXBCYWNrRHVyYXRpb24iLCJtYXhUaWx0IiwiYm91bmNlUG93ZXIiLCJzd2lwZVRocmVzaG9sZCIsImdldEVsZW1lbnRTaXplIiwiZWxlbWVudCIsImVsZW1lbnRTdHlsZXMiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwid2lkdGhTdHJpbmciLCJnZXRQcm9wZXJ0eVZhbHVlIiwid2lkdGgiLCJOdW1iZXIiLCJzcGxpdCIsImhlaWdodFN0cmluZyIsImhlaWdodCIsIngiLCJ5IiwicHl0aGFnb3JhcyIsIk1hdGgiLCJzcXJ0IiwicG93IiwiYW5pbWF0ZU91dCIsInNwZWVkIiwiZWFzZUluIiwic3RhcnRQb3MiLCJnZXRUcmFuc2xhdGUiLCJib2R5U2l6ZSIsImRvY3VtZW50IiwiYm9keSIsImRpYWdvbmFsIiwidmVsb2NpdHkiLCJ0aW1lIiwibXVsdGlwbGllciIsInRyYW5zbGF0ZVN0cmluZyIsInRyYW5zbGF0aW9uU3RyaW5nIiwicm90YXRlU3RyaW5nIiwicm90YXRpb25Qb3dlciIsInN0eWxlIiwidHJhbnNpdGlvbiIsImdldFJvdGF0aW9uIiwicm90YXRpb25TdHJpbmciLCJyYW5kb20iLCJ0cmFuc2Zvcm0iLCJhbmltYXRlQmFjayIsInN0YXJ0aW5nUG9pbnQiLCJ0cmFuc2xhdGlvbiIsInJvdGF0aW9uIiwic2V0VGltZW91dCIsImdldFN3aXBlRGlyZWN0aW9uIiwiYWJzIiwiY2FsY1NwZWVkIiwib2xkTG9jYXRpb24iLCJuZXdMb2NhdGlvbiIsImR4IiwiZHkiLCJkdCIsInJvdCIsIm1hdHJpeCIsIldlYktpdENTU01hdHJpeCIsIndlYmtpdFRyYW5zZm9ybSIsImFucyIsIm00MSIsIm00MiIsImFzaW4iLCJtMjEiLCJQSSIsImRyYWdhYmxlVG91Y2htb3ZlIiwiY29vcmRpbmF0ZXMiLCJvZmZzZXQiLCJsYXN0TG9jYXRpb24iLCJwb3MiLCJEYXRlIiwiZ2V0VGltZSIsInJvdENhbGMiLCJ0b3VjaENvb3JkaW5hdGVzRnJvbUV2ZW50IiwiZSIsInRvdWNoTG9jYXRpb24iLCJ0YXJnZXRUb3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJtb3VzZUNvb3JkaW5hdGVzRnJvbUV2ZW50IiwiZm9yd2FyZFJlZiIsInJlZiIsImZsaWNrT25Td2lwZSIsImNoaWxkcmVuIiwib25Td2lwZSIsIm9uQ2FyZExlZnRTY3JlZW4iLCJjbGFzc05hbWUiLCJwcmV2ZW50U3dpcGUiLCJzd2lwZUFscmVhZHlSZWxlYXNlZCIsInVzZVJlZiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJwb3dlciIsImRpc3R1cmJhbmNlIiwiZGlzcGxheSIsImhhbmRsZVN3aXBlUmVsZWFzZWQiLCJ1c2VDYWxsYmFjayIsImhhbmRsZVN3aXBlU3RhcnQiLCJ1c2VFZmZlY3QiLCJtb3VzZUlzQ2xpY2tlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9