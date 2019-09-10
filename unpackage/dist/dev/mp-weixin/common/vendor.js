(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 0:
/*!*******************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 5));
var _index = _interopRequireDefault(__webpack_require__(/*! ./lang/index */ 12));
var _index2 = _interopRequireDefault(__webpack_require__(/*! ./store/index.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

_vue.default.prototype._i18n = _index.default;
_vue.default.prototype.$store = _index2.default;

var app = new _vue.default(_objectSpread({},
_App.default, {
  store: _index2.default,
  i18n: _index.default }));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 104:
/*!****************************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fwithdraw%2Fmodify-address"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _modifyAddress = _interopRequireDefault(__webpack_require__(/*! ./pages/withdraw/modify-address.vue */ 105));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_modifyAddress.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 11:
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 112:
/*!******************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fcharge%2Fcharge"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _charge = _interopRequireDefault(__webpack_require__(/*! ./pages/charge/charge.vue */ 113));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_charge.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 12:
/*!*************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/lang/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vueI18n = _interopRequireDefault(__webpack_require__(/*! vue-i18n */ 13));
var _en = _interopRequireDefault(__webpack_require__(/*! ./lang/en.js */ 14));
var _zhCH = _interopRequireDefault(__webpack_require__(/*! ./lang/zhCH.js */ 15));
var _ko = _interopRequireDefault(__webpack_require__(/*! ./lang/ko.js */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vueI18n.default);
// 1 中文 2 英文 3韩文
var i18n = new _vueI18n.default({
  locale: uni.getStorageSync('lang') || 'chs',
  messages: {
    'en': _en.default,
    'chs': _zhCH.default,
    'ko': _ko.default } });var _default =



i18n;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 120:
/*!************************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fcommunity%2Fcommunity"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _community = _interopRequireDefault(__webpack_require__(/*! ./pages/community/community.vue */ 121));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_community.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 128:
/*!************************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fcommunity%2Fbullentin"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _bullentin = _interopRequireDefault(__webpack_require__(/*! ./pages/community/bullentin.vue */ 129));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_bullentin.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 13:
/*!***********************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/vue-i18n.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 /*!
               * vue-i18n v8.10.0 
               * (c) 2019 kazuya kawaguchi
               * Released under the MIT License.
               */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
})(void 0, function () {'use strict';

  /*  */

  /**
          * constants
          */

  var numberFormatKeys = [
  'style',
  'currency',
  'currencyDisplay',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'localeMatcher',
  'formatMatcher'];


  /**
                     * utilities
                     */

  function warn(msg, err) {
    if (typeof console !== 'undefined') {
      console.warn('[vue-i18n] ' + msg);
      /* istanbul ignore if */
      if (err) {
        console.warn(err.stack);
      }
    }
  }

  function isObject(obj) {
    return obj !== null && typeof obj === 'object';
  }

  var toString = Object.prototype.toString;
  var OBJECT_STRING = '[object Object]';
  function isPlainObject(obj) {
    return toString.call(obj) === OBJECT_STRING;
  }

  function isNull(val) {
    return val === null || val === undefined;
  }

  function parseArgs() {
    var args = [],len = arguments.length;
    while (len--) {args[len] = arguments[len];}

    var locale = null;
    var params = null;
    if (args.length === 1) {
      if (isObject(args[0]) || Array.isArray(args[0])) {
        params = args[0];
      } else if (typeof args[0] === 'string') {
        locale = args[0];
      }
    } else if (args.length === 2) {
      if (typeof args[0] === 'string') {
        locale = args[0];
      }
      /* istanbul ignore if */
      if (isObject(args[1]) || Array.isArray(args[1])) {
        params = args[1];
      }
    }

    return { locale: locale, params: params };
  }

  function looseClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function remove(arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1);
      }
    }
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  function merge(target) {
    var arguments$1 = arguments;

    var output = Object(target);
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments$1[i];
      if (source !== undefined && source !== null) {
        var key = void 0;
        for (key in source) {
          if (hasOwn(source, key)) {
            if (isObject(source[key])) {
              output[key] = merge(output[key], source[key]);
            } else {
              output[key] = source[key];
            }
          }
        }
      }
    }
    return output;
  }

  function looseEqual(a, b) {
    if (a === b) {return true;}
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i]);
          });
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key]);
          });
        } else {
          /* istanbul ignore next */
          return false;
        }
      } catch (e) {
        /* istanbul ignore next */
        return false;
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b);
    } else {
      return false;
    }
  }

  /*  */

  function extend(Vue) {
    if (!Vue.prototype.hasOwnProperty('$i18n')) {
      // $FlowFixMe
      Object.defineProperty(Vue.prototype, '$i18n', {
        get: function get() {return this._i18n;} });

    }

    Vue.prototype.$t = function (key) {
      var values = [],len = arguments.length - 1;
      while (len-- > 0) {values[len] = arguments[len + 1];}

      var i18n = this.$i18n;
      return i18n._t.apply(i18n, [key, i18n.locale, i18n._getMessages(), this].concat(values));
    };

    Vue.prototype.$tc = function (key, choice) {
      var values = [],len = arguments.length - 2;
      while (len-- > 0) {values[len] = arguments[len + 2];}

      var i18n = this.$i18n;
      return i18n._tc.apply(i18n, [key, i18n.locale, i18n._getMessages(), this, choice].concat(values));
    };

    Vue.prototype.$te = function (key, locale) {
      var i18n = this.$i18n;
      return i18n._te(key, i18n.locale, i18n._getMessages(), locale);
    };

    Vue.prototype.$d = function (value) {
      var ref;

      var args = [],len = arguments.length - 1;
      while (len-- > 0) {args[len] = arguments[len + 1];}
      return (ref = this.$i18n).d.apply(ref, [value].concat(args));
    };

    Vue.prototype.$n = function (value) {
      var ref;

      var args = [],len = arguments.length - 1;
      while (len-- > 0) {args[len] = arguments[len + 1];}
      return (ref = this.$i18n).n.apply(ref, [value].concat(args));
    };
  }

  /*  */

  var mixin = {
    beforeCreate: function beforeCreate() {
      var options = this.$options;
      options.i18n = options.i18n || (options.__i18n ? {} : null);

      if (options.i18n) {
        if (options.i18n instanceof VueI18n) {
          // init locale messages via custom blocks
          if (options.__i18n) {
            try {
              var localeMessages = {};
              options.__i18n.forEach(function (resource) {
                localeMessages = merge(localeMessages, JSON.parse(resource));
              });
              Object.keys(localeMessages).forEach(function (locale) {
                options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
              });
            } catch (e) {
              {
                warn("Cannot parse locale messages via custom blocks.", e);
              }
            }
          }
          this._i18n = options.i18n;
          this._i18nWatcher = this._i18n.watchI18nData();
          this._i18n.subscribeDataChanging(this);
          this._subscribing = true;
        } else if (isPlainObject(options.i18n)) {
          // component local i18n
          if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
            options.i18n.root = this.$root;
            options.i18n.formatter = this.$root.$i18n.formatter;
            options.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale;
            options.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn;
            options.i18n.silentFallbackWarn = this.$root.$i18n.silentFallbackWarn;
            options.i18n.pluralizationRules = this.$root.$i18n.pluralizationRules;
            options.i18n.preserveDirectiveContent = this.$root.$i18n.preserveDirectiveContent;
          }

          // init locale messages via custom blocks
          if (options.__i18n) {
            try {
              var localeMessages$1 = {};
              options.__i18n.forEach(function (resource) {
                localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
              });
              options.i18n.messages = localeMessages$1;
            } catch (e) {
              {
                warn("Cannot parse locale messages via custom blocks.", e);
              }
            }
          }

          this._i18n = new VueI18n(options.i18n);
          this._i18nWatcher = this._i18n.watchI18nData();
          this._i18n.subscribeDataChanging(this);
          this._subscribing = true;

          if (options.i18n.sync === undefined || !!options.i18n.sync) {
            this._localeWatcher = this.$i18n.watchLocale();
          }
        } else {
          {
            warn("Cannot be interpreted 'i18n' option.");
          }
        }
      } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
        // root i18n
        this._i18n = this.$root.$i18n;
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
        // parent i18n
        this._i18n = options.parent.$i18n;
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      }
    },

    beforeDestroy: function beforeDestroy() {
      if (!this._i18n) {return;}

      var self = this;
      this.$nextTick(function () {
        if (self._subscribing) {
          self._i18n.unsubscribeDataChanging(self);
          delete self._subscribing;
        }

        if (self._i18nWatcher) {
          self._i18nWatcher();
          self._i18n.destroyVM();
          delete self._i18nWatcher;
        }

        if (self._localeWatcher) {
          self._localeWatcher();
          delete self._localeWatcher;
        }

        self._i18n = null;
      });
    } };


  /*  */

  var interpolationComponent = {
    name: 'i18n',
    functional: true,
    props: {
      tag: {
        type: String,
        default: 'span' },

      path: {
        type: String,
        required: true },

      locale: {
        type: String },

      places: {
        type: [Array, Object] } },


    render: function render(h, ref) {
      var props = ref.props;
      var data = ref.data;
      var children = ref.children;
      var parent = ref.parent;

      var i18n = parent.$i18n;

      children = (children || []).filter(function (child) {
        return child.tag || (child.text = child.text.trim());
      });

      if (!i18n) {
        {
          warn('Cannot find VueI18n instance!');
        }
        return children;
      }

      var path = props.path;
      var locale = props.locale;

      var params = {};
      var places = props.places || {};

      var hasPlaces = Array.isArray(places) ?
      places.length > 0 :
      Object.keys(places).length > 0;

      var everyPlace = children.every(function (child) {
        if (child.data && child.data.attrs) {
          var place = child.data.attrs.place;
          return typeof place !== 'undefined' && place !== '';
        }
      });

      if (hasPlaces && children.length > 0 && !everyPlace) {
        warn('If places prop is set, all child elements must have place prop set.');
      }

      if (Array.isArray(places)) {
        places.forEach(function (el, i) {
          params[i] = el;
        });
      } else {
        Object.keys(places).forEach(function (key) {
          params[key] = places[key];
        });
      }

      children.forEach(function (child, i) {
        var key = everyPlace ?
        "" + child.data.attrs.place :
        "" + i;
        params[key] = child;
      });

      return h(props.tag, data, i18n.i(path, locale, params));
    } };


  /*  */

  var numberComponent = {
    name: 'i18n-n',
    functional: true,
    props: {
      tag: {
        type: String,
        default: 'span' },

      value: {
        type: Number,
        required: true },

      format: {
        type: [String, Object] },

      locale: {
        type: String } },


    render: function render(h, ref) {
      var props = ref.props;
      var parent = ref.parent;
      var data = ref.data;

      var i18n = parent.$i18n;

      if (!i18n) {
        {
          warn('Cannot find VueI18n instance!');
        }
        return null;
      }

      var key = null;
      var options = null;

      if (typeof props.format === 'string') {
        key = props.format;
      } else if (isObject(props.format)) {
        if (props.format.key) {
          key = props.format.key;
        }

        // Filter out number format options only
        options = Object.keys(props.format).reduce(function (acc, prop) {
          var obj;

          if (numberFormatKeys.includes(prop)) {
            return Object.assign({}, acc, (obj = {}, obj[prop] = props.format[prop], obj));
          }
          return acc;
        }, null);
      }

      var locale = props.locale || i18n.locale;
      var parts = i18n._ntp(props.value, locale, key, options);

      var values = parts.map(function (part, index) {
        var obj;

        var slot = data.scopedSlots && data.scopedSlots[part.type];
        return slot ? slot((obj = {}, obj[part.type] = part.value, obj.index = index, obj.parts = parts, obj)) : part.value;
      });

      return h(props.tag, {
        attrs: data.attrs,
        'class': data['class'],
        staticClass: data.staticClass },
      values);
    } };


  /*  */

  function bind(el, binding, vnode) {
    if (!assert(el, vnode)) {return;}

    t(el, binding, vnode);
  }

  function update(el, binding, vnode, oldVNode) {
    if (!assert(el, vnode)) {return;}

    var i18n = vnode.context.$i18n;
    if (localeEqual(el, vnode) &&
    looseEqual(binding.value, binding.oldValue) &&
    looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale))) {return;}

    t(el, binding, vnode);
  }

  function unbind(el, binding, vnode, oldVNode) {
    var vm = vnode.context;
    if (!vm) {
      warn('Vue instance does not exists in VNode context');
      return;
    }

    var i18n = vnode.context.$i18n || {};
    if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
      el.textContent = '';
    }
    el._vt = undefined;
    delete el['_vt'];
    el._locale = undefined;
    delete el['_locale'];
    el._localeMessage = undefined;
    delete el['_localeMessage'];
  }

  function assert(el, vnode) {
    var vm = vnode.context;
    if (!vm) {
      warn('Vue instance does not exists in VNode context');
      return false;
    }

    if (!vm.$i18n) {
      warn('VueI18n instance does not exists in Vue instance');
      return false;
    }

    return true;
  }

  function localeEqual(el, vnode) {
    var vm = vnode.context;
    return el._locale === vm.$i18n.locale;
  }

  function t(el, binding, vnode) {
    var ref$1, ref$2;

    var value = binding.value;

    var ref = parseValue(value);
    var path = ref.path;
    var locale = ref.locale;
    var args = ref.args;
    var choice = ref.choice;
    if (!path && !locale && !args) {
      warn('value type not supported');
      return;
    }

    if (!path) {
      warn('`path` is required in v-t directive');
      return;
    }

    var vm = vnode.context;
    if (choice) {
      el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [path, choice].concat(makeParams(locale, args)));
    } else {
      el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [path].concat(makeParams(locale, args)));
    }
    el._locale = vm.$i18n.locale;
    el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
  }

  function parseValue(value) {
    var path;
    var locale;
    var args;
    var choice;

    if (typeof value === 'string') {
      path = value;
    } else if (isPlainObject(value)) {
      path = value.path;
      locale = value.locale;
      args = value.args;
      choice = value.choice;
    }

    return { path: path, locale: locale, args: args, choice: choice };
  }

  function makeParams(locale, args) {
    var params = [];

    locale && params.push(locale);
    if (args && (Array.isArray(args) || isPlainObject(args))) {
      params.push(args);
    }

    return params;
  }

  var Vue;

  function install(_Vue) {
    /* istanbul ignore if */
    if (install.installed && _Vue === Vue) {
      warn('already installed.');
      return;
    }
    install.installed = true;

    Vue = _Vue;

    var version = Vue.version && Number(Vue.version.split('.')[0]) || -1;
    /* istanbul ignore if */
    if (version < 2) {
      warn("vue-i18n (" + install.version + ") need to use Vue 2.0 or later (Vue: " + Vue.version + ").");
      return;
    }

    extend(Vue);
    Vue.mixin(mixin);
    Vue.directive('t', { bind: bind, update: update, unbind: unbind });
    Vue.component(interpolationComponent.name, interpolationComponent);
    Vue.component(numberComponent.name, numberComponent);

    // use simple mergeStrategies to prevent i18n instance lose '__proto__'
    var strats = Vue.config.optionMergeStrategies;
    strats.i18n = function (parentVal, childVal) {
      return childVal === undefined ?
      parentVal :
      childVal;
    };
  }

  /*  */

  var BaseFormatter = function BaseFormatter() {
    this._caches = Object.create(null);
  };

  BaseFormatter.prototype.interpolate = function interpolate(message, values) {
    if (!values) {
      return [message];
    }
    var tokens = this._caches[message];
    if (!tokens) {
      tokens = parse(message);
      this._caches[message] = tokens;
    }
    return compile(tokens, values);
  };



  var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;

  function parse(format) {
    var tokens = [];
    var position = 0;

    var text = '';
    while (position < format.length) {
      var char = format[position++];
      if (char === '{') {
        if (text) {
          tokens.push({ type: 'text', value: text });
        }

        text = '';
        var sub = '';
        char = format[position++];
        while (char !== undefined && char !== '}') {
          sub += char;
          char = format[position++];
        }
        var isClosed = char === '}';

        var type = RE_TOKEN_LIST_VALUE.test(sub) ?
        'list' :
        isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
        'named' :
        'unknown';
        tokens.push({ value: sub, type: type });
      } else if (char === '%') {
        // when found rails i18n syntax, skip text capture
        if (format[position] !== '{') {
          text += char;
        }
      } else {
        text += char;
      }
    }

    text && tokens.push({ type: 'text', value: text });

    return tokens;
  }

  function compile(tokens, values) {
    var compiled = [];
    var index = 0;

    var mode = Array.isArray(values) ?
    'list' :
    isObject(values) ?
    'named' :
    'unknown';
    if (mode === 'unknown') {return compiled;}

    while (index < tokens.length) {
      var token = tokens[index];
      switch (token.type) {
        case 'text':
          compiled.push(token.value);
          break;
        case 'list':
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case 'named':
          if (mode === 'named') {
            compiled.push(values[token.value]);
          } else {
            {
              warn("Type of token '" + token.type + "' and format of value '" + mode + "' don't match!");
            }
          }
          break;
        case 'unknown':
          {
            warn("Detect 'unknown' type of token!");
          }
          break;}

      index++;
    }

    return compiled;
  }

  /*  */

  /**
          *  Path parser
          *  - Inspired:
          *    Vue.js Path parser
          */

  // actions
  var APPEND = 0;
  var PUSH = 1;
  var INC_SUB_PATH_DEPTH = 2;
  var PUSH_SUB_PATH = 3;

  // states
  var BEFORE_PATH = 0;
  var IN_PATH = 1;
  var BEFORE_IDENT = 2;
  var IN_IDENT = 3;
  var IN_SUB_PATH = 4;
  var IN_SINGLE_QUOTE = 5;
  var IN_DOUBLE_QUOTE = 6;
  var AFTER_PATH = 7;
  var ERROR = 8;

  var pathStateMachine = [];

  pathStateMachine[BEFORE_PATH] = {
    'ws': [BEFORE_PATH],
    'ident': [IN_IDENT, APPEND],
    '[': [IN_SUB_PATH],
    'eof': [AFTER_PATH] };


  pathStateMachine[IN_PATH] = {
    'ws': [IN_PATH],
    '.': [BEFORE_IDENT],
    '[': [IN_SUB_PATH],
    'eof': [AFTER_PATH] };


  pathStateMachine[BEFORE_IDENT] = {
    'ws': [BEFORE_IDENT],
    'ident': [IN_IDENT, APPEND],
    '0': [IN_IDENT, APPEND],
    'number': [IN_IDENT, APPEND] };


  pathStateMachine[IN_IDENT] = {
    'ident': [IN_IDENT, APPEND],
    '0': [IN_IDENT, APPEND],
    'number': [IN_IDENT, APPEND],
    'ws': [IN_PATH, PUSH],
    '.': [BEFORE_IDENT, PUSH],
    '[': [IN_SUB_PATH, PUSH],
    'eof': [AFTER_PATH, PUSH] };


  pathStateMachine[IN_SUB_PATH] = {
    "'": [IN_SINGLE_QUOTE, APPEND],
    '"': [IN_DOUBLE_QUOTE, APPEND],
    '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
    ']': [IN_PATH, PUSH_SUB_PATH],
    'eof': ERROR,
    'else': [IN_SUB_PATH, APPEND] };


  pathStateMachine[IN_SINGLE_QUOTE] = {
    "'": [IN_SUB_PATH, APPEND],
    'eof': ERROR,
    'else': [IN_SINGLE_QUOTE, APPEND] };


  pathStateMachine[IN_DOUBLE_QUOTE] = {
    '"': [IN_SUB_PATH, APPEND],
    'eof': ERROR,
    'else': [IN_DOUBLE_QUOTE, APPEND] };


  /**
                                          * Check if an expression is a literal value.
                                          */

  var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }

  /**
     * Strip quotes from a string
     */

  function stripQuotes(str) {
    var a = str.charCodeAt(0);
    var b = str.charCodeAt(str.length - 1);
    return a === b && (a === 0x22 || a === 0x27) ?
    str.slice(1, -1) :
    str;
  }

  /**
     * Determine the type of a character in a keypath.
     */

  function getPathCharType(ch) {
    if (ch === undefined || ch === null) {return 'eof';}

    var code = ch.charCodeAt(0);

    switch (code) {
      case 0x5B: // [
      case 0x5D: // ]
      case 0x2E: // .
      case 0x22: // "
      case 0x27: // '
        return ch;

      case 0x5F: // _
      case 0x24: // $
      case 0x2D: // -
        return 'ident';

      case 0x09: // Tab
      case 0x0A: // Newline
      case 0x0D: // Return
      case 0xA0: // No-break space
      case 0xFEFF: // Byte Order Mark
      case 0x2028: // Line Separator
      case 0x2029: // Paragraph Separator
        return 'ws';}


    return 'ident';
  }

  /**
     * Format a subPath, return its plain form if it is
     * a literal string or number. Otherwise prepend the
     * dynamic indicator (*).
     */

  function formatSubPath(path) {
    var trimmed = path.trim();
    // invalid leading 0
    if (path.charAt(0) === '0' && isNaN(path)) {return false;}

    return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
  }

  /**
     * Parse a string path into an array of segments
     */

  function parse$1(path) {
    var keys = [];
    var index = -1;
    var mode = BEFORE_PATH;
    var subPathDepth = 0;
    var c;
    var key;
    var newChar;
    var type;
    var transition;
    var action;
    var typeMap;
    var actions = [];

    actions[PUSH] = function () {
      if (key !== undefined) {
        keys.push(key);
        key = undefined;
      }
    };

    actions[APPEND] = function () {
      if (key === undefined) {
        key = newChar;
      } else {
        key += newChar;
      }
    };

    actions[INC_SUB_PATH_DEPTH] = function () {
      actions[APPEND]();
      subPathDepth++;
    };

    actions[PUSH_SUB_PATH] = function () {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = IN_SUB_PATH;
        actions[APPEND]();
      } else {
        subPathDepth = 0;
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions[PUSH]();
        }
      }
    };

    function maybeUnescapeQuote() {
      var nextChar = path[index + 1];
      if (mode === IN_SINGLE_QUOTE && nextChar === "'" ||
      mode === IN_DOUBLE_QUOTE && nextChar === '"') {
        index++;
        newChar = '\\' + nextChar;
        actions[APPEND]();
        return true;
      }
    }

    while (mode !== null) {
      index++;
      c = path[index];

      if (c === '\\' && maybeUnescapeQuote()) {
        continue;
      }

      type = getPathCharType(c);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap['else'] || ERROR;

      if (transition === ERROR) {
        return; // parse error
      }

      mode = transition[0];
      action = actions[transition[1]];
      if (action) {
        newChar = transition[2];
        newChar = newChar === undefined ?
        c :
        newChar;
        if (action() === false) {
          return;
        }
      }

      if (mode === AFTER_PATH) {
        return keys;
      }
    }
  }





  var I18nPath = function I18nPath() {
    this._cache = Object.create(null);
  };

  /**
      * External parse that check for a cache hit first
      */
  I18nPath.prototype.parsePath = function parsePath(path) {
    var hit = this._cache[path];
    if (!hit) {
      hit = parse$1(path);
      if (hit) {
        this._cache[path] = hit;
      }
    }
    return hit || [];
  };

  /**
      * Get path value from path string
      */
  I18nPath.prototype.getPathValue = function getPathValue(obj, path) {
    if (!isObject(obj)) {return null;}

    var paths = this.parsePath(path);
    if (paths.length === 0) {
      return null;
    } else {
      var length = paths.length;
      var last = obj;
      var i = 0;
      while (i < length) {
        var value = last[paths[i]];
        if (value === undefined) {
          return null;
        }
        last = value;
        i++;
      }

      return last;
    }
  };

  /*  */



  var linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g;
  var linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/;
  var bracketsMatcher = /[()]/g;
  var formatters = {
    'upper': function upper(str) {return str.toLocaleUpperCase();},
    'lower': function lower(str) {return str.toLocaleLowerCase();} };


  var defaultFormatter = new BaseFormatter();

  var VueI18n = function VueI18n(options) {
    var this$1 = this;
    if (options === void 0) options = {};

    // Auto install if it is not done yet and `window` has `Vue`.
    // To allow users to avoid auto-installation in some cases,
    // this code should be placed here. See #290
    /* istanbul ignore if */
    if (!Vue && typeof window !== 'undefined' && window.Vue) {
      install(window.Vue);
    }

    var locale = options.locale || 'en-US';
    var fallbackLocale = options.fallbackLocale || 'en-US';
    var messages = options.messages || {};
    var dateTimeFormats = options.dateTimeFormats || {};
    var numberFormats = options.numberFormats || {};

    this._vm = null;
    this._formatter = options.formatter || defaultFormatter;
    this._missing = options.missing || null;
    this._root = options.root || null;
    this._sync = options.sync === undefined ? true : !!options.sync;
    this._fallbackRoot = options.fallbackRoot === undefined ?
    true :
    !!options.fallbackRoot;
    this._silentTranslationWarn = options.silentTranslationWarn === undefined ?
    false :
    !!options.silentTranslationWarn;
    this._silentFallbackWarn = options.silentFallbackWarn === undefined ?
    false :
    !!options.silentFallbackWarn;
    this._dateTimeFormatters = {};
    this._numberFormatters = {};
    this._path = new I18nPath();
    this._dataListeners = [];
    this._preserveDirectiveContent = options.preserveDirectiveContent === undefined ?
    false :
    !!options.preserveDirectiveContent;
    this.pluralizationRules = options.pluralizationRules || {};

    this._exist = function (message, key) {
      if (!message || !key) {return false;}
      if (!isNull(this$1._path.getPathValue(message, key))) {return true;}
      // fallback for flat key
      if (message[key]) {return true;}
      return false;
    };

    this._initVM({
      locale: locale,
      fallbackLocale: fallbackLocale,
      messages: messages,
      dateTimeFormats: dateTimeFormats,
      numberFormats: numberFormats });

  };

  var prototypeAccessors = { vm: { configurable: true }, messages: { configurable: true }, dateTimeFormats: { configurable: true }, numberFormats: { configurable: true }, availableLocales: { configurable: true }, locale: { configurable: true }, fallbackLocale: { configurable: true }, missing: { configurable: true }, formatter: { configurable: true }, silentTranslationWarn: { configurable: true }, silentFallbackWarn: { configurable: true }, preserveDirectiveContent: { configurable: true } };

  VueI18n.prototype._initVM = function _initVM(data) {
    var silent = Vue.config.silent;
    Vue.config.silent = true;
    this._vm = new Vue({ data: data });
    Vue.config.silent = silent;
  };

  VueI18n.prototype.destroyVM = function destroyVM() {
    this._vm.$destroy();
  };

  VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging(vm) {
    this._dataListeners.push(vm);
  };

  VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging(vm) {
    remove(this._dataListeners, vm);
  };

  VueI18n.prototype.watchI18nData = function watchI18nData() {
    var self = this;
    return this._vm.$watch('$data', function () {
      var i = self._dataListeners.length;
      while (i--) {
        Vue.nextTick(function () {
          self._dataListeners[i] && self._dataListeners[i].$forceUpdate();
        });
      }
    }, { deep: true });
  };

  VueI18n.prototype.watchLocale = function watchLocale() {
    /* istanbul ignore if */
    if (!this._sync || !this._root) {return null;}
    var target = this._vm;
    return this._root.$i18n.vm.$watch('locale', function (val) {
      target.$set(target, 'locale', val);
      target.$forceUpdate();
    }, { immediate: true });
  };

  prototypeAccessors.vm.get = function () {return this._vm;};

  prototypeAccessors.messages.get = function () {return looseClone(this._getMessages());};
  prototypeAccessors.dateTimeFormats.get = function () {return looseClone(this._getDateTimeFormats());};
  prototypeAccessors.numberFormats.get = function () {return looseClone(this._getNumberFormats());};
  prototypeAccessors.availableLocales.get = function () {return Object.keys(this.messages).sort();};

  prototypeAccessors.locale.get = function () {return this._vm.locale;};
  prototypeAccessors.locale.set = function (locale) {
    this._vm.$set(this._vm, 'locale', locale);
  };

  prototypeAccessors.fallbackLocale.get = function () {return this._vm.fallbackLocale;};
  prototypeAccessors.fallbackLocale.set = function (locale) {
    this._vm.$set(this._vm, 'fallbackLocale', locale);
  };

  prototypeAccessors.missing.get = function () {return this._missing;};
  prototypeAccessors.missing.set = function (handler) {this._missing = handler;};

  prototypeAccessors.formatter.get = function () {return this._formatter;};
  prototypeAccessors.formatter.set = function (formatter) {this._formatter = formatter;};

  prototypeAccessors.silentTranslationWarn.get = function () {return this._silentTranslationWarn;};
  prototypeAccessors.silentTranslationWarn.set = function (silent) {this._silentTranslationWarn = silent;};

  prototypeAccessors.silentFallbackWarn.get = function () {return this._silentFallbackWarn;};
  prototypeAccessors.silentFallbackWarn.set = function (silent) {this._silentFallbackWarn = silent;};

  prototypeAccessors.preserveDirectiveContent.get = function () {return this._preserveDirectiveContent;};
  prototypeAccessors.preserveDirectiveContent.set = function (preserve) {this._preserveDirectiveContent = preserve;};

  VueI18n.prototype._getMessages = function _getMessages() {return this._vm.messages;};
  VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats() {return this._vm.dateTimeFormats;};
  VueI18n.prototype._getNumberFormats = function _getNumberFormats() {return this._vm.numberFormats;};

  VueI18n.prototype._warnDefault = function _warnDefault(locale, key, result, vm, values) {
    if (!isNull(result)) {return result;}
    if (this._missing) {
      var missingRet = this._missing.apply(null, [locale, key, vm, values]);
      if (typeof missingRet === 'string') {
        return missingRet;
      }
    } else {
      if (!this._silentTranslationWarn) {
        warn(
        "Cannot translate the value of keypath '" + key + "'. " +
        'Use the value of keypath as default.');

      }
    }
    return key;
  };

  VueI18n.prototype._isFallbackRoot = function _isFallbackRoot(val) {
    return !val && !isNull(this._root) && this._fallbackRoot;
  };

  VueI18n.prototype._isSilentFallback = function _isSilentFallback(locale) {
    return this._silentFallbackWarn && (this._isFallbackRoot() || locale !== this.fallbackLocale);
  };

  VueI18n.prototype._interpolate = function _interpolate(
  locale,
  message,
  key,
  host,
  interpolateMode,
  values,
  visitedLinkStack)
  {
    if (!message) {return null;}

    var pathRet = this._path.getPathValue(message, key);
    if (Array.isArray(pathRet) || isPlainObject(pathRet)) {return pathRet;}

    var ret;
    if (isNull(pathRet)) {
      /* istanbul ignore else */
      if (isPlainObject(message)) {
        ret = message[key];
        if (typeof ret !== 'string') {
          if (!this._silentTranslationWarn && !this._isSilentFallback(locale)) {
            warn("Value of key '" + key + "' is not a string!");
          }
          return null;
        }
      } else {
        return null;
      }
    } else {
      /* istanbul ignore else */
      if (typeof pathRet === 'string') {
        ret = pathRet;
      } else {
        if (!this._silentTranslationWarn && !this._isSilentFallback(locale)) {
          warn("Value of key '" + key + "' is not a string!");
        }
        return null;
      }
    }

    // Check for the existence of links within the translated string
    if (ret.indexOf('@:') >= 0 || ret.indexOf('@.') >= 0) {
      ret = this._link(locale, message, ret, host, 'raw', values, visitedLinkStack);
    }

    return this._render(ret, interpolateMode, values, key);
  };

  VueI18n.prototype._link = function _link(
  locale,
  message,
  str,
  host,
  interpolateMode,
  values,
  visitedLinkStack)
  {
    var ret = str;

    // Match all the links within the local
    // We are going to replace each of
    // them with its translation
    var matches = ret.match(linkKeyMatcher);
    for (var idx in matches) {
      // ie compatible: filter custom array
      // prototype method
      if (!matches.hasOwnProperty(idx)) {
        continue;
      }
      var link = matches[idx];
      var linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
      var linkPrefix = linkKeyPrefixMatches[0];
      var formatterName = linkKeyPrefixMatches[1];

      // Remove the leading @:, @.case: and the brackets
      var linkPlaceholder = link.replace(linkPrefix, '').replace(bracketsMatcher, '');

      if (visitedLinkStack.includes(linkPlaceholder)) {
        {
          warn("Circular reference found. \"" + link + "\" is already visited in the chain of " + visitedLinkStack.reverse().join(' <- '));
        }
        return ret;
      }
      visitedLinkStack.push(linkPlaceholder);

      // Translate the link
      var translated = this._interpolate(
      locale, message, linkPlaceholder, host,
      interpolateMode === 'raw' ? 'string' : interpolateMode,
      interpolateMode === 'raw' ? undefined : values,
      visitedLinkStack);


      if (this._isFallbackRoot(translated)) {
        if (!this._silentTranslationWarn) {
          warn("Fall back to translate the link placeholder '" + linkPlaceholder + "' with root locale.");
        }
        /* istanbul ignore if */
        if (!this._root) {throw Error('unexpected error');}
        var root = this._root.$i18n;
        translated = root._translate(
        root._getMessages(), root.locale, root.fallbackLocale,
        linkPlaceholder, host, interpolateMode, values);

      }
      translated = this._warnDefault(
      locale, linkPlaceholder, translated, host,
      Array.isArray(values) ? values : [values]);

      if (formatters.hasOwnProperty(formatterName)) {
        translated = formatters[formatterName](translated);
      }

      visitedLinkStack.pop();

      // Replace the link with the translated
      ret = !translated ? ret : ret.replace(link, translated);
    }

    return ret;
  };

  VueI18n.prototype._render = function _render(message, interpolateMode, values, path) {
    var ret = this._formatter.interpolate(message, values, path);

    // If the custom formatter refuses to work - apply the default one
    if (!ret) {
      ret = defaultFormatter.interpolate(message, values, path);
    }

    // if interpolateMode is **not** 'string' ('row'),
    // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
    return interpolateMode === 'string' ? ret.join('') : ret;
  };

  VueI18n.prototype._translate = function _translate(
  messages,
  locale,
  fallback,
  key,
  host,
  interpolateMode,
  args)
  {
    var res =
    this._interpolate(locale, messages[locale], key, host, interpolateMode, args, [key]);
    if (!isNull(res)) {return res;}

    res = this._interpolate(fallback, messages[fallback], key, host, interpolateMode, args, [key]);
    if (!isNull(res)) {
      if (!this._silentTranslationWarn && !this._silentFallbackWarn) {
        warn("Fall back to translate the keypath '" + key + "' with '" + fallback + "' locale.");
      }
      return res;
    } else {
      return null;
    }
  };

  VueI18n.prototype._t = function _t(key, _locale, messages, host) {
    var ref;

    var values = [],len = arguments.length - 4;
    while (len-- > 0) {values[len] = arguments[len + 4];}
    if (!key) {return '';}

    var parsedArgs = parseArgs.apply(void 0, values);
    var locale = parsedArgs.locale || _locale;

    var ret = this._translate(
    messages, locale, this.fallbackLocale, key,
    host, 'string', parsedArgs.params);

    if (this._isFallbackRoot(ret)) {
      if (!this._silentTranslationWarn && !this._silentFallbackWarn) {
        warn("Fall back to translate the keypath '" + key + "' with root locale.");
      }
      /* istanbul ignore if */
      if (!this._root) {throw Error('unexpected error');}
      return (ref = this._root).$t.apply(ref, [key].concat(values));
    } else {
      return this._warnDefault(locale, key, ret, host, values);
    }
  };

  VueI18n.prototype.t = function t(key) {
    var ref;

    var values = [],len = arguments.length - 1;
    while (len-- > 0) {values[len] = arguments[len + 1];}
    return (ref = this)._t.apply(ref, [key, this.locale, this._getMessages(), null].concat(values));
  };

  VueI18n.prototype._i = function _i(key, locale, messages, host, values) {
    var ret =
    this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
    if (this._isFallbackRoot(ret)) {
      if (!this._silentTranslationWarn) {
        warn("Fall back to interpolate the keypath '" + key + "' with root locale.");
      }
      if (!this._root) {throw Error('unexpected error');}
      return this._root.$i18n.i(key, locale, values);
    } else {
      return this._warnDefault(locale, key, ret, host, [values]);
    }
  };

  VueI18n.prototype.i = function i(key, locale, values) {
    /* istanbul ignore if */
    if (!key) {return '';}

    if (typeof locale !== 'string') {
      locale = this.locale;
    }

    return this._i(key, locale, this._getMessages(), null, values);
  };

  VueI18n.prototype._tc = function _tc(
  key,
  _locale,
  messages,
  host,
  choice)
  {
    var ref;

    var values = [],len = arguments.length - 5;
    while (len-- > 0) {values[len] = arguments[len + 5];}
    if (!key) {return '';}
    if (choice === undefined) {
      choice = 1;
    }

    var predefined = { 'count': choice, 'n': choice };
    var parsedArgs = parseArgs.apply(void 0, values);
    parsedArgs.params = Object.assign(predefined, parsedArgs.params);
    values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
    return this.fetchChoice((ref = this)._t.apply(ref, [key, _locale, messages, host].concat(values)), choice);
  };

  VueI18n.prototype.fetchChoice = function fetchChoice(message, choice) {
    /* istanbul ignore if */
    if (!message && typeof message !== 'string') {return null;}
    var choices = message.split('|');

    choice = this.getChoiceIndex(choice, choices.length);
    if (!choices[choice]) {return message;}
    return choices[choice].trim();
  };

  /**
      * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
      * @param choicesLength {number} an overall amount of available choices
      * @returns a final choice index
     */
  VueI18n.prototype.getChoiceIndex = function getChoiceIndex(choice, choicesLength) {
    // Default (old) getChoiceIndex implementation - english-compatible
    var defaultImpl = function defaultImpl(_choice, _choicesLength) {
      _choice = Math.abs(_choice);

      if (_choicesLength === 2) {
        return _choice ?
        _choice > 1 ?
        1 :
        0 :
        1;
      }

      return _choice ? Math.min(_choice, 2) : 0;
    };

    if (this.locale in this.pluralizationRules) {
      return this.pluralizationRules[this.locale].apply(this, [choice, choicesLength]);
    } else {
      return defaultImpl(choice, choicesLength);
    }
  };

  VueI18n.prototype.tc = function tc(key, choice) {
    var ref;

    var values = [],len = arguments.length - 2;
    while (len-- > 0) {values[len] = arguments[len + 2];}
    return (ref = this)._tc.apply(ref, [key, this.locale, this._getMessages(), null, choice].concat(values));
  };

  VueI18n.prototype._te = function _te(key, locale, messages) {
    var args = [],len = arguments.length - 3;
    while (len-- > 0) {args[len] = arguments[len + 3];}

    var _locale = parseArgs.apply(void 0, args).locale || locale;
    return this._exist(messages[_locale], key);
  };

  VueI18n.prototype.te = function te(key, locale) {
    return this._te(key, this.locale, this._getMessages(), locale);
  };

  VueI18n.prototype.getLocaleMessage = function getLocaleMessage(locale) {
    return looseClone(this._vm.messages[locale] || {});
  };

  VueI18n.prototype.setLocaleMessage = function setLocaleMessage(locale, message) {
    this._vm.$set(this._vm.messages, locale, message);
  };

  VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage(locale, message) {
    this._vm.$set(this._vm.messages, locale, merge(this._vm.messages[locale] || {}, message));
  };

  VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat(locale) {
    return looseClone(this._vm.dateTimeFormats[locale] || {});
  };

  VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat(locale, format) {
    this._vm.$set(this._vm.dateTimeFormats, locale, format);
  };

  VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat(locale, format) {
    this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
  };

  VueI18n.prototype._localizeDateTime = function _localizeDateTime(
  value,
  locale,
  fallback,
  dateTimeFormats,
  key)
  {
    var _locale = locale;
    var formats = dateTimeFormats[_locale];

    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (!this._silentTranslationWarn) {
        warn("Fall back to '" + fallback + "' datetime formats from '" + locale + " datetime formats.");
      }
      _locale = fallback;
      formats = dateTimeFormats[_locale];
    }

    if (isNull(formats) || isNull(formats[key])) {
      return null;
    } else {
      var format = formats[key];
      var id = _locale + "__" + key;
      var formatter = this._dateTimeFormatters[id];
      if (!formatter) {
        formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
      }
      return formatter.format(value);
    }
  };

  VueI18n.prototype._d = function _d(value, locale, key) {
    /* istanbul ignore if */
    if (!VueI18n.availabilities.dateTimeFormat) {
      warn('Cannot format a Date value due to not supported Intl.DateTimeFormat.');
      return '';
    }

    if (!key) {
      return new Intl.DateTimeFormat(locale).format(value);
    }

    var ret =
    this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);
    if (this._isFallbackRoot(ret)) {
      if (!this._silentTranslationWarn) {
        warn("Fall back to datetime localization of root: key '" + key + "' .");
      }
      /* istanbul ignore if */
      if (!this._root) {throw Error('unexpected error');}
      return this._root.$i18n.d(value, key, locale);
    } else {
      return ret || '';
    }
  };

  VueI18n.prototype.d = function d(value) {
    var args = [],len = arguments.length - 1;
    while (len-- > 0) {args[len] = arguments[len + 1];}

    var locale = this.locale;
    var key = null;

    if (args.length === 1) {
      if (typeof args[0] === 'string') {
        key = args[0];
      } else if (isObject(args[0])) {
        if (args[0].locale) {
          locale = args[0].locale;
        }
        if (args[0].key) {
          key = args[0].key;
        }
      }
    } else if (args.length === 2) {
      if (typeof args[0] === 'string') {
        key = args[0];
      }
      if (typeof args[1] === 'string') {
        locale = args[1];
      }
    }

    return this._d(value, locale, key);
  };

  VueI18n.prototype.getNumberFormat = function getNumberFormat(locale) {
    return looseClone(this._vm.numberFormats[locale] || {});
  };

  VueI18n.prototype.setNumberFormat = function setNumberFormat(locale, format) {
    this._vm.$set(this._vm.numberFormats, locale, format);
  };

  VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat(locale, format) {
    this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));
  };

  VueI18n.prototype._getNumberFormatter = function _getNumberFormatter(
  value,
  locale,
  fallback,
  numberFormats,
  key,
  options)
  {
    var _locale = locale;
    var formats = numberFormats[_locale];

    // fallback locale
    if (isNull(formats) || isNull(formats[key])) {
      if (!this._silentTranslationWarn) {
        warn("Fall back to '" + fallback + "' number formats from '" + locale + " number formats.");
      }
      _locale = fallback;
      formats = numberFormats[_locale];
    }

    if (isNull(formats) || isNull(formats[key])) {
      return null;
    } else {
      var format = formats[key];

      var formatter;
      if (options) {
        // If options specified - create one time number formatter
        formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
      } else {
        var id = _locale + "__" + key;
        formatter = this._numberFormatters[id];
        if (!formatter) {
          formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
        }
      }
      return formatter;
    }
  };

  VueI18n.prototype._n = function _n(value, locale, key, options) {
    /* istanbul ignore if */
    if (!VueI18n.availabilities.numberFormat) {
      {
        warn('Cannot format a Number value due to not supported Intl.NumberFormat.');
      }
      return '';
    }

    if (!key) {
      var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
      return nf.format(value);
    }

    var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
    var ret = formatter && formatter.format(value);
    if (this._isFallbackRoot(ret)) {
      if (!this._silentTranslationWarn) {
        warn("Fall back to number localization of root: key '" + key + "' .");
      }
      /* istanbul ignore if */
      if (!this._root) {throw Error('unexpected error');}
      return this._root.$i18n.n(value, Object.assign({}, { key: key, locale: locale }, options));
    } else {
      return ret || '';
    }
  };

  VueI18n.prototype.n = function n(value) {
    var args = [],len = arguments.length - 1;
    while (len-- > 0) {args[len] = arguments[len + 1];}

    var locale = this.locale;
    var key = null;
    var options = null;

    if (args.length === 1) {
      if (typeof args[0] === 'string') {
        key = args[0];
      } else if (isObject(args[0])) {
        if (args[0].locale) {
          locale = args[0].locale;
        }
        if (args[0].key) {
          key = args[0].key;
        }

        // Filter out number format options only
        options = Object.keys(args[0]).reduce(function (acc, key) {
          var obj;

          if (numberFormatKeys.includes(key)) {
            return Object.assign({}, acc, (obj = {}, obj[key] = args[0][key], obj));
          }
          return acc;
        }, null);
      }
    } else if (args.length === 2) {
      if (typeof args[0] === 'string') {
        key = args[0];
      }
      if (typeof args[1] === 'string') {
        locale = args[1];
      }
    }

    return this._n(value, locale, key, options);
  };

  VueI18n.prototype._ntp = function _ntp(value, locale, key, options) {
    /* istanbul ignore if */
    if (!VueI18n.availabilities.numberFormat) {
      {
        warn('Cannot format to parts a Number value due to not supported Intl.NumberFormat.');
      }
      return [];
    }

    if (!key) {
      var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
      return nf.formatToParts(value);
    }

    var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
    var ret = formatter && formatter.formatToParts(value);
    if (this._isFallbackRoot(ret)) {
      if (!this._silentTranslationWarn) {
        warn("Fall back to format number to parts of root: key '" + key + "' .");
      }
      /* istanbul ignore if */
      if (!this._root) {throw Error('unexpected error');}
      return this._root.$i18n._ntp(value, locale, key, options);
    } else {
      return ret || [];
    }
  };

  Object.defineProperties(VueI18n.prototype, prototypeAccessors);

  var availabilities;
  // $FlowFixMe
  Object.defineProperty(VueI18n, 'availabilities', {
    get: function get() {
      if (!availabilities) {
        var intlDefined = typeof Intl !== 'undefined';
        availabilities = {
          dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
          numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined' };

      }

      return availabilities;
    } });


  VueI18n.install = install;
  VueI18n.version = '8.10.0';

  return VueI18n;

});

