(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

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

/***/ "./node_modules/next-auth/css/index.js":
/*!*********************************************!*\
  !*** ./node_modules/next-auth/css/index.js ***!
  \*********************************************/
/***/ ((module) => {

module.exports = function() { return ":root{--border-width:1px;--border-radius:.3rem;--color-error:#c94b4b;--color-info:#157efb;--color-info-text:#fff}.__next-auth-theme-auto,.__next-auth-theme-light{--color-background:#fff;--color-text:#000;--color-primary:#444;--color-control-border:#bbb;--color-button-active-background:#f9f9f9;--color-button-active-border:#aaa;--color-seperator:#ccc}.__next-auth-theme-dark{--color-background:#000;--color-text:#fff;--color-primary:#ccc;--color-control-border:#555;--color-button-active-background:#060606;--color-button-active-border:#666;--color-seperator:#444}@media (prefers-color-scheme:dark){.__next-auth-theme-auto{--color-background:#000;--color-text:#fff;--color-primary:#ccc;--color-control-border:#555;--color-button-active-background:#060606;--color-button-active-border:#666;--color-seperator:#444}}body{background-color:var(--color-background);font-family:-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;margin:0;padding:0}h1{font-weight:400;margin-bottom:1.5rem;padding:0 1rem}h1,p{color:var(--color-text)}form{margin:0;padding:0}label{color:#666;display:block;font-weight:500;margin-bottom:.25rem;text-align:left}input[type]{background:var(--color-background);border:var(--border-width) solid var(--color-control-border);border-radius:var(--border-radius);box-shadow:inset 0 .1rem .2rem rgba(0,0,0,.2);box-sizing:border-box;color:var(--color-text);display:block;font-size:1rem;padding:.5rem 1rem;width:100%}input[type]:focus{box-shadow:none}p{font-size:1.1rem;line-height:2rem;margin:0 0 1.5rem;padding:0 1rem}a.button{line-height:1rem;text-decoration:none}a.button,a.button:link,a.button:visited,button{background-color:var(--color-background);color:var(--color-primary)}a.button,button{border:var(--border-width) solid var(--color-control-border);border-radius:var(--border-radius);box-shadow:0 .15rem .3rem rgba(0,0,0,.15),inset 0 .1rem .2rem var(--color-background),inset 0 -.1rem .1rem rgba(0,0,0,.05);font-size:1rem;font-weight:500;margin:0 0 .75rem;padding:.75rem 1rem;position:relative;transition:all .1s ease-in-out}a.button:hover,button:hover{cursor:pointer}a.button:active,button:active{background-color:var(--color-button-active-background);border-color:var(--color-button-active-border);box-shadow:0 .15rem .3rem rgba(0,0,0,.15),inset 0 .1rem .2rem var(--color-background),inset 0 -.1rem .1rem rgba(0,0,0,.1);cursor:pointer}a.site{color:var(--color-primary);font-size:1rem;line-height:2rem;text-decoration:none}a.site:hover{text-decoration:underline}.page{display:table;height:100%;margin:0;padding:0;position:absolute;width:100%}.page>div{display:table-cell;padding:.5rem;text-align:center;vertical-align:middle}.error a.button{display:inline-block;margin-top:.5rem;padding-left:2rem;padding-right:2rem}.error .message{margin-bottom:1.5rem}.signin a.button,.signin button,.signin input[type=text]{display:block;margin-left:auto;margin-right:auto}.signin hr{border:0;border-top:1px solid var(--color-seperator);display:block;margin:1.5em auto 0;overflow:visible}.signin hr:before{background:var(--color-background);color:#888;content:\"or\";padding:0 .4rem;position:relative;top:-.6rem}.signin .error{background:#f5f5f5;background:var(--color-info);border-radius:.3rem;font-weight:500}.signin .error p{color:var(--color-info-text);font-size:.9rem;line-height:1.2rem;padding:.5rem 1rem;text-align:left}.signin>div,.signin form{display:block;margin:0 auto .5rem}.signin>div input[type],.signin form input[type]{margin-bottom:.5rem}.signin>div button,.signin form button{width:100%}.signin>div,.signin form{max-width:300px}" }

/***/ }),

/***/ "./node_modules/next-auth/index.js":
/*!*****************************************!*\
  !*** ./node_modules/next-auth/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _server.default;
  }
}));

var _server = _interopRequireDefault(__webpack_require__(/*! ./server */ "./node_modules/next-auth/server/index.js"));

var _types = __webpack_require__(/*! ./server/types */ "./node_modules/next-auth/server/types.js");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/next-auth/jwt/index.js":
/*!*********************************************!*\
  !*** ./node_modules/next-auth/jwt/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  encode: true,
  decode: true,
  getToken: true
};
exports.encode = encode;
exports.decode = decode;
exports.getToken = getToken;

var _crypto = _interopRequireDefault(__webpack_require__(/*! crypto */ "crypto"));

var _jose = _interopRequireDefault(__webpack_require__(/*! jose */ "jose"));

var _logger = _interopRequireDefault(__webpack_require__(/*! ../lib/logger */ "./node_modules/next-auth/lib/logger.js"));

var _types = __webpack_require__(/*! ./types */ "./node_modules/next-auth/jwt/types.js");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
const DEFAULT_SIGNATURE_ALGORITHM = "HS512";
const DEFAULT_ENCRYPTION_ALGORITHM = "A256GCM";
const DEFAULT_ENCRYPTION_ENABLED = false;
const DEFAULT_MAX_AGE = 30 * 24 * 60 * 60;

async function encode({
  token = {},
  maxAge = DEFAULT_MAX_AGE,
  secret,
  signingKey,
  signingOptions = {
    expiresIn: `${maxAge}s`
  },
  encryptionKey,
  encryptionOptions = {
    alg: "dir",
    enc: DEFAULT_ENCRYPTION_ALGORITHM,
    zip: "DEF"
  },
  encryption = DEFAULT_ENCRYPTION_ENABLED
}) {
  const _signingKey = signingKey ? _jose.default.JWK.asKey(JSON.parse(signingKey)) : getDerivedSigningKey(secret);

  const signedToken = _jose.default.JWT.sign(token, _signingKey, signingOptions);

  if (encryption) {
    const _encryptionKey = encryptionKey ? _jose.default.JWK.asKey(JSON.parse(encryptionKey)) : getDerivedEncryptionKey(secret);

    return _jose.default.JWE.encrypt(signedToken, _encryptionKey, encryptionOptions);
  }

  return signedToken;
}

async function decode({
  secret,
  token,
  maxAge = DEFAULT_MAX_AGE,
  signingKey,
  verificationKey = signingKey,
  verificationOptions = {
    maxTokenAge: `${maxAge}s`,
    algorithms: [DEFAULT_SIGNATURE_ALGORITHM]
  },
  encryptionKey,
  decryptionKey = encryptionKey,
  decryptionOptions = {
    algorithms: [DEFAULT_ENCRYPTION_ALGORITHM]
  },
  encryption = DEFAULT_ENCRYPTION_ENABLED
}) {
  if (!token) return null;
  let tokenToVerify = token;

  if (encryption) {
    const _encryptionKey = decryptionKey ? _jose.default.JWK.asKey(JSON.parse(decryptionKey)) : getDerivedEncryptionKey(secret);

    const decryptedToken = _jose.default.JWE.decrypt(token, _encryptionKey, decryptionOptions);

    tokenToVerify = decryptedToken.toString("utf8");
  }

  const _signingKey = verificationKey ? _jose.default.JWK.asKey(JSON.parse(verificationKey)) : getDerivedSigningKey(secret);

  return _jose.default.JWT.verify(tokenToVerify, _signingKey, verificationOptions);
}

async function getToken(params) {
  var _req$headers$authoriz;

  const {
    req,
    secureCookie = !(!process.env.NEXTAUTH_URL || process.env.NEXTAUTH_URL.startsWith("http://")),
    cookieName = secureCookie ? "__Secure-next-auth.session-token" : "next-auth.session-token",
    raw = false,
    decode: _decode = decode
  } = params !== null && params !== void 0 ? params : {};
  if (!req) throw new Error("Must pass `req` to JWT getToken()");
  let token = req.cookies[cookieName];

  if (!token && ((_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(" ")[0]) === "Bearer") {
    const urlEncodedToken = req.headers.authorization.split(" ")[1];
    token = decodeURIComponent(urlEncodedToken);
  }

  if (raw) {
    return token;
  }

  try {
    return await _decode({
      token,
      ...params
    });
  } catch (_unused) {
    return null;
  }
}

let DERIVED_SIGNING_KEY_WARNING = false;
let DERIVED_ENCRYPTION_KEY_WARNING = false;

function hkdf(secret, {
  byteLength,
  encryptionInfo,
  digest = "sha256"
}) {
  if (_crypto.default.hkdfSync) {
    return Buffer.from(_crypto.default.hkdfSync(digest, secret, Buffer.alloc(0), encryptionInfo, byteLength));
  }

  return __webpack_require__(/*! futoin-hkdf */ "futoin-hkdf")(secret, byteLength, {
    info: encryptionInfo,
    hash: digest
  });
}

function getDerivedSigningKey(secret) {
  if (!DERIVED_SIGNING_KEY_WARNING) {
    _logger.default.warn("JWT_AUTO_GENERATED_SIGNING_KEY");

    DERIVED_SIGNING_KEY_WARNING = true;
  }

  const buffer = hkdf(secret, {
    byteLength: 64,
    encryptionInfo: "NextAuth.js Generated Signing Key"
  });

  const key = _jose.default.JWK.asKey(buffer, {
    alg: DEFAULT_SIGNATURE_ALGORITHM,
    use: "sig",
    kid: "nextauth-auto-generated-signing-key"
  });

  return key;
}

function getDerivedEncryptionKey(secret) {
  if (!DERIVED_ENCRYPTION_KEY_WARNING) {
    _logger.default.warn("JWT_AUTO_GENERATED_ENCRYPTION_KEY");

    DERIVED_ENCRYPTION_KEY_WARNING = true;
  }

  const buffer = hkdf(secret, {
    byteLength: 32,
    encryptionInfo: "NextAuth.js Generated Encryption Key"
  });

  const key = _jose.default.JWK.asKey(buffer, {
    alg: DEFAULT_ENCRYPTION_ALGORITHM,
    use: "enc",
    kid: "nextauth-auto-generated-encryption-key"
  });

  return key;
}

/***/ }),

/***/ "./node_modules/next-auth/jwt/types.js":
/*!*********************************************!*\
  !*** ./node_modules/next-auth/jwt/types.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

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

/***/ "./node_modules/next-auth/lib/merge.js":
/*!*********************************************!*\
  !*** ./node_modules/next-auth/lib/merge.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.merge = merge;

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

function merge(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        merge(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }

  return merge(target, ...sources);
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

/***/ "./node_modules/next-auth/providers/github.js":
/*!****************************************************!*\
  !*** ./node_modules/next-auth/providers/github.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = GitHub;

function GitHub(options) {
  return {
    id: "github",
    name: "GitHub",
    type: "oauth",
    authorization: "https://github.com/login/oauth/authorize?scope=read:user+user:email",
    token: "https://github.com/login/oauth/access_token",
    userinfo: "https://api.github.com/user",

    profile(profile) {
      return {
        id: profile.id.toString(),
        name: profile.name || profile.login,
        email: profile.email,
        image: profile.avatar_url
      };
    },

    options
  };
}

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

/***/ "./node_modules/next-auth/server/index.js":
/*!************************************************!*\
  !*** ./node_modules/next-auth/server/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var jwt = _interopRequireWildcard(__webpack_require__(/*! ../jwt */ "./node_modules/next-auth/jwt/index.js"));

var _parseUrl = _interopRequireDefault(__webpack_require__(/*! ../lib/parse-url */ "./node_modules/next-auth/lib/parse-url.js"));

var _logger = _interopRequireWildcard(__webpack_require__(/*! ../lib/logger */ "./node_modules/next-auth/lib/logger.js"));

var cookie = _interopRequireWildcard(__webpack_require__(/*! ./lib/cookie */ "./node_modules/next-auth/server/lib/cookie.js"));

var _defaultCallbacks = __webpack_require__(/*! ./lib/default-callbacks */ "./node_modules/next-auth/server/lib/default-callbacks.js");

var _providers = _interopRequireDefault(__webpack_require__(/*! ./lib/providers */ "./node_modules/next-auth/server/lib/providers.js"));

var routes = _interopRequireWildcard(__webpack_require__(/*! ./routes */ "./node_modules/next-auth/server/routes/index.js"));

var _pages = _interopRequireDefault(__webpack_require__(/*! ./pages */ "./node_modules/next-auth/server/pages/index.js"));

var _callbackUrlHandler = _interopRequireDefault(__webpack_require__(/*! ./lib/callback-url-handler */ "./node_modules/next-auth/server/lib/callback-url-handler.js"));

var _extendRes = _interopRequireDefault(__webpack_require__(/*! ./lib/extend-res */ "./node_modules/next-auth/server/lib/extend-res.js"));

var _csrfTokenHandler = _interopRequireDefault(__webpack_require__(/*! ./lib/csrf-token-handler */ "./node_modules/next-auth/server/lib/csrf-token-handler.js"));

var _errors = __webpack_require__(/*! ./errors */ "./node_modules/next-auth/server/errors.js");

var _utils = _interopRequireDefault(__webpack_require__(/*! ./lib/utils */ "./node_modules/next-auth/server/lib/utils.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

if (!process.env.NEXTAUTH_URL) {
  _logger.default.warn("NEXTAUTH_URL");
}

async function NextAuthHandler(req, res, userOptions) {
  var _process$env$NEXTAUTH, _userOptions$useSecur, _provider$version, _userOptions$events, _process$env$NEXTAUTH2;

  if (userOptions.logger) {
    (0, _logger.setLogger)(userOptions.logger);
  }

  if (userOptions.debug) {
    ;
    process.env._NEXTAUTH_DEBUG = true;
  }

  (0, _extendRes.default)(req, res);

  if (!req.query.nextauth) {
    const message = "Cannot find [...nextauth].js in pages/api/auth. Make sure the filename is written correctly.";

    _logger.default.error("MISSING_NEXTAUTH_API_ROUTE_ERROR", new Error(message));

    return res.status(500).end(`Error: ${message}`);
  }

  const {
    nextauth,
    action = nextauth[0],
    providerId = nextauth[1],
    error = nextauth[1]
  } = req.query;
  delete req.query.nextauth;
  const {
    basePath,
    baseUrl
  } = (0, _parseUrl.default)((_process$env$NEXTAUTH = process.env.NEXTAUTH_URL) !== null && _process$env$NEXTAUTH !== void 0 ? _process$env$NEXTAUTH : process.env.VERCEL_URL);
  const cookies = { ...cookie.defaultCookies((_userOptions$useSecur = userOptions.useSecureCookies) !== null && _userOptions$useSecur !== void 0 ? _userOptions$useSecur : baseUrl.startsWith("https://")),
    ...userOptions.cookies
  };
  const secret = (0, _utils.default)({
    userOptions,
    basePath,
    baseUrl
  });
  const providers = (0, _providers.default)({
    providers: userOptions.providers,
    base: `${baseUrl}${basePath}`
  });
  const provider = providers.find(({
    id
  }) => id === providerId);

  if ((provider === null || provider === void 0 ? void 0 : provider.type) === "oauth" && !((_provider$version = provider.version) !== null && _provider$version !== void 0 && _provider$version.startsWith("1.")) && !provider.checks) {
    provider.checks = ["state"];
  }

  const maxAge = 30 * 24 * 60 * 60;
  const options = {
    debug: false,
    pages: {},
    theme: "auto",
    ...userOptions,
    baseUrl,
    basePath,
    action: action,
    provider,
    cookies,
    secret,
    providers,
    session: {
      jwt: !userOptions.adapter,
      maxAge,
      updateAge: 24 * 60 * 60,
      ...userOptions.session
    },
    jwt: {
      secret,
      maxAge,
      encode: jwt.encode,
      decode: jwt.decode,
      ...userOptions.jwt
    },
    events: (0, _errors.eventsErrorHandler)((_userOptions$events = userOptions.events) !== null && _userOptions$events !== void 0 ? _userOptions$events : {}, _logger.default),
    adapter: (0, _errors.adapterErrorHandler)(userOptions.adapter, _logger.default),
    callbacks: { ..._defaultCallbacks.defaultCallbacks,
      ...userOptions.callbacks
    },
    logger: _logger.default,
    callbackUrl: (_process$env$NEXTAUTH2 = process.env.NEXTAUTH_URL) !== null && _process$env$NEXTAUTH2 !== void 0 ? _process$env$NEXTAUTH2 : "http://localhost:3000"
  };
  req.options = options;
  (0, _csrfTokenHandler.default)(req, res);
  await (0, _callbackUrlHandler.default)(req, res);
  const render = (0, _pages.default)(req, res);
  const {
    pages
  } = req.options;

  if (req.method === "GET") {
    switch (action) {
      case "providers":
        return routes.providers(req, res);

      case "session":
        return await routes.session(req, res);

      case "csrf":
        return res.json({
          csrfToken: req.options.csrfToken
        });

      case "signin":
        if (pages.signIn) {
          let signinUrl = `${pages.signIn}${pages.signIn.includes("?") ? "&" : "?"}callbackUrl=${req.options.callbackUrl}`;

          if (error) {
            signinUrl = `${signinUrl}&error=${error}`;
          }

          return res.redirect(signinUrl);
        }

        return render.signin();

      case "signout":
        if (pages.signOut) return res.redirect(pages.signOut);
        return render.signout();

      case "callback":
        if (provider) {
          return await routes.callback(req, res);
        }

        break;

      case "verify-request":
        if (pages.verifyRequest) {
          return res.redirect(pages.verifyRequest);
        }

        return render.verifyRequest();

      case "error":
        if (pages.error) {
          return res.redirect(`${pages.error}${pages.error.includes("?") ? "&" : "?"}error=${error}`);
        }

        if (["Signin", "OAuthSignin", "OAuthCallback", "OAuthCreateAccount", "EmailCreateAccount", "Callback", "OAuthAccountNotLinked", "EmailSignin", "CredentialsSignin", "SessionRequired"].includes(error)) {
          return res.redirect(`${baseUrl}${basePath}/signin?error=${error}`);
        }

        return render.error({
          error
        });

      default:
    }
  } else if (req.method === "POST") {
    switch (action) {
      case "signin":
        if (req.options.csrfTokenVerified && provider) {
          return await routes.signin(req, res);
        }

        return res.redirect(`${baseUrl}${basePath}/signin?csrf=true`);

      case "signout":
        if (req.options.csrfTokenVerified) {
          return await routes.signout(req, res);
        }

        return res.redirect(`${baseUrl}${basePath}/signout?csrf=true`);

      case "callback":
        if (provider) {
          if (provider.type === "credentials" && !req.options.csrfTokenVerified) {
            return res.redirect(`${baseUrl}${basePath}/signin?csrf=true`);
          }

          return await routes.callback(req, res);
        }

        break;

      case "_log":
        if (userOptions.logger) {
          try {
            const {
              code,
              level,
              ...metadata
            } = req.body;

            _logger.default[level](code, metadata);
          } catch (error) {
            _logger.default.error("LOGGER_ERROR", error);
          }
        }

        return res.end();

      default:
    }
  }

  return res.status(400).end(`Error: HTTP ${req.method} is not supported for ${req.url}`);
}

function NextAuth(...args) {
  if (args.length === 1) {
    return async (req, res) => await NextAuthHandler(req, res, args[0]);
  }

  return NextAuthHandler(args[0], args[1], args[2]);
}

var _default = NextAuth;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next-auth/server/lib/callback-handler.js":
/*!***************************************************************!*\
  !*** ./node_modules/next-auth/server/lib/callback-handler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = callbackHandler;

var _errors = __webpack_require__(/*! ../errors */ "./node_modules/next-auth/server/errors.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/next-auth/server/lib/utils.js");

var _crypto = __webpack_require__(/*! crypto */ "crypto");

async function callbackHandler(sessionToken, profile, account, options) {
  if (!(account !== null && account !== void 0 && account.providerAccountId) || !account.type) throw new Error("Missing or invalid provider account");
  if (!["email", "oauth"].includes(account.type)) throw new Error("Provider not supported");
  const {
    adapter,
    jwt,
    events,
    session: {
      jwt: useJwtSession
    }
  } = options;

  if (!adapter) {
    return {
      user: profile,
      account,
      session: {}
    };
  }

  const {
    createUser,
    updateUser,
    getUser,
    getUserByAccount,
    getUserByEmail,
    linkAccount,
    createSession,
    getSessionAndUser,
    deleteSession
  } = adapter;
  let session = null;
  let user = null;
  let isNewUser = false;

  if (sessionToken) {
    if (useJwtSession) {
      try {
        session = await jwt.decode({ ...jwt,
          token: sessionToken
        });

        if (session && "sub" in session && session.sub) {
          user = await getUser(session.sub);
        }
      } catch (_unused) {}
    } else {
      const userAndSession = await getSessionAndUser(sessionToken);

      if (userAndSession) {
        session = userAndSession.session;
        user = userAndSession.user;
      }
    }
  }

  if (account.type === "email") {
    const userByEmail = profile.email ? await getUserByEmail(profile.email) : null;

    if (userByEmail) {
      var _user, _events$updateUser;

      if (((_user = user) === null || _user === void 0 ? void 0 : _user.id) !== userByEmail.id && !useJwtSession && sessionToken) {
        await deleteSession(sessionToken);
      }

      user = await updateUser({
        id: userByEmail.id,
        emailVerified: new Date()
      });
      await ((_events$updateUser = events.updateUser) === null || _events$updateUser === void 0 ? void 0 : _events$updateUser.call(events, {
        user
      }));
    } else {
      var _events$createUser;

      const newUser = { ...profile,
        emailVerified: new Date()
      };
      delete newUser.id;
      user = await createUser(newUser);
      await ((_events$createUser = events.createUser) === null || _events$createUser === void 0 ? void 0 : _events$createUser.call(events, {
        user
      }));
      isNewUser = true;
    }

    session = useJwtSession ? {} : await createSession({
      sessionToken: generateSessionToken(),
      userId: user.id,
      expires: (0, _utils.fromDate)(options.session.maxAge)
    });
    return {
      session,
      user,
      isNewUser
    };
  } else if (account.type === "oauth") {
    const userByAccount = await getUserByAccount({
      providerAccountId: account.providerAccountId,
      provider: account.provider
    });

    if (userByAccount) {
      if (user) {
        if (userByAccount.id === user.id) {
          return {
            session,
            user,
            isNewUser
          };
        }

        throw new _errors.AccountNotLinkedError("The account is already associated with another user");
      }

      session = useJwtSession ? {} : await createSession({
        sessionToken: generateSessionToken(),
        userId: userByAccount.id,
        expires: (0, _utils.fromDate)(options.session.maxAge)
      });
      return {
        session,
        user: userByAccount,
        isNewUser
      };
    } else {
      var _events$createUser2, _events$linkAccount2;

      if (user) {
        var _events$linkAccount;

        await linkAccount({ ...account,
          userId: user.id
        });
        await ((_events$linkAccount = events.linkAccount) === null || _events$linkAccount === void 0 ? void 0 : _events$linkAccount.call(events, {
          user,
          account
        }));
        return {
          session,
          user,
          isNewUser
        };
      }

      const userByEmail = profile.email ? await getUserByEmail(profile.email) : null;

      if (userByEmail) {
        throw new _errors.AccountNotLinkedError("Another account already exists with the same e-mail address");
      }

      const newUser = { ...profile,
        emailVerified: null
      };
      delete newUser.id;
      user = await createUser(newUser);
      await ((_events$createUser2 = events.createUser) === null || _events$createUser2 === void 0 ? void 0 : _events$createUser2.call(events, {
        user
      }));
      await linkAccount({ ...account,
        userId: user.id
      });
      await ((_events$linkAccount2 = events.linkAccount) === null || _events$linkAccount2 === void 0 ? void 0 : _events$linkAccount2.call(events, {
        user,
        account
      }));
      session = useJwtSession ? {} : await createSession({
        sessionToken: generateSessionToken(),
        userId: user.id,
        expires: (0, _utils.fromDate)(options.session.maxAge)
      });
      return {
        session,
        user,
        isNewUser: true
      };
    }
  }
}

function generateSessionToken() {
  var _randomUUID;

  return (_randomUUID = _crypto.randomUUID === null || _crypto.randomUUID === void 0 ? void 0 : (0, _crypto.randomUUID)()) !== null && _randomUUID !== void 0 ? _randomUUID : (0, _crypto.randomBytes)(32).toString("hex");
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/callback-url-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next-auth/server/lib/callback-url-handler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = callbackUrlHandler;

var cookie = _interopRequireWildcard(__webpack_require__(/*! ../lib/cookie */ "./node_modules/next-auth/server/lib/cookie.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function callbackUrlHandler(req, res) {
  const {
    query
  } = req;
  const {
    body
  } = req;
  const {
    cookies,
    baseUrl,
    callbacks
  } = req.options;
  let callbackUrl = baseUrl;
  const callbackUrlParamValue = body.callbackUrl || query.callbackUrl || null;
  const callbackUrlCookieValue = req.cookies[cookies.callbackUrl.name] || null;

  if (callbackUrlParamValue) {
    callbackUrl = await callbacks.redirect({
      url: callbackUrlParamValue,
      baseUrl
    });
  } else if (callbackUrlCookieValue) {
    callbackUrl = await callbacks.redirect({
      url: callbackUrlCookieValue,
      baseUrl
    });
  }

  if (callbackUrl && callbackUrl !== callbackUrlCookieValue) {
    cookie.set(res, cookies.callbackUrl.name, callbackUrl, cookies.callbackUrl.options);
  }

  req.options.callbackUrl = callbackUrl;
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/cookie.js":
/*!*****************************************************!*\
  !*** ./node_modules/next-auth/server/lib/cookie.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.set = set;
exports.defaultCookies = defaultCookies;

function set(res, name, value, options = {}) {
  const stringValue = typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

  if ("maxAge" in options) {
    var _options$maxAge, _options$maxAge2;

    options.expires = new Date(Date.now() + ((_options$maxAge = options.maxAge) !== null && _options$maxAge !== void 0 ? _options$maxAge : 0));
    options.maxAge = ((_options$maxAge2 = options.maxAge) !== null && _options$maxAge2 !== void 0 ? _options$maxAge2 : 0) / 1000;
  }

  let setCookieHeader = res.getHeader("Set-Cookie") || [];

  if (!Array.isArray(setCookieHeader)) {
    setCookieHeader = [setCookieHeader];
  }

  setCookieHeader.push(_serialize(name, String(stringValue), options));
  res.setHeader("Set-Cookie", setCookieHeader);
}

function _serialize(name, val, options) {
  const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;

  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }

  const value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }

  let str = `${name}=${value}`;

  if (opt.maxAge != null) {
    const maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }

    str += `; Max-Age=${Math.floor(maxAge)}`;
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }

    str += `; Domain=${opt.domain}`;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }

    str += `; Path=${opt.path}`;
  } else {
    str += "; Path=/";
  }

  if (opt.expires) {
    let expires = opt.expires;

    if (typeof opt.expires.toUTCString === "function") {
      expires = opt.expires.toUTCString();
    } else {
      const dateExpires = new Date(opt.expires);
      expires = dateExpires.toUTCString();
    }

    str += `; Expires=${expires}`;
  }

  if (opt.httpOnly) {
    str += "; HttpOnly";
  }

  if (opt.secure) {
    str += "; Secure";
  }

  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;

      case "lax":
        str += "; SameSite=Lax";
        break;

      case "strict":
        str += "; SameSite=Strict";
        break;

      case "none":
        str += "; SameSite=None";
        break;

      default:
        throw new TypeError("option sameSite is invalid");
    }
  }

  return str;
}

function defaultCookies(useSecureCookies) {
  const cookiePrefix = useSecureCookies ? "__Secure-" : "";
  return {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    callbackUrl: {
      name: `${cookiePrefix}next-auth.callback-url`,
      options: {
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    csrfToken: {
      name: `${useSecureCookies ? "__Host-" : ""}next-auth.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    pkceCodeVerifier: {
      name: `${cookiePrefix}next-auth.pkce.code_verifier`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/csrf-token-handler.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next-auth/server/lib/csrf-token-handler.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = csrfTokenHandler;

var _crypto = __webpack_require__(/*! crypto */ "crypto");

var cookie = _interopRequireWildcard(__webpack_require__(/*! ./cookie */ "./node_modules/next-auth/server/lib/cookie.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function csrfTokenHandler(req, res) {
  const {
    cookies,
    secret
  } = req.options;

  if (cookies.csrfToken.name in req.cookies) {
    const [csrfToken, csrfTokenHash] = req.cookies[cookies.csrfToken.name].split("|");
    const expectedCsrfTokenHash = (0, _crypto.createHash)("sha256").update(`${csrfToken}${secret}`).digest("hex");

    if (csrfTokenHash === expectedCsrfTokenHash) {
      const csrfTokenVerified = req.method === "POST" && csrfToken === req.body.csrfToken;
      req.options.csrfToken = csrfToken;
      req.options.csrfTokenVerified = csrfTokenVerified;
      return;
    }
  }

  const csrfToken = (0, _crypto.randomBytes)(32).toString("hex");
  const csrfTokenHash = (0, _crypto.createHash)("sha256").update(`${csrfToken}${secret}`).digest("hex");
  const csrfTokenCookie = `${csrfToken}|${csrfTokenHash}`;
  cookie.set(res, cookies.csrfToken.name, csrfTokenCookie, cookies.csrfToken.options);
  req.options.csrfToken = csrfToken;
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/default-callbacks.js":
/*!****************************************************************!*\
  !*** ./node_modules/next-auth/server/lib/default-callbacks.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultCallbacks = void 0;
const defaultCallbacks = {
  signIn() {
    return true;
  },

  redirect({
    url,
    baseUrl
  }) {
    if (url.startsWith(baseUrl)) return url;
    return baseUrl;
  },

  session({
    session
  }) {
    return session;
  },

  jwt({
    token
  }) {
    return token;
  }

};
exports.defaultCallbacks = defaultCallbacks;

/***/ }),

/***/ "./node_modules/next-auth/server/lib/email/signin.js":
/*!***********************************************************!*\
  !*** ./node_modules/next-auth/server/lib/email/signin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = email;

var _crypto = __webpack_require__(/*! crypto */ "crypto");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next-auth/server/lib/utils.js");

async function email(identifier, options) {
  var _await$provider$gener, _provider$generateVer, _provider$maxAge;

  const {
    baseUrl,
    basePath,
    adapter,
    provider,
    logger,
    callbackUrl
  } = options;
  const token = (_await$provider$gener = await ((_provider$generateVer = provider.generateVerificationToken) === null || _provider$generateVer === void 0 ? void 0 : _provider$generateVer.call(provider))) !== null && _await$provider$gener !== void 0 ? _await$provider$gener : (0, _crypto.randomBytes)(32).toString("hex");
  const ONE_DAY_IN_SECONDS = 86400;
  const expires = new Date(Date.now() + ((_provider$maxAge = provider.maxAge) !== null && _provider$maxAge !== void 0 ? _provider$maxAge : ONE_DAY_IN_SECONDS) * 1000);
  await adapter.createVerificationToken({
    identifier,
    token: (0, _utils.hashToken)(token, options),
    expires
  });
  const params = new URLSearchParams({
    callbackUrl,
    token,
    email: identifier
  });
  const url = `${baseUrl}${basePath}/callback/${provider.id}?${params}`;

  try {
    await provider.sendVerificationRequest({
      identifier,
      token,
      expires,
      url,
      provider
    });
  } catch (error) {
    logger.error("SEND_VERIFICATION_EMAIL_ERROR", {
      identifier,
      url,
      error
    });
    throw new Error("SEND_VERIFICATION_EMAIL_ERROR");
  }
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/extend-res.js":
/*!*********************************************************!*\
  !*** ./node_modules/next-auth/server/lib/extend-res.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = extendRes;

function extendRes(req, res) {
  res.redirect = url => {
    var _req$body;

    if (((_req$body = req.body) === null || _req$body === void 0 ? void 0 : _req$body.json) === "true") {
      return res.json({
        url
      });
    }

    res.status(302).setHeader("Location", url);
    return res.end();
  };
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/oauth/authorization-url.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next-auth/server/lib/oauth/authorization-url.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getAuthorizationUrl;

var _client = __webpack_require__(/*! ../oauth/client */ "./node_modules/next-auth/server/lib/oauth/client.js");

var _clientLegacy = __webpack_require__(/*! ../oauth/client-legacy */ "./node_modules/next-auth/server/lib/oauth/client-legacy.js");

var _stateHandler = __webpack_require__(/*! ../oauth/state-handler */ "./node_modules/next-auth/server/lib/oauth/state-handler.js");

var _pkceHandler = __webpack_require__(/*! ../oauth/pkce-handler */ "./node_modules/next-auth/server/lib/oauth/pkce-handler.js");

async function getAuthorizationUrl(req, res) {
  const {
    logger
  } = req.options;

  try {
    var _provider$version;

    const provider = req.options.provider;
    let params = {};

    if (typeof provider.authorization === "string") {
      const parsedUrl = new URL(provider.authorization);
      const parsedParams = Object.fromEntries(parsedUrl.searchParams.entries());
      params = { ...params,
        ...parsedParams
      };
    } else {
      var _provider$authorizati;

      params = { ...params,
        ...((_provider$authorizati = provider.authorization) === null || _provider$authorizati === void 0 ? void 0 : _provider$authorizati.params)
      };
    }

    params = { ...params,
      ...req.query
    };

    if ((_provider$version = provider.version) !== null && _provider$version !== void 0 && _provider$version.startsWith("1.")) {
      const client = (0, _clientLegacy.oAuth1Client)(req.options);
      const tokens = await client.getOAuthRequestToken(params);
      const url = `${provider.authorization}?${new URLSearchParams({
        oauth_token: tokens.oauth_token,
        oauth_token_secret: tokens.oauth_token_secret,
        ...tokens.params
      })}`;
      logger.debug("GET_AUTHORIZATION_URL", {
        url
      });
      return url;
    }

    const client = await (0, _client.openidClient)(req.options);
    const pkce = await (0, _pkceHandler.createPKCE)(req, res);
    const url = client.authorizationUrl({ ...params,
      ...pkce,
      state: (0, _stateHandler.createState)(req)
    });
    logger.debug("GET_AUTHORIZATION_URL", {
      url
    });
    return url;
  } catch (error) {
    logger.error("GET_AUTHORIZATION_URL_ERROR", error);
    throw error;
  }
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/oauth/callback.js":
/*!*************************************************************!*\
  !*** ./node_modules/next-auth/server/lib/oauth/callback.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = oAuthCallback;

var _client = __webpack_require__(/*! ./client */ "./node_modules/next-auth/server/lib/oauth/client.js");

var _clientLegacy = __webpack_require__(/*! ./client-legacy */ "./node_modules/next-auth/server/lib/oauth/client-legacy.js");

var _stateHandler = __webpack_require__(/*! ./state-handler */ "./node_modules/next-auth/server/lib/oauth/state-handler.js");

var _pkceHandler = __webpack_require__(/*! ./pkce-handler */ "./node_modules/next-auth/server/lib/oauth/pkce-handler.js");

var _errors = __webpack_require__(/*! ../../errors */ "./node_modules/next-auth/server/errors.js");

var _openidClient = __webpack_require__(/*! openid-client */ "openid-client");

async function oAuthCallback(req, res) {
  var _req$body$error, _provider$version;

  const {
    logger
  } = req.options;
  const provider = req.options.provider;
  const errorMessage = (_req$body$error = req.body.error) !== null && _req$body$error !== void 0 ? _req$body$error : req.query.error;

  if (errorMessage) {
    const error = new Error(errorMessage);
    logger.error("OAUTH_CALLBACK_HANDLER_ERROR", {
      error,
      body: req.body,
      providerId: provider.id
    });
    throw error;
  }

  if ((_provider$version = provider.version) !== null && _provider$version !== void 0 && _provider$version.startsWith("1.")) {
    try {
      const client = await (0, _clientLegacy.oAuth1Client)(req.options);
      const {
        oauth_token,
        oauth_verifier
      } = req.query;
      const tokens = await client.getOAuthAccessToken(oauth_token, null, oauth_verifier);
      let profile = await client.get(provider.profileUrl, tokens.oauth_token, tokens.oauth_token_secret);

      if (typeof profile === "string") {
        profile = JSON.parse(profile);
      }

      return await getProfile({
        profile,
        tokens,
        provider,
        logger
      });
    } catch (error) {
      logger.error("OAUTH_V1_GET_ACCESS_TOKEN_ERROR", error);
      throw error;
    }
  }

  try {
    var _provider$token, _provider$token2, _provider$userinfo, _ref, _req$body$user;

    const client = await (0, _client.openidClient)(req.options);
    let tokens;
    const checks = {
      code_verifier: await (0, _pkceHandler.usePKCECodeVerifier)(req, res),
      state: (0, _stateHandler.getState)(req)
    };
    const params = { ...client.callbackParams(req),
      ...((_provider$token = provider.token) === null || _provider$token === void 0 ? void 0 : _provider$token.params)
    };

    if ((_provider$token2 = provider.token) !== null && _provider$token2 !== void 0 && _provider$token2.request) {
      const response = await provider.token.request({
        provider,
        params,
        checks,
        client
      });
      tokens = new _openidClient.TokenSet(response.tokens);
    } else if (provider.idToken) {
      tokens = await client.callback(provider.callbackUrl, params, checks);
    } else {
      tokens = await client.oauthCallback(provider.callbackUrl, params, checks);
    }

    if (Array.isArray(tokens.scope)) {
      tokens.scope = tokens.scope.join(" ");
    }

    let profile;

    if ((_provider$userinfo = provider.userinfo) !== null && _provider$userinfo !== void 0 && _provider$userinfo.request) {
      profile = await provider.userinfo.request({
        provider,
        tokens,
        client
      });
    } else if (provider.idToken) {
      profile = tokens.claims();
    } else {
      var _provider$userinfo2;

      profile = await client.userinfo(tokens, {
        params: (_provider$userinfo2 = provider.userinfo) === null || _provider$userinfo2 === void 0 ? void 0 : _provider$userinfo2.params
      });
    }

    profile.user = JSON.parse((_ref = (_req$body$user = req.body.user) !== null && _req$body$user !== void 0 ? _req$body$user : req.query.user) !== null && _ref !== void 0 ? _ref : null);
    return await getProfile({
      profile,
      provider,
      tokens,
      logger
    });
  } catch (error) {
    logger.error("OAUTH_CALLBACK_ERROR", {
      error,
      providerId: provider.id
    });
    throw new _errors.OAuthCallbackError(error);
  }
}

async function getProfile({
  profile: OAuthProfile,
  tokens,
  provider,
  logger
}) {
  try {
    var _profile$email;

    logger.debug("PROFILE_DATA", {
      OAuthProfile
    });
    const profile = await provider.profile(OAuthProfile, tokens);
    profile.email = (_profile$email = profile.email) === null || _profile$email === void 0 ? void 0 : _profile$email.toLowerCase();
    return {
      profile,
      account: {
        provider: provider.id,
        type: provider.type,
        providerAccountId: profile.id.toString(),
        ...tokens
      },
      OAuthProfile
    };
  } catch (error) {
    logger.error("OAUTH_PARSE_PROFILE_ERROR", {
      error,
      OAuthProfile
    });
    return {
      profile: null,
      account: null,
      OAuthProfile
    };
  }
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/oauth/client-legacy.js":
/*!******************************************************************!*\
  !*** ./node_modules/next-auth/server/lib/oauth/client-legacy.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.oAuth1Client = oAuth1Client;

var _oauth = __webpack_require__(/*! oauth */ "oauth");

function oAuth1Client(options) {
  const provider = options.provider;
  const oauth1Client = new _oauth.OAuth(provider.requestTokenUrl, provider.accessTokenUrl, provider.clientId, provider.clientSecret, provider.version || "1.0", provider.callbackUrl, provider.encoding || "HMAC-SHA1");
  const originalGet = oauth1Client.get.bind(oauth1Client);

  oauth1Client.get = (...args) => {
    return new Promise((resolve, reject) => {
      originalGet(...args, (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve(result);
      });
    });
  };

  const originalGetOAuth1AccessToken = oauth1Client.getOAuthAccessToken.bind(oauth1Client);

  oauth1Client.getOAuthAccessToken = (...args) => {
    return new Promise((resolve, reject) => {
      originalGetOAuth1AccessToken(...args, (error, oauth_token, oauth_token_secret) => {
        if (error) {
          return reject(error);
        }

        resolve({
          oauth_token,
          oauth_token_secret
        });
      });
    });
  };

  const originalGetOAuthRequestToken = oauth1Client.getOAuthRequestToken.bind(oauth1Client);

  oauth1Client.getOAuthRequestToken = (params = {}) => {
    return new Promise((resolve, reject) => {
      originalGetOAuthRequestToken(params, (error, oauth_token, oauth_token_secret, params) => {
        if (error) {
          return reject(error);
        }

        resolve({
          oauth_token,
          oauth_token_secret,
          params
        });
      });
    });
  };

  return oauth1Client;
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/oauth/client.js":
/*!***********************************************************!*\
  !*** ./node_modules/next-auth/server/lib/oauth/client.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.openidClient = openidClient;

var _openidClient = __webpack_require__(/*! openid-client */ "openid-client");

async function openidClient(options) {
  const provider = options.provider;
  let issuer;

  if (provider.wellKnown) {
    issuer = await _openidClient.Issuer.discover(provider.wellKnown);
  } else {
    var _provider$authorizati, _provider$token$url, _provider$userinfo$ur;

    issuer = new _openidClient.Issuer({
      issuer: provider.issuer,
      authorization_endpoint: (_provider$authorizati = provider.authorization.url) !== null && _provider$authorizati !== void 0 ? _provider$authorizati : provider.authorization,
      token_endpoint: (_provider$token$url = provider.token.url) !== null && _provider$token$url !== void 0 ? _provider$token$url : provider.token,
      userinfo_endpoint: (_provider$userinfo$ur = provider.userinfo.url) !== null && _provider$userinfo$ur !== void 0 ? _provider$userinfo$ur : provider.userinfo
    });
  }

  const client = new issuer.Client({
    client_id: provider.clientId,
    client_secret: provider.clientSecret,
    redirect_uris: [provider.callbackUrl]
  });
  return client;
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/oauth/pkce-handler.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next-auth/server/lib/oauth/pkce-handler.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createPKCE = createPKCE;
exports.usePKCECodeVerifier = usePKCECodeVerifier;

var cookie = _interopRequireWildcard(__webpack_require__(/*! ../cookie */ "./node_modules/next-auth/server/lib/cookie.js"));

var jwt = _interopRequireWildcard(__webpack_require__(/*! ../../../jwt */ "./node_modules/next-auth/jwt/index.js"));

var _openidClient = __webpack_require__(/*! openid-client */ "openid-client");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PKCE_LENGTH = 64;
const PKCE_CODE_CHALLENGE_METHOD = "S256";
const PKCE_MAX_AGE = 60 * 15;

async function createPKCE(req, res) {
  var _provider$checks;

  const {
    cookies,
    logger
  } = req.options;
  const provider = req.options.provider;

  if (!((_provider$checks = provider.checks) !== null && _provider$checks !== void 0 && _provider$checks.includes("pkce"))) {
    return;
  }

  const codeVerifier = _openidClient.generators.codeVerifier(PKCE_LENGTH);

  const codeChallenge = _openidClient.generators.codeChallenge(codeVerifier);

  const encryptedCodeVerifier = await jwt.encode({
    maxAge: PKCE_MAX_AGE,
    ...req.options.jwt,
    token: {
      code_verifier: codeVerifier
    },
    encryption: true
  });
  const cookieExpires = new Date();
  cookieExpires.setTime(cookieExpires.getTime() + PKCE_MAX_AGE * 1000);
  cookie.set(res, cookies.pkceCodeVerifier.name, encryptedCodeVerifier, {
    expires: cookieExpires.toISOString(),
    ...cookies.pkceCodeVerifier.options
  });
  logger.debug("CREATE_PKCE_CHALLENGE_VERIFIER", {
    pkce: {
      code_challenge: codeChallenge,
      code_verifier: codeVerifier
    },
    pkceLength: PKCE_LENGTH,
    method: PKCE_CODE_CHALLENGE_METHOD
  });
  return {
    code_challenge: codeChallenge,
    code_challenge_method: PKCE_CODE_CHALLENGE_METHOD
  };
}

async function usePKCECodeVerifier(req, res) {
  var _pkce$code_verifier;

  const provider = req.options.provider;
  const {
    cookies
  } = req.options;

  if (!(provider !== null && provider !== void 0 && provider.checks.includes("pkce")) || !(cookies.pkceCodeVerifier.name in req.cookies)) {
    return;
  }

  const pkce = await jwt.decode({ ...req.options.jwt,
    token: req.cookies[cookies.pkceCodeVerifier.name],
    maxAge: PKCE_MAX_AGE,
    encryption: true
  });
  cookie.set(res, cookies.pkceCodeVerifier.name, "", { ...cookies.pkceCodeVerifier.options,
    maxAge: 0
  });
  return (_pkce$code_verifier = pkce === null || pkce === void 0 ? void 0 : pkce.code_verifier) !== null && _pkce$code_verifier !== void 0 ? _pkce$code_verifier : undefined;
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/oauth/state-handler.js":
/*!******************************************************************!*\
  !*** ./node_modules/next-auth/server/lib/oauth/state-handler.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createState = createState;
exports.getState = getState;

var _crypto = __webpack_require__(/*! crypto */ "crypto");

function createState(req) {
  var _provider$checks;

  const {
    csrfToken,
    logger
  } = req.options;
  const provider = req.options.provider;

  if (!((_provider$checks = provider.checks) !== null && _provider$checks !== void 0 && _provider$checks.includes("state"))) {
    return;
  }

  const state = (0, _crypto.createHash)("sha256").update(csrfToken).digest("hex");
  logger.debug("OAUTH_CALLBACK_PROTECTION", {
    state,
    csrfToken
  });
  return state;
}

function getState({
  options
}) {
  const provider = options.provider;

  if (provider !== null && provider !== void 0 && provider.checks.includes("state")) {
    return (0, _crypto.createHash)("sha256").update(options.csrfToken).digest("hex");
  }
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/providers.js":
/*!********************************************************!*\
  !*** ./node_modules/next-auth/server/lib/providers.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = parseProviders;

var _merge = __webpack_require__(/*! ../../lib/merge */ "./node_modules/next-auth/lib/merge.js");

function parseProviders(params) {
  const {
    providers = [],
    base
  } = params;
  return providers.map(({
    options,
    ...defaultOptions
  }) => (0, _merge.merge)(defaultOptions, {
    signinUrl: `${base}/signin/${defaultOptions.id}`,
    callbackUrl: `${base}/callback/${defaultOptions.id}`,
    ...options
  }));
}

/***/ }),

/***/ "./node_modules/next-auth/server/lib/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/next-auth/server/lib/utils.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fromDate = fromDate;
exports.hashToken = hashToken;
exports.default = createSecret;

var _crypto = __webpack_require__(/*! crypto */ "crypto");

function fromDate(time, date = Date.now()) {
  return new Date(date + time * 1000);
}

function hashToken(token, options) {
  var _provider$secret;

  const {
    provider,
    secret
  } = options;
  return (0, _crypto.createHash)("sha256").update(`${token}${(_provider$secret = provider.secret) !== null && _provider$secret !== void 0 ? _provider$secret : secret}`).digest("hex");
}

function createSecret({
  userOptions,
  basePath,
  baseUrl
}) {
  var _userOptions$secret;

  return (_userOptions$secret = userOptions.secret) !== null && _userOptions$secret !== void 0 ? _userOptions$secret : (0, _crypto.createHash)("sha256").update(JSON.stringify({
    baseUrl,
    basePath,
    ...userOptions
  })).digest("hex");
}

/***/ }),

