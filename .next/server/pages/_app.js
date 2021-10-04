(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
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

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;
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

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
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

/***/ "./node_modules/@trpc/next/dist/trpc-next.cjs.dev.js":
/*!***********************************************************!*\
  !*** ./node_modules/@trpc/next/dist/trpc-next.cjs.dev.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js");
var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
var react = __webpack_require__(/*! @trpc/react */ "@trpc/react");
var React = __webpack_require__(/*! react */ "react");
var reactQuery = __webpack_require__(/*! react-query */ "react-query");
var hydration = __webpack_require__(/*! react-query/hydration */ "react-query/hydration");
var ssrPrepass = __webpack_require__(/*! react-ssr-prepass */ "react-ssr-prepass");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var _regeneratorRuntime__default = /*#__PURE__*/_interopDefault(_regeneratorRuntime);
var React__default = /*#__PURE__*/_interopDefault(React);
var ssrPrepass__default = /*#__PURE__*/_interopDefault(ssrPrepass);

function transformQueryOrMutationCacheErrors(result) {
  var error = result.state.error;

  if (error instanceof Error && error.name === 'TRPCClientError') {
    var newError = {
      message: error.message,
      data: error.data,
      shape: error.shape
    };
    return _objectSpread(_objectSpread({}, result), {}, {
      state: _objectSpread(_objectSpread({}, result.state), {}, {
        error: newError
      })
    });
  }

  return result;
}

function withTRPC(opts) {
  var getClientConfig = opts.config;
  return function (AppOrPage) {
    var trpc = react.createReactQueryHooks();

    var WithTRPC = function WithTRPC(props) {
      var _props$pageProps;

      var _useState = React.useState(function () {
        if (props.trpc) {
          return props.trpc;
        }

        var config = getClientConfig({});
        var queryClient = new reactQuery.QueryClient(config.queryClientConfig);
        var trpcClient = trpc.createClient(config);
        return {
          queryClient: queryClient,
          trpcClient: trpcClient,
          isPrepass: false
        };
      }),
          _useState2 = _slicedToArray(_useState, 1),
          _useState2$ = _useState2[0],
          queryClient = _useState2$.queryClient,
          trpcClient = _useState2$.trpcClient,
          isPrepass = _useState2$.isPrepass;

      var hydratedState = trpc.useDehydratedState(trpcClient, (_props$pageProps = props.pageProps) === null || _props$pageProps === void 0 ? void 0 : _props$pageProps.trpcState);
      return /*#__PURE__*/React__default['default'].createElement(trpc.Provider, {
        client: trpcClient,
        queryClient: queryClient,
        isPrepass: isPrepass
      }, /*#__PURE__*/React__default['default'].createElement(reactQuery.QueryClientProvider, {
        client: queryClient
      }, /*#__PURE__*/React__default['default'].createElement(hydration.Hydrate, {
        state: hydratedState
      }, /*#__PURE__*/React__default['default'].createElement(AppOrPage, props))));
    };

    if (AppOrPage.getInitialProps || opts.ssr) {
      WithTRPC.getInitialProps = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee(appOrPageCtx) {
          var _opts$responseMeta, _opts$responseMeta2;

          var AppTree, isApp, ctx, pageProps, _originalProps$pagePr, originalProps, originalPageProps, getAppTreeProps, config, trpcClient, queryClient, trpcProp, prepassProps, dehydratedCache, dehydratedCacheWithErrors, appTreeProps, meta, _i, _Object$entries, _Object$entries$_i, key, value, _ctx$res;

          return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  AppTree = appOrPageCtx.AppTree; // Determine if we are wrapping an App component or a Page component.

                  isApp = !!appOrPageCtx.Component;
                  ctx = isApp ? appOrPageCtx.ctx : appOrPageCtx; // Run the wrapped component's getInitialProps function.

                  pageProps = {};

                  if (!AppOrPage.getInitialProps) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 7;
                  return AppOrPage.getInitialProps(appOrPageCtx);

                case 7:
                  originalProps = _context.sent;
                  originalPageProps = isApp ? (_originalProps$pagePr = originalProps.pageProps) !== null && _originalProps$pagePr !== void 0 ? _originalProps$pagePr : {} : originalProps;
                  pageProps = _objectSpread(_objectSpread({}, originalPageProps), pageProps);

                case 10:
                  getAppTreeProps = function getAppTreeProps(props) {
                    return isApp ? {
                      pageProps: props
                    } : props;
                  };

                  if (!(typeof window !== 'undefined' || !opts.ssr)) {
                    _context.next = 13;
                    break;
                  }

                  return _context.abrupt("return", getAppTreeProps(pageProps));

                case 13:
                  config = getClientConfig({
                    ctx: ctx
                  });
                  trpcClient = react.createTRPCClient(config);
                  queryClient = new reactQuery.QueryClient(config.queryClientConfig);
                  trpcProp = {
                    config: config,
                    trpcClient: trpcClient,
                    queryClient: queryClient,
                    isPrepass: true
                  };
                  prepassProps = {
                    pageProps: pageProps,
                    trpc: trpcProp
                  }; // Run the prepass step on AppTree. This will run all trpc queries on the server.
                  // multiple prepass ensures that we can do batching on the server

                case 18:

                  _context.next = 21;
                  return ssrPrepass__default['default']( /*#__PURE__*/React.createElement(AppTree, prepassProps));

                case 21:
                  if (queryClient.isFetching()) {
                    _context.next = 23;
                    break;
                  }

                  return _context.abrupt("break", 27);

                case 23:
                  _context.next = 25;
                  return new Promise(function (resolve) {
                    var unsub = queryClient.getQueryCache().subscribe(function (event) {
                      if ((event === null || event === void 0 ? void 0 : event.query.getObserversCount()) === 0) {
                        resolve();
                        unsub();
                      }
                    });
                  });

                case 25:
                  _context.next = 18;
                  break;

                case 27:
                  dehydratedCache = hydration.dehydrate(queryClient, {
                    shouldDehydrateQuery: function shouldDehydrateQuery() {
                      // makes sure errors are also dehydrated
                      return true;
                    }
                  }); // since error instances can't be serialized, let's make them into `TRPCClientErrorLike`-objects

                  dehydratedCacheWithErrors = _objectSpread(_objectSpread({}, dehydratedCache), {}, {
                    queries: dehydratedCache.queries.map(transformQueryOrMutationCacheErrors),
                    mutations: dehydratedCache.mutations.map(transformQueryOrMutationCacheErrors)
                  }); // dehydrate query client's state and add it to the props

                  pageProps.trpcState = trpcClient.runtime.transformer.serialize(dehydratedCacheWithErrors);
                  appTreeProps = getAppTreeProps(pageProps);
                  meta = (_opts$responseMeta = (_opts$responseMeta2 = opts.responseMeta) === null || _opts$responseMeta2 === void 0 ? void 0 : _opts$responseMeta2.call(opts, {
                    ctx: ctx,
                    clientErrors: [].concat(_toConsumableArray(dehydratedCache.queries), _toConsumableArray(dehydratedCache.mutations)).map(function (v) {
                      return v.state.error;
                    }).flatMap(function (err) {
                      return err instanceof Error && err.name === 'TRPCClientError' ? [err] : [];
                    })
                  })) !== null && _opts$responseMeta !== void 0 ? _opts$responseMeta : {};

                  for (_i = 0, _Object$entries = Object.entries(meta); _i < _Object$entries.length; _i++) {
                    _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];

                    if (typeof value === 'string') {
                      (_ctx$res = ctx.res) === null || _ctx$res === void 0 ? void 0 : _ctx$res.setHeader(key, value);
                    }
                  }

                  if (meta.status && ctx.res) {
                    ctx.res.statusCode = meta.status;
                  }

                  return _context.abrupt("return", appTreeProps);

                case 35:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    }

    var displayName = AppOrPage.displayName || AppOrPage.name || 'Component';
    WithTRPC.displayName = "withTRPC(".concat(displayName, ")");
    return WithTRPC;
  };
}

exports.withTRPC = withTRPC;


/***/ }),

/***/ "./node_modules/@trpc/next/dist/trpc-next.cjs.js":
/*!*******************************************************!*\
  !*** ./node_modules/@trpc/next/dist/trpc-next.cjs.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./trpc-next.cjs.dev.js */ "./node_modules/@trpc/next/dist/trpc-next.cjs.dev.js");
}


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

