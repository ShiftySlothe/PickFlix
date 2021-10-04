(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

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

module.exports = _asyncToGenerator;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next-auth/lib/client.js":
/*!**********************************************!*\
  !*** ./node_modules/next-auth/lib/client.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fetchData = fetchData;
exports.apiBaseUrl = apiBaseUrl;
exports.now = now;
exports.BroadcastChannel = BroadcastChannel;

async function fetchData(path, __NEXTAUTH, logger, {
  ctx,
  req = ctx === null || ctx === void 0 ? void 0 : ctx.req
} = {}) {
  try {
    const options = req !== null && req !== void 0 && req.headers.cookie ? {
      headers: {
        cookie: req.headers.cookie
      }
    } : {};
    const res = await fetch(`${apiBaseUrl(__NEXTAUTH)}/${path}`, options);
    const data = await res.json();
    if (!res.ok) throw data;
    return Object.keys(data).length > 0 ? data : null;
  } catch (error) {
    logger.error("CLIENT_FETCH_ERROR", {
      error,
      path,
      ...(req ? {
        header: req.headers
      } : {})
    });
    return null;
  }
}

function apiBaseUrl(__NEXTAUTH) {
  if (typeof window === "undefined") {
    return `${__NEXTAUTH.baseUrlServer}${__NEXTAUTH.basePathServer}`;
  }

  return __NEXTAUTH.basePath;
}

function now() {
  return Math.floor(Date.now() / 1000);
}

function BroadcastChannel(name = "nextauth.message") {
  return {
    receive(onReceive) {
      const handler = event => {
        if (event.key !== name) return;
        const message = JSON.parse(event.newValue);
        if ((message === null || message === void 0 ? void 0 : message.event) !== "session" || !(message !== null && message !== void 0 && message.data)) return;
        onReceive(message);
      };

      window.addEventListener("storage", handler);
      return () => window.removeEventListener("storage", handler);
    },

    post(message) {
      if (typeof window === "undefined") return;
      localStorage.setItem(name, JSON.stringify({ ...message,
        timestamp: now()
      }));
    }

  };
}

/***/ }),

/***/ "./node_modules/next-auth/lib/logger.js":
/*!**********************************************!*\
  !*** ./node_modules/next-auth/lib/logger.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setLogger = setLogger;
exports.proxyLogger = proxyLogger;
exports.default = void 0;

var _errors = __webpack_require__(/*! ../server/errors */ "./node_modules/next-auth/server/errors.js");

function formatError(o) {
  if (o instanceof Error && !(o instanceof _errors.UnknownError)) {
    return {
      message: o.message,
      stack: o.stack,
      name: o.name
    };
  }

  if (o !== null && o !== void 0 && o.error) {
    var _o$message;

    o.error = formatError(o.error);
    o.message = (_o$message = o.message) !== null && _o$message !== void 0 ? _o$message : o.error.message;
  }

  return o;
}

const _logger = {
  error(code, metadata) {
    metadata = formatError(metadata);
    console.error(`[next-auth][error][${code}]`, `\nhttps://next-auth.js.org/errors#${code.toLowerCase()}`, metadata.message, metadata);
  },

  warn(code) {
    console.warn(`[next-auth][warn][${code}]`, `\nhttps://next-auth.js.org/warnings#${code.toLowerCase()}`);
  },

  debug(code, metadata) {
    var _process, _process$env;

    if (!((_process = process) !== null && _process !== void 0 && (_process$env = _process.env) !== null && _process$env !== void 0 && _process$env._NEXTAUTH_DEBUG)) return;
    console.log(`[next-auth][debug][${code}]`, metadata);
  }

};

function setLogger(newLogger = {}) {
  if (newLogger.error) _logger.error = newLogger.error;
  if (newLogger.warn) _logger.warn = newLogger.warn;
  if (newLogger.debug) _logger.debug = newLogger.debug;
}

var _default = _logger;
exports.default = _default;

function proxyLogger(logger = _logger, basePath) {
  try {
    if (typeof window === "undefined") {
      return logger;
    }

    const clientLogger = {};

    for (const level in logger) {
      clientLogger[level] = (code, metadata) => {
        _logger[level](code, metadata);

        if (level === "error") {
          metadata = formatError(metadata);
        }

        metadata.client = true;
        const url = `${basePath}/_log`;
        const body = new URLSearchParams({
          level,
          code,
          ...metadata
        });

        if (navigator.sendBeacon) {
          return navigator.sendBeacon(url, body);
        }

        return fetch(url, {
          method: "POST",
          body,
          keepalive: true
        });
      };
    }

    return clientLogger;
  } catch (_unused) {
    return _logger;
  }
}

/***/ }),

/***/ "./node_modules/next-auth/lib/parse-url.js":
/*!*************************************************!*\
  !*** ./node_modules/next-auth/lib/parse-url.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = parseUrl;

function parseUrl(url) {
  const defaultHost = "http://localhost:3000";
  const defaultPath = "/api/auth";

  if (!url) {
    url = `${defaultHost}${defaultPath}`;
  }

  const protocol = url.startsWith("http:") ? "http" : "https";
  url = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const [_host, ..._path] = url.split("/");
  const baseUrl = _host ? `${protocol}://${_host}` : defaultHost;
  const basePath = _path.length > 0 ? `/${_path.join("/")}` : defaultPath;
  return {
    baseUrl,
    basePath
  };
}

/***/ }),

/***/ "./node_modules/next-auth/react/index.js":
/*!***********************************************!*\
  !*** ./node_modules/next-auth/react/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  useSession: true,
  getSession: true,
  getCsrfToken: true,
  getProviders: true,
  signIn: true,
  signOut: true,
  SessionProvider: true
};
exports.useSession = useSession;
exports.getSession = getSession;
exports.getCsrfToken = getCsrfToken;
exports.getProviders = getProviders;
exports.signIn = signIn;
exports.signOut = signOut;
exports.SessionProvider = SessionProvider;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _logger2 = _interopRequireWildcard(__webpack_require__(/*! ../lib/logger */ "./node_modules/next-auth/lib/logger.js"));

var _parseUrl = _interopRequireDefault(__webpack_require__(/*! ../lib/parse-url */ "./node_modules/next-auth/lib/parse-url.js"));

var _client = __webpack_require__(/*! ../lib/client */ "./node_modules/next-auth/lib/client.js");

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");

var _types = __webpack_require__(/*! ./types */ "./node_modules/next-auth/react/types.js");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

var _process$env$NEXTAUTH, _ref, _process$env$NEXTAUTH2, _process$env$NEXTAUTH3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __NEXTAUTH = {
  baseUrl: (0, _parseUrl.default)((_process$env$NEXTAUTH = process.env.NEXTAUTH_URL) !== null && _process$env$NEXTAUTH !== void 0 ? _process$env$NEXTAUTH : process.env.VERCEL_URL).baseUrl,
  basePath: (0, _parseUrl.default)(process.env.NEXTAUTH_URL).basePath,
  baseUrlServer: (0, _parseUrl.default)((_ref = (_process$env$NEXTAUTH2 = process.env.NEXTAUTH_URL_INTERNAL) !== null && _process$env$NEXTAUTH2 !== void 0 ? _process$env$NEXTAUTH2 : process.env.NEXTAUTH_URL) !== null && _ref !== void 0 ? _ref : process.env.VERCEL_URL).baseUrl,
  basePathServer: (0, _parseUrl.default)((_process$env$NEXTAUTH3 = process.env.NEXTAUTH_URL_INTERNAL) !== null && _process$env$NEXTAUTH3 !== void 0 ? _process$env$NEXTAUTH3 : process.env.NEXTAUTH_URL).basePath,
  _lastSync: 0,
  _session: undefined,
  _getSession: function _getSession() {}
};
var broadcast = (0, _client.BroadcastChannel)();
var logger = (0, _logger2.proxyLogger)(_logger2.default, __NEXTAUTH.basePath);
var SessionContext = React.createContext(undefined);

function useSession(options) {
  var value = React.useContext(SessionContext);

  if (!value && "development" !== "production") {
    throw new Error("[next-auth]: `useSession` must be wrapped in a <SessionProvider />");
  }

  var _ref2 = options !== null && options !== void 0 ? options : {},
      required = _ref2.required,
      onUnauthenticated = _ref2.onUnauthenticated;

  var requiredAndNotLoading = required && value.status === "unauthenticated";
  React.useEffect(function () {
    if (requiredAndNotLoading) {
      var url = "/api/auth/signin?".concat(new URLSearchParams({
        error: "SessionRequired",
        callbackUrl: window.location.href
      }));
      if (onUnauthenticated) onUnauthenticated();else window.location.replace(url);
    }
  }, [requiredAndNotLoading, onUnauthenticated]);

  if (requiredAndNotLoading) {
    return {
      data: value.data,
      status: "loading"
    };
  }

  return value;
}

function getSession(_x) {
  return _getSession2.apply(this, arguments);
}

function _getSession2() {
  _getSession2 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2(params) {
    var _params$broadcast;

    var session;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _client.fetchData)("session", __NEXTAUTH, logger, params);

          case 2:
            session = _context2.sent;

            if ((_params$broadcast = params === null || params === void 0 ? void 0 : params.broadcast) !== null && _params$broadcast !== void 0 ? _params$broadcast : true) {
              broadcast.post({
                event: "session",
                data: {
                  trigger: "getSession"
                }
              });
            }

            return _context2.abrupt("return", session);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getSession2.apply(this, arguments);
}

function getCsrfToken(_x2) {
  return _getCsrfToken.apply(this, arguments);
}

function _getCsrfToken() {
  _getCsrfToken = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee3(params) {
    var response;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _client.fetchData)("csrf", __NEXTAUTH, logger, params);

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response === null || response === void 0 ? void 0 : response.csrfToken);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getCsrfToken.apply(this, arguments);
}

function getProviders() {
  return _getProviders.apply(this, arguments);
}

function _getProviders() {
  _getProviders = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee4() {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _client.fetchData)("providers", __NEXTAUTH, logger);

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getProviders.apply(this, arguments);
}

function signIn(_x3, _x4, _x5) {
  return _signIn.apply(this, arguments);
}

