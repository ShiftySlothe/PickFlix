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
/* harmony import */ var _trpc_client_links_httpBatchLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/client/links/httpBatchLink */ "@trpc/client/links/httpBatchLink");
/* harmony import */ var _trpc_client_links_httpBatchLink__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trpc_client_links_httpBatchLink__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _trpc_client_links_loggerLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/client/links/loggerLink */ "@trpc/client/links/loggerLink");
/* harmony import */ var _trpc_client_links_loggerLink__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trpc_client_links_loggerLink__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @trpc/next */ "./node_modules/@trpc/next/dist/trpc-next.cjs.js");
/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_trpc_next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ "./node_modules/next-auth/react/index.js");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/theme */ "./src/lib/theme.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ChakraProvider, {
    theme: _lib_theme__WEBPACK_IMPORTED_MODULE_5__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {
      session: session,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

function getBaseUrl() {
  var _process$env$PORT;

  if (false) {} // reference for vercel.com


  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  } // assume localhost


  return `http://localhost:${(_process$env$PORT = process.env.PORT) !== null && _process$env$PORT !== void 0 ? _process$env$PORT : 3000}`;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_trpc_next__WEBPACK_IMPORTED_MODULE_2__.withTRPC)({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config() {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    return {
      /**
       * @link https://trpc.io/docs/links
       */
      links: [// adds pretty logs to your console in development and logs errors in production
      (0,_trpc_client_links_loggerLink__WEBPACK_IMPORTED_MODULE_1__.loggerLink)({
        enabled: opts =>  true || 0
      }), (0,_trpc_client_links_httpBatchLink__WEBPACK_IMPORTED_MODULE_0__.httpBatchLink)({
        url: `${getBaseUrl()}/api/trpc`
      })]
      /**
       * @link https://trpc.io/docs/data-transformers
       */

      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },

    };
  },

  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,

  /**
   * Set headers or status code when doing SSR
   */
  responseMeta({
    clientErrors
  }) {
    if (clientErrors.length) {
      var _clientErrors$0$data$, _clientErrors$0$data;

      // propagate http first error from API calls
      return {
        status: (_clientErrors$0$data$ = (_clientErrors$0$data = clientErrors[0].data) === null || _clientErrors$0$data === void 0 ? void 0 : _clientErrors$0$data.httpStatus) !== null && _clientErrors$0$data$ !== void 0 ? _clientErrors$0$data$ : 500
      };
    } // for app caching with SSR see https://trpc.io/docs/caching


    return {};
  }

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

/***/ "@trpc/client/links/httpBatchLink":
/*!***************************************************!*\
  !*** external "@trpc/client/links/httpBatchLink" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@trpc/client/links/httpBatchLink");

/***/ }),

