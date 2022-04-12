// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _router = require("./router");
var _index = require("./components/title-text/index");
var _buttonStart = require("./components/button-start");
var _index1 = require("./components/papel-comp/index");
var _index2 = require("./components/piedra-comp/index");
var _tijeraComp = require("./components/tijera-comp");
var _index3 = require("./components/button-play/index");
var _instructionComp = require("./components/instruction-comp");
var _buttonPlayagain = require("./components/button-playagain");
var _index4 = require("./components/counter/index");
var _historyGame = require("./components/history-game");
(function() {
    _index.titleText();
    _buttonStart.buttonStart();
    _index3.buttonPlay();
    _index1.papel();
    _index2.piedra();
    _tijeraComp.tijera();
    _instructionComp.instructionsComp();
    _buttonPlayagain.buttonPlayAgain();
    _index4.counterComp();
    _historyGame.historyComp();
    const root = document.querySelector(".root");
    _router.initRouter(root);
})();

},{"./router":"b2iia","./components/title-text/index":"3QvFM","./components/button-start":"9F0Ma","./components/papel-comp/index":"cCufa","./components/piedra-comp/index":"jMtgL","./components/tijera-comp":"roM93","./components/button-play/index":"hl5hE","./components/instruction-comp":"e9lCc","./components/button-playagain":"leAA5","./components/counter/index":"kSmEm","./components/history-game":"3puv8"}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _instructions = require("./pages/instructions");
var _index = require("./pages/welcome/index");
var _index1 = require("./pages/play/index");
var _ganaste = require("./pages/result/ganaste");
var _perdiste = require("./pages/result/perdiste");
var _empate = require("./pages/result/empate");
var _jugada = require("./pages/jugada");
const routes = [
    {
        path: /\/welcome/,
        component: _index.welcomePage
    },
    {
        path: /\/instructions/,
        component: _instructions.instructionsPage
    },
    {
        path: /\/play/,
        component: _index1.play
    },
    {
        path: /\/result\/perdiste/,
        component: _perdiste.perdiste
    },
    {
        path: /\/result\/jugada/,
        component: _jugada.jugada
    },
    {
        path: /\/result\/ganaste/,
        component: _ganaste.ganaste
    },
    {
        path: /\/result\/empate/,
        component: _empate.empate
    }, 
];
function initRouter(container) {
    function goTo(path, data) {
        history.pushState(data, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname === "/") goTo("/welcome", "");
    else handleRoute(location.pathname);
    window.onpopstate = (event)=>{
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome/index":"bFh5y","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./pages/instructions":"iaM8p","./pages/play/index":"dLRVB","./pages/result/ganaste":"fgnxi","./pages/result/perdiste":"bargu","./pages/result/empate":"en76d","./pages/jugada":"hXoBe"}],"bFh5y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "welcomePage", ()=>welcomePage
);
function welcomePage(params) {
    const div = document.createElement("div");
    div.className = "contenedor";
    div.innerHTML = `\n        <title-text></title-text>\n        <button-start></button-start>\n        <div class="container">\n        <piedra-comp></piedra-comp>\n        <papel-comp></papel-comp>\n        <tijera-comp></tijera-comp>\n        </div>\n       \n    `;
    const button = div.querySelector("button-start");
    button.addEventListener("click", (event)=>{
        event.preventDefault();
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
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

},{}],"iaM8p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instructionsPage", ()=>instructionsPage
);
function instructionsPage(params) {
    const div = document.createElement("div");
    div.className = "contenedor";
    div.innerHTML = `\n        <instructions-comp></instructions-comp>\n        <button-play></button-play>\n        <div class="container">\n        <piedra-comp></piedra-comp>\n        <papel-comp></papel-comp>\n        <tijera-comp></tijera-comp>\n        </div>\n    `;
    const button = div.querySelector("button-play");
    button.addEventListener("click", (event)=>{
        event.preventDefault();
        params.goTo("/play");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dLRVB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "play", ()=>play
);
var _state = require("../../state");
function play(params) {
    function redireccionar() {
        if (location.pathname === "/play") params.goTo("/instructions");
    }
    setTimeout(redireccionar, 5000);
    const div = document.createElement("div");
    div.className = "container-play";
    div.innerHTML = `\n    \n    <counter-comp></counter-comp>\n    <div class="jugadas">\n    <piedra-comp></piedra-comp>\n    <papel-comp></papel-comp>\n    <tijera-comp></tijera-comp>\n    </div>\n    `;
    function jugadaMaquina() {
        const opciones = [
            "piedra",
            "papel",
            "tijera"
        ];
        const resultado = opciones[Math.floor(Math.random() * opciones.length)];
        return resultado;
    }
    const piedra = div.querySelector("piedra-comp");
    const papel = div.querySelector("papel-comp");
    const tijera = div.querySelector("tijera-comp");
    piedra.addEventListener("click", (event)=>{
        event.preventDefault();
        papel.style.opacity = "0.4";
        tijera.style.opacity = "0.4";
        const playMaquina = jugadaMaquina();
        const resultado = _state.state.whoWins("piedra", playMaquina);
        setTimeout(()=>{
            if (resultado === "gane") {
                _state.state.win();
                return params.goTo("/result/jugada", {
                    resultado: "ganaste",
                    player: "piedra",
                    machine: playMaquina
                });
            }
            if (resultado === "empate") return params.goTo("/result/jugada", {
                resultado: "empate",
                player: "piedra",
                machine: playMaquina
            });
            else {
                _state.state.lost();
                return params.goTo("/result/jugada", {
                    resultado: "perdiste",
                    player: "piedra",
                    machine: playMaquina
                });
            }
        }, 700);
    });
    papel.addEventListener("click", (event)=>{
        event.preventDefault();
        piedra.style.opacity = "0.4";
        tijera.style.opacity = "0.4";
        const resultado = _state.state.whoWins("papel", jugadaMaquina());
        setTimeout(()=>{
            if (resultado === "gane") {
                _state.state.win();
                return params.goTo(`/result/${history.state.resultado}`);
            }
            if (resultado === "empate") return params.goTo("/result/empate");
            else {
                _state.state.lost();
                return params.goTo("/result/perdiste");
            }
        }, 700);
    });
    tijera.addEventListener("click", (event)=>{
        event.preventDefault();
        papel.style.opacity = "0.4";
        piedra.style.opacity = "0.4";
        const resultado = _state.state.whoWins("tijera", jugadaMaquina());
        setTimeout(()=>{
            if (resultado === "gane") {
                _state.state.win();
                return params.goTo("/result/ganaste");
            }
            if (resultado === "empate") return params.goTo("/result/empate");
            else {
                _state.state.lost();
                return params.goTo("/result/perdiste");
            }
        }, 700);
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../../state":"28XHA"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: [
            {
            }
        ]
    },
    win () {
        if (!!sessionStorage.getItem("vos")) {
            const value = sessionStorage.getItem("vos");
            return sessionStorage.setItem("vos", JSON.stringify(Number(value) + 1));
        }
        sessionStorage.setItem("vos", "1");
    },
    lost () {
        if (!!sessionStorage.getItem("maquina")) {
            const value = sessionStorage.getItem("maquina");
            sessionStorage.setItem("maquina", JSON.stringify(Number(value) + 1));
        } else sessionStorage.setItem("maquina", "1");
    },
    historyVos () {
        const value = JSON.parse(sessionStorage.getItem("vos"));
        return value;
    },
    historyMaquina () {
        const value = JSON.parse(sessionStorage.getItem("maquina"));
        return value;
    },
    whoWins (myPlay, computerPlay) {
        if (myPlay === "papel" && computerPlay === "piedra") return "gane";
        if (myPlay === "piedra" && computerPlay === "tijera") return "gane";
        if (myPlay === "tijera" && computerPlay === "papel") return "gane";
        if (myPlay === computerPlay) return "empate";
        else return "perdi";
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fgnxi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ganaste", ()=>ganaste
);
const image = require("url:../../images/ganaste.svg");
function ganaste(params) {
    const div = document.createElement("div");
    div.className = "container-ganaste";
    console.log(history.state.resultado);
    console.log(history.state.player);
    console.log(history.state.machine);
    div.innerHTML = `\n        <img src="${image}">\n        <history-comp></history-comp>\n        <button-playagain></button-playagain>\n    \n        `;
    const button = div.querySelector("button-playagain");
    button.addEventListener("click", (event)=>{
        event.preventDefault();
        params.goTo("/play");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../images/ganaste.svg":"93kOd"}],"93kOd":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "ganaste.8fda546e.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bargu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "perdiste", ()=>perdiste
);
const image = require("url:../../images/perdiste.svg");
function perdiste(params) {
    const div = document.createElement("div");
    div.className = "container-perdiste";
    console.log(history.state.resultado);
    console.log(history.state.player);
    console.log(history.state.machine);
    div.innerHTML = `\n        <img src="${image}" >\n        <history-comp></history-comp>\n        <button-playagain></button-playagain>\n\n        `;
    const button = div.querySelector("button-playagain");
    button.addEventListener("click", (event)=>{
        event.preventDefault();
        params.goTo("/play");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../images/perdiste.svg":"53PIf"}],"53PIf":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "perdiste.3c175a61.svg";

},{"./helpers/bundle-url":"8YnfL"}],"en76d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "empate", ()=>empate
);
const image = require("url:../../images/ganaste.svg");
const giphy = require("url:../../images/giphy.gif");
function empate(params) {
    const div = document.createElement("div");
    div.className = "container-empate";
    console.log(history.state.resultado);
    console.log(history.state.player);
    console.log(history.state.machine);
    div.innerHTML = `\n        <img src="${giphy}" alt="">\n        <button-playagain></button-playagain>\n    \n        `;
    const button = div.querySelector("button-playagain");
    button.addEventListener("click", (event)=>{
        event.preventDefault();
        params.goTo("/play");
    });
    return div;
}

},{"url:../../images/ganaste.svg":"93kOd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","url:../../images/giphy.gif":"43gMO"}],"43gMO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "giphy.d20f452e.gif";

},{"./helpers/bundle-url":"8YnfL"}],"hXoBe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "jugada", ()=>jugada
);
function jugada(params) {
    const div = document.createElement("div");
    div.className = "container-jugada";
    console.log(history.state.player);
    console.log(history.state.machine);
    console.log(history.state.resultado);
    const jugada1 = {
        papel: `<papel-comp></papel-comp>`,
        piedra: `<piedra-comp></piedra-comp>`,
        tijera: `<tijera-comp></tijera-comp>`
    };
    div.innerHTML = `\n            ${jugada1[history.state.machine]}\n            ${jugada1[history.state.player]}\n            `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3QvFM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "titleText", ()=>titleText
);
function titleText() {
    class Title extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            div.className = "root";
            div.innerHTML = `\n                <h1>Piedra Papel ó Tijera</h1>\n                ${this.getStyle()}\n            `;
            this.shadowRoot.appendChild(div);
        }
        getStyle() {
            return `\n            <style>\n                .root {\n                margin: 0;\n                color: #009048;\n                font-family: 'Caveat', cursive;\n                font-size: 45px;\n                \n            }\n            h1 {\n                    margin: 0;\n                }\n            </style>\n\n            `;
        }
    }
    customElements.define("title-text", Title);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"9F0Ma":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buttonStart", ()=>buttonStart
);
function buttonStart() {
    class Button extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            this.attachShadow({
                mode: "open"
            });
            const button = document.createElement("button");
            button.className = "root";
            button.innerHTML = `\n                <span>Empezar</span>\n                ${this.getStyles()}    \n            `;
            this.shadowRoot.appendChild(button);
        }
        getStyles() {
            return `\n            <style>\n            .root{\n                border: 10px solid #001997;\n                padding:17px 13px;\n                background: #006CFC;\n                width: 322px;\n                height: 87px;\n                border-radius: 10px;\n\n                font-size: 45px; \n                font-family: 'Odibee Sans', cursive;\n                color: #D8FCFC;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                \n            }\n           </style>\n            \n            `;
        }
    }
    customElements.define("button-start", Button);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"cCufa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "papel", ()=>papel
);
const image = require("url:../../images/papel.svg");
function papel() {
    class Papel extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("img");
            div.src = image;
            div.style.width = "85px";
            div.style.height = "160px";
            this.shadowRoot.appendChild(div);
        }
    }
    customElements.define("papel-comp", Papel);
}

},{"url:../../images/papel.svg":"4ovHN","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4ovHN":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "papel.6482d205.svg";

},{"./helpers/bundle-url":"8YnfL"}],"jMtgL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "piedra", ()=>piedra
);
const image = require("url:../../images/piedra.svg");
function piedra() {
    class Piedra extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("img");
            div.src = image;
            div.style.width = "70px";
            div.style.height = "160px";
            this.shadowRoot.appendChild(div);
        }
    }
    customElements.define("piedra-comp", Piedra);
}

},{"url:../../images/piedra.svg":"4h90R","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4h90R":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "piedra.f5afe9a4.svg";

},{"./helpers/bundle-url":"8YnfL"}],"roM93":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tijera", ()=>tijera
);
const image = require("url:../../images/tijera.svg");
function tijera() {
    class Tijera extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("img");
            div.src = image;
            div.style.width = "70px";
            div.style.height = "160px";
            this.shadowRoot.appendChild(div);
        }
    }
    customElements.define("tijera-comp", Tijera);
}

},{"url:../../images/tijera.svg":"DJBPd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"DJBPd":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tijera.247c3f94.svg";

},{"./helpers/bundle-url":"8YnfL"}],"hl5hE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buttonPlay", ()=>buttonPlay
);
function buttonPlay() {
    class ButtonPlay extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            this.attachShadow({
                mode: "open"
            });
            const button = document.createElement("button");
            button.className = "root";
            button.innerHTML = `\n                <span>¡Jugar!</span>\n                ${this.getStyles()}    \n            `;
            this.shadowRoot.appendChild(button);
        }
        getStyles() {
            return `\n            <style>\n            .root{\n                border: 10px solid #001997;\n                padding:17px 13px;\n                background: #006CFC;\n                width: 322px;\n                height: 87px;\n                border-radius: 10px;\n\n                font-size: 45px; \n                font-family: 'Odibee Sans', cursive;\n                color: #D8FCFC;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                \n            }\n           </style>\n            \n            `;
        }
    }
    customElements.define("button-play", ButtonPlay);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"e9lCc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instructionsComp", ()=>instructionsComp
);
function instructionsComp() {
    class Instructions extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            div.className = "root";
            div.innerHTML = `\n                <span>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</span>\n                ${this.getStyle()}\n            `;
            this.shadowRoot.appendChild(div);
        }
        getStyle() {
            return `\n            <style>\n                .root {\n                margin: 0;\n                color: #000000;\n                font-family: 'Caveat', cursive;\n                font-size: 45px;\n                font-weight: bold; \n                text-align: center;\n \n            }\n            \n            </style>\n\n            `;
        }
    }
    customElements.define("instructions-comp", Instructions);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"leAA5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buttonPlayAgain", ()=>buttonPlayAgain
);
function buttonPlayAgain() {
    class ButtonPlayAgain extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            this.attachShadow({
                mode: "open"
            });
            const button = document.createElement("button");
            button.className = "root";
            button.innerHTML = `\n                <span>Volver a Jugar</span>\n                ${this.getStyles()}    \n            `;
            this.shadowRoot.appendChild(button);
        }
        getStyles() {
            return `\n            <style>\n            .root{\n                border: 10px solid #001997;\n                padding:17px 13px;\n                background: #006CFC;\n                width: 322px;\n                height: 87px;\n                border-radius: 10px;\n\n                font-size: 45px; \n                font-family: 'Odibee Sans', cursive;\n                color: #D8FCFC;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                \n            }\n           </style>\n            \n            `;
        }
    }
    customElements.define("button-playagain", ButtonPlayAgain);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"kSmEm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "counterComp", ()=>counterComp
);
function counterComp() {
    class Counter extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.render();
        }
        render() {
            this.attachShadow({
                mode: "open"
            });
            this.counter();
            const div = document.createElement("div");
            div.className = "root";
            div.innerHTML = `\n            <div class="clock">\n	        <span class="seconds"></span>\n            </div>\n            \n            ${this.getStyle()}    \n            `;
            this.shadowRoot.appendChild(div);
        }
        getStyle() {
            return `\n            <style>\n                .clock {\n	        width: 300px;\n	        height: 300px;\n	        border-radius: 50%;\n	        background-color: lightgrey;\n	        margin: auto;\n            font-family: 'Odibee Sans', cursive;\n            }\n        \n                .seconds {\n	        display: block;\n	        width: 100%;\n	        margin: auto;\n	        padding-top: 60px;\n	        text-align: center;\n	        font-size: 150px;\n            }\n          \n            \n            </style>\n\n            `;
        }
        counter() {
            let counter = 4;
            let interval = setInterval(()=>{
                counter--;
                if (counter == 3) {
                    let shadow = this.shadowRoot.querySelector(".seconds");
                    shadow.textContent = "3";
                    let circulo = this.shadowRoot.querySelector(".clock");
                    circulo.style.background = "#F8C471";
                } else if (counter == 2) {
                    let shadow = this.shadowRoot.querySelector(".seconds");
                    shadow.textContent = "2";
                    let circulo = this.shadowRoot.querySelector(".clock");
                    circulo.style.background = "#2ECC71 ";
                } else if (counter == 1) {
                    let shadow = this.shadowRoot.querySelector(".seconds");
                    shadow.textContent = "1";
                    let circulo = this.shadowRoot.querySelector(".clock");
                    circulo.style.background = "#D2B4DE";
                } else if (counter == 0) {
                    let shadow = this.shadowRoot.querySelector(".seconds");
                    shadow.innerHTML = `\n                    <span class="time">Time's Over</span>\n                    <style>\n                        .time {\n                    font-size: 70px;\n                    color: crimson;\n                    }\n                    </style>\n                    `;
                    let circulo = this.shadowRoot.querySelector(".clock");
                    circulo.style.background = "#F1948A";
                } else clearInterval(interval);
            }, 1000);
            return interval;
        }
    }
    customElements.define("counter-comp", Counter);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"3puv8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "historyComp", ()=>historyComp
);
var _state = require("../../state");
function historyComp() {
    class History1 extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            div.className = "container";
            div.innerHTML = `\n                <div>Score</div>\n                <div class="content">\n                <span>Vos: ${_state.state.historyVos()}</span>\n                <span>Maquina: ${_state.state.historyMaquina()}</span>\n                </div>\n                ${this.getStyle()}\n            `;
            this.shadowRoot.appendChild(div);
        }
        getStyle() {
            return `\n            <style>\n            \n\n                .container {\n\n                margin: 0;\n                color: #000000;\n                font-family: 'Odibee Sans', cursive;\n                font-size: 55px;\n                font-weight: bold; \n                text-align: center;\n                \n\n                display: flex;\n                flex-direction: column;\n                justify-content: space-around;\n                align-items: center;\n                padding: 20px;\n\n\n                background-color: antiquewhite;\n                border: black solid 10px;\n                border-radius: 10px;\n                width: 259px;\n                height: 217px;\n\n            }\n\n            .content {\n                display: flex;\n                flex-direction: column;\n                text-align: end;\n                font-size: 45px;\n                \n                \n\n            }\n            \n            </style>\n\n            `;
        }
    }
    customElements.define("history-comp", History1);
}

},{"../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["8uBhv","4aleK"], "4aleK", "parcelRequire1eea")

//# sourceMappingURL=index.b31310b1.js.map