function _signIn() {
  _signIn = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee5(provider, options, authorizationParams) {
    var _ref5, _ref5$callbackUrl, callbackUrl, _ref5$redirect, redirect, baseUrl, providers, isCredentials, isEmail, isSupportingReturn, signInUrl, _signInUrl, res, data, _data$url, url, error;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref5 = options !== null && options !== void 0 ? options : {}, _ref5$callbackUrl = _ref5.callbackUrl, callbackUrl = _ref5$callbackUrl === void 0 ? window.location.href : _ref5$callbackUrl, _ref5$redirect = _ref5.redirect, redirect = _ref5$redirect === void 0 ? true : _ref5$redirect;
            baseUrl = (0, _client.apiBaseUrl)(__NEXTAUTH);
            _context5.next = 4;
            return getProviders();

          case 4:
            providers = _context5.sent;

            if (providers) {
              _context5.next = 8;
              break;
            }

            window.location.replace("".concat(baseUrl, "/error"));
            return _context5.abrupt("return");

          case 8:
            if (!(!provider || !(provider in providers))) {
              _context5.next = 11;
              break;
            }

            window.location.replace("".concat(baseUrl, "/signin?").concat(new URLSearchParams({
              callbackUrl: callbackUrl
            })));
            return _context5.abrupt("return");

          case 11:
            isCredentials = providers[provider].type === "credentials";
            isEmail = providers[provider].type === "email";
            isSupportingReturn = isCredentials || isEmail;
            signInUrl = "".concat(baseUrl, "/").concat(isCredentials ? "callback" : "signin", "/").concat(provider);
            _signInUrl = "".concat(signInUrl, "?").concat(new URLSearchParams(authorizationParams));
            _context5.t0 = fetch;
            _context5.t1 = _signInUrl;
            _context5.t2 = {
              "Content-Type": "application/x-www-form-urlencoded"
            };
            _context5.t3 = URLSearchParams;
            _context5.t4 = _objectSpread;
            _context5.t5 = _objectSpread({}, options);
            _context5.t6 = {};
            _context5.next = 25;
            return getCsrfToken();

          case 25:
            _context5.t7 = _context5.sent;
            _context5.t8 = callbackUrl;
            _context5.t9 = {
              csrfToken: _context5.t7,
              callbackUrl: _context5.t8,
              json: true
            };
            _context5.t10 = (0, _context5.t4)(_context5.t5, _context5.t6, _context5.t9);
            _context5.t11 = new _context5.t3(_context5.t10);
            _context5.t12 = {
              method: "post",
              headers: _context5.t2,
              body: _context5.t11
            };
            _context5.next = 33;
            return (0, _context5.t0)(_context5.t1, _context5.t12);

          case 33:
            res = _context5.sent;
            _context5.next = 36;
            return res.json();

          case 36:
            data = _context5.sent;

            if (!(redirect || !isSupportingReturn)) {
              _context5.next = 42;
              break;
            }

            url = (_data$url = data.url) !== null && _data$url !== void 0 ? _data$url : callbackUrl;
            window.location.replace(url);
            if (url.includes("#")) window.location.reload();
            return _context5.abrupt("return");

          case 42:
            error = new URL(data.url).searchParams.get("error");

            if (!res.ok) {
              _context5.next = 46;
              break;
            }

            _context5.next = 46;
            return __NEXTAUTH._getSession({
              event: "storage"
            });

          case 46:
            return _context5.abrupt("return", {
              error: error,
              status: res.status,
              ok: res.ok,
              url: error ? null : data.url
            });

          case 47:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _signIn.apply(this, arguments);
}

function signOut(_x6) {
  return _signOut.apply(this, arguments);
}

function _signOut() {
  _signOut = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee6(options) {
    var _options$redirect;

    var _ref6, _ref6$callbackUrl, callbackUrl, baseUrl, fetchOptions, res, data, _data$url2, url;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _ref6 = options !== null && options !== void 0 ? options : {}, _ref6$callbackUrl = _ref6.callbackUrl, callbackUrl = _ref6$callbackUrl === void 0 ? window.location.href : _ref6$callbackUrl;
            baseUrl = (0, _client.apiBaseUrl)(__NEXTAUTH);
            _context6.t0 = {
              "Content-Type": "application/x-www-form-urlencoded"
            };
            _context6.t1 = URLSearchParams;
            _context6.next = 6;
            return getCsrfToken();

          case 6:
            _context6.t2 = _context6.sent;
            _context6.t3 = callbackUrl;
            _context6.t4 = {
              csrfToken: _context6.t2,
              callbackUrl: _context6.t3,
              json: true
            };
            _context6.t5 = new _context6.t1(_context6.t4);
            fetchOptions = {
              method: "post",
              headers: _context6.t0,
              body: _context6.t5
            };
            _context6.next = 13;
            return fetch("".concat(baseUrl, "/signout"), fetchOptions);

          case 13:
            res = _context6.sent;
            _context6.next = 16;
            return res.json();

          case 16:
            data = _context6.sent;
            broadcast.post({
              event: "session",
              data: {
                trigger: "signout"
              }
            });

            if (!((_options$redirect = options === null || options === void 0 ? void 0 : options.redirect) !== null && _options$redirect !== void 0 ? _options$redirect : true)) {
              _context6.next = 23;
              break;
            }

            url = (_data$url2 = data.url) !== null && _data$url2 !== void 0 ? _data$url2 : callbackUrl;
            window.location.replace(url);
            if (url.includes("#")) window.location.reload();
            return _context6.abrupt("return");

          case 23:
            _context6.next = 25;
            return __NEXTAUTH._getSession({
              event: "storage"
            });

          case 25:
            return _context6.abrupt("return", data);

          case 26:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _signOut.apply(this, arguments);
}

function SessionProvider(props) {
  var children = props.children,
      basePath = props.basePath;
  if (basePath) __NEXTAUTH.basePath = basePath;
  var hasInitialSession = props.session !== undefined;
  __NEXTAUTH._lastSync = hasInitialSession ? (0, _client.now)() : 0;

  var _React$useState = React.useState(function () {
    if (hasInitialSession) __NEXTAUTH._session = props.session;
    return props.session;
  }),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      session = _React$useState2[0],
      setSession = _React$useState2[1];

  var _React$useState3 = React.useState(!hasInitialSession),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoading = _React$useState4[1];

  React.useEffect(function () {
    __NEXTAUTH._getSession = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee() {
      var _ref4,
          event,
          storageEvent,
          _args = arguments;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref4 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, event = _ref4.event;
              _context.prev = 1;
              storageEvent = event === "storage";

              if (!(storageEvent || __NEXTAUTH._session === undefined)) {
                _context.next = 10;
                break;
              }

              __NEXTAUTH._lastSync = (0, _client.now)();
              _context.next = 7;
              return getSession({
                broadcast: !storageEvent
              });

            case 7:
              __NEXTAUTH._session = _context.sent;
              setSession(__NEXTAUTH._session);
              return _context.abrupt("return");

            case 10:
              if (!(!event || __NEXTAUTH._session === null || (0, _client.now)() < __NEXTAUTH._lastSync)) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return");

            case 12:
              __NEXTAUTH._lastSync = (0, _client.now)();
              _context.next = 15;
              return getSession();

            case 15:
              __NEXTAUTH._session = _context.sent;
              setSession(__NEXTAUTH._session);
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](1);
              logger.error("CLIENT_SESSION_ERROR", _context.t0);

            case 22:
              _context.prev = 22;
              setLoading(false);
              return _context.finish(22);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 19, 22, 25]]);
    }));

    __NEXTAUTH._getSession();
  }, []);
  React.useEffect(function () {
    var unsubscribe = broadcast.receive(function () {
      return __NEXTAUTH._getSession({
        event: "storage"
      });
    });
    return function () {
      return unsubscribe();
    };
  }, []);
  React.useEffect(function () {
    var visibilityHandler = function visibilityHandler() {
      if (document.visibilityState === "visible") __NEXTAUTH._getSession({
        event: "visibilitychange"
      });
    };

    document.addEventListener("visibilitychange", visibilityHandler, false);
    return function () {
      return document.removeEventListener("visibilitychange", visibilityHandler, false);
    };
  }, []);
  React.useEffect(function () {
    var refetchInterval = props.refetchInterval;

    if (refetchInterval) {
      var refetchIntervalTimer = setInterval(function () {
        if (__NEXTAUTH._session) {
          __NEXTAUTH._getSession({
            event: "poll"
          });
        }
      }, refetchInterval * 1000);
      return function () {
        return clearInterval(refetchIntervalTimer);
      };
    }
  }, [props.refetchInterval]);
  var value = React.useMemo(function () {
    return {
      data: session,
      status: loading ? "loading" : session ? "authenticated" : "unauthenticated"
    };
  }, [session, loading]);
  return (0, _jsxRuntime.jsx)(SessionContext.Provider, {
    value: value,
    children: children
  });
}

/***/ }),

/***/ "./node_modules/next-auth/react/types.js":
/*!***********************************************!*\
  !*** ./node_modules/next-auth/react/types.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./node_modules/next-auth/server/errors.js":
/*!*************************************************!*\
  !*** ./node_modules/next-auth/server/errors.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.upperSnake = upperSnake;
exports.capitalize = capitalize;
exports.eventsErrorHandler = eventsErrorHandler;
exports.adapterErrorHandler = adapterErrorHandler;
exports.AccountNotLinkedError = exports.OAuthCallbackError = exports.UnknownError = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

class UnknownError extends Error {
  constructor(error) {
    var _error$message;

    super((_error$message = error === null || error === void 0 ? void 0 : error.message) !== null && _error$message !== void 0 ? _error$message : error);
    this.name = "UnknownError";

    if (error instanceof Error) {
      this.stack = error.stack;
    }
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack
    };
  }

}

exports.UnknownError = UnknownError;

class OAuthCallbackError extends UnknownError {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "name", "OAuthCallbackError");
  }

}

exports.OAuthCallbackError = OAuthCallbackError;

class AccountNotLinkedError extends UnknownError {
  constructor(...args) {
    super(...args);
    (0, _defineProperty2.default)(this, "name", "AccountNotLinkedError");
  }

}

exports.AccountNotLinkedError = AccountNotLinkedError;

function upperSnake(s) {
  return s.replace(/([A-Z])/g, "_$1").toUpperCase();
}

function capitalize(s) {
  return `${s[0].toUpperCase()}${s.slice(1)}`;
}

function eventsErrorHandler(methods, logger) {
  return Object.keys(methods).reduce((acc, name) => {
    acc[name] = async (...args) => {
      try {
        const method = methods[name];
        return await method(...args);
      } catch (e) {
        logger.error(`${upperSnake(name)}_EVENT_ERROR`, e);
      }
    };

    return acc;
  }, {});
}

function adapterErrorHandler(adapter, logger) {
  if (!adapter) return;
  return Object.keys(adapter).reduce((acc, name) => {
    acc[name] = async (...args) => {
      try {
        logger.debug(`adapter_${name}`, {
          args
        });
        const method = adapter[name];
        return await method(...args);
      } catch (error) {
        logger.error(`adapter_error_${name}`, error);
        const e = new UnknownError(error);
        e.name = `${capitalize(name)}Error`;
        throw e;
      }
    };

    return acc;
  }, {});
}

/***/ }),