/***/ "@trpc/client/links/loggerLink":
/*!************************************************!*\
  !*** external "@trpc/client/links/loggerLink" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@trpc/client/links/loggerLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QUFDTjtBQUNBOztBQUNNO0FBQ047QUFDQTtBQUNNOztBQXJCSyxLQUFQO0FBdUJELEdBOUJnQzs7QUErQmpDO0FBQ0Y7QUFDQTtBQUNFYSxFQUFBQSxHQUFHLEVBQUUsSUFsQzRCOztBQW1DakM7QUFDRjtBQUNBO0FBQ0VDLEVBQUFBLFlBQVksQ0FBQztBQUFFQyxJQUFBQTtBQUFGLEdBQUQsRUFBbUI7QUFDN0IsUUFBSUEsWUFBWSxDQUFDQyxNQUFqQixFQUF5QjtBQUFBOztBQUN2QjtBQUNBLGFBQU87QUFDTEMsUUFBQUEsTUFBTSxtREFBRUYsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFnQkcsSUFBbEIseURBQUUscUJBQXNCQyxVQUF4Qix5RUFBc0M7QUFEdkMsT0FBUDtBQUdELEtBTjRCLENBUTdCOzs7QUFFQSxXQUFPLEVBQVA7QUFDRDs7QUFqRGdDLENBQVosQ0FBUixDQWtEWnZCLEtBbERZLENBQWY7Ozs7Ozs7Ozs7O0FDaENBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMi5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0B0cnBjL25leHQvZGlzdC90cnBjLW5leHQuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0B0cnBjL25leHQvZGlzdC90cnBjLW5leHQuY2pzLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvbGliL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9saWIvcGFyc2UtdXJsLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3JlYWN0L3R5cGVzLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL3NyYy9saWIvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJAdHJwYy9jbGllbnQvbGlua3MvaHR0cEJhdGNoTGlua1wiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJAdHJwYy9jbGllbnQvbGlua3MvbG9nZ2VyTGlua1wiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJAdHJwYy9yZWFjdFwiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeVwiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJyZWFjdC1xdWVyeS9oeWRyYXRpb25cIiIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yL2V4dGVybmFsIFwicmVhY3Qtc3NyLXByZXBhc3NcIiIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcInJlYWN0L2pzeC1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRob3V0SG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHkuanNcIik7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcblxuICAgIGlmIChlbnVtZXJhYmxlT25seSkge1xuICAgICAgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkMjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5ID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheScpO1xudmFyIF9hc3luY1RvR2VuZXJhdG9yID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJyk7XG52YXIgX3NsaWNlZFRvQXJyYXkgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXknKTtcbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XG52YXIgX3JlZ2VuZXJhdG9yUnVudGltZSA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yJyk7XG52YXIgcmVhY3QgPSByZXF1aXJlKCdAdHJwYy9yZWFjdCcpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciByZWFjdFF1ZXJ5ID0gcmVxdWlyZSgncmVhY3QtcXVlcnknKTtcbnZhciBoeWRyYXRpb24gPSByZXF1aXJlKCdyZWFjdC1xdWVyeS9oeWRyYXRpb24nKTtcbnZhciBzc3JQcmVwYXNzID0gcmVxdWlyZSgncmVhY3Qtc3NyLXByZXBhc3MnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBfcmVnZW5lcmF0b3JSdW50aW1lX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdChfcmVnZW5lcmF0b3JSdW50aW1lKTtcbnZhciBSZWFjdF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoUmVhY3QpO1xudmFyIHNzclByZXBhc3NfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0KHNzclByZXBhc3MpO1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1RdWVyeU9yTXV0YXRpb25DYWNoZUVycm9ycyhyZXN1bHQpIHtcbiAgdmFyIGVycm9yID0gcmVzdWx0LnN0YXRlLmVycm9yO1xuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09ICdUUlBDQ2xpZW50RXJyb3InKSB7XG4gICAgdmFyIG5ld0Vycm9yID0ge1xuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgIGRhdGE6IGVycm9yLmRhdGEsXG4gICAgICBzaGFwZTogZXJyb3Iuc2hhcGVcbiAgICB9O1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHJlc3VsdCksIHt9LCB7XG4gICAgICBzdGF0ZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByZXN1bHQuc3RhdGUpLCB7fSwge1xuICAgICAgICBlcnJvcjogbmV3RXJyb3JcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB3aXRoVFJQQyhvcHRzKSB7XG4gIHZhciBnZXRDbGllbnRDb25maWcgPSBvcHRzLmNvbmZpZztcbiAgcmV0dXJuIGZ1bmN0aW9uIChBcHBPclBhZ2UpIHtcbiAgICB2YXIgdHJwYyA9IHJlYWN0LmNyZWF0ZVJlYWN0UXVlcnlIb29rcygpO1xuXG4gICAgdmFyIFdpdGhUUlBDID0gZnVuY3Rpb24gV2l0aFRSUEMocHJvcHMpIHtcbiAgICAgIHZhciBfcHJvcHMkcGFnZVByb3BzO1xuXG4gICAgICB2YXIgX3VzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocHJvcHMudHJwYykge1xuICAgICAgICAgIHJldHVybiBwcm9wcy50cnBjO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbmZpZyA9IGdldENsaWVudENvbmZpZyh7fSk7XG4gICAgICAgIHZhciBxdWVyeUNsaWVudCA9IG5ldyByZWFjdFF1ZXJ5LlF1ZXJ5Q2xpZW50KGNvbmZpZy5xdWVyeUNsaWVudENvbmZpZyk7XG4gICAgICAgIHZhciB0cnBjQ2xpZW50ID0gdHJwYy5jcmVhdGVDbGllbnQoY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBxdWVyeUNsaWVudDogcXVlcnlDbGllbnQsXG4gICAgICAgICAgdHJwY0NsaWVudDogdHJwY0NsaWVudCxcbiAgICAgICAgICBpc1ByZXBhc3M6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICAgICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAxKSxcbiAgICAgICAgICBfdXNlU3RhdGUyJCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICAgICAgcXVlcnlDbGllbnQgPSBfdXNlU3RhdGUyJC5xdWVyeUNsaWVudCxcbiAgICAgICAgICB0cnBjQ2xpZW50ID0gX3VzZVN0YXRlMiQudHJwY0NsaWVudCxcbiAgICAgICAgICBpc1ByZXBhc3MgPSBfdXNlU3RhdGUyJC5pc1ByZXBhc3M7XG5cbiAgICAgIHZhciBoeWRyYXRlZFN0YXRlID0gdHJwYy51c2VEZWh5ZHJhdGVkU3RhdGUodHJwY0NsaWVudCwgKF9wcm9wcyRwYWdlUHJvcHMgPSBwcm9wcy5wYWdlUHJvcHMpID09PSBudWxsIHx8IF9wcm9wcyRwYWdlUHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wcm9wcyRwYWdlUHJvcHMudHJwY1N0YXRlKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KHRycGMuUHJvdmlkZXIsIHtcbiAgICAgICAgY2xpZW50OiB0cnBjQ2xpZW50LFxuICAgICAgICBxdWVyeUNsaWVudDogcXVlcnlDbGllbnQsXG4gICAgICAgIGlzUHJlcGFzczogaXNQcmVwYXNzXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KHJlYWN0UXVlcnkuUXVlcnlDbGllbnRQcm92aWRlciwge1xuICAgICAgICBjbGllbnQ6IHF1ZXJ5Q2xpZW50XG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KGh5ZHJhdGlvbi5IeWRyYXRlLCB7XG4gICAgICAgIHN0YXRlOiBoeWRyYXRlZFN0YXRlXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KEFwcE9yUGFnZSwgcHJvcHMpKSkpO1xuICAgIH07XG5cbiAgICBpZiAoQXBwT3JQYWdlLmdldEluaXRpYWxQcm9wcyB8fCBvcHRzLnNzcikge1xuICAgICAgV2l0aFRSUEMuZ2V0SW5pdGlhbFByb3BzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWVfX2RlZmF1bHRbJ2RlZmF1bHQnXS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoYXBwT3JQYWdlQ3R4KSB7XG4gICAgICAgICAgdmFyIF9vcHRzJHJlc3BvbnNlTWV0YSwgX29wdHMkcmVzcG9uc2VNZXRhMjtcblxuICAgICAgICAgIHZhciBBcHBUcmVlLCBpc0FwcCwgY3R4LCBwYWdlUHJvcHMsIF9vcmlnaW5hbFByb3BzJHBhZ2VQciwgb3JpZ2luYWxQcm9wcywgb3JpZ2luYWxQYWdlUHJvcHMsIGdldEFwcFRyZWVQcm9wcywgY29uZmlnLCB0cnBjQ2xpZW50LCBxdWVyeUNsaWVudCwgdHJwY1Byb3AsIHByZXBhc3NQcm9wcywgZGVoeWRyYXRlZENhY2hlLCBkZWh5ZHJhdGVkQ2FjaGVXaXRoRXJyb3JzLCBhcHBUcmVlUHJvcHMsIG1ldGEsIF9pLCBfT2JqZWN0JGVudHJpZXMsIF9PYmplY3QkZW50cmllcyRfaSwga2V5LCB2YWx1ZSwgX2N0eCRyZXM7XG5cbiAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZV9fZGVmYXVsdFsnZGVmYXVsdCddLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBBcHBUcmVlID0gYXBwT3JQYWdlQ3R4LkFwcFRyZWU7IC8vIERldGVybWluZSBpZiB3ZSBhcmUgd3JhcHBpbmcgYW4gQXBwIGNvbXBvbmVudCBvciBhIFBhZ2UgY29tcG9uZW50LlxuXG4gICAgICAgICAgICAgICAgICBpc0FwcCA9ICEhYXBwT3JQYWdlQ3R4LkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgIGN0eCA9IGlzQXBwID8gYXBwT3JQYWdlQ3R4LmN0eCA6IGFwcE9yUGFnZUN0eDsgLy8gUnVuIHRoZSB3cmFwcGVkIGNvbXBvbmVudCdzIGdldEluaXRpYWxQcm9wcyBmdW5jdGlvbi5cblxuICAgICAgICAgICAgICAgICAgcGFnZVByb3BzID0ge307XG5cbiAgICAgICAgICAgICAgICAgIGlmICghQXBwT3JQYWdlLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNztcbiAgICAgICAgICAgICAgICAgIHJldHVybiBBcHBPclBhZ2UuZ2V0SW5pdGlhbFByb3BzKGFwcE9yUGFnZUN0eCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICBvcmlnaW5hbFByb3BzID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICAgIG9yaWdpbmFsUGFnZVByb3BzID0gaXNBcHAgPyAoX29yaWdpbmFsUHJvcHMkcGFnZVByID0gb3JpZ2luYWxQcm9wcy5wYWdlUHJvcHMpICE9PSBudWxsICYmIF9vcmlnaW5hbFByb3BzJHBhZ2VQciAhPT0gdm9pZCAwID8gX29yaWdpbmFsUHJvcHMkcGFnZVByIDoge30gOiBvcmlnaW5hbFByb3BzO1xuICAgICAgICAgICAgICAgICAgcGFnZVByb3BzID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBvcmlnaW5hbFBhZ2VQcm9wcyksIHBhZ2VQcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgZ2V0QXBwVHJlZVByb3BzID0gZnVuY3Rpb24gZ2V0QXBwVHJlZVByb3BzKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc0FwcCA/IHtcbiAgICAgICAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIH0gOiBwcm9wcztcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIHx8ICFvcHRzLnNzcikpIHtcbiAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBnZXRBcHBUcmVlUHJvcHMocGFnZVByb3BzKSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgY29uZmlnID0gZ2V0Q2xpZW50Q29uZmlnKHtcbiAgICAgICAgICAgICAgICAgICAgY3R4OiBjdHhcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdHJwY0NsaWVudCA9IHJlYWN0LmNyZWF0ZVRSUENDbGllbnQoY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5Q2xpZW50ID0gbmV3IHJlYWN0UXVlcnkuUXVlcnlDbGllbnQoY29uZmlnLnF1ZXJ5Q2xpZW50Q29uZmlnKTtcbiAgICAgICAgICAgICAgICAgIHRycGNQcm9wID0ge1xuICAgICAgICAgICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgdHJwY0NsaWVudDogdHJwY0NsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlDbGllbnQ6IHF1ZXJ5Q2xpZW50LFxuICAgICAgICAgICAgICAgICAgICBpc1ByZXBhc3M6IHRydWVcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICBwcmVwYXNzUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogcGFnZVByb3BzLFxuICAgICAgICAgICAgICAgICAgICB0cnBjOiB0cnBjUHJvcFxuICAgICAgICAgICAgICAgICAgfTsgLy8gUnVuIHRoZSBwcmVwYXNzIHN0ZXAgb24gQXBwVHJlZS4gVGhpcyB3aWxsIHJ1biBhbGwgdHJwYyBxdWVyaWVzIG9uIHRoZSBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgICAvLyBtdWx0aXBsZSBwcmVwYXNzIGVuc3VyZXMgdGhhdCB3ZSBjYW4gZG8gYmF0Y2hpbmcgb24gdGhlIHNlcnZlclxuXG4gICAgICAgICAgICAgICAgY2FzZSAxODpcblxuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIxO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNzclByZXBhc3NfX2RlZmF1bHRbJ2RlZmF1bHQnXSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwVHJlZSwgcHJlcGFzc1Byb3BzKSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5Q2xpZW50LmlzRmV0Y2hpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwiYnJlYWtcIiwgMjcpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyNTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdW5zdWIgPSBxdWVyeUNsaWVudC5nZXRRdWVyeUNhY2hlKCkuc3Vic2NyaWJlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgoZXZlbnQgPT09IG51bGwgfHwgZXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50LnF1ZXJ5LmdldE9ic2VydmVyc0NvdW50KCkpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnN1YigpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTg7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgICBkZWh5ZHJhdGVkQ2FjaGUgPSBoeWRyYXRpb24uZGVoeWRyYXRlKHF1ZXJ5Q2xpZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZERlaHlkcmF0ZVF1ZXJ5OiBmdW5jdGlvbiBzaG91bGREZWh5ZHJhdGVRdWVyeSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBtYWtlcyBzdXJlIGVycm9ycyBhcmUgYWxzbyBkZWh5ZHJhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pOyAvLyBzaW5jZSBlcnJvciBpbnN0YW5jZXMgY2FuJ3QgYmUgc2VyaWFsaXplZCwgbGV0J3MgbWFrZSB0aGVtIGludG8gYFRSUENDbGllbnRFcnJvckxpa2VgLW9iamVjdHNcblxuICAgICAgICAgICAgICAgICAgZGVoeWRyYXRlZENhY2hlV2l0aEVycm9ycyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZGVoeWRyYXRlZENhY2hlKSwge30sIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcmllczogZGVoeWRyYXRlZENhY2hlLnF1ZXJpZXMubWFwKHRyYW5zZm9ybVF1ZXJ5T3JNdXRhdGlvbkNhY2hlRXJyb3JzKSxcbiAgICAgICAgICAgICAgICAgICAgbXV0YXRpb25zOiBkZWh5ZHJhdGVkQ2FjaGUubXV0YXRpb25zLm1hcCh0cmFuc2Zvcm1RdWVyeU9yTXV0YXRpb25DYWNoZUVycm9ycylcbiAgICAgICAgICAgICAgICAgIH0pOyAvLyBkZWh5ZHJhdGUgcXVlcnkgY2xpZW50J3Mgc3RhdGUgYW5kIGFkZCBpdCB0byB0aGUgcHJvcHNcblxuICAgICAgICAgICAgICAgICAgcGFnZVByb3BzLnRycGNTdGF0ZSA9IHRycGNDbGllbnQucnVudGltZS50cmFuc2Zvcm1lci5zZXJpYWxpemUoZGVoeWRyYXRlZENhY2hlV2l0aEVycm9ycyk7XG4gICAgICAgICAgICAgICAgICBhcHBUcmVlUHJvcHMgPSBnZXRBcHBUcmVlUHJvcHMocGFnZVByb3BzKTtcbiAgICAgICAgICAgICAgICAgIG1ldGEgPSAoX29wdHMkcmVzcG9uc2VNZXRhID0gKF9vcHRzJHJlc3BvbnNlTWV0YTIgPSBvcHRzLnJlc3BvbnNlTWV0YSkgPT09IG51bGwgfHwgX29wdHMkcmVzcG9uc2VNZXRhMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdHMkcmVzcG9uc2VNZXRhMi5jYWxsKG9wdHMsIHtcbiAgICAgICAgICAgICAgICAgICAgY3R4OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudEVycm9yczogW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShkZWh5ZHJhdGVkQ2FjaGUucXVlcmllcyksIF90b0NvbnN1bWFibGVBcnJheShkZWh5ZHJhdGVkQ2FjaGUubXV0YXRpb25zKSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYuc3RhdGUuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH0pLmZsYXRNYXAoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnIgaW5zdGFuY2VvZiBFcnJvciAmJiBlcnIubmFtZSA9PT0gJ1RSUENDbGllbnRFcnJvcicgPyBbZXJyXSA6IFtdO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSkpICE9PSBudWxsICYmIF9vcHRzJHJlc3BvbnNlTWV0YSAhPT0gdm9pZCAwID8gX29wdHMkcmVzcG9uc2VNZXRhIDoge307XG5cbiAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBfT2JqZWN0JGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhtZXRhKTsgX2kgPCBfT2JqZWN0JGVudHJpZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9PYmplY3QkZW50cmllcyRfaSA9IF9zbGljZWRUb0FycmF5KF9PYmplY3QkZW50cmllc1tfaV0sIDIpLCBrZXkgPSBfT2JqZWN0JGVudHJpZXMkX2lbMF0sIHZhbHVlID0gX09iamVjdCRlbnRyaWVzJF9pWzFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgKF9jdHgkcmVzID0gY3R4LnJlcykgPT09IG51bGwgfHwgX2N0eCRyZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jdHgkcmVzLnNldEhlYWRlcihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAobWV0YS5zdGF0dXMgJiYgY3R4LnJlcykge1xuICAgICAgICAgICAgICAgICAgICBjdHgucmVzLnN0YXR1c0NvZGUgPSBtZXRhLnN0YXR1cztcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcHBUcmVlUHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzNTpcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgX2NhbGxlZSk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKF94KSB7XG4gICAgICAgICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0oKTtcbiAgICB9XG5cbiAgICB2YXIgZGlzcGxheU5hbWUgPSBBcHBPclBhZ2UuZGlzcGxheU5hbWUgfHwgQXBwT3JQYWdlLm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gICAgV2l0aFRSUEMuZGlzcGxheU5hbWUgPSBcIndpdGhUUlBDKFwiLmNvbmNhdChkaXNwbGF5TmFtZSwgXCIpXCIpO1xuICAgIHJldHVybiBXaXRoVFJQQztcbiAgfTtcbn1cblxuZXhwb3J0cy53aXRoVFJQQyA9IHdpdGhUUlBDO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vdHJwYy1uZXh0LmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi90cnBjLW5leHQuY2pzLmRldi5qc1wiKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5mZXRjaERhdGEgPSBmZXRjaERhdGE7XG5leHBvcnRzLmFwaUJhc2VVcmwgPSBhcGlCYXNlVXJsO1xuZXhwb3J0cy5ub3cgPSBub3c7XG5leHBvcnRzLkJyb2FkY2FzdENoYW5uZWwgPSBCcm9hZGNhc3RDaGFubmVsO1xuXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhdGEocGF0aCwgX19ORVhUQVVUSCwgbG9nZ2VyLCB7XG4gIGN0eCxcbiAgcmVxID0gY3R4ID09PSBudWxsIHx8IGN0eCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3R4LnJlcVxufSA9IHt9KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHJlcSAhPT0gbnVsbCAmJiByZXEgIT09IHZvaWQgMCAmJiByZXEuaGVhZGVycy5jb29raWUgPyB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIGNvb2tpZTogcmVxLmhlYWRlcnMuY29va2llXG4gICAgICB9XG4gICAgfSA6IHt9O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2FwaUJhc2VVcmwoX19ORVhUQVVUSCl9LyR7cGF0aH1gLCBvcHRpb25zKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBpZiAoIXJlcy5vaykgdGhyb3cgZGF0YTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCA/IGRhdGEgOiBudWxsO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcihcIkNMSUVOVF9GRVRDSF9FUlJPUlwiLCB7XG4gICAgICBlcnJvcixcbiAgICAgIHBhdGgsXG4gICAgICAuLi4ocmVxID8ge1xuICAgICAgICBoZWFkZXI6IHJlcS5oZWFkZXJzXG4gICAgICB9IDoge30pXG4gICAgfSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBpQmFzZVVybChfX05FWFRBVVRIKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIGAke19fTkVYVEFVVEguYmFzZVVybFNlcnZlcn0ke19fTkVYVEFVVEguYmFzZVBhdGhTZXJ2ZXJ9YDtcbiAgfVxuXG4gIHJldHVybiBfX05FWFRBVVRILmJhc2VQYXRoO1xufVxuXG5mdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbn1cblxuZnVuY3Rpb24gQnJvYWRjYXN0Q2hhbm5lbChuYW1lID0gXCJuZXh0YXV0aC5tZXNzYWdlXCIpIHtcbiAgcmV0dXJuIHtcbiAgICByZWNlaXZlKG9uUmVjZWl2ZSkge1xuICAgICAgY29uc3QgaGFuZGxlciA9IGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gbmFtZSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5uZXdWYWx1ZSk7XG4gICAgICAgIGlmICgobWVzc2FnZSA9PT0gbnVsbCB8fCBtZXNzYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZXNzYWdlLmV2ZW50KSAhPT0gXCJzZXNzaW9uXCIgfHwgIShtZXNzYWdlICE9PSBudWxsICYmIG1lc3NhZ2UgIT09IHZvaWQgMCAmJiBtZXNzYWdlLmRhdGEpKSByZXR1cm47XG4gICAgICAgIG9uUmVjZWl2ZShtZXNzYWdlKTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic3RvcmFnZVwiLCBoYW5kbGVyKTtcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIHBvc3QobWVzc2FnZSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KHsgLi4ubWVzc2FnZSxcbiAgICAgICAgdGltZXN0YW1wOiBub3coKVxuICAgICAgfSkpO1xuICAgIH1cblxuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZXRMb2dnZXIgPSBzZXRMb2dnZXI7XG5leHBvcnRzLnByb3h5TG9nZ2VyID0gcHJveHlMb2dnZXI7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXJyb3JzID0gcmVxdWlyZShcIi4uL3NlcnZlci9lcnJvcnNcIik7XG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBFcnJvciAmJiAhKG8gaW5zdGFuY2VvZiBfZXJyb3JzLlVua25vd25FcnJvcikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogby5tZXNzYWdlLFxuICAgICAgc3RhY2s6IG8uc3RhY2ssXG4gICAgICBuYW1lOiBvLm5hbWVcbiAgICB9O1xuICB9XG5cbiAgaWYgKG8gIT09IG51bGwgJiYgbyAhPT0gdm9pZCAwICYmIG8uZXJyb3IpIHtcbiAgICB2YXIgX28kbWVzc2FnZTtcblxuICAgIG8uZXJyb3IgPSBmb3JtYXRFcnJvcihvLmVycm9yKTtcbiAgICBvLm1lc3NhZ2UgPSAoX28kbWVzc2FnZSA9IG8ubWVzc2FnZSkgIT09IG51bGwgJiYgX28kbWVzc2FnZSAhPT0gdm9pZCAwID8gX28kbWVzc2FnZSA6IG8uZXJyb3IubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiBvO1xufVxuXG5jb25zdCBfbG9nZ2VyID0ge1xuICBlcnJvcihjb2RlLCBtZXRhZGF0YSkge1xuICAgIG1ldGFkYXRhID0gZm9ybWF0RXJyb3IobWV0YWRhdGEpO1xuICAgIGNvbnNvbGUuZXJyb3IoYFtuZXh0LWF1dGhdW2Vycm9yXVske2NvZGV9XWAsIGBcXG5odHRwczovL25leHQtYXV0aC5qcy5vcmcvZXJyb3JzIyR7Y29kZS50b0xvd2VyQ2FzZSgpfWAsIG1ldGFkYXRhLm1lc3NhZ2UsIG1ldGFkYXRhKTtcbiAgfSxcblxuICB3YXJuKGNvZGUpIHtcbiAgICBjb25zb2xlLndhcm4oYFtuZXh0LWF1dGhdW3dhcm5dWyR7Y29kZX1dYCwgYFxcbmh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy93YXJuaW5ncyMke2NvZGUudG9Mb3dlckNhc2UoKX1gKTtcbiAgfSxcblxuICBkZWJ1Zyhjb2RlLCBtZXRhZGF0YSkge1xuICAgIHZhciBfcHJvY2VzcywgX3Byb2Nlc3MkZW52O1xuXG4gICAgaWYgKCEoKF9wcm9jZXNzID0gcHJvY2VzcykgIT09IG51bGwgJiYgX3Byb2Nlc3MgIT09IHZvaWQgMCAmJiAoX3Byb2Nlc3MkZW52ID0gX3Byb2Nlc3MuZW52KSAhPT0gbnVsbCAmJiBfcHJvY2VzcyRlbnYgIT09IHZvaWQgMCAmJiBfcHJvY2VzcyRlbnYuX05FWFRBVVRIX0RFQlVHKSkgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKGBbbmV4dC1hdXRoXVtkZWJ1Z11bJHtjb2RlfV1gLCBtZXRhZGF0YSk7XG4gIH1cblxufTtcblxuZnVuY3Rpb24gc2V0TG9nZ2VyKG5ld0xvZ2dlciA9IHt9KSB7XG4gIGlmIChuZXdMb2dnZXIuZXJyb3IpIF9sb2dnZXIuZXJyb3IgPSBuZXdMb2dnZXIuZXJyb3I7XG4gIGlmIChuZXdMb2dnZXIud2FybikgX2xvZ2dlci53YXJuID0gbmV3TG9nZ2VyLndhcm47XG4gIGlmIChuZXdMb2dnZXIuZGVidWcpIF9sb2dnZXIuZGVidWcgPSBuZXdMb2dnZXIuZGVidWc7XG59XG5cbnZhciBfZGVmYXVsdCA9IF9sb2dnZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuZnVuY3Rpb24gcHJveHlMb2dnZXIobG9nZ2VyID0gX2xvZ2dlciwgYmFzZVBhdGgpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuIGxvZ2dlcjtcbiAgICB9XG5cbiAgICBjb25zdCBjbGllbnRMb2dnZXIgPSB7fTtcblxuICAgIGZvciAoY29uc3QgbGV2ZWwgaW4gbG9nZ2VyKSB7XG4gICAgICBjbGllbnRMb2dnZXJbbGV2ZWxdID0gKGNvZGUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIF9sb2dnZXJbbGV2ZWxdKGNvZGUsIG1ldGFkYXRhKTtcblxuICAgICAgICBpZiAobGV2ZWwgPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgIG1ldGFkYXRhID0gZm9ybWF0RXJyb3IobWV0YWRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0YWRhdGEuY2xpZW50ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdXJsID0gYCR7YmFzZVBhdGh9L19sb2dgO1xuICAgICAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgY29kZSxcbiAgICAgICAgICAuLi5tZXRhZGF0YVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobmF2aWdhdG9yLnNlbmRCZWFjb24pIHtcbiAgICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnNlbmRCZWFjb24odXJsLCBib2R5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGJvZHksXG4gICAgICAgICAga2VlcGFsaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xpZW50TG9nZ2VyO1xuICB9IGNhdGNoIChfdW51c2VkKSB7XG4gICAgcmV0dXJuIF9sb2dnZXI7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlVXJsO1xuXG5mdW5jdGlvbiBwYXJzZVVybCh1cmwpIHtcbiAgY29uc3QgZGVmYXVsdEhvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuICBjb25zdCBkZWZhdWx0UGF0aCA9IFwiL2FwaS9hdXRoXCI7XG5cbiAgaWYgKCF1cmwpIHtcbiAgICB1cmwgPSBgJHtkZWZhdWx0SG9zdH0ke2RlZmF1bHRQYXRofWA7XG4gIH1cblxuICBjb25zdCBwcm90b2NvbCA9IHVybC5zdGFydHNXaXRoKFwiaHR0cDpcIikgPyBcImh0dHBcIiA6IFwiaHR0cHNcIjtcbiAgdXJsID0gdXJsLnJlcGxhY2UoL15odHRwcz86XFwvXFwvLywgXCJcIikucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuICBjb25zdCBbX2hvc3QsIC4uLl9wYXRoXSA9IHVybC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IGJhc2VVcmwgPSBfaG9zdCA/IGAke3Byb3RvY29sfTovLyR7X2hvc3R9YCA6IGRlZmF1bHRIb3N0O1xuICBjb25zdCBiYXNlUGF0aCA9IF9wYXRoLmxlbmd0aCA+IDAgPyBgLyR7X3BhdGguam9pbihcIi9cIil9YCA6IGRlZmF1bHRQYXRoO1xuICByZXR1cm4ge1xuICAgIGJhc2VVcmwsXG4gICAgYmFzZVBhdGhcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIF9leHBvcnROYW1lcyA9IHtcbiAgdXNlU2Vzc2lvbjogdHJ1ZSxcbiAgZ2V0U2Vzc2lvbjogdHJ1ZSxcbiAgZ2V0Q3NyZlRva2VuOiB0cnVlLFxuICBnZXRQcm92aWRlcnM6IHRydWUsXG4gIHNpZ25JbjogdHJ1ZSxcbiAgc2lnbk91dDogdHJ1ZSxcbiAgU2Vzc2lvblByb3ZpZGVyOiB0cnVlXG59O1xuZXhwb3J0cy51c2VTZXNzaW9uID0gdXNlU2Vzc2lvbjtcbmV4cG9ydHMuZ2V0U2Vzc2lvbiA9IGdldFNlc3Npb247XG5leHBvcnRzLmdldENzcmZUb2tlbiA9IGdldENzcmZUb2tlbjtcbmV4cG9ydHMuZ2V0UHJvdmlkZXJzID0gZ2V0UHJvdmlkZXJzO1xuZXhwb3J0cy5zaWduSW4gPSBzaWduSW47XG5leHBvcnRzLnNpZ25PdXQgPSBzaWduT3V0O1xuZXhwb3J0cy5TZXNzaW9uUHJvdmlkZXIgPSBTZXNzaW9uUHJvdmlkZXI7XG5cbnZhciBfcmVnZW5lcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgX2FzeW5jVG9HZW5lcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9sb2dnZXIyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2xpYi9sb2dnZXJcIikpO1xuXG52YXIgX3BhcnNlVXJsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbGliL3BhcnNlLXVybFwiKSk7XG5cbnZhciBfY2xpZW50ID0gcmVxdWlyZShcIi4uL2xpYi9jbGllbnRcIik7XG5cbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuXG5PYmplY3Qua2V5cyhfdHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF90eXBlc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF90eXBlc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9wcm9jZXNzJGVudiRORVhUQVVUSCwgX3JlZiwgX3Byb2Nlc3MkZW52JE5FWFRBVVRIMiwgX3Byb2Nlc3MkZW52JE5FWFRBVVRIMztcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSB7IHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsgfSBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIF9fTkVYVEFVVEggPSB7XG4gIGJhc2VVcmw6ICgwLCBfcGFyc2VVcmwuZGVmYXVsdCkoKF9wcm9jZXNzJGVudiRORVhUQVVUSCA9IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCkgIT09IG51bGwgJiYgX3Byb2Nlc3MkZW52JE5FWFRBVVRIICE9PSB2b2lkIDAgPyBfcHJvY2VzcyRlbnYkTkVYVEFVVEggOiBwcm9jZXNzLmVudi5WRVJDRUxfVVJMKS5iYXNlVXJsLFxuICBiYXNlUGF0aDogKDAsIF9wYXJzZVVybC5kZWZhdWx0KShwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwpLmJhc2VQYXRoLFxuICBiYXNlVXJsU2VydmVyOiAoMCwgX3BhcnNlVXJsLmRlZmF1bHQpKChfcmVmID0gKF9wcm9jZXNzJGVudiRORVhUQVVUSDIgPSBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkxfSU5URVJOQUwpICE9PSBudWxsICYmIF9wcm9jZXNzJGVudiRORVhUQVVUSDIgIT09IHZvaWQgMCA/IF9wcm9jZXNzJGVudiRORVhUQVVUSDIgOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBwcm9jZXNzLmVudi5WRVJDRUxfVVJMKS5iYXNlVXJsLFxuICBiYXNlUGF0aFNlcnZlcjogKDAsIF9wYXJzZVVybC5kZWZhdWx0KSgoX3Byb2Nlc3MkZW52JE5FWFRBVVRIMyA9IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTF9JTlRFUk5BTCkgIT09IG51bGwgJiYgX3Byb2Nlc3MkZW52JE5FWFRBVVRIMyAhPT0gdm9pZCAwID8gX3Byb2Nlc3MkZW52JE5FWFRBVVRIMyA6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCkuYmFzZVBhdGgsXG4gIF9sYXN0U3luYzogMCxcbiAgX3Nlc3Npb246IHVuZGVmaW5lZCxcbiAgX2dldFNlc3Npb246IGZ1bmN0aW9uIF9nZXRTZXNzaW9uKCkge31cbn07XG52YXIgYnJvYWRjYXN0ID0gKDAsIF9jbGllbnQuQnJvYWRjYXN0Q2hhbm5lbCkoKTtcbnZhciBsb2dnZXIgPSAoMCwgX2xvZ2dlcjIucHJveHlMb2dnZXIpKF9sb2dnZXIyLmRlZmF1bHQsIF9fTkVYVEFVVEguYmFzZVBhdGgpO1xudmFyIFNlc3Npb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xuXG5mdW5jdGlvbiB1c2VTZXNzaW9uKG9wdGlvbnMpIHtcbiAgdmFyIHZhbHVlID0gUmVhY3QudXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG5cbiAgaWYgKCF2YWx1ZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbmV4dC1hdXRoXTogYHVzZVNlc3Npb25gIG11c3QgYmUgd3JhcHBlZCBpbiBhIDxTZXNzaW9uUHJvdmlkZXIgLz5cIik7XG4gIH1cblxuICB2YXIgX3JlZjIgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSxcbiAgICAgIHJlcXVpcmVkID0gX3JlZjIucmVxdWlyZWQsXG4gICAgICBvblVuYXV0aGVudGljYXRlZCA9IF9yZWYyLm9uVW5hdXRoZW50aWNhdGVkO1xuXG4gIHZhciByZXF1aXJlZEFuZE5vdExvYWRpbmcgPSByZXF1aXJlZCAmJiB2YWx1ZS5zdGF0dXMgPT09IFwidW5hdXRoZW50aWNhdGVkXCI7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlcXVpcmVkQW5kTm90TG9hZGluZykge1xuICAgICAgdmFyIHVybCA9IFwiL2FwaS9hdXRoL3NpZ25pbj9cIi5jb25jYXQobmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIGVycm9yOiBcIlNlc3Npb25SZXF1aXJlZFwiLFxuICAgICAgICBjYWxsYmFja1VybDogd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgIH0pKTtcbiAgICAgIGlmIChvblVuYXV0aGVudGljYXRlZCkgb25VbmF1dGhlbnRpY2F0ZWQoKTtlbHNlIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybCk7XG4gICAgfVxuICB9LCBbcmVxdWlyZWRBbmROb3RMb2FkaW5nLCBvblVuYXV0aGVudGljYXRlZF0pO1xuXG4gIGlmIChyZXF1aXJlZEFuZE5vdExvYWRpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogdmFsdWUuZGF0YSxcbiAgICAgIHN0YXR1czogXCJsb2FkaW5nXCJcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRTZXNzaW9uKF94KSB7XG4gIHJldHVybiBfZ2V0U2Vzc2lvbjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2dldFNlc3Npb24yKCkge1xuICBfZ2V0U2Vzc2lvbjIgPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIocGFyYW1zKSB7XG4gICAgdmFyIF9wYXJhbXMkYnJvYWRjYXN0O1xuXG4gICAgdmFyIHNlc3Npb247XG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvci5kZWZhdWx0LndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyO1xuICAgICAgICAgICAgcmV0dXJuICgwLCBfY2xpZW50LmZldGNoRGF0YSkoXCJzZXNzaW9uXCIsIF9fTkVYVEFVVEgsIGxvZ2dlciwgcGFyYW1zKTtcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHNlc3Npb24gPSBfY29udGV4dDIuc2VudDtcblxuICAgICAgICAgICAgaWYgKChfcGFyYW1zJGJyb2FkY2FzdCA9IHBhcmFtcyA9PT0gbnVsbCB8fCBwYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmFtcy5icm9hZGNhc3QpICE9PSBudWxsICYmIF9wYXJhbXMkYnJvYWRjYXN0ICE9PSB2b2lkIDAgPyBfcGFyYW1zJGJyb2FkY2FzdCA6IHRydWUpIHtcbiAgICAgICAgICAgICAgYnJvYWRjYXN0LnBvc3Qoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBcInNlc3Npb25cIixcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcImdldFNlc3Npb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIsIHNlc3Npb24pO1xuXG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTIpO1xuICB9KSk7XG4gIHJldHVybiBfZ2V0U2Vzc2lvbjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3NyZlRva2VuKF94Mikge1xuICByZXR1cm4gX2dldENzcmZUb2tlbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZ2V0Q3NyZlRva2VuKCkge1xuICBfZ2V0Q3NyZlRva2VuID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUzKHBhcmFtcykge1xuICAgIHZhciByZXNwb25zZTtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlMyQoX2NvbnRleHQzKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDMubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jbGllbnQuZmV0Y2hEYXRhKShcImNzcmZcIiwgX19ORVhUQVVUSCwgbG9nZ2VyLCBwYXJhbXMpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmVzcG9uc2UgPSBfY29udGV4dDMuc2VudDtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuYWJydXB0KFwicmV0dXJuXCIsIHJlc3BvbnNlID09PSBudWxsIHx8IHJlc3BvbnNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNwb25zZS5jc3JmVG9rZW4pO1xuXG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTMpO1xuICB9KSk7XG4gIHJldHVybiBfZ2V0Q3NyZlRva2VuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGdldFByb3ZpZGVycygpIHtcbiAgcmV0dXJuIF9nZXRQcm92aWRlcnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3ZpZGVycygpIHtcbiAgX2dldFByb3ZpZGVycyA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjIuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlNCgpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlNCQoX2NvbnRleHQ0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0NC5wcmV2ID0gX2NvbnRleHQ0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfY29udGV4dDQubmV4dCA9IDI7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jbGllbnQuZmV0Y2hEYXRhKShcInByb3ZpZGVyc1wiLCBfX05FWFRBVVRILCBsb2dnZXIpO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NC5hYnJ1cHQoXCJyZXR1cm5cIiwgX2NvbnRleHQ0LnNlbnQpO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTQpO1xuICB9KSk7XG4gIHJldHVybiBfZ2V0UHJvdmlkZXJzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHNpZ25JbihfeDMsIF94NCwgX3g1KSB7XG4gIHJldHVybiBfc2lnbkluLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9zaWduSW4oKSB7XG4gIF9zaWduSW4gPSAoMCwgX2FzeW5jVG9HZW5lcmF0b3IyLmRlZmF1bHQpKF9yZWdlbmVyYXRvci5kZWZhdWx0Lm1hcmsoZnVuY3Rpb24gX2NhbGxlZTUocHJvdmlkZXIsIG9wdGlvbnMsIGF1dGhvcml6YXRpb25QYXJhbXMpIHtcbiAgICB2YXIgX3JlZjUsIF9yZWY1JGNhbGxiYWNrVXJsLCBjYWxsYmFja1VybCwgX3JlZjUkcmVkaXJlY3QsIHJlZGlyZWN0LCBiYXNlVXJsLCBwcm92aWRlcnMsIGlzQ3JlZGVudGlhbHMsIGlzRW1haWwsIGlzU3VwcG9ydGluZ1JldHVybiwgc2lnbkluVXJsLCBfc2lnbkluVXJsLCByZXMsIGRhdGEsIF9kYXRhJHVybCwgdXJsLCBlcnJvcjtcblxuICAgIHJldHVybiBfcmVnZW5lcmF0b3IuZGVmYXVsdC53cmFwKGZ1bmN0aW9uIF9jYWxsZWU1JChfY29udGV4dDUpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQ1LnByZXYgPSBfY29udGV4dDUubmV4dCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIF9yZWY1ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30sIF9yZWY1JGNhbGxiYWNrVXJsID0gX3JlZjUuY2FsbGJhY2tVcmwsIGNhbGxiYWNrVXJsID0gX3JlZjUkY2FsbGJhY2tVcmwgPT09IHZvaWQgMCA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmIDogX3JlZjUkY2FsbGJhY2tVcmwsIF9yZWY1JHJlZGlyZWN0ID0gX3JlZjUucmVkaXJlY3QsIHJlZGlyZWN0ID0gX3JlZjUkcmVkaXJlY3QgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmNSRyZWRpcmVjdDtcbiAgICAgICAgICAgIGJhc2VVcmwgPSAoMCwgX2NsaWVudC5hcGlCYXNlVXJsKShfX05FWFRBVVRIKTtcbiAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gNDtcbiAgICAgICAgICAgIHJldHVybiBnZXRQcm92aWRlcnMoKTtcblxuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHByb3ZpZGVycyA9IF9jb250ZXh0NS5zZW50O1xuXG4gICAgICAgICAgICBpZiAocHJvdmlkZXJzKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gODtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiL2Vycm9yXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgaWYgKCEoIXByb3ZpZGVyIHx8ICEocHJvdmlkZXIgaW4gcHJvdmlkZXJzKSkpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSAxMTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiXCIuY29uY2F0KGJhc2VVcmwsIFwiL3NpZ25pbj9cIikuY29uY2F0KG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgICBjYWxsYmFja1VybDogY2FsbGJhY2tVcmxcbiAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICBpc0NyZWRlbnRpYWxzID0gcHJvdmlkZXJzW3Byb3ZpZGVyXS50eXBlID09PSBcImNyZWRlbnRpYWxzXCI7XG4gICAgICAgICAgICBpc0VtYWlsID0gcHJvdmlkZXJzW3Byb3ZpZGVyXS50eXBlID09PSBcImVtYWlsXCI7XG4gICAgICAgICAgICBpc1N1cHBvcnRpbmdSZXR1cm4gPSBpc0NyZWRlbnRpYWxzIHx8IGlzRW1haWw7XG4gICAgICAgICAgICBzaWduSW5VcmwgPSBcIlwiLmNvbmNhdChiYXNlVXJsLCBcIi9cIikuY29uY2F0KGlzQ3JlZGVudGlhbHMgPyBcImNhbGxiYWNrXCIgOiBcInNpZ25pblwiLCBcIi9cIikuY29uY2F0KHByb3ZpZGVyKTtcbiAgICAgICAgICAgIF9zaWduSW5VcmwgPSBcIlwiLmNvbmNhdChzaWduSW5VcmwsIFwiP1wiKS5jb25jYXQobmV3IFVSTFNlYXJjaFBhcmFtcyhhdXRob3JpemF0aW9uUGFyYW1zKSk7XG4gICAgICAgICAgICBfY29udGV4dDUudDAgPSBmZXRjaDtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MSA9IF9zaWduSW5Vcmw7XG4gICAgICAgICAgICBfY29udGV4dDUudDIgPSB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDUudDMgPSBVUkxTZWFyY2hQYXJhbXM7XG4gICAgICAgICAgICBfY29udGV4dDUudDQgPSBfb2JqZWN0U3ByZWFkO1xuICAgICAgICAgICAgX2NvbnRleHQ1LnQ1ID0gX29iamVjdFNwcmVhZCh7fSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBfY29udGV4dDUudDYgPSB7fTtcbiAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMjU7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q3NyZlRva2VuKCk7XG5cbiAgICAgICAgICBjYXNlIDI1OlxuICAgICAgICAgICAgX2NvbnRleHQ1LnQ3ID0gX2NvbnRleHQ1LnNlbnQ7XG4gICAgICAgICAgICBfY29udGV4dDUudDggPSBjYWxsYmFja1VybDtcbiAgICAgICAgICAgIF9jb250ZXh0NS50OSA9IHtcbiAgICAgICAgICAgICAgY3NyZlRva2VuOiBfY29udGV4dDUudDcsXG4gICAgICAgICAgICAgIGNhbGxiYWNrVXJsOiBfY29udGV4dDUudDgsXG4gICAgICAgICAgICAgIGpzb246IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDUudDEwID0gKDAsIF9jb250ZXh0NS50NCkoX2NvbnRleHQ1LnQ1LCBfY29udGV4dDUudDYsIF9jb250ZXh0NS50OSk7XG4gICAgICAgICAgICBfY29udGV4dDUudDExID0gbmV3IF9jb250ZXh0NS50MyhfY29udGV4dDUudDEwKTtcbiAgICAgICAgICAgIF9jb250ZXh0NS50MTIgPSB7XG4gICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IF9jb250ZXh0NS50MixcbiAgICAgICAgICAgICAgYm9keTogX2NvbnRleHQ1LnQxMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMzM7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jb250ZXh0NS50MCkoX2NvbnRleHQ1LnQxLCBfY29udGV4dDUudDEyKTtcblxuICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICByZXMgPSBfY29udGV4dDUuc2VudDtcbiAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gMzY7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcblxuICAgICAgICAgIGNhc2UgMzY6XG4gICAgICAgICAgICBkYXRhID0gX2NvbnRleHQ1LnNlbnQ7XG5cbiAgICAgICAgICAgIGlmICghKHJlZGlyZWN0IHx8ICFpc1N1cHBvcnRpbmdSZXR1cm4pKSB7XG4gICAgICAgICAgICAgIF9jb250ZXh0NS5uZXh0ID0gNDI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cmwgPSAoX2RhdGEkdXJsID0gZGF0YS51cmwpICE9PSBudWxsICYmIF9kYXRhJHVybCAhPT0gdm9pZCAwID8gX2RhdGEkdXJsIDogY2FsbGJhY2tVcmw7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh1cmwpO1xuICAgICAgICAgICAgaWYgKHVybC5pbmNsdWRlcyhcIiNcIikpIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDUuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgIGVycm9yID0gbmV3IFVSTChkYXRhLnVybCkuc2VhcmNoUGFyYW1zLmdldChcImVycm9yXCIpO1xuXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICBfY29udGV4dDUubmV4dCA9IDQ2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2NvbnRleHQ1Lm5leHQgPSA0NjtcbiAgICAgICAgICAgIHJldHVybiBfX05FWFRBVVRILl9nZXRTZXNzaW9uKHtcbiAgICAgICAgICAgICAgZXZlbnQ6IFwic3RvcmFnZVwiXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgNDY6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ1LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxuICAgICAgICAgICAgICBvazogcmVzLm9rLFxuICAgICAgICAgICAgICB1cmw6IGVycm9yID8gbnVsbCA6IGRhdGEudXJsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0NS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNSk7XG4gIH0pKTtcbiAgcmV0dXJuIF9zaWduSW4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc2lnbk91dChfeDYpIHtcbiAgcmV0dXJuIF9zaWduT3V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9zaWduT3V0KCkge1xuICBfc2lnbk91dCA9ICgwLCBfYXN5bmNUb0dlbmVyYXRvcjIuZGVmYXVsdCkoX3JlZ2VuZXJhdG9yLmRlZmF1bHQubWFyayhmdW5jdGlvbiBfY2FsbGVlNihvcHRpb25zKSB7XG4gICAgdmFyIF9vcHRpb25zJHJlZGlyZWN0O1xuXG4gICAgdmFyIF9yZWY2LCBfcmVmNiRjYWxsYmFja1VybCwgY2FsbGJhY2tVcmwsIGJhc2VVcmwsIGZldGNoT3B0aW9ucywgcmVzLCBkYXRhLCBfZGF0YSR1cmwyLCB1cmw7XG5cbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlNiQoX2NvbnRleHQ2KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Ni5wcmV2ID0gX2NvbnRleHQ2Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBfcmVmNiA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9LCBfcmVmNiRjYWxsYmFja1VybCA9IF9yZWY2LmNhbGxiYWNrVXJsLCBjYWxsYmFja1VybCA9IF9yZWY2JGNhbGxiYWNrVXJsID09PSB2b2lkIDAgPyB3aW5kb3cubG9jYXRpb24uaHJlZiA6IF9yZWY2JGNhbGxiYWNrVXJsO1xuICAgICAgICAgICAgYmFzZVVybCA9ICgwLCBfY2xpZW50LmFwaUJhc2VVcmwpKF9fTkVYVEFVVEgpO1xuICAgICAgICAgICAgX2NvbnRleHQ2LnQwID0ge1xuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2NvbnRleHQ2LnQxID0gVVJMU2VhcmNoUGFyYW1zO1xuICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSA2O1xuICAgICAgICAgICAgcmV0dXJuIGdldENzcmZUb2tlbigpO1xuXG4gICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgX2NvbnRleHQ2LnQyID0gX2NvbnRleHQ2LnNlbnQ7XG4gICAgICAgICAgICBfY29udGV4dDYudDMgPSBjYWxsYmFja1VybDtcbiAgICAgICAgICAgIF9jb250ZXh0Ni50NCA9IHtcbiAgICAgICAgICAgICAgY3NyZlRva2VuOiBfY29udGV4dDYudDIsXG4gICAgICAgICAgICAgIGNhbGxiYWNrVXJsOiBfY29udGV4dDYudDMsXG4gICAgICAgICAgICAgIGpzb246IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfY29udGV4dDYudDUgPSBuZXcgX2NvbnRleHQ2LnQxKF9jb250ZXh0Ni50NCk7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IF9jb250ZXh0Ni50MCxcbiAgICAgICAgICAgICAgYm9keTogX2NvbnRleHQ2LnQ1XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSAxMztcbiAgICAgICAgICAgIHJldHVybiBmZXRjaChcIlwiLmNvbmNhdChiYXNlVXJsLCBcIi9zaWdub3V0XCIpLCBmZXRjaE9wdGlvbnMpO1xuXG4gICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIHJlcyA9IF9jb250ZXh0Ni5zZW50O1xuICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSAxNjtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuXG4gICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgIGRhdGEgPSBfY29udGV4dDYuc2VudDtcbiAgICAgICAgICAgIGJyb2FkY2FzdC5wb3N0KHtcbiAgICAgICAgICAgICAgZXZlbnQ6IFwic2Vzc2lvblwiLFxuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCJzaWdub3V0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghKChfb3B0aW9ucyRyZWRpcmVjdCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZWRpcmVjdCkgIT09IG51bGwgJiYgX29wdGlvbnMkcmVkaXJlY3QgIT09IHZvaWQgMCA/IF9vcHRpb25zJHJlZGlyZWN0IDogdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSAyMztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVybCA9IChfZGF0YSR1cmwyID0gZGF0YS51cmwpICE9PSBudWxsICYmIF9kYXRhJHVybDIgIT09IHZvaWQgMCA/IF9kYXRhJHVybDIgOiBjYWxsYmFja1VybDtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybCk7XG4gICAgICAgICAgICBpZiAodXJsLmluY2x1ZGVzKFwiI1wiKSkgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgX2NvbnRleHQ2Lm5leHQgPSAyNTtcbiAgICAgICAgICAgIHJldHVybiBfX05FWFRBVVRILl9nZXRTZXNzaW9uKHtcbiAgICAgICAgICAgICAgZXZlbnQ6IFwic3RvcmFnZVwiXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQ2LmFicnVwdChcInJldHVyblwiLCBkYXRhKTtcblxuICAgICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Ni5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlNik7XG4gIH0pKTtcbiAgcmV0dXJuIF9zaWduT3V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIFNlc3Npb25Qcm92aWRlcihwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGJhc2VQYXRoID0gcHJvcHMuYmFzZVBhdGg7XG4gIGlmIChiYXNlUGF0aCkgX19ORVhUQVVUSC5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICB2YXIgaGFzSW5pdGlhbFNlc3Npb24gPSBwcm9wcy5zZXNzaW9uICE9PSB1bmRlZmluZWQ7XG4gIF9fTkVYVEFVVEguX2xhc3RTeW5jID0gaGFzSW5pdGlhbFNlc3Npb24gPyAoMCwgX2NsaWVudC5ub3cpKCkgOiAwO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGhhc0luaXRpYWxTZXNzaW9uKSBfX05FWFRBVVRILl9zZXNzaW9uID0gcHJvcHMuc2Vzc2lvbjtcbiAgICByZXR1cm4gcHJvcHMuc2Vzc2lvbjtcbiAgfSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5Mi5kZWZhdWx0KShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgc2Vzc2lvbiA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRTZXNzaW9uID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMyA9IFJlYWN0LnVzZVN0YXRlKCFoYXNJbml0aWFsU2Vzc2lvbiksXG4gICAgICBfUmVhY3QkdXNlU3RhdGU0ID0gKDAsIF9zbGljZWRUb0FycmF5Mi5kZWZhdWx0KShfUmVhY3QkdXNlU3RhdGUzLCAyKSxcbiAgICAgIGxvYWRpbmcgPSBfUmVhY3QkdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0TG9hZGluZyA9IF9SZWFjdCR1c2VTdGF0ZTRbMV07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBfX05FWFRBVVRILl9nZXRTZXNzaW9uID0gKDAsIF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShfcmVnZW5lcmF0b3IuZGVmYXVsdC5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgICB2YXIgX3JlZjQsXG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgc3RvcmFnZUV2ZW50LFxuICAgICAgICAgIF9hcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yLmRlZmF1bHQud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgX3JlZjQgPSBfYXJncy5sZW5ndGggPiAwICYmIF9hcmdzWzBdICE9PSB1bmRlZmluZWQgPyBfYXJnc1swXSA6IHt9LCBldmVudCA9IF9yZWY0LmV2ZW50O1xuICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gMTtcbiAgICAgICAgICAgICAgc3RvcmFnZUV2ZW50ID0gZXZlbnQgPT09IFwic3RvcmFnZVwiO1xuXG4gICAgICAgICAgICAgIGlmICghKHN0b3JhZ2VFdmVudCB8fCBfX05FWFRBVVRILl9zZXNzaW9uID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgX19ORVhUQVVUSC5fbGFzdFN5bmMgPSAoMCwgX2NsaWVudC5ub3cpKCk7XG4gICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgICByZXR1cm4gZ2V0U2Vzc2lvbih7XG4gICAgICAgICAgICAgICAgYnJvYWRjYXN0OiAhc3RvcmFnZUV2ZW50XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgIF9fTkVYVEFVVEguX3Nlc3Npb24gPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICBzZXRTZXNzaW9uKF9fTkVYVEFVVEguX3Nlc3Npb24pO1xuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBpZiAoISghZXZlbnQgfHwgX19ORVhUQVVUSC5fc2Vzc2lvbiA9PT0gbnVsbCB8fCAoMCwgX2NsaWVudC5ub3cpKCkgPCBfX05FWFRBVVRILl9sYXN0U3luYykpIHtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICBfX05FWFRBVVRILl9sYXN0U3luYyA9ICgwLCBfY2xpZW50Lm5vdykoKTtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE1O1xuICAgICAgICAgICAgICByZXR1cm4gZ2V0U2Vzc2lvbigpO1xuXG4gICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICBfX05FWFRBVVRILl9zZXNzaW9uID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgc2V0U2Vzc2lvbihfX05FWFRBVVRILl9zZXNzaW9uKTtcbiAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIyO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDE5O1xuICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oMSk7XG4gICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkNMSUVOVF9TRVNTSU9OX0VSUk9SXCIsIF9jb250ZXh0LnQwKTtcblxuICAgICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDIyO1xuICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmZpbmlzaCgyMik7XG5cbiAgICAgICAgICAgIGNhc2UgMjU6XG4gICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfY2FsbGVlLCBudWxsLCBbWzEsIDE5LCAyMiwgMjVdXSk7XG4gICAgfSkpO1xuXG4gICAgX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbigpO1xuICB9LCBbXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVuc3Vic2NyaWJlID0gYnJvYWRjYXN0LnJlY2VpdmUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9fTkVYVEFVVEguX2dldFNlc3Npb24oe1xuICAgICAgICBldmVudDogXCJzdG9yYWdlXCJcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZpc2liaWxpdHlIYW5kbGVyID0gZnVuY3Rpb24gdmlzaWJpbGl0eUhhbmRsZXIoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIikgX19ORVhUQVVUSC5fZ2V0U2Vzc2lvbih7XG4gICAgICAgIGV2ZW50OiBcInZpc2liaWxpdHljaGFuZ2VcIlxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIHZpc2liaWxpdHlIYW5kbGVyLCBmYWxzZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCB2aXNpYmlsaXR5SGFuZGxlciwgZmFsc2UpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVmZXRjaEludGVydmFsID0gcHJvcHMucmVmZXRjaEludGVydmFsO1xuXG4gICAgaWYgKHJlZmV0Y2hJbnRlcnZhbCkge1xuICAgICAgdmFyIHJlZmV0Y2hJbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX19ORVhUQVVUSC5fc2Vzc2lvbikge1xuICAgICAgICAgIF9fTkVYVEFVVEguX2dldFNlc3Npb24oe1xuICAgICAgICAgICAgZXZlbnQ6IFwicG9sbFwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHJlZmV0Y2hJbnRlcnZhbCAqIDEwMDApO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwocmVmZXRjaEludGVydmFsVGltZXIpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtwcm9wcy5yZWZldGNoSW50ZXJ2YWxdKTtcbiAgdmFyIHZhbHVlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHNlc3Npb24sXG4gICAgICBzdGF0dXM6IGxvYWRpbmcgPyBcImxvYWRpbmdcIiA6IHNlc3Npb24gPyBcImF1dGhlbnRpY2F0ZWRcIiA6IFwidW5hdXRoZW50aWNhdGVkXCJcbiAgICB9O1xuICB9LCBbc2Vzc2lvbiwgbG9hZGluZ10pO1xuICByZXR1cm4gKDAsIF9qc3hSdW50aW1lLmpzeCkoU2Vzc2lvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXBwZXJTbmFrZSA9IHVwcGVyU25ha2U7XG5leHBvcnRzLmNhcGl0YWxpemUgPSBjYXBpdGFsaXplO1xuZXhwb3J0cy5ldmVudHNFcnJvckhhbmRsZXIgPSBldmVudHNFcnJvckhhbmRsZXI7XG5leHBvcnRzLmFkYXB0ZXJFcnJvckhhbmRsZXIgPSBhZGFwdGVyRXJyb3JIYW5kbGVyO1xuZXhwb3J0cy5BY2NvdW50Tm90TGlua2VkRXJyb3IgPSBleHBvcnRzLk9BdXRoQ2FsbGJhY2tFcnJvciA9IGV4cG9ydHMuVW5rbm93bkVycm9yID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG5jbGFzcyBVbmtub3duRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGVycm9yKSB7XG4gICAgdmFyIF9lcnJvciRtZXNzYWdlO1xuXG4gICAgc3VwZXIoKF9lcnJvciRtZXNzYWdlID0gZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UpICE9PSBudWxsICYmIF9lcnJvciRtZXNzYWdlICE9PSB2b2lkIDAgPyBfZXJyb3IkbWVzc2FnZSA6IGVycm9yKTtcbiAgICB0aGlzLm5hbWUgPSBcIlVua25vd25FcnJvclwiO1xuXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrXG4gICAgfTtcbiAgfVxuXG59XG5cbmV4cG9ydHMuVW5rbm93bkVycm9yID0gVW5rbm93bkVycm9yO1xuXG5jbGFzcyBPQXV0aENhbGxiYWNrRXJyb3IgZXh0ZW5kcyBVbmtub3duRXJyb3Ige1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGhpcywgXCJuYW1lXCIsIFwiT0F1dGhDYWxsYmFja0Vycm9yXCIpO1xuICB9XG5cbn1cblxuZXhwb3J0cy5PQXV0aENhbGxiYWNrRXJyb3IgPSBPQXV0aENhbGxiYWNrRXJyb3I7XG5cbmNsYXNzIEFjY291bnROb3RMaW5rZWRFcnJvciBleHRlbmRzIFVua25vd25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0aGlzLCBcIm5hbWVcIiwgXCJBY2NvdW50Tm90TGlua2VkRXJyb3JcIik7XG4gIH1cblxufVxuXG5leHBvcnRzLkFjY291bnROb3RMaW5rZWRFcnJvciA9IEFjY291bnROb3RMaW5rZWRFcnJvcjtcblxuZnVuY3Rpb24gdXBwZXJTbmFrZShzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoLyhbQS1aXSkvZywgXCJfJDFcIikudG9VcHBlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzKSB7XG4gIHJldHVybiBgJHtzWzBdLnRvVXBwZXJDYXNlKCl9JHtzLnNsaWNlKDEpfWA7XG59XG5cbmZ1bmN0aW9uIGV2ZW50c0Vycm9ySGFuZGxlcihtZXRob2RzLCBsb2dnZXIpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1ldGhvZHMpLnJlZHVjZSgoYWNjLCBuYW1lKSA9PiB7XG4gICAgYWNjW25hbWVdID0gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IG1ldGhvZHNbbmFtZV07XG4gICAgICAgIHJldHVybiBhd2FpdCBtZXRob2QoLi4uYXJncyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihgJHt1cHBlclNuYWtlKG5hbWUpfV9FVkVOVF9FUlJPUmAsIGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGFkYXB0ZXJFcnJvckhhbmRsZXIoYWRhcHRlciwgbG9nZ2VyKSB7XG4gIGlmICghYWRhcHRlcikgcmV0dXJuO1xuICByZXR1cm4gT2JqZWN0LmtleXMoYWRhcHRlcikucmVkdWNlKChhY2MsIG5hbWUpID0+IHtcbiAgICBhY2NbbmFtZV0gPSBhc3luYyAoLi4uYXJncykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBhZGFwdGVyXyR7bmFtZX1gLCB7XG4gICAgICAgICAgYXJnc1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gYWRhcHRlcltuYW1lXTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IG1ldGhvZCguLi5hcmdzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihgYWRhcHRlcl9lcnJvcl8ke25hbWV9YCwgZXJyb3IpO1xuICAgICAgICBjb25zdCBlID0gbmV3IFVua25vd25FcnJvcihlcnJvcik7XG4gICAgICAgIGUubmFtZSA9IGAke2NhcGl0YWxpemUobmFtZSl9RXJyb3JgO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59IiwiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEJ1dHRvbjoge1xyXG4gICAgICB2YXJpYW50czoge1xyXG4gICAgICAgICduYXYtYnV0dG9uJzoge1xyXG4gICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnYmFzZWxpbmUnLFxyXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICBfaG92ZXI6IHtcclxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICBfZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIF9hY3RpdmU6IHtcclxuICAgICAgICAgICAgY29sb3I6ICcjNTg0NTVFJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICAncmVkLWJ1dHRvbic6IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDMsXHJcbiAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICAgICAgdmVydGljYWxBbGlnbjogJ2Jhc2VsaW5lJyxcclxuICAgICAgICAgIGNvbG9yOiAnI2U1MDkxNCcsXHJcbiAgICAgICAgICBfaG92ZXI6IHtcclxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOWIwODBmJyxcclxuICAgICAgICAgICAgX2Rpc2FibGVkOiB7XHJcbiAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBfYWN0aXZlOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNkNjBjMTYnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xyXG4iLCJpbXBvcnQgeyBodHRwQmF0Y2hMaW5rIH0gZnJvbSAnQHRycGMvY2xpZW50L2xpbmtzL2h0dHBCYXRjaExpbmsnO1xuaW1wb3J0IHsgbG9nZ2VyTGluayB9IGZyb20gJ0B0cnBjL2NsaWVudC9saW5rcy9sb2dnZXJMaW5rJztcbmltcG9ydCB7IHdpdGhUUlBDIH0gZnJvbSAnQHRycGMvbmV4dCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vbGliL3RoZW1lJztcbmltcG9ydCB7IEFwcFJvdXRlciB9IGZyb20gJy4uL3NlcnZlci9yb3V0ZXJzL19hcHAnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRCYXNlVXJsKCkge1xuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIC8vIHJlZmVyZW5jZSBmb3IgdmVyY2VsLmNvbVxuICBpZiAocHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCkge1xuICAgIHJldHVybiBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LlZFUkNFTF9VUkx9YDtcbiAgfVxuXG4gIC8vIGFzc3VtZSBsb2NhbGhvc3RcbiAgcmV0dXJuIGBodHRwOi8vbG9jYWxob3N0OiR7cHJvY2Vzcy5lbnYuUE9SVCA/PyAzMDAwfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUUlBDPEFwcFJvdXRlcj4oe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIGNvbmZpZygpIHtcbiAgICAvKipcbiAgICAgKiBJZiB5b3Ugd2FudCB0byB1c2UgU1NSLCB5b3UgbmVlZCB0byB1c2UgdGhlIHNlcnZlcidzIGZ1bGwgVVJMXG4gICAgICogQGxpbmsgaHR0cHM6Ly90cnBjLmlvL2RvY3Mvc3NyXG4gICAgICovXG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogQGxpbmsgaHR0cHM6Ly90cnBjLmlvL2RvY3MvbGlua3NcbiAgICAgICAqL1xuICAgICAgbGlua3M6IFtcbiAgICAgICAgLy8gYWRkcyBwcmV0dHkgbG9ncyB0byB5b3VyIGNvbnNvbGUgaW4gZGV2ZWxvcG1lbnQgYW5kIGxvZ3MgZXJyb3JzIGluIHByb2R1Y3Rpb25cbiAgICAgICAgbG9nZ2VyTGluayh7XG4gICAgICAgICAgZW5hYmxlZDogKG9wdHMpID0+XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB8fFxuICAgICAgICAgICAgKG9wdHMuZGlyZWN0aW9uID09PSAnZG93bicgJiYgb3B0cy5yZXN1bHQgaW5zdGFuY2VvZiBFcnJvciksXG4gICAgICAgIH0pLFxuICAgICAgICBodHRwQmF0Y2hMaW5rKHtcbiAgICAgICAgICB1cmw6IGAke2dldEJhc2VVcmwoKX0vYXBpL3RycGNgLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICAvKipcbiAgICAgICAqIEBsaW5rIGh0dHBzOi8vdHJwYy5pby9kb2NzL2RhdGEtdHJhbnNmb3JtZXJzXG4gICAgICAgKi9cbiAgICAgIC8qKlxuICAgICAgICogQGxpbmsgaHR0cHM6Ly9yZWFjdC1xdWVyeS50YW5zdGFjay5jb20vcmVmZXJlbmNlL1F1ZXJ5Q2xpZW50XG4gICAgICAgKi9cbiAgICAgIC8vIHF1ZXJ5Q2xpZW50Q29uZmlnOiB7IGRlZmF1bHRPcHRpb25zOiB7IHF1ZXJpZXM6IHsgc3RhbGVUaW1lOiA2MCB9IH0gfSxcbiAgICB9O1xuICB9LFxuICAvKipcbiAgICogQGxpbmsgaHR0cHM6Ly90cnBjLmlvL2RvY3Mvc3NyXG4gICAqL1xuICBzc3I6IHRydWUsXG4gIC8qKlxuICAgKiBTZXQgaGVhZGVycyBvciBzdGF0dXMgY29kZSB3aGVuIGRvaW5nIFNTUlxuICAgKi9cbiAgcmVzcG9uc2VNZXRhKHsgY2xpZW50RXJyb3JzIH0pIHtcbiAgICBpZiAoY2xpZW50RXJyb3JzLmxlbmd0aCkge1xuICAgICAgLy8gcHJvcGFnYXRlIGh0dHAgZmlyc3QgZXJyb3IgZnJvbSBBUEkgY2FsbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1czogY2xpZW50RXJyb3JzWzBdLmRhdGE/Lmh0dHBTdGF0dXMgPz8gNTAwLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBmb3IgYXBwIGNhY2hpbmcgd2l0aCBTU1Igc2VlIGh0dHBzOi8vdHJwYy5pby9kb2NzL2NhY2hpbmdcblxuICAgIHJldHVybiB7fTtcbiAgfSxcbn0pKE15QXBwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRycGMvY2xpZW50L2xpbmtzL2h0dHBCYXRjaExpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRycGMvY2xpZW50L2xpbmtzL2xvZ2dlckxpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRycGMvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcXVlcnkvaHlkcmF0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNzci1wcmVwYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsInRoZW1lIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsInZhcmlhbnRzIiwicGFkZGluZyIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiY29sb3IiLCJfaG92ZXIiLCJ0ZXh0RGVjb3JhdGlvbiIsIl9kaXNhYmxlZCIsIl9hY3RpdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJodHRwQmF0Y2hMaW5rIiwibG9nZ2VyTGluayIsIndpdGhUUlBDIiwiU2Vzc2lvblByb3ZpZGVyIiwiQ2hha3JhUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJnZXRCYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIlZFUkNFTF9VUkwiLCJQT1JUIiwiY29uZmlnIiwibGlua3MiLCJlbmFibGVkIiwib3B0cyIsImRpcmVjdGlvbiIsInJlc3VsdCIsIkVycm9yIiwidXJsIiwic3NyIiwicmVzcG9uc2VNZXRhIiwiY2xpZW50RXJyb3JzIiwibGVuZ3RoIiwic3RhdHVzIiwiZGF0YSIsImh0dHBTdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9