/***/ "./node_modules/next-auth/server/pages/error.js":
/*!******************************************************!*\
  !*** ./node_modules/next-auth/server/pages/error.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Error;

var _preact = __webpack_require__(/*! preact */ "preact");

function Error({
  baseUrl,
  basePath,
  error = "default",
  res
}) {
  var _errors$error$toLower;

  const signinPageUrl = `${baseUrl}${basePath}/signin`;
  const errors = {
    default: {
      statusCode: 200,
      heading: "Error",
      message: (0, _preact.h)("p", null, (0, _preact.h)("a", {
        className: "site",
        href: baseUrl
      }, baseUrl.replace(/^https?:\/\//, "")))
    },
    configuration: {
      statusCode: 500,
      heading: "Server error",
      message: (0, _preact.h)("div", null, (0, _preact.h)("p", null, "There is a problem with the server configuration."), (0, _preact.h)("p", null, "Check the server logs for more information."))
    },
    accessdenied: {
      statusCode: 403,
      heading: "Access Denied",
      message: (0, _preact.h)("div", null, (0, _preact.h)("p", null, "You do not have permission to sign in."), (0, _preact.h)("p", null, (0, _preact.h)("a", {
        className: "button",
        href: signinPageUrl
      }, "Sign in")))
    },
    verification: {
      statusCode: 403,
      heading: "Unable to sign in",
      message: (0, _preact.h)("div", null, (0, _preact.h)("p", null, "The sign in link is no longer valid."), (0, _preact.h)("p", null, "It may have been used already or it may have expired.")),
      signin: (0, _preact.h)("p", null, (0, _preact.h)("a", {
        className: "button",
        href: signinPageUrl
      }, "Sign in"))
    }
  };
  const {
    statusCode,
    heading,
    message,
    signin
  } = (_errors$error$toLower = errors[error.toLowerCase()]) !== null && _errors$error$toLower !== void 0 ? _errors$error$toLower : errors.default;
  res.status(statusCode);
  return (0, _preact.h)("div", {
    className: "error"
  }, (0, _preact.h)("h1", null, heading), (0, _preact.h)("div", {
    className: "message"
  }, message), signin);
}

/***/ }),

/***/ "./node_modules/next-auth/server/pages/index.js":
/*!******************************************************!*\
  !*** ./node_modules/next-auth/server/pages/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = renderPage;

var _preactRenderToString = _interopRequireDefault(__webpack_require__(/*! preact-render-to-string */ "preact-render-to-string"));

var _signin = _interopRequireDefault(__webpack_require__(/*! ./signin */ "./node_modules/next-auth/server/pages/signin.js"));

var _signout = _interopRequireDefault(__webpack_require__(/*! ./signout */ "./node_modules/next-auth/server/pages/signout.js"));

var _verifyRequest = _interopRequireDefault(__webpack_require__(/*! ./verify-request */ "./node_modules/next-auth/server/pages/verify-request.js"));

var _error = _interopRequireDefault(__webpack_require__(/*! ./error */ "./node_modules/next-auth/server/pages/error.js"));

var _css = _interopRequireDefault(__webpack_require__(/*! ../../css */ "./node_modules/next-auth/css/index.js"));

