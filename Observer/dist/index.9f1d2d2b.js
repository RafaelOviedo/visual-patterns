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
        globalObject
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
})({"5EYxm":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4601589a9f1d2d2b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"dcNJg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publisherCard", ()=>publisherCard);
var _publisher = require("./publisher");
var _iphoneUsersLogic = require("./iphoneUsersLogic");
var _samsungUsersLogic = require("./samsungUsersLogic");
///////////////////////// PUBLISHSER /////////////////////////
const iphonePublishButton = document.getElementById('iphone-publish-button');
const samsungPublishButton = document.getElementById('samsung-publish-button');
const publisherElement = document.getElementById('publisher-card');
const publisherCard = new (0, _publisher.ConcretePublisher)(publisherElement);
///////////////////////// PUBLISHSER /////////////////////////
// ------------------------------------------------------------ //
(0, _iphoneUsersLogic.runIphoneUsersLogic)();
(0, _samsungUsersLogic.runSamsungUsersLogic)();
function publishNewIphonestate() {
    publisherCard.publishNewIphoneState();
}
function publishNewSamsungState() {
    publisherCard.publishNewSamsungState();
}
iphonePublishButton.addEventListener('click', publishNewIphonestate);
samsungPublishButton.addEventListener('click', publishNewSamsungState);

},{"./iphoneUsersLogic":"9kKL8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./samsungUsersLogic":"2Wa2p","./publisher":"gcsHq"}],"9kKL8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "runIphoneUsersLogic", ()=>runIphoneUsersLogic);
var _observer = require("./observer");
var _ = require(".");
function runIphoneUsersLogic() {
    ////////////////////// IPHONE USER 1 /////////////////////////
    const iphoneUserEl1 = document.getElementById('iphone-user-1');
    const iphoneObserverA = new (0, _observer.ConcreteObserverA)(iphoneUserEl1);
    const iphoneUser1SubscribeButton = document.getElementById('subscribe-to-iphone-user-1');
    const iphoneUser1UnsubscribeButton = document.getElementById('unsubscribe-to-iphone-user-1');
    iphoneUser1SubscribeButton.addEventListener('click', ()=>{
        iphoneObserverA.subscribeToPublisher((0, _.publisherCard), iphoneObserverA);
    });
    iphoneUser1UnsubscribeButton.addEventListener('click', ()=>{
        iphoneObserverA.unsubscribeToPublisher((0, _.publisherCard), iphoneObserverA);
    });
    ////////////////////// IPHONE USER 1 /////////////////////////
    // -------------------------------------------------------------- //
    ////////////////////// IPHONE USER 2 /////////////////////////
    const iphoneUserEl2 = document.getElementById('iphone-user-2');
    const iphoneObserverB = new (0, _observer.ConcreteObserverA)(iphoneUserEl2);
    const iphoneUser2SubscribeButton = document.getElementById('subscribe-to-iphone-user-2');
    const iphoneUser2UnsubscribeButton = document.getElementById('unsubscribe-to-iphone-user-2');
    iphoneUser2SubscribeButton.addEventListener('click', ()=>{
        iphoneObserverB.subscribeToPublisher((0, _.publisherCard), iphoneObserverB);
    });
    iphoneUser2UnsubscribeButton.addEventListener('click', ()=>{
        iphoneObserverB.unsubscribeToPublisher((0, _.publisherCard), iphoneObserverB);
    });
    ////////////////////// IPHONE USER 2 /////////////////////////
    // -------------------------------------------------------------- //
    ////////////////////// IPHONE USER 3 /////////////////////////
    const iphoneUserEl3 = document.getElementById('iphone-user-3');
    const iphoneObserverC = new (0, _observer.ConcreteObserverA)(iphoneUserEl3);
    const iphoneUser3SubscribeButton = document.getElementById('subscribe-to-iphone-user-3');
    const iphoneUser3UnsubscribeButton = document.getElementById('unsubscribe-to-iphone-user-3');
    iphoneUser3SubscribeButton.addEventListener('click', ()=>{
        iphoneObserverC.subscribeToPublisher((0, _.publisherCard), iphoneObserverC);
    });
    iphoneUser3UnsubscribeButton.addEventListener('click', ()=>{
        iphoneObserverC.unsubscribeToPublisher((0, _.publisherCard), iphoneObserverC);
    });
    ////////////////////// IPHONE USER 3 /////////////////////////
    // -------------------------------------------------------------- //
    ////////////////////// IPHONE USER 4 /////////////////////////
    const iphoneUserEl4 = document.getElementById('iphone-user-4');
    const iphoneObserverD = new (0, _observer.ConcreteObserverA)(iphoneUserEl4);
    const iphoneUser4SubscribeButton = document.getElementById('subscribe-to-iphone-user-4');
    const iphoneUser4UnsubscribeButton = document.getElementById('unsubscribe-to-iphone-user-4');
    iphoneUser4SubscribeButton.addEventListener('click', ()=>{
        iphoneObserverD.subscribeToPublisher((0, _.publisherCard), iphoneObserverD);
    });
    iphoneUser4UnsubscribeButton.addEventListener('click', ()=>{
        iphoneObserverD.unsubscribeToPublisher((0, _.publisherCard), iphoneObserverD);
    });
////////////////////// IPHONE USER 4 /////////////////////////
}

},{"./observer":"9fMAn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3",".":"dcNJg"}],"9fMAn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
* Concrete Observers react to the updates issued by the Subject they had been
* attached to.
*/ parcelHelpers.export(exports, "ConcreteObserverA", ()=>ConcreteObserverA);
parcelHelpers.export(exports, "ConcreteObserverB", ()=>ConcreteObserverB);
var _publisher = require("./publisher");
class ConcreteObserverA {
    constructor(element){
        this.element = element;
    }
    update(publisher) {
        if (publisher instanceof (0, _publisher.ConcretePublisher) && publisher.state.phoneType === 'iphone') {
            this.element.classList.add('highlight');
            const stateElement = this.element.children[1];
            stateElement.innerHTML = publisher.state.state;
        } else this.element.classList.remove('highlight');
    }
    subscribeToPublisher(publisher, observer) {
        publisher.subscribe(observer);
        const stateElement = this.element.children[4];
        stateElement.innerHTML = 'Subscribed!';
        stateElement.classList.remove('unsubscribed-state');
        stateElement.classList.add('subscribed-state');
    }
    unsubscribeToPublisher(publisher, observer) {
        publisher.unsubscribe(observer);
        const stateElement = this.element.children[4];
        stateElement.innerHTML = 'Unsubscribed!';
        stateElement.classList.remove('subscribed-state');
        stateElement.classList.add('unsubscribed-state');
    }
}
class ConcreteObserverB {
    constructor(element){
        this.element = element;
    }
    update(publisher) {
        if (publisher instanceof (0, _publisher.ConcretePublisher) && publisher.state.phoneType === 'samsung') {
            this.element.classList.add('highlight');
            const stateElement = this.element.children[1];
            stateElement.innerHTML = publisher.state.state;
        } else this.element.classList.remove('highlight');
    }
    subscribeToPublisher(publisher, observer) {
        publisher.subscribe(observer);
        const stateElement = this.element.children[4];
        stateElement.innerHTML = 'Subscribed!';
        stateElement.classList.remove('unsubscribed-state');
        stateElement.classList.add('subscribed-state');
    }
    unsubscribeToPublisher(publisher, observer) {
        publisher.unsubscribe(observer);
        const stateElement = this.element.children[4];
        stateElement.innerHTML = 'Unsubscribed!';
        stateElement.classList.remove('subscribed-state');
        stateElement.classList.add('unsubscribed-state');
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./publisher":"gcsHq"}],"gkKU3":[function(require,module,exports,__globalThis) {
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
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"gcsHq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
* The Subject (Publisher) owns some important state and notifies observers when the state
* changes.
*/ parcelHelpers.export(exports, "ConcretePublisher", ()=>ConcretePublisher);
class ConcretePublisher {
    constructor(element){
        this.observers = [];
        this.element = element;
    }
    /**
   * The subscription management methods.
   */ subscribe(observer) {
        const observerExists = this.observers.includes(observer);
        if (observerExists) console.log('Subject: Observer has been subscribed already.');
        this.observers.push(observer);
        console.log(`Subject: Subscribed observer: ${observer.element.children[0].innerHTML}`);
    }
    unsubscribe(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) console.log('Subject: Nonexistent observer.');
        this.observers.splice(observerIndex, 1);
        console.log(`Subject: Unsuscribed observer: ${observer.element.children[0].innerHTML}`);
    }
    /**
   * Trigger an update in each subscriber.
   */ notify() {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers)observer.update(this);
    }
    publishNewIphoneState() {
        const iphoneInput = document.getElementById('iphone-input');
        const newIphoneState = {
            state: iphoneInput.value,
            phoneType: 'iphone'
        };
        this.state = newIphoneState;
        const stateElement = this.element.querySelector('#iphone-state');
        stateElement.innerHTML = newIphoneState.state;
        iphoneInput.value = '';
        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
    publishNewSamsungState() {
        const samsungInput = document.getElementById('samsung-input');
        const newSamsungState = {
            state: samsungInput.value,
            phoneType: 'samsung'
        };
        this.state = newSamsungState;
        const stateElement = this.element.querySelector('#samsung-state');
        stateElement.innerHTML = newSamsungState.state;
        samsungInput.value = '';
        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Wa2p":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "runSamsungUsersLogic", ()=>runSamsungUsersLogic);
var _observer = require("./observer");
var _ = require(".");
function runSamsungUsersLogic() {
    ////////////////////// IPHONE USER 1 /////////////////////////
    const samsungUserEl1 = document.getElementById('samsung-user-1');
    const samsungObserverA = new (0, _observer.ConcreteObserverB)(samsungUserEl1);
    const samsungUser1SubscribeButton = document.getElementById('subscribe-to-samsung-user-1');
    const samsungUser1UnsubscribeButton = document.getElementById('unsubscribe-to-samsung-user-1');
    samsungUser1SubscribeButton.addEventListener('click', ()=>{
        samsungObserverA.subscribeToPublisher((0, _.publisherCard), samsungObserverA);
    });
    samsungUser1UnsubscribeButton.addEventListener('click', ()=>{
        samsungObserverA.unsubscribeToPublisher((0, _.publisherCard), samsungObserverA);
    });
    ////////////////////// IPHONE USER 1 /////////////////////////
    // -------------------------------------------------------------- //
    ////////////////////// IPHONE USER 2 /////////////////////////
    const samsungUserEl2 = document.getElementById('samsung-user-2');
    const samsungObserverB = new (0, _observer.ConcreteObserverB)(samsungUserEl2);
    const samsungUser2SubscribeButton = document.getElementById('subscribe-to-samsung-user-2');
    const samsungUser2UnsubscribeButton = document.getElementById('unsubscribe-to-samsung-user-2');
    samsungUser2SubscribeButton.addEventListener('click', ()=>{
        samsungObserverB.subscribeToPublisher((0, _.publisherCard), samsungObserverB);
    });
    samsungUser2UnsubscribeButton.addEventListener('click', ()=>{
        samsungObserverB.unsubscribeToPublisher((0, _.publisherCard), samsungObserverB);
    });
    ////////////////////// IPHONE USER 1 /////////////////////////
    // -------------------------------------------------------------- //
    ////////////////////// IPHONE USER 3 /////////////////////////
    const samsungUserEl3 = document.getElementById('samsung-user-3');
    const samsungObserverC = new (0, _observer.ConcreteObserverB)(samsungUserEl3);
    const samsungUser3SubscribeButton = document.getElementById('subscribe-to-samsung-user-3');
    const samsungUser3UnsubscribeButton = document.getElementById('unsubscribe-to-samsung-user-3');
    samsungUser3SubscribeButton.addEventListener('click', ()=>{
        samsungObserverC.subscribeToPublisher((0, _.publisherCard), samsungObserverC);
    });
    samsungUser3UnsubscribeButton.addEventListener('click', ()=>{
        samsungObserverC.unsubscribeToPublisher((0, _.publisherCard), samsungObserverC);
    });
    ////////////////////// IPHONE USER 1 /////////////////////////
    // -------------------------------------------------------------- //
    ////////////////////// IPHONE USER 4 /////////////////////////
    const samsungUserEl4 = document.getElementById('samsung-user-4');
    const samsungObserverD = new (0, _observer.ConcreteObserverB)(samsungUserEl4);
    const samsungUser4SubscribeButton = document.getElementById('subscribe-to-samsung-user-4');
    const samsungUser4UnsubscribeButton = document.getElementById('unsubscribe-to-samsung-user-4');
    samsungUser4SubscribeButton.addEventListener('click', ()=>{
        samsungObserverD.subscribeToPublisher((0, _.publisherCard), samsungObserverD);
    });
    samsungUser4UnsubscribeButton.addEventListener('click', ()=>{
        samsungObserverD.unsubscribeToPublisher((0, _.publisherCard), samsungObserverD);
    });
////////////////////// IPHONE USER 4 /////////////////////////
}

},{"./observer":"9fMAn",".":"dcNJg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["5EYxm","dcNJg"], "dcNJg", "parcelRequire94c2")

//# sourceMappingURL=index.9f1d2d2b.js.map
