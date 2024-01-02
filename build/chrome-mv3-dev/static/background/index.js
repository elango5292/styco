(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ksK4R":[function(require,module,exports) {
var u = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var h = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), b = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var v = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "C:\\Users\\Admin\\Desktop\\styco-main\\styco-main\\.plasmo\\static\\background\\index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function H(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function T(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function L(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", T), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", T), t.addEventListener("open", ()=>{
        b(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    v();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
L(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _background = require("../../../src/background");

},{"../../../src/background":"kimL1"}],"kimL1":[function(require,module,exports) {
var _setautherJs = require("@/setauther.js");
function setupContextMenu() {
    chrome.contextMenus.create({
        id: "change-style",
        title: 'Chage style for " %s "',
        contexts: [
            "selection"
        ]
    });
}
chrome.runtime.onInstalled.addListener(()=>{
    setupContextMenu();
    (0, _setautherJs.setauthor)("Stephen King");
});
chrome.contextMenus.onClicked.addListener(async (info, tab)=>{
    if (info.menuItemId === "change-style") try {
        chrome.tabs.sendMessage(tab.id, {
            type: "styco",
            text: info.selectionText
        });
    // runai("people are not bad. people are always good","king")
    // .then(second_response => console.log(second_response))
    } finally{
        console.log(info.selectionText);
    }
});

},{"@/setauther.js":"bT7y0"}],"bT7y0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setauthor", ()=>setauthor);
parcelHelpers.export(exports, "getauthor", ()=>getauthor);
var _storage = require("@plasmohq/storage");
async function setauthor(author) {
    const storage = new (0, _storage.Storage)();
    await storage.set("author", author);
}
async function getauthor() {
    const storage = new (0, _storage.Storage)();
    const author = await storage.get("author");
    return author;
}

},{"@plasmohq/storage":"i0YkM","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"i0YkM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseStorage", ()=>o);
parcelHelpers.export(exports, "Storage", ()=>l);
var _pify = require("pify");
var _pifyDefault = parcelHelpers.interopDefault(_pify);
var h = ()=>{
    try {
        let e = globalThis.navigator?.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (e[1] === "Chrome") return parseInt(e[2]) < 100 || globalThis.chrome.runtime?.getManifest()?.manifest_version === 2;
    } catch  {
        return !1;
    }
    return !1;
};
var o = class {
    #a;
    #e;
    get primaryClient() {
        return this.#e;
    }
    #t;
    get secondaryClient() {
        return this.#t;
    }
    #r;
    get area() {
        return this.#r;
    }
    get hasWebApi() {
        try {
            return typeof window < "u" && !!window.localStorage;
        } catch (e) {
            return console.error(e), !1;
        }
    }
    #s = new Map;
    #i;
    get copiedKeySet() {
        return this.#i;
    }
    isCopied = (e)=>this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e));
    #n = !1;
    get allCopied() {
        return this.#n;
    }
    getExtStorageApi = ()=>globalThis.browser?.storage || globalThis.chrome?.storage;
    get hasExtensionApi() {
        try {
            return !!this.getExtStorageApi();
        } catch (e) {
            return console.error(e), !1;
        }
    }
    isWatchSupported = ()=>this.hasExtensionApi;
    keyNamespace = "";
    isValidKey = (e)=>e.startsWith(this.keyNamespace);
    getNamespacedKey = (e)=>`${this.keyNamespace}${e}`;
    getUnnamespacedKey = (e)=>e.slice(this.keyNamespace.length);
    constructor({ area: e = "sync", allCopied: t = !1, copiedKeyList: s = [] } = {}){
        this.setCopiedKeySet(s), this.#r = e, this.#n = t;
        try {
            this.hasWebApi && (t || s.length > 0) && (this.#t = window.localStorage);
        } catch  {}
        try {
            this.hasExtensionApi && (this.#a = this.getExtStorageApi(), h() ? this.#e = (0, _pifyDefault.default)(this.#a[this.area], {
                exclude: [
                    "getBytesInUse"
                ],
                errorFirst: !1
            }) : this.#e = this.#a[this.area]);
        } catch  {}
    }
    setCopiedKeySet(e) {
        this.#i = new Set(e);
    }
    rawGetAll = ()=>this.#e?.get();
    getAll = async ()=>{
        let e = await this.rawGetAll();
        return Object.entries(e).filter(([t])=>this.isValidKey(t)).reduce((t, [s, a])=>(t[this.getUnnamespacedKey(s)] = a, t), {});
    };
    copy = async (e)=>{
        let t = e === void 0;
        if (!t && !this.copiedKeySet.has(e) || !this.allCopied || !this.hasExtensionApi) return !1;
        let s = this.allCopied ? await this.rawGetAll() : await this.#e.get((t ? [
            ...this.copiedKeySet
        ] : [
            e
        ]).map(this.getNamespacedKey));
        if (!s) return !1;
        let a = !1;
        for(let r in s){
            let i = s[r], n = this.#t?.getItem(r);
            this.#t?.setItem(r, i), a ||= i !== n;
        }
        return a;
    };
    rawGet = async (e)=>this.hasExtensionApi ? (await this.#e.get(e))[e] : this.isCopied(e) ? this.#t?.getItem(e) : null;
    rawSet = async (e, t)=>(this.isCopied(e) && this.#t?.setItem(e, t), this.hasExtensionApi && await this.#e.set({
            [e]: t
        }), null);
    clear = async (e = !1)=>{
        e && this.#t?.clear(), await this.#e.clear();
    };
    rawRemove = async (e)=>{
        this.isCopied(e) && this.#t?.removeItem(e), this.hasExtensionApi && await this.#e.remove(e);
    };
    removeAll = async ()=>{
        let e = await this.rawGetAll(), t = Object.keys(e);
        await Promise.all(t.map(this.rawRemove));
    };
    watch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#o(e), t;
    };
    #o = (e)=>{
        for(let t in e){
            let s = this.getNamespacedKey(t), a = this.#s.get(s)?.callbackSet || new Set;
            if (a.add(e[t]), a.size > 1) continue;
            let r = (i, n)=>{
                if (n !== this.area || !i[s]) return;
                let g = this.#s.get(s);
                Promise.all([
                    this.parseValue(i[s].newValue),
                    this.parseValue(i[s].oldValue)
                ]).then(([p, m])=>{
                    for (let d of g.callbackSet)d({
                        newValue: p,
                        oldValue: m
                    }, n);
                });
            };
            this.#a.onChanged.addListener(r), this.#s.set(s, {
                callbackSet: a,
                listener: r
            });
        }
    };
    unwatch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#c(e), t;
    };
    #c(e) {
        for(let t in e){
            let s = this.getNamespacedKey(t), a = e[t];
            if (this.#s.has(s)) {
                let r = this.#s.get(s);
                r.callbackSet.delete(a), r.callbackSet.size === 0 && (this.#s.delete(s), this.#a.onChanged.removeListener(r.listener));
            }
        }
    }
    unwatchAll = ()=>this.#h();
    #h() {
        this.#s.forEach(({ listener: e })=>this.#a.onChanged.removeListener(e)), this.#s.clear();
    }
    async getItem(e) {
        return this.get(e);
    }
    async setItem(e, t) {
        await this.set(e, t);
    }
    async removeItem(e) {
        return this.remove(e);
    }
}, l = class extends o {
    get = async (e)=>{
        let t = this.getNamespacedKey(e), s = await this.rawGet(t);
        return this.parseValue(s);
    };
    set = async (e, t)=>{
        let s = this.getNamespacedKey(e), a = JSON.stringify(t);
        return this.rawSet(s, a);
    };
    remove = async (e)=>{
        let t = this.getNamespacedKey(e);
        return this.rawRemove(t);
    };
    setNamespace = (e)=>{
        this.keyNamespace = e;
    };
    parseValue = async (e)=>{
        try {
            if (e !== void 0) return JSON.parse(e);
        } catch (t) {
            console.error(t);
        }
    };
};

},{"pify":"6Hkib","@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"6Hkib":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pify);
const processFunction = (function_, options, proxy, unwrapped)=>function(...arguments_) {
        const P = options.promiseModule;
        return new P((resolve, reject)=>{
            if (options.multiArgs) arguments_.push((...result)=>{
                if (options.errorFirst) {
                    if (result[0]) reject(result);
                    else {
                        result.shift();
                        resolve(result);
                    }
                } else resolve(result);
            });
            else if (options.errorFirst) arguments_.push((error, result)=>{
                if (error) reject(error);
                else resolve(result);
            });
            else arguments_.push(resolve);
            const self = this === proxy ? unwrapped : this;
            Reflect.apply(function_, self, arguments_);
        });
    };
const filterCache = new WeakMap();
function pify(input, options) {
    options = {
        exclude: [
            /.+(?:Sync|Stream)$/
        ],
        errorFirst: true,
        promiseModule: Promise,
        ...options
    };
    const objectType = typeof input;
    if (!(input !== null && (objectType === "object" || objectType === "function"))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
    const filter = (target, key)=>{
        let cached = filterCache.get(target);
        if (!cached) {
            cached = {};
            filterCache.set(target, cached);
        }
        if (key in cached) return cached[key];
        const match = (pattern)=>typeof pattern === "string" || typeof key === "symbol" ? key === pattern : pattern.test(key);
        const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
        const writableOrConfigurableOwn = descriptor === undefined || descriptor.writable || descriptor.configurable;
        const included = options.include ? options.include.some((element)=>match(element)) : !options.exclude.some((element)=>match(element));
        const shouldFilter = included && writableOrConfigurableOwn;
        cached[key] = shouldFilter;
        return shouldFilter;
    };
    const cache = new WeakMap();
    const proxy = new Proxy(input, {
        apply (target, thisArg, args) {
            const cached = cache.get(target);
            if (cached) return Reflect.apply(cached, thisArg, args);
            const pified = options.excludeMain ? target : processFunction(target, options, proxy, target);
            cache.set(target, pified);
            return Reflect.apply(pified, thisArg, args);
        },
        get (target, key) {
            const property = target[key];
            // eslint-disable-next-line no-use-extend-native/no-use-extend-native
            if (!filter(target, key) || property === Function.prototype[key]) return property;
            const cached = cache.get(property);
            if (cached) return cached;
            if (typeof property === "function") {
                const pified = processFunction(property, options, proxy, target);
                cache.set(property, pified);
                return pified;
            }
            return property;
        }
    });
    return proxy;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iIXqM"}],"iIXqM":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["ksK4R","8oeFb"], "8oeFb", "parcelRequire1ba1")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSTtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLFNBQVMsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7SUFDNUMsT0FBTyxlQUFlLE1BQU0sVUFBVTtRQUNwQyxZQUFZO1FBQ1osS0FBSztJQUNQO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTUyODllMjNmMThjZGQ2YmIuanMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwic3JjL2JhY2tncm91bmQudHMiLCJzcmMvc2V0YXV0aGVyLnRzIiwibm9kZV9tb2R1bGVzL0BwbGFzbW9ocS9zdG9yYWdlL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcGlmeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB1PXR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmFyZ3Y6W107dmFyIGg9KCk9PnR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmVudjp7fTt2YXIgQj1uZXcgU2V0KHUpLF89ZT0+Qi5oYXMoZSksRz11LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFU9XyhcIi0tZHJ5LXJ1blwiKSxnPSgpPT5fKFwiLS12ZXJib3NlXCIpfHxoKCkuVkVSQk9TRT09PVwidHJ1ZVwiLE49ZygpO3ZhciBtPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB5PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksYj0oLi4uZSk9Pm0oXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxmPSguLi5lKT0+bShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLE09MCxpPSguLi5lKT0+ZygpJiZtKGBcXHV7MUY3RTF9ICR7TSsrfWAsLi4uZSk7dmFyIHY9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCJDOlxcXFxVc2Vyc1xcXFxBZG1pblxcXFxEZXNrdG9wXFxcXHN0eWNvLW1haW5cXFxcc3R5Y28tbWFpblxcXFwucGxhc21vXFxcXHN0YXRpY1xcXFxiYWNrZ3JvdW5kXFxcXGluZGV4LnRzXCIsXCJidW5kbGVJZFwiOlwiYzMzODkwOGU3MDRjOTFmMVwiLFwiZW52SGFzaFwiOlwiZDk5YTVmZmE1N2FjZDYzOFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjEwMTJ9O21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRD1uLmJ1bmRsZUlkO2dsb2JhbFRoaXMucHJvY2Vzcz17YXJndjpbXSxlbnY6e1ZFUkJPU0U6bi52ZXJib3NlfX07dmFyIEQ9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU7ZnVuY3Rpb24gSChlKXtELmNhbGwodGhpcyxlKSx0aGlzLmhvdD17ZGF0YTptb2R1bGUuYnVuZGxlLmhvdERhdGFbZV0sX2FjY2VwdENhbGxiYWNrczpbXSxfZGlzcG9zZUNhbGxiYWNrczpbXSxhY2NlcHQ6ZnVuY3Rpb24odCl7dGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2godHx8ZnVuY3Rpb24oKXt9KX0sZGlzcG9zZTpmdW5jdGlvbih0KXt0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2godCl9fSxtb2R1bGUuYnVuZGxlLmhvdERhdGFbZV09dm9pZCAwfW1vZHVsZS5idW5kbGUuTW9kdWxlPUg7bW9kdWxlLmJ1bmRsZS5ob3REYXRhPXt9O3ZhciBjPWdsb2JhbFRoaXMuYnJvd3Nlcnx8Z2xvYmFsVGhpcy5jaHJvbWV8fG51bGw7ZnVuY3Rpb24gUigpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP2xvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpPT09MD9sb2NhdGlvbi5ob3N0bmFtZTpcImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiB4KCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gZCgpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIFA9XCJfX3BsYXNtb19ydW50aW1lX3BhZ2VfXCIsUz1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO3ZhciBPPWAke24uc2VjdXJlP1wiaHR0cHNcIjpcImh0dHBcIn06Ly8ke1IoKX06JHtkKCl9L2A7YXN5bmMgZnVuY3Rpb24gayhlPTE0NzApe2Zvcig7Oyl0cnl7YXdhaXQgZmV0Y2goTyk7YnJlYWt9Y2F0Y2h7YXdhaXQgbmV3IFByb21pc2Uobz0+c2V0VGltZW91dChvLGUpKX19aWYoYy5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbj09PTMpe2xldCBlPWMucnVudGltZS5nZXRVUkwoXCIvX19wbGFzbW9faG1yX3Byb3h5X18/dXJsPVwiKTtnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLGZ1bmN0aW9uKHQpe2xldCBvPXQucmVxdWVzdC51cmw7aWYoby5zdGFydHNXaXRoKGUpKXtsZXQgcz1uZXcgVVJMKGRlY29kZVVSSUNvbXBvbmVudChvLnNsaWNlKGUubGVuZ3RoKSkpO3MuaG9zdG5hbWU9PT1uLmhvc3QmJnMucG9ydD09PWAke24ucG9ydH1gPyhzLnNlYXJjaFBhcmFtcy5zZXQoXCJ0XCIsRGF0ZS5ub3coKS50b1N0cmluZygpKSx0LnJlc3BvbmRXaXRoKGZldGNoKHMpLnRoZW4ocj0+bmV3IFJlc3BvbnNlKHIuYm9keSx7aGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpyLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpPz9cInRleHQvamF2YXNjcmlwdFwifX0pKSkpOnQucmVzcG9uZFdpdGgobmV3IFJlc3BvbnNlKFwiUGxhc21vIEhNUlwiLHtzdGF0dXM6MjAwLHN0YXR1c1RleHQ6XCJUZXN0aW5nXCJ9KSl9fSl9ZnVuY3Rpb24gRShlLHQpe2xldHttb2R1bGVzOm99PWU7cmV0dXJuIG8/ISFvW3RdOiExfWZ1bmN0aW9uIEMoZT1kKCkpe2xldCB0PXgoKTtyZXR1cm5gJHtuLnNlY3VyZXx8bG9jYXRpb24ucHJvdG9jb2w9PT1cImh0dHBzOlwiJiYhL2xvY2FsaG9zdHwxMjcuMC4wLjF8MC4wLjAuMC8udGVzdCh0KT9cIndzc1wiOlwid3NcIn06Ly8ke3R9OiR7ZX0vYH1mdW5jdGlvbiBUKGUpe3R5cGVvZiBlLm1lc3NhZ2U9PVwic3RyaW5nXCImJnkoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrZS5tZXNzYWdlKX1mdW5jdGlvbiBMKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKE51bWJlcihkKCkpKzEpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTthd2FpdCBlKHMpfSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixUKSx0fWZ1bmN0aW9uIEEoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7aWYocy50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShzLmFzc2V0cykscy50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgciBvZiBzLmRpYWdub3N0aWNzLmFuc2kpe2xldCBsPXIuY29kZWZyYW1lfHxyLnN0YWNrO2YoXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrci5tZXNzYWdlK2BcbmArbCtgXG5cbmArci5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFQpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2IoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57ZihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHc9bW9kdWxlLmJ1bmRsZS5wYXJlbnQsYT17YnVpbGRSZWFkeTohMSxiZ0NoYW5nZWQ6ITEsY3NDaGFuZ2VkOiExLHBhZ2VDaGFuZ2VkOiExLHNjcmlwdFBvcnRzOm5ldyBTZXQscGFnZVBvcnRzOm5ldyBTZXR9O2FzeW5jIGZ1bmN0aW9uIHAoZT0hMSl7aWYoZXx8YS5idWlsZFJlYWR5JiZhLnBhZ2VDaGFuZ2VkKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIFBhZ2VcIik7Zm9yKGxldCB0IG9mIGEucGFnZVBvcnRzKXQucG9zdE1lc3NhZ2UobnVsbCl9aWYoZXx8YS5idWlsZFJlYWR5JiYoYS5iZ0NoYW5nZWR8fGEuY3NDaGFuZ2VkKSl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBDU1wiKTtsZXQgdD1hd2FpdCBjPy50YWJzLnF1ZXJ5KHthY3RpdmU6ITB9KTtmb3IobGV0IG8gb2YgYS5zY3JpcHRQb3J0cyl7bGV0IHM9dC5zb21lKHI9PnIuaWQ9PT1vLnNlbmRlci50YWI/LmlkKTtvLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19hY3RpdmVfdGFiX186c30pfWMucnVudGltZS5yZWxvYWQoKX19aWYoIXd8fCF3LmlzUGFyY2VsUmVxdWlyZSl7digpO2xldCBlPUEoYXN5bmMgdD0+e2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBITVIgVXBkYXRlXCIpLGEuYmdDaGFuZ2VkfHw9dC5maWx0ZXIocz0+cy5lbnZIYXNoPT09bi5lbnZIYXNoKS5zb21lKHM9PkUobW9kdWxlLmJ1bmRsZSxzLmlkKSk7bGV0IG89dC5maW5kKHM9PnMudHlwZT09PVwianNvblwiKTtpZihvKXtsZXQgcz1uZXcgU2V0KHQubWFwKGw9PmwuaWQpKSxyPU9iamVjdC52YWx1ZXMoby5kZXBzQnlCdW5kbGUpLm1hcChsPT5PYmplY3QudmFsdWVzKGwpKS5mbGF0KCk7YS5iZ0NoYW5nZWR8fD1yLmV2ZXJ5KGw9PnMuaGFzKGwpKX1wKCl9KTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntsZXQgdD1zZXRJbnRlcnZhbCgoKT0+ZS5zZW5kKFwicGluZ1wiKSwyNGUzKTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT5jbGVhckludGVydmFsKHQpKX0pLGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsYXN5bmMoKT0+e2F3YWl0IGsoKSxwKCEwKX0pfUwoYXN5bmMgZT0+e3N3aXRjaChpKFwiQkdTVyBSdW50aW1lIC0gT24gQnVpbGQgUmVwYWNrYWdlZFwiKSxlLnR5cGUpe2Nhc2VcImJ1aWxkX3JlYWR5XCI6e2EuYnVpbGRSZWFkeXx8PSEwLHAoKTticmVha31jYXNlXCJjc19jaGFuZ2VkXCI6e2EuY3NDaGFuZ2VkfHw9ITAscCgpO2JyZWFrfX19KTtjLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGZ1bmN0aW9uKGUpe2xldCB0PWUubmFtZS5zdGFydHNXaXRoKFApLG89ZS5uYW1lLnN0YXJ0c1dpdGgoUyk7aWYodHx8byl7bGV0IHM9dD9hLnBhZ2VQb3J0czphLnNjcmlwdFBvcnRzO3MuYWRkKGUpLGUub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57cy5kZWxldGUoZSl9KSxlLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyKXtpKFwiQkdTVyBSdW50aW1lIC0gT24gc291cmNlIGNoYW5nZWRcIixyKSxyLl9fcGxhc21vX2NzX2NoYW5nZWRfXyYmKGEuY3NDaGFuZ2VkfHw9ITApLHIuX19wbGFzbW9fcGFnZV9jaGFuZ2VkX18mJihhLnBhZ2VDaGFuZ2VkfHw9ITApLHAoKX0pfX0pO2MucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wbGFzbW9fZnVsbF9yZWxvYWRfXyYmKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiB0b3AtbGV2ZWwgY29kZSBjaGFuZ2VkXCIpLHAoKSksITB9KTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL3NyYy9iYWNrZ3JvdW5kXCIiLCJleHBvcnQge31cblxuXG5mdW5jdGlvbiBzZXR1cENvbnRleHRNZW51KCkge1xuICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICAgIGlkOiAnY2hhbmdlLXN0eWxlJyxcbiAgICAgIHRpdGxlOiAnQ2hhZ2Ugc3R5bGUgZm9yIFwiICVzIFwiJyxcbiAgICAgIGNvbnRleHRzOiBbJ3NlbGVjdGlvbiddXG4gICAgfSk7XG5cbiAgfVxuXG5pbXBvcnQgeyBzZXRhdXRob3J9IGZyb20gXCJAL3NldGF1dGhlci5qc1wiO1xuICBcbiAgY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgIHNldHVwQ29udGV4dE1lbnUoKTtcbiAgICBzZXRhdXRob3IoXCJTdGVwaGVuIEtpbmdcIilcbiAgfSk7XG5cblxuXG5jaHJvbWUuY29udGV4dE1lbnVzLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihhc3luYyAoaW5mbywgdGFiKSA9PiB7XG5cbiAgaWYgKGluZm8ubWVudUl0ZW1JZCA9PT0gJ2NoYW5nZS1zdHlsZScpIHtcbiAgIFxuICAgIHRyeXtcblxuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLHt0eXBlOlwic3R5Y29cIix0ZXh0OmluZm8uc2VsZWN0aW9uVGV4dH0pXG4gICAgICAvLyBydW5haShcInBlb3BsZSBhcmUgbm90IGJhZC4gcGVvcGxlIGFyZSBhbHdheXMgZ29vZFwiLFwia2luZ1wiKVxuICAgICAgLy8gLnRoZW4oc2Vjb25kX3Jlc3BvbnNlID0+IGNvbnNvbGUubG9nKHNlY29uZF9yZXNwb25zZSkpXG4gICAgfWZpbmFsbHl7XG4gICAgICBjb25zb2xlLmxvZyhpbmZvLnNlbGVjdGlvblRleHQpXG4gXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuICB9XG5cbiAgXG5cblxufSk7XG4iLCJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiQHBsYXNtb2hxL3N0b3JhZ2VcIlxuIFxuXG5hc3luYyBmdW5jdGlvbiBzZXRhdXRob3IoYXV0aG9yOnN0cmluZyl7XG4gICAgY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKClcbiAgICBhd2FpdCBzdG9yYWdlLnNldChcImF1dGhvclwiLCBhdXRob3IpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldGF1dGhvcigpe1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpXG4gICAgY29uc3QgYXV0aG9yID0gYXdhaXQgc3RvcmFnZS5nZXQoXCJhdXRob3JcIilcbiAgICByZXR1cm4gYXV0aG9yXG59XG5cbmV4cG9ydCB7c2V0YXV0aG9yICwgZ2V0YXV0aG9yfSIsImltcG9ydCB5IGZyb21cInBpZnlcIjt2YXIgaD0oKT0+e3RyeXtsZXQgZT0oZ2xvYmFsVGhpcy5uYXZpZ2F0b3I/LnVzZXJBZ2VudCkubWF0Y2goLyhvcGVyYXxjaHJvbWV8c2FmYXJpfGZpcmVmb3h8bXNpZXx0cmlkZW50KD89XFwvKSlcXC8/XFxzKihcXGQrKS9pKXx8W107aWYoZVsxXT09PVwiQ2hyb21lXCIpcmV0dXJuIHBhcnNlSW50KGVbMl0pPDEwMHx8Z2xvYmFsVGhpcy5jaHJvbWUucnVudGltZT8uZ2V0TWFuaWZlc3QoKT8ubWFuaWZlc3RfdmVyc2lvbj09PTJ9Y2F0Y2h7cmV0dXJuITF9cmV0dXJuITF9O3ZhciBvPWNsYXNzeyNhOyNlO2dldCBwcmltYXJ5Q2xpZW50KCl7cmV0dXJuIHRoaXMuI2V9I3Q7Z2V0IHNlY29uZGFyeUNsaWVudCgpe3JldHVybiB0aGlzLiN0fSNyO2dldCBhcmVhKCl7cmV0dXJuIHRoaXMuI3J9Z2V0IGhhc1dlYkFwaSgpe3RyeXtyZXR1cm4gdHlwZW9mIHdpbmRvdzxcInVcIiYmISF3aW5kb3cubG9jYWxTdG9yYWdlfWNhdGNoKGUpe3JldHVybiBjb25zb2xlLmVycm9yKGUpLCExfX0jcz1uZXcgTWFwOyNpO2dldCBjb3BpZWRLZXlTZXQoKXtyZXR1cm4gdGhpcy4jaX1pc0NvcGllZD1lPT50aGlzLmhhc1dlYkFwaSYmKHRoaXMuYWxsQ29waWVkfHx0aGlzLmNvcGllZEtleVNldC5oYXMoZSkpOyNuPSExO2dldCBhbGxDb3BpZWQoKXtyZXR1cm4gdGhpcy4jbn1nZXRFeHRTdG9yYWdlQXBpPSgpPT5nbG9iYWxUaGlzLmJyb3dzZXI/LnN0b3JhZ2V8fGdsb2JhbFRoaXMuY2hyb21lPy5zdG9yYWdlO2dldCBoYXNFeHRlbnNpb25BcGkoKXt0cnl7cmV0dXJuISF0aGlzLmdldEV4dFN0b3JhZ2VBcGkoKX1jYXRjaChlKXtyZXR1cm4gY29uc29sZS5lcnJvcihlKSwhMX19aXNXYXRjaFN1cHBvcnRlZD0oKT0+dGhpcy5oYXNFeHRlbnNpb25BcGk7a2V5TmFtZXNwYWNlPVwiXCI7aXNWYWxpZEtleT1lPT5lLnN0YXJ0c1dpdGgodGhpcy5rZXlOYW1lc3BhY2UpO2dldE5hbWVzcGFjZWRLZXk9ZT0+YCR7dGhpcy5rZXlOYW1lc3BhY2V9JHtlfWA7Z2V0VW5uYW1lc3BhY2VkS2V5PWU9PmUuc2xpY2UodGhpcy5rZXlOYW1lc3BhY2UubGVuZ3RoKTtjb25zdHJ1Y3Rvcih7YXJlYTplPVwic3luY1wiLGFsbENvcGllZDp0PSExLGNvcGllZEtleUxpc3Q6cz1bXX09e30pe3RoaXMuc2V0Q29waWVkS2V5U2V0KHMpLHRoaXMuI3I9ZSx0aGlzLiNuPXQ7dHJ5e3RoaXMuaGFzV2ViQXBpJiYodHx8cy5sZW5ndGg+MCkmJih0aGlzLiN0PXdpbmRvdy5sb2NhbFN0b3JhZ2UpfWNhdGNoe310cnl7dGhpcy5oYXNFeHRlbnNpb25BcGkmJih0aGlzLiNhPXRoaXMuZ2V0RXh0U3RvcmFnZUFwaSgpLGgoKT90aGlzLiNlPXkodGhpcy4jYVt0aGlzLmFyZWFdLHtleGNsdWRlOltcImdldEJ5dGVzSW5Vc2VcIl0sZXJyb3JGaXJzdDohMX0pOnRoaXMuI2U9dGhpcy4jYVt0aGlzLmFyZWFdKX1jYXRjaHt9fXNldENvcGllZEtleVNldChlKXt0aGlzLiNpPW5ldyBTZXQoZSl9cmF3R2V0QWxsPSgpPT50aGlzLiNlPy5nZXQoKTtnZXRBbGw9YXN5bmMoKT0+e2xldCBlPWF3YWl0IHRoaXMucmF3R2V0QWxsKCk7cmV0dXJuIE9iamVjdC5lbnRyaWVzKGUpLmZpbHRlcigoW3RdKT0+dGhpcy5pc1ZhbGlkS2V5KHQpKS5yZWR1Y2UoKHQsW3MsYV0pPT4odFt0aGlzLmdldFVubmFtZXNwYWNlZEtleShzKV09YSx0KSx7fSl9O2NvcHk9YXN5bmMgZT0+e2xldCB0PWU9PT12b2lkIDA7aWYoIXQmJiF0aGlzLmNvcGllZEtleVNldC5oYXMoZSl8fCF0aGlzLmFsbENvcGllZHx8IXRoaXMuaGFzRXh0ZW5zaW9uQXBpKXJldHVybiExO2xldCBzPXRoaXMuYWxsQ29waWVkP2F3YWl0IHRoaXMucmF3R2V0QWxsKCk6YXdhaXQgdGhpcy4jZS5nZXQoKHQ/Wy4uLnRoaXMuY29waWVkS2V5U2V0XTpbZV0pLm1hcCh0aGlzLmdldE5hbWVzcGFjZWRLZXkpKTtpZighcylyZXR1cm4hMTtsZXQgYT0hMTtmb3IobGV0IHIgaW4gcyl7bGV0IGk9c1tyXSxuPXRoaXMuI3Q/LmdldEl0ZW0ocik7dGhpcy4jdD8uc2V0SXRlbShyLGkpLGF8fD1pIT09bn1yZXR1cm4gYX07cmF3R2V0PWFzeW5jIGU9PnRoaXMuaGFzRXh0ZW5zaW9uQXBpPyhhd2FpdCB0aGlzLiNlLmdldChlKSlbZV06dGhpcy5pc0NvcGllZChlKT90aGlzLiN0Py5nZXRJdGVtKGUpOm51bGw7cmF3U2V0PWFzeW5jKGUsdCk9Pih0aGlzLmlzQ29waWVkKGUpJiZ0aGlzLiN0Py5zZXRJdGVtKGUsdCksdGhpcy5oYXNFeHRlbnNpb25BcGkmJmF3YWl0IHRoaXMuI2Uuc2V0KHtbZV06dH0pLG51bGwpO2NsZWFyPWFzeW5jKGU9ITEpPT57ZSYmdGhpcy4jdD8uY2xlYXIoKSxhd2FpdCB0aGlzLiNlLmNsZWFyKCl9O3Jhd1JlbW92ZT1hc3luYyBlPT57dGhpcy5pc0NvcGllZChlKSYmdGhpcy4jdD8ucmVtb3ZlSXRlbShlKSx0aGlzLmhhc0V4dGVuc2lvbkFwaSYmYXdhaXQgdGhpcy4jZS5yZW1vdmUoZSl9O3JlbW92ZUFsbD1hc3luYygpPT57bGV0IGU9YXdhaXQgdGhpcy5yYXdHZXRBbGwoKSx0PU9iamVjdC5rZXlzKGUpO2F3YWl0IFByb21pc2UuYWxsKHQubWFwKHRoaXMucmF3UmVtb3ZlKSl9O3dhdGNoPWU9PntsZXQgdD10aGlzLmlzV2F0Y2hTdXBwb3J0ZWQoKTtyZXR1cm4gdCYmdGhpcy4jbyhlKSx0fTsjbz1lPT57Zm9yKGxldCB0IGluIGUpe2xldCBzPXRoaXMuZ2V0TmFtZXNwYWNlZEtleSh0KSxhPXRoaXMuI3MuZ2V0KHMpPy5jYWxsYmFja1NldHx8bmV3IFNldDtpZihhLmFkZChlW3RdKSxhLnNpemU+MSljb250aW51ZTtsZXQgcj0oaSxuKT0+e2lmKG4hPT10aGlzLmFyZWF8fCFpW3NdKXJldHVybjtsZXQgZz10aGlzLiNzLmdldChzKTtQcm9taXNlLmFsbChbdGhpcy5wYXJzZVZhbHVlKGlbc10ubmV3VmFsdWUpLHRoaXMucGFyc2VWYWx1ZShpW3NdLm9sZFZhbHVlKV0pLnRoZW4oKFtwLG1dKT0+e2ZvcihsZXQgZCBvZiBnLmNhbGxiYWNrU2V0KWQoe25ld1ZhbHVlOnAsb2xkVmFsdWU6bX0sbil9KX07dGhpcy4jYS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIociksdGhpcy4jcy5zZXQocyx7Y2FsbGJhY2tTZXQ6YSxsaXN0ZW5lcjpyfSl9fTt1bndhdGNoPWU9PntsZXQgdD10aGlzLmlzV2F0Y2hTdXBwb3J0ZWQoKTtyZXR1cm4gdCYmdGhpcy4jYyhlKSx0fTsjYyhlKXtmb3IobGV0IHQgaW4gZSl7bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KHQpLGE9ZVt0XTtpZih0aGlzLiNzLmhhcyhzKSl7bGV0IHI9dGhpcy4jcy5nZXQocyk7ci5jYWxsYmFja1NldC5kZWxldGUoYSksci5jYWxsYmFja1NldC5zaXplPT09MCYmKHRoaXMuI3MuZGVsZXRlKHMpLHRoaXMuI2Eub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKHIubGlzdGVuZXIpKX19fXVud2F0Y2hBbGw9KCk9PnRoaXMuI2goKTsjaCgpe3RoaXMuI3MuZm9yRWFjaCgoe2xpc3RlbmVyOmV9KT0+dGhpcy4jYS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIoZSkpLHRoaXMuI3MuY2xlYXIoKX1hc3luYyBnZXRJdGVtKGUpe3JldHVybiB0aGlzLmdldChlKX1hc3luYyBzZXRJdGVtKGUsdCl7YXdhaXQgdGhpcy5zZXQoZSx0KX1hc3luYyByZW1vdmVJdGVtKGUpe3JldHVybiB0aGlzLnJlbW92ZShlKX19LGw9Y2xhc3MgZXh0ZW5kcyBve2dldD1hc3luYyBlPT57bGV0IHQ9dGhpcy5nZXROYW1lc3BhY2VkS2V5KGUpLHM9YXdhaXQgdGhpcy5yYXdHZXQodCk7cmV0dXJuIHRoaXMucGFyc2VWYWx1ZShzKX07c2V0PWFzeW5jKGUsdCk9PntsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkoZSksYT1KU09OLnN0cmluZ2lmeSh0KTtyZXR1cm4gdGhpcy5yYXdTZXQocyxhKX07cmVtb3ZlPWFzeW5jIGU9PntsZXQgdD10aGlzLmdldE5hbWVzcGFjZWRLZXkoZSk7cmV0dXJuIHRoaXMucmF3UmVtb3ZlKHQpfTtzZXROYW1lc3BhY2U9ZT0+e3RoaXMua2V5TmFtZXNwYWNlPWV9O3BhcnNlVmFsdWU9YXN5bmMgZT0+e3RyeXtpZihlIT09dm9pZCAwKXJldHVybiBKU09OLnBhcnNlKGUpfWNhdGNoKHQpe2NvbnNvbGUuZXJyb3IodCl9fX07ZXhwb3J0e28gYXMgQmFzZVN0b3JhZ2UsbCBhcyBTdG9yYWdlfTtcbiIsImNvbnN0IHByb2Nlc3NGdW5jdGlvbiA9IChmdW5jdGlvbl8sIG9wdGlvbnMsIHByb3h5LCB1bndyYXBwZWQpID0+IGZ1bmN0aW9uICguLi5hcmd1bWVudHNfKSB7XG5cdGNvbnN0IFAgPSBvcHRpb25zLnByb21pc2VNb2R1bGU7XG5cblx0cmV0dXJuIG5ldyBQKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRpZiAob3B0aW9ucy5tdWx0aUFyZ3MpIHtcblx0XHRcdGFyZ3VtZW50c18ucHVzaCgoLi4ucmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChvcHRpb25zLmVycm9yRmlyc3QpIHtcblx0XHRcdFx0XHRpZiAocmVzdWx0WzBdKSB7XG5cdFx0XHRcdFx0XHRyZWplY3QocmVzdWx0KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnNoaWZ0KCk7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmIChvcHRpb25zLmVycm9yRmlyc3QpIHtcblx0XHRcdGFyZ3VtZW50c18ucHVzaCgoZXJyb3IsIHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc29sdmUocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFyZ3VtZW50c18ucHVzaChyZXNvbHZlKTtcblx0XHR9XG5cblx0XHRjb25zdCBzZWxmID0gdGhpcyA9PT0gcHJveHkgPyB1bndyYXBwZWQgOiB0aGlzO1xuXHRcdFJlZmxlY3QuYXBwbHkoZnVuY3Rpb25fLCBzZWxmLCBhcmd1bWVudHNfKTtcblx0fSk7XG59O1xuXG5jb25zdCBmaWx0ZXJDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpZnkoaW5wdXQsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IHtcblx0XHRleGNsdWRlOiBbLy4rKD86U3luY3xTdHJlYW0pJC9dLFxuXHRcdGVycm9yRmlyc3Q6IHRydWUsXG5cdFx0cHJvbWlzZU1vZHVsZTogUHJvbWlzZSxcblx0XHQuLi5vcHRpb25zLFxuXHR9O1xuXG5cdGNvbnN0IG9iamVjdFR5cGUgPSB0eXBlb2YgaW5wdXQ7XG5cdGlmICghKGlucHV0ICE9PSBudWxsICYmIChvYmplY3RUeXBlID09PSAnb2JqZWN0JyB8fCBvYmplY3RUeXBlID09PSAnZnVuY3Rpb24nKSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBcXGBpbnB1dFxcYCB0byBiZSBhIFxcYEZ1bmN0aW9uXFxgIG9yIFxcYE9iamVjdFxcYCwgZ290IFxcYCR7aW5wdXQgPT09IG51bGwgPyAnbnVsbCcgOiBvYmplY3RUeXBlfVxcYGApO1xuXHR9XG5cblx0Y29uc3QgZmlsdGVyID0gKHRhcmdldCwga2V5KSA9PiB7XG5cdFx0bGV0IGNhY2hlZCA9IGZpbHRlckNhY2hlLmdldCh0YXJnZXQpO1xuXG5cdFx0aWYgKCFjYWNoZWQpIHtcblx0XHRcdGNhY2hlZCA9IHt9O1xuXHRcdFx0ZmlsdGVyQ2FjaGUuc2V0KHRhcmdldCwgY2FjaGVkKTtcblx0XHR9XG5cblx0XHRpZiAoa2V5IGluIGNhY2hlZCkge1xuXHRcdFx0cmV0dXJuIGNhY2hlZFtrZXldO1xuXHRcdH1cblxuXHRcdGNvbnN0IG1hdGNoID0gcGF0dGVybiA9PiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBrZXkgPT09ICdzeW1ib2wnKSA/IGtleSA9PT0gcGF0dGVybiA6IHBhdHRlcm4udGVzdChrZXkpO1xuXHRcdGNvbnN0IGRlc2NyaXB0b3IgPSBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG5cdFx0Y29uc3Qgd3JpdGFibGVPckNvbmZpZ3VyYWJsZU93biA9IChkZXNjcmlwdG9yID09PSB1bmRlZmluZWQgfHwgZGVzY3JpcHRvci53cml0YWJsZSB8fCBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSk7XG5cdFx0Y29uc3QgaW5jbHVkZWQgPSBvcHRpb25zLmluY2x1ZGUgPyBvcHRpb25zLmluY2x1ZGUuc29tZShlbGVtZW50ID0+IG1hdGNoKGVsZW1lbnQpKSA6ICFvcHRpb25zLmV4Y2x1ZGUuc29tZShlbGVtZW50ID0+IG1hdGNoKGVsZW1lbnQpKTtcblx0XHRjb25zdCBzaG91bGRGaWx0ZXIgPSBpbmNsdWRlZCAmJiB3cml0YWJsZU9yQ29uZmlndXJhYmxlT3duO1xuXHRcdGNhY2hlZFtrZXldID0gc2hvdWxkRmlsdGVyO1xuXHRcdHJldHVybiBzaG91bGRGaWx0ZXI7XG5cdH07XG5cblx0Y29uc3QgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5cdGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KGlucHV0LCB7XG5cdFx0YXBwbHkodGFyZ2V0LCB0aGlzQXJnLCBhcmdzKSB7XG5cdFx0XHRjb25zdCBjYWNoZWQgPSBjYWNoZS5nZXQodGFyZ2V0KTtcblxuXHRcdFx0aWYgKGNhY2hlZCkge1xuXHRcdFx0XHRyZXR1cm4gUmVmbGVjdC5hcHBseShjYWNoZWQsIHRoaXNBcmcsIGFyZ3MpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwaWZpZWQgPSBvcHRpb25zLmV4Y2x1ZGVNYWluID8gdGFyZ2V0IDogcHJvY2Vzc0Z1bmN0aW9uKHRhcmdldCwgb3B0aW9ucywgcHJveHksIHRhcmdldCk7XG5cdFx0XHRjYWNoZS5zZXQodGFyZ2V0LCBwaWZpZWQpO1xuXHRcdFx0cmV0dXJuIFJlZmxlY3QuYXBwbHkocGlmaWVkLCB0aGlzQXJnLCBhcmdzKTtcblx0XHR9LFxuXG5cdFx0Z2V0KHRhcmdldCwga2V5KSB7XG5cdFx0XHRjb25zdCBwcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWV4dGVuZC1uYXRpdmUvbm8tdXNlLWV4dGVuZC1uYXRpdmVcblx0XHRcdGlmICghZmlsdGVyKHRhcmdldCwga2V5KSB8fCBwcm9wZXJ0eSA9PT0gRnVuY3Rpb24ucHJvdG90eXBlW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuIHByb3BlcnR5O1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjYWNoZWQgPSBjYWNoZS5nZXQocHJvcGVydHkpO1xuXG5cdFx0XHRpZiAoY2FjaGVkKSB7XG5cdFx0XHRcdHJldHVybiBjYWNoZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgcGlmaWVkID0gcHJvY2Vzc0Z1bmN0aW9uKHByb3BlcnR5LCBvcHRpb25zLCBwcm94eSwgdGFyZ2V0KTtcblx0XHRcdFx0Y2FjaGUuc2V0KHByb3BlcnR5LCBwaWZpZWQpO1xuXHRcdFx0XHRyZXR1cm4gcGlmaWVkO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcHJvcGVydHk7XG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIHByb3h5O1xufVxuIiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);