/***/ "./src/components/NavBar/NavBar.tsx":
/*!******************************************!*\
  !*** ./src/components/NavBar/NavBar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/button */ "@chakra-ui/button");
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ "@chakra-ui/layout");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/media-query */ "@chakra-ui/media-query");
/* harmony import */ var _chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ "./node_modules/next-auth/react/index.js");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\dev\\Polish\\pick-flix\\pickflix\\src\\components\\NavBar\\NavBar.tsx";







function NavBar() {
  var _session$user;

  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
  const buttonSize = (0,_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__.useBreakpointValue)({
    base: 'xs',
    md: 'md',
    lg: 'lg'
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    justifyContent: "space-between",
    alignItems: "center",
    bg: "black",
    color: "#e50914",
    h: "80px",
    max: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      ml: {
        md: 4,
        lg: 10
      },
      alignItems: "center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        ml: 4,
        pt: 2,
        children: "PickFlix"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      mr: {
        base: 4,
        lg: 10
      },
      children: session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
          children: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_0__.Button, {
          variant: "nav-button",
          mr: 4,
          size: buttonSize,
          onClick: () => (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)(),
          children: "Log out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "nav-button",
        mr: 4,
        size: buttonSize,
        onClick: () => (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(),
        children: "Log in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/page-components/Home/HomePage.tsx":
/*!***********************************************!*\
  !*** ./src/page-components/Home/HomePage.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/button */ "@chakra-ui/button");
/* harmony import */ var _chakra_ui_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ "@chakra-ui/layout");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavBar/NavBar */ "./src/components/NavBar/NavBar.tsx");
/* harmony import */ var _chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/media-query */ "@chakra-ui/media-query");
/* harmony import */ var _chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _server_utils_trpc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/utils/trpc */ "./src/server/utils/trpc.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\dev\\Polish\\pick-flix\\pickflix\\src\\page-components\\Home\\HomePage.tsx";







const HomePage = () => {
  const buttonSize = (0,_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__.useBreakpointValue)({
    base: 'xs',
    md: 'md',
    lg: 'lg'
  });
  const addData = _server_utils_trpc__WEBPACK_IMPORTED_MODULE_4__.trpc.useMutation('movies.addDummyData');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
    w: "100vw",
    color: "white",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
      position: "fixed",
      w: "100vw",
      h: "80px",
      top: "0",
      overflow: "hidden",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      h: "calc(100vh - 80px)",
      mt: "80px",
      backgroundImage: "url('/homepage/background.jpg')",
      bgPosition: "center",
      bgRepeat: "no-repeat",
      bgSize: "cover",
      justifyContent: "center",
      alignItems: "center",
      pb: 20,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        flexDir: "column",
        alignItems: "center",
        maxW: {
          base: '90vw',
          md: '50vw'
        },
        textAlign: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Heading, {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
          m: 3,
          textAlign: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
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
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            justifyContent: "center",
            mt: 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_0__.Button, {
              backgroundColor: "#e50914",
              color: "white",
              size: buttonSize,
              variant: "red-button",
              width: "66%",
              onClick: async () => {
                await addData.mutateAsync();
              },
              children: "Get started"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_components_Home_HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-components/Home/HomePage */ "./src/page-components/Home/HomePage.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\dev\\Polish\\pick-flix\\pickflix\\src\\pages\\index.tsx";



const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_page_components_Home_HomePage__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/server/utils/trpc.ts":
/*!**********************************!*\
  !*** ./src/server/utils/trpc.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trpc": () => (/* binding */ trpc)
/* harmony export */ });
/* harmony import */ var _trpc_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/react */ "@trpc/react");
/* harmony import */ var _trpc_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trpc_react__WEBPACK_IMPORTED_MODULE_0__);
// utils/trpc.ts

const trpc = (0,_trpc_react__WEBPACK_IMPORTED_MODULE_0__.createReactQueryHooks)(); // => { useQuery: ..., useMutation: ...}

/***/ }),

/***/ "@chakra-ui/button":
/*!************************************!*\
  !*** external "@chakra-ui/button" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/button");

/***/ }),

/***/ "@chakra-ui/layout":
/*!************************************!*\
  !*** external "@chakra-ui/layout" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ "@chakra-ui/media-query":
/*!*****************************************!*\
  !*** external "@chakra-ui/media-query" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/media-query");

/***/ }),