/***/ }),

/***/ 136:
/*!**************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Ffund%2Ffund"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _fund = _interopRequireDefault(__webpack_require__(/*! ./pages/fund/fund.vue */ 137));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_fund.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 14:
/*!***************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/lang/lang/en.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _message;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = {
  message: (_message = {
    exchange: 'Flash',
    income_day: "Total days of reRETCnue",
    day_kt: "Can be mentioned today",
    // 登录
    hello: "HELLO",
    welcome: "Welcome to RETC.",
    login: "LOG IN",
    signin: "Sign In",
    forgetPass: "Forget password?",
    notAccount: "immediately",
    enter_num_phone: "Enter phone number/email",
    enterpassword_RETC: "Please enter a new password for entering a 6-16 digit combination",
    enterpaypwd_RETC: 'Please enter a 6-digit payment password',
    switch_lang: "Switch Language",
    copySu: 'Successful copy',
    // 注册
    i: 'I ',
    iagree: "agree to the user agreement",
    pleaseagree: "Please agree to the User Service Agreement",
    china: "China",
    enter_email: "Enter email",
    enter_yzm: "Enter RETCrification code",
    get_yam: "RETCrification",
    enter_label: 'Please enter a label',
    lable: 'label',
    yanzhengma: 'RETCrification code',
    enter_login_pass: "Enter password",
    reenter_login_pass: "Enter password again",
    enter_pay_pass: "Enter payment password",
    reenter_pay_pass: "Enter payment password again",
    enter_nickname: "Enter nickname(6-16 alphanumeric password)",
    enter_imgyzm: "Enter graphic RETCrification code",
    enter_refer: "Please enter the invitation code (not required)",
    register: "REGISTER",
    haRETCAccount: "immediately",
    login_is_empty: "Login password is empty",
    login_is_error: "Login password format error",
    login_not_same: "Inconsistent login password",
    pay_is_empty: "Payment password cannot be empty",
    pay_is_error: "Payment password format error",
    pay_not_same: "Inconsistent payment password",
    nickname_is_empty: "Nickname can't be blank",
    nickname_is_error: "Nickname format error",
    yzmimg_is_empty: "Graphic RETCrification code can't be empty",
    yzmimg_is_error: "Graphic RETCrification code format error",
    yzm_is_empty: "Invitation code can't be empty",
    yzm_is_error: "Incorrect invitation code format",
    register_fail: "Register failed",
    yzm_error_is: 'RETCrification code must be filled',
    yzm_error_isfail: 'RETCrification code format error',

    // 验证码
    error_email: "Incorrect mailbox",
    yzm_fail: "RETCrification code error",
    re_send_yzm: "Resend Code",
    login_fail: "Login failed",

    // 国家地区
    area: "Area Code",

    // 忘记密码
    forgetpass: "Forget Password",
    userinfo: "Enter your cell mobile or email address",
    submit: "SUBMIT",

    // 修改支付密码
    old_pass: "Old Password",
    new_pass: "New Password",
    enter_old_pass: "Enter the old password",
    enter_new_pass: "Enter a new password",
    getToIndex: 'Return to Home Page',
    // 修改登录密码
    modify_login_pass: "Modify Login Password",

    // 请求失败提示
    request_fail: "Request data failed",

    // 个人中心
    mybill: "My Bill",
    safecenter: "Security",
    communityleRETCl: 'Community LeRETCl',
    myrefer: "Invitation Code",
    helpcenter: "Online service",
    set: "Setting",
    setNickNameTxt: "Please set a nickname",

    /**
                                             * 个人信息
                                             * */
    person_info: "Personal Information",
    saRETC: "SARETC",
    nickname: "Nickname",
    sex: "Gender",

    // 系统设置
    sys_set: "System Settings" }, _defineProperty(_message, "switch_lang",
  "Switch Language"), _defineProperty(_message, "RETCrsion",
  "RETCrsion"), _defineProperty(_message, "exit",
  "SIGN OUT"), _defineProperty(_message, "protocol",
  "Protocol"), _defineProperty(_message, "select_lang",


  "Choose Language"), _defineProperty(_message, "zh",
  "Chinese"), _defineProperty(_message, "en",
  "English"), _defineProperty(_message, "ko",
  "Korean"), _defineProperty(_message, "confirm",
  "Confirm"), _defineProperty(_message, "cancel",
  "Cancel"), _defineProperty(_message, "cellnum",


  "Account"), _defineProperty(_message, "loginpass",
  "Login Password"), _defineProperty(_message, "paypass",
  "Payment Password"), _defineProperty(_message, "gesturepass",
  "Gesture Password"), _defineProperty(_message, "setgesturepass",
  "Set Gesture Password"), _defineProperty(_message, "reset",
  "reset"), _defineProperty(_message, "modify_login_pass",
  "Modify login password"), _defineProperty(_message, "set_pwd_pass",
  "Set transaction password"), _defineProperty(_message, "myreferurl",


  "Invitation Link"), _defineProperty(_message, "copysuccess",
  "Successful copy"), _defineProperty(_message, "refer",
  "Invitation code"), _defineProperty(_message, "referurl",
  "Invitation link"), _defineProperty(_message, "genetateVcode",
  "Generate QR Code"), _defineProperty(_message, "copy",
  "copy"), _defineProperty(_message, "inRETCstment",


  "InRETCstment"), _defineProperty(_message, "min_inRETCst_num",
  "Amount inRETCsted"), _defineProperty(_message, "currency",
  "Currency"), _defineProperty(_message, "m_rate",
  "Monthly Rate"), _defineProperty(_message, "model",
  "Open-hang"), _defineProperty(_message, "search_txt",
  "search currency"), _defineProperty(_message, "state",
  "Hot"), _defineProperty(_message, "inRETCst_btn",
  "INRETCST"), _defineProperty(_message, "saled",
  "Sold "), _defineProperty(_message, "end",
  "End "), _defineProperty(_message, "myfund",
  "My InRETCst"), _defineProperty(_message, "exit_order",
  "Exit slip"), _defineProperty(_message, "community",


  "Community"), _defineProperty(_message, "search_content",
  "enter search content"), _defineProperty(_message, "goldcommunity",
  "Gold Community"), _defineProperty(_message, "goldpush",
  "Team user"), _defineProperty(_message, "goldteam",
  "Share user"), _defineProperty(_message, "goldsum",
  "income"), _defineProperty(_message, "destroytime",
  'Destruction time 23:00-24:00 daily'), _defineProperty(_message, "transfer",


  "Transfer out"), _defineProperty(_message, "transferlog",
  "Transfer history"), _defineProperty(_message, "transfercoin",
  "Currency"), _defineProperty(_message, "transferaddress",
  "To address"), _defineProperty(_message, "transfernum",
  "Transfer quantity"), _defineProperty(_message, "transferfee",
  "Fee"), _defineProperty(_message, "all",
  "All"), _defineProperty(_message, "arrival",
  "Arrival"), _defineProperty(_message, "coin",
  "Coin"), _defineProperty(_message, "cur_use",
  "Available "), _defineProperty(_message, "min_transfer",
  "Minimum number of coins "), _defineProperty(_message, "chargein",


  "Transfer"), _defineProperty(_message, "wallet_address",
  "Your USDT wallet address"), _defineProperty(_message, "enter_wallet_address",
  "Enter wallet address"), _defineProperty(_message, "charge_history",
  'Recharge history'), _defineProperty(_message, "index",


  "RETC Ecology"), _defineProperty(_message, "assets",
  "My assets"), _defineProperty(_message, "search_coin",
  "Search currency"), _defineProperty(_message, "hide_currency",
  "Hide currencies with a balance of 0"), _defineProperty(_message, "detail",
  "Detail"), _defineProperty(_message, "_market",
  "Price"), _defineProperty(_message, "with_address",


  "Coin Address"), _defineProperty(_message, "add_new_address",
  "Add new address"), _defineProperty(_message, "delete",
  "Delete"), _defineProperty(_message, "transfer_history",


  "Transfer out of history"), _defineProperty(_message, "address_name",
  "Address name"), _defineProperty(_message, "address_charge",
  "Recharge address"), _defineProperty(_message, "charge",
  "Recharge"), _defineProperty(_message, "address",


  "Address"), _defineProperty(_message, "review",
  "Pending review"), _defineProperty(_message, "transfer_detail",
  "Transfer details"), _defineProperty(_message, "invite_friend",


  "Invite Friends"), _defineProperty(_message, "invite_txt",
  "Invitation Code"), _defineProperty(_message, "start_plan_txt",
  "Open your RETC program"), _defineProperty(_message, "time",


  'Time'), _defineProperty(_message, "edu",
  'Amount'), _defineProperty(_message, "user",
  'User'), _defineProperty(_message, "destory_pool",
  'Destroy Pool'), _defineProperty(_message, "browser",
  "Browser"), _defineProperty(_message, "withdraw113",
  'Money Transfer Safety Tip: When transferring money to a stranger or a strange account, please be sure to check the identity of the other party and protect your own assets.'), _defineProperty(_message, "performance1",

  "Seeing"), _defineProperty(_message, "performance2",
  'Sharing'), _defineProperty(_message, "static_income1",
  "Sharing"), _defineProperty(_message, "direct_income1",
  "Node dividend"), _defineProperty(_message, "community_income1",
  "Node"), _defineProperty(_message, "total_income",
  "CumulatiRETC Income"), _defineProperty(_message, "nodata",
  'No Data'), _defineProperty(_message, "sysBrand1",


  "RETC Capital, Serving the world!"), _defineProperty(_message, "sysBrand2",
  "RETC Team"), _defineProperty(_message, "sys",
  "System Notice"), _defineProperty(_message, "startTime",



  'Start time'), _defineProperty(_message, "endTime",
  'End time'), _defineProperty(_message, "status",
  'Status'), _defineProperty(_message, "InRETCstmentQuantity",
  'InRETCstment quantity'), _defineProperty(_message, "NumberOfPackets",
  'Number of packets'), _defineProperty(_message, "types",
  'type'), _defineProperty(_message, "quantity",
  'quantity'), _defineProperty(_message, "Repeat",
  'Re-inRETCstment'), _defineProperty(_message, "termination",
  'terminate'), _defineProperty(_message, "ContractTermination",
  'Unsubscribe'), _defineProperty(_message, "BlockPackage",
  'Block package'), _defineProperty(_message, "DeductedQuantity",
  'Deduction of principal'), _defineProperty(_message, "interest",
  'interest'), _defineProperty(_message, "DeductingIncome",
  'Deducting income'), _defineProperty(_message, "RefundablePrincipal",
  'returnable principal'), _defineProperty(_message, "transactionPassword",
  'transaction password'), _defineProperty(_message, "listshenchangdeshuzi",
  'The principal can be refunded at any time. After deducting all the proceeds, the remaining principal is deducted by 15%.'), _defineProperty(_message, "MinimumStarting",

  'Minimum starting'), _defineProperty(_message, "MaximumLimit",
  'Maximum limit'), _defineProperty(_message, "AlreadyInRETCsted",
  'has voted'), _defineProperty(_message, "InputCurrency",

  'Input share'), _defineProperty(_message, "MinimumStarting",
  'Minimum starting'), _defineProperty(_message, "ChooseTheNumberOfInputs",
  "Select the number of block packages"), _defineProperty(_message, "SelectCurrency",
  'quantity'), _defineProperty(_message, "allIn",
  'All transferred'), _defineProperty(_message, "Balance",
  'balance'), _defineProperty(_message, "Input",
  'InRETCstment'), _defineProperty(_message, "InsufficientQuantity",
  'Insufficient quantity'), _defineProperty(_message, "TheNumberOfInputsCannotBeEmpty",
  'The number of inputs cannot be empty'), _defineProperty(_message, "PleaseEnterThTransactionPassword",
  'Please enter the transaction password'), _defineProperty(_message, "InsufficientBalance",
  'Insufficient balance'), _defineProperty(_message, "FailedToGetData",
  'Get data failed'), _defineProperty(_message, "confirmOk",
  'Are you sure you want to delete'), _defineProperty(_message, "changeer",
  'Select QR code'), _defineProperty(_message, "update",



  "Update prompt"), _defineProperty(_message, "update_tip",
  "The RETC ecosystem has been released in a new RETCrsion. Are you updating?"), _defineProperty(_message, "isJumping",
  "Jumping..."), _defineProperty(_message, "soon_update",
  "Please update the latest RETCrsion as soon as possible..."), _defineProperty(_message, "fail",
  "Fail"), _defineProperty(_message, "yeji",


  "Performance"), _defineProperty(_message, "charge_detail",

  'Details of recharge'), _defineProperty(_message, "to_per",
  'ReceiRETCr'), _defineProperty(_message, "from_per",
  'Sender'), _defineProperty(_message, "remark",
  'Remarks'), _defineProperty(_message, "ArriRETCd",
  'ArriRETCd'), _defineProperty(_message, "TradingNumber",
  'Trading Number'), _defineProperty(_message, "TradingTime",
  'Transaction time'), _defineProperty(_message, "OutgoingAddress",

  'Outgoing address'), _defineProperty(_message, "ReceivingAddress",
  'Receiving address'), _defineProperty(_message, "AuditInProgress",
  'Progress'), _defineProperty(_message, "Adopted",
  'Adopted'), _defineProperty(_message, "Rejected",
  'Rejected'), _defineProperty(_message, "dayInteres",
  'Daily interest rate'), _defineProperty(_message, "carAddress",

  'Wallet Address'), _defineProperty(_message, "your",
  'Your'), _defineProperty(_message, "userEr",
  'Use two-dimensional code wallet address'), _defineProperty(_message, "emptySomethings",
  'The inRETCstment data package is 0'), _defineProperty(_message, "protocol_title",

  '《Service Agreement》'), _defineProperty(_message, "protocol01", "\uCE5C\uC560\uD558\uB294 \uC0AC\uC6A9\uC790\uFF1A\n\t\t<p>Thank you for choosing the RETC Eco Service. This service is held and operated by the RETC Ecology. The RETC Eco Service Agreement (hereinafter referred to as \"this Agreement\") is signed by RETC Ecology and you (hereinafter referred to as \"User\"). This Agreement has the legal effect of contract between you and the Company. In this agreement:</p> <p>1. \"I\" and \"we\" refer to the company, \"our\" should be interpreted accordingly;</p><p> 2. \"You\" refers to the user and \"your\" should be interpreted accordingly. You and us are called \"one party\" and are collectiRETCly called \"two parties.\" We hereby remind you that we can use our RETC Eco Mobile App (hereafter referred to as \"RETC Ecology\" or \"This Software\"), RETC Eco can be downloaded and installed through the fixed download link. Please read this agreement and the related issues mentioned later. The Agreement, in particular the terms of the \"Disclaimer and Limitation of Liability\" in this Agreement, are presented in bold form to ensure that you fully understand the terms of this Agreement and consider the risks yourself.</p>\n\t\t"), _defineProperty(_message, "protocol02", "I. Confirmation and acceptance of this agreement"), _defineProperty(_message, "protocol03", "<p>1. You understand that this Agreement and related agreements apply to the decentralization and centralization services independently deRETCloped and owned by RETC Ecok and RETC Ecology.</p>\n\t\t<p>2. By downloading RETC Eco Software and registering as our user, you are deemed to haRETC fully read and accepted all the terms of this Agreement. This Agreement is effectiRETC immediately and is binding on both parties. If you do not agree to the terms of this Agreement, you should immediately stop using the RETC Ecology. If you haRETC already downloaded the RETC Ecology, please delete it now. </p>\n\t\t<p>3. When accessing or using the RETC Ecology, you agree\uFF1A</p>\n\t\t <p>1. Accept the latest RETCrsion of this agreement (no change or modification)\uFF1B</p>\n\t\t <p>2. In your jurisdiction, you haRETC reached the legal age of using the RETC Ecology and can assume binding legal or monetary obligations arising from the use of the RETC Ecology.\uFF1B</p>\n\t\t<p>3. You are not a excluded person (as defined in this Agreement)\u3002</p>\n\t\t <p>4. This Agreement may be updated by us at any time. Once the revised Agreement is published on the RETC Ecology, it will automatically take effect immediately without further notice. After the company announces the terms of the revised agreement, if you do not accept the revised terms, please stop using the RETC ecosystem immediately, and your continued use of the RETC Eco will be deemed to accept the revised agreement.</p>\n\t\t"), _defineProperty(_message, "protocol04", "Second, the definition "), _defineProperty(_message, "protocol05", "<p>1. RETC Ecology: refers to the mining machine products deRETCloped by the company based on blockchain, including RETC wallet, asset statistics, asset trading, inRETCstment, etc\u3002</p> \n\t\t<p>2. User: refers to users who must cooperate with the company to fulfill their personal information disclosure obligations in accordance with the laws, regulations and policies of relevant countries and other countries.\u3002 </p>\n\t\t<p>3. Excluded person\uFF1A</p>\n\t\t <p>1. Persons other than natural persons who haRETC the legal and conscious ability to enter into this Agreement\uFF1B</p>\n\t\t <p>2. Prohibited, restricted, unlicensed or unqualified (as defined in this Agreement) in any form or by any means, in whole or in part, as a result of this Agreement, the law, regulatory requirements or the jurisdiction applicable to the User. user </p>\n\t\t<p>3. Cloud wallet: The private key is stored in the cloud and stored in the encrypted hardware device.</p>\n\t\t<p>4. Wallet password: refers to the password you decide during the creation of the RETC eco-wallet, which will be used to encrypt and protect your private key.</p>\n\t\t<p>5. Digital token: refers to the type of digital token currently supported by RETC Eco Wallet. Transaction guarantee, when the transaction is completed, the digital currency is giRETCn to the corresponding party.</p>\n\t\t<p>6. Message: An email in which the user can receiRETC information or notifications from the company. </p>\n\t\t"), _defineProperty(_message, "protocol06", "Third, the license"), _defineProperty(_message, "protocol07", "Subject to your agreement, RETC Eco Wallet grants you limited rights to use RETC Eco Wallet and related services. This right of use is granted to you personally, is conditional, non-exclusiRETC, non-transferable, and CoinBank reserRETCs the right to revoke this authorization and you must comply with all terms of this Agreement. Your license does not represent your ownership of the RETC Eco Wallet or related services. When you violate any of the terms of this Agreement, RETC Eco Wallet reserRETCs the right to suspend, change, discontinue, limit or eRETCn terminate the service to you. When you change, interrupt, or terminate the service relationship between the RETC Eco Wallet. You still haRETC the right to export your wallet information in a reasonable amount of time."), _defineProperty(_message, "protocol08", "Fourth, the service content"), _defineProperty(_message, "protocol09", "<p>1. Transfer, collection. You can use the transfer and collection functions of RETC Eco Wallet to manage digital tokens, that is, use the private key for electronic signature and modify the ledger of the relevant blockchain. Transfer means that the payer uses the payee's blockchain address for the transfer operation, and the 'transfer' behavior involRETCs a valid record of the transaction in the distributed ledger of the relevant blockchain system. </p>\n\t\t<p>2. Transaction Record. We will copy all or part of your transaction history through the blockchain system. HoweRETCr, the user should take the latest transaction record of the blockchain.</p>\n\t\t<p>3.RETC wallet. You can open the RETC Eco Wallet. After opening this service, you will be deemed to haRETC entrusted the digital tokens to the RETC Eco Wallet Management. </p>\n\t\t<p>4. Asset statistics. You can use the asset statistics service to help you count multi-channel cost gains and losses after you bind the exchange and open the RETC eco-wallet.</p>\n\t\t"), _defineProperty(_message, "protocol10", "FiRETC, risk tips"), _defineProperty(_message, "protocol11", "You understand and understand that due to the fact that the laws, regulations and policies in the field of digital tokens are not yet sound, digital tokens in this field may cause major risks such as unfulfilled and technical instability. You also understand that the price volatility of digital tokens is much higher than other financial assets. We caution you to choose to hold or dispose of any digital token in a reasonable manner based on your financial situation and risk appetite. You also understand that the market view function provided by RETC Ecology is only a search result of the digital token exchange rate information of some exchanges, and does not indicate the latest market or best offer. You will be responsible for all the consequences of your use of the RETC Ecology in the RETC Ecology. In addition to this tip, your use of the RETC Ecology means that you haRETC read and accepted the relevant risk disclosures.\uFF08Risk Disclosure Statement) \u3007"), _defineProperty(_message, "protocol12", "6. Your rights and obligations"), _defineProperty(_message, "protocol13", "<p>1. Create or import a wallet: You haRETC the right to create and/or import a wallet via RETC Eco on your mobile device, haRETC the right to set the wallet's wallet password and other information, and haRETC the right to use your own wallet in the area via the RETC eco app. Transfers and collections on the blockchain\u3002</p>\n\t\t<p>2. User authentication: In accordance with the requirements of relevant laws and regulations, specific users should complete the relevant identity RETCrification in time according to the prompts of RETC Ecology when using the relevant services provided by RETC Ecology, and ask you to submit including but not limited to your name, ID number, mobile phone. Personal information such as number and bank card number information. Otherwise, the specific user will not be able to use the service, and the loss caused by the delay of the specific user is at your own risk.</p>\n\t\t <p>3. Collections, transfers: You know the transfer limits and the number of credits you can use for the RETC Eco Service, possibly because of the country/region in which you use the transfer service, regulatory requirements, transfer purposes, RETC ecological risk control, Authentication and other reasons are different. You understand the \"irrevocable\" attribute based on blockchain operation. When you use the RETC eco-transfer function, you should bear the consequences of your mistakes (including but not limited to because you entered the wrong transfer address, you choose to transfer money Problem with the node serRETCr).</p>\n\t\t <p>4. Legal compliance: You know that when you operate on the RETC Ecosystem or use the RETC Ecology Smart Contract to trade, you should follow the relevant laws and regulations and national policies.</p>\n\t\t <p>5. The company may deRETClop different software RETCrsions for different terminal devices. You should choose to download the appropriate RETCrsion for installation according to actual needs. If you obtain the software or the installation program with the same name as the software from a third party that is not legally authorized, the company will not be able to guarantee the normal use of the software, and it cannot guarantee its security, so the loss will be borne by you. </p>\n\t\t <p>6. After the new RETCrsion of the software is released, the old RETCrsion of the software may not be available. The company does not guarantee the security of the old software, continue to provide usability and provide corresponding customer service. Please check and download the latest RETCrsion at any time.</p>\n\t\t"), _defineProperty(_message, "protocol14", "7. Change, interruption or termination of service"), _defineProperty(_message, "protocol15", "<p>1.You understand and agree that the Company may, at its sole discretion, temporarily provide some of its service features, or may suspend some of its service features or open new service features in the future. When we change the service, as long as you still use the RETC Ecology, you still agree to the terms of this Agreement or this Agreement.\u3002</p>\n\t\t <p>2. In order to avoid any misuse of the RETC ecosystem or any security risks of digital tokens, you should avoid using the RETC ecosystem without the basic knowledge of blockchain. For users who do not haRETC the basic knowledge of blockchain, the company has the right to refuse to provide some or all of the service functions.</p>\n\t\t <p>3. You understand that the Company will suspend the provision of applicable laws or policies for material adRETCrse changes in the following circumstances.</p><p> 4. Other situations that the company cannot control or reasonably foresee.</p> \n\t\t<p>4. The company may unilaterally suspend or terminate some or all of the functions of the user using the RETC Ecology when the following conditions occur\uFF1A </p>\n\t\t<p>1. User death\uFF1B</p>\n\t\t <p>2. Stealing someone else\u2019s wallet information or mobile device\uFF1B</p>\n\t\t <p>3. Fill in false personal information in RETC Ecology\uFF1B</p>\n\t\t <p>4. Reject the mandatory update operation of the RETC ecosystem\uFF1B</p>\n\t\t <p>5. Use the RETC Ecology for illegal or criminal activities\uFF1B </p>\n\t\t<p>6. PreRETCnt other users from using the RETC ecosystem </p>\n\t\t<p>7. Falsely claiming the staff or management of the company;</p>\n\t\t <p>8. Attack, invade, alter, or otherwise threaten the proper functioning of our computer system;</p><p> 9. \u5229\u7528RETC\u751F\u6001\u5BA3\u4F20\u5783\u573E\u5E7F\u544A\uFF1B</p>\n\t\t<p>9.Spread rumors, damage the company and RETC ecological goodwill</p>\n\t\t<p>10.Violations, other violations of this Agreement, and circumstances in which the Company reasonably belieRETCs that the function should be suspended.</p>\n\t\t<p>11. If the company changes, discontinues, or terminates the service, you haRETC the right to export information such as your wallet within a reasonable time.</p>\n\t\t"), _defineProperty(_message, "protocol16", "8. Your statement and guarantee"), _defineProperty(_message, "protocol17", "<p>1.You should abide by the laws and regulations of the country or region in which you liRETC, and do not use the RETC Ecology for any illegal purposes, nor use the RETC Ecology in any illegal way.\u3002</p> \n\t\t<p>2. You may not use the RETC Ecology to engage in any illegal or criminal conduct, including but not limited to\uFF1A</p>\n\t\t <p>1. Endangering national security in your country or region, leaking state secrets, subRETCrting state power, and undermining national unity\uFF1B</p>\n\t\t <p>2. Engage in any criminal activity, including but not limited to money laundering, illegal fund raising, etc.\uFF1B </p>\n\t\t<p>3. InterRETCne or attempt to interfere with any user by using any automated program, software, engine, web crawler, web analytics tool, data mining tool, or similar tool to access the company's services, collect or process content provided by the company; </p><p>4. Provide gambling information or entice others to participate in gambling in any way</p> \n\t\t<p>5. Invade other people's RETC eco-wallet to steal digital tokens; </p>\n\t\t<p>6. Conducting a transaction that is inconsistent with the transaction content claimed by the counterparty, or an untrue transaction;</p>\n\t\t <p>7. Engage in any act that infringes or may infringe on the RETC ecosystem service system and data;</p>\n\t\t <p>8. Others haRETC legitimate reasons to belieRETC that it is inappropriate\u3002 </p>\n\t\t<p>3. You understand and agree that if you breach the relevant laws (including but not limited to customs and / or tax regulations) or the provisions of this agreement, the company suffers any loss, claims by any third party or any administratiRETC department Penalties, you should compensate the company, including reasonable attorney fees.</p><p> 4. You promise to pay the company's service fees (if any) on time, otherwise the company has the right to suspend the services provided to you.</p>\n\t\t"), _defineProperty(_message, "protocol18", "Nine, privacy policy"), _defineProperty(_message, "protocol19", "Any data or information you provide to us is also subject to our Privacy Policy, the RETC Eco-Privacy Policy, which is also part of this Agreement."), _defineProperty(_message, "protocol20", "X. Disclaimer and Limitation of Liability"), _defineProperty(_message, "protocol21", "<p>1. The company is only responsible for the obligations listed in this agreement.</p>\n\t\t <p>2. You understand and agree that, to the fullest extent permitted by law, the Company may only provide RETC Eco-Services in accordance with the current state of the art and conditions.</p>\n\t\t"), _defineProperty(_message, "protocol22", "XI. Disclaimer and Limitation of Liability"), _defineProperty(_message, "protocol23", "<p>1. The company is only responsible for the obligations listed in this agreement.</p>\n\t\t  <p>2. You understand and agree that, to the fullest extent permitted by law, the Company may only provide RETC Eco-Services in accordance with the current state of the art and conditions. The company is not responsible for the failure of the RETC Ecology to provide services due to any of the following reasons:     </p><p> 1. RETC ecosystem downtime maintenance or upgrade\uFF1B</p>\n\t\t<p>2. Force majeure causes due to typhoons, earthquakes, floods, lightning or terrorist attacks </p>\n\t\t<p>3. Your mobile device hardware and software and communication lines and power lines haRETC failed; </p>\n\t\t<p>4. You use the company's services improperly or not authorized or recognized by the company;</p>\n\t\t<p>5. Due to computer viruses, Trojans, malicious program attacks, network congestion, system instability, system or device failures, communication failures, power failures, banking or goRETCrnment actions</p>\n\t\t <p>6. Any other reason not caused by the company\u3002</p>\n\t\t  <p>3. The company is not responsible for any of the following circumstances\uFF1A </p>\n\t\t<p>1. The digital token of the user is lost because you lost the mobile device, deleted and did not back up the RETC ecosystem, deleted and did not back up the wallet, forgot and did not back up the wallet password, and mnemonic;</p> \n\t\t<p>2. You may divulge your wallet password, mnemonic, or use, transfer or authorize others to use your mobile device or RETC eco wallet, or download the RETC eco-application through our official channels or use RETC in other unsafe ways. Your digital token is lost due to the eco app </p>\n\t\t<p>3. Your digital token is lost due to misuse of your knowledge of blockchain technology;</p>\n\t\t<p>4. Due to system lag, unstable blockchain system, etc., the company's copy users haRETC deviations in transaction records on the blockchain.</p> \n\t\t<p>5. You acknowledge that the Company may provide services or related relationships or other related relationships to you and your counterparties at the same time, and you agree to expressly waiRETC any actual or potential conflicts of interest for such actions that may exist in the Company. It is not possible to claim that the company has legal flaws in the provision of services, and does not thereby increase the company's responsibility or duty of care.</p>\n\t\t<p>6. You understand that, as required by applicable laws and regulations, we may change our user access criteria from time to time, limiting the scope and manner of providing services to specific users, etc.</p>\n\t\t"), _defineProperty(_message, "protocol24", "XII. Other terms"), _defineProperty(_message, "protocol25", "<p>1. Intellectual Property Statement RETC Eco is an application deRETCloped and owned by the company. The intellectual property rights of any content displayed in RETC Ecok (including this Agreement, notices, articles, videos, audio, images, archiRETCs, information, materials, trademarks or logos) are owned by the Company or third party rights holders. Users can only use the RETC eco-application and its contents for the purpose of holding and managing digital tokens. No one may use, modify, reRETCrse compile, reproduce, publicly transmit, alter, distribute, distribute or publicly publish such applications and content without the prior written consent of the Company or third party rights holders. This Agreement shall not be deemed to grant you any intellectual property rights, including any right to use any information, images, user interface, logo, trademark, trade name, network domain name or copyright in connection with us or for any purpose.</p>\n\t\t<p>2.Terminal security responsibility </p>\n\t\t<p>2.1You understand and agree that the Software, like most Internet software, may be affected by a variety of factors, including but not limited to user reasons, network service quality, social environment, etc., and may be subject to various security issues, including It is not limited to illegal use of user data by others to carry out real-world harassment; other software downloaded or installed by users may contain viruses, Trojans or other malicious programs, which may threaten your terminal device information and data security, and then affect this Normal use of the software, etc. Therefore, you should strengthen the protection of information security and personal information, and pay attention to password protection to avoid loss.</p>\n\t\t <p>2.2You may not create, publish, use, or distribute malicious programs used to steal accounts and other people's personal information or property.</p>\n\t\t <p>2.3Maintaining software security and normal use is a shared responsibility of RETC Ecology and you. RETC Ecology will take reasonable and prudent measures to protect your terminal equipment information and data security according to industry standards, but you acknowledge and agree that RETC Ecosystem cannot provide complete information on this. Guarantee. </p>\n\t\t<p>3. Legal application and dispute resolution\uFF1A</p>\n\t\t <p>1.This Agreement shall be goRETCrned by the relevant national laws and shall be construed accordingly. </p>\n\t\t<p>2. In the eRETCnt of any dispute arising out of or relating to this Agreement (including any questions regarding its existence, validity, or termination), the parties shall first seek a settlement. If the dispute is still unresolRETCd within 30 days after the commencement of the settlement process, the parties shall submit the dispute to the relevant International Arbitration Center (\"SIAC\") and follow the arbitration rules in effect at the time of the relevant international arbitration center. The rules are considered to be incorporated into the Terms by reference and are ultimately resolRETCd in the relevant countries by arbitration. The arbitral tribunal consists of an arbitrator appointed by the chairman of the SIAC. The language of arbitration is English. Each party irrevocably accepts the non-exclusiRETC jurisdiction of the courts of the country concerned to support and assist in the arbitral proceedings conducted in accordance with the foregoing paragraphs of this paragraph, including the provision of interim relief (if necessary) before the outcome of the procedure is made.</p>\n\t\t <p>3. For conRETCnience, this Agreement may be translated into other languages, but the English RETCrsion of this Agreement is the main text. In the eRETCnt of any inconsistency between this Agreement and other language translations of the Annex, the English RETCrsion shall prevail.</p><p>\nThis Agreement applies from July 24, 2019.</p>\n\t\tFor matters not coRETCred in this Agreement, you are subject to the announcements and related rules that the Company updates from time to time.\n\t\t"), _defineProperty(_message, "UnableToContinue",









































































































  'You haRETC inRETCsted and cannot continue to participate in the inRETCstment'), _defineProperty(_message, "AvailableBalance", "Available Balance"), _defineProperty(_message, "ReceiRETCdQuantity", "ReceiRETCd quantity"), _defineProperty(_message, "exchangeRate", "exchange rate"), _defineProperty(_message, "FastFlash", "Fast flash"), _defineProperty(_message, "FlashRecord", "Redemption record"), _defineProperty(_message, "FlashNumber", "Redemption quantity"), _defineProperty(_message, "FlashTime", "Redemption time"), _defineProperty(_message, "success", "success"), _defineProperty(_message, "MyBlockReRETCnue", "My block reRETCnue"), _defineProperty(_message, "shifang01", "A Integral release ratio"), _defineProperty(_message, "shifang02", "RETC income"), _defineProperty(_message, "waitshifang01", "To be released RETC"), _defineProperty(_message, "waitshifang02", "A point to be released"), _defineProperty(_message, "aCode", "A point"), _defineProperty(_message, "meKnow", "I know"), _defineProperty(_message, "dayshifang", "Daily release ratio"), _defineProperty(_message, "save", "Save"), _message) };exports.default = _default;

