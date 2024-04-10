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
})({"js/task.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = Task;
exports.cleanList = cleanList;
exports.doneCouter = exports.createTask = void 0;
exports.loadTasks = loadTasks;
exports.saveTask = saveTask;
exports.tasks = exports.taskCounter = void 0;
function Task(info) {
  this.info = info;
  this.status = false;
  this.id = id++;
  var _Date$prototype = Date.prototype,
    getHours = _Date$prototype.getHours,
    getMinutes = _Date$prototype.getMinutes,
    getDate = _Date$prototype.getDate,
    toLocaleString = _Date$prototype.toLocaleString;
  var currentDate = new Date();
  var hours = getHours.call(currentDate);
  var minutes = getMinutes.call(currentDate);
  var date = getDate.call(currentDate);
  var month = toLocaleString.call(currentDate, 'default', {
    month: 'short'
  });
  this.date = "".concat(hours, ":").concat(minutes, " ").concat(date, " ").concat(month);
}
var id = 0;
var tasks = exports.tasks = [];
var createTask = exports.createTask = function createTask(el) {
  // Создание корневого контейнера задания
  var taskContainer = document.createElement('div');
  taskContainer.classList.add('root_task');

  // Создание кнопки завершения задания
  var completedButton = document.createElement('button');
  completedButton.classList.add('task__completed');
  completedButton.classList.add('task');
  completedButton.innerHTML = '✔';

  // Создание блока информации о задании
  var taskInfo = document.createElement('p');
  taskInfo.classList.add('task__info');
  taskInfo.innerHTML = el.info;

  // Создание блока дополнительной информации о задании
  var additionalInfoContainer = document.createElement('div');
  additionalInfoContainer.classList.add('task__addintional');

  // Создание блока с кнопкой удаления задания
  var deleteButtonWrapper = document.createElement('div');
  deleteButtonWrapper.classList.add('task__button-wrapper');
  var deleteButton = document.createElement('button');
  deleteButton.classList.add('task__deleted');
  deleteButton.classList.add('task');
  deleteButton.innerHTML = 'X';

  // Создание блока с датой задания
  var taskDate = document.createElement('p');
  taskDate.classList.add('task__date');
  taskDate.textContent = el.date;
  additionalInfoContainer.appendChild(taskDate);

  // Добавление созданных элементов в DOM
  list.appendChild(taskContainer);
  taskContainer.appendChild(completedButton);
  taskContainer.appendChild(taskInfo);
  taskContainer.appendChild(additionalInfoContainer);
  additionalInfoContainer.appendChild(deleteButtonWrapper);
  deleteButtonWrapper.appendChild(deleteButton);
  additionalInfoContainer.appendChild(taskDate);

  // Добавление обработчиков событий
  completedButton.addEventListener('click', function () {
    el.status = true;
    doneCouter();
    saveTask();
  });
  deleteButton.addEventListener('click', function () {
    el.status ? doneCouter(-1) : doneCouter(0);
    exports.tasks = tasks = tasks.filter(function (task) {
      return task.id !== el.id;
    });
    list.removeChild(taskContainer);
    taskCounter();
    doneCouter();
    saveTask();
  });
};
function cleanList() {
  while (list.firstChild) list.removeChild(list.firstChild);
}
function loadTasks() {
  var storedTasks = getDate('todos');
  if (storedTasks) {
    exports.tasks = tasks = storedTasks;
    tasks.forEach(function (task) {
      return createTask(task);
    });
  }
}
function saveTask() {
  setDate('todos', tasks);
}
function getDate(key) {
  return JSON.parse(localStorage.getItem(key));
}
function setDate(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
var taskCounter = exports.taskCounter = function taskCounter() {
  return all.innerHTML = tasks.length;
}; // cчетчик всех заданий
var doneCouter = exports.doneCouter = function doneCouter() {
  var counter = 0;
  tasks.forEach(function (el) {
    return el.status === true ? counter++ : counter += 0;
  });
  completed.innerHTML = counter;
};
},{}],"js/script.js":[function(require,module,exports) {
"use strict";

var _task = require("./task.js");
var deleteAll = document.getElementById('deleteAll');
var deleteLast = document.getElementById('deleteLast');
var input = document.getElementById('input');
var add = document.getElementById('add');
var all = document.getElementById('all');
var completed = document.getElementById('completed');
var showAll = document.getElementById('showAll');
var showCompleted = document.getElementById('showCompleted');
var search = document.getElementById('search');
var list = document.getElementById('list');
var id = 0;
var done = 0; // значение выполнененных заданий 

add.addEventListener('click', function () {
  var task = new _task.Task(input.value);
  _task.tasks.push(task);
  (0, _task.createTask)(task);
  (0, _task.taskCounter)();
  (0, _task.saveTask)();
});
deleteAll.onclick = function () {
  _task.tasks.length = 0;
  (0, _task.cleanList)();
  done = 0;
  (0, _task.doneCouter)();
  (0, _task.taskCounter)();
  (0, _task.saveTask)();
};
deleteLast.onclick = function () {
  _task.tasks[_task.tasks.length - 1].status ? (0, _task.doneCouter)(-1) : (0, _task.doneCouter)(0);
  _task.tasks.pop();
  list.removeChild(list.lastChild);
  (0, _task.taskCounter)();
  (0, _task.doneCouter)();
  (0, _task.saveTask)();
};
showCompleted.addEventListener('click', function () {
  (0, _task.cleanList)();
  var completedTasks = _task.tasks.filter(function (task) {
    return task.status;
  });
  completedTasks.forEach(function (el) {
    return (0, _task.createTask)(el);
  });
});
showAll.addEventListener('click', function () {
  (0, _task.cleanList)();
  _task.tasks.forEach(function (el) {
    return (0, _task.createTask)(el);
  });
});
search.addEventListener('keyup', function (el) {
  if (el.code === 'Enter') {
    (0, _task.cleanList)();
    var searchTasks = _task.tasks.filter(function (task) {
      return task.info.toLowerCase().includes(search.value.toLowerCase());
    });
    searchTasks.forEach(function (el) {
      return (0, _task.createTask)(el);
    });
  }
});
window.addEventListener('load', function () {
  (0, _task.loadTasks)(_task.tasks);
});
},{"./task.js":"js/task.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53122" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map