function renderPage(req, res) {
  const {
    baseUrl,
    basePath,
    callbackUrl,
    csrfToken,
    providers,
    theme
  } = req.options;
  res.setHeader("Content-Type", "text/html");

  function send({
    html,
    title
  }) {
    res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${(0, _css.default)()}</style><title>${title}</title></head><body class="__next-auth-theme-${theme}"><div class="page">${(0, _preactRenderToString.default)(html)}</div></body></html>`);
  }

  return {
    signin(props) {
      send({
        html: (0, _signin.default)({
          csrfToken,
          providers,
          callbackUrl,
          ...req.query,
          ...props
        }),
        title: "Sign In"
      });
    },

    signout(props) {
      send({
        html: (0, _signout.default)({
          csrfToken,
          baseUrl,
          basePath,
          ...props
        }),
        title: "Sign Out"
      });
    },

    verifyRequest(props) {
      send({
        html: (0, _verifyRequest.default)({
          baseUrl,
          ...props
        }),
        title: "Verify Request"
      });
    },

    error(props) {
      send({
        html: (0, _error.default)({
          basePath,
          baseUrl,
          res,
          ...props
        }),
        title: "Error"
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next-auth/server/pages/signin.js":
/*!*******************************************************!*\
  !*** ./node_modules/next-auth/server/pages/signin.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Signin;

var _preact = __webpack_require__(/*! preact */ "preact");

function Signin({
  csrfToken,
  providers,
  callbackUrl,
  email,
  error: errorType
}) {
  var _errors$errorType;

  const providersToRender = providers.filter(provider => {
    if (provider.type === "oauth" || provider.type === "email") {
      return true;
    } else if (provider.type === "credentials" && provider.credentials) {
      return true;
    }

    return false;
  });
  const errors = {
    Signin: "Try signing in with a different account.",
    OAuthSignin: "Try signing in with a different account.",
    OAuthCallback: "Try signing in with a different account.",
    OAuthCreateAccount: "Try signing in with a different account.",
    EmailCreateAccount: "Try signing in with a different account.",
    Callback: "Try signing in with a different account.",
    OAuthAccountNotLinked: "To confirm your identity, sign in with the same account you used originally.",
    EmailSignin: "Check your email inbox.",
    CredentialsSignin: "Sign in failed. Check the details you provided are correct.",
    default: "Unable to sign in."
  };
  const error = errorType && ((_errors$errorType = errors[errorType]) !== null && _errors$errorType !== void 0 ? _errors$errorType : errors.default);
  return (0, _preact.h)("div", {
    className: "signin"
  }, error && (0, _preact.h)("div", {
    className: "error"
  }, (0, _preact.h)("p", null, error)), providersToRender.map((provider, i) => (0, _preact.h)("div", {
    key: provider.id,
    className: "provider"
  }, provider.type === "oauth" && (0, _preact.h)("form", {
    action: provider.signinUrl,
    method: "POST"
  }, (0, _preact.h)("input", {
    type: "hidden",
    name: "csrfToken",
    value: csrfToken
  }), callbackUrl && (0, _preact.h)("input", {
    type: "hidden",
    name: "callbackUrl",
    value: callbackUrl
  }), (0, _preact.h)("button", {
    type: "submit",
    className: "button"
  }, "Sign in with ", provider.name)), (provider.type === "email" || provider.type === "credentials") && i > 0 && providersToRender[i - 1].type !== "email" && providersToRender[i - 1].type !== "credentials" && (0, _preact.h)("hr", null), provider.type === "email" && (0, _preact.h)("form", {
    action: provider.signinUrl,
    method: "POST"
  }, (0, _preact.h)("input", {
    type: "hidden",
    name: "csrfToken",
    value: csrfToken
  }), (0, _preact.h)("label", {
    htmlFor: `input-email-for-${provider.id}-provider`
  }, "Email"), (0, _preact.h)("input", {
    id: `input-email-for-${provider.id}-provider`,
    autoFocus: true,
    type: "text",
    name: "email",
    value: email,
    placeholder: "email@example.com"
  }), (0, _preact.h)("button", {
    type: "submit"
  }, "Sign in with ", provider.name)), provider.type === "credentials" && (0, _preact.h)("form", {
    action: provider.callbackUrl,
    method: "POST"
  }, (0, _preact.h)("input", {
    type: "hidden",
    name: "csrfToken",
    value: csrfToken
  }), Object.keys(provider.credentials).map(credential => {
    return (0, _preact.h)("div", {
      key: `input-group-${provider.id}`
    }, (0, _preact.h)("label", {
      htmlFor: `input-${credential}-for-${provider.id}-provider`
    }, provider.credentials[credential].label || credential), (0, _preact.h)("input", {
      name: credential,
      id: `input-${credential}-for-${provider.id}-provider`,
      type: provider.credentials[credential].type || "text",
      value: provider.credentials[credential].value || "",
      placeholder: provider.credentials[credential].placeholder || ""
    }));
  }), (0, _preact.h)("button", {
    type: "submit"
  }, "Sign in with ", provider.name)), (provider.type === "email" || provider.type === "credentials") && i + 1 < providersToRender.length && (0, _preact.h)("hr", null))));
}

/***/ }),

/***/ "./node_modules/next-auth/server/pages/signout.js":
/*!********************************************************!*\
  !*** ./node_modules/next-auth/server/pages/signout.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Signout;

var _preact = __webpack_require__(/*! preact */ "preact");

function Signout({
  baseUrl,
  basePath,
  csrfToken
}) {
  return (0, _preact.h)("div", {
    className: "signout"
  }, (0, _preact.h)("h1", null, "Are you sure you want to sign out?"), (0, _preact.h)("form", {
    action: `${baseUrl}${basePath}/signout`,
    method: "POST"
  }, (0, _preact.h)("input", {
    type: "hidden",
    name: "csrfToken",
    value: csrfToken
  }), (0, _preact.h)("button", {
    type: "submit"
  }, "Sign out")));
}

/***/ }),

/***/ "./node_modules/next-auth/server/pages/verify-request.js":
/*!***************************************************************!*\
  !*** ./node_modules/next-auth/server/pages/verify-request.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = VerifyRequest;

var _preact = __webpack_require__(/*! preact */ "preact");

function VerifyRequest({
  baseUrl
}) {
  return (0, _preact.h)("div", {
    className: "verify-request"
  }, (0, _preact.h)("h1", null, "Check your email"), (0, _preact.h)("p", null, "A sign in link has been sent to your email address."), (0, _preact.h)("p", null, (0, _preact.h)("a", {
    className: "site",
    href: baseUrl
  }, baseUrl.replace(/^https?:\/\//, ""))));
}

/***/ }),

/***/ "./node_modules/next-auth/server/routes/callback.js":
/*!**********************************************************!*\
  !*** ./node_modules/next-auth/server/routes/callback.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = callback;

var _callback = _interopRequireDefault(__webpack_require__(/*! ../lib/oauth/callback */ "./node_modules/next-auth/server/lib/oauth/callback.js"));

var _callbackHandler = _interopRequireDefault(__webpack_require__(/*! ../lib/callback-handler */ "./node_modules/next-auth/server/lib/callback-handler.js"));

var cookie = _interopRequireWildcard(__webpack_require__(/*! ../lib/cookie */ "./node_modules/next-auth/server/lib/cookie.js"));

var _utils = __webpack_require__(/*! ../lib/utils */ "./node_modules/next-auth/server/lib/utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function callback(req, res) {
  var _req$cookies$cookies$, _req$cookies;

  const {
    provider,
    adapter,
    baseUrl,
    basePath,
    cookies,
    callbackUrl,
    pages,
    jwt,
    events,
    callbacks,
    session: {
      jwt: useJwtSession,
      maxAge: sessionMaxAge
    },
    logger
  } = req.options;
  const sessionToken = (_req$cookies$cookies$ = (_req$cookies = req.cookies) === null || _req$cookies === void 0 ? void 0 : _req$cookies[cookies.sessionToken.name]) !== null && _req$cookies$cookies$ !== void 0 ? _req$cookies$cookies$ : null;

  if (provider.type === "oauth") {
    try {
      const {
        profile,
        account,
        OAuthProfile
      } = await (0, _callback.default)(req, res);

      try {
        var _events$signIn;

        logger.debug("OAUTH_CALLBACK_RESPONSE", {
          profile,
          account,
          OAuthProfile
        });

        if (!profile) {
          return res.redirect(`${baseUrl}${basePath}/signin`);
        }

        let userOrProfile = profile;

        if (adapter) {
          const {
            getUserByAccount
          } = adapter;
          const userByAccount = await getUserByAccount({
            providerAccountId: account.providerAccountId,
            provider: provider.id
          });
          if (userByAccount) userOrProfile = userByAccount;
        }

        try {
          const isAllowed = await callbacks.signIn({
            user: userOrProfile,
            account,
            profile: OAuthProfile
          });

          if (!isAllowed) {
            return res.redirect(`${baseUrl}${basePath}/error?error=AccessDenied`);
          } else if (typeof isAllowed === "string") {
            return res.redirect(isAllowed);
          }
        } catch (error) {
          return res.redirect(`${baseUrl}${basePath}/error?error=${encodeURIComponent(error.message)}`);
        }

        const {
          user,
          session,
          isNewUser
        } = await (0, _callbackHandler.default)(sessionToken, profile, account, req.options);

        if (useJwtSession) {
          var _user$id;

          const defaultToken = {
            name: user.name,
            email: user.email,
            picture: user.image,
            sub: (_user$id = user.id) === null || _user$id === void 0 ? void 0 : _user$id.toString()
          };
          const token = await callbacks.jwt({
            token: defaultToken,
            user,
            account,
            profile: OAuthProfile,
            isNewUser
          });
          const newEncodedJwt = await jwt.encode({ ...jwt,
            token
          });
          const cookieExpires = new Date();
          cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1000);
          cookie.set(res, cookies.sessionToken.name, newEncodedJwt, {
            expires: cookieExpires.toISOString(),
            ...cookies.sessionToken.options
          });
        } else {
          cookie.set(res, cookies.sessionToken.name, session.sessionToken, {
            expires: session.expires,
            ...cookies.sessionToken.options
          });
        }

        await ((_events$signIn = events.signIn) === null || _events$signIn === void 0 ? void 0 : _events$signIn.call(events, {
          user,
          account,
          profile,
          isNewUser
        }));

        if (isNewUser && pages.newUser) {
          return res.redirect(`${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}callbackUrl=${encodeURIComponent(callbackUrl)}`);
        }

        return res.redirect(callbackUrl || baseUrl);
      } catch (error) {
        if (error.name === "AccountNotLinkedError") {
          return res.redirect(`${baseUrl}${basePath}/error?error=OAuthAccountNotLinked`);
        } else if (error.name === "CreateUserError") {
          return res.redirect(`${baseUrl}${basePath}/error?error=OAuthCreateAccount`);
        }

        logger.error("OAUTH_CALLBACK_HANDLER_ERROR", error);
        return res.redirect(`${baseUrl}${basePath}/error?error=Callback`);
      }
    } catch (error) {
      if (error.name === "OAuthCallbackError") {
        logger.error("CALLBACK_OAUTH_ERROR", error);
        return res.redirect(`${baseUrl}${basePath}/error?error=OAuthCallback`);
      }

      logger.error("OAUTH_CALLBACK_ERROR", error);
      return res.redirect(`${baseUrl}${basePath}/error?error=Callback`);
    }
  } else if (provider.type === "email") {
    try {
      var _ref, _events$signIn2;

      if (!adapter) {
        logger.error("EMAIL_REQUIRES_ADAPTER_ERROR", new Error("E-mail login requires an adapter but it was undefined"));
        return res.redirect(`${baseUrl}${basePath}/error?error=Configuration`);
      }

      const {
        useVerificationToken,
        getUserByEmail
      } = adapter;
      const token = req.query.token;
      const identifier = req.query.email;
      const invite = await useVerificationToken({
        identifier,
        token: (0, _utils.hashToken)(token, req.options)
      });
      const invalidInvite = !invite || invite.expires.valueOf() < Date.now();

      if (invalidInvite) {
        return res.redirect(`${baseUrl}${basePath}/error?error=Verification`);
      }

      const profile = (_ref = identifier ? await getUserByEmail(identifier) : null) !== null && _ref !== void 0 ? _ref : {
        email: identifier
      };
      const account = {
        providerAccountId: profile.email,
        type: "email",
        provider: provider.id
      };

      try {
        const signInCallbackResponse = await callbacks.signIn({
          user: profile,
          account,
          email: {
            email: identifier
          }
        });

        if (!signInCallbackResponse) {
          return res.redirect(`${baseUrl}${basePath}/error?error=AccessDenied`);
        } else if (typeof signInCallbackResponse === "string") {
          return res.redirect(signInCallbackResponse);
        }
      } catch (error) {
        return res.redirect(`${baseUrl}${basePath}/error?error=${encodeURIComponent(error.message)}`);
      }

      const {
        user,
        session,
        isNewUser
      } = await (0, _callbackHandler.default)(sessionToken, profile, account, req.options);

      if (useJwtSession) {
        var _user$id2;

        const defaultToken = {
          name: user.name,
          email: user.email,
          picture: user.image,
          sub: (_user$id2 = user.id) === null || _user$id2 === void 0 ? void 0 : _user$id2.toString()
        };
        const token = await callbacks.jwt({
          token: defaultToken,
          user,
          account,
          isNewUser
        });
        const newEncodedJwt = await jwt.encode({ ...jwt,
          token
        });
        const cookieExpires = new Date();
        cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1000);
        cookie.set(res, cookies.sessionToken.name, newEncodedJwt, {
          expires: cookieExpires.toISOString(),
          ...cookies.sessionToken.options
        });
      } else {
        cookie.set(res, cookies.sessionToken.name, session.sessionToken, {
          expires: session.expires,
          ...cookies.sessionToken.options
        });
      }

      await ((_events$signIn2 = events.signIn) === null || _events$signIn2 === void 0 ? void 0 : _events$signIn2.call(events, {
        user,
        account,
        isNewUser
      }));

      if (isNewUser && pages.newUser) {
        return res.redirect(`${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}callbackUrl=${encodeURIComponent(callbackUrl)}`);
      }

      return res.redirect(callbackUrl || baseUrl);
    } catch (error) {
      if (error.name === "CreateUserError") {
        return res.redirect(`${baseUrl}${basePath}/error?error=EmailCreateAccount`);
      }

      logger.error("CALLBACK_EMAIL_ERROR", error);
      return res.redirect(`${baseUrl}${basePath}/error?error=Callback`);
    }
  } else if (provider.type === "credentials" && req.method === "POST") {
    var _user$id3, _events$signIn3;

    if (!useJwtSession) {
      logger.error("CALLBACK_CREDENTIALS_JWT_ERROR", new Error("Signin in with credentials is only supported if JSON Web Tokens are enabled"));
      return res.status(500).redirect(`${baseUrl}${basePath}/error?error=Configuration`);
    }

    if (!provider.authorize) {
      logger.error("CALLBACK_CREDENTIALS_HANDLER_ERROR", new Error("Must define an authorize() handler to use credentials authentication provider"));
      return res.status(500).redirect(`${baseUrl}${basePath}/error?error=Configuration`);
    }

    const credentials = req.body;
    let user;

    try {
      user = await provider.authorize(credentials, { ...req,
        options: {},
        cookies: {}
      });

      if (!user) {
        return res.status(401).redirect(`${baseUrl}${basePath}/error?${new URLSearchParams({
          error: "CredentialsSignin",
          provider: provider.id
        })}`);
      }
    } catch (error) {
      return res.redirect(`${baseUrl}${basePath}/error?error=${encodeURIComponent(error.message)}`);
    }

    const account = {
      providerAccountId: user.id,
      type: "credentials",
      provider: provider.id
    };

    try {
      const isAllowed = await callbacks.signIn({
        user,
        account,
        credentials
      });

      if (!isAllowed) {
        return res.status(403).redirect(`${baseUrl}${basePath}/error?error=AccessDenied`);
      } else if (typeof isAllowed === "string") {
        return res.redirect(isAllowed);
      }
    } catch (error) {
      return res.redirect(`${baseUrl}${basePath}/error?error=${encodeURIComponent(error.message)}`);
    }

    const defaultToken = {
      name: user.name,
      email: user.email,
      picture: user.image,
      sub: (_user$id3 = user.id) === null || _user$id3 === void 0 ? void 0 : _user$id3.toString()
    };
    const token = await callbacks.jwt({
      token: defaultToken,
      user,
      account,
      isNewUser: false
    });
    const newEncodedJwt = await jwt.encode({ ...jwt,
      token
    });
    const cookieExpires = new Date();
    cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1000);
    cookie.set(res, cookies.sessionToken.name, newEncodedJwt, {
      expires: cookieExpires.toISOString(),
      ...cookies.sessionToken.options
    });
    await ((_events$signIn3 = events.signIn) === null || _events$signIn3 === void 0 ? void 0 : _events$signIn3.call(events, {
      user,
      account
    }));
    return res.redirect(callbackUrl || baseUrl);
  }

  return res.status(500).end(`Error: Callback for provider type ${provider.type} not supported`);
}

/***/ }),

/***/ "./node_modules/next-auth/server/routes/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/next-auth/server/routes/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "callback", ({
  enumerable: true,
  get: function () {
    return _callback.default;
  }
}));
Object.defineProperty(exports, "signin", ({
  enumerable: true,
  get: function () {
    return _signin.default;
  }
}));
Object.defineProperty(exports, "signout", ({
  enumerable: true,
  get: function () {
    return _signout.default;
  }
}));
Object.defineProperty(exports, "session", ({
  enumerable: true,
  get: function () {
    return _session.default;
  }
}));
Object.defineProperty(exports, "providers", ({
  enumerable: true,
  get: function () {
    return _providers.default;
  }
}));

var _callback = _interopRequireDefault(__webpack_require__(/*! ./callback */ "./node_modules/next-auth/server/routes/callback.js"));

var _signin = _interopRequireDefault(__webpack_require__(/*! ./signin */ "./node_modules/next-auth/server/routes/signin.js"));

var _signout = _interopRequireDefault(__webpack_require__(/*! ./signout */ "./node_modules/next-auth/server/routes/signout.js"));

var _session = _interopRequireDefault(__webpack_require__(/*! ./session */ "./node_modules/next-auth/server/routes/session.js"));

var _providers = _interopRequireDefault(__webpack_require__(/*! ./providers */ "./node_modules/next-auth/server/routes/providers.js"));

/***/ }),

/***/ "./node_modules/next-auth/server/routes/providers.js":
/*!***********************************************************!*\
  !*** ./node_modules/next-auth/server/routes/providers.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = providers;

function providers(req, res) {
  const {
    providers
  } = req.options;
  const result = providers.reduce((acc, {
    id,
    name,
    type,
    signinUrl,
    callbackUrl
  }) => {
    acc[id] = {
      id,
      name,
      type,
      signinUrl,
      callbackUrl
    };
    return acc;
  }, {});
  res.json(result);
}

/***/ }),

/***/ "./node_modules/next-auth/server/routes/session.js":
/*!*********************************************************!*\
  !*** ./node_modules/next-auth/server/routes/session.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = session;

var cookie = _interopRequireWildcard(__webpack_require__(/*! ../lib/cookie */ "./node_modules/next-auth/server/lib/cookie.js"));

var _utils = __webpack_require__(/*! ../lib/utils */ "./node_modules/next-auth/server/lib/utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function session(req, res) {
  const {
    cookies,
    adapter,
    jwt,
    events,
    callbacks,
    logger
  } = req.options;
  const useJwtSession = req.options.session.jwt;
  const sessionMaxAge = req.options.session.maxAge;
  const sessionToken = req.cookies[cookies.sessionToken.name];

  if (!sessionToken) {
    return res.json({});
  }

  let response = {};

  if (useJwtSession) {
    try {
      var _events$session;

      const decodedToken = await jwt.decode({ ...jwt,
        token: sessionToken
      });
      const newExpires = (0, _utils.fromDate)(sessionMaxAge);
      const defaultSession = {
        user: {
          name: decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.name,
          email: decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.email,
          image: decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.picture
        },
        expires: newExpires.toISOString()
      };
      const token = await callbacks.jwt({
        token: decodedToken
      });
      const session = await callbacks.session({
        session: defaultSession,
        token
      });
      response = session;
      const newToken = await jwt.encode({ ...jwt,
        token
      });
      cookie.set(res, cookies.sessionToken.name, newToken, {
        expires: newExpires,
        ...cookies.sessionToken.options
      });
      await ((_events$session = events.session) === null || _events$session === void 0 ? void 0 : _events$session.call(events, {
        session,
        token
      }));
    } catch (error) {
      logger.error("JWT_SESSION_ERROR", error);
      cookie.set(res, cookies.sessionToken.name, "", { ...cookies.sessionToken.options,
        maxAge: 0
      });
    }
  } else {
    try {
      const {
        getSessionAndUser,
        deleteSession,
        updateSession
      } = adapter;
      let userAndSession = await getSessionAndUser(sessionToken);

      if (userAndSession && userAndSession.session.expires.valueOf() < Date.now()) {
        await deleteSession(sessionToken);
        userAndSession = null;
      }

      if (userAndSession) {
        var _events$session2;

        const {
          user,
          session
        } = userAndSession;
        const sessionUpdateAge = req.options.session.updateAge;
        const sessionIsDueToBeUpdatedDate = session.expires.valueOf() - sessionMaxAge * 1000 + sessionUpdateAge * 1000;
        const newExpires = (0, _utils.fromDate)(sessionMaxAge);

        if (sessionIsDueToBeUpdatedDate <= Date.now()) {
          await updateSession({
            sessionToken,
            expires: newExpires
          });
        }

        const sessionPayload = await callbacks.session({
          session: {
            user: {
              name: user.name,
              email: user.email,
              image: user.image
            },
            expires: session.expires.toISOString()
          },
          user
        });
        response = sessionPayload;
        cookie.set(res, cookies.sessionToken.name, sessionToken, {
          expires: newExpires,
          ...cookies.sessionToken.options
        });
        await ((_events$session2 = events.session) === null || _events$session2 === void 0 ? void 0 : _events$session2.call(events, {
          session: sessionPayload
        }));
      } else if (sessionToken) {
        cookie.set(res, cookies.sessionToken.name, "", { ...cookies.sessionToken.options,
          maxAge: 0
        });
      }
    } catch (error) {
      logger.error("SESSION_ERROR", error);
    }
  }

  res.json(response);
}

/***/ }),

/***/ "./node_modules/next-auth/server/routes/signin.js":
/*!********************************************************!*\
  !*** ./node_modules/next-auth/server/routes/signin.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = signin;

var _authorizationUrl = _interopRequireDefault(__webpack_require__(/*! ../lib/oauth/authorization-url */ "./node_modules/next-auth/server/lib/oauth/authorization-url.js"));

var _signin = _interopRequireDefault(__webpack_require__(/*! ../lib/email/signin */ "./node_modules/next-auth/server/lib/email/signin.js"));

async function signin(req, res) {
  const {
    baseUrl,
    basePath,
    adapter,
    callbacks,
    logger
  } = req.options;
  const provider = req.options.provider;

  if (!provider.type) {
    return res.status(500).end(`Error: Type not specified for ${provider.name}`);
  }

  if (provider.type === "oauth") {
    try {
      const authorizationUrl = await (0, _authorizationUrl.default)(req, res);
      return res.redirect(authorizationUrl);
    } catch (error) {
      logger.error("SIGNIN_OAUTH_ERROR", {
        error,
        provider
      });
      return res.redirect(`${baseUrl}${basePath}/error?error=OAuthSignin`);
    }
  } else if (provider.type === "email") {
    var _req$body$email$toLow, _req$body$email, _ref;

    if (!adapter) {
      logger.error("EMAIL_REQUIRES_ADAPTER_ERROR", new Error("E-mail login requires an adapter but it was undefined"));
      return res.redirect(`${baseUrl}${basePath}/error?error=Configuration`);
    }

    const email = (_req$body$email$toLow = (_req$body$email = req.body.email) === null || _req$body$email === void 0 ? void 0 : _req$body$email.toLowerCase()) !== null && _req$body$email$toLow !== void 0 ? _req$body$email$toLow : null;
    const {
      getUserByEmail
    } = adapter;
    const user = (_ref = email ? await getUserByEmail(email) : null) !== null && _ref !== void 0 ? _ref : {
      email
    };
    const account = {
      providerAccountId: user.email,
      type: "email",
      provider: provider.id
    };

    try {
      const signInCallbackResponse = await callbacks.signIn({
        user,
        account,
        email: {
          verificationRequest: true
        }
      });

      if (!signInCallbackResponse) {
        return res.redirect(`${baseUrl}${basePath}/error?error=AccessDenied`);
      } else if (typeof signInCallbackResponse === "string") {
        return res.redirect(signInCallbackResponse);
      }
    } catch (error) {
      return res.redirect(`${baseUrl}${basePath}/error?${new URLSearchParams({
        error
      })}}`);
    }

    try {
      await (0, _signin.default)(email, req.options);
    } catch (error) {
      logger.error("SIGNIN_EMAIL_ERROR", error);
      return res.redirect(`${baseUrl}${basePath}/error?error=EmailSignin`);
    }

    const params = new URLSearchParams({
      provider: provider.id,
      type: provider.type
    });
    const url = `${baseUrl}${basePath}/verify-request?${params}`;
    return res.redirect(url);
  }

  return res.redirect(`${baseUrl}${basePath}/signin`);
}

/***/ }),

/***/ "./node_modules/next-auth/server/routes/signout.js":
/*!*********************************************************!*\
  !*** ./node_modules/next-auth/server/routes/signout.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = signout;

var cookie = _interopRequireWildcard(__webpack_require__(/*! ../lib/cookie */ "./node_modules/next-auth/server/lib/cookie.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function signout(req, res) {
  const {
    adapter,
    cookies,
    events,
    jwt,
    callbackUrl,
    logger
  } = req.options;
  const useJwtSession = req.options.session.jwt;
  const sessionToken = req.cookies[cookies.sessionToken.name];

  if (useJwtSession) {
    try {
      var _events$signOut;

      const decodedJwt = await jwt.decode({ ...jwt,
        token: sessionToken
      });
      await ((_events$signOut = events.signOut) === null || _events$signOut === void 0 ? void 0 : _events$signOut.call(events, {
        token: decodedJwt
      }));
    } catch (error) {}
  } else {
    try {
      var _events$signOut2;

      const session = await adapter.deleteSession(sessionToken);
      await ((_events$signOut2 = events.signOut) === null || _events$signOut2 === void 0 ? void 0 : _events$signOut2.call(events, {
        session
      }));
    } catch (error) {
      logger.error("SIGNOUT_ERROR", error);
    }
  }

  cookie.set(res, cookies.sessionToken.name, "", { ...cookies.sessionToken.options,
    maxAge: 0
  });
  return res.redirect(callbackUrl);
}

/***/ }),

/***/ "./node_modules/next-auth/server/types.js":
/*!************************************************!*\
  !*** ./node_modules/next-auth/server/types.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "./node_modules/next-auth/index.js");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ "@next-auth/prisma-adapter");
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ "./node_modules/next-auth/providers/github.js");
/* harmony import */ var _server_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../server/context */ "./src/server/context.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  // Configure one or more authentication providers
  providers: [(0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__.default)({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }) // ...add more providers here
  ],
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
  },
  adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_server_context__WEBPACK_IMPORTED_MODULE_3__.prisma),
  secret: process.env.SECRET
}));

/***/ }),

/***/ "./src/server/context.ts":
/*!*******************************!*\
  !*** ./src/server/context.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prisma": () => (/* binding */ prisma),
/* harmony export */   "createContext": () => (/* binding */ createContext)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({
  log:  true ? ['query', 'error', 'warn'] : 0
});
/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */

const createContext = async ({
  req,
  res
}) => {
  // for API-response caching see https://trpc.io/docs/caching
  return {
    req,
    res,
    prisma
  };
};

/***/ }),

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "futoin-hkdf":
/*!******************************!*\
  !*** external "futoin-hkdf" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("futoin-hkdf");

/***/ }),

/***/ "jose":
/*!***********************!*\
  !*** external "jose" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("jose");

/***/ }),

/***/ "oauth":
/*!************************!*\
  !*** external "oauth" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("oauth");

/***/ }),

/***/ "openid-client":
/*!********************************!*\
  !*** external "openid-client" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("openid-client");

/***/ }),

/***/ "preact":
/*!*************************!*\
  !*** external "preact" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("preact");

/***/ }),

/***/ "preact-render-to-string":
/*!******************************************!*\
  !*** external "preact-render-to-string" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("preact-render-to-string");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VGlCO0FBWXRCQyxFQUFBQSxPQUFPLEVBQUViLHdFQUFhLENBQUNFLG1EQUFELENBWkE7QUFhdEJZLEVBQUFBLE1BQU0sRUFBRVQsT0FBTyxDQUFDQyxHQUFSLENBQVlTO0FBYkUsQ0FBRCxDQUF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFLTyxNQUFNYixNQUFNLEdBQUcsSUFBSWMsd0RBQUosQ0FBaUI7QUFDckNDLEVBQUFBLEdBQUcsRUFDRCxRQUNJLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsTUFBbkIsQ0FESixHQUVJO0FBSitCLENBQWpCLENBQWY7QUFPUDtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQyxhQUFhLEdBQUcsT0FBTztBQUNsQ0MsRUFBQUEsR0FEa0M7QUFFbENDLEVBQUFBO0FBRmtDLENBQVAsS0FHWTtBQUN2QztBQUNBLFNBQU87QUFDTEQsSUFBQUEsR0FESztBQUVMQyxJQUFBQSxHQUZLO0FBR0xsQixJQUFBQTtBQUhLLEdBQVA7QUFLRCxDQVZNOzs7Ozs7Ozs7OztBQ2hCUDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL2Nzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9qd3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvand0L3R5cGVzLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL2xpYi9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvbGliL21lcmdlLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL2xpYi9wYXJzZS11cmwuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1Yi5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvZXJyb3JzLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL2NhbGxiYWNrLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL2xpYi9jYWxsYmFjay11cmwtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL2NzcmYtdG9rZW4taGFuZGxlci5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL2RlZmF1bHQtY2FsbGJhY2tzLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9saWIvZW1haWwvc2lnbmluLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9saWIvZXh0ZW5kLXJlcy5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL29hdXRoL2F1dGhvcml6YXRpb24tdXJsLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9saWIvb2F1dGgvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL2xpYi9vYXV0aC9jbGllbnQtbGVnYWN5LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9saWIvb2F1dGgvY2xpZW50LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9saWIvb2F1dGgvcGtjZS1oYW5kbGVyLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9saWIvb2F1dGgvc3RhdGUtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL3Byb3ZpZGVycy5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL3V0aWxzLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9wYWdlcy9lcnJvci5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL3BhZ2VzL3NpZ25pbi5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvcGFnZXMvc2lnbm91dC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvcGFnZXMvdmVyaWZ5LXJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL3JvdXRlcy9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvcm91dGVzL2luZGV4LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9yb3V0ZXMvcHJvdmlkZXJzLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9yb3V0ZXMvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvcm91dGVzL3NpZ25pbi5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvcm91dGVzL3NpZ25vdXQuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL3R5cGVzLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vc3JjL3NlcnZlci9jb250ZXh0LnRzIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJmdXRvaW4taGtkZlwiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJqb3NlXCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcIm9hdXRoXCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcIm9wZW5pZC1jbGllbnRcIiIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yL2V4dGVybmFsIFwicHJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcInByZWFjdC1yZW5kZXItdG8tc3RyaW5nXCIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOnJvb3R7LS1ib3JkZXItd2lkdGg6MXB4Oy0tYm9yZGVyLXJhZGl1czouM3JlbTstLWNvbG9yLWVycm9yOiNjOTRiNGI7LS1jb2xvci1pbmZvOiMxNTdlZmI7LS1jb2xvci1pbmZvLXRleHQ6I2ZmZn0uX19uZXh0LWF1dGgtdGhlbWUtYXV0bywuX19uZXh0LWF1dGgtdGhlbWUtbGlnaHR7LS1jb2xvci1iYWNrZ3JvdW5kOiNmZmY7LS1jb2xvci10ZXh0OiMwMDA7LS1jb2xvci1wcmltYXJ5OiM0NDQ7LS1jb2xvci1jb250cm9sLWJvcmRlcjojYmJiOy0tY29sb3ItYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kOiNmOWY5Zjk7LS1jb2xvci1idXR0b24tYWN0aXZlLWJvcmRlcjojYWFhOy0tY29sb3Itc2VwZXJhdG9yOiNjY2N9Ll9fbmV4dC1hdXRoLXRoZW1lLWRhcmt7LS1jb2xvci1iYWNrZ3JvdW5kOiMwMDA7LS1jb2xvci10ZXh0OiNmZmY7LS1jb2xvci1wcmltYXJ5OiNjY2M7LS1jb2xvci1jb250cm9sLWJvcmRlcjojNTU1Oy0tY29sb3ItYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kOiMwNjA2MDY7LS1jb2xvci1idXR0b24tYWN0aXZlLWJvcmRlcjojNjY2Oy0tY29sb3Itc2VwZXJhdG9yOiM0NDR9QG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKXsuX19uZXh0LWF1dGgtdGhlbWUtYXV0b3stLWNvbG9yLWJhY2tncm91bmQ6IzAwMDstLWNvbG9yLXRleHQ6I2ZmZjstLWNvbG9yLXByaW1hcnk6I2NjYzstLWNvbG9yLWNvbnRyb2wtYm9yZGVyOiM1NTU7LS1jb2xvci1idXR0b24tYWN0aXZlLWJhY2tncm91bmQ6IzA2MDYwNjstLWNvbG9yLWJ1dHRvbi1hY3RpdmUtYm9yZGVyOiM2NjY7LS1jb2xvci1zZXBlcmF0b3I6IzQ0NH19Ym9keXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLWJhY2tncm91bmQpO2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sU2Vnb2UgVUksUm9ib3RvLFVidW50dSxDYW50YXJlbGwsTm90byBTYW5zLHNhbnMtc2VyaWYsQmxpbmtNYWNTeXN0ZW1Gb250LEhlbHZldGljYSxBcmlhbCxBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7bWFyZ2luOjA7cGFkZGluZzowfWgxe2ZvbnQtd2VpZ2h0OjQwMDttYXJnaW4tYm90dG9tOjEuNXJlbTtwYWRkaW5nOjAgMXJlbX1oMSxwe2NvbG9yOnZhcigtLWNvbG9yLXRleHQpfWZvcm17bWFyZ2luOjA7cGFkZGluZzowfWxhYmVse2NvbG9yOiM2NjY7ZGlzcGxheTpibG9jaztmb250LXdlaWdodDo1MDA7bWFyZ2luLWJvdHRvbTouMjVyZW07dGV4dC1hbGlnbjpsZWZ0fWlucHV0W3R5cGVde2JhY2tncm91bmQ6dmFyKC0tY29sb3ItYmFja2dyb3VuZCk7Ym9yZGVyOnZhcigtLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tY29sb3ItY29udHJvbC1ib3JkZXIpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym94LXNoYWRvdzppbnNldCAwIC4xcmVtIC4ycmVtIHJnYmEoMCwwLDAsLjIpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjp2YXIoLS1jb2xvci10ZXh0KTtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxcmVtO3BhZGRpbmc6LjVyZW0gMXJlbTt3aWR0aDoxMDAlfWlucHV0W3R5cGVdOmZvY3Vze2JveC1zaGFkb3c6bm9uZX1we2ZvbnQtc2l6ZToxLjFyZW07bGluZS1oZWlnaHQ6MnJlbTttYXJnaW46MCAwIDEuNXJlbTtwYWRkaW5nOjAgMXJlbX1hLmJ1dHRvbntsaW5lLWhlaWdodDoxcmVtO3RleHQtZGVjb3JhdGlvbjpub25lfWEuYnV0dG9uLGEuYnV0dG9uOmxpbmssYS5idXR0b246dmlzaXRlZCxidXR0b257YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvci1wcmltYXJ5KX1hLmJ1dHRvbixidXR0b257Ym9yZGVyOnZhcigtLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tY29sb3ItY29udHJvbC1ib3JkZXIpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym94LXNoYWRvdzowIC4xNXJlbSAuM3JlbSByZ2JhKDAsMCwwLC4xNSksaW5zZXQgMCAuMXJlbSAuMnJlbSB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKSxpbnNldCAwIC0uMXJlbSAuMXJlbSByZ2JhKDAsMCwwLC4wNSk7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6NTAwO21hcmdpbjowIDAgLjc1cmVtO3BhZGRpbmc6Ljc1cmVtIDFyZW07cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjphbGwgLjFzIGVhc2UtaW4tb3V0fWEuYnV0dG9uOmhvdmVyLGJ1dHRvbjpob3ZlcntjdXJzb3I6cG9pbnRlcn1hLmJ1dHRvbjphY3RpdmUsYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZCk7Ym9yZGVyLWNvbG9yOnZhcigtLWNvbG9yLWJ1dHRvbi1hY3RpdmUtYm9yZGVyKTtib3gtc2hhZG93OjAgLjE1cmVtIC4zcmVtIHJnYmEoMCwwLDAsLjE1KSxpbnNldCAwIC4xcmVtIC4ycmVtIHZhcigtLWNvbG9yLWJhY2tncm91bmQpLGluc2V0IDAgLS4xcmVtIC4xcmVtIHJnYmEoMCwwLDAsLjEpO2N1cnNvcjpwb2ludGVyfWEuc2l0ZXtjb2xvcjp2YXIoLS1jb2xvci1wcmltYXJ5KTtmb250LXNpemU6MXJlbTtsaW5lLWhlaWdodDoycmVtO3RleHQtZGVjb3JhdGlvbjpub25lfWEuc2l0ZTpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5wYWdle2Rpc3BsYXk6dGFibGU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCV9LnBhZ2U+ZGl2e2Rpc3BsYXk6dGFibGUtY2VsbDtwYWRkaW5nOi41cmVtO3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZXJyb3IgYS5idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXRvcDouNXJlbTtwYWRkaW5nLWxlZnQ6MnJlbTtwYWRkaW5nLXJpZ2h0OjJyZW19LmVycm9yIC5tZXNzYWdle21hcmdpbi1ib3R0b206MS41cmVtfS5zaWduaW4gYS5idXR0b24sLnNpZ25pbiBidXR0b24sLnNpZ25pbiBpbnB1dFt0eXBlPXRleHRde2Rpc3BsYXk6YmxvY2s7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b30uc2lnbmluIGhye2JvcmRlcjowO2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWNvbG9yLXNlcGVyYXRvcik7ZGlzcGxheTpibG9jazttYXJnaW46MS41ZW0gYXV0byAwO292ZXJmbG93OnZpc2libGV9LnNpZ25pbiBocjpiZWZvcmV7YmFja2dyb3VuZDp2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtjb2xvcjojODg4O2NvbnRlbnQ6XFxcIm9yXFxcIjtwYWRkaW5nOjAgLjRyZW07cG9zaXRpb246cmVsYXRpdmU7dG9wOi0uNnJlbX0uc2lnbmluIC5lcnJvcntiYWNrZ3JvdW5kOiNmNWY1ZjU7YmFja2dyb3VuZDp2YXIoLS1jb2xvci1pbmZvKTtib3JkZXItcmFkaXVzOi4zcmVtO2ZvbnQtd2VpZ2h0OjUwMH0uc2lnbmluIC5lcnJvciBwe2NvbG9yOnZhcigtLWNvbG9yLWluZm8tdGV4dCk7Zm9udC1zaXplOi45cmVtO2xpbmUtaGVpZ2h0OjEuMnJlbTtwYWRkaW5nOi41cmVtIDFyZW07dGV4dC1hbGlnbjpsZWZ0fS5zaWduaW4+ZGl2LC5zaWduaW4gZm9ybXtkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG8gLjVyZW19LnNpZ25pbj5kaXYgaW5wdXRbdHlwZV0sLnNpZ25pbiBmb3JtIGlucHV0W3R5cGVde21hcmdpbi1ib3R0b206LjVyZW19LnNpZ25pbj5kaXYgYnV0dG9uLC5zaWduaW4gZm9ybSBidXR0b257d2lkdGg6MTAwJX0uc2lnbmluPmRpdiwuc2lnbmluIGZvcm17bWF4LXdpZHRoOjMwMHB4fVwiIH0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge307XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9zZXJ2ZXIuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfc2VydmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zZXJ2ZXJcIikpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vc2VydmVyL3R5cGVzXCIpO1xuXG5PYmplY3Qua2V5cyhfdHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF90eXBlc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90eXBlc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge1xuICBlbmNvZGU6IHRydWUsXG4gIGRlY29kZTogdHJ1ZSxcbiAgZ2V0VG9rZW46IHRydWVcbn07XG5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuZXhwb3J0cy5nZXRUb2tlbiA9IGdldFRva2VuO1xuXG52YXIgX2NyeXB0byA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNyeXB0b1wiKSk7XG5cbnZhciBfam9zZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImpvc2VcIikpO1xuXG52YXIgX2xvZ2dlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xpYi9sb2dnZXJcIikpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbk9iamVjdC5rZXlzKF90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3R5cGVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3R5cGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuY29uc3QgREVGQVVMVF9TSUdOQVRVUkVfQUxHT1JJVEhNID0gXCJIUzUxMlwiO1xuY29uc3QgREVGQVVMVF9FTkNSWVBUSU9OX0FMR09SSVRITSA9IFwiQTI1NkdDTVwiO1xuY29uc3QgREVGQVVMVF9FTkNSWVBUSU9OX0VOQUJMRUQgPSBmYWxzZTtcbmNvbnN0IERFRkFVTFRfTUFYX0FHRSA9IDMwICogMjQgKiA2MCAqIDYwO1xuXG5hc3luYyBmdW5jdGlvbiBlbmNvZGUoe1xuICB0b2tlbiA9IHt9LFxuICBtYXhBZ2UgPSBERUZBVUxUX01BWF9BR0UsXG4gIHNlY3JldCxcbiAgc2lnbmluZ0tleSxcbiAgc2lnbmluZ09wdGlvbnMgPSB7XG4gICAgZXhwaXJlc0luOiBgJHttYXhBZ2V9c2BcbiAgfSxcbiAgZW5jcnlwdGlvbktleSxcbiAgZW5jcnlwdGlvbk9wdGlvbnMgPSB7XG4gICAgYWxnOiBcImRpclwiLFxuICAgIGVuYzogREVGQVVMVF9FTkNSWVBUSU9OX0FMR09SSVRITSxcbiAgICB6aXA6IFwiREVGXCJcbiAgfSxcbiAgZW5jcnlwdGlvbiA9IERFRkFVTFRfRU5DUllQVElPTl9FTkFCTEVEXG59KSB7XG4gIGNvbnN0IF9zaWduaW5nS2V5ID0gc2lnbmluZ0tleSA/IF9qb3NlLmRlZmF1bHQuSldLLmFzS2V5KEpTT04ucGFyc2Uoc2lnbmluZ0tleSkpIDogZ2V0RGVyaXZlZFNpZ25pbmdLZXkoc2VjcmV0KTtcblxuICBjb25zdCBzaWduZWRUb2tlbiA9IF9qb3NlLmRlZmF1bHQuSldULnNpZ24odG9rZW4sIF9zaWduaW5nS2V5LCBzaWduaW5nT3B0aW9ucyk7XG5cbiAgaWYgKGVuY3J5cHRpb24pIHtcbiAgICBjb25zdCBfZW5jcnlwdGlvbktleSA9IGVuY3J5cHRpb25LZXkgPyBfam9zZS5kZWZhdWx0LkpXSy5hc0tleShKU09OLnBhcnNlKGVuY3J5cHRpb25LZXkpKSA6IGdldERlcml2ZWRFbmNyeXB0aW9uS2V5KHNlY3JldCk7XG5cbiAgICByZXR1cm4gX2pvc2UuZGVmYXVsdC5KV0UuZW5jcnlwdChzaWduZWRUb2tlbiwgX2VuY3J5cHRpb25LZXksIGVuY3J5cHRpb25PcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBzaWduZWRUb2tlbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVjb2RlKHtcbiAgc2VjcmV0LFxuICB0b2tlbixcbiAgbWF4QWdlID0gREVGQVVMVF9NQVhfQUdFLFxuICBzaWduaW5nS2V5LFxuICB2ZXJpZmljYXRpb25LZXkgPSBzaWduaW5nS2V5LFxuICB2ZXJpZmljYXRpb25PcHRpb25zID0ge1xuICAgIG1heFRva2VuQWdlOiBgJHttYXhBZ2V9c2AsXG4gICAgYWxnb3JpdGhtczogW0RFRkFVTFRfU0lHTkFUVVJFX0FMR09SSVRITV1cbiAgfSxcbiAgZW5jcnlwdGlvbktleSxcbiAgZGVjcnlwdGlvbktleSA9IGVuY3J5cHRpb25LZXksXG4gIGRlY3J5cHRpb25PcHRpb25zID0ge1xuICAgIGFsZ29yaXRobXM6IFtERUZBVUxUX0VOQ1JZUFRJT05fQUxHT1JJVEhNXVxuICB9LFxuICBlbmNyeXB0aW9uID0gREVGQVVMVF9FTkNSWVBUSU9OX0VOQUJMRURcbn0pIHtcbiAgaWYgKCF0b2tlbikgcmV0dXJuIG51bGw7XG4gIGxldCB0b2tlblRvVmVyaWZ5ID0gdG9rZW47XG5cbiAgaWYgKGVuY3J5cHRpb24pIHtcbiAgICBjb25zdCBfZW5jcnlwdGlvbktleSA9IGRlY3J5cHRpb25LZXkgPyBfam9zZS5kZWZhdWx0LkpXSy5hc0tleShKU09OLnBhcnNlKGRlY3J5cHRpb25LZXkpKSA6IGdldERlcml2ZWRFbmNyeXB0aW9uS2V5KHNlY3JldCk7XG5cbiAgICBjb25zdCBkZWNyeXB0ZWRUb2tlbiA9IF9qb3NlLmRlZmF1bHQuSldFLmRlY3J5cHQodG9rZW4sIF9lbmNyeXB0aW9uS2V5LCBkZWNyeXB0aW9uT3B0aW9ucyk7XG5cbiAgICB0b2tlblRvVmVyaWZ5ID0gZGVjcnlwdGVkVG9rZW4udG9TdHJpbmcoXCJ1dGY4XCIpO1xuICB9XG5cbiAgY29uc3QgX3NpZ25pbmdLZXkgPSB2ZXJpZmljYXRpb25LZXkgPyBfam9zZS5kZWZhdWx0LkpXSy5hc0tleShKU09OLnBhcnNlKHZlcmlmaWNhdGlvbktleSkpIDogZ2V0RGVyaXZlZFNpZ25pbmdLZXkoc2VjcmV0KTtcblxuICByZXR1cm4gX2pvc2UuZGVmYXVsdC5KV1QudmVyaWZ5KHRva2VuVG9WZXJpZnksIF9zaWduaW5nS2V5LCB2ZXJpZmljYXRpb25PcHRpb25zKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VG9rZW4ocGFyYW1zKSB7XG4gIHZhciBfcmVxJGhlYWRlcnMkYXV0aG9yaXo7XG5cbiAgY29uc3Qge1xuICAgIHJlcSxcbiAgICBzZWN1cmVDb29raWUgPSAhKCFwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwgfHwgcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMLnN0YXJ0c1dpdGgoXCJodHRwOi8vXCIpKSxcbiAgICBjb29raWVOYW1lID0gc2VjdXJlQ29va2llID8gXCJfX1NlY3VyZS1uZXh0LWF1dGguc2Vzc2lvbi10b2tlblwiIDogXCJuZXh0LWF1dGguc2Vzc2lvbi10b2tlblwiLFxuICAgIHJhdyA9IGZhbHNlLFxuICAgIGRlY29kZTogX2RlY29kZSA9IGRlY29kZVxuICB9ID0gcGFyYW1zICE9PSBudWxsICYmIHBhcmFtcyAhPT0gdm9pZCAwID8gcGFyYW1zIDoge307XG4gIGlmICghcmVxKSB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHBhc3MgYHJlcWAgdG8gSldUIGdldFRva2VuKClcIik7XG4gIGxldCB0b2tlbiA9IHJlcS5jb29raWVzW2Nvb2tpZU5hbWVdO1xuXG4gIGlmICghdG9rZW4gJiYgKChfcmVxJGhlYWRlcnMkYXV0aG9yaXogPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKSA9PT0gbnVsbCB8fCBfcmVxJGhlYWRlcnMkYXV0aG9yaXogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZXEkaGVhZGVycyRhdXRob3Jpei5zcGxpdChcIiBcIilbMF0pID09PSBcIkJlYXJlclwiKSB7XG4gICAgY29uc3QgdXJsRW5jb2RlZFRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdChcIiBcIilbMV07XG4gICAgdG9rZW4gPSBkZWNvZGVVUklDb21wb25lbnQodXJsRW5jb2RlZFRva2VuKTtcbiAgfVxuXG4gIGlmIChyYXcpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBfZGVjb2RlKHtcbiAgICAgIHRva2VuLFxuICAgICAgLi4ucGFyYW1zXG4gICAgfSk7XG4gIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5sZXQgREVSSVZFRF9TSUdOSU5HX0tFWV9XQVJOSU5HID0gZmFsc2U7XG5sZXQgREVSSVZFRF9FTkNSWVBUSU9OX0tFWV9XQVJOSU5HID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGhrZGYoc2VjcmV0LCB7XG4gIGJ5dGVMZW5ndGgsXG4gIGVuY3J5cHRpb25JbmZvLFxuICBkaWdlc3QgPSBcInNoYTI1NlwiXG59KSB7XG4gIGlmIChfY3J5cHRvLmRlZmF1bHQuaGtkZlN5bmMpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oX2NyeXB0by5kZWZhdWx0LmhrZGZTeW5jKGRpZ2VzdCwgc2VjcmV0LCBCdWZmZXIuYWxsb2MoMCksIGVuY3J5cHRpb25JbmZvLCBieXRlTGVuZ3RoKSk7XG4gIH1cblxuICByZXR1cm4gcmVxdWlyZShcImZ1dG9pbi1oa2RmXCIpKHNlY3JldCwgYnl0ZUxlbmd0aCwge1xuICAgIGluZm86IGVuY3J5cHRpb25JbmZvLFxuICAgIGhhc2g6IGRpZ2VzdFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVyaXZlZFNpZ25pbmdLZXkoc2VjcmV0KSB7XG4gIGlmICghREVSSVZFRF9TSUdOSU5HX0tFWV9XQVJOSU5HKSB7XG4gICAgX2xvZ2dlci5kZWZhdWx0Lndhcm4oXCJKV1RfQVVUT19HRU5FUkFURURfU0lHTklOR19LRVlcIik7XG5cbiAgICBERVJJVkVEX1NJR05JTkdfS0VZX1dBUk5JTkcgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYnVmZmVyID0gaGtkZihzZWNyZXQsIHtcbiAgICBieXRlTGVuZ3RoOiA2NCxcbiAgICBlbmNyeXB0aW9uSW5mbzogXCJOZXh0QXV0aC5qcyBHZW5lcmF0ZWQgU2lnbmluZyBLZXlcIlxuICB9KTtcblxuICBjb25zdCBrZXkgPSBfam9zZS5kZWZhdWx0LkpXSy5hc0tleShidWZmZXIsIHtcbiAgICBhbGc6IERFRkFVTFRfU0lHTkFUVVJFX0FMR09SSVRITSxcbiAgICB1c2U6IFwic2lnXCIsXG4gICAga2lkOiBcIm5leHRhdXRoLWF1dG8tZ2VuZXJhdGVkLXNpZ25pbmcta2V5XCJcbiAgfSk7XG5cbiAgcmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVyaXZlZEVuY3J5cHRpb25LZXkoc2VjcmV0KSB7XG4gIGlmICghREVSSVZFRF9FTkNSWVBUSU9OX0tFWV9XQVJOSU5HKSB7XG4gICAgX2xvZ2dlci5kZWZhdWx0Lndhcm4oXCJKV1RfQVVUT19HRU5FUkFURURfRU5DUllQVElPTl9LRVlcIik7XG5cbiAgICBERVJJVkVEX0VOQ1JZUFRJT05fS0VZX1dBUk5JTkcgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYnVmZmVyID0gaGtkZihzZWNyZXQsIHtcbiAgICBieXRlTGVuZ3RoOiAzMixcbiAgICBlbmNyeXB0aW9uSW5mbzogXCJOZXh0QXV0aC5qcyBHZW5lcmF0ZWQgRW5jcnlwdGlvbiBLZXlcIlxuICB9KTtcblxuICBjb25zdCBrZXkgPSBfam9zZS5kZWZhdWx0LkpXSy5hc0tleShidWZmZXIsIHtcbiAgICBhbGc6IERFRkFVTFRfRU5DUllQVElPTl9BTEdPUklUSE0sXG4gICAgdXNlOiBcImVuY1wiLFxuICAgIGtpZDogXCJuZXh0YXV0aC1hdXRvLWdlbmVyYXRlZC1lbmNyeXB0aW9uLWtleVwiXG4gIH0pO1xuXG4gIHJldHVybiBrZXk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNldExvZ2dlciA9IHNldExvZ2dlcjtcbmV4cG9ydHMucHJveHlMb2dnZXIgPSBwcm94eUxvZ2dlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9lcnJvcnMgPSByZXF1aXJlKFwiLi4vc2VydmVyL2Vycm9yc1wiKTtcblxuZnVuY3Rpb24gZm9ybWF0RXJyb3Iobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEVycm9yICYmICEobyBpbnN0YW5jZW9mIF9lcnJvcnMuVW5rbm93bkVycm9yKSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBvLm1lc3NhZ2UsXG4gICAgICBzdGFjazogby5zdGFjayxcbiAgICAgIG5hbWU6IG8ubmFtZVxuICAgIH07XG4gIH1cblxuICBpZiAobyAhPT0gbnVsbCAmJiBvICE9PSB2b2lkIDAgJiYgby5lcnJvcikge1xuICAgIHZhciBfbyRtZXNzYWdlO1xuXG4gICAgby5lcnJvciA9IGZvcm1hdEVycm9yKG8uZXJyb3IpO1xuICAgIG8ubWVzc2FnZSA9IChfbyRtZXNzYWdlID0gby5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfbyRtZXNzYWdlICE9PSB2b2lkIDAgPyBfbyRtZXNzYWdlIDogby5lcnJvci5tZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuIG87XG59XG5cbmNvbnN0IF9sb2dnZXIgPSB7XG4gIGVycm9yKGNvZGUsIG1ldGFkYXRhKSB7XG4gICAgbWV0YWRhdGEgPSBmb3JtYXRFcnJvcihtZXRhZGF0YSk7XG4gICAgY29uc29sZS5lcnJvcihgW25leHQtYXV0aF1bZXJyb3JdWyR7Y29kZX1dYCwgYFxcbmh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9lcnJvcnMjJHtjb2RlLnRvTG93ZXJDYXNlKCl9YCwgbWV0YWRhdGEubWVzc2FnZSwgbWV0YWRhdGEpO1xuICB9LFxuXG4gIHdhcm4oY29kZSkge1xuICAgIGNvbnNvbGUud2FybihgW25leHQtYXV0aF1bd2Fybl1bJHtjb2RlfV1gLCBgXFxuaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3dhcm5pbmdzIyR7Y29kZS50b0xvd2VyQ2FzZSgpfWApO1xuICB9LFxuXG4gIGRlYnVnKGNvZGUsIG1ldGFkYXRhKSB7XG4gICAgdmFyIF9wcm9jZXNzLCBfcHJvY2VzcyRlbnY7XG5cbiAgICBpZiAoISgoX3Byb2Nlc3MgPSBwcm9jZXNzKSAhPT0gbnVsbCAmJiBfcHJvY2VzcyAhPT0gdm9pZCAwICYmIChfcHJvY2VzcyRlbnYgPSBfcHJvY2Vzcy5lbnYpICE9PSBudWxsICYmIF9wcm9jZXNzJGVudiAhPT0gdm9pZCAwICYmIF9wcm9jZXNzJGVudi5fTkVYVEFVVEhfREVCVUcpKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coYFtuZXh0LWF1dGhdW2RlYnVnXVske2NvZGV9XWAsIG1ldGFkYXRhKTtcbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBzZXRMb2dnZXIobmV3TG9nZ2VyID0ge30pIHtcbiAgaWYgKG5ld0xvZ2dlci5lcnJvcikgX2xvZ2dlci5lcnJvciA9IG5ld0xvZ2dlci5lcnJvcjtcbiAgaWYgKG5ld0xvZ2dlci53YXJuKSBfbG9nZ2VyLndhcm4gPSBuZXdMb2dnZXIud2FybjtcbiAgaWYgKG5ld0xvZ2dlci5kZWJ1ZykgX2xvZ2dlci5kZWJ1ZyA9IG5ld0xvZ2dlci5kZWJ1Zztcbn1cblxudmFyIF9kZWZhdWx0ID0gX2xvZ2dlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG5mdW5jdGlvbiBwcm94eUxvZ2dlcihsb2dnZXIgPSBfbG9nZ2VyLCBiYXNlUGF0aCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaWVudExvZ2dlciA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBsZXZlbCBpbiBsb2dnZXIpIHtcbiAgICAgIGNsaWVudExvZ2dlcltsZXZlbF0gPSAoY29kZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgX2xvZ2dlcltsZXZlbF0oY29kZSwgbWV0YWRhdGEpO1xuXG4gICAgICAgIGlmIChsZXZlbCA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgbWV0YWRhdGEgPSBmb3JtYXRFcnJvcihtZXRhZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRhZGF0YS5jbGllbnQgPSB0cnVlO1xuICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlUGF0aH0vX2xvZ2A7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICBjb2RlLFxuICAgICAgICAgIC4uLm1ldGFkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VuZEJlYWNvbikge1xuICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBrZWVwYWxpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBjbGllbnRMb2dnZXI7XG4gIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICByZXR1cm4gX2xvZ2dlcjtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tZXJnZSA9IG1lcmdlO1xuXG5mdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGl0ZW0pO1xufVxuXG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XToge31cbiAgICAgICAgfSk7XG4gICAgICAgIG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgIFtrZXldOiBzb3VyY2Vba2V5XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2UodGFyZ2V0LCAuLi5zb3VyY2VzKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlVXJsO1xuXG5mdW5jdGlvbiBwYXJzZVVybCh1cmwpIHtcbiAgY29uc3QgZGVmYXVsdEhvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuICBjb25zdCBkZWZhdWx0UGF0aCA9IFwiL2FwaS9hdXRoXCI7XG5cbiAgaWYgKCF1cmwpIHtcbiAgICB1cmwgPSBgJHtkZWZhdWx0SG9zdH0ke2RlZmF1bHRQYXRofWA7XG4gIH1cblxuICBjb25zdCBwcm90b2NvbCA9IHVybC5zdGFydHNXaXRoKFwiaHR0cDpcIikgPyBcImh0dHBcIiA6IFwiaHR0cHNcIjtcbiAgdXJsID0gdXJsLnJlcGxhY2UoL15odHRwcz86XFwvXFwvLywgXCJcIikucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuICBjb25zdCBbX2hvc3QsIC4uLl9wYXRoXSA9IHVybC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IGJhc2VVcmwgPSBfaG9zdCA/IGAke3Byb3RvY29sfTovLyR7X2hvc3R9YCA6IGRlZmF1bHRIb3N0O1xuICBjb25zdCBiYXNlUGF0aCA9IF9wYXRoLmxlbmd0aCA+IDAgPyBgLyR7X3BhdGguam9pbihcIi9cIil9YCA6IGRlZmF1bHRQYXRoO1xuICByZXR1cm4ge1xuICAgIGJhc2VVcmwsXG4gICAgYmFzZVBhdGhcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdpdEh1YjtcblxuZnVuY3Rpb24gR2l0SHViKG9wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogXCJnaXRodWJcIixcbiAgICBuYW1lOiBcIkdpdEh1YlwiLFxuICAgIHR5cGU6IFwib2F1dGhcIixcbiAgICBhdXRob3JpemF0aW9uOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dpbi9vYXV0aC9hdXRob3JpemU/c2NvcGU9cmVhZDp1c2VyK3VzZXI6ZW1haWxcIixcbiAgICB0b2tlbjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYWNjZXNzX3Rva2VuXCIsXG4gICAgdXNlcmluZm86IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2VyXCIsXG5cbiAgICBwcm9maWxlKHByb2ZpbGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBwcm9maWxlLmlkLnRvU3RyaW5nKCksXG4gICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZSB8fCBwcm9maWxlLmxvZ2luLFxuICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcbiAgICAgICAgaW1hZ2U6IHByb2ZpbGUuYXZhdGFyX3VybFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgb3B0aW9uc1xuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXBwZXJTbmFrZSA9IHVwcGVyU25ha2U7XG5leHBvcnRzLmNhcGl0YWxpemUgPSBjYXBpdGFsaXplO1xuZXhwb3J0cy5ldmVudHNFcnJvckhhbmRsZXIgPSBldmVudHNFcnJvckhhbmRsZXI7XG5leHBvcnRzLmFkYXB0ZXJFcnJvckhhbmRsZXIgPSBhZGFwdGVyRXJyb3JIYW5kbGVyO1xuZXhwb3J0cy5BY2NvdW50Tm90TGlua2VkRXJyb3IgPSBleHBvcnRzLk9BdXRoQ2FsbGJhY2tFcnJvciA9IGV4cG9ydHMuVW5rbm93bkVycm9yID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG5jbGFzcyBVbmtub3duRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGVycm9yKSB7XG4gICAgdmFyIF9lcnJvciRtZXNzYWdlO1xuXG4gICAgc3VwZXIoKF9lcnJvciRtZXNzYWdlID0gZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UpICE9PSBudWxsICYmIF9lcnJvciRtZXNzYWdlICE9PSB2b2lkIDAgPyBfZXJyb3IkbWVzc2FnZSA6IGVycm9yKTtcbiAgICB0aGlzLm5hbWUgPSBcIlVua25vd25FcnJvclwiO1xuXG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrXG4gICAgfTtcbiAgfVxuXG59XG5cbmV4cG9ydHMuVW5rbm93bkVycm9yID0gVW5rbm93bkVycm9yO1xuXG5jbGFzcyBPQXV0aENhbGxiYWNrRXJyb3IgZXh0ZW5kcyBVbmtub3duRXJyb3Ige1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGhpcywgXCJuYW1lXCIsIFwiT0F1dGhDYWxsYmFja0Vycm9yXCIpO1xuICB9XG5cbn1cblxuZXhwb3J0cy5PQXV0aENhbGxiYWNrRXJyb3IgPSBPQXV0aENhbGxiYWNrRXJyb3I7XG5cbmNsYXNzIEFjY291bnROb3RMaW5rZWRFcnJvciBleHRlbmRzIFVua25vd25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0aGlzLCBcIm5hbWVcIiwgXCJBY2NvdW50Tm90TGlua2VkRXJyb3JcIik7XG4gIH1cblxufVxuXG5leHBvcnRzLkFjY291bnROb3RMaW5rZWRFcnJvciA9IEFjY291bnROb3RMaW5rZWRFcnJvcjtcblxuZnVuY3Rpb24gdXBwZXJTbmFrZShzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoLyhbQS1aXSkvZywgXCJfJDFcIikudG9VcHBlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzKSB7XG4gIHJldHVybiBgJHtzWzBdLnRvVXBwZXJDYXNlKCl9JHtzLnNsaWNlKDEpfWA7XG59XG5cbmZ1bmN0aW9uIGV2ZW50c0Vycm9ySGFuZGxlcihtZXRob2RzLCBsb2dnZXIpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1ldGhvZHMpLnJlZHVjZSgoYWNjLCBuYW1lKSA9PiB7XG4gICAgYWNjW25hbWVdID0gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IG1ldGhvZHNbbmFtZV07XG4gICAgICAgIHJldHVybiBhd2FpdCBtZXRob2QoLi4uYXJncyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihgJHt1cHBlclNuYWtlKG5hbWUpfV9FVkVOVF9FUlJPUmAsIGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGFkYXB0ZXJFcnJvckhhbmRsZXIoYWRhcHRlciwgbG9nZ2VyKSB7XG4gIGlmICghYWRhcHRlcikgcmV0dXJuO1xuICByZXR1cm4gT2JqZWN0LmtleXMoYWRhcHRlcikucmVkdWNlKChhY2MsIG5hbWUpID0+IHtcbiAgICBhY2NbbmFtZV0gPSBhc3luYyAoLi4uYXJncykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBhZGFwdGVyXyR7bmFtZX1gLCB7XG4gICAgICAgICAgYXJnc1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gYWRhcHRlcltuYW1lXTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IG1ldGhvZCguLi5hcmdzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihgYWRhcHRlcl9lcnJvcl8ke25hbWV9YCwgZXJyb3IpO1xuICAgICAgICBjb25zdCBlID0gbmV3IFVua25vd25FcnJvcihlcnJvcik7XG4gICAgICAgIGUubmFtZSA9IGAke2NhcGl0YWxpemUobmFtZSl9RXJyb3JgO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgand0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2p3dFwiKSk7XG5cbnZhciBfcGFyc2VVcmwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9saWIvcGFyc2UtdXJsXCIpKTtcblxudmFyIF9sb2dnZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbGliL2xvZ2dlclwiKSk7XG5cbnZhciBjb29raWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9saWIvY29va2llXCIpKTtcblxudmFyIF9kZWZhdWx0Q2FsbGJhY2tzID0gcmVxdWlyZShcIi4vbGliL2RlZmF1bHQtY2FsbGJhY2tzXCIpO1xuXG52YXIgX3Byb3ZpZGVycyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3Byb3ZpZGVyc1wiKSk7XG5cbnZhciByb3V0ZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9yb3V0ZXNcIikpO1xuXG52YXIgX3BhZ2VzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYWdlc1wiKSk7XG5cbnZhciBfY2FsbGJhY2tVcmxIYW5kbGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvY2FsbGJhY2stdXJsLWhhbmRsZXJcIikpO1xuXG52YXIgX2V4dGVuZFJlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2V4dGVuZC1yZXNcIikpO1xuXG52YXIgX2NzcmZUb2tlbkhhbmRsZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9jc3JmLXRva2VuLWhhbmRsZXJcIikpO1xuXG52YXIgX2Vycm9ycyA9IHJlcXVpcmUoXCIuL2Vycm9yc1wiKTtcblxudmFyIF91dGlscyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3V0aWxzXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIChub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuaWYgKCFwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwpIHtcbiAgX2xvZ2dlci5kZWZhdWx0Lndhcm4oXCJORVhUQVVUSF9VUkxcIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIE5leHRBdXRoSGFuZGxlcihyZXEsIHJlcywgdXNlck9wdGlvbnMpIHtcbiAgdmFyIF9wcm9jZXNzJGVudiRORVhUQVVUSCwgX3VzZXJPcHRpb25zJHVzZVNlY3VyLCBfcHJvdmlkZXIkdmVyc2lvbiwgX3VzZXJPcHRpb25zJGV2ZW50cywgX3Byb2Nlc3MkZW52JE5FWFRBVVRIMjtcblxuICBpZiAodXNlck9wdGlvbnMubG9nZ2VyKSB7XG4gICAgKDAsIF9sb2dnZXIuc2V0TG9nZ2VyKSh1c2VyT3B0aW9ucy5sb2dnZXIpO1xuICB9XG5cbiAgaWYgKHVzZXJPcHRpb25zLmRlYnVnKSB7XG4gICAgO1xuICAgIHByb2Nlc3MuZW52Ll9ORVhUQVVUSF9ERUJVRyA9IHRydWU7XG4gIH1cblxuICAoMCwgX2V4dGVuZFJlcy5kZWZhdWx0KShyZXEsIHJlcyk7XG5cbiAgaWYgKCFyZXEucXVlcnkubmV4dGF1dGgpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gXCJDYW5ub3QgZmluZCBbLi4ubmV4dGF1dGhdLmpzIGluIHBhZ2VzL2FwaS9hdXRoLiBNYWtlIHN1cmUgdGhlIGZpbGVuYW1lIGlzIHdyaXR0ZW4gY29ycmVjdGx5LlwiO1xuXG4gICAgX2xvZ2dlci5kZWZhdWx0LmVycm9yKFwiTUlTU0lOR19ORVhUQVVUSF9BUElfUk9VVEVfRVJST1JcIiwgbmV3IEVycm9yKG1lc3NhZ2UpKTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuZW5kKGBFcnJvcjogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIG5leHRhdXRoLFxuICAgIGFjdGlvbiA9IG5leHRhdXRoWzBdLFxuICAgIHByb3ZpZGVySWQgPSBuZXh0YXV0aFsxXSxcbiAgICBlcnJvciA9IG5leHRhdXRoWzFdXG4gIH0gPSByZXEucXVlcnk7XG4gIGRlbGV0ZSByZXEucXVlcnkubmV4dGF1dGg7XG4gIGNvbnN0IHtcbiAgICBiYXNlUGF0aCxcbiAgICBiYXNlVXJsXG4gIH0gPSAoMCwgX3BhcnNlVXJsLmRlZmF1bHQpKChfcHJvY2VzcyRlbnYkTkVYVEFVVEggPSBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwpICE9PSBudWxsICYmIF9wcm9jZXNzJGVudiRORVhUQVVUSCAhPT0gdm9pZCAwID8gX3Byb2Nlc3MkZW52JE5FWFRBVVRIIDogcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCk7XG4gIGNvbnN0IGNvb2tpZXMgPSB7IC4uLmNvb2tpZS5kZWZhdWx0Q29va2llcygoX3VzZXJPcHRpb25zJHVzZVNlY3VyID0gdXNlck9wdGlvbnMudXNlU2VjdXJlQ29va2llcykgIT09IG51bGwgJiYgX3VzZXJPcHRpb25zJHVzZVNlY3VyICE9PSB2b2lkIDAgPyBfdXNlck9wdGlvbnMkdXNlU2VjdXIgOiBiYXNlVXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKSksXG4gICAgLi4udXNlck9wdGlvbnMuY29va2llc1xuICB9O1xuICBjb25zdCBzZWNyZXQgPSAoMCwgX3V0aWxzLmRlZmF1bHQpKHtcbiAgICB1c2VyT3B0aW9ucyxcbiAgICBiYXNlUGF0aCxcbiAgICBiYXNlVXJsXG4gIH0pO1xuICBjb25zdCBwcm92aWRlcnMgPSAoMCwgX3Byb3ZpZGVycy5kZWZhdWx0KSh7XG4gICAgcHJvdmlkZXJzOiB1c2VyT3B0aW9ucy5wcm92aWRlcnMsXG4gICAgYmFzZTogYCR7YmFzZVVybH0ke2Jhc2VQYXRofWBcbiAgfSk7XG4gIGNvbnN0IHByb3ZpZGVyID0gcHJvdmlkZXJzLmZpbmQoKHtcbiAgICBpZFxuICB9KSA9PiBpZCA9PT0gcHJvdmlkZXJJZCk7XG5cbiAgaWYgKChwcm92aWRlciA9PT0gbnVsbCB8fCBwcm92aWRlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvdmlkZXIudHlwZSkgPT09IFwib2F1dGhcIiAmJiAhKChfcHJvdmlkZXIkdmVyc2lvbiA9IHByb3ZpZGVyLnZlcnNpb24pICE9PSBudWxsICYmIF9wcm92aWRlciR2ZXJzaW9uICE9PSB2b2lkIDAgJiYgX3Byb3ZpZGVyJHZlcnNpb24uc3RhcnRzV2l0aChcIjEuXCIpKSAmJiAhcHJvdmlkZXIuY2hlY2tzKSB7XG4gICAgcHJvdmlkZXIuY2hlY2tzID0gW1wic3RhdGVcIl07XG4gIH1cblxuICBjb25zdCBtYXhBZ2UgPSAzMCAqIDI0ICogNjAgKiA2MDtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgcGFnZXM6IHt9LFxuICAgIHRoZW1lOiBcImF1dG9cIixcbiAgICAuLi51c2VyT3B0aW9ucyxcbiAgICBiYXNlVXJsLFxuICAgIGJhc2VQYXRoLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIHByb3ZpZGVyLFxuICAgIGNvb2tpZXMsXG4gICAgc2VjcmV0LFxuICAgIHByb3ZpZGVycyxcbiAgICBzZXNzaW9uOiB7XG4gICAgICBqd3Q6ICF1c2VyT3B0aW9ucy5hZGFwdGVyLFxuICAgICAgbWF4QWdlLFxuICAgICAgdXBkYXRlQWdlOiAyNCAqIDYwICogNjAsXG4gICAgICAuLi51c2VyT3B0aW9ucy5zZXNzaW9uXG4gICAgfSxcbiAgICBqd3Q6IHtcbiAgICAgIHNlY3JldCxcbiAgICAgIG1heEFnZSxcbiAgICAgIGVuY29kZTogand0LmVuY29kZSxcbiAgICAgIGRlY29kZTogand0LmRlY29kZSxcbiAgICAgIC4uLnVzZXJPcHRpb25zLmp3dFxuICAgIH0sXG4gICAgZXZlbnRzOiAoMCwgX2Vycm9ycy5ldmVudHNFcnJvckhhbmRsZXIpKChfdXNlck9wdGlvbnMkZXZlbnRzID0gdXNlck9wdGlvbnMuZXZlbnRzKSAhPT0gbnVsbCAmJiBfdXNlck9wdGlvbnMkZXZlbnRzICE9PSB2b2lkIDAgPyBfdXNlck9wdGlvbnMkZXZlbnRzIDoge30sIF9sb2dnZXIuZGVmYXVsdCksXG4gICAgYWRhcHRlcjogKDAsIF9lcnJvcnMuYWRhcHRlckVycm9ySGFuZGxlcikodXNlck9wdGlvbnMuYWRhcHRlciwgX2xvZ2dlci5kZWZhdWx0KSxcbiAgICBjYWxsYmFja3M6IHsgLi4uX2RlZmF1bHRDYWxsYmFja3MuZGVmYXVsdENhbGxiYWNrcyxcbiAgICAgIC4uLnVzZXJPcHRpb25zLmNhbGxiYWNrc1xuICAgIH0sXG4gICAgbG9nZ2VyOiBfbG9nZ2VyLmRlZmF1bHQsXG4gICAgY2FsbGJhY2tVcmw6IChfcHJvY2VzcyRlbnYkTkVYVEFVVEgyID0gcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMKSAhPT0gbnVsbCAmJiBfcHJvY2VzcyRlbnYkTkVYVEFVVEgyICE9PSB2b2lkIDAgPyBfcHJvY2VzcyRlbnYkTkVYVEFVVEgyIDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIlxuICB9O1xuICByZXEub3B0aW9ucyA9IG9wdGlvbnM7XG4gICgwLCBfY3NyZlRva2VuSGFuZGxlci5kZWZhdWx0KShyZXEsIHJlcyk7XG4gIGF3YWl0ICgwLCBfY2FsbGJhY2tVcmxIYW5kbGVyLmRlZmF1bHQpKHJlcSwgcmVzKTtcbiAgY29uc3QgcmVuZGVyID0gKDAsIF9wYWdlcy5kZWZhdWx0KShyZXEsIHJlcyk7XG4gIGNvbnN0IHtcbiAgICBwYWdlc1xuICB9ID0gcmVxLm9wdGlvbnM7XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgY2FzZSBcInByb3ZpZGVyc1wiOlxuICAgICAgICByZXR1cm4gcm91dGVzLnByb3ZpZGVycyhyZXEsIHJlcyk7XG5cbiAgICAgIGNhc2UgXCJzZXNzaW9uXCI6XG4gICAgICAgIHJldHVybiBhd2FpdCByb3V0ZXMuc2Vzc2lvbihyZXEsIHJlcyk7XG5cbiAgICAgIGNhc2UgXCJjc3JmXCI6XG4gICAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgICAgY3NyZlRva2VuOiByZXEub3B0aW9ucy5jc3JmVG9rZW5cbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgXCJzaWduaW5cIjpcbiAgICAgICAgaWYgKHBhZ2VzLnNpZ25Jbikge1xuICAgICAgICAgIGxldCBzaWduaW5VcmwgPSBgJHtwYWdlcy5zaWduSW59JHtwYWdlcy5zaWduSW4uaW5jbHVkZXMoXCI/XCIpID8gXCImXCIgOiBcIj9cIn1jYWxsYmFja1VybD0ke3JlcS5vcHRpb25zLmNhbGxiYWNrVXJsfWA7XG5cbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNpZ25pblVybCA9IGAke3NpZ25pblVybH0mZXJyb3I9JHtlcnJvcn1gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3Qoc2lnbmluVXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXIuc2lnbmluKCk7XG5cbiAgICAgIGNhc2UgXCJzaWdub3V0XCI6XG4gICAgICAgIGlmIChwYWdlcy5zaWduT3V0KSByZXR1cm4gcmVzLnJlZGlyZWN0KHBhZ2VzLnNpZ25PdXQpO1xuICAgICAgICByZXR1cm4gcmVuZGVyLnNpZ25vdXQoKTtcblxuICAgICAgY2FzZSBcImNhbGxiYWNrXCI6XG4gICAgICAgIGlmIChwcm92aWRlcikge1xuICAgICAgICAgIHJldHVybiBhd2FpdCByb3V0ZXMuY2FsbGJhY2socmVxLCByZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ2ZXJpZnktcmVxdWVzdFwiOlxuICAgICAgICBpZiAocGFnZXMudmVyaWZ5UmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QocGFnZXMudmVyaWZ5UmVxdWVzdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVuZGVyLnZlcmlmeVJlcXVlc3QoKTtcblxuICAgICAgY2FzZSBcImVycm9yXCI6XG4gICAgICAgIGlmIChwYWdlcy5lcnJvcikge1xuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7cGFnZXMuZXJyb3J9JHtwYWdlcy5lcnJvci5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wifWVycm9yPSR7ZXJyb3J9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoW1wiU2lnbmluXCIsIFwiT0F1dGhTaWduaW5cIiwgXCJPQXV0aENhbGxiYWNrXCIsIFwiT0F1dGhDcmVhdGVBY2NvdW50XCIsIFwiRW1haWxDcmVhdGVBY2NvdW50XCIsIFwiQ2FsbGJhY2tcIiwgXCJPQXV0aEFjY291bnROb3RMaW5rZWRcIiwgXCJFbWFpbFNpZ25pblwiLCBcIkNyZWRlbnRpYWxzU2lnbmluXCIsIFwiU2Vzc2lvblJlcXVpcmVkXCJdLmluY2x1ZGVzKGVycm9yKSkge1xuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9zaWduaW4/ZXJyb3I9JHtlcnJvcn1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXIuZXJyb3Ioe1xuICAgICAgICAgIGVycm9yXG4gICAgICAgIH0pO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICBjYXNlIFwic2lnbmluXCI6XG4gICAgICAgIGlmIChyZXEub3B0aW9ucy5jc3JmVG9rZW5WZXJpZmllZCAmJiBwcm92aWRlcikge1xuICAgICAgICAgIHJldHVybiBhd2FpdCByb3V0ZXMuc2lnbmluKHJlcSwgcmVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9zaWduaW4/Y3NyZj10cnVlYCk7XG5cbiAgICAgIGNhc2UgXCJzaWdub3V0XCI6XG4gICAgICAgIGlmIChyZXEub3B0aW9ucy5jc3JmVG9rZW5WZXJpZmllZCkge1xuICAgICAgICAgIHJldHVybiBhd2FpdCByb3V0ZXMuc2lnbm91dChyZXEsIHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vc2lnbm91dD9jc3JmPXRydWVgKTtcblxuICAgICAgY2FzZSBcImNhbGxiYWNrXCI6XG4gICAgICAgIGlmIChwcm92aWRlcikge1xuICAgICAgICAgIGlmIChwcm92aWRlci50eXBlID09PSBcImNyZWRlbnRpYWxzXCIgJiYgIXJlcS5vcHRpb25zLmNzcmZUb2tlblZlcmlmaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vc2lnbmluP2NzcmY9dHJ1ZWApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhd2FpdCByb3V0ZXMuY2FsbGJhY2socmVxLCByZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJfbG9nXCI6XG4gICAgICAgIGlmICh1c2VyT3B0aW9ucy5sb2dnZXIpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICAgICAgLi4ubWV0YWRhdGFcbiAgICAgICAgICAgIH0gPSByZXEuYm9keTtcblxuICAgICAgICAgICAgX2xvZ2dlci5kZWZhdWx0W2xldmVsXShjb2RlLCBtZXRhZGF0YSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIF9sb2dnZXIuZGVmYXVsdC5lcnJvcihcIkxPR0dFUl9FUlJPUlwiLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcy5lbmQoKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmVuZChgRXJyb3I6IEhUVFAgJHtyZXEubWV0aG9kfSBpcyBub3Qgc3VwcG9ydGVkIGZvciAke3JlcS51cmx9YCk7XG59XG5cbmZ1bmN0aW9uIE5leHRBdXRoKC4uLmFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGFzeW5jIChyZXEsIHJlcykgPT4gYXdhaXQgTmV4dEF1dGhIYW5kbGVyKHJlcSwgcmVzLCBhcmdzWzBdKTtcbiAgfVxuXG4gIHJldHVybiBOZXh0QXV0aEhhbmRsZXIoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IE5leHRBdXRoO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYWxsYmFja0hhbmRsZXI7XG5cbnZhciBfZXJyb3JzID0gcmVxdWlyZShcIi4uL2Vycm9yc1wiKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG52YXIgX2NyeXB0byA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5cbmFzeW5jIGZ1bmN0aW9uIGNhbGxiYWNrSGFuZGxlcihzZXNzaW9uVG9rZW4sIHByb2ZpbGUsIGFjY291bnQsIG9wdGlvbnMpIHtcbiAgaWYgKCEoYWNjb3VudCAhPT0gbnVsbCAmJiBhY2NvdW50ICE9PSB2b2lkIDAgJiYgYWNjb3VudC5wcm92aWRlckFjY291bnRJZCkgfHwgIWFjY291bnQudHlwZSkgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBvciBpbnZhbGlkIHByb3ZpZGVyIGFjY291bnRcIik7XG4gIGlmICghW1wiZW1haWxcIiwgXCJvYXV0aFwiXS5pbmNsdWRlcyhhY2NvdW50LnR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJQcm92aWRlciBub3Qgc3VwcG9ydGVkXCIpO1xuICBjb25zdCB7XG4gICAgYWRhcHRlcixcbiAgICBqd3QsXG4gICAgZXZlbnRzLFxuICAgIHNlc3Npb246IHtcbiAgICAgIGp3dDogdXNlSnd0U2Vzc2lvblxuICAgIH1cbiAgfSA9IG9wdGlvbnM7XG5cbiAgaWYgKCFhZGFwdGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHByb2ZpbGUsXG4gICAgICBhY2NvdW50LFxuICAgICAgc2Vzc2lvbjoge31cbiAgICB9O1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGNyZWF0ZVVzZXIsXG4gICAgdXBkYXRlVXNlcixcbiAgICBnZXRVc2VyLFxuICAgIGdldFVzZXJCeUFjY291bnQsXG4gICAgZ2V0VXNlckJ5RW1haWwsXG4gICAgbGlua0FjY291bnQsXG4gICAgY3JlYXRlU2Vzc2lvbixcbiAgICBnZXRTZXNzaW9uQW5kVXNlcixcbiAgICBkZWxldGVTZXNzaW9uXG4gIH0gPSBhZGFwdGVyO1xuICBsZXQgc2Vzc2lvbiA9IG51bGw7XG4gIGxldCB1c2VyID0gbnVsbDtcbiAgbGV0IGlzTmV3VXNlciA9IGZhbHNlO1xuXG4gIGlmIChzZXNzaW9uVG9rZW4pIHtcbiAgICBpZiAodXNlSnd0U2Vzc2lvbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2Vzc2lvbiA9IGF3YWl0IGp3dC5kZWNvZGUoeyAuLi5qd3QsXG4gICAgICAgICAgdG9rZW46IHNlc3Npb25Ub2tlblxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2Vzc2lvbiAmJiBcInN1YlwiIGluIHNlc3Npb24gJiYgc2Vzc2lvbi5zdWIpIHtcbiAgICAgICAgICB1c2VyID0gYXdhaXQgZ2V0VXNlcihzZXNzaW9uLnN1Yik7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKF91bnVzZWQpIHt9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHVzZXJBbmRTZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbkFuZFVzZXIoc2Vzc2lvblRva2VuKTtcblxuICAgICAgaWYgKHVzZXJBbmRTZXNzaW9uKSB7XG4gICAgICAgIHNlc3Npb24gPSB1c2VyQW5kU2Vzc2lvbi5zZXNzaW9uO1xuICAgICAgICB1c2VyID0gdXNlckFuZFNlc3Npb24udXNlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWNjb3VudC50eXBlID09PSBcImVtYWlsXCIpIHtcbiAgICBjb25zdCB1c2VyQnlFbWFpbCA9IHByb2ZpbGUuZW1haWwgPyBhd2FpdCBnZXRVc2VyQnlFbWFpbChwcm9maWxlLmVtYWlsKSA6IG51bGw7XG5cbiAgICBpZiAodXNlckJ5RW1haWwpIHtcbiAgICAgIHZhciBfdXNlciwgX2V2ZW50cyR1cGRhdGVVc2VyO1xuXG4gICAgICBpZiAoKChfdXNlciA9IHVzZXIpID09PSBudWxsIHx8IF91c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdXNlci5pZCkgIT09IHVzZXJCeUVtYWlsLmlkICYmICF1c2VKd3RTZXNzaW9uICYmIHNlc3Npb25Ub2tlbikge1xuICAgICAgICBhd2FpdCBkZWxldGVTZXNzaW9uKHNlc3Npb25Ub2tlbik7XG4gICAgICB9XG5cbiAgICAgIHVzZXIgPSBhd2FpdCB1cGRhdGVVc2VyKHtcbiAgICAgICAgaWQ6IHVzZXJCeUVtYWlsLmlkLFxuICAgICAgICBlbWFpbFZlcmlmaWVkOiBuZXcgRGF0ZSgpXG4gICAgICB9KTtcbiAgICAgIGF3YWl0ICgoX2V2ZW50cyR1cGRhdGVVc2VyID0gZXZlbnRzLnVwZGF0ZVVzZXIpID09PSBudWxsIHx8IF9ldmVudHMkdXBkYXRlVXNlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50cyR1cGRhdGVVc2VyLmNhbGwoZXZlbnRzLCB7XG4gICAgICAgIHVzZXJcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9ldmVudHMkY3JlYXRlVXNlcjtcblxuICAgICAgY29uc3QgbmV3VXNlciA9IHsgLi4ucHJvZmlsZSxcbiAgICAgICAgZW1haWxWZXJpZmllZDogbmV3IERhdGUoKVxuICAgICAgfTtcbiAgICAgIGRlbGV0ZSBuZXdVc2VyLmlkO1xuICAgICAgdXNlciA9IGF3YWl0IGNyZWF0ZVVzZXIobmV3VXNlcik7XG4gICAgICBhd2FpdCAoKF9ldmVudHMkY3JlYXRlVXNlciA9IGV2ZW50cy5jcmVhdGVVc2VyKSA9PT0gbnVsbCB8fCBfZXZlbnRzJGNyZWF0ZVVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudHMkY3JlYXRlVXNlci5jYWxsKGV2ZW50cywge1xuICAgICAgICB1c2VyXG4gICAgICB9KSk7XG4gICAgICBpc05ld1VzZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHNlc3Npb24gPSB1c2VKd3RTZXNzaW9uID8ge30gOiBhd2FpdCBjcmVhdGVTZXNzaW9uKHtcbiAgICAgIHNlc3Npb25Ub2tlbjogZ2VuZXJhdGVTZXNzaW9uVG9rZW4oKSxcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgIGV4cGlyZXM6ICgwLCBfdXRpbHMuZnJvbURhdGUpKG9wdGlvbnMuc2Vzc2lvbi5tYXhBZ2UpXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlc3Npb24sXG4gICAgICB1c2VyLFxuICAgICAgaXNOZXdVc2VyXG4gICAgfTtcbiAgfSBlbHNlIGlmIChhY2NvdW50LnR5cGUgPT09IFwib2F1dGhcIikge1xuICAgIGNvbnN0IHVzZXJCeUFjY291bnQgPSBhd2FpdCBnZXRVc2VyQnlBY2NvdW50KHtcbiAgICAgIHByb3ZpZGVyQWNjb3VudElkOiBhY2NvdW50LnByb3ZpZGVyQWNjb3VudElkLFxuICAgICAgcHJvdmlkZXI6IGFjY291bnQucHJvdmlkZXJcbiAgICB9KTtcblxuICAgIGlmICh1c2VyQnlBY2NvdW50KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBpZiAodXNlckJ5QWNjb3VudC5pZCA9PT0gdXNlci5pZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXNzaW9uLFxuICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgIGlzTmV3VXNlclxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgX2Vycm9ycy5BY2NvdW50Tm90TGlua2VkRXJyb3IoXCJUaGUgYWNjb3VudCBpcyBhbHJlYWR5IGFzc29jaWF0ZWQgd2l0aCBhbm90aGVyIHVzZXJcIik7XG4gICAgICB9XG5cbiAgICAgIHNlc3Npb24gPSB1c2VKd3RTZXNzaW9uID8ge30gOiBhd2FpdCBjcmVhdGVTZXNzaW9uKHtcbiAgICAgICAgc2Vzc2lvblRva2VuOiBnZW5lcmF0ZVNlc3Npb25Ub2tlbigpLFxuICAgICAgICB1c2VySWQ6IHVzZXJCeUFjY291bnQuaWQsXG4gICAgICAgIGV4cGlyZXM6ICgwLCBfdXRpbHMuZnJvbURhdGUpKG9wdGlvbnMuc2Vzc2lvbi5tYXhBZ2UpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlc3Npb24sXG4gICAgICAgIHVzZXI6IHVzZXJCeUFjY291bnQsXG4gICAgICAgIGlzTmV3VXNlclxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9ldmVudHMkY3JlYXRlVXNlcjIsIF9ldmVudHMkbGlua0FjY291bnQyO1xuXG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB2YXIgX2V2ZW50cyRsaW5rQWNjb3VudDtcblxuICAgICAgICBhd2FpdCBsaW5rQWNjb3VudCh7IC4uLmFjY291bnQsXG4gICAgICAgICAgdXNlcklkOiB1c2VyLmlkXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCAoKF9ldmVudHMkbGlua0FjY291bnQgPSBldmVudHMubGlua0FjY291bnQpID09PSBudWxsIHx8IF9ldmVudHMkbGlua0FjY291bnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudHMkbGlua0FjY291bnQuY2FsbChldmVudHMsIHtcbiAgICAgICAgICB1c2VyLFxuICAgICAgICAgIGFjY291bnRcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNlc3Npb24sXG4gICAgICAgICAgdXNlcixcbiAgICAgICAgICBpc05ld1VzZXJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXNlckJ5RW1haWwgPSBwcm9maWxlLmVtYWlsID8gYXdhaXQgZ2V0VXNlckJ5RW1haWwocHJvZmlsZS5lbWFpbCkgOiBudWxsO1xuXG4gICAgICBpZiAodXNlckJ5RW1haWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IF9lcnJvcnMuQWNjb3VudE5vdExpbmtlZEVycm9yKFwiQW5vdGhlciBhY2NvdW50IGFscmVhZHkgZXhpc3RzIHdpdGggdGhlIHNhbWUgZS1tYWlsIGFkZHJlc3NcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1VzZXIgPSB7IC4uLnByb2ZpbGUsXG4gICAgICAgIGVtYWlsVmVyaWZpZWQ6IG51bGxcbiAgICAgIH07XG4gICAgICBkZWxldGUgbmV3VXNlci5pZDtcbiAgICAgIHVzZXIgPSBhd2FpdCBjcmVhdGVVc2VyKG5ld1VzZXIpO1xuICAgICAgYXdhaXQgKChfZXZlbnRzJGNyZWF0ZVVzZXIyID0gZXZlbnRzLmNyZWF0ZVVzZXIpID09PSBudWxsIHx8IF9ldmVudHMkY3JlYXRlVXNlcjIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudHMkY3JlYXRlVXNlcjIuY2FsbChldmVudHMsIHtcbiAgICAgICAgdXNlclxuICAgICAgfSkpO1xuICAgICAgYXdhaXQgbGlua0FjY291bnQoeyAuLi5hY2NvdW50LFxuICAgICAgICB1c2VySWQ6IHVzZXIuaWRcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgKChfZXZlbnRzJGxpbmtBY2NvdW50MiA9IGV2ZW50cy5saW5rQWNjb3VudCkgPT09IG51bGwgfHwgX2V2ZW50cyRsaW5rQWNjb3VudDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudHMkbGlua0FjY291bnQyLmNhbGwoZXZlbnRzLCB7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIGFjY291bnRcbiAgICAgIH0pKTtcbiAgICAgIHNlc3Npb24gPSB1c2VKd3RTZXNzaW9uID8ge30gOiBhd2FpdCBjcmVhdGVTZXNzaW9uKHtcbiAgICAgICAgc2Vzc2lvblRva2VuOiBnZW5lcmF0ZVNlc3Npb25Ub2tlbigpLFxuICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICAgIGV4cGlyZXM6ICgwLCBfdXRpbHMuZnJvbURhdGUpKG9wdGlvbnMuc2Vzc2lvbi5tYXhBZ2UpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlc3Npb24sXG4gICAgICAgIHVzZXIsXG4gICAgICAgIGlzTmV3VXNlcjogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTZXNzaW9uVG9rZW4oKSB7XG4gIHZhciBfcmFuZG9tVVVJRDtcblxuICByZXR1cm4gKF9yYW5kb21VVUlEID0gX2NyeXB0by5yYW5kb21VVUlEID09PSBudWxsIHx8IF9jcnlwdG8ucmFuZG9tVVVJRCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKDAsIF9jcnlwdG8ucmFuZG9tVVVJRCkoKSkgIT09IG51bGwgJiYgX3JhbmRvbVVVSUQgIT09IHZvaWQgMCA/IF9yYW5kb21VVUlEIDogKDAsIF9jcnlwdG8ucmFuZG9tQnl0ZXMpKDMyKS50b1N0cmluZyhcImhleFwiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNhbGxiYWNrVXJsSGFuZGxlcjtcblxudmFyIGNvb2tpZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9saWIvY29va2llXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIChub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuYXN5bmMgZnVuY3Rpb24gY2FsbGJhY2tVcmxIYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHtcbiAgICBxdWVyeVxuICB9ID0gcmVxO1xuICBjb25zdCB7XG4gICAgYm9keVxuICB9ID0gcmVxO1xuICBjb25zdCB7XG4gICAgY29va2llcyxcbiAgICBiYXNlVXJsLFxuICAgIGNhbGxiYWNrc1xuICB9ID0gcmVxLm9wdGlvbnM7XG4gIGxldCBjYWxsYmFja1VybCA9IGJhc2VVcmw7XG4gIGNvbnN0IGNhbGxiYWNrVXJsUGFyYW1WYWx1ZSA9IGJvZHkuY2FsbGJhY2tVcmwgfHwgcXVlcnkuY2FsbGJhY2tVcmwgfHwgbnVsbDtcbiAgY29uc3QgY2FsbGJhY2tVcmxDb29raWVWYWx1ZSA9IHJlcS5jb29raWVzW2Nvb2tpZXMuY2FsbGJhY2tVcmwubmFtZV0gfHwgbnVsbDtcblxuICBpZiAoY2FsbGJhY2tVcmxQYXJhbVZhbHVlKSB7XG4gICAgY2FsbGJhY2tVcmwgPSBhd2FpdCBjYWxsYmFja3MucmVkaXJlY3Qoe1xuICAgICAgdXJsOiBjYWxsYmFja1VybFBhcmFtVmFsdWUsXG4gICAgICBiYXNlVXJsXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoY2FsbGJhY2tVcmxDb29raWVWYWx1ZSkge1xuICAgIGNhbGxiYWNrVXJsID0gYXdhaXQgY2FsbGJhY2tzLnJlZGlyZWN0KHtcbiAgICAgIHVybDogY2FsbGJhY2tVcmxDb29raWVWYWx1ZSxcbiAgICAgIGJhc2VVcmxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjYWxsYmFja1VybCAmJiBjYWxsYmFja1VybCAhPT0gY2FsbGJhY2tVcmxDb29raWVWYWx1ZSkge1xuICAgIGNvb2tpZS5zZXQocmVzLCBjb29raWVzLmNhbGxiYWNrVXJsLm5hbWUsIGNhbGxiYWNrVXJsLCBjb29raWVzLmNhbGxiYWNrVXJsLm9wdGlvbnMpO1xuICB9XG5cbiAgcmVxLm9wdGlvbnMuY2FsbGJhY2tVcmwgPSBjYWxsYmFja1VybDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc2V0ID0gc2V0O1xuZXhwb3J0cy5kZWZhdWx0Q29va2llcyA9IGRlZmF1bHRDb29raWVzO1xuXG5mdW5jdGlvbiBzZXQocmVzLCBuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHN0cmluZ1ZhbHVlID0gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiID8gXCJqOlwiICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogU3RyaW5nKHZhbHVlKTtcblxuICBpZiAoXCJtYXhBZ2VcIiBpbiBvcHRpb25zKSB7XG4gICAgdmFyIF9vcHRpb25zJG1heEFnZSwgX29wdGlvbnMkbWF4QWdlMjtcblxuICAgIG9wdGlvbnMuZXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAoKF9vcHRpb25zJG1heEFnZSA9IG9wdGlvbnMubWF4QWdlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRtYXhBZ2UgIT09IHZvaWQgMCA/IF9vcHRpb25zJG1heEFnZSA6IDApKTtcbiAgICBvcHRpb25zLm1heEFnZSA9ICgoX29wdGlvbnMkbWF4QWdlMiA9IG9wdGlvbnMubWF4QWdlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRtYXhBZ2UyICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRtYXhBZ2UyIDogMCkgLyAxMDAwO1xuICB9XG5cbiAgbGV0IHNldENvb2tpZUhlYWRlciA9IHJlcy5nZXRIZWFkZXIoXCJTZXQtQ29va2llXCIpIHx8IFtdO1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShzZXRDb29raWVIZWFkZXIpKSB7XG4gICAgc2V0Q29va2llSGVhZGVyID0gW3NldENvb2tpZUhlYWRlcl07XG4gIH1cblxuICBzZXRDb29raWVIZWFkZXIucHVzaChfc2VyaWFsaXplKG5hbWUsIFN0cmluZyhzdHJpbmdWYWx1ZSksIG9wdGlvbnMpKTtcbiAgcmVzLnNldEhlYWRlcihcIlNldC1Db29raWVcIiwgc2V0Q29va2llSGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gX3NlcmlhbGl6ZShuYW1lLCB2YWwsIG9wdGlvbnMpIHtcbiAgY29uc3QgZmllbGRDb250ZW50UmVnRXhwID0gL15bXFx1MDAwOVxcdTAwMjAtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl0rJC87XG4gIGNvbnN0IG9wdCA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IGVuYyA9IG9wdC5lbmNvZGUgfHwgZW5jb2RlVVJJQ29tcG9uZW50O1xuXG4gIGlmICh0eXBlb2YgZW5jICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwib3B0aW9uIGVuY29kZSBpcyBpbnZhbGlkXCIpO1xuICB9XG5cbiAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChuYW1lKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhcmd1bWVudCBuYW1lIGlzIGludmFsaWRcIik7XG4gIH1cblxuICBjb25zdCB2YWx1ZSA9IGVuYyh2YWwpO1xuXG4gIGlmICh2YWx1ZSAmJiAhZmllbGRDb250ZW50UmVnRXhwLnRlc3QodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImFyZ3VtZW50IHZhbCBpcyBpbnZhbGlkXCIpO1xuICB9XG5cbiAgbGV0IHN0ciA9IGAke25hbWV9PSR7dmFsdWV9YDtcblxuICBpZiAob3B0Lm1heEFnZSAhPSBudWxsKSB7XG4gICAgY29uc3QgbWF4QWdlID0gb3B0Lm1heEFnZSAtIDA7XG5cbiAgICBpZiAoaXNOYU4obWF4QWdlKSB8fCAhaXNGaW5pdGUobWF4QWdlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm9wdGlvbiBtYXhBZ2UgaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gYDsgTWF4LUFnZT0ke01hdGguZmxvb3IobWF4QWdlKX1gO1xuICB9XG5cbiAgaWYgKG9wdC5kb21haW4pIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5kb21haW4pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwib3B0aW9uIGRvbWFpbiBpcyBpbnZhbGlkXCIpO1xuICAgIH1cblxuICAgIHN0ciArPSBgOyBEb21haW49JHtvcHQuZG9tYWlufWA7XG4gIH1cblxuICBpZiAob3B0LnBhdGgpIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5wYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm9wdGlvbiBwYXRoIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgc3RyICs9IGA7IFBhdGg9JHtvcHQucGF0aH1gO1xuICB9IGVsc2Uge1xuICAgIHN0ciArPSBcIjsgUGF0aD0vXCI7XG4gIH1cblxuICBpZiAob3B0LmV4cGlyZXMpIHtcbiAgICBsZXQgZXhwaXJlcyA9IG9wdC5leHBpcmVzO1xuXG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBleHBpcmVzID0gb3B0LmV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGF0ZUV4cGlyZXMgPSBuZXcgRGF0ZShvcHQuZXhwaXJlcyk7XG4gICAgICBleHBpcmVzID0gZGF0ZUV4cGlyZXMudG9VVENTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gYDsgRXhwaXJlcz0ke2V4cGlyZXN9YDtcbiAgfVxuXG4gIGlmIChvcHQuaHR0cE9ubHkpIHtcbiAgICBzdHIgKz0gXCI7IEh0dHBPbmx5XCI7XG4gIH1cblxuICBpZiAob3B0LnNlY3VyZSkge1xuICAgIHN0ciArPSBcIjsgU2VjdXJlXCI7XG4gIH1cblxuICBpZiAob3B0LnNhbWVTaXRlKSB7XG4gICAgY29uc3Qgc2FtZVNpdGUgPSB0eXBlb2Ygb3B0LnNhbWVTaXRlID09PSBcInN0cmluZ1wiID8gb3B0LnNhbWVTaXRlLnRvTG93ZXJDYXNlKCkgOiBvcHQuc2FtZVNpdGU7XG5cbiAgICBzd2l0Y2ggKHNhbWVTaXRlKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHN0ciArPSBcIjsgU2FtZVNpdGU9U3RyaWN0XCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwibGF4XCI6XG4gICAgICAgIHN0ciArPSBcIjsgU2FtZVNpdGU9TGF4XCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwic3RyaWN0XCI6XG4gICAgICAgIHN0ciArPSBcIjsgU2FtZVNpdGU9U3RyaWN0XCI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgICBzdHIgKz0gXCI7IFNhbWVTaXRlPU5vbmVcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJvcHRpb24gc2FtZVNpdGUgaXMgaW52YWxpZFwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29va2llcyh1c2VTZWN1cmVDb29raWVzKSB7XG4gIGNvbnN0IGNvb2tpZVByZWZpeCA9IHVzZVNlY3VyZUNvb2tpZXMgPyBcIl9fU2VjdXJlLVwiIDogXCJcIjtcbiAgcmV0dXJuIHtcbiAgICBzZXNzaW9uVG9rZW46IHtcbiAgICAgIG5hbWU6IGAke2Nvb2tpZVByZWZpeH1uZXh0LWF1dGguc2Vzc2lvbi10b2tlbmAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIHNlY3VyZTogdXNlU2VjdXJlQ29va2llc1xuICAgICAgfVxuICAgIH0sXG4gICAgY2FsbGJhY2tVcmw6IHtcbiAgICAgIG5hbWU6IGAke2Nvb2tpZVByZWZpeH1uZXh0LWF1dGguY2FsbGJhY2stdXJsYCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBzZWN1cmU6IHVzZVNlY3VyZUNvb2tpZXNcbiAgICAgIH1cbiAgICB9LFxuICAgIGNzcmZUb2tlbjoge1xuICAgICAgbmFtZTogYCR7dXNlU2VjdXJlQ29va2llcyA/IFwiX19Ib3N0LVwiIDogXCJcIn1uZXh0LWF1dGguY3NyZi10b2tlbmAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIHNlY3VyZTogdXNlU2VjdXJlQ29va2llc1xuICAgICAgfVxuICAgIH0sXG4gICAgcGtjZUNvZGVWZXJpZmllcjoge1xuICAgICAgbmFtZTogYCR7Y29va2llUHJlZml4fW5leHQtYXV0aC5wa2NlLmNvZGVfdmVyaWZpZXJgLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgICAgICBzZWN1cmU6IHVzZVNlY3VyZUNvb2tpZXNcbiAgICAgIH1cbiAgICB9XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjc3JmVG9rZW5IYW5kbGVyO1xuXG52YXIgX2NyeXB0byA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5cbnZhciBjb29raWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jb29raWVcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBjc3JmVG9rZW5IYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHtcbiAgICBjb29raWVzLFxuICAgIHNlY3JldFxuICB9ID0gcmVxLm9wdGlvbnM7XG5cbiAgaWYgKGNvb2tpZXMuY3NyZlRva2VuLm5hbWUgaW4gcmVxLmNvb2tpZXMpIHtcbiAgICBjb25zdCBbY3NyZlRva2VuLCBjc3JmVG9rZW5IYXNoXSA9IHJlcS5jb29raWVzW2Nvb2tpZXMuY3NyZlRva2VuLm5hbWVdLnNwbGl0KFwifFwiKTtcbiAgICBjb25zdCBleHBlY3RlZENzcmZUb2tlbkhhc2ggPSAoMCwgX2NyeXB0by5jcmVhdGVIYXNoKShcInNoYTI1NlwiKS51cGRhdGUoYCR7Y3NyZlRva2VufSR7c2VjcmV0fWApLmRpZ2VzdChcImhleFwiKTtcblxuICAgIGlmIChjc3JmVG9rZW5IYXNoID09PSBleHBlY3RlZENzcmZUb2tlbkhhc2gpIHtcbiAgICAgIGNvbnN0IGNzcmZUb2tlblZlcmlmaWVkID0gcmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIgJiYgY3NyZlRva2VuID09PSByZXEuYm9keS5jc3JmVG9rZW47XG4gICAgICByZXEub3B0aW9ucy5jc3JmVG9rZW4gPSBjc3JmVG9rZW47XG4gICAgICByZXEub3B0aW9ucy5jc3JmVG9rZW5WZXJpZmllZCA9IGNzcmZUb2tlblZlcmlmaWVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNzcmZUb2tlbiA9ICgwLCBfY3J5cHRvLnJhbmRvbUJ5dGVzKSgzMikudG9TdHJpbmcoXCJoZXhcIik7XG4gIGNvbnN0IGNzcmZUb2tlbkhhc2ggPSAoMCwgX2NyeXB0by5jcmVhdGVIYXNoKShcInNoYTI1NlwiKS51cGRhdGUoYCR7Y3NyZlRva2VufSR7c2VjcmV0fWApLmRpZ2VzdChcImhleFwiKTtcbiAgY29uc3QgY3NyZlRva2VuQ29va2llID0gYCR7Y3NyZlRva2VufXwke2NzcmZUb2tlbkhhc2h9YDtcbiAgY29va2llLnNldChyZXMsIGNvb2tpZXMuY3NyZlRva2VuLm5hbWUsIGNzcmZUb2tlbkNvb2tpZSwgY29va2llcy5jc3JmVG9rZW4ub3B0aW9ucyk7XG4gIHJlcS5vcHRpb25zLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdENhbGxiYWNrcyA9IHZvaWQgMDtcbmNvbnN0IGRlZmF1bHRDYWxsYmFja3MgPSB7XG4gIHNpZ25JbigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICByZWRpcmVjdCh7XG4gICAgdXJsLFxuICAgIGJhc2VVcmxcbiAgfSkge1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aChiYXNlVXJsKSkgcmV0dXJuIHVybDtcbiAgICByZXR1cm4gYmFzZVVybDtcbiAgfSxcblxuICBzZXNzaW9uKHtcbiAgICBzZXNzaW9uXG4gIH0pIHtcbiAgICByZXR1cm4gc2Vzc2lvbjtcbiAgfSxcblxuICBqd3Qoe1xuICAgIHRva2VuXG4gIH0pIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxufTtcbmV4cG9ydHMuZGVmYXVsdENhbGxiYWNrcyA9IGRlZmF1bHRDYWxsYmFja3M7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBlbWFpbDtcblxudmFyIF9jcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBlbWFpbChpZGVudGlmaWVyLCBvcHRpb25zKSB7XG4gIHZhciBfYXdhaXQkcHJvdmlkZXIkZ2VuZXIsIF9wcm92aWRlciRnZW5lcmF0ZVZlciwgX3Byb3ZpZGVyJG1heEFnZTtcblxuICBjb25zdCB7XG4gICAgYmFzZVVybCxcbiAgICBiYXNlUGF0aCxcbiAgICBhZGFwdGVyLFxuICAgIHByb3ZpZGVyLFxuICAgIGxvZ2dlcixcbiAgICBjYWxsYmFja1VybFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgdG9rZW4gPSAoX2F3YWl0JHByb3ZpZGVyJGdlbmVyID0gYXdhaXQgKChfcHJvdmlkZXIkZ2VuZXJhdGVWZXIgPSBwcm92aWRlci5nZW5lcmF0ZVZlcmlmaWNhdGlvblRva2VuKSA9PT0gbnVsbCB8fCBfcHJvdmlkZXIkZ2VuZXJhdGVWZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wcm92aWRlciRnZW5lcmF0ZVZlci5jYWxsKHByb3ZpZGVyKSkpICE9PSBudWxsICYmIF9hd2FpdCRwcm92aWRlciRnZW5lciAhPT0gdm9pZCAwID8gX2F3YWl0JHByb3ZpZGVyJGdlbmVyIDogKDAsIF9jcnlwdG8ucmFuZG9tQnl0ZXMpKDMyKS50b1N0cmluZyhcImhleFwiKTtcbiAgY29uc3QgT05FX0RBWV9JTl9TRUNPTkRTID0gODY0MDA7XG4gIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgKChfcHJvdmlkZXIkbWF4QWdlID0gcHJvdmlkZXIubWF4QWdlKSAhPT0gbnVsbCAmJiBfcHJvdmlkZXIkbWF4QWdlICE9PSB2b2lkIDAgPyBfcHJvdmlkZXIkbWF4QWdlIDogT05FX0RBWV9JTl9TRUNPTkRTKSAqIDEwMDApO1xuICBhd2FpdCBhZGFwdGVyLmNyZWF0ZVZlcmlmaWNhdGlvblRva2VuKHtcbiAgICBpZGVudGlmaWVyLFxuICAgIHRva2VuOiAoMCwgX3V0aWxzLmhhc2hUb2tlbikodG9rZW4sIG9wdGlvbnMpLFxuICAgIGV4cGlyZXNcbiAgfSk7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgIGNhbGxiYWNrVXJsLFxuICAgIHRva2VuLFxuICAgIGVtYWlsOiBpZGVudGlmaWVyXG4gIH0pO1xuICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2NhbGxiYWNrLyR7cHJvdmlkZXIuaWR9PyR7cGFyYW1zfWA7XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBwcm92aWRlci5zZW5kVmVyaWZpY2F0aW9uUmVxdWVzdCh7XG4gICAgICBpZGVudGlmaWVyLFxuICAgICAgdG9rZW4sXG4gICAgICBleHBpcmVzLFxuICAgICAgdXJsLFxuICAgICAgcHJvdmlkZXJcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoXCJTRU5EX1ZFUklGSUNBVElPTl9FTUFJTF9FUlJPUlwiLCB7XG4gICAgICBpZGVudGlmaWVyLFxuICAgICAgdXJsLFxuICAgICAgZXJyb3JcbiAgICB9KTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTRU5EX1ZFUklGSUNBVElPTl9FTUFJTF9FUlJPUlwiKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXh0ZW5kUmVzO1xuXG5mdW5jdGlvbiBleHRlbmRSZXMocmVxLCByZXMpIHtcbiAgcmVzLnJlZGlyZWN0ID0gdXJsID0+IHtcbiAgICB2YXIgX3JlcSRib2R5O1xuXG4gICAgaWYgKCgoX3JlcSRib2R5ID0gcmVxLmJvZHkpID09PSBudWxsIHx8IF9yZXEkYm9keSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3JlcSRib2R5Lmpzb24pID09PSBcInRydWVcIikge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgdXJsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXMuc3RhdHVzKDMwMikuc2V0SGVhZGVyKFwiTG9jYXRpb25cIiwgdXJsKTtcbiAgICByZXR1cm4gcmVzLmVuZCgpO1xuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0QXV0aG9yaXphdGlvblVybDtcblxudmFyIF9jbGllbnQgPSByZXF1aXJlKFwiLi4vb2F1dGgvY2xpZW50XCIpO1xuXG52YXIgX2NsaWVudExlZ2FjeSA9IHJlcXVpcmUoXCIuLi9vYXV0aC9jbGllbnQtbGVnYWN5XCIpO1xuXG52YXIgX3N0YXRlSGFuZGxlciA9IHJlcXVpcmUoXCIuLi9vYXV0aC9zdGF0ZS1oYW5kbGVyXCIpO1xuXG52YXIgX3BrY2VIYW5kbGVyID0gcmVxdWlyZShcIi4uL29hdXRoL3BrY2UtaGFuZGxlclwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0QXV0aG9yaXphdGlvblVybChyZXEsIHJlcykge1xuICBjb25zdCB7XG4gICAgbG9nZ2VyXG4gIH0gPSByZXEub3B0aW9ucztcblxuICB0cnkge1xuICAgIHZhciBfcHJvdmlkZXIkdmVyc2lvbjtcblxuICAgIGNvbnN0IHByb3ZpZGVyID0gcmVxLm9wdGlvbnMucHJvdmlkZXI7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBwcm92aWRlci5hdXRob3JpemF0aW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCBwYXJzZWRVcmwgPSBuZXcgVVJMKHByb3ZpZGVyLmF1dGhvcml6YXRpb24pO1xuICAgICAgY29uc3QgcGFyc2VkUGFyYW1zID0gT2JqZWN0LmZyb21FbnRyaWVzKHBhcnNlZFVybC5zZWFyY2hQYXJhbXMuZW50cmllcygpKTtcbiAgICAgIHBhcmFtcyA9IHsgLi4ucGFyYW1zLFxuICAgICAgICAuLi5wYXJzZWRQYXJhbXNcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfcHJvdmlkZXIkYXV0aG9yaXphdGk7XG5cbiAgICAgIHBhcmFtcyA9IHsgLi4ucGFyYW1zLFxuICAgICAgICAuLi4oKF9wcm92aWRlciRhdXRob3JpemF0aSA9IHByb3ZpZGVyLmF1dGhvcml6YXRpb24pID09PSBudWxsIHx8IF9wcm92aWRlciRhdXRob3JpemF0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Byb3ZpZGVyJGF1dGhvcml6YXRpLnBhcmFtcylcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcGFyYW1zID0geyAuLi5wYXJhbXMsXG4gICAgICAuLi5yZXEucXVlcnlcbiAgICB9O1xuXG4gICAgaWYgKChfcHJvdmlkZXIkdmVyc2lvbiA9IHByb3ZpZGVyLnZlcnNpb24pICE9PSBudWxsICYmIF9wcm92aWRlciR2ZXJzaW9uICE9PSB2b2lkIDAgJiYgX3Byb3ZpZGVyJHZlcnNpb24uc3RhcnRzV2l0aChcIjEuXCIpKSB7XG4gICAgICBjb25zdCBjbGllbnQgPSAoMCwgX2NsaWVudExlZ2FjeS5vQXV0aDFDbGllbnQpKHJlcS5vcHRpb25zKTtcbiAgICAgIGNvbnN0IHRva2VucyA9IGF3YWl0IGNsaWVudC5nZXRPQXV0aFJlcXVlc3RUb2tlbihwYXJhbXMpO1xuICAgICAgY29uc3QgdXJsID0gYCR7cHJvdmlkZXIuYXV0aG9yaXphdGlvbn0/JHtuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgb2F1dGhfdG9rZW46IHRva2Vucy5vYXV0aF90b2tlbixcbiAgICAgICAgb2F1dGhfdG9rZW5fc2VjcmV0OiB0b2tlbnMub2F1dGhfdG9rZW5fc2VjcmV0LFxuICAgICAgICAuLi50b2tlbnMucGFyYW1zXG4gICAgICB9KX1gO1xuICAgICAgbG9nZ2VyLmRlYnVnKFwiR0VUX0FVVEhPUklaQVRJT05fVVJMXCIsIHtcbiAgICAgICAgdXJsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgKDAsIF9jbGllbnQub3BlbmlkQ2xpZW50KShyZXEub3B0aW9ucyk7XG4gICAgY29uc3QgcGtjZSA9IGF3YWl0ICgwLCBfcGtjZUhhbmRsZXIuY3JlYXRlUEtDRSkocmVxLCByZXMpO1xuICAgIGNvbnN0IHVybCA9IGNsaWVudC5hdXRob3JpemF0aW9uVXJsKHsgLi4ucGFyYW1zLFxuICAgICAgLi4ucGtjZSxcbiAgICAgIHN0YXRlOiAoMCwgX3N0YXRlSGFuZGxlci5jcmVhdGVTdGF0ZSkocmVxKVxuICAgIH0pO1xuICAgIGxvZ2dlci5kZWJ1ZyhcIkdFVF9BVVRIT1JJWkFUSU9OX1VSTFwiLCB7XG4gICAgICB1cmxcbiAgICB9KTtcbiAgICByZXR1cm4gdXJsO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcihcIkdFVF9BVVRIT1JJWkFUSU9OX1VSTF9FUlJPUlwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IG9BdXRoQ2FsbGJhY2s7XG5cbnZhciBfY2xpZW50ID0gcmVxdWlyZShcIi4vY2xpZW50XCIpO1xuXG52YXIgX2NsaWVudExlZ2FjeSA9IHJlcXVpcmUoXCIuL2NsaWVudC1sZWdhY3lcIik7XG5cbnZhciBfc3RhdGVIYW5kbGVyID0gcmVxdWlyZShcIi4vc3RhdGUtaGFuZGxlclwiKTtcblxudmFyIF9wa2NlSGFuZGxlciA9IHJlcXVpcmUoXCIuL3BrY2UtaGFuZGxlclwiKTtcblxudmFyIF9lcnJvcnMgPSByZXF1aXJlKFwiLi4vLi4vZXJyb3JzXCIpO1xuXG52YXIgX29wZW5pZENsaWVudCA9IHJlcXVpcmUoXCJvcGVuaWQtY2xpZW50XCIpO1xuXG5hc3luYyBmdW5jdGlvbiBvQXV0aENhbGxiYWNrKHJlcSwgcmVzKSB7XG4gIHZhciBfcmVxJGJvZHkkZXJyb3IsIF9wcm92aWRlciR2ZXJzaW9uO1xuXG4gIGNvbnN0IHtcbiAgICBsb2dnZXJcbiAgfSA9IHJlcS5vcHRpb25zO1xuICBjb25zdCBwcm92aWRlciA9IHJlcS5vcHRpb25zLnByb3ZpZGVyO1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSAoX3JlcSRib2R5JGVycm9yID0gcmVxLmJvZHkuZXJyb3IpICE9PSBudWxsICYmIF9yZXEkYm9keSRlcnJvciAhPT0gdm9pZCAwID8gX3JlcSRib2R5JGVycm9yIDogcmVxLnF1ZXJ5LmVycm9yO1xuXG4gIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgIGxvZ2dlci5lcnJvcihcIk9BVVRIX0NBTExCQUNLX0hBTkRMRVJfRVJST1JcIiwge1xuICAgICAgZXJyb3IsXG4gICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgIHByb3ZpZGVySWQ6IHByb3ZpZGVyLmlkXG4gICAgfSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBpZiAoKF9wcm92aWRlciR2ZXJzaW9uID0gcHJvdmlkZXIudmVyc2lvbikgIT09IG51bGwgJiYgX3Byb3ZpZGVyJHZlcnNpb24gIT09IHZvaWQgMCAmJiBfcHJvdmlkZXIkdmVyc2lvbi5zdGFydHNXaXRoKFwiMS5cIikpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgKDAsIF9jbGllbnRMZWdhY3kub0F1dGgxQ2xpZW50KShyZXEub3B0aW9ucyk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG9hdXRoX3Rva2VuLFxuICAgICAgICBvYXV0aF92ZXJpZmllclxuICAgICAgfSA9IHJlcS5xdWVyeTtcbiAgICAgIGNvbnN0IHRva2VucyA9IGF3YWl0IGNsaWVudC5nZXRPQXV0aEFjY2Vzc1Rva2VuKG9hdXRoX3Rva2VuLCBudWxsLCBvYXV0aF92ZXJpZmllcik7XG4gICAgICBsZXQgcHJvZmlsZSA9IGF3YWl0IGNsaWVudC5nZXQocHJvdmlkZXIucHJvZmlsZVVybCwgdG9rZW5zLm9hdXRoX3Rva2VuLCB0b2tlbnMub2F1dGhfdG9rZW5fc2VjcmV0KTtcblxuICAgICAgaWYgKHR5cGVvZiBwcm9maWxlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHByb2ZpbGUgPSBKU09OLnBhcnNlKHByb2ZpbGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXdhaXQgZ2V0UHJvZmlsZSh7XG4gICAgICAgIHByb2ZpbGUsXG4gICAgICAgIHRva2VucyxcbiAgICAgICAgcHJvdmlkZXIsXG4gICAgICAgIGxvZ2dlclxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZ2dlci5lcnJvcihcIk9BVVRIX1YxX0dFVF9BQ0NFU1NfVE9LRU5fRVJST1JcIiwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICB2YXIgX3Byb3ZpZGVyJHRva2VuLCBfcHJvdmlkZXIkdG9rZW4yLCBfcHJvdmlkZXIkdXNlcmluZm8sIF9yZWYsIF9yZXEkYm9keSR1c2VyO1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgKDAsIF9jbGllbnQub3BlbmlkQ2xpZW50KShyZXEub3B0aW9ucyk7XG4gICAgbGV0IHRva2VucztcbiAgICBjb25zdCBjaGVja3MgPSB7XG4gICAgICBjb2RlX3ZlcmlmaWVyOiBhd2FpdCAoMCwgX3BrY2VIYW5kbGVyLnVzZVBLQ0VDb2RlVmVyaWZpZXIpKHJlcSwgcmVzKSxcbiAgICAgIHN0YXRlOiAoMCwgX3N0YXRlSGFuZGxlci5nZXRTdGF0ZSkocmVxKVxuICAgIH07XG4gICAgY29uc3QgcGFyYW1zID0geyAuLi5jbGllbnQuY2FsbGJhY2tQYXJhbXMocmVxKSxcbiAgICAgIC4uLigoX3Byb3ZpZGVyJHRva2VuID0gcHJvdmlkZXIudG9rZW4pID09PSBudWxsIHx8IF9wcm92aWRlciR0b2tlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Byb3ZpZGVyJHRva2VuLnBhcmFtcylcbiAgICB9O1xuXG4gICAgaWYgKChfcHJvdmlkZXIkdG9rZW4yID0gcHJvdmlkZXIudG9rZW4pICE9PSBudWxsICYmIF9wcm92aWRlciR0b2tlbjIgIT09IHZvaWQgMCAmJiBfcHJvdmlkZXIkdG9rZW4yLnJlcXVlc3QpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJvdmlkZXIudG9rZW4ucmVxdWVzdCh7XG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICBwYXJhbXMsXG4gICAgICAgIGNoZWNrcyxcbiAgICAgICAgY2xpZW50XG4gICAgICB9KTtcbiAgICAgIHRva2VucyA9IG5ldyBfb3BlbmlkQ2xpZW50LlRva2VuU2V0KHJlc3BvbnNlLnRva2Vucyk7XG4gICAgfSBlbHNlIGlmIChwcm92aWRlci5pZFRva2VuKSB7XG4gICAgICB0b2tlbnMgPSBhd2FpdCBjbGllbnQuY2FsbGJhY2socHJvdmlkZXIuY2FsbGJhY2tVcmwsIHBhcmFtcywgY2hlY2tzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9rZW5zID0gYXdhaXQgY2xpZW50Lm9hdXRoQ2FsbGJhY2socHJvdmlkZXIuY2FsbGJhY2tVcmwsIHBhcmFtcywgY2hlY2tzKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnMuc2NvcGUpKSB7XG4gICAgICB0b2tlbnMuc2NvcGUgPSB0b2tlbnMuc2NvcGUuam9pbihcIiBcIik7XG4gICAgfVxuXG4gICAgbGV0IHByb2ZpbGU7XG5cbiAgICBpZiAoKF9wcm92aWRlciR1c2VyaW5mbyA9IHByb3ZpZGVyLnVzZXJpbmZvKSAhPT0gbnVsbCAmJiBfcHJvdmlkZXIkdXNlcmluZm8gIT09IHZvaWQgMCAmJiBfcHJvdmlkZXIkdXNlcmluZm8ucmVxdWVzdCkge1xuICAgICAgcHJvZmlsZSA9IGF3YWl0IHByb3ZpZGVyLnVzZXJpbmZvLnJlcXVlc3Qoe1xuICAgICAgICBwcm92aWRlcixcbiAgICAgICAgdG9rZW5zLFxuICAgICAgICBjbGllbnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocHJvdmlkZXIuaWRUb2tlbikge1xuICAgICAgcHJvZmlsZSA9IHRva2Vucy5jbGFpbXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9wcm92aWRlciR1c2VyaW5mbzI7XG5cbiAgICAgIHByb2ZpbGUgPSBhd2FpdCBjbGllbnQudXNlcmluZm8odG9rZW5zLCB7XG4gICAgICAgIHBhcmFtczogKF9wcm92aWRlciR1c2VyaW5mbzIgPSBwcm92aWRlci51c2VyaW5mbykgPT09IG51bGwgfHwgX3Byb3ZpZGVyJHVzZXJpbmZvMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Byb3ZpZGVyJHVzZXJpbmZvMi5wYXJhbXNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2ZpbGUudXNlciA9IEpTT04ucGFyc2UoKF9yZWYgPSAoX3JlcSRib2R5JHVzZXIgPSByZXEuYm9keS51c2VyKSAhPT0gbnVsbCAmJiBfcmVxJGJvZHkkdXNlciAhPT0gdm9pZCAwID8gX3JlcSRib2R5JHVzZXIgOiByZXEucXVlcnkudXNlcikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IG51bGwpO1xuICAgIHJldHVybiBhd2FpdCBnZXRQcm9maWxlKHtcbiAgICAgIHByb2ZpbGUsXG4gICAgICBwcm92aWRlcixcbiAgICAgIHRva2VucyxcbiAgICAgIGxvZ2dlclxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcihcIk9BVVRIX0NBTExCQUNLX0VSUk9SXCIsIHtcbiAgICAgIGVycm9yLFxuICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWRcbiAgICB9KTtcbiAgICB0aHJvdyBuZXcgX2Vycm9ycy5PQXV0aENhbGxiYWNrRXJyb3IoZXJyb3IpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFByb2ZpbGUoe1xuICBwcm9maWxlOiBPQXV0aFByb2ZpbGUsXG4gIHRva2VucyxcbiAgcHJvdmlkZXIsXG4gIGxvZ2dlclxufSkge1xuICB0cnkge1xuICAgIHZhciBfcHJvZmlsZSRlbWFpbDtcblxuICAgIGxvZ2dlci5kZWJ1ZyhcIlBST0ZJTEVfREFUQVwiLCB7XG4gICAgICBPQXV0aFByb2ZpbGVcbiAgICB9KTtcbiAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgcHJvdmlkZXIucHJvZmlsZShPQXV0aFByb2ZpbGUsIHRva2Vucyk7XG4gICAgcHJvZmlsZS5lbWFpbCA9IChfcHJvZmlsZSRlbWFpbCA9IHByb2ZpbGUuZW1haWwpID09PSBudWxsIHx8IF9wcm9maWxlJGVtYWlsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJvZmlsZSRlbWFpbC50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9maWxlLFxuICAgICAgYWNjb3VudDoge1xuICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIuaWQsXG4gICAgICAgIHR5cGU6IHByb3ZpZGVyLnR5cGUsXG4gICAgICAgIHByb3ZpZGVyQWNjb3VudElkOiBwcm9maWxlLmlkLnRvU3RyaW5nKCksXG4gICAgICAgIC4uLnRva2Vuc1xuICAgICAgfSxcbiAgICAgIE9BdXRoUHJvZmlsZVxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yKFwiT0FVVEhfUEFSU0VfUFJPRklMRV9FUlJPUlwiLCB7XG4gICAgICBlcnJvcixcbiAgICAgIE9BdXRoUHJvZmlsZVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9maWxlOiBudWxsLFxuICAgICAgYWNjb3VudDogbnVsbCxcbiAgICAgIE9BdXRoUHJvZmlsZVxuICAgIH07XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMub0F1dGgxQ2xpZW50ID0gb0F1dGgxQ2xpZW50O1xuXG52YXIgX29hdXRoID0gcmVxdWlyZShcIm9hdXRoXCIpO1xuXG5mdW5jdGlvbiBvQXV0aDFDbGllbnQob3B0aW9ucykge1xuICBjb25zdCBwcm92aWRlciA9IG9wdGlvbnMucHJvdmlkZXI7XG4gIGNvbnN0IG9hdXRoMUNsaWVudCA9IG5ldyBfb2F1dGguT0F1dGgocHJvdmlkZXIucmVxdWVzdFRva2VuVXJsLCBwcm92aWRlci5hY2Nlc3NUb2tlblVybCwgcHJvdmlkZXIuY2xpZW50SWQsIHByb3ZpZGVyLmNsaWVudFNlY3JldCwgcHJvdmlkZXIudmVyc2lvbiB8fCBcIjEuMFwiLCBwcm92aWRlci5jYWxsYmFja1VybCwgcHJvdmlkZXIuZW5jb2RpbmcgfHwgXCJITUFDLVNIQTFcIik7XG4gIGNvbnN0IG9yaWdpbmFsR2V0ID0gb2F1dGgxQ2xpZW50LmdldC5iaW5kKG9hdXRoMUNsaWVudCk7XG5cbiAgb2F1dGgxQ2xpZW50LmdldCA9ICguLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG9yaWdpbmFsR2V0KC4uLmFyZ3MsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb3JpZ2luYWxHZXRPQXV0aDFBY2Nlc3NUb2tlbiA9IG9hdXRoMUNsaWVudC5nZXRPQXV0aEFjY2Vzc1Rva2VuLmJpbmQob2F1dGgxQ2xpZW50KTtcblxuICBvYXV0aDFDbGllbnQuZ2V0T0F1dGhBY2Nlc3NUb2tlbiA9ICguLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG9yaWdpbmFsR2V0T0F1dGgxQWNjZXNzVG9rZW4oLi4uYXJncywgKGVycm9yLCBvYXV0aF90b2tlbiwgb2F1dGhfdG9rZW5fc2VjcmV0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgb2F1dGhfdG9rZW4sXG4gICAgICAgICAgb2F1dGhfdG9rZW5fc2VjcmV0XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb3JpZ2luYWxHZXRPQXV0aFJlcXVlc3RUb2tlbiA9IG9hdXRoMUNsaWVudC5nZXRPQXV0aFJlcXVlc3RUb2tlbi5iaW5kKG9hdXRoMUNsaWVudCk7XG5cbiAgb2F1dGgxQ2xpZW50LmdldE9BdXRoUmVxdWVzdFRva2VuID0gKHBhcmFtcyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG9yaWdpbmFsR2V0T0F1dGhSZXF1ZXN0VG9rZW4ocGFyYW1zLCAoZXJyb3IsIG9hdXRoX3Rva2VuLCBvYXV0aF90b2tlbl9zZWNyZXQsIHBhcmFtcykgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIG9hdXRoX3Rva2VuLFxuICAgICAgICAgIG9hdXRoX3Rva2VuX3NlY3JldCxcbiAgICAgICAgICBwYXJhbXNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gb2F1dGgxQ2xpZW50O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5vcGVuaWRDbGllbnQgPSBvcGVuaWRDbGllbnQ7XG5cbnZhciBfb3BlbmlkQ2xpZW50ID0gcmVxdWlyZShcIm9wZW5pZC1jbGllbnRcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIG9wZW5pZENsaWVudChvcHRpb25zKSB7XG4gIGNvbnN0IHByb3ZpZGVyID0gb3B0aW9ucy5wcm92aWRlcjtcbiAgbGV0IGlzc3VlcjtcblxuICBpZiAocHJvdmlkZXIud2VsbEtub3duKSB7XG4gICAgaXNzdWVyID0gYXdhaXQgX29wZW5pZENsaWVudC5Jc3N1ZXIuZGlzY292ZXIocHJvdmlkZXIud2VsbEtub3duKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX3Byb3ZpZGVyJGF1dGhvcml6YXRpLCBfcHJvdmlkZXIkdG9rZW4kdXJsLCBfcHJvdmlkZXIkdXNlcmluZm8kdXI7XG5cbiAgICBpc3N1ZXIgPSBuZXcgX29wZW5pZENsaWVudC5Jc3N1ZXIoe1xuICAgICAgaXNzdWVyOiBwcm92aWRlci5pc3N1ZXIsXG4gICAgICBhdXRob3JpemF0aW9uX2VuZHBvaW50OiAoX3Byb3ZpZGVyJGF1dGhvcml6YXRpID0gcHJvdmlkZXIuYXV0aG9yaXphdGlvbi51cmwpICE9PSBudWxsICYmIF9wcm92aWRlciRhdXRob3JpemF0aSAhPT0gdm9pZCAwID8gX3Byb3ZpZGVyJGF1dGhvcml6YXRpIDogcHJvdmlkZXIuYXV0aG9yaXphdGlvbixcbiAgICAgIHRva2VuX2VuZHBvaW50OiAoX3Byb3ZpZGVyJHRva2VuJHVybCA9IHByb3ZpZGVyLnRva2VuLnVybCkgIT09IG51bGwgJiYgX3Byb3ZpZGVyJHRva2VuJHVybCAhPT0gdm9pZCAwID8gX3Byb3ZpZGVyJHRva2VuJHVybCA6IHByb3ZpZGVyLnRva2VuLFxuICAgICAgdXNlcmluZm9fZW5kcG9pbnQ6IChfcHJvdmlkZXIkdXNlcmluZm8kdXIgPSBwcm92aWRlci51c2VyaW5mby51cmwpICE9PSBudWxsICYmIF9wcm92aWRlciR1c2VyaW5mbyR1ciAhPT0gdm9pZCAwID8gX3Byb3ZpZGVyJHVzZXJpbmZvJHVyIDogcHJvdmlkZXIudXNlcmluZm9cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBpc3N1ZXIuQ2xpZW50KHtcbiAgICBjbGllbnRfaWQ6IHByb3ZpZGVyLmNsaWVudElkLFxuICAgIGNsaWVudF9zZWNyZXQ6IHByb3ZpZGVyLmNsaWVudFNlY3JldCxcbiAgICByZWRpcmVjdF91cmlzOiBbcHJvdmlkZXIuY2FsbGJhY2tVcmxdXG4gIH0pO1xuICByZXR1cm4gY2xpZW50O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVQS0NFID0gY3JlYXRlUEtDRTtcbmV4cG9ydHMudXNlUEtDRUNvZGVWZXJpZmllciA9IHVzZVBLQ0VDb2RlVmVyaWZpZXI7XG5cbnZhciBjb29raWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vY29va2llXCIpKTtcblxudmFyIGp3dCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi8uLi8uLi9qd3RcIikpO1xuXG52YXIgX29wZW5pZENsaWVudCA9IHJlcXVpcmUoXCJvcGVuaWQtY2xpZW50XCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5jb25zdCBQS0NFX0xFTkdUSCA9IDY0O1xuY29uc3QgUEtDRV9DT0RFX0NIQUxMRU5HRV9NRVRIT0QgPSBcIlMyNTZcIjtcbmNvbnN0IFBLQ0VfTUFYX0FHRSA9IDYwICogMTU7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBLQ0UocmVxLCByZXMpIHtcbiAgdmFyIF9wcm92aWRlciRjaGVja3M7XG5cbiAgY29uc3Qge1xuICAgIGNvb2tpZXMsXG4gICAgbG9nZ2VyXG4gIH0gPSByZXEub3B0aW9ucztcbiAgY29uc3QgcHJvdmlkZXIgPSByZXEub3B0aW9ucy5wcm92aWRlcjtcblxuICBpZiAoISgoX3Byb3ZpZGVyJGNoZWNrcyA9IHByb3ZpZGVyLmNoZWNrcykgIT09IG51bGwgJiYgX3Byb3ZpZGVyJGNoZWNrcyAhPT0gdm9pZCAwICYmIF9wcm92aWRlciRjaGVja3MuaW5jbHVkZXMoXCJwa2NlXCIpKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNvZGVWZXJpZmllciA9IF9vcGVuaWRDbGllbnQuZ2VuZXJhdG9ycy5jb2RlVmVyaWZpZXIoUEtDRV9MRU5HVEgpO1xuXG4gIGNvbnN0IGNvZGVDaGFsbGVuZ2UgPSBfb3BlbmlkQ2xpZW50LmdlbmVyYXRvcnMuY29kZUNoYWxsZW5nZShjb2RlVmVyaWZpZXIpO1xuXG4gIGNvbnN0IGVuY3J5cHRlZENvZGVWZXJpZmllciA9IGF3YWl0IGp3dC5lbmNvZGUoe1xuICAgIG1heEFnZTogUEtDRV9NQVhfQUdFLFxuICAgIC4uLnJlcS5vcHRpb25zLmp3dCxcbiAgICB0b2tlbjoge1xuICAgICAgY29kZV92ZXJpZmllcjogY29kZVZlcmlmaWVyXG4gICAgfSxcbiAgICBlbmNyeXB0aW9uOiB0cnVlXG4gIH0pO1xuICBjb25zdCBjb29raWVFeHBpcmVzID0gbmV3IERhdGUoKTtcbiAgY29va2llRXhwaXJlcy5zZXRUaW1lKGNvb2tpZUV4cGlyZXMuZ2V0VGltZSgpICsgUEtDRV9NQVhfQUdFICogMTAwMCk7XG4gIGNvb2tpZS5zZXQocmVzLCBjb29raWVzLnBrY2VDb2RlVmVyaWZpZXIubmFtZSwgZW5jcnlwdGVkQ29kZVZlcmlmaWVyLCB7XG4gICAgZXhwaXJlczogY29va2llRXhwaXJlcy50b0lTT1N0cmluZygpLFxuICAgIC4uLmNvb2tpZXMucGtjZUNvZGVWZXJpZmllci5vcHRpb25zXG4gIH0pO1xuICBsb2dnZXIuZGVidWcoXCJDUkVBVEVfUEtDRV9DSEFMTEVOR0VfVkVSSUZJRVJcIiwge1xuICAgIHBrY2U6IHtcbiAgICAgIGNvZGVfY2hhbGxlbmdlOiBjb2RlQ2hhbGxlbmdlLFxuICAgICAgY29kZV92ZXJpZmllcjogY29kZVZlcmlmaWVyXG4gICAgfSxcbiAgICBwa2NlTGVuZ3RoOiBQS0NFX0xFTkdUSCxcbiAgICBtZXRob2Q6IFBLQ0VfQ09ERV9DSEFMTEVOR0VfTUVUSE9EXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNvZGVfY2hhbGxlbmdlOiBjb2RlQ2hhbGxlbmdlLFxuICAgIGNvZGVfY2hhbGxlbmdlX21ldGhvZDogUEtDRV9DT0RFX0NIQUxMRU5HRV9NRVRIT0RcbiAgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXNlUEtDRUNvZGVWZXJpZmllcihyZXEsIHJlcykge1xuICB2YXIgX3BrY2UkY29kZV92ZXJpZmllcjtcblxuICBjb25zdCBwcm92aWRlciA9IHJlcS5vcHRpb25zLnByb3ZpZGVyO1xuICBjb25zdCB7XG4gICAgY29va2llc1xuICB9ID0gcmVxLm9wdGlvbnM7XG5cbiAgaWYgKCEocHJvdmlkZXIgIT09IG51bGwgJiYgcHJvdmlkZXIgIT09IHZvaWQgMCAmJiBwcm92aWRlci5jaGVja3MuaW5jbHVkZXMoXCJwa2NlXCIpKSB8fCAhKGNvb2tpZXMucGtjZUNvZGVWZXJpZmllci5uYW1lIGluIHJlcS5jb29raWVzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBrY2UgPSBhd2FpdCBqd3QuZGVjb2RlKHsgLi4ucmVxLm9wdGlvbnMuand0LFxuICAgIHRva2VuOiByZXEuY29va2llc1tjb29raWVzLnBrY2VDb2RlVmVyaWZpZXIubmFtZV0sXG4gICAgbWF4QWdlOiBQS0NFX01BWF9BR0UsXG4gICAgZW5jcnlwdGlvbjogdHJ1ZVxuICB9KTtcbiAgY29va2llLnNldChyZXMsIGNvb2tpZXMucGtjZUNvZGVWZXJpZmllci5uYW1lLCBcIlwiLCB7IC4uLmNvb2tpZXMucGtjZUNvZGVWZXJpZmllci5vcHRpb25zLFxuICAgIG1heEFnZTogMFxuICB9KTtcbiAgcmV0dXJuIChfcGtjZSRjb2RlX3ZlcmlmaWVyID0gcGtjZSA9PT0gbnVsbCB8fCBwa2NlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwa2NlLmNvZGVfdmVyaWZpZXIpICE9PSBudWxsICYmIF9wa2NlJGNvZGVfdmVyaWZpZXIgIT09IHZvaWQgMCA/IF9wa2NlJGNvZGVfdmVyaWZpZXIgOiB1bmRlZmluZWQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZVN0YXRlID0gY3JlYXRlU3RhdGU7XG5leHBvcnRzLmdldFN0YXRlID0gZ2V0U3RhdGU7XG5cbnZhciBfY3J5cHRvID0gcmVxdWlyZShcImNyeXB0b1wiKTtcblxuZnVuY3Rpb24gY3JlYXRlU3RhdGUocmVxKSB7XG4gIHZhciBfcHJvdmlkZXIkY2hlY2tzO1xuXG4gIGNvbnN0IHtcbiAgICBjc3JmVG9rZW4sXG4gICAgbG9nZ2VyXG4gIH0gPSByZXEub3B0aW9ucztcbiAgY29uc3QgcHJvdmlkZXIgPSByZXEub3B0aW9ucy5wcm92aWRlcjtcblxuICBpZiAoISgoX3Byb3ZpZGVyJGNoZWNrcyA9IHByb3ZpZGVyLmNoZWNrcykgIT09IG51bGwgJiYgX3Byb3ZpZGVyJGNoZWNrcyAhPT0gdm9pZCAwICYmIF9wcm92aWRlciRjaGVja3MuaW5jbHVkZXMoXCJzdGF0ZVwiKSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzdGF0ZSA9ICgwLCBfY3J5cHRvLmNyZWF0ZUhhc2gpKFwic2hhMjU2XCIpLnVwZGF0ZShjc3JmVG9rZW4pLmRpZ2VzdChcImhleFwiKTtcbiAgbG9nZ2VyLmRlYnVnKFwiT0FVVEhfQ0FMTEJBQ0tfUFJPVEVDVElPTlwiLCB7XG4gICAgc3RhdGUsXG4gICAgY3NyZlRva2VuXG4gIH0pO1xuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXRlKHtcbiAgb3B0aW9uc1xufSkge1xuICBjb25zdCBwcm92aWRlciA9IG9wdGlvbnMucHJvdmlkZXI7XG5cbiAgaWYgKHByb3ZpZGVyICE9PSBudWxsICYmIHByb3ZpZGVyICE9PSB2b2lkIDAgJiYgcHJvdmlkZXIuY2hlY2tzLmluY2x1ZGVzKFwic3RhdGVcIikpIHtcbiAgICByZXR1cm4gKDAsIF9jcnlwdG8uY3JlYXRlSGFzaCkoXCJzaGEyNTZcIikudXBkYXRlKG9wdGlvbnMuY3NyZlRva2VuKS5kaWdlc3QoXCJoZXhcIik7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlUHJvdmlkZXJzO1xuXG52YXIgX21lcmdlID0gcmVxdWlyZShcIi4uLy4uL2xpYi9tZXJnZVwiKTtcblxuZnVuY3Rpb24gcGFyc2VQcm92aWRlcnMocGFyYW1zKSB7XG4gIGNvbnN0IHtcbiAgICBwcm92aWRlcnMgPSBbXSxcbiAgICBiYXNlXG4gIH0gPSBwYXJhbXM7XG4gIHJldHVybiBwcm92aWRlcnMubWFwKCh7XG4gICAgb3B0aW9ucyxcbiAgICAuLi5kZWZhdWx0T3B0aW9uc1xuICB9KSA9PiAoMCwgX21lcmdlLm1lcmdlKShkZWZhdWx0T3B0aW9ucywge1xuICAgIHNpZ25pblVybDogYCR7YmFzZX0vc2lnbmluLyR7ZGVmYXVsdE9wdGlvbnMuaWR9YCxcbiAgICBjYWxsYmFja1VybDogYCR7YmFzZX0vY2FsbGJhY2svJHtkZWZhdWx0T3B0aW9ucy5pZH1gLFxuICAgIC4uLm9wdGlvbnNcbiAgfSkpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5mcm9tRGF0ZSA9IGZyb21EYXRlO1xuZXhwb3J0cy5oYXNoVG9rZW4gPSBoYXNoVG9rZW47XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVTZWNyZXQ7XG5cbnZhciBfY3J5cHRvID0gcmVxdWlyZShcImNyeXB0b1wiKTtcblxuZnVuY3Rpb24gZnJvbURhdGUodGltZSwgZGF0ZSA9IERhdGUubm93KCkpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKGRhdGUgKyB0aW1lICogMTAwMCk7XG59XG5cbmZ1bmN0aW9uIGhhc2hUb2tlbih0b2tlbiwgb3B0aW9ucykge1xuICB2YXIgX3Byb3ZpZGVyJHNlY3JldDtcblxuICBjb25zdCB7XG4gICAgcHJvdmlkZXIsXG4gICAgc2VjcmV0XG4gIH0gPSBvcHRpb25zO1xuICByZXR1cm4gKDAsIF9jcnlwdG8uY3JlYXRlSGFzaCkoXCJzaGEyNTZcIikudXBkYXRlKGAke3Rva2VufSR7KF9wcm92aWRlciRzZWNyZXQgPSBwcm92aWRlci5zZWNyZXQpICE9PSBudWxsICYmIF9wcm92aWRlciRzZWNyZXQgIT09IHZvaWQgMCA/IF9wcm92aWRlciRzZWNyZXQgOiBzZWNyZXR9YCkuZGlnZXN0KFwiaGV4XCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWNyZXQoe1xuICB1c2VyT3B0aW9ucyxcbiAgYmFzZVBhdGgsXG4gIGJhc2VVcmxcbn0pIHtcbiAgdmFyIF91c2VyT3B0aW9ucyRzZWNyZXQ7XG5cbiAgcmV0dXJuIChfdXNlck9wdGlvbnMkc2VjcmV0ID0gdXNlck9wdGlvbnMuc2VjcmV0KSAhPT0gbnVsbCAmJiBfdXNlck9wdGlvbnMkc2VjcmV0ICE9PSB2b2lkIDAgPyBfdXNlck9wdGlvbnMkc2VjcmV0IDogKDAsIF9jcnlwdG8uY3JlYXRlSGFzaCkoXCJzaGEyNTZcIikudXBkYXRlKEpTT04uc3RyaW5naWZ5KHtcbiAgICBiYXNlVXJsLFxuICAgIGJhc2VQYXRoLFxuICAgIC4uLnVzZXJPcHRpb25zXG4gIH0pKS5kaWdlc3QoXCJoZXhcIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBFcnJvcjtcblxudmFyIF9wcmVhY3QgPSByZXF1aXJlKFwicHJlYWN0XCIpO1xuXG5mdW5jdGlvbiBFcnJvcih7XG4gIGJhc2VVcmwsXG4gIGJhc2VQYXRoLFxuICBlcnJvciA9IFwiZGVmYXVsdFwiLFxuICByZXNcbn0pIHtcbiAgdmFyIF9lcnJvcnMkZXJyb3IkdG9Mb3dlcjtcblxuICBjb25zdCBzaWduaW5QYWdlVXJsID0gYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9zaWduaW5gO1xuICBjb25zdCBlcnJvcnMgPSB7XG4gICAgZGVmYXVsdDoge1xuICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgaGVhZGluZzogXCJFcnJvclwiLFxuICAgICAgbWVzc2FnZTogKDAsIF9wcmVhY3QuaCkoXCJwXCIsIG51bGwsICgwLCBfcHJlYWN0LmgpKFwiYVwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJzaXRlXCIsXG4gICAgICAgIGhyZWY6IGJhc2VVcmxcbiAgICAgIH0sIGJhc2VVcmwucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC8vLCBcIlwiKSkpXG4gICAgfSxcbiAgICBjb25maWd1cmF0aW9uOiB7XG4gICAgICBzdGF0dXNDb2RlOiA1MDAsXG4gICAgICBoZWFkaW5nOiBcIlNlcnZlciBlcnJvclwiLFxuICAgICAgbWVzc2FnZTogKDAsIF9wcmVhY3QuaCkoXCJkaXZcIiwgbnVsbCwgKDAsIF9wcmVhY3QuaCkoXCJwXCIsIG51bGwsIFwiVGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggdGhlIHNlcnZlciBjb25maWd1cmF0aW9uLlwiKSwgKDAsIF9wcmVhY3QuaCkoXCJwXCIsIG51bGwsIFwiQ2hlY2sgdGhlIHNlcnZlciBsb2dzIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKSlcbiAgICB9LFxuICAgIGFjY2Vzc2RlbmllZDoge1xuICAgICAgc3RhdHVzQ29kZTogNDAzLFxuICAgICAgaGVhZGluZzogXCJBY2Nlc3MgRGVuaWVkXCIsXG4gICAgICBtZXNzYWdlOiAoMCwgX3ByZWFjdC5oKShcImRpdlwiLCBudWxsLCAoMCwgX3ByZWFjdC5oKShcInBcIiwgbnVsbCwgXCJZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBzaWduIGluLlwiKSwgKDAsIF9wcmVhY3QuaCkoXCJwXCIsIG51bGwsICgwLCBfcHJlYWN0LmgpKFwiYVwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJidXR0b25cIixcbiAgICAgICAgaHJlZjogc2lnbmluUGFnZVVybFxuICAgICAgfSwgXCJTaWduIGluXCIpKSlcbiAgICB9LFxuICAgIHZlcmlmaWNhdGlvbjoge1xuICAgICAgc3RhdHVzQ29kZTogNDAzLFxuICAgICAgaGVhZGluZzogXCJVbmFibGUgdG8gc2lnbiBpblwiLFxuICAgICAgbWVzc2FnZTogKDAsIF9wcmVhY3QuaCkoXCJkaXZcIiwgbnVsbCwgKDAsIF9wcmVhY3QuaCkoXCJwXCIsIG51bGwsIFwiVGhlIHNpZ24gaW4gbGluayBpcyBubyBsb25nZXIgdmFsaWQuXCIpLCAoMCwgX3ByZWFjdC5oKShcInBcIiwgbnVsbCwgXCJJdCBtYXkgaGF2ZSBiZWVuIHVzZWQgYWxyZWFkeSBvciBpdCBtYXkgaGF2ZSBleHBpcmVkLlwiKSksXG4gICAgICBzaWduaW46ICgwLCBfcHJlYWN0LmgpKFwicFwiLCBudWxsLCAoMCwgX3ByZWFjdC5oKShcImFcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGhyZWY6IHNpZ25pblBhZ2VVcmxcbiAgICAgIH0sIFwiU2lnbiBpblwiKSlcbiAgICB9XG4gIH07XG4gIGNvbnN0IHtcbiAgICBzdGF0dXNDb2RlLFxuICAgIGhlYWRpbmcsXG4gICAgbWVzc2FnZSxcbiAgICBzaWduaW5cbiAgfSA9IChfZXJyb3JzJGVycm9yJHRvTG93ZXIgPSBlcnJvcnNbZXJyb3IudG9Mb3dlckNhc2UoKV0pICE9PSBudWxsICYmIF9lcnJvcnMkZXJyb3IkdG9Mb3dlciAhPT0gdm9pZCAwID8gX2Vycm9ycyRlcnJvciR0b0xvd2VyIDogZXJyb3JzLmRlZmF1bHQ7XG4gIHJlcy5zdGF0dXMoc3RhdHVzQ29kZSk7XG4gIHJldHVybiAoMCwgX3ByZWFjdC5oKShcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImVycm9yXCJcbiAgfSwgKDAsIF9wcmVhY3QuaCkoXCJoMVwiLCBudWxsLCBoZWFkaW5nKSwgKDAsIF9wcmVhY3QuaCkoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJtZXNzYWdlXCJcbiAgfSwgbWVzc2FnZSksIHNpZ25pbik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcmVuZGVyUGFnZTtcblxudmFyIF9wcmVhY3RSZW5kZXJUb1N0cmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByZWFjdC1yZW5kZXItdG8tc3RyaW5nXCIpKTtcblxudmFyIF9zaWduaW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NpZ25pblwiKSk7XG5cbnZhciBfc2lnbm91dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2lnbm91dFwiKSk7XG5cbnZhciBfdmVyaWZ5UmVxdWVzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmVyaWZ5LXJlcXVlc3RcIikpO1xuXG52YXIgX2Vycm9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9lcnJvclwiKSk7XG5cbnZhciBfY3NzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vY3NzXCIpKTtcblxuZnVuY3Rpb24gcmVuZGVyUGFnZShyZXEsIHJlcykge1xuICBjb25zdCB7XG4gICAgYmFzZVVybCxcbiAgICBiYXNlUGF0aCxcbiAgICBjYWxsYmFja1VybCxcbiAgICBjc3JmVG9rZW4sXG4gICAgcHJvdmlkZXJzLFxuICAgIHRoZW1lXG4gIH0gPSByZXEub3B0aW9ucztcbiAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICBmdW5jdGlvbiBzZW5kKHtcbiAgICBodG1sLFxuICAgIHRpdGxlXG4gIH0pIHtcbiAgICByZXMuc2VuZChgPCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz1cImVuXCI+PGhlYWQ+PG1ldGEgY2hhcnNldD1cIlVURi04XCI+PG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCI+PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj48c3R5bGU+JHsoMCwgX2Nzcy5kZWZhdWx0KSgpfTwvc3R5bGU+PHRpdGxlPiR7dGl0bGV9PC90aXRsZT48L2hlYWQ+PGJvZHkgY2xhc3M9XCJfX25leHQtYXV0aC10aGVtZS0ke3RoZW1lfVwiPjxkaXYgY2xhc3M9XCJwYWdlXCI+JHsoMCwgX3ByZWFjdFJlbmRlclRvU3RyaW5nLmRlZmF1bHQpKGh0bWwpfTwvZGl2PjwvYm9keT48L2h0bWw+YCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNpZ25pbihwcm9wcykge1xuICAgICAgc2VuZCh7XG4gICAgICAgIGh0bWw6ICgwLCBfc2lnbmluLmRlZmF1bHQpKHtcbiAgICAgICAgICBjc3JmVG9rZW4sXG4gICAgICAgICAgcHJvdmlkZXJzLFxuICAgICAgICAgIGNhbGxiYWNrVXJsLFxuICAgICAgICAgIC4uLnJlcS5xdWVyeSxcbiAgICAgICAgICAuLi5wcm9wc1xuICAgICAgICB9KSxcbiAgICAgICAgdGl0bGU6IFwiU2lnbiBJblwiXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2lnbm91dChwcm9wcykge1xuICAgICAgc2VuZCh7XG4gICAgICAgIGh0bWw6ICgwLCBfc2lnbm91dC5kZWZhdWx0KSh7XG4gICAgICAgICAgY3NyZlRva2VuLFxuICAgICAgICAgIGJhc2VVcmwsXG4gICAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgICAgLi4ucHJvcHNcbiAgICAgICAgfSksXG4gICAgICAgIHRpdGxlOiBcIlNpZ24gT3V0XCJcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB2ZXJpZnlSZXF1ZXN0KHByb3BzKSB7XG4gICAgICBzZW5kKHtcbiAgICAgICAgaHRtbDogKDAsIF92ZXJpZnlSZXF1ZXN0LmRlZmF1bHQpKHtcbiAgICAgICAgICBiYXNlVXJsLFxuICAgICAgICAgIC4uLnByb3BzXG4gICAgICAgIH0pLFxuICAgICAgICB0aXRsZTogXCJWZXJpZnkgUmVxdWVzdFwiXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgZXJyb3IocHJvcHMpIHtcbiAgICAgIHNlbmQoe1xuICAgICAgICBodG1sOiAoMCwgX2Vycm9yLmRlZmF1bHQpKHtcbiAgICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgICBiYXNlVXJsLFxuICAgICAgICAgIHJlcyxcbiAgICAgICAgICAuLi5wcm9wc1xuICAgICAgICB9KSxcbiAgICAgICAgdGl0bGU6IFwiRXJyb3JcIlxuICAgICAgfSk7XG4gICAgfVxuXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTaWduaW47XG5cbnZhciBfcHJlYWN0ID0gcmVxdWlyZShcInByZWFjdFwiKTtcblxuZnVuY3Rpb24gU2lnbmluKHtcbiAgY3NyZlRva2VuLFxuICBwcm92aWRlcnMsXG4gIGNhbGxiYWNrVXJsLFxuICBlbWFpbCxcbiAgZXJyb3I6IGVycm9yVHlwZVxufSkge1xuICB2YXIgX2Vycm9ycyRlcnJvclR5cGU7XG5cbiAgY29uc3QgcHJvdmlkZXJzVG9SZW5kZXIgPSBwcm92aWRlcnMuZmlsdGVyKHByb3ZpZGVyID0+IHtcbiAgICBpZiAocHJvdmlkZXIudHlwZSA9PT0gXCJvYXV0aFwiIHx8IHByb3ZpZGVyLnR5cGUgPT09IFwiZW1haWxcIikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChwcm92aWRlci50eXBlID09PSBcImNyZWRlbnRpYWxzXCIgJiYgcHJvdmlkZXIuY3JlZGVudGlhbHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIGNvbnN0IGVycm9ycyA9IHtcbiAgICBTaWduaW46IFwiVHJ5IHNpZ25pbmcgaW4gd2l0aCBhIGRpZmZlcmVudCBhY2NvdW50LlwiLFxuICAgIE9BdXRoU2lnbmluOiBcIlRyeSBzaWduaW5nIGluIHdpdGggYSBkaWZmZXJlbnQgYWNjb3VudC5cIixcbiAgICBPQXV0aENhbGxiYWNrOiBcIlRyeSBzaWduaW5nIGluIHdpdGggYSBkaWZmZXJlbnQgYWNjb3VudC5cIixcbiAgICBPQXV0aENyZWF0ZUFjY291bnQ6IFwiVHJ5IHNpZ25pbmcgaW4gd2l0aCBhIGRpZmZlcmVudCBhY2NvdW50LlwiLFxuICAgIEVtYWlsQ3JlYXRlQWNjb3VudDogXCJUcnkgc2lnbmluZyBpbiB3aXRoIGEgZGlmZmVyZW50IGFjY291bnQuXCIsXG4gICAgQ2FsbGJhY2s6IFwiVHJ5IHNpZ25pbmcgaW4gd2l0aCBhIGRpZmZlcmVudCBhY2NvdW50LlwiLFxuICAgIE9BdXRoQWNjb3VudE5vdExpbmtlZDogXCJUbyBjb25maXJtIHlvdXIgaWRlbnRpdHksIHNpZ24gaW4gd2l0aCB0aGUgc2FtZSBhY2NvdW50IHlvdSB1c2VkIG9yaWdpbmFsbHkuXCIsXG4gICAgRW1haWxTaWduaW46IFwiQ2hlY2sgeW91ciBlbWFpbCBpbmJveC5cIixcbiAgICBDcmVkZW50aWFsc1NpZ25pbjogXCJTaWduIGluIGZhaWxlZC4gQ2hlY2sgdGhlIGRldGFpbHMgeW91IHByb3ZpZGVkIGFyZSBjb3JyZWN0LlwiLFxuICAgIGRlZmF1bHQ6IFwiVW5hYmxlIHRvIHNpZ24gaW4uXCJcbiAgfTtcbiAgY29uc3QgZXJyb3IgPSBlcnJvclR5cGUgJiYgKChfZXJyb3JzJGVycm9yVHlwZSA9IGVycm9yc1tlcnJvclR5cGVdKSAhPT0gbnVsbCAmJiBfZXJyb3JzJGVycm9yVHlwZSAhPT0gdm9pZCAwID8gX2Vycm9ycyRlcnJvclR5cGUgOiBlcnJvcnMuZGVmYXVsdCk7XG4gIHJldHVybiAoMCwgX3ByZWFjdC5oKShcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInNpZ25pblwiXG4gIH0sIGVycm9yICYmICgwLCBfcHJlYWN0LmgpKFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZXJyb3JcIlxuICB9LCAoMCwgX3ByZWFjdC5oKShcInBcIiwgbnVsbCwgZXJyb3IpKSwgcHJvdmlkZXJzVG9SZW5kZXIubWFwKChwcm92aWRlciwgaSkgPT4gKDAsIF9wcmVhY3QuaCkoXCJkaXZcIiwge1xuICAgIGtleTogcHJvdmlkZXIuaWQsXG4gICAgY2xhc3NOYW1lOiBcInByb3ZpZGVyXCJcbiAgfSwgcHJvdmlkZXIudHlwZSA9PT0gXCJvYXV0aFwiICYmICgwLCBfcHJlYWN0LmgpKFwiZm9ybVwiLCB7XG4gICAgYWN0aW9uOiBwcm92aWRlci5zaWduaW5VcmwsXG4gICAgbWV0aG9kOiBcIlBPU1RcIlxuICB9LCAoMCwgX3ByZWFjdC5oKShcImlucHV0XCIsIHtcbiAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgIG5hbWU6IFwiY3NyZlRva2VuXCIsXG4gICAgdmFsdWU6IGNzcmZUb2tlblxuICB9KSwgY2FsbGJhY2tVcmwgJiYgKDAsIF9wcmVhY3QuaCkoXCJpbnB1dFwiLCB7XG4gICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICBuYW1lOiBcImNhbGxiYWNrVXJsXCIsXG4gICAgdmFsdWU6IGNhbGxiYWNrVXJsXG4gIH0pLCAoMCwgX3ByZWFjdC5oKShcImJ1dHRvblwiLCB7XG4gICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICBjbGFzc05hbWU6IFwiYnV0dG9uXCJcbiAgfSwgXCJTaWduIGluIHdpdGggXCIsIHByb3ZpZGVyLm5hbWUpKSwgKHByb3ZpZGVyLnR5cGUgPT09IFwiZW1haWxcIiB8fCBwcm92aWRlci50eXBlID09PSBcImNyZWRlbnRpYWxzXCIpICYmIGkgPiAwICYmIHByb3ZpZGVyc1RvUmVuZGVyW2kgLSAxXS50eXBlICE9PSBcImVtYWlsXCIgJiYgcHJvdmlkZXJzVG9SZW5kZXJbaSAtIDFdLnR5cGUgIT09IFwiY3JlZGVudGlhbHNcIiAmJiAoMCwgX3ByZWFjdC5oKShcImhyXCIsIG51bGwpLCBwcm92aWRlci50eXBlID09PSBcImVtYWlsXCIgJiYgKDAsIF9wcmVhY3QuaCkoXCJmb3JtXCIsIHtcbiAgICBhY3Rpb246IHByb3ZpZGVyLnNpZ25pblVybCxcbiAgICBtZXRob2Q6IFwiUE9TVFwiXG4gIH0sICgwLCBfcHJlYWN0LmgpKFwiaW5wdXRcIiwge1xuICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgbmFtZTogXCJjc3JmVG9rZW5cIixcbiAgICB2YWx1ZTogY3NyZlRva2VuXG4gIH0pLCAoMCwgX3ByZWFjdC5oKShcImxhYmVsXCIsIHtcbiAgICBodG1sRm9yOiBgaW5wdXQtZW1haWwtZm9yLSR7cHJvdmlkZXIuaWR9LXByb3ZpZGVyYFxuICB9LCBcIkVtYWlsXCIpLCAoMCwgX3ByZWFjdC5oKShcImlucHV0XCIsIHtcbiAgICBpZDogYGlucHV0LWVtYWlsLWZvci0ke3Byb3ZpZGVyLmlkfS1wcm92aWRlcmAsXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICB2YWx1ZTogZW1haWwsXG4gICAgcGxhY2Vob2xkZXI6IFwiZW1haWxAZXhhbXBsZS5jb21cIlxuICB9KSwgKDAsIF9wcmVhY3QuaCkoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwic3VibWl0XCJcbiAgfSwgXCJTaWduIGluIHdpdGggXCIsIHByb3ZpZGVyLm5hbWUpKSwgcHJvdmlkZXIudHlwZSA9PT0gXCJjcmVkZW50aWFsc1wiICYmICgwLCBfcHJlYWN0LmgpKFwiZm9ybVwiLCB7XG4gICAgYWN0aW9uOiBwcm92aWRlci5jYWxsYmFja1VybCxcbiAgICBtZXRob2Q6IFwiUE9TVFwiXG4gIH0sICgwLCBfcHJlYWN0LmgpKFwiaW5wdXRcIiwge1xuICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgbmFtZTogXCJjc3JmVG9rZW5cIixcbiAgICB2YWx1ZTogY3NyZlRva2VuXG4gIH0pLCBPYmplY3Qua2V5cyhwcm92aWRlci5jcmVkZW50aWFscykubWFwKGNyZWRlbnRpYWwgPT4ge1xuICAgIHJldHVybiAoMCwgX3ByZWFjdC5oKShcImRpdlwiLCB7XG4gICAgICBrZXk6IGBpbnB1dC1ncm91cC0ke3Byb3ZpZGVyLmlkfWBcbiAgICB9LCAoMCwgX3ByZWFjdC5oKShcImxhYmVsXCIsIHtcbiAgICAgIGh0bWxGb3I6IGBpbnB1dC0ke2NyZWRlbnRpYWx9LWZvci0ke3Byb3ZpZGVyLmlkfS1wcm92aWRlcmBcbiAgICB9LCBwcm92aWRlci5jcmVkZW50aWFsc1tjcmVkZW50aWFsXS5sYWJlbCB8fCBjcmVkZW50aWFsKSwgKDAsIF9wcmVhY3QuaCkoXCJpbnB1dFwiLCB7XG4gICAgICBuYW1lOiBjcmVkZW50aWFsLFxuICAgICAgaWQ6IGBpbnB1dC0ke2NyZWRlbnRpYWx9LWZvci0ke3Byb3ZpZGVyLmlkfS1wcm92aWRlcmAsXG4gICAgICB0eXBlOiBwcm92aWRlci5jcmVkZW50aWFsc1tjcmVkZW50aWFsXS50eXBlIHx8IFwidGV4dFwiLFxuICAgICAgdmFsdWU6IHByb3ZpZGVyLmNyZWRlbnRpYWxzW2NyZWRlbnRpYWxdLnZhbHVlIHx8IFwiXCIsXG4gICAgICBwbGFjZWhvbGRlcjogcHJvdmlkZXIuY3JlZGVudGlhbHNbY3JlZGVudGlhbF0ucGxhY2Vob2xkZXIgfHwgXCJcIlxuICAgIH0pKTtcbiAgfSksICgwLCBfcHJlYWN0LmgpKFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcInN1Ym1pdFwiXG4gIH0sIFwiU2lnbiBpbiB3aXRoIFwiLCBwcm92aWRlci5uYW1lKSksIChwcm92aWRlci50eXBlID09PSBcImVtYWlsXCIgfHwgcHJvdmlkZXIudHlwZSA9PT0gXCJjcmVkZW50aWFsc1wiKSAmJiBpICsgMSA8IHByb3ZpZGVyc1RvUmVuZGVyLmxlbmd0aCAmJiAoMCwgX3ByZWFjdC5oKShcImhyXCIsIG51bGwpKSkpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gU2lnbm91dDtcblxudmFyIF9wcmVhY3QgPSByZXF1aXJlKFwicHJlYWN0XCIpO1xuXG5mdW5jdGlvbiBTaWdub3V0KHtcbiAgYmFzZVVybCxcbiAgYmFzZVBhdGgsXG4gIGNzcmZUb2tlblxufSkge1xuICByZXR1cm4gKDAsIF9wcmVhY3QuaCkoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJzaWdub3V0XCJcbiAgfSwgKDAsIF9wcmVhY3QuaCkoXCJoMVwiLCBudWxsLCBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzaWduIG91dD9cIiksICgwLCBfcHJlYWN0LmgpKFwiZm9ybVwiLCB7XG4gICAgYWN0aW9uOiBgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L3NpZ25vdXRgLFxuICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgfSwgKDAsIF9wcmVhY3QuaCkoXCJpbnB1dFwiLCB7XG4gICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICBuYW1lOiBcImNzcmZUb2tlblwiLFxuICAgIHZhbHVlOiBjc3JmVG9rZW5cbiAgfSksICgwLCBfcHJlYWN0LmgpKFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcInN1Ym1pdFwiXG4gIH0sIFwiU2lnbiBvdXRcIikpKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZlcmlmeVJlcXVlc3Q7XG5cbnZhciBfcHJlYWN0ID0gcmVxdWlyZShcInByZWFjdFwiKTtcblxuZnVuY3Rpb24gVmVyaWZ5UmVxdWVzdCh7XG4gIGJhc2VVcmxcbn0pIHtcbiAgcmV0dXJuICgwLCBfcHJlYWN0LmgpKFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwidmVyaWZ5LXJlcXVlc3RcIlxuICB9LCAoMCwgX3ByZWFjdC5oKShcImgxXCIsIG51bGwsIFwiQ2hlY2sgeW91ciBlbWFpbFwiKSwgKDAsIF9wcmVhY3QuaCkoXCJwXCIsIG51bGwsIFwiQSBzaWduIGluIGxpbmsgaGFzIGJlZW4gc2VudCB0byB5b3VyIGVtYWlsIGFkZHJlc3MuXCIpLCAoMCwgX3ByZWFjdC5oKShcInBcIiwgbnVsbCwgKDAsIF9wcmVhY3QuaCkoXCJhXCIsIHtcbiAgICBjbGFzc05hbWU6IFwic2l0ZVwiLFxuICAgIGhyZWY6IGJhc2VVcmxcbiAgfSwgYmFzZVVybC5yZXBsYWNlKC9eaHR0cHM/OlxcL1xcLy8sIFwiXCIpKSkpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNhbGxiYWNrO1xuXG52YXIgX2NhbGxiYWNrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbGliL29hdXRoL2NhbGxiYWNrXCIpKTtcblxudmFyIF9jYWxsYmFja0hhbmRsZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9saWIvY2FsbGJhY2staGFuZGxlclwiKSk7XG5cbnZhciBjb29raWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbGliL2Nvb2tpZVwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vbGliL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5hc3luYyBmdW5jdGlvbiBjYWxsYmFjayhyZXEsIHJlcykge1xuICB2YXIgX3JlcSRjb29raWVzJGNvb2tpZXMkLCBfcmVxJGNvb2tpZXM7XG5cbiAgY29uc3Qge1xuICAgIHByb3ZpZGVyLFxuICAgIGFkYXB0ZXIsXG4gICAgYmFzZVVybCxcbiAgICBiYXNlUGF0aCxcbiAgICBjb29raWVzLFxuICAgIGNhbGxiYWNrVXJsLFxuICAgIHBhZ2VzLFxuICAgIGp3dCxcbiAgICBldmVudHMsXG4gICAgY2FsbGJhY2tzLFxuICAgIHNlc3Npb246IHtcbiAgICAgIGp3dDogdXNlSnd0U2Vzc2lvbixcbiAgICAgIG1heEFnZTogc2Vzc2lvbk1heEFnZVxuICAgIH0sXG4gICAgbG9nZ2VyXG4gIH0gPSByZXEub3B0aW9ucztcbiAgY29uc3Qgc2Vzc2lvblRva2VuID0gKF9yZXEkY29va2llcyRjb29raWVzJCA9IChfcmVxJGNvb2tpZXMgPSByZXEuY29va2llcykgPT09IG51bGwgfHwgX3JlcSRjb29raWVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcmVxJGNvb2tpZXNbY29va2llcy5zZXNzaW9uVG9rZW4ubmFtZV0pICE9PSBudWxsICYmIF9yZXEkY29va2llcyRjb29raWVzJCAhPT0gdm9pZCAwID8gX3JlcSRjb29raWVzJGNvb2tpZXMkIDogbnVsbDtcblxuICBpZiAocHJvdmlkZXIudHlwZSA9PT0gXCJvYXV0aFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcHJvZmlsZSxcbiAgICAgICAgYWNjb3VudCxcbiAgICAgICAgT0F1dGhQcm9maWxlXG4gICAgICB9ID0gYXdhaXQgKDAsIF9jYWxsYmFjay5kZWZhdWx0KShyZXEsIHJlcyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBfZXZlbnRzJHNpZ25JbjtcblxuICAgICAgICBsb2dnZXIuZGVidWcoXCJPQVVUSF9DQUxMQkFDS19SRVNQT05TRVwiLCB7XG4gICAgICAgICAgcHJvZmlsZSxcbiAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgIE9BdXRoUHJvZmlsZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXByb2ZpbGUpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vc2lnbmluYCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXNlck9yUHJvZmlsZSA9IHByb2ZpbGU7XG5cbiAgICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBnZXRVc2VyQnlBY2NvdW50XG4gICAgICAgICAgfSA9IGFkYXB0ZXI7XG4gICAgICAgICAgY29uc3QgdXNlckJ5QWNjb3VudCA9IGF3YWl0IGdldFVzZXJCeUFjY291bnQoe1xuICAgICAgICAgICAgcHJvdmlkZXJBY2NvdW50SWQ6IGFjY291bnQucHJvdmlkZXJBY2NvdW50SWQsXG4gICAgICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIuaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodXNlckJ5QWNjb3VudCkgdXNlck9yUHJvZmlsZSA9IHVzZXJCeUFjY291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGlzQWxsb3dlZCA9IGF3YWl0IGNhbGxiYWNrcy5zaWduSW4oe1xuICAgICAgICAgICAgdXNlcjogdXNlck9yUHJvZmlsZSxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBwcm9maWxlOiBPQXV0aFByb2ZpbGVcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghaXNBbGxvd2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9QWNjZXNzRGVuaWVkYCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXNBbGxvd2VkID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGlzQWxsb3dlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj9lcnJvcj0ke2VuY29kZVVSSUNvbXBvbmVudChlcnJvci5tZXNzYWdlKX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB1c2VyLFxuICAgICAgICAgIHNlc3Npb24sXG4gICAgICAgICAgaXNOZXdVc2VyXG4gICAgICAgIH0gPSBhd2FpdCAoMCwgX2NhbGxiYWNrSGFuZGxlci5kZWZhdWx0KShzZXNzaW9uVG9rZW4sIHByb2ZpbGUsIGFjY291bnQsIHJlcS5vcHRpb25zKTtcblxuICAgICAgICBpZiAodXNlSnd0U2Vzc2lvbikge1xuICAgICAgICAgIHZhciBfdXNlciRpZDtcblxuICAgICAgICAgIGNvbnN0IGRlZmF1bHRUb2tlbiA9IHtcbiAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgcGljdHVyZTogdXNlci5pbWFnZSxcbiAgICAgICAgICAgIHN1YjogKF91c2VyJGlkID0gdXNlci5pZCkgPT09IG51bGwgfHwgX3VzZXIkaWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF91c2VyJGlkLnRvU3RyaW5nKClcbiAgICAgICAgICB9O1xuICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgY2FsbGJhY2tzLmp3dCh7XG4gICAgICAgICAgICB0b2tlbjogZGVmYXVsdFRva2VuLFxuICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBwcm9maWxlOiBPQXV0aFByb2ZpbGUsXG4gICAgICAgICAgICBpc05ld1VzZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBuZXdFbmNvZGVkSnd0ID0gYXdhaXQgand0LmVuY29kZSh7IC4uLmp3dCxcbiAgICAgICAgICAgIHRva2VuXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgY29va2llRXhwaXJlcyA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgY29va2llRXhwaXJlcy5zZXRUaW1lKGNvb2tpZUV4cGlyZXMuZ2V0VGltZSgpICsgc2Vzc2lvbk1heEFnZSAqIDEwMDApO1xuICAgICAgICAgIGNvb2tpZS5zZXQocmVzLCBjb29raWVzLnNlc3Npb25Ub2tlbi5uYW1lLCBuZXdFbmNvZGVkSnd0LCB7XG4gICAgICAgICAgICBleHBpcmVzOiBjb29raWVFeHBpcmVzLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAuLi5jb29raWVzLnNlc3Npb25Ub2tlbi5vcHRpb25zXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29va2llLnNldChyZXMsIGNvb2tpZXMuc2Vzc2lvblRva2VuLm5hbWUsIHNlc3Npb24uc2Vzc2lvblRva2VuLCB7XG4gICAgICAgICAgICBleHBpcmVzOiBzZXNzaW9uLmV4cGlyZXMsXG4gICAgICAgICAgICAuLi5jb29raWVzLnNlc3Npb25Ub2tlbi5vcHRpb25zXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCAoKF9ldmVudHMkc2lnbkluID0gZXZlbnRzLnNpZ25JbikgPT09IG51bGwgfHwgX2V2ZW50cyRzaWduSW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudHMkc2lnbkluLmNhbGwoZXZlbnRzLCB7XG4gICAgICAgICAgdXNlcixcbiAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgIHByb2ZpbGUsXG4gICAgICAgICAgaXNOZXdVc2VyXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoaXNOZXdVc2VyICYmIHBhZ2VzLm5ld1VzZXIpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke3BhZ2VzLm5ld1VzZXJ9JHtwYWdlcy5uZXdVc2VyLmluY2x1ZGVzKFwiP1wiKSA/IFwiJlwiIDogXCI/XCJ9Y2FsbGJhY2tVcmw9JHtlbmNvZGVVUklDb21wb25lbnQoY2FsbGJhY2tVcmwpfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChjYWxsYmFja1VybCB8fCBiYXNlVXJsKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5uYW1lID09PSBcIkFjY291bnROb3RMaW5rZWRFcnJvclwiKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPU9BdXRoQWNjb3VudE5vdExpbmtlZGApO1xuICAgICAgICB9IGVsc2UgaWYgKGVycm9yLm5hbWUgPT09IFwiQ3JlYXRlVXNlckVycm9yXCIpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9T0F1dGhDcmVhdGVBY2NvdW50YCk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2dnZXIuZXJyb3IoXCJPQVVUSF9DQUxMQkFDS19IQU5ETEVSX0VSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPUNhbGxiYWNrYCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5uYW1lID09PSBcIk9BdXRoQ2FsbGJhY2tFcnJvclwiKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkNBTExCQUNLX09BVVRIX0VSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPU9BdXRoQ2FsbGJhY2tgKTtcbiAgICAgIH1cblxuICAgICAgbG9nZ2VyLmVycm9yKFwiT0FVVEhfQ0FMTEJBQ0tfRVJST1JcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPUNhbGxiYWNrYCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb3ZpZGVyLnR5cGUgPT09IFwiZW1haWxcIikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgX3JlZiwgX2V2ZW50cyRzaWduSW4yO1xuXG4gICAgICBpZiAoIWFkYXB0ZXIpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKFwiRU1BSUxfUkVRVUlSRVNfQURBUFRFUl9FUlJPUlwiLCBuZXcgRXJyb3IoXCJFLW1haWwgbG9naW4gcmVxdWlyZXMgYW4gYWRhcHRlciBidXQgaXQgd2FzIHVuZGVmaW5lZFwiKSk7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj9lcnJvcj1Db25maWd1cmF0aW9uYCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdXNlVmVyaWZpY2F0aW9uVG9rZW4sXG4gICAgICAgIGdldFVzZXJCeUVtYWlsXG4gICAgICB9ID0gYWRhcHRlcjtcbiAgICAgIGNvbnN0IHRva2VuID0gcmVxLnF1ZXJ5LnRva2VuO1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IHJlcS5xdWVyeS5lbWFpbDtcbiAgICAgIGNvbnN0IGludml0ZSA9IGF3YWl0IHVzZVZlcmlmaWNhdGlvblRva2VuKHtcbiAgICAgICAgaWRlbnRpZmllcixcbiAgICAgICAgdG9rZW46ICgwLCBfdXRpbHMuaGFzaFRva2VuKSh0b2tlbiwgcmVxLm9wdGlvbnMpXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGludmFsaWRJbnZpdGUgPSAhaW52aXRlIHx8IGludml0ZS5leHBpcmVzLnZhbHVlT2YoKSA8IERhdGUubm93KCk7XG5cbiAgICAgIGlmIChpbnZhbGlkSW52aXRlKSB7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj9lcnJvcj1WZXJpZmljYXRpb25gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvZmlsZSA9IChfcmVmID0gaWRlbnRpZmllciA/IGF3YWl0IGdldFVzZXJCeUVtYWlsKGlkZW50aWZpZXIpIDogbnVsbCkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IHtcbiAgICAgICAgZW1haWw6IGlkZW50aWZpZXJcbiAgICAgIH07XG4gICAgICBjb25zdCBhY2NvdW50ID0ge1xuICAgICAgICBwcm92aWRlckFjY291bnRJZDogcHJvZmlsZS5lbWFpbCxcbiAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIuaWRcbiAgICAgIH07XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNpZ25JbkNhbGxiYWNrUmVzcG9uc2UgPSBhd2FpdCBjYWxsYmFja3Muc2lnbkluKHtcbiAgICAgICAgICB1c2VyOiBwcm9maWxlLFxuICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICAgIGVtYWlsOiBpZGVudGlmaWVyXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXNpZ25JbkNhbGxiYWNrUmVzcG9uc2UpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9QWNjZXNzRGVuaWVkYCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNpZ25JbkNhbGxiYWNrUmVzcG9uc2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KHNpZ25JbkNhbGxiYWNrUmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9JHtlbmNvZGVVUklDb21wb25lbnQoZXJyb3IubWVzc2FnZSl9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdXNlcixcbiAgICAgICAgc2Vzc2lvbixcbiAgICAgICAgaXNOZXdVc2VyXG4gICAgICB9ID0gYXdhaXQgKDAsIF9jYWxsYmFja0hhbmRsZXIuZGVmYXVsdCkoc2Vzc2lvblRva2VuLCBwcm9maWxlLCBhY2NvdW50LCByZXEub3B0aW9ucyk7XG5cbiAgICAgIGlmICh1c2VKd3RTZXNzaW9uKSB7XG4gICAgICAgIHZhciBfdXNlciRpZDI7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdFRva2VuID0ge1xuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBwaWN0dXJlOiB1c2VyLmltYWdlLFxuICAgICAgICAgIHN1YjogKF91c2VyJGlkMiA9IHVzZXIuaWQpID09PSBudWxsIHx8IF91c2VyJGlkMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3VzZXIkaWQyLnRvU3RyaW5nKClcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBjYWxsYmFja3Muand0KHtcbiAgICAgICAgICB0b2tlbjogZGVmYXVsdFRva2VuLFxuICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICBpc05ld1VzZXJcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5ld0VuY29kZWRKd3QgPSBhd2FpdCBqd3QuZW5jb2RlKHsgLi4uand0LFxuICAgICAgICAgIHRva2VuXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjb29raWVFeHBpcmVzID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29va2llRXhwaXJlcy5zZXRUaW1lKGNvb2tpZUV4cGlyZXMuZ2V0VGltZSgpICsgc2Vzc2lvbk1heEFnZSAqIDEwMDApO1xuICAgICAgICBjb29raWUuc2V0KHJlcywgY29va2llcy5zZXNzaW9uVG9rZW4ubmFtZSwgbmV3RW5jb2RlZEp3dCwge1xuICAgICAgICAgIGV4cGlyZXM6IGNvb2tpZUV4cGlyZXMudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAuLi5jb29raWVzLnNlc3Npb25Ub2tlbi5vcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29va2llLnNldChyZXMsIGNvb2tpZXMuc2Vzc2lvblRva2VuLm5hbWUsIHNlc3Npb24uc2Vzc2lvblRva2VuLCB7XG4gICAgICAgICAgZXhwaXJlczogc2Vzc2lvbi5leHBpcmVzLFxuICAgICAgICAgIC4uLmNvb2tpZXMuc2Vzc2lvblRva2VuLm9wdGlvbnNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0ICgoX2V2ZW50cyRzaWduSW4yID0gZXZlbnRzLnNpZ25JbikgPT09IG51bGwgfHwgX2V2ZW50cyRzaWduSW4yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnRzJHNpZ25JbjIuY2FsbChldmVudHMsIHtcbiAgICAgICAgdXNlcixcbiAgICAgICAgYWNjb3VudCxcbiAgICAgICAgaXNOZXdVc2VyXG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChpc05ld1VzZXIgJiYgcGFnZXMubmV3VXNlcikge1xuICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke3BhZ2VzLm5ld1VzZXJ9JHtwYWdlcy5uZXdVc2VyLmluY2x1ZGVzKFwiP1wiKSA/IFwiJlwiIDogXCI/XCJ9Y2FsbGJhY2tVcmw9JHtlbmNvZGVVUklDb21wb25lbnQoY2FsbGJhY2tVcmwpfWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGNhbGxiYWNrVXJsIHx8IGJhc2VVcmwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IubmFtZSA9PT0gXCJDcmVhdGVVc2VyRXJyb3JcIikge1xuICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9RW1haWxDcmVhdGVBY2NvdW50YCk7XG4gICAgICB9XG5cbiAgICAgIGxvZ2dlci5lcnJvcihcIkNBTExCQUNLX0VNQUlMX0VSUk9SXCIsIGVycm9yKTtcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj9lcnJvcj1DYWxsYmFja2ApO1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm92aWRlci50eXBlID09PSBcImNyZWRlbnRpYWxzXCIgJiYgcmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB2YXIgX3VzZXIkaWQzLCBfZXZlbnRzJHNpZ25JbjM7XG5cbiAgICBpZiAoIXVzZUp3dFNlc3Npb24pIHtcbiAgICAgIGxvZ2dlci5lcnJvcihcIkNBTExCQUNLX0NSRURFTlRJQUxTX0pXVF9FUlJPUlwiLCBuZXcgRXJyb3IoXCJTaWduaW4gaW4gd2l0aCBjcmVkZW50aWFscyBpcyBvbmx5IHN1cHBvcnRlZCBpZiBKU09OIFdlYiBUb2tlbnMgYXJlIGVuYWJsZWRcIikpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPUNvbmZpZ3VyYXRpb25gKTtcbiAgICB9XG5cbiAgICBpZiAoIXByb3ZpZGVyLmF1dGhvcml6ZSkge1xuICAgICAgbG9nZ2VyLmVycm9yKFwiQ0FMTEJBQ0tfQ1JFREVOVElBTFNfSEFORExFUl9FUlJPUlwiLCBuZXcgRXJyb3IoXCJNdXN0IGRlZmluZSBhbiBhdXRob3JpemUoKSBoYW5kbGVyIHRvIHVzZSBjcmVkZW50aWFscyBhdXRoZW50aWNhdGlvbiBwcm92aWRlclwiKSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9Q29uZmlndXJhdGlvbmApO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gcmVxLmJvZHk7XG4gICAgbGV0IHVzZXI7XG5cbiAgICB0cnkge1xuICAgICAgdXNlciA9IGF3YWl0IHByb3ZpZGVyLmF1dGhvcml6ZShjcmVkZW50aWFscywgeyAuLi5yZXEsXG4gICAgICAgIG9wdGlvbnM6IHt9LFxuICAgICAgICBjb29raWVzOiB7fVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/JHtuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICBlcnJvcjogXCJDcmVkZW50aWFsc1NpZ25pblwiLFxuICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlci5pZFxuICAgICAgICB9KX1gKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVycm9yLm1lc3NhZ2UpfWApO1xuICAgIH1cblxuICAgIGNvbnN0IGFjY291bnQgPSB7XG4gICAgICBwcm92aWRlckFjY291bnRJZDogdXNlci5pZCxcbiAgICAgIHR5cGU6IFwiY3JlZGVudGlhbHNcIixcbiAgICAgIHByb3ZpZGVyOiBwcm92aWRlci5pZFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgaXNBbGxvd2VkID0gYXdhaXQgY2FsbGJhY2tzLnNpZ25Jbih7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIGFjY291bnQsXG4gICAgICAgIGNyZWRlbnRpYWxzXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFpc0FsbG93ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPUFjY2Vzc0RlbmllZGApO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXNBbGxvd2VkID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoaXNBbGxvd2VkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVycm9yLm1lc3NhZ2UpfWApO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmF1bHRUb2tlbiA9IHtcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgcGljdHVyZTogdXNlci5pbWFnZSxcbiAgICAgIHN1YjogKF91c2VyJGlkMyA9IHVzZXIuaWQpID09PSBudWxsIHx8IF91c2VyJGlkMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3VzZXIkaWQzLnRvU3RyaW5nKClcbiAgICB9O1xuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgY2FsbGJhY2tzLmp3dCh7XG4gICAgICB0b2tlbjogZGVmYXVsdFRva2VuLFxuICAgICAgdXNlcixcbiAgICAgIGFjY291bnQsXG4gICAgICBpc05ld1VzZXI6IGZhbHNlXG4gICAgfSk7XG4gICAgY29uc3QgbmV3RW5jb2RlZEp3dCA9IGF3YWl0IGp3dC5lbmNvZGUoeyAuLi5qd3QsXG4gICAgICB0b2tlblxuICAgIH0pO1xuICAgIGNvbnN0IGNvb2tpZUV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuICAgIGNvb2tpZUV4cGlyZXMuc2V0VGltZShjb29raWVFeHBpcmVzLmdldFRpbWUoKSArIHNlc3Npb25NYXhBZ2UgKiAxMDAwKTtcbiAgICBjb29raWUuc2V0KHJlcywgY29va2llcy5zZXNzaW9uVG9rZW4ubmFtZSwgbmV3RW5jb2RlZEp3dCwge1xuICAgICAgZXhwaXJlczogY29va2llRXhwaXJlcy50b0lTT1N0cmluZygpLFxuICAgICAgLi4uY29va2llcy5zZXNzaW9uVG9rZW4ub3B0aW9uc1xuICAgIH0pO1xuICAgIGF3YWl0ICgoX2V2ZW50cyRzaWduSW4zID0gZXZlbnRzLnNpZ25JbikgPT09IG51bGwgfHwgX2V2ZW50cyRzaWduSW4zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnRzJHNpZ25JbjMuY2FsbChldmVudHMsIHtcbiAgICAgIHVzZXIsXG4gICAgICBhY2NvdW50XG4gICAgfSkpO1xuICAgIHJldHVybiByZXMucmVkaXJlY3QoY2FsbGJhY2tVcmwgfHwgYmFzZVVybCk7XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmVuZChgRXJyb3I6IENhbGxiYWNrIGZvciBwcm92aWRlciB0eXBlICR7cHJvdmlkZXIudHlwZX0gbm90IHN1cHBvcnRlZGApO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNhbGxiYWNrXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9jYWxsYmFjay5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNpZ25pblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfc2lnbmluLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2lnbm91dFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfc2lnbm91dC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNlc3Npb25cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3Nlc3Npb24uZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwcm92aWRlcnNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3Byb3ZpZGVycy5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9jYWxsYmFjayA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY2FsbGJhY2tcIikpO1xuXG52YXIgX3NpZ25pbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2lnbmluXCIpKTtcblxudmFyIF9zaWdub3V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaWdub3V0XCIpKTtcblxudmFyIF9zZXNzaW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zZXNzaW9uXCIpKTtcblxudmFyIF9wcm92aWRlcnMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Byb3ZpZGVyc1wiKSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwcm92aWRlcnM7XG5cbmZ1bmN0aW9uIHByb3ZpZGVycyhyZXEsIHJlcykge1xuICBjb25zdCB7XG4gICAgcHJvdmlkZXJzXG4gIH0gPSByZXEub3B0aW9ucztcbiAgY29uc3QgcmVzdWx0ID0gcHJvdmlkZXJzLnJlZHVjZSgoYWNjLCB7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICB0eXBlLFxuICAgIHNpZ25pblVybCxcbiAgICBjYWxsYmFja1VybFxuICB9KSA9PiB7XG4gICAgYWNjW2lkXSA9IHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIHR5cGUsXG4gICAgICBzaWduaW5VcmwsXG4gICAgICBjYWxsYmFja1VybFxuICAgIH07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXMuanNvbihyZXN1bHQpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2Vzc2lvbjtcblxudmFyIGNvb2tpZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9saWIvY29va2llXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9saWIvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiAobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmFzeW5jIGZ1bmN0aW9uIHNlc3Npb24ocmVxLCByZXMpIHtcbiAgY29uc3Qge1xuICAgIGNvb2tpZXMsXG4gICAgYWRhcHRlcixcbiAgICBqd3QsXG4gICAgZXZlbnRzLFxuICAgIGNhbGxiYWNrcyxcbiAgICBsb2dnZXJcbiAgfSA9IHJlcS5vcHRpb25zO1xuICBjb25zdCB1c2VKd3RTZXNzaW9uID0gcmVxLm9wdGlvbnMuc2Vzc2lvbi5qd3Q7XG4gIGNvbnN0IHNlc3Npb25NYXhBZ2UgPSByZXEub3B0aW9ucy5zZXNzaW9uLm1heEFnZTtcbiAgY29uc3Qgc2Vzc2lvblRva2VuID0gcmVxLmNvb2tpZXNbY29va2llcy5zZXNzaW9uVG9rZW4ubmFtZV07XG5cbiAgaWYgKCFzZXNzaW9uVG9rZW4pIHtcbiAgICByZXR1cm4gcmVzLmpzb24oe30pO1xuICB9XG5cbiAgbGV0IHJlc3BvbnNlID0ge307XG5cbiAgaWYgKHVzZUp3dFNlc3Npb24pIHtcbiAgICB0cnkge1xuICAgICAgdmFyIF9ldmVudHMkc2Vzc2lvbjtcblxuICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gYXdhaXQgand0LmRlY29kZSh7IC4uLmp3dCxcbiAgICAgICAgdG9rZW46IHNlc3Npb25Ub2tlblxuICAgICAgfSk7XG4gICAgICBjb25zdCBuZXdFeHBpcmVzID0gKDAsIF91dGlscy5mcm9tRGF0ZSkoc2Vzc2lvbk1heEFnZSk7XG4gICAgICBjb25zdCBkZWZhdWx0U2Vzc2lvbiA9IHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIG5hbWU6IGRlY29kZWRUb2tlbiA9PT0gbnVsbCB8fCBkZWNvZGVkVG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlY29kZWRUb2tlbi5uYW1lLFxuICAgICAgICAgIGVtYWlsOiBkZWNvZGVkVG9rZW4gPT09IG51bGwgfHwgZGVjb2RlZFRva2VuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWNvZGVkVG9rZW4uZW1haWwsXG4gICAgICAgICAgaW1hZ2U6IGRlY29kZWRUb2tlbiA9PT0gbnVsbCB8fCBkZWNvZGVkVG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlY29kZWRUb2tlbi5waWN0dXJlXG4gICAgICAgIH0sXG4gICAgICAgIGV4cGlyZXM6IG5ld0V4cGlyZXMudG9JU09TdHJpbmcoKVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgY2FsbGJhY2tzLmp3dCh7XG4gICAgICAgIHRva2VuOiBkZWNvZGVkVG9rZW5cbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGNhbGxiYWNrcy5zZXNzaW9uKHtcbiAgICAgICAgc2Vzc2lvbjogZGVmYXVsdFNlc3Npb24sXG4gICAgICAgIHRva2VuXG4gICAgICB9KTtcbiAgICAgIHJlc3BvbnNlID0gc2Vzc2lvbjtcbiAgICAgIGNvbnN0IG5ld1Rva2VuID0gYXdhaXQgand0LmVuY29kZSh7IC4uLmp3dCxcbiAgICAgICAgdG9rZW5cbiAgICAgIH0pO1xuICAgICAgY29va2llLnNldChyZXMsIGNvb2tpZXMuc2Vzc2lvblRva2VuLm5hbWUsIG5ld1Rva2VuLCB7XG4gICAgICAgIGV4cGlyZXM6IG5ld0V4cGlyZXMsXG4gICAgICAgIC4uLmNvb2tpZXMuc2Vzc2lvblRva2VuLm9wdGlvbnNcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgKChfZXZlbnRzJHNlc3Npb24gPSBldmVudHMuc2Vzc2lvbikgPT09IG51bGwgfHwgX2V2ZW50cyRzZXNzaW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnRzJHNlc3Npb24uY2FsbChldmVudHMsIHtcbiAgICAgICAgc2Vzc2lvbixcbiAgICAgICAgdG9rZW5cbiAgICAgIH0pKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nZ2VyLmVycm9yKFwiSldUX1NFU1NJT05fRVJST1JcIiwgZXJyb3IpO1xuICAgICAgY29va2llLnNldChyZXMsIGNvb2tpZXMuc2Vzc2lvblRva2VuLm5hbWUsIFwiXCIsIHsgLi4uY29va2llcy5zZXNzaW9uVG9rZW4ub3B0aW9ucyxcbiAgICAgICAgbWF4QWdlOiAwXG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZ2V0U2Vzc2lvbkFuZFVzZXIsXG4gICAgICAgIGRlbGV0ZVNlc3Npb24sXG4gICAgICAgIHVwZGF0ZVNlc3Npb25cbiAgICAgIH0gPSBhZGFwdGVyO1xuICAgICAgbGV0IHVzZXJBbmRTZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbkFuZFVzZXIoc2Vzc2lvblRva2VuKTtcblxuICAgICAgaWYgKHVzZXJBbmRTZXNzaW9uICYmIHVzZXJBbmRTZXNzaW9uLnNlc3Npb24uZXhwaXJlcy52YWx1ZU9mKCkgPCBEYXRlLm5vdygpKSB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZVNlc3Npb24oc2Vzc2lvblRva2VuKTtcbiAgICAgICAgdXNlckFuZFNlc3Npb24gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodXNlckFuZFNlc3Npb24pIHtcbiAgICAgICAgdmFyIF9ldmVudHMkc2Vzc2lvbjI7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgc2Vzc2lvblxuICAgICAgICB9ID0gdXNlckFuZFNlc3Npb247XG4gICAgICAgIGNvbnN0IHNlc3Npb25VcGRhdGVBZ2UgPSByZXEub3B0aW9ucy5zZXNzaW9uLnVwZGF0ZUFnZTtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklzRHVlVG9CZVVwZGF0ZWREYXRlID0gc2Vzc2lvbi5leHBpcmVzLnZhbHVlT2YoKSAtIHNlc3Npb25NYXhBZ2UgKiAxMDAwICsgc2Vzc2lvblVwZGF0ZUFnZSAqIDEwMDA7XG4gICAgICAgIGNvbnN0IG5ld0V4cGlyZXMgPSAoMCwgX3V0aWxzLmZyb21EYXRlKShzZXNzaW9uTWF4QWdlKTtcblxuICAgICAgICBpZiAoc2Vzc2lvbklzRHVlVG9CZVVwZGF0ZWREYXRlIDw9IERhdGUubm93KCkpIHtcbiAgICAgICAgICBhd2FpdCB1cGRhdGVTZXNzaW9uKHtcbiAgICAgICAgICAgIHNlc3Npb25Ub2tlbixcbiAgICAgICAgICAgIGV4cGlyZXM6IG5ld0V4cGlyZXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlc3Npb25QYXlsb2FkID0gYXdhaXQgY2FsbGJhY2tzLnNlc3Npb24oe1xuICAgICAgICAgIHNlc3Npb246IHtcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgaW1hZ2U6IHVzZXIuaW1hZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHBpcmVzOiBzZXNzaW9uLmV4cGlyZXMudG9JU09TdHJpbmcoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXNlclxuICAgICAgICB9KTtcbiAgICAgICAgcmVzcG9uc2UgPSBzZXNzaW9uUGF5bG9hZDtcbiAgICAgICAgY29va2llLnNldChyZXMsIGNvb2tpZXMuc2Vzc2lvblRva2VuLm5hbWUsIHNlc3Npb25Ub2tlbiwge1xuICAgICAgICAgIGV4cGlyZXM6IG5ld0V4cGlyZXMsXG4gICAgICAgICAgLi4uY29va2llcy5zZXNzaW9uVG9rZW4ub3B0aW9uc1xuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgKChfZXZlbnRzJHNlc3Npb24yID0gZXZlbnRzLnNlc3Npb24pID09PSBudWxsIHx8IF9ldmVudHMkc2Vzc2lvbjIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudHMkc2Vzc2lvbjIuY2FsbChldmVudHMsIHtcbiAgICAgICAgICBzZXNzaW9uOiBzZXNzaW9uUGF5bG9hZFxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2UgaWYgKHNlc3Npb25Ub2tlbikge1xuICAgICAgICBjb29raWUuc2V0KHJlcywgY29va2llcy5zZXNzaW9uVG9rZW4ubmFtZSwgXCJcIiwgeyAuLi5jb29raWVzLnNlc3Npb25Ub2tlbi5vcHRpb25zLFxuICAgICAgICAgIG1heEFnZTogMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nZ2VyLmVycm9yKFwiU0VTU0lPTl9FUlJPUlwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmVzLmpzb24ocmVzcG9uc2UpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNpZ25pbjtcblxudmFyIF9hdXRob3JpemF0aW9uVXJsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbGliL29hdXRoL2F1dGhvcml6YXRpb24tdXJsXCIpKTtcblxudmFyIF9zaWduaW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9saWIvZW1haWwvc2lnbmluXCIpKTtcblxuYXN5bmMgZnVuY3Rpb24gc2lnbmluKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHtcbiAgICBiYXNlVXJsLFxuICAgIGJhc2VQYXRoLFxuICAgIGFkYXB0ZXIsXG4gICAgY2FsbGJhY2tzLFxuICAgIGxvZ2dlclxuICB9ID0gcmVxLm9wdGlvbnM7XG4gIGNvbnN0IHByb3ZpZGVyID0gcmVxLm9wdGlvbnMucHJvdmlkZXI7XG5cbiAgaWYgKCFwcm92aWRlci50eXBlKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5lbmQoYEVycm9yOiBUeXBlIG5vdCBzcGVjaWZpZWQgZm9yICR7cHJvdmlkZXIubmFtZX1gKTtcbiAgfVxuXG4gIGlmIChwcm92aWRlci50eXBlID09PSBcIm9hdXRoXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYXV0aG9yaXphdGlvblVybCA9IGF3YWl0ICgwLCBfYXV0aG9yaXphdGlvblVybC5kZWZhdWx0KShyZXEsIHJlcyk7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGF1dGhvcml6YXRpb25VcmwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoXCJTSUdOSU5fT0FVVEhfRVJST1JcIiwge1xuICAgICAgICBlcnJvcixcbiAgICAgICAgcHJvdmlkZXJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPU9BdXRoU2lnbmluYCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb3ZpZGVyLnR5cGUgPT09IFwiZW1haWxcIikge1xuICAgIHZhciBfcmVxJGJvZHkkZW1haWwkdG9Mb3csIF9yZXEkYm9keSRlbWFpbCwgX3JlZjtcblxuICAgIGlmICghYWRhcHRlcikge1xuICAgICAgbG9nZ2VyLmVycm9yKFwiRU1BSUxfUkVRVUlSRVNfQURBUFRFUl9FUlJPUlwiLCBuZXcgRXJyb3IoXCJFLW1haWwgbG9naW4gcmVxdWlyZXMgYW4gYWRhcHRlciBidXQgaXQgd2FzIHVuZGVmaW5lZFwiKSk7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9Q29uZmlndXJhdGlvbmApO1xuICAgIH1cblxuICAgIGNvbnN0IGVtYWlsID0gKF9yZXEkYm9keSRlbWFpbCR0b0xvdyA9IChfcmVxJGJvZHkkZW1haWwgPSByZXEuYm9keS5lbWFpbCkgPT09IG51bGwgfHwgX3JlcSRib2R5JGVtYWlsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcmVxJGJvZHkkZW1haWwudG9Mb3dlckNhc2UoKSkgIT09IG51bGwgJiYgX3JlcSRib2R5JGVtYWlsJHRvTG93ICE9PSB2b2lkIDAgPyBfcmVxJGJvZHkkZW1haWwkdG9Mb3cgOiBudWxsO1xuICAgIGNvbnN0IHtcbiAgICAgIGdldFVzZXJCeUVtYWlsXG4gICAgfSA9IGFkYXB0ZXI7XG4gICAgY29uc3QgdXNlciA9IChfcmVmID0gZW1haWwgPyBhd2FpdCBnZXRVc2VyQnlFbWFpbChlbWFpbCkgOiBudWxsKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDoge1xuICAgICAgZW1haWxcbiAgICB9O1xuICAgIGNvbnN0IGFjY291bnQgPSB7XG4gICAgICBwcm92aWRlckFjY291bnRJZDogdXNlci5lbWFpbCxcbiAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgIHByb3ZpZGVyOiBwcm92aWRlci5pZFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2lnbkluQ2FsbGJhY2tSZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrcy5zaWduSW4oe1xuICAgICAgICB1c2VyLFxuICAgICAgICBhY2NvdW50LFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgIHZlcmlmaWNhdGlvblJlcXVlc3Q6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghc2lnbkluQ2FsbGJhY2tSZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9QWNjZXNzRGVuaWVkYCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzaWduSW5DYWxsYmFja1Jlc3BvbnNlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3Qoc2lnbkluQ2FsbGJhY2tSZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj8ke25ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICBlcnJvclxuICAgICAgfSl9fWApO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCAoMCwgX3NpZ25pbi5kZWZhdWx0KShlbWFpbCwgcmVxLm9wdGlvbnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoXCJTSUdOSU5fRU1BSUxfRVJST1JcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPUVtYWlsU2lnbmluYCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICBwcm92aWRlcjogcHJvdmlkZXIuaWQsXG4gICAgICB0eXBlOiBwcm92aWRlci50eXBlXG4gICAgfSk7XG4gICAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0ke2Jhc2VQYXRofS92ZXJpZnktcmVxdWVzdD8ke3BhcmFtc31gO1xuICAgIHJldHVybiByZXMucmVkaXJlY3QodXJsKTtcbiAgfVxuXG4gIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9zaWduaW5gKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNpZ25vdXQ7XG5cbnZhciBjb29raWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbGliL2Nvb2tpZVwiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiAobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmFzeW5jIGZ1bmN0aW9uIHNpZ25vdXQocmVxLCByZXMpIHtcbiAgY29uc3Qge1xuICAgIGFkYXB0ZXIsXG4gICAgY29va2llcyxcbiAgICBldmVudHMsXG4gICAgand0LFxuICAgIGNhbGxiYWNrVXJsLFxuICAgIGxvZ2dlclxuICB9ID0gcmVxLm9wdGlvbnM7XG4gIGNvbnN0IHVzZUp3dFNlc3Npb24gPSByZXEub3B0aW9ucy5zZXNzaW9uLmp3dDtcbiAgY29uc3Qgc2Vzc2lvblRva2VuID0gcmVxLmNvb2tpZXNbY29va2llcy5zZXNzaW9uVG9rZW4ubmFtZV07XG5cbiAgaWYgKHVzZUp3dFNlc3Npb24pIHtcbiAgICB0cnkge1xuICAgICAgdmFyIF9ldmVudHMkc2lnbk91dDtcblxuICAgICAgY29uc3QgZGVjb2RlZEp3dCA9IGF3YWl0IGp3dC5kZWNvZGUoeyAuLi5qd3QsXG4gICAgICAgIHRva2VuOiBzZXNzaW9uVG9rZW5cbiAgICAgIH0pO1xuICAgICAgYXdhaXQgKChfZXZlbnRzJHNpZ25PdXQgPSBldmVudHMuc2lnbk91dCkgPT09IG51bGwgfHwgX2V2ZW50cyRzaWduT3V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnRzJHNpZ25PdXQuY2FsbChldmVudHMsIHtcbiAgICAgICAgdG9rZW46IGRlY29kZWRKd3RcbiAgICAgIH0pKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgdmFyIF9ldmVudHMkc2lnbk91dDI7XG5cbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhZGFwdGVyLmRlbGV0ZVNlc3Npb24oc2Vzc2lvblRva2VuKTtcbiAgICAgIGF3YWl0ICgoX2V2ZW50cyRzaWduT3V0MiA9IGV2ZW50cy5zaWduT3V0KSA9PT0gbnVsbCB8fCBfZXZlbnRzJHNpZ25PdXQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnRzJHNpZ25PdXQyLmNhbGwoZXZlbnRzLCB7XG4gICAgICAgIHNlc3Npb25cbiAgICAgIH0pKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nZ2VyLmVycm9yKFwiU0lHTk9VVF9FUlJPUlwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY29va2llLnNldChyZXMsIGNvb2tpZXMuc2Vzc2lvblRva2VuLm5hbWUsIFwiXCIsIHsgLi4uY29va2llcy5zZXNzaW9uVG9rZW4ub3B0aW9ucyxcbiAgICBtYXhBZ2U6IDBcbiAgfSk7XG4gIHJldHVybiByZXMucmVkaXJlY3QoY2FsbGJhY2tVcmwpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pOyIsImltcG9ydCBOZXh0QXV0aCwgeyBQcm9maWxlIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tICdAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyJztcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1Yic7XG5pbXBvcnQgQWRhcHRlcnMgZnJvbSAnbmV4dC1hdXRoL2FkYXB0ZXJzJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4uLy4uLy4uL3NlcnZlci9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgfSksXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgXSxcbiAgand0OiB7XG4gICAgc2lnbmluZ0tleTogcHJvY2Vzcy5lbnYuSldUX1NJR05JTkdfUFJJVkFURV9LRVksXG4gIH0sXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5TRUNSRVQsXG59KTtcbiIsImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0ICogYXMgdHJwYyBmcm9tICdAdHJwYy9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBpbmZlckFzeW5jUmV0dXJuVHlwZSB9IGZyb20gJ0B0cnBjL3NlcnZlci9kaXN0L2RlY2xhcmF0aW9ucy9zcmMvcm91dGVyJztcclxuaW1wb3J0ICogYXMgdHJwY05leHQgZnJvbSAnQHRycGMvc2VydmVyL2FkYXB0ZXJzL25leHQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoe1xyXG4gIGxvZzpcclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcbiAgICAgID8gWydxdWVyeScsICdlcnJvcicsICd3YXJuJ11cclxuICAgICAgOiBbJ2Vycm9yJ10sXHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgY29udGV4dCBmb3IgYW4gaW5jb21pbmcgcmVxdWVzdFxyXG4gKiBAbGluayBodHRwczovL3RycGMuaW8vZG9jcy9jb250ZXh0XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlQ29udGV4dCA9IGFzeW5jICh7XHJcbiAgcmVxLFxyXG4gIHJlcyxcclxufTogdHJwY05leHQuQ3JlYXRlTmV4dENvbnRleHRPcHRpb25zKSA9PiB7XHJcbiAgLy8gZm9yIEFQSS1yZXNwb25zZSBjYWNoaW5nIHNlZSBodHRwczovL3RycGMuaW8vZG9jcy9jYWNoaW5nXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlcSxcclxuICAgIHJlcyxcclxuICAgIHByaXNtYSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQ29udGV4dCA9IGluZmVyQXN5bmNSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVDb250ZXh0PjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnV0b2luLWhrZGZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiam9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvcGVuaWQtY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmVhY3QtcmVuZGVyLXRvLXN0cmluZ1wiKTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJQcmlzbWFBZGFwdGVyIiwiR2l0aHViUHJvdmlkZXIiLCJwcmlzbWEiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfU0VDUkVUIiwiand0Iiwic2lnbmluZ0tleSIsIkpXVF9TSUdOSU5HX1BSSVZBVEVfS0VZIiwiYWRhcHRlciIsInNlY3JldCIsIlNFQ1JFVCIsIlByaXNtYUNsaWVudCIsImxvZyIsImNyZWF0ZUNvbnRleHQiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9