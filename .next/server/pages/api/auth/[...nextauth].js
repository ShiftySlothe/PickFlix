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

/***/ "./node_modules/next-auth/providers/google.js":
/*!****************************************************!*\
  !*** ./node_modules/next-auth/providers/google.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Google;

function Google(options) {
  return {
    id: "google",
    name: "Google",
    type: "oauth",
    wellKnown: "https://accounts.google.com/.well-known/openid-configuration",
    authorization: {
      params: {
        scope: "openid email profile"
      }
    },
    idToken: true,
    checks: ["pkce", "state"],

    profile(profile) {
      return {
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: profile.picture
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

/***/ "./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
 // PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices
// if (process.env.NODE_ENV === 'production') {

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient(); // } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

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
/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ "./node_modules/next-auth/providers/google.js");
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/prisma */ "./src/lib/prisma.ts");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  // Configure one or more authentication providers
  providers: [(0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__.default)({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }), // ...add more providers here
  (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__.default)({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET
  })],
  jwt: {
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
  },
  adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_4__.default),
  secret: process.env.SECRET,
  pages: {
    signIn: '/auth/signin' // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in

  },
  callbacks: {
    async session({
      session,
      token,
      user
    }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.id = user.id;
      return session;
    }

  }
}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvY3NzL2luZGV4LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL2luZGV4LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL2p3dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9qd3QvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvbGliL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9saWIvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvbGliL3BhcnNlLXVybC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL2xpYi9jYWxsYmFjay1oYW5kbGVyLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9saWIvY2FsbGJhY2stdXJsLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL2xpYi9jb29raWUuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL2xpYi9jc3JmLXRva2VuLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL2xpYi9kZWZhdWx0LWNhbGxiYWNrcy5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL2VtYWlsL3NpZ25pbi5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL2V4dGVuZC1yZXMuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL2xpYi9vYXV0aC9hdXRob3JpemF0aW9uLXVybC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL29hdXRoL2NhbGxiYWNrLmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9saWIvb2F1dGgvY2xpZW50LWxlZ2FjeS5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL29hdXRoL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL29hdXRoL3BrY2UtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvbGliL29hdXRoL3N0YXRlLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL2xpYi9wcm92aWRlcnMuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvcGFnZXMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9wYWdlcy9zaWduaW4uanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL3BhZ2VzL3NpZ25vdXQuanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL3BhZ2VzL3ZlcmlmeS1yZXF1ZXN0LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci9yb3V0ZXMvY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvcm91dGVzL3Byb3ZpZGVycy5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9zZXJ2ZXIvcm91dGVzL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL3JvdXRlcy9zaWduaW4uanMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL25vZGVfbW9kdWxlcy9uZXh0LWF1dGgvc2VydmVyL3JvdXRlcy9zaWdub3V0LmpzIiwid2VicGFjazovL3Byb3NwZWN0b3IvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3NlcnZlci90eXBlcy5qcyIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yLy4vc3JjL2xpYi9wcmlzbWEudHMiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJmdXRvaW4taGtkZlwiIiwid2VicGFjazovL3Byb3NwZWN0b3IvZXh0ZXJuYWwgXCJqb3NlXCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcIm9hdXRoXCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcIm9wZW5pZC1jbGllbnRcIiIsIndlYnBhY2s6Ly9wcm9zcGVjdG9yL2V4dGVybmFsIFwicHJlYWN0XCIiLCJ3ZWJwYWNrOi8vcHJvc3BlY3Rvci9leHRlcm5hbCBcInByZWFjdC1yZW5kZXItdG8tc3RyaW5nXCIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOnJvb3R7LS1ib3JkZXItd2lkdGg6MXB4Oy0tYm9yZGVyLXJhZGl1czouM3JlbTstLWNvbG9yLWVycm9yOiNjOTRiNGI7LS1jb2xvci1pbmZvOiMxNTdlZmI7LS1jb2xvci1pbmZvLXRleHQ6I2ZmZn0uX19uZXh0LWF1dGgtdGhlbWUtYXV0bywuX19uZXh0LWF1dGgtdGhlbWUtbGlnaHR7LS1jb2xvci1iYWNrZ3JvdW5kOiNmZmY7LS1jb2xvci10ZXh0OiMwMDA7LS1jb2xvci1wcmltYXJ5OiM0NDQ7LS1jb2xvci1jb250cm9sLWJvcmRlcjojYmJiOy0tY29sb3ItYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kOiNmOWY5Zjk7LS1jb2xvci1idXR0b24tYWN0aXZlLWJvcmRlcjojYWFhOy0tY29sb3Itc2VwZXJhdG9yOiNjY2N9Ll9fbmV4dC1hdXRoLXRoZW1lLWRhcmt7LS1jb2xvci1iYWNrZ3JvdW5kOiMwMDA7LS1jb2xvci10ZXh0OiNmZmY7LS1jb2xvci1wcmltYXJ5OiNjY2M7LS1jb2xvci1jb250cm9sLWJvcmRlcjojNTU1Oy0tY29sb3ItYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kOiMwNjA2MDY7LS1jb2xvci1idXR0b24tYWN0aXZlLWJvcmRlcjojNjY2Oy0tY29sb3Itc2VwZXJhdG9yOiM0NDR9QG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTpkYXJrKXsuX19uZXh0LWF1dGgtdGhlbWUtYXV0b3stLWNvbG9yLWJhY2tncm91bmQ6IzAwMDstLWNvbG9yLXRleHQ6I2ZmZjstLWNvbG9yLXByaW1hcnk6I2NjYzstLWNvbG9yLWNvbnRyb2wtYm9yZGVyOiM1NTU7LS1jb2xvci1idXR0b24tYWN0aXZlLWJhY2tncm91bmQ6IzA2MDYwNjstLWNvbG9yLWJ1dHRvbi1hY3RpdmUtYm9yZGVyOiM2NjY7LS1jb2xvci1zZXBlcmF0b3I6IzQ0NH19Ym9keXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLWJhY2tncm91bmQpO2ZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sU2Vnb2UgVUksUm9ib3RvLFVidW50dSxDYW50YXJlbGwsTm90byBTYW5zLHNhbnMtc2VyaWYsQmxpbmtNYWNTeXN0ZW1Gb250LEhlbHZldGljYSxBcmlhbCxBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7bWFyZ2luOjA7cGFkZGluZzowfWgxe2ZvbnQtd2VpZ2h0OjQwMDttYXJnaW4tYm90dG9tOjEuNXJlbTtwYWRkaW5nOjAgMXJlbX1oMSxwe2NvbG9yOnZhcigtLWNvbG9yLXRleHQpfWZvcm17bWFyZ2luOjA7cGFkZGluZzowfWxhYmVse2NvbG9yOiM2NjY7ZGlzcGxheTpibG9jaztmb250LXdlaWdodDo1MDA7bWFyZ2luLWJvdHRvbTouMjVyZW07dGV4dC1hbGlnbjpsZWZ0fWlucHV0W3R5cGVde2JhY2tncm91bmQ6dmFyKC0tY29sb3ItYmFja2dyb3VuZCk7Ym9yZGVyOnZhcigtLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tY29sb3ItY29udHJvbC1ib3JkZXIpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym94LXNoYWRvdzppbnNldCAwIC4xcmVtIC4ycmVtIHJnYmEoMCwwLDAsLjIpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjp2YXIoLS1jb2xvci10ZXh0KTtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxcmVtO3BhZGRpbmc6LjVyZW0gMXJlbTt3aWR0aDoxMDAlfWlucHV0W3R5cGVdOmZvY3Vze2JveC1zaGFkb3c6bm9uZX1we2ZvbnQtc2l6ZToxLjFyZW07bGluZS1oZWlnaHQ6MnJlbTttYXJnaW46MCAwIDEuNXJlbTtwYWRkaW5nOjAgMXJlbX1hLmJ1dHRvbntsaW5lLWhlaWdodDoxcmVtO3RleHQtZGVjb3JhdGlvbjpub25lfWEuYnV0dG9uLGEuYnV0dG9uOmxpbmssYS5idXR0b246dmlzaXRlZCxidXR0b257YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtjb2xvcjp2YXIoLS1jb2xvci1wcmltYXJ5KX1hLmJ1dHRvbixidXR0b257Ym9yZGVyOnZhcigtLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tY29sb3ItY29udHJvbC1ib3JkZXIpO2JvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7Ym94LXNoYWRvdzowIC4xNXJlbSAuM3JlbSByZ2JhKDAsMCwwLC4xNSksaW5zZXQgMCAuMXJlbSAuMnJlbSB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKSxpbnNldCAwIC0uMXJlbSAuMXJlbSByZ2JhKDAsMCwwLC4wNSk7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6NTAwO21hcmdpbjowIDAgLjc1cmVtO3BhZGRpbmc6Ljc1cmVtIDFyZW07cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjphbGwgLjFzIGVhc2UtaW4tb3V0fWEuYnV0dG9uOmhvdmVyLGJ1dHRvbjpob3ZlcntjdXJzb3I6cG9pbnRlcn1hLmJ1dHRvbjphY3RpdmUsYnV0dG9uOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNvbG9yLWJ1dHRvbi1hY3RpdmUtYmFja2dyb3VuZCk7Ym9yZGVyLWNvbG9yOnZhcigtLWNvbG9yLWJ1dHRvbi1hY3RpdmUtYm9yZGVyKTtib3gtc2hhZG93OjAgLjE1cmVtIC4zcmVtIHJnYmEoMCwwLDAsLjE1KSxpbnNldCAwIC4xcmVtIC4ycmVtIHZhcigtLWNvbG9yLWJhY2tncm91bmQpLGluc2V0IDAgLS4xcmVtIC4xcmVtIHJnYmEoMCwwLDAsLjEpO2N1cnNvcjpwb2ludGVyfWEuc2l0ZXtjb2xvcjp2YXIoLS1jb2xvci1wcmltYXJ5KTtmb250LXNpemU6MXJlbTtsaW5lLWhlaWdodDoycmVtO3RleHQtZGVjb3JhdGlvbjpub25lfWEuc2l0ZTpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5wYWdle2Rpc3BsYXk6dGFibGU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7cGFkZGluZzowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCV9LnBhZ2U+ZGl2e2Rpc3BsYXk6dGFibGUtY2VsbDtwYWRkaW5nOi41cmVtO3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZXJyb3IgYS5idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXRvcDouNXJlbTtwYWRkaW5nLWxlZnQ6MnJlbTtwYWRkaW5nLXJpZ2h0OjJyZW19LmVycm9yIC5tZXNzYWdle21hcmdpbi1ib3R0b206MS41cmVtfS5zaWduaW4gYS5idXR0b24sLnNpZ25pbiBidXR0b24sLnNpZ25pbiBpbnB1dFt0eXBlPXRleHRde2Rpc3BsYXk6YmxvY2s7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0b30uc2lnbmluIGhye2JvcmRlcjowO2JvcmRlci10b3A6MXB4IHNvbGlkIHZhcigtLWNvbG9yLXNlcGVyYXRvcik7ZGlzcGxheTpibG9jazttYXJnaW46MS41ZW0gYXV0byAwO292ZXJmbG93OnZpc2libGV9LnNpZ25pbiBocjpiZWZvcmV7YmFja2dyb3VuZDp2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtjb2xvcjojODg4O2NvbnRlbnQ6XFxcIm9yXFxcIjtwYWRkaW5nOjAgLjRyZW07cG9zaXRpb246cmVsYXRpdmU7dG9wOi0uNnJlbX0uc2lnbmluIC5lcnJvcntiYWNrZ3JvdW5kOiNmNWY1ZjU7YmFja2dyb3VuZDp2YXIoLS1jb2xvci1pbmZvKTtib3JkZXItcmFkaXVzOi4zcmVtO2ZvbnQtd2VpZ2h0OjUwMH0uc2lnbmluIC5lcnJvciBwe2NvbG9yOnZhcigtLWNvbG9yLWluZm8tdGV4dCk7Zm9udC1zaXplOi45cmVtO2xpbmUtaGVpZ2h0OjEuMnJlbTtwYWRkaW5nOi41cmVtIDFyZW07dGV4dC1hbGlnbjpsZWZ0fS5zaWduaW4+ZGl2LC5zaWduaW4gZm9ybXtkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG8gLjVyZW19LnNpZ25pbj5kaXYgaW5wdXRbdHlwZV0sLnNpZ25pbiBmb3JtIGlucHV0W3R5cGVde21hcmdpbi1ib3R0b206LjVyZW19LnNpZ25pbj5kaXYgYnV0dG9uLC5zaWduaW4gZm9ybSBidXR0b257d2lkdGg6MTAwJX0uc2lnbmluPmRpdiwuc2lnbmluIGZvcm17bWF4LXdpZHRoOjMwMHB4fVwiIH0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge307XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9zZXJ2ZXIuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfc2VydmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zZXJ2ZXJcIikpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vc2VydmVyL3R5cGVzXCIpO1xuXG5PYmplY3Qua2V5cyhfdHlwZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGlmIChrZXkgaW4gZXhwb3J0cyAmJiBleHBvcnRzW2tleV0gPT09IF90eXBlc1trZXldKSByZXR1cm47XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90eXBlc1trZXldO1xuICAgIH1cbiAgfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgX2V4cG9ydE5hbWVzID0ge1xuICBlbmNvZGU6IHRydWUsXG4gIGRlY29kZTogdHJ1ZSxcbiAgZ2V0VG9rZW46IHRydWVcbn07XG5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuZXhwb3J0cy5nZXRUb2tlbiA9IGdldFRva2VuO1xuXG52YXIgX2NyeXB0byA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNyeXB0b1wiKSk7XG5cbnZhciBfam9zZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImpvc2VcIikpO1xuXG52YXIgX2xvZ2dlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xpYi9sb2dnZXJcIikpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5cbk9iamVjdC5rZXlzKF90eXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgaWYgKGtleSBpbiBleHBvcnRzICYmIGV4cG9ydHNba2V5XSA9PT0gX3R5cGVzW2tleV0pIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3R5cGVzW2tleV07XG4gICAgfVxuICB9KTtcbn0pO1xuY29uc3QgREVGQVVMVF9TSUdOQVRVUkVfQUxHT1JJVEhNID0gXCJIUzUxMlwiO1xuY29uc3QgREVGQVVMVF9FTkNSWVBUSU9OX0FMR09SSVRITSA9IFwiQTI1NkdDTVwiO1xuY29uc3QgREVGQVVMVF9FTkNSWVBUSU9OX0VOQUJMRUQgPSBmYWxzZTtcbmNvbnN0IERFRkFVTFRfTUFYX0FHRSA9IDMwICogMjQgKiA2MCAqIDYwO1xuXG5hc3luYyBmdW5jdGlvbiBlbmNvZGUoe1xuICB0b2tlbiA9IHt9LFxuICBtYXhBZ2UgPSBERUZBVUxUX01BWF9BR0UsXG4gIHNlY3JldCxcbiAgc2lnbmluZ0tleSxcbiAgc2lnbmluZ09wdGlvbnMgPSB7XG4gICAgZXhwaXJlc0luOiBgJHttYXhBZ2V9c2BcbiAgfSxcbiAgZW5jcnlwdGlvbktleSxcbiAgZW5jcnlwdGlvbk9wdGlvbnMgPSB7XG4gICAgYWxnOiBcImRpclwiLFxuICAgIGVuYzogREVGQVVMVF9FTkNSWVBUSU9OX0FMR09SSVRITSxcbiAgICB6aXA6IFwiREVGXCJcbiAgfSxcbiAgZW5jcnlwdGlvbiA9IERFRkFVTFRfRU5DUllQVElPTl9FTkFCTEVEXG59KSB7XG4gIGNvbnN0IF9zaWduaW5nS2V5ID0gc2lnbmluZ0tleSA/IF9qb3NlLmRlZmF1bHQuSldLLmFzS2V5KEpTT04ucGFyc2Uoc2lnbmluZ0tleSkpIDogZ2V0RGVyaXZlZFNpZ25pbmdLZXkoc2VjcmV0KTtcblxuICBjb25zdCBzaWduZWRUb2tlbiA9IF9qb3NlLmRlZmF1bHQuSldULnNpZ24odG9rZW4sIF9zaWduaW5nS2V5LCBzaWduaW5nT3B0aW9ucyk7XG5cbiAgaWYgKGVuY3J5cHRpb24pIHtcbiAgICBjb25zdCBfZW5jcnlwdGlvbktleSA9IGVuY3J5cHRpb25LZXkgPyBfam9zZS5kZWZhdWx0LkpXSy5hc0tleShKU09OLnBhcnNlKGVuY3J5cHRpb25LZXkpKSA6IGdldERlcml2ZWRFbmNyeXB0aW9uS2V5KHNlY3JldCk7XG5cbiAgICByZXR1cm4gX2pvc2UuZGVmYXVsdC5KV0UuZW5jcnlwdChzaWduZWRUb2tlbiwgX2VuY3J5cHRpb25LZXksIGVuY3J5cHRpb25PcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBzaWduZWRUb2tlbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVjb2RlKHtcbiAgc2VjcmV0LFxuICB0b2tlbixcbiAgbWF4QWdlID0gREVGQVVMVF9NQVhfQUdFLFxuICBzaWduaW5nS2V5LFxuICB2ZXJpZmljYXRpb25LZXkgPSBzaWduaW5nS2V5LFxuICB2ZXJpZmljYXRpb25PcHRpb25zID0ge1xuICAgIG1heFRva2VuQWdlOiBgJHttYXhBZ2V9c2AsXG4gICAgYWxnb3JpdGhtczogW0RFRkFVTFRfU0lHTkFUVVJFX0FMR09SSVRITV1cbiAgfSxcbiAgZW5jcnlwdGlvbktleSxcbiAgZGVjcnlwdGlvbktleSA9IGVuY3J5cHRpb25LZXksXG4gIGRlY3J5cHRpb25PcHRpb25zID0ge1xuICAgIGFsZ29yaXRobXM6IFtERUZBVUxUX0VOQ1JZUFRJT05fQUxHT1JJVEhNXVxuICB9LFxuICBlbmNyeXB0aW9uID0gREVGQVVMVF9FTkNSWVBUSU9OX0VOQUJMRURcbn0pIHtcbiAgaWYgKCF0b2tlbikgcmV0dXJuIG51bGw7XG4gIGxldCB0b2tlblRvVmVyaWZ5ID0gdG9rZW47XG5cbiAgaWYgKGVuY3J5cHRpb24pIHtcbiAgICBjb25zdCBfZW5jcnlwdGlvbktleSA9IGRlY3J5cHRpb25LZXkgPyBfam9zZS5kZWZhdWx0LkpXSy5hc0tleShKU09OLnBhcnNlKGRlY3J5cHRpb25LZXkpKSA6IGdldERlcml2ZWRFbmNyeXB0aW9uS2V5KHNlY3JldCk7XG5cbiAgICBjb25zdCBkZWNyeXB0ZWRUb2tlbiA9IF9qb3NlLmRlZmF1bHQuSldFLmRlY3J5cHQodG9rZW4sIF9lbmNyeXB0aW9uS2V5LCBkZWNyeXB0aW9uT3B0aW9ucyk7XG5cbiAgICB0b2tlblRvVmVyaWZ5ID0gZGVjcnlwdGVkVG9rZW4udG9TdHJpbmcoXCJ1dGY4XCIpO1xuICB9XG5cbiAgY29uc3QgX3NpZ25pbmdLZXkgPSB2ZXJpZmljYXRpb25LZXkgPyBfam9zZS5kZWZhdWx0LkpXSy5hc0tleShKU09OLnBhcnNlKHZlcmlmaWNhdGlvbktleSkpIDogZ2V0RGVyaXZlZFNpZ25pbmdLZXkoc2VjcmV0KTtcblxuICByZXR1cm4gX2pvc2UuZGVmYXVsdC5KV1QudmVyaWZ5KHRva2VuVG9WZXJpZnksIF9zaWduaW5nS2V5LCB2ZXJpZmljYXRpb25PcHRpb25zKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VG9rZW4ocGFyYW1zKSB7XG4gIHZhciBfcmVxJGhlYWRlcnMkYXV0aG9yaXo7XG5cbiAgY29uc3Qge1xuICAgIHJlcSxcbiAgICBzZWN1cmVDb29raWUgPSAhKCFwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwgfHwgcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMLnN0YXJ0c1dpdGgoXCJodHRwOi8vXCIpKSxcbiAgICBjb29raWVOYW1lID0gc2VjdXJlQ29va2llID8gXCJfX1NlY3VyZS1uZXh0LWF1dGguc2Vzc2lvbi10b2tlblwiIDogXCJuZXh0LWF1dGguc2Vzc2lvbi10b2tlblwiLFxuICAgIHJhdyA9IGZhbHNlLFxuICAgIGRlY29kZTogX2RlY29kZSA9IGRlY29kZVxuICB9ID0gcGFyYW1zICE9PSBudWxsICYmIHBhcmFtcyAhPT0gdm9pZCAwID8gcGFyYW1zIDoge307XG4gIGlmICghcmVxKSB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHBhc3MgYHJlcWAgdG8gSldUIGdldFRva2VuKClcIik7XG4gIGxldCB0b2tlbiA9IHJlcS5jb29raWVzW2Nvb2tpZU5hbWVdO1xuXG4gIGlmICghdG9rZW4gJiYgKChfcmVxJGhlYWRlcnMkYXV0aG9yaXogPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKSA9PT0gbnVsbCB8fCBfcmVxJGhlYWRlcnMkYXV0aG9yaXogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZXEkaGVhZGVycyRhdXRob3Jpei5zcGxpdChcIiBcIilbMF0pID09PSBcIkJlYXJlclwiKSB7XG4gICAgY29uc3QgdXJsRW5jb2RlZFRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdChcIiBcIilbMV07XG4gICAgdG9rZW4gPSBkZWNvZGVVUklDb21wb25lbnQodXJsRW5jb2RlZFRva2VuKTtcbiAgfVxuXG4gIGlmIChyYXcpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBfZGVjb2RlKHtcbiAgICAgIHRva2VuLFxuICAgICAgLi4ucGFyYW1zXG4gICAgfSk7XG4gIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5sZXQgREVSSVZFRF9TSUdOSU5HX0tFWV9XQVJOSU5HID0gZmFsc2U7XG5sZXQgREVSSVZFRF9FTkNSWVBUSU9OX0tFWV9XQVJOSU5HID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGhrZGYoc2VjcmV0LCB7XG4gIGJ5dGVMZW5ndGgsXG4gIGVuY3J5cHRpb25JbmZvLFxuICBkaWdlc3QgPSBcInNoYTI1NlwiXG59KSB7XG4gIGlmIChfY3J5cHRvLmRlZmF1bHQuaGtkZlN5bmMpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oX2NyeXB0by5kZWZhdWx0LmhrZGZTeW5jKGRpZ2VzdCwgc2VjcmV0LCBCdWZmZXIuYWxsb2MoMCksIGVuY3J5cHRpb25JbmZvLCBieXRlTGVuZ3RoKSk7XG4gIH1cblxuICByZXR1cm4gcmVxdWlyZShcImZ1dG9pbi1oa2RmXCIpKHNlY3JldCwgYnl0ZUxlbmd0aCwge1xuICAgIGluZm86IGVuY3J5cHRpb25JbmZvLFxuICAgIGhhc2g6IGRpZ2VzdFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVyaXZlZFNpZ25pbmdLZXkoc2VjcmV0KSB7XG4gIGlmICghREVSSVZFRF9TSUdOSU5HX0tFWV9XQVJOSU5HKSB7XG4gICAgX2xvZ2dlci5kZWZhdWx0Lndhcm4oXCJKV1RfQVVUT19HRU5FUkFURURfU0lHTklOR19LRVlcIik7XG5cbiAgICBERVJJVkVEX1NJR05JTkdfS0VZX1dBUk5JTkcgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYnVmZmVyID0gaGtkZihzZWNyZXQsIHtcbiAgICBieXRlTGVuZ3RoOiA2NCxcbiAgICBlbmNyeXB0aW9uSW5mbzogXCJOZXh0QXV0aC5qcyBHZW5lcmF0ZWQgU2lnbmluZyBLZXlcIlxuICB9KTtcblxuICBjb25zdCBrZXkgPSBfam9zZS5kZWZhdWx0LkpXSy5hc0tleShidWZmZXIsIHtcbiAgICBhbGc6IERFRkFVTFRfU0lHTkFUVVJFX0FMR09SSVRITSxcbiAgICB1c2U6IFwic2lnXCIsXG4gICAga2lkOiBcIm5leHRhdXRoLWF1dG8tZ2VuZXJhdGVkLXNpZ25pbmcta2V5XCJcbiAgfSk7XG5cbiAgcmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVyaXZlZEVuY3J5cHRpb25LZXkoc2VjcmV0KSB7XG4gIGlmICghREVSSVZFRF9FTkNSWVBUSU9OX0tFWV9XQVJOSU5HKSB7XG4gICAgX2xvZ2dlci5kZWZhdWx0Lndhcm4oXCJKV1RfQVVUT19HRU5FUkFURURfRU5DUllQVElPTl9LRVlcIik7XG5cbiAgICBERVJJVkVEX0VOQ1JZUFRJT05fS0VZX1dBUk5JTkcgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYnVmZmVyID0gaGtkZihzZWNyZXQsIHtcbiAgICBieXRlTGVuZ3RoOiAzMixcbiAgICBlbmNyeXB0aW9uSW5mbzogXCJOZXh0QXV0aC5qcyBHZW5lcmF0ZWQgRW5jcnlwdGlvbiBLZXlcIlxuICB9KTtcblxuICBjb25zdCBrZXkgPSBfam9zZS5kZWZhdWx0LkpXSy5hc0tleShidWZmZXIsIHtcbiAgICBhbGc6IERFRkFVTFRfRU5DUllQVElPTl9BTEdPUklUSE0sXG4gICAgdXNlOiBcImVuY1wiLFxuICAgIGtpZDogXCJuZXh0YXV0aC1hdXRvLWdlbmVyYXRlZC1lbmNyeXB0aW9uLWtleVwiXG4gIH0pO1xuXG4gIHJldHVybiBrZXk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnNldExvZ2dlciA9IHNldExvZ2dlcjtcbmV4cG9ydHMucHJveHlMb2dnZXIgPSBwcm94eUxvZ2dlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9lcnJvcnMgPSByZXF1aXJlKFwiLi4vc2VydmVyL2Vycm9yc1wiKTtcblxuZnVuY3Rpb24gZm9ybWF0RXJyb3Iobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEVycm9yICYmICEobyBpbnN0YW5jZW9mIF9lcnJvcnMuVW5rbm93bkVycm9yKSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBvLm1lc3NhZ2UsXG4gICAgICBzdGFjazogby5zdGFjayxcbiAgICAgIG5hbWU6IG8ubmFtZVxuICAgIH07XG4gIH1cblxuICBpZiAobyAhPT0gbnVsbCAmJiBvICE9PSB2b2lkIDAgJiYgby5lcnJvcikge1xuICAgIHZhciBfbyRtZXNzYWdlO1xuXG4gICAgby5lcnJvciA9IGZvcm1hdEVycm9yKG8uZXJyb3IpO1xuICAgIG8ubWVzc2FnZSA9IChfbyRtZXNzYWdlID0gby5tZXNzYWdlKSAhPT0gbnVsbCAmJiBfbyRtZXNzYWdlICE9PSB2b2lkIDAgPyBfbyRtZXNzYWdlIDogby5lcnJvci5tZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuIG87XG59XG5cbmNvbnN0IF9sb2dnZXIgPSB7XG4gIGVycm9yKGNvZGUsIG1ldGFkYXRhKSB7XG4gICAgbWV0YWRhdGEgPSBmb3JtYXRFcnJvcihtZXRhZGF0YSk7XG4gICAgY29uc29sZS5lcnJvcihgW25leHQtYXV0aF1bZXJyb3JdWyR7Y29kZX1dYCwgYFxcbmh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9lcnJvcnMjJHtjb2RlLnRvTG93ZXJDYXNlKCl9YCwgbWV0YWRhdGEubWVzc2FnZSwgbWV0YWRhdGEpO1xuICB9LFxuXG4gIHdhcm4oY29kZSkge1xuICAgIGNvbnNvbGUud2FybihgW25leHQtYXV0aF1bd2Fybl1bJHtjb2RlfV1gLCBgXFxuaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3dhcm5pbmdzIyR7Y29kZS50b0xvd2VyQ2FzZSgpfWApO1xuICB9LFxuXG4gIGRlYnVnKGNvZGUsIG1ldGFkYXRhKSB7XG4gICAgdmFyIF9wcm9jZXNzLCBfcHJvY2VzcyRlbnY7XG5cbiAgICBpZiAoISgoX3Byb2Nlc3MgPSBwcm9jZXNzKSAhPT0gbnVsbCAmJiBfcHJvY2VzcyAhPT0gdm9pZCAwICYmIChfcHJvY2VzcyRlbnYgPSBfcHJvY2Vzcy5lbnYpICE9PSBudWxsICYmIF9wcm9jZXNzJGVudiAhPT0gdm9pZCAwICYmIF9wcm9jZXNzJGVudi5fTkVYVEFVVEhfREVCVUcpKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coYFtuZXh0LWF1dGhdW2RlYnVnXVske2NvZGV9XWAsIG1ldGFkYXRhKTtcbiAgfVxuXG59O1xuXG5mdW5jdGlvbiBzZXRMb2dnZXIobmV3TG9nZ2VyID0ge30pIHtcbiAgaWYgKG5ld0xvZ2dlci5lcnJvcikgX2xvZ2dlci5lcnJvciA9IG5ld0xvZ2dlci5lcnJvcjtcbiAgaWYgKG5ld0xvZ2dlci53YXJuKSBfbG9nZ2VyLndhcm4gPSBuZXdMb2dnZXIud2FybjtcbiAgaWYgKG5ld0xvZ2dlci5kZWJ1ZykgX2xvZ2dlci5kZWJ1ZyA9IG5ld0xvZ2dlci5kZWJ1Zztcbn1cblxudmFyIF9kZWZhdWx0ID0gX2xvZ2dlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG5mdW5jdGlvbiBwcm94eUxvZ2dlcihsb2dnZXIgPSBfbG9nZ2VyLCBiYXNlUGF0aCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaWVudExvZ2dlciA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBsZXZlbCBpbiBsb2dnZXIpIHtcbiAgICAgIGNsaWVudExvZ2dlcltsZXZlbF0gPSAoY29kZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgX2xvZ2dlcltsZXZlbF0oY29kZSwgbWV0YWRhdGEpO1xuXG4gICAgICAgIGlmIChsZXZlbCA9PT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgbWV0YWRhdGEgPSBmb3JtYXRFcnJvcihtZXRhZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRhZGF0YS5jbGllbnQgPSB0cnVlO1xuICAgICAgICBjb25zdCB1cmwgPSBgJHtiYXNlUGF0aH0vX2xvZ2A7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICBjb2RlLFxuICAgICAgICAgIC4uLm1ldGFkYXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChuYXZpZ2F0b3Iuc2VuZEJlYWNvbikge1xuICAgICAgICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBrZWVwYWxpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBjbGllbnRMb2dnZXI7XG4gIH0gY2F0Y2ggKF91bnVzZWQpIHtcbiAgICByZXR1cm4gX2xvZ2dlcjtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tZXJnZSA9IG1lcmdlO1xuXG5mdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gIHJldHVybiBpdGVtICYmIHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGl0ZW0pO1xufVxuXG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgY29uc3Qgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuXG4gIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcbiAgICAgICAgICBba2V5XToge31cbiAgICAgICAgfSk7XG4gICAgICAgIG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwge1xuICAgICAgICAgIFtrZXldOiBzb3VyY2Vba2V5XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2UodGFyZ2V0LCAuLi5zb3VyY2VzKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlVXJsO1xuXG5mdW5jdGlvbiBwYXJzZVVybCh1cmwpIHtcbiAgY29uc3QgZGVmYXVsdEhvc3QgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuICBjb25zdCBkZWZhdWx0UGF0aCA9IFwiL2FwaS9hdXRoXCI7XG5cbiAgaWYgKCF1cmwpIHtcbiAgICB1cmwgPSBgJHtkZWZhdWx0SG9zdH0ke2RlZmF1bHRQYXRofWA7XG4gIH1cblxuICBjb25zdCBwcm90b2NvbCA9IHVybC5zdGFydHNXaXRoKFwiaHR0cDpcIikgPyBcImh0dHBcIiA6IFwiaHR0cHNcIjtcbiAgdXJsID0gdXJsLnJlcGxhY2UoL15odHRwcz86XFwvXFwvLywgXCJcIikucmVwbGFjZSgvXFwvJC8sIFwiXCIpO1xuICBjb25zdCBbX2hvc3QsIC4uLl9wYXRoXSA9IHVybC5zcGxpdChcIi9cIik7XG4gIGNvbnN0IGJhc2VVcmwgPSBfaG9zdCA/IGAke3Byb3RvY29sfTovLyR7X2hvc3R9YCA6IGRlZmF1bHRIb3N0O1xuICBjb25zdCBiYXNlUGF0aCA9IF9wYXRoLmxlbmd0aCA+IDAgPyBgLyR7X3BhdGguam9pbihcIi9cIil9YCA6IGRlZmF1bHRQYXRoO1xuICByZXR1cm4ge1xuICAgIGJhc2VVcmwsXG4gICAgYmFzZVBhdGhcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdpdEh1YjtcblxuZnVuY3Rpb24gR2l0SHViKG9wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogXCJnaXRodWJcIixcbiAgICBuYW1lOiBcIkdpdEh1YlwiLFxuICAgIHR5cGU6IFwib2F1dGhcIixcbiAgICBhdXRob3JpemF0aW9uOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9sb2dpbi9vYXV0aC9hdXRob3JpemU/c2NvcGU9cmVhZDp1c2VyK3VzZXI6ZW1haWxcIixcbiAgICB0b2tlbjogXCJodHRwczovL2dpdGh1Yi5jb20vbG9naW4vb2F1dGgvYWNjZXNzX3Rva2VuXCIsXG4gICAgdXNlcmluZm86IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2VyXCIsXG5cbiAgICBwcm9maWxlKHByb2ZpbGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBwcm9maWxlLmlkLnRvU3RyaW5nKCksXG4gICAgICAgIG5hbWU6IHByb2ZpbGUubmFtZSB8fCBwcm9maWxlLmxvZ2luLFxuICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcbiAgICAgICAgaW1hZ2U6IHByb2ZpbGUuYXZhdGFyX3VybFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgb3B0aW9uc1xuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gR29vZ2xlO1xuXG5mdW5jdGlvbiBHb29nbGUob3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIGlkOiBcImdvb2dsZVwiLFxuICAgIG5hbWU6IFwiR29vZ2xlXCIsXG4gICAgdHlwZTogXCJvYXV0aFwiLFxuICAgIHdlbGxLbm93bjogXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb25cIixcbiAgICBhdXRob3JpemF0aW9uOiB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc2NvcGU6IFwib3BlbmlkIGVtYWlsIHByb2ZpbGVcIlxuICAgICAgfVxuICAgIH0sXG4gICAgaWRUb2tlbjogdHJ1ZSxcbiAgICBjaGVja3M6IFtcInBrY2VcIiwgXCJzdGF0ZVwiXSxcblxuICAgIHByb2ZpbGUocHJvZmlsZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHByb2ZpbGUuc3ViLFxuICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWUsXG4gICAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxuICAgICAgICBpbWFnZTogcHJvZmlsZS5waWN0dXJlXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBvcHRpb25zXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51cHBlclNuYWtlID0gdXBwZXJTbmFrZTtcbmV4cG9ydHMuY2FwaXRhbGl6ZSA9IGNhcGl0YWxpemU7XG5leHBvcnRzLmV2ZW50c0Vycm9ySGFuZGxlciA9IGV2ZW50c0Vycm9ySGFuZGxlcjtcbmV4cG9ydHMuYWRhcHRlckVycm9ySGFuZGxlciA9IGFkYXB0ZXJFcnJvckhhbmRsZXI7XG5leHBvcnRzLkFjY291bnROb3RMaW5rZWRFcnJvciA9IGV4cG9ydHMuT0F1dGhDYWxsYmFja0Vycm9yID0gZXhwb3J0cy5Vbmtub3duRXJyb3IgPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbmNsYXNzIFVua25vd25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoZXJyb3IpIHtcbiAgICB2YXIgX2Vycm9yJG1lc3NhZ2U7XG5cbiAgICBzdXBlcigoX2Vycm9yJG1lc3NhZ2UgPSBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSkgIT09IG51bGwgJiYgX2Vycm9yJG1lc3NhZ2UgIT09IHZvaWQgMCA/IF9lcnJvciRtZXNzYWdlIDogZXJyb3IpO1xuICAgIHRoaXMubmFtZSA9IFwiVW5rbm93bkVycm9yXCI7XG5cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2tcbiAgICB9O1xuICB9XG5cbn1cblxuZXhwb3J0cy5Vbmtub3duRXJyb3IgPSBVbmtub3duRXJyb3I7XG5cbmNsYXNzIE9BdXRoQ2FsbGJhY2tFcnJvciBleHRlbmRzIFVua25vd25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0aGlzLCBcIm5hbWVcIiwgXCJPQXV0aENhbGxiYWNrRXJyb3JcIik7XG4gIH1cblxufVxuXG5leHBvcnRzLk9BdXRoQ2FsbGJhY2tFcnJvciA9IE9BdXRoQ2FsbGJhY2tFcnJvcjtcblxuY2xhc3MgQWNjb3VudE5vdExpbmtlZEVycm9yIGV4dGVuZHMgVW5rbm93bkVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRoaXMsIFwibmFtZVwiLCBcIkFjY291bnROb3RMaW5rZWRFcnJvclwiKTtcbiAgfVxuXG59XG5cbmV4cG9ydHMuQWNjb3VudE5vdExpbmtlZEVycm9yID0gQWNjb3VudE5vdExpbmtlZEVycm9yO1xuXG5mdW5jdGlvbiB1cHBlclNuYWtlKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvKFtBLVpdKS9nLCBcIl8kMVwiKS50b1VwcGVyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHMpIHtcbiAgcmV0dXJuIGAke3NbMF0udG9VcHBlckNhc2UoKX0ke3Muc2xpY2UoMSl9YDtcbn1cblxuZnVuY3Rpb24gZXZlbnRzRXJyb3JIYW5kbGVyKG1ldGhvZHMsIGxvZ2dlcikge1xuICByZXR1cm4gT2JqZWN0LmtleXMobWV0aG9kcykucmVkdWNlKChhY2MsIG5hbWUpID0+IHtcbiAgICBhY2NbbmFtZV0gPSBhc3luYyAoLi4uYXJncykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gbWV0aG9kc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IG1ldGhvZCguLi5hcmdzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGAke3VwcGVyU25ha2UobmFtZSl9X0VWRU5UX0VSUk9SYCwgZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gYWRhcHRlckVycm9ySGFuZGxlcihhZGFwdGVyLCBsb2dnZXIpIHtcbiAgaWYgKCFhZGFwdGVyKSByZXR1cm47XG4gIHJldHVybiBPYmplY3Qua2V5cyhhZGFwdGVyKS5yZWR1Y2UoKGFjYywgbmFtZSkgPT4ge1xuICAgIGFjY1tuYW1lXSA9IGFzeW5jICguLi5hcmdzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsb2dnZXIuZGVidWcoYGFkYXB0ZXJfJHtuYW1lfWAsIHtcbiAgICAgICAgICBhcmdzXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtZXRob2QgPSBhZGFwdGVyW25hbWVdO1xuICAgICAgICByZXR1cm4gYXdhaXQgbWV0aG9kKC4uLmFyZ3MpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKGBhZGFwdGVyX2Vycm9yXyR7bmFtZX1gLCBlcnJvcik7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgVW5rbm93bkVycm9yKGVycm9yKTtcbiAgICAgICAgZS5uYW1lID0gYCR7Y2FwaXRhbGl6ZShuYW1lKX1FcnJvcmA7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBqd3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vand0XCIpKTtcblxudmFyIF9wYXJzZVVybCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xpYi9wYXJzZS11cmxcIikpO1xuXG52YXIgX2xvZ2dlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9saWIvbG9nZ2VyXCIpKTtcblxudmFyIGNvb2tpZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2xpYi9jb29raWVcIikpO1xuXG52YXIgX2RlZmF1bHRDYWxsYmFja3MgPSByZXF1aXJlKFwiLi9saWIvZGVmYXVsdC1jYWxsYmFja3NcIik7XG5cbnZhciBfcHJvdmlkZXJzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvcHJvdmlkZXJzXCIpKTtcblxudmFyIHJvdXRlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3JvdXRlc1wiKSk7XG5cbnZhciBfcGFnZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhZ2VzXCIpKTtcblxudmFyIF9jYWxsYmFja1VybEhhbmRsZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xpYi9jYWxsYmFjay11cmwtaGFuZGxlclwiKSk7XG5cbnZhciBfZXh0ZW5kUmVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvZXh0ZW5kLXJlc1wiKSk7XG5cbnZhciBfY3NyZlRva2VuSGFuZGxlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL2NzcmYtdG9rZW4taGFuZGxlclwiKSk7XG5cbnZhciBfZXJyb3JzID0gcmVxdWlyZShcIi4vZXJyb3JzXCIpO1xuXG52YXIgX3V0aWxzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvdXRpbHNcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5pZiAoIXByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCkge1xuICBfbG9nZ2VyLmRlZmF1bHQud2FybihcIk5FWFRBVVRIX1VSTFwiKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gTmV4dEF1dGhIYW5kbGVyKHJlcSwgcmVzLCB1c2VyT3B0aW9ucykge1xuICB2YXIgX3Byb2Nlc3MkZW52JE5FWFRBVVRILCBfdXNlck9wdGlvbnMkdXNlU2VjdXIsIF9wcm92aWRlciR2ZXJzaW9uLCBfdXNlck9wdGlvbnMkZXZlbnRzLCBfcHJvY2VzcyRlbnYkTkVYVEFVVEgyO1xuXG4gIGlmICh1c2VyT3B0aW9ucy5sb2dnZXIpIHtcbiAgICAoMCwgX2xvZ2dlci5zZXRMb2dnZXIpKHVzZXJPcHRpb25zLmxvZ2dlcik7XG4gIH1cblxuICBpZiAodXNlck9wdGlvbnMuZGVidWcpIHtcbiAgICA7XG4gICAgcHJvY2Vzcy5lbnYuX05FWFRBVVRIX0RFQlVHID0gdHJ1ZTtcbiAgfVxuXG4gICgwLCBfZXh0ZW5kUmVzLmRlZmF1bHQpKHJlcSwgcmVzKTtcblxuICBpZiAoIXJlcS5xdWVyeS5uZXh0YXV0aCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBcIkNhbm5vdCBmaW5kIFsuLi5uZXh0YXV0aF0uanMgaW4gcGFnZXMvYXBpL2F1dGguIE1ha2Ugc3VyZSB0aGUgZmlsZW5hbWUgaXMgd3JpdHRlbiBjb3JyZWN0bHkuXCI7XG5cbiAgICBfbG9nZ2VyLmRlZmF1bHQuZXJyb3IoXCJNSVNTSU5HX05FWFRBVVRIX0FQSV9ST1VURV9FUlJPUlwiLCBuZXcgRXJyb3IobWVzc2FnZSkpO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5lbmQoYEVycm9yOiAke21lc3NhZ2V9YCk7XG4gIH1cblxuICBjb25zdCB7XG4gICAgbmV4dGF1dGgsXG4gICAgYWN0aW9uID0gbmV4dGF1dGhbMF0sXG4gICAgcHJvdmlkZXJJZCA9IG5leHRhdXRoWzFdLFxuICAgIGVycm9yID0gbmV4dGF1dGhbMV1cbiAgfSA9IHJlcS5xdWVyeTtcbiAgZGVsZXRlIHJlcS5xdWVyeS5uZXh0YXV0aDtcbiAgY29uc3Qge1xuICAgIGJhc2VQYXRoLFxuICAgIGJhc2VVcmxcbiAgfSA9ICgwLCBfcGFyc2VVcmwuZGVmYXVsdCkoKF9wcm9jZXNzJGVudiRORVhUQVVUSCA9IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCkgIT09IG51bGwgJiYgX3Byb2Nlc3MkZW52JE5FWFRBVVRIICE9PSB2b2lkIDAgPyBfcHJvY2VzcyRlbnYkTkVYVEFVVEggOiBwcm9jZXNzLmVudi5WRVJDRUxfVVJMKTtcbiAgY29uc3QgY29va2llcyA9IHsgLi4uY29va2llLmRlZmF1bHRDb29raWVzKChfdXNlck9wdGlvbnMkdXNlU2VjdXIgPSB1c2VyT3B0aW9ucy51c2VTZWN1cmVDb29raWVzKSAhPT0gbnVsbCAmJiBfdXNlck9wdGlvbnMkdXNlU2VjdXIgIT09IHZvaWQgMCA/IF91c2VyT3B0aW9ucyR1c2VTZWN1ciA6IGJhc2VVcmwuc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpKSxcbiAgICAuLi51c2VyT3B0aW9ucy5jb29raWVzXG4gIH07XG4gIGNvbnN0IHNlY3JldCA9ICgwLCBfdXRpbHMuZGVmYXVsdCkoe1xuICAgIHVzZXJPcHRpb25zLFxuICAgIGJhc2VQYXRoLFxuICAgIGJhc2VVcmxcbiAgfSk7XG4gIGNvbnN0IHByb3ZpZGVycyA9ICgwLCBfcHJvdmlkZXJzLmRlZmF1bHQpKHtcbiAgICBwcm92aWRlcnM6IHVzZXJPcHRpb25zLnByb3ZpZGVycyxcbiAgICBiYXNlOiBgJHtiYXNlVXJsfSR7YmFzZVBhdGh9YFxuICB9KTtcbiAgY29uc3QgcHJvdmlkZXIgPSBwcm92aWRlcnMuZmluZCgoe1xuICAgIGlkXG4gIH0pID0+IGlkID09PSBwcm92aWRlcklkKTtcblxuICBpZiAoKHByb3ZpZGVyID09PSBudWxsIHx8IHByb3ZpZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm92aWRlci50eXBlKSA9PT0gXCJvYXV0aFwiICYmICEoKF9wcm92aWRlciR2ZXJzaW9uID0gcHJvdmlkZXIudmVyc2lvbikgIT09IG51bGwgJiYgX3Byb3ZpZGVyJHZlcnNpb24gIT09IHZvaWQgMCAmJiBfcHJvdmlkZXIkdmVyc2lvbi5zdGFydHNXaXRoKFwiMS5cIikpICYmICFwcm92aWRlci5jaGVja3MpIHtcbiAgICBwcm92aWRlci5jaGVja3MgPSBbXCJzdGF0ZVwiXTtcbiAgfVxuXG4gIGNvbnN0IG1heEFnZSA9IDMwICogMjQgKiA2MCAqIDYwO1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBwYWdlczoge30sXG4gICAgdGhlbWU6IFwiYXV0b1wiLFxuICAgIC4uLnVzZXJPcHRpb25zLFxuICAgIGJhc2VVcmwsXG4gICAgYmFzZVBhdGgsXG4gICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgcHJvdmlkZXIsXG4gICAgY29va2llcyxcbiAgICBzZWNyZXQsXG4gICAgcHJvdmlkZXJzLFxuICAgIHNlc3Npb246IHtcbiAgICAgIGp3dDogIXVzZXJPcHRpb25zLmFkYXB0ZXIsXG4gICAgICBtYXhBZ2UsXG4gICAgICB1cGRhdGVBZ2U6IDI0ICogNjAgKiA2MCxcbiAgICAgIC4uLnVzZXJPcHRpb25zLnNlc3Npb25cbiAgICB9LFxuICAgIGp3dDoge1xuICAgICAgc2VjcmV0LFxuICAgICAgbWF4QWdlLFxuICAgICAgZW5jb2RlOiBqd3QuZW5jb2RlLFxuICAgICAgZGVjb2RlOiBqd3QuZGVjb2RlLFxuICAgICAgLi4udXNlck9wdGlvbnMuand0XG4gICAgfSxcbiAgICBldmVudHM6ICgwLCBfZXJyb3JzLmV2ZW50c0Vycm9ySGFuZGxlcikoKF91c2VyT3B0aW9ucyRldmVudHMgPSB1c2VyT3B0aW9ucy5ldmVudHMpICE9PSBudWxsICYmIF91c2VyT3B0aW9ucyRldmVudHMgIT09IHZvaWQgMCA/IF91c2VyT3B0aW9ucyRldmVudHMgOiB7fSwgX2xvZ2dlci5kZWZhdWx0KSxcbiAgICBhZGFwdGVyOiAoMCwgX2Vycm9ycy5hZGFwdGVyRXJyb3JIYW5kbGVyKSh1c2VyT3B0aW9ucy5hZGFwdGVyLCBfbG9nZ2VyLmRlZmF1bHQpLFxuICAgIGNhbGxiYWNrczogeyAuLi5fZGVmYXVsdENhbGxiYWNrcy5kZWZhdWx0Q2FsbGJhY2tzLFxuICAgICAgLi4udXNlck9wdGlvbnMuY2FsbGJhY2tzXG4gICAgfSxcbiAgICBsb2dnZXI6IF9sb2dnZXIuZGVmYXVsdCxcbiAgICBjYWxsYmFja1VybDogKF9wcm9jZXNzJGVudiRORVhUQVVUSDIgPSBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwpICE9PSBudWxsICYmIF9wcm9jZXNzJGVudiRORVhUQVVUSDIgIT09IHZvaWQgMCA/IF9wcm9jZXNzJGVudiRORVhUQVVUSDIgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiXG4gIH07XG4gIHJlcS5vcHRpb25zID0gb3B0aW9ucztcbiAgKDAsIF9jc3JmVG9rZW5IYW5kbGVyLmRlZmF1bHQpKHJlcSwgcmVzKTtcbiAgYXdhaXQgKDAsIF9jYWxsYmFja1VybEhhbmRsZXIuZGVmYXVsdCkocmVxLCByZXMpO1xuICBjb25zdCByZW5kZXIgPSAoMCwgX3BhZ2VzLmRlZmF1bHQpKHJlcSwgcmVzKTtcbiAgY29uc3Qge1xuICAgIHBhZ2VzXG4gIH0gPSByZXEub3B0aW9ucztcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICBjYXNlIFwicHJvdmlkZXJzXCI6XG4gICAgICAgIHJldHVybiByb3V0ZXMucHJvdmlkZXJzKHJlcSwgcmVzKTtcblxuICAgICAgY2FzZSBcInNlc3Npb25cIjpcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJvdXRlcy5zZXNzaW9uKHJlcSwgcmVzKTtcblxuICAgICAgY2FzZSBcImNzcmZcIjpcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgICBjc3JmVG9rZW46IHJlcS5vcHRpb25zLmNzcmZUb2tlblxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSBcInNpZ25pblwiOlxuICAgICAgICBpZiAocGFnZXMuc2lnbkluKSB7XG4gICAgICAgICAgbGV0IHNpZ25pblVybCA9IGAke3BhZ2VzLnNpZ25Jbn0ke3BhZ2VzLnNpZ25Jbi5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wifWNhbGxiYWNrVXJsPSR7cmVxLm9wdGlvbnMuY2FsbGJhY2tVcmx9YDtcblxuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgc2lnbmluVXJsID0gYCR7c2lnbmluVXJsfSZlcnJvcj0ke2Vycm9yfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChzaWduaW5VcmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlci5zaWduaW4oKTtcblxuICAgICAgY2FzZSBcInNpZ25vdXRcIjpcbiAgICAgICAgaWYgKHBhZ2VzLnNpZ25PdXQpIHJldHVybiByZXMucmVkaXJlY3QocGFnZXMuc2lnbk91dCk7XG4gICAgICAgIHJldHVybiByZW5kZXIuc2lnbm91dCgpO1xuXG4gICAgICBjYXNlIFwiY2FsbGJhY2tcIjpcbiAgICAgICAgaWYgKHByb3ZpZGVyKSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHJvdXRlcy5jYWxsYmFjayhyZXEsIHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInZlcmlmeS1yZXF1ZXN0XCI6XG4gICAgICAgIGlmIChwYWdlcy52ZXJpZnlSZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChwYWdlcy52ZXJpZnlSZXF1ZXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXIudmVyaWZ5UmVxdWVzdCgpO1xuXG4gICAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgICAgaWYgKHBhZ2VzLmVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtwYWdlcy5lcnJvcn0ke3BhZ2VzLmVycm9yLmluY2x1ZGVzKFwiP1wiKSA/IFwiJlwiIDogXCI/XCJ9ZXJyb3I9JHtlcnJvcn1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChbXCJTaWduaW5cIiwgXCJPQXV0aFNpZ25pblwiLCBcIk9BdXRoQ2FsbGJhY2tcIiwgXCJPQXV0aENyZWF0ZUFjY291bnRcIiwgXCJFbWFpbENyZWF0ZUFjY291bnRcIiwgXCJDYWxsYmFja1wiLCBcIk9BdXRoQWNjb3VudE5vdExpbmtlZFwiLCBcIkVtYWlsU2lnbmluXCIsIFwiQ3JlZGVudGlhbHNTaWduaW5cIiwgXCJTZXNzaW9uUmVxdWlyZWRcIl0uaW5jbHVkZXMoZXJyb3IpKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L3NpZ25pbj9lcnJvcj0ke2Vycm9yfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlci5lcnJvcih7XG4gICAgICAgICAgZXJyb3JcbiAgICAgICAgfSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgXCJzaWduaW5cIjpcbiAgICAgICAgaWYgKHJlcS5vcHRpb25zLmNzcmZUb2tlblZlcmlmaWVkICYmIHByb3ZpZGVyKSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHJvdXRlcy5zaWduaW4ocmVxLCByZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L3NpZ25pbj9jc3JmPXRydWVgKTtcblxuICAgICAgY2FzZSBcInNpZ25vdXRcIjpcbiAgICAgICAgaWYgKHJlcS5vcHRpb25zLmNzcmZUb2tlblZlcmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHJvdXRlcy5zaWdub3V0KHJlcSwgcmVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9zaWdub3V0P2NzcmY9dHJ1ZWApO1xuXG4gICAgICBjYXNlIFwiY2FsbGJhY2tcIjpcbiAgICAgICAgaWYgKHByb3ZpZGVyKSB7XG4gICAgICAgICAgaWYgKHByb3ZpZGVyLnR5cGUgPT09IFwiY3JlZGVudGlhbHNcIiAmJiAhcmVxLm9wdGlvbnMuY3NyZlRva2VuVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9zaWduaW4/Y3NyZj10cnVlYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IHJvdXRlcy5jYWxsYmFjayhyZXEsIHJlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIl9sb2dcIjpcbiAgICAgICAgaWYgKHVzZXJPcHRpb25zLmxvZ2dlcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICAgIGxldmVsLFxuICAgICAgICAgICAgICAuLi5tZXRhZGF0YVxuICAgICAgICAgICAgfSA9IHJlcS5ib2R5O1xuXG4gICAgICAgICAgICBfbG9nZ2VyLmRlZmF1bHRbbGV2ZWxdKGNvZGUsIG1ldGFkYXRhKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgX2xvZ2dlci5kZWZhdWx0LmVycm9yKFwiTE9HR0VSX0VSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLmVuZCgpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDQwMCkuZW5kKGBFcnJvcjogSFRUUCAke3JlcS5tZXRob2R9IGlzIG5vdCBzdXBwb3J0ZWQgZm9yICR7cmVxLnVybH1gKTtcbn1cblxuZnVuY3Rpb24gTmV4dEF1dGgoLi4uYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzKSA9PiBhd2FpdCBOZXh0QXV0aEhhbmRsZXIocmVxLCByZXMsIGFyZ3NbMF0pO1xuICB9XG5cbiAgcmV0dXJuIE5leHRBdXRoSGFuZGxlcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gTmV4dEF1dGg7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNhbGxiYWNrSGFuZGxlcjtcblxudmFyIF9lcnJvcnMgPSByZXF1aXJlKFwiLi4vZXJyb3JzXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBfY3J5cHRvID0gcmVxdWlyZShcImNyeXB0b1wiKTtcblxuYXN5bmMgZnVuY3Rpb24gY2FsbGJhY2tIYW5kbGVyKHNlc3Npb25Ub2tlbiwgcHJvZmlsZSwgYWNjb3VudCwgb3B0aW9ucykge1xuICBpZiAoIShhY2NvdW50ICE9PSBudWxsICYmIGFjY291bnQgIT09IHZvaWQgMCAmJiBhY2NvdW50LnByb3ZpZGVyQWNjb3VudElkKSB8fCAhYWNjb3VudC50eXBlKSB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIG9yIGludmFsaWQgcHJvdmlkZXIgYWNjb3VudFwiKTtcbiAgaWYgKCFbXCJlbWFpbFwiLCBcIm9hdXRoXCJdLmluY2x1ZGVzKGFjY291bnQudHlwZSkpIHRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVyIG5vdCBzdXBwb3J0ZWRcIik7XG4gIGNvbnN0IHtcbiAgICBhZGFwdGVyLFxuICAgIGp3dCxcbiAgICBldmVudHMsXG4gICAgc2Vzc2lvbjoge1xuICAgICAgand0OiB1c2VKd3RTZXNzaW9uXG4gICAgfVxuICB9ID0gb3B0aW9ucztcblxuICBpZiAoIWFkYXB0ZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogcHJvZmlsZSxcbiAgICAgIGFjY291bnQsXG4gICAgICBzZXNzaW9uOiB7fVxuICAgIH07XG4gIH1cblxuICBjb25zdCB7XG4gICAgY3JlYXRlVXNlcixcbiAgICB1cGRhdGVVc2VyLFxuICAgIGdldFVzZXIsXG4gICAgZ2V0VXNlckJ5QWNjb3VudCxcbiAgICBnZXRVc2VyQnlFbWFpbCxcbiAgICBsaW5rQWNjb3VudCxcbiAgICBjcmVhdGVTZXNzaW9uLFxuICAgIGdldFNlc3Npb25BbmRVc2VyLFxuICAgIGRlbGV0ZVNlc3Npb25cbiAgfSA9IGFkYXB0ZXI7XG4gIGxldCBzZXNzaW9uID0gbnVsbDtcbiAgbGV0IHVzZXIgPSBudWxsO1xuICBsZXQgaXNOZXdVc2VyID0gZmFsc2U7XG5cbiAgaWYgKHNlc3Npb25Ub2tlbikge1xuICAgIGlmICh1c2VKd3RTZXNzaW9uKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXNzaW9uID0gYXdhaXQgand0LmRlY29kZSh7IC4uLmp3dCxcbiAgICAgICAgICB0b2tlbjogc2Vzc2lvblRva2VuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzZXNzaW9uICYmIFwic3ViXCIgaW4gc2Vzc2lvbiAmJiBzZXNzaW9uLnN1Yikge1xuICAgICAgICAgIHVzZXIgPSBhd2FpdCBnZXRVc2VyKHNlc3Npb24uc3ViKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoX3VudXNlZCkge31cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdXNlckFuZFNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uQW5kVXNlcihzZXNzaW9uVG9rZW4pO1xuXG4gICAgICBpZiAodXNlckFuZFNlc3Npb24pIHtcbiAgICAgICAgc2Vzc2lvbiA9IHVzZXJBbmRTZXNzaW9uLnNlc3Npb247XG4gICAgICAgIHVzZXIgPSB1c2VyQW5kU2Vzc2lvbi51c2VyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhY2NvdW50LnR5cGUgPT09IFwiZW1haWxcIikge1xuICAgIGNvbnN0IHVzZXJCeUVtYWlsID0gcHJvZmlsZS5lbWFpbCA/IGF3YWl0IGdldFVzZXJCeUVtYWlsKHByb2ZpbGUuZW1haWwpIDogbnVsbDtcblxuICAgIGlmICh1c2VyQnlFbWFpbCkge1xuICAgICAgdmFyIF91c2VyLCBfZXZlbnRzJHVwZGF0ZVVzZXI7XG5cbiAgICAgIGlmICgoKF91c2VyID0gdXNlcikgPT09IG51bGwgfHwgX3VzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF91c2VyLmlkKSAhPT0gdXNlckJ5RW1haWwuaWQgJiYgIXVzZUp3dFNlc3Npb24gJiYgc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIGF3YWl0IGRlbGV0ZVNlc3Npb24oc2Vzc2lvblRva2VuKTtcbiAgICAgIH1cblxuICAgICAgdXNlciA9IGF3YWl0IHVwZGF0ZVVzZXIoe1xuICAgICAgICBpZDogdXNlckJ5RW1haWwuaWQsXG4gICAgICAgIGVtYWlsVmVyaWZpZWQ6IG5ldyBEYXRlKClcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgKChfZXZlbnRzJHVwZGF0ZVVzZXIgPSBldmVudHMudXBkYXRlVXNlcikgPT09IG51bGwgfHwgX2V2ZW50cyR1cGRhdGVVc2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZXZlbnRzJHVwZGF0ZVVzZXIuY2FsbChldmVudHMsIHtcbiAgICAgICAgdXNlclxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2V2ZW50cyRjcmVhdGVVc2VyO1xuXG4gICAgICBjb25zdCBuZXdVc2VyID0geyAuLi5wcm9maWxlLFxuICAgICAgICBlbWFpbFZlcmlmaWVkOiBuZXcgRGF0ZSgpXG4gICAgICB9O1xuICAgICAgZGVsZXRlIG5ld1VzZXIuaWQ7XG4gICAgICB1c2VyID0gYXdhaXQgY3JlYXRlVXNlcihuZXdVc2VyKTtcbiAgICAgIGF3YWl0ICgoX2V2ZW50cyRjcmVhdGVVc2VyID0gZXZlbnRzLmNyZWF0ZVVzZXIpID09PSBudWxsIHx8IF9ldmVudHMkY3JlYXRlVXNlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50cyRjcmVhdGVVc2VyLmNhbGwoZXZlbnRzLCB7XG4gICAgICAgIHVzZXJcbiAgICAgIH0pKTtcbiAgICAgIGlzTmV3VXNlciA9IHRydWU7XG4gICAgfVxuXG4gICAgc2Vzc2lvbiA9IHVzZUp3dFNlc3Npb24gPyB7fSA6IGF3YWl0IGNyZWF0ZVNlc3Npb24oe1xuICAgICAgc2Vzc2lvblRva2VuOiBnZW5lcmF0ZVNlc3Npb25Ub2tlbigpLFxuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgZXhwaXJlczogKDAsIF91dGlscy5mcm9tRGF0ZSkob3B0aW9ucy5zZXNzaW9uLm1heEFnZSlcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgc2Vzc2lvbixcbiAgICAgIHVzZXIsXG4gICAgICBpc05ld1VzZXJcbiAgICB9O1xuICB9IGVsc2UgaWYgKGFjY291bnQudHlwZSA9PT0gXCJvYXV0aFwiKSB7XG4gICAgY29uc3QgdXNlckJ5QWNjb3VudCA9IGF3YWl0IGdldFVzZXJCeUFjY291bnQoe1xuICAgICAgcHJvdmlkZXJBY2NvdW50SWQ6IGFjY291bnQucHJvdmlkZXJBY2NvdW50SWQsXG4gICAgICBwcm92aWRlcjogYWNjb3VudC5wcm92aWRlclxuICAgIH0pO1xuXG4gICAgaWYgKHVzZXJCeUFjY291bnQpIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGlmICh1c2VyQnlBY2NvdW50LmlkID09PSB1c2VyLmlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlc3Npb24sXG4gICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgaXNOZXdVc2VyXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBfZXJyb3JzLkFjY291bnROb3RMaW5rZWRFcnJvcihcIlRoZSBhY2NvdW50IGlzIGFscmVhZHkgYXNzb2NpYXRlZCB3aXRoIGFub3RoZXIgdXNlclwiKTtcbiAgICAgIH1cblxuICAgICAgc2Vzc2lvbiA9IHVzZUp3dFNlc3Npb24gPyB7fSA6IGF3YWl0IGNyZWF0ZVNlc3Npb24oe1xuICAgICAgICBzZXNzaW9uVG9rZW46IGdlbmVyYXRlU2Vzc2lvblRva2VuKCksXG4gICAgICAgIHVzZXJJZDogdXNlckJ5QWNjb3VudC5pZCxcbiAgICAgICAgZXhwaXJlczogKDAsIF91dGlscy5mcm9tRGF0ZSkob3B0aW9ucy5zZXNzaW9uLm1heEFnZSlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2Vzc2lvbixcbiAgICAgICAgdXNlcjogdXNlckJ5QWNjb3VudCxcbiAgICAgICAgaXNOZXdVc2VyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2V2ZW50cyRjcmVhdGVVc2VyMiwgX2V2ZW50cyRsaW5rQWNjb3VudDI7XG5cbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHZhciBfZXZlbnRzJGxpbmtBY2NvdW50O1xuXG4gICAgICAgIGF3YWl0IGxpbmtBY2NvdW50KHsgLi4uYWNjb3VudCxcbiAgICAgICAgICB1c2VySWQ6IHVzZXIuaWRcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0ICgoX2V2ZW50cyRsaW5rQWNjb3VudCA9IGV2ZW50cy5saW5rQWNjb3VudCkgPT09IG51bGwgfHwgX2V2ZW50cyRsaW5rQWNjb3VudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50cyRsaW5rQWNjb3VudC5jYWxsKGV2ZW50cywge1xuICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgYWNjb3VudFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2Vzc2lvbixcbiAgICAgICAgICB1c2VyLFxuICAgICAgICAgIGlzTmV3VXNlclxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1c2VyQnlFbWFpbCA9IHByb2ZpbGUuZW1haWwgPyBhd2FpdCBnZXRVc2VyQnlFbWFpbChwcm9maWxlLmVtYWlsKSA6IG51bGw7XG5cbiAgICAgIGlmICh1c2VyQnlFbWFpbCkge1xuICAgICAgICB0aHJvdyBuZXcgX2Vycm9ycy5BY2NvdW50Tm90TGlua2VkRXJyb3IoXCJBbm90aGVyIGFjY291bnQgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGUgc2FtZSBlLW1haWwgYWRkcmVzc1wiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3VXNlciA9IHsgLi4ucHJvZmlsZSxcbiAgICAgICAgZW1haWxWZXJpZmllZDogbnVsbFxuICAgICAgfTtcbiAgICAgIGRlbGV0ZSBuZXdVc2VyLmlkO1xuICAgICAgdXNlciA9IGF3YWl0IGNyZWF0ZVVzZXIobmV3VXNlcik7XG4gICAgICBhd2FpdCAoKF9ldmVudHMkY3JlYXRlVXNlcjIgPSBldmVudHMuY3JlYXRlVXNlcikgPT09IG51bGwgfHwgX2V2ZW50cyRjcmVhdGVVc2VyMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50cyRjcmVhdGVVc2VyMi5jYWxsKGV2ZW50cywge1xuICAgICAgICB1c2VyXG4gICAgICB9KSk7XG4gICAgICBhd2FpdCBsaW5rQWNjb3VudCh7IC4uLmFjY291bnQsXG4gICAgICAgIHVzZXJJZDogdXNlci5pZFxuICAgICAgfSk7XG4gICAgICBhd2FpdCAoKF9ldmVudHMkbGlua0FjY291bnQyID0gZXZlbnRzLmxpbmtBY2NvdW50KSA9PT0gbnVsbCB8fCBfZXZlbnRzJGxpbmtBY2NvdW50MiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50cyRsaW5rQWNjb3VudDIuY2FsbChldmVudHMsIHtcbiAgICAgICAgdXNlcixcbiAgICAgICAgYWNjb3VudFxuICAgICAgfSkpO1xuICAgICAgc2Vzc2lvbiA9IHVzZUp3dFNlc3Npb24gPyB7fSA6IGF3YWl0IGNyZWF0ZVNlc3Npb24oe1xuICAgICAgICBzZXNzaW9uVG9rZW46IGdlbmVyYXRlU2Vzc2lvblRva2VuKCksXG4gICAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgICAgZXhwaXJlczogKDAsIF91dGlscy5mcm9tRGF0ZSkob3B0aW9ucy5zZXNzaW9uLm1heEFnZSlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2Vzc2lvbixcbiAgICAgICAgdXNlcixcbiAgICAgICAgaXNOZXdVc2VyOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNlc3Npb25Ub2tlbigpIHtcbiAgdmFyIF9yYW5kb21VVUlEO1xuXG4gIHJldHVybiAoX3JhbmRvbVVVSUQgPSBfY3J5cHRvLnJhbmRvbVVVSUQgPT09IG51bGwgfHwgX2NyeXB0by5yYW5kb21VVUlEID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoMCwgX2NyeXB0by5yYW5kb21VVUlEKSgpKSAhPT0gbnVsbCAmJiBfcmFuZG9tVVVJRCAhPT0gdm9pZCAwID8gX3JhbmRvbVVVSUQgOiAoMCwgX2NyeXB0by5yYW5kb21CeXRlcykoMzIpLnRvU3RyaW5nKFwiaGV4XCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FsbGJhY2tVcmxIYW5kbGVyO1xuXG52YXIgY29va2llID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2xpYi9jb29raWVcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5hc3luYyBmdW5jdGlvbiBjYWxsYmFja1VybEhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5XG4gIH0gPSByZXE7XG4gIGNvbnN0IHtcbiAgICBib2R5XG4gIH0gPSByZXE7XG4gIGNvbnN0IHtcbiAgICBjb29raWVzLFxuICAgIGJhc2VVcmwsXG4gICAgY2FsbGJhY2tzXG4gIH0gPSByZXEub3B0aW9ucztcbiAgbGV0IGNhbGxiYWNrVXJsID0gYmFzZVVybDtcbiAgY29uc3QgY2FsbGJhY2tVcmxQYXJhbVZhbHVlID0gYm9keS5jYWxsYmFja1VybCB8fCBxdWVyeS5jYWxsYmFja1VybCB8fCBudWxsO1xuICBjb25zdCBjYWxsYmFja1VybENvb2tpZVZhbHVlID0gcmVxLmNvb2tpZXNbY29va2llcy5jYWxsYmFja1VybC5uYW1lXSB8fCBudWxsO1xuXG4gIGlmIChjYWxsYmFja1VybFBhcmFtVmFsdWUpIHtcbiAgICBjYWxsYmFja1VybCA9IGF3YWl0IGNhbGxiYWNrcy5yZWRpcmVjdCh7XG4gICAgICB1cmw6IGNhbGxiYWNrVXJsUGFyYW1WYWx1ZSxcbiAgICAgIGJhc2VVcmxcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChjYWxsYmFja1VybENvb2tpZVZhbHVlKSB7XG4gICAgY2FsbGJhY2tVcmwgPSBhd2FpdCBjYWxsYmFja3MucmVkaXJlY3Qoe1xuICAgICAgdXJsOiBjYWxsYmFja1VybENvb2tpZVZhbHVlLFxuICAgICAgYmFzZVVybFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNhbGxiYWNrVXJsICYmIGNhbGxiYWNrVXJsICE9PSBjYWxsYmFja1VybENvb2tpZVZhbHVlKSB7XG4gICAgY29va2llLnNldChyZXMsIGNvb2tpZXMuY2FsbGJhY2tVcmwubmFtZSwgY2FsbGJhY2tVcmwsIGNvb2tpZXMuY2FsbGJhY2tVcmwub3B0aW9ucyk7XG4gIH1cblxuICByZXEub3B0aW9ucy5jYWxsYmFja1VybCA9IGNhbGxiYWNrVXJsO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zZXQgPSBzZXQ7XG5leHBvcnRzLmRlZmF1bHRDb29raWVzID0gZGVmYXVsdENvb2tpZXM7XG5cbmZ1bmN0aW9uIHNldChyZXMsIG5hbWUsIHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qgc3RyaW5nVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgPyBcImo6XCIgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xuXG4gIGlmIChcIm1heEFnZVwiIGluIG9wdGlvbnMpIHtcbiAgICB2YXIgX29wdGlvbnMkbWF4QWdlLCBfb3B0aW9ucyRtYXhBZ2UyO1xuXG4gICAgb3B0aW9ucy5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArICgoX29wdGlvbnMkbWF4QWdlID0gb3B0aW9ucy5tYXhBZ2UpICE9PSBudWxsICYmIF9vcHRpb25zJG1heEFnZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbWF4QWdlIDogMCkpO1xuICAgIG9wdGlvbnMubWF4QWdlID0gKChfb3B0aW9ucyRtYXhBZ2UyID0gb3B0aW9ucy5tYXhBZ2UpICE9PSBudWxsICYmIF9vcHRpb25zJG1heEFnZTIgIT09IHZvaWQgMCA/IF9vcHRpb25zJG1heEFnZTIgOiAwKSAvIDEwMDA7XG4gIH1cblxuICBsZXQgc2V0Q29va2llSGVhZGVyID0gcmVzLmdldEhlYWRlcihcIlNldC1Db29raWVcIikgfHwgW107XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KHNldENvb2tpZUhlYWRlcikpIHtcbiAgICBzZXRDb29raWVIZWFkZXIgPSBbc2V0Q29va2llSGVhZGVyXTtcbiAgfVxuXG4gIHNldENvb2tpZUhlYWRlci5wdXNoKF9zZXJpYWxpemUobmFtZSwgU3RyaW5nKHN0cmluZ1ZhbHVlKSwgb3B0aW9ucykpO1xuICByZXMuc2V0SGVhZGVyKFwiU2V0LUNvb2tpZVwiLCBzZXRDb29raWVIZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBfc2VyaWFsaXplKG5hbWUsIHZhbCwgb3B0aW9ucykge1xuICBjb25zdCBmaWVsZENvbnRlbnRSZWdFeHAgPSAvXltcXHUwMDA5XFx1MDAyMC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXSskLztcbiAgY29uc3Qgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgZW5jID0gb3B0LmVuY29kZSB8fCBlbmNvZGVVUklDb21wb25lbnQ7XG5cbiAgaWYgKHR5cGVvZiBlbmMgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJvcHRpb24gZW5jb2RlIGlzIGludmFsaWRcIik7XG4gIH1cblxuICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG5hbWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImFyZ3VtZW50IG5hbWUgaXMgaW52YWxpZFwiKTtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlID0gZW5jKHZhbCk7XG5cbiAgaWYgKHZhbHVlICYmICFmaWVsZENvbnRlbnRSZWdFeHAudGVzdCh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXJndW1lbnQgdmFsIGlzIGludmFsaWRcIik7XG4gIH1cblxuICBsZXQgc3RyID0gYCR7bmFtZX09JHt2YWx1ZX1gO1xuXG4gIGlmIChvcHQubWF4QWdlICE9IG51bGwpIHtcbiAgICBjb25zdCBtYXhBZ2UgPSBvcHQubWF4QWdlIC0gMDtcblxuICAgIGlmIChpc05hTihtYXhBZ2UpIHx8ICFpc0Zpbml0ZShtYXhBZ2UpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwib3B0aW9uIG1heEFnZSBpcyBpbnZhbGlkXCIpO1xuICAgIH1cblxuICAgIHN0ciArPSBgOyBNYXgtQWdlPSR7TWF0aC5mbG9vcihtYXhBZ2UpfWA7XG4gIH1cblxuICBpZiAob3B0LmRvbWFpbikge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LmRvbWFpbikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJvcHRpb24gZG9tYWluIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgc3RyICs9IGA7IERvbWFpbj0ke29wdC5kb21haW59YDtcbiAgfVxuXG4gIGlmIChvcHQucGF0aCkge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LnBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwib3B0aW9uIHBhdGggaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gYDsgUGF0aD0ke29wdC5wYXRofWA7XG4gIH0gZWxzZSB7XG4gICAgc3RyICs9IFwiOyBQYXRoPS9cIjtcbiAgfVxuXG4gIGlmIChvcHQuZXhwaXJlcykge1xuICAgIGxldCBleHBpcmVzID0gb3B0LmV4cGlyZXM7XG5cbiAgICBpZiAodHlwZW9mIG9wdC5leHBpcmVzLnRvVVRDU3RyaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGV4cGlyZXMgPSBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXRlRXhwaXJlcyA9IG5ldyBEYXRlKG9wdC5leHBpcmVzKTtcbiAgICAgIGV4cGlyZXMgPSBkYXRlRXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICAgIH1cblxuICAgIHN0ciArPSBgOyBFeHBpcmVzPSR7ZXhwaXJlc31gO1xuICB9XG5cbiAgaWYgKG9wdC5odHRwT25seSkge1xuICAgIHN0ciArPSBcIjsgSHR0cE9ubHlcIjtcbiAgfVxuXG4gIGlmIChvcHQuc2VjdXJlKSB7XG4gICAgc3RyICs9IFwiOyBTZWN1cmVcIjtcbiAgfVxuXG4gIGlmIChvcHQuc2FtZVNpdGUpIHtcbiAgICBjb25zdCBzYW1lU2l0ZSA9IHR5cGVvZiBvcHQuc2FtZVNpdGUgPT09IFwic3RyaW5nXCIgPyBvcHQuc2FtZVNpdGUudG9Mb3dlckNhc2UoKSA6IG9wdC5zYW1lU2l0ZTtcblxuICAgIHN3aXRjaCAoc2FtZVNpdGUpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgc3RyICs9IFwiOyBTYW1lU2l0ZT1TdHJpY3RcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJsYXhcIjpcbiAgICAgICAgc3RyICs9IFwiOyBTYW1lU2l0ZT1MYXhcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJzdHJpY3RcIjpcbiAgICAgICAgc3RyICs9IFwiOyBTYW1lU2l0ZT1TdHJpY3RcIjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgIHN0ciArPSBcIjsgU2FtZVNpdGU9Tm9uZVwiO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm9wdGlvbiBzYW1lU2l0ZSBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb29raWVzKHVzZVNlY3VyZUNvb2tpZXMpIHtcbiAgY29uc3QgY29va2llUHJlZml4ID0gdXNlU2VjdXJlQ29va2llcyA/IFwiX19TZWN1cmUtXCIgOiBcIlwiO1xuICByZXR1cm4ge1xuICAgIHNlc3Npb25Ub2tlbjoge1xuICAgICAgbmFtZTogYCR7Y29va2llUHJlZml4fW5leHQtYXV0aC5zZXNzaW9uLXRva2VuYCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgc2VjdXJlOiB1c2VTZWN1cmVDb29raWVzXG4gICAgICB9XG4gICAgfSxcbiAgICBjYWxsYmFja1VybDoge1xuICAgICAgbmFtZTogYCR7Y29va2llUHJlZml4fW5leHQtYXV0aC5jYWxsYmFjay11cmxgLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIHNlY3VyZTogdXNlU2VjdXJlQ29va2llc1xuICAgICAgfVxuICAgIH0sXG4gICAgY3NyZlRva2VuOiB7XG4gICAgICBuYW1lOiBgJHt1c2VTZWN1cmVDb29raWVzID8gXCJfX0hvc3QtXCIgOiBcIlwifW5leHQtYXV0aC5jc3JmLXRva2VuYCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgc2VjdXJlOiB1c2VTZWN1cmVDb29raWVzXG4gICAgICB9XG4gICAgfSxcbiAgICBwa2NlQ29kZVZlcmlmaWVyOiB7XG4gICAgICBuYW1lOiBgJHtjb29raWVQcmVmaXh9bmV4dC1hdXRoLnBrY2UuY29kZV92ZXJpZmllcmAsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICAgICAgcGF0aDogXCIvXCIsXG4gICAgICAgIHNlY3VyZTogdXNlU2VjdXJlQ29va2llc1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNzcmZUb2tlbkhhbmRsZXI7XG5cbnZhciBfY3J5cHRvID0gcmVxdWlyZShcImNyeXB0b1wiKTtcblxudmFyIGNvb2tpZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2Nvb2tpZVwiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiAobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIGNzcmZUb2tlbkhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3Qge1xuICAgIGNvb2tpZXMsXG4gICAgc2VjcmV0XG4gIH0gPSByZXEub3B0aW9ucztcblxuICBpZiAoY29va2llcy5jc3JmVG9rZW4ubmFtZSBpbiByZXEuY29va2llcykge1xuICAgIGNvbnN0IFtjc3JmVG9rZW4sIGNzcmZUb2tlbkhhc2hdID0gcmVxLmNvb2tpZXNbY29va2llcy5jc3JmVG9rZW4ubmFtZV0uc3BsaXQoXCJ8XCIpO1xuICAgIGNvbnN0IGV4cGVjdGVkQ3NyZlRva2VuSGFzaCA9ICgwLCBfY3J5cHRvLmNyZWF0ZUhhc2gpKFwic2hhMjU2XCIpLnVwZGF0ZShgJHtjc3JmVG9rZW59JHtzZWNyZXR9YCkuZGlnZXN0KFwiaGV4XCIpO1xuXG4gICAgaWYgKGNzcmZUb2tlbkhhc2ggPT09IGV4cGVjdGVkQ3NyZlRva2VuSGFzaCkge1xuICAgICAgY29uc3QgY3NyZlRva2VuVmVyaWZpZWQgPSByZXEubWV0aG9kID09PSBcIlBPU1RcIiAmJiBjc3JmVG9rZW4gPT09IHJlcS5ib2R5LmNzcmZUb2tlbjtcbiAgICAgIHJlcS5vcHRpb25zLmNzcmZUb2tlbiA9IGNzcmZUb2tlbjtcbiAgICAgIHJlcS5vcHRpb25zLmNzcmZUb2tlblZlcmlmaWVkID0gY3NyZlRva2VuVmVyaWZpZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY3NyZlRva2VuID0gKDAsIF9jcnlwdG8ucmFuZG9tQnl0ZXMpKDMyKS50b1N0cmluZyhcImhleFwiKTtcbiAgY29uc3QgY3NyZlRva2VuSGFzaCA9ICgwLCBfY3J5cHRvLmNyZWF0ZUhhc2gpKFwic2hhMjU2XCIpLnVwZGF0ZShgJHtjc3JmVG9rZW59JHtzZWNyZXR9YCkuZGlnZXN0KFwiaGV4XCIpO1xuICBjb25zdCBjc3JmVG9rZW5Db29raWUgPSBgJHtjc3JmVG9rZW59fCR7Y3NyZlRva2VuSGFzaH1gO1xuICBjb29raWUuc2V0KHJlcywgY29va2llcy5jc3JmVG9rZW4ubmFtZSwgY3NyZlRva2VuQ29va2llLCBjb29raWVzLmNzcmZUb2tlbi5vcHRpb25zKTtcbiAgcmVxLm9wdGlvbnMuY3NyZlRva2VuID0gY3NyZlRva2VuO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0Q2FsbGJhY2tzID0gdm9pZCAwO1xuY29uc3QgZGVmYXVsdENhbGxiYWNrcyA9IHtcbiAgc2lnbkluKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIHJlZGlyZWN0KHtcbiAgICB1cmwsXG4gICAgYmFzZVVybFxuICB9KSB7XG4gICAgaWYgKHVybC5zdGFydHNXaXRoKGJhc2VVcmwpKSByZXR1cm4gdXJsO1xuICAgIHJldHVybiBiYXNlVXJsO1xuICB9LFxuXG4gIHNlc3Npb24oe1xuICAgIHNlc3Npb25cbiAgfSkge1xuICAgIHJldHVybiBzZXNzaW9uO1xuICB9LFxuXG4gIGp3dCh7XG4gICAgdG9rZW5cbiAgfSkge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG59O1xuZXhwb3J0cy5kZWZhdWx0Q2FsbGJhY2tzID0gZGVmYXVsdENhbGxiYWNrczsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGVtYWlsO1xuXG52YXIgX2NyeXB0byA9IHJlcXVpcmUoXCJjcnlwdG9cIik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIGVtYWlsKGlkZW50aWZpZXIsIG9wdGlvbnMpIHtcbiAgdmFyIF9hd2FpdCRwcm92aWRlciRnZW5lciwgX3Byb3ZpZGVyJGdlbmVyYXRlVmVyLCBfcHJvdmlkZXIkbWF4QWdlO1xuXG4gIGNvbnN0IHtcbiAgICBiYXNlVXJsLFxuICAgIGJhc2VQYXRoLFxuICAgIGFkYXB0ZXIsXG4gICAgcHJvdmlkZXIsXG4gICAgbG9nZ2VyLFxuICAgIGNhbGxiYWNrVXJsXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCB0b2tlbiA9IChfYXdhaXQkcHJvdmlkZXIkZ2VuZXIgPSBhd2FpdCAoKF9wcm92aWRlciRnZW5lcmF0ZVZlciA9IHByb3ZpZGVyLmdlbmVyYXRlVmVyaWZpY2F0aW9uVG9rZW4pID09PSBudWxsIHx8IF9wcm92aWRlciRnZW5lcmF0ZVZlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Byb3ZpZGVyJGdlbmVyYXRlVmVyLmNhbGwocHJvdmlkZXIpKSkgIT09IG51bGwgJiYgX2F3YWl0JHByb3ZpZGVyJGdlbmVyICE9PSB2b2lkIDAgPyBfYXdhaXQkcHJvdmlkZXIkZ2VuZXIgOiAoMCwgX2NyeXB0by5yYW5kb21CeXRlcykoMzIpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICBjb25zdCBPTkVfREFZX0lOX1NFQ09ORFMgPSA4NjQwMDtcbiAgY29uc3QgZXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAoKF9wcm92aWRlciRtYXhBZ2UgPSBwcm92aWRlci5tYXhBZ2UpICE9PSBudWxsICYmIF9wcm92aWRlciRtYXhBZ2UgIT09IHZvaWQgMCA/IF9wcm92aWRlciRtYXhBZ2UgOiBPTkVfREFZX0lOX1NFQ09ORFMpICogMTAwMCk7XG4gIGF3YWl0IGFkYXB0ZXIuY3JlYXRlVmVyaWZpY2F0aW9uVG9rZW4oe1xuICAgIGlkZW50aWZpZXIsXG4gICAgdG9rZW46ICgwLCBfdXRpbHMuaGFzaFRva2VuKSh0b2tlbiwgb3B0aW9ucyksXG4gICAgZXhwaXJlc1xuICB9KTtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgY2FsbGJhY2tVcmwsXG4gICAgdG9rZW4sXG4gICAgZW1haWw6IGlkZW50aWZpZXJcbiAgfSk7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vY2FsbGJhY2svJHtwcm92aWRlci5pZH0/JHtwYXJhbXN9YDtcblxuICB0cnkge1xuICAgIGF3YWl0IHByb3ZpZGVyLnNlbmRWZXJpZmljYXRpb25SZXF1ZXN0KHtcbiAgICAgIGlkZW50aWZpZXIsXG4gICAgICB0b2tlbixcbiAgICAgIGV4cGlyZXMsXG4gICAgICB1cmwsXG4gICAgICBwcm92aWRlclxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGxvZ2dlci5lcnJvcihcIlNFTkRfVkVSSUZJQ0FUSU9OX0VNQUlMX0VSUk9SXCIsIHtcbiAgICAgIGlkZW50aWZpZXIsXG4gICAgICB1cmwsXG4gICAgICBlcnJvclxuICAgIH0pO1xuICAgIHRocm93IG5ldyBFcnJvcihcIlNFTkRfVkVSSUZJQ0FUSU9OX0VNQUlMX0VSUk9SXCIpO1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBleHRlbmRSZXM7XG5cbmZ1bmN0aW9uIGV4dGVuZFJlcyhyZXEsIHJlcykge1xuICByZXMucmVkaXJlY3QgPSB1cmwgPT4ge1xuICAgIHZhciBfcmVxJGJvZHk7XG5cbiAgICBpZiAoKChfcmVxJGJvZHkgPSByZXEuYm9keSkgPT09IG51bGwgfHwgX3JlcSRib2R5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcmVxJGJvZHkuanNvbikgPT09IFwidHJ1ZVwiKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICB1cmxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoMzAyKS5zZXRIZWFkZXIoXCJMb2NhdGlvblwiLCB1cmwpO1xuICAgIHJldHVybiByZXMuZW5kKCk7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRBdXRob3JpemF0aW9uVXJsO1xuXG52YXIgX2NsaWVudCA9IHJlcXVpcmUoXCIuLi9vYXV0aC9jbGllbnRcIik7XG5cbnZhciBfY2xpZW50TGVnYWN5ID0gcmVxdWlyZShcIi4uL29hdXRoL2NsaWVudC1sZWdhY3lcIik7XG5cbnZhciBfc3RhdGVIYW5kbGVyID0gcmVxdWlyZShcIi4uL29hdXRoL3N0YXRlLWhhbmRsZXJcIik7XG5cbnZhciBfcGtjZUhhbmRsZXIgPSByZXF1aXJlKFwiLi4vb2F1dGgvcGtjZS1oYW5kbGVyXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRBdXRob3JpemF0aW9uVXJsKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHtcbiAgICBsb2dnZXJcbiAgfSA9IHJlcS5vcHRpb25zO1xuXG4gIHRyeSB7XG4gICAgdmFyIF9wcm92aWRlciR2ZXJzaW9uO1xuXG4gICAgY29uc3QgcHJvdmlkZXIgPSByZXEub3B0aW9ucy5wcm92aWRlcjtcbiAgICBsZXQgcGFyYW1zID0ge307XG5cbiAgICBpZiAodHlwZW9mIHByb3ZpZGVyLmF1dGhvcml6YXRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IHBhcnNlZFVybCA9IG5ldyBVUkwocHJvdmlkZXIuYXV0aG9yaXphdGlvbik7XG4gICAgICBjb25zdCBwYXJzZWRQYXJhbXMgPSBPYmplY3QuZnJvbUVudHJpZXMocGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5lbnRyaWVzKCkpO1xuICAgICAgcGFyYW1zID0geyAuLi5wYXJhbXMsXG4gICAgICAgIC4uLnBhcnNlZFBhcmFtc1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9wcm92aWRlciRhdXRob3JpemF0aTtcblxuICAgICAgcGFyYW1zID0geyAuLi5wYXJhbXMsXG4gICAgICAgIC4uLigoX3Byb3ZpZGVyJGF1dGhvcml6YXRpID0gcHJvdmlkZXIuYXV0aG9yaXphdGlvbikgPT09IG51bGwgfHwgX3Byb3ZpZGVyJGF1dGhvcml6YXRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJvdmlkZXIkYXV0aG9yaXphdGkucGFyYW1zKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBwYXJhbXMgPSB7IC4uLnBhcmFtcyxcbiAgICAgIC4uLnJlcS5xdWVyeVxuICAgIH07XG5cbiAgICBpZiAoKF9wcm92aWRlciR2ZXJzaW9uID0gcHJvdmlkZXIudmVyc2lvbikgIT09IG51bGwgJiYgX3Byb3ZpZGVyJHZlcnNpb24gIT09IHZvaWQgMCAmJiBfcHJvdmlkZXIkdmVyc2lvbi5zdGFydHNXaXRoKFwiMS5cIikpIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9ICgwLCBfY2xpZW50TGVnYWN5Lm9BdXRoMUNsaWVudCkocmVxLm9wdGlvbnMpO1xuICAgICAgY29uc3QgdG9rZW5zID0gYXdhaXQgY2xpZW50LmdldE9BdXRoUmVxdWVzdFRva2VuKHBhcmFtcyk7XG4gICAgICBjb25zdCB1cmwgPSBgJHtwcm92aWRlci5hdXRob3JpemF0aW9ufT8ke25ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICBvYXV0aF90b2tlbjogdG9rZW5zLm9hdXRoX3Rva2VuLFxuICAgICAgICBvYXV0aF90b2tlbl9zZWNyZXQ6IHRva2Vucy5vYXV0aF90b2tlbl9zZWNyZXQsXG4gICAgICAgIC4uLnRva2Vucy5wYXJhbXNcbiAgICAgIH0pfWA7XG4gICAgICBsb2dnZXIuZGVidWcoXCJHRVRfQVVUSE9SSVpBVElPTl9VUkxcIiwge1xuICAgICAgICB1cmxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCAoMCwgX2NsaWVudC5vcGVuaWRDbGllbnQpKHJlcS5vcHRpb25zKTtcbiAgICBjb25zdCBwa2NlID0gYXdhaXQgKDAsIF9wa2NlSGFuZGxlci5jcmVhdGVQS0NFKShyZXEsIHJlcyk7XG4gICAgY29uc3QgdXJsID0gY2xpZW50LmF1dGhvcml6YXRpb25VcmwoeyAuLi5wYXJhbXMsXG4gICAgICAuLi5wa2NlLFxuICAgICAgc3RhdGU6ICgwLCBfc3RhdGVIYW5kbGVyLmNyZWF0ZVN0YXRlKShyZXEpXG4gICAgfSk7XG4gICAgbG9nZ2VyLmRlYnVnKFwiR0VUX0FVVEhPUklaQVRJT05fVVJMXCIsIHtcbiAgICAgIHVybFxuICAgIH0pO1xuICAgIHJldHVybiB1cmw7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yKFwiR0VUX0FVVEhPUklaQVRJT05fVVJMX0VSUk9SXCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gb0F1dGhDYWxsYmFjaztcblxudmFyIF9jbGllbnQgPSByZXF1aXJlKFwiLi9jbGllbnRcIik7XG5cbnZhciBfY2xpZW50TGVnYWN5ID0gcmVxdWlyZShcIi4vY2xpZW50LWxlZ2FjeVwiKTtcblxudmFyIF9zdGF0ZUhhbmRsZXIgPSByZXF1aXJlKFwiLi9zdGF0ZS1oYW5kbGVyXCIpO1xuXG52YXIgX3BrY2VIYW5kbGVyID0gcmVxdWlyZShcIi4vcGtjZS1oYW5kbGVyXCIpO1xuXG52YXIgX2Vycm9ycyA9IHJlcXVpcmUoXCIuLi8uLi9lcnJvcnNcIik7XG5cbnZhciBfb3BlbmlkQ2xpZW50ID0gcmVxdWlyZShcIm9wZW5pZC1jbGllbnRcIik7XG5cbmFzeW5jIGZ1bmN0aW9uIG9BdXRoQ2FsbGJhY2socmVxLCByZXMpIHtcbiAgdmFyIF9yZXEkYm9keSRlcnJvciwgX3Byb3ZpZGVyJHZlcnNpb247XG5cbiAgY29uc3Qge1xuICAgIGxvZ2dlclxuICB9ID0gcmVxLm9wdGlvbnM7XG4gIGNvbnN0IHByb3ZpZGVyID0gcmVxLm9wdGlvbnMucHJvdmlkZXI7XG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IChfcmVxJGJvZHkkZXJyb3IgPSByZXEuYm9keS5lcnJvcikgIT09IG51bGwgJiYgX3JlcSRib2R5JGVycm9yICE9PSB2b2lkIDAgPyBfcmVxJGJvZHkkZXJyb3IgOiByZXEucXVlcnkuZXJyb3I7XG5cbiAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgbG9nZ2VyLmVycm9yKFwiT0FVVEhfQ0FMTEJBQ0tfSEFORExFUl9FUlJPUlwiLCB7XG4gICAgICBlcnJvcixcbiAgICAgIGJvZHk6IHJlcS5ib2R5LFxuICAgICAgcHJvdmlkZXJJZDogcHJvdmlkZXIuaWRcbiAgICB9KTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIGlmICgoX3Byb3ZpZGVyJHZlcnNpb24gPSBwcm92aWRlci52ZXJzaW9uKSAhPT0gbnVsbCAmJiBfcHJvdmlkZXIkdmVyc2lvbiAhPT0gdm9pZCAwICYmIF9wcm92aWRlciR2ZXJzaW9uLnN0YXJ0c1dpdGgoXCIxLlwiKSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCAoMCwgX2NsaWVudExlZ2FjeS5vQXV0aDFDbGllbnQpKHJlcS5vcHRpb25zKTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgb2F1dGhfdG9rZW4sXG4gICAgICAgIG9hdXRoX3ZlcmlmaWVyXG4gICAgICB9ID0gcmVxLnF1ZXJ5O1xuICAgICAgY29uc3QgdG9rZW5zID0gYXdhaXQgY2xpZW50LmdldE9BdXRoQWNjZXNzVG9rZW4ob2F1dGhfdG9rZW4sIG51bGwsIG9hdXRoX3ZlcmlmaWVyKTtcbiAgICAgIGxldCBwcm9maWxlID0gYXdhaXQgY2xpZW50LmdldChwcm92aWRlci5wcm9maWxlVXJsLCB0b2tlbnMub2F1dGhfdG9rZW4sIHRva2Vucy5vYXV0aF90b2tlbl9zZWNyZXQpO1xuXG4gICAgICBpZiAodHlwZW9mIHByb2ZpbGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcHJvZmlsZSA9IEpTT04ucGFyc2UocHJvZmlsZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhd2FpdCBnZXRQcm9maWxlKHtcbiAgICAgICAgcHJvZmlsZSxcbiAgICAgICAgdG9rZW5zLFxuICAgICAgICBwcm92aWRlcixcbiAgICAgICAgbG9nZ2VyXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgbG9nZ2VyLmVycm9yKFwiT0FVVEhfVjFfR0VUX0FDQ0VTU19UT0tFTl9FUlJPUlwiLCBlcnJvcik7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIHZhciBfcHJvdmlkZXIkdG9rZW4sIF9wcm92aWRlciR0b2tlbjIsIF9wcm92aWRlciR1c2VyaW5mbywgX3JlZiwgX3JlcSRib2R5JHVzZXI7XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCAoMCwgX2NsaWVudC5vcGVuaWRDbGllbnQpKHJlcS5vcHRpb25zKTtcbiAgICBsZXQgdG9rZW5zO1xuICAgIGNvbnN0IGNoZWNrcyA9IHtcbiAgICAgIGNvZGVfdmVyaWZpZXI6IGF3YWl0ICgwLCBfcGtjZUhhbmRsZXIudXNlUEtDRUNvZGVWZXJpZmllcikocmVxLCByZXMpLFxuICAgICAgc3RhdGU6ICgwLCBfc3RhdGVIYW5kbGVyLmdldFN0YXRlKShyZXEpXG4gICAgfTtcbiAgICBjb25zdCBwYXJhbXMgPSB7IC4uLmNsaWVudC5jYWxsYmFja1BhcmFtcyhyZXEpLFxuICAgICAgLi4uKChfcHJvdmlkZXIkdG9rZW4gPSBwcm92aWRlci50b2tlbikgPT09IG51bGwgfHwgX3Byb3ZpZGVyJHRva2VuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJvdmlkZXIkdG9rZW4ucGFyYW1zKVxuICAgIH07XG5cbiAgICBpZiAoKF9wcm92aWRlciR0b2tlbjIgPSBwcm92aWRlci50b2tlbikgIT09IG51bGwgJiYgX3Byb3ZpZGVyJHRva2VuMiAhPT0gdm9pZCAwICYmIF9wcm92aWRlciR0b2tlbjIucmVxdWVzdCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcm92aWRlci50b2tlbi5yZXF1ZXN0KHtcbiAgICAgICAgcHJvdmlkZXIsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgY2hlY2tzLFxuICAgICAgICBjbGllbnRcbiAgICAgIH0pO1xuICAgICAgdG9rZW5zID0gbmV3IF9vcGVuaWRDbGllbnQuVG9rZW5TZXQocmVzcG9uc2UudG9rZW5zKTtcbiAgICB9IGVsc2UgaWYgKHByb3ZpZGVyLmlkVG9rZW4pIHtcbiAgICAgIHRva2VucyA9IGF3YWl0IGNsaWVudC5jYWxsYmFjayhwcm92aWRlci5jYWxsYmFja1VybCwgcGFyYW1zLCBjaGVja3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2tlbnMgPSBhd2FpdCBjbGllbnQub2F1dGhDYWxsYmFjayhwcm92aWRlci5jYWxsYmFja1VybCwgcGFyYW1zLCBjaGVja3MpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHRva2Vucy5zY29wZSkpIHtcbiAgICAgIHRva2Vucy5zY29wZSA9IHRva2Vucy5zY29wZS5qb2luKFwiIFwiKTtcbiAgICB9XG5cbiAgICBsZXQgcHJvZmlsZTtcblxuICAgIGlmICgoX3Byb3ZpZGVyJHVzZXJpbmZvID0gcHJvdmlkZXIudXNlcmluZm8pICE9PSBudWxsICYmIF9wcm92aWRlciR1c2VyaW5mbyAhPT0gdm9pZCAwICYmIF9wcm92aWRlciR1c2VyaW5mby5yZXF1ZXN0KSB7XG4gICAgICBwcm9maWxlID0gYXdhaXQgcHJvdmlkZXIudXNlcmluZm8ucmVxdWVzdCh7XG4gICAgICAgIHByb3ZpZGVyLFxuICAgICAgICB0b2tlbnMsXG4gICAgICAgIGNsaWVudFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwcm92aWRlci5pZFRva2VuKSB7XG4gICAgICBwcm9maWxlID0gdG9rZW5zLmNsYWltcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3Byb3ZpZGVyJHVzZXJpbmZvMjtcblxuICAgICAgcHJvZmlsZSA9IGF3YWl0IGNsaWVudC51c2VyaW5mbyh0b2tlbnMsIHtcbiAgICAgICAgcGFyYW1zOiAoX3Byb3ZpZGVyJHVzZXJpbmZvMiA9IHByb3ZpZGVyLnVzZXJpbmZvKSA9PT0gbnVsbCB8fCBfcHJvdmlkZXIkdXNlcmluZm8yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcHJvdmlkZXIkdXNlcmluZm8yLnBhcmFtc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvZmlsZS51c2VyID0gSlNPTi5wYXJzZSgoX3JlZiA9IChfcmVxJGJvZHkkdXNlciA9IHJlcS5ib2R5LnVzZXIpICE9PSBudWxsICYmIF9yZXEkYm9keSR1c2VyICE9PSB2b2lkIDAgPyBfcmVxJGJvZHkkdXNlciA6IHJlcS5xdWVyeS51c2VyKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogbnVsbCk7XG4gICAgcmV0dXJuIGF3YWl0IGdldFByb2ZpbGUoe1xuICAgICAgcHJvZmlsZSxcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgdG9rZW5zLFxuICAgICAgbG9nZ2VyXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yKFwiT0FVVEhfQ0FMTEJBQ0tfRVJST1JcIiwge1xuICAgICAgZXJyb3IsXG4gICAgICBwcm92aWRlcklkOiBwcm92aWRlci5pZFxuICAgIH0pO1xuICAgIHRocm93IG5ldyBfZXJyb3JzLk9BdXRoQ2FsbGJhY2tFcnJvcihlcnJvcik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmlsZSh7XG4gIHByb2ZpbGU6IE9BdXRoUHJvZmlsZSxcbiAgdG9rZW5zLFxuICBwcm92aWRlcixcbiAgbG9nZ2VyXG59KSB7XG4gIHRyeSB7XG4gICAgdmFyIF9wcm9maWxlJGVtYWlsO1xuXG4gICAgbG9nZ2VyLmRlYnVnKFwiUFJPRklMRV9EQVRBXCIsIHtcbiAgICAgIE9BdXRoUHJvZmlsZVxuICAgIH0pO1xuICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBwcm92aWRlci5wcm9maWxlKE9BdXRoUHJvZmlsZSwgdG9rZW5zKTtcbiAgICBwcm9maWxlLmVtYWlsID0gKF9wcm9maWxlJGVtYWlsID0gcHJvZmlsZS5lbWFpbCkgPT09IG51bGwgfHwgX3Byb2ZpbGUkZW1haWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9wcm9maWxlJGVtYWlsLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2ZpbGUsXG4gICAgICBhY2NvdW50OiB7XG4gICAgICAgIHByb3ZpZGVyOiBwcm92aWRlci5pZCxcbiAgICAgICAgdHlwZTogcHJvdmlkZXIudHlwZSxcbiAgICAgICAgcHJvdmlkZXJBY2NvdW50SWQ6IHByb2ZpbGUuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgLi4udG9rZW5zXG4gICAgICB9LFxuICAgICAgT0F1dGhQcm9maWxlXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IoXCJPQVVUSF9QQVJTRV9QUk9GSUxFX0VSUk9SXCIsIHtcbiAgICAgIGVycm9yLFxuICAgICAgT0F1dGhQcm9maWxlXG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2ZpbGU6IG51bGwsXG4gICAgICBhY2NvdW50OiBudWxsLFxuICAgICAgT0F1dGhQcm9maWxlXG4gICAgfTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5vQXV0aDFDbGllbnQgPSBvQXV0aDFDbGllbnQ7XG5cbnZhciBfb2F1dGggPSByZXF1aXJlKFwib2F1dGhcIik7XG5cbmZ1bmN0aW9uIG9BdXRoMUNsaWVudChvcHRpb25zKSB7XG4gIGNvbnN0IHByb3ZpZGVyID0gb3B0aW9ucy5wcm92aWRlcjtcbiAgY29uc3Qgb2F1dGgxQ2xpZW50ID0gbmV3IF9vYXV0aC5PQXV0aChwcm92aWRlci5yZXF1ZXN0VG9rZW5VcmwsIHByb3ZpZGVyLmFjY2Vzc1Rva2VuVXJsLCBwcm92aWRlci5jbGllbnRJZCwgcHJvdmlkZXIuY2xpZW50U2VjcmV0LCBwcm92aWRlci52ZXJzaW9uIHx8IFwiMS4wXCIsIHByb3ZpZGVyLmNhbGxiYWNrVXJsLCBwcm92aWRlci5lbmNvZGluZyB8fCBcIkhNQUMtU0hBMVwiKTtcbiAgY29uc3Qgb3JpZ2luYWxHZXQgPSBvYXV0aDFDbGllbnQuZ2V0LmJpbmQob2F1dGgxQ2xpZW50KTtcblxuICBvYXV0aDFDbGllbnQuZ2V0ID0gKC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgb3JpZ2luYWxHZXQoLi4uYXJncywgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvcmlnaW5hbEdldE9BdXRoMUFjY2Vzc1Rva2VuID0gb2F1dGgxQ2xpZW50LmdldE9BdXRoQWNjZXNzVG9rZW4uYmluZChvYXV0aDFDbGllbnQpO1xuXG4gIG9hdXRoMUNsaWVudC5nZXRPQXV0aEFjY2Vzc1Rva2VuID0gKC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgb3JpZ2luYWxHZXRPQXV0aDFBY2Nlc3NUb2tlbiguLi5hcmdzLCAoZXJyb3IsIG9hdXRoX3Rva2VuLCBvYXV0aF90b2tlbl9zZWNyZXQpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBvYXV0aF90b2tlbixcbiAgICAgICAgICBvYXV0aF90b2tlbl9zZWNyZXRcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvcmlnaW5hbEdldE9BdXRoUmVxdWVzdFRva2VuID0gb2F1dGgxQ2xpZW50LmdldE9BdXRoUmVxdWVzdFRva2VuLmJpbmQob2F1dGgxQ2xpZW50KTtcblxuICBvYXV0aDFDbGllbnQuZ2V0T0F1dGhSZXF1ZXN0VG9rZW4gPSAocGFyYW1zID0ge30pID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgb3JpZ2luYWxHZXRPQXV0aFJlcXVlc3RUb2tlbihwYXJhbXMsIChlcnJvciwgb2F1dGhfdG9rZW4sIG9hdXRoX3Rva2VuX3NlY3JldCwgcGFyYW1zKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgb2F1dGhfdG9rZW4sXG4gICAgICAgICAgb2F1dGhfdG9rZW5fc2VjcmV0LFxuICAgICAgICAgIHBhcmFtc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBvYXV0aDFDbGllbnQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm9wZW5pZENsaWVudCA9IG9wZW5pZENsaWVudDtcblxudmFyIF9vcGVuaWRDbGllbnQgPSByZXF1aXJlKFwib3BlbmlkLWNsaWVudFwiKTtcblxuYXN5bmMgZnVuY3Rpb24gb3BlbmlkQ2xpZW50KG9wdGlvbnMpIHtcbiAgY29uc3QgcHJvdmlkZXIgPSBvcHRpb25zLnByb3ZpZGVyO1xuICBsZXQgaXNzdWVyO1xuXG4gIGlmIChwcm92aWRlci53ZWxsS25vd24pIHtcbiAgICBpc3N1ZXIgPSBhd2FpdCBfb3BlbmlkQ2xpZW50Lklzc3Vlci5kaXNjb3Zlcihwcm92aWRlci53ZWxsS25vd24pO1xuICB9IGVsc2Uge1xuICAgIHZhciBfcHJvdmlkZXIkYXV0aG9yaXphdGksIF9wcm92aWRlciR0b2tlbiR1cmwsIF9wcm92aWRlciR1c2VyaW5mbyR1cjtcblxuICAgIGlzc3VlciA9IG5ldyBfb3BlbmlkQ2xpZW50Lklzc3Vlcih7XG4gICAgICBpc3N1ZXI6IHByb3ZpZGVyLmlzc3VlcixcbiAgICAgIGF1dGhvcml6YXRpb25fZW5kcG9pbnQ6IChfcHJvdmlkZXIkYXV0aG9yaXphdGkgPSBwcm92aWRlci5hdXRob3JpemF0aW9uLnVybCkgIT09IG51bGwgJiYgX3Byb3ZpZGVyJGF1dGhvcml6YXRpICE9PSB2b2lkIDAgPyBfcHJvdmlkZXIkYXV0aG9yaXphdGkgOiBwcm92aWRlci5hdXRob3JpemF0aW9uLFxuICAgICAgdG9rZW5fZW5kcG9pbnQ6IChfcHJvdmlkZXIkdG9rZW4kdXJsID0gcHJvdmlkZXIudG9rZW4udXJsKSAhPT0gbnVsbCAmJiBfcHJvdmlkZXIkdG9rZW4kdXJsICE9PSB2b2lkIDAgPyBfcHJvdmlkZXIkdG9rZW4kdXJsIDogcHJvdmlkZXIudG9rZW4sXG4gICAgICB1c2VyaW5mb19lbmRwb2ludDogKF9wcm92aWRlciR1c2VyaW5mbyR1ciA9IHByb3ZpZGVyLnVzZXJpbmZvLnVybCkgIT09IG51bGwgJiYgX3Byb3ZpZGVyJHVzZXJpbmZvJHVyICE9PSB2b2lkIDAgPyBfcHJvdmlkZXIkdXNlcmluZm8kdXIgOiBwcm92aWRlci51c2VyaW5mb1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY2xpZW50ID0gbmV3IGlzc3Vlci5DbGllbnQoe1xuICAgIGNsaWVudF9pZDogcHJvdmlkZXIuY2xpZW50SWQsXG4gICAgY2xpZW50X3NlY3JldDogcHJvdmlkZXIuY2xpZW50U2VjcmV0LFxuICAgIHJlZGlyZWN0X3VyaXM6IFtwcm92aWRlci5jYWxsYmFja1VybF1cbiAgfSk7XG4gIHJldHVybiBjbGllbnQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZVBLQ0UgPSBjcmVhdGVQS0NFO1xuZXhwb3J0cy51c2VQS0NFQ29kZVZlcmlmaWVyID0gdXNlUEtDRUNvZGVWZXJpZmllcjtcblxudmFyIGNvb2tpZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9jb29raWVcIikpO1xuXG52YXIgand0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uLy4uLy4uL2p3dFwiKSk7XG5cbnZhciBfb3BlbmlkQ2xpZW50ID0gcmVxdWlyZShcIm9wZW5pZC1jbGllbnRcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiAobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmNvbnN0IFBLQ0VfTEVOR1RIID0gNjQ7XG5jb25zdCBQS0NFX0NPREVfQ0hBTExFTkdFX01FVEhPRCA9IFwiUzI1NlwiO1xuY29uc3QgUEtDRV9NQVhfQUdFID0gNjAgKiAxNTtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlUEtDRShyZXEsIHJlcykge1xuICB2YXIgX3Byb3ZpZGVyJGNoZWNrcztcblxuICBjb25zdCB7XG4gICAgY29va2llcyxcbiAgICBsb2dnZXJcbiAgfSA9IHJlcS5vcHRpb25zO1xuICBjb25zdCBwcm92aWRlciA9IHJlcS5vcHRpb25zLnByb3ZpZGVyO1xuXG4gIGlmICghKChfcHJvdmlkZXIkY2hlY2tzID0gcHJvdmlkZXIuY2hlY2tzKSAhPT0gbnVsbCAmJiBfcHJvdmlkZXIkY2hlY2tzICE9PSB2b2lkIDAgJiYgX3Byb3ZpZGVyJGNoZWNrcy5pbmNsdWRlcyhcInBrY2VcIikpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY29kZVZlcmlmaWVyID0gX29wZW5pZENsaWVudC5nZW5lcmF0b3JzLmNvZGVWZXJpZmllcihQS0NFX0xFTkdUSCk7XG5cbiAgY29uc3QgY29kZUNoYWxsZW5nZSA9IF9vcGVuaWRDbGllbnQuZ2VuZXJhdG9ycy5jb2RlQ2hhbGxlbmdlKGNvZGVWZXJpZmllcik7XG5cbiAgY29uc3QgZW5jcnlwdGVkQ29kZVZlcmlmaWVyID0gYXdhaXQgand0LmVuY29kZSh7XG4gICAgbWF4QWdlOiBQS0NFX01BWF9BR0UsXG4gICAgLi4ucmVxLm9wdGlvbnMuand0LFxuICAgIHRva2VuOiB7XG4gICAgICBjb2RlX3ZlcmlmaWVyOiBjb2RlVmVyaWZpZXJcbiAgICB9LFxuICAgIGVuY3J5cHRpb246IHRydWVcbiAgfSk7XG4gIGNvbnN0IGNvb2tpZUV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuICBjb29raWVFeHBpcmVzLnNldFRpbWUoY29va2llRXhwaXJlcy5nZXRUaW1lKCkgKyBQS0NFX01BWF9BR0UgKiAxMDAwKTtcbiAgY29va2llLnNldChyZXMsIGNvb2tpZXMucGtjZUNvZGVWZXJpZmllci5uYW1lLCBlbmNyeXB0ZWRDb2RlVmVyaWZpZXIsIHtcbiAgICBleHBpcmVzOiBjb29raWVFeHBpcmVzLnRvSVNPU3RyaW5nKCksXG4gICAgLi4uY29va2llcy5wa2NlQ29kZVZlcmlmaWVyLm9wdGlvbnNcbiAgfSk7XG4gIGxvZ2dlci5kZWJ1ZyhcIkNSRUFURV9QS0NFX0NIQUxMRU5HRV9WRVJJRklFUlwiLCB7XG4gICAgcGtjZToge1xuICAgICAgY29kZV9jaGFsbGVuZ2U6IGNvZGVDaGFsbGVuZ2UsXG4gICAgICBjb2RlX3ZlcmlmaWVyOiBjb2RlVmVyaWZpZXJcbiAgICB9LFxuICAgIHBrY2VMZW5ndGg6IFBLQ0VfTEVOR1RILFxuICAgIG1ldGhvZDogUEtDRV9DT0RFX0NIQUxMRU5HRV9NRVRIT0RcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY29kZV9jaGFsbGVuZ2U6IGNvZGVDaGFsbGVuZ2UsXG4gICAgY29kZV9jaGFsbGVuZ2VfbWV0aG9kOiBQS0NFX0NPREVfQ0hBTExFTkdFX01FVEhPRFxuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiB1c2VQS0NFQ29kZVZlcmlmaWVyKHJlcSwgcmVzKSB7XG4gIHZhciBfcGtjZSRjb2RlX3ZlcmlmaWVyO1xuXG4gIGNvbnN0IHByb3ZpZGVyID0gcmVxLm9wdGlvbnMucHJvdmlkZXI7XG4gIGNvbnN0IHtcbiAgICBjb29raWVzXG4gIH0gPSByZXEub3B0aW9ucztcblxuICBpZiAoIShwcm92aWRlciAhPT0gbnVsbCAmJiBwcm92aWRlciAhPT0gdm9pZCAwICYmIHByb3ZpZGVyLmNoZWNrcy5pbmNsdWRlcyhcInBrY2VcIikpIHx8ICEoY29va2llcy5wa2NlQ29kZVZlcmlmaWVyLm5hbWUgaW4gcmVxLmNvb2tpZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcGtjZSA9IGF3YWl0IGp3dC5kZWNvZGUoeyAuLi5yZXEub3B0aW9ucy5qd3QsXG4gICAgdG9rZW46IHJlcS5jb29raWVzW2Nvb2tpZXMucGtjZUNvZGVWZXJpZmllci5uYW1lXSxcbiAgICBtYXhBZ2U6IFBLQ0VfTUFYX0FHRSxcbiAgICBlbmNyeXB0aW9uOiB0cnVlXG4gIH0pO1xuICBjb29raWUuc2V0KHJlcywgY29va2llcy5wa2NlQ29kZVZlcmlmaWVyLm5hbWUsIFwiXCIsIHsgLi4uY29va2llcy5wa2NlQ29kZVZlcmlmaWVyLm9wdGlvbnMsXG4gICAgbWF4QWdlOiAwXG4gIH0pO1xuICByZXR1cm4gKF9wa2NlJGNvZGVfdmVyaWZpZXIgPSBwa2NlID09PSBudWxsIHx8IHBrY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBrY2UuY29kZV92ZXJpZmllcikgIT09IG51bGwgJiYgX3BrY2UkY29kZV92ZXJpZmllciAhPT0gdm9pZCAwID8gX3BrY2UkY29kZV92ZXJpZmllciA6IHVuZGVmaW5lZDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY3JlYXRlU3RhdGUgPSBjcmVhdGVTdGF0ZTtcbmV4cG9ydHMuZ2V0U3RhdGUgPSBnZXRTdGF0ZTtcblxudmFyIF9jcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZShyZXEpIHtcbiAgdmFyIF9wcm92aWRlciRjaGVja3M7XG5cbiAgY29uc3Qge1xuICAgIGNzcmZUb2tlbixcbiAgICBsb2dnZXJcbiAgfSA9IHJlcS5vcHRpb25zO1xuICBjb25zdCBwcm92aWRlciA9IHJlcS5vcHRpb25zLnByb3ZpZGVyO1xuXG4gIGlmICghKChfcHJvdmlkZXIkY2hlY2tzID0gcHJvdmlkZXIuY2hlY2tzKSAhPT0gbnVsbCAmJiBfcHJvdmlkZXIkY2hlY2tzICE9PSB2b2lkIDAgJiYgX3Byb3ZpZGVyJGNoZWNrcy5pbmNsdWRlcyhcInN0YXRlXCIpKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHN0YXRlID0gKDAsIF9jcnlwdG8uY3JlYXRlSGFzaCkoXCJzaGEyNTZcIikudXBkYXRlKGNzcmZUb2tlbikuZGlnZXN0KFwiaGV4XCIpO1xuICBsb2dnZXIuZGVidWcoXCJPQVVUSF9DQUxMQkFDS19QUk9URUNUSU9OXCIsIHtcbiAgICBzdGF0ZSxcbiAgICBjc3JmVG9rZW5cbiAgfSk7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdGUoe1xuICBvcHRpb25zXG59KSB7XG4gIGNvbnN0IHByb3ZpZGVyID0gb3B0aW9ucy5wcm92aWRlcjtcblxuICBpZiAocHJvdmlkZXIgIT09IG51bGwgJiYgcHJvdmlkZXIgIT09IHZvaWQgMCAmJiBwcm92aWRlci5jaGVja3MuaW5jbHVkZXMoXCJzdGF0ZVwiKSkge1xuICAgIHJldHVybiAoMCwgX2NyeXB0by5jcmVhdGVIYXNoKShcInNoYTI1NlwiKS51cGRhdGUob3B0aW9ucy5jc3JmVG9rZW4pLmRpZ2VzdChcImhleFwiKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcGFyc2VQcm92aWRlcnM7XG5cbnZhciBfbWVyZ2UgPSByZXF1aXJlKFwiLi4vLi4vbGliL21lcmdlXCIpO1xuXG5mdW5jdGlvbiBwYXJzZVByb3ZpZGVycyhwYXJhbXMpIHtcbiAgY29uc3Qge1xuICAgIHByb3ZpZGVycyA9IFtdLFxuICAgIGJhc2VcbiAgfSA9IHBhcmFtcztcbiAgcmV0dXJuIHByb3ZpZGVycy5tYXAoKHtcbiAgICBvcHRpb25zLFxuICAgIC4uLmRlZmF1bHRPcHRpb25zXG4gIH0pID0+ICgwLCBfbWVyZ2UubWVyZ2UpKGRlZmF1bHRPcHRpb25zLCB7XG4gICAgc2lnbmluVXJsOiBgJHtiYXNlfS9zaWduaW4vJHtkZWZhdWx0T3B0aW9ucy5pZH1gLFxuICAgIGNhbGxiYWNrVXJsOiBgJHtiYXNlfS9jYWxsYmFjay8ke2RlZmF1bHRPcHRpb25zLmlkfWAsXG4gICAgLi4ub3B0aW9uc1xuICB9KSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZyb21EYXRlID0gZnJvbURhdGU7XG5leHBvcnRzLmhhc2hUb2tlbiA9IGhhc2hUb2tlbjtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVNlY3JldDtcblxudmFyIF9jcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5mdW5jdGlvbiBmcm9tRGF0ZSh0aW1lLCBkYXRlID0gRGF0ZS5ub3coKSkge1xuICByZXR1cm4gbmV3IERhdGUoZGF0ZSArIHRpbWUgKiAxMDAwKTtcbn1cblxuZnVuY3Rpb24gaGFzaFRva2VuKHRva2VuLCBvcHRpb25zKSB7XG4gIHZhciBfcHJvdmlkZXIkc2VjcmV0O1xuXG4gIGNvbnN0IHtcbiAgICBwcm92aWRlcixcbiAgICBzZWNyZXRcbiAgfSA9IG9wdGlvbnM7XG4gIHJldHVybiAoMCwgX2NyeXB0by5jcmVhdGVIYXNoKShcInNoYTI1NlwiKS51cGRhdGUoYCR7dG9rZW59JHsoX3Byb3ZpZGVyJHNlY3JldCA9IHByb3ZpZGVyLnNlY3JldCkgIT09IG51bGwgJiYgX3Byb3ZpZGVyJHNlY3JldCAhPT0gdm9pZCAwID8gX3Byb3ZpZGVyJHNlY3JldCA6IHNlY3JldH1gKS5kaWdlc3QoXCJoZXhcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlY3JldCh7XG4gIHVzZXJPcHRpb25zLFxuICBiYXNlUGF0aCxcbiAgYmFzZVVybFxufSkge1xuICB2YXIgX3VzZXJPcHRpb25zJHNlY3JldDtcblxuICByZXR1cm4gKF91c2VyT3B0aW9ucyRzZWNyZXQgPSB1c2VyT3B0aW9ucy5zZWNyZXQpICE9PSBudWxsICYmIF91c2VyT3B0aW9ucyRzZWNyZXQgIT09IHZvaWQgMCA/IF91c2VyT3B0aW9ucyRzZWNyZXQgOiAoMCwgX2NyeXB0by5jcmVhdGVIYXNoKShcInNoYTI1NlwiKS51cGRhdGUoSlNPTi5zdHJpbmdpZnkoe1xuICAgIGJhc2VVcmwsXG4gICAgYmFzZVBhdGgsXG4gICAgLi4udXNlck9wdGlvbnNcbiAgfSkpLmRpZ2VzdChcImhleFwiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVycm9yO1xuXG52YXIgX3ByZWFjdCA9IHJlcXVpcmUoXCJwcmVhY3RcIik7XG5cbmZ1bmN0aW9uIEVycm9yKHtcbiAgYmFzZVVybCxcbiAgYmFzZVBhdGgsXG4gIGVycm9yID0gXCJkZWZhdWx0XCIsXG4gIHJlc1xufSkge1xuICB2YXIgX2Vycm9ycyRlcnJvciR0b0xvd2VyO1xuXG4gIGNvbnN0IHNpZ25pblBhZ2VVcmwgPSBgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L3NpZ25pbmA7XG4gIGNvbnN0IGVycm9ycyA9IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICBoZWFkaW5nOiBcIkVycm9yXCIsXG4gICAgICBtZXNzYWdlOiAoMCwgX3ByZWFjdC5oKShcInBcIiwgbnVsbCwgKDAsIF9wcmVhY3QuaCkoXCJhXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInNpdGVcIixcbiAgICAgICAgaHJlZjogYmFzZVVybFxuICAgICAgfSwgYmFzZVVybC5yZXBsYWNlKC9eaHR0cHM/OlxcL1xcLy8sIFwiXCIpKSlcbiAgICB9LFxuICAgIGNvbmZpZ3VyYXRpb246IHtcbiAgICAgIHN0YXR1c0NvZGU6IDUwMCxcbiAgICAgIGhlYWRpbmc6IFwiU2VydmVyIGVycm9yXCIsXG4gICAgICBtZXNzYWdlOiAoMCwgX3ByZWFjdC5oKShcImRpdlwiLCBudWxsLCAoMCwgX3ByZWFjdC5oKShcInBcIiwgbnVsbCwgXCJUaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgc2VydmVyIGNvbmZpZ3VyYXRpb24uXCIpLCAoMCwgX3ByZWFjdC5oKShcInBcIiwgbnVsbCwgXCJDaGVjayB0aGUgc2VydmVyIGxvZ3MgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpKVxuICAgIH0sXG4gICAgYWNjZXNzZGVuaWVkOiB7XG4gICAgICBzdGF0dXNDb2RlOiA0MDMsXG4gICAgICBoZWFkaW5nOiBcIkFjY2VzcyBEZW5pZWRcIixcbiAgICAgIG1lc3NhZ2U6ICgwLCBfcHJlYWN0LmgpKFwiZGl2XCIsIG51bGwsICgwLCBfcHJlYWN0LmgpKFwicFwiLCBudWxsLCBcIllvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIHNpZ24gaW4uXCIpLCAoMCwgX3ByZWFjdC5oKShcInBcIiwgbnVsbCwgKDAsIF9wcmVhY3QuaCkoXCJhXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImJ1dHRvblwiLFxuICAgICAgICBocmVmOiBzaWduaW5QYWdlVXJsXG4gICAgICB9LCBcIlNpZ24gaW5cIikpKVxuICAgIH0sXG4gICAgdmVyaWZpY2F0aW9uOiB7XG4gICAgICBzdGF0dXNDb2RlOiA0MDMsXG4gICAgICBoZWFkaW5nOiBcIlVuYWJsZSB0byBzaWduIGluXCIsXG4gICAgICBtZXNzYWdlOiAoMCwgX3ByZWFjdC5oKShcImRpdlwiLCBudWxsLCAoMCwgX3ByZWFjdC5oKShcInBcIiwgbnVsbCwgXCJUaGUgc2lnbiBpbiBsaW5rIGlzIG5vIGxvbmdlciB2YWxpZC5cIiksICgwLCBfcHJlYWN0LmgpKFwicFwiLCBudWxsLCBcIkl0IG1heSBoYXZlIGJlZW4gdXNlZCBhbHJlYWR5IG9yIGl0IG1heSBoYXZlIGV4cGlyZWQuXCIpKSxcbiAgICAgIHNpZ25pbjogKDAsIF9wcmVhY3QuaCkoXCJwXCIsIG51bGwsICgwLCBfcHJlYWN0LmgpKFwiYVwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJidXR0b25cIixcbiAgICAgICAgaHJlZjogc2lnbmluUGFnZVVybFxuICAgICAgfSwgXCJTaWduIGluXCIpKVxuICAgIH1cbiAgfTtcbiAgY29uc3Qge1xuICAgIHN0YXR1c0NvZGUsXG4gICAgaGVhZGluZyxcbiAgICBtZXNzYWdlLFxuICAgIHNpZ25pblxuICB9ID0gKF9lcnJvcnMkZXJyb3IkdG9Mb3dlciA9IGVycm9yc1tlcnJvci50b0xvd2VyQ2FzZSgpXSkgIT09IG51bGwgJiYgX2Vycm9ycyRlcnJvciR0b0xvd2VyICE9PSB2b2lkIDAgPyBfZXJyb3JzJGVycm9yJHRvTG93ZXIgOiBlcnJvcnMuZGVmYXVsdDtcbiAgcmVzLnN0YXR1cyhzdGF0dXNDb2RlKTtcbiAgcmV0dXJuICgwLCBfcHJlYWN0LmgpKFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiZXJyb3JcIlxuICB9LCAoMCwgX3ByZWFjdC5oKShcImgxXCIsIG51bGwsIGhlYWRpbmcpLCAoMCwgX3ByZWFjdC5oKShcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIm1lc3NhZ2VcIlxuICB9LCBtZXNzYWdlKSwgc2lnbmluKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZW5kZXJQYWdlO1xuXG52YXIgX3ByZWFjdFJlbmRlclRvU3RyaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJlYWN0LXJlbmRlci10by1zdHJpbmdcIikpO1xuXG52YXIgX3NpZ25pbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2lnbmluXCIpKTtcblxudmFyIF9zaWdub3V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaWdub3V0XCIpKTtcblxudmFyIF92ZXJpZnlSZXF1ZXN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92ZXJpZnktcmVxdWVzdFwiKSk7XG5cbnZhciBfZXJyb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Vycm9yXCIpKTtcblxudmFyIF9jc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jc3NcIikpO1xuXG5mdW5jdGlvbiByZW5kZXJQYWdlKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHtcbiAgICBiYXNlVXJsLFxuICAgIGJhc2VQYXRoLFxuICAgIGNhbGxiYWNrVXJsLFxuICAgIGNzcmZUb2tlbixcbiAgICBwcm92aWRlcnMsXG4gICAgdGhlbWVcbiAgfSA9IHJlcS5vcHRpb25zO1xuICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIGZ1bmN0aW9uIHNlbmQoe1xuICAgIGh0bWwsXG4gICAgdGl0bGVcbiAgfSkge1xuICAgIHJlcy5zZW5kKGA8IURPQ1RZUEUgaHRtbD48aHRtbCBsYW5nPVwiZW5cIj48aGVhZD48bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIj48bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPjxzdHlsZT4keygwLCBfY3NzLmRlZmF1bHQpKCl9PC9zdHlsZT48dGl0bGU+JHt0aXRsZX08L3RpdGxlPjwvaGVhZD48Ym9keSBjbGFzcz1cIl9fbmV4dC1hdXRoLXRoZW1lLSR7dGhlbWV9XCI+PGRpdiBjbGFzcz1cInBhZ2VcIj4keygwLCBfcHJlYWN0UmVuZGVyVG9TdHJpbmcuZGVmYXVsdCkoaHRtbCl9PC9kaXY+PC9ib2R5PjwvaHRtbD5gKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2lnbmluKHByb3BzKSB7XG4gICAgICBzZW5kKHtcbiAgICAgICAgaHRtbDogKDAsIF9zaWduaW4uZGVmYXVsdCkoe1xuICAgICAgICAgIGNzcmZUb2tlbixcbiAgICAgICAgICBwcm92aWRlcnMsXG4gICAgICAgICAgY2FsbGJhY2tVcmwsXG4gICAgICAgICAgLi4ucmVxLnF1ZXJ5LFxuICAgICAgICAgIC4uLnByb3BzXG4gICAgICAgIH0pLFxuICAgICAgICB0aXRsZTogXCJTaWduIEluXCJcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzaWdub3V0KHByb3BzKSB7XG4gICAgICBzZW5kKHtcbiAgICAgICAgaHRtbDogKDAsIF9zaWdub3V0LmRlZmF1bHQpKHtcbiAgICAgICAgICBjc3JmVG9rZW4sXG4gICAgICAgICAgYmFzZVVybCxcbiAgICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgICAuLi5wcm9wc1xuICAgICAgICB9KSxcbiAgICAgICAgdGl0bGU6IFwiU2lnbiBPdXRcIlxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHZlcmlmeVJlcXVlc3QocHJvcHMpIHtcbiAgICAgIHNlbmQoe1xuICAgICAgICBodG1sOiAoMCwgX3ZlcmlmeVJlcXVlc3QuZGVmYXVsdCkoe1xuICAgICAgICAgIGJhc2VVcmwsXG4gICAgICAgICAgLi4ucHJvcHNcbiAgICAgICAgfSksXG4gICAgICAgIHRpdGxlOiBcIlZlcmlmeSBSZXF1ZXN0XCJcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBlcnJvcihwcm9wcykge1xuICAgICAgc2VuZCh7XG4gICAgICAgIGh0bWw6ICgwLCBfZXJyb3IuZGVmYXVsdCkoe1xuICAgICAgICAgIGJhc2VQYXRoLFxuICAgICAgICAgIGJhc2VVcmwsXG4gICAgICAgICAgcmVzLFxuICAgICAgICAgIC4uLnByb3BzXG4gICAgICAgIH0pLFxuICAgICAgICB0aXRsZTogXCJFcnJvclwiXG4gICAgICB9KTtcbiAgICB9XG5cbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNpZ25pbjtcblxudmFyIF9wcmVhY3QgPSByZXF1aXJlKFwicHJlYWN0XCIpO1xuXG5mdW5jdGlvbiBTaWduaW4oe1xuICBjc3JmVG9rZW4sXG4gIHByb3ZpZGVycyxcbiAgY2FsbGJhY2tVcmwsXG4gIGVtYWlsLFxuICBlcnJvcjogZXJyb3JUeXBlXG59KSB7XG4gIHZhciBfZXJyb3JzJGVycm9yVHlwZTtcblxuICBjb25zdCBwcm92aWRlcnNUb1JlbmRlciA9IHByb3ZpZGVycy5maWx0ZXIocHJvdmlkZXIgPT4ge1xuICAgIGlmIChwcm92aWRlci50eXBlID09PSBcIm9hdXRoXCIgfHwgcHJvdmlkZXIudHlwZSA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHByb3ZpZGVyLnR5cGUgPT09IFwiY3JlZGVudGlhbHNcIiAmJiBwcm92aWRlci5jcmVkZW50aWFscykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgY29uc3QgZXJyb3JzID0ge1xuICAgIFNpZ25pbjogXCJUcnkgc2lnbmluZyBpbiB3aXRoIGEgZGlmZmVyZW50IGFjY291bnQuXCIsXG4gICAgT0F1dGhTaWduaW46IFwiVHJ5IHNpZ25pbmcgaW4gd2l0aCBhIGRpZmZlcmVudCBhY2NvdW50LlwiLFxuICAgIE9BdXRoQ2FsbGJhY2s6IFwiVHJ5IHNpZ25pbmcgaW4gd2l0aCBhIGRpZmZlcmVudCBhY2NvdW50LlwiLFxuICAgIE9BdXRoQ3JlYXRlQWNjb3VudDogXCJUcnkgc2lnbmluZyBpbiB3aXRoIGEgZGlmZmVyZW50IGFjY291bnQuXCIsXG4gICAgRW1haWxDcmVhdGVBY2NvdW50OiBcIlRyeSBzaWduaW5nIGluIHdpdGggYSBkaWZmZXJlbnQgYWNjb3VudC5cIixcbiAgICBDYWxsYmFjazogXCJUcnkgc2lnbmluZyBpbiB3aXRoIGEgZGlmZmVyZW50IGFjY291bnQuXCIsXG4gICAgT0F1dGhBY2NvdW50Tm90TGlua2VkOiBcIlRvIGNvbmZpcm0geW91ciBpZGVudGl0eSwgc2lnbiBpbiB3aXRoIHRoZSBzYW1lIGFjY291bnQgeW91IHVzZWQgb3JpZ2luYWxseS5cIixcbiAgICBFbWFpbFNpZ25pbjogXCJDaGVjayB5b3VyIGVtYWlsIGluYm94LlwiLFxuICAgIENyZWRlbnRpYWxzU2lnbmluOiBcIlNpZ24gaW4gZmFpbGVkLiBDaGVjayB0aGUgZGV0YWlscyB5b3UgcHJvdmlkZWQgYXJlIGNvcnJlY3QuXCIsXG4gICAgZGVmYXVsdDogXCJVbmFibGUgdG8gc2lnbiBpbi5cIlxuICB9O1xuICBjb25zdCBlcnJvciA9IGVycm9yVHlwZSAmJiAoKF9lcnJvcnMkZXJyb3JUeXBlID0gZXJyb3JzW2Vycm9yVHlwZV0pICE9PSBudWxsICYmIF9lcnJvcnMkZXJyb3JUeXBlICE9PSB2b2lkIDAgPyBfZXJyb3JzJGVycm9yVHlwZSA6IGVycm9ycy5kZWZhdWx0KTtcbiAgcmV0dXJuICgwLCBfcHJlYWN0LmgpKFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwic2lnbmluXCJcbiAgfSwgZXJyb3IgJiYgKDAsIF9wcmVhY3QuaCkoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXG4gIH0sICgwLCBfcHJlYWN0LmgpKFwicFwiLCBudWxsLCBlcnJvcikpLCBwcm92aWRlcnNUb1JlbmRlci5tYXAoKHByb3ZpZGVyLCBpKSA9PiAoMCwgX3ByZWFjdC5oKShcImRpdlwiLCB7XG4gICAga2V5OiBwcm92aWRlci5pZCxcbiAgICBjbGFzc05hbWU6IFwicHJvdmlkZXJcIlxuICB9LCBwcm92aWRlci50eXBlID09PSBcIm9hdXRoXCIgJiYgKDAsIF9wcmVhY3QuaCkoXCJmb3JtXCIsIHtcbiAgICBhY3Rpb246IHByb3ZpZGVyLnNpZ25pblVybCxcbiAgICBtZXRob2Q6IFwiUE9TVFwiXG4gIH0sICgwLCBfcHJlYWN0LmgpKFwiaW5wdXRcIiwge1xuICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgbmFtZTogXCJjc3JmVG9rZW5cIixcbiAgICB2YWx1ZTogY3NyZlRva2VuXG4gIH0pLCBjYWxsYmFja1VybCAmJiAoMCwgX3ByZWFjdC5oKShcImlucHV0XCIsIHtcbiAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgIG5hbWU6IFwiY2FsbGJhY2tVcmxcIixcbiAgICB2YWx1ZTogY2FsbGJhY2tVcmxcbiAgfSksICgwLCBfcHJlYWN0LmgpKFwiYnV0dG9uXCIsIHtcbiAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgIGNsYXNzTmFtZTogXCJidXR0b25cIlxuICB9LCBcIlNpZ24gaW4gd2l0aCBcIiwgcHJvdmlkZXIubmFtZSkpLCAocHJvdmlkZXIudHlwZSA9PT0gXCJlbWFpbFwiIHx8IHByb3ZpZGVyLnR5cGUgPT09IFwiY3JlZGVudGlhbHNcIikgJiYgaSA+IDAgJiYgcHJvdmlkZXJzVG9SZW5kZXJbaSAtIDFdLnR5cGUgIT09IFwiZW1haWxcIiAmJiBwcm92aWRlcnNUb1JlbmRlcltpIC0gMV0udHlwZSAhPT0gXCJjcmVkZW50aWFsc1wiICYmICgwLCBfcHJlYWN0LmgpKFwiaHJcIiwgbnVsbCksIHByb3ZpZGVyLnR5cGUgPT09IFwiZW1haWxcIiAmJiAoMCwgX3ByZWFjdC5oKShcImZvcm1cIiwge1xuICAgIGFjdGlvbjogcHJvdmlkZXIuc2lnbmluVXJsLFxuICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgfSwgKDAsIF9wcmVhY3QuaCkoXCJpbnB1dFwiLCB7XG4gICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICBuYW1lOiBcImNzcmZUb2tlblwiLFxuICAgIHZhbHVlOiBjc3JmVG9rZW5cbiAgfSksICgwLCBfcHJlYWN0LmgpKFwibGFiZWxcIiwge1xuICAgIGh0bWxGb3I6IGBpbnB1dC1lbWFpbC1mb3ItJHtwcm92aWRlci5pZH0tcHJvdmlkZXJgXG4gIH0sIFwiRW1haWxcIiksICgwLCBfcHJlYWN0LmgpKFwiaW5wdXRcIiwge1xuICAgIGlkOiBgaW5wdXQtZW1haWwtZm9yLSR7cHJvdmlkZXIuaWR9LXByb3ZpZGVyYCxcbiAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgbmFtZTogXCJlbWFpbFwiLFxuICAgIHZhbHVlOiBlbWFpbCxcbiAgICBwbGFjZWhvbGRlcjogXCJlbWFpbEBleGFtcGxlLmNvbVwiXG4gIH0pLCAoMCwgX3ByZWFjdC5oKShcImJ1dHRvblwiLCB7XG4gICAgdHlwZTogXCJzdWJtaXRcIlxuICB9LCBcIlNpZ24gaW4gd2l0aCBcIiwgcHJvdmlkZXIubmFtZSkpLCBwcm92aWRlci50eXBlID09PSBcImNyZWRlbnRpYWxzXCIgJiYgKDAsIF9wcmVhY3QuaCkoXCJmb3JtXCIsIHtcbiAgICBhY3Rpb246IHByb3ZpZGVyLmNhbGxiYWNrVXJsLFxuICAgIG1ldGhvZDogXCJQT1NUXCJcbiAgfSwgKDAsIF9wcmVhY3QuaCkoXCJpbnB1dFwiLCB7XG4gICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICBuYW1lOiBcImNzcmZUb2tlblwiLFxuICAgIHZhbHVlOiBjc3JmVG9rZW5cbiAgfSksIE9iamVjdC5rZXlzKHByb3ZpZGVyLmNyZWRlbnRpYWxzKS5tYXAoY3JlZGVudGlhbCA9PiB7XG4gICAgcmV0dXJuICgwLCBfcHJlYWN0LmgpKFwiZGl2XCIsIHtcbiAgICAgIGtleTogYGlucHV0LWdyb3VwLSR7cHJvdmlkZXIuaWR9YFxuICAgIH0sICgwLCBfcHJlYWN0LmgpKFwibGFiZWxcIiwge1xuICAgICAgaHRtbEZvcjogYGlucHV0LSR7Y3JlZGVudGlhbH0tZm9yLSR7cHJvdmlkZXIuaWR9LXByb3ZpZGVyYFxuICAgIH0sIHByb3ZpZGVyLmNyZWRlbnRpYWxzW2NyZWRlbnRpYWxdLmxhYmVsIHx8IGNyZWRlbnRpYWwpLCAoMCwgX3ByZWFjdC5oKShcImlucHV0XCIsIHtcbiAgICAgIG5hbWU6IGNyZWRlbnRpYWwsXG4gICAgICBpZDogYGlucHV0LSR7Y3JlZGVudGlhbH0tZm9yLSR7cHJvdmlkZXIuaWR9LXByb3ZpZGVyYCxcbiAgICAgIHR5cGU6IHByb3ZpZGVyLmNyZWRlbnRpYWxzW2NyZWRlbnRpYWxdLnR5cGUgfHwgXCJ0ZXh0XCIsXG4gICAgICB2YWx1ZTogcHJvdmlkZXIuY3JlZGVudGlhbHNbY3JlZGVudGlhbF0udmFsdWUgfHwgXCJcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBwcm92aWRlci5jcmVkZW50aWFsc1tjcmVkZW50aWFsXS5wbGFjZWhvbGRlciB8fCBcIlwiXG4gICAgfSkpO1xuICB9KSwgKDAsIF9wcmVhY3QuaCkoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwic3VibWl0XCJcbiAgfSwgXCJTaWduIGluIHdpdGggXCIsIHByb3ZpZGVyLm5hbWUpKSwgKHByb3ZpZGVyLnR5cGUgPT09IFwiZW1haWxcIiB8fCBwcm92aWRlci50eXBlID09PSBcImNyZWRlbnRpYWxzXCIpICYmIGkgKyAxIDwgcHJvdmlkZXJzVG9SZW5kZXIubGVuZ3RoICYmICgwLCBfcHJlYWN0LmgpKFwiaHJcIiwgbnVsbCkpKSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTaWdub3V0O1xuXG52YXIgX3ByZWFjdCA9IHJlcXVpcmUoXCJwcmVhY3RcIik7XG5cbmZ1bmN0aW9uIFNpZ25vdXQoe1xuICBiYXNlVXJsLFxuICBiYXNlUGF0aCxcbiAgY3NyZlRva2VuXG59KSB7XG4gIHJldHVybiAoMCwgX3ByZWFjdC5oKShcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInNpZ25vdXRcIlxuICB9LCAoMCwgX3ByZWFjdC5oKShcImgxXCIsIG51bGwsIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHNpZ24gb3V0P1wiKSwgKDAsIF9wcmVhY3QuaCkoXCJmb3JtXCIsIHtcbiAgICBhY3Rpb246IGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vc2lnbm91dGAsXG4gICAgbWV0aG9kOiBcIlBPU1RcIlxuICB9LCAoMCwgX3ByZWFjdC5oKShcImlucHV0XCIsIHtcbiAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgIG5hbWU6IFwiY3NyZlRva2VuXCIsXG4gICAgdmFsdWU6IGNzcmZUb2tlblxuICB9KSwgKDAsIF9wcmVhY3QuaCkoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwic3VibWl0XCJcbiAgfSwgXCJTaWduIG91dFwiKSkpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gVmVyaWZ5UmVxdWVzdDtcblxudmFyIF9wcmVhY3QgPSByZXF1aXJlKFwicHJlYWN0XCIpO1xuXG5mdW5jdGlvbiBWZXJpZnlSZXF1ZXN0KHtcbiAgYmFzZVVybFxufSkge1xuICByZXR1cm4gKDAsIF9wcmVhY3QuaCkoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJ2ZXJpZnktcmVxdWVzdFwiXG4gIH0sICgwLCBfcHJlYWN0LmgpKFwiaDFcIiwgbnVsbCwgXCJDaGVjayB5b3VyIGVtYWlsXCIpLCAoMCwgX3ByZWFjdC5oKShcInBcIiwgbnVsbCwgXCJBIHNpZ24gaW4gbGluayBoYXMgYmVlbiBzZW50IHRvIHlvdXIgZW1haWwgYWRkcmVzcy5cIiksICgwLCBfcHJlYWN0LmgpKFwicFwiLCBudWxsLCAoMCwgX3ByZWFjdC5oKShcImFcIiwge1xuICAgIGNsYXNzTmFtZTogXCJzaXRlXCIsXG4gICAgaHJlZjogYmFzZVVybFxuICB9LCBiYXNlVXJsLnJlcGxhY2UoL15odHRwcz86XFwvXFwvLywgXCJcIikpKSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FsbGJhY2s7XG5cbnZhciBfY2FsbGJhY2sgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9saWIvb2F1dGgvY2FsbGJhY2tcIikpO1xuXG52YXIgX2NhbGxiYWNrSGFuZGxlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xpYi9jYWxsYmFjay1oYW5kbGVyXCIpKTtcblxudmFyIGNvb2tpZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9saWIvY29va2llXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9saWIvdXRpbHNcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiAobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmFzeW5jIGZ1bmN0aW9uIGNhbGxiYWNrKHJlcSwgcmVzKSB7XG4gIHZhciBfcmVxJGNvb2tpZXMkY29va2llcyQsIF9yZXEkY29va2llcztcblxuICBjb25zdCB7XG4gICAgcHJvdmlkZXIsXG4gICAgYWRhcHRlcixcbiAgICBiYXNlVXJsLFxuICAgIGJhc2VQYXRoLFxuICAgIGNvb2tpZXMsXG4gICAgY2FsbGJhY2tVcmwsXG4gICAgcGFnZXMsXG4gICAgand0LFxuICAgIGV2ZW50cyxcbiAgICBjYWxsYmFja3MsXG4gICAgc2Vzc2lvbjoge1xuICAgICAgand0OiB1c2VKd3RTZXNzaW9uLFxuICAgICAgbWF4QWdlOiBzZXNzaW9uTWF4QWdlXG4gICAgfSxcbiAgICBsb2dnZXJcbiAgfSA9IHJlcS5vcHRpb25zO1xuICBjb25zdCBzZXNzaW9uVG9rZW4gPSAoX3JlcSRjb29raWVzJGNvb2tpZXMkID0gKF9yZXEkY29va2llcyA9IHJlcS5jb29raWVzKSA9PT0gbnVsbCB8fCBfcmVxJGNvb2tpZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZXEkY29va2llc1tjb29raWVzLnNlc3Npb25Ub2tlbi5uYW1lXSkgIT09IG51bGwgJiYgX3JlcSRjb29raWVzJGNvb2tpZXMkICE9PSB2b2lkIDAgPyBfcmVxJGNvb2tpZXMkY29va2llcyQgOiBudWxsO1xuXG4gIGlmIChwcm92aWRlci50eXBlID09PSBcIm9hdXRoXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBwcm9maWxlLFxuICAgICAgICBhY2NvdW50LFxuICAgICAgICBPQXV0aFByb2ZpbGVcbiAgICAgIH0gPSBhd2FpdCAoMCwgX2NhbGxiYWNrLmRlZmF1bHQpKHJlcSwgcmVzKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIF9ldmVudHMkc2lnbkluO1xuXG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcIk9BVVRIX0NBTExCQUNLX1JFU1BPTlNFXCIsIHtcbiAgICAgICAgICBwcm9maWxlLFxuICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgT0F1dGhQcm9maWxlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcHJvZmlsZSkge1xuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9zaWduaW5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1c2VyT3JQcm9maWxlID0gcHJvZmlsZTtcblxuICAgICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGdldFVzZXJCeUFjY291bnRcbiAgICAgICAgICB9ID0gYWRhcHRlcjtcbiAgICAgICAgICBjb25zdCB1c2VyQnlBY2NvdW50ID0gYXdhaXQgZ2V0VXNlckJ5QWNjb3VudCh7XG4gICAgICAgICAgICBwcm92aWRlckFjY291bnRJZDogYWNjb3VudC5wcm92aWRlckFjY291bnRJZCxcbiAgICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlci5pZFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh1c2VyQnlBY2NvdW50KSB1c2VyT3JQcm9maWxlID0gdXNlckJ5QWNjb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgaXNBbGxvd2VkID0gYXdhaXQgY2FsbGJhY2tzLnNpZ25Jbih7XG4gICAgICAgICAgICB1c2VyOiB1c2VyT3JQcm9maWxlLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIHByb2ZpbGU6IE9BdXRoUHJvZmlsZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFpc0FsbG93ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj9lcnJvcj1BY2Nlc3NEZW5pZWRgKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpc0FsbG93ZWQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoaXNBbGxvd2VkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVycm9yLm1lc3NhZ2UpfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgc2Vzc2lvbixcbiAgICAgICAgICBpc05ld1VzZXJcbiAgICAgICAgfSA9IGF3YWl0ICgwLCBfY2FsbGJhY2tIYW5kbGVyLmRlZmF1bHQpKHNlc3Npb25Ub2tlbiwgcHJvZmlsZSwgYWNjb3VudCwgcmVxLm9wdGlvbnMpO1xuXG4gICAgICAgIGlmICh1c2VKd3RTZXNzaW9uKSB7XG4gICAgICAgICAgdmFyIF91c2VyJGlkO1xuXG4gICAgICAgICAgY29uc3QgZGVmYXVsdFRva2VuID0ge1xuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBwaWN0dXJlOiB1c2VyLmltYWdlLFxuICAgICAgICAgICAgc3ViOiAoX3VzZXIkaWQgPSB1c2VyLmlkKSA9PT0gbnVsbCB8fCBfdXNlciRpZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3VzZXIkaWQudG9TdHJpbmcoKVxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBjYWxsYmFja3Muand0KHtcbiAgICAgICAgICAgIHRva2VuOiBkZWZhdWx0VG9rZW4sXG4gICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIHByb2ZpbGU6IE9BdXRoUHJvZmlsZSxcbiAgICAgICAgICAgIGlzTmV3VXNlclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IG5ld0VuY29kZWRKd3QgPSBhd2FpdCBqd3QuZW5jb2RlKHsgLi4uand0LFxuICAgICAgICAgICAgdG9rZW5cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBjb29raWVFeHBpcmVzID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBjb29raWVFeHBpcmVzLnNldFRpbWUoY29va2llRXhwaXJlcy5nZXRUaW1lKCkgKyBzZXNzaW9uTWF4QWdlICogMTAwMCk7XG4gICAgICAgICAgY29va2llLnNldChyZXMsIGNvb2tpZXMuc2Vzc2lvblRva2VuLm5hbWUsIG5ld0VuY29kZWRKd3QsIHtcbiAgICAgICAgICAgIGV4cGlyZXM6IGNvb2tpZUV4cGlyZXMudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIC4uLmNvb2tpZXMuc2Vzc2lvblRva2VuLm9wdGlvbnNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb29raWUuc2V0KHJlcywgY29va2llcy5zZXNzaW9uVG9rZW4ubmFtZSwgc2Vzc2lvbi5zZXNzaW9uVG9rZW4sIHtcbiAgICAgICAgICAgIGV4cGlyZXM6IHNlc3Npb24uZXhwaXJlcyxcbiAgICAgICAgICAgIC4uLmNvb2tpZXMuc2Vzc2lvblRva2VuLm9wdGlvbnNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0ICgoX2V2ZW50cyRzaWduSW4gPSBldmVudHMuc2lnbkluKSA9PT0gbnVsbCB8fCBfZXZlbnRzJHNpZ25JbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50cyRzaWduSW4uY2FsbChldmVudHMsIHtcbiAgICAgICAgICB1c2VyLFxuICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgcHJvZmlsZSxcbiAgICAgICAgICBpc05ld1VzZXJcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChpc05ld1VzZXIgJiYgcGFnZXMubmV3VXNlcikge1xuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7cGFnZXMubmV3VXNlcn0ke3BhZ2VzLm5ld1VzZXIuaW5jbHVkZXMoXCI/XCIpID8gXCImXCIgOiBcIj9cIn1jYWxsYmFja1VybD0ke2VuY29kZVVSSUNvbXBvbmVudChjYWxsYmFja1VybCl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGNhbGxiYWNrVXJsIHx8IGJhc2VVcmwpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09IFwiQWNjb3VudE5vdExpbmtlZEVycm9yXCIpIHtcbiAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9T0F1dGhBY2NvdW50Tm90TGlua2VkYCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXJyb3IubmFtZSA9PT0gXCJDcmVhdGVVc2VyRXJyb3JcIikge1xuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj9lcnJvcj1PQXV0aENyZWF0ZUFjY291bnRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZ2dlci5lcnJvcihcIk9BVVRIX0NBTExCQUNLX0hBTkRMRVJfRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9Q2FsbGJhY2tgKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yLm5hbWUgPT09IFwiT0F1dGhDYWxsYmFja0Vycm9yXCIpIHtcbiAgICAgICAgbG9nZ2VyLmVycm9yKFwiQ0FMTEJBQ0tfT0FVVEhfRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9T0F1dGhDYWxsYmFja2ApO1xuICAgICAgfVxuXG4gICAgICBsb2dnZXIuZXJyb3IoXCJPQVVUSF9DQUxMQkFDS19FUlJPUlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9Q2FsbGJhY2tgKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvdmlkZXIudHlwZSA9PT0gXCJlbWFpbFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBfcmVmLCBfZXZlbnRzJHNpZ25JbjI7XG5cbiAgICAgIGlmICghYWRhcHRlcikge1xuICAgICAgICBsb2dnZXIuZXJyb3IoXCJFTUFJTF9SRVFVSVJFU19BREFQVEVSX0VSUk9SXCIsIG5ldyBFcnJvcihcIkUtbWFpbCBsb2dpbiByZXF1aXJlcyBhbiBhZGFwdGVyIGJ1dCBpdCB3YXMgdW5kZWZpbmVkXCIpKTtcbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPUNvbmZpZ3VyYXRpb25gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICB1c2VWZXJpZmljYXRpb25Ub2tlbixcbiAgICAgICAgZ2V0VXNlckJ5RW1haWxcbiAgICAgIH0gPSBhZGFwdGVyO1xuICAgICAgY29uc3QgdG9rZW4gPSByZXEucXVlcnkudG9rZW47XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gcmVxLnF1ZXJ5LmVtYWlsO1xuICAgICAgY29uc3QgaW52aXRlID0gYXdhaXQgdXNlVmVyaWZpY2F0aW9uVG9rZW4oe1xuICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICB0b2tlbjogKDAsIF91dGlscy5oYXNoVG9rZW4pKHRva2VuLCByZXEub3B0aW9ucylcbiAgICAgIH0pO1xuICAgICAgY29uc3QgaW52YWxpZEludml0ZSA9ICFpbnZpdGUgfHwgaW52aXRlLmV4cGlyZXMudmFsdWVPZigpIDwgRGF0ZS5ub3coKTtcblxuICAgICAgaWYgKGludmFsaWRJbnZpdGUpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPVZlcmlmaWNhdGlvbmApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9maWxlID0gKF9yZWYgPSBpZGVudGlmaWVyID8gYXdhaXQgZ2V0VXNlckJ5RW1haWwoaWRlbnRpZmllcikgOiBudWxsKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDoge1xuICAgICAgICBlbWFpbDogaWRlbnRpZmllclxuICAgICAgfTtcbiAgICAgIGNvbnN0IGFjY291bnQgPSB7XG4gICAgICAgIHByb3ZpZGVyQWNjb3VudElkOiBwcm9maWxlLmVtYWlsLFxuICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgIHByb3ZpZGVyOiBwcm92aWRlci5pZFxuICAgICAgfTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2lnbkluQ2FsbGJhY2tSZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrcy5zaWduSW4oe1xuICAgICAgICAgIHVzZXI6IHByb2ZpbGUsXG4gICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgZW1haWw6IGlkZW50aWZpZXJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghc2lnbkluQ2FsbGJhY2tSZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj9lcnJvcj1BY2Nlc3NEZW5pZWRgKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2lnbkluQ2FsbGJhY2tSZXNwb25zZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3Qoc2lnbkluQ2FsbGJhY2tSZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj9lcnJvcj0ke2VuY29kZVVSSUNvbXBvbmVudChlcnJvci5tZXNzYWdlKX1gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICB1c2VyLFxuICAgICAgICBzZXNzaW9uLFxuICAgICAgICBpc05ld1VzZXJcbiAgICAgIH0gPSBhd2FpdCAoMCwgX2NhbGxiYWNrSGFuZGxlci5kZWZhdWx0KShzZXNzaW9uVG9rZW4sIHByb2ZpbGUsIGFjY291bnQsIHJlcS5vcHRpb25zKTtcblxuICAgICAgaWYgKHVzZUp3dFNlc3Npb24pIHtcbiAgICAgICAgdmFyIF91c2VyJGlkMjtcblxuICAgICAgICBjb25zdCBkZWZhdWx0VG9rZW4gPSB7XG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIHBpY3R1cmU6IHVzZXIuaW1hZ2UsXG4gICAgICAgICAgc3ViOiAoX3VzZXIkaWQyID0gdXNlci5pZCkgPT09IG51bGwgfHwgX3VzZXIkaWQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdXNlciRpZDIudG9TdHJpbmcoKVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGNhbGxiYWNrcy5qd3Qoe1xuICAgICAgICAgIHRva2VuOiBkZWZhdWx0VG9rZW4sXG4gICAgICAgICAgdXNlcixcbiAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgIGlzTmV3VXNlclxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbmV3RW5jb2RlZEp3dCA9IGF3YWl0IGp3dC5lbmNvZGUoeyAuLi5qd3QsXG4gICAgICAgICAgdG9rZW5cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvb2tpZUV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb29raWVFeHBpcmVzLnNldFRpbWUoY29va2llRXhwaXJlcy5nZXRUaW1lKCkgKyBzZXNzaW9uTWF4QWdlICogMTAwMCk7XG4gICAgICAgIGNvb2tpZS5zZXQocmVzLCBjb29raWVzLnNlc3Npb25Ub2tlbi5uYW1lLCBuZXdFbmNvZGVkSnd0LCB7XG4gICAgICAgICAgZXhwaXJlczogY29va2llRXhwaXJlcy50b0lTT1N0cmluZygpLFxuICAgICAgICAgIC4uLmNvb2tpZXMuc2Vzc2lvblRva2VuLm9wdGlvbnNcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb29raWUuc2V0KHJlcywgY29va2llcy5zZXNzaW9uVG9rZW4ubmFtZSwgc2Vzc2lvbi5zZXNzaW9uVG9rZW4sIHtcbiAgICAgICAgICBleHBpcmVzOiBzZXNzaW9uLmV4cGlyZXMsXG4gICAgICAgICAgLi4uY29va2llcy5zZXNzaW9uVG9rZW4ub3B0aW9uc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgKChfZXZlbnRzJHNpZ25JbjIgPSBldmVudHMuc2lnbkluKSA9PT0gbnVsbCB8fCBfZXZlbnRzJHNpZ25JbjIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudHMkc2lnbkluMi5jYWxsKGV2ZW50cywge1xuICAgICAgICB1c2VyLFxuICAgICAgICBhY2NvdW50LFxuICAgICAgICBpc05ld1VzZXJcbiAgICAgIH0pKTtcblxuICAgICAgaWYgKGlzTmV3VXNlciAmJiBwYWdlcy5uZXdVc2VyKSB7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7cGFnZXMubmV3VXNlcn0ke3BhZ2VzLm5ld1VzZXIuaW5jbHVkZXMoXCI/XCIpID8gXCImXCIgOiBcIj9cIn1jYWxsYmFja1VybD0ke2VuY29kZVVSSUNvbXBvbmVudChjYWxsYmFja1VybCl9YCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoY2FsbGJhY2tVcmwgfHwgYmFzZVVybCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5uYW1lID09PSBcIkNyZWF0ZVVzZXJFcnJvclwiKSB7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj9lcnJvcj1FbWFpbENyZWF0ZUFjY291bnRgKTtcbiAgICAgIH1cblxuICAgICAgbG9nZ2VyLmVycm9yKFwiQ0FMTEJBQ0tfRU1BSUxfRVJST1JcIiwgZXJyb3IpO1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yP2Vycm9yPUNhbGxiYWNrYCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb3ZpZGVyLnR5cGUgPT09IFwiY3JlZGVudGlhbHNcIiAmJiByZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIHZhciBfdXNlciRpZDMsIF9ldmVudHMkc2lnbkluMztcblxuICAgIGlmICghdXNlSnd0U2Vzc2lvbikge1xuICAgICAgbG9nZ2VyLmVycm9yKFwiQ0FMTEJBQ0tfQ1JFREVOVElBTFNfSldUX0VSUk9SXCIsIG5ldyBFcnJvcihcIlNpZ25pbiBpbiB3aXRoIGNyZWRlbnRpYWxzIGlzIG9ubHkgc3VwcG9ydGVkIGlmIEpTT04gV2ViIFRva2VucyBhcmUgZW5hYmxlZFwiKSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9Q29uZmlndXJhdGlvbmApO1xuICAgIH1cblxuICAgIGlmICghcHJvdmlkZXIuYXV0aG9yaXplKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoXCJDQUxMQkFDS19DUkVERU5USUFMU19IQU5ETEVSX0VSUk9SXCIsIG5ldyBFcnJvcihcIk11c3QgZGVmaW5lIGFuIGF1dGhvcml6ZSgpIGhhbmRsZXIgdG8gdXNlIGNyZWRlbnRpYWxzIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyXCIpKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj9lcnJvcj1Db25maWd1cmF0aW9uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSByZXEuYm9keTtcbiAgICBsZXQgdXNlcjtcblxuICAgIHRyeSB7XG4gICAgICB1c2VyID0gYXdhaXQgcHJvdmlkZXIuYXV0aG9yaXplKGNyZWRlbnRpYWxzLCB7IC4uLnJlcSxcbiAgICAgICAgb3B0aW9uczoge30sXG4gICAgICAgIGNvb2tpZXM6IHt9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj8ke25ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgIGVycm9yOiBcIkNyZWRlbnRpYWxzU2lnbmluXCIsXG4gICAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLmlkXG4gICAgICAgIH0pfWApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9JHtlbmNvZGVVUklDb21wb25lbnQoZXJyb3IubWVzc2FnZSl9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWNjb3VudCA9IHtcbiAgICAgIHByb3ZpZGVyQWNjb3VudElkOiB1c2VyLmlkLFxuICAgICAgdHlwZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLmlkXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBpc0FsbG93ZWQgPSBhd2FpdCBjYWxsYmFja3Muc2lnbkluKHtcbiAgICAgICAgdXNlcixcbiAgICAgICAgYWNjb3VudCxcbiAgICAgICAgY3JlZGVudGlhbHNcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWlzQWxsb3dlZCkge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9QWNjZXNzRGVuaWVkYCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpc0FsbG93ZWQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChpc0FsbG93ZWQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9JHtlbmNvZGVVUklDb21wb25lbnQoZXJyb3IubWVzc2FnZSl9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmYXVsdFRva2VuID0ge1xuICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBwaWN0dXJlOiB1c2VyLmltYWdlLFxuICAgICAgc3ViOiAoX3VzZXIkaWQzID0gdXNlci5pZCkgPT09IG51bGwgfHwgX3VzZXIkaWQzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdXNlciRpZDMudG9TdHJpbmcoKVxuICAgIH07XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBjYWxsYmFja3Muand0KHtcbiAgICAgIHRva2VuOiBkZWZhdWx0VG9rZW4sXG4gICAgICB1c2VyLFxuICAgICAgYWNjb3VudCxcbiAgICAgIGlzTmV3VXNlcjogZmFsc2VcbiAgICB9KTtcbiAgICBjb25zdCBuZXdFbmNvZGVkSnd0ID0gYXdhaXQgand0LmVuY29kZSh7IC4uLmp3dCxcbiAgICAgIHRva2VuXG4gICAgfSk7XG4gICAgY29uc3QgY29va2llRXhwaXJlcyA9IG5ldyBEYXRlKCk7XG4gICAgY29va2llRXhwaXJlcy5zZXRUaW1lKGNvb2tpZUV4cGlyZXMuZ2V0VGltZSgpICsgc2Vzc2lvbk1heEFnZSAqIDEwMDApO1xuICAgIGNvb2tpZS5zZXQocmVzLCBjb29raWVzLnNlc3Npb25Ub2tlbi5uYW1lLCBuZXdFbmNvZGVkSnd0LCB7XG4gICAgICBleHBpcmVzOiBjb29raWVFeHBpcmVzLnRvSVNPU3RyaW5nKCksXG4gICAgICAuLi5jb29raWVzLnNlc3Npb25Ub2tlbi5vcHRpb25zXG4gICAgfSk7XG4gICAgYXdhaXQgKChfZXZlbnRzJHNpZ25JbjMgPSBldmVudHMuc2lnbkluKSA9PT0gbnVsbCB8fCBfZXZlbnRzJHNpZ25JbjMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudHMkc2lnbkluMy5jYWxsKGV2ZW50cywge1xuICAgICAgdXNlcixcbiAgICAgIGFjY291bnRcbiAgICB9KSk7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdChjYWxsYmFja1VybCB8fCBiYXNlVXJsKTtcbiAgfVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDUwMCkuZW5kKGBFcnJvcjogQ2FsbGJhY2sgZm9yIHByb3ZpZGVyIHR5cGUgJHtwcm92aWRlci50eXBlfSBub3Qgc3VwcG9ydGVkYCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY2FsbGJhY2tcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX2NhbGxiYWNrLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2lnbmluXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9zaWduaW4uZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzaWdub3V0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9zaWdub3V0LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2Vzc2lvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfc2Vzc2lvbi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInByb3ZpZGVyc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfcHJvdmlkZXJzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2NhbGxiYWNrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jYWxsYmFja1wiKSk7XG5cbnZhciBfc2lnbmluID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaWduaW5cIikpO1xuXG52YXIgX3NpZ25vdXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NpZ25vdXRcIikpO1xuXG52YXIgX3Nlc3Npb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Nlc3Npb25cIikpO1xuXG52YXIgX3Byb3ZpZGVycyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcHJvdmlkZXJzXCIpKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByb3ZpZGVycztcblxuZnVuY3Rpb24gcHJvdmlkZXJzKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHtcbiAgICBwcm92aWRlcnNcbiAgfSA9IHJlcS5vcHRpb25zO1xuICBjb25zdCByZXN1bHQgPSBwcm92aWRlcnMucmVkdWNlKChhY2MsIHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIHR5cGUsXG4gICAgc2lnbmluVXJsLFxuICAgIGNhbGxiYWNrVXJsXG4gIH0pID0+IHtcbiAgICBhY2NbaWRdID0ge1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgdHlwZSxcbiAgICAgIHNpZ25pblVybCxcbiAgICAgIGNhbGxiYWNrVXJsXG4gICAgfTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJlcy5qc29uKHJlc3VsdCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzZXNzaW9uO1xuXG52YXIgY29va2llID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2xpYi9jb29raWVcIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL2xpYi91dGlsc1wiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIChub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuYXN5bmMgZnVuY3Rpb24gc2Vzc2lvbihyZXEsIHJlcykge1xuICBjb25zdCB7XG4gICAgY29va2llcyxcbiAgICBhZGFwdGVyLFxuICAgIGp3dCxcbiAgICBldmVudHMsXG4gICAgY2FsbGJhY2tzLFxuICAgIGxvZ2dlclxuICB9ID0gcmVxLm9wdGlvbnM7XG4gIGNvbnN0IHVzZUp3dFNlc3Npb24gPSByZXEub3B0aW9ucy5zZXNzaW9uLmp3dDtcbiAgY29uc3Qgc2Vzc2lvbk1heEFnZSA9IHJlcS5vcHRpb25zLnNlc3Npb24ubWF4QWdlO1xuICBjb25zdCBzZXNzaW9uVG9rZW4gPSByZXEuY29va2llc1tjb29raWVzLnNlc3Npb25Ub2tlbi5uYW1lXTtcblxuICBpZiAoIXNlc3Npb25Ub2tlbikge1xuICAgIHJldHVybiByZXMuanNvbih7fSk7XG4gIH1cblxuICBsZXQgcmVzcG9uc2UgPSB7fTtcblxuICBpZiAodXNlSnd0U2Vzc2lvbikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgX2V2ZW50cyRzZXNzaW9uO1xuXG4gICAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBhd2FpdCBqd3QuZGVjb2RlKHsgLi4uand0LFxuICAgICAgICB0b2tlbjogc2Vzc2lvblRva2VuXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG5ld0V4cGlyZXMgPSAoMCwgX3V0aWxzLmZyb21EYXRlKShzZXNzaW9uTWF4QWdlKTtcbiAgICAgIGNvbnN0IGRlZmF1bHRTZXNzaW9uID0ge1xuICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgbmFtZTogZGVjb2RlZFRva2VuID09PSBudWxsIHx8IGRlY29kZWRUb2tlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVjb2RlZFRva2VuLm5hbWUsXG4gICAgICAgICAgZW1haWw6IGRlY29kZWRUb2tlbiA9PT0gbnVsbCB8fCBkZWNvZGVkVG9rZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlY29kZWRUb2tlbi5lbWFpbCxcbiAgICAgICAgICBpbWFnZTogZGVjb2RlZFRva2VuID09PSBudWxsIHx8IGRlY29kZWRUb2tlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVjb2RlZFRva2VuLnBpY3R1cmVcbiAgICAgICAgfSxcbiAgICAgICAgZXhwaXJlczogbmV3RXhwaXJlcy50b0lTT1N0cmluZygpXG4gICAgICB9O1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBjYWxsYmFja3Muand0KHtcbiAgICAgICAgdG9rZW46IGRlY29kZWRUb2tlblxuICAgICAgfSk7XG4gICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgY2FsbGJhY2tzLnNlc3Npb24oe1xuICAgICAgICBzZXNzaW9uOiBkZWZhdWx0U2Vzc2lvbixcbiAgICAgICAgdG9rZW5cbiAgICAgIH0pO1xuICAgICAgcmVzcG9uc2UgPSBzZXNzaW9uO1xuICAgICAgY29uc3QgbmV3VG9rZW4gPSBhd2FpdCBqd3QuZW5jb2RlKHsgLi4uand0LFxuICAgICAgICB0b2tlblxuICAgICAgfSk7XG4gICAgICBjb29raWUuc2V0KHJlcywgY29va2llcy5zZXNzaW9uVG9rZW4ubmFtZSwgbmV3VG9rZW4sIHtcbiAgICAgICAgZXhwaXJlczogbmV3RXhwaXJlcyxcbiAgICAgICAgLi4uY29va2llcy5zZXNzaW9uVG9rZW4ub3B0aW9uc1xuICAgICAgfSk7XG4gICAgICBhd2FpdCAoKF9ldmVudHMkc2Vzc2lvbiA9IGV2ZW50cy5zZXNzaW9uKSA9PT0gbnVsbCB8fCBfZXZlbnRzJHNlc3Npb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudHMkc2Vzc2lvbi5jYWxsKGV2ZW50cywge1xuICAgICAgICBzZXNzaW9uLFxuICAgICAgICB0b2tlblxuICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoXCJKV1RfU0VTU0lPTl9FUlJPUlwiLCBlcnJvcik7XG4gICAgICBjb29raWUuc2V0KHJlcywgY29va2llcy5zZXNzaW9uVG9rZW4ubmFtZSwgXCJcIiwgeyAuLi5jb29raWVzLnNlc3Npb25Ub2tlbi5vcHRpb25zLFxuICAgICAgICBtYXhBZ2U6IDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBnZXRTZXNzaW9uQW5kVXNlcixcbiAgICAgICAgZGVsZXRlU2Vzc2lvbixcbiAgICAgICAgdXBkYXRlU2Vzc2lvblxuICAgICAgfSA9IGFkYXB0ZXI7XG4gICAgICBsZXQgdXNlckFuZFNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uQW5kVXNlcihzZXNzaW9uVG9rZW4pO1xuXG4gICAgICBpZiAodXNlckFuZFNlc3Npb24gJiYgdXNlckFuZFNlc3Npb24uc2Vzc2lvbi5leHBpcmVzLnZhbHVlT2YoKSA8IERhdGUubm93KCkpIHtcbiAgICAgICAgYXdhaXQgZGVsZXRlU2Vzc2lvbihzZXNzaW9uVG9rZW4pO1xuICAgICAgICB1c2VyQW5kU2Vzc2lvbiA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh1c2VyQW5kU2Vzc2lvbikge1xuICAgICAgICB2YXIgX2V2ZW50cyRzZXNzaW9uMjtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdXNlcixcbiAgICAgICAgICBzZXNzaW9uXG4gICAgICAgIH0gPSB1c2VyQW5kU2Vzc2lvbjtcbiAgICAgICAgY29uc3Qgc2Vzc2lvblVwZGF0ZUFnZSA9IHJlcS5vcHRpb25zLnNlc3Npb24udXBkYXRlQWdlO1xuICAgICAgICBjb25zdCBzZXNzaW9uSXNEdWVUb0JlVXBkYXRlZERhdGUgPSBzZXNzaW9uLmV4cGlyZXMudmFsdWVPZigpIC0gc2Vzc2lvbk1heEFnZSAqIDEwMDAgKyBzZXNzaW9uVXBkYXRlQWdlICogMTAwMDtcbiAgICAgICAgY29uc3QgbmV3RXhwaXJlcyA9ICgwLCBfdXRpbHMuZnJvbURhdGUpKHNlc3Npb25NYXhBZ2UpO1xuXG4gICAgICAgIGlmIChzZXNzaW9uSXNEdWVUb0JlVXBkYXRlZERhdGUgPD0gRGF0ZS5ub3coKSkge1xuICAgICAgICAgIGF3YWl0IHVwZGF0ZVNlc3Npb24oe1xuICAgICAgICAgICAgc2Vzc2lvblRva2VuLFxuICAgICAgICAgICAgZXhwaXJlczogbmV3RXhwaXJlc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvblBheWxvYWQgPSBhd2FpdCBjYWxsYmFja3Muc2Vzc2lvbih7XG4gICAgICAgICAgc2Vzc2lvbjoge1xuICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXG4gICAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICBpbWFnZTogdXNlci5pbWFnZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cGlyZXM6IHNlc3Npb24uZXhwaXJlcy50b0lTT1N0cmluZygpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1c2VyXG4gICAgICAgIH0pO1xuICAgICAgICByZXNwb25zZSA9IHNlc3Npb25QYXlsb2FkO1xuICAgICAgICBjb29raWUuc2V0KHJlcywgY29va2llcy5zZXNzaW9uVG9rZW4ubmFtZSwgc2Vzc2lvblRva2VuLCB7XG4gICAgICAgICAgZXhwaXJlczogbmV3RXhwaXJlcyxcbiAgICAgICAgICAuLi5jb29raWVzLnNlc3Npb25Ub2tlbi5vcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCAoKF9ldmVudHMkc2Vzc2lvbjIgPSBldmVudHMuc2Vzc2lvbikgPT09IG51bGwgfHwgX2V2ZW50cyRzZXNzaW9uMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2V2ZW50cyRzZXNzaW9uMi5jYWxsKGV2ZW50cywge1xuICAgICAgICAgIHNlc3Npb246IHNlc3Npb25QYXlsb2FkXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vzc2lvblRva2VuKSB7XG4gICAgICAgIGNvb2tpZS5zZXQocmVzLCBjb29raWVzLnNlc3Npb25Ub2tlbi5uYW1lLCBcIlwiLCB7IC4uLmNvb2tpZXMuc2Vzc2lvblRva2VuLm9wdGlvbnMsXG4gICAgICAgICAgbWF4QWdlOiAwXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoXCJTRVNTSU9OX0VSUk9SXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXMuanNvbihyZXNwb25zZSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2lnbmluO1xuXG52YXIgX2F1dGhvcml6YXRpb25VcmwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9saWIvb2F1dGgvYXV0aG9yaXphdGlvbi11cmxcIikpO1xuXG52YXIgX3NpZ25pbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xpYi9lbWFpbC9zaWduaW5cIikpO1xuXG5hc3luYyBmdW5jdGlvbiBzaWduaW4ocmVxLCByZXMpIHtcbiAgY29uc3Qge1xuICAgIGJhc2VVcmwsXG4gICAgYmFzZVBhdGgsXG4gICAgYWRhcHRlcixcbiAgICBjYWxsYmFja3MsXG4gICAgbG9nZ2VyXG4gIH0gPSByZXEub3B0aW9ucztcbiAgY29uc3QgcHJvdmlkZXIgPSByZXEub3B0aW9ucy5wcm92aWRlcjtcblxuICBpZiAoIXByb3ZpZGVyLnR5cGUpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmVuZChgRXJyb3I6IFR5cGUgbm90IHNwZWNpZmllZCBmb3IgJHtwcm92aWRlci5uYW1lfWApO1xuICB9XG5cbiAgaWYgKHByb3ZpZGVyLnR5cGUgPT09IFwib2F1dGhcIikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhdXRob3JpemF0aW9uVXJsID0gYXdhaXQgKDAsIF9hdXRob3JpemF0aW9uVXJsLmRlZmF1bHQpKHJlcSwgcmVzKTtcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYXV0aG9yaXphdGlvblVybCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZ2dlci5lcnJvcihcIlNJR05JTl9PQVVUSF9FUlJPUlwiLCB7XG4gICAgICAgIGVycm9yLFxuICAgICAgICBwcm92aWRlclxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9T0F1dGhTaWduaW5gKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvdmlkZXIudHlwZSA9PT0gXCJlbWFpbFwiKSB7XG4gICAgdmFyIF9yZXEkYm9keSRlbWFpbCR0b0xvdywgX3JlcSRib2R5JGVtYWlsLCBfcmVmO1xuXG4gICAgaWYgKCFhZGFwdGVyKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoXCJFTUFJTF9SRVFVSVJFU19BREFQVEVSX0VSUk9SXCIsIG5ldyBFcnJvcihcIkUtbWFpbCBsb2dpbiByZXF1aXJlcyBhbiBhZGFwdGVyIGJ1dCBpdCB3YXMgdW5kZWZpbmVkXCIpKTtcbiAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj9lcnJvcj1Db25maWd1cmF0aW9uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZW1haWwgPSAoX3JlcSRib2R5JGVtYWlsJHRvTG93ID0gKF9yZXEkYm9keSRlbWFpbCA9IHJlcS5ib2R5LmVtYWlsKSA9PT0gbnVsbCB8fCBfcmVxJGJvZHkkZW1haWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZXEkYm9keSRlbWFpbC50b0xvd2VyQ2FzZSgpKSAhPT0gbnVsbCAmJiBfcmVxJGJvZHkkZW1haWwkdG9Mb3cgIT09IHZvaWQgMCA/IF9yZXEkYm9keSRlbWFpbCR0b0xvdyA6IG51bGw7XG4gICAgY29uc3Qge1xuICAgICAgZ2V0VXNlckJ5RW1haWxcbiAgICB9ID0gYWRhcHRlcjtcbiAgICBjb25zdCB1c2VyID0gKF9yZWYgPSBlbWFpbCA/IGF3YWl0IGdldFVzZXJCeUVtYWlsKGVtYWlsKSA6IG51bGwpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiB7XG4gICAgICBlbWFpbFxuICAgIH07XG4gICAgY29uc3QgYWNjb3VudCA9IHtcbiAgICAgIHByb3ZpZGVyQWNjb3VudElkOiB1c2VyLmVtYWlsLFxuICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLmlkXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzaWduSW5DYWxsYmFja1Jlc3BvbnNlID0gYXdhaXQgY2FsbGJhY2tzLnNpZ25Jbih7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIGFjY291bnQsXG4gICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgdmVyaWZpY2F0aW9uUmVxdWVzdDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFzaWduSW5DYWxsYmFja1Jlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoYCR7YmFzZVVybH0ke2Jhc2VQYXRofS9lcnJvcj9lcnJvcj1BY2Nlc3NEZW5pZWRgKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNpZ25JbkNhbGxiYWNrUmVzcG9uc2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChzaWduSW5DYWxsYmFja1Jlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L2Vycm9yPyR7bmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIGVycm9yXG4gICAgICB9KX19YCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0ICgwLCBfc2lnbmluLmRlZmF1bHQpKGVtYWlsLCByZXEub3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGxvZ2dlci5lcnJvcihcIlNJR05JTl9FTUFJTF9FUlJPUlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAke2Jhc2VVcmx9JHtiYXNlUGF0aH0vZXJyb3I/ZXJyb3I9RW1haWxTaWduaW5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgIHByb3ZpZGVyOiBwcm92aWRlci5pZCxcbiAgICAgIHR5cGU6IHByb3ZpZGVyLnR5cGVcbiAgICB9KTtcbiAgICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L3ZlcmlmeS1yZXF1ZXN0PyR7cGFyYW1zfWA7XG4gICAgcmV0dXJuIHJlcy5yZWRpcmVjdCh1cmwpO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5yZWRpcmVjdChgJHtiYXNlVXJsfSR7YmFzZVBhdGh9L3NpZ25pbmApO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2lnbm91dDtcblxudmFyIGNvb2tpZSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9saWIvY29va2llXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIChub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuYXN5bmMgZnVuY3Rpb24gc2lnbm91dChyZXEsIHJlcykge1xuICBjb25zdCB7XG4gICAgYWRhcHRlcixcbiAgICBjb29raWVzLFxuICAgIGV2ZW50cyxcbiAgICBqd3QsXG4gICAgY2FsbGJhY2tVcmwsXG4gICAgbG9nZ2VyXG4gIH0gPSByZXEub3B0aW9ucztcbiAgY29uc3QgdXNlSnd0U2Vzc2lvbiA9IHJlcS5vcHRpb25zLnNlc3Npb24uand0O1xuICBjb25zdCBzZXNzaW9uVG9rZW4gPSByZXEuY29va2llc1tjb29raWVzLnNlc3Npb25Ub2tlbi5uYW1lXTtcblxuICBpZiAodXNlSnd0U2Vzc2lvbikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgX2V2ZW50cyRzaWduT3V0O1xuXG4gICAgICBjb25zdCBkZWNvZGVkSnd0ID0gYXdhaXQgand0LmRlY29kZSh7IC4uLmp3dCxcbiAgICAgICAgdG9rZW46IHNlc3Npb25Ub2tlblxuICAgICAgfSk7XG4gICAgICBhd2FpdCAoKF9ldmVudHMkc2lnbk91dCA9IGV2ZW50cy5zaWduT3V0KSA9PT0gbnVsbCB8fCBfZXZlbnRzJHNpZ25PdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudHMkc2lnbk91dC5jYWxsKGV2ZW50cywge1xuICAgICAgICB0b2tlbjogZGVjb2RlZEp3dFxuICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICB2YXIgX2V2ZW50cyRzaWduT3V0MjtcblxuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGFkYXB0ZXIuZGVsZXRlU2Vzc2lvbihzZXNzaW9uVG9rZW4pO1xuICAgICAgYXdhaXQgKChfZXZlbnRzJHNpZ25PdXQyID0gZXZlbnRzLnNpZ25PdXQpID09PSBudWxsIHx8IF9ldmVudHMkc2lnbk91dDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9ldmVudHMkc2lnbk91dDIuY2FsbChldmVudHMsIHtcbiAgICAgICAgc2Vzc2lvblxuICAgICAgfSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBsb2dnZXIuZXJyb3IoXCJTSUdOT1VUX0VSUk9SXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb29raWUuc2V0KHJlcywgY29va2llcy5zZXNzaW9uVG9rZW4ubmFtZSwgXCJcIiwgeyAuLi5jb29raWVzLnNlc3Npb25Ub2tlbi5vcHRpb25zLFxuICAgIG1heEFnZTogMFxuICB9KTtcbiAgcmV0dXJuIHJlcy5yZWRpcmVjdChjYWxsYmFja1VybCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7IiwiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuLy8gUHJpc21hQ2xpZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBgZ2xvYmFsYCBvYmplY3QgaW4gZGV2ZWxvcG1lbnQgdG8gcHJldmVudFxyXG4vLyBleGhhdXN0aW5nIHlvdXIgZGF0YWJhc2UgY29ubmVjdGlvbiBsaW1pdC5cclxuLy9cclxuLy8gTGVhcm4gbW9yZTpcclxuLy8gaHR0cHM6Ly9wcmlzLmx5L2QvaGVscC9uZXh0LWpzLWJlc3QtcHJhY3RpY2VzXHJcblxyXG4vLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbi8vIH0gZWxzZSB7XHJcbi8vICAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbi8vICAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4vLyAgIH1cclxuLy8gICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xyXG4vLyB9XHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcclxuIiwiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlcic7XG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSc7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnbmV4dC1hdXRoJztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgfSksXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lEIGFzIHN0cmluZyxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCBhcyBzdHJpbmcsXG4gICAgfSksXG4gIF0sXG4gIGp3dDoge1xuICAgIHNpZ25pbmdLZXk6IHByb2Nlc3MuZW52LkpXVF9TSUdOSU5HX1BSSVZBVEVfS0VZLFxuICB9LFxuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9hdXRoL3NpZ25pbicsIC8vIERpc3BsYXlzIHNpZ25pbiBidXR0b25zXG4gICAgLy8gc2lnbk91dDogJy9hdXRoL3NpZ25vdXQnLCAvLyBEaXNwbGF5cyBmb3JtIHdpdGggc2lnbiBvdXQgYnV0dG9uXG4gICAgLy8gZXJyb3I6ICcvYXV0aC9lcnJvcicsIC8vIEVycm9yIGNvZGUgcGFzc2VkIGluIHF1ZXJ5IHN0cmluZyBhcyA/ZXJyb3I9XG4gICAgLy8gdmVyaWZ5UmVxdWVzdDogJy9hdXRoL3ZlcmlmeS1yZXF1ZXN0JywgLy8gVXNlZCBmb3IgY2hlY2sgZW1haWwgcGFnZVxuICAgIC8vIG5ld1VzZXI6IG51bGwgLy8gSWYgc2V0LCBuZXcgdXNlcnMgd2lsbCBiZSBkaXJlY3RlZCBoZXJlIG9uIGZpcnN0IHNpZ24gaW5cbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIC8vIFNlbmQgcHJvcGVydGllcyB0byB0aGUgY2xpZW50LCBsaWtlIGFuIGFjY2Vzc190b2tlbiBmcm9tIGEgcHJvdmlkZXIuXG4gICAgICBzZXNzaW9uLnVzZXIuaWQgPSB1c2VyLmlkO1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnV0b2luLWhrZGZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiam9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvcGVuaWQtY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmVhY3QtcmVuZGVyLXRvLXN0cmluZ1wiKTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiTmV4dEF1dGgiLCJQcmlzbWFBZGFwdGVyIiwiR2l0aHViUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJHT09HTEVfSUQiLCJHT09HTEVfU0VDUkVUIiwiand0Iiwic2lnbmluZ0tleSIsIkpXVF9TSUdOSU5HX1BSSVZBVEVfS0VZIiwiYWRhcHRlciIsInNlY3JldCIsIlNFQ1JFVCIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==