/***/ }),

/***/ 144:
/*!*******************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Ffund%2Frecording"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _recording = _interopRequireDefault(__webpack_require__(/*! ./pages/fund/recording.vue */ 145));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_recording.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 15:
/*!*****************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/lang/lang/zhCH.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _message;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = {
  message: (_message = {
    exchange: '闪兑',
    income_day: "\u6536\u76CA\u603B\u5929\u6570",
    day_kt: "\u4ECA\u65E5\u53EF\u63D0",
    // 登录
    login: "登录",
    hello: "您好",
    welcome: "欢迎来到RETC.",
    enterpassword_RETC: "请输入6-16位数字字母组合密码",
    enterpaypwd_RETC: '请输入6位数字支付密码',
    enter_num_phone: "请输入手机号/邮箱",
    notAccount: "没有账号,立即",
    forgetPass: "忘记密码?",
    signin: "注册",
    switch_lang: "切换语言",
    copySu: '复制成功',
    // 注册
    i: '我',
    iagree: "同意用户协议",
    pleaseagree: "请同意用户服务协议",
    china: "中国",
    enter_email: "请输入邮箱",
    enter_yzm: "请输入验证码",
    get_yam: "获取验证码",
    lable: '标签',
    yanzhengma: '验证码',
    enter_label: '请输入标签',
    enter_login_pass: "请输入登录密码",
    reenter_login_pass: "请再次输入登录密码",
    enter_pay_pass: "请输入支付密码",
    reenter_pay_pass: "请再次输入支付密码",
    enter_nickname: "请输入昵称(6-16位数字字母组合)",
    enter_imgyzm: "请输入图形验证码",
    enter_refer: "请输入邀请码(非必填)",
    register: "注册",
    haRETCAccount: "已有账号,立即",
    login_is_empty: "登录密码不能为空",
    login_is_error: "登录密码格式错误",
    login_not_same: "登录密码不一致",
    pay_is_empty: "支付密码不能为空",
    pay_is_error: "支付密码格式错误",
    pay_not_same: "支付密码不一致",
    nickname_is_empty: "昵称不能为空",
    nickname_is_error: "昵称格式错误",
    yzmimg_is_empty: "图形验证码不能为空",
    yzmimg_is_error: "图形验证码格式错误",
    yzm_is_empty: "邀请码不能为空",
    yzm_is_error: "邀请码格式错误",
    register_fail: "注册失败",
    yzm_error_is: '验证码不能为空',
    yzm_error_isfail: '验证码格式错误',

    // 验证码
    error_email: "邮箱格式错误",
    yzm_fail: "验证码错误",
    re_send_yzm: "重发验证码",
    login_fail: "登录失败",

    // 国家地区
    area: "国家地区",

    // 忘记密码
    forgetpass: "忘记密码",
    userinfo: "请输入手机号码或邮箱",
    submit: "提交",

    // 修改支付密码
    old_pass: "原密码",
    new_pass: "新密码",
    enter_old_pass: "请输入原密码",
    enter_new_pass: "请输入新密码",
    getToIndex: '返回首页',
    // 修改登录密码
    modify_login_pass: "修改登录密码",

    // 请求失败提示
    request_fail: "请求数据失败",

    // 个人中心
    mybill: "我的账单",
    safecenter: "安全中心",
    communityleRETCl: '社区等级',
    myrefer: "我的邀请码",
    helpcenter: "在线客服",
    set: "设置",
    setNickNameTxt: "请设置昵称",

    /**
                             * 个人信息
                             * */
    person_info: "个人资料",
    saRETC: "保存",
    nickname: "昵称",
    sex: "性别",

    // 系统设置
    sys_set: "系统设置" }, _defineProperty(_message, "switch_lang",
  "切换语言"), _defineProperty(_message, "RETCrsion",
  "版本号"), _defineProperty(_message, "exit",
  "退出登录"), _defineProperty(_message, "protocol",
  "服务协议"), _defineProperty(_message, "select_lang",


  "选择语言"), _defineProperty(_message, "zh",
  "中文"), _defineProperty(_message, "en",
  "英文"), _defineProperty(_message, "ko",
  "韩文"), _defineProperty(_message, "confirm",
  "确定"), _defineProperty(_message, "cancel",
  "取消"), _defineProperty(_message, "cellnum",


  "账号"), _defineProperty(_message, "loginpass",
  "登录密码"), _defineProperty(_message, "paypass",
  "支付密码"), _defineProperty(_message, "gesturepass",
  "手势密码"), _defineProperty(_message, "setgesturepass",
  "更改手势密码"), _defineProperty(_message, "reset",
  "重置"), _defineProperty(_message, "modify_login_pass",
  "修改登录密码"), _defineProperty(_message, "set_pwd_pass",
  "设置交易密码"), _defineProperty(_message, "myreferurl",


  "我的邀请链接"), _defineProperty(_message, "copysuccess",
  "复制成功"), _defineProperty(_message, "refer",
  "邀请码"), _defineProperty(_message, "referurl",
  "邀请链接"), _defineProperty(_message, "genetateVcode",
  "生成分享二维码"), _defineProperty(_message, "copy",
  "复制"), _defineProperty(_message, "inRETCstment",


  "投资"), _defineProperty(_message, "min_inRETCst_num",
  "最小投资额"), _defineProperty(_message, "currency",
  "币种"), _defineProperty(_message, "m_rate",
  "月利率化"), _defineProperty(_message, "model",
  "开挂状态"), _defineProperty(_message, "search_txt",
  "搜索币种"), _defineProperty(_message, "state",
  "火爆"), _defineProperty(_message, "inRETCst_btn",
  "投资"), _defineProperty(_message, "saled",
  "已售"), _defineProperty(_message, "end",
  "结束"), _defineProperty(_message, "myfund",
  "我的投资"), _defineProperty(_message, "exit_order",
  "基金退出单"), _defineProperty(_message, "community",


  "社区"), _defineProperty(_message, "search_content",
  "请输入搜索内容"), _defineProperty(_message, "goldcommunity",
  "黄金社区"), _defineProperty(_message, "goldsum",
  '收益'), _defineProperty(_message, "goldteam",
  '分享用户'), _defineProperty(_message, "goldpush", "\u56E2\u961F\u7528\u6237"), _defineProperty(_message, "withdraw113",

  '转币安全提示 :  给陌生人或者陌生账户转币时，请务必仔细核对对方身份，保护自身资产安全。'), _defineProperty(_message, "destroytime",
  '销毁时间是每日23:00-24:00'), _defineProperty(_message, "transfer",

  "转出"), _defineProperty(_message, "transferlog",
  "转出历史"), _defineProperty(_message, "transfercoin",
  "提币币种"), _defineProperty(_message, "transferaddress",
  "提币到地址"), _defineProperty(_message, "transfernum",
  "转出数量"), _defineProperty(_message, "transferfee",
  "手续费"), _defineProperty(_message, "all",
  "全部"), _defineProperty(_message, "arrival",
  "到账"), _defineProperty(_message, "coin",
  "提币"), _defineProperty(_message, "cur_use",
  "当前可用"), _defineProperty(_message, "min_transfer",
  "最少提币数量"), _defineProperty(_message, "save", "\u4FDD\u5B58"), _defineProperty(_message, "chargein",


  "转入"), _defineProperty(_message, "wallet_address",
  "您的USDT钱包地址"), _defineProperty(_message, "enter_wallet_address",
  "请输入钱包地址"), _defineProperty(_message, "index",



  "RETC生态"), _defineProperty(_message, "assets",
  "我的资产"), _defineProperty(_message, "search_coin",
  "搜索币种"), _defineProperty(_message, "hide_currency",
  "隐藏余额为0的币种"), _defineProperty(_message, "detail",
  "详情"), _defineProperty(_message, "_market",
  "行情"), _defineProperty(_message, "with_address",


  "提币地址"), _defineProperty(_message, "add_new_address",
  "添加新地址"), _defineProperty(_message, "delete",
  "删除"), _defineProperty(_message, "transfer_history",


  "转出历史"), _defineProperty(_message, "address_name",
  "地址名称"), _defineProperty(_message, "address_charge",
  "充值地址"), _defineProperty(_message, "charge",
  "充值"), _defineProperty(_message, "charge_history",
  '充值历史'), _defineProperty(_message, "address",


  "地址"), _defineProperty(_message, "review",
  "待审核"), _defineProperty(_message, "transfer_detail",
  "转出详情"), _defineProperty(_message, "invite_friend",


  "邀请好友"), _defineProperty(_message, "invite_txt",
  "邀请码"), _defineProperty(_message, "start_plan_txt",
  "开启您的RETC计划"), _defineProperty(_message, "time",


  '时间'), _defineProperty(_message, "edu",
  '额度'), _defineProperty(_message, "user",
  '用户'), _defineProperty(_message, "destory_pool",
  '销毁池'), _defineProperty(_message, "browser",
  "浏览器"), _defineProperty(_message, "performance1",


  "见点收益"), _defineProperty(_message, "performance2",
  '分享收益'), _defineProperty(_message, "static_income1",
  "静态收益"), _defineProperty(_message, "direct_income1",
  "节点分红"), _defineProperty(_message, "community_income1",
  "社区收益"), _defineProperty(_message, "total_income",
  "累计收益"), _defineProperty(_message, "nodata",
  '暂无数据'), _defineProperty(_message, "sysBrand1",


  "RETC资本，服务全球！"), _defineProperty(_message, "sysBrand2",
  "RETC团队"), _defineProperty(_message, "sys",
  "系统公告"), _defineProperty(_message, "startTime",


  '开始时间'), _defineProperty(_message, "endTime",
  '结束时间'), _defineProperty(_message, "status",
  '状态'), _defineProperty(_message, "InRETCstmentQuantity",
  '投资数量'), _defineProperty(_message, "NumberOfPackets",
  '数据包的数量'), _defineProperty(_message, "types",
  '类型'), _defineProperty(_message, "quantity",
  '数量'), _defineProperty(_message, "Repeat",
  '复投'), _defineProperty(_message, "termination",
  '终止'), _defineProperty(_message, "ContractTermination",
  '解除合约'), _defineProperty(_message, "BlockPackage",
  '区块包'), _defineProperty(_message, "DeductedQuantity",
  '扣除本金'), _defineProperty(_message, "interest",
  '利息'), _defineProperty(_message, "DeductingIncome",
  '扣除收益'), _defineProperty(_message, "RefundablePrincipal",
  '可退还本金'), _defineProperty(_message, "transactionPassword",
  '交易密码'), _defineProperty(_message, "listshenchangdeshuzi",
  '本金随时可退，扣除所有收益后，剩余本金扣除15%手续费'), _defineProperty(_message, "MinimumStarting",

  '最低起投'), _defineProperty(_message, "MaximumLimit",
  '最高限额'), _defineProperty(_message, "AlreadyInRETCsted",
  '已投'), _defineProperty(_message, "InputCurrency",

  '投入份额'), _defineProperty(_message, "MinimumStarting",
  '最低起投'), _defineProperty(_message, "ChooseTheNumberOfInputs",
  "选择区块包数量"), _defineProperty(_message, "SelectCurrency",
  '数量'), _defineProperty(_message, "allIn",
  '全部转入'), _defineProperty(_message, "Balance",
  '余额'), _defineProperty(_message, "Input",
  '投入'), _defineProperty(_message, "InsufficientQuantity",
  '数量不足'), _defineProperty(_message, "TheNumberOfInputsCannotBeEmpty",
  '输入数量不能为空'), _defineProperty(_message, "PleaseEnterThTransactionPassword",
  '请输入交易密码'), _defineProperty(_message, "InsufficientBalance",
  '余额不足'), _defineProperty(_message, "FailedToGetData",
  '获取数据失败'), _defineProperty(_message, "confirmOk",
  '你确定要删除吗?'), _defineProperty(_message, "changeer",
  '选择二维码'), _defineProperty(_message, "update",




  "更新提示"), _defineProperty(_message, "update_tip",
  "RETC生态已上架新版本, 您是否更新？"), _defineProperty(_message, "isJumping",
  "正在跳转..."), _defineProperty(_message, "soon_update",
  "请尽快更新最新版本..."), _defineProperty(_message, "fail",
  "失败"), _defineProperty(_message, "yeji",


  "业绩"), _defineProperty(_message, "charge_detail",

  '充值详情'), _defineProperty(_message, "to_per",
  '收款方'), _defineProperty(_message, "from_per",
  '发款方'), _defineProperty(_message, "remark",
  '备注'), _defineProperty(_message, "ArriRETCd",
  '已到账'), _defineProperty(_message, "TradingNumber",
  '交易号'), _defineProperty(_message, "TradingTime",
  '交易时间'), _defineProperty(_message, "OutgoingAddress",

  '转出地址'), _defineProperty(_message, "ReceivingAddress",
  '接收地址'), _defineProperty(_message, "AuditInProgress",
  '审核中'), _defineProperty(_message, "Adopted",
  '已通过'), _defineProperty(_message, "Rejected",
  '已驳回'), _defineProperty(_message, "dayInteres",
  '日利率'), _defineProperty(_message, "carAddress",

  '钱包地址'), _defineProperty(_message, "your",
  '您的'), _defineProperty(_message, "userEr",
  '使用二维码钱包地址'), _defineProperty(_message, "emptySomethings",
  '投资的数据包为0'), _defineProperty(_message, "protocol_title",

  '《服务协议》'), _defineProperty(_message, "protocol01", "\u5C0A\u656C\u7684\u7528\u6237\uFF1A\n<p>\u611F\u8C22\u60A8\u9009\u62E9RETC\u751F\u6001\u670D\u52A1\u3002\u672C\u670D\u52A1\u7531RETC\u751F\u6001\u6301\u6709\u548C\u8FD0\u8425\u3002 \u300ARETC\u751F\u6001\u670D\u52A1\u534F\u8BAE\u300B\uFF08\u4EE5\u4E0B\u7B80\u79F0\"\u672C\u534F\u8BAE\u201D\uFF09\u7531RETC\u751F\u6001\u548C\u60A8 (\u4EE5\u4E0B\u7B80\u79F0\"\u7528\u6237\u201D\uFF09\u7B7E\u8BA2\uFF0C\u672C\u534F\u8BAE\u5728\u60A8\u4E0E\u672C\u516C\u53F8\u4E4B\u95F4\u5177\u6709\u5408\u540C \u4E0A\u7684\u6CD5\u5F8B\u6548\u529B\u3002\u5728\u672C\u534F\u8BAE\u4E2D\uFF1A</p> <p>1. \"\u6211\"\u548C\"\u6211\u4EEC\"\u6307\u4EE3\u672C\u516C\u53F8\uFF0C\"\u6211\u4EEC\u7684\u201D\u5E94\u636E\u6B64\u89E3\u91CA\uFF1B</p><p> 2. \"\u60A8\u201D\u6307\u4EE3\u7528\u6237\uFF0C\"\u60A8\u7684\"\u5E94\u636E\u6B64\u89E3\u91CA\u3002\u60A8\u548C\u6211\u4EEC\u5355\u72EC\u79F0 \u4E3A\"\u4E00\u65B9\"\uFF0C\u5408\u79F0\u4E3A\"\u53CC\u65B9\"\u3002 \u6211\u4EEC\u5728\u6B64\u7279\u5225\u63D0\u9192\u60A8\u5728\u4F7F\u7528\u6211\u4EEC\u7684RETC\u751F\u6001\u79FB\u52A8\u5E94\u7528\uFF08\u4EE5\u4E0B\u7B80 \u79F0\"RETC\u751F\u6001\"\u6216\"\u672C\u8F6F\u4EF6\"\uFF0CRETC\u751F\u6001\u53EF\u4EE5\u901A\u8FC7\u56FA\u5B9A\u4E0B\u8F7D\u94FE\u63A5\u8FDB \u884C\u4E0B\u8F7D\u5B89\u88C5\u3002\u8BF7\u8BA4\u771F\u9605\u8BFB\u672C\u534F\u8BAE\u53CA\u540E\u6587\u63D0\u53CA\u7684\u76F8\u5173\u534F\u8BAE\uFF0C\u5C24\u5176 \u662F\u672C\u534F\u8BAE\u4E2D\"\u514D\u8D23\u53CA\u8D23\u4EFB\u9650\u5236\"\u7B49\u4EE5\u52A0\u7C97\u5F62\u5F0F\u4F53\u73B0\u7684\u6761\u6B3E\uFF0C\u786E\u4FDD\u60A8 \u5145\u5206\u7406\u89E3\u672C\u534F\u8BAE\u4E2D\u5404\u6761\u6B3E\uFF0C\u5E76\u81EA\u4E3B\u8003\u8651\u98CE\u9669\u3002</p>\n"), _defineProperty(_message, "protocol02", "\u4E00\u3001 \u5173\u4E8E\u672C\u534F\u8BAE\u7684\u786E\u8BA4\u4E0E\u63A5\u7EB3"), _defineProperty(_message, "protocol03", "<p>1. \u60A8\u7406\u89E3\u672C\u534F\u8BAE\u53CA\u6709\u5173\u534F\u8BAE\u9002\u7528\u4E8ERETC\u751F\u6001k\u53CARETC\u751F\u6001\u4E0A\u672C \u516C\u53F8\u6240\u81EA\u4E3B\u5F00\u53D1\u548C\u62E5\u6709\u7684\u7684\u53BB\u4E2D\u5FC3\u5316\u548C\u4E2D\u5FC3\u5316\u670D\u52A1\u3002</p>\n<p>2. \u60A8\u4E0B\u8F7DRETC\u751F\u6001\u8F6F\u4EF6\uFF0C\u6CE8\u518C\u6210\u4E3A\u6211\u4EEC\u7684\u7528\u6237\uFF0C\u5373\u89C6\u4E3A\u60A8 \u5DF2\u7ECF\u5145\u5206\u9605\u8BFB\u5E76\u63A5\u53D7\u672C\u534F\u8BAE\u5168\u90E8\u6761\u6B3E\uFF0C\u672C\u534F\u8BAE\u7ACB\u5373\u751F\u6548\uFF0C\u5BF9\u53CC \u65B9\u5177\u6709\u7EA6\u675F\u529B\u3002\u5982\u679C\u60A8\u4E0D\u540C\u610F\u672C\u534F\u8BAE\u6761\u6B3E\uFF0C\u60A8\u5E94\u7ACB\u5373\u505C\u6B62\u4F7F\u7528RETC\u751F\u6001\u3002\u5982\u679C\u60A8\u5DF2\u7ECF\u4E0B\u8F7D\u4E86RETC\u751F\u6001\uFF0C\u8BF7\u7ACB\u5373\u5220\u9664\u3002 </p>\n<p>3. \u5728\u8BBF\u95EE\u6216\u4F7F\u7528RETC\u751F\u6001\u65F6\uFF0C\u60A8\u540C\u610F\uFF1A</p>\n <p>1. \u63A5\u53D7\u672C\u534F\u8BAE\u6700\u65B0\u7248\u672C\u7684\u7EA6\u675F\uFF08\u4E0D\u53D8\u66F4\u4EA6\u4E0D\u4FEE\u6539\uFF09\uFF1B</p>\n <p>2. \u5728\u60A8\u6240\u9002\u7528\u7684\u53F8\u6CD5\u7BA1\u8F96\u533A\u57DF\u5185\uFF0C\u60A8\u5DF2\u8FBE\u5230\u4F7F\u7528RETC\u751F\u6001 \u7684\u6CD5\u5B9A\u5E74\u9F84\uFF0C\u5E76\u53EF\u627F\u62C5\u56E0\u4F7F\u7528RETC\u751F\u6001\u800C\u4EA7\u751F\u7684\u6709\u7EA6 \u675F\u529B\u6CD5\u5F8B\u6216\u91D1\u94B1\u4E49\u52A1\uFF1B</p>\n<p>3. \u60A8\u4E0D\u5C5E\u4E8E\u88AB\u6392\u9664\u4EBA\u58EB\uFF08\u5982\u672C\u534F\u8BAE\u6240\u5B9A\u4E49\uFF09\u3002</p>\n <p>4. \u672C\u534F\u8BAE\u53EF\u7531\u6211\u4EEC\u968F\u65F6\u66F4\u65B0\uFF0C\u7ECF\u4FEE\u6539\u7684\u534F\u8BAE\u4E00\u7ECF\u5728RETC\u751F\u6001\u4E0A\u516C\u5E03\uFF0C\u7ACB\u5373\u81EA\u52A8\u751F\u6548\uFF0C\u4E0D\u518D\u53E6\u884C\u901A\u77E5\u3002\u5728\u672C \u516C\u53F8\u516C\u5E03\u4FEE\u6539\u534F\u8BAE\u6761\u6B3E\u540E\uFF0C\u5982\u679C\u60A8\u4E0D\u63A5\u53D7\u4FEE\u6539\u540E\u7684\u6761\u6B3E\uFF0C \u8BF7\u7ACB\u5373\u505C\u6B62\u4F7F\u7528RETC\u751F\u6001\uFF0C\u60A8\u7EE7\u7EED\u4F7F\u7528RETC\u751F\u6001\u5C06\u88AB \u89C6\u4E3A\u63A5\u53D7\u4FEE\u6539\u540E\u7684\u534F\u8BAE\u3002</p>\n"), _defineProperty(_message, "protocol04", "\u4E8C\u3001 \u5B9A\u4E49 "), _defineProperty(_message, "protocol05", "<p>1. RETC\u751F\u6001 :\u6307\u7531\u672C\u516C\u53F8\u57FA\u4E8E\u533A\u5757\u94FE\u5F00\u53D1\u7684\u77FF\u673A\u4EA7\u54C1\uFF0C\u5305\u542BRETC\u94B1\u5305\u3001\u8D44\u4EA7\u7EDF\u8BA1\u3001 \u8D44\u4EA7\u4EA4\u6613\u3001\u6295\u8D44\u7B49\u3002</p> \n<p>2. \u7528\u6237\uFF1A\u6307\u6309\u7167\u76F8\u5173\u56FD\u5BB6\u548C\u5176\u4ED6\u56FD\u5BB6\u7684\u6CD5\u5F8B\u6CD5\u89C4\u53CA\u653F\u7B56\u89C4\u5B9A \u5FC5\u987B\u8981\u914D\u5408\u672C\u516C\u53F8\u5C65\u884C\u4E2A\u4EBA\u4FE1\u606F\u62AB\u9732\u4E49\u52A1\u7684\u7528\u6237\u3002 </p>\n<p>3. \u88AB\u6392\u9664\u4EBA\u58EB\uFF1A</p>\n <p>1. \u9664\u4E86\u81EA\u7136\u4EBA\u4EE5\u5916\u7684\u3001\u5177\u5907\u8BA2\u7ACB\u672C\u534F\u8BAE\u7684\u6CD5\u5F8B\u548C \u610F\u8BC6\u80FD\u529B\u7684\u4EBA\u58EB\uFF1B</p>\n <p>2. \u56E0\u672C\u534F\u8BAE\u3001\u6CD5\u5F8B\u3001\u76D1\u7BA1\u8981\u6C42\u6216\u9002\u7528\u4E8E\u8BE5\u7528\u6237\u7684\u53F8\u6CD5\u7BA1\u8F96\u533A \u7684\u89C4\u5B9A\u800C\u88AB\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u6216\u65B9\u5F0F\uFF08\u5168\u90E8\u6216\u90E8\u5206\uFF09\u7981\u6B62\u3001\u9650\u5236\u3001\u65E0 \u6388\u6743\u6216\u65E0\u8D44\u683C\u4F7F\u7528\u670D\u52A1\uFF08\u5982\u672C\u534F\u8BAE\u6240\u5B9A\u4E49\uFF09\u7684\u7528\u6237\u3002 </p>\n<p>3. \u4E91\u94B1\u5305\uFF1A\u79C1\u94A5\u5B58\u653E\u5728\u4E91\u7AEF\uFF0C\u4FDD\u5B58\u5728\u52A0\u5BC6\u786C\u4EF6\u8BBE\u5907\u4E2D\u3002</p>\n<p>4. \u94B1\u5305\u5BC6\u7801\uFF1A\u6307\u60A8\u5728\u521B\u5EFARETC\u751F\u6001\u94B1\u5305\u8FC7\u7A0B\u4E2D\uFF0C\u7531\u60A8\u51B3\u5B9A\u7684 \u5BC6\u7801\uFF0C\u8BE5\u5BC6\u7801\u5C06\u88AB\u7528\u4E8E\u52A0\u5BC6\u548C\u4FDD\u62A4\u60A8\u7684\u79C1\u94A5\u3002</p>\n<p>5. \u6570\u5B57\u4EE3\u5E01\uFF1A\u6307RETC\u751F\u6001\u94B1\u5305\u76EE\u524D\u652F\u6301\u7684\u6570\u5B57\u4EE3\u5E01\u79CD\u7C7B.\u4EA4\u6613\u4FDD\u969C\uFF0C\u5F53\u4EA4\u6613\u5B8C\u6BD5\u540E\uFF0C\u6570\u5B57\u8D27\u5E01\u4E88\u4EE5\u5BF9\u5E94\u7684\u4EA4\u6613\u65B9\u3002</p>\n<p>6. \u6D88\u606F\uFF1A\u6307\u7528\u6237\u53EF\u4EE5\u63A5\u6536\u672C\u516C\u53F8\u53D1\u51FA\u7684\u4FE1\u606F\u6216\u901A\u77E5\u7684\u90AE\u4EF6\u3002 </p>\n"), _defineProperty(_message, "protocol06", "\u4E09\u3001 \u4F7F\u7528\u8BB8\u53EF"), _defineProperty(_message, "protocol07", "\u5728\u60A8\u9075\u5B88\u672C\u534F\u8BAE\u7684\u524D\u63D0\u4E0B\uFF0CRETC\u751F\u6001\u94B1\u5305\u6388\u4E88\u4F60\u6709\u9650\u7684\u6743\u5229\u6765\u4F7F\u7528 RETC\u751F\u6001\u94B1\u5305\u53CA\u76F8\u5173\u670D\u52A1\u3002\u8FD9\u9879\u4F7F\u7528\u6743\u662F\u6388\u4E88\u4F60\u4E2A\u4EBA\u7684\uFF0C\u662F\u6709\u9650\u5236 \u6761\u4EF6\u7684\uFF0C\u662F\u975E\u4E13\u6709\u7684\u3001\u4E0D\u53EF\u8F6C\u8BA9\u7684\uFF0CCoinBank\u6709\u6743\u64A4\u9500\u8FD9\u9879\u6388 \u6743\uFF0C\u4E14\u60A8\u5FC5\u987B\u9075\u5B88\u672C\u534F\u8BAE\u7684\u6240\u6709\u6761\u6B3E\u3002\u60A8\u7684\u4F7F\u7528\u8BB8\u53EF\u4E0D\u4EE3\u8868\u60A8 \u5BF9RETC\u751F\u6001\u94B1\u5305\u6216\u76F8\u5173\u670D\u52A1\u6709\u6240\u6709\u6743\uFF0C\u5F53\u60A8\u8FDD\u53CD\u672C\u534F\u8BAE\u7684\u4EFB\u4F55\u6761\u6B3E \u65F6\uFF0CRETC\u751F\u6001\u94B1\u5305\u6709\u6743\u6682\u505C\u3001\u53D8\u66F4\u3001\u4E2D\u65AD\u3001\u9650\u5236\u3001\u751A\u81F3\u7EC8\u6B62\u5BF9\u60A8\u63D0 \u4F9B\u670D\u52A1\u3002\u5F53\u60A8\u5BF9RETC\u751F\u6001\u94B1\u5305\u4E4B\u95F4\u7684\u670D\u52A1\u5173\u7CFB\u53D8\u66F4\u3001\u4E2D\u65AD\u3001\u7EC8\u6B62\u65F6\u3002\u60A8\u4ECD\u6709\u6743\u5408\u7406\u65F6\u95F4\u5185\u5BFC\u51FA\u60A8\u94B1\u5305\u7684\u4FE1\u606F\u3002"), _defineProperty(_message, "protocol08", "\u56DB\u3001 \u670D\u52A1\u5185\u5BB9"), _defineProperty(_message, "protocol09", "<p>1. \u8F6C\u8D26\u3001\u6536\u6B3E\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528RETC\u751F\u6001\u94B1\u5305\u7684\u8F6C\u8D26\u3001\u6536\u6B3E\u529F\u80FD\u8FDB \u884C\u6570\u5B57\u4EE3\u5E01\u7684\u7BA1\u7406\uFF0C\u5373\u8FD0\u7528\u79C1\u94A5\u8FDB\u884C\u7535\u5B50\u7B7E\u540D\uFF0C\u5BF9\u76F8\u5173\u533A\u5757 \u94FE\u7684\u8D26\u672C\u8FDB\u884C\u4FEE\u6539\u3002\u8F6C\u8D26\u662F\u6307\u4ED8\u6B3E\u65B9\u5229\u7528\u6536\u6B3E\u65B9\u7684\u533A\u5757\u94FE \u5730\u5740\u8FDB\u884C\u8F6C\u8D26\u64CD\u4F5C\uFF0C\u8BE5''\u8F6C\u8D26\"\u884C\u4E3A\u6D89\u53CA\u5728\u76F8\u5173\u533A\u5757\u94FE\u7CFB\u7EDF\u7684 \u5206\u5E03\u5F0F\u8D26\u672C\u4E2D\u5BF9\u8BE5\u4EA4\u6613\u7684\u6709\u6548\u8BB0\u5F55\u3002 </p>\n<p>2. \u4EA4\u6613\u8BB0\u5F55\u3002\u6211\u4EEC\u5C06\u901A\u8FC7\u533A\u5757\u94FE\u7CFB\u7EDF\u62F7\u8D1D\u60A8\u5168\u90E8\u6216\u90E8\u5206\u7684\u4EA4\u6613 \u8BB0\u5F55\u3002\u4F46\u7528\u6237\u5E94\u4EE5\u533A\u5757\u94FE\u7684\u6700\u65B0\u4EA4\u6613\u8BB0\u5F55\u4E3A\u51C6\u3002</p>\n<p>3 RETC\u94B1\u5305\u3002\u60A8\u53EF\u4EE5\u5F00\u901ARETC\u751F\u6001\u94B1\u5305\uFF0C\u5F00\u901A\u6B64\u670D\u52A1\u540E\uFF0C\u5C06 \u89C6\u4E3A\u4F60\u5C06\u4E3A\u6709\u7684\u6570\u5B57\u4EE3\u5E01\u59D4\u6258\u7ED9RETC\u751F\u6001\u94B1\u5305\u7BA1\u7406\u3002 </p>\n<p>4. \u8D44\u4EA7\u7EDF\u8BA1\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u8D44\u4EA7\u7EDF\u8BA1\u670D\u52A1\uFF0C\u5728\u7ED1\u5B9A\u4EA4\u6613\u6240\u3001\u5F00\u542FRETC\u751F\u6001\u94B1\u5305\u540E\u5E2E\u4F60\u7EDF\u8BA1\u591A\u6E20\u9053\u7684\u6210\u672C\u76C8\u4E8F\u3002</p>\n"), _defineProperty(_message, "protocol10", "\u4E94\u3001\u98CE\u9669\u63D0\u793A"), _defineProperty(_message, "protocol11", "\u60A8\u4E86\u89E3\u5E76\u77E5\u6089\uFF0C\u7531\u4E8E\u6570\u5B57\u4EE3\u5E01\u9886\u57DF\u7684\u6CD5\u5F8B\u6CD5\u89C4\u653F\u7B56\u5C1A\u672A\u5065\u5168\uFF0C \u8BE5\u9886\u57DF\u7684\u6570\u5B57\u4EE3\u5E01\u53EF\u80FD\u4F1A\u4EA7\u751F\u65E0\u6CD5\u5151\u73B0\u3001\u6280\u672F\u4E0D\u7A33\u5B9A\u7B49\u91CD\u5927\u98CE \u9669\u3002\u60A8\u4E5F\u4E86\u89E3\u6570\u5B57\u4EE3\u5E01\u7684\u4EF7\u683C\u6CE2\u52A8\u5E45\u5EA6\u8FDC\u9AD8\u4E8E\u5176\u4ED6\u91D1\u878D\u8D44\u4EA7\u3002 \u6211\u4EEC\u8C28\u614E\u63D0\u9192\u60A8\u5E94\u5F53\u6839\u636E\u81EA\u8EAB\u8D22\u52A1\u72B6\u51B5\u548C\u98CE\u9669\u504F\u597D\uFF0C\u4EE5\u5408\u7406\u7684 \u65B9\u5F0F\u9009\u62E9\u6301\u6709\u6216\u5904\u7F6E\u4EFB\u4F55\u4E00\u79CD\u6570\u5B57\u4EE3\u5E01\u3002\u60A8\u4E5F\u4E86\u89E3RETC\u751F\u6001 \u63D0\u4F9B\u7684\u884C\u60C5\u67E5\u770B\u529F\u80FD\u4EC5\u7CFB\u6293\u53D6\u90E8\u5206\u4EA4\u6613\u6240\u7684\u6570\u5B57\u4EE3\u5E01\u6C47\u7387\u4FE1\u606F \u7684\u641C\u7D22\u7ED3\u679C\uFF0C\u5E76\u4E0D\u8868\u793A\u4E3A\u6700\u65B0\u884C\u60C5\u6216\u6700\u4F73\u62A5\u4EF7\u3002\u5BF9\u4E8E\u60A8\u4F7F\u7528 RETC\u751F\u6001\u5728RETC\u751F\u6001\u4E0A\u8FDB\u884C\u64CD\u4F5C\u5BFC\u81F4\u7684\u4E00\u5207\u540E\u679C\u90FD\u5C06\u7531\u60A8 \u81EA\u5DF1\u627F\u62C5\u3002\u9664\u672C\u63D0\u793A\u4E4B\u5916\uFF0C\u60A8\u5BF9RETC\u751F\u6001\u7684\u4F7F\u7528\u8868\u793A\u60A8\u5DF2\u9605\u8BFB \u5E76\u63A5\u53D7\u76F8\u5173\u7684\u98CE\u9669\u62AB\u9732\uFF08Risk Disclosure Statement) \u3007"), _defineProperty(_message, "protocol12", "\u516D\u3001 \u60A8\u7684\u6743\u5229\u4E49\u52A1"), _defineProperty(_message, "protocol13", "<p>1. \u521B\u5EFA\u6216\u5BFC\u5165\u94B1\u5305\uFF1A\u60A8\u6709\u6743\u5728\u60A8\u7684\u79FB\u52A8\u8BBE\u5907\u4E0A\u901A\u8FC7RETC\u751F\u6001\u521B\u5EFA\u548C/\u6216\u5BFC\u5165\u94B1\u5305\uFF0C\u6709\u6743\u8BBE\u5B9A\u94B1\u5305\u7684\u94B1\u5305\u5BC6\u7801\u7B49\u4FE1\u606F\uFF0C\u5E76 \u6709\u6743\u901A\u8FC7RETC\u751F\u6001\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4F7F\u7528\u81EA\u5DF1\u7684\u94B1\u5305\u5728\u533A\u5757\u94FE\u4E0A \u8FDB\u884C\u8F6C\u8D26\u548C\u6536\u6B3E\u7B49\u4EA4\u6613\u3002</p>\n<p>2. \u7528\u6237\u8BA4\u8BC1\uFF1A\u6309\u7167\u6709\u5173\u6CD5\u5F8B\u6CD5\u89C4\u7684\u8981\u6C42\uFF0C\u7279\u5B9A\u7528\u6237\u5728\u4F7F\u7528RETC\u751F\u6001\u63D0\u4F9B\u7684\u6709\u5173\u670D\u52A1\u65F6\uFF0C\u5E94\u5F53\u6309\u7167RETC\u751F\u6001\u7684\u63D0\u793A \u53CA\u65F6\u5B8C\u6210\u76F8\u5173\u8EAB\u4EFD\u9A8C\u8BC1\uFF0C\u8981\u6C42\u60A8\u63D0\u4EA4\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u60A8\u7684\u59D3 \u540D\u3001\u8EAB\u4EFD\u8BC1\u53F7\u7801\u3001\u624B\u673A\u53F7\u7801\u3001\u94F6\u884C\u5361\u53F7\u4FE1\u606F\u7B49\u4E2A\u4EBA\u4FE1\u606F\u3002 \u5426\u5219\u8BE5\u7279\u5B9A\u7528\u6237\u5C06\u65E0\u6CD5\u4F7F\u7528\u6709\u5173\u670D\u52A1\uFF0C\u56E0\u7279\u5B9A\u7528\u6237\u62D6\u5EF6\u9020 \u6210\u7684\u635F\u5931\u7531\u60A8\u81EA\u884C\u627F\u62C5\u3002</p>\n <p>3. \u6536\u6B3E\u3001\u8F6C\u8D26\uFF1A\u60A8\u77E5\u6089\u5BF9\u4E8ERETC\u751F\u6001\u670D\u52A1\u4E2D\u60A8\u53EF\u4F7F\u7528\u7684\u66F0\u8BA1 \u8F6C\u8D26\u9650\u989D\u548C\u7B14\u6570\uFF0C\u53EF\u80FD\u56E0\u4E3A\u60A8\u4F7F\u7528\u8BE5\u8F6C\u8D26\u670D\u52A1\u65F6\u6240\u5904\u7684\u56FD\u5BB6/ \u5730\u533A\u3001\u76D1\u7BA1\u8981\u6C42\u3001\u8F6C\u8D26\u76EE\u7684\u3001RETC\u751F\u6001\u98CE\u9669\u63A7\u5236\u3001\u8EAB\u4EFD\u9A8C\u8BC1 \u7B49\u4E8B\u7531\u800C\u4E0D\u540C\u3002\u60A8\u7406\u89E3\u57FA\u4E8E\u533A\u5757\u94FE\u64CD\u4F5C\u7684\"\u4E0D\u53EF\u64A4\u9500\"\u5C5E\u6027\uFF0C\u5F53 \u60A8RETC\u751F\u6001\u8F6C\u8D26\u529F\u80FD\u65F6\uFF0C\u60A8\u5E94\u5F53\u81EA\u884C\u627F\u62C5\u56E0\u60A8\u64CD\u4F5C\u5931\u8BEF \u800C\u5BFC\u81F4\u7684\u540E\u679C\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u56E0\u60A8\u8F93\u9519\u8F6C\u8D26\u5730\u5740\u3001\u60A8\u81EA\u8EAB\u9009 \u62E9\u8F6C\u8D26\u8282\u70B9\u670D\u52A1\u5668\u7684\u95EE\u9898\uFF09\u3002</p>\n <p>4. \u5408\u6CD5\u5408\u89C4\uFF1A\u60A8\u77E5\u6089\u5728RETC\u751F\u6001\u8FDB\u884C\u64CD\u4F5C\u65F6\u6216\u5229\u7528 RETC\u751F\u6001\u4E0A\u7684\u667A\u80FD\u5408\u7EA6\u8FDB\u884C\u4EA4\u6613\u65F6\uFF0C\u60A8\u5E94\u5F53\u9075\u5FAA\u6709\u5173\u6CD5\u5F8B \u6CD5\u89C4\u3001\u56FD\u5BB6\u653F\u7B56\u7684\u8981\u6C42\u3002</p>\n <p>5. \u672C\u516C\u53F8\u53EF\u80FD\u4E3A\u4E0D\u540C\u7684\u7EC8\u7AEF\u8BBE\u5907\u5F00\u53D1\u4E0D\u540C\u7684\u8F6F\u4EF6\u7248\u672C\uFF0C\u60A8\u5E94\u5F53 \u6839\u636E\u5B9E\u9645\u9700\u8981\u9009\u62E9\u4E0B\u8F7D\u5408\u9002\u7684\u7248\u672C\u8FDB\u884C\u5B89\u88C5\u3002\u5982\u679C\u60A8\u4ECE\u672A\u7ECF\u5408 \u6CD5\u6388\u6743\u7684\u7B2C\u4E09\u65B9\u83B7\u53D6\u672C\u8F6F\u4EF6\u6216\u4E0E\u672C\u8F6F\u4EF6\u540D\u79F0\u76F8\u540C\u7684\u5B89\u88C5\u7A0B\u5E8F\uFF0C \u672C\u516C\u53F8\u5C06\u65E0\u6CD5\u4FDD\u8BC1\u8BE5\u8F6F\u4EF6\u80FD\u5426\u6B63\u5E38\u4F7F\u7528\uFF0C\u4E5F\u65E0\u6CD5\u4FDD\u8BC1\u5176\u5B89\u5168 \u6027\uFF0C\u56E0\u6B64\u9020\u6210\u7684\u635F\u5931\u7531\u60A8\u81EA\u884C\u627F\u62C5\u3002</p>\n <p>6. \u672C\u8F6F\u4EF6\u65B0\u7248\u672C\u53D1\u5E03\u540E\uFF0C\u65E7\u7248\u8F6F\u4EF6\u53EF\u80FD\u65E0\u6CD5\u4F7F\u7528\u3002\u672C\u516C\u53F8\u4E0D\u4FDD \u8BC1\u65E7\u7248\u8F6F\u4EF6\u7684\u5B89\u5168\u6027\u3001\u7EE7\u7EED\u53EF\u7528\u6027\u53CA\u63D0\u4F9B\u76F8\u5E94\u7684\u5BA2\u6237\u670D\u52A1\u3002\u8BF7 \u7528\u6237\u968F\u65F6\u6838\u5BF9\u5E76\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u3002</p>\n"), _defineProperty(_message, "protocol14", "\u4E03\u3001 \u670D\u52A1\u7684\u53D8\u66F4\u3001\u4E2D\u65AD\u3001\u7EC8\u6B62"), _defineProperty(_message, "protocol15", "<p>1. \u60A8\u4E86\u89E3\u5E76\u540C\u610F\u672C\u516C\u53F8\u53EF\u4EE5\u81EA\u884C\u51B3\u5B9A\u6682\u65F6\u63D0\u4F9B\u90E8\u5206\u670D\u52A1\u529F\u80FD\uFF0C \u6216\u4E8E\u5C06\u6765\u6682\u505C\u90E8\u5206\u670D\u52A1\u529F\u80FD\u6216\u5F00\u901A\u65B0\u7684\u670D\u52A1\u529F\u80FD\u3002\u5F53\u6211\u4EEC\u6539 \u53D8\u670D\u52A1\u65F6\uFF0C\u53EA\u8981\u60A8\u4ECD\u7136\u4F7F\u7528RETC\u751F\u6001\uFF0C\u8868\u793A\u60A8\u4ECD\u7136\u540C\u610F\u672C\u534F \u8BAE\u6216\u8005\u672C\u534F\u8BAE\u4FEE\u6B63\u540E\u7684\u6761\u6B3E\u3002</p>\n <p>2. \u4E3A\u4E86\u5C3D\u53EF\u80FD\u907F\u514D\u4EFB\u4F55\u5BF9RETC\u751F\u6001\u7684\u8BEF\u64CD\u4F5C\u6216\u6570\u5B57\u4EE3\u5E01\u7684\u4EFB \u4F55\u5B89\u5168\u98CE\u9669\uFF0C\u60A8\u5E94\u907F\u514D\u5728\u4E0D\u5177\u5907\u533A\u5757\u94FE\u57FA\u7840\u77E5\u8BC6\u7684\u524D\u63D0\u4E0B\u4F7F\u7528RETC\u751F\u6001\u3002\u5BF9\u4E0D\u5177\u5907\u533A\u5757\u94FE\u57FA\u7840\u77E5\u8BC6\u7684\u7528\u6237\uFF0C\u672C\u516C\u53F8\u6709\u6743\u62D2\u7EDD \u63D0\u4F9B\u90E8\u5206\u6216\u5168\u90E8\u7684\u670D\u52A1\u529F\u80FD\u3002</p>\n <p>3. \u60A8\u7406\u89E3\u5B58\u5728\u5982\u4E0B\u60C5\u5F62\u65F6\uFF0C\u672C\u516C\u53F8\u5C06\u6682\u505C\u63D0\u4F9B\u670D\u52A1\u9002\u7528\u6CD5\u5F8B\u6216\u653F\u7B56\u53D1\u751F\u91CD\u5927\u4E0D\u5229\u53D8\u5316\u7684\uFF1B</p><p> 4. \u53D1\u751F\u672C\u516C\u53F8\u65E0\u6CD5\u63A7\u5236\u6216\u5408\u7406\u9884\u89C1\u7684\u5176\u4ED6\u60C5\u5F62\u3002</p> \n<p>4. \u5F53\u7528\u6237\u51FA\u73B0\u5982\u4E0B\u60C5\u51B5\u65F6\uFF0C\u672C\u516C\u53F8\u53EF\u5355\u65B9\u9762\u4E2D\u6B62\u6216\u7EC8\u6B62\u7528\u6237\u4F7F\u7528RETC\u751F\u6001\u7684\u90E8\u5206\u6216\u5168\u90E8\u529F\u80FD\uFF1A </p>\n<p>1. \u7528\u6237\u6B7B\u4EA1\uFF1B</p>\n <p>2. \u76D7\u7528\u4ED6\u4EBA\u7684\u94B1\u5305\u4FE1\u606F\u6216\u79FB\u52A8\u8BBE\u5907\uFF1B</p>\n <p>3. \u5728RETC\u751F\u6001\u586B\u5199\u865A\u5047\u4E2A\u4EBA\u4FE1\u606F\uFF1B</p>\n <p>4. \u62D2\u7EDDRETC\u751F\u6001\u7684\u5F3A\u5236\u66F4\u65B0\u64CD\u4F5C\uFF1B</p>\n <p>5. \u5C06RETC\u751F\u6001\u7528\u4E8E\u8FDD\u6CD5\u6216\u72AF\u7F6A\u6D3B\u52A8\uFF1B </p>\n<p>6. \u59A8\u788D\u5176\u4ED6\u7528\u6237\u6B63\u5E38\u4F7F\u7528RETC\u751F\u6001 ; </p>\n<p>7. \u4F2A\u79F0\u672C\u516C\u53F8\u7684\u5DE5\u4F5C\u4EBA\u5458\u6216\u7BA1\u7406\u4EBA\u5458\uFF1B</p>\n <p>8. \u653B\u51FB\u3001\u4FB5\u5165\u3001\u66F4\u6539\u6216\u4EE5\u4EFB\u4F55\u5176\u4ED6\u65B9\u5F0F\u5A01\u80C1\u672C\u516C\u53F8\u8BA1 \u7B97\u673A\u7CFB\u7EDF\u7684\u6B63\u5E38\u8FD0\u4F5C\uFF1B</p><p> 9. \u5229\u7528RETC\u751F\u6001\u5BA3\u4F20\u5783\u573E\u5E7F\u544A\uFF1B</p>\n<p>9 \u6563\u5E03\u8C23\u8A00\uFF0C\u635F\u5BB3\u672C\u516C\u53F8\u548CRETC\u751F\u6001\u5546\u8A89\uFF1B</p>\n<p>10 \u8FDD\u6CD5\u884C\u4E3A\uFF0C\u5176\u4ED6\u8FDD\u53CD\u672C\u534F\u8BAE\u7684\u884C\u4E3A\uFF0C\u53CA\u672C\u516C\u53F8\u5408\u7406\u8BA4 \u4E3A\u5E94\u5F53\u6682\u505C\u529F\u80FD\u7684\u60C5\u5F62\u3002</p>\n<p>11. \u5982\u679C\u672C\u516C\u53F8\u53D8\u66F4\u3001\u4E2D\u65AD\u3001\u7EC8\u6B62\u670D\u52A1\u65F6\uFF0C\u60A8\u6709\u6743\u5728\u5408\u7406\u65F6 \u95F4\u5185\u5BFC\u51FA\u60A8\u94B1\u5305\u7B49\u4FE1\u606F\u3002</p>\n"), _defineProperty(_message, "protocol16", "\u516B\u3001\u60A8\u7684\u9648\u8FF0\u4E0E\u4FDD\u8BC1"), _defineProperty(_message, "protocol17", "<p>1.\u60A8\u5E94\u9075\u5B88\u60A8\u6240\u5C45\u4F4F\u7684\u56FD\u5BB6\u6216\u5730\u533A\u7684\u6CD5\u5F8B\u6CD5\u89C4\uFF0C\u4E0D\u5F97 \u5C06RETC\u751F\u6001\u7528\u4E8E\u4EFB\u4F55\u975E\u6CD5\u76EE\u7684\uFF0C\u4E5F\u4E0D\u5F97\u4EE5\u4EFB\u4F55\u975E\u6CD5 \u65B9\u5F0F\u4F7F\u7528RETC\u751F\u6001\u3002</p> \n<p>2. \u60A8\u4E0D\u5F97\u5229\u7528RETC\u751F\u6001\u4ECE\u4E8B\u4EFB\u4F55\u8FDD\u6CD5\u6216\u72AF\u7F6A\u7684\u884C\u4E3A\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A</p>\n <p>1. \u5371\u5BB3\u60A8\u6240\u5C45\u4F4F\u7684\u56FD\u5BB6\u6216\u5730\u533A\u7684\u56FD\u5BB6\u5B89\u5168\u3001\u6CC4\u6F0F\u56FD\u5BB6\u79D8\u5BC6\u3001 \u98A0\u8986\u56FD\u5BB6\u653F\u6743\u3001\u7834\u574F\u56FD\u5BB6\u7EDF\u4E00\uFF1B</p>\n <p>2. \u4ECE\u4E8B\u4EFB\u4F55\u8FDD\u6CD5\u72AF\u7F6A\u884C\u4E3A\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6D17\u94B1\u3001 \u975E\u6CD5\u96C6\u8D44\u7B49\uFF1B </p>\n<p>3. \u901A\u8FC7\u4F7F\u7528\u4EFB\u4F55\u81EA\u52A8\u5316\u7A0B\u5E8F\u3001\u8F6F\u4EF6\u3001\u5F15\u64CE\u3001\u7F51\u7EDC\u722C\u866B\u3001\u7F51\u9875 \u5206\u6790\u5DE5\u5177\u3001\u6570\u636E\u6316\u6398\u5DE5\u5177\u6216\u7C7B\u4F3C\u5DE5\u5177\u7B49\uFF0C\u63A5\u5165\u672C\u516C\u53F8\u670D\u52A1\u3001\u6536 \u96C6\u6216\u5904\u7406\u672C\u516C\u53F8\u6240\u63D0\u4F9B\u7684\u5185\u5BB9\uFF0C\u5E72\u9884\u6216\u8BD5\u56FE\u5E72\u9884\u4EFB\u4F55\u7528\u6237\uFF1B </p><p>4. \u63D0\u4F9B\u8D4C\u535A\u8D44\u8BAF\u6216\u4EE5\u4EFB\u4F55\u65B9\u5F0F\u5F15\u8BF1\u4ED6\u4EBA\u53C2\u4E0E\u8D4C\u535A\uFF1B</p> \n<p>5. \u4FB5\u5165\u4ED6\u4EBARETC\u751F\u6001\u94B1\u5305\u76D7\u53D6\u6570\u5B57\u4EE3\u5E01\uFF1B </p>\n<p>6. \u8FDB\u884C\u4E0E\u4EA4\u6613\u5BF9\u65B9\u5BA3\u79F0\u7684\u4EA4\u6613\u5185\u5BB9\u4E0D\u7B26\u7684\u4EA4\u6613\uFF0C\u6216\u4E0D\u771F\u5B9E\u7684\u4EA4\u6613\uFF1B</p>\n <p>7. \u4ECE\u4E8B\u4EFB\u4F55\u4FB5\u5BB3\u6216\u53EF\u80FD\u4FB5\u5BB3RETC\u751F\u6001\u670D\u52A1\u7CFB\u7EDF\u3001\u6570\u636E\u7684\u884C\u4E3A\uFF1B</p>\n <p>8. \u5176\u4ED6\u672C\u516C\u53F8\u6709\u6B63\u5F53\u7406\u7531\u8BA4\u4E3A\u4E0D\u9002\u5F53\u7684\u884C\u4E3A\u3002 </p>\n<p>3. \u60A8\u7406\u89E3\u5E76\u540C\u610F\uFF0C\u5982\u56E0\u60A8\u8FDD\u53CD\u6709\u5173\u6CD5\u5F8B\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6D77\u5173\u53CA/ \u6216\u7A0E\u52A1\u65B9\u9762\u7684\u76D1\u7BA1\u89C4\u5B9A\uFF09\u6216\u8005\u672C\u534F\u8BAE\u4E4B\u89C4\u5B9A\uFF0C\u4F7F\u672C\u516C\u53F8\u906D\u53D7\u4EFB \u4F55\u635F\u5931\u3001\u53D7\u5230\u4EFB\u4F55\u7B2C\u4E09\u65B9\u7684\u7D22\u8D54\u6216\u4EFB\u4F55\u884C\u653F\u7BA1\u7406\u90E8\u95E8\u7684\u5904\u7F5A\uFF0C \u60A8\u5E94\u5BF9\u672C\u516C\u53F8\u8FDB\u884C\u8D54\u507F\uFF0C\u5305\u62EC\u5408\u7406\u7684\u5F8B\u5E08\u8D39\u7528\u3002</p><p> 4. \u60A8\u627F\u8BFA\u6309\u65F6\u7F34\u7EB3\u672C\u516C\u53F8\u7684\u670D\u52A1\u8D39\u7528\uFF08\u5982\u6709\uFF09\uFF0C\u5426\u5219\u672C\u516C\u53F8 \u6709\u6743\u6682\u505C\u5BF9\u60A8\u63D0\u4F9B\u7684\u670D\u52A1\u3002</p>\n"), _defineProperty(_message, "protocol18", "\u4E5D\u3001\u9690\u79C1\u653F\u7B56"), _defineProperty(_message, "protocol19", "\u60A8\u63D0\u4F9B\u7ED9\u6211\u4EEC\u7684\u4EFB\u4F55\u6570\u636E\u6216\u4FE1\u606F\u4EA6\u53D7\u6211\u4EEC\u9690\u79C1\u653F\u7B56\"\u300ARETC\u751F\u6001\u9690\u79C1\u653F\u7B56\u300B\"\u7684\u7EA6\u675F\uFF0C\u8BE5\u9690\u79C1\u653F\u7B56\u4EA6 \u662F\u672C\u534F\u8BAE\u7684\u4E00\u90E8\u5206\u3002"), _defineProperty(_message, "protocol20", "\u5341\u3001\u514D\u8D23\u53CA\u8D23\u4EFB\u9650\u5236"), _defineProperty(_message, "protocol21", "<p>1. \u672C\u516C\u53F8\u4EC5\u5BF9\u672C\u534F\u8BAE\u4E2D\u6240\u5217\u660E\u7684\u4E49\u52A1\u627F\u62C5\u8D23\u4EFB\u3002</p>\n <p>2. \u60A8\u7406\u89E3\u548C\u540C\u610F\uFF0C\u5728\u6CD5\u5F8B\u6240\u5141\u8BB8\u7684\u6700\u5927\u8303\u56F4\u5185\uFF0C\u672C\u516C\u53F8\u53EA\u80FD\u6309\u7167\u73B0\u6709\u7684\u6280\u672F\u6C34\u5E73\u548C\u6761\u4EF6\u63D0\u4F9BRETC\u751F\u6001\u670D\u52A1_\u3002</p>\n"), _defineProperty(_message, "protocol22", "\u5341\u4E00\u3001\u514D\u8D23\u53CA\u8D23\u4EFB\u9650\u5236"), _defineProperty(_message, "protocol23", "<p>1. \u672C\u516C\u53F8\u4EC5\u5BF9\u672C\u534F\u8BAE\u4E2D\u6240\u5217\u660E\u7684\u4E49\u52A1\u627F\u62C5\u8D23\u4EFB\u3002</p>\n  <p>2. \u60A8\u7406\u89E3\u548C\u540C\u610F\uFF0C\u5728\u6CD5\u5F8B\u6240\u5141\u8BB8\u7684\u6700\u5927\u8303\u56F4\u5185\uFF0C\u672C\u516C\u53F8\u53EA\u80FD\u6309\u7167\u73B0\u6709\u7684\u6280\u672F\u6C34\u5E73\u548C\u6761\u4EF6\u63D0\u4F9BRETC\u751F\u6001\u670D\u52A1_\u3002\u56E0\u4E0B\u5217\u4EFB\u4F55\u539F \u56E0\u5BFC\u81F4RETC\u751F\u6001\u65E0\u6CD5\u6B63\u5E38\u63D0\u4F9B\u670D\u52A1\uFF0C\u672C\u516C\u53F8\u4E0D\u627F\u62C5\u8D23\u4EFB\uFF1A     </p><p> 1. RETC\u751F\u6001\u7CFB\u7EDF\u505C\u673A\u7EF4\u62A4\u6216\u5347\u7EA7\uFF1B</p>\n<p>2. \u56E0\u53F0\u98CE\u3001\u5730\u9707\u3001\u6D2A\u6C34\u3001\u96F7\u7535\u6216\u6050\u6016\u88AD\u51FB\u7B49\u4E0D\u53EF\u6297\u529B\u539F\u56E0\uFF1B </p>\n<p>3. \u60A8\u7684\u79FB\u52A8\u8BBE\u5907\u8F6F\u786C\u4EF6\u548C\u901A\u4FE1\u7EBF\u8DEF\u3001\u4F9B\u7535\u7EBF\u8DEF\u51FA\u73B0\u6545\u969C\u7684\uFF1B </p>\n<p>4. \u60A8\u64CD\u4F5C\u4E0D\u5F53\u6216\u672A\u901A\u8FC7\u672C\u516C\u53F8\u6388\u6743\u6216\u8BA4\u53EF\u7684\u65B9\u5F0F\u4F7F \u7528\u672C\u516C\u53F8\u670D\u52A1\u7684\uFF1B</p>\n<p>5. \u56E0\u7535\u8111\u75C5\u6BD2\u3001\u6728\u9A6C\u3001\u6076\u610F\u7A0B\u5E8F\u653B\u51FB\u3001\u7F51\u7EDC\u62E5\u5835\u3001\u7CFB \u7EDF\u4E0D\u7A33\u5B9A\u3001\u7CFB\u7EDF\u6216\u8BBE\u5907\u6545\u969C\u3001\u901A\u8BAF\u6545\u969C\u3001\u7535\u529B\u6545\u969C\u3001\u94F6 \u884C\u6216\u653F\u5E9C\u884C\u4E3A\u7B49\u539F\u56E0\uFF1B</p>\n <p>6. \u975E\u56E0\u672C\u516C\u53F8\u7684\u539F\u56E0\u800C\u5F15\u8D77\u7684\u4EFB\u4F55\u5176\u5B83\u539F\u56E0\u3002</p>\n  <p>3. \u672C\u516C\u53F8\u5BF9\u4EE5\u4E0B\u4EFB\u4F55\u60C5\u5F62\u5747\u4E0D\u627F\u62C5\u8D23\u4EFB\uFF1A </p>\n<p>1. \u56E0\u60A8\u9057\u5931\u79FB\u52A8\u8BBE\u5907\u3001\u5220\u9664\u4E14\u672A\u5907\u4EFDRETC\u751F\u6001\u3001\u5220\u9664 \u4E14\u672A\u5907\u4EFD\u94B1\u5305\u3001\u9057\u5FD8\u4E14\u672A\u5907\u4EFD\u94B1\u5305\u5BC6\u7801\u3001\u52A9\u8BB0\u8BCD\u3001\u800C\u5BFC\u81F4 \u8BE5\u7528\u6237\u7684\u6570\u5B57\u4EE3\u5E01\u4E22\u5931\uFF1B</p> \n<p>2. \u56E0\u60A8\u81EA\u884C\u6CC4\u9732\u94B1\u5305\u5BC6\u7801\u3001\u52A9\u8BB0\u8BCD\uFF0C\u6216\u5056\u7528\u3001\u8F6C\u8BA9\u6216\u6388\u6743 \u4ED6\u4EBA\u4F7F\u7528\u81EA\u5DF1\u7684\u79FB\u52A8\u8BBE\u5907\u6216RETC\u751F\u6001\u94B1\u5305\uFF0C\u6216\u672A\u901A\u8FC7\u672C\u516C\u53F8\u5B98\u65B9\u6E20\u9053\u4E0B\u8F7DRETC\u751F\u6001\u5E94\u7528\u7A0B\u5E8F\u6216\u4EE5\u5176\u4ED6\u4E0D\u5B89\u5168\u7684\u65B9\u5F0F\u4F7F\u7528RETC\u751F\u6001\u5E94\u7528\u7A0B\u5E8F\u5BFC\u81F4\u7684\u60A8\u7684\u6570\u5B57\u4EE3\u5E01\u4E1F\u5931\uFF1B </p>\n<p>3. \u56E0\u60A8\u4E0D\u7406\u89E3\u533A\u5757\u94FE\u6280\u672F\u7684\u77E5\u8BC6\u800C\u8FDB\u884C\u8BEF\u64CD\u4F5C\u5BFC\u81F4\u7684 \u60A8\u7684\u6570\u5B57\u4EE3\u5E01\u4E22\u5931\uFF1B </p>\n<p>4. \u56E0\u7CFB\u7EDF\u6EDE\u540E\u3001\u533A\u5757\u94FE\u7CFB\u7EDF\u4E0D\u7A33\u5B9A\u7B49\u539F\u56E0\u5BFC\u81F4\u672C\u516C\u53F8\u62F7\u8D1D\u7528 \u6237\u5728\u533A\u5757\u94FE\u4E0A\u7684\u4EA4\u6613\u8BB0\u5F55\u53D1\u751F\u504F\u5DEE\u3002</p> \n<p>5. \u60A8\u77E5\u6089\u672C\u516C\u53F8\u53EF\u80FD\u540C\u65F6\u4E3A\u60A8\u53CA\u60A8\u7684\u4EA4\u6613\u5BF9\u624B\u65B9\u63D0\u4F9B\u670D\u52A1\u6216\u4E0E \u4E4B\u6709\u5173\u8054\u5173\u7CFB\u6216\u5176\u4ED6\u5229\u76CA\u76F8\u5173\u7684\u5173\u7CFB\uFF0C\u60A8\u540C\u610F\u5BF9\u672C\u516C\u53F8\u53EF\u80FD\u5B58 \u5728\u7684\u8BE5\u7B49\u884C\u4E3A\u4E88\u4EE5\u660E\u786E\u8C41\u514D\u4EFB\u4F55\u5B9E\u9645\u6216\u6F5C\u5728\u7684\u5229\u76CA\u51B2\u7A81\uFF0C\u5E76\u4E0D \u5F97\u4EE5\u6B64\u6765\u4E3B\u5F20\u672C\u516C\u53F8\u5728\u63D0\u4F9B\u670D\u52A1\u65F6\u5B58\u5728\u6CD5\u5F8B\u4E0A\u7684\u7455\u75B5\uFF0C\u4E5F\u4E0D\u56E0 \u6B64\u800C\u52A0\u91CD\u672C\u516C\u53F8\u7684\u8D23\u4EFB\u6216\u6CE8\u610F\u4E49\u52A1\u3002 </p>\n<p>6. \u60A8\u7406\u89E3\u6839\u636E\u9002\u7528\u6CD5\u5F8B\u6CD5\u89C4\u7684\u8981\u6C42\uFF0C\u6211\u4EEC\u53EF\u80FD\u4E0D\u65F6\u66F4\u6539\u6211\u4EEC\u7684 \u7528\u6237\u51C6\u5165\u6807\u51C6\uFF0C\u9650\u5B9A\u5411\u7279\u5B9A\u7528\u6237\u7B49\u63D0\u4F9B\u670D\u52A1\u7684\u8303\u56F4\u548C\u65B9\u5F0F\u7B49\u3002</p>\n"), _defineProperty(_message, "protocol24", "\u5341\u4E8C\u3001\u5176\u4ED6\u6761\u6B3E"), _defineProperty(_message, "protocol25", "<p>1.\u77E5\u8BC6\u4EA7\u6743\u58F0\u660ERETC\u751F\u6001\u662F\u672C\u516C\u53F8\u5F00\u53D1\u5E76\u62E5\u6709\u77E5\u8BC6\u4EA7\u6743\u7684 \u5E94\u7528\u7A0B\u5E8F\u3002RETC\u751F\u6001k\u4E2D\u663E\u793A\u7684\u4EFB\u4F55\u5185\u5BB9\uFF08\u5305\u62EC\u672C\u534F\u8BAE\u3001\u516C \u544A\u3001\u6587\u7AE0\u3001\u89C6\u9891\u3001\u97F3\u9891\u3001\u56FE\u7247\u3001\u6863\u6848\u3001\u8D44\u8BAF\u3001\u8D44\u6599\u3001\u5546\u6807\u6216\u6807 \u8BC6\uFF09\u7684\u77E5\u8BC6\u4EA7\u6743\u5F52\u672C\u516C\u53F8\u6216\u7B2C\u4E09\u65B9\u6743\u5229\u4EBA\u6240\u6709\u3002\u7528\u6237\u4EC5\u53EF\u4E3A\u6301 \u6709\u548C\u7BA1\u7406\u6570\u5B57\u4EE3\u5E01\u4E4B\u76EE\u7684\u4F7F\u7528RETC\u751F\u6001\u5E94\u7528\u7A0B\u5E8F\u53CA\u5176\u4E2D\u7684\u5185 \u5BB9\u3002\u672A\u7ECF\u672C\u516C\u53F8\u6216\u7B2C\u4E09\u65B9\u6743\u5229\u4EBA\u7684\u4E8B\u5148\u4E66\u9762\u540C\u610F\uFF0C\u4EFB\u4F55\u4EBA\u4E0D \u5F97\u64C5\u81EA\u4F7F\u7528\u3001\u4FEE\u6539\u3001\u53CD\u5411\u7F16\u8BD1\u3001\u590D\u5236\u3001\u516C\u5F00\u4F20\u64AD\u3001\u6539\u53D8\u3001\u6563 \u5E03\u3001\u53D1\u884C\u6216\u516C\u5F00\u53D1\u8868\u4E0A\u8FF0\u5E94\u7528\u7A0B\u5E8F\u53CA\u5185\u5BB9\u3002\u672C\u534F\u8BAE\u4E0D\u5E94\u88AB\u89C6 \u4E3A\u6388\u4E88\u60A8\u4EFB\u4F55\u77E5\u8BC6\u4EA7\u6743\uFF0C\u5305\u62EC\u51FA\u4E8E\u4EFB\u4F55\u76EE\u7684\u4F7F\u7528\u4E0E\u6211\u4EEC\u6216\u670D \u52A1\u76F8\u5173\u7684\u4EFB\u4F55\u4FE1\u606F\u3001\u56FE\u7247\u3001\u7528\u6237\u754C\u9762\u3001\u6807\u8BC6\u3001\u5546\u6807\u3001\u5546\u4E1A\u540D \u79F0\u3001\u7F51\u7EDC\u57DF\u540D\u6216\u7248\u6743\u7684\u6743\u5229\u3002</p>\n<p>2.\u7EC8\u7AEF\u5B89\u5168\u8D23\u4EFB </p>\n<p>2.1\u60A8\u7406\u89E3\u5E76\u540C\u610F\uFF0C\u672C\u8F6F\u4EF6\u540C\u5927\u591A\u6570\u4E92\u8054\u7F51\u8F6F\u4EF6\u4E00\u6837\uFF0C\u53EF\u80FD\u4F1A \u53D7\u591A\u79CD\u56E0\u7D20\u5F71\u54CD\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u7528\u6237\u539F\u56E0\u3001\u7F51\u7EDC\u670D\u52A1\u8D28\u91CF\u3001\u793E \u4F1A\u73AF\u5883\u7B49\uFF1B\u4E5F\u53EF\u80FD\u4F1A\u53D7\u5404\u79CD\u5B89\u5168\u95EE\u9898\u7684\u4FB5\u6270\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4ED6 \u4EBA\u975E\u6CD5\u5229\u7528\u7528\u6237\u8D44\u6599\uFF0C\u8FDB\u884C\u73B0\u5B9E\u4E2D\u7684\u9A9A\u6270\uFF1B\u7528\u6237\u4E0B\u8F7D\u5B89\u88C5\u7684\u5176 \u4ED6\u8F6F\u4EF6\u6216\u8BBF\u95EE\u7684\u5176\u4ED6\u7F51\u7AD9\u4E2D\u53EF\u80FD\u542B\u6709\u75C5\u6BD2\u3001\u6728\u9A6C\u7A0B\u5E8F\u6216\u5176\u4ED6\u6076 \u610F\u7A0B\u5E8F\uFF0C\u5A01\u80C1\u60A8\u7684\u7EC8\u7AEF\u8BBE\u5907\u4FE1\u606F\u548C\u6570\u636E\u5B89\u5168\uFF0C\u7EE7\u800C\u5F71\u54CD\u672C\u8F6F\u4EF6 \u7684\u6B63\u5E38\u4F7F\u7528\u7B49\u3002\u56E0\u6B64\uFF0C\u60A8\u5E94\u52A0\u5F3A\u4FE1\u606F\u5B89\u5168\u53CA\u4E2A\u4EBA\u4FE1\u606F\u7684\u4FDD\u62A4\u610F \u8BC6\uFF0C\u6CE8\u610F\u5BC6\u7801\u4FDD\u62A4\uFF0C\u4EE5\u514D\u906D\u53D7\u635F\u5931\u3002</p>\n <p>2.2\u60A8\u4E0D\u5F97\u5236\u4F5C\u3001\u53D1\u5E03\u3001\u4F7F\u7528\u3001\u4F20\u64AD\u7528\u4E8E\u7A83\u53D6\u5E10\u53F7\u53CA\u4ED6\u4EBA\u4E2A\u4EBA\u4FE1\u606F\u3001\u8D22\u4EA7\u7684\u6076\u610F\u7A0B\u5E8F\u3002</p>\n <p>2.3\u7EF4\u62A4\u8F6F\u4EF6\u5B89\u5168\u4E0E\u6B63\u5E38\u4F7F\u7528\u662FRETC\u751F\u6001\u548C\u60A8\u7684\u5171\u540C\u8D23\u4EFB\uFF0C RETC\u751F\u6001\u5C06\u6309\u7167\u884C\u4E1A\u6807\u51C6\u5408\u7406\u5BA1\u614E\u5730\u91C7\u53D6\u5FC5\u8981\u6280\u672F\u63AA\u65BD\u4FDD\u62A4 \u60A8\u7684\u7EC8\u7AEF\u8BBE\u5907\u4FE1\u606F\u548C\u6570\u636E\u5B89\u5168\uFF0C\u4F46\u662F\u60A8\u627F\u8BA4\u548C\u540C\u610FRETC\u751F\u6001\u5E76\u4E0D\u80FD\u5C31\u6B64\u63D0\u4F9B\u5B8C\u5168\u4FDD\u8BC1\u3002 </p>\n<p>3. \u6CD5\u5F8B\u9002\u7528\u548C\u4E89\u8BAE\u89E3\u51B3\uFF1A</p>\n <p>1.\u672C\u534F\u8BAE\u9002\u7528\u76F8\u5173\u56FD\u5BB6\u6CD5\u5F8B\uFF0C\u5E76\u5E94\u636E\u6B64\u89E3\u91CA\u3002 </p>\n<p>2. \u56E0\u672C\u534F\u8BAE\u5F15\u8D77\u7684\u6216\u4E0E\u4E4B\u76F8\u5173\u7684\u4EFB\u4F55\u4E89\u8BAE\uFF08\u5305\u62EC\u4EFB\u4F55\u6709\u5173\u5176 \u5B58\u5728\u3001\u6709\u6548\u6027\u3001\u7EC8\u6B62\u7684\u95EE\u9898\uFF09\uFF0C\u53CC\u65B9\u5E94\u9996\u5148\u5BFB\u6C42\u548C\u89E3\u3002\u5982\u679C\u8BE5 \u4E89\u8BAE\u5728\u8BE5\u548C\u89E3\u7A0B\u5E8F\u5F00\u59CB\u540E\u768430\u5929\u5185\u4ECD\u672A\u89E3\u51B3\uFF0C\u53CC\u65B9\u5E94\u5C06\u8BE5\u4E89\u8BAE \u63D0\u4EA4\u81F3\u76F8\u5173\u56FD\u5BB6\u56FD\u9645\u4EF2\u88C1\u4E2D\u5FC3\uFF08\u7B80\u79F0\"SIAC\u201D\uFF09\uFF0C\u5E76\u901A\u8FC7\u9075\u5FAA\u76F8 \u5173\u56FD\u5BB6\u56FD\u9645\u4EF2\u88C1\u4E2D\u5FC3\u5C4A\u65F6\u6709\u6548\u7684\u4EF2\u88C1\u89C4\u5219\uFF08\u8BE5\u89C4\u5219\u88AB\u89C6\u4E3A\u901A\u8FC7 \u5F15\u7528\u5E76\u5165\u672C\u6761\u6B3E\uFF09\uFF0C\u6700\u7EC8\u4EE5\u4EF2\u88C1\u7684\u65B9\u5F0F\u5728\u76F8\u5173\u56FD\u5BB6\u4E88\u4EE5\u89E3\u51B3\u3002 \u4EF2\u88C1\u5EAD\u7531\u4E00\u540D\u4EF2\u88C1\u5458\u7EC4\u6210\uFF0C\u7531SIAC\u4E3B\u5E2D\u4EFB\u547D\u3002\u4EF2\u88C1\u8BED\u8A00\u4E3A\u82F1 \u8BED\u3002\u6BCF\u4E00\u65B9\u4E0D\u53EF\u64A4\u9500\u5730\u63A5\u53D7\u76F8\u5173\u56FD\u5BB6\u6CD5\u9662\u4E4B\u975E\u4E13\u5C5E\u7BA1\u8F96\u6743\uFF0C\u4EE5 \u652F\u6301\u548C\u534F\u52A9\u6839\u636E\u672C\u6BB5\u524D\u8FF0\u5185\u5BB9\u8FDB\u884C\u7684\u4EF2\u88C1\u7A0B\u5E8F\uFF0C\u5305\u62EC\u5728\u8BE5\u7A0B\u5E8F \u7684\u7ED3\u679C\u4F5C\u51FA\u4E4B\u524D\u7ED9\u4E88\u4E34\u65F6\u6551\u6D4E\uFF08\u5982\u5FC5\u8981\uFF09\u3002</p>\n <p>3. \u4E3A\u65B9\u4FBF\u8D77\u89C1\uFF0C\u672C\u534F\u8BAE\u53EF\u4EE5\u7FFB\u8BD1\u4E3A\u5176\u4ED6\u8BED\u8A00\uFF0C\u4F46\u672C\u534F\u8BAE\u82F1\u6587 \u7248\u7CFB\u4E3B\u8981\u6587\u672C\u3002\u672C\u534F\u8BAE\u53CA\u9644\u4EF6\u7684\u5176\u4ED6\u8BED\u8A00\u8BD1\u672C\u5982\u4E0E\u82F1\u6587\u7248\u6709 \u4E0D\u4E00\u81F4\u4E4B\u5904\uFF0C\u4EE5\u82F1\u6587\u7248\u4E3A\u51C6\u3002</p><p>\n\u672C\u534F\u8BAE\u81EA2019\u5E747\u670824\u65E5\u9002\u7528\u3002</p>\n\u672C\u534F\u8BAE\u672A\u5C3D\u4E8B\u5B9C\uFF0C\u60A8\u9700\u9075\u5B88\u672C\u516C\u53F8\u4E0D\u65F6\u66F4\u65B0\u7684\u516C\u544A\u53CA\u76F8\u5173\u89C4\u5219\u3002\n"), _defineProperty(_message, "UnableToContinue",









































































































  '你已投资，不能继续参与投资'), _defineProperty(_message, "AvailableBalance", "\u53EF\u7528\u4F59\u989D"), _defineProperty(_message, "ReceiRETCdQuantity", "\u6536\u5230\u6570\u91CF"), _defineProperty(_message, "exchangeRate", "\u6C47\u7387"), _defineProperty(_message, "FastFlash", "\u5FEB\u901F\u95EA\u5151"), _defineProperty(_message, "FlashRecord", "\u5151\u6362\u8BB0\u5F55"), _defineProperty(_message, "FlashNumber", "\u5151\u6362\u6570\u91CF"), _defineProperty(_message, "FlashTime", "\u5151\u6362\u65F6\u95F4"), _defineProperty(_message, "success", "\u6210\u529F"), _defineProperty(_message, "MyBlockReRETCnue", "\u6211\u7684\u533A\u5757\u6536\u76CA"), _defineProperty(_message, "shifang01", "A\u79EF\u5206\u6536\u76CA"), _defineProperty(_message, "shifang02", "RETC\u6536\u76CA"), _defineProperty(_message, "waitshifang01", "\u5F85\u91CA\u653ERETC"), _defineProperty(_message, "waitshifang02", "\u5F85\u91CA\u653EA\u79EF\u5206"), _defineProperty(_message, "aCode", "A\u79EF\u5206"), _defineProperty(_message, "meKnow", "\u6211\u77E5\u9053\u4E86"), _defineProperty(_message, "dayshifang", "\u65E5\u91CA\u653E\u6BD4\u4F8B"), _message) };exports.default = _default;