/***/ "./src/lib/theme.ts":
/*!**************************!*\
  !*** ./src/lib/theme.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  components: {
    Button: {
      variants: {
        'nav-button': {
          padding: 0,
          height: 'auto',
          lineHeight: 'normal',
          verticalAlign: 'baseline',
          color: 'white',
          _hover: {
            textDecoration: 'underline',
            _disabled: {
              textDecoration: 'none'
            }
          },
          _active: {
            color: '#58455E'
          }
        },
        'red-button': {
          padding: 3,
          height: 'auto',
          lineHeight: 'normal',
          verticalAlign: 'baseline',
          color: '#e50914',
          _hover: {
            textDecoration: 'underline',
            backgroundColor: '#9b080f',
            _disabled: {
              textDecoration: 'none'
            }
          },
          _active: {
            backgroundColor: '#d60c16'
          }
        }
      }
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/next */ "./node_modules/@trpc/next/dist/trpc-next.cjs.js");
/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trpc_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ "./node_modules/next-auth/react/index.js");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/theme */ "./src/lib/theme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["session"];
var _jsxFileName = "C:\\dev\\Polish\\pick-flix\\pickflix\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function MyApp(_ref) {
  let {
    Component,
    pageProps: {
      session
    }
  } = _ref,
      pageProps = _objectWithoutProperties(_ref.pageProps, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
    theme: _lib_theme__WEBPACK_IMPORTED_MODULE_3__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
      session: session,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_trpc_next__WEBPACK_IMPORTED_MODULE_0__.withTRPC)({
  config({
    ctx
  }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/trpc` : 'http://localhost:3000/api/trpc';
    return {
      url
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },

    };
  },

  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true
})(MyApp));

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

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

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/hydration":
/*!****************************************!*\
  !*** external "react-query/hydration" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/hydration");

/***/ }),

/***/ "react-ssr-prepass":
/*!************************************!*\
  !*** external "react-ssr-prepass" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-ssr-prepass");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QUFDQTtBQUNBOzs7QUFHQSxTQUFTaUIsS0FBVCxPQUE4RTtBQUFBLE1BQS9EO0FBQUVDLElBQUFBLFNBQUY7QUFBYUMsSUFBQUEsU0FBUyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFBeEIsR0FBK0Q7QUFBQSxNQUF6QkQsU0FBeUIsaUNBQWxEQSxTQUFrRDs7QUFDNUUsc0JBQ0UsOERBQUMsNERBQUQ7QUFBZ0IsU0FBSyxFQUFFbkIsK0NBQXZCO0FBQUEsMkJBQ0UsOERBQUMsNERBQUQ7QUFBaUIsYUFBTyxFQUFFb0IsT0FBMUI7QUFBQSw2QkFDRSw4REFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0FBRUQsaUVBQWVMLG9EQUFRLENBQVk7QUFDakNPLEVBQUFBLE1BQU0sQ0FBQztBQUFFQyxJQUFBQTtBQUFGLEdBQUQsRUFBVTtBQUNkO0FBQ0o7QUFDQTtBQUNBO0FBQ0ksVUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBWixHQUNQLFdBQVVGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFXLFdBRDFCLEdBRVIsZ0NBRko7QUFJQSxXQUFPO0FBQ0xILE1BQUFBO0FBQ0E7QUFDTjtBQUNBO0FBQ007O0FBTEssS0FBUDtBQU9ELEdBakJnQzs7QUFrQmpDO0FBQ0Y7QUFDQTtBQUNFSSxFQUFBQSxHQUFHLEVBQUU7QUFyQjRCLENBQVosQ0FBUixDQXNCWlYsS0F0QlksQ0FBZjs7Ozs7Ozs7Ozs7QUNqQkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQHRycGMvbmV4dC9kaXN0L3RycGMtbmV4dC5janMuZGV2LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQHRycGMvbmV4dC9kaXN0L3RycGMtbmV4dC5janMuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvbGliL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9saWIvbG9nZ2VyLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL2xpYi9wYXJzZS11cmwuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvcmVhY3QvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vc3JjL2xpYi90aGVtZS50cyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcIkB0cnBjL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5L2h5ZHJhdGlvblwiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJyZWFjdC1zc3ItcHJlcGFzc1wiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yL2V4dGVybmFsIFwicmVnZW5lcmF0b3ItcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eS5qc1wiKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuXG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSB7XG4gICAgICBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQyO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5Jyk7XG52YXIgX2FzeW5jVG9HZW5lcmF0b3IgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3InKTtcbnZhciBfc2xpY2VkVG9BcnJheSA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheScpO1xudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcbnZhciBfcmVnZW5lcmF0b3JSdW50aW1lID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3InKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJ0B0cnBjL3JlYWN0Jyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHJlYWN0UXVlcnkgPSByZXF1aXJlKCdyZWFjdC1xdWVyeScpO1xudmFyIGh5ZHJhdGlvbiA9IHJlcXVpcmUoJ3JlYWN0LXF1ZXJ5L2h5ZHJhdGlvbicpO1xudmFyIHNzclByZXBhc3MgPSByZXF1aXJlKCdyZWFjdC1zc3ItcHJlcGFzcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIF9yZWdlbmVyYXRvclJ1bnRpbWVfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0KF9yZWdlbmVyYXRvclJ1bnRpbWUpO1xudmFyIFJlYWN0X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdChSZWFjdCk7XG52YXIgc3NyUHJlcGFzc19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoc3NyUHJlcGFzcyk7XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVF1ZXJ5T3JNdXRhdGlvbkNhY2hlRXJyb3JzKHJlc3VsdCkge1xuICB2YXIgZXJyb3IgPSByZXN1bHQuc3RhdGUuZXJyb3I7XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gJ1RSUENDbGllbnRFcnJvcicpIHtcbiAgICB2YXIgbmV3RXJyb3IgPSB7XG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgICAgZGF0YTogZXJyb3IuZGF0YSxcbiAgICAgIHNoYXBlOiBlcnJvci5zaGFwZVxuICAgIH07XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcmVzdWx0KSwge30sIHtcbiAgICAgIHN0YXRlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHJlc3VsdC5zdGF0ZSksIHt9LCB7XG4gICAgICAgIGVycm9yOiBuZXdFcnJvclxuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHdpdGhUUlBDKG9wdHMpIHtcbiAgdmFyIGdldENsaWVudENvbmZpZyA9IG9wdHMuY29uZmlnO1xuICByZXR1cm4gZnVuY3Rpb24gKEFwcE9yUGFnZSkge1xuICAgIHZhciB0cnBjID0gcmVhY3QuY3JlYXRlUmVhY3RRdWVyeUhvb2tzKCk7XG5cbiAgICB2YXIgV2l0aFRSUEMgPSBmdW5jdGlvbiBXaXRoVFJQQyhwcm9wcykge1xuICAgICAgdmFyIF9wcm9wcyRwYWdlUHJvcHM7XG5cbiAgICAgIHZhciBfdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChwcm9wcy50cnBjKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzLnRycGM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29uZmlnID0gZ2V0Q2xpZW50Q29uZmlnKHt9KTtcbiAgICAgICAgdmFyIHF1ZXJ5Q2xpZW50ID0gbmV3IHJlYWN0UXVlcnkuUXVlcnlDbGllbnQoY29uZmlnLnF1ZXJ5Q2xpZW50Q29uZmlnKTtcbiAgICAgICAgdmFyIHRycGNDbGllbnQgPSB0cnBjLmNyZWF0ZUNsaWVudChjb25maWcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHF1ZXJ5Q2xpZW50OiBxdWVyeUNsaWVudCxcbiAgICAgICAgICB0cnBjQ2xpZW50OiB0cnBjQ2xpZW50LFxuICAgICAgICAgIGlzUHJlcGFzczogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDEpLFxuICAgICAgICAgIF91c2VTdGF0ZTIkID0gX3VzZVN0YXRlMlswXSxcbiAgICAgICAgICBxdWVyeUNsaWVudCA9IF91c2VTdGF0ZTIkLnF1ZXJ5Q2xpZW50LFxuICAgICAgICAgIHRycGNDbGllbnQgPSBfdXNlU3RhdGUyJC50cnBjQ2xpZW50LFxuICAgICAgICAgIGlzUHJlcGFzcyA9IF91c2VTdGF0ZTIkLmlzUHJlcGFzcztcblxuICAgICAgdmFyIGh5ZHJhdGVkU3RhdGUgPSB0cnBjLnVzZURlaHlkcmF0ZWRTdGF0ZSh0cnBjQ2xpZW50LCAoX3Byb3BzJHBhZ2VQcm9wcyA9IHByb3BzLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgX3Byb3BzJHBhZ2VQcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Byb3BzJHBhZ2VQcm9wcy50cnBjU3RhdGUpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQodHJwYy5Qcm92aWRlciwge1xuICAgICAgICBjbGllbnQ6IHRycGNDbGllbnQsXG4gICAgICAgIHF1ZXJ5Q2xpZW50OiBxdWVyeUNsaWVudCxcbiAgICAgICAgaXNQcmVwYXNzOiBpc1ByZXBhc3NcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQocmVhY3RRdWVyeS5RdWVyeUNsaWVudFByb3ZpZGVyLCB7XG4gICAgICAgIGNsaWVudDogcXVlcnlDbGllbnRcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoaHlkcmF0aW9uLkh5ZHJhdGUsIHtcbiAgICAgICAgc3RhdGU6IGh5ZHJhdGVkU3RhdGVcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoQXBwT3JQYWdlLCBwcm9wcykpKSk7XG4gICAgfTtcblxuICAgIGlmIChBcHBPclBhZ2UuZ2V0SW5pdGlhbFByb3BzIHx8IG9wdHMuc3NyKSB7XG4gICAgICBXaXRoVFJQQy5nZXRJbml0aWFsUHJvcHMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3JlZiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZV9fZGVmYXVsdFsnZGVmYXVsdCddLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShhcHBPclBhZ2VDdHgpIHtcbiAgICAgICAgICB2YXIgX29wdHMkcmVzcG9uc2VNZXRhLCBfb3B0cyRyZXNwb25zZU1ldGEyO1xuXG4gICAgICAgICAgdmFyIEFwcFRyZWUsIGlzQXBwLCBjdHgsIHBhZ2VQcm9wcywgX29yaWdpbmFsUHJvcHMkcGFnZVByLCBvcmlnaW5hbFByb3BzLCBvcmlnaW5hbFBhZ2VQcm9wcywgZ2V0QXBwVHJlZVByb3BzLCBjb25maWcsIHRycGNDbGllbnQsIHF1ZXJ5Q2xpZW50LCB0cnBjUHJvcCwgcHJlcGFzc1Byb3BzLCBkZWh5ZHJhdGVkQ2FjaGUsIGRlaHlkcmF0ZWRDYWNoZVdpdGhFcnJvcnMsIGFwcFRyZWVQcm9wcywgbWV0YSwgX2ksIF9PYmplY3QkZW50cmllcywgX09iamVjdCRlbnRyaWVzJF9pLCBrZXksIHZhbHVlLCBfY3R4JHJlcztcblxuICAgICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lX19kZWZhdWx0WydkZWZhdWx0J10ud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIEFwcFRyZWUgPSBhcHBPclBhZ2VDdHguQXBwVHJlZTsgLy8gRGV0ZXJtaW5lIGlmIHdlIGFyZSB3cmFwcGluZyBhbiBBcHAgY29tcG9uZW50IG9yIGEgUGFnZSBjb21wb25lbnQuXG5cbiAgICAgICAgICAgICAgICAgIGlzQXBwID0gISFhcHBPclBhZ2VDdHguQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgY3R4ID0gaXNBcHAgPyBhcHBPclBhZ2VDdHguY3R4IDogYXBwT3JQYWdlQ3R4OyAvLyBSdW4gdGhlIHdyYXBwZWQgY29tcG9uZW50J3MgZ2V0SW5pdGlhbFByb3BzIGZ1bmN0aW9uLlxuXG4gICAgICAgICAgICAgICAgICBwYWdlUHJvcHMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCFBcHBPclBhZ2UuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIEFwcE9yUGFnZS5nZXRJbml0aWFsUHJvcHMoYXBwT3JQYWdlQ3R4KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgIG9yaWdpbmFsUHJvcHMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgICAgb3JpZ2luYWxQYWdlUHJvcHMgPSBpc0FwcCA/IChfb3JpZ2luYWxQcm9wcyRwYWdlUHIgPSBvcmlnaW5hbFByb3BzLnBhZ2VQcm9wcykgIT09IG51bGwgJiYgX29yaWdpbmFsUHJvcHMkcGFnZVByICE9PSB2b2lkIDAgPyBfb3JpZ2luYWxQcm9wcyRwYWdlUHIgOiB7fSA6IG9yaWdpbmFsUHJvcHM7XG4gICAgICAgICAgICAgICAgICBwYWdlUHJvcHMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG9yaWdpbmFsUGFnZVByb3BzKSwgcGFnZVByb3BzKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICBnZXRBcHBUcmVlUHJvcHMgPSBmdW5jdGlvbiBnZXRBcHBUcmVlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzQXBwID8ge1xuICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfSA6IHByb3BzO1xuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgfHwgIW9wdHMuc3NyKSkge1xuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGdldEFwcFRyZWVQcm9wcyhwYWdlUHJvcHMpKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICBjb25maWcgPSBnZXRDbGllbnRDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICBjdHg6IGN0eFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB0cnBjQ2xpZW50ID0gcmVhY3QuY3JlYXRlVFJQQ0NsaWVudChjb25maWcpO1xuICAgICAgICAgICAgICAgICAgcXVlcnlDbGllbnQgPSBuZXcgcmVhY3RRdWVyeS5RdWVyeUNsaWVudChjb25maWcucXVlcnlDbGllbnRDb25maWcpO1xuICAgICAgICAgICAgICAgICAgdHJwY1Byb3AgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgICAgICAgICB0cnBjQ2xpZW50OiB0cnBjQ2xpZW50LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeUNsaWVudDogcXVlcnlDbGllbnQsXG4gICAgICAgICAgICAgICAgICAgIGlzUHJlcGFzczogdHJ1ZVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIHByZXBhc3NQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZVByb3BzOiBwYWdlUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgIHRycGM6IHRycGNQcm9wXG4gICAgICAgICAgICAgICAgICB9OyAvLyBSdW4gdGhlIHByZXBhc3Mgc3RlcCBvbiBBcHBUcmVlLiBUaGlzIHdpbGwgcnVuIGFsbCB0cnBjIHF1ZXJpZXMgb24gdGhlIHNlcnZlci5cbiAgICAgICAgICAgICAgICAgIC8vIG11bHRpcGxlIHByZXBhc3MgZW5zdXJlcyB0aGF0IHdlIGNhbiBkbyBiYXRjaGluZyBvbiB0aGUgc2VydmVyXG5cbiAgICAgICAgICAgICAgICBjYXNlIDE4OlxuXG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjE7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc3NyUHJlcGFzc19fZGVmYXVsdFsnZGVmYXVsdCddKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBcHBUcmVlLCBwcmVwYXNzUHJvcHMpKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICAgICAgICBpZiAocXVlcnlDbGllbnQuaXNGZXRjaGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJicmVha1wiLCAyNyk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI1O1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1bnN1YiA9IHF1ZXJ5Q2xpZW50LmdldFF1ZXJ5Q2FjaGUoKS5zdWJzY3JpYmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKChldmVudCA9PT0gbnVsbCB8fCBldmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXZlbnQucXVlcnkuZ2V0T2JzZXJ2ZXJzQ291bnQoKSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc3ViKCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxODtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgICAgICAgIGRlaHlkcmF0ZWRDYWNoZSA9IGh5ZHJhdGlvbi5kZWh5ZHJhdGUocXVlcnlDbGllbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkRGVoeWRyYXRlUXVlcnk6IGZ1bmN0aW9uIHNob3VsZERlaHlkcmF0ZVF1ZXJ5KCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2VzIHN1cmUgZXJyb3JzIGFyZSBhbHNvIGRlaHlkcmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7IC8vIHNpbmNlIGVycm9yIGluc3RhbmNlcyBjYW4ndCBiZSBzZXJpYWxpemVkLCBsZXQncyBtYWtlIHRoZW0gaW50byBgVFJQQ0NsaWVudEVycm9yTGlrZWAtb2JqZWN0c1xuXG4gICAgICAgICAgICAgICAgICBkZWh5ZHJhdGVkQ2FjaGVXaXRoRXJyb3JzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkZWh5ZHJhdGVkQ2FjaGUpLCB7fSwge1xuICAgICAgICAgICAgICAgICAgICBxdWVyaWVzOiBkZWh5ZHJhdGVkQ2FjaGUucXVlcmllcy5tYXAodHJhbnNmb3JtUXVlcnlPck11dGF0aW9uQ2FjaGVFcnJvcnMpLFxuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnM6IGRlaHlkcmF0ZWRDYWNoZS5tdXRhdGlvbnMubWFwKHRyYW5zZm9ybVF1ZXJ5T3JNdXRhdGlvbkNhY2hlRXJyb3JzKVxuICAgICAgICAgICAgICAgICAgfSk7IC8vIGRlaHlkcmF0ZSBxdWVyeSBjbGllbnQncyBzdGF0ZSBhbmQgYWRkIGl0IHRvIHRoZSBwcm9wc1xuXG4gICAgICAgICAgICAgICAgICBwYWdlUHJvcHMudHJwY1N0YXRlID0gdHJwY0NsaWVudC5ydW50aW1lLnRyYW5zZm9ybWVyLnNlcmlhbGl6ZShkZWh5ZHJhdGVkQ2FjaGVXaXRoRXJyb3JzKTtcbiAgICAgICAgICAgICAgICAgIGFwcFRyZWVQcm9wcyA9IGdldEFwcFRyZWVQcm9wcyhwYWdlUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgbWV0YSA9IChfb3B0cyRyZXNwb25zZU1ldGEgPSAoX29wdHMkcmVzcG9uc2VNZXRhMiA9IG9wdHMucmVzcG9uc2VNZXRhKSA9PT0gbnVsbCB8fCBfb3B0cyRyZXNwb25zZU1ldGEyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0cyRyZXNwb25zZU1ldGEyLmNhbGwob3B0cywge1xuICAgICAgICAgICAgICAgICAgICBjdHg6IGN0eCxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50RXJyb3JzOiBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGRlaHlkcmF0ZWRDYWNoZS5xdWVyaWVzKSwgX3RvQ29uc3VtYWJsZUFycmF5KGRlaHlkcmF0ZWRDYWNoZS5tdXRhdGlvbnMpKS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdi5zdGF0ZS5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfSkuZmxhdE1hcChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVyciBpbnN0YW5jZW9mIEVycm9yICYmIGVyci5uYW1lID09PSAnVFJQQ0NsaWVudEVycm9yJyA/IFtlcnJdIDogW107XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9KSkgIT09IG51bGwgJiYgX29wdHMkcmVzcG9uc2VNZXRhICE9PSB2b2lkIDAgPyBfb3B0cyRyZXNwb25zZU1ldGEgOiB7fTtcblxuICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIF9PYmplY3QkZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKG1ldGEpOyBfaSA8IF9PYmplY3QkZW50cmllcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgX09iamVjdCRlbnRyaWVzJF9pID0gX3NsaWNlZFRvQXJyYXkoX09iamVjdCRlbnRyaWVzW19pXSwgMiksIGtleSA9IF9PYmplY3QkZW50cmllcyRfaVswXSwgdmFsdWUgPSBfT2JqZWN0JGVudHJpZXMkX2lbMV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAoX2N0eCRyZXMgPSBjdHgucmVzKSA9PT0gbnVsbCB8fCBfY3R4JHJlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2N0eCRyZXMuc2V0SGVhZGVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmIChtZXRhLnN0YXR1cyAmJiBjdHgucmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5yZXMuc3RhdHVzQ29kZSA9IG1ldGEuc3RhdHVzO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFwcFRyZWVQcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM1OlxuICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfY2FsbGVlKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gpIHtcbiAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSgpO1xuICAgIH1cblxuICAgIHZhciBkaXNwbGF5TmFtZSA9IEFwcE9yUGFnZS5kaXNwbGF5TmFtZSB8fCBBcHBPclBhZ2UubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICBXaXRoVFJQQy5kaXNwbGF5TmFtZSA9IFwid2l0aFRSUEMoXCIuY29uY2F0KGRpc3BsYXlOYW1lLCBcIilcIik7XG4gICAgcmV0dXJuIFdpdGhUUlBDO1xuICB9O1xufVxuXG5leHBvcnRzLndpdGhUUlBDID0gd2l0aFRSUEM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi90cnBjLW5leHQuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3RycGMtbmV4dC5janMuZGV2LmpzXCIpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZldGNoRGF0YSA9IGZldGNoRGF0YTtcbmV4cG9ydHMuYXBpQmFzZVVybCA9IGFwaUJhc2VVcmw7XG5leHBvcnRzLm5vdyA9IG5vdztcbmV4cG9ydHMuQnJvYWRjYXN0Q2hhbm5lbCA9IEJyb2FkY2FzdENoYW5uZWw7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShwYXRoLCBfX05FWFRBVVRILCBsb2dnZXIsIHtcbiAgY3R4LFxuICByZXEgPSBjdHggPT09IG51bGwgfHwgY3R4ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdHgucmVxXG59ID0ge30pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvcHRpb25zID0gcmVxICE9PSBudWxsICYmIHJlcSAhPT0gdm9pZCAwICYmIHJlcS5oZWFkZXJzLmNvb2tpZSA/IHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgY29va2llOiByZXEuaGVhZGVycy5jb29raWVcbiAgICAgIH1cbiAgICB9IDoge307XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YXBpQmFzZVVybChfX05FWFRBVVRIKX0vJHtwYXRofWAsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGlmICghcmVzLm9rKSB0aHJvdyBkYXRhO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPiAwID8gZGF0YSA6IG51bGw7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yKFwiQ0xJRU5UX0ZFVENIX0VSUk9SXCIsIHtcbiAgICAgIGVycm9yLFxuICAgICAgcGF0aCxcbiAgICAgIC4uLihyZXEgPyB7XG4gICAgICAgIGhlYWRlcjogcmVxLmhlYWRlcnNcbiAgICAgIH0gOiB7fSlcbiAgICB9KTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcGlCYXNlVXJsKF9fTkVYVEFVVEgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gYCR7X19ORVhUQVVUSC5iYXNlVXJsU2VydmVyfSR7X19ORVhUQVVUSC5iYXNlUGF0aFNlcnZlcn1gO1xuICB9XG5cbiAgcmV0dXJuIF9fTkVYVEFVVEguYmFzZVBhdGg7XG59XG5cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xufVxuXG5mdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKG5hbWUgPSBcIm5leHRhdXRoLm1lc3NhZ2VcIikge1xuICByZXR1cm4ge1xuICAgIHJlY2VpdmUob25SZWNlaXZlKSB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ICE9PSBuYW1lKSByZXR1cm47XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50Lm5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKChtZXNzYWdlID09PSBudWxsIHx8IG1lc3NhZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1lc3NhZ2UuZXZlbnQpICE9PSBcInNlc3Npb25cIiB8fCAhKG1lc3NhZ2UgIT09IG51bGwgJiYgbWVzc2FnZSAhPT0gdm9pZCAwICYmIG1lc3NhZ2UuZGF0YSkpIHJldHVybjtcbiAgICAgICAgb25SZWNlaXZlKG1lc3NhZ2UpO1xuICAgICAgfTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIGhhbmRsZXIpO1xuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgcG9zdChtZXNzYWdlKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoeyAuLi5tZXNzYWdlLFxuICAgICAgICB0aW1lc3RhbXA6IG5vdygpXG4gICAgICB9KSk7XG4gICAgfVxuXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNldExvZ2dlciA9IHNldExvZ2dlcjtcbmV4cG9ydHMucHJveHlMb2dnZXIgPSBwcm94eUxvZ2dlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9lcnJvcnMgPSByZXF1aXJlKFwiLi4vc2VydmVyL2Vycm9yc1wiKTtcblxuZnVuY3Rpb24gZm9ybWF0RXJyb3Iobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEVycm9yICYmICEobyBpbnN0YW5jZW9mIF9lcnJvcnMuVW5rbm93bkVycm9yKSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBvLm1lc3NhZ2UsXG4gICAgICBzdGFjazogby5zdGFjayxcbiAgICAgIG5hbWU6IG8ubmFtZVxuICAgIH07XG4gIH1cblxuICBpZiAobyAhPT0gbnVsbCAmJiBvICE9PSB2b2lkIDAgJiYgby5lcnJvcikge1xuICAgIHZhciBfbyRtZXNzYWdlO1xuXG4gICAgby5lcnJvciA9IGZvcm1hdEVycm9yKG8uZXJyb3IpO1xuICAgIG8ubWVzc2FnZSA9IChfbyRtZXNzYWdlID0gby5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfbyRtZXNzYWdlICE9PSB2b2lkIDAgPyBfbyRtZXNzYWdlIDogby5lcnJvci5tZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuIG87XG59XG5cbmNvbnN0IF9sb2dnZXIgPSB7XG4gIGVycm9yKGNvZGUsIG1ldGFkYXRhKSB7XG4gICAgbWV0YWRhdGEgPSBmb3JtYXRFcnJvcihtZXRhZGF0YSk7XG4gICAgY29uc29sZS5lcnJvcihgW25leHQtYXV0aF1bZXJyb3JdWyR7Y29kZX1dYCwgYFxcbmh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9lcnJvcnMjJHtjb2RlLnRvTG93ZXJDYXNlKCl9YCwgbWV0YWRhdGEubWVzc2FnZSwgbWV0YWRhdGEpO1xuICB9LFxuXG4gIHdhcm4oY29kZSkge1xuICAgIGNvbnNvbGUud2FybihgW25leHQtYXV0aF1bd2Fybl1bJHtjb2RlfV1gLCBgXFxuaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3dhcm5pbmdzIyR7Y29kZS50b0xvd2VyQ2FzZSgpfWApO1xuICB9LFxuXG4gIGRlYnVnKGNvZGUsIG1ldGFkYXRhKSB7XG4gICAgdmFyIF9wcm9jZXNzLCBfcHJvY2VzcyRlbnY7XG5cbiAgICBpZiAoISgoX3Byb2Nlc3MgPSBwcm9jZXNzKSAhPT0gbnVsbCAmJiBfcHJvY2VzcyAhPT0gdm9pZCAwICYmIChfcHJvY2VzcyRlbnYgPSBfcHJvY2Vzcy5lbnYpICE9PSBudWxsICYmIF9wcm9jZXNzJGVudiAhPT0gdm9pZCAwICYmIF9wcm9jZXNzJGVudi5fTkVYVEFVVEhfREVCVUcpKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coYFtuZXh0LWF1dGhdW2RlYnVnXVske2NvZGV9XWAsIG1ldGFkYXRhKTtcbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBzZXRMb2dnZXIobmV3TG9nZ2VyID0ge30pIHtcbiAgaWYgKG5ld0xvZ2dlci5lcnJvcikgX2xvZ2dlci5lcnJvciA9IG5ld0xvZ2dlci5lcnJvcjtcbiAgaWYgKG5ld0xvZ2dlci53YXJuKSBfbG9nZ2VyLndhcm4gPSBuZXdMb2dnZXIud2FybjtcbiAgaWYgKG5ld0xvZ2dlci5kZWJ1ZykgX2xvZ2dlci5kZWJ1ZyA9IG5ld0xvZ2dlci5kZWJ1Zztcbn1cblxudmFyIF9kZWZhdWx0ID0gX2xvZ2dlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG5mdW5jdGlvbiBwcm94eUxvZ2dlcihsb2dnZXIgPSBfbG9nZ2VyLCBiYXNlUGF0aCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaWVudExvZ2dlciA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBsZXZlbCBpbiBsb2dnZXIpIHtcbiAgICAgIGNsaWVudExvZ2dlcltsZXZlbF0gPSAoY29kZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgX2xvZ2dlcltsZXZlbF0oY29kZSwgbWV0YWRhdGEpO1xuXG4gICAgICAgIGlmIChsZXZlbCA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgbWV0YWRhdGEgPSBmb3JtYXRFcnJvcihtZXRhZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRhZGF0YS5jbGllbnQgPSB0cnVlO1xuICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlUGF0aH0vX2xvZ2A7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICBjb2RlLFxuICAgICAgICAgIC4uLm1ldGFkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VuZEJlYWNvbikge1xuICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBrZWVwYWxpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBjbGllbnRMb2dnZXI7XG4gIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICByZXR1cm4gX2xvZ2dlcjtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcGFyc2VVcmw7XG5cbmZ1bmN0aW9uIHBhcnNlVXJsKHVybCkge1xuICBjb25zdCBkZWZhdWx0SG9zdCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG4gIGNvbnN0IGRlZmF1bHRQYXRoID0gXCIvYXBpL2F1dGhcIjtcblxuICBpZiAoIXVybCkge1xuICAgIHVybCA9IGAke2RlZmF1bHRIb3N0fSR7ZGVmYXVsdFBhdGh9YDtcbiAgfVxuXG4gIGNvbnN0IHByb3RvY29sID0gdXJsLnN0YXJ0c1dpdGgoXCJodHRwOlwiKSA/IFwiaHR0cFwiIDogXCJodHRwc1wiO1xuICB1cmwgPSB1cmwucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC8vLCBcIlwiKS5yZXBsYWNlKC9cXC8kLywgXCJcIik7XG4gIGNvbnN0IFtfaG9zdCwgLi4uX3BhdGhdID0gdXJsLnNwbGl0KFwiL1wiKTtcbiAgY29uc3QgYmFzZVVybCA9IF9ob3N0ID8gYCR7cHJvdG9jb2x9Oi8vJHtfaG9zdH1gIDogZGVmYXVsdEhvc3Q7XG4gIGNvbnN0IGJhc2VQYXRoID0gX3BhdGgubGVuZ3RoID4gMCA/IGAvJHtfcGF0aC5qb2luKFwiL1wiKX1gIDogZGVmYXVsdFBhdGg7XG4gIHJldHVybiB7XG4gICAgYmFzZVVybCxcbiAgICBiYXNlUGF0aFxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge1xuICB1c2VTZXNzaW9uOiB0cnVlLFxuICBnZXRTZXNzaW9uOiB0cnVlLFxuICBnZXRDc3JmVG9rZW46IHRydWUsXG4gIGdldFByb3ZpZGVyczogdHJ1ZSxcbiAgc2lnbkluOiB0cnVlLFxuICBzaWduT3V0OiB0cnVlLFxuICBTZXNzaW9uUHJvdmlkZXI6IHRydWVcbn07XG5leHBvcnRzLnVzZVNlc3Npb24gPSB1c2VTZXNzaW9uO1xuZXhwb3J0cy5nZXRTZXNzaW9uID0gZ2V0U2Vzc2lvbjtcbmV4cG9ydHMuZ2V0Q3NyZlRva2VuID0gZ2V0Q3NyZlRva2VuO1xuZXhwb3J0cy5nZXRQcm92aWRlcnMgPSBnZXRQcm92aWRlcnM7XG5leHBvcnRzLnNpZ25JbiA9IHNpZ25JbjtcbmV4cG9ydHMuc2lnbk91dCA9IHNpZ25PdXQ7XG5leHBvcnRzLlNlc3Npb25Qcm92aWRlciA9IFNlc3Npb25Qcm92aWRlcjtcblxudmFyIF9yZWdlbmVyYXRvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBfYXN5bmNUb0dlbmVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2xvZ2dlcjIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbGliL2xvZ2dlclwiKSk7XG5cbnZhciBfcGFyc2VVcmwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9saWIvcGFyc2UtdXJsXCIpKTtcblxudmFyIF9jbGllbnQgPSByZXF1aXJlKFwiLi4vbGliL2NsaWVudFwiKTtcblxudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbk9iamVjdC5rZXlzKF90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3R5cGVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX3R5cGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX3Byb2Nlc3MkZW52JE5FWFRBVVRILCBfcmVmLCBfcHJvY2VzcyRlbnYkTkVYVEFVVEgyLCBfcHJvY2VzcyRlbnYkTkVYVEFVVEgzO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHsgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyB9IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgX19ORVhUQVVUSCA9IHtcbiAgYmFzZVVybDogKDAsIF9wYXJzZVVybC5kZWZhdWx0KSgoX3Byb2Nlc3MkZW52JE5FWFRBVVRIID0gcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMKSAhPT0gbnVsbCAmJiBfcHJvY2VzcyRlbnYkTkVYVEFVVEggIT09IHZvaWQgMCA/IF9wcm9jZXNzJGVudiRORVhUQVVUSCA6IHByb2Nlc3MuZW52LlZFUkNFTF9VUkwpLmJhc2VVcmwsXG4gIGJhc2VQYXRoOiAoMCwgX3BhcnNlVXJsLmRlZmF1bHQpKHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCkuYmFzZVBhdGgsXG4gIGJhc2VVcmxTZXJ2ZXI6ICgwLCBfcGFyc2VVcmwuZGVmYXVsdCkoKF9yZWYgPSAoX3Byb2Nlc3MkZW52JE5FWFRBVVRIMiA9IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTF9JTlRFUk5BTCkgIT09IG51bGwgJiYgX3Byb2Nlc3MkZW52JE5FWFRBVVRIMiAhPT0gdm9pZCAwID8gX3Byb2Nlc3MkZW52JE5FWFRBVVRIMiA6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IHByb2Nlc3MuZW52LlZFUkNFTF9VUkwpLmJhc2VVcmwsXG4gIGJhc2VQYXRoU2VydmVyOiAoMCwgX3BhcnNlVXJsLmRlZmF1bHQpKChfcHJvY2VzcyRlbnYkTkVYVEFVVEgzID0gcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMX0lOVEVSTkFMKSAhPT0gbnVsbCAmJiBfcHJvY2VzcyRlbnYkTkVYVEFVVEgzICE9PSB2b2lkIDAgPyBfcHJvY2VzcyRlbnYkTkVYVEFVVEgzIDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMKS5iYXNlUGF0aCxcbiAgX2xhc3RTeW5jOiAwLFxuICBfc2Vzc2lvbjogdW5kZWZpbmVkLFxuICBfZ2V0U2Vzc2lvbjogZnVuY3Rpb24gX2dldFNlc3Npb24oKSB7fVxufTtcbnZhciBicm9hZGNhc3QgPSAoMCwgX2NsaWVudC5Ccm9hZGNhc3RDaGFubmVsKSgpO1xudmFyIGxvZ2dlciA9ICgwLCBfbG9nZ2VyMi5wcm94eUxvZ2dlcikoX2xvZ2dlcjIuZGVmYXVsdCwgX19ORVhUQVVUSC5iYXNlUGF0aCk7XG52YXIgU2Vzc2lvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbmZ1bmN0aW9uIHVzZVNlc3Npb24ob3B0aW9ucykge1xuICB2YXIgdmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcblxuICBpZiAoIXZhbHVlICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIltuZXh0LWF1dGhdOiBgdXNlU2Vzc2lvbmAgbXVzdCBiZSB3cmFwcGVkIGluIGEgPFNlc3Npb25Qcm92aWRlciAvPlwiKTtcbiAgfVxuXG4gIHZhciBfcmVmMiA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9LFxuICAgICAgcmVxdWlyZWQgPSBfcmVmMi5yZXF1aXJlZCxcbiAgICAgIG9uVW5hdXRoZW50aWNhdGVkID0gX3JlZjIub25VbmF1dGhlbnRpY2F0ZWQ7XG5cbiAgdmFyIHJlcXVpcmVkQW5kTm90TG9hZGluZyA9IHJlcXVpcmVkICYmIHZhbHVlLnN0YXR1cyA9PT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIjtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocmVxdWlyZWRBbmROb3RMb2FkaW5nKSB7XG4gICAgICB2YXIgdXJsID0gXCIvYXBpL2F1dGgvc2lnbmluP1wiLmNvbmNhdChuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgZXJyb3I6IFwiU2Vzc2lvblJlcXVpcmVkXCIsXG4gICAgICAgIGNhbGxiYWNrVXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgICAgfSkpO1xuICAgICAgaWYgKG9uVW5hdXRoZW50aWNhdGVkKSBvblVuYXV0aGVudGljYXRlZCgpO2Vsc2Ugd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsKTtcbiAgICB9XG4gIH0sIFtyZXF1aXJlZEFuZE5vdExvYWRpbmcsIG9uVW5hdXRoZW50aWNhdGVkXSk7XG5cbiAgaWYgKHJlcXVpcmVkQW5kTm90TG9hZGluZykge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB2YWx1ZS5kYXRhLFxuICAgICAgc3RhdHVzOiBcImxvYWRpbmdcIlxuICAgIH07XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldFNlc3Npb24oX3gpIHtcbiAgcmV0dXJuIF9nZXRTZXNzaW9uMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZ2V0U2Vzc2lvbjIoKSB7XG4gIF9nZXRTZXNzaW9uMiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjIuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlMihwYXJhbXMpIHtcbiAgICB2YXIgX3BhcmFtcyRicm9hZGNhc3Q7XG5cbiAgICB2YXIgc2Vzc2lvbjtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jbGllbnQuZmV0Y2hEYXRhKShcInNlc3Npb25cIiwgX19ORVhUQVVUSCwgbG9nZ2VyLCBwYXJhbXMpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgc2Vzc2lvbiA9IF9jb250ZXh0Mi5zZW50O1xuXG4gICAgICAgICAgICBpZiAoKF9wYXJhbXMkYnJvYWRjYXN0ID0gcGFyYW1zID09PSBudWxsIHx8IHBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyYW1zLmJyb2FkY2FzdCkgIT09IG51bGwgJiYgX3BhcmFtcyRicm9hZGNhc3QgIT09IHZvaWQgMCA/IF9wYXJhbXMkYnJvYWRjYXN0IDogdHJ1ZSkge1xuICAgICAgICAgICAgICBicm9hZGNhc3QucG9zdCh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IFwic2Vzc2lvblwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiZ2V0U2Vzc2lvblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgc2Vzc2lvbik7XG5cbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMik7XG4gIH0pKTtcbiAgcmV0dXJuIF9nZXRTZXNzaW9uMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBnZXRDc3JmVG9rZW4oX3gyKSB7XG4gIHJldHVybiBfZ2V0Q3NyZlRva2VuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRDc3JmVG9rZW4oKSB7XG4gIF9nZXRDc3JmVG9rZW4gPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTMocGFyYW1zKSB7XG4gICAgdmFyIHJlc3BvbnNlO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWUzJChfY29udGV4dDMpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQzLnByZXYgPSBfY29udGV4dDMubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0My5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NsaWVudC5mZXRjaERhdGEpKFwiY3NyZlwiLCBfX05FWFRBVVRILCBsb2dnZXIsIHBhcmFtcyk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXNwb25zZSA9IF9jb250ZXh0My5zZW50O1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVzcG9uc2UgPT09IG51bGwgfHwgcmVzcG9uc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc3BvbnNlLmNzcmZUb2tlbik7XG5cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0My5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlMyk7XG4gIH0pKTtcbiAgcmV0dXJuIF9nZXRDc3JmVG9rZW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvdmlkZXJzKCkge1xuICByZXR1cm4gX2dldFByb3ZpZGVycy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdmlkZXJzKCkge1xuICBfZ2V0UHJvdmlkZXJzID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU0KCkge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWU0JChfY29udGV4dDQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ0LnByZXYgPSBfY29udGV4dDQubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9jb250ZXh0NC5uZXh0ID0gMjtcbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NsaWVudC5mZXRjaERhdGEpKFwicHJvdmlkZXJzXCIsIF9fTkVYVEFVVEgsIGxvZ2dlcik7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ0LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dDQuc2VudCk7XG5cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNCk7XG4gIH0pKTtcbiAgcmV0dXJuIF9nZXRQcm92aWRlcnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2lnbkluKF94MywgX3g0LCBfeDUpIHtcbiAgcmV0dXJuIF9zaWduSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX3NpZ25JbigpIHtcbiAgX3NpZ25JbiA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjIuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlNShwcm92aWRlciwgb3B0aW9ucywgYXV0aG9yaXphdGlvblBhcmFtcykge1xuICAgIHZhciBfcmVmNSwgX3JlZjUkY2FsbGJhY2tVcmwsIGNhbGxiYWNrVXJsLCBfcmVmNSRyZWRpcmVjdCwgcmVkaXJlY3QsIGJhc2VVcmwsIHByb3ZpZGVycywgaXNDcmVkZW50aWFscywgaXNFbWFpbCwgaXNTdXBwb3J0aW5nUmV0dXJuLCBzaWduSW5VcmwsIF9zaWduSW5VcmwsIHJlcywgZGF0YSwgX2RhdGEkdXJsLCB1cmwsIGVycm9yO1xuXG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTUkKF9jb250ZXh0NSkge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDUucHJldiA9IF9jb250ZXh0NS5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX3JlZjUgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSwgX3JlZjUkY2FsbGJhY2tVcmwgPSBfcmVmNS5jYWxsYmFja1VybCwgY2FsbGJhY2tVcmwgPSBfcmVmNSRjYWxsYmFja1VybCA9PT0gdm9pZCAwID8gd2luZG93LmxvY2F0aW9uLmhyZWYgOiBfcmVmNSRjYWxsYmFja1VybCwgX3JlZjUkcmVkaXJlY3QgPSBfcmVmNS5yZWRpcmVjdCwgcmVkaXJlY3QgPSBfcmVmNSRyZWRpcmVjdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWY1JHJlZGlyZWN0O1xuICAgICAgICAgICAgYmFzZVVybCA9ICgwLCBfY2xpZW50LmFwaUJhc2VVcmwpKF9fTkVYVEFVVEgpO1xuICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA0O1xuICAgICAgICAgICAgcmV0dXJuIGdldFByb3ZpZGVycygpO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcHJvdmlkZXJzID0gX2NvbnRleHQ1LnNlbnQ7XG5cbiAgICAgICAgICAgIGlmIChwcm92aWRlcnMpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA4O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJcIi5jb25jYXQoYmFzZVVybCwgXCIvZXJyb3JcIikpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICBpZiAoISghcHJvdmlkZXIgfHwgIShwcm92aWRlciBpbiBwcm92aWRlcnMpKSkge1xuICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDExO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJcIi5jb25jYXQoYmFzZVVybCwgXCIvc2lnbmluP1wiKS5jb25jYXQobmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgIGNhbGxiYWNrVXJsOiBjYWxsYmFja1VybFxuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIGlzQ3JlZGVudGlhbHMgPSBwcm92aWRlcnNbcHJvdmlkZXJdLnR5cGUgPT09IFwiY3JlZGVudGlhbHNcIjtcbiAgICAgICAgICAgIGlzRW1haWwgPSBwcm92aWRlcnNbcHJvdmlkZXJdLnR5cGUgPT09IFwiZW1haWxcIjtcbiAgICAgICAgICAgIGlzU3VwcG9ydGluZ1JldHVybiA9IGlzQ3JlZGVudGlhbHMgfHwgaXNFbWFpbDtcbiAgICAgICAgICAgIHNpZ25JblVybCA9IFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiL1wiKS5jb25jYXQoaXNDcmVkZW50aWFscyA/IFwiY2FsbGJhY2tcIiA6IFwic2lnbmluXCIsIFwiL1wiKS5jb25jYXQocHJvdmlkZXIpO1xuICAgICAgICAgICAgX3NpZ25JblVybCA9IFwiXCIuY29uY2F0KHNpZ25JblVybCwgXCI/XCIpLmNvbmNhdChuZXcgVVJMU2VhcmNoUGFyYW1zKGF1dGhvcml6YXRpb25QYXJhbXMpKTtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MCA9IGZldGNoO1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQxID0gX3NpZ25JblVybDtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MiA9IHtcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MyA9IFVSTFNlYXJjaFBhcmFtcztcbiAgICAgICAgICAgIF9jb250ZXh0NS50NCA9IF9vYmplY3RTcHJlYWQ7XG4gICAgICAgICAgICBfY29udGV4dDUudDUgPSBfb2JqZWN0U3ByZWFkKHt9LCBvcHRpb25zKTtcbiAgICAgICAgICAgIF9jb250ZXh0NS50NiA9IHt9O1xuICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAyNTtcbiAgICAgICAgICAgIHJldHVybiBnZXRDc3JmVG9rZW4oKTtcblxuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICBfY29udGV4dDUudDcgPSBfY29udGV4dDUuc2VudDtcbiAgICAgICAgICAgIF9jb250ZXh0NS50OCA9IGNhbGxiYWNrVXJsO1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQ5ID0ge1xuICAgICAgICAgICAgICBjc3JmVG9rZW46IF9jb250ZXh0NS50NyxcbiAgICAgICAgICAgICAgY2FsbGJhY2tVcmw6IF9jb250ZXh0NS50OCxcbiAgICAgICAgICAgICAganNvbjogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MTAgPSAoMCwgX2NvbnRleHQ1LnQ0KShfY29udGV4dDUudDUsIF9jb250ZXh0NS50NiwgX2NvbnRleHQ1LnQ5KTtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MTEgPSBuZXcgX2NvbnRleHQ1LnQzKF9jb250ZXh0NS50MTApO1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQxMiA9IHtcbiAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgaGVhZGVyczogX2NvbnRleHQ1LnQyLFxuICAgICAgICAgICAgICBib2R5OiBfY29udGV4dDUudDExXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAzMztcbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NvbnRleHQ1LnQwKShfY29udGV4dDUudDEsIF9jb250ZXh0NS50MTIpO1xuXG4gICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgIHJlcyA9IF9jb250ZXh0NS5zZW50O1xuICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAzNjtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuXG4gICAgICAgICAgY2FzZSAzNjpcbiAgICAgICAgICAgIGRhdGEgPSBfY29udGV4dDUuc2VudDtcblxuICAgICAgICAgICAgaWYgKCEocmVkaXJlY3QgfHwgIWlzU3VwcG9ydGluZ1JldHVybikpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA0MjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVybCA9IChfZGF0YSR1cmwgPSBkYXRhLnVybCkgIT09IG51bGwgJiYgX2RhdGEkdXJsICE9PSB2b2lkIDAgPyBfZGF0YSR1cmwgOiBjYWxsYmFja1VybDtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybCk7XG4gICAgICAgICAgICBpZiAodXJsLmluY2x1ZGVzKFwiI1wiKSkgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgZXJyb3IgPSBuZXcgVVJMKGRhdGEudXJsKS5zZWFyY2hQYXJhbXMuZ2V0KFwiZXJyb3JcIik7XG5cbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gNDY7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDQ2O1xuICAgICAgICAgICAgcmV0dXJuIF9fTkVYVEFVVEguX2dldFNlc3Npb24oe1xuICAgICAgICAgICAgICBldmVudDogXCJzdG9yYWdlXCJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSA0NjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KFwicmV0dXJuXCIsIHtcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXG4gICAgICAgICAgICAgIG9rOiByZXMub2ssXG4gICAgICAgICAgICAgIHVybDogZXJyb3IgPyBudWxsIDogZGF0YS51cmxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU1KTtcbiAgfSkpO1xuICByZXR1cm4gX3NpZ25Jbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBzaWduT3V0KF94Nikge1xuICByZXR1cm4gX3NpZ25PdXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX3NpZ25PdXQoKSB7XG4gIF9zaWduT3V0ID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWU2KG9wdGlvbnMpIHtcbiAgICB2YXIgX29wdGlvbnMkcmVkaXJlY3Q7XG5cbiAgICB2YXIgX3JlZjYsIF9yZWY2JGNhbGxiYWNrVXJsLCBjYWxsYmFja1VybCwgYmFzZVVybCwgZmV0Y2hPcHRpb25zLCByZXMsIGRhdGEsIF9kYXRhJHVybDIsIHVybDtcblxuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWU2JChfY29udGV4dDYpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ2LnByZXYgPSBfY29udGV4dDYubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9yZWY2ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30sIF9yZWY2JGNhbGxiYWNrVXJsID0gX3JlZjYuY2FsbGJhY2tVcmwsIGNhbGxiYWNrVXJsID0gX3JlZjYkY2FsbGJhY2tVcmwgPT09IHZvaWQgMCA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmIDogX3JlZjYkY2FsbGJhY2tVcmw7XG4gICAgICAgICAgICBiYXNlVXJsID0gKDAsIF9jbGllbnQuYXBpQmFzZVVybCkoX19ORVhUQVVUSCk7XG4gICAgICAgICAgICBfY29udGV4dDYudDAgPSB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDYudDEgPSBVUkxTZWFyY2hQYXJhbXM7XG4gICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDY7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q3NyZlRva2VuKCk7XG5cbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBfY29udGV4dDYudDIgPSBfY29udGV4dDYuc2VudDtcbiAgICAgICAgICAgIF9jb250ZXh0Ni50MyA9IGNhbGxiYWNrVXJsO1xuICAgICAgICAgICAgX2NvbnRleHQ2LnQ0ID0ge1xuICAgICAgICAgICAgICBjc3JmVG9rZW46IF9jb250ZXh0Ni50MixcbiAgICAgICAgICAgICAgY2FsbGJhY2tVcmw6IF9jb250ZXh0Ni50MyxcbiAgICAgICAgICAgICAganNvbjogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9jb250ZXh0Ni50NSA9IG5ldyBfY29udGV4dDYudDEoX2NvbnRleHQ2LnQ0KTtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgaGVhZGVyczogX2NvbnRleHQ2LnQwLFxuICAgICAgICAgICAgICBib2R5OiBfY29udGV4dDYudDVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDEzO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoKFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiL3NpZ25vdXRcIiksIGZldGNoT3B0aW9ucyk7XG5cbiAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgcmVzID0gX2NvbnRleHQ2LnNlbnQ7XG4gICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDE2O1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG5cbiAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgZGF0YSA9IF9jb250ZXh0Ni5zZW50O1xuICAgICAgICAgICAgYnJvYWRjYXN0LnBvc3Qoe1xuICAgICAgICAgICAgICBldmVudDogXCJzZXNzaW9uXCIsXG4gICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcInNpZ25vdXRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCEoKF9vcHRpb25zJHJlZGlyZWN0ID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJlZGlyZWN0KSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRyZWRpcmVjdCAhPT0gdm9pZCAwID8gX29wdGlvbnMkcmVkaXJlY3QgOiB0cnVlKSkge1xuICAgICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDIzO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXJsID0gKF9kYXRhJHVybDIgPSBkYXRhLnVybCkgIT09IG51bGwgJiYgX2RhdGEkdXJsMiAhPT0gdm9pZCAwID8gX2RhdGEkdXJsMiA6IGNhbGxiYWNrVXJsO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UodXJsKTtcbiAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoXCIjXCIpKSB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICBfY29udGV4dDYubmV4dCA9IDI1O1xuICAgICAgICAgICAgcmV0dXJuIF9fTkVYVEFVVEguX2dldFNlc3Npb24oe1xuICAgICAgICAgICAgICBldmVudDogXCJzdG9yYWdlXCJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDYuYWJydXB0KFwicmV0dXJuXCIsIGRhdGEpO1xuXG4gICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWU2KTtcbiAgfSkpO1xuICByZXR1cm4gX3NpZ25PdXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gU2Vzc2lvblByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgYmFzZVBhdGggPSBwcm9wcy5iYXNlUGF0aDtcbiAgaWYgKGJhc2VQYXRoKSBfX05FWFRBVVRILmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gIHZhciBoYXNJbml0aWFsU2Vzc2lvbiA9IHByb3BzLnNlc3Npb24gIT09IHVuZGVmaW5lZDtcbiAgX19ORVhUQVVUSC5fbGFzdFN5bmMgPSBoYXNJbml0aWFsU2Vzc2lvbiA/ICgwLCBfY2xpZW50Lm5vdykoKSA6IDA7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaGFzSW5pdGlhbFNlc3Npb24pIF9fTkVYVEFVVEguX3Nlc3Npb24gPSBwcm9wcy5zZXNzaW9uO1xuICAgIHJldHVybiBwcm9wcy5zZXNzaW9uO1xuICB9KSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyLmRlZmF1bHQpKF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBzZXNzaW9uID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldFNlc3Npb24gPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUzID0gUmVhY3QudXNlU3RhdGUoIWhhc0luaXRpYWxTZXNzaW9uKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTQgPSAoMCwgX3NsaWNlZFRvQXJyYXkyLmRlZmF1bHQpKF9SZWFjdCR1c2VTdGF0ZTMsIDIpLFxuICAgICAgbG9hZGluZyA9IF9SZWFjdCR1c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRMb2FkaW5nID0gX1JlYWN0JHVzZVN0YXRlNFsxXTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIF9fTkVYVEFVVEguX2dldFNlc3Npb24gPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgIHZhciBfcmVmNCxcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBzdG9yYWdlRXZlbnQsXG4gICAgICAgICAgX2FyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBfcmVmNCA9IF9hcmdzLmxlbmd0aCA+IDAgJiYgX2FyZ3NbMF0gIT09IHVuZGVmaW5lZCA/IF9hcmdzWzBdIDoge30sIGV2ZW50ID0gX3JlZjQuZXZlbnQ7XG4gICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxO1xuICAgICAgICAgICAgICBzdG9yYWdlRXZlbnQgPSBldmVudCA9PT0gXCJzdG9yYWdlXCI7XG5cbiAgICAgICAgICAgICAgaWYgKCEoc3RvcmFnZUV2ZW50IHx8IF9fTkVYVEFVVEguX3Nlc3Npb24gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfX05FWFRBVVRILl9sYXN0U3luYyA9ICgwLCBfY2xpZW50Lm5vdykoKTtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgIHJldHVybiBnZXRTZXNzaW9uKHtcbiAgICAgICAgICAgICAgICBicm9hZGNhc3Q6ICFzdG9yYWdlRXZlbnRcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgX19ORVhUQVVUSC5fc2Vzc2lvbiA9IF9jb250ZXh0LnNlbnQ7XG4gICAgICAgICAgICAgIHNldFNlc3Npb24oX19ORVhUQVVUSC5fc2Vzc2lvbik7XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGlmICghKCFldmVudCB8fCBfX05FWFRBVVRILl9zZXNzaW9uID09PSBudWxsIHx8ICgwLCBfY2xpZW50Lm5vdykoKSA8IF9fTkVYVEFVVEguX2xhc3RTeW5jKSkge1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIF9fTkVYVEFVVEguX2xhc3RTeW5jID0gKDAsIF9jbGllbnQubm93KSgpO1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTU7XG4gICAgICAgICAgICAgIHJldHVybiBnZXRTZXNzaW9uKCk7XG5cbiAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgIF9fTkVYVEFVVEguX3Nlc3Npb24gPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICBzZXRTZXNzaW9uKF9fTkVYVEFVVEguX3Nlc3Npb24pO1xuICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTk7XG4gICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbXCJjYXRjaFwiXSgxKTtcbiAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ0xJRU5UX1NFU1NJT05fRVJST1JcIiwgX2NvbnRleHQudDApO1xuXG4gICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMjI7XG4gICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuZmluaXNoKDIyKTtcblxuICAgICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF9jYWxsZWUsIG51bGwsIFtbMSwgMTksIDIyLCAyNV1dKTtcbiAgICB9KSk7XG5cbiAgICBfX05FWFRBVVRILl9nZXRTZXNzaW9uKCk7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBicm9hZGNhc3QucmVjZWl2ZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbih7XG4gICAgICAgIGV2ZW50OiBcInN0b3JhZ2VcIlxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmlzaWJpbGl0eUhhbmRsZXIgPSBmdW5jdGlvbiB2aXNpYmlsaXR5SGFuZGxlcigpIHtcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKSBfX05FWFRBVVRILl9nZXRTZXNzaW9uKHtcbiAgICAgICAgZXZlbnQ6IFwidmlzaWJpbGl0eWNoYW5nZVwiXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgdmlzaWJpbGl0eUhhbmRsZXIsIGZhbHNlKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIHZpc2liaWxpdHlIYW5kbGVyLCBmYWxzZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciByZWZldGNoSW50ZXJ2YWwgPSBwcm9wcy5yZWZldGNoSW50ZXJ2YWw7XG5cbiAgICBpZiAocmVmZXRjaEludGVydmFsKSB7XG4gICAgICB2YXIgcmVmZXRjaEludGVydmFsVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfX05FWFRBVVRILl9zZXNzaW9uKSB7XG4gICAgICAgICAgX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbih7XG4gICAgICAgICAgICBldmVudDogXCJwb2xsXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgcmVmZXRjaEludGVydmFsICogMTAwMCk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChyZWZldGNoSW50ZXJ2YWxUaW1lcik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW3Byb3BzLnJlZmV0Y2hJbnRlcnZhbF0pO1xuICB2YXIgdmFsdWUgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogc2Vzc2lvbixcbiAgICAgIHN0YXR1czogbG9hZGluZyA/IFwibG9hZGluZ1wiIDogc2Vzc2lvbiA/IFwiYXV0aGVudGljYXRlZFwiIDogXCJ1bmF1dGhlbnRpY2F0ZWRcIlxuICAgIH07XG4gIH0sIFtzZXNzaW9uLCBsb2FkaW5nXSk7XG4gIHJldHVybiAoMCwgX2pzeFJ1bnRpbWUuanN4KShTZXNzaW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51cHBlclNuYWtlID0gdXBwZXJTbmFrZTtcbmV4cG9ydHMuY2FwaXRhbGl6ZSA9IGNhcGl0YWxpemU7XG5leHBvcnRzLmV2ZW50c0Vycm9ySGFuZGxlciA9IGV2ZW50c0Vycm9ySGFuZGxlcjtcbmV4cG9ydHMuYWRhcHRlckVycm9ySGFuZGxlciA9IGFkYXB0ZXJFcnJvckhhbmRsZXI7XG5leHBvcnRzLkFjY291bnROb3RMaW5rZWRFcnJvciA9IGV4cG9ydHMuT0F1dGhDYWxsYmFja0Vycm9yID0gZXhwb3J0cy5Vbmtub3duRXJyb3IgPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbmNsYXNzIFVua25vd25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoZXJyb3IpIHtcbiAgICB2YXIgX2Vycm9yJG1lc3NhZ2U7XG5cbiAgICBzdXBlcigoX2Vycm9yJG1lc3NhZ2UgPSBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSkgIT09IG51bGwgJiYgX2Vycm9yJG1lc3NhZ2UgIT09IHZvaWQgMCA/IF9lcnJvciRtZXNzYWdlIDogZXJyb3IpO1xuICAgIHRoaXMubmFtZSA9IFwiVW5rbm93bkVycm9yXCI7XG5cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2tcbiAgICB9O1xuICB9XG5cbn1cblxuZXhwb3J0cy5Vbmtub3duRXJyb3IgPSBVbmtub3duRXJyb3I7XG5cbmNsYXNzIE9BdXRoQ2FsbGJhY2tFcnJvciBleHRlbmRzIFVua25vd25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0aGlzLCBcIm5hbWVcIiwgXCJPQXV0aENhbGxiYWNrRXJyb3JcIik7XG4gIH1cblxufVxuXG5leHBvcnRzLk9BdXRoQ2FsbGJhY2tFcnJvciA9IE9BdXRoQ2FsbGJhY2tFcnJvcjtcblxuY2xhc3MgQWNjb3VudE5vdExpbmtlZEVycm9yIGV4dGVuZHMgVW5rbm93bkVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRoaXMsIFwibmFtZVwiLCBcIkFjY291bnROb3RMaW5rZWRFcnJvclwiKTtcbiAgfVxuXG59XG5cbmV4cG9ydHMuQWNjb3VudE5vdExpbmtlZEVycm9yID0gQWNjb3VudE5vdExpbmtlZEVycm9yO1xuXG5mdW5jdGlvbiB1cHBlclNuYWtlKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvKFtBLVpdKS9nLCBcIl8kMVwiKS50b1VwcGVyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHMpIHtcbiAgcmV0dXJuIGAke3NbMF0udG9VcHBlckNhc2UoKX0ke3Muc2xpY2UoMSl9YDtcbn1cblxuZnVuY3Rpb24gZXZlbnRzRXJyb3JIYW5kbGVyKG1ldGhvZHMsIGxvZ2dlcikge1xuICByZXR1cm4gT2JqZWN0LmtleXMobWV0aG9kcykucmVkdWNlKChhY2MsIG5hbWUpID0+IHtcbiAgICBhY2NbbmFtZV0gPSBhc3luYyAoLi4uYXJncykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gbWV0aG9kc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IG1ldGhvZCguLi5hcmdzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGAke3VwcGVyU25ha2UobmFtZSl9X0VWRU5UX0VSUk9SYCwgZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gYWRhcHRlckVycm9ySGFuZGxlcihhZGFwdGVyLCBsb2dnZXIpIHtcbiAgaWYgKCFhZGFwdGVyKSByZXR1cm47XG4gIHJldHVybiBPYmplY3Qua2V5cyhhZGFwdGVyKS5yZWR1Y2UoKGFjYywgbmFtZSkgPT4ge1xuICAgIGFjY1tuYW1lXSA9IGFzeW5jICguLi5hcmdzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsb2dnZXIuZGVidWcoYGFkYXB0ZXJfJHtuYW1lfWAsIHtcbiAgICAgICAgICBhcmdzXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtZXRob2QgPSBhZGFwdGVyW25hbWVdO1xuICAgICAgICByZXR1cm4gYXdhaXQgbWV0aG9kKC4uLmFyZ3MpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGBhZGFwdGVyX2Vycm9yXyR7bmFtZX1gLCBlcnJvcik7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgVW5rbm93bkVycm9yKGVycm9yKTtcbiAgICAgICAgZS5uYW1lID0gYCR7Y2FwaXRhbGl6ZShuYW1lKX1FcnJvcmA7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn0iLCJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgQnV0dG9uOiB7XHJcbiAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgJ25hdi1idXR0b24nOiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdiYXNlbGluZScsXHJcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgIF9ob3Zlcjoge1xyXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgICAgIF9kaXNhYmxlZDoge1xyXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgX2FjdGl2ZToge1xyXG4gICAgICAgICAgICBjb2xvcjogJyM1ODQ1NUUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdyZWQtYnV0dG9uJzoge1xyXG4gICAgICAgICAgcGFkZGluZzogMyxcclxuICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnYmFzZWxpbmUnLFxyXG4gICAgICAgICAgY29sb3I6ICcjZTUwOTE0JyxcclxuICAgICAgICAgIF9ob3Zlcjoge1xyXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM5YjA4MGYnLFxyXG4gICAgICAgICAgICBfZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIF9hY3RpdmU6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Q2MGMxNicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsImltcG9ydCB7IHdpdGhUUlBDIH0gZnJvbSAnQHRycGMvbmV4dCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vbGliL3RoZW1lJztcbmltcG9ydCB7IEFwcFJvdXRlciB9IGZyb20gJy4uL3NlcnZlci9yb3V0ZXJzL19hcHAnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVFJQQzxBcHBSb3V0ZXI+KHtcbiAgY29uZmlnKHsgY3R4IH0pIHtcbiAgICAvKipcbiAgICAgKiBJZiB5b3Ugd2FudCB0byB1c2UgU1NSLCB5b3UgbmVlZCB0byB1c2UgdGhlIHNlcnZlcidzIGZ1bGwgVVJMXG4gICAgICogQGxpbmsgaHR0cHM6Ly90cnBjLmlvL2RvY3Mvc3NyXG4gICAgICovXG4gICAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTFxuICAgICAgPyBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LlZFUkNFTF9VUkx9L2FwaS90cnBjYFxuICAgICAgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90cnBjJztcblxuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICAvKipcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vcmVhY3QtcXVlcnkudGFuc3RhY2suY29tL3JlZmVyZW5jZS9RdWVyeUNsaWVudFxuICAgICAgICovXG4gICAgICAvLyBxdWVyeUNsaWVudENvbmZpZzogeyBkZWZhdWx0T3B0aW9uczogeyBxdWVyaWVzOiB7IHN0YWxlVGltZTogNjAgfSB9IH0sXG4gICAgfTtcbiAgfSxcbiAgLyoqXG4gICAqIEBsaW5rIGh0dHBzOi8vdHJwYy5pby9kb2NzL3NzclxuICAgKi9cbiAgc3NyOiB0cnVlLFxufSkoTXlBcHApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdHJwYy9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeS9oeWRyYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3NyLXByZXBhc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwidGhlbWUiLCJjb21wb25lbnRzIiwiQnV0dG9uIiwidmFyaWFudHMiLCJwYWRkaW5nIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsInZlcnRpY2FsQWxpZ24iLCJjb2xvciIsIl9ob3ZlciIsInRleHREZWNvcmF0aW9uIiwiX2Rpc2FibGVkIiwiX2FjdGl2ZSIsImJhY2tncm91bmRDb2xvciIsIndpdGhUUlBDIiwiU2Vzc2lvblByb3ZpZGVyIiwiQ2hha3JhUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJjb25maWciLCJjdHgiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiVkVSQ0VMX1VSTCIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=