/***/ "@trpc/react":
/*!******************************!*\
  !*** external "@trpc/react" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@trpc/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("regenerator-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBZ0Y7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUN4aUJhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7QUNKVzs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQiw2QkFBNkIsR0FBRywwQkFBMEIsR0FBRyxvQkFBb0I7O0FBRWpGLDhDQUE4QyxtQkFBTyxDQUFDLHNHQUF1Qzs7QUFFN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksbUJBQW1CLEVBQUUsV0FBVztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBOztBQUVBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isc0NBQXNDLEtBQUs7QUFDM0M7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsSUFBSTtBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7OztBQUVlLFNBQVNTLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsUUFBTTtBQUFFQyxJQUFBQSxJQUFJLEVBQUVDO0FBQVIsTUFBb0JMLDJEQUFVLEVBQXBDO0FBQ0EsUUFBTU0sVUFBVSxHQUFHUCwwRUFBa0IsQ0FBQztBQUNwQ1EsSUFBQUEsSUFBSSxFQUFFLElBRDhCO0FBRXBDQyxJQUFBQSxFQUFFLEVBQUUsSUFGZ0M7QUFHcENDLElBQUFBLEVBQUUsRUFBRTtBQUhnQyxHQUFELENBQXJDO0FBS0Esc0JBQ0UsOERBQUMsbURBQUQ7QUFDRSxrQkFBYyxFQUFDLGVBRGpCO0FBRUUsY0FBVSxFQUFDLFFBRmI7QUFHRSxNQUFFLEVBQUMsT0FITDtBQUlFLFNBQUssRUFBQyxTQUpSO0FBS0UsS0FBQyxFQUFDLE1BTEo7QUFNRSxPQUFHLE1BTkw7QUFBQSw0QkFRRSw4REFBQyxtREFBRDtBQUFNLFFBQUUsRUFBRTtBQUFFRCxRQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFBQSxFQUFFLEVBQUU7QUFBYixPQUFWO0FBQTZCLGdCQUFVLEVBQUMsUUFBeEM7QUFBQSw2QkFDRSw4REFBQyxzREFBRDtBQUFTLFVBQUUsRUFBRSxDQUFiO0FBQWdCLFVBQUUsRUFBRSxDQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQWFFLDhEQUFDLG1EQUFEO0FBQU0sUUFBRSxFQUFFO0FBQUVGLFFBQUFBLElBQUksRUFBRSxDQUFSO0FBQVdFLFFBQUFBLEVBQUUsRUFBRTtBQUFmLE9BQVY7QUFBQSxnQkFDR0osT0FBTyxnQkFDTjtBQUFBLGdDQUNFLDhEQUFDLG1EQUFEO0FBQUEsb0JBQU9BLE9BQVAsYUFBT0EsT0FBUCx3Q0FBT0EsT0FBTyxDQUFFSyxJQUFoQixrREFBTyxjQUFlQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMscURBQUQ7QUFDRSxpQkFBTyxFQUFDLFlBRFY7QUFFRSxZQUFFLEVBQUUsQ0FGTjtBQUdFLGNBQUksRUFBRUwsVUFIUjtBQUlFLGlCQUFPLEVBQUUsTUFBTUosd0RBQU8sRUFKeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQSxzQkFETSxnQkFhTiw4REFBQyxxREFBRDtBQUNFLGVBQU8sRUFBQyxZQURWO0FBRUUsVUFBRSxFQUFFLENBRk47QUFHRSxZQUFJLEVBQUVJLFVBSFI7QUFJRSxlQUFPLEVBQUUsTUFBTUwsdURBQU0sRUFKdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3Q0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1hLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU1SLFVBQVUsR0FBR1AsMEVBQWtCLENBQUM7QUFDcENRLElBQUFBLElBQUksRUFBRSxJQUQ4QjtBQUVwQ0MsSUFBQUEsRUFBRSxFQUFFLElBRmdDO0FBR3BDQyxJQUFBQSxFQUFFLEVBQUU7QUFIZ0MsR0FBRCxDQUFyQztBQU1BLFFBQU1NLE9BQU8sR0FBR0YsZ0VBQUEsQ0FBaUIscUJBQWpCLENBQWhCO0FBQ0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFBSyxLQUFDLEVBQUMsT0FBUDtBQUFlLFNBQUssRUFBQyxPQUFyQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUssY0FBUSxFQUFDLE9BQWQ7QUFBc0IsT0FBQyxFQUFDLE9BQXhCO0FBQWdDLE9BQUMsRUFBQyxNQUFsQztBQUF5QyxTQUFHLEVBQUMsR0FBN0M7QUFBaUQsY0FBUSxFQUFDLFFBQTFEO0FBQUEsNkJBQ0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSw4REFBQyxtREFBRDtBQUNFLE9BQUMsRUFBQyxvQkFESjtBQUVFLFFBQUUsRUFBQyxNQUZMO0FBR0UscUJBQWUsRUFBQyxpQ0FIbEI7QUFJRSxnQkFBVSxFQUFDLFFBSmI7QUFLRSxjQUFRLEVBQUMsV0FMWDtBQU1FLFlBQU0sRUFBQyxPQU5UO0FBT0Usb0JBQWMsRUFBQyxRQVBqQjtBQVFFLGdCQUFVLEVBQUMsUUFSYjtBQVNFLFFBQUUsRUFBRSxFQVROO0FBQUEsNkJBV0UsOERBQUMsbURBQUQ7QUFDRSxlQUFPLEVBQUMsUUFEVjtBQUVFLGtCQUFVLEVBQUMsUUFGYjtBQUdFLFlBQUksRUFBRTtBQUFFTixVQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsVUFBQUEsRUFBRSxFQUFFO0FBQXBCLFNBSFI7QUFJRSxpQkFBUyxFQUFDLFFBSlo7QUFBQSxnQ0FNRSw4REFBQyxzREFBRDtBQUNFLG1CQUFTLEVBQUMsUUFEWjtBQUVFLGtCQUFRLEVBQUU7QUFBRUQsWUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUMsWUFBQUEsRUFBRSxFQUFFLEtBQW5CO0FBQTBCQyxZQUFBQSxFQUFFLEVBQUU7QUFBOUIsV0FGWjtBQUdFLFdBQUMsRUFBRTtBQUFFRixZQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXQyxZQUFBQSxFQUFFLEVBQUU7QUFBZixXQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBYUUsOERBQUMsbURBQUQ7QUFDRSxrQkFBUSxFQUFFO0FBQUVELFlBQUFBLElBQUksRUFBRSxJQUFSO0FBQWNDLFlBQUFBLEVBQUUsRUFBRSxLQUFsQjtBQUF5QkMsWUFBQUEsRUFBRSxFQUFFO0FBQTdCLFdBRFo7QUFFRSxZQUFFLEVBQUU7QUFBRUYsWUFBQUEsSUFBSSxFQUFFLENBQVI7QUFBV0MsWUFBQUEsRUFBRSxFQUFFO0FBQWYsV0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiRixlQW1CRSw4REFBQyxrREFBRDtBQUFLLFdBQUMsRUFBRSxDQUFSO0FBQVcsbUJBQVMsRUFBQyxRQUFyQjtBQUFBLGtDQUNFLDhEQUFDLG1EQUFEO0FBQU0sb0JBQVEsRUFBRTtBQUFFRCxjQUFBQSxJQUFJLEVBQUUsSUFBUjtBQUFjQyxjQUFBQSxFQUFFLEVBQUUsSUFBbEI7QUFBd0JDLGNBQUFBLEVBQUUsRUFBRTtBQUE1QixhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFLDhEQUFDLG1EQUFEO0FBQU0sMEJBQWMsRUFBQyxRQUFyQjtBQUE4QixjQUFFLEVBQUUsQ0FBbEM7QUFBQSxtQ0FDRSw4REFBQyxxREFBRDtBQUNFLDZCQUFlLEVBQUMsU0FEbEI7QUFFRSxtQkFBSyxFQUFDLE9BRlI7QUFHRSxrQkFBSSxFQUFFSCxVQUhSO0FBSUUscUJBQU8sRUFBQyxZQUpWO0FBS0UsbUJBQUssRUFBQyxLQUxSO0FBTUUscUJBQU8sRUFBRSxZQUFZO0FBQ25CLHNCQUFNUyxPQUFPLENBQUNFLFdBQVIsRUFBTjtBQUNELGVBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTBERCxDQWxFRDs7QUFvRUEsaUVBQWVILFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7OztBQUVBLE1BQU1JLElBQWMsR0FBRyxNQUFNO0FBQzNCLHNCQUFPLDhEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSUEsaUVBQWVBLElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUdPLE1BQU1MLElBQUksR0FBR00sa0VBQXFCLEVBQWxDLEVBQ1A7Ozs7Ozs7Ozs7O0FDTEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9saWIvY2xpZW50LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL2xpYi9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvbGliL3BhcnNlLXVybC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9yZWFjdC90eXBlcy5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvZXJyb3JzLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLnRzeCIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vc3JjL3BhZ2UtY29tcG9uZW50cy9Ib21lL0hvbWVQYWdlLnRzeCIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vc3JjL3NlcnZlci91dGlscy90cnBjLnRzIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2J1dHRvblwiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2xheW91dFwiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL21lZGlhLXF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcIkB0cnBjL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZldGNoRGF0YSA9IGZldGNoRGF0YTtcbmV4cG9ydHMuYXBpQmFzZVVybCA9IGFwaUJhc2VVcmw7XG5leHBvcnRzLm5vdyA9IG5vdztcbmV4cG9ydHMuQnJvYWRjYXN0Q2hhbm5lbCA9IEJyb2FkY2FzdENoYW5uZWw7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShwYXRoLCBfX05FWFRBVVRILCBsb2dnZXIsIHtcbiAgY3R4LFxuICByZXEgPSBjdHggPT09IG51bGwgfHwgY3R4ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdHgucmVxXG59ID0ge30pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvcHRpb25zID0gcmVxICE9PSBudWxsICYmIHJlcSAhPT0gdm9pZCAwICYmIHJlcS5oZWFkZXJzLmNvb2tpZSA/IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgY29va2llOiByZXEuaGVhZGVycy5jb29raWVcbiAgICAgIH1cbiAgICB9IDoge307XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpQmFzZVVybChfX05FWFRBVVRIKX0vJHtwYXRofWAsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGlmICghcmVzLm9rKSB0aHJvdyBkYXRhO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwID8gZGF0YSA6IG51bGw7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yKFwiQ0xJRU5UX0ZFVENIX0VSUk9SXCIsIHtcbiAgICAgIGVycm9yLFxuICAgICAgcGF0aCxcbiAgICAgIC4uLihyZXEgPyB7XG4gICAgICAgIGhlYWRlcjogcmVxLmhlYWRlcnNcbiAgICAgIH0gOiB7fSlcbiAgICB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcGlCYXNlVXJsKF9fTkVYVEFVVEgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gYCR7X19ORVhUQVVUSC5iYXNlVXJsU2VydmVyfSR7X19ORVhUQVVUSC5iYXNlUGF0aFNlcnZlcn1gO1xuICB9XG5cbiAgcmV0dXJuIF9fTkVYVEFVVEguYmFzZVBhdGg7XG59XG5cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xufVxuXG5mdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKG5hbWUgPSBcIm5leHRhdXRoLm1lc3NhZ2VcIikge1xuICByZXR1cm4ge1xuICAgIHJlY2VpdmUob25SZWNlaXZlKSB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ICE9PSBuYW1lKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50Lm5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKChtZXNzYWdlID09PSBudWxsIHx8IG1lc3NhZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lc3NhZ2UuZXZlbnQpICE9PSBcInNlc3Npb25cIiB8fCAhKG1lc3NhZ2UgIT09IG51bGwgJiYgbWVzc2FnZSAhPT0gdm9pZCAwICYmIG1lc3NhZ2UuZGF0YSkpIHJldHVybjtcbiAgICAgICAgb25SZWNlaXZlKG1lc3NhZ2UpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGhhbmRsZXIpO1xuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgcG9zdChtZXNzYWdlKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoeyAuLi5tZXNzYWdlLFxuICAgICAgICB0aW1lc3RhbXA6IG5vdygpXG4gICAgICB9KSk7XG4gICAgfVxuXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNldExvZ2dlciA9IHNldExvZ2dlcjtcbmV4cG9ydHMucHJveHlMb2dnZXIgPSBwcm94eUxvZ2dlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9lcnJvcnMgPSByZXF1aXJlKFwiLi4vc2VydmVyL2Vycm9yc1wiKTtcblxuZnVuY3Rpb24gZm9ybWF0RXJyb3Iobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEVycm9yICYmICEobyBpbnN0YW5jZW9mIF9lcnJvcnMuVW5rbm93bkVycm9yKSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBvLm1lc3NhZ2UsXG4gICAgICBzdGFjazogby5zdGFjayxcbiAgICAgIG5hbWU6IG8ubmFtZVxuICAgIH07XG4gIH1cblxuICBpZiAobyAhPT0gbnVsbCAmJiBvICE9PSB2b2lkIDAgJiYgby5lcnJvcikge1xuICAgIHZhciBfbyRtZXNzYWdlO1xuXG4gICAgby5lcnJvciA9IGZvcm1hdEVycm9yKG8uZXJyb3IpO1xuICAgIG8ubWVzc2FnZSA9IChfbyRtZXNzYWdlID0gby5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfbyRtZXNzYWdlICE9PSB2b2lkIDAgPyBfbyRtZXNzYWdlIDogby5lcnJvci5tZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuIG87XG59XG5cbmNvbnN0IF9sb2dnZXIgPSB7XG4gIGVycm9yKGNvZGUsIG1ldGFkYXRhKSB7XG4gICAgbWV0YWRhdGEgPSBmb3JtYXRFcnJvcihtZXRhZGF0YSk7XG4gICAgY29uc29sZS5lcnJvcihgW25leHQtYXV0aF1bZXJyb3JdWyR7Y29kZX1dYCwgYFxcbmh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9lcnJvcnMjJHtjb2RlLnRvTG93ZXJDYXNlKCl9YCwgbWV0YWRhdGEubWVzc2FnZSwgbWV0YWRhdGEpO1xuICB9LFxuXG4gIHdhcm4oY29kZSkge1xuICAgIGNvbnNvbGUud2FybihgW25leHQtYXV0aF1bd2Fybl1bJHtjb2RlfV1gLCBgXFxuaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3dhcm5pbmdzIyR7Y29kZS50b0xvd2VyQ2FzZSgpfWApO1xuICB9LFxuXG4gIGRlYnVnKGNvZGUsIG1ldGFkYXRhKSB7XG4gICAgdmFyIF9wcm9jZXNzLCBfcHJvY2VzcyRlbnY7XG5cbiAgICBpZiAoISgoX3Byb2Nlc3MgPSBwcm9jZXNzKSAhPT0gbnVsbCAmJiBfcHJvY2VzcyAhPT0gdm9pZCAwICYmIChfcHJvY2VzcyRlbnYgPSBfcHJvY2Vzcy5lbnYpICE9PSBudWxsICYmIF9wcm9jZXNzJGVudiAhPT0gdm9pZCAwICYmIF9wcm9jZXNzJGVudi5fTkVYVEFVVEhfREVCVUcpKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coYFtuZXh0LWF1dGhdW2RlYnVnXVske2NvZGV9XWAsIG1ldGFkYXRhKTtcbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBzZXRMb2dnZXIobmV3TG9nZ2VyID0ge30pIHtcbiAgaWYgKG5ld0xvZ2dlci5lcnJvcikgX2xvZ2dlci5lcnJvciA9IG5ld0xvZ2dlci5lcnJvcjtcbiAgaWYgKG5ld0xvZ2dlci53YXJuKSBfbG9nZ2VyLndhcm4gPSBuZXdMb2dnZXIud2FybjtcbiAgaWYgKG5ld0xvZ2dlci5kZWJ1ZykgX2xvZ2dlci5kZWJ1ZyA9IG5ld0xvZ2dlci5kZWJ1Zztcbn1cblxudmFyIF9kZWZhdWx0ID0gX2xvZ2dlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG5mdW5jdGlvbiBwcm94eUxvZ2dlcihsb2dnZXIgPSBfbG9nZ2VyLCBiYXNlUGF0aCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaWVudExvZ2dlciA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBsZXZlbCBpbiBsb2dnZXIpIHtcbiAgICAgIGNsaWVudExvZ2dlcltsZXZlbF0gPSAoY29kZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgX2xvZ2dlcltsZXZlbF0oY29kZSwgbWV0YWRhdGEpO1xuXG4gICAgICAgIGlmIChsZXZlbCA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgbWV0YWRhdGEgPSBmb3JtYXRFcnJvcihtZXRhZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRhZGF0YS5jbGllbnQgPSB0cnVlO1xuICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlUGF0aH0vX2xvZ2A7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICBjb2RlLFxuICAgICAgICAgIC4uLm1ldGFkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VuZEJlYWNvbikge1xuICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBrZWVwYWxpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBjbGllbnRMb2dnZXI7XG4gIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICByZXR1cm4gX2xvZ2dlcjtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcGFyc2VVcmw7XG5cbmZ1bmN0aW9uIHBhcnNlVXJsKHVybCkge1xuICBjb25zdCBkZWZhdWx0SG9zdCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG4gIGNvbnN0IGRlZmF1bHRQYXRoID0gXCIvYXBpL2F1dGhcIjtcblxuICBpZiAoIXVybCkge1xuICAgIHVybCA9IGAke2RlZmF1bHRIb3N0fSR7ZGVmYXVsdFBhdGh9YDtcbiAgfVxuXG4gIGNvbnN0IHByb3RvY29sID0gdXJsLnN0YXJ0c1dpdGgoXCJodHRwOlwiKSA/IFwiaHR0cFwiIDogXCJodHRwc1wiO1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC8vLCBcIlwiKS5yZXBsYWNlKC9cXC8kLywgXCJcIik7XG4gIGNvbnN0IFtfaG9zdCwgLi4uX3BhdGhdID0gdXJsLnNwbGl0KFwiL1wiKTtcbiAgY29uc3QgYmFzZVVybCA9IF9ob3N0ID8gYCR7cHJvdG9jb2x9Oi8vJHtfaG9zdH1gIDogZGVmYXVsdEhvc3Q7XG4gIGNvbnN0IGJhc2VQYXRoID0gX3BhdGgubGVuZ3RoID4gMCA/IGAvJHtfcGF0aC5qb2luKFwiL1wiKX1gIDogZGVmYXVsdFBhdGg7XG4gIHJldHVybiB7XG4gICAgYmFzZVVybCxcbiAgICBiYXNlUGF0aFxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge1xuICB1c2VTZXNzaW9uOiB0cnVlLFxuICBnZXRTZXNzaW9uOiB0cnVlLFxuICBnZXRDc3JmVG9rZW46IHRydWUsXG4gIGdldFByb3ZpZGVyczogdHJ1ZSxcbiAgc2lnbkluOiB0cnVlLFxuICBzaWduT3V0OiB0cnVlLFxuICBTZXNzaW9uUHJvdmlkZXI6IHRydWVcbn07XG5leHBvcnRzLnVzZVNlc3Npb24gPSB1c2VTZXNzaW9uO1xuZXhwb3J0cy5nZXRTZXNzaW9uID0gZ2V0U2Vzc2lvbjtcbmV4cG9ydHMuZ2V0Q3NyZlRva2VuID0gZ2V0Q3NyZlRva2VuO1xuZXhwb3J0cy5nZXRQcm92aWRlcnMgPSBnZXRQcm92aWRlcnM7XG5leHBvcnRzLnNpZ25JbiA9IHNpZ25JbjtcbmV4cG9ydHMuc2lnbk91dCA9IHNpZ25PdXQ7XG5leHBvcnRzLlNlc3Npb25Qcm92aWRlciA9IFNlc3Npb25Qcm92aWRlcjtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2xvZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbGliL2xvZ2dlclwiKSk7XG5cbnZhciBfcGFyc2VVcmwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9saWIvcGFyc2UtdXJsXCIpKTtcblxudmFyIF9jbGllbnQgPSByZXF1aXJlKFwiLi4vbGliL2NsaWVudFwiKTtcblxudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbk9iamVjdC5rZXlzKF90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3R5cGVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3R5cGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3Byb2Nlc3MkZW52JE5FWFRBVVRILCBfcmVmLCBfcHJvY2VzcyRlbnYkTkVYVEFVVEgyLCBfcHJvY2VzcyRlbnYkTkVYVEFVVEgzO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgX19ORVhUQVVUSCA9IHtcbiAgYmFzZVVybDogKDAsIF9wYXJzZVVybC5kZWZhdWx0KSgoX3Byb2Nlc3MkZW52JE5FWFRBVVRIID0gcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMKSAhPT0gbnVsbCAmJiBfcHJvY2VzcyRlbnYkTkVYVEFVVEggIT09IHZvaWQgMCA/IF9wcm9jZXNzJGVudiRORVhUQVVUSCA6IHByb2Nlc3MuZW52LlZFUkNFTF9VUkwpLmJhc2VVcmwsXG4gIGJhc2VQYXRoOiAoMCwgX3BhcnNlVXJsLmRlZmF1bHQpKHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCkuYmFzZVBhdGgsXG4gIGJhc2VVcmxTZXJ2ZXI6ICgwLCBfcGFyc2VVcmwuZGVmYXVsdCkoKF9yZWYgPSAoX3Byb2Nlc3MkZW52JE5FWFRBVVRIMiA9IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTF9JTlRFUk5BTCkgIT09IG51bGwgJiYgX3Byb2Nlc3MkZW52JE5FWFRBVVRIMiAhPT0gdm9pZCAwID8gX3Byb2Nlc3MkZW52JE5FWFRBVVRIMiA6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IHByb2Nlc3MuZW52LlZFUkNFTF9VUkwpLmJhc2VVcmwsXG4gIGJhc2VQYXRoU2VydmVyOiAoMCwgX3BhcnNlVXJsLmRlZmF1bHQpKChfcHJvY2VzcyRlbnYkTkVYVEFVVEgzID0gcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMX0lOVEVSTkFMKSAhPT0gbnVsbCAmJiBfcHJvY2VzcyRlbnYkTkVYVEFVVEgzICE9PSB2b2lkIDAgPyBfcHJvY2VzcyRlbnYkTkVYVEFVVEgzIDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMKS5iYXNlUGF0aCxcbiAgX2xhc3RTeW5jOiAwLFxuICBfc2Vzc2lvbjogdW5kZWZpbmVkLFxuICBfZ2V0U2Vzc2lvbjogZnVuY3Rpb24gX2dldFNlc3Npb24oKSB7fVxufTtcbnZhciBicm9hZGNhc3QgPSAoMCwgX2NsaWVudC5Ccm9hZGNhc3RDaGFubmVsKSgpO1xudmFyIGxvZ2dlciA9ICgwLCBfbG9nZ2VyMi5wcm94eUxvZ2dlcikoX2xvZ2dlcjIuZGVmYXVsdCwgX19ORVhUQVVUSC5iYXNlUGF0aCk7XG52YXIgU2Vzc2lvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbmZ1bmN0aW9uIHVzZVNlc3Npb24ob3B0aW9ucykge1xuICB2YXIgdmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcblxuICBpZiAoIXZhbHVlICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIltuZXh0LWF1dGhdOiBgdXNlU2Vzc2lvbmAgbXVzdCBiZSB3cmFwcGVkIGluIGEgPFNlc3Npb25Qcm92aWRlciAvPlwiKTtcbiAgfVxuXG4gIHZhciBfcmVmMiA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9LFxuICAgICAgcmVxdWlyZWQgPSBfcmVmMi5yZXF1aXJlZCxcbiAgICAgIG9uVW5hdXRoZW50aWNhdGVkID0gX3JlZjIub25VbmF1dGhlbnRpY2F0ZWQ7XG5cbiAgdmFyIHJlcXVpcmVkQW5kTm90TG9hZGluZyA9IHJlcXVpcmVkICYmIHZhbHVlLnN0YXR1cyA9PT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIjtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocmVxdWlyZWRBbmROb3RMb2FkaW5nKSB7XG4gICAgICB2YXIgdXJsID0gXCIvYXBpL2F1dGgvc2lnbmluP1wiLmNvbmNhdChuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgZXJyb3I6IFwiU2Vzc2lvblJlcXVpcmVkXCIsXG4gICAgICAgIGNhbGxiYWNrVXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgICAgfSkpO1xuICAgICAgaWYgKG9uVW5hdXRoZW50aWNhdGVkKSBvblVuYXV0aGVudGljYXRlZCgpO2Vsc2Ugd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsKTtcbiAgICB9XG4gIH0sIFtyZXF1aXJlZEFuZE5vdExvYWRpbmcsIG9uVW5hdXRoZW50aWNhdGVkXSk7XG5cbiAgaWYgKHJlcXVpcmVkQW5kTm90TG9hZGluZykge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB2YWx1ZS5kYXRhLFxuICAgICAgc3RhdHVzOiBcImxvYWRpbmdcIlxuICAgIH07XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldFNlc3Npb24oX3gpIHtcbiAgcmV0dXJuIF9nZXRTZXNzaW9uMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZ2V0U2Vzc2lvbjIoKSB7XG4gIF9nZXRTZXNzaW9uMiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjIuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlMihwYXJhbXMpIHtcbiAgICB2YXIgX3BhcmFtcyRicm9hZGNhc3Q7XG5cbiAgICB2YXIgc2Vzc2lvbjtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jbGllbnQuZmV0Y2hEYXRhKShcInNlc3Npb25cIiwgX19ORVhUQVVUSCwgbG9nZ2VyLCBwYXJhbXMpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgc2Vzc2lvbiA9IF9jb250ZXh0Mi5zZW50O1xuXG4gICAgICAgICAgICBpZiAoKF9wYXJhbXMkYnJvYWRjYXN0ID0gcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmJyb2FkY2FzdCkgIT09IG51bGwgJiYgX3BhcmFtcyRicm9hZGNhc3QgIT09IHZvaWQgMCA/IF9wYXJhbXMkYnJvYWRjYXN0IDogdHJ1ZSkge1xuICAgICAgICAgICAgICBicm9hZGNhc3QucG9zdCh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IFwic2Vzc2lvblwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiZ2V0U2Vzc2lvblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgc2Vzc2lvbik7XG5cbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMik7XG4gIH0pKTtcbiAgcmV0dXJuIF9nZXRTZXNzaW9uMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBnZXRDc3JmVG9rZW4oX3gyKSB7XG4gIHJldHVybiBfZ2V0Q3NyZlRva2VuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRDc3JmVG9rZW4oKSB7XG4gIF9nZXRDc3JmVG9rZW4gPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMocGFyYW1zKSB7XG4gICAgdmFyIHJlc3BvbnNlO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzJChfY29udGV4dDMpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQzLnByZXYgPSBfY29udGV4dDMubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NsaWVudC5mZXRjaERhdGEpKFwiY3NyZlwiLCBfX05FWFRBVVRILCBsb2dnZXIsIHBhcmFtcyk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0My5zZW50O1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVzcG9uc2UgPT09IG51bGwgfHwgcmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc3BvbnNlLmNzcmZUb2tlbik7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMyk7XG4gIH0pKTtcbiAgcmV0dXJuIF9nZXRDc3JmVG9rZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvdmlkZXJzKCkge1xuICByZXR1cm4gX2dldFByb3ZpZGVycy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdmlkZXJzKCkge1xuICBfZ2V0UHJvdmlkZXJzID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0KCkge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0LnByZXYgPSBfY29udGV4dDQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NsaWVudC5mZXRjaERhdGEpKFwicHJvdmlkZXJzXCIsIF9fTkVYVEFVVEgsIGxvZ2dlcik7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDQuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNCk7XG4gIH0pKTtcbiAgcmV0dXJuIF9nZXRQcm92aWRlcnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2lnbkluKF94MywgX3g0LCBfeDUpIHtcbiAgcmV0dXJuIF9zaWduSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX3NpZ25JbigpIHtcbiAgX3NpZ25JbiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjIuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlNShwcm92aWRlciwgb3B0aW9ucywgYXV0aG9yaXphdGlvblBhcmFtcykge1xuICAgIHZhciBfcmVmNSwgX3JlZjUkY2FsbGJhY2tVcmwsIGNhbGxiYWNrVXJsLCBfcmVmNSRyZWRpcmVjdCwgcmVkaXJlY3QsIGJhc2VVcmwsIHByb3ZpZGVycywgaXNDcmVkZW50aWFscywgaXNFbWFpbCwgaXNTdXBwb3J0aW5nUmV0dXJuLCBzaWduSW5VcmwsIF9zaWduSW5VcmwsIHJlcywgZGF0YSwgX2RhdGEkdXJsLCB1cmwsIGVycm9yO1xuXG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTUkKF9jb250ZXh0NSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDUucHJldiA9IF9jb250ZXh0NS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX3JlZjUgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSwgX3JlZjUkY2FsbGJhY2tVcmwgPSBfcmVmNS5jYWxsYmFja1VybCwgY2FsbGJhY2tVcmwgPSBfcmVmNSRjYWxsYmFja1VybCA9PT0gdm9pZCAwID8gd2luZG93LmxvY2F0aW9uLmhyZWYgOiBfcmVmNSRjYWxsYmFja1VybCwgX3JlZjUkcmVkaXJlY3QgPSBfcmVmNS5yZWRpcmVjdCwgcmVkaXJlY3QgPSBfcmVmNSRyZWRpcmVjdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWY1JHJlZGlyZWN0O1xuICAgICAgICAgICAgYmFzZVVybCA9ICgwLCBfY2xpZW50LmFwaUJhc2VVcmwpKF9fTkVYVEFVVEgpO1xuICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA0O1xuICAgICAgICAgICAgcmV0dXJuIGdldFByb3ZpZGVycygpO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcHJvdmlkZXJzID0gX2NvbnRleHQ1LnNlbnQ7XG5cbiAgICAgICAgICAgIGlmIChwcm92aWRlcnMpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA4O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJcIi5jb25jYXQoYmFzZVVybCwgXCIvZXJyb3JcIikpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICBpZiAoISghcHJvdmlkZXIgfHwgIShwcm92aWRlciBpbiBwcm92aWRlcnMpKSkge1xuICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDExO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJcIi5jb25jYXQoYmFzZVVybCwgXCIvc2lnbmluP1wiKS5jb25jYXQobmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgIGNhbGxiYWNrVXJsOiBjYWxsYmFja1VybFxuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIGlzQ3JlZGVudGlhbHMgPSBwcm92aWRlcnNbcHJvdmlkZXJdLnR5cGUgPT09IFwiY3JlZGVudGlhbHNcIjtcbiAgICAgICAgICAgIGlzRW1haWwgPSBwcm92aWRlcnNbcHJvdmlkZXJdLnR5cGUgPT09IFwiZW1haWxcIjtcbiAgICAgICAgICAgIGlzU3VwcG9ydGluZ1JldHVybiA9IGlzQ3JlZGVudGlhbHMgfHwgaXNFbWFpbDtcbiAgICAgICAgICAgIHNpZ25JblVybCA9IFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiL1wiKS5jb25jYXQoaXNDcmVkZW50aWFscyA/IFwiY2FsbGJhY2tcIiA6IFwic2lnbmluXCIsIFwiL1wiKS5jb25jYXQocHJvdmlkZXIpO1xuICAgICAgICAgICAgX3NpZ25JblVybCA9IFwiXCIuY29uY2F0KHNpZ25JblVybCwgXCI/XCIpLmNvbmNhdChuZXcgVVJMU2VhcmNoUGFyYW1zKGF1dGhvcml6YXRpb25QYXJhbXMpKTtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MCA9IGZldGNoO1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQxID0gX3NpZ25JblVybDtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MiA9IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MyA9IFVSTFNlYXJjaFBhcmFtcztcbiAgICAgICAgICAgIF9jb250ZXh0NS50NCA9IF9vYmplY3RTcHJlYWQ7XG4gICAgICAgICAgICBfY29udGV4dDUudDUgPSBfb2JqZWN0U3ByZWFkKHt9LCBvcHRpb25zKTtcbiAgICAgICAgICAgIF9jb250ZXh0NS50NiA9IHt9O1xuICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAyNTtcbiAgICAgICAgICAgIHJldHVybiBnZXRDc3JmVG9rZW4oKTtcblxuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICBfY29udGV4dDUudDcgPSBfY29udGV4dDUuc2VudDtcbiAgICAgICAgICAgIF9jb250ZXh0NS50OCA9IGNhbGxiYWNrVXJsO1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQ5ID0ge1xuICAgICAgICAgICAgICBjc3JmVG9rZW46IF9jb250ZXh0NS50NyxcbiAgICAgICAgICAgICAgY2FsbGJhY2tVcmw6IF9jb250ZXh0NS50OCxcbiAgICAgICAgICAgICAganNvbjogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MTAgPSAoMCwgX2NvbnRleHQ1LnQ0KShfY29udGV4dDUudDUsIF9jb250ZXh0NS50NiwgX2NvbnRleHQ1LnQ5KTtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MTEgPSBuZXcgX2NvbnRleHQ1LnQzKF9jb250ZXh0NS50MTApO1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQxMiA9IHtcbiAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgaGVhZGVyczogX2NvbnRleHQ1LnQyLFxuICAgICAgICAgICAgICBib2R5OiBfY29udGV4dDUudDExXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAzMztcbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NvbnRleHQ1LnQwKShfY29udGV4dDUudDEsIF9jb250ZXh0NS50MTIpO1xuXG4gICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgIHJlcyA9IF9jb250ZXh0NS5zZW50O1xuICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAzNjtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuXG4gICAgICAgICAgY2FzZSAzNjpcbiAgICAgICAgICAgIGRhdGEgPSBfY29udGV4dDUuc2VudDtcblxuICAgICAgICAgICAgaWYgKCEocmVkaXJlY3QgfHwgIWlzU3VwcG9ydGluZ1JldHVybikpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA0MjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVybCA9IChfZGF0YSR1cmwgPSBkYXRhLnVybCkgIT09IG51bGwgJiYgX2RhdGEkdXJsICE9PSB2b2lkIDAgPyBfZGF0YSR1cmwgOiBjYWxsYmFja1VybDtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybCk7XG4gICAgICAgICAgICBpZiAodXJsLmluY2x1ZGVzKFwiI1wiKSkgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgZXJyb3IgPSBuZXcgVVJMKGRhdGEudXJsKS5zZWFyY2hQYXJhbXMuZ2V0KFwiZXJyb3JcIik7XG5cbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gNDY7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDQ2O1xuICAgICAgICAgICAgcmV0dXJuIF9fTkVYVEFVVEguX2dldFNlc3Npb24oe1xuICAgICAgICAgICAgICBldmVudDogXCJzdG9yYWdlXCJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXG4gICAgICAgICAgICAgIG9rOiByZXMub2ssXG4gICAgICAgICAgICAgIHVybDogZXJyb3IgPyBudWxsIDogZGF0YS51cmxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU1KTtcbiAgfSkpO1xuICByZXR1cm4gX3NpZ25Jbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBzaWduT3V0KF94Nikge1xuICByZXR1cm4gX3NpZ25PdXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX3NpZ25PdXQoKSB7XG4gIF9zaWduT3V0ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2KG9wdGlvbnMpIHtcbiAgICB2YXIgX29wdGlvbnMkcmVkaXJlY3Q7XG5cbiAgICB2YXIgX3JlZjYsIF9yZWY2JGNhbGxiYWNrVXJsLCBjYWxsYmFja1VybCwgYmFzZVVybCwgZmV0Y2hPcHRpb25zLCByZXMsIGRhdGEsIF9kYXRhJHVybDIsIHVybDtcblxuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWU2JChfY29udGV4dDYpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ2LnByZXYgPSBfY29udGV4dDYubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9yZWY2ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30sIF9yZWY2JGNhbGxiYWNrVXJsID0gX3JlZjYuY2FsbGJhY2tVcmwsIGNhbGxiYWNrVXJsID0gX3JlZjYkY2FsbGJhY2tVcmwgPT09IHZvaWQgMCA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmIDogX3JlZjYkY2FsbGJhY2tVcmw7XG4gICAgICAgICAgICBiYXNlVXJsID0gKDAsIF9jbGllbnQuYXBpQmFzZVVybCkoX19ORVhUQVVUSCk7XG4gICAgICAgICAgICBfY29udGV4dDYudDAgPSB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDYudDEgPSBVUkxTZWFyY2hQYXJhbXM7XG4gICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDY7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q3NyZlRva2VuKCk7XG5cbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBfY29udGV4dDYudDIgPSBfY29udGV4dDYuc2VudDtcbiAgICAgICAgICAgIF9jb250ZXh0Ni50MyA9IGNhbGxiYWNrVXJsO1xuICAgICAgICAgICAgX2NvbnRleHQ2LnQ0ID0ge1xuICAgICAgICAgICAgICBjc3JmVG9rZW46IF9jb250ZXh0Ni50MixcbiAgICAgICAgICAgICAgY2FsbGJhY2tVcmw6IF9jb250ZXh0Ni50MyxcbiAgICAgICAgICAgICAganNvbjogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9jb250ZXh0Ni50NSA9IG5ldyBfY29udGV4dDYudDEoX2NvbnRleHQ2LnQ0KTtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgaGVhZGVyczogX2NvbnRleHQ2LnQwLFxuICAgICAgICAgICAgICBib2R5OiBfY29udGV4dDYudDVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDEzO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiL3NpZ25vdXRcIiksIGZldGNoT3B0aW9ucyk7XG5cbiAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgcmVzID0gX2NvbnRleHQ2LnNlbnQ7XG4gICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDE2O1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG5cbiAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgZGF0YSA9IF9jb250ZXh0Ni5zZW50O1xuICAgICAgICAgICAgYnJvYWRjYXN0LnBvc3Qoe1xuICAgICAgICAgICAgICBldmVudDogXCJzZXNzaW9uXCIsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcInNpZ25vdXRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCEoKF9vcHRpb25zJHJlZGlyZWN0ID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJlZGlyZWN0KSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRyZWRpcmVjdCAhPT0gdm9pZCAwID8gX29wdGlvbnMkcmVkaXJlY3QgOiB0cnVlKSkge1xuICAgICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDIzO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXJsID0gKF9kYXRhJHVybDIgPSBkYXRhLnVybCkgIT09IG51bGwgJiYgX2RhdGEkdXJsMiAhPT0gdm9pZCAwID8gX2RhdGEkdXJsMiA6IGNhbGxiYWNrVXJsO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsKTtcbiAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoXCIjXCIpKSB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDI1O1xuICAgICAgICAgICAgcmV0dXJuIF9fTkVYVEFVVEguX2dldFNlc3Npb24oe1xuICAgICAgICAgICAgICBldmVudDogXCJzdG9yYWdlXCJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIsIGRhdGEpO1xuXG4gICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU2KTtcbiAgfSkpO1xuICByZXR1cm4gX3NpZ25PdXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gU2Vzc2lvblByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgYmFzZVBhdGggPSBwcm9wcy5iYXNlUGF0aDtcbiAgaWYgKGJhc2VQYXRoKSBfX05FWFRBVVRILmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gIHZhciBoYXNJbml0aWFsU2Vzc2lvbiA9IHByb3BzLnNlc3Npb24gIT09IHVuZGVmaW5lZDtcbiAgX19ORVhUQVVUSC5fbGFzdFN5bmMgPSBoYXNJbml0aWFsU2Vzc2lvbiA/ICgwLCBfY2xpZW50Lm5vdykoKSA6IDA7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaGFzSW5pdGlhbFNlc3Npb24pIF9fTkVYVEFVVEguX3Nlc3Npb24gPSBwcm9wcy5zZXNzaW9uO1xuICAgIHJldHVybiBwcm9wcy5zZXNzaW9uO1xuICB9KSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyLmRlZmF1bHQpKF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBzZXNzaW9uID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldFNlc3Npb24gPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUzID0gUmVhY3QudXNlU3RhdGUoIWhhc0luaXRpYWxTZXNzaW9uKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTQgPSAoMCwgX3NsaWNlZFRvQXJyYXkyLmRlZmF1bHQpKF9SZWFjdCR1c2VTdGF0ZTMsIDIpLFxuICAgICAgbG9hZGluZyA9IF9SZWFjdCR1c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRMb2FkaW5nID0gX1JlYWN0JHVzZVN0YXRlNFsxXTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIF9fTkVYVEFVVEguX2dldFNlc3Npb24gPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgIHZhciBfcmVmNCxcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBzdG9yYWdlRXZlbnQsXG4gICAgICAgICAgX2FyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBfcmVmNCA9IF9hcmdzLmxlbmd0aCA+IDAgJiYgX2FyZ3NbMF0gIT09IHVuZGVmaW5lZCA/IF9hcmdzWzBdIDoge30sIGV2ZW50ID0gX3JlZjQuZXZlbnQ7XG4gICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxO1xuICAgICAgICAgICAgICBzdG9yYWdlRXZlbnQgPSBldmVudCA9PT0gXCJzdG9yYWdlXCI7XG5cbiAgICAgICAgICAgICAgaWYgKCEoc3RvcmFnZUV2ZW50IHx8IF9fTkVYVEFVVEguX3Nlc3Npb24gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfX05FWFRBVVRILl9sYXN0U3luYyA9ICgwLCBfY2xpZW50Lm5vdykoKTtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgIHJldHVybiBnZXRTZXNzaW9uKHtcbiAgICAgICAgICAgICAgICBicm9hZGNhc3Q6ICFzdG9yYWdlRXZlbnRcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgX19ORVhUQVVUSC5fc2Vzc2lvbiA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgIHNldFNlc3Npb24oX19ORVhUQVVUSC5fc2Vzc2lvbik7XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGlmICghKCFldmVudCB8fCBfX05FWFRBVVRILl9zZXNzaW9uID09PSBudWxsIHx8ICgwLCBfY2xpZW50Lm5vdykoKSA8IF9fTkVYVEFVVEguX2xhc3RTeW5jKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIF9fTkVYVEFVVEguX2xhc3RTeW5jID0gKDAsIF9jbGllbnQubm93KSgpO1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTU7XG4gICAgICAgICAgICAgIHJldHVybiBnZXRTZXNzaW9uKCk7XG5cbiAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgIF9fTkVYVEFVVEguX3Nlc3Npb24gPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICBzZXRTZXNzaW9uKF9fTkVYVEFVVEguX3Nlc3Npb24pO1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTk7XG4gICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbXCJjYXRjaFwiXSgxKTtcbiAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ0xJRU5UX1NFU1NJT05fRVJST1JcIiwgX2NvbnRleHQudDApO1xuXG4gICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMjI7XG4gICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuZmluaXNoKDIyKTtcblxuICAgICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF9jYWxsZWUsIG51bGwsIFtbMSwgMTksIDIyLCAyNV1dKTtcbiAgICB9KSk7XG5cbiAgICBfX05FWFRBVVRILl9nZXRTZXNzaW9uKCk7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBicm9hZGNhc3QucmVjZWl2ZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbih7XG4gICAgICAgIGV2ZW50OiBcInN0b3JhZ2VcIlxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmlzaWJpbGl0eUhhbmRsZXIgPSBmdW5jdGlvbiB2aXNpYmlsaXR5SGFuZGxlcigpIHtcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKSBfX05FWFRBVVRILl9nZXRTZXNzaW9uKHtcbiAgICAgICAgZXZlbnQ6IFwidmlzaWJpbGl0eWNoYW5nZVwiXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgdmlzaWJpbGl0eUhhbmRsZXIsIGZhbHNlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIHZpc2liaWxpdHlIYW5kbGVyLCBmYWxzZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciByZWZldGNoSW50ZXJ2YWwgPSBwcm9wcy5yZWZldGNoSW50ZXJ2YWw7XG5cbiAgICBpZiAocmVmZXRjaEludGVydmFsKSB7XG4gICAgICB2YXIgcmVmZXRjaEludGVydmFsVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfX05FWFRBVVRILl9zZXNzaW9uKSB7XG4gICAgICAgICAgX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbih7XG4gICAgICAgICAgICBldmVudDogXCJwb2xsXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgcmVmZXRjaEludGVydmFsICogMTAwMCk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChyZWZldGNoSW50ZXJ2YWxUaW1lcik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW3Byb3BzLnJlZmV0Y2hJbnRlcnZhbF0pO1xuICB2YXIgdmFsdWUgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogc2Vzc2lvbixcbiAgICAgIHN0YXR1czogbG9hZGluZyA/IFwibG9hZGluZ1wiIDogc2Vzc2lvbiA/IFwiYXV0aGVudGljYXRlZFwiIDogXCJ1bmF1dGhlbnRpY2F0ZWRcIlxuICAgIH07XG4gIH0sIFtzZXNzaW9uLCBsb2FkaW5nXSk7XG4gIHJldHVybiAoMCwgX2pzeFJ1bnRpbWUuanN4KShTZXNzaW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51cHBlclNuYWtlID0gdXBwZXJTbmFrZTtcbmV4cG9ydHMuY2FwaXRhbGl6ZSA9IGNhcGl0YWxpemU7XG5leHBvcnRzLmV2ZW50c0Vycm9ySGFuZGxlciA9IGV2ZW50c0Vycm9ySGFuZGxlcjtcbmV4cG9ydHMuYWRhcHRlckVycm9ySGFuZGxlciA9IGFkYXB0ZXJFcnJvckhhbmRsZXI7XG5leHBvcnRzLkFjY291bnROb3RMaW5rZWRFcnJvciA9IGV4cG9ydHMuT0F1dGhDYWxsYmFja0Vycm9yID0gZXhwb3J0cy5Vbmtub3duRXJyb3IgPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbmNsYXNzIFVua25vd25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoZXJyb3IpIHtcbiAgICB2YXIgX2Vycm9yJG1lc3NhZ2U7XG5cbiAgICBzdXBlcigoX2Vycm9yJG1lc3NhZ2UgPSBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSkgIT09IG51bGwgJiYgX2Vycm9yJG1lc3NhZ2UgIT09IHZvaWQgMCA/IF9lcnJvciRtZXNzYWdlIDogZXJyb3IpO1xuICAgIHRoaXMubmFtZSA9IFwiVW5rbm93bkVycm9yXCI7XG5cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2tcbiAgICB9O1xuICB9XG5cbn1cblxuZXhwb3J0cy5Vbmtub3duRXJyb3IgPSBVbmtub3duRXJyb3I7XG5cbmNsYXNzIE9BdXRoQ2FsbGJhY2tFcnJvciBleHRlbmRzIFVua25vd25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0aGlzLCBcIm5hbWVcIiwgXCJPQXV0aENhbGxiYWNrRXJyb3JcIik7XG4gIH1cblxufVxuXG5leHBvcnRzLk9BdXRoQ2FsbGJhY2tFcnJvciA9IE9BdXRoQ2FsbGJhY2tFcnJvcjtcblxuY2xhc3MgQWNjb3VudE5vdExpbmtlZEVycm9yIGV4dGVuZHMgVW5rbm93bkVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRoaXMsIFwibmFtZVwiLCBcIkFjY291bnROb3RMaW5rZWRFcnJvclwiKTtcbiAgfVxuXG59XG5cbmV4cG9ydHMuQWNjb3VudE5vdExpbmtlZEVycm9yID0gQWNjb3VudE5vdExpbmtlZEVycm9yO1xuXG5mdW5jdGlvbiB1cHBlclNuYWtlKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvKFtBLVpdKS9nLCBcIl8kMVwiKS50b1VwcGVyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHMpIHtcbiAgcmV0dXJuIGAke3NbMF0udG9VcHBlckNhc2UoKX0ke3Muc2xpY2UoMSl9YDtcbn1cblxuZnVuY3Rpb24gZXZlbnRzRXJyb3JIYW5kbGVyKG1ldGhvZHMsIGxvZ2dlcikge1xuICByZXR1cm4gT2JqZWN0LmtleXMobWV0aG9kcykucmVkdWNlKChhY2MsIG5hbWUpID0+IHtcbiAgICBhY2NbbmFtZV0gPSBhc3luYyAoLi4uYXJncykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gbWV0aG9kc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IG1ldGhvZCguLi5hcmdzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGAke3VwcGVyU25ha2UobmFtZSl9X0VWRU5UX0VSUk9SYCwgZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gYWRhcHRlckVycm9ySGFuZGxlcihhZGFwdGVyLCBsb2dnZXIpIHtcbiAgaWYgKCFhZGFwdGVyKSByZXR1cm47XG4gIHJldHVybiBPYmplY3Qua2V5cyhhZGFwdGVyKS5yZWR1Y2UoKGFjYywgbmFtZSkgPT4ge1xuICAgIGFjY1tuYW1lXSA9IGFzeW5jICguLi5hcmdzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsb2dnZXIuZGVidWcoYGFkYXB0ZXJfJHtuYW1lfWAsIHtcbiAgICAgICAgICBhcmdzXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtZXRob2QgPSBhZGFwdGVyW25hbWVdO1xuICAgICAgICByZXR1cm4gYXdhaXQgbWV0aG9kKC4uLmFyZ3MpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGBhZGFwdGVyX2Vycm9yXyR7bmFtZX1gLCBlcnJvcik7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgVW5rbm93bkVycm9yKGVycm9yKTtcbiAgICAgICAgZS5uYW1lID0gYCR7Y2FwaXRhbGl6ZShuYW1lKX1FcnJvcmA7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn0iLCJpbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkdyb3VwLCBJY29uQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9idXR0b24nO1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi8uLi9wdWJsaWMvbG9nb3MvUHJvU3BlY3Rvci1sb2dvc190cmFuc3BhcmVudC5wbmcnO1xyXG5pbXBvcnQgeyBNZW51LCBNZW51QnV0dG9uLCBNZW51SXRlbSwgTWVudUxpc3QgfSBmcm9tICdAY2hha3JhLXVpL21lbnUnO1xyXG5pbXBvcnQgeyB1c2VCcmVha3BvaW50VmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL21lZGlhLXF1ZXJ5JztcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkJhcigpIHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBidXR0b25TaXplID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6ICd4cycsXHJcbiAgICBtZDogJ21kJyxcclxuICAgIGxnOiAnbGcnLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleFxyXG4gICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgYmc9XCJibGFja1wiXHJcbiAgICAgIGNvbG9yPVwiI2U1MDkxNFwiXHJcbiAgICAgIGg9XCI4MHB4XCJcclxuICAgICAgbWF4XHJcbiAgICA+XHJcbiAgICAgIDxGbGV4IG1sPXt7IG1kOiA0LCBsZzogMTAgfX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDxIZWFkaW5nIG1sPXs0fSBwdD17Mn0+XHJcbiAgICAgICAgICBQaWNrRmxpeFxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8RmxleCBtcj17eyBiYXNlOiA0LCBsZzogMTAgfX0+XHJcbiAgICAgICAge3Nlc3Npb24gPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VGV4dD57c2Vzc2lvbj8udXNlcj8ubmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB2YXJpYW50PVwibmF2LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgbXI9ezR9XHJcbiAgICAgICAgICAgICAgc2l6ZT17YnV0dG9uU2l6ZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMb2cgb3V0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cIm5hdi1idXR0b25cIlxyXG4gICAgICAgICAgICBtcj17NH1cclxuICAgICAgICAgICAgc2l6ZT17YnV0dG9uU2l6ZX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9idXR0b24nO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL2xheW91dCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyJztcclxuaW1wb3J0IHsgdXNlQnJlYWtwb2ludFZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9tZWRpYS1xdWVyeSc7XHJcbmltcG9ydCB7IHRycGMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvdXRpbHMvdHJwYyc7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b25TaXplID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6ICd4cycsXHJcbiAgICBtZDogJ21kJyxcclxuICAgIGxnOiAnbGcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBhZGREYXRhID0gdHJwYy51c2VNdXRhdGlvbignbW92aWVzLmFkZER1bW15RGF0YScpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHc9XCIxMDB2d1wiIGNvbG9yPVwid2hpdGVcIj5cclxuICAgICAgPEJveCBwb3NpdGlvbj1cImZpeGVkXCIgdz1cIjEwMHZ3XCIgaD1cIjgwcHhcIiB0b3A9XCIwXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGg9XCJjYWxjKDEwMHZoIC0gODBweClcIlxyXG4gICAgICAgIG10PVwiODBweFwiXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlPVwidXJsKCcvaG9tZXBhZ2UvYmFja2dyb3VuZC5qcGcnKVwiXHJcbiAgICAgICAgYmdQb3NpdGlvbj1cImNlbnRlclwiXHJcbiAgICAgICAgYmdSZXBlYXQ9XCJuby1yZXBlYXRcIlxyXG4gICAgICAgIGJnU2l6ZT1cImNvdmVyXCJcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgcGI9ezIwfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICBtYXhXPXt7IGJhc2U6ICc5MHZ3JywgbWQ6ICc1MHZ3JyB9fVxyXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAnM3hsJywgbWQ6ICc1eGwnLCBsZzogJzZ4bCcgfX1cclxuICAgICAgICAgICAgbT17eyBiYXNlOiAxLCBtZDogMyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBGaW5kIHRoZSBzaG93cyB5b3UgYm90aCB3YW50IHRvIHdhdGNoLlxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogJ2xnJywgbWQ6ICczeGwnLCBsZzogJzR4bCcgfX1cclxuICAgICAgICAgICAgbWI9e3sgYmFzZTogMSwgbWQ6IDMgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3dpcGUgYW55d2hlcmUsIGFueXRpbWUuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8Qm94IG09ezN9IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17eyBiYXNlOiAnbWQnLCBtZDogJ2xnJywgbGc6ICd4bCcgfX0+XHJcbiAgICAgICAgICAgICAgUmVhZHkgdG8gc3dpcGU/IEdldCBzdGFydGVkIG5vdy5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG10PXsxfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjZTUwOTE0XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT17YnV0dG9uU2l6ZX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJyZWQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNjYlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgYXdhaXQgYWRkRGF0YS5tdXRhdGVBc3luYygpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHZXQgc3RhcnRlZFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gJy4uL3BhZ2UtY29tcG9uZW50cy9Ib21lL0hvbWVQYWdlJztcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiA8SG9tZVBhZ2UgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiLy8gdXRpbHMvdHJwYy50c1xyXG5pbXBvcnQgeyBjcmVhdGVSZWFjdFF1ZXJ5SG9va3MgfSBmcm9tICdAdHJwYy9yZWFjdCc7XHJcbmltcG9ydCB0eXBlIHsgQXBwUm91dGVyIH0gZnJvbSAnLi4vcm91dGVycy9fYXBwJztcclxuXHJcbmV4cG9ydCBjb25zdCB0cnBjID0gY3JlYXRlUmVhY3RRdWVyeUhvb2tzPEFwcFJvdXRlcj4oKTtcclxuLy8gPT4geyB1c2VRdWVyeTogLi4uLCB1c2VNdXRhdGlvbjogLi4ufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2xheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL21lZGlhLXF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0cnBjL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJGbGV4IiwiSGVhZGluZyIsIlRleHQiLCJSZWFjdCIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwiTmF2QmFyIiwiZGF0YSIsInNlc3Npb24iLCJidXR0b25TaXplIiwiYmFzZSIsIm1kIiwibGciLCJ1c2VyIiwibmFtZSIsIkJveCIsInRycGMiLCJIb21lUGFnZSIsImFkZERhdGEiLCJ1c2VNdXRhdGlvbiIsIm11dGF0ZUFzeW5jIiwiSG9tZSIsImNyZWF0ZVJlYWN0UXVlcnlIb29rcyJdLCJzb3VyY2VSb290IjoiIn0=