/***/ }),

/***/ 152:
/*!******************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Ffund%2Ffund-buy"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _fundBuy = _interopRequireDefault(__webpack_require__(/*! ./pages/fund/fund-buy.vue */ 153));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_fundBuy.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 16:
/*!***************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/lang/lang/ko.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _message;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = {
  message: (_message = {
    exchange: '플래시',
    income_day: "\uCD1D \uB9E4\uCD9C \uC77C\uC218",
    day_kt: "\uC624\uB298 \uC5B8\uAE09 \uB420 \uC218\uC788\uB2E4.",
    // 登录
    hello: "안녕하세요.",
    welcome: "RETC 에 오신 것을 환영합니다.",
    login: "로그인",
    signin: "등록",
    notAccount: "즉시 계정 없음",
    enterpassword_RETC: "6-16 자의 영숫자 암호를 입력하십시오.",
    enterpaypwd_RETC: '6 자리 지불 비밀번호를 입력하십시오.',
    forgetPass: "비밀번호를 잊으셨습니까?",
    enter_num_phone: "휴대 전화 번호 / 사서함을 입력하십시오.",
    switch_lang: "거래 비밀번호 전환",
    copySu: '성공적인 사본',
    // 注册
    i: '나',
    iagree: "사용자 동의서에 동의하십시오.",
    pleaseagree: "사용자 서비스 계약에 동의하십시오.",
    china: "중국",
    enter_email: "사서함 채우기",
    enter_yzm: "인증 코드를 입력하십시오.",
    get_yam: "인증 코드 받기",
    lable: '레이블',
    yanzhengma: '인증 코드',
    enter_label: '라벨을 입력하십시오.',
    enter_login_pass: "로그인 암호 입력",
    reenter_login_pass: "로그인 암호 확인",
    enter_pay_pass: "지불 비밀번호를 기입하십시오.",
    reenter_pay_pass: "지불 비밀번호를 다시 입력하십시오.",
    enter_nickname: "닉네임 입력(6-16 자의 영숫자 암호)",
    enter_imgyzm: "그래픽 인증 코드 입력",
    enter_refer: "초대 코드를 입력하십시오 (필수 아님)",
    register: "등록",
    haRETCAccount: "계정이 있으시면 지금 등록하십시오.",
    login_is_empty: "로그인 비밀번호가 비어 있습니다.",
    login_is_error: "로그인 비밀번호 형식 오류",
    login_not_same: "일치하지 않는 로그인 비밀번호",
    pay_is_empty: "지불 비밀번호는 비워 둘 수 없습니다.",
    pay_is_error: "결제 비밀번호 형식 오류",
    pay_not_same: "일치하지 않는 지불 비밀번호",
    nickname_is_empty: "닉네임은 비워 둘 수 없습니다.",
    nickname_is_error: "닉네임 형식 오류",
    yzmimg_is_empty: "그래픽 인증 코드는 비워 둘 수 없습니다.",
    yzmimg_is_error: "그래픽 인증 코드 형식 오류",
    yzm_is_empty: "초대 코드는 비워 둘 수 없습니다.",
    yzm_is_error: "잘못된 초대 코드 형식",
    register_fail: "등록 실패",
    yzm_error_is: '인증 코드는 비워 둘 수 없습니다.',
    yzm_error_isfail: '인증 코드 형식 오류',

    // 验证码
    error_email: "잘못된 사서함 형식",
    yzm_fail: "인증 코드 오류",
    re_send_yzm: "인증 코드 다시 보내기",
    login_fail: "로그인 실패",

    // 国家地区
    area: "국가 지역",

    // 忘记密码
    forgetpass: "잊어 버린 암호",
    userinfo: "휴대 전화 번호 또는 이메일 주소를 입력하십시오.",
    submit: "제출",

    // 修改支付密码
    old_pass: "이전 암호",
    new_pass: "새 암호",
    enter_old_pass: "이전 암호를 입력하십시오.",
    enter_new_pass: "새 암호를 입력하십시오.",
    getToIndex: '첫 페이지로 되돌아가다',
    // 修改登录密码
    modify_login_pass: "로그인 암호 수정",

    // 请求失败提示
    request_fail: "요청 데이터 실패",

    // 个人中心
    mybill: "내 청구서",
    safecenter: "보안 센터",
    communityleRETCl: '커뮤니티 수준',
    myrefer: "내 초대 코드",
    helpcenter: "고객 서비스",
    set: "설정",
    setNickNameTxt: "닉네임을 설정하십시오.",

    /**
                                    * 个人信息
                                    * */
    person_info: "개인 정보",
    saRETC: "저장",
    nickname: "별명",
    sex: "성",

    // 系统设置
    sys_set: "시스템 설정" }, _defineProperty(_message, "switch_lang",
  "거래 비밀번호 전환"), _defineProperty(_message, "RETCrsion",
  "버전 번호"), _defineProperty(_message, "exit",
  "로그 아웃"), _defineProperty(_message, "protocol",
  "서비스 계약"), _defineProperty(_message, "select_lang",


  "언어 선택"), _defineProperty(_message, "zh",
  "중국어"), _defineProperty(_message, "en",
  "영어"), _defineProperty(_message, "ko",
  "한국어"), _defineProperty(_message, "confirm",
  "결정"), _defineProperty(_message, "cancel",
  "취소"), _defineProperty(_message, "cellnum",


  "계좌 번호"), _defineProperty(_message, "loginpass",
  "로그인 비밀번호"), _defineProperty(_message, "paypass",
  "지불 비밀번호"), _defineProperty(_message, "gesturepass",
  "제스처 암호"), _defineProperty(_message, "setgesturepass",
  "제스처 암호 변경"), _defineProperty(_message, "reset",
  "재설정"), _defineProperty(_message, "modify_login_pass",
  "로그인 암호 수정"), _defineProperty(_message, "set_pwd_pass",
  "거래 암호 설정"), _defineProperty(_message, "myreferurl",


  "내 초대 링크"), _defineProperty(_message, "copysuccess",
  "성공적인 사본"), _defineProperty(_message, "refer",
  "초대 코드"), _defineProperty(_message, "referurl",
  "초대 링크"), _defineProperty(_message, "genetateVcode",
  "공유 QR 코드 생성"), _defineProperty(_message, "copy",
  "복사"), _defineProperty(_message, "inRETCstment",


  "투자"), _defineProperty(_message, "min_inRETCst_num",
  "최소 투자"), _defineProperty(_message, "currency",
  "통화"), _defineProperty(_message, "m_rate",
  "월간 이자율"), _defineProperty(_message, "model",
  "열린 상태"), _defineProperty(_message, "search_txt",
  "검색 통화"), _defineProperty(_message, "state",
  "뜨거운"), _defineProperty(_message, "inRETCst_btn",
  "투자"), _defineProperty(_message, "saled",
  "판매 된 "), _defineProperty(_message, "end",
  "끝 "), _defineProperty(_message, "myfund",
  "내 투자"), _defineProperty(_message, "exit_order",
  "출구 전표"), _defineProperty(_message, "community",


  "커뮤니티"), _defineProperty(_message, "search_content",
  "검색을 입력하십시오."), _defineProperty(_message, "goldcommunity",
  "금 공동체"), _defineProperty(_message, "goldpush",
  "팀 사용자"), _defineProperty(_message, "goldteam",
  "사용자 공유"), _defineProperty(_message, "goldsum",
  "소득"), _defineProperty(_message, "destroytime",
  '파괴 시간 23 : 00-24 : 00 매일'), _defineProperty(_message, "transfer",


  "전송"), _defineProperty(_message, "transferlog",
  "역사에서 탈출하다"), _defineProperty(_message, "transfercoin",
  "통화"), _defineProperty(_message, "transferaddress",
  "주소 신용"), _defineProperty(_message, "transfernum",
  "양도"), _defineProperty(_message, "transferfee",
  "수수료"), _defineProperty(_message, "all",
  "모두"), _defineProperty(_message, "arrival",
  "도착"), _defineProperty(_message, "coin",
  "동전"), _defineProperty(_message, "cur_use",
  "사용 가능 "), _defineProperty(_message, "min_transfer",
  "최소 동전 수 "), _defineProperty(_message, "charge_history",
  '역사에 충전하다'), _defineProperty(_message, "chargein",

  "전송"), _defineProperty(_message, "wallet_address",
  "USDT 지갑 주소"), _defineProperty(_message, "enter_wallet_address",
  "지갑 주소 입력"), _defineProperty(_message, "index",


  "RETC 생태학"), _defineProperty(_message, "assets",
  "내 자산"), _defineProperty(_message, "search_coin",
  "검색 통화"), _defineProperty(_message, "hide_currency",
  "잔액이 0 인 통화를 숨 깁니다."), _defineProperty(_message, "detail",
  "세부 정보"), _defineProperty(_message, "_market",
  "가격"), _defineProperty(_message, "with_address",


  "동전 주소"), _defineProperty(_message, "add_new_address",
  "새 주소 추가"), _defineProperty(_message, "delete",
  "삭제"), _defineProperty(_message, "transfer_history",


  "역사에서 탈출하다"), _defineProperty(_message, "address_name",
  "주소 이름"), _defineProperty(_message, "address_charge",
  "주소 재충전"), _defineProperty(_message, "charge",
  "재충전"), _defineProperty(_message, "address",


  "주소"), _defineProperty(_message, "review",
  "검토 대기 중"), _defineProperty(_message, "transfer_detail",
  "세부 정보 이전"), _defineProperty(_message, "invite_friend",


  "친구 초대하기"), _defineProperty(_message, "invite_txt",
  "초대 코드"), _defineProperty(_message, "start_plan_txt",
  "RETC 프로그램 열기"), _defineProperty(_message, "time",


  '시간'), _defineProperty(_message, "edu",
  '금액'), _defineProperty(_message, "user",
  '사용자'), _defineProperty(_message, "destory_pool",
  '수영장 파괴'), _defineProperty(_message, "browser",
  "브라우저"), _defineProperty(_message, "performance1",


  "혜택보기"), _defineProperty(_message, "performance2",
  '수익 공유'), _defineProperty(_message, "static_income1",
  "보너스 나누기"), _defineProperty(_message, "direct_income1",
  "노드 배당금"), _defineProperty(_message, "community_income1",
  "노드 배당"), _defineProperty(_message, "total_income",
  "누적 소득"), _defineProperty(_message, "nodata",
  '데이터가 없습니다.'), _defineProperty(_message, "withdraw113",
  '송금 안전 팁 : 낯선 사람이나 이상한 사람에게 돈을 이체 할 때 상대방의 신원을 확인하고 자신의 자산을 보호하십시오.。'), _defineProperty(_message, "sysBrand1",

  "RETC 캐피탈, 세계에 봉사!"), _defineProperty(_message, "sysBrand2",
  "RETC 싸이 팀"), _defineProperty(_message, "sys",
  "시스템 발표"), _defineProperty(_message, "startTime",


  '시작 시간'), _defineProperty(_message, "endTime",
  '종료 시간'), _defineProperty(_message, "status",
  '상태'), _defineProperty(_message, "InRETCstmentQuantity",
  '투자 수량'), _defineProperty(_message, "NumberOfPackets",
  '패킷 수'), _defineProperty(_message, "types",
  '유형'), _defineProperty(_message, "quantity",
  '수량'), _defineProperty(_message, "Repeat",
  '재투자'), _defineProperty(_message, "termination",
  '종료'), _defineProperty(_message, "ContractTermination",
  '구독 취소'), _defineProperty(_message, "BlockPackage",
  '패키지 차단'), _defineProperty(_message, "DeductedQuantity",
  '교장의 공제'), _defineProperty(_message, "interest",
  '관심'), _defineProperty(_message, "DeductingIncome",
  '수익을 공제하다'), _defineProperty(_message, "RefundablePrincipal",
  '원금을 돌려주다'), _defineProperty(_message, "transactionPassword",
  '거래 암호'), _defineProperty(_message, "listshenchangdeshuzi",
  '학교장은 언제든지 환불받을 수 있으며, 모든 수익금을 공제 한 후 나머지 교장은 15 %가 공제됩니다.'), _defineProperty(_message, "MinimumStarting",

  '최저 슛'), _defineProperty(_message, "MaximumLimit",
  '최고 한도액'), _defineProperty(_message, "AlreadyInRETCsted",
  '이미 투하하다'), _defineProperty(_message, "InputCurrency",

  '입력 점유율'), _defineProperty(_message, "MinimumStarting",
  '최저 슛'), _defineProperty(_message, "ChooseTheNumberOfInputs",
  "블록 패키지 수 선택"), _defineProperty(_message, "SelectCurrency",
  '수량'), _defineProperty(_message, "allIn",
  '전입'), _defineProperty(_message, "Balance",
  '잔액'), _defineProperty(_message, "Input",
  '투입'), _defineProperty(_message, "InsufficientQuantity",
  '수량이 부족하다'), _defineProperty(_message, "TheNumberOfInputsCannotBeEmpty",
  '입력 수가 비어서는 안 된다'), _defineProperty(_message, "PleaseEnterThTransactionPassword",
  '거래 암호를 입력하십시오'), _defineProperty(_message, "InsufficientBalance",
  '잔액이 부족하다'), _defineProperty(_message, "FailedToGetData",
  '데이터 가져오기 실패'), _defineProperty(_message, "confirmOk",
  '삭제 하시겠습니까?'), _defineProperty(_message, "changeer",
  'QR 코드 선택'), _defineProperty(_message, "update",



  "프롬프트 업데이트"), _defineProperty(_message, "update_tip",
  "RETC 생태계가 새 버전으로 출시되었습니다. 업데이트하고 있습니까?"), _defineProperty(_message, "isJumping",
  "점핑..."), _defineProperty(_message, "soon_update",
  "가능한 한 빨리 최신 버전을 업데이트하십시오...."), _defineProperty(_message, "fail",
  "실패"), _defineProperty(_message, "yeji",


  "실적"), _defineProperty(_message, "charge_detail",

  '상세한 상황을 충당하다.'), _defineProperty(_message, "to_per",
  '수금자'), _defineProperty(_message, "from_per",
  '송금 처방'), _defineProperty(_message, "remark",
  '비고'), _defineProperty(_message, "ArriRETCd",
  '이미 결산하다'), _defineProperty(_message, "TradingNumber",
  '거래 번호'), _defineProperty(_message, "TradingTime",
  '교역 시간'), _defineProperty(_message, "OutgoingAddress",

  '주소 이동'), _defineProperty(_message, "ReceivingAddress",
  '수신 주소'), _defineProperty(_message, "AuditInProgress",
  '심사 중'), _defineProperty(_message, "Adopted",
  '이미 통과'), _defineProperty(_message, "Rejected",
  '기각했어'), _defineProperty(_message, "dayInteres",
  '일리'), _defineProperty(_message, "carAddress",

  '지갑 주소'), _defineProperty(_message, "your",
  '당신의'), _defineProperty(_message, "userEr",
  'QR코드 지갑 주소 사용하기'), _defineProperty(_message, "emptySomethings",
  '투자의 패키지는 0 이다'), _defineProperty(_message, "protocol_title",

  '《서비스 계약》'), _defineProperty(_message, "protocol01", "\uCE5C\uC560\uD558\uB294 \uC0AC\uC6A9\uC790\uFF1A\n\t\t<p>RETC Eco Service\uB97C \uC120\uD0DD\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4. \uC774 \uC11C\uBE44\uC2A4\uB294 RETC Ecology\uC5D0 \uC758\uD574 \uAC1C\uCD5C\uB418\uACE0 \uC6B4\uC601\uB429\uB2C8\uB2E4. RETC Eco Service Agreement (\uC774\uD558 \"\uBCF8 \uACC4\uC57D\"\uC774\uB77C\uACE0 \uD568)\uB294 RETC Ecology\uC640 \uADC0\uD558 (\uC774\uD558 \"\uC0AC\uC6A9\uC790\"\uB77C\uACE0 \uD568)\uAC00 \uC11C\uBA85 \uD55C \uAC83\uC73C\uB85C, \uADC0\uD558\uC640 \uD68C\uC0AC\uAC04\uC5D0 \uACC4\uC57D\uC758 \uBC95\uC801 \uD6A8\uB825\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACC4\uC57D\uC5D0\uC11C :</p> <p>1. \"\uB098\"\uC640 \"\uC6B0\uB9AC\"\uB294 \uD68C\uC0AC\uB97C \uAC00\uB9AC\uD0A4\uBA70, \"\uC6B0\uB9AC\"\uB294 \uADF8\uC5D0 \uB530\uB77C \uD574\uC11D\uB418\uC5B4\uC57C\uD569\uB2C8\uB2E4.</p><p> 2. \"\uADC0\uD558\"\uB294 \uC0AC\uC6A9\uC790\uB97C \uC9C0\uCE6D\uD558\uBA70 \"\uADC0\uD558\"\uB294 \uC774\uC5D0 \uB530\uB77C \uD574\uC11D\uB418\uC5B4\uC57C\uD569\uB2C8\uB2E4. \uB2F9\uC2E0\uACFC \uC6B0\uB9AC\uB294 \"\uC77C\uBC29\uC801 \uC778 (one party)\"\uC774\uB77C\uACE0 \uBD88\uB9AC\uC6B0\uBA70 \uC9D1\uD569 \uC801\uC73C\uB85C \"\uB450 \uB2F9\uC0AC\uC790\"\uB77C\uACE0 \uBD88\uB9BD\uB2C8\uB2E4. RETC Eco Mobile App (\uC774\uD558 \"RETC Ecology\"\uB610\uB294 \"This Software\"\uB77C\uACE0 \uD568)\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC74C\uC744 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4. RETC Eco\uB294 \uACE0\uC815 \uB2E4\uC6B4\uB85C\uB4DC \uB9C1\uD06C\uB97C \uD1B5\uD574 \uB2E4\uC6B4\uB85C\uB4DC \uBC0F \uC124\uCE58\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\uC774 \uACC4\uC57D \uBC0F \uAD00\uB828 \uBB38\uC81C\uB294 \uB098\uC911\uC5D0 \uC77D\uC5B4\uBCF4\uC2ED\uC2DC\uC624. \uACC4\uC57D\uC11C, \uD2B9\uD788 \uBCF8 \uACC4\uC57D\uC11C\uC758 \"\uBA74\uCC45 \uBC0F \uCC45\uC784 \uC81C\uD55C\"\uC870\uD56D\uC740 \uADC0\uD558\uAC00 \uBCF8 \uACC4\uC57D\uC11C\uC758 \uC870\uD56D\uC744 \uC644\uC804\uD788 \uC774\uD574\uD558\uACE0 \uC704\uD5D8\uC744 \uC2A4\uC2A4\uB85C \uACE0\uB824\uD560 \uC218 \uC788\uB3C4\uB85D \uAD75\uAC8C \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p>\n\t\t"), _defineProperty(_message, "protocol02", "I. \uBCF8 \uACC4\uC57D\uC11C\uC758 \uD655\uC778 \uBC0F \uC218\uB77D"), _defineProperty(_message, "protocol03", "<p>1. \uADC0\uD558\uB294 \uBCF8 \uACC4\uC57D \uBC0F \uAD00\uB828 \uACC4\uC57D\uC774 RETC Ecok \uBC0F RETC Ecology\uAC00 \uB3C5\uC790\uC801\uC73C\uB85C \uAC1C\uBC1C \uBC0F \uC18C\uC720\uD558\uB294 \uC9C0\uBC29 \uBD84\uAD8C\uD654 \uBC0F \uC911\uC559 \uC9D1\uC911\uD654 \uC11C\uBE44\uC2A4\uC5D0 \uC801\uC6A9\uB428\uC744 \uC774\uD574\uD569\uB2C8\uB2E4.</p>\n\t\t<p>2. RETC Eco Software\uB97C \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC5EC \uC0AC\uC6A9\uC790\uB85C \uB4F1\uB85D\uD568\uC73C\uB85C\uC368 \uADC0\uD558\uB294 \uBCF8 \uACC4\uC57D\uC758 \uBAA8\uB4E0 \uC870\uAC74\uC744 \uC644\uC804\uD788 \uC77D\uACE0 \uC218\uB77D \uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uB429\uB2C8\uB2E4.\uC774 \uACC4\uC57D\uC740 \uC989\uC2DC \uD6A8\uB825\uC744 \uAC00\uC9C0\uBA70 \uC591 \uB2F9\uC0AC\uC790\uB97C \uAD6C\uC18D\uD569\uB2C8\uB2E4. \uC774 \uACC4\uC57D\uC11C\uC758 \uC870\uAC74\uC5D0 \uB3D9\uC758\uD558\uC9C0 \uC54A\uC73C\uBA74 RETC Ecology \uC0AC\uC6A9\uC744 \uC989\uC2DC \uC911\uC9C0\uD574\uC57C\uD569\uB2C8\uB2E4. RETC Ecology\uB97C \uC774\uBBF8 \uB2E4\uC6B4\uB85C\uB4DC\uD588\uB2E4\uBA74 \uC9C0\uAE08 \uC0AD\uC81C\uD558\uC2ED\uC2DC\uC624.</p>\n\t\t<p>3. RETC Ecology\uC5D0 \uC561\uC138\uC2A4\uD558\uAC70\uB098 \uC0AC\uC6A9\uD560 \uB54C \uB3D9\uC758\uD569\uB2C8\uB2E4.\uFF1A</p>\n\t\t <p>1. \uC774 \uACC4\uC57D\uC758 \uCD5C\uC2E0 \uBC84\uC804 \uC218\uB77D (\uBCC0\uACBD \uB610\uB294 \uC218\uC815 \uC5C6\uC74C)\uFF1B</p>\n\t\t <p>2. \uAD00\uD560 \uC9C0\uC5ED\uC5D0\uC11C RETC \uC0DD\uD0DC\uD559\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC95\uC801 \uC5F0\uB839\uC5D0 \uB3C4\uB2EC\uD588\uC73C\uBA70 RETC \uC0DD\uD0DC\uD559\uC758 \uC0AC\uC6A9\uC73C\uB85C \uC778\uD574 \uBC1C\uC0DD\uD558\uB294 \uBC95\uC801\uC778 \uB610\uB294 \uAE08\uC804\uC801 \uC758\uBB34\uB97C \uAD6C\uC18D \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\uFF1B</p>\n\t\t<p>3. \uADC0\uD558\uB294 \uC81C\uC678 \uB41C \uC0AC\uB78C\uC774 \uC544\uB2D9\uB2C8\uB2E4 (\uBCF8 \uACC4\uC57D\uC11C\uC5D0 \uC815\uC758 \uB41C\uB300\uB85C)\u3002</p>\n\t\t <p>4. \uBCF8 \uACC4\uC57D\uC11C\uB294 \uC5B8\uC81C\uB4E0\uC9C0 \uC800\uD76C\uAC00 \uC5C5\uB370\uC774\uD2B8 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC1C\uC815 \uB41C \uACC4\uC57D\uC11C\uAC00 RETC Ecology\uC5D0 \uAC8C\uC2DC\uB418\uBA74 \uCD94\uD6C4 \uACF5\uC9C0\uC5C6\uC774 \uC989\uC2DC \uC790\uB3D9\uC73C\uB85C \uD6A8\uB825\uC744 \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uD68C\uC0AC\uAC00 \uC218\uC815 \uB41C \uACC4\uC57D \uC870\uAC74\uC744 \uBC1C\uD45C \uD55C \uD6C4\uC5D0 \uC218\uC815 \uB41C \uC870\uAC74\uC744 \uC218\uB77D\uD558\uC9C0 \uC54A\uC73C\uBA74 \uC989\uC2DC RETC \uC0DD\uD0DC\uACC4 \uC0AC\uC6A9\uC744 \uC911\uB2E8\uD558\uC2ED\uC2DC\uC624. RETC Eco\uB97C \uACC4\uC18D \uC0AC\uC6A9\uD558\uBA74 \uAC1C\uC815 \uB41C \uACC4\uC57D\uC744 \uC218\uB77D \uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uB429\uB2C8\uB2E4.\u3002</p>\n\t\t"), _defineProperty(_message, "protocol04", "\uB458\uC9F8, \uC815\uC758 "), _defineProperty(_message, "protocol05", "<p>1.RETC \uC0DD\uD0DC\uD559 (RETC Ecology) : RETC \uC9C0\uAC11, \uC790\uC0B0 \uD1B5\uACC4, \uC790\uC0B0 \uAC70\uB798, \uD22C\uC790 \uB4F1 \uBE14\uB85D \uCCB4\uC778\uC744 \uAE30\uBC18\uC73C\uB85C \uD68C\uC0AC\uC5D0\uC11C \uAC1C\uBC1C \uD55C \uAD11\uC0B0 \uC81C\uD488\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4.</p> \n\t\t<p>2. \uC0AC\uC6A9\uC790 : \uAD00\uB828 \uAD6D\uAC00 \uBC0F \uAE30\uD0C0 \uAD6D\uAC00\uC758 \uBC95\uB960, \uADDC\uC815 \uBC0F \uC815\uCC45\uC5D0 \uB530\uB77C \uAC1C\uC778 \uC815\uBCF4 \uC720\uCD9C \uC758\uBB34\uB97C \uC774\uD589\uD558\uAE30 \uC704\uD574 \uD68C\uC0AC\uC640 \uD611\uB825\uD574\uC57C\uD558\uB294 \uC0AC\uC6A9\uC790\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.\u3002 </p>\n\t\t<p>3. \uC81C\uC678 \uB41C \uC0AC\uB78C\uFF1A</p>\n\t\t <p>1. \uBCF8 \uACC4\uC57D\uC744 \uCCB4\uACB0 \uD560 \uBC95\uC801 \uBC0F \uC758\uC2DD\uC801 \uB2A5\uB825\uC744 \uC9C0\uB2CC \uC790\uC5F0\uC778 \uC774\uC678\uC758 \uC778\uBB3C\uFF1B</p>\n\t\t <p>2. \uBCF8 \uACC4\uC57D, \uBC95\uB960, \uADDC\uC81C \uC694\uAD6C \uC0AC\uD56D \uB610\uB294 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC801\uC6A9\uB418\uB294 \uAD00\uD560\uAD8C\uC758 \uACB0\uACFC\uB85C \uAE08\uC9C0 \uB41C, \uC81C\uD55C\uB41C, \uBB34\uBA74\uD5C8 \uB610\uB294 \uBB34\uC870\uAC74 (\uBCF8 \uACC4\uC57D\uC5D0 \uC815\uC758 \uB41C \uBC14\uB300\uB85C) \uC5B4\uB5A0\uD55C \uD615\uD0DC \uB098 \uC218\uB2E8\uC73C\uB85C\uB3C4 \uC804\uCCB4\uC801\uC73C\uB85C \uB610\uB294 \uBD80\uBD84\uC801\uC73C\uB85C \uAE08\uC9C0\uB429\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\u3002 </p>\n\t\t<p>3. \uD074\uB77C\uC6B0\uB4DC \uC9C0\uAC11 : \uAC1C\uC778 \uD0A4\uB294 \uD074\uB77C\uC6B0\uB4DC\uC5D0 \uC800\uC7A5\uB418\uACE0 \uC554\uD638\uD654 \uB41C \uD558\uB4DC\uC6E8\uC5B4 \uC7A5\uCE58\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4\u3002</p>\n\t\t<p>4. \uC6D4\uB81B \uBE44\uBC00\uBC88\uD638 : RETC \uC5D0\uCF54 \uC9C0\uAC11\uC744 \uB9CC\uB4E4 \uB54C \uACB0\uC815\uD55C \uBE44\uBC00\uBC88\uD638\uB85C \uAC1C\uC778 \uD0A4\uB97C \uC554\uD638\uD654\uD558\uACE0 \uBCF4\uD638\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.\u3002</p>\n\t\t<p>5. \uB514\uC9C0\uD138 \uD1A0\uD070 : \uD604\uC7AC RETC Eco Wallet\uC5D0\uC11C \uC9C0\uC6D0\uD558\uB294 \uB514\uC9C0\uD138 \uD1A0\uD070 \uC720\uD615\uC744 \uB9D0\uD558\uBA70 \uAC70\uB798\uAC00 \uC644\uB8CC\uB418\uBA74 \uAC70\uB798\uAC00 \uC644\uB8CC\uB418\uBA74 \uD574\uB2F9 \uD1B5\uD654 \uC790\uC5D0\uAC8C \uB514\uC9C0\uD138 \uD1B5\uD654\uAC00 \uC81C\uACF5\uB429\uB2C8\uB2E4.</p>\n\t\t<p>6. \uBA54\uC2DC\uC9C0 : \uC0AC\uC6A9\uC790\uAC00 \uD68C\uC0AC\uC758 \uC815\uBCF4 \uB610\uB294 \uC54C\uB9BC\uC744\uBC1B\uC744 \uC218\uC788\uB294 \uC774\uBA54\uC77C\uC785\uB2C8\uB2E4. </p>\n\t\t"), _defineProperty(_message, "protocol06", "\uC14B\uC9F8, \uB77C\uC774\uC13C\uC2A4"), _defineProperty(_message, "protocol07", "\uADC0\uD558\uC758 \uB3D9\uC758\uC5D0 \uB530\uB77C RETC Eco Wallet\uC740 \uADC0\uD558\uC5D0\uAC8C RETC Eco Wallet \uBC0F \uAD00\uB828 \uC11C\uBE44\uC2A4 \uC0AC\uC6A9\uC5D0 \uB300\uD55C \uC81C\uD55C\uB41C \uAD8C\uB9AC\uB97C \uBD80\uC5EC\uD569\uB2C8\uB2E4. \uC774 \uC0AC\uC6A9\uAD8C\uC740 \uADC0\uD558\uC5D0\uAC8C \uAC1C\uC778\uC801\uC73C\uB85C \uBD80\uC5EC\uB418\uBA70 \uC870\uAC74\uBD80, \uBE44 \uB3C5\uC810\uC801\uC774\uBA70 \uC591\uB3C4\uAC00 \uBD88\uAC00\uB2A5\uD558\uBA70 CoinBank\uB294\uC774 \uD5C8\uAC00\uB97C \uCCA0\uD68C \uD560 \uAD8C\uB9AC\uAC00 \uC788\uC73C\uBA70 \uADC0\uD558\uB294 \uBCF8 \uACC4\uC57D\uC758 \uBAA8\uB4E0 \uC870\uD56D\uC744 \uC900\uC218\uD574\uC57C\uD569\uB2C8\uB2E4. \uADC0\uD558\uC758 \uB77C\uC774\uC13C\uC2A4\uB294 RETC Eco Wallet \uB610\uB294 \uAD00\uB828 \uC11C\uBE44\uC2A4\uC758 \uC18C\uC720\uAD8C\uC744 \uB098\uD0C0\uB0B4\uC9C0 \uC54A\uC73C\uBA70, \uADC0\uD558\uAC00 \uBCF8 \uACC4\uC57D \uC870\uAC74\uC744 \uC704\uBC18\uD560 \uACBD\uC6B0 RETC Eco Wallet\uC740 \uC11C\uBE44\uC2A4\uB97C \uC77C\uC2DC \uC911\uC9C0, \uBCC0\uACBD, \uC911\uB2E8, \uC81C\uD55C \uB610\uB294 \uD574\uC9C0 \uD560 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. RETC Eco Wallet \uAC04\uC758 \uC11C\uBE44\uC2A4 \uAD00\uACC4\uB97C \uBCC0\uACBD, \uC911\uB2E8 \uB610\uB294 \uC885\uB8CC \uD560 \uB54C. \uC801\uC808\uD55C \uC2DC\uAC04 \uB0B4\uC5D0 \uC9C0\uAC11 \uC815\uBCF4\uB97C \uB0B4\uBCF4\uB0BC \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4."), _defineProperty(_message, "protocol08", "\uB137\uC9F8, \uC11C\uBE44\uC2A4 \uB0B4\uC6A9"), _defineProperty(_message, "protocol09", "<p>1. \uC804\uC1A1, \uC218\uC9D1. RETC Eco Wallet\uC758 \uC804\uC1A1 \uBC0F \uC218\uC9D1 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uC5EC \uB514\uC9C0\uD138 \uD1A0\uD070\uC744 \uAD00\uB9AC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC989, \uC804\uC790 \uC11C\uBA85\uC5D0 \uAC1C\uC778 \uD0A4\uB97C \uC0AC\uC6A9\uD558\uACE0 \uAD00\uB828 \uBE14\uB85D \uCCB4\uC778\uC758 \uC6D0\uC7A5\uC744 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC1A1\uAE08\uC774\uB780 \uC9C0\uAE09 \uC791\uC5C5\uC790\uAC00 \uC1A1\uAE08 \uC791\uC5C5\uC5D0 \uC218\uCDE8\uC778\uC758 \uBE14\uB85D \uCCB4\uC778 \uC8FC\uC18C\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uB294 \uC758\uBBF8\uC774\uBA70, '\uC1A1\uAE08'\uB3D9\uC791\uC5D0\uB294 \uAD00\uB828 \uBE14\uB85D \uCCB4\uC778 \uC2DC\uC2A4\uD15C\uC758 \uBD84\uBC30 \uC6D0\uC7A5\uC5D0\uC788\uB294 \uAC70\uB798\uC758 \uC720\uD6A8\uD55C \uAE30\uB85D\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4.</p>\n\t\t<p>2. \uAC70\uB798 \uB0B4\uC5ED. Blockchain \uC2DC\uC2A4\uD15C\uC744 \uD1B5\uD574 \uAC70\uB798 \uB0B4\uC5ED \uC804\uCCB4 \uB610\uB294 \uC77C\uBD80\uB97C \uBCF5\uC0AC\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC0AC\uC6A9\uC790\uB294 \uBE14\uB85D \uCCB4\uC778\uC758 \uCD5C\uC2E0 \uD2B8\uB79C\uC7AD\uC158 \uB808\uCF54\uB4DC\uB97C \uAC00\uC838\uC640\uC57C\uD569\uB2C8\uB2E4.</p>\n\t\t<p>3.\uC2F8\uC774 \uC9C0\uAC11. RETC Eco Wallet\uC744 \uC5F4\uBA74\uC774 \uC11C\uBE44\uC2A4\uB97C\uBC1B\uC740 \uD6C4 RETC Eco Wallet Management\uC5D0 \uB514\uC9C0\uD138 \uD1A0\uD070\uC744 \uC704\uD0C1 \uD55C \uAC83\uC73C\uB85C \uAC04\uC8FC\uB429\uB2C8\uB2E4. </p>\n\t\t<p>4. \uC790\uC0B0 \uD1B5\uACC4. \uC790\uC0B0 \uD1B5\uACC4 \uC11C\uBE44\uC2A4\uB97C \uC0AC\uC6A9\uD558\uBA74 \uAD50\uD658\uAE30\uB97C \uBC14\uC778\uB4DC\uD558\uACE0 RETC \uC5D0\uCF54 \uC9C0\uAC11\uC744 \uC5F4\uC5B4 \uB2E4\uC911 \uCC44\uB110 \uBE44\uC6A9 \uC190\uC2E4\uC744 \uACC4\uC0B0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p>\n\t\t"), _defineProperty(_message, "protocol10", "5 \uAC00\uC9C0 \uC704\uD5D8 \uD301"), _defineProperty(_message, "protocol11", "\uADC0\uD558\uB294 \uB514\uC9C0\uD138 \uD1A0\uD070 \uBD84\uC57C\uC758 \uBC95\uB960, \uADDC\uC815 \uBC0F \uC815\uCC45\uC774 \uC544\uC9C1 \uC720\uD6A8\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0\uC774 \uBD84\uC57C\uC758 \uB514\uC9C0\uD138 \uD1A0\uD070\uC774 \uBBF8\uC644\uC131 \uBC0F \uAE30\uC220\uC801 \uBD88\uC548\uC815\uACFC \uAC19\uC740 \uC8FC\uC694 \uC704\uD5D8\uC744 \uC57C\uAE30 \uD560 \uC218 \uC788\uC74C\uC744 \uC774\uD574\uD558\uACE0 \uC774\uD574\uD569\uB2C8\uB2E4. \uB610\uD55C \uB514\uC9C0\uD138 \uD1A0\uD070\uC758 \uAC00\uACA9 \uBCC0\uB3D9\uC131\uC774 \uB2E4\uB978 \uAE08\uC735 \uC790\uC0B0\uBCF4\uB2E4 \uD6E8\uC52C \uB192\uB2E4\uB294 \uAC83\uB3C4 \uC54C\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC7AC\uBB34 \uC0C1\uD669 \uBC0F \uC704\uD5D8 \uC120\uD638\uB3C4\uC5D0 \uB530\uB77C \uD569\uB2F9\uD55C \uBC29\uC2DD\uC73C\uB85C \uB514\uC9C0\uD138 \uD1A0\uD070\uC744 \uBCF4\uC720\uD558\uAC70\uB098 \uCC98\uBD84\uD558\uB3C4\uB85D \uC120\uD0DD\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD569\uB2C8\uB2E4. \uB610\uD55C RETC Ecology\uAC00 \uC81C\uACF5\uD558\uB294 \uC2DC\uC7A5\uBCF4\uAE30 \uAE30\uB2A5\uC740 \uC77C\uBD80 \uAC70\uB798\uC18C\uC758 \uB514\uC9C0\uD138 \uD1A0\uD070 \uD658\uC728 \uC815\uBCF4 \uAC80\uC0C9 \uACB0\uACFC \uC77C \uBFD0\uC774\uBA70 \uCD5C\uC2E0 \uC2DC\uC7A5 \uB610\uB294 \uCD5C\uC0C1\uC758 \uC81C\uC548\uC744 \uB098\uD0C0\uB0B4\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4. RETC \uC0DD\uD0DC\uD559\uC5D0\uC11C RETC \uC0DD\uD0DC\uD559\uC744 \uC0AC\uC6A9\uD568\uC5D0 \uB530\uB978 \uBAA8\uB4E0 \uACB0\uACFC\uC5D0 \uB300\uD55C \uCC45\uC784\uC740 \uADC0\uD558\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uD301 \uC678\uC5D0\uB3C4 RETC Ecology\uB97C \uC0AC\uC6A9\uD55C\uB2E4\uB294 \uAC83\uC740 \uD574\uB2F9 \uC704\uD5D8 \uACF5\uAC1C\uB97C \uC77D\uACE0 \uC218\uB77D\uD588\uC74C\uC744 \uC758\uBBF8\uD569\uB2C8\uB2E4.\uFF08Risk Disclosure Statement) \u3007"), _defineProperty(_message, "protocol12", "6. \uADC0\uD558\uC758 \uAD8C\uB9AC\uC640 \uC758\uBB34"), _defineProperty(_message, "protocol13", "<p>1. \uC9C0\uAC11 \uB9CC\uB4E4\uAE30 \uB610\uB294 \uAC00\uC838 \uC624\uAE30 : \uD734\uB300 \uAE30\uAE30\uC5D0\uC11C RETC Eco\uB97C \uD1B5\uD574 \uC9C0\uAC11\uC744 \uB9CC\uB4E4\uAC70\uB098 \uAC00\uC838\uC62C \uAD8C\uB9AC\uAC00 \uC788\uC73C\uBA70, \uC9C0\uAC11\uC758 \uC9C0\uAC11 \uC554\uD638 \uBC0F \uAE30\uD0C0 \uC815\uBCF4\uB97C \uC124\uC815\uD560 \uAD8C\uB9AC\uAC00 \uC788\uC73C\uBA70, RETC Eco \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC744 \uD1B5\uD574 \uD574\uB2F9 \uC9C0\uC5ED\uC5D0\uC11C \uC790\uC2E0\uC758 \uC9C0\uAC11\uC744 \uC0AC\uC6A9\uD560 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uBE14\uB85D \uCCB4\uC778\uC758 \uC804\uC1A1 \uBC0F \uCF5C\uB809\uC158\u3002</p>\n\t\t<p>2. \uC0AC\uC6A9\uC790 \uC778\uC99D : \uAD00\uB828 \uBC95\uB960 \uBC0F \uADDC\uC815\uC758 \uC694\uAD6C \uC0AC\uD56D\uC5D0 \uB530\uB77C \uD2B9\uC815 \uC0AC\uC6A9\uC790\uB294 RETC Ecology\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uAD00\uB828 \uC11C\uBE44\uC2A4\uB97C \uC0AC\uC6A9\uD560 \uB54C RETC Ecology\uC758 \uD504\uB86C\uD504\uD2B8\uC5D0 \uB530\uB77C \uC801\uC808\uD55C \uC2E0\uC6D0 \uD655\uC778\uC744 \uC644\uB8CC\uD574\uC57C\uD558\uBA70 \uC774\uB984, ID \uBC88\uD638, \uD734\uB300 \uC804\uD654 \uB4F1\uC744 \uD3EC\uD568\uD558\uC5EC \uC81C\uCD9C\uD558\uB3C4\uB85D \uC694\uCCAD\uD574\uC57C\uD569\uB2C8\uB2E4. \uBC88\uD638 \uBC0F \uC740\uD589 \uCE74\uB4DC \uBC88\uD638 \uC815\uBCF4\uC640 \uAC19\uC740 \uAC1C\uC778 \uC815\uBCF4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uD2B9\uC815 \uC0AC\uC6A9\uC790\uAC00 \uC11C\uBE44\uC2A4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC73C\uBA70 \uD2B9\uC815 \uC0AC\uC6A9\uC790\uC758 \uC9C0\uC5F0\uC73C\uB85C \uC778\uD55C \uC190\uC2E4\uC758 \uC704\uD5D8\uC740 \uC0AC\uC6A9\uC790 \uBCF8\uC778\uC774 \uAC10\uC218\uD574\uC57C\uD569\uB2C8\uB2E4.</p>\n\t\t <p>3. \uC218\uAE08, \uC1A1\uAE08 : RETC Eco Service\uC5D0 \uC0AC\uC6A9\uD560 \uC218\uC788\uB294 \uD658\uC2B9 \uD55C\uB3C4 \uBC0F \uD06C\uB808\uB527 \uC218\uB97C \uC54C\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uD658\uC2B9 \uC11C\uBE44\uC2A4, \uADDC\uC815 \uC694\uAD6C \uC0AC\uD56D, \uC774\uC804 \uBAA9\uC801, RETC \uC0DD\uD0DC\uC801 \uC704\uD5D8 \uAD00\uB9AC, \uC778\uC99D \uBC0F \uAE30\uD0C0 \uC774\uC720\uAC00 \uB2E4\uB985\uB2C8\uB2E4. RETC \uC5D0\uCF54 \uC804\uC1A1 \uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD558\uBA74 \uC798\uBABB\uB41C \uC804\uC1A1 \uC8FC\uC18C\uB97C \uC785\uB825\uD588\uAE30 \uB54C\uBB38\uC5D0 \uC2E4\uC218\uB85C \uC778\uD55C \uACB0\uACFC\uAC00 \uBC1C\uC0DD\uD574\uC57C\uD569\uB2C8\uB2E4 (\uC804\uC1A1 \uC8FC\uC18C\uB97C \uC798\uBABB \uC785\uB825\uD588\uAE30 \uB54C\uBB38\uC5D0 \uC1A1\uAE08\uC744 \uC120\uD0DD\uD558\uB294 \uACBD\uC6B0\uB97C \uD3EC\uD568\uD558\uB418 \uC774\uC5D0 \uAD6D\uD55C\uB418\uC9C0 \uC54A\uC74C) \uB178\uB4DC \uC11C\uBC84\uC758 \uBB38\uC81C\uC810).</p>\n\t\t <p>4. \uBC95\uC801 \uC900\uC218 : RETC \uC0DD\uD0DC\uACC4\uC5D0\uC11C \uC791\uC5C5\uD558\uAC70\uB098 RETC Ecology Smart Contract\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC70\uB798\uD558\uB294 \uACBD\uC6B0 \uAD00\uB828 \uBC95\uADDC \uBC0F \uAD6D\uAC00 \uC815\uCC45\uC744 \uC900\uC218\uD574\uC57C\uD569\uB2C8\uB2E4.</p>\n\t\t <p>5. \uD68C\uC0AC\uB294 \uB2E4\uB978 \uD130\uBBF8\uB110 \uC7A5\uCE58\uC5D0 \uB300\uD574 \uC11C\uB85C \uB2E4\uB978 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uBC84\uC804\uC744 \uAC1C\uBC1C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2E4\uC81C \uD544\uC694\uC5D0 \uB530\uB77C \uC124\uCE58\uC5D0 \uC801\uD569\uD55C \uBC84\uC804\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uB3C4\uB85D \uC120\uD0DD\uD574\uC57C\uD569\uB2C8\uB2E4. \uD569\uBC95\uC801\uC73C\uB85C \uC2B9\uC778\uB418\uC9C0 \uC54A\uC740 \uC81C 3 \uC790\uC758 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uC640 \uB3D9\uC77C\uD55C \uC774\uB984\uC758 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB610\uB294 \uC124\uCE58 \uD504\uB85C\uADF8\uB7A8\uC744 \uC5BB\uC740 \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uC758 \uC815\uC0C1\uC801\uC778 \uC0AC\uC6A9\uC744 \uBCF4\uC7A5 \uD560 \uC218 \uC5C6\uC73C\uBA70 \uBCF4\uC548\uC744 \uBCF4\uC7A5 \uD560 \uC218 \uC5C6\uC73C\uBBC0\uB85C \uC190\uC2E4\uC774 \uADC0\uD558\uB97C \uBD80\uB2F4\uD569\uB2C8\uB2E4. .</p>\n\t\t <p>6. \uC0C8 \uBC84\uC804\uC758 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uAC00 \uCD9C\uC2DC \uB41C \uD6C4\uC5D0\uB294 \uC774\uC804 \uBC84\uC804\uC758 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC774\uC804 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uC758 \uBCF4\uC548\uC744 \uBCF4\uC7A5\uD558\uC9C0 \uC54A\uC73C\uBA70 \uAC00\uC6A9\uC131\uC744 \uACC4\uC18D \uC81C\uACF5\uD558\uACE0 \uD574\uB2F9 \uACE0\uAC1D \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC5B8\uC81C\uB4E0\uC9C0 \uCD5C\uC2E0 \uBC84\uC804\uC744 \uD655\uC778\uD558\uACE0 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uC2ED\uC2DC\uC624.</p>\n\t\t"), _defineProperty(_message, "protocol14", "7. \uC11C\uBE44\uC2A4\uC758 \uBCC0\uACBD, \uC911\uB2E8 \uB610\uB294 \uD574\uC9C0"), _defineProperty(_message, "protocol15", "<p>1. \uADC0\uD558\uB294 \uD68C\uC0AC\uAC00 \uC7AC\uB7C9\uC5D0 \uB530\uB77C \uC77C\uC2DC\uC801\uC73C\uB85C \uC77C\uBD80 \uC11C\uBE44\uC2A4 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uAC70\uB098 \uD5A5\uD6C4 \uC77C\uBD80 \uC11C\uBE44\uC2A4 \uAE30\uB2A5\uC744 \uC77C\uC2DC \uC911\uC9C0\uD558\uAC70\uB098 \uC0C8\uB85C\uC6B4 \uC11C\uBE44\uC2A4 \uAE30\uB2A5\uC744 \uC5F4 \uC218 \uC788\uC74C\uC744 \uC774\uD574\uD558\uACE0 \uC774\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4. \uC11C\uBE44\uC2A4 \uBCC0\uACBD\uC2DC RETC Ecology\uB97C \uACC4\uC18D \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB3C4 \uBCF8 \uACC4\uC57D \uB610\uB294 \uBCF8 \uACC4\uC57D\uC758 \uC870\uD56D\uC5D0 \uB3D9\uC758\uD558\uB294 \uAC83\uC73C\uB85C \uAC04\uC8FC\uB429\uB2C8\uB2E4.\u3002</p>\n\t\t <p>2. RETC \uC0DD\uD0DC\uACC4\uC758 \uC624\uC6A9\uC774\uB098 \uB514\uC9C0\uD138 \uD1A0\uD070\uC758 \uBCF4\uC548 \uC704\uD5D8\uC744 \uD53C\uD558\uAE30 \uC704\uD574 Blockchain\uC5D0 \uB300\uD55C \uAE30\uBCF8 \uC9C0\uC2DD\uC5C6\uC774 RETC \uC0DD\uD0DC\uACC4\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC544\uC57C\uD569\uB2C8\uB2E4. \uBE14\uB85D \uCCB4\uC778\uC5D0 \uB300\uD55C \uAE30\uBCF8 \uC9C0\uC2DD\uC774\uC5C6\uB294 \uC0AC\uC6A9\uC790\uB97C \uC704\uD574 \uD68C\uC0AC\uB294 \uC77C\uBD80 \uB610\uB294 \uBAA8\uB4E0 \uC11C\uBE44\uC2A4 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uB294 \uAC83\uC744 \uAC70\uBD80 \uD560 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</p>\n\t\t <p>3. \uADC0\uD558\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC0C1\uD669\uC5D0\uC11C \uD68C\uC0AC\uAC00 \uC911\uB300\uD55C \uBD88\uB9AC\uD55C \uBCC0\uACBD \uC0AC\uD56D\uC5D0 \uC801\uC6A9\uB418\uB294 \uBC95\uB960\uC774\uB098 \uC815\uCC45\uC758 \uC81C\uACF5\uC744 \uC911\uC9C0 \uD560 \uAC83\uC784\uC744 \uC774\uD574\uD569\uB2C8\uB2E4.\uFF1B</p><p> 4. \uD68C\uC0AC\uAC00 \uD1B5\uC81C\uD558\uAC70\uB098 \uD569\uB9AC\uC801\uC73C\uB85C \uC608\uCE21\uD560 \uC218\uC5C6\uB294 \uAE30\uD0C0 \uC0C1\uD669.</p> \n\t\t<p>4. \uD68C\uC0AC\uB294 \uB2E4\uC74C \uC870\uAC74\uC774 \uBC1C\uC0DD\uD560 \uB54C RETC Ecology\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790\uC758 \uC77C\uBD80 \uB610\uB294 \uBAA8\uB4E0 \uAE30\uB2A5\uC744 \uC77C\uBC29\uC801\uC73C\uB85C \uC911\uC9C0 \uB610\uB294 \uC885\uB8CC \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.\uFF1A </p>\n\t\t<p>1. \uC0AC\uC6A9\uC790 \uC0AC\uB9DD\uFF1B</p>\n\t\t <p>2. \uB2E4\uB978 \uC0AC\uB78C\uC758 \uC9C0\uAC11 \uC815\uBCF4 \uB610\uB294 \uD734\uB300 \uAE30\uAE30 \uD6D4\uCE58\uAE30\uFF1B</p>\n\t\t <p>3. RETC Ecology\uC758 \uC798\uBABB\uB41C \uAC1C\uC778 \uC815\uBCF4 \uC785\uB825\uFF1B</p>\n\t\t <p>4. RETC \uC0DD\uD0DC\uACC4\uC758 \uD544\uC218 \uC5C5\uB370\uC774\uD2B8 \uC791\uC5C5\uC744 \uAC70\uBD80\uD569\uB2C8\uB2E4.\uFF1B</p>\n\t\t <p>5. \uBD88\uBC95 \uB610\uB294 \uBC94\uC8C4 \uD65C\uB3D9\uC5D0 RETC Ecology \uC0AC\uC6A9\uFF1B </p>\n\t\t<p>6. \uB2E4\uB978 \uC0AC\uC6A9\uC790\uAC00 RETC \uC0DD\uD0DC\uACC4\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uBABB\uD558\uAC8C \uBC29\uC9C0 ; </p>\n\t\t<p>7. \uD68C\uC0AC\uC758 \uC9C1\uC6D0 \uB610\uB294 \uACBD\uC601\uC9C4\uC744 \uC798\uBABB \uC8FC\uC7A5\uD558\uB294 \uD589\uC704.</p>\n\t\t <p>8. \uCEF4\uD4E8\uD130 \uC2DC\uC2A4\uD15C\uC758 \uC801\uC808\uD55C \uAE30\uB2A5\uC744 \uACF5\uACA9, \uCE68\uC785, \uBCC0\uACBD \uB610\uB294 \uC704\uD611 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p> 9. \u5229\u7528RETC\u751F\u6001\u5BA3\u4F20\u5783\u573E\u5E7F\u544A\uFF1B</p>\n\t\t<p>9.\uC18C\uBB38\uC744 \uD37C \uB728\uB9AC\uACE0 \uD68C\uC0AC\uC640 RETC \uC0DD\uD0DC \uCE5C\uC120\uC5D0 \uC190\uD574\uB97C \uC785\uD788\uC2ED\uC2DC\uC624.</p>\n\t\t<p>10.\uC704\uBC18, \uBCF8 \uACC4\uC57D \uC704\uBC18 \uBC0F \uD68C\uC0AC\uAC00 \uAE30\uB2A5\uC744 \uC815\uC9C0\uD574\uC57C\uD55C\uB2E4\uACE0 \uD569\uB9AC\uC801\uC73C\uB85C \uD310\uB2E8\uD55C \uC0C1\uD669.</p>\n\t\t<p>11. \uD68C\uC0AC\uAC00 \uC11C\uBE44\uC2A4\uB97C \uBCC0\uACBD, \uC911\uB2E8 \uB610\uB294 \uC885\uB8CC\uD558\uB294 \uACBD\uC6B0 \uC801\uC808\uD55C \uC2DC\uAC04 \uB0B4\uC5D0 \uC9C0\uAC11\uACFC \uAC19\uC740 \uC815\uBCF4\uB97C \uB0B4\uBCF4\uB0BC \uC218\uC788\uB294 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</p>\n\t\t"), _defineProperty(_message, "protocol16", "8. \uC9C4\uC220 \uBC0F \uBCF4\uC99D"), _defineProperty(_message, "protocol17", "<p>1.\uADC0\uD558\uAC00 \uC0B4\uACE0\uC788\uB294 \uAD6D\uAC00 \uB610\uB294 \uC9C0\uC5ED\uC758 \uBC95\uB960 \uBC0F \uADDC\uC815\uC744 \uC900\uC218\uD558\uACE0 \uBD88\uBC95\uC801 \uC778 \uC6A9\uB3C4\uB85C RETC \uC0DD\uD0DC\uACC4\uB97C \uC0AC\uC6A9\uD558\uAC70\uB098 RETC \uC0DD\uD0DC\uACC4\uB97C \uBD88\uBC95\uC801\uC73C\uB85C \uC0AC\uC6A9\uD558\uC9C0 \uB9C8\uC2ED\uC2DC\uC624.</p> \n\t\t<p>2. \uADC0\uD558\uB294 RETC \uC0DD\uD0DC\uD559\uC744 \uC0AC\uC6A9\uD558\uC5EC \uBD88\uBC95\uC801 \uB610\uB294 \uBC94\uC8C4 \uC801 \uD589\uC704\uC5D0 \uC885\uC0AC \uD560 \uC218 \uC5C6\uC73C\uBA70, \uC774\uC5D0 \uAD6D\uD55C\uB418\uC9C0\uB294 \uC54A\uC2B5\uB2C8\uB2E4.\uFF1A</p>\n\t\t <p>1. \uADC0\uD558\uC758 \uAD6D\uAC00 \uB610\uB294 \uC9C0\uC5ED\uC758 \uAD6D\uAC00 \uC548\uBCF4\uB97C \uC704\uD611\uD558\uACE0, \uAD6D\uAC00 \uAE30\uBC00\uC744 \uC720\uCD9C\uD558\uBA70, \uAD6D\uAC00 \uAD8C\uB825\uC744 \uC804\uBCF5\uC2DC\uD0A4\uACE0, \uAD6D\uAC00 \uD1B5\uD569\uC744 \uC57D\uD654\uC2DC\uD0B5\uB2C8\uB2E4.\uFF1B</p>\n\t\t <p>2. \uC790\uAE08 \uC138\uD0C1, \uBD88\uBC95 \uC790\uAE08 \uBAA8\uAE08 \uB4F1 \uBAA8\uB4E0 \uBC94\uC8C4 \uD589\uC704\uC5D0 \uC885\uC0AC\uD558\uC2ED\uC2DC\uC624.\uFF1B </p>\n\t\t<p>3. \uC790\uB3D9\uD654 \uB41C \uD504\uB85C\uADF8\uB7A8, \uC18C\uD504\uD2B8\uC6E8\uC5B4, \uC5D4\uC9C4, \uC6F9 \uD06C\uB864\uB7EC, \uC6F9 \uBD84\uC11D \uB3C4\uAD6C, \uB370\uC774\uD130 \uB9C8\uC774\uB2DD \uB3C4\uAD6C \uB610\uB294 \uC720\uC0AC\uD55C \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4\uC5D0 \uC561\uC138\uC2A4\uD558\uACE0 \uD68C\uC0AC\uC5D0\uC11C \uC81C\uACF5 \uD55C \uCEE8\uD150\uCE20\uB97C \uC218\uC9D1 \uB610\uB294 \uCC98\uB9AC\uD568\uC73C\uB85C\uC368 \uC0AC\uC6A9\uC790\uB97C \uAC1C\uC785\uD558\uAC70\uB098 \uBC29\uD574\uD558\uB824\uACE0 \uC2DC\uB3C4\uD558\uC2ED\uC2DC\uC624. </p><p>4. \uB3C4\uBC15\uC5D0 \uAD00\uD55C \uC815\uBCF4\uB97C \uC81C\uACF5\uD558\uAC70\uB098 \uB2E4\uB978 \uC0AC\uB78C\uB4E4\uC744 \uB3C4\uBC15\uC5D0 \uCC38\uC5EC\uD558\uB3C4\uB85D \uC720\uB3C4\uD558\uC2ED\uC2DC\uC624.\uFF1B</p> \n\t\t<p>5. \uB2E4\uB978 \uC0AC\uB78C\uB4E4\uC758 RETC \uC5D0\uCF54 \uC9C0\uAC11\uC744 \uCE68\uC785\uD558\uC5EC \uB514\uC9C0\uD138 \uD1A0\uD070\uC744 \uD6D4\uCE69\uB2C8\uB2E4. </p>\n\t\t<p>6. \uAC70\uB798 \uC0C1\uB300\uBC29\uC774 \uC8FC\uC7A5\uD55C \uAC70\uB798 \uB0B4\uC6A9 \uB610\uB294 \uC9C4\uC2E4\uD558\uC9C0 \uC54A\uC740 \uAC70\uB798\uC640 \uC77C\uCE58\uD558\uC9C0 \uC54A\uB294 \uAC70\uB798 \uC218\uD589</p>\n\t\t <p>7. RETC \uC0DD\uD0DC\uACC4 \uC11C\uBE44\uC2A4 \uC2DC\uC2A4\uD15C \uBC0F \uB370\uC774\uD130\uB97C \uCE68\uD574\uD558\uAC70\uB098 \uCE68\uD574 \uD560 \uC218\uC788\uB294 \uD589\uC704\uC5D0 \uC885\uC0AC\uD558\uC2ED\uC2DC\uC624.\uFF1B</p>\n\t\t <p>8. \uB2E4\uB978 \uC0AC\uB78C\uB4E4\uC740 \uBD80\uC801\uC808\uD558\uB2E4\uACE0 \uBBFF\uC744\uB9CC\uD55C \uC815\uB2F9\uD55C \uC774\uC720\uAC00 \uC788\uC2B5\uB2C8\uB2E4.\u3002 </p>\n\t\t<p>3. \uADC0\uD558\uB294 \uAD00\uB828 \uBC95\uB960 (\uAD00\uC138 \uBC0F / \uB610\uB294 \uC870\uC138 \uADDC\uC815\uC744 \uD3EC\uD568\uD558\uB418 \uC774\uC5D0 \uAD6D\uD55C\uB418\uC9C0 \uC54A\uC74C) \uB610\uB294 \uBCF8 \uACC4\uC57D\uC758 \uC870\uD56D\uC744 \uC704\uBC18\uD560 \uACBD\uC6B0 \uC81C 3 \uC790 \uB610\uB294 \uD589\uC815 \uBD80\uC11C\uC758 \uC190\uC2E4, \uC190\uD574 \uBC30\uC0C1\uC744 \uACAA\uC744 \uAC83\uC744 \uC774\uD574\uD558\uACE0 \uC774\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4 \uCC98\uBC8C, \uD569\uB9AC\uC801\uC778 \uBCC0\uD638\uC0AC \uBE44\uC6A9\uC744 \uD3EC\uD568\uD558\uC5EC \uD68C\uC0AC\uC5D0 \uBCF4\uC0C1\uD574\uC57C\uD569\uB2C8\uB2E4. </p><p>4. \uADC0\uD558\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4 \uC218\uC218\uB8CC (\uD574\uB2F9\uB418\uB294 \uACBD\uC6B0)\uB97C \uC81C\uB54C \uC9C0\uBD88\uD574\uC57C\uD558\uBA70, \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uD68C\uC0AC\uB294 \uADC0\uD558\uC5D0\uAC8C \uC81C\uACF5\uB418\uB294 \uC11C\uBE44\uC2A4\uB97C \uC77C\uC2DC \uC911\uC9C0 \uD560 \uAD8C\uB9AC\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</p>\n\t\t"), _defineProperty(_message, "protocol18", "\uB098\uC778, \uAC1C\uC778 \uC815\uBCF4 \uCDE8\uAE09 \uBC29\uCE68"), _defineProperty(_message, "protocol19", "\uADC0\uD558\uAC00 \uB2F9\uC0AC\uC5D0 \uC81C\uACF5 \uD55C \uBAA8\uB4E0 \uB370\uC774\uD130 \uB610\uB294 \uC815\uBCF4\uB294 \uB610\uD55C \uBCF8 \uACC4\uC57D\uC758 \uC77C\uBD80\uC778 \uB2F9\uC0AC\uC758 \uAC1C\uC778 \uC815\uBCF4 \uBCF4\uD638 \uC815\uCC45 \uC778 RETC Eco-Privacy Policy\uC758 \uC801\uC6A9\uC744\uBC1B\uC2B5\uB2C8\uB2E4."), _defineProperty(_message, "protocol20", "X. \uBA74\uCC45 \uBC0F \uCC45\uC784 \uC81C\uD55C"), _defineProperty(_message, "protocol21", "<p>1. \uD68C\uC0AC\uB294 \uBCF8 \uACC4\uC57D\uC11C\uC5D0 \uBA85\uC2DC\uB41C \uC758\uBB34\uC5D0 \uB300\uD574\uC11C\uB9CC \uCC45\uC784\uC744\uC9D1\uB2C8\uB2E4.</p>\n\t\t <p>2. \uADC0\uD558\uB294 \uBC95\uC774 \uD5C8\uC6A9\uD558\uB294 \uD55C\uB3C4 \uB0B4\uC5D0\uC11C \uD604\uC7AC\uC758 \uCD5C\uCCA8\uB2E8 \uAE30\uC220 \uBC0F \uC870\uAC74\uC5D0 \uB530\uB77C RETC Eco-Services\uB9CC\uC744 \uC81C\uACF5 \uD560 \uC218 \uC788\uC74C\uC744 \uC774\uD574\uD558\uACE0 \uB3D9\uC758\uD569\uB2C8\uB2E4.</p>\n\t\t"), _defineProperty(_message, "protocol22", "XI. \uBA74\uCC45 \uBC0F \uCC45\uC784 \uC81C\uD55C"), _defineProperty(_message, "protocol23", "<p>1. \uD68C\uC0AC\uB294 \uBCF8 \uACC4\uC57D\uC11C\uC5D0 \uBA85\uC2DC\uB41C \uC758\uBB34\uC5D0 \uB300\uD574\uC11C\uB9CC \uCC45\uC784\uC744\uC9D1\uB2C8\uB2E4.</p>\n\t\t  <p>2. \uADC0\uD558\uB294 \uBC95\uC774 \uD5C8\uC6A9\uD558\uB294 \uD55C\uB3C4 \uB0B4\uC5D0\uC11C \uD604\uC7AC\uC758 \uCD5C\uCCA8\uB2E8 \uAE30\uC220 \uBC0F \uC870\uAC74\uC5D0 \uB530\uB77C RETC Eco-Services\uB9CC\uC744 \uC81C\uACF5 \uD560 \uC218 \uC788\uC74C\uC744 \uC774\uD574\uD558\uACE0 \uB3D9\uC758\uD569\uB2C8\uB2E4. \uD68C\uC0AC\uB294 RETC Ecology\uAC00 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC774\uC720\uB85C \uC778\uD574 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uC9C0 \uBABB\uD55C \uAC83\uC5D0 \uB300\uD574 \uCC45\uC784\uC744\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.     </p><p> 1. RETC \uC0DD\uD0DC\uACC4 \uC911\uB2E8 \uC2DC\uAC04 \uC720\uC9C0 \uAD00\uB9AC \uB610\uB294 \uC5C5\uADF8\uB808\uC774\uB4DC\uFF1B</p>\n\t\t<p>2. \uD0DC\uD48D, \uC9C0\uC9C4, \uD64D\uC218, \uBC88\uAC1C \uB610\uB294 \uD14C\uB7EC\uB85C \uC778\uD55C \uBD88\uAC00\uD56D\uB825\uFF1B </p>\n\t\t<p>3. \uBAA8\uBC14\uC77C \uC7A5\uCE58 \uD558\uB4DC\uC6E8\uC5B4 \uBC0F \uC18C\uD504\uD2B8\uC6E8\uC5B4, \uD1B5\uC2E0 \uD68C\uC120 \uBC0F \uC804\uC6D0 \uD68C\uC120\uC774 \uACE0\uC7A5\uB0AC\uC2B5\uB2C8\uB2E4. </p>\n\t\t<p>4. \uADC0\uD558\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4\uB97C \uBD80\uC801\uC808\uD558\uAC8C \uC0AC\uC6A9\uD558\uAC70\uB098 \uD68C\uC0AC\uAC00 \uC2B9\uC778\uD558\uAC70\uB098 \uC778\uC815\uD558\uC9C0 \uC54A\uC740 \uC11C\uBE44\uC2A4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4.</p>\n\t\t<p>5. \uCEF4\uD4E8\uD130 \uBC14\uC774\uB7EC\uC2A4, \uD2B8\uB85C\uC774 \uBAA9\uB9C8, \uC545\uC131 \uD504\uB85C\uADF8\uB7A8 \uACF5\uACA9, \uB124\uD2B8\uC6CC\uD06C \uC815\uCCB4, \uC2DC\uC2A4\uD15C \uBD88\uC548\uC815, \uC2DC\uC2A4\uD15C \uB610\uB294 \uC7A5\uCE58 \uC7A5\uC560, \uD1B5\uC2E0 \uC7A5\uC560, \uC815\uC804, \uC740\uD589 \uB610\uB294 \uC815\uBD80 \uC870\uCE58\uB85C \uC778\uD574</p>\n\t\t <p>6. \uD68C\uC0AC\uAC00 \uC6D0\uC778\uC774 \uC544\uB2CC \uB2E4\uB978 \uC774\uC720\u3002</p>\n\t\t  <p>3. \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC0C1\uD669\uC5D0 \uB300\uD574 \uCC45\uC784\uC744\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.\uFF1A </p>\n\t\t<p>1. \uC0AC\uC6A9\uC790\uC758 \uB514\uC9C0\uD138 \uD1A0\uD070\uC740 \uBAA8\uBC14\uC77C \uC7A5\uCE58\uB97C \uBD84\uC2E4\uD558\uACE0 \uC0AD\uC81C\uD558\uACE0 RETC \uC5D0\uCF54 \uC2DC\uC2A4\uD15C\uC744 \uBC31\uC5C5\uD558\uC9C0 \uC54A\uC558\uAE30 \uB54C\uBB38\uC5D0 \uC0AD\uC81C\uB418\uACE0 \uC9C0\uAC11\uC744 \uBC31\uC5C5\uD558\uC9C0 \uC54A\uC558\uC73C\uBA70 \uC9C0\uAC11 \uC554\uD638\uC640 \uB2C8\uBAA8\uB2C9\uC744 \uC78A\uC5B4 \uBC84\uB838\uC2B5\uB2C8\uB2E4.</p> \n\t\t<p>2. \uC9C0\uAC11 \uBE44\uBC00\uBC88\uD638, \uB2C8\uBAA8\uB2C9\uC744 \uB204\uC124\uD558\uAC70\uB098 \uB2E4\uB978 \uC0AC\uB78C\uC5D0\uAC8C \uD734\uB300 \uAE30\uAE30 \uB610\uB294 RETC \uC5D0\uCF54 \uC9C0\uAC11\uC744 \uC0AC\uC6A9, \uC804\uC1A1 \uB610\uB294 \uC2B9\uC778\uD558\uAC70\uB098 \uACF5\uC2DD \uCC44\uB110\uC744 \uD1B5\uD574 RETC \uD658\uACBD \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC744 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uAC70\uB098 \uB2E4\uB978 \uC548\uC804\uD558\uC9C0 \uC54A\uC740 \uBC29\uBC95\uC73C\uB85C RETC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5D0\uCF54 \uC571\uC73C\uB85C \uC778\uD574 \uB514\uC9C0\uD138 \uD1A0\uD070\uC774 \uC190\uC2E4\uB429\uB2C8\uB2E4.</p>\n\t\t<p>3. \uBE14\uB85D \uD1A0\uD070 \uAE30\uC220 \uC9C0\uC2DD\uC758 \uC624\uC6A9\uC73C\uB85C \uC778\uD574 \uB514\uC9C0\uD138 \uD1A0\uD070\uC774 \uC190\uC2E4\uB429\uB2C8\uB2E4. </p>\n\t\t<p>4.\uC2DC\uC2A4\uD15C \uC9C0\uC5F0, \uBD88\uC548\uC815\uD55C \uBE14\uB85D \uCCB4\uC778 \uC2DC\uC2A4\uD15C \uB4F1\uC73C\uB85C \uC778\uD574 \uD68C\uC0AC\uC758 \uBCF5\uC81C \uC0AC\uC6A9\uC790\uB294 \uBE14\uB85D \uCCB4\uC778\uC758 \uAC70\uB798 \uAE30\uB85D\uC5D0 \uD3B8\uCC28\uAC00 \uC788\uC2B5\uB2C8\uB2E4.</p> \n\t\t<p>5. \uADC0\uD558\uB294 \uD68C\uC0AC\uAC00 \uADC0\uD558\uC640 \uADC0\uD558\uC758 \uAC70\uB798 \uC0C1\uB300\uBC29\uC5D0\uAC8C \uB3D9\uC2DC\uC5D0 \uC11C\uBE44\uC2A4 \uB610\uB294 \uAD00\uB828 \uAD00\uACC4 \uB610\uB294 \uAE30\uD0C0 \uAD00\uB828 \uAD00\uACC4\uB97C \uC81C\uACF5 \uD560 \uC218 \uC788\uC73C\uBA70 \uADC0\uD558\uB294 \uD68C\uC0AC\uC5D0 \uC874\uC7AC\uD560 \uC218\uC788\uB294 \uADF8\uB7EC\uD55C \uC2E4\uC81C\uC801\uC778 \uB610\uB294 \uC7A0\uC7AC\uC801 \uC778 \uC774\uD574 \uC0C1\uCDA9\uC744 \uD3EC\uAE30\uD560 \uAC83\uC5D0 \uBA85\uC2DC \uC801\uC73C\uB85C \uB3D9\uC758\uD55C\uB2E4\uB294 \uB370 \uB3D9\uC758\uD569\uB2C8\uB2E4. \uD68C\uC0AC\uAC00 \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0\uC788\uC5B4 \uBC95\uC801 \uACB0\uD568\uC774 \uC788\uB2E4\uACE0 \uC8FC\uC7A5 \uD560 \uC218 \uC5C6\uC73C\uBBC0\uB85C \uD68C\uC0AC\uC758 \uCC45\uC784\uC774\uB098 \uC758\uBB34\uB97C \uC99D\uAC00\uC2DC\uD0A4\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. </p>\n\t\t<p>6. \uADC0\uD558\uB294 \uD574\uB2F9 \uBC95\uB960 \uBC0F \uADDC\uC815\uC5D0 \uB530\uB77C \uD544\uC694\uC5D0 \uB530\uB77C \uC0AC\uC6A9\uC790 \uC561\uC138\uC2A4 \uAE30\uC900\uC744 \uC218\uC2DC\uB85C \uBCC0\uACBD\uD560 \uC218 \uC788\uC73C\uBA70 \uD2B9\uC815 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294 \uBC94\uC704\uC640 \uBC29\uC2DD\uC744 \uC81C\uD55C \uD560 \uC218 \uC788\uC74C\uC744 \uC774\uD574\uD569\uB2C8\uB2E4.</p>\n\t\t"), _defineProperty(_message, "protocol24", "\uB2E4\uB978 \uC6A9\uC5B4\uB4E4"), _defineProperty(_message, "protocol25", "<p>1. \uC9C0\uC801 \uC7AC\uC0B0 \uC124\uBA85 RETC Eco\uB294 \uD68C\uC0AC\uAC00 \uAC1C\uBC1C\uD558\uACE0 \uC18C\uC720 \uD55C \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uC785\uB2C8\uB2E4. RETC Ecok (\uBCF8 \uACC4\uC57D, \uD1B5\uC9C0, \uAE30\uC0AC, \uBE44\uB514\uC624, \uC624\uB514\uC624, \uC774\uBBF8\uC9C0, \uC544\uCE74\uC774\uBE0C, \uC815\uBCF4, \uC790\uB8CC, \uC0C1\uD45C \uB610\uB294 \uB85C\uACE0 \uD3EC\uD568)\uC5D0 \uD45C\uC2DC\uB41C \uBAA8\uB4E0 \uCEE8\uD150\uCE20\uC758 \uC9C0\uC801 \uC7AC\uC0B0\uAD8C\uC740 \uD68C\uC0AC \uB610\uB294 \uC81C 3 \uC790 \uAD8C\uB9AC \uBCF4\uC720\uC790\uAC00 \uC18C\uC720\uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uB294 \uB514\uC9C0\uD138 \uD1A0\uD070\uC744 \uBCF4\uAD00\uD558\uACE0 \uAD00\uB9AC\uD558\uAE30 \uC704\uD574 RETC \uD658\uACBD \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uACFC \uADF8 \uB0B4\uC6A9\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC \uB098 \uC81C 3 \uC790 \uAD8C\uB9AC\uC790\uC758 \uC0AC\uC804 \uC11C\uBA74 \uB3D9\uC758\uC5C6\uC774 \uB204\uAD6C\uB3C4 \uADF8\uB7EC\uD55C \uC751\uC6A9 \uD504\uB85C\uADF8\uB7A8\uACFC \uCF58\uD150\uCE20\uB97C \uC0AC\uC6A9, \uC218\uC815, \uC5ED \uCEF4\uD30C\uC77C, \uBCF5\uC81C, \uACF5\uAC1C \uC804\uC1A1, \uBCC0\uACBD, \uBC30\uD3EC, \uBC30\uD3EC \uB610\uB294 \uACF5\uAC1C\uC801\uC73C\uB85C \uAC8C\uC2DC \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uBCF8 \uACC4\uC57D\uC11C\uB294 \uB2F9\uC0AC\uC640 \uAD00\uB828\uD558\uC5EC \uB610\uB294 \uAE30\uD0C0 \uBAA9\uC801\uC73C\uB85C \uC815\uBCF4, \uC774\uBBF8\uC9C0, \uC0AC\uC6A9\uC790 \uC778\uD130\uD398\uC774\uC2A4, \uB85C\uACE0, \uC0C1\uD45C, \uC0C1\uD638, \uB124\uD2B8\uC6CC\uD06C \uB3C4\uBA54\uC778 \uC774\uB984 \uB610\uB294 \uC800\uC791\uAD8C\uC744 \uC0AC\uC6A9\uD560 \uC218\uC788\uB294 \uAD8C\uB9AC\uB97C \uD3EC\uD568\uD558\uC5EC \uADC0\uD558\uC5D0\uAC8C \uC9C0\uC801 \uC7AC\uC0B0\uAD8C\uC744 \uBD80\uC5EC\uD558\uB294 \uAC83\uC73C\uB85C \uAC04\uC8FC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</p>\n\t\t<p>2.\uD130\uBBF8\uB110 \uBCF4\uC548 \uCC45\uC784 </p>\n\t\t<p>2.1\uADC0\uD558\uB294 \uB300\uBD80\uBD84\uC758 \uC778\uD130\uB137 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC18C\uD504\uD2B8\uC6E8\uC5B4\uAC00 \uC0AC\uC6A9\uC790 \uC0AC\uC720, \uB124\uD2B8\uC6CC\uD06C \uC11C\uBE44\uC2A4 \uD488\uC9C8, \uC0AC\uD68C \uD658\uACBD \uB4F1\uC744 \uD3EC\uD568\uD55C \uB2E4\uC591\uD55C \uC694\uC18C\uC758 \uC601\uD5A5\uC744\uBC1B\uC744 \uC218 \uC788\uB2E4\uB294 \uC810\uC744 \uC774\uD574\uD558\uACE0 \uC774\uC5D0 \uB3D9\uC758\uD558\uBA70, \uB2E4\uC74C\uC744 \uD3EC\uD568\uD558\uC5EC \uB2E4\uC591\uD55C \uBCF4\uC548 \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC2E4\uC81C \uC138\uACC4\uC758 \uAD34\uB86D\uD798\uC744 \uC218\uD589\uD558\uAE30 \uC704\uD574 \uB2E4\uB978 \uC0AC\uC6A9\uC790\uAC00 \uC0AC\uC6A9\uC790 \uB370\uC774\uD130\uB97C \uBD88\uBC95\uC801\uC73C\uB85C \uC0AC\uC6A9\uD558\uB294 \uAC83\uBFD0\uB9CC \uC544\uB2C8\uB77C \uC0AC\uC6A9\uC790\uAC00 \uB2E4\uC6B4\uB85C\uB4DC\uD558\uAC70\uB098 \uC124\uCE58 \uD55C \uB2E4\uB978 \uC18C\uD504\uD2B8\uC6E8\uC5B4\uC5D0\uB294 \uBC14\uC774\uB7EC\uC2A4, \uD2B8\uB85C\uC774 \uBAA9\uB9C8 \uB610\uB294 \uAE30\uD0C0 \uC545\uC758\uC801 \uC778 \uD504\uB85C\uADF8\uB7A8\uC774 \uD3EC\uD568\uB420 \uC218 \uC788\uC73C\uBA70 \uC774\uB85C \uC778\uD574 \uD130\uBBF8\uB110 \uC7A5\uCE58 \uC815\uBCF4 \uBC0F \uB370\uC774\uD130 \uBCF4\uC548\uC774 \uC704\uD611\uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uB4F1\uC758 \uC815\uC0C1\uC801\uC778 \uC0AC\uC6A9 \uB530\uB77C\uC11C \uC815\uBCF4 \uBCF4\uC548 \uBC0F \uAC1C\uC778 \uC815\uBCF4 \uBCF4\uD638\uB97C \uAC15\uD654\uD558\uACE0 \uC190\uC2E4 \uBC29\uC9C0\uB97C \uC704\uD574 \uC554\uD638 \uBCF4\uD638\uC5D0\uC8FC\uC758\uB97C \uAE30\uC6B8\uC5EC\uC57C\uD569\uB2C8\uB2E4.</p>\n\t\t <p>2.2\uACC4\uC815 \uBC0F \uB2E4\uB978 \uC0AC\uB78C\uB4E4\uC758 \uAC1C\uC778 \uC815\uBCF4 \uB610\uB294 \uC7AC\uC0B0\uC744 \uD6D4\uCE58\uAE30 \uC704\uD574 \uC0AC\uC6A9\uB418\uB294 \uC545\uC131 \uD504\uB85C\uADF8\uB7A8\uC744 \uC0DD\uC131, \uAC8C\uC2DC, \uC0AC\uC6A9 \uB610\uB294 \uBC30\uD3EC \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</p>\n\t\t <p>2.3RETC Ecology\uB294 \uC0B0\uC5C5 \uD45C\uC900\uC5D0 \uB530\uB77C \uD130\uBBF8\uB110 \uC7A5\uBE44 \uC815\uBCF4 \uBC0F \uB370\uC774\uD130 \uBCF4\uC548\uC744 \uBCF4\uD638\uD558\uAE30 \uC704\uD574 \uD569\uB9AC\uC801\uC774\uACE0 \uC2E0\uC911\uD55C \uC870\uCE58\uB97C \uCDE8\uD558\uC9C0 \uB9CC RETC \uC0DD\uD0DC\uACC4\uB294 \uC774\uC5D0 \uB300\uD55C \uC644\uC804\uD55C \uC815\uBCF4\uB97C \uC81C\uACF5 \uD560 \uC218 \uC5C6\uC74C\uC744 \uC778\uC815\uD558\uACE0 \uB3D9\uC758\uD569\uB2C8\uB2E4. \uBCF4\uC7A5.</p>\n\t\t<p>3. \uBC95\uC801 \uC2E0\uCCAD \uBC0F \uBD84\uC7C1 \uD574\uACB0\uFF1A</p>\n\t\t <p>1.\uBCF8 \uACC4\uC57D\uC740 \uAD00\uB828 \uAD6D\uB0B4\uBC95\uC758 \uC801\uC6A9\uC744\uBC1B\uC73C\uBA70 \uADF8\uC5D0 \uB530\uB77C \uD574\uC11D\uB429\uB2C8\uB2E4. </p>\n\t\t<p>2. \uBCF8 \uACC4\uC57D\uACFC \uAD00\uB828\uD558\uC5EC \uB610\uB294 \uBCF8 \uACC4\uC57D\uACFC \uAD00\uB828\uD558\uC5EC \uBD84\uC7C1\uC774 \uBC1C\uC0DD\uD558\uB294 \uACBD\uC6B0 (\uB2F9\uC0AC\uC790\uC758 \uC874\uC7AC, \uC720\uD6A8\uC131 \uB610\uB294 \uD574\uC9C0\uC5D0 \uAD00\uD55C \uC9C8\uBB38 \uD3EC\uD568) \uB2F9\uC0AC\uC790\uB294 \uBA3C\uC800 \uD569\uC758\uB97C \uCD94\uAD6C\uD574\uC57C\uD569\uB2C8\uB2E4. \uBD84\uC7C1 \uD574\uACB0 \uC808\uCC28\uAC00 \uC2DC\uC791\uB41C \uD6C4 30 \uC77C \uC774\uB0B4\uC5D0 \uBD84\uC7C1\uC774 \uD574\uACB0\uB418\uC9C0 \uC54A\uC73C\uBA74 \uC591 \uB2F9\uC0AC\uC790\uB294 \uAD00\uB828 \uAD6D\uC81C \uC911\uC7AC \uC13C\uD130 (SIAC)\uC5D0 \uBD84\uC7C1\uC744 \uC81C\uCD9C\uD558\uACE0 \uD574\uB2F9 \uAD6D\uC81C \uC911\uC7AC \uC13C\uD130 \uB2F9\uC2DC \uC720\uD6A8\uD55C \uC911\uC7AC \uADDC\uCE59\uC744 \uC900\uC218\uD574\uC57C\uD569\uB2C8\uB2E4. \uC774 \uADDC\uCE59\uC740 \uBCF8 \uC57D\uAD00\uC5D0 \uCC38\uC870\uB85C \uD3EC\uD568 \uB41C \uAC83\uC73C\uB85C \uAC04\uC8FC\uB418\uBA70 \uAD81\uADF9\uC801\uC73C\uB85C \uAD00\uB828 \uAD6D\uAC00\uC5D0\uC11C \uC911\uC7AC\uB97C \uD1B5\uD574 \uD574\uACB0\uB429\uB2C8\uB2E4. \uC911\uC7AC \uD310\uC815 \uBD80\uB294 SIAC \uC758\uC7A5\uC774 \uC784\uBA85 \uD55C \uC911\uC7AC\uC790\uB85C \uAD6C\uC131\uB429\uB2C8\uB2E4. \uC911\uC7AC \uC5B8\uC5B4\uB294 \uC601\uC5B4\uC785\uB2C8\uB2E4. \uAC01 \uB2F9\uC0AC\uC790\uB294 \uC808\uCC28\uAC00 \uC644\uB8CC\uB418\uAE30 \uC804\uC5D0 \uC7A0\uC815 \uAD6C\uC81C \uC870\uCE58 (\uD544\uC694\uD55C \uACBD\uC6B0) \uC870\uD56D\uC744 \uD3EC\uD568\uD558\uC5EC\uC774 \uD56D\uC758 \uC804\uD56D\uC5D0 \uB530\uB77C \uC218\uD589 \uB41C \uC911\uC7AC \uC808\uCC28\uB97C \uC9C0\uC6D0\uD558\uACE0 \uC9C0\uC6D0\uD558\uAE30 \uC704\uD574 \uAD00\uACC4\uAD6D \uBC95\uC6D0\uC758 \uBE44 \uB3C5\uC810\uC801 \uAD00\uD560\uAD8C\uC744 \uCDE8\uC18C \uD560 \uC218 \uC5C6\uAC8C \uBC1B\uC544\uB4E4\uC785\uB2C8\uB2E4.</p>\n\t\t <p>3. \uD3B8\uC758\uC0C1\uC774 \uACC4\uC57D\uC740 \uB2E4\uB978 \uC5B8\uC5B4\uB85C \uBC88\uC5ED \uB420 \uC218 \uC788\uC9C0\uB9CC \uBCF8 \uACC4\uC57D\uC758 \uC601\uC5B4 \uBC84\uC804\uC774 \uC8FC\uC694 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4. \uC774 \uD611\uC815\uACFC \uBD80\uC18D\uC11C\uC758 \uB2E4\uB978 \uC5B8\uC5B4 \uBC88\uC5ED\uAC04\uC5D0 \uBD88\uC77C\uCE58\uAC00\uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC601\uC5B4 \uD310\uC774 \uC6B0\uC120\uD55C\uB2E4.</p><p>\n\uC774 \uACC4\uC57D\uC740 2019 \uB144 7 \uC6D4 24 \uC77C\uBD80\uD130 \uC801\uC6A9\uB429\uB2C8\uB2E4.</p>\n\t\t\uBCF8 \uACC4\uC57D\uC5D0\uC11C \uB2E4\uB8E8\uC9C0 \uC54A\uB294 \uC0AC\uD56D\uC5D0 \uB300\uD574\uC11C\uB294 \uADC0\uD558\uAC00 \uC218\uC2DC\uB85C \uC5C5\uB370\uC774\uD2B8\uD558\uB294 \uACF5\uC9C0 \uBC0F \uAD00\uB828 \uADDC\uCE59\uC758 \uC801\uC6A9\uC744\uBC1B\uC2B5\uB2C8\uB2E4.\n\t\t"), _defineProperty(_message, "UnableToContinue",









































































































  '귀하는 투자를 했으므로 계속 투자에 참여할 수 없습니다'), _defineProperty(_message, "AvailableBalance", "\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uC794\uC561"), _defineProperty(_message, "ReceiRETCdQuantity", "\uC218\uC2E0 \uC218\uB7C9"), _defineProperty(_message, "exchangeRate", "\uD658\uC728"), _defineProperty(_message, "FastFlash", "\uBE60\uB978 \uD50C\uB798\uC2DC"), _defineProperty(_message, "FlashRecord", "\uC0AC\uC6A9 \uAE30\uB85D"), _defineProperty(_message, "FlashNumber", "\uC0C1\uD658 \uC218\uB7C9"), _defineProperty(_message, "FlashTime", "\uC0C1\uD658 \uC2DC\uAC04"), _defineProperty(_message, "success", "\uC131\uACF5"), _defineProperty(_message, "MyBlockReRETCnue", "\uB0B4 \uBE14\uB85D \uC218\uC775"), _defineProperty(_message, "shifang01", "A\uC801\uBD84 \uBE44\uC728"), _defineProperty(_message, "shifang02", "RETC\uC18C\uB4DD"), _defineProperty(_message, "waitshifang01", "\uC11D\uBC29 \uB420RETC"), _defineProperty(_message, "waitshifang02", "\uC11D\uBC29 \uB420A\uD3EC\uC778\uD2B8"), _defineProperty(_message, "aCode", "A\uD3EC\uC778\uD2B8"), _defineProperty(_message, "meKnow", "\uB098\uB294 \uC54C\uACE0\uC788\uB2E4."), _defineProperty(_message, "dayshifang", "\uC77C\uC77C \uCD9C\uC2DC\uC728"), _defineProperty(_message, "save",




















  '저장'), _message) };exports.default = _default;

