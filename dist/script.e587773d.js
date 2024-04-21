// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"javascript/script.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countCart = countCart;
exports.getData = getData;
var URL = 'https://6615ddf3b8b8e32ffc7bdc0a.mockapi.io/product';
var list = document.getElementById('list');
var counter = document.getElementById('counter');

//
//const sum = document.getElementById('sum')

var cartArr = []; // array of items which will be on cart

function countCart() {
  counter.innerHTML = cartArr.length;
}
function getProducts() {
  //getting all prodtucts from API
  return new Promise(function (resolve, reject) {
    fetch(URL).then(function (response) {
      if (response.ok) {
        resolve(response.json());
      } else reject(new Error('problem with api'));
    });
  });
}
function setData(key, el) {
  //add data (that will be 4 cart & product list)
  localStorage.setItem(key, JSON.stringify(el));
}
function getData(key) {
  //get data (that will be also 4 cart & product list)
  return JSON.parse(localStorage.getItem(key));
}
function loadData() {
  var storedCart = getData('cart');
  if (storedCart) {
    storedCart.forEach(function (el) {
      return layoutCart(el);
    });
  }
}
function layoutProduct(el) {
  var listProduct = document.createElement('div');
  listProduct.classList.add('list-product');
  var imageContainer = document.createElement('div');
  imageContainer.classList.add('product__image-container');
  var image = document.createElement('img');
  image.classList.add('product__image');
  image.src = el.photo;
  image.alt = 'product';
  var overlayButton = document.createElement('button');
  overlayButton.classList.add('product__overlay-btn', 'btn');
  overlayButton.textContent = 'Быстрый просмотр';
  var infoContainer = document.createElement('div');
  infoContainer.classList.add('product__info');
  var priceParagraph = document.createElement('p');
  priceParagraph.classList.add('product__price');
  priceParagraph.textContent = el.price;
  var name = document.createElement('h3');
  name.classList.add('product__name');
  name.textContent = el.name;
  var addButton = document.createElement('button');
  addButton.classList.add('product__btn', 'btn');
  addButton.textContent = 'Добавить в Корзину';
  addButton.addEventListener('click', function () {
    layoutCart(el);
  });
  listProduct.appendChild(imageContainer);
  imageContainer.appendChild(image);
  imageContainer.appendChild(overlayButton);
  listProduct.appendChild(infoContainer);
  infoContainer.appendChild(priceParagraph);
  infoContainer.appendChild(name);
  listProduct.appendChild(addButton);
  list.appendChild(listProduct);
  var popupDiv = document.createElement('div');
  popupDiv.classList.add('popup');
  var containerDiv = document.createElement('div');
  containerDiv.classList.add('popup__container');
  var imageWrapperDiv = document.createElement('div');
  imageWrapperDiv.classList.add('popup__image-wrapper');
  var imagePopup = document.createElement('img');
  imagePopup.classList.add('popup__image');
  imagePopup.src = el.photo;
  imagePopup.alt = 'product';
  var infoDiv = document.createElement('div');
  infoDiv.classList.add('popup__info');
  var closeLink = document.createElement('a');
  closeLink.classList.add('popup__close');
  closeLink.textContent = 'X';
  var nameHeading = document.createElement('h3');
  nameHeading.classList.add('popup__name');
  nameHeading.textContent = el.name;
  var popupPrice = document.createElement('p');
  popupPrice.classList.add('popup__pice');
  popupPrice.textContent = el.price;
  var popupButton = document.createElement('button');
  popupButton.classList.add('popup__btn', 'btn');
  popupButton.textContent = 'Добавить в корзину';
  popupButton.addEventListener('click', function () {
    layoutCart(el);
  });
  popupDiv.appendChild(containerDiv);
  containerDiv.appendChild(imageWrapperDiv);
  containerDiv.appendChild(infoDiv);
  imageWrapperDiv.appendChild(imagePopup);
  infoDiv.appendChild(closeLink);
  infoDiv.appendChild(nameHeading);
  infoDiv.appendChild(popupPrice);
  infoDiv.appendChild(popupButton);
  overlayButton.addEventListener('click', function () {
    popupDiv.style.display = "flex";
    popupDiv.style.top = "50%";
    popupDiv.style.left = "50%";
    popupDiv.style.transform = "translate(-50%, -50%)";
  });
  closeLink.addEventListener('click', function () {
    popupDiv.style.display = "none";
  });
  var mainElement = document.querySelector('main');
  mainElement.appendChild(popupDiv);
}
function layoutCart(el) {
  cartArr.push(el);
  countCart();
  setData('cart', cartArr);
}
getProducts().then(function (products) {
  return products.forEach(function (el) {
    return layoutProduct(el);
  });
});
window.addEventListener('load', function () {
  loadData();
});
countCart();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49222" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","javascript/script.js"], null)
//# sourceMappingURL=/script.e587773d.js.map