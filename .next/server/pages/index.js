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

  const signInTemp = () => {
    console.log('CALLED');
    console.log(`${"http://localhost:3000"}/dashboard`);
    (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)('google', {
      callbackUrl: `${"http://localhost:3000"}/dashboard`,
      redirect: true
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    justifyContent: "space-between",
    alignItems: "center",
    bg: "black",
    color: "#e50914",
    h: "80px",
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
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      mr: {
        base: 4,
        lg: 10
      },
      children: [session && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontSize: {
          base: 'md',
          lg: 'xl'
        },
        mr: 3,
        pt: 1,
        children: session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, this), session ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "nav-button",
        mr: 4,
        size: buttonSize,
        onClick: () => (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)(),
        children: "Log out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_0__.Button, {
        variant: "nav-button",
        mr: 4,
        size: buttonSize,
        onClick: signInTemp,
        children: "Log in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ "./node_modules/next-auth/react/index.js");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\dev\\Polish\\pick-flix\\pickflix\\src\\page-components\\Home\\HomePage.tsx";








const HomePage = () => {
  const buttonSize = (0,_chakra_ui_media_query__WEBPACK_IMPORTED_MODULE_3__.useBreakpointValue)({
    base: 'xs',
    md: 'md',
    lg: 'lg'
  });
  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  const toDashboard = () => {
    if (session !== null && session !== void 0 && session.user) router.push('/dashboard');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
    w: "100vw",
    color: "white",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
      position: "fixed",
      w: "100vw",
      h: "80px",
      top: "0",
      overflow: "hidden",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      h: "calc(100vh - 80px)",
      mt: "80px",
      backgroundImage: "url('/homepage/background.jpg')",
      bgPosition: "center",
      bgRepeat: "no-repeat",
      bgSize: "cover",
      justifyContent: "center",
      alignItems: "center",
      pb: 20,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        flexDir: "column",
        alignItems: "center",
        maxW: {
          base: '90vw',
          md: '50vw'
        },
        textAlign: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Heading, {
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
          lineNumber: 43,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
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
          lineNumber: 50,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Box, {
          m: 3,
          textAlign: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontSize: {
              base: 'md',
              md: 'lg',
              lg: 'xl'
            },
            children: session !== null && session !== void 0 && session.user ? 'Get back to swiping' : 'Ready to swipe? Get started now.'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            justifyContent: "center",
            mt: 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_button__WEBPACK_IMPORTED_MODULE_0__.Button, {
              backgroundColor: "#e50914",
              color: "white",
              size: buttonSize,
              variant: "red-button",
              onClick: session ? toDashboard : () => (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(),
              isLoading: !session,
              children: session ? 'Go to dashboard' : 'Get started'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUlBLGlFQUFlQSxJQUFmOzs7Ozs7Ozs7OztBQ1BBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvbGliL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9saWIvbG9nZ2VyLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL2xpYi9wYXJzZS11cmwuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvcmVhY3QvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhci50c3giLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL3NyYy9wYWdlLWNvbXBvbmVudHMvSG9tZS9Ib21lUGFnZS50c3giLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcIkBjaGFrcmEtdWkvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcIkBjaGFrcmEtdWkvbGF5b3V0XCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcIkBjaGFrcmEtdWkvbWVkaWEtcXVlcnlcIiIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcInJlYWN0L2pzeC1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZmV0Y2hEYXRhID0gZmV0Y2hEYXRhO1xuZXhwb3J0cy5hcGlCYXNlVXJsID0gYXBpQmFzZVVybDtcbmV4cG9ydHMubm93ID0gbm93O1xuZXhwb3J0cy5Ccm9hZGNhc3RDaGFubmVsID0gQnJvYWRjYXN0Q2hhbm5lbDtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKHBhdGgsIF9fTkVYVEFVVEgsIGxvZ2dlciwge1xuICBjdHgsXG4gIHJlcSA9IGN0eCA9PT0gbnVsbCB8fCBjdHggPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN0eC5yZXFcbn0gPSB7fSkge1xuICB0cnkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSByZXEgIT09IG51bGwgJiYgcmVxICE9PSB2b2lkIDAgJiYgcmVxLmhlYWRlcnMuY29va2llID8ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBjb29raWU6IHJlcS5oZWFkZXJzLmNvb2tpZVxuICAgICAgfVxuICAgIH0gOiB7fTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHthcGlCYXNlVXJsKF9fTkVYVEFVVEgpfS8ke3BhdGh9YCwgb3B0aW9ucyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgaWYgKCFyZXMub2spIHRocm93IGRhdGE7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDAgPyBkYXRhIDogbnVsbDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoXCJDTElFTlRfRkVUQ0hfRVJST1JcIiwge1xuICAgICAgZXJyb3IsXG4gICAgICBwYXRoLFxuICAgICAgLi4uKHJlcSA/IHtcbiAgICAgICAgaGVhZGVyOiByZXEuaGVhZGVyc1xuICAgICAgfSA6IHt9KVxuICAgIH0pO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwaUJhc2VVcmwoX19ORVhUQVVUSCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBgJHtfX05FWFRBVVRILmJhc2VVcmxTZXJ2ZXJ9JHtfX05FWFRBVVRILmJhc2VQYXRoU2VydmVyfWA7XG4gIH1cblxuICByZXR1cm4gX19ORVhUQVVUSC5iYXNlUGF0aDtcbn1cblxuZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG59XG5cbmZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwobmFtZSA9IFwibmV4dGF1dGgubWVzc2FnZVwiKSB7XG4gIHJldHVybiB7XG4gICAgcmVjZWl2ZShvblJlY2VpdmUpIHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXkgIT09IG5hbWUpIHJldHVybjtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQubmV3VmFsdWUpO1xuICAgICAgICBpZiAoKG1lc3NhZ2UgPT09IG51bGwgfHwgbWVzc2FnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVzc2FnZS5ldmVudCkgIT09IFwic2Vzc2lvblwiIHx8ICEobWVzc2FnZSAhPT0gbnVsbCAmJiBtZXNzYWdlICE9PSB2b2lkIDAgJiYgbWVzc2FnZS5kYXRhKSkgcmV0dXJuO1xuICAgICAgICBvblJlY2VpdmUobWVzc2FnZSk7XG4gICAgICB9O1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgaGFuZGxlcik7XG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICBwb3N0KG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeSh7IC4uLm1lc3NhZ2UsXG4gICAgICAgIHRpbWVzdGFtcDogbm93KClcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2V0TG9nZ2VyID0gc2V0TG9nZ2VyO1xuZXhwb3J0cy5wcm94eUxvZ2dlciA9IHByb3h5TG9nZ2VyO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2Vycm9ycyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvZXJyb3JzXCIpO1xuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcihvKSB7XG4gIGlmIChvIGluc3RhbmNlb2YgRXJyb3IgJiYgIShvIGluc3RhbmNlb2YgX2Vycm9ycy5Vbmtub3duRXJyb3IpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IG8ubWVzc2FnZSxcbiAgICAgIHN0YWNrOiBvLnN0YWNrLFxuICAgICAgbmFtZTogby5uYW1lXG4gICAgfTtcbiAgfVxuXG4gIGlmIChvICE9PSBudWxsICYmIG8gIT09IHZvaWQgMCAmJiBvLmVycm9yKSB7XG4gICAgdmFyIF9vJG1lc3NhZ2U7XG5cbiAgICBvLmVycm9yID0gZm9ybWF0RXJyb3Ioby5lcnJvcik7XG4gICAgby5tZXNzYWdlID0gKF9vJG1lc3NhZ2UgPSBvLm1lc3NhZ2UpICE9PSBudWxsICYmIF9vJG1lc3NhZ2UgIT09IHZvaWQgMCA/IF9vJG1lc3NhZ2UgOiBvLmVycm9yLm1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gbztcbn1cblxuY29uc3QgX2xvZ2dlciA9IHtcbiAgZXJyb3IoY29kZSwgbWV0YWRhdGEpIHtcbiAgICBtZXRhZGF0YSA9IGZvcm1hdEVycm9yKG1ldGFkYXRhKTtcbiAgICBjb25zb2xlLmVycm9yKGBbbmV4dC1hdXRoXVtlcnJvcl1bJHtjb2RlfV1gLCBgXFxuaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2Vycm9ycyMke2NvZGUudG9Mb3dlckNhc2UoKX1gLCBtZXRhZGF0YS5tZXNzYWdlLCBtZXRhZGF0YSk7XG4gIH0sXG5cbiAgd2Fybihjb2RlKSB7XG4gICAgY29uc29sZS53YXJuKGBbbmV4dC1hdXRoXVt3YXJuXVske2NvZGV9XWAsIGBcXG5odHRwczovL25leHQtYXV0aC5qcy5vcmcvd2FybmluZ3MjJHtjb2RlLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH0sXG5cbiAgZGVidWcoY29kZSwgbWV0YWRhdGEpIHtcbiAgICB2YXIgX3Byb2Nlc3MsIF9wcm9jZXNzJGVudjtcblxuICAgIGlmICghKChfcHJvY2VzcyA9IHByb2Nlc3MpICE9PSBudWxsICYmIF9wcm9jZXNzICE9PSB2b2lkIDAgJiYgKF9wcm9jZXNzJGVudiA9IF9wcm9jZXNzLmVudikgIT09IG51bGwgJiYgX3Byb2Nlc3MkZW52ICE9PSB2b2lkIDAgJiYgX3Byb2Nlc3MkZW52Ll9ORVhUQVVUSF9ERUJVRykpIHJldHVybjtcbiAgICBjb25zb2xlLmxvZyhgW25leHQtYXV0aF1bZGVidWddWyR7Y29kZX1dYCwgbWV0YWRhdGEpO1xuICB9XG5cbn07XG5cbmZ1bmN0aW9uIHNldExvZ2dlcihuZXdMb2dnZXIgPSB7fSkge1xuICBpZiAobmV3TG9nZ2VyLmVycm9yKSBfbG9nZ2VyLmVycm9yID0gbmV3TG9nZ2VyLmVycm9yO1xuICBpZiAobmV3TG9nZ2VyLndhcm4pIF9sb2dnZXIud2FybiA9IG5ld0xvZ2dlci53YXJuO1xuICBpZiAobmV3TG9nZ2VyLmRlYnVnKSBfbG9nZ2VyLmRlYnVnID0gbmV3TG9nZ2VyLmRlYnVnO1xufVxuXG52YXIgX2RlZmF1bHQgPSBfbG9nZ2VyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbmZ1bmN0aW9uIHByb3h5TG9nZ2VyKGxvZ2dlciA9IF9sb2dnZXIsIGJhc2VQYXRoKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiBsb2dnZXI7XG4gICAgfVxuXG4gICAgY29uc3QgY2xpZW50TG9nZ2VyID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGxldmVsIGluIGxvZ2dlcikge1xuICAgICAgY2xpZW50TG9nZ2VyW2xldmVsXSA9IChjb2RlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgICBfbG9nZ2VyW2xldmVsXShjb2RlLCBtZXRhZGF0YSk7XG5cbiAgICAgICAgaWYgKGxldmVsID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICBtZXRhZGF0YSA9IGZvcm1hdEVycm9yKG1ldGFkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGFkYXRhLmNsaWVudCA9IHRydWU7XG4gICAgICAgIGNvbnN0IHVybCA9IGAke2Jhc2VQYXRofS9fbG9nYDtcbiAgICAgICAgY29uc3QgYm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgIGxldmVsLFxuICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgLi4ubWV0YWRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG5hdmlnYXRvci5zZW5kQmVhY29uKSB7XG4gICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5zZW5kQmVhY29uKHVybCwgYm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGtlZXBhbGl2ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsaWVudExvZ2dlcjtcbiAgfSBjYXRjaCAoX3VudXNlZCkge1xuICAgIHJldHVybiBfbG9nZ2VyO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwYXJzZVVybDtcblxuZnVuY3Rpb24gcGFyc2VVcmwodXJsKSB7XG4gIGNvbnN0IGRlZmF1bHRIb3N0ID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcbiAgY29uc3QgZGVmYXVsdFBhdGggPSBcIi9hcGkvYXV0aFwiO1xuXG4gIGlmICghdXJsKSB7XG4gICAgdXJsID0gYCR7ZGVmYXVsdEhvc3R9JHtkZWZhdWx0UGF0aH1gO1xuICB9XG5cbiAgY29uc3QgcHJvdG9jb2wgPSB1cmwuc3RhcnRzV2l0aChcImh0dHA6XCIpID8gXCJodHRwXCIgOiBcImh0dHBzXCI7XG4gIHVybCA9IHVybC5yZXBsYWNlKC9eaHR0cHM/OlxcL1xcLy8sIFwiXCIpLnJlcGxhY2UoL1xcLyQvLCBcIlwiKTtcbiAgY29uc3QgW19ob3N0LCAuLi5fcGF0aF0gPSB1cmwuc3BsaXQoXCIvXCIpO1xuICBjb25zdCBiYXNlVXJsID0gX2hvc3QgPyBgJHtwcm90b2NvbH06Ly8ke19ob3N0fWAgOiBkZWZhdWx0SG9zdDtcbiAgY29uc3QgYmFzZVBhdGggPSBfcGF0aC5sZW5ndGggPiAwID8gYC8ke19wYXRoLmpvaW4oXCIvXCIpfWAgOiBkZWZhdWx0UGF0aDtcbiAgcmV0dXJuIHtcbiAgICBiYXNlVXJsLFxuICAgIGJhc2VQYXRoXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBfZXhwb3J0TmFtZXMgPSB7XG4gIHVzZVNlc3Npb246IHRydWUsXG4gIGdldFNlc3Npb246IHRydWUsXG4gIGdldENzcmZUb2tlbjogdHJ1ZSxcbiAgZ2V0UHJvdmlkZXJzOiB0cnVlLFxuICBzaWduSW46IHRydWUsXG4gIHNpZ25PdXQ6IHRydWUsXG4gIFNlc3Npb25Qcm92aWRlcjogdHJ1ZVxufTtcbmV4cG9ydHMudXNlU2Vzc2lvbiA9IHVzZVNlc3Npb247XG5leHBvcnRzLmdldFNlc3Npb24gPSBnZXRTZXNzaW9uO1xuZXhwb3J0cy5nZXRDc3JmVG9rZW4gPSBnZXRDc3JmVG9rZW47XG5leHBvcnRzLmdldFByb3ZpZGVycyA9IGdldFByb3ZpZGVycztcbmV4cG9ydHMuc2lnbkluID0gc2lnbkluO1xuZXhwb3J0cy5zaWduT3V0ID0gc2lnbk91dDtcbmV4cG9ydHMuU2Vzc2lvblByb3ZpZGVyID0gU2Vzc2lvblByb3ZpZGVyO1xuXG52YXIgX3JlZ2VuZXJhdG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIF9hc3luY1RvR2VuZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfbG9nZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9saWIvbG9nZ2VyXCIpKTtcblxudmFyIF9wYXJzZVVybCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xpYi9wYXJzZS11cmxcIikpO1xuXG52YXIgX2NsaWVudCA9IHJlcXVpcmUoXCIuLi9saWIvY2xpZW50XCIpO1xuXG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcblxuT2JqZWN0LmtleXMoX3R5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBpZiAoa2V5IGluIGV4cG9ydHMgJiYgZXhwb3J0c1trZXldID09PSBfdHlwZXNba2V5XSkgcmV0dXJuO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfdHlwZXNba2V5XTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBfcHJvY2VzcyRlbnYkTkVYVEFVVEgsIF9yZWYsIF9wcm9jZXNzJGVudiRORVhUQVVUSDIsIF9wcm9jZXNzJGVudiRORVhUQVVUSDM7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgeyBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IH0ga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7ICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBfX05FWFRBVVRIID0ge1xuICBiYXNlVXJsOiAoMCwgX3BhcnNlVXJsLmRlZmF1bHQpKChfcHJvY2VzcyRlbnYkTkVYVEFVVEggPSBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwpICE9PSBudWxsICYmIF9wcm9jZXNzJGVudiRORVhUQVVUSCAhPT0gdm9pZCAwID8gX3Byb2Nlc3MkZW52JE5FWFRBVVRIIDogcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCkuYmFzZVVybCxcbiAgYmFzZVBhdGg6ICgwLCBfcGFyc2VVcmwuZGVmYXVsdCkocHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMKS5iYXNlUGF0aCxcbiAgYmFzZVVybFNlcnZlcjogKDAsIF9wYXJzZVVybC5kZWZhdWx0KSgoX3JlZiA9IChfcHJvY2VzcyRlbnYkTkVYVEFVVEgyID0gcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMX0lOVEVSTkFMKSAhPT0gbnVsbCAmJiBfcHJvY2VzcyRlbnYkTkVYVEFVVEgyICE9PSB2b2lkIDAgPyBfcHJvY2VzcyRlbnYkTkVYVEFVVEgyIDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCkuYmFzZVVybCxcbiAgYmFzZVBhdGhTZXJ2ZXI6ICgwLCBfcGFyc2VVcmwuZGVmYXVsdCkoKF9wcm9jZXNzJGVudiRORVhUQVVUSDMgPSBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkxfSU5URVJOQUwpICE9PSBudWxsICYmIF9wcm9jZXNzJGVudiRORVhUQVVUSDMgIT09IHZvaWQgMCA/IF9wcm9jZXNzJGVudiRORVhUQVVUSDMgOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwpLmJhc2VQYXRoLFxuICBfbGFzdFN5bmM6IDAsXG4gIF9zZXNzaW9uOiB1bmRlZmluZWQsXG4gIF9nZXRTZXNzaW9uOiBmdW5jdGlvbiBfZ2V0U2Vzc2lvbigpIHt9XG59O1xudmFyIGJyb2FkY2FzdCA9ICgwLCBfY2xpZW50LkJyb2FkY2FzdENoYW5uZWwpKCk7XG52YXIgbG9nZ2VyID0gKDAsIF9sb2dnZXIyLnByb3h5TG9nZ2VyKShfbG9nZ2VyMi5kZWZhdWx0LCBfX05FWFRBVVRILmJhc2VQYXRoKTtcbnZhciBTZXNzaW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcblxuZnVuY3Rpb24gdXNlU2Vzc2lvbihvcHRpb25zKSB7XG4gIHZhciB2YWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoU2Vzc2lvbkNvbnRleHQpO1xuXG4gIGlmICghdmFsdWUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW25leHQtYXV0aF06IGB1c2VTZXNzaW9uYCBtdXN0IGJlIHdyYXBwZWQgaW4gYSA8U2Vzc2lvblByb3ZpZGVyIC8+XCIpO1xuICB9XG5cbiAgdmFyIF9yZWYyID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30sXG4gICAgICByZXF1aXJlZCA9IF9yZWYyLnJlcXVpcmVkLFxuICAgICAgb25VbmF1dGhlbnRpY2F0ZWQgPSBfcmVmMi5vblVuYXV0aGVudGljYXRlZDtcblxuICB2YXIgcmVxdWlyZWRBbmROb3RMb2FkaW5nID0gcmVxdWlyZWQgJiYgdmFsdWUuc3RhdHVzID09PSBcInVuYXV0aGVudGljYXRlZFwiO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChyZXF1aXJlZEFuZE5vdExvYWRpbmcpIHtcbiAgICAgIHZhciB1cmwgPSBcIi9hcGkvYXV0aC9zaWduaW4/XCIuY29uY2F0KG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICBlcnJvcjogXCJTZXNzaW9uUmVxdWlyZWRcIixcbiAgICAgICAgY2FsbGJhY2tVcmw6IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgICB9KSk7XG4gICAgICBpZiAob25VbmF1dGhlbnRpY2F0ZWQpIG9uVW5hdXRoZW50aWNhdGVkKCk7ZWxzZSB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmwpO1xuICAgIH1cbiAgfSwgW3JlcXVpcmVkQW5kTm90TG9hZGluZywgb25VbmF1dGhlbnRpY2F0ZWRdKTtcblxuICBpZiAocmVxdWlyZWRBbmROb3RMb2FkaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHZhbHVlLmRhdGEsXG4gICAgICBzdGF0dXM6IFwibG9hZGluZ1wiXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Vzc2lvbihfeCkge1xuICByZXR1cm4gX2dldFNlc3Npb24yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRTZXNzaW9uMigpIHtcbiAgX2dldFNlc3Npb24yID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKHBhcmFtcykge1xuICAgIHZhciBfcGFyYW1zJGJyb2FkY2FzdDtcblxuICAgIHZhciBzZXNzaW9uO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQyLnByZXYgPSBfY29udGV4dDIubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NsaWVudC5mZXRjaERhdGEpKFwic2Vzc2lvblwiLCBfX05FWFRBVVRILCBsb2dnZXIsIHBhcmFtcyk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBzZXNzaW9uID0gX2NvbnRleHQyLnNlbnQ7XG5cbiAgICAgICAgICAgIGlmICgoX3BhcmFtcyRicm9hZGNhc3QgPSBwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuYnJvYWRjYXN0KSAhPT0gbnVsbCAmJiBfcGFyYW1zJGJyb2FkY2FzdCAhPT0gdm9pZCAwID8gX3BhcmFtcyRicm9hZGNhc3QgOiB0cnVlKSB7XG4gICAgICAgICAgICAgIGJyb2FkY2FzdC5wb3N0KHtcbiAgICAgICAgICAgICAgICBldmVudDogXCJzZXNzaW9uXCIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogXCJnZXRTZXNzaW9uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCBzZXNzaW9uKTtcblxuICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUyKTtcbiAgfSkpO1xuICByZXR1cm4gX2dldFNlc3Npb24yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGdldENzcmZUb2tlbihfeDIpIHtcbiAgcmV0dXJuIF9nZXRDc3JmVG9rZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2dldENzcmZUb2tlbigpIHtcbiAgX2dldENzcmZUb2tlbiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjIuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlMyhwYXJhbXMpIHtcbiAgICB2YXIgcmVzcG9uc2U7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTMkKF9jb250ZXh0Mykge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDMucHJldiA9IF9jb250ZXh0My5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQzLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfY2xpZW50LmZldGNoRGF0YSkoXCJjc3JmXCIsIF9fTkVYVEFVVEgsIGxvZ2dlciwgcGFyYW1zKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJlc3BvbnNlID0gX2NvbnRleHQzLnNlbnQ7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLmFicnVwdChcInJldHVyblwiLCByZXNwb25zZSA9PT0gbnVsbCB8fCByZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVzcG9uc2UuY3NyZlRva2VuKTtcblxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUzKTtcbiAgfSkpO1xuICByZXR1cm4gX2dldENzcmZUb2tlbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm92aWRlcnMoKSB7XG4gIHJldHVybiBfZ2V0UHJvdmlkZXJzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm92aWRlcnMoKSB7XG4gIF9nZXRQcm92aWRlcnMgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTQoKSB7XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTQkKF9jb250ZXh0NCkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDQucHJldiA9IF9jb250ZXh0NC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQ0Lm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfY2xpZW50LmZldGNoRGF0YSkoXCJwcm92aWRlcnNcIiwgX19ORVhUQVVUSCwgbG9nZ2VyKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuYWJydXB0KFwicmV0dXJuXCIsIF9jb250ZXh0NC5zZW50KTtcblxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU0KTtcbiAgfSkpO1xuICByZXR1cm4gX2dldFByb3ZpZGVycy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBzaWduSW4oX3gzLCBfeDQsIF94NSkge1xuICByZXR1cm4gX3NpZ25Jbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfc2lnbkluKCkge1xuICBfc2lnbkluID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU1KHByb3ZpZGVyLCBvcHRpb25zLCBhdXRob3JpemF0aW9uUGFyYW1zKSB7XG4gICAgdmFyIF9yZWY1LCBfcmVmNSRjYWxsYmFja1VybCwgY2FsbGJhY2tVcmwsIF9yZWY1JHJlZGlyZWN0LCByZWRpcmVjdCwgYmFzZVVybCwgcHJvdmlkZXJzLCBpc0NyZWRlbnRpYWxzLCBpc0VtYWlsLCBpc1N1cHBvcnRpbmdSZXR1cm4sIHNpZ25JblVybCwgX3NpZ25JblVybCwgcmVzLCBkYXRhLCBfZGF0YSR1cmwsIHVybCwgZXJyb3I7XG5cbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlNSQoX2NvbnRleHQ1KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NS5wcmV2ID0gX2NvbnRleHQ1Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfcmVmNSA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9LCBfcmVmNSRjYWxsYmFja1VybCA9IF9yZWY1LmNhbGxiYWNrVXJsLCBjYWxsYmFja1VybCA9IF9yZWY1JGNhbGxiYWNrVXJsID09PSB2b2lkIDAgPyB3aW5kb3cubG9jYXRpb24uaHJlZiA6IF9yZWY1JGNhbGxiYWNrVXJsLCBfcmVmNSRyZWRpcmVjdCA9IF9yZWY1LnJlZGlyZWN0LCByZWRpcmVjdCA9IF9yZWY1JHJlZGlyZWN0ID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjUkcmVkaXJlY3Q7XG4gICAgICAgICAgICBiYXNlVXJsID0gKDAsIF9jbGllbnQuYXBpQmFzZVVybCkoX19ORVhUQVVUSCk7XG4gICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDQ7XG4gICAgICAgICAgICByZXR1cm4gZ2V0UHJvdmlkZXJzKCk7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBwcm92aWRlcnMgPSBfY29udGV4dDUuc2VudDtcblxuICAgICAgICAgICAgaWYgKHByb3ZpZGVycykge1xuICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDg7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIlwiLmNvbmNhdChiYXNlVXJsLCBcIi9lcnJvclwiKSk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIGlmICghKCFwcm92aWRlciB8fCAhKHByb3ZpZGVyIGluIHByb3ZpZGVycykpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMTE7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIlwiLmNvbmNhdChiYXNlVXJsLCBcIi9zaWduaW4/XCIpLmNvbmNhdChuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICAgICAgY2FsbGJhY2tVcmw6IGNhbGxiYWNrVXJsXG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgaXNDcmVkZW50aWFscyA9IHByb3ZpZGVyc1twcm92aWRlcl0udHlwZSA9PT0gXCJjcmVkZW50aWFsc1wiO1xuICAgICAgICAgICAgaXNFbWFpbCA9IHByb3ZpZGVyc1twcm92aWRlcl0udHlwZSA9PT0gXCJlbWFpbFwiO1xuICAgICAgICAgICAgaXNTdXBwb3J0aW5nUmV0dXJuID0gaXNDcmVkZW50aWFscyB8fCBpc0VtYWlsO1xuICAgICAgICAgICAgc2lnbkluVXJsID0gXCJcIi5jb25jYXQoYmFzZVVybCwgXCIvXCIpLmNvbmNhdChpc0NyZWRlbnRpYWxzID8gXCJjYWxsYmFja1wiIDogXCJzaWduaW5cIiwgXCIvXCIpLmNvbmNhdChwcm92aWRlcik7XG4gICAgICAgICAgICBfc2lnbkluVXJsID0gXCJcIi5jb25jYXQoc2lnbkluVXJsLCBcIj9cIikuY29uY2F0KG5ldyBVUkxTZWFyY2hQYXJhbXMoYXV0aG9yaXphdGlvblBhcmFtcykpO1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQwID0gZmV0Y2g7XG4gICAgICAgICAgICBfY29udGV4dDUudDEgPSBfc2lnbkluVXJsO1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQyID0ge1xuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQzID0gVVJMU2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQ0ID0gX29iamVjdFNwcmVhZDtcbiAgICAgICAgICAgIF9jb250ZXh0NS50NSA9IF9vYmplY3RTcHJlYWQoe30sIG9wdGlvbnMpO1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQ2ID0ge307XG4gICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDI1O1xuICAgICAgICAgICAgcmV0dXJuIGdldENzcmZUb2tlbigpO1xuXG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIF9jb250ZXh0NS50NyA9IF9jb250ZXh0NS5zZW50O1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQ4ID0gY2FsbGJhY2tVcmw7XG4gICAgICAgICAgICBfY29udGV4dDUudDkgPSB7XG4gICAgICAgICAgICAgIGNzcmZUb2tlbjogX2NvbnRleHQ1LnQ3LFxuICAgICAgICAgICAgICBjYWxsYmFja1VybDogX2NvbnRleHQ1LnQ4LFxuICAgICAgICAgICAgICBqc29uOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQxMCA9ICgwLCBfY29udGV4dDUudDQpKF9jb250ZXh0NS50NSwgX2NvbnRleHQ1LnQ2LCBfY29udGV4dDUudDkpO1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQxMSA9IG5ldyBfY29udGV4dDUudDMoX2NvbnRleHQ1LnQxMCk7XG4gICAgICAgICAgICBfY29udGV4dDUudDEyID0ge1xuICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgICBoZWFkZXJzOiBfY29udGV4dDUudDIsXG4gICAgICAgICAgICAgIGJvZHk6IF9jb250ZXh0NS50MTFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDMzO1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfY29udGV4dDUudDApKF9jb250ZXh0NS50MSwgX2NvbnRleHQ1LnQxMik7XG5cbiAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgcmVzID0gX2NvbnRleHQ1LnNlbnQ7XG4gICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDM2O1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG5cbiAgICAgICAgICBjYXNlIDM2OlxuICAgICAgICAgICAgZGF0YSA9IF9jb250ZXh0NS5zZW50O1xuXG4gICAgICAgICAgICBpZiAoIShyZWRpcmVjdCB8fCAhaXNTdXBwb3J0aW5nUmV0dXJuKSkge1xuICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDQyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXJsID0gKF9kYXRhJHVybCA9IGRhdGEudXJsKSAhPT0gbnVsbCAmJiBfZGF0YSR1cmwgIT09IHZvaWQgMCA/IF9kYXRhJHVybCA6IGNhbGxiYWNrVXJsO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsKTtcbiAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoXCIjXCIpKSB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICBlcnJvciA9IG5ldyBVUkwoZGF0YS51cmwpLnNlYXJjaFBhcmFtcy5nZXQoXCJlcnJvclwiKTtcblxuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA0NjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gNDY7XG4gICAgICAgICAgICByZXR1cm4gX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbih7XG4gICAgICAgICAgICAgIGV2ZW50OiBcInN0b3JhZ2VcIlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDQ2OlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIiwge1xuICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcbiAgICAgICAgICAgICAgb2s6IHJlcy5vayxcbiAgICAgICAgICAgICAgdXJsOiBlcnJvciA/IG51bGwgOiBkYXRhLnVybFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTUpO1xuICB9KSk7XG4gIHJldHVybiBfc2lnbkluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNpZ25PdXQoX3g2KSB7XG4gIHJldHVybiBfc2lnbk91dC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfc2lnbk91dCgpIHtcbiAgX3NpZ25PdXQgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTYob3B0aW9ucykge1xuICAgIHZhciBfb3B0aW9ucyRyZWRpcmVjdDtcblxuICAgIHZhciBfcmVmNiwgX3JlZjYkY2FsbGJhY2tVcmwsIGNhbGxiYWNrVXJsLCBiYXNlVXJsLCBmZXRjaE9wdGlvbnMsIHJlcywgZGF0YSwgX2RhdGEkdXJsMiwgdXJsO1xuXG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTYkKF9jb250ZXh0Nikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDYucHJldiA9IF9jb250ZXh0Ni5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX3JlZjYgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSwgX3JlZjYkY2FsbGJhY2tVcmwgPSBfcmVmNi5jYWxsYmFja1VybCwgY2FsbGJhY2tVcmwgPSBfcmVmNiRjYWxsYmFja1VybCA9PT0gdm9pZCAwID8gd2luZG93LmxvY2F0aW9uLmhyZWYgOiBfcmVmNiRjYWxsYmFja1VybDtcbiAgICAgICAgICAgIGJhc2VVcmwgPSAoMCwgX2NsaWVudC5hcGlCYXNlVXJsKShfX05FWFRBVVRIKTtcbiAgICAgICAgICAgIF9jb250ZXh0Ni50MCA9IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9jb250ZXh0Ni50MSA9IFVSTFNlYXJjaFBhcmFtcztcbiAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gNjtcbiAgICAgICAgICAgIHJldHVybiBnZXRDc3JmVG9rZW4oKTtcblxuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIF9jb250ZXh0Ni50MiA9IF9jb250ZXh0Ni5zZW50O1xuICAgICAgICAgICAgX2NvbnRleHQ2LnQzID0gY2FsbGJhY2tVcmw7XG4gICAgICAgICAgICBfY29udGV4dDYudDQgPSB7XG4gICAgICAgICAgICAgIGNzcmZUb2tlbjogX2NvbnRleHQ2LnQyLFxuICAgICAgICAgICAgICBjYWxsYmFja1VybDogX2NvbnRleHQ2LnQzLFxuICAgICAgICAgICAgICBqc29uOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2NvbnRleHQ2LnQ1ID0gbmV3IF9jb250ZXh0Ni50MShfY29udGV4dDYudDQpO1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zID0ge1xuICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgICBoZWFkZXJzOiBfY29udGV4dDYudDAsXG4gICAgICAgICAgICAgIGJvZHk6IF9jb250ZXh0Ni50NVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gMTM7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goXCJcIi5jb25jYXQoYmFzZVVybCwgXCIvc2lnbm91dFwiKSwgZmV0Y2hPcHRpb25zKTtcblxuICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICByZXMgPSBfY29udGV4dDYuc2VudDtcbiAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gMTY7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcblxuICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICBkYXRhID0gX2NvbnRleHQ2LnNlbnQ7XG4gICAgICAgICAgICBicm9hZGNhc3QucG9zdCh7XG4gICAgICAgICAgICAgIGV2ZW50OiBcInNlc3Npb25cIixcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwic2lnbm91dFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoISgoX29wdGlvbnMkcmVkaXJlY3QgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVkaXJlY3QpICE9PSBudWxsICYmIF9vcHRpb25zJHJlZGlyZWN0ICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRyZWRpcmVjdCA6IHRydWUpKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gMjM7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cmwgPSAoX2RhdGEkdXJsMiA9IGRhdGEudXJsKSAhPT0gbnVsbCAmJiBfZGF0YSR1cmwyICE9PSB2b2lkIDAgPyBfZGF0YSR1cmwyIDogY2FsbGJhY2tVcmw7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmwpO1xuICAgICAgICAgICAgaWYgKHVybC5pbmNsdWRlcyhcIiNcIikpIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgIF9jb250ZXh0Ni5uZXh0ID0gMjU7XG4gICAgICAgICAgICByZXR1cm4gX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbih7XG4gICAgICAgICAgICAgIGV2ZW50OiBcInN0b3JhZ2VcIlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5hYnJ1cHQoXCJyZXR1cm5cIiwgZGF0YSk7XG5cbiAgICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTYpO1xuICB9KSk7XG4gIHJldHVybiBfc2lnbk91dC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBTZXNzaW9uUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBiYXNlUGF0aCA9IHByb3BzLmJhc2VQYXRoO1xuICBpZiAoYmFzZVBhdGgpIF9fTkVYVEFVVEguYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgdmFyIGhhc0luaXRpYWxTZXNzaW9uID0gcHJvcHMuc2Vzc2lvbiAhPT0gdW5kZWZpbmVkO1xuICBfX05FWFRBVVRILl9sYXN0U3luYyA9IGhhc0luaXRpYWxTZXNzaW9uID8gKDAsIF9jbGllbnQubm93KSgpIDogMDtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIGlmIChoYXNJbml0aWFsU2Vzc2lvbikgX19ORVhUQVVUSC5fc2Vzc2lvbiA9IHByb3BzLnNlc3Npb247XG4gICAgcmV0dXJuIHByb3BzLnNlc3Npb247XG4gIH0pLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9ICgwLCBfc2xpY2VkVG9BcnJheTIuZGVmYXVsdCkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHNlc3Npb24gPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0U2Vzc2lvbiA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZSghaGFzSW5pdGlhbFNlc3Npb24pLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlNCA9ICgwLCBfc2xpY2VkVG9BcnJheTIuZGVmYXVsdCkoX1JlYWN0JHVzZVN0YXRlMywgMiksXG4gICAgICBsb2FkaW5nID0gX1JlYWN0JHVzZVN0YXRlNFswXSxcbiAgICAgIHNldExvYWRpbmcgPSBfUmVhY3QkdXNlU3RhdGU0WzFdO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjIuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgdmFyIF9yZWY0LFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIHN0b3JhZ2VFdmVudCxcbiAgICAgICAgICBfYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIF9yZWY0ID0gX2FyZ3MubGVuZ3RoID4gMCAmJiBfYXJnc1swXSAhPT0gdW5kZWZpbmVkID8gX2FyZ3NbMF0gOiB7fSwgZXZlbnQgPSBfcmVmNC5ldmVudDtcbiAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDE7XG4gICAgICAgICAgICAgIHN0b3JhZ2VFdmVudCA9IGV2ZW50ID09PSBcInN0b3JhZ2VcIjtcblxuICAgICAgICAgICAgICBpZiAoIShzdG9yYWdlRXZlbnQgfHwgX19ORVhUQVVUSC5fc2Vzc2lvbiA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF9fTkVYVEFVVEguX2xhc3RTeW5jID0gKDAsIF9jbGllbnQubm93KSgpO1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgcmV0dXJuIGdldFNlc3Npb24oe1xuICAgICAgICAgICAgICAgIGJyb2FkY2FzdDogIXN0b3JhZ2VFdmVudFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICBfX05FWFRBVVRILl9zZXNzaW9uID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgc2V0U2Vzc2lvbihfX05FWFRBVVRILl9zZXNzaW9uKTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgaWYgKCEoIWV2ZW50IHx8IF9fTkVYVEFVVEguX3Nlc3Npb24gPT09IG51bGwgfHwgKDAsIF9jbGllbnQubm93KSgpIDwgX19ORVhUQVVUSC5fbGFzdFN5bmMpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgX19ORVhUQVVUSC5fbGFzdFN5bmMgPSAoMCwgX2NsaWVudC5ub3cpKCk7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNTtcbiAgICAgICAgICAgICAgcmV0dXJuIGdldFNlc3Npb24oKTtcblxuICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgX19ORVhUQVVUSC5fc2Vzc2lvbiA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgIHNldFNlc3Npb24oX19ORVhUQVVUSC5fc2Vzc2lvbik7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMjtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxOTtcbiAgICAgICAgICAgICAgX2NvbnRleHQudDAgPSBfY29udGV4dFtcImNhdGNoXCJdKDEpO1xuICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJDTElFTlRfU0VTU0lPTl9FUlJPUlwiLCBfY29udGV4dC50MCk7XG5cbiAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAyMjtcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5maW5pc2goMjIpO1xuXG4gICAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgX2NhbGxlZSwgbnVsbCwgW1sxLCAxOSwgMjIsIDI1XV0pO1xuICAgIH0pKTtcblxuICAgIF9fTkVYVEFVVEguX2dldFNlc3Npb24oKTtcbiAgfSwgW10pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciB1bnN1YnNjcmliZSA9IGJyb2FkY2FzdC5yZWNlaXZlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfX05FWFRBVVRILl9nZXRTZXNzaW9uKHtcbiAgICAgICAgZXZlbnQ6IFwic3RvcmFnZVwiXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciB2aXNpYmlsaXR5SGFuZGxlciA9IGZ1bmN0aW9uIHZpc2liaWxpdHlIYW5kbGVyKCkge1xuICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpIF9fTkVYVEFVVEguX2dldFNlc3Npb24oe1xuICAgICAgICBldmVudDogXCJ2aXNpYmlsaXR5Y2hhbmdlXCJcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCB2aXNpYmlsaXR5SGFuZGxlciwgZmFsc2UpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgdmlzaWJpbGl0eUhhbmRsZXIsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlZmV0Y2hJbnRlcnZhbCA9IHByb3BzLnJlZmV0Y2hJbnRlcnZhbDtcblxuICAgIGlmIChyZWZldGNoSW50ZXJ2YWwpIHtcbiAgICAgIHZhciByZWZldGNoSW50ZXJ2YWxUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF9fTkVYVEFVVEguX3Nlc3Npb24pIHtcbiAgICAgICAgICBfX05FWFRBVVRILl9nZXRTZXNzaW9uKHtcbiAgICAgICAgICAgIGV2ZW50OiBcInBvbGxcIlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCByZWZldGNoSW50ZXJ2YWwgKiAxMDAwKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbGVhckludGVydmFsKHJlZmV0Y2hJbnRlcnZhbFRpbWVyKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbcHJvcHMucmVmZXRjaEludGVydmFsXSk7XG4gIHZhciB2YWx1ZSA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBzZXNzaW9uLFxuICAgICAgc3RhdHVzOiBsb2FkaW5nID8gXCJsb2FkaW5nXCIgOiBzZXNzaW9uID8gXCJhdXRoZW50aWNhdGVkXCIgOiBcInVuYXV0aGVudGljYXRlZFwiXG4gICAgfTtcbiAgfSwgW3Nlc3Npb24sIGxvYWRpbmddKTtcbiAgcmV0dXJuICgwLCBfanN4UnVudGltZS5qc3gpKFNlc3Npb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVwcGVyU25ha2UgPSB1cHBlclNuYWtlO1xuZXhwb3J0cy5jYXBpdGFsaXplID0gY2FwaXRhbGl6ZTtcbmV4cG9ydHMuZXZlbnRzRXJyb3JIYW5kbGVyID0gZXZlbnRzRXJyb3JIYW5kbGVyO1xuZXhwb3J0cy5hZGFwdGVyRXJyb3JIYW5kbGVyID0gYWRhcHRlckVycm9ySGFuZGxlcjtcbmV4cG9ydHMuQWNjb3VudE5vdExpbmtlZEVycm9yID0gZXhwb3J0cy5PQXV0aENhbGxiYWNrRXJyb3IgPSBleHBvcnRzLlVua25vd25FcnJvciA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxuY2xhc3MgVW5rbm93bkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihlcnJvcikge1xuICAgIHZhciBfZXJyb3IkbWVzc2FnZTtcblxuICAgIHN1cGVyKChfZXJyb3IkbWVzc2FnZSA9IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfZXJyb3IkbWVzc2FnZSAhPT0gdm9pZCAwID8gX2Vycm9yJG1lc3NhZ2UgOiBlcnJvcik7XG4gICAgdGhpcy5uYW1lID0gXCJVbmtub3duRXJyb3JcIjtcblxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICB0aGlzLnN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgfVxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBzdGFjazogdGhpcy5zdGFja1xuICAgIH07XG4gIH1cblxufVxuXG5leHBvcnRzLlVua25vd25FcnJvciA9IFVua25vd25FcnJvcjtcblxuY2xhc3MgT0F1dGhDYWxsYmFja0Vycm9yIGV4dGVuZHMgVW5rbm93bkVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRoaXMsIFwibmFtZVwiLCBcIk9BdXRoQ2FsbGJhY2tFcnJvclwiKTtcbiAgfVxuXG59XG5cbmV4cG9ydHMuT0F1dGhDYWxsYmFja0Vycm9yID0gT0F1dGhDYWxsYmFja0Vycm9yO1xuXG5jbGFzcyBBY2NvdW50Tm90TGlua2VkRXJyb3IgZXh0ZW5kcyBVbmtub3duRXJyb3Ige1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGhpcywgXCJuYW1lXCIsIFwiQWNjb3VudE5vdExpbmtlZEVycm9yXCIpO1xuICB9XG5cbn1cblxuZXhwb3J0cy5BY2NvdW50Tm90TGlua2VkRXJyb3IgPSBBY2NvdW50Tm90TGlua2VkRXJyb3I7XG5cbmZ1bmN0aW9uIHVwcGVyU25ha2Uocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC8oW0EtWl0pL2csIFwiXyQxXCIpLnRvVXBwZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUocykge1xuICByZXR1cm4gYCR7c1swXS50b1VwcGVyQ2FzZSgpfSR7cy5zbGljZSgxKX1gO1xufVxuXG5mdW5jdGlvbiBldmVudHNFcnJvckhhbmRsZXIobWV0aG9kcywgbG9nZ2VyKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXRob2RzKS5yZWR1Y2UoKGFjYywgbmFtZSkgPT4ge1xuICAgIGFjY1tuYW1lXSA9IGFzeW5jICguLi5hcmdzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBtZXRob2QgPSBtZXRob2RzW25hbWVdO1xuICAgICAgICByZXR1cm4gYXdhaXQgbWV0aG9kKC4uLmFyZ3MpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIuZXJyb3IoYCR7dXBwZXJTbmFrZShuYW1lKX1fRVZFTlRfRVJST1JgLCBlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBhZGFwdGVyRXJyb3JIYW5kbGVyKGFkYXB0ZXIsIGxvZ2dlcikge1xuICBpZiAoIWFkYXB0ZXIpIHJldHVybjtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGFkYXB0ZXIpLnJlZHVjZSgoYWNjLCBuYW1lKSA9PiB7XG4gICAgYWNjW25hbWVdID0gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgYWRhcHRlcl8ke25hbWV9YCwge1xuICAgICAgICAgIGFyZ3NcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IGFkYXB0ZXJbbmFtZV07XG4gICAgICAgIHJldHVybiBhd2FpdCBtZXRob2QoLi4uYXJncyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBsb2dnZXIuZXJyb3IoYGFkYXB0ZXJfZXJyb3JfJHtuYW1lfWAsIGVycm9yKTtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBVbmtub3duRXJyb3IoZXJyb3IpO1xuICAgICAgICBlLm5hbWUgPSBgJHtjYXBpdGFsaXplKG5hbWUpfUVycm9yYDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufSIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgRmxleCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvbGF5b3V0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQnJlYWtwb2ludFZhbHVlIH0gZnJvbSAnQGNoYWtyYS11aS9tZWRpYS1xdWVyeSc7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3QgYnV0dG9uU2l6ZSA9IHVzZUJyZWFrcG9pbnRWYWx1ZSh7XHJcbiAgICBiYXNlOiAneHMnLFxyXG4gICAgbWQ6ICdtZCcsXHJcbiAgICBsZzogJ2xnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2lnbkluVGVtcCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdDQUxMRUQnKTtcclxuICAgIGNvbnNvbGUubG9nKGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9kYXNoYm9hcmRgKTtcclxuICAgIHNpZ25JbignZ29vZ2xlJywge1xyXG4gICAgICBjYWxsYmFja1VybDogYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2Rhc2hib2FyZGAsXHJcbiAgICAgIHJlZGlyZWN0OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgIGJnPVwiYmxhY2tcIlxyXG4gICAgICBjb2xvcj1cIiNlNTA5MTRcIlxyXG4gICAgICBoPVwiODBweFwiXHJcbiAgICA+XHJcbiAgICAgIDxGbGV4IG1sPXt7IG1kOiA0LCBsZzogMTAgfX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDxIZWFkaW5nIG1sPXs0fSBwdD17Mn0+XHJcbiAgICAgICAgICBQaWNrRmxpeFxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICA8RmxleCBtcj17eyBiYXNlOiA0LCBsZzogMTAgfX0+XHJcbiAgICAgICAge3Nlc3Npb24gJiYgKFxyXG4gICAgICAgICAgPFRleHQgZm9udFNpemU9e3sgYmFzZTogJ21kJywgbGc6ICd4bCcgfX0gbXI9ezN9IHB0PXsxfT5cclxuICAgICAgICAgICAge3Nlc3Npb24/LnVzZXI/Lm5hbWV9XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7c2Vzc2lvbiA/IChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cIm5hdi1idXR0b25cIlxyXG4gICAgICAgICAgICBtcj17NH1cclxuICAgICAgICAgICAgc2l6ZT17YnV0dG9uU2l6ZX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2cgb3V0XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwibmF2LWJ1dHRvblwiXHJcbiAgICAgICAgICAgIG1yPXs0fVxyXG4gICAgICAgICAgICBzaXplPXtidXR0b25TaXplfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtzaWduSW5UZW1wfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BjaGFrcmEtdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyL05hdkJhcic7XHJcbmltcG9ydCB7IHVzZUJyZWFrcG9pbnRWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvbWVkaWEtcXVlcnknO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBidXR0b25TaXplID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcclxuICAgIGJhc2U6ICd4cycsXHJcbiAgICBtZDogJ21kJyxcclxuICAgIGxnOiAnbGcnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB0b0Rhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIGlmIChzZXNzaW9uPy51c2VyKSByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHc9XCIxMDB2d1wiIGNvbG9yPVwid2hpdGVcIj5cclxuICAgICAgPEJveCBwb3NpdGlvbj1cImZpeGVkXCIgdz1cIjEwMHZ3XCIgaD1cIjgwcHhcIiB0b3A9XCIwXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGg9XCJjYWxjKDEwMHZoIC0gODBweClcIlxyXG4gICAgICAgIG10PVwiODBweFwiXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlPVwidXJsKCcvaG9tZXBhZ2UvYmFja2dyb3VuZC5qcGcnKVwiXHJcbiAgICAgICAgYmdQb3NpdGlvbj1cImNlbnRlclwiXHJcbiAgICAgICAgYmdSZXBlYXQ9XCJuby1yZXBlYXRcIlxyXG4gICAgICAgIGJnU2l6ZT1cImNvdmVyXCJcclxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgcGI9ezIwfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxyXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICBtYXhXPXt7IGJhc2U6ICc5MHZ3JywgbWQ6ICc1MHZ3JyB9fVxyXG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAnM3hsJywgbWQ6ICc1eGwnLCBsZzogJzZ4bCcgfX1cclxuICAgICAgICAgICAgbT17eyBiYXNlOiAxLCBtZDogMyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBGaW5kIHRoZSBzaG93cyB5b3UgYm90aCB3YW50IHRvIHdhdGNoLlxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogJ2xnJywgbWQ6ICczeGwnLCBsZzogJzR4bCcgfX1cclxuICAgICAgICAgICAgbWI9e3sgYmFzZTogMSwgbWQ6IDMgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3dpcGUgYW55d2hlcmUsIGFueXRpbWUuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8Qm94IG09ezN9IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17eyBiYXNlOiAnbWQnLCBtZDogJ2xnJywgbGc6ICd4bCcgfX0+XHJcbiAgICAgICAgICAgICAge3Nlc3Npb24/LnVzZXJcclxuICAgICAgICAgICAgICAgID8gJ0dldCBiYWNrIHRvIHN3aXBpbmcnXHJcbiAgICAgICAgICAgICAgICA6ICdSZWFkeSB0byBzd2lwZT8gR2V0IHN0YXJ0ZWQgbm93Lid9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtdD17MX0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiI2U1MDkxNFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgICAgIHNpemU9e2J1dHRvblNpemV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicmVkLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZXNzaW9uID8gdG9EYXNoYm9hcmQgOiAoKSA9PiBzaWduSW4oKX1cclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17IXNlc3Npb259XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Nlc3Npb24gPyAnR28gdG8gZGFzaGJvYXJkJyA6ICdHZXQgc3RhcnRlZCd9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi4vcGFnZS1jb21wb25lbnRzL0hvbWUvSG9tZVBhZ2UnO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIDxIb21lUGFnZSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2xheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL21lZGlhLXF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJGbGV4IiwiSGVhZGluZyIsIlRleHQiLCJSZWFjdCIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwiTmF2QmFyIiwiZGF0YSIsInNlc3Npb24iLCJidXR0b25TaXplIiwiYmFzZSIsIm1kIiwibGciLCJzaWduSW5UZW1wIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJCQVNFX1VSTCIsImNhbGxiYWNrVXJsIiwicmVkaXJlY3QiLCJ1c2VyIiwibmFtZSIsIkJveCIsInVzZVJvdXRlciIsIkhvbWVQYWdlIiwicm91dGVyIiwidG9EYXNoYm9hcmQiLCJwdXNoIiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=