/***/ }),

/***/ 160:
/*!**************************************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fgesture-password%2Fgesture-password"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _gesturePassword = _interopRequireDefault(__webpack_require__(/*! ./pages/gesture-password/gesture-password.vue */ 161));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_gesturePassword.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 168:
/*!******************************************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fgesture-password%2Fset-gesture-password"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _setGesturePassword = _interopRequireDefault(__webpack_require__(/*! ./pages/gesture-password/set-gesture-password.vue */ 169));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_setGesturePassword.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 17:
/*!**************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/store/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 8));

var _state = _interopRequireDefault(__webpack_require__(/*! ./state.js */ 18));
var _mutations = _interopRequireDefault(__webpack_require__(/*! ./mutations.js */ 19));
var _getters = _interopRequireDefault(__webpack_require__(/*! ./getters.js */ 20));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  state: _state.default,
  mutations: _mutations.default,
  getters: _getters.default });var _default =


store;exports.default = _default;

/***/ }),

/***/ 176:
/*!**************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Farea%2Farea"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _area = _interopRequireDefault(__webpack_require__(/*! ./pages/area/area.vue */ 177));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_area.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 18:
/*!**************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/store/state.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var state = {
  area: uni.getStorageSync('area') || {},
  lang_type: uni.getStorageSync('lang') || 'chs',
  // requestUrl: "http://47.52.77.5",  //测试服务器
  requestUrl: "http://retcim.com", //正式服务器
  // requestUrl: "http://103.229.64.41",  //正式服务器
  incode: uni.getStorageSync('code') || '86',
  loginInfo: uni.getStorageSync('loginInfo') || {},
  user: uni.getStorageSync('user') || '',
  pass: uni.getStorageSync('pass') || '',
  gesturePassword: uni.getStorageSync('gesturePassword') || '',
  curAddress: '',
  bullentin: '',
  textArr: {
    chs: ["资产", "社区", "我的"],
    en: ["Assets", "Community", "Mine"],
    ko: ["자산", "커뮤니티", "내"] },


  firstInvestment: {}, ///首次投资币种,
  details: {} };var _default =

state;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 184:
/*!**********************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fregister%2Fregister"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _register = _interopRequireDefault(__webpack_require__(/*! ./pages/register/register.vue */ 185));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_register.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 19:
/*!******************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/store/mutations.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var mutations = {
  setArea: function setArea(state, val) {
    state.area = val;
    uni.setStorageSync('area', val);
  },
  setLangType: function setLangType(state, val) {
    state.lang_type = val;
    uni.setStorageSync('lang', val);
  },
  setIncode: function setIncode(state, val) {
    state.incode = val;
    uni.setStorageSync('code', val);
  },
  setLoginInfo: function setLoginInfo(state, val) {
    state.loginInfo = val;
    uni.setStorageSync('loginInfo', val);
  },
  setUser: function setUser(state, val) {
    state.user = val;
    uni.setStorageSync('user', val);
  },
  setPass: function setPass(state, val) {
    state.pass = val;
    uni.setStorageSync('pass', val);
  },
  setGesturePassword: function setGesturePassword(state, val) {
    state.gesturePassword = val;
    uni.setStorageSync('gesturePassword', val);
  },
  //设置提币地址
  setCurAddress: function setCurAddress(state, val) {
    state.curAddress = val;
  },
  //设置首次投资币种列表 firstInvestment
  setFirstInvestment: function setFirstInvestment(state, val) {
    state.firstInvestment = val;
  },
  setBulletin: function setBulletin(state, val) {
    state.bullentin = val;
  },
  setDetails: function setDetails(state, val) {
    state.details = val;
  } };var _default =

mutations;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 192:
/*!**********************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fsafe%2Fmodify-login"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _modifyLogin = _interopRequireDefault(__webpack_require__(/*! ./pages/safe/modify-login.vue */ 193));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_modifyLogin.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope) {
        return this.$scope[method](args)
      }
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/store/getters.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var getters = {
  // 国家区号信息 对象
  getArea: function getArea(state) {
    return state.area;
  },
  // 语言 1中文 2英文 3韩文
  getLangType: function getLangType(state) {
    return state.lang_type;
  },
  // 请求域名
  getRequestUrl: function getRequestUrl(state) {
    return state.requestUrl;
  },
  // 设置区号
  getIncode: function getIncode(state) {
    return state.incode;
  },
  // 登录信息
  getLoginInfo: function getLoginInfo(state) {
    return state.loginInfo;
  },
  getUser: function getUser(state) {
    return state.user;
  },
  getPass: function getPass(state) {
    return state.pass;
  },
  getTextArr: function getTextArr(state) {
    return state.textArr;
  },
  getGesturePassword: function getGesturePassword(state) {
    return state.gesturePassword;
  },
  //提币地址
  getCurAddress: function getCurAddress(state) {
    return state.curAddress;
  },
  //获取首次投资币种数量列表  firstInvestment
  getFirstInvestment: function getFirstInvestment(state) {
    return state.firstInvestment;
  },
  getBulletin: function getBulletin(state) {
    return state.bullentin;
  },
  getDetails: function getDetails(state) {
    return state.details;
  } };var _default =

getters;exports.default = _default;

/***/ }),

/***/ 200:
/*!********************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fsafe%2Fmodify-pwd"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _modifyPwd = _interopRequireDefault(__webpack_require__(/*! ./pages/safe/modify-pwd.vue */ 201));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_modifyPwd.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 208:
/*!********************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fsetting%2Fsetting"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _setting = _interopRequireDefault(__webpack_require__(/*! ./pages/setting/setting.vue */ 209));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_setting.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 21:
/*!****************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 216:
/*!**************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fsafe%2Fsafe"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _safe = _interopRequireDefault(__webpack_require__(/*! ./pages/safe/safe.vue */ 217));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_safe.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 224:
/*!******************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fforget%2Fforget"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _forget = _interopRequireDefault(__webpack_require__(/*! ./pages/forget/forget.vue */ 225));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_forget.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 232:
/*!****************************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Finformation%2Finformation"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _information = _interopRequireDefault(__webpack_require__(/*! ./pages/information/information.vue */ 233));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_information.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 240:
/*!*****************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Frefer%2Finvite"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _invite = _interopRequireDefault(__webpack_require__(/*! ./pages/refer/invite.vue */ 241));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_invite.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 248:
/*!****************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Frefer%2Frefer"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _refer = _interopRequireDefault(__webpack_require__(/*! ./pages/refer/refer.vue */ 249));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_refer.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 256:
/*!*******************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fcharge%2Fhistory"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _history = _interopRequireDefault(__webpack_require__(/*! ./pages/charge/history.vue */ 257));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_history.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 264:
/*!***************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fcharge%2Flog"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _log = _interopRequireDefault(__webpack_require__(/*! ./pages/charge/log.vue */ 265));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_log.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 27:
/*!*****************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/common/js/util.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.showToast = showToast;exports.pageto = pageto;exports.pageback = pageback;exports.deterLang = deterLang;exports._updataTabBar = _updataTabBar;exports.forceUpdate = forceUpdate;exports.formatTabs = exports.fetch = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 28));var _validate = __webpack_require__(/*! ./validate.js */ 31);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
/*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * showToast  消息提示框
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @title     弹窗的内容
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @duration  弹窗持续的时间
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @mask      是否添加遮罩
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @icon      消息提示框的图标
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * */
function showToast() {var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;var icon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "none";
  if (!title) {
    console.log("showToast title is wrong");
    return;
  }
  uni.showToast({
    title: title,
    duration: duration,
    mask: mask,
    icon: icon });

}

/*
  * pageback   页面返回一页
  */
function pageto(str) {
  uni.navigateTo({
    url: str });

}
/*
  * pageback   页面返回一页
  */
function pageback() {
  uni.navigateBack({
    delta: 1 });

}

/*
  * deterLang 格式化提交给后台的语言
  * @return 1 中文 2 英文
  */
function deterLang(lang) {
  switch (lang) {
    case "chs":
      return 1;
      break;
    case "en":
      return 2;
      break;
    case 'ko':
      return 3;
      break;}

}

/*
  * 封装异步请求
  */
var fetch = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(url) {var data,method,_ref2,_ref3,error,res,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};method = _args.length > 2 && _args[2] !== undefined ? _args[2] : "GET";_context.next = 4;return (
              uni.request({
                url: url,
                data: data,
                method: method }));case 4:_ref2 = _context.sent;_ref3 = _slicedToArray(_ref2, 2);error = _ref3[0];res = _ref3[1];if (!

            error) {_context.next = 12;break;}return _context.abrupt("return",
            error);case 12:return _context.abrupt("return",

            res);case 13:case "end":return _context.stop();}}}, _callee, this);}));return function fetch(_x) {return _ref.apply(this, arguments);};}();




/* *
                                                                                                                                                        * formatTabs
                                                                                                                                                        * */exports.fetch = fetch;
var formatTabs = function formatTabs() {var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'chs';
  if (lang == 'chs') {
    return [
    {
      name: "社区动态",
      fontSize: "13px" },

    // {
    // 	name: "销毁池",
    // 	fontSize: "13px",
    // },
    {
      name: "应用",
      fontSize: "13px" }];


  } else if (lang == 'en') {
    return [
    {
      name: "Dynamic",
      fontSize: "13px" },

    // {
    // 	name: "Destroy",
    // 	fontSize: "13px",
    // },
    {
      name: "Application",
      fontSize: "13px" }];


  } else if (lang == 'ko') {
    return [
    {
      name: "커뮤니티 역학",
      fontSize: "13px" },

    // {
    // 	name: "수영장 파괴",
    // 	fontSize: "13px",
    // },
    {
      name: "신청서",
      fontSize: "13px" }];


  }
};

/*
   *	_updataTabBar 更新底部导航
   * */exports.formatTabs = formatTabs;
function _updataTabBar(arr, lang) {
  uni.setTabBarItem({
    index: 0,
    text: arr[lang][0] });

  uni.setTabBarItem({
    index: 1,
    text: arr[lang][1] });

  uni.setTabBarItem({
    index: 2,
    text: arr[lang][2] });

  // uni.setTabBarItem({
  // 	index:  3,
  // 	text: arr[lang][3]
  // })
  uni.setTabBarStyle({
    color: '#7D7D7D',
    selectedColor: '#000000',
    backgroundColor: "#F9F9F9" });

}


function forceUpdate(update, update_tip, isJumping, soon_update, fail) {
















































}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 272:
/*!**************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fbill%2Fbill"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _bill = _interopRequireDefault(__webpack_require__(/*! ./pages/bill/bill.vue */ 273));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_bill.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 28:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 29);


/***/ }),

/***/ 280:
/*!******************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fnotice%2Fnotice"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _notice = _interopRequireDefault(__webpack_require__(/*! ./pages/notice/notice.vue */ 281));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_notice.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 288:
/*!********************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fnotice%2Fprotocol"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _protocol = _interopRequireDefault(__webpack_require__(/*! ./pages/notice/protocol.vue */ 289));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_protocol.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 29:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 30);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 296:
/*!**********************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fexchange%2Fexchange"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _exchange = _interopRequireDefault(__webpack_require__(/*! ./pages/exchange/exchange.vue */ 297));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_exchange.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 31:
/*!*********************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/common/js/validate.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.validate = void 0; /*
                                                                                                      * validate
                                                                                                      */
var validate = {
  // name: key
  // 邮箱
  email: function email(v) {
    if (!v.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
      return false;
    }
    return true;
  },
  // 手机号
  mobile: function mobile(v) {
    if (!v.match(/^1(3|4|5|7|8)\d{9}$/)) {
      return false;
    }
    return true;
  },
  // 用户名
  username: function username() {

  },
  // 登录密码
  // 6-16位的字母或者数字组合  单一数字或者字母都可以   但是下划线和.是不可以的
  passLogin: function passLogin(v) {
    if (!v.match(/^[0-9a-zA-Z]{6,16}$/)) {
      return false;
    }
    return true;
  },
  // 交易密码
  passPwd: function passPwd(v) {
    if (!v.match(/^\d{6}$/)) {
      return false;
    }
    return true;
  },

  // 手机验证码验证
  yzm: function yzm(v) {
    if (!v.match(/^\d{6}$/)) {
      return false;
    }
    return true;
  },
  //图形验证码验证
  yzmimg: function yzmimg(v) {
    if (!v.match(/^[0-9a-zA-Z]{4}$/)) {
      return false;
    }
    return true;
  },
  //邀请码验证
  yqm: function yqm(v) {
    if (!v.match(/^CYE[0-9]{1,}$/)) {
      return false;
    }
    return true;
  } };exports.validate = validate;


var formatText = function formatText(type) {return type + "格式错误";};

/***/ }),

/***/ 337:
/*!******************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/components/mpvueGestureLock/gestureLock.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var GestureLock = /*#__PURE__*/function () {

  function GestureLock(containerWidth, cycleRadius) {_classCallCheck(this, GestureLock);
    this.containerWidth = containerWidth; // 容器宽度
    this.cycleRadius = cycleRadius; // 圆的半径

    this.circleArray = []; // 全部圆的对象数组
    this.checkPoints = []; // 选中的圆的对象数组
    this.lineArray = []; // 已激活锁之间的线段数组
    this.lastCheckPoint = 0; // 最后一个激活的锁
    this.offsetX = 0; // 容器的 X 偏移
    this.offsetY = 0; // 容器的 Y 偏移
    this.activeLine = {}; // 最后一个激活的锁与当前位置之间的线段

    this.windowWidth = wx.getSystemInfoSync().windowWidth; // 窗口大小(用于rpx 和 px 转换)

    this.initCircleArray();
  }

  // 初始化 画布上的 9个圆
  _createClass(GestureLock, [{ key: "initCircleArray", value: function initCircleArray() {
      var cycleMargin = (this.containerWidth - 6 * this.cycleRadius) / 6;
      var count = 0;
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          count++;
          this.circleArray.push({
            count: count,
            x: this.rpxTopx((cycleMargin + this.cycleRadius) * (j * 2 + 1)),
            y: this.rpxTopx((cycleMargin + this.cycleRadius) * (i * 2 + 1)),
            radius: this.rpxTopx(this.cycleRadius),
            check: false,
            style: {
              left: (cycleMargin + this.cycleRadius) * (j * 2 + 1) - this.cycleRadius + 'rpx',
              top: (cycleMargin + this.cycleRadius) * (i * 2 + 1) - this.cycleRadius + 'rpx',
              width: this.cycleRadius * 2 + 'rpx' } });


        }
      }
    } }, { key: "onTouchStart", value: function onTouchStart(

    e) {
      this.setOffset(e);
      this.checkTouch({
        x: e.touches[0].pageX - this.offsetX,
        y: e.touches[0].pageY - this.offsetY });

    } }, { key: "onTouchMove", value: function onTouchMove(

    e) {
      this.moveDraw(e);
    } }, { key: "onTouchEnd", value: function onTouchEnd(

    e) {
      var checkPoints = this.checkPoints;
      this.reset();
      return checkPoints;
    }

    // 初始化 偏移量
  }, { key: "setOffset", value: function setOffset(e) {
      this.offsetX = e.currentTarget.offsetLeft;
      this.offsetY = e.currentTarget.offsetTop;
    }

    // 检测当时 触摸位置是否位于 锁上
  }, { key: "checkTouch", value: function checkTouch(_ref)


    {var x = _ref.x,y = _ref.y;
      for (var i = 0; i < this.circleArray.length; i++) {
        var point = this.circleArray[i];
        if (this.isPointInCycle(x, y, point.x, point.y, point.radius)) {
          if (!point.check) {
            this.checkPoints.push(point.count);
            if (this.lastCheckPoint != 0) {
              // 已激活锁之间的线段
              var line = this.drawLine(this.lastCheckPoint, point);
              this.lineArray.push(line);
            }
            this.lastCheckPoint = point;
          }
          point.check = true;
          return;
        }
      }
    }

    // 画线 - 返回 样式 对象
  }, { key: "drawLine", value: function drawLine(start, end) {
      var width = this.getPointDis(start.x, start.y, end.x, end.y);
      var rotate = this.getAngle(start, end);

      return {
        activeLeft: start.x + 'px',
        activeTop: start.y + 'px',
        activeWidth: width + 'px',
        activeRotate: rotate + 'deg' };


    }

    // 获取 画线的 角度
  }, { key: "getAngle", value: function getAngle(start, end) {
      var diff_x = end.x - start.x,
      diff_y = end.y - start.y;
      if (diff_x >= 0) {
        return 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
      } else {
        return 180 + 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
      }
    }

    // 判断 当前点是否位于 锁内
  }, { key: "isPointInCycle", value: function isPointInCycle(x, y, circleX, circleY, radius) {
      return this.getPointDis(x, y, circleX, circleY) < radius ? true : false;
    }

    // 获取两点之间距离
  }, { key: "getPointDis", value: function getPointDis(ax, ay, bx, by) {
      return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));
    }

    // 移动 绘制
  }, { key: "moveDraw", value: function moveDraw(e) {
      // 画经过的圆
      var x = e.touches[0].pageX - this.offsetX;
      var y = e.touches[0].pageY - this.offsetY;
      this.checkTouch({
        x: x,
        y: y });


      // 画 最后一个激活的锁与当前位置之间的线段
      this.activeLine = this.drawLine(this.lastCheckPoint, {
        x: x,
        y: y });

    }

    // 使 画布 恢复初始状态
  }, { key: "reset", value: function reset() {
      this.circleArray.forEach(function (item) {
        item.check = false;
      });
      this.checkPoints = [];
      this.lineArray = [];
      this.activeLine = {};
      this.lastCheckPoint = 0;
    }


    // 获取 最后一个激活的锁与当前位置之间的线段
  }, { key: "getActiveLine", value: function getActiveLine() {
      return this.activeLine;
    }

    // 获取 圆对象数组
  }, { key: "getCycleArray", value: function getCycleArray() {
      return this.circleArray;
    }

    // 获取 已激活锁之间的线段
  }, { key: "getLineArray", value: function getLineArray() {
      return this.lineArray;
    }

    // 将 RPX 转换成 PX
  }, { key: "rpxTopx", value: function rpxTopx(rpx) {
      return rpx / 750 * this.windowWidth;
    } }]);return GestureLock;}();var _default =


GestureLock;exports.default = _default;

/***/ }),

/***/ 34:
/*!****************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fstart%2Fstart"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _start = _interopRequireDefault(__webpack_require__(/*! ./pages/start/start.vue */ 35));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_start.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 345:
/*!***************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/components/qrcode/qrcode.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var QRCode = {};
(function () {
  /**
               * 获取单个字符的utf8编码
               * unicode BMP平面约65535个字符
               * @param {num} code
               * return {array}
               */
  function unicodeFormat8(code) {
    // 1 byte
    var c0, c1, c2;
    if (code < 128) {
      return [code];
      // 2 bytes
    } else if (code < 2048) {
      c0 = 192 + (code >> 6);
      c1 = 128 + (code & 63);
      return [c0, c1];
      // 3 bytes
    } else {
      c0 = 224 + (code >> 12);
      c1 = 128 + (code >> 6 & 63);
      c2 = 128 + (code & 63);
      return [c0, c1, c2];
    }
  }
  /**
     * 获取字符串的utf8编码字节串
     * @param {string} string
     * @return {array}
     */
  function getUTF8Bytes(string) {
    var utf8codes = [];
    for (var i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);
      var utf8 = unicodeFormat8(code);
      for (var j = 0; j < utf8.length; j++) {
        utf8codes.push(utf8[j]);
      }
    }
    return utf8codes;
  }
  /**
     * 二维码算法实现
     * @param {string} data              要编码的信息字符串
     * @param {num} errorCorrectLevel 纠错等级
     */
  function QRCodeAlg(data, errorCorrectLevel) {
    this.typeNumber = -1; //版本
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null; //二维矩阵，存放最终结果
    this.moduleCount = 0; //矩阵大小
    this.dataCache = null; //数据缓存
    this.rsBlocks = null; //版本数据信息
    this.totalDataCount = -1; //可使用的数据量
    this.data = data;
    this.utf8bytes = getUTF8Bytes(data);
    this.make();
  }
  QRCodeAlg.prototype = {
    constructor: QRCodeAlg,
    /**
                             * 获取二维码矩阵大小
                             * @return {num} 矩阵大小
                             */
    getModuleCount: function getModuleCount() {
      return this.moduleCount;
    },
    /**
        * 编码
        */
    make: function make() {
      this.getRightType();
      this.dataCache = this.createData();
      this.createQrcode();
    },
    /**
        * 设置二位矩阵功能图形
        * @param  {bool} test 表示是否在寻找最好掩膜阶段
        * @param  {num} maskPattern 掩膜的版本
        */
    makeImpl: function makeImpl(maskPattern) {
      this.moduleCount = this.typeNumber * 4 + 17;
      this.modules = new Array(this.moduleCount);
      for (var row = 0; row < this.moduleCount; row++) {
        this.modules[row] = new Array(this.moduleCount);
      }
      this.setupPositionProbePattern(0, 0);
      this.setupPositionProbePattern(this.moduleCount - 7, 0);
      this.setupPositionProbePattern(0, this.moduleCount - 7);
      this.setupPositionAdjustPattern();
      this.setupTimingPattern();
      this.setupTypeInfo(true, maskPattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(true);
      }
      this.mapData(this.dataCache, maskPattern);
    },
    /**
        * 设置二维码的位置探测图形
        * @param  {num} row 探测图形的中心横坐标
        * @param  {num} col 探测图形的中心纵坐标
        */
    setupPositionProbePattern: function setupPositionProbePattern(row, col) {
      for (var r = -1; r <= 7; r++) {
        if (row + r <= -1 || this.moduleCount <= row + r) continue;
        for (var c = -1; c <= 7; c++) {
          if (col + c <= -1 || this.moduleCount <= col + c) continue;
          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    },
    /**
        * 创建二维码
        * @return {[type]} [description]
        */
    createQrcode: function createQrcode() {
      var minLostPoint = 0;
      var pattern = 0;
      var bestModules = null;
      for (var i = 0; i < 8; i++) {
        this.makeImpl(i);
        var lostPoint = QRUtil.getLostPoint(this);
        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
          bestModules = this.modules;
        }
      }
      this.modules = bestModules;
      this.setupTypeInfo(false, pattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(false);
      }
    },
    /**
        * 设置定位图形
        * @return {[type]} [description]
        */
    setupTimingPattern: function setupTimingPattern() {
      for (var r = 8; r < this.moduleCount - 8; r++) {
        if (this.modules[r][6] != null) {
          continue;
        }
        this.modules[r][6] = r % 2 == 0;
        if (this.modules[6][r] != null) {
          continue;
        }
        this.modules[6][r] = r % 2 == 0;
      }
    },
    /**
        * 设置矫正图形
        * @return {[type]} [description]
        */
    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
      var pos = QRUtil.getPatternPosition(this.typeNumber);
      for (var i = 0; i < pos.length; i++) {
        for (var j = 0; j < pos.length; j++) {
          var row = pos[i];
          var col = pos[j];
          if (this.modules[row][col] != null) {
            continue;
          }
          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                this.modules[row + r][col + c] = true;
              } else {
                this.modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    },
    /**
        * 设置版本信息（7以上版本才有）
        * @param  {bool} test 是否处于判断最佳掩膜阶段
        * @return {[type]}      [description]
        */
    setupTypeNumber: function setupTypeNumber(test) {
      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
      for (var i = 0; i < 18; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    },
    /**
        * 设置格式信息（纠错等级和掩膜版本）
        * @param  {bool} test
        * @param  {num} maskPattern 掩膜版本
        * @return {}
        */
    setupTypeInfo: function setupTypeInfo(test, maskPattern) {
      var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);
      // vertical
      for (var i = 0; i < 15; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 6) {
          this.modules[i][8] = mod;
        } else if (i < 8) {
          this.modules[i + 1][8] = mod;
        } else {
          this.modules[this.moduleCount - 15 + i][8] = mod;
        }
        // horizontal
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 8) {
          this.modules[8][this.moduleCount - i - 1] = mod;
        } else if (i < 9) {
          this.modules[8][15 - i - 1 + 1] = mod;
        } else {
          this.modules[8][15 - i - 1] = mod;
        }
      }
      // fixed module
      this.modules[this.moduleCount - 8][8] = !test;
    },
    /**
        * 数据编码
        * @return {[type]} [description]
        */
    createData: function createData() {
      var buffer = new QRBitBuffer();
      var lengthBits = this.typeNumber > 9 ? 16 : 8;
      buffer.put(4, 4); //添加模式
      buffer.put(this.utf8bytes.length, lengthBits);
      for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
        buffer.put(this.utf8bytes[i], 8);
      }
      if (buffer.length + 4 <= this.totalDataCount * 8) {
        buffer.put(0, 4);
      }
      // padding
      while (buffer.length % 8 != 0) {
        buffer.putBit(false);
      }
      // padding
      while (true) {
        if (buffer.length >= this.totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeAlg.PAD0, 8);
        if (buffer.length >= this.totalDataCount * 8) {
          break;
        }
        buffer.put(QRCodeAlg.PAD1, 8);
      }
      return this.createBytes(buffer);
    },
    /**
        * 纠错码编码
        * @param  {buffer} buffer 数据编码
        * @return {[type]}
        */
    createBytes: function createBytes(buffer) {
      var offset = 0;
      var maxDcCount = 0;
      var maxEcCount = 0;
      var length = this.rsBlock.length / 3;
      var rsBlocks = new Array();
      for (var i = 0; i < length; i++) {
        var count = this.rsBlock[i * 3 + 0];
        var totalCount = this.rsBlock[i * 3 + 1];
        var dataCount = this.rsBlock[i * 3 + 2];
        for (var j = 0; j < count; j++) {
          rsBlocks.push([dataCount, totalCount]);
        }
      }
      var dcdata = new Array(rsBlocks.length);
      var ecdata = new Array(rsBlocks.length);
      for (var r = 0; r < rsBlocks.length; r++) {
        var dcCount = rsBlocks[r][0];
        var ecCount = rsBlocks[r][1] - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);
        for (var i = 0; i < dcdata[r].length; i++) {
          dcdata[r][i] = 0xff & buffer.buffer[i + offset];
        }
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for (var i = 0; i < ecdata[r].length; i++) {
          var modIndex = i + modPoly.getLength() - ecdata[r].length;
          ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
      }
      var data = new Array(this.totalDataCount);
      var index = 0;
      for (var i = 0; i < maxDcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i < dcdata[r].length) {
            data[index++] = dcdata[r][i];
          }
        }
      }
      for (var i = 0; i < maxEcCount; i++) {
        for (var r = 0; r < rsBlocks.length; r++) {
          if (i < ecdata[r].length) {
            data[index++] = ecdata[r][i];
          }
        }
      }
      return data;

    },
    /**
        * 布置模块，构建最终信息
        * @param  {} data
        * @param  {} maskPattern
        * @return {}
        */
    mapData: function mapData(data, maskPattern) {
      var inc = -1;
      var row = this.moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      for (var col = this.moduleCount - 1; col > 0; col -= 2) {
        if (col == 6) col--;
        while (true) {
          for (var c = 0; c < 2; c++) {
            if (this.modules[row][col - c] == null) {
              var dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
              }
              var mask = QRUtil.getMask(maskPattern, row, col - c);
              if (mask) {
                dark = !dark;
              }
              this.modules[row][col - c] = dark;
              bitIndex--;
              if (bitIndex == -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || this.moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    } };

  /**
          * 填充字段
          */
  QRCodeAlg.PAD0 = 0xEC;
  QRCodeAlg.PAD1 = 0x11;
  //---------------------------------------------------------------------
  // 纠错等级对应的编码
  //---------------------------------------------------------------------
  var QRErrorCorrectLevel = [1, 0, 3, 2];
  //---------------------------------------------------------------------
  // 掩膜版本
  //---------------------------------------------------------------------
  var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7 };

  //---------------------------------------------------------------------
  // 工具类
  //---------------------------------------------------------------------
  var QRUtil = {
    /*
                 每个版本矫正图形的位置
                  */
    PATTERN_POSITION_TABLE: [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]],

    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
    /*
                                                             BCH编码格式信息
                                                              */
    getBCHTypeInfo: function getBCHTypeInfo(data) {
      var d = data << 10;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
      }
      return (data << 10 | d) ^ QRUtil.G15_MASK;
    },
    /*
       BCH编码版本信息
        */
    getBCHTypeNumber: function getBCHTypeNumber(data) {
      var d = data << 12;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
      }
      return data << 12 | d;
    },
    /*
       获取BCH位信息
        */
    getBCHDigit: function getBCHDigit(data) {
      var digit = 0;
      while (data != 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    },
    /*
       获取版本对应的矫正图形位置
        */
    getPatternPosition: function getPatternPosition(typeNumber) {
      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    /*
       掩膜算法
        */
    getMask: function getMask(maskPattern, i, j) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return (i + j) % 2 == 0;
        case QRMaskPattern.PATTERN001:
          return i % 2 == 0;
        case QRMaskPattern.PATTERN010:
          return j % 3 == 0;
        case QRMaskPattern.PATTERN011:
          return (i + j) % 3 == 0;
        case QRMaskPattern.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
        case QRMaskPattern.PATTERN101:
          return i * j % 2 + i * j % 3 == 0;
        case QRMaskPattern.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 == 0;
        case QRMaskPattern.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);}

    },
    /*
       获取RS的纠错多项式
        */
    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
      var a = new QRPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i++) {
        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
      }
      return a;
    },
    /*
       获取评价
        */
    getLostPoint: function getLostPoint(qrCode) {
      var moduleCount = qrCode.getModuleCount(),
      lostPoint = 0,
      darkCount = 0;
      for (var row = 0; row < moduleCount; row++) {
        var sameCount = 0;
        var head = qrCode.modules[row][0];
        for (var col = 0; col < moduleCount; col++) {
          var current = qrCode.modules[row][col];
          //level 3 评价
          if (col < moduleCount - 6) {
            if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
              if (col < moduleCount - 10) {
                if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
                  lostPoint += 40;
                }
              } else if (col > 3) {
                if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
                  lostPoint += 40;
                }
              }
            }
          }
          //level 2 评价
          if (row < moduleCount - 1 && col < moduleCount - 1) {
            var count = 0;
            if (current) count++;
            if (qrCode.modules[row + 1][col]) count++;
            if (qrCode.modules[row][col + 1]) count++;
            if (qrCode.modules[row + 1][col + 1]) count++;
            if (count == 0 || count == 4) {
              lostPoint += 3;
            }
          }
          //level 1 评价
          if (head ^ current) {
            sameCount++;
          } else {
            head = current;
            if (sameCount >= 5) {
              lostPoint += 3 + sameCount - 5;
            }
            sameCount = 1;
          }
          //level 4 评价
          if (current) {
            darkCount++;
          }
        }
      }
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var head = qrCode.modules[0][col];
        for (var row = 0; row < moduleCount; row++) {
          var current = qrCode.modules[row][col];
          //level 3 评价
          if (row < moduleCount - 6) {
            if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
              if (row < moduleCount - 10) {
                if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
                  lostPoint += 40;
                }
              } else if (row > 3) {
                if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
                  lostPoint += 40;
                }
              }
            }
          }
          //level 1 评价
          if (head ^ current) {
            sameCount++;
          } else {
            head = current;
            if (sameCount >= 5) {
              lostPoint += 3 + sameCount - 5;
            }
            sameCount = 1;
          }
        }
      }
      // LEVEL4
      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    } };


  //---------------------------------------------------------------------
  // QRMath使用的数学工具
  //---------------------------------------------------------------------
  var QRMath = {
    /*
                 将n转化为a^m
                  */
    glog: function glog(n) {
      if (n < 1) {
        throw new Error("glog(" + n + ")");
      }
      return QRMath.LOG_TABLE[n];
    },
    /*
       将a^m转化为n
        */
    gexp: function gexp(n) {
      while (n < 0) {
        n += 255;
      }
      while (n >= 256) {
        n -= 255;
      }
      return QRMath.EXP_TABLE[n];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256) };


  for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
  }
  for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
  }
  for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
  }
  //---------------------------------------------------------------------
  // QRPolynomial 多项式
  //---------------------------------------------------------------------
  /**
   * 多项式类
   * @param {Array} num   系数
   * @param {num} shift a^shift
   */
  function QRPolynomial(num, shift) {
    if (num.length == undefined) {
      throw new Error(num.length + "/" + shift);
    }
    var offset = 0;
    while (offset < num.length && num[offset] == 0) {
      offset++;
    }
    this.num = new Array(num.length - offset + shift);
    for (var i = 0; i < num.length - offset; i++) {
      this.num[i] = num[i + offset];
    }
  }
  QRPolynomial.prototype = {
    get: function get(index) {
      return this.num[index];
    },
    getLength: function getLength() {
      return this.num.length;
    },
    /**
        * 多项式乘法
        * @param  {QRPolynomial} e 被乘多项式
        * @return {[type]}   [description]
        */
    multiply: function multiply(e) {
      var num = new Array(this.getLength() + e.getLength() - 1);
      for (var i = 0; i < this.getLength(); i++) {
        for (var j = 0; j < e.getLength(); j++) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
        }
      }
      return new QRPolynomial(num, 0);
    },
    /**
        * 多项式模运算
        * @param  {QRPolynomial} e 模多项式
        * @return {}
        */
    mod: function mod(e) {
      var tl = this.getLength(),
      el = e.getLength();
      if (tl - el < 0) {
        return this;
      }
      var num = new Array(tl);
      for (var i = 0; i < tl; i++) {
        num[i] = this.get(i);
      }
      while (num.length >= el) {
        var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));

        for (var i = 0; i < e.getLength(); i++) {
          num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
        }
        while (num[0] == 0) {
          num.shift();
        }
      }
      return new QRPolynomial(num, 0);
    } };


  //---------------------------------------------------------------------
  // RS_BLOCK_TABLE
  //---------------------------------------------------------------------
  /*
  二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]
   */
  var RS_BLOCK_TABLE = [
  // L
  // M
  // Q
  // H
  // 1
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],

  // 2
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],

  // 3
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],

  // 4
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],

  // 5
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],

  // 6
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],

  // 7
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],

  // 8
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],

  // 9
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],

  // 10
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],

  // 11
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],

  // 12
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],

  // 13
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],

  // 14
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],

  // 15
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],

  // 16
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],

  // 17
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],

  // 18
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],

  // 19
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],

  // 20
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],

  // 21
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],

  // 22
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],

  // 23
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],

  // 24
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],

  // 25
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],

  // 26
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],

  // 27
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],

  // 28
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],

  // 29
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],

  // 30
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],

  // 31
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],

  // 32
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],

  // 33
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],

  // 34
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],

  // 35
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],

  // 36
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],

  // 37
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],

  // 38
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],

  // 39
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],

  // 40
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16]];


  /**
                              * 根据数据获取对应版本
                              * @return {[type]} [description]
                              */
  QRCodeAlg.prototype.getRightType = function () {
    for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
      var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
      if (rsBlock == undefined) {
        throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
      }
      var length = rsBlock.length / 3;
      var totalDataCount = 0;
      for (var i = 0; i < length; i++) {
        var count = rsBlock[i * 3 + 0];
        var dataCount = rsBlock[i * 3 + 2];
        totalDataCount += dataCount * count;
      }
      var lengthBytes = typeNumber > 9 ? 2 : 1;
      if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
        this.typeNumber = typeNumber;
        this.rsBlock = rsBlock;
        this.totalDataCount = totalDataCount;
        break;
      }
    }
  };

  //---------------------------------------------------------------------
  // QRBitBuffer
  //---------------------------------------------------------------------
  function QRBitBuffer() {
    this.buffer = new Array();
    this.length = 0;
  }
  QRBitBuffer.prototype = {
    get: function get(index) {
      var bufIndex = Math.floor(index / 8);
      return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
    },
    put: function put(num, length) {
      for (var i = 0; i < length; i++) {
        this.putBit(num >>> length - i - 1 & 1);
      }
    },
    putBit: function putBit(bit) {
      var bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
      }
      this.length++;
    } };




  // xzedit
  var qrcodeAlgObjCache = [];
  /**
                               * 二维码构造函数，主要用于绘制
                               * @param  {参数列表} opt 传递参数
                               * @return {}
                               */
  QRCode = function QRCode(opt) {
    //设置默认参数
    this.options = {
      text: '',
      size: 256,
      correctLevel: 3,
      background: '#ffffff',
      foreground: '#000000',
      pdground: '#000000',
      image: '',
      imageSize: 30,
      canvasId: '_myQrCodeCanvas',
      context: opt.context };

    if (typeof opt === 'string') {// 只编码ASCII字符串
      opt = {
        text: opt };

    }
    if (opt) {
      for (var i in opt) {
        this.options[i] = opt[i];
      }
    }
    //使用QRCodeAlg创建二维码结构
    var qrCodeAlg = null;
    for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
      if (qrcodeAlgObjCache[i].text == this.options.text && qrcodeAlgObjCache[i].text.correctLevel == this.options.correctLevel) {
        qrCodeAlg = qrcodeAlgObjCache[i].obj;
        break;
      }
    }
    if (i == l) {
      qrCodeAlg = new QRCodeAlg(this.options.text, this.options.correctLevel);
      qrcodeAlgObjCache.push({
        text: this.options.text,
        correctLevel: this.options.correctLevel,
        obj: qrCodeAlg });

    }
    /**
       * 计算矩阵点的前景色
       * @param {Obj} config
       * @param {Number} config.row 点x坐标
       * @param {Number} config.col 点y坐标
       * @param {Number} config.count 矩阵大小
       * @param {Number} config.options 组件的options
       * @return {String}
       */
    var getForeGround = function getForeGround(config) {
      var options = config.options;
      if (options.pdground && (
      config.row > 1 && config.row < 5 && config.col > 1 && config.col < 5 ||
      config.row > config.count - 6 && config.row < config.count - 2 && config.col > 1 && config.col < 5 ||
      config.row > 1 && config.row < 5 && config.col > config.count - 6 && config.col < config.count - 2))
      {
        return options.pdground;
      }
      return options.foreground;
    };
    // 创建canvas
    var createCanvas = function createCanvas(options) {
      uni.showLoading({
        title: "二维码生成中",
        mask: true });

      var ctx = uni.createCanvasContext(options.canvasId, options.context);
      var count = qrCodeAlg.getModuleCount();
      var ratioSize = options.size;
      var ratioImgSize = options.imageSize;
      //计算每个点的长宽
      var tileW = (ratioSize / count).toPrecision(4);
      var tileH = (ratioSize / count).toPrecision(4);
      //绘制
      for (var row = 0; row < count; row++) {
        for (var col = 0; col < count; col++) {
          var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
          var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
          var foreground = getForeGround({
            row: row,
            col: col,
            count: count,
            options: options });

          ctx.setFillStyle(qrCodeAlg.modules[row][col] ? foreground : options.background);
          ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
        }
      }
      if (options.image) {




        // 画圆角矩形
        var drawRoundedRect = function drawRoundedRect(ctxi, x, y, width, height, r, lineWidth, fill, stroke) {
          ctxi.setLineWidth(lineWidth);
          ctxi.setFillStyle(options.background);
          ctxi.setStrokeStyle(options.background);
          ctxi.beginPath(); // draw top and top right corner 
          ctxi.moveTo(x + r, y);
          ctxi.arcTo(x + width, y, x + width, y + r, r); // draw right side and bottom right corner 
          ctxi.arcTo(x + width, y + height, x + width - r, y + height, r); // draw bottom and bottom left corner 
          ctxi.arcTo(x, y + height, x, y + height - r, r); // draw left and top left corner 
          ctxi.arcTo(x, y, x + r, y, r);
          ctxi.closePath();
          if (fill) {
            ctxi.fill();
          }
          if (stroke) {
            ctxi.stroke();
          }
        };var x = Number(((ratioSize - ratioImgSize) / 2).toFixed(2));var y = Number(((ratioSize - ratioImgSize) / 2).toFixed(2));drawRoundedRect(ctx, x, y, ratioImgSize, ratioImgSize, 2, 6, true, true);ctx.drawImage(options.image, x, y, ratioImgSize, ratioImgSize);
      }
      ctx.draw(false, function () {
        // 保存到临时区域
        setTimeout(function () {
          uni.canvasToTempFilePath({
            width: options.width,
            height: options.height,
            destWidth: options.width,
            destHeight: options.height,
            canvasId: options.canvasId,
            quality: Number(1),
            success: function success(res) {
              if (options.cbResult) {
                // 由于官方还没有统一此接口的输出字段，所以先判定下  支付宝为 res.apFilePath
                if (!empty(res.tempFilePath)) {
                  options.cbResult(res.tempFilePath);
                } else if (!empty(res.apFilePath)) {
                  options.cbResult(res.apFilePath);
                } else {
                  options.cbResult(res.tempFilePath);
                }
              }
            },
            fail: function fail(res) {
              if (options.cbResult) {
                options.cbResult(res);
              }
            },
            complete: function complete() {
              uni.hideLoading();
            } },
          options.context);
        }, options.text.length + 100);
      });
    };
    createCanvas(this.options);
    // 空判定
    var empty = function empty(v) {
      var tp = typeof v,
      rt = false;
      if (tp == "number" && String(v) == "") {
        rt = true;
      } else if (tp == "undefined") {
        rt = true;
      } else if (tp == "object") {
        if (JSON.stringify(v) == "{}" || JSON.stringify(v) == "[]" || v == null) rt = true;
      } else if (tp == "string") {
        if (v == "" || v == "undefined" || v == "null" || v == "{}" || v == "[]") rt = true;
      } else if (tp == "function") {
        rt = false;
      }
      return rt;
    };
  };
  QRCode.prototype.clear = function (fn) {
    var ctx = uni.createCanvasContext(this.options.canvasId, this.options.context);
    ctx.clearRect(0, 0, this.options.size, this.options.size);
    ctx.draw(false, function () {
      if (fn) {
        fn();
      }
    });
  };
})();var _default =

QRCode;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 4:
/*!**********************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/pages.json ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 40:
/*!**************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fmine%2Fmine"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _mine = _interopRequireDefault(__webpack_require__(/*! ./pages/mine/mine.vue */ 41));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_mine.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 48:
/*!*****************************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fcommunity%2Fcommunity-team"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _communityTeam = _interopRequireDefault(__webpack_require__(/*! ./pages/community/community-team.vue */ 49));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_communityTeam.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 56:
/*!****************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index/index.vue */ 57));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 64:
/*!*****************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fwithdraw%2Flog"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _log = _interopRequireDefault(__webpack_require__(/*! ./pages/withdraw/log.vue */ 65));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_log.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 72:
/*!*********************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fwithdraw%2Fhistory"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _history = _interopRequireDefault(__webpack_require__(/*! ./pages/withdraw/history.vue */ 73));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_history.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 8:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ 80:
/*!**********************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fwithdraw%2Fwithdraw"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _withdraw = _interopRequireDefault(__webpack_require__(/*! ./pages/withdraw/withdraw.vue */ 81));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_withdraw.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 88:
/*!********************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fservice%2Fservice"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _service = _interopRequireDefault(__webpack_require__(/*! ./pages/service/service.vue */ 89));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_service.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 96:
/*!*********************************************************************************!*\
  !*** D:/WWW/uni-app/RETC Ecology/main.js?{"page":"pages%2Fwithdraw%2Faddress"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _address = _interopRequireDefault(__webpack_require__(/*! ./pages/withdraw/address.vue */ 97));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_address.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map