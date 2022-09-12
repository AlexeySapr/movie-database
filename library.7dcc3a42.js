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
})({"clu1":[function(require,module,exports) {

},{"./../images/pics/mobile-main-1x.jpg":[["mobile-main-1x.2d47a89a.jpg","TmF8"],"TmF8"],"./../images/pics/mobile-main-2x.jpg":[["mobile-main-2x.dd8772f0.jpg","q6kn"],"q6kn"],"./../images/pics/tablet-main-1x.jpg":[["tablet-main-1x.ea2ba746.jpg","hGtK"],"hGtK"],"./../images/pics/tablet-main-2x.jpg":[["tablet-main-2x.bc59deb7.jpg","EMGT"],"EMGT"],"./../images/pics/desktop-main-1x.jpg":[["desktop-main-1x.9fd2be17.jpg","Y5XE"],"Y5XE"],"./../images/pics/desktop-main-2x.jpg":[["desktop-main-2x.d9278608.jpg","IYmD"],"IYmD"],"/home/runner/work/movie-database/movie-database/src/images/cancel.png":[["cancel.4ad50c01.png","kn2I"],"kn2I"]}],"MeeU":[function(require,module,exports) {
var define;
var global = arguments[3];
/*
* Notiflix Notify AIO (https://notiflix.github.io)
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: 3.2.5
* Author: Furkan MT (https://github.com/furcan)
* Copyright 2019 - 2022 Notiflix, MIT Licence (https://opensource.org/licenses/MIT)
*/

/* global define */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(root);
  } else {
    root.Notiflix = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

  'use strict';

  // COMMON: SSR check: begin
  if (typeof window === 'undefined' && typeof window.document === 'undefined') {
    return false;
  }
  // COMMON: SSR check: end

  // COMMON: Variables: begin
  var notiflixNamespace = 'Notiflix';
  var notiflixConsoleDocs = '\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation';
  var defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
  // COMMON: Variables: end

  // NOTIFY: Default Settings: begin
  var typesNotify = {
    Success: 'Success',
    Failure: 'Failure',
    Warning: 'Warning',
    Info: 'Info',
  };
  var newNotifySettings;
  var notifySettings = {
    wrapID: 'NotiflixNotifyWrap', // can not customizable
    overlayID: 'NotiflixNotifyOverlay', // can not customizable
    width: '280px',
    position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
    distance: '10px',
    opacity: 1,
    borderRadius: '5px',
    rtl: false,
    timeout: 3000,
    messageMaxLength: 110,
    backOverlay: false,
    backOverlayColor: 'rgba(0,0,0,0.5)',
    plainText: true,
    showOnlyTheLastOne: false,
    clickToClose: false,
    pauseOnHover: true,

    ID: 'NotiflixNotify',
    className: 'notiflix-notify',
    zindex: 4001,
    fontFamily: 'Quicksand',
    fontSize: '13px',
    cssAnimation: true,
    cssAnimationDuration: 400,
    cssAnimationStyle: 'fade', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
    closeButton: false,
    useIcon: true,
    useFontAwesome: false,
    fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
    fontAwesomeIconSize: '34px',

    success: {
      background: '#32c682',
      textColor: '#fff',
      childClassName: 'notiflix-notify-success',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-check-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(50,198,130,0.2)',
    },

    failure: {
      background: '#ff5549',
      textColor: '#fff',
      childClassName: 'notiflix-notify-failure',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-times-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(255,85,73,0.2)',
    },

    warning: {
      background: '#eebf31',
      textColor: '#fff',
      childClassName: 'notiflix-notify-warning',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-exclamation-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(238,191,49,0.2)',
    },

    info: {
      background: '#26c0d3',
      textColor: '#fff',
      childClassName: 'notiflix-notify-info',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-info-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(38,192,211,0.2)',
    },
  };
  // NOTIFY: Default Settings: end

  // COMMON: Console Error: begin
  var commonConsoleError = function (message) {
    return console.error('%c ' + notiflixNamespace + ' Error ', 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', '\n' + message + notiflixConsoleDocs);
  };
  // COMMON: Console Error: end

  // COMMON: Check Head or Body: begin
  var commonCheckHeadOrBody = function (element) {
    if (!element) { element = 'head'; }
    if (window.document[element] === null) {
      commonConsoleError('\nNotiflix needs to be appended to the "<' + element + '>" element, but you called it before the "<' + element + '>" element has been created.');
      return false;
    }
    return true;
  };
  // COMMON: Check Head or Body: end

  // COMMON: Set Internal CSS Codes: begin
  var commonSetInternalCSSCodes = function (getInternalCSSCodes, styleElementId) {
    // check doc head
    if (!commonCheckHeadOrBody('head')) { return false; }

    // internal css
    if (getInternalCSSCodes() !== null && !window.document.getElementById(styleElementId)) {
      var internalCSS = window.document.createElement('style');
      internalCSS.id = styleElementId;
      internalCSS.innerHTML = getInternalCSSCodes();
      window.document.head.appendChild(internalCSS);
    }
  };
  // COMMON: Set Internal CSS Codes: end

  // COMMON: Extend Options: begin
  var commonExtendOptions = function () {
    // variables
    var extended = {};
    var deep = false;
    var i = 0;
    // check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }
    // merge the object into the extended object
    var merge = function (obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // if property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = commonExtendOptions(extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };
    // loop through each object and conduct a merge
    for (; i < arguments.length; i++) {
      merge(arguments[i]);
    }
    return extended;
  };
  // COMMON: Extend Options: end

  // COMMON: Get Plaintext: begin
  var commonGetPlaintext = function (html) {
    var htmlPool = window.document.createElement('div');
    htmlPool.innerHTML = html;
    return htmlPool.textContent || htmlPool.innerText || '';
  };
  // COMMON: Get Plaintext: end

  // NOTIFY: Get Internal CSS Codes: begin
  var notifyGetInternalCSSCodes = function () {
    var notifyCSS = '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
    return notifyCSS || null;
  };
  // NOTIFY: Get Internal CSS Codes: end

  // NOTIFY: Create: begin
  var notifyCreateCounter = 0;
  var notifyCreate = function (notifyType, message, callbackOrOptions, options) {
    // check doc body
    if (!commonCheckHeadOrBody('body')) { return false; }

    // if not initialized pretend like init
    if (!newNotifySettings) {
      Notiflix.Notify.init({});
    }

    // create a backup for new settings
    var newNotifySettingsBackup = commonExtendOptions(true, newNotifySettings, {});

    // check callbackOrOptions and options: begin
    if ((typeof callbackOrOptions === 'object' && !Array.isArray(callbackOrOptions)) || (typeof options === 'object' && !Array.isArray(options))) {
      // new options
      var newOptions = {};
      if (typeof callbackOrOptions === 'object') {
        newOptions = callbackOrOptions;
      } else if (typeof options === 'object') {
        newOptions = options;
      }

      // extend new settings with the new options
      newNotifySettings = commonExtendOptions(true, newNotifySettings, newOptions);
    }
    // check callbackOrOptions and options: end

    // notify type
    var theType = newNotifySettings[notifyType.toLocaleLowerCase('en')];

    // notify counter
    notifyCreateCounter++;

    // check the message: begin
    if (typeof message !== 'string') {
      message = 'Notiflix ' + notifyType;
    }
    // check the message: end

    // if plainText is true => HTML tags not allowed: begin
    if (newNotifySettings.plainText) {
      message = commonGetPlaintext(message); // message plain text
    }
    // if plainText is true => HTML tags not allowed: end

    // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: begin
    if (!newNotifySettings.plainText && message.length > newNotifySettings.messageMaxLength) {
      // extend settings for error massege
      newNotifySettings = commonExtendOptions(true, newNotifySettings, { closeButton: true, messageMaxLength: 150 });
      // error message
      message = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.';
    }
    // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: end

    // check message max length: begin
    if (message.length > newNotifySettings.messageMaxLength) {
      message = message.substring(0, newNotifySettings.messageMaxLength) + '...';
    }
    // check message max length: end

    // font awesome icon style: begin
    if (newNotifySettings.fontAwesomeIconStyle === 'shadow') {
      theType.fontAwesomeIconColor = theType.background;
    }
    // font awesome icon style: end

    // if cssAnimaion is false => duration: begin
    if (!newNotifySettings.cssAnimation) {
      newNotifySettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion is false => duration: end

    // notify wrap: begin
    var ntflxNotifyWrap = window.document.getElementById(notifySettings.wrapID) || window.document.createElement('div');
    ntflxNotifyWrap.id = notifySettings.wrapID;
    ntflxNotifyWrap.style.width = newNotifySettings.width;
    ntflxNotifyWrap.style.zIndex = newNotifySettings.zindex;
    ntflxNotifyWrap.style.opacity = newNotifySettings.opacity;

    // wrap position: begin
    if (newNotifySettings.position === 'center-center') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = newNotifySettings.distance;
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
      ntflxNotifyWrap.style.margin = 'auto';
      ntflxNotifyWrap.classList.add('nx-flex-center-center');
      ntflxNotifyWrap.style.maxHeight = 'calc((100vh - ' + newNotifySettings.distance + ') - ' + newNotifySettings.distance + ')';
      ntflxNotifyWrap.style.display = 'flex';
      ntflxNotifyWrap.style.flexWrap = 'wrap';
      ntflxNotifyWrap.style.flexDirection = 'column';
      ntflxNotifyWrap.style.justifyContent = 'center';
      ntflxNotifyWrap.style.alignItems = 'center';
      ntflxNotifyWrap.style.pointerEvents = 'none';
    } else if (newNotifySettings.position === 'center-top') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = 'auto';
      ntflxNotifyWrap.style.margin = 'auto';
    } else if (newNotifySettings.position === 'center-bottom') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = 'auto';
      ntflxNotifyWrap.style.margin = 'auto';
    } else if (newNotifySettings.position === 'right-bottom') {
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = 'auto';
      ntflxNotifyWrap.style.left = 'auto';
    } else if (newNotifySettings.position === 'left-top') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = newNotifySettings.distance;
      ntflxNotifyWrap.style.right = 'auto';
      ntflxNotifyWrap.style.bottom = 'auto';
    } else if (newNotifySettings.position === 'left-bottom') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = 'auto';
      ntflxNotifyWrap.style.right = 'auto';
    } else { // 'right-top' or else
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = newNotifySettings.distance;
      ntflxNotifyWrap.style.left = 'auto';
      ntflxNotifyWrap.style.bottom = 'auto';
    }
    // wrap position: end

    // if background overlay is true: begin
    if (newNotifySettings.backOverlay) {
      var ntflxNotifyOverlay = window.document.getElementById(notifySettings.overlayID) || window.document.createElement('div');
      ntflxNotifyOverlay.id = notifySettings.overlayID;
      ntflxNotifyOverlay.style.width = '100%';
      ntflxNotifyOverlay.style.height = '100%';
      ntflxNotifyOverlay.style.position = 'fixed';
      ntflxNotifyOverlay.style.zIndex = newNotifySettings.zindex - 1;
      ntflxNotifyOverlay.style.left = 0;
      ntflxNotifyOverlay.style.top = 0;
      ntflxNotifyOverlay.style.right = 0;
      ntflxNotifyOverlay.style.bottom = 0;
      ntflxNotifyOverlay.style.background = theType.backOverlayColor || newNotifySettings.backOverlayColor;
      ntflxNotifyOverlay.className = newNotifySettings.cssAnimation ? 'nx-with-animation' : '';
      ntflxNotifyOverlay.style.animationDuration = newNotifySettings.cssAnimation ? newNotifySettings.cssAnimationDuration + 'ms' : '';

      if (!window.document.getElementById(notifySettings.overlayID)) {
        window.document.body.appendChild(ntflxNotifyOverlay);
      }
    }
    // if background overlay is true: end

    if (!window.document.getElementById(notifySettings.wrapID)) {
      window.document.body.appendChild(ntflxNotifyWrap);
    }
    // notify wrap: end

    // notify content: begin
    var ntflxNotify = window.document.createElement('div');
    ntflxNotify.id = newNotifySettings.ID + '-' + notifyCreateCounter;
    ntflxNotify.className = newNotifySettings.className + ' ' + theType.childClassName + ' ' + (newNotifySettings.cssAnimation ? 'nx-with-animation' : '') + ' ' + (newNotifySettings.useIcon ? 'nx-with-icon' : '') + ' nx-' + newNotifySettings.cssAnimationStyle + ' ' + (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function' ? 'nx-with-close-button' : '') + ' ' + (typeof callbackOrOptions === 'function' ? 'nx-with-callback' : '') + ' ' + (newNotifySettings.clickToClose ? 'nx-notify-click-to-close' : '');
    ntflxNotify.style.fontSize = newNotifySettings.fontSize;
    ntflxNotify.style.color = theType.textColor;
    ntflxNotify.style.background = theType.background;
    ntflxNotify.style.borderRadius = newNotifySettings.borderRadius;
    ntflxNotify.style.pointerEvents = 'all';

    // rtl: begin
    if (newNotifySettings.rtl) {
      ntflxNotify.setAttribute('dir', 'rtl');
      ntflxNotify.classList.add('nx-rtl-on');
    }
    // rtl: end

    // font-family: begin
    ntflxNotify.style.fontFamily = '"' + newNotifySettings.fontFamily + '", ' + defaultFontFamily;
    // font-family: end

    // use css animation: begin
    if (newNotifySettings.cssAnimation) {
      ntflxNotify.style.animationDuration = newNotifySettings.cssAnimationDuration + 'ms';
    }
    // use css animation: end

    // close button element: begin
    var closeButtonHTML = '';
    if (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
      closeButtonHTML = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + theType.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>';
    }
    // close buttpon element: end

    // use icon: begin
    if (newNotifySettings.useIcon) {
      // use font awesome
      if (newNotifySettings.useFontAwesome) {
        ntflxNotify.innerHTML = '<i style="color:' + theType.fontAwesomeIconColor + '; font-size:' + newNotifySettings.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + theType.fontAwesomeClassName + ' ' + (newNotifySettings.fontAwesomeIconStyle === 'shadow' ? 'nx-message-icon-fa-shadow' : 'nx-message-icon-fa-basic') + '"></i><span class="nx-message nx-with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
      }
      // use notiflix icon
      else {
        var svgIcon = '';
        if (notifyType === typesNotify.Success) {  // success
          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>';
        } else if (notifyType === typesNotify.Failure) { // failure
          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>';
        } else if (notifyType === typesNotify.Warning) { // warning
          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>';
        } else if (notifyType === typesNotify.Info) { // info
          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>';
        }
        ntflxNotify.innerHTML = svgIcon + '<span class="nx-message nx-with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
      }
    }
    // without icon
    else {
      ntflxNotify.innerHTML = '<span class="nx-message">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
    }
    // use icon: end
    // notify content: end

    // notify append or prepend: begin
    if (newNotifySettings.position === 'left-bottom' || newNotifySettings.position === 'right-bottom') { // the new one will be first
      var notifyWrap = window.document.getElementById(notifySettings.wrapID);
      notifyWrap.insertBefore(ntflxNotify, notifyWrap.firstChild);
    } else {
      window.document.getElementById(notifySettings.wrapID).appendChild(ntflxNotify);
    }
    // notify append or prepend: end

    // remove by timeout or click: begin
    var eachNotifyElement = window.document.getElementById(ntflxNotify.id);
    if (eachNotifyElement) {
      // timeout variables
      var timeoutHide;
      var timeoutRemove;

      // hide notify elm and hide overlay: begin
      var hideNotifyElementsAndOverlay = function () {
        eachNotifyElement.classList.add('nx-remove');
        var removeOverlay = window.document.getElementById(notifySettings.overlayID);
        if (removeOverlay && ntflxNotifyWrap.childElementCount <= 0) {
          removeOverlay.classList.add('nx-remove');
        }
        clearTimeout(timeoutHide);
      };
      // hide notify elm and hide overlay: end

      // remove notify elm and wrapper: begin
      var removeNotifyElmentsAndWrapper = function () {
        if (eachNotifyElement && eachNotifyElement.parentNode !== null) {
          eachNotifyElement.parentNode.removeChild(eachNotifyElement);
        }
        if (ntflxNotifyWrap.childElementCount <= 0 && ntflxNotifyWrap.parentNode !== null) { // if childs count === 0 remove wrap
          ntflxNotifyWrap.parentNode.removeChild(ntflxNotifyWrap);
          var removeOverlay = window.document.getElementById(notifySettings.overlayID);
          if (removeOverlay && removeOverlay.parentNode !== null) {
            removeOverlay.parentNode.removeChild(removeOverlay);
          }
        }
        clearTimeout(timeoutRemove);
      };
      // remove notify elm and wrapper: end

      // if has close button and callbackOrOptions is not a function: begin
      if (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
        var closeButtonElm = window.document.getElementById(ntflxNotify.id).querySelector('span.nx-close-button');
        closeButtonElm.addEventListener('click', function () {
          hideNotifyElementsAndOverlay();
          var clickToCloseTimeout = setTimeout(function () {
            removeNotifyElmentsAndWrapper();
            clearTimeout(clickToCloseTimeout);
          }, newNotifySettings.cssAnimationDuration);
        });
      }
      // if has close button and callbackOrOptions is not a function: end

      // if callbackOrOptions or click to close: begin
      if (typeof callbackOrOptions === 'function' || newNotifySettings.clickToClose) {
        eachNotifyElement.addEventListener('click', function () {
          if (typeof callbackOrOptions === 'function') {
            callbackOrOptions();
          }
          hideNotifyElementsAndOverlay();
          var callbackTimeout = setTimeout(function () {
            removeNotifyElmentsAndWrapper();
            clearTimeout(callbackTimeout);
          }, newNotifySettings.cssAnimationDuration);
        });
      }
      // if callbackOrOptions or click to close: end

      // else auto remove: begin
      if (!newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
        // auto remove: begin
        var autoRemove = function () {
          timeoutHide = setTimeout(function () {
            hideNotifyElementsAndOverlay();
          }, newNotifySettings.timeout);
          timeoutRemove = setTimeout(function () {
            removeNotifyElmentsAndWrapper();
          }, newNotifySettings.timeout + newNotifySettings.cssAnimationDuration);
        };
        autoRemove();
        // auto remove: end

        // pause auto remove: begin
        if (newNotifySettings.pauseOnHover) {
          eachNotifyElement.addEventListener('mouseenter', function () {
            eachNotifyElement.classList.add('nx-paused');
            clearTimeout(timeoutHide);
            clearTimeout(timeoutRemove);
          });
          eachNotifyElement.addEventListener('mouseleave', function () {
            eachNotifyElement.classList.remove('nx-paused');
            autoRemove();
          });
        }
        // pause auto remove: end
      }
      // else auto remove: end
    }
    // remove by timeout or click: end

    // notify - show only the last one: begin
    if (newNotifySettings.showOnlyTheLastOne && notifyCreateCounter > 0) {
      var allNotifyElmNotTheLastOne = window.document.querySelectorAll('[id^=' + newNotifySettings.ID + '-]:not([id=' + newNotifySettings.ID + '-' + notifyCreateCounter + '])');
      for (var i = 0; i < allNotifyElmNotTheLastOne.length; i++) {
        var eachNotifyElmNotLastOne = allNotifyElmNotTheLastOne[i];
        if (eachNotifyElmNotLastOne.parentNode !== null) {
          eachNotifyElmNotLastOne.parentNode.removeChild(eachNotifyElmNotLastOne);
        }
      }
    }
    // notify - show only the last one: end

    // extend new settings with the backup settings
    newNotifySettings = commonExtendOptions(true, newNotifySettings, newNotifySettingsBackup);

  };
  // NOTIFY: Create: end

  var Notiflix = {
    Notify: {
      // Init
      init: function (userNotifyOptions) {
        // extend options
        newNotifySettings = commonExtendOptions(true, notifySettings, userNotifyOptions);
        // internal css if exist
        commonSetInternalCSSCodes(notifyGetInternalCSSCodes, 'NotiflixNotifyInternalCSS');
      },
      // Merge First Init
      merge: function (userNotifyExtendOptions) {
        // if initialized already
        if (newNotifySettings) {
          newNotifySettings = commonExtendOptions(true, newNotifySettings, userNotifyExtendOptions);
        }
        // initialize first
        else {
          commonConsoleError('You have to initialize the Notify module before call Merge function.');
          return false;
        }
      },
      // Success
      success: function (message, callbackOrOptions, options) {
        notifyCreate(typesNotify.Success, message, callbackOrOptions, options);
      },
      // Failure
      failure: function (message, callbackOrOptions, options) {
        notifyCreate(typesNotify.Failure, message, callbackOrOptions, options);
      },
      // Warning
      warning: function (message, callbackOrOptions, options) {
        notifyCreate(typesNotify.Warning, message, callbackOrOptions, options);
      },
      // Info
      info: function (message, callbackOrOptions, options) {
        notifyCreate(typesNotify.Info, message, callbackOrOptions, options);
      },
    },
  };

  if (typeof window.Notiflix === 'object') {
    return commonExtendOptions(true, window.Notiflix, { Notify: Notiflix.Notify });
  } else {
    return { Notify: Notiflix.Notify };
  }

});
},{}],"FqPt":[function(require,module,exports) {
var define;
var global = arguments[3];
/*
* Notiflix Loading AIO (https://notiflix.github.io)
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: 3.2.5
* Author: Furkan MT (https://github.com/furcan)
* Copyright 2019 - 2022 Notiflix, MIT Licence (https://opensource.org/licenses/MIT)
*/

/* global define */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(root);
  } else {
    root.Notiflix = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

  'use strict';

  // COMMON: SSR check: begin
  if (typeof window === 'undefined' && typeof window.document === 'undefined') {
    return false;
  }
  // COMMON: SSR check: end

  // COMMON: Variables: begin
  var notiflixNamespace = 'Notiflix';
  var notiflixConsoleDocs = '\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation';
  var defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
  // COMMON: Variables: end

  // LOADING: Default Settings: begin
  var typesLoading = {
    Standard: 'Standard',
    Hourglass: 'Hourglass',
    Circle: 'Circle',
    Arrows: 'Arrows',
    Dots: 'Dots',
    Pulse: 'Pulse',
    Custom: 'Custom',
    Notiflix: 'Notiflix',
  };
  var newLoadingSettings;
  var loadingSettings = {
    ID: 'NotiflixLoadingWrap', // can not customizable
    className: 'notiflix-loading',
    zindex: 4000,
    backgroundColor: 'rgba(0,0,0,0.8)',
    rtl: false,
    fontFamily: 'Quicksand',
    cssAnimation: true,
    cssAnimationDuration: 400,
    clickToClose: false,
    customSvgUrl: null,
    customSvgCode: null,
    svgSize: '80px',
    svgColor: '#32c682',
    messageID: 'NotiflixLoadingMessage',
    messageFontSize: '15px',
    messageMaxLength: 34,
    messageColor: '#dcdcdc',
  };
  // LOADING: Default Settings: end

  // COMMON: Console Error: begin
  var commonConsoleError = function (message) {
    return console.error('%c ' + notiflixNamespace + ' Error ', 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', '\n' + message + notiflixConsoleDocs);
  };
  // COMMON: Console Error: end

  // COMMON: Check Head or Body: begin
  var commonCheckHeadOrBody = function (element) {
    if (!element) { element = 'head'; }
    if (window.document[element] === null) {
      commonConsoleError('\nNotiflix needs to be appended to the "<' + element + '>" element, but you called it before the "<' + element + '>" element has been created.');
      return false;
    }
    return true;
  };
  // COMMON: Check Head or Body: end

  // COMMON: Set Internal CSS Codes: begin
  var commonSetInternalCSSCodes = function (getInternalCSSCodes, styleElementId) {
    // check doc head
    if (!commonCheckHeadOrBody('head')) { return false; }

    // internal css
    if (getInternalCSSCodes() !== null && !window.document.getElementById(styleElementId)) {
      var internalCSS = window.document.createElement('style');
      internalCSS.id = styleElementId;
      internalCSS.innerHTML = getInternalCSSCodes();
      window.document.head.appendChild(internalCSS);
    }
  };
  // COMMON: Set Internal CSS Codes: end

  // COMMON: Extend Options: begin
  var commonExtendOptions = function () {
    // variables
    var extended = {};
    var deep = false;
    var i = 0;
    // check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }
    // merge the object into the extended object
    var merge = function (obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // if property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = commonExtendOptions(extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };
    // loop through each object and conduct a merge
    for (; i < arguments.length; i++) {
      merge(arguments[i]);
    }
    return extended;
  };
  // COMMON: Extend Options: end

  // COMMON: Get Plaintext: begin
  var commonGetPlaintext = function (html) {
    var htmlPool = window.document.createElement('div');
    htmlPool.innerHTML = html;
    return htmlPool.textContent || htmlPool.innerText || '';
  };
  // COMMON: Get Plaintext: end

  // LOADING && BLOCK: SVG Icon Standard: begin
  var loadingAndBlockSvgIconStandard = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var standard = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + color + '" width="' + width + '" height="' + width + '" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';
    return standard;
  };
  // LOADING && BLOCK: SVG Icon Standard: end

  // LOADING && BLOCK: SVG Icon Hourglass: begin
  var loadingAndBlockSvgIconHourglass = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var hourglass = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="' + color + '" width="' + width + '" height="' + width + '" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';
    return hourglass;
  };
  // LOADING && BLOCK: SVG Icon Hourglass: end

  // LOADING && BLOCK: SVG Icon Circle: begin
  var loadingAndBlockSvgIconCircle = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var circle = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + width + '" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:' + width + ';-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:' + width + ';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="' + color + '" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';
    return circle;
  };
  // LOADING && BLOCK: SVG Icon Circle: end

  // LOADING && BLOCK: SVG Icon Arrows: begin
  var loadingAndBlockSvgIconArrows = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var arrows = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + color + '" width="' + width + '" height="' + width + '" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';
    return arrows;
  };
  // LOADING && BLOCK: SVG Icon Arrows: end

  // LOADING && BLOCK: SVG Icon Dots: begin
  var loadingAndBlockSvgIconDots = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var dots = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + color + '" width="' + width + '" height="' + width + '" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';
    return dots;
  };
  // LOADING && BLOCK: SVG Icon Dots: end

  // LOADING && BLOCK: SVG Icon Pulse: begin
  var loadingAndBlockSvgIconPulse = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var pulse = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + color + '" width="' + width + '" height="' + width + '" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';
    return pulse;
  };
  // LOADING && BLOCK: SVG Icon Pulse: end

  // LOADING && BLOCK: SVG Icon Notiflix: begin
  var loadingAndBlockSvgIconNotiflix = function (width, white, green) {
    if (!width) { width = '60px'; }
    if (!white) { white = '#f8f8f8'; }
    if (!green) { green = '#32c682'; }
    var notiflixIcon = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="' + width + '" height="' + width + '" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:' + white + ';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="' + green + '" stroke="' + green + '" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';
    return notiflixIcon;
  };
  // LOADING && BLOCK: SVG Icon Notiflix: end

  // LOADING: Get Internal CSS Codes: begin
  var loadingGetInternalCSSCodes = function () {
    var loadingCSS = '[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}';
    return loadingCSS || null;
  };
  // LOADING: Get Internal CSS Codes: end

  // LOADING: Create: begin
  var loadingCreate = function (loadingType, messageOrOptions, options, display, delay) {
    // check doc body
    if (!commonCheckHeadOrBody('body')) { return false; }

    // if not initialized pretend like init
    if (!newLoadingSettings) {
      Notiflix.Loading.init({});
    }

    // create a backup for new settings
    var newLoadingSettingsBackup = commonExtendOptions(true, newLoadingSettings, {});

    // check "messageOrOptions" and "options": begin
    if ((typeof messageOrOptions === 'object' && !Array.isArray(messageOrOptions)) || (typeof options === 'object' && !Array.isArray(options))) {
      // new options
      var newOptions = {};
      if (typeof messageOrOptions === 'object') {
        newOptions = messageOrOptions;
      } else if (typeof options === 'object') {
        newOptions = options;
      }

      // extend new settings with the new options
      newLoadingSettings = commonExtendOptions(true, newLoadingSettings, newOptions);
    }
    // check "messageOrOptions" and "options": end

    // check the message
    var message = '';
    if (typeof messageOrOptions === 'string' && messageOrOptions.length > 0) {
      message = messageOrOptions;
    }

    // show loading
    if (display) {

      // if message settings: begin
      if (message.length > newLoadingSettings.messageMaxLength) {
        message = commonGetPlaintext(message).toString().substring(0, newLoadingSettings.messageMaxLength) + '...';
      } else {
        message = commonGetPlaintext(message).toString();
      }
      var messageHTML = '';
      if (message.length > 0) {
        messageHTML = '<p id="' + newLoadingSettings.messageID + '" class="nx-loading-message" style="color:' + newLoadingSettings.messageColor + ';font-size:' + newLoadingSettings.messageFontSize + ';">' + message + '</p>';
      }
      // if message settings: end

      // if cssAnimaion is false => duration: begin
      if (!newLoadingSettings.cssAnimation) {
        newLoadingSettings.cssAnimationDuration = 0;
      }
      // if cssAnimaion is false => duration: end

      // svgIcon: begin
      var svgIcon = '';
      if (loadingType === typesLoading.Standard) {
        svgIcon = loadingAndBlockSvgIconStandard(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (loadingType === typesLoading.Hourglass) {
        svgIcon = loadingAndBlockSvgIconHourglass(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (loadingType === typesLoading.Circle) {
        svgIcon = loadingAndBlockSvgIconCircle(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (loadingType === typesLoading.Arrows) {
        svgIcon = loadingAndBlockSvgIconArrows(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (loadingType === typesLoading.Dots) {
        svgIcon = loadingAndBlockSvgIconDots(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (loadingType === typesLoading.Pulse) {
        svgIcon = loadingAndBlockSvgIconPulse(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (
        loadingType === typesLoading.Custom &&
        newLoadingSettings.customSvgCode !== null &&
        newLoadingSettings.customSvgUrl === null
      ) {
        svgIcon = newLoadingSettings.customSvgCode || '';
      } else if (
        loadingType === typesLoading.Custom &&
        newLoadingSettings.customSvgUrl !== null &&
        newLoadingSettings.customSvgCode === null
      ) {
        svgIcon = '<img class="nx-custom-loading-icon" width="' + newLoadingSettings.svgSize + '" height="' + newLoadingSettings.svgSize + '" src="' + newLoadingSettings.customSvgUrl + '" alt="Notiflix">';
      } else if (
        loadingType === typesLoading.Custom &&
        (newLoadingSettings.customSvgUrl === null || newLoadingSettings.customSvgCode === null)
      ) {
        commonConsoleError('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.');
        return false;
      } else {
        svgIcon = loadingAndBlockSvgIconNotiflix(newLoadingSettings.svgSize, '#f8f8f8', '#32c682');
      }
      var svgSizeAsDigit = parseInt((newLoadingSettings.svgSize || '').replace(/[^0-9]/g, ''));
      var winWidth = window.innerWidth;
      var maxSvgWidthPx = svgSizeAsDigit >= winWidth ? (winWidth - 40) + 'px' : svgSizeAsDigit + 'px';
      var svgIconHTML = '<div style="width:' + maxSvgWidthPx + '; height:' + maxSvgWidthPx + ';" class="' + newLoadingSettings.className + '-icon' + (message.length > 0 ? ' nx-with-message' : '') + '">' + svgIcon + '</div>';
      // svgIcon: end

      // loading wrap: begin
      var ntflxLoadingWrap = window.document.createElement('div');
      ntflxLoadingWrap.id = loadingSettings.ID;
      ntflxLoadingWrap.className = newLoadingSettings.className + (newLoadingSettings.cssAnimation ? ' nx-with-animation' : '') + (newLoadingSettings.clickToClose ? ' nx-loading-click-to-close' : '');
      ntflxLoadingWrap.style.zIndex = newLoadingSettings.zindex;
      ntflxLoadingWrap.style.background = newLoadingSettings.backgroundColor;
      ntflxLoadingWrap.style.animationDuration = newLoadingSettings.cssAnimationDuration + 'ms';
      ntflxLoadingWrap.style.fontFamily = '"' + newLoadingSettings.fontFamily + '", ' + defaultFontFamily;
      ntflxLoadingWrap.style.display = 'flex';
      ntflxLoadingWrap.style.flexWrap = 'wrap';
      ntflxLoadingWrap.style.flexDirection = 'column';
      ntflxLoadingWrap.style.alignItems = 'center';
      ntflxLoadingWrap.style.justifyContent = 'center';

      // rtl: begin
      if (newLoadingSettings.rtl) {
        ntflxLoadingWrap.setAttribute('dir', 'rtl');
        ntflxLoadingWrap.classList.add('nx-rtl-on');
      }
      // rtl: end

      // append: begin
      ntflxLoadingWrap.innerHTML = svgIconHTML + messageHTML;

      // if there is no loading element
      if (!window.document.getElementById(ntflxLoadingWrap.id)) {
        // append
        window.document.body.appendChild(ntflxLoadingWrap);

        // if click to close
        if (newLoadingSettings.clickToClose) {
          var loadingWrapElm = window.document.getElementById(ntflxLoadingWrap.id);
          loadingWrapElm.addEventListener('click', function () {
            ntflxLoadingWrap.classList.add('nx-remove');
            var timeout = setTimeout(function () {
              if (ntflxLoadingWrap.parentNode !== null) {
                ntflxLoadingWrap.parentNode.removeChild(ntflxLoadingWrap);
                clearTimeout(timeout);
              }
            }, newLoadingSettings.cssAnimationDuration);
          });
        }
      }
      // append: end
    }
    // remove loading
    else {
      // if there is a loading element
      if (window.document.getElementById(loadingSettings.ID)) {
        var loadingElm = window.document.getElementById(loadingSettings.ID);
        var timeout = setTimeout(function () {
          loadingElm.classList.add('nx-remove');
          var timeout2 = setTimeout(function () {
            if (loadingElm.parentNode !== null) {
              loadingElm.parentNode.removeChild(loadingElm);
              clearTimeout(timeout2);
            }
          }, newLoadingSettings.cssAnimationDuration);
          clearTimeout(timeout);
        }, delay);
      }
    }

    // extend new settings with the backup settings
    newLoadingSettings = commonExtendOptions(true, newLoadingSettings, newLoadingSettingsBackup);
  };
  // LOADING: Create: end

  // LOADING: Change Message: begin
  var loadingChangeMessage = function (newMessage) {
    // check the new message
    if (typeof newMessage !== 'string') {
      newMessage = '';
    }
    // if has any loading
    var messageWrap = window.document.getElementById(loadingSettings.ID);
    if (messageWrap) {
      // if there is a new message
      if (newMessage.length > 0) {
        // max length: begin
        if (newMessage.length > newLoadingSettings.messageMaxLength) {
          newMessage = commonGetPlaintext(newMessage).substring(0, newLoadingSettings.messageMaxLength) + '...';
        } else {
          newMessage = commonGetPlaintext(newMessage);
        }
        // max length: end

        // there is a message element
        var oldMessageElm = messageWrap.getElementsByTagName('p')[0];
        if (oldMessageElm) {
          oldMessageElm.innerHTML = newMessage; // change the message
        }
        // there is no message element
        else {
          // create a new message element: begin
          var newMessageHTML = window.document.createElement('p');
          newMessageHTML.id = newLoadingSettings.messageID;
          newMessageHTML.className = 'nx-loading-message nx-loading-message-new';
          newMessageHTML.style.color = newLoadingSettings.messageColor;
          newMessageHTML.style.fontSize = newLoadingSettings.messageFontSize;
          newMessageHTML.innerHTML = newMessage;
          messageWrap.appendChild(newMessageHTML);
          // create a new message element: end
        }
      }
      // if no message
      else {
        commonConsoleError('Where is the new message?');
      }
    }
  };
  // LOADING: Change Message: end

  var Notiflix = {
    Loading: {
      // Init
      init: function (userLoadingOptions) {
        // extend options
        newLoadingSettings = commonExtendOptions(true, loadingSettings, userLoadingOptions);
        // internal css if exist
        commonSetInternalCSSCodes(loadingGetInternalCSSCodes, 'NotiflixLoadingInternalCSS');
      },
      // Merge First Init
      merge: function (userLoadingExtendOptions) {
        // if initialized already
        if (newLoadingSettings) {
          newLoadingSettings = commonExtendOptions(true, newLoadingSettings, userLoadingExtendOptions);
        }
        // initialize first
        else {
          commonConsoleError('You have to initialize the Loading module before call Merge function.');
          return false;
        }
      },
      // Standard
      standard: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Standard, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Hourglass
      hourglass: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Hourglass, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Circle
      circle: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Circle, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Arrows
      arrows: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Arrows, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Dots
      dots: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Dots, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Pulse
      pulse: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Pulse, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Custom
      custom: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Custom, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Notiflix
      notiflix: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Notiflix, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Remove
      remove: function (delay) {
        if (typeof delay !== 'number') { delay = 0; }
        loadingCreate(null, null, null, false, delay); // false => hide/remove
      },
      // Change The Message
      change: function (newMessage) {
        loadingChangeMessage(newMessage);
      },
    },
  };

  if (typeof window.Notiflix === 'object') {
    return commonExtendOptions(true, window.Notiflix, { Loading: Notiflix.Loading });
  } else {
    return { Loading: Notiflix.Loading };
  }

});
},{}],"jPMh":[function(require,module,exports) {
var define;
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Pagination"] = factory();
	else
		root["tui"] = root["tui"] || {}, root["tui"]["Pagination"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Extend the target object from other objects.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * @module object
 */

/**
 * Extend the target object from other objects.
 * @param {object} target - Object that will be extended
 * @param {...object} objects - Objects as sources
 * @returns {object} Extended object
 * @memberof module:object
 */
function extend(target, objects) { // eslint-disable-line no-unused-vars
  var hasOwnProp = Object.prototype.hasOwnProperty;
  var source, prop, i, len;

  for (i = 1, len = arguments.length; i < len; i += 1) {
    source = arguments[i];
    for (prop in source) {
      if (hasOwnProp.call(source, prop)) {
        target[prop] = source[prop];
      }
    }
  }

  return target;
}

module.exports = extend;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is undefined or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is undefined or not.
 * If the given variable is undefined, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is undefined?
 * @memberof module:type
 */
function isUndefined(obj) {
  return obj === undefined; // eslint-disable-line no-undefined
}

module.exports = isUndefined;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is an instance of Array or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is an instance of Array or not.
 * If the given variable is an instance of Array, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is array instance?
 * @memberof module:type
 */
function isArray(obj) {
  return obj instanceof Array;
}

module.exports = isArray;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isArray = __webpack_require__(2);
var forEachArray = __webpack_require__(17);
var forEachOwnProperties = __webpack_require__(6);

/**
 * @module collection
 */

/**
 * Execute the provided callback once for each property of object(or element of array) which actually exist.
 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property(or The value of the element)
 *  2) The name of the property(or The index of the element)
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEach = require('tui-code-snippet/collection/forEach'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEach([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 *
 * // In case of Array-like object
 * var array = Array.prototype.slice.call(arrayLike); // change to array
 * forEach(array, function(value){
 *     sum += value;
 * });
 */
function forEach(obj, iteratee, context) {
  if (isArray(obj)) {
    forEachArray(obj, iteratee, context);
  } else {
    forEachOwnProperties(obj, iteratee, context);
  }
}

module.exports = forEach;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a string or not.
 * If the given variable is a string, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is string?
 * @memberof module:type
 */
function isString(obj) {
  return typeof obj === 'string' || obj instanceof String;
}

module.exports = isString;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is a function or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a function or not.
 * If the given variable is a function, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is function?
 * @memberof module:type
 */
function isFunction(obj) {
  return obj instanceof Function;
}

module.exports = isFunction;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Execute the provided callback once for each property of object which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Execute the provided callback once for each property of object which actually exist.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property
 *  2) The name of the property
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee  Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachOwnProperties({a:1,b:2,c:3}, function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */
function forEachOwnProperties(obj, iteratee, context) {
  var key;

  context = context || null;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (iteratee.call(context, obj[key], key, obj) === false) {
        break;
      }
    }
  }
}

module.exports = forEachOwnProperties;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview
 * This module provides a function to make a constructor
 * that can inherit from the other constructors like the CLASS easily.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var inherit = __webpack_require__(18);
var extend = __webpack_require__(0);

/**
 * @module defineClass
 */

/**
 * Help a constructor to be defined and to inherit from the other constructors
 * @param {*} [parent] Parent constructor
 * @param {Object} props Members of constructor
 *  @param {Function} props.init Initialization method
 *  @param {Object} [props.static] Static members of constructor
 * @returns {*} Constructor
 * @memberof module:defineClass
 * @example
 * var defineClass = require('tui-code-snippet/defineClass/defineClass'); // node, commonjs
 *
 * //-- #2. Use property --//
 * var Parent = defineClass({
 *     init: function() { // constuructor
 *         this.name = 'made by def';
 *     },
 *     method: function() {
 *         // ...
 *     },
 *     static: {
 *         staticMethod: function() {
 *              // ...
 *         }
 *     }
 * });
 *
 * var Child = defineClass(Parent, {
 *     childMethod: function() {}
 * });
 *
 * Parent.staticMethod();
 *
 * var parentInstance = new Parent();
 * console.log(parentInstance.name); //made by def
 * parentInstance.staticMethod(); // Error
 *
 * var childInstance = new Child();
 * childInstance.method();
 * childInstance.childMethod();
 */
function defineClass(parent, props) {
  var obj;

  if (!props) {
    props = parent;
    parent = null;
  }

  obj = props.init || function() {};

  if (parent) {
    inherit(obj, parent);
  }

  if (props.hasOwnProperty('static')) {
    extend(obj, props['static']);
    delete props['static'];
  }

  extend(obj.prototype, props);

  return obj;
}

module.exports = defineClass;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable complexity */
/**
 * @fileoverview Returns the first index at which a given element can be found in the array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isArray = __webpack_require__(2);

/**
 * @module array
 */

/**
 * Returns the first index at which a given element can be found in the array
 * from start index(default 0), or -1 if it is not present.
 * It compares searchElement to elements of the Array using strict equality
 * (the same method used by the ===, or triple-equals, operator).
 * @param {*} searchElement Element to locate in the array
 * @param {Array} array Array that will be traversed.
 * @param {number} startIndex Start index in array for searching (default 0)
 * @returns {number} the First index at which a given element, or -1 if it is not present
 * @memberof module:array
 * @example
 * var inArray = require('tui-code-snippet/array/inArray'); // node, commonjs
 *
 * var arr = ['one', 'two', 'three', 'four'];
 * var idx1 = inArray('one', arr, 3); // -1
 * var idx2 = inArray('one', arr); // 0
 */
function inArray(searchElement, array, startIndex) {
  var i;
  var length;
  startIndex = startIndex || 0;

  if (!isArray(array)) {
    return -1;
  }

  if (Array.prototype.indexOf) {
    return Array.prototype.indexOf.call(array, searchElement, startIndex);
  }

  length = array.length;
  for (i = startIndex; startIndex >= 0 && i < length; i += 1) {
    if (array[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

module.exports = inArray;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var template = __webpack_require__(29);
var sendHostname = __webpack_require__(30);
var isFunction = __webpack_require__(5);

var util = {
  /**
   * Capitalize first letter
   * @param {string} str - String to change
   * @returns {string} Changed string
   */
  capitalizeFirstLetter: function(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
  },

  /**
   * Check the element is contained
   * @param {HTMLElement} find - Target element
   * @param {HTMLElement} parent - Wrapper element
   * @returns {boolean} Whether contained or not
   */
  isContained: function(find, parent) {
    if (!parent) {
      return false;
    }

    return find === parent ? true : parent.contains(find);
  },

  /**
   * Create an new element by template literals.
   * @param {string|function} tmpl - template
   * @param {Object} context - context
   * @returns {HTMLElement}
   */
  createElementByTemplate: function(tmpl, context) {
    var parent = document.createElement('div');
    var html = isFunction(tmpl) ? tmpl(context) : template(tmpl, context);
    parent.innerHTML = html;

    return parent.firstChild;
  },

  /**
   * Create a new function that, when called, has its this keyword set to the provided value.
   * @param {function} fn A original function before binding
   * @param {*} obj context of function in arguments[0]
   * @returns {function} A new bound function with context that is in arguments[1]
   */
  bind: function(fn, obj) {
    var slice = Array.prototype.slice;
    var args;

    if (fn.bind) {
      return fn.bind.apply(fn, slice.call(arguments, 1));
    }

    args = slice.call(arguments, 2);

    return function() {
      return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
    };
  },

  /**
   * Send hostname for GA
   * @ignore
   */
  sendHostName: function() {
    sendHostname('pagination', 'UA-129987462-1');
  }
};

module.exports = util;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview The entry file of Pagination components
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 */



__webpack_require__(11);

module.exports = __webpack_require__(12);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CustomEvents = __webpack_require__(13);
var defineClass = __webpack_require__(7);
var extend = __webpack_require__(0);
var isUndefined = __webpack_require__(1);

var View = __webpack_require__(20);
var util = __webpack_require__(9);

var defaultOption = {
  totalItems: 10,
  itemsPerPage: 10,
  visiblePages: 10,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  usageStatistics: true
};

/**
 * Pagination class
 * @class Pagination
 * @param {string|HTMLElement|jQueryObject} container - Container element or selector.
 * In case of a string, it is considered as an id selector and find the element by id.
 * If there is no element, it is considered as a selector and find the element by querySelector().
 * Passing jQueryObject and considering an id selector at first will be deprecated in v4.0.0.
 * @param {object} options - Option object
 *     @param {number} [options.totalItems=10] Total item count
 *     @param {number} [options.itemsPerPage=10] Item count per page
 *     @param {number} [options.visiblePages=10] Display page link count
 *     @param {number} [options.page=1] Display page after pagination draw.
 *     @param {boolean}[options.centerAlign=false] Whether current page keep center or not
 *     @param {string} [options.firstItemClassName='first-child'] The class name of the first item
 *     @param {string} [options.lastItemClassName='last-child'] The class name of the last item
 *     @param {object} [options.template] A markup string set to make element. Refer to {@link https://github.com/nhn/tui.pagination/blob/master/docs/getting-started.md#how-to-use-template Getting Started: How to use template}.
 *         @param {string|function} [options.template.page] HTML template
 *         @param {string|function} [options.template.currentPage] HTML template
 *         @param {string|function} [options.template.moveButton] HTML template
 *         @param {string|function} [options.template.disabledMoveButton] HTML template
 *         @param {string|function} [options.template.moreButton] HTML template
 *     @param {boolean} [options.usageStatistics=true] Send the hostname to google analytics.
 *         If you do not want to send the hostname, this option set to false.
 * @example
 * // ES6
 * import Pagination from 'tui-pagination';
 *
 * // CommonJS
 * const Pagination = require('tui-pagination');
 *
 * // Browser
 * const Pagination = tui.Pagination;
 *
 * const container = document.getElementById('pagination');
 * const options = { // below default value of options
 *      totalItems: 10,
 *      itemsPerPage: 10,
 *      visiblePages: 10,
 *      page: 1,
 *      centerAlign: false,
 *      firstItemClassName: 'tui-first-child',
 *      lastItemClassName: 'tui-last-child',
 *      template: {
 *          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
 *          currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
 *          moveButton:
 *              '<a href="#" class="tui-page-btn tui-{{type}}">' +
 *                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
 *              '</a>',
 *          disabledMoveButton:
 *              '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
 *                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
 *              '</span>',
 *          moreButton:
 *              '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
 *                  '<span class="tui-ico-ellip">...</span>' +
 *              '</a>'
 *      }
 * };
 * const pagination = new Pagination(container, options);
 */
var Pagination = defineClass(
  /** @lends Pagination.prototype */ {
    init: function(container, options) {
      /**
       * Option object
       * @type {object}
       * @private
       */
      this._options = extend({}, defaultOption, options);

      /**
       * Current page number
       * @type {number}
       * @private
       */
      this._currentPage = 0;

      /**
       * View instance
       * @type {View}
       * @private
       */
      this._view = new View(container, this._options, util.bind(this._onClickHandler, this));

      this._paginate();

      if (this._options.usageStatistics) {
        util.sendHostName();
      }
    },

    /**
     * Set current page
     * @param {number} page - Current page
     * @private
     */
    _setCurrentPage: function(page) {
      this._currentPage = page || this._options.page;
    },

    /**
     * Get last page number
     * @returns {number} Last page number
     * @private
     */
    _getLastPage: function() {
      var lastPage = Math.ceil(this._options.totalItems / this._options.itemsPerPage);

      return !lastPage ? 1 : lastPage;
    },

    /**
     * Index of list in total lists
     * @param {number} pageNumber - Page number
     * @returns {number} Page index or number
     * @private
     */
    _getPageIndex: function(pageNumber) {
      var left, pageIndex;

      if (this._options.centerAlign) {
        left = Math.floor(this._options.visiblePages / 2);
        pageIndex = pageNumber - left;
        pageIndex = Math.max(pageIndex, 1);
        pageIndex = Math.min(pageIndex, this._getLastPage() - this._options.visiblePages + 1);

        return pageIndex;
      }

      return Math.ceil(pageNumber / this._options.visiblePages);
    },

    /**
     * Get relative page
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Relative page number
     * @private
     */
    _getRelativePage: function(moveType) {
      var isPrevMove = moveType === 'prev';
      var currentPage = this.getCurrentPage();

      return isPrevMove ? currentPage - 1 : currentPage + 1;
    },

    /**
     * Get more page index
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Page index
     * @private
     */
    _getMorePageIndex: function(moveType) {
      var currentPageIndex = this._getPageIndex(this.getCurrentPage());
      var pageCount = this._options.visiblePages;
      var isPrevMove = moveType === 'prev';
      var pageIndex;

      if (this._options.centerAlign) {
        pageIndex = isPrevMove ? currentPageIndex - 1 : currentPageIndex + pageCount;
      } else {
        pageIndex = isPrevMove
          ? (currentPageIndex - 1) * pageCount
          : currentPageIndex * pageCount + 1;
      }

      return pageIndex;
    },
    /* eslint-enable complexity */

    /**
     * Get available page number from over number
     * If total page is 23, but input number is 30 => return 23
     * @param {number} page - Page number
     * @returns {number} Replaced pgae number
     * @private
     */
    _convertToValidPage: function(page) {
      var lastPageNumber = this._getLastPage();
      page = Math.max(page, 1);
      page = Math.min(page, lastPageNumber);

      return page;
    },

    /**
     * Create require view set, notify view to update
     * @param {number} page - Page number
     * @private
     */
    _paginate: function(page) {
      var viewData = this._makeViewData(page || this._options.page);
      this._setCurrentPage(page);
      this._view.update(viewData);
    },

    /**
     * Create and get view data
     * @param {number} page - Page number
     * @returns {object} view data
     * @private
     */
    _makeViewData: function(page) {
      var viewData = {};
      var lastPage = this._getLastPage();
      var currentPageIndex = this._getPageIndex(page);
      var lastPageListIndex = this._getPageIndex(lastPage);
      var edges = this._getEdge(page);

      viewData.leftPageNumber = edges.left;
      viewData.rightPageNumber = edges.right;

      viewData.prevMore = currentPageIndex > 1;
      viewData.nextMore = currentPageIndex < lastPageListIndex;

      viewData.page = page;
      viewData.currentPageIndex = page;
      viewData.lastPage = lastPage;
      viewData.lastPageListIndex = lastPage;

      return viewData;
    },

    /**
     * Get each edge page
     * @param {object} page - Page number
     * @returns {{left: number, right: number}} Edge page numbers
     * @private
     */
    _getEdge: function(page) {
      var leftPageNumber, rightPageNumber, left;
      var lastPage = this._getLastPage();
      var visiblePages = this._options.visiblePages;
      var currentPageIndex = this._getPageIndex(page);

      if (this._options.centerAlign) {
        left = Math.floor(visiblePages / 2);
        leftPageNumber = Math.max(page - left, 1);
        rightPageNumber = leftPageNumber + visiblePages - 1;

        if (rightPageNumber > lastPage) {
          leftPageNumber = Math.max(lastPage - visiblePages + 1, 1);
          rightPageNumber = lastPage;
        }
      } else {
        leftPageNumber = (currentPageIndex - 1) * visiblePages + 1;
        rightPageNumber = currentPageIndex * visiblePages;
        rightPageNumber = Math.min(rightPageNumber, lastPage);
      }

      return {
        left: leftPageNumber,
        right: rightPageNumber
      };
    },

    /**
     * Pagelist click event hadnler
     * @param {?string} buttonType - Button type
     * @param {?number} page - Page number
     * @private
     */
    /* eslint-disable complexity */
    _onClickHandler: function(buttonType, page) {
      switch (buttonType) {
        case 'first':
          page = 1;
          break;
        case 'prev':
          page = this._getRelativePage('prev');
          break;
        case 'next':
          page = this._getRelativePage('next');
          break;
        case 'prevMore':
          page = this._getMorePageIndex('prev');
          break;
        case 'nextMore':
          page = this._getMorePageIndex('next');
          break;
        case 'last':
          page = this._getLastPage();
          break;
        default:
          if (!page) {
            return;
          }
      }

      this.movePageTo(page);
    },
    /* eslint-enable complexity */

    /**
     * Reset pagination
     * @param {*} totalItems - Redraw page item count
     * @example
     * pagination.reset();
     * pagination.reset(100);
     */
    reset: function(totalItems) {
      if (isUndefined(totalItems)) {
        totalItems = this._options.totalItems;
      }

      this._options.totalItems = totalItems;
      this._paginate(1);
    },

    /**
     * Move to specific page, redraw list.
     * Before move fire beforeMove event, After move fire afterMove event.
     * @param {Number} targetPage - Target page
     * @example
     * pagination.movePageTo(10);
     */
    movePageTo: function(targetPage) {
      targetPage = this._convertToValidPage(targetPage);

      /**
       * @event Pagination#beforeMove
       * @type {object} evt - Custom event object
       * @property {number} page - Moved page
       * @example
       * paganation.on('beforeMove', (event) => {
       *     const currentPage = event.page;
       *
       *     if (currentPage === 10) {
       *         return false;
       *         // return true;
       *     }
       * });
       */
      if (!this.invoke('beforeMove', { page: targetPage })) {
        return;
      }

      this._paginate(targetPage);

      /**
       * @event Pagination#afterMove
       * @type {object} evt - Custom event object
       * @property {number} page - Moved page
       * @example
       * paganation.on('afterMove', (event) => {
       *      const currentPage = event.page;
       *      console.log(currentPage);
       * });
       */
      this.fire('afterMove', { page: targetPage });
    },

    /**
     * Set total count of items
     * @param {number} itemCount - Total item count
     */
    setTotalItems: function(itemCount) {
      this._options.totalItems = itemCount;
    },

    /**
     * Set count of items per page
     * @param {number} itemCount - Item count
     */
    setItemsPerPage: function(itemCount) {
      this._options.itemsPerPage = itemCount;
    },

    /**
     * Get current page
     * @returns {number} Current page
     */
    getCurrentPage: function() {
      return this._currentPage || this._options.page;
    }
  }
);

CustomEvents.mixin(Pagination);

module.exports = Pagination;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview This module provides some functions for custom events. And it is implemented in the observer design pattern.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var extend = __webpack_require__(0);
var isExisty = __webpack_require__(14);
var isString = __webpack_require__(4);
var isObject = __webpack_require__(16);
var isArray = __webpack_require__(2);
var isFunction = __webpack_require__(5);
var forEach = __webpack_require__(3);

var R_EVENTNAME_SPLIT = /\s+/g;

/**
 * @class
 * @example
 * // node, commonjs
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents');
 */
function CustomEvents() {
  /**
     * @type {HandlerItem[]}
     */
  this.events = null;

  /**
     * only for checking specific context event was binded
     * @type {object[]}
     */
  this.contexts = null;
}

/**
 * Mixin custom events feature to specific constructor
 * @param {function} func - constructor
 * @example
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * var model;
 * function Model() {
 *     this.name = '';
 * }
 * CustomEvents.mixin(Model);
 *
 * model = new Model();
 * model.on('change', function() { this.name = 'model'; }, this);
 * model.fire('change');
 * alert(model.name); // 'model';
 */
CustomEvents.mixin = function(func) {
  extend(func.prototype, CustomEvents.prototype);
};

/**
 * Get HandlerItem object
 * @param {function} handler - handler function
 * @param {object} [context] - context for handler
 * @returns {HandlerItem} HandlerItem object
 * @private
 */
CustomEvents.prototype._getHandlerItem = function(handler, context) {
  var item = {handler: handler};

  if (context) {
    item.context = context;
  }

  return item;
};

/**
 * Get event object safely
 * @param {string} [eventName] - create sub event map if not exist.
 * @returns {(object|array)} event object. if you supplied `eventName`
 *  parameter then make new array and return it
 * @private
 */
CustomEvents.prototype._safeEvent = function(eventName) {
  var events = this.events;
  var byName;

  if (!events) {
    events = this.events = {};
  }

  if (eventName) {
    byName = events[eventName];

    if (!byName) {
      byName = [];
      events[eventName] = byName;
    }

    events = byName;
  }

  return events;
};

/**
 * Get context array safely
 * @returns {array} context array
 * @private
 */
CustomEvents.prototype._safeContext = function() {
  var context = this.contexts;

  if (!context) {
    context = this.contexts = [];
  }

  return context;
};

/**
 * Get index of context
 * @param {object} ctx - context that used for bind custom event
 * @returns {number} index of context
 * @private
 */
CustomEvents.prototype._indexOfContext = function(ctx) {
  var context = this._safeContext();
  var index = 0;

  while (context[index]) {
    if (ctx === context[index][0]) {
      return index;
    }

    index += 1;
  }

  return -1;
};

/**
 * Memorize supplied context for recognize supplied object is context or
 *  name: handler pair object when off()
 * @param {object} ctx - context object to memorize
 * @private
 */
CustomEvents.prototype._memorizeContext = function(ctx) {
  var context, index;

  if (!isExisty(ctx)) {
    return;
  }

  context = this._safeContext();
  index = this._indexOfContext(ctx);

  if (index > -1) {
    context[index][1] += 1;
  } else {
    context.push([ctx, 1]);
  }
};

/**
 * Forget supplied context object
 * @param {object} ctx - context object to forget
 * @private
 */
CustomEvents.prototype._forgetContext = function(ctx) {
  var context, contextIndex;

  if (!isExisty(ctx)) {
    return;
  }

  context = this._safeContext();
  contextIndex = this._indexOfContext(ctx);

  if (contextIndex > -1) {
    context[contextIndex][1] -= 1;

    if (context[contextIndex][1] <= 0) {
      context.splice(contextIndex, 1);
    }
  }
};

/**
 * Bind event handler
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * @private
 */
CustomEvents.prototype._bindEvent = function(eventName, handler, context) {
  var events = this._safeEvent(eventName);
  this._memorizeContext(context);
  events.push(this._getHandlerItem(handler, context));
};

/**
 * Bind event handlers
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 Basic Usage
 * CustomEvents.on('onload', handler);
 *
 * // # 2.2 With context
 * CustomEvents.on('onload', handler, myObj);
 *
 * // # 2.3 Bind by object that name, handler pairs
 * CustomEvents.on({
 *     'play': handler,
 *     'pause': handler2
 * });
 *
 * // # 2.4 Bind by object that name, handler pairs with context object
 * CustomEvents.on({
 *     'play': handler
 * }, myObj);
 */
CustomEvents.prototype.on = function(eventName, handler, context) {
  var self = this;

  if (isString(eventName)) {
    // [syntax 1, 2]
    eventName = eventName.split(R_EVENTNAME_SPLIT);
    forEach(eventName, function(name) {
      self._bindEvent(name, handler, context);
    });
  } else if (isObject(eventName)) {
    // [syntax 3, 4]
    context = handler;
    forEach(eventName, function(func, name) {
      self.on(name, func, context);
    });
  }
};

/**
 * Bind one-shot event handlers
 * @param {(string|{name:string,handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {function|object} [handler] - handler function or context
 * @param {object} [context] - context for binding
 */
CustomEvents.prototype.once = function(eventName, handler, context) {
  var self = this;

  if (isObject(eventName)) {
    context = handler;
    forEach(eventName, function(func, name) {
      self.once(name, func, context);
    });

    return;
  }

  function onceHandler() { // eslint-disable-line require-jsdoc
    handler.apply(context, arguments);
    self.off(eventName, onceHandler, context);
  }

  this.on(eventName, onceHandler, context);
};

/**
 * Splice supplied array by callback result
 * @param {array} arr - array to splice
 * @param {function} predicate - function return boolean
 * @private
 */
CustomEvents.prototype._spliceMatches = function(arr, predicate) {
  var i = 0;
  var len;

  if (!isArray(arr)) {
    return;
  }

  for (len = arr.length; i < len; i += 1) {
    if (predicate(arr[i]) === true) {
      arr.splice(i, 1);
      len -= 1;
      i -= 1;
    }
  }
};

/**
 * Get matcher for unbind specific handler events
 * @param {function} handler - handler function
 * @returns {function} handler matcher
 * @private
 */
CustomEvents.prototype._matchHandler = function(handler) {
  var self = this;

  return function(item) {
    var needRemove = handler === item.handler;

    if (needRemove) {
      self._forgetContext(item.context);
    }

    return needRemove;
  };
};

/**
 * Get matcher for unbind specific context events
 * @param {object} context - context
 * @returns {function} object matcher
 * @private
 */
CustomEvents.prototype._matchContext = function(context) {
  var self = this;

  return function(item) {
    var needRemove = context === item.context;

    if (needRemove) {
      self._forgetContext(item.context);
    }

    return needRemove;
  };
};

/**
 * Get matcher for unbind specific hander, context pair events
 * @param {function} handler - handler function
 * @param {object} context - context
 * @returns {function} handler, context matcher
 * @private
 */
CustomEvents.prototype._matchHandlerAndContext = function(handler, context) {
  var self = this;

  return function(item) {
    var matchHandler = (handler === item.handler);
    var matchContext = (context === item.context);
    var needRemove = (matchHandler && matchContext);

    if (needRemove) {
      self._forgetContext(item.context);
    }

    return needRemove;
  };
};

/**
 * Unbind event by event name
 * @param {string} eventName - custom event name to unbind
 * @param {function} [handler] - handler function
 * @private
 */
CustomEvents.prototype._offByEventName = function(eventName, handler) {
  var self = this;
  var andByHandler = isFunction(handler);
  var matchHandler = self._matchHandler(handler);

  eventName = eventName.split(R_EVENTNAME_SPLIT);

  forEach(eventName, function(name) {
    var handlerItems = self._safeEvent(name);

    if (andByHandler) {
      self._spliceMatches(handlerItems, matchHandler);
    } else {
      forEach(handlerItems, function(item) {
        self._forgetContext(item.context);
      });

      self.events[name] = [];
    }
  });
};

/**
 * Unbind event by handler function
 * @param {function} handler - handler function
 * @private
 */
CustomEvents.prototype._offByHandler = function(handler) {
  var self = this;
  var matchHandler = this._matchHandler(handler);

  forEach(this._safeEvent(), function(handlerItems) {
    self._spliceMatches(handlerItems, matchHandler);
  });
};

/**
 * Unbind event by object(name: handler pair object or context object)
 * @param {object} obj - context or {name: handler} pair object
 * @param {function} handler - handler function
 * @private
 */
CustomEvents.prototype._offByObject = function(obj, handler) {
  var self = this;
  var matchFunc;

  if (this._indexOfContext(obj) < 0) {
    forEach(obj, function(func, name) {
      self.off(name, func);
    });
  } else if (isString(handler)) {
    matchFunc = this._matchContext(obj);

    self._spliceMatches(this._safeEvent(handler), matchFunc);
  } else if (isFunction(handler)) {
    matchFunc = this._matchHandlerAndContext(handler, obj);

    forEach(this._safeEvent(), function(handlerItems) {
      self._spliceMatches(handlerItems, matchFunc);
    });
  } else {
    matchFunc = this._matchContext(obj);

    forEach(this._safeEvent(), function(handlerItems) {
      self._spliceMatches(handlerItems, matchFunc);
    });
  }
};

/**
 * Unbind custom events
 * @param {(string|object|function)} eventName - event name or context or
 *  {name: handler} pair object or handler function
 * @param {(function)} handler - handler function
 * @example
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 off by event name
 * CustomEvents.off('onload');
 *
 * // # 2.2 off by event name and handler
 * CustomEvents.off('play', handler);
 *
 * // # 2.3 off by handler
 * CustomEvents.off(handler);
 *
 * // # 2.4 off by context
 * CustomEvents.off(myObj);
 *
 * // # 2.5 off by context and handler
 * CustomEvents.off(myObj, handler);
 *
 * // # 2.6 off by context and event name
 * CustomEvents.off(myObj, 'onload');
 *
 * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
 * CustomEvents.off({
 *   'play': handler,
 *   'pause': handler2
 * });
 *
 * // # 2.8 off the all events
 * CustomEvents.off();
 */
CustomEvents.prototype.off = function(eventName, handler) {
  if (isString(eventName)) {
    // [syntax 1, 2]
    this._offByEventName(eventName, handler);
  } else if (!arguments.length) {
    // [syntax 8]
    this.events = {};
    this.contexts = [];
  } else if (isFunction(eventName)) {
    // [syntax 3]
    this._offByHandler(eventName);
  } else if (isObject(eventName)) {
    // [syntax 4, 5, 6]
    this._offByObject(eventName, handler);
  }
};

/**
 * Fire custom event
 * @param {string} eventName - name of custom event
 */
CustomEvents.prototype.fire = function(eventName) {  // eslint-disable-line
  this.invoke.apply(this, arguments);
};

/**
 * Fire a event and returns the result of operation 'boolean AND' with all
 *  listener's results.
 *
 * So, It is different from {@link CustomEvents#fire}.
 *
 * In service code, use this as a before event in component level usually
 *  for notifying that the event is cancelable.
 * @param {string} eventName - Custom event name
 * @param {...*} data - Data for event
 * @returns {boolean} The result of operation 'boolean AND'
 * @example
 * var map = new Map();
 * map.on({
 *     'beforeZoom': function() {
 *         // It should cancel the 'zoom' event by some conditions.
 *         if (that.disabled && this.getState()) {
 *             return false;
 *         }
 *         return true;
 *     }
 * });
 *
 * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
 *     // if true,
 *     // doSomething
 * }
 */
CustomEvents.prototype.invoke = function(eventName) {
  var events, args, index, item;

  if (!this.hasListener(eventName)) {
    return true;
  }

  events = this._safeEvent(eventName);
  args = Array.prototype.slice.call(arguments, 1);
  index = 0;

  while (events[index]) {
    item = events[index];

    if (item.handler.apply(item.context, args) === false) {
      return false;
    }

    index += 1;
  }

  return true;
};

/**
 * Return whether at least one of the handlers is registered in the given
 *  event name.
 * @param {string} eventName - Custom event name
 * @returns {boolean} Is there at least one handler in event name?
 */
CustomEvents.prototype.hasListener = function(eventName) {
  return this.getListenerLength(eventName) > 0;
};

/**
 * Return a count of events registered.
 * @param {string} eventName - Custom event name
 * @returns {number} number of event
 */
CustomEvents.prototype.getListenerLength = function(eventName) {
  var events = this._safeEvent(eventName);

  return events.length;
};

module.exports = CustomEvents;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is existing or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isUndefined = __webpack_require__(1);
var isNull = __webpack_require__(15);

/**
 * Check whether the given variable is existing or not.
 * If the given variable is not null and not undefined, returns true.
 * @param {*} param - Target for checking
 * @returns {boolean} Is existy?
 * @memberof module:type
 * @example
 * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
 *
 * isExisty(''); //true
 * isExisty(0); //true
 * isExisty([]); //true
 * isExisty({}); //true
 * isExisty(null); //false
 * isExisty(undefined); //false
*/
function isExisty(param) {
  return !isUndefined(param) && !isNull(param);
}

module.exports = isExisty;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is null or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is null or not.
 * If the given variable(arguments[0]) is null, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is null?
 * @memberof module:type
 */
function isNull(obj) {
  return obj === null;
}

module.exports = isNull;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is an object or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is an object or not.
 * If the given variable is an object, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is object?
 * @memberof module:type
 */
function isObject(obj) {
  return obj === Object(obj);
}

module.exports = isObject;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Execute the provided callback once for each element present
 * in the array(or Array-like object) in ascending order.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the element
 *  2) The index of the element
 *  3) The array(or Array-like object) being traversed
 * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachArray = require('tui-code-snippet/collection/forEachArray'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachArray([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */
function forEachArray(arr, iteratee, context) {
  var index = 0;
  var len = arr.length;

  context = context || null;

  for (; index < len; index += 1) {
    if (iteratee.call(context, arr[index], index, arr) === false) {
      break;
    }
  }
}

module.exports = forEachArray;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Provide a simple inheritance in prototype-oriented.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var createObject = __webpack_require__(19);

/**
 * Provide a simple inheritance in prototype-oriented.
 * Caution :
 *  Don't overwrite the prototype of child constructor.
 *
 * @param {function} subType Child constructor
 * @param {function} superType Parent constructor
 * @memberof module:inheritance
 * @example
 * var inherit = require('tui-code-snippet/inheritance/inherit'); // node, commonjs
 *
 * // Parent constructor
 * function Animal(leg) {
 *     this.leg = leg;
 * }
 * Animal.prototype.growl = function() {
 *     // ...
 * };
 *
 * // Child constructor
 * function Person(name) {
 *     this.name = name;
 * }
 *
 * // Inheritance
 * inherit(Person, Animal);
 *
 * // After this inheritance, please use only the extending of property.
 * // Do not overwrite prototype.
 * Person.prototype.walk = function(direction) {
 *     // ...
 * };
 */
function inherit(subType, superType) {
  var prototype = createObject(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

module.exports = inherit;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Create a new object with the specified prototype object and properties.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * @module inheritance
 */

/**
 * Create a new object with the specified prototype object and properties.
 * @param {Object} obj This object will be a prototype of the newly-created object.
 * @returns {Object}
 * @memberof module:inheritance
 */
function createObject(obj) {
  function F() {} // eslint-disable-line require-jsdoc
  F.prototype = obj;

  return new F();
}

module.exports = createObject;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__(3);
var defineClass = __webpack_require__(7);
var getTarget = __webpack_require__(21);
var on = __webpack_require__(22);
var preventDefault = __webpack_require__(24);
var addClass = __webpack_require__(25);
var extend = __webpack_require__(0);
var isString = __webpack_require__(4);
var isHTMLNode = __webpack_require__(28);

var util = __webpack_require__(9);

var defaultTemplate = {
  page: '<a href="#" class="tui-page-btn">{{page}}</a>',
  currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
  moveButton:
    '<a href="#" class="tui-page-btn tui-{{type}}">' +
    '<span class="tui-ico-{{type}}">{{type}}</span>' +
    '</a>',
  disabledMoveButton:
    '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
    '<span class="tui-ico-{{type}}">{{type}}</span>' +
    '</span>',
  moreButton:
    '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
    '<span class="tui-ico-ellip">...</span>' +
    '</a>'
};
var moveButtons = ['first', 'prev', 'next', 'last'];
var moreButtons = ['prev', 'next'];

var INVALID_CONTAINER_ELEMENT = 'The container element is invalid.';

/**
 * Pagination view class
 * @class View
 * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
 * @param {object} options - Option object
 *     @param {number} [options.totalItems=10] Total item count
 *     @param {number} [options.itemsPerPage=10] Item count per page
 *     @param {number} [options.visiblePages=10] Display page link count
 *     @param {number} [options.page=1] Display page after pagination draw.
 *     @param {boolean}[options.centerAlign=false] Whether current page keep center or not
 *     @param {string} [options.firstItemClassName='first-child'] The class name of the first item
 *     @param {string} [options.lastItemClassName='last-child'] The class name of the last item
 *     @param {object} [options.template] A markup string set to make element
 *         @param {string|function} [options.template.page] HTML template
 *         @param {string|function} [options.template.currentPage] HTML template
 *         @param {string|function} [options.template.moveButton] HTML template
 *         @param {string|function} [options.template.disabledMoveButton] HTML template
 *         @param {string|function} [options.template.moreButton] HTML template
 * @param {function} handler - Event handler
 * @ignore
 */
var View = defineClass(
  /** @lends View.prototype */ {
    init: function(container, options, handler) {
      /**
       * Root element
       * @type {HTMLElement}
       * @private
       */
      this._containerElement = null;

      /**
       * First item's class name
       * @type {string}
       * @private
       */
      this._firstItemClassName = options.firstItemClassName;

      /**
       * Last item's class name
       * @type {string}
       * @private
       */
      this._lastItemClassName = options.lastItemClassName;

      /**
       * Default template
       * @type {object.<string, string|function>}
       * @private
       */
      this._template = extend({}, defaultTemplate, options.template);

      /**
       * Map of buttons
       * @type {object.<string, HTMLElement>}
       * @private
       */
      this._buttons = {};

      /**
       * Enabled page elements list
       * @type {array}
       * @private
       */

      this._enabledPageElements = [];

      this._setRootElement(container);
      this._setMoveButtons();
      this._setDisabledMoveButtons();
      this._setMoreButtons();
      this._attachClickEvent(handler);
    },
    /* eslint-enable complexity */

    /**
     * Set root element
     * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
     * @private
     */
    _setRootElement: function(container) {
      if (isString(container)) {
        container = document.getElementById(container) || document.querySelector(container);
      } else if (container.jquery) {
        container = container[0];
      }

      if (!isHTMLNode(container)) {
        throw new Error(INVALID_CONTAINER_ELEMENT);
      }

      this._containerElement = container;
    },

    /**
     * Assign move buttons to option
     * @private
     */
    _setMoveButtons: function() {
      forEach(
        moveButtons,
        function(type) {
          this._buttons[type] = util.createElementByTemplate(this._template.moveButton, {
            type: type
          });
        },
        this
      );
    },

    /**
     * Assign disabled move buttons to option
     * @private
     */
    _setDisabledMoveButtons: function() {
      forEach(
        moveButtons,
        function(type) {
          var key = 'disabled' + util.capitalizeFirstLetter(type);
          this._buttons[key] = util.createElementByTemplate(this._template.disabledMoveButton, {
            type: type
          });
        },
        this
      );
    },

    /**
     * Assign more buttons to option
     * @private
     */
    _setMoreButtons: function() {
      forEach(
        moreButtons,
        function(type) {
          var key = type + 'More';
          this._buttons[key] = util.createElementByTemplate(this._template.moreButton, {
            type: type
          });
        },
        this
      );
    },
    /* eslint-enable camelcase */

    /**
     * Get container element
     * @returns {HTMLElement} Container element
     * @private
     */
    _getContainerElement: function() {
      return this._containerElement;
    },

    /**
     * Append first button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */
    _appendFirstButton: function(viewData) {
      var button;

      if (viewData.page > 1) {
        button = this._buttons.first;
      } else {
        button = this._buttons.disabledFirst;
      }

      this._getContainerElement().appendChild(button);
    },

    /**
     * Append previous button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */
    _appendPrevButton: function(viewData) {
      var button;

      if (viewData.currentPageIndex > 1) {
        button = this._buttons.prev;
      } else {
        button = this._buttons.disabledPrev;
      }

      this._getContainerElement().appendChild(button);
    },

    /**
     * Append next button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */
    _appendNextButton: function(viewData) {
      var button;

      if (viewData.currentPageIndex < viewData.lastPageListIndex) {
        button = this._buttons.next;
      } else {
        button = this._buttons.disabledNext;
      }

      this._getContainerElement().appendChild(button);
    },

    /**
     * Append last button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */
    _appendLastButton: function(viewData) {
      var button;

      if (viewData.page < viewData.lastPage) {
        button = this._buttons.last;
      } else {
        button = this._buttons.disabledLast;
      }

      this._getContainerElement().appendChild(button);
    },

    /**
     * Append previous more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */
    _appendPrevMoreButton: function(viewData) {
      var button;

      if (viewData.prevMore) {
        button = this._buttons.prevMore;
        addClass(button, this._firstItemClassName);
        this._getContainerElement().appendChild(button);
      }
    },

    /**
     * Append next more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */
    _appendNextMoreButton: function(viewData) {
      var button;

      if (viewData.nextMore) {
        button = this._buttons.nextMore;
        addClass(button, this._lastItemClassName);
        this._getContainerElement().appendChild(button);
      }
    },

    /**
     * Append page number elements on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */
    // eslint-disable-next-line complexity
    _appendPages: function(viewData) {
      var firstPage = viewData.leftPageNumber;
      var lastPage = viewData.rightPageNumber;
      var pageItem, i;

      for (i = firstPage; i <= lastPage; i += 1) {
        if (i === viewData.page) {
          pageItem = util.createElementByTemplate(this._template.currentPage, { page: i });
        } else {
          pageItem = util.createElementByTemplate(this._template.page, { page: i });
          this._enabledPageElements.push(pageItem);
        }

        if (i === firstPage && !viewData.prevMore) {
          addClass(pageItem, this._firstItemClassName);
        }
        if (i === lastPage && !viewData.nextMore) {
          addClass(pageItem, this._lastItemClassName);
        }
        this._getContainerElement().appendChild(pageItem);
      }
    },

    /**
     * Attach click event
     * @param {function} callback - Callback function
     * @private
     */
    _attachClickEvent: function(callback) {
      var rootElement = this._getContainerElement();

      on(
        rootElement,
        'click',
        function(ev) {
          var target = getTarget(ev);
          var page, buttonType;

          preventDefault(ev);

          buttonType = this._getButtonType(target);

          if (!buttonType) {
            page = this._getPageNumber(target);
          }

          callback(buttonType, page);
        },
        this
      );
    },

    /**
     * Get button type to move button elements
     * @param {HTMLElement} targetElement - Each move button element
     * @returns {?string} Button type
     * @private
     */
    _getButtonType: function(targetElement) {
      var buttonType;
      var buttons = this._buttons;

      forEach(
        buttons,
        function(button, type) {
          if (util.isContained(targetElement, button)) {
            buttonType = type;

            return false;
          }

          return true;
        },
        this
      );

      return buttonType;
    },
    /* eslint-enable no-lonely-if */

    /**
     * Get number to page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {?number} Page number
     * @private
     */
    _getPageNumber: function(targetElement) {
      var targetPage = this._findPageElement(targetElement);
      var page;

      if (targetPage) {
        page = parseInt(targetPage.innerText, 10);
      }

      return page;
    },

    /**
     * Find target element from page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {HTMLElement} Found element
     * @ignore
     */
    _findPageElement: function(targetElement) {
      var i = 0;
      var length = this._enabledPageElements.length;
      var pickedItem;

      for (; i < length; i += 1) {
        pickedItem = this._enabledPageElements[i];

        if (util.isContained(targetElement, pickedItem)) {
          return pickedItem;
        }
      }

      return null;
    },

    /**
     * Reset container element
     * @private
     */
    _empty: function() {
      this._enabledPageElements = [];

      forEach(
        this._buttons,
        function(buttonElement, type) {
          this._buttons[type] = buttonElement.cloneNode(true);
        },
        this
      );

      this._getContainerElement().innerHTML = '';
    },

    /**
     * Update view
     * @param {object} viewData - View data to render pagination
     * @ignore
     */
    update: function(viewData) {
      this._empty();
      this._appendFirstButton(viewData);
      this._appendPrevButton(viewData);
      this._appendPrevMoreButton(viewData);
      this._appendPages(viewData);
      this._appendNextMoreButton(viewData);
      this._appendNextButton(viewData);
      this._appendLastButton(viewData);
    }
  }
);

module.exports = View;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Get a target element from an event object.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Get a target element from an event object.
 * @param {Event} e - event object
 * @returns {HTMLElement} - target element
 * @memberof module:domEvent
 */
function getTarget(e) {
  return e.target || e.srcElement;
}

module.exports = getTarget;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isString = __webpack_require__(4);
var forEach = __webpack_require__(3);

var safeEvent = __webpack_require__(23);

/**
 * Bind DOM events.
 * @param {HTMLElement} element - element to bind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {(function|object)} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @memberof module:domEvent
 * @example
 * var div = document.querySelector('div');
 * 
 * // Bind one event to an element.
 * on(div, 'click', toggle);
 * 
 * // Bind multiple events with a same handler to multiple elements at once.
 * // Use event names splitted by a space.
 * on(div, 'mouseenter mouseleave', changeColor);
 * 
 * // Bind multiple events with different handlers to an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * on(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Set a context for handler method.
 * var name = 'global';
 * var repository = {name: 'CodeSnippet'};
 * on(div, 'drag', function() {
 *  console.log(this.name);
 * }, repository);
 * // Result when you drag a div: "CodeSnippet"
 */
function on(element, types, handler, context) {
  if (isString(types)) {
    forEach(types.split(/\s+/g), function(type) {
      bindEvent(element, type, handler, context);
    });

    return;
  }

  forEach(types, function(func, type) {
    bindEvent(element, type, func, handler);
  });
}

/**
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @private
 */
function bindEvent(element, type, handler, context) {
  /**
     * Event handler
     * @param {Event} e - event object
     */
  function eventHandler(e) {
    handler.call(context || element, e || window.event);
  }

  if ('addEventListener' in element) {
    element.addEventListener(type, eventHandler);
  } else if ('attachEvent' in element) {
    element.attachEvent('on' + type, eventHandler);
  }
  memorizeHandler(element, type, handler, eventHandler);
}

/**
 * Memorize DOM event handler for unbinding.
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function that user passed at on() use
 * @param {function} wrappedHandler - handler function that wrapped by domevent for implementing some features
 * @private
 */
function memorizeHandler(element, type, handler, wrappedHandler) {
  var events = safeEvent(element, type);
  var existInEvents = false;

  forEach(events, function(obj) {
    if (obj.handler === handler) {
      existInEvents = true;

      return false;
    }

    return true;
  });

  if (!existInEvents) {
    events.push({
      handler: handler,
      wrappedHandler: wrappedHandler
    });
  }
}

module.exports = on;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Get event collection for specific HTML element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var EVENT_KEY = '_feEventKey';

/**
 * Get event collection for specific HTML element
 * @param {HTMLElement} element - HTML element
 * @param {string} type - event type
 * @returns {array}
 * @private
 */
function safeEvent(element, type) {
  var events = element[EVENT_KEY];
  var handlers;

  if (!events) {
    events = element[EVENT_KEY] = {};
  }

  handlers = events[type];
  if (!handlers) {
    handlers = events[type] = [];
  }

  return handlers;
}

module.exports = safeEvent;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Prevent default action
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Prevent default action
 * @param {Event} e - event object
 * @memberof module:domEvent
 */
function preventDefault(e) {
  if (e.preventDefault) {
    e.preventDefault();

    return;
  }

  e.returnValue = false;
}

module.exports = preventDefault;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Add css class to element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var forEach = __webpack_require__(3);
var inArray = __webpack_require__(8);
var getClass = __webpack_require__(26);
var setClassName = __webpack_require__(27);

/**
 * domUtil module
 * @module domUtil
 */

/**
 * Add css class to element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to add
 * @memberof module:domUtil
 */
function addClass(element) {
  var cssClass = Array.prototype.slice.call(arguments, 1);
  var classList = element.classList;
  var newClass = [];
  var origin;

  if (classList) {
    forEach(cssClass, function(name) {
      element.classList.add(name);
    });

    return;
  }

  origin = getClass(element);

  if (origin) {
    cssClass = [].concat(origin.split(/\s+/), cssClass);
  }

  forEach(cssClass, function(cls) {
    if (inArray(cls, newClass) < 0) {
      newClass.push(cls);
    }
  });

  setClassName(element, newClass);
}

module.exports = addClass;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Get HTML element's design classes.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isUndefined = __webpack_require__(1);

/**
 * Get HTML element's design classes.
 * @param {(HTMLElement|SVGElement)} element target element
 * @returns {string} element css class name
 * @memberof module:domUtil
 */
function getClass(element) {
  if (!element || !element.className) {
    return '';
  }

  if (isUndefined(element.className.baseVal)) {
    return element.className;
  }

  return element.className.baseVal;
}

module.exports = getClass;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Set className value
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isArray = __webpack_require__(2);
var isUndefined = __webpack_require__(1);

/**
 * Set className value
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {(string|string[])} cssClass - class names
 * @private
 */
function setClassName(element, cssClass) {
  cssClass = isArray(cssClass) ? cssClass.join(' ') : cssClass;

  cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

  if (isUndefined(element.className.baseVal)) {
    element.className = cssClass;

    return;
  }

  element.className.baseVal = cssClass;
}

module.exports = setClassName;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Check whether the given variable is a instance of HTMLNode or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a instance of HTMLNode or not.
 * If the given variables is a instance of HTMLNode, return true.
 * @param {*} html - Target for checking
 * @returns {boolean} Is HTMLNode ?
 * @memberof module:type
 */
function isHTMLNode(html) {
  if (typeof HTMLElement === 'object') {
    return (html && (html instanceof HTMLElement || !!html.nodeType));
  }

  return !!(html && html.nodeType);
}

module.exports = isHTMLNode;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Convert text by binding expressions with context.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var inArray = __webpack_require__(8);
var forEach = __webpack_require__(3);
var isArray = __webpack_require__(2);
var isString = __webpack_require__(4);
var extend = __webpack_require__(0);

// IE8 does not support capture groups.
var EXPRESSION_REGEXP = /{{\s?|\s?}}/g;
var BRACKET_NOTATION_REGEXP = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;
var BRACKET_REGEXP = /\[\s?|\s?\]/;
var DOT_NOTATION_REGEXP = /^[a-zA-Z_]+\.[a-zA-Z_]+$/;
var DOT_REGEXP = /\./;
var STRING_NOTATION_REGEXP = /^["']\w+["']$/;
var STRING_REGEXP = /"|'/g;
var NUMBER_REGEXP = /^-?\d+\.?\d*$/;

var EXPRESSION_INTERVAL = 2;

var BLOCK_HELPERS = {
  'if': handleIf,
  'each': handleEach,
  'with': handleWith
};

var isValidSplit = 'a'.split(/a/).length === 3;

/**
 * Split by RegExp. (Polyfill for IE8)
 * @param {string} text - text to be splitted\
 * @param {RegExp} regexp - regular expression
 * @returns {Array.<string>}
 */
var splitByRegExp = (function() {
  if (isValidSplit) {
    return function(text, regexp) {
      return text.split(regexp);
    };
  }

  return function(text, regexp) {
    var result = [];
    var prevIndex = 0;
    var match, index;

    if (!regexp.global) {
      regexp = new RegExp(regexp, 'g');
    }

    match = regexp.exec(text);
    while (match !== null) {
      index = match.index;
      result.push(text.slice(prevIndex, index));

      prevIndex = index + match[0].length;
      match = regexp.exec(text);
    }
    result.push(text.slice(prevIndex));

    return result;
  };
})();

/**
 * Find value in the context by an expression.
 * @param {string} exp - an expression
 * @param {object} context - context
 * @returns {*}
 * @private
 */
// eslint-disable-next-line complexity
function getValueFromContext(exp, context) {
  var splitedExps;
  var value = context[exp];

  if (exp === 'true') {
    value = true;
  } else if (exp === 'false') {
    value = false;
  } else if (STRING_NOTATION_REGEXP.test(exp)) {
    value = exp.replace(STRING_REGEXP, '');
  } else if (BRACKET_NOTATION_REGEXP.test(exp)) {
    splitedExps = exp.split(BRACKET_REGEXP);
    value = getValueFromContext(splitedExps[0], context)[getValueFromContext(splitedExps[1], context)];
  } else if (DOT_NOTATION_REGEXP.test(exp)) {
    splitedExps = exp.split(DOT_REGEXP);
    value = getValueFromContext(splitedExps[0], context)[splitedExps[1]];
  } else if (NUMBER_REGEXP.test(exp)) {
    value = parseFloat(exp);
  }

  return value;
}

/**
 * Extract elseif and else expressions.
 * @param {Array.<string>} ifExps - args of if expression
 * @param {Array.<string>} sourcesInsideBlock - sources inside if block
 * @returns {object} - exps: expressions of if, elseif, and else / sourcesInsideIf: sources inside if, elseif, and else block.
 * @private
 */
function extractElseif(ifExps, sourcesInsideBlock) {
  var exps = [ifExps];
  var sourcesInsideIf = [];
  var otherIfCount = 0;
  var start = 0;

  // eslint-disable-next-line complexity
  forEach(sourcesInsideBlock, function(source, index) {
    if (source.indexOf('if') === 0) {
      otherIfCount += 1;
    } else if (source === '/if') {
      otherIfCount -= 1;
    } else if (!otherIfCount && (source.indexOf('elseif') === 0 || source === 'else')) {
      exps.push(source === 'else' ? ['true'] : source.split(' ').slice(1));
      sourcesInsideIf.push(sourcesInsideBlock.slice(start, index));
      start = index + 1;
    }
  });

  sourcesInsideIf.push(sourcesInsideBlock.slice(start));

  return {
    exps: exps,
    sourcesInsideIf: sourcesInsideIf
  };
}

/**
 * Helper function for "if". 
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the if block
 * @param {object} context - context
 * @returns {string}
 * @private
 */
function handleIf(exps, sourcesInsideBlock, context) {
  var analyzed = extractElseif(exps, sourcesInsideBlock);
  var result = false;
  var compiledSource = '';

  forEach(analyzed.exps, function(exp, index) {
    result = handleExpression(exp, context);
    if (result) {
      compiledSource = compile(analyzed.sourcesInsideIf[index], context);
    }

    return !result;
  });

  return compiledSource;
}

/**
 * Helper function for "each".
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the each block
 * @param {object} context - context
 * @returns {string}
 * @private
 */
function handleEach(exps, sourcesInsideBlock, context) {
  var collection = handleExpression(exps, context);
  var additionalKey = isArray(collection) ? '@index' : '@key';
  var additionalContext = {};
  var result = '';

  forEach(collection, function(item, key) {
    additionalContext[additionalKey] = key;
    additionalContext['@this'] = item;
    extend(context, additionalContext);

    result += compile(sourcesInsideBlock.slice(), context);
  });

  return result;
}

/**
 * Helper function for "with ... as"
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the with block
 * @param {object} context - context
 * @returns {string}
 * @private
 */
function handleWith(exps, sourcesInsideBlock, context) {
  var asIndex = inArray('as', exps);
  var alias = exps[asIndex + 1];
  var result = handleExpression(exps.slice(0, asIndex), context);

  var additionalContext = {};
  additionalContext[alias] = result;

  return compile(sourcesInsideBlock, extend(context, additionalContext)) || '';
}

/**
 * Extract sources inside block in place.
 * @param {Array.<string>} sources - array of sources
 * @param {number} start - index of start block
 * @param {number} end - index of end block
 * @returns {Array.<string>}
 * @private
 */
function extractSourcesInsideBlock(sources, start, end) {
  var sourcesInsideBlock = sources.splice(start + 1, end - start);
  sourcesInsideBlock.pop();

  return sourcesInsideBlock;
}

/**
 * Handle block helper function
 * @param {string} helperKeyword - helper keyword (ex. if, each, with)
 * @param {Array.<string>} sourcesToEnd - array of sources after the starting block
 * @param {object} context - context
 * @returns {Array.<string>}
 * @private
 */
function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
  var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
  var helperCount = 1;
  var startBlockIndex = 0;
  var endBlockIndex;
  var index = startBlockIndex + EXPRESSION_INTERVAL;
  var expression = sourcesToEnd[index];

  while (helperCount && isString(expression)) {
    if (expression.indexOf(helperKeyword) === 0) {
      helperCount += 1;
    } else if (expression.indexOf('/' + helperKeyword) === 0) {
      helperCount -= 1;
      endBlockIndex = index;
    }

    index += EXPRESSION_INTERVAL;
    expression = sourcesToEnd[index];
  }

  if (helperCount) {
    throw Error(helperKeyword + ' needs {{/' + helperKeyword + '}} expression.');
  }

  sourcesToEnd[startBlockIndex] = executeBlockHelper(
    sourcesToEnd[startBlockIndex].split(' ').slice(1),
    extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, endBlockIndex),
    context
  );

  return sourcesToEnd;
}

/**
 * Helper function for "custom helper".
 * If helper is not a function, return helper itself.
 * @param {Array.<string>} exps - array of expressions split by spaces (first element: helper)
 * @param {object} context - context
 * @returns {string}
 * @private
 */
function handleExpression(exps, context) {
  var result = getValueFromContext(exps[0], context);

  if (result instanceof Function) {
    return executeFunction(result, exps.slice(1), context);
  }

  return result;
}

/**
 * Execute a helper function.
 * @param {Function} helper - helper function
 * @param {Array.<string>} argExps - expressions of arguments
 * @param {object} context - context
 * @returns {string} - result of executing the function with arguments
 * @private
 */
function executeFunction(helper, argExps, context) {
  var args = [];
  forEach(argExps, function(exp) {
    args.push(getValueFromContext(exp, context));
  });

  return helper.apply(null, args);
}

/**
 * Get a result of compiling an expression with the context.
 * @param {Array.<string>} sources - array of sources split by regexp of expression.
 * @param {object} context - context
 * @returns {Array.<string>} - array of sources that bind with its context
 * @private
 */
function compile(sources, context) {
  var index = 1;
  var expression = sources[index];
  var exps, firstExp, result;

  while (isString(expression)) {
    exps = expression.split(' ');
    firstExp = exps[0];

    if (BLOCK_HELPERS[firstExp]) {
      result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
      sources = sources.concat(result);
    } else {
      sources[index] = handleExpression(exps, context);
    }

    index += EXPRESSION_INTERVAL;
    expression = sources[index];
  }

  return sources.join('');
}

/**
 * Convert text by binding expressions with context.
 * <br>
 * If expression exists in the context, it will be replaced.
 * ex) '{{title}}' with context {title: 'Hello!'} is converted to 'Hello!'.
 * An array or object can be accessed using bracket and dot notation.
 * ex) '{{odds\[2\]}}' with context {odds: \[1, 3, 5\]} is converted to '5'.
 * ex) '{{evens\[first\]}}' with context {evens: \[2, 4\], first: 0} is converted to '2'.
 * ex) '{{project\["name"\]}}' and '{{project.name}}' with context {project: {name: 'CodeSnippet'}} is converted to 'CodeSnippet'.
 * <br>
 * If replaced expression is a function, next expressions will be arguments of the function.
 * ex) '{{add 1 2}}' with context {add: function(a, b) {return a + b;}} is converted to '3'.
 * <br>
 * It has 3 predefined block helpers '{{helper ...}} ... {{/helper}}': 'if', 'each', 'with ... as ...'.
 * 1) 'if' evaluates conditional statements. It can use with 'elseif' and 'else'.
 * 2) 'each' iterates an array or object. It provides '@index'(array), '@key'(object), and '@this'(current element).
 * 3) 'with ... as ...' provides an alias.
 * @param {string} text - text with expressions
 * @param {object} context - context
 * @returns {string} - text that bind with its context
 * @memberof module:domUtil
 * @example
 * var template = require('tui-code-snippet/domUtil/template');
 * 
 * var source = 
 *     '<h1>'
 *   +   '{{if isValidNumber title}}'
 *   +     '{{title}}th'
 *   +   '{{elseif isValidDate title}}'
 *   +     'Date: {{title}}'
 *   +   '{{/if}}'
 *   + '</h1>'
 *   + '{{each list}}'
 *   +   '{{with addOne @index as idx}}'
 *   +     '<p>{{idx}}: {{@this}}</p>'
 *   +   '{{/with}}'
 *   + '{{/each}}';
 * 
 * var context = {
 *   isValidDate: function(text) {
 *     return /^\d{4}-(0|1)\d-(0|1|2|3)\d$/.test(text);
 *   },
 *   isValidNumber: function(text) {
 *     return /^\d+$/.test(text);
 *   }
 *   title: '2019-11-25',
 *   list: ['Clean the room', 'Wash the dishes'],
 *   addOne: function(num) {
 *     return num + 1;
 *   }
 * };
 * 
 * var result = template(source, context);
 * console.log(result); // <h1>Date: 2019-11-25</h1><p>1: Clean the room</p><p>2: Wash the dishes</p>
 */
function template(text, context) {
  return compile(splitByRegExp(text, EXPRESSION_REGEXP), context);
}

module.exports = template;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Send hostname on DOMContentLoaded.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var isUndefined = __webpack_require__(1);
var imagePing = __webpack_require__(31);

var ms7days = 7 * 24 * 60 * 60 * 1000;

/**
 * Check if the date has passed 7 days
 * @param {number} date - milliseconds
 * @returns {boolean}
 * @private
 */
function isExpired(date) {
  var now = new Date().getTime();

  return now - date > ms7days;
}

/**
 * Send hostname on DOMContentLoaded.
 * To prevent hostname set tui.usageStatistics to false.
 * @param {string} appName - application name
 * @param {string} trackingId - GA tracking ID
 * @ignore
 */
function sendHostname(appName, trackingId) {
  var url = 'https://www.google-analytics.com/collect';
  var hostname = location.hostname;
  var hitType = 'event';
  var eventCategory = 'use';
  var applicationKeyForStorage = 'TOAST UI ' + appName + ' for ' + hostname + ': Statistics';
  var date = window.localStorage.getItem(applicationKeyForStorage);

  // skip if the flag is defined and is set to false explicitly
  if (!isUndefined(window.tui) && window.tui.usageStatistics === false) {
    return;
  }

  // skip if not pass seven days old
  if (date && !isExpired(date)) {
    return;
  }

  window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());

  setTimeout(function() {
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      imagePing(url, {
        v: 1,
        t: hitType,
        tid: trackingId,
        cid: hostname,
        dp: hostname,
        dh: appName,
        el: appName,
        ec: eventCategory
      });
    }
  }, 1000);
}

module.exports = sendHostname;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @fileoverview Request image ping.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



var forEachOwnProperties = __webpack_require__(6);

/**
 * @module request
 */

/**
 * Request image ping.
 * @param {String} url url for ping request
 * @param {Object} trackingInfo infos for make query string
 * @returns {HTMLElement}
 * @memberof module:request
 * @example
 * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
 *
 * imagePing('https://www.google-analytics.com/collect', {
 *     v: 1,
 *     t: 'event',
 *     tid: 'trackingid',
 *     cid: 'cid',
 *     dp: 'dp',
 *     dh: 'dh'
 * });
 */
function imagePing(url, trackingInfo) {
  var trackingElement = document.createElement('img');
  var queryString = '';
  forEachOwnProperties(trackingInfo, function(value, key) {
    queryString += '&' + key + '=' + value;
  });
  queryString = queryString.substring(1);

  trackingElement.src = url + '?' + queryString;

  trackingElement.style.display = 'none';
  document.body.appendChild(trackingElement);
  document.body.removeChild(trackingElement);

  return trackingElement;
}

module.exports = imagePing;


/***/ })
/******/ ]);
});
},{}],"VyiV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refs = void 0;
const refs = {
  emptyLibrary: document.querySelector('.empty-library'),
  galleryList: document.querySelector('.film-list'),
  inputSearch: document.querySelector('.input'),
  searchForm: document.querySelector('.search-form'),
  watchedBtn: document.querySelector('.watched-btn-js'),
  queueBtn: document.querySelector('.queue-btn-js'),
  paginationContainer: document.getElementById('tui-pagination-container'),
  modal: document.querySelector('.modal-overlay'),
  buttonClose: document.querySelector('.modal-close-js'),
  modalCard: document.querySelector('.modal-js'),
  authBtn: document.querySelector('.auth-btn__container'),
  authUser: document.querySelector('.auth__container span'),
  libraryLink: document.querySelector('.library-link'),
  modalAuthCard: document.querySelector('[data-modal-auth]'),
  closeModalAuthCard: document.querySelector('[data-auth-close]'),
  regLink: document.getElementById('reg-link'),
  signLink: document.getElementById('sign-link'),
  regFields: document.querySelector('.register-modal-form'),
  signFields: document.querySelector('.sign-modal-form')
};
exports.refs = refs;
},{}],"o8lo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagination = void 0;

var _tuiPagination = _interopRequireDefault(require("tui-pagination"));

var _refs = require("./refs.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const optionPagination = {
  totalItems: 1000,
  itemsPerPage: 20,
  visiblePages: 5,
  centerAlign: true,
  usageStatistics: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton: '<a href="#" class="tui-page-btn tui-{{type}}">' + '<span class="tui-ico-{{type}}">{{type}}</span>' + '</a>',
    disabledMoveButton: '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' + '<span class="tui-ico-{{type}}">{{type}}</span>' + '</span>',
    moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' + '<span class="tui-ico-ellip">...</span>' + '</a>'
  }
};
const pagination = new _tuiPagination.default(_refs.refs.paginationContainer, optionPagination);
exports.pagination = pagination;
},{"tui-pagination":"jPMh","./refs.js":"VyiV"}],"pAws":[function(require,module,exports) {
var define;
var global = arguments[3];
/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["Handlebars"] = factory();else root["Handlebars"] = factory();
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }
    /************************************************************************/

    /******/
    ([
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireWildcard = __webpack_require__(1)['default'];

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;

      var _handlebarsBase = __webpack_require__(3);

      var base = _interopRequireWildcard(_handlebarsBase); // Each of these augment the Handlebars object. No need to setup here.
      // (This is done to easily share code between commonjs and browse envs)


      var _handlebarsSafeString = __webpack_require__(36);

      var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

      var _handlebarsException = __webpack_require__(5);

      var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

      var _handlebarsUtils = __webpack_require__(4);

      var Utils = _interopRequireWildcard(_handlebarsUtils);

      var _handlebarsRuntime = __webpack_require__(37);

      var runtime = _interopRequireWildcard(_handlebarsRuntime);

      var _handlebarsNoConflict = __webpack_require__(43);

      var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict); // For compatibility and usage outside of module systems, make the Handlebars object a namespace


      function create() {
        var hb = new base.HandlebarsEnvironment();
        Utils.extend(hb, base);
        hb.SafeString = _handlebarsSafeString2['default'];
        hb.Exception = _handlebarsException2['default'];
        hb.Utils = Utils;
        hb.escapeExpression = Utils.escapeExpression;
        hb.VM = runtime;

        hb.template = function (spec) {
          return runtime.template(spec, hb);
        };

        return hb;
      }

      var inst = create();
      inst.create = create;

      _handlebarsNoConflict2['default'](inst);

      inst['default'] = inst;
      exports['default'] = inst;
      module.exports = exports['default'];
      /***/
    },
    /* 1 */

    /***/
    function (module, exports) {
      "use strict";

      exports["default"] = function (obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj["default"] = obj;
          return newObj;
        }
      };

      exports.__esModule = true;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports) {
      "use strict";

      exports["default"] = function (obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      };

      exports.__esModule = true;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;
      exports.HandlebarsEnvironment = HandlebarsEnvironment;

      var _utils = __webpack_require__(4);

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      var _helpers = __webpack_require__(9);

      var _decorators = __webpack_require__(29);

      var _logger = __webpack_require__(31);

      var _logger2 = _interopRequireDefault(_logger);

      var _internalProtoAccess = __webpack_require__(32);

      var VERSION = '4.7.7';
      exports.VERSION = VERSION;
      var COMPILER_REVISION = 8;
      exports.COMPILER_REVISION = COMPILER_REVISION;
      var LAST_COMPATIBLE_COMPILER_REVISION = 7;
      exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
      var REVISION_CHANGES = {
        1: '<= 1.0.rc.2',
        // 1.0.rc.2 is actually rev2 but doesn't report it
        2: '== 1.0.0-rc.3',
        3: '== 1.0.0-rc.4',
        4: '== 1.x.x',
        5: '== 2.0.0-alpha.x',
        6: '>= 2.0.0-beta.1',
        7: '>= 4.0.0 <4.3.0',
        8: '>= 4.3.0'
      };
      exports.REVISION_CHANGES = REVISION_CHANGES;
      var objectType = '[object Object]';

      function HandlebarsEnvironment(helpers, partials, decorators) {
        this.helpers = helpers || {};
        this.partials = partials || {};
        this.decorators = decorators || {};

        _helpers.registerDefaultHelpers(this);

        _decorators.registerDefaultDecorators(this);
      }

      HandlebarsEnvironment.prototype = {
        constructor: HandlebarsEnvironment,
        logger: _logger2['default'],
        log: _logger2['default'].log,
        registerHelper: function registerHelper(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2['default']('Arg not supported with multiple helpers');
            }

            _utils.extend(this.helpers, name);
          } else {
            this.helpers[name] = fn;
          }
        },
        unregisterHelper: function unregisterHelper(name) {
          delete this.helpers[name];
        },
        registerPartial: function registerPartial(name, partial) {
          if (_utils.toString.call(name) === objectType) {
            _utils.extend(this.partials, name);
          } else {
            if (typeof partial === 'undefined') {
              throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
            }

            this.partials[name] = partial;
          }
        },
        unregisterPartial: function unregisterPartial(name) {
          delete this.partials[name];
        },
        registerDecorator: function registerDecorator(name, fn) {
          if (_utils.toString.call(name) === objectType) {
            if (fn) {
              throw new _exception2['default']('Arg not supported with multiple decorators');
            }

            _utils.extend(this.decorators, name);
          } else {
            this.decorators[name] = fn;
          }
        },
        unregisterDecorator: function unregisterDecorator(name) {
          delete this.decorators[name];
        },

        /**
         * Reset the memory of illegal property accesses that have already been logged.
         * @deprecated should only be used in handlebars test-cases
         */
        resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
          _internalProtoAccess.resetLoggedProperties();
        }
      };
      var log = _logger2['default'].log;
      exports.log = log;
      exports.createFrame = _utils.createFrame;
      exports.logger = _logger2['default'];
      /***/
    },
    /* 4 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports.extend = extend;
      exports.indexOf = indexOf;
      exports.escapeExpression = escapeExpression;
      exports.isEmpty = isEmpty;
      exports.createFrame = createFrame;
      exports.blockParams = blockParams;
      exports.appendContextPath = appendContextPath;
      var escape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;',
        '=': '&#x3D;'
      };
      var badChars = /[&<>"'`=]/g,
          possible = /[&<>"'`=]/;

      function escapeChar(chr) {
        return escape[chr];
      }

      function extend(obj
      /* , ...source */
      ) {
        for (var i = 1; i < arguments.length; i++) {
          for (var key in arguments[i]) {
            if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
              obj[key] = arguments[i][key];
            }
          }
        }

        return obj;
      }

      var toString = Object.prototype.toString;
      exports.toString = toString; // Sourced from lodash
      // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt

      /* eslint-disable func-style */

      var isFunction = function isFunction(value) {
        return typeof value === 'function';
      }; // fallback for older versions of Chrome and Safari

      /* istanbul ignore next */


      if (isFunction(/x/)) {
        exports.isFunction = isFunction = function (value) {
          return typeof value === 'function' && toString.call(value) === '[object Function]';
        };
      }

      exports.isFunction = isFunction;
      /* eslint-enable func-style */

      /* istanbul ignore next */

      var isArray = Array.isArray || function (value) {
        return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
      };

      exports.isArray = isArray; // Older IE versions do not directly support indexOf so we must implement our own, sadly.

      function indexOf(array, value) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (array[i] === value) {
            return i;
          }
        }

        return -1;
      }

      function escapeExpression(string) {
        if (typeof string !== 'string') {
          // don't escape SafeStrings, since they're already safe
          if (string && string.toHTML) {
            return string.toHTML();
          } else if (string == null) {
            return '';
          } else if (!string) {
            return string + '';
          } // Force a string conversion as this will be done by the append regardless and
          // the regex test will do this transparently behind the scenes, causing issues if
          // an object's to string has escaped characters in it.


          string = '' + string;
        }

        if (!possible.test(string)) {
          return string;
        }

        return string.replace(badChars, escapeChar);
      }

      function isEmpty(value) {
        if (!value && value !== 0) {
          return true;
        } else if (isArray(value) && value.length === 0) {
          return true;
        } else {
          return false;
        }
      }

      function createFrame(object) {
        var frame = extend({}, object);
        frame._parent = object;
        return frame;
      }

      function blockParams(params, ids) {
        params.path = ids;
        return params;
      }

      function appendContextPath(contextPath, id) {
        return (contextPath ? contextPath + '.' : '') + id;
      }
      /***/

    },
    /* 5 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$defineProperty = __webpack_require__(6)['default'];

      exports.__esModule = true;
      var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

      function Exception(message, node) {
        var loc = node && node.loc,
            line = undefined,
            endLineNumber = undefined,
            column = undefined,
            endColumn = undefined;

        if (loc) {
          line = loc.start.line;
          endLineNumber = loc.end.line;
          column = loc.start.column;
          endColumn = loc.end.column;
          message += ' - ' + line + ':' + column;
        }

        var tmp = Error.prototype.constructor.call(this, message); // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.

        for (var idx = 0; idx < errorProps.length; idx++) {
          this[errorProps[idx]] = tmp[errorProps[idx]];
        }
        /* istanbul ignore else */


        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, Exception);
        }

        try {
          if (loc) {
            this.lineNumber = line;
            this.endLineNumber = endLineNumber; // Work around issue under safari where we can't directly set the column value

            /* istanbul ignore next */

            if (_Object$defineProperty) {
              Object.defineProperty(this, 'column', {
                value: column,
                enumerable: true
              });
              Object.defineProperty(this, 'endColumn', {
                value: endColumn,
                enumerable: true
              });
            } else {
              this.column = column;
              this.endColumn = endColumn;
            }
          }
        } catch (nop) {
          /* Ignore if the browser is very particular */
        }
      }

      Exception.prototype = new Error();
      exports['default'] = Exception;
      module.exports = exports['default'];
      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(7),
        __esModule: true
      };
      /***/
    },
    /* 7 */

    /***/
    function (module, exports, __webpack_require__) {
      var $ = __webpack_require__(8);

      module.exports = function defineProperty(it, key, desc) {
        return $.setDesc(it, key, desc);
      };
      /***/

    },
    /* 8 */

    /***/
    function (module, exports) {
      var $Object = Object;
      module.exports = {
        create: $Object.create,
        getProto: $Object.getPrototypeOf,
        isEnum: {}.propertyIsEnumerable,
        getDesc: $Object.getOwnPropertyDescriptor,
        setDesc: $Object.defineProperty,
        setDescs: $Object.defineProperties,
        getKeys: $Object.keys,
        getNames: $Object.getOwnPropertyNames,
        getSymbols: $Object.getOwnPropertySymbols,
        each: [].forEach
      };
      /***/
    },
    /* 9 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;
      exports.registerDefaultHelpers = registerDefaultHelpers;
      exports.moveHelperToHooks = moveHelperToHooks;

      var _helpersBlockHelperMissing = __webpack_require__(10);

      var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

      var _helpersEach = __webpack_require__(11);

      var _helpersEach2 = _interopRequireDefault(_helpersEach);

      var _helpersHelperMissing = __webpack_require__(24);

      var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

      var _helpersIf = __webpack_require__(25);

      var _helpersIf2 = _interopRequireDefault(_helpersIf);

      var _helpersLog = __webpack_require__(26);

      var _helpersLog2 = _interopRequireDefault(_helpersLog);

      var _helpersLookup = __webpack_require__(27);

      var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

      var _helpersWith = __webpack_require__(28);

      var _helpersWith2 = _interopRequireDefault(_helpersWith);

      function registerDefaultHelpers(instance) {
        _helpersBlockHelperMissing2['default'](instance);

        _helpersEach2['default'](instance);

        _helpersHelperMissing2['default'](instance);

        _helpersIf2['default'](instance);

        _helpersLog2['default'](instance);

        _helpersLookup2['default'](instance);

        _helpersWith2['default'](instance);
      }

      function moveHelperToHooks(instance, helperName, keepHelper) {
        if (instance.helpers[helperName]) {
          instance.hooks[helperName] = instance.helpers[helperName];

          if (!keepHelper) {
            delete instance.helpers[helperName];
          }
        }
      }
      /***/

    },
    /* 10 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      exports['default'] = function (instance) {
        instance.registerHelper('blockHelperMissing', function (context, options) {
          var inverse = options.inverse,
              fn = options.fn;

          if (context === true) {
            return fn(this);
          } else if (context === false || context == null) {
            return inverse(this);
          } else if (_utils.isArray(context)) {
            if (context.length > 0) {
              if (options.ids) {
                options.ids = [options.name];
              }

              return instance.helpers.each(context, options);
            } else {
              return inverse(this);
            }
          } else {
            if (options.data && options.ids) {
              var data = _utils.createFrame(options.data);

              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
              options = {
                data: data
              };
            }

            return fn(context, options);
          }
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 11 */

    /***/
    function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (global) {
        'use strict';

        var _Object$keys = __webpack_require__(12)['default'];

        var _interopRequireDefault = __webpack_require__(2)['default'];

        exports.__esModule = true;

        var _utils = __webpack_require__(4);

        var _exception = __webpack_require__(5);

        var _exception2 = _interopRequireDefault(_exception);

        exports['default'] = function (instance) {
          instance.registerHelper('each', function (context, options) {
            if (!options) {
              throw new _exception2['default']('Must pass iterator to #each');
            }

            var fn = options.fn,
                inverse = options.inverse,
                i = 0,
                ret = '',
                data = undefined,
                contextPath = undefined;

            if (options.data && options.ids) {
              contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
            }

            if (_utils.isFunction(context)) {
              context = context.call(this);
            }

            if (options.data) {
              data = _utils.createFrame(options.data);
            }

            function execIteration(field, index, last) {
              if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;

                if (contextPath) {
                  data.contextPath = contextPath + field;
                }
              }

              ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
              });
            }

            if (context && typeof context === 'object') {
              if (_utils.isArray(context)) {
                for (var j = context.length; i < j; i++) {
                  if (i in context) {
                    execIteration(i, i, i === context.length - 1);
                  }
                }
              } else if (global.Symbol && context[global.Symbol.iterator]) {
                var newContext = [];
                var iterator = context[global.Symbol.iterator]();

                for (var it = iterator.next(); !it.done; it = iterator.next()) {
                  newContext.push(it.value);
                }

                context = newContext;

                for (var j = context.length; i < j; i++) {
                  execIteration(i, i, i === context.length - 1);
                }
              } else {
                (function () {
                  var priorKey = undefined;

                  _Object$keys(context).forEach(function (key) {
                    // We're running the iterations one step out of sync so we can detect
                    // the last iteration without have to scan the object twice and create
                    // an itermediate keys array.
                    if (priorKey !== undefined) {
                      execIteration(priorKey, i - 1);
                    }

                    priorKey = key;
                    i++;
                  });

                  if (priorKey !== undefined) {
                    execIteration(priorKey, i - 1, true);
                  }
                })();
              }
            }

            if (i === 0) {
              ret = inverse(this);
            }

            return ret;
          });
        };

        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */
      }).call(exports, function () {
        return this;
      }());
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(13),
        __esModule: true
      };
      /***/
    },
    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(14);

      module.exports = __webpack_require__(20).Object.keys;
      /***/
    },
    /* 14 */

    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.14 Object.keys(O)
      var toObject = __webpack_require__(15);

      __webpack_require__(17)('keys', function ($keys) {
        return function keys(it) {
          return $keys(toObject(it));
        };
      });
      /***/

    },
    /* 15 */

    /***/
    function (module, exports, __webpack_require__) {
      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__(16);

      module.exports = function (it) {
        return Object(defined(it));
      };
      /***/

    },
    /* 16 */

    /***/
    function (module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
      /***/

    },
    /* 17 */

    /***/
    function (module, exports, __webpack_require__) {
      // most Object methods by ES6 should accept primitives
      var $export = __webpack_require__(18),
          core = __webpack_require__(20),
          fails = __webpack_require__(23);

      module.exports = function (KEY, exec) {
        var fn = (core.Object || {})[KEY] || Object[KEY],
            exp = {};
        exp[KEY] = exec(fn);
        $export($export.S + $export.F * fails(function () {
          fn(1);
        }), 'Object', exp);
      };
      /***/

    },
    /* 18 */

    /***/
    function (module, exports, __webpack_require__) {
      var global = __webpack_require__(19),
          core = __webpack_require__(20),
          ctx = __webpack_require__(21),
          PROTOTYPE = 'prototype';

      var $export = function (type, name, source) {
        var IS_FORCED = type & $export.F,
            IS_GLOBAL = type & $export.G,
            IS_STATIC = type & $export.S,
            IS_PROTO = type & $export.P,
            IS_BIND = type & $export.B,
            IS_WRAP = type & $export.W,
            exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
            target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
            key,
            own,
            out;
        if (IS_GLOBAL) source = name;

        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && key in target;
          if (own && key in exports) continue; // export native or passed

          out = own ? target[key] : source[key]; // prevent global pollution for namespaces

          exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
          : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
          : IS_WRAP && target[key] == out ? function (C) {
            var F = function (param) {
              return this instanceof C ? new C(param) : C(param);
            };

            F[PROTOTYPE] = C[PROTOTYPE];
            return F; // make static versions for prototype methods
          }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
          if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
        }
      }; // type bitmap


      $export.F = 1; // forced

      $export.G = 2; // global

      $export.S = 4; // static

      $export.P = 8; // proto

      $export.B = 16; // bind

      $export.W = 32; // wrap

      module.exports = $export;
      /***/
    },
    /* 19 */

    /***/
    function (module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

      /***/
    },
    /* 20 */

    /***/
    function (module, exports) {
      var core = module.exports = {
        version: '1.2.6'
      };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

      /***/
    },
    /* 21 */

    /***/
    function (module, exports, __webpack_require__) {
      // optional / simple context binding
      var aFunction = __webpack_require__(22);

      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;

        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };

          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };

          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }

        return function
          /* ...args */
        () {
          return fn.apply(that, arguments);
        };
      };
      /***/

    },
    /* 22 */

    /***/
    function (module, exports) {
      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };
      /***/

    },
    /* 23 */

    /***/
    function (module, exports) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
      /***/

    },
    /* 24 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      exports['default'] = function (instance) {
        instance.registerHelper('helperMissing', function ()
        /* [args, ]options */
        {
          if (arguments.length === 1) {
            // A missing field in a {{foo}} construct.
            return undefined;
          } else {
            // Someone is actually trying to call something, blow up.
            throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
          }
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 25 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      exports['default'] = function (instance) {
        instance.registerHelper('if', function (conditional, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#if requires exactly one argument');
          }

          if (_utils.isFunction(conditional)) {
            conditional = conditional.call(this);
          } // Default behavior is to render the positive path if the value is truthy and not empty.
          // The `includeZero` option may be set to treat the condtional as purely not empty based on the
          // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.


          if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
            return options.inverse(this);
          } else {
            return options.fn(this);
          }
        });
        instance.registerHelper('unless', function (conditional, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#unless requires exactly one argument');
          }

          return instance.helpers['if'].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn,
            hash: options.hash
          });
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 26 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;

      exports['default'] = function (instance) {
        instance.registerHelper('log', function ()
        /* message, options */
        {
          var args = [undefined],
              options = arguments[arguments.length - 1];

          for (var i = 0; i < arguments.length - 1; i++) {
            args.push(arguments[i]);
          }

          var level = 1;

          if (options.hash.level != null) {
            level = options.hash.level;
          } else if (options.data && options.data.level != null) {
            level = options.data.level;
          }

          args[0] = level;
          instance.log.apply(instance, args);
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 27 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;

      exports['default'] = function (instance) {
        instance.registerHelper('lookup', function (obj, field, options) {
          if (!obj) {
            // Note for 5.0: Change to "obj == null" in 5.0
            return obj;
          }

          return options.lookupProperty(obj, field);
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 28 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      exports['default'] = function (instance) {
        instance.registerHelper('with', function (context, options) {
          if (arguments.length != 2) {
            throw new _exception2['default']('#with requires exactly one argument');
          }

          if (_utils.isFunction(context)) {
            context = context.call(this);
          }

          var fn = options.fn;

          if (!_utils.isEmpty(context)) {
            var data = options.data;

            if (options.data && options.ids) {
              data = _utils.createFrame(options.data);
              data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
            }

            return fn(context, {
              data: data,
              blockParams: _utils.blockParams([context], [data && data.contextPath])
            });
          } else {
            return options.inverse(this);
          }
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 29 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;
      exports.registerDefaultDecorators = registerDefaultDecorators;

      var _decoratorsInline = __webpack_require__(30);

      var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

      function registerDefaultDecorators(instance) {
        _decoratorsInline2['default'](instance);
      }
      /***/

    },
    /* 30 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      exports['default'] = function (instance) {
        instance.registerDecorator('inline', function (fn, props, container, options) {
          var ret = fn;

          if (!props.partials) {
            props.partials = {};

            ret = function (context, options) {
              // Create a new partials stack frame prior to exec.
              var original = container.partials;
              container.partials = _utils.extend({}, original, props.partials);
              var ret = fn(context, options);
              container.partials = original;
              return ret;
            };
          }

          props.partials[options.args[0]] = options.fn;
          return ret;
        });
      };

      module.exports = exports['default'];
      /***/
    },
    /* 31 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      exports.__esModule = true;

      var _utils = __webpack_require__(4);

      var logger = {
        methodMap: ['debug', 'info', 'warn', 'error'],
        level: 'info',
        // Maps a given level value to the `methodMap` indexes above.
        lookupLevel: function lookupLevel(level) {
          if (typeof level === 'string') {
            var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());

            if (levelMap >= 0) {
              level = levelMap;
            } else {
              level = parseInt(level, 10);
            }
          }

          return level;
        },
        // Can be overridden in the host environment
        log: function log(level) {
          level = logger.lookupLevel(level);

          if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
            var method = logger.methodMap[level]; // eslint-disable-next-line no-console

            if (!console[method]) {
              method = 'log';
            }

            for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              message[_key - 1] = arguments[_key];
            }

            console[method].apply(console, message); // eslint-disable-line no-console
          }
        }
      };
      exports['default'] = logger;
      module.exports = exports['default'];
      /***/
    },
    /* 32 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$create = __webpack_require__(33)['default'];

      var _Object$keys = __webpack_require__(12)['default'];

      var _interopRequireWildcard = __webpack_require__(1)['default'];

      exports.__esModule = true;
      exports.createProtoAccessControl = createProtoAccessControl;
      exports.resultIsAllowed = resultIsAllowed;
      exports.resetLoggedProperties = resetLoggedProperties;

      var _createNewLookupObject = __webpack_require__(35);

      var _logger = __webpack_require__(31);

      var logger = _interopRequireWildcard(_logger);

      var loggedProperties = _Object$create(null);

      function createProtoAccessControl(runtimeOptions) {
        var defaultMethodWhiteList = _Object$create(null);

        defaultMethodWhiteList['constructor'] = false;
        defaultMethodWhiteList['__defineGetter__'] = false;
        defaultMethodWhiteList['__defineSetter__'] = false;
        defaultMethodWhiteList['__lookupGetter__'] = false;

        var defaultPropertyWhiteList = _Object$create(null); // eslint-disable-next-line no-proto


        defaultPropertyWhiteList['__proto__'] = false;
        return {
          properties: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
            defaultValue: runtimeOptions.allowProtoPropertiesByDefault
          },
          methods: {
            whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
            defaultValue: runtimeOptions.allowProtoMethodsByDefault
          }
        };
      }

      function resultIsAllowed(result, protoAccessControl, propertyName) {
        if (typeof result === 'function') {
          return checkWhiteList(protoAccessControl.methods, propertyName);
        } else {
          return checkWhiteList(protoAccessControl.properties, propertyName);
        }
      }

      function checkWhiteList(protoAccessControlForType, propertyName) {
        if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
          return protoAccessControlForType.whitelist[propertyName] === true;
        }

        if (protoAccessControlForType.defaultValue !== undefined) {
          return protoAccessControlForType.defaultValue;
        }

        logUnexpecedPropertyAccessOnce(propertyName);
        return false;
      }

      function logUnexpecedPropertyAccessOnce(propertyName) {
        if (loggedProperties[propertyName] !== true) {
          loggedProperties[propertyName] = true;
          logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
        }
      }

      function resetLoggedProperties() {
        _Object$keys(loggedProperties).forEach(function (propertyName) {
          delete loggedProperties[propertyName];
        });
      }
      /***/

    },
    /* 33 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(34),
        __esModule: true
      };
      /***/
    },
    /* 34 */

    /***/
    function (module, exports, __webpack_require__) {
      var $ = __webpack_require__(8);

      module.exports = function create(P, D) {
        return $.create(P, D);
      };
      /***/

    },
    /* 35 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$create = __webpack_require__(33)['default'];

      exports.__esModule = true;
      exports.createNewLookupObject = createNewLookupObject;

      var _utils = __webpack_require__(4);
      /**
       * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
       * The resulting object can be used with "object[property]" to check if a property exists
       * @param {...object} sources a varargs parameter of source objects that will be merged
       * @returns {object}
       */


      function createNewLookupObject() {
        for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
          sources[_key] = arguments[_key];
        }

        return _utils.extend.apply(undefined, [_Object$create(null)].concat(sources));
      }
      /***/

    },
    /* 36 */

    /***/
    function (module, exports) {
      // Build out our basic SafeString type
      'use strict';

      exports.__esModule = true;

      function SafeString(string) {
        this.string = string;
      }

      SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
        return '' + this.string;
      };

      exports['default'] = SafeString;
      module.exports = exports['default'];
      /***/
    },
    /* 37 */

    /***/
    function (module, exports, __webpack_require__) {
      'use strict';

      var _Object$seal = __webpack_require__(38)['default'];

      var _Object$keys = __webpack_require__(12)['default'];

      var _interopRequireWildcard = __webpack_require__(1)['default'];

      var _interopRequireDefault = __webpack_require__(2)['default'];

      exports.__esModule = true;
      exports.checkRevision = checkRevision;
      exports.template = template;
      exports.wrapProgram = wrapProgram;
      exports.resolvePartial = resolvePartial;
      exports.invokePartial = invokePartial;
      exports.noop = noop;

      var _utils = __webpack_require__(4);

      var Utils = _interopRequireWildcard(_utils);

      var _exception = __webpack_require__(5);

      var _exception2 = _interopRequireDefault(_exception);

      var _base = __webpack_require__(3);

      var _helpers = __webpack_require__(9);

      var _internalWrapHelper = __webpack_require__(42);

      var _internalProtoAccess = __webpack_require__(32);

      function checkRevision(compilerInfo) {
        var compilerRevision = compilerInfo && compilerInfo[0] || 1,
            currentRevision = _base.COMPILER_REVISION;

        if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
          return;
        }

        if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
          var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
              compilerVersions = _base.REVISION_CHANGES[compilerRevision];
          throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
        } else {
          // Use the embedded version info since the runtime doesn't know about this revision yet
          throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
        }
      }

      function template(templateSpec, env) {
        /* istanbul ignore next */
        if (!env) {
          throw new _exception2['default']('No environment passed to template');
        }

        if (!templateSpec || !templateSpec.main) {
          throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
        }

        templateSpec.main.decorator = templateSpec.main_d; // Note: Using env.VM references rather than local var references throughout this section to allow
        // for external users to override these as pseudo-supported APIs.

        env.VM.checkRevision(templateSpec.compiler); // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)

        var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

        function invokePartialWrapper(partial, context, options) {
          if (options.hash) {
            context = Utils.extend({}, context, options.hash);

            if (options.ids) {
              options.ids[0] = true;
            }
          }

          partial = env.VM.resolvePartial.call(this, partial, context, options);
          var extendedOptions = Utils.extend({}, options, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
          });
          var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

          if (result == null && env.compile) {
            options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
            result = options.partials[options.name](context, extendedOptions);
          }

          if (result != null) {
            if (options.indent) {
              var lines = result.split('\n');

              for (var i = 0, l = lines.length; i < l; i++) {
                if (!lines[i] && i + 1 === l) {
                  break;
                }

                lines[i] = options.indent + lines[i];
              }

              result = lines.join('\n');
            }

            return result;
          } else {
            throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
          }
        } // Just add water


        var container = {
          strict: function strict(obj, name, loc) {
            if (!obj || !(name in obj)) {
              throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
                loc: loc
              });
            }

            return container.lookupProperty(obj, name);
          },
          lookupProperty: function lookupProperty(parent, propertyName) {
            var result = parent[propertyName];

            if (result == null) {
              return result;
            }

            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return result;
            }

            if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
              return result;
            }

            return undefined;
          },
          lookup: function lookup(depths, name) {
            var len = depths.length;

            for (var i = 0; i < len; i++) {
              var result = depths[i] && container.lookupProperty(depths[i], name);

              if (result != null) {
                return depths[i][name];
              }
            }
          },
          lambda: function lambda(current, context) {
            return typeof current === 'function' ? current.call(context) : current;
          },
          escapeExpression: Utils.escapeExpression,
          invokePartial: invokePartialWrapper,
          fn: function fn(i) {
            var ret = templateSpec[i];
            ret.decorator = templateSpec[i + '_d'];
            return ret;
          },
          programs: [],
          program: function program(i, data, declaredBlockParams, blockParams, depths) {
            var programWrapper = this.programs[i],
                fn = this.fn(i);

            if (data || depths || blockParams || declaredBlockParams) {
              programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
            } else if (!programWrapper) {
              programWrapper = this.programs[i] = wrapProgram(this, i, fn);
            }

            return programWrapper;
          },
          data: function data(value, depth) {
            while (value && depth--) {
              value = value._parent;
            }

            return value;
          },
          mergeIfNeeded: function mergeIfNeeded(param, common) {
            var obj = param || common;

            if (param && common && param !== common) {
              obj = Utils.extend({}, common, param);
            }

            return obj;
          },
          // An empty object to use as replacement for null-contexts
          nullContext: _Object$seal({}),
          noop: env.VM.noop,
          compilerInfo: templateSpec.compiler
        };

        function ret(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var data = options.data;

          ret._setup(options);

          if (!options.partial && templateSpec.useData) {
            data = initData(context, data);
          }

          var depths = undefined,
              blockParams = templateSpec.useBlockParams ? [] : undefined;

          if (templateSpec.useDepths) {
            if (options.depths) {
              depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
            } else {
              depths = [context];
            }
          }

          function main(context
          /*, options*/
          ) {
            return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
          }

          main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
          return main(context, options);
        }

        ret.isTop = true;

        ret._setup = function (options) {
          if (!options.partial) {
            var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
            wrapHelpersToPassLookupProperty(mergedHelpers, container);
            container.helpers = mergedHelpers;

            if (templateSpec.usePartial) {
              // Use mergeIfNeeded here to prevent compiling global partials multiple times
              container.partials = container.mergeIfNeeded(options.partials, env.partials);
            }

            if (templateSpec.usePartial || templateSpec.useDecorators) {
              container.decorators = Utils.extend({}, env.decorators, options.decorators);
            }

            container.hooks = {};
            container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
            var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;

            _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);

            _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
          } else {
            container.protoAccessControl = options.protoAccessControl; // internal option

            container.helpers = options.helpers;
            container.partials = options.partials;
            container.decorators = options.decorators;
            container.hooks = options.hooks;
          }
        };

        ret._child = function (i, data, blockParams, depths) {
          if (templateSpec.useBlockParams && !blockParams) {
            throw new _exception2['default']('must pass block params');
          }

          if (templateSpec.useDepths && !depths) {
            throw new _exception2['default']('must pass parent depths');
          }

          return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
        };

        return ret;
      }

      function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
        function prog(context) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
          var currentDepths = depths;

          if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
            currentDepths = [context].concat(depths);
          }

          return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
        }

        prog = executeDecorators(fn, prog, container, depths, data, blockParams);
        prog.program = i;
        prog.depth = depths ? depths.length : 0;
        prog.blockParams = declaredBlockParams || 0;
        return prog;
      }
      /**
       * This is currently part of the official API, therefore implementation details should not be changed.
       */


      function resolvePartial(partial, context, options) {
        if (!partial) {
          if (options.name === '@partial-block') {
            partial = options.data['partial-block'];
          } else {
            partial = options.partials[options.name];
          }
        } else if (!partial.call && !options.name) {
          // This is a dynamic partial that returned a string
          options.name = partial;
          partial = options.partials[partial];
        }

        return partial;
      }

      function invokePartial(partial, context, options) {
        // Use the current closure context to save the partial-block if this partial
        var currentPartialBlock = options.data && options.data['partial-block'];
        options.partial = true;

        if (options.ids) {
          options.data.contextPath = options.ids[0] || options.data.contextPath;
        }

        var partialBlock = undefined;

        if (options.fn && options.fn !== noop) {
          (function () {
            options.data = _base.createFrame(options.data); // Wrapper function to get access to currentPartialBlock from the closure

            var fn = options.fn;

            partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
              var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1]; // Restore the partial-block from the closure for the execution of the block
              // i.e. the part inside the block of the partial call.

              options.data = _base.createFrame(options.data);
              options.data['partial-block'] = currentPartialBlock;
              return fn(context, options);
            };

            if (fn.partials) {
              options.partials = Utils.extend({}, options.partials, fn.partials);
            }
          })();
        }

        if (partial === undefined && partialBlock) {
          partial = partialBlock;
        }

        if (partial === undefined) {
          throw new _exception2['default']('The partial ' + options.name + ' could not be found');
        } else if (partial instanceof Function) {
          return partial(context, options);
        }
      }

      function noop() {
        return '';
      }

      function initData(context, data) {
        if (!data || !('root' in data)) {
          data = data ? _base.createFrame(data) : {};
          data.root = context;
        }

        return data;
      }

      function executeDecorators(fn, prog, container, depths, data, blockParams) {
        if (fn.decorator) {
          var props = {};
          prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
          Utils.extend(prog, props);
        }

        return prog;
      }

      function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
        _Object$keys(mergedHelpers).forEach(function (helperName) {
          var helper = mergedHelpers[helperName];
          mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
        });
      }

      function passLookupPropertyOption(helper, container) {
        var lookupProperty = container.lookupProperty;
        return _internalWrapHelper.wrapHelper(helper, function (options) {
          return Utils.extend({
            lookupProperty: lookupProperty
          }, options);
        });
      }
      /***/

    },
    /* 38 */

    /***/
    function (module, exports, __webpack_require__) {
      module.exports = {
        "default": __webpack_require__(39),
        __esModule: true
      };
      /***/
    },
    /* 39 */

    /***/
    function (module, exports, __webpack_require__) {
      __webpack_require__(40);

      module.exports = __webpack_require__(20).Object.seal;
      /***/
    },
    /* 40 */

    /***/
    function (module, exports, __webpack_require__) {
      // 19.1.2.17 Object.seal(O)
      var isObject = __webpack_require__(41);

      __webpack_require__(17)('seal', function ($seal) {
        return function seal(it) {
          return $seal && isObject(it) ? $seal(it) : it;
        };
      });
      /***/

    },
    /* 41 */

    /***/
    function (module, exports) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
      /***/

    },
    /* 42 */

    /***/
    function (module, exports) {
      'use strict';

      exports.__esModule = true;
      exports.wrapHelper = wrapHelper;

      function wrapHelper(helper, transformOptionsFn) {
        if (typeof helper !== 'function') {
          // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
          // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
          return helper;
        }

        var wrapper = function wrapper()
        /* dynamic arguments */
        {
          var options = arguments[arguments.length - 1];
          arguments[arguments.length - 1] = transformOptionsFn(options);
          return helper.apply(this, arguments);
        };

        return wrapper;
      }
      /***/

    },
    /* 43 */

    /***/
    function (module, exports) {
      /* WEBPACK VAR INJECTION */
      (function (global) {
        'use strict';

        exports.__esModule = true;

        exports['default'] = function (Handlebars) {
          /* istanbul ignore next */
          var root = typeof global !== 'undefined' ? global : window,
              $Handlebars = root.Handlebars;
          /* istanbul ignore next */

          Handlebars.noConflict = function () {
            if (root.Handlebars === Handlebars) {
              root.Handlebars = $Handlebars;
            }

            return Handlebars;
          };
        };

        module.exports = exports['default'];
        /* WEBPACK VAR INJECTION */
      }).call(exports, function () {
        return this;
      }());
      /***/
    }
    /******/
    ])
  );
});

;
},{}],"svPa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const templateFunction = _handlebars.default.template({
  "1": function (container, depth0, helpers, partials, data) {
    var helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = container.hooks.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "    <img\n      class='modal__poster'\n      srcset=' https://image.tmdb.org/t/p/w500" + alias4((helper = (helper = lookupProperty(helpers, "poster_path") || (depth0 != null ? lookupProperty(depth0, "poster_path") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "poster_path",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 5,
          "column": 46
        },
        "end": {
          "line": 5,
          "column": 61
        }
      }
    }) : helper)) + " 1x,\n 				https://image.tmdb.org/t/p/w780" + alias4((helper = (helper = lookupProperty(helpers, "poster_path") || (depth0 != null ? lookupProperty(depth0, "poster_path") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "poster_path",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 6,
          "column": 36
        },
        "end": {
          "line": 6,
          "column": 51
        }
      }
    }) : helper)) + " 2x'\n      src='https://image.tmdb.org/t/p/w500" + alias4((helper = (helper = lookupProperty(helpers, "poster_path") || (depth0 != null ? lookupProperty(depth0, "poster_path") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "poster_path",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 7,
          "column": 42
        },
        "end": {
          "line": 7,
          "column": 57
        }
      }
    }) : helper)) + "'\n      alt='poster'\n    />\n";
  },
  "3": function (container, depth0, helpers, partials, data) {
    var helper,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "    <img src='" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "own_poster_path") || (depth0 != null ? lookupProperty(depth0, "own_poster_path") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      "name": "own_poster_path",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 11,
          "column": 14
        },
        "end": {
          "line": 11,
          "column": 33
        }
      }
    }) : helper)) + "' alt='poster' />\n";
  },
  "5": function (container, depth0, helpers, partials, data) {
    var stack1,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "        <p class='modal__data-description modal__data-description--trailer'>\n" + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "trailers") : depth0, {
      "name": "each",
      "hash": {},
      "fn": container.program(6, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 45,
          "column": 6
        },
        "end": {
          "line": 47,
          "column": 15
        }
      }
    })) != null ? stack1 : "") + "        </p>\n";
  },
  "6": function (container, depth0, helpers, partials, data) {
    var helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = container.hooks.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "          <a target=\"_blank\" href='https://www.youtube.com/watch?v=" + alias4((helper = (helper = lookupProperty(helpers, "key") || (depth0 != null ? lookupProperty(depth0, "key") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "key",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 46,
          "column": 67
        },
        "end": {
          "line": 46,
          "column": 74
        }
      }
    }) : helper)) + "'>trailer " + alias4((helper = (helper = lookupProperty(helpers, "index") || (depth0 != null ? lookupProperty(depth0, "index") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "index",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 46,
          "column": 84
        },
        "end": {
          "line": 46,
          "column": 93
        }
      }
    }) : helper)) + "</a>\n";
  },
  "8": function (container, depth0, helpers, partials, data) {
    return "         <p class='modal__data-description modal__data-description--trailer'>No trailer</p>\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function (container, depth0, helpers, partials, data) {
    var stack1,
        helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = container.hooks.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "<div class='modal__poster-container'>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "poster_path") : depth0, {
      "name": "if",
      "hash": {},
      "fn": container.program(1, data, 0),
      "inverse": container.program(3, data, 0),
      "data": data,
      "loc": {
        "start": {
          "line": 2,
          "column": 2
        },
        "end": {
          "line": 12,
          "column": 9
        }
      }
    })) != null ? stack1 : "") + "</div>\n\n<div class='modal__data-container'>\n\n  <h1 class='modal__main-title'>" + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "title",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 17,
          "column": 32
        },
        "end": {
          "line": 17,
          "column": 41
        }
      }
    }) : helper)) + "</h1>\n\n  <div class='modal__table'>\n    <div class='modal__table-element'>\n      <p class='modal__data-title'>Vote / Votes</p>\n      <p class='modal__data-description'><span\n          class='modal__data-description--average'\n        >" + alias4((helper = (helper = lookupProperty(helpers, "vote_average") || (depth0 != null ? lookupProperty(depth0, "vote_average") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "vote_average",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 24,
          "column": 9
        },
        "end": {
          "line": 24,
          "column": 25
        }
      }
    }) : helper)) + "</span>\n        /\n        <span class='modal__data-description--count'>" + alias4((helper = (helper = lookupProperty(helpers, "vote_count") || (depth0 != null ? lookupProperty(depth0, "vote_count") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "vote_count",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 26,
          "column": 53
        },
        "end": {
          "line": 26,
          "column": 67
        }
      }
    }) : helper)) + "</span></p>\n    </div>\n    <div class='modal__table-element'>\n      <p class='modal__data-title'>Popularity</p>\n      <p class='modal__data-description'>" + alias4((helper = (helper = lookupProperty(helpers, "popularity") || (depth0 != null ? lookupProperty(depth0, "popularity") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "popularity",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 30,
          "column": 41
        },
        "end": {
          "line": 30,
          "column": 55
        }
      }
    }) : helper)) + "</p>\n    </div>\n\n    <div class='modal__table-element'>\n      <p class='modal__data-title'>Original Title</p>\n      <p class='modal__data-description modal__data-description--title'>" + alias4((helper = (helper = lookupProperty(helpers, "original_title") || (depth0 != null ? lookupProperty(depth0, "original_title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "original_title",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 35,
          "column": 72
        },
        "end": {
          "line": 35,
          "column": 90
        }
      }
    }) : helper)) + "</p>\n    </div>\n    <div class='modal__table-element'>\n      <p class='modal__data-title'>Genre</p>\n      <p class='modal__data-description'>" + alias4((helper = (helper = lookupProperty(helpers, "genres") || (depth0 != null ? lookupProperty(depth0, "genres") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "genres",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 39,
          "column": 41
        },
        "end": {
          "line": 39,
          "column": 51
        }
      }
    }) : helper)) + "</p>\n    </div>\n    <div class='modal__table-element'>\n      <p class='modal__data-title'>Trailer</p>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "trailers") : depth0, {
      "name": "if",
      "hash": {},
      "fn": container.program(5, data, 0),
      "inverse": container.program(8, data, 0),
      "data": data,
      "loc": {
        "start": {
          "line": 43,
          "column": 6
        },
        "end": {
          "line": 51,
          "column": 13
        }
      }
    })) != null ? stack1 : "") + "    </div>\n  </div>\n  \n\n\n  <h2 class='modal__annotation-title'>About</h2>\n\n  <p class='modal__annotation-description'>" + alias4((helper = (helper = lookupProperty(helpers, "overview") || (depth0 != null ? lookupProperty(depth0, "overview") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "overview",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 59,
          "column": 43
        },
        "end": {
          "line": 59,
          "column": 55
        }
      }
    }) : helper)) + "</p>\n\n  <div class='modal__buttons-container'>\n    <button type='button' class='modal__watch-list button'>ADD TO WATCHED</button>\n    <button type='button' class='modal__queue-list button'>ADD TO QUEUE</button>\n  </div>\n\n</div>";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"pAws"}],"cEEA":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const templateFunction = _handlebars.default.template({
  "1": function (container, depth0, helpers, partials, data) {
    var stack1,
        helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = container.hooks.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "<li class=\"film-list__item\" data-id-number='" + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "id",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 2,
          "column": 44
        },
        "end": {
          "line": 2,
          "column": 50
        }
      }
    }) : helper)) + "'>\n	<div class=\"thumb\">\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "poster_path") : depth0, {
      "name": "if",
      "hash": {},
      "fn": container.program(2, data, 0),
      "inverse": container.program(4, data, 0),
      "data": data,
      "loc": {
        "start": {
          "line": 4,
          "column": 2
        },
        "end": {
          "line": 10,
          "column": 9
        }
      }
    })) != null ? stack1 : "") + "	</div>\n	<div class=\"descr\">\n		<h4 class=\"descr__title\">" + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "title",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 13,
          "column": 27
        },
        "end": {
          "line": 13,
          "column": 36
        }
      }
    }) : helper)) + "</h4>\n		<p class=\"descr__genres-year\">" + alias4((helper = (helper = lookupProperty(helpers, "genres") || (depth0 != null ? lookupProperty(depth0, "genres") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "genres",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 14,
          "column": 32
        },
        "end": {
          "line": 14,
          "column": 42
        }
      }
    }) : helper)) + " | " + alias4((helper = (helper = lookupProperty(helpers, "release_date") || (depth0 != null ? lookupProperty(depth0, "release_date") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "release_date",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 14,
          "column": 45
        },
        "end": {
          "line": 14,
          "column": 61
        }
      }
    }) : helper)) + " <span\n				class=\"descr__vote\">" + alias4((helper = (helper = lookupProperty(helpers, "vote_average") || (depth0 != null ? lookupProperty(depth0, "vote_average") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "vote_average",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 15,
          "column": 24
        },
        "end": {
          "line": 15,
          "column": 40
        }
      }
    }) : helper)) + "</span></p>\n	</div>\n</li>\n";
  },
  "2": function (container, depth0, helpers, partials, data) {
    var helper,
        alias1 = depth0 != null ? depth0 : container.nullContext || {},
        alias2 = container.hooks.helperMissing,
        alias3 = "function",
        alias4 = container.escapeExpression,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "		<img srcset=\" https://image.tmdb.org/t/p/w300" + alias4((helper = (helper = lookupProperty(helpers, "poster_path") || (depth0 != null ? lookupProperty(depth0, "poster_path") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "poster_path",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 5,
          "column": 47
        },
        "end": {
          "line": 5,
          "column": 62
        }
      }
    }) : helper)) + " 1x,\n 				https://image.tmdb.org/t/p/w780" + alias4((helper = (helper = lookupProperty(helpers, "poster_path") || (depth0 != null ? lookupProperty(depth0, "poster_path") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "poster_path",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 6,
          "column": 36
        },
        "end": {
          "line": 6,
          "column": 51
        }
      }
    }) : helper)) + " 2x\" src='https://image.tmdb.org/t/p/w300" + alias4((helper = (helper = lookupProperty(helpers, "poster_path") || (depth0 != null ? lookupProperty(depth0, "poster_path") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      "name": "poster_path",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 6,
          "column": 92
        },
        "end": {
          "line": 6,
          "column": 107
        }
      }
    }) : helper)) + "'\n			alt=\"photo\">\n";
  },
  "4": function (container, depth0, helpers, partials, data) {
    var helper,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return "		<img src='" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "own_poster_path") || (depth0 != null ? lookupProperty(depth0, "own_poster_path") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      "name": "own_poster_path",
      "hash": {},
      "data": data,
      "loc": {
        "start": {
          "line": 9,
          "column": 12
        },
        "end": {
          "line": 9,
          "column": 31
        }
      }
    }) : helper)) + "' alt=\"photo\">\n";
  },
  "compiler": [8, ">= 4.3.0"],
  "main": function (container, depth0, helpers, partials, data) {
    var stack1,
        lookupProperty = container.lookupProperty || function (parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName];
      }

      return undefined;
    };

    return (stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0, {
      "name": "each",
      "hash": {},
      "fn": container.program(1, data, 0),
      "inverse": container.noop,
      "data": data,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 18,
          "column": 9
        }
      }
    })) != null ? stack1 : "";
  },
  "useData": true
});

var _default = templateFunction;
exports.default = _default;
},{"handlebars/dist/handlebars.runtime":"pAws"}],"EDTP":[function(require,module,exports) {
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],"S1cf":[function(require,module,exports) {
'use strict';

var bind = require('./helpers/bind');

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

},{"./helpers/bind":"EDTP"}],"H6Qo":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":"S1cf"}],"rj2i":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":"S1cf"}],"M8l6":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":"S1cf"}],"YdsM":[function(require,module,exports) {
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};

},{}],"bIiH":[function(require,module,exports) {
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"YdsM"}],"aS8y":[function(require,module,exports) {
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":"bIiH"}],"dn2M":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

},{"./../utils":"S1cf"}],"YZjV":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"a2Uu":[function(require,module,exports) {
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],"KxkP":[function(require,module,exports) {
'use strict';

var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

},{"../helpers/isAbsoluteURL":"YZjV","../helpers/combineURLs":"a2Uu"}],"ZeD7":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":"S1cf"}],"w7LF":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

},{"./../utils":"S1cf"}],"mIKj":[function(require,module,exports) {
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],"KRuG":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var cookies = require('./../helpers/cookies');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');
var defaults = require('../defaults');
var Cancel = require('../cancel/Cancel');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

},{"./../utils":"S1cf","./../core/settle":"aS8y","./../helpers/cookies":"dn2M","./../helpers/buildURL":"H6Qo","../core/buildFullPath":"KxkP","./../helpers/parseHeaders":"ZeD7","./../helpers/isURLSameOrigin":"w7LF","../core/createError":"bIiH","../defaults":"BXyq","../cancel/Cancel":"mIKj"}],"pBGv":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"BXyq":[function(require,module,exports) {
var process = require("process");
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');
var enhanceError = require('./core/enhanceError');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

},{"./utils":"S1cf","./helpers/normalizeHeaderName":"M8l6","./core/enhanceError":"YdsM","./adapters/xhr":"KRuG","./adapters/http":"KRuG","process":"pBGv"}],"woEt":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var defaults = require('./../defaults');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

},{"./../utils":"S1cf","./../defaults":"BXyq"}],"V30M":[function(require,module,exports) {
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],"uz6X":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
var Cancel = require('../cancel/Cancel');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"./../utils":"S1cf","./transformData":"woEt","../cancel/isCancel":"V30M","../defaults":"BXyq","../cancel/Cancel":"mIKj"}],"OHvn":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};

},{"../utils":"S1cf"}],"xNqU":[function(require,module,exports) {
module.exports = {
  "version": "0.24.0"
};
},{}],"lsvU":[function(require,module,exports) {
'use strict';

var VERSION = require('../env/data').version;

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};

},{"../env/data":"xNqU"}],"OvAf":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');
var validator = require('../helpers/validator');

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"./../utils":"S1cf","../helpers/buildURL":"H6Qo","./InterceptorManager":"rj2i","./dispatchRequest":"uz6X","./mergeConfig":"OHvn","../helpers/validator":"lsvU"}],"tsWd":[function(require,module,exports) {
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":"mIKj"}],"X8jb":[function(require,module,exports) {
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],"wICU":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

},{}],"nUiQ":[function(require,module,exports) {
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');
axios.VERSION = require('./env/data').version;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"S1cf","./helpers/bind":"EDTP","./core/Axios":"OvAf","./core/mergeConfig":"OHvn","./defaults":"BXyq","./cancel/Cancel":"mIKj","./cancel/CancelToken":"tsWd","./cancel/isCancel":"V30M","./env/data":"xNqU","./helpers/spread":"X8jb","./helpers/isAxiosError":"wICU"}],"dZBD":[function(require,module,exports) {
module.exports = require('./lib/axios');
},{"./lib/axios":"nUiQ"}],"pQa5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genres = void 0;
const genres = [{
  id: 28,
  name: 'Action'
}, {
  id: 12,
  name: 'Adventure'
}, {
  id: 16,
  name: 'Animation'
}, {
  id: 35,
  name: 'Comedy'
}, {
  id: 80,
  name: 'Crime'
}, {
  id: 99,
  name: 'Documentary'
}, {
  id: 18,
  name: 'Drama'
}, {
  id: 10751,
  name: 'Family'
}, {
  id: 14,
  name: 'Fantasy'
}, {
  id: 36,
  name: 'History'
}, {
  id: 27,
  name: 'Horror'
}, {
  id: 10402,
  name: 'Music'
}, {
  id: 9648,
  name: 'Mystery'
}, {
  id: 10749,
  name: 'Romance'
}, {
  id: 878,
  name: 'Science Fiction'
}, {
  id: 10770,
  name: 'TV Movie'
}, {
  id: 53,
  name: 'Thriller'
}, {
  id: 10752,
  name: 'War'
}, {
  id: 37,
  name: 'Western'
}];
exports.genres = genres;
},{}],"LopT":[function(require,module,exports) {
module.exports = "/emty-film.915bfcc5.jpg";
},{}],"eQwa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _genres = require("./genres");

var _emtyFilm = _interopRequireDefault(require("../images/emty-film.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Ключ API (v3 auth)
// 93fd20970d74d9a3f9466d8d6c9e6297
// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZkMjA5NzBkNzRkOWEzZjk0NjZkOGQ2YzllNjI5NyIsInN1YiI6IjYxOTNhYjExNDJmMTlmMDA0MzFlZTkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z6zVAqAKYmCRhBa4xmofDsVBFw9-x8O5I_GnOqiw-F8
const AUTH_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZkMjA5NzBkNzRkOWEzZjk0NjZkOGQ2YzllNjI5NyIsInN1YiI6IjYxOTNhYjExNDJmMTlmMDA0MzFlZTkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z6zVAqAKYmCRhBa4xmofDsVBFw9-x8O5I_GnOqiw-F8';
_axios.default.defaults.headers.common['Authorization'] = `Bearer ${AUTH_KEY}`; //форматирует жанры фильмов

function formatGenres(idArray) {
  const resArr = [];
  idArray.forEach(id => {
    for (let i = 0; i < _genres.genres.length; i++) {
      _genres.genres[i].id === id ? resArr.push(_genres.genres[i].name) : undefined;
    }
  });

  if (resArr.length > 2) {
    resArr.splice(2, resArr.length, 'Other');
  }

  return resArr.join(', ');
} //форматирует дату выпуска фильмов


function formatYear(date) {
  return date ? date.slice(0, 4) : undefined;
} //форматирует оценку фильма


function formatVote(voteNumber) {
  return voteNumber.toFixed(1);
} // форматирует ответ для трейлеров


function formatVideos(videosArr) {
  const trailers = [];
  let i = 1;
  videosArr.forEach(video => {
    if (video.type === 'Trailer') {
      const index = i++;
      const key = video.key; // console.log(video);

      trailers.push({
        index,
        key
      });
    }
  }); // console.log(trailers);

  if (trailers.length === 0) {
    return null;
  } else if (trailers.length === 1) {
    delete trailers[0].index;
    return trailers;
  } else {
    return trailers.slice(0, 2);
  } // return trailers.length > 2 ? trailers.slice(0, 2) : trailers;

} //экспорт функций запросов


class SearchAPI {
  baseUrl = 'https://api.themoviedb.org/3';
  page = 1;

  constructor() {
    this.searchQuery = '';
  }

  get page() {
    return this.page;
  }

  set page(numOfPage) {
    this.page = numOfPage;
  }

  ressetPage() {
    this.page = 1;
  } //запрос на фильмы по ключевому слову или самые популярные


  async getMovies() {
    let response;

    try {
      if (this.searchQuery) {
        response = await _axios.default.get(`${this.baseUrl}/search/movie?language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`);
      } else {
        response = await _axios.default.get(`${this.baseUrl}/trending/movie/week?language=en-US&page=${this.page}&include_adult=false`);
      }

      const movies = await response.data; //форматируем объект с фильмами

      movies.results.forEach(movie => {
        movie.genre_ids = formatGenres(movie.genre_ids);
        movie.release_date = formatYear(movie.release_date);
        movie.vote_average = formatVote(movie.vote_average);

        if (!movie.poster_path) {
          movie.own_poster_path = _emtyFilm.default;
        }
      }); //возвращаем фильмы

      return movies;
    } catch (error) {
      console.error(error);
    }
  } //запрос на фильм по по ID


  async getMovieById(movieId) {
    const numOfFetch = [1, 2];
    const arrayOfPromises = numOfFetch.map(async value => {
      if (value === 1) {
        const response = await _axios.default.get(`${this.baseUrl}/movie/${movieId}`);
        return response.data;
      } else {
        const response = await _axios.default.get(`${this.baseUrl}/movie/${movieId}/videos`);
        return response.data.results;
      }
    });

    try {
      const movieArr = await Promise.all(arrayOfPromises); // const response = await axios.get(`${this.#baseUrl}/movie/${movieId}`);

      const movie = movieArr[0]; // const responseVideos = await axios.get(`${this.#baseUrl}/movie/${movieId}/videos`);

      const videos = movieArr[1]; //форматируем поле с жанрами фильма

      const movieGenres = movie.genres.map(element => element.name).join(', ');
      movie.genres = movieGenres; //форматируем постер фильма

      if (!movie.poster_path) {
        movie.own_poster_path = _emtyFilm.default;
      } //форматируем поле popularity


      movie.popularity = Math.round(movie.popularity); //форматируем поле даты

      movie.release_date = formatYear(movie.release_date); //форматируем трейлеры

      const trailers = formatVideos(videos);

      if (trailers) {
        movie.trailers = trailers;
      } //возвращаем фильм


      return movie;
    } catch (error) {
      console.error(error);
    }
  }

}

exports.default = SearchAPI;
},{"axios":"dZBD","./genres":"pQa5","../images/emty-film.jpg":"LopT"}],"nnQC":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRemoveQueue = addRemoveQueue;
exports.addRemoveWatched = addRemoveWatched;
exports.getLocalStorageMovies = getLocalStorageMovies;
exports.isInStorage = isInStorage;
exports.setMovieObj = setMovieObj;

var _emtyFilm = _interopRequireDefault(require("../images/emty-film.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const movieObj = {};

function setMovieObj(_ref) {
  let {
    id,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    release_date,
    overview
  } = _ref;
  movieObj.id = id;
  movieObj.poster_path = poster_path;
  movieObj.title = title;
  movieObj.vote_average = vote_average;
  movieObj.vote_count = vote_count;
  movieObj.popularity = popularity;
  movieObj.original_title = original_title;
  movieObj.genres = genres;
  movieObj.release_date = release_date;
  movieObj.overview = overview;
  movieObj.own_poster_path = _emtyFilm.default;
}

function getLocalStorageMovies(keyItem) {
  if (keyItem === 'watchedMovies') {
    const res = JSON.parse(localStorage.getItem('watchedMovies'));
    return res ? res : [];
  } else if (keyItem === 'queueMovies') {
    const res = JSON.parse(localStorage.getItem('queueMovies'));
    return res ? res : [];
  }
}

function isInStorage(movieObj, keyItem) {
  return getLocalStorageMovies(keyItem).some(movie => {
    return movie.id === movieObj.id;
  });
}
/******************add remove***************** */


function removeFromLocalStorage(movieObj, key) {
  const newMoviesArr = getLocalStorageMovies(key).filter(movie => movie.id != movieObj.id);
  localStorage.setItem(key, JSON.stringify(newMoviesArr));
}

function addToLocalStorage(movieObj, key) {
  const watchedMoviesArr = getLocalStorageMovies(key);
  watchedMoviesArr.push(movieObj);
  localStorage.setItem(key, JSON.stringify(watchedMoviesArr));
}
/*********************************** */

/******************listener********************* */


function addRemoveWatched(event) {
  const refWatchBtn = document.querySelector('.modal__watch-list');
  const key = 'watchedMovies'; //если фильм есть - удаляем

  if (isInStorage(movieObj, key)) {
    refWatchBtn.classList.remove('inStorage');
    refWatchBtn.textContent = 'ADD TO WATCHED';
    removeFromLocalStorage(movieObj, key);
    return;
  } //иначе добавляем в локал


  refWatchBtn.classList.add('inStorage');
  refWatchBtn.textContent = 'REMOVE WATCHED';
  addToLocalStorage(movieObj, key);
}

function addRemoveQueue(event) {
  const refQueueBtn = document.querySelector('.modal__queue-list');
  const key = 'queueMovies'; //если фильм есть - удаляем

  if (isInStorage(movieObj, key)) {
    refQueueBtn.classList.remove('inStorage');
    refQueueBtn.textContent = 'ADD TO QUEUE';
    removeFromLocalStorage(movieObj, key);
    return;
  } //иначе добавляем в локал


  refQueueBtn.classList.add('inStorage');
  refQueueBtn.textContent = 'REMOVE QUEUE';
  addToLocalStorage(movieObj, key);
}
},{"../images/emty-film.jpg":"LopT"}],"MzUv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openModalCard = openModalCard;
exports.showMoviesCards = showMoviesCards;

var _notiflixLoadingAio = require("notiflix/build/notiflix-loading-aio");

var _modalFilmCardTemplate = _interopRequireDefault(require("../templates/modal-film-card-template.hbs"));

var _libraryFilmCardTemplate = _interopRequireDefault(require("../templates/library-film-card-template.hbs"));

var _refs = require("./refs.js");

var _apiService = _interopRequireDefault(require("./apiService.js"));

var _pagination = require("./pagination.js");

var _localStorage = require("./localStorage.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apiService = new _apiService.default();

function openModalCard(evt) {
  _refs.refs.modalCard.innerHTML = '';

  _refs.refs.modal.addEventListener('click', toClickOnOverlay);

  _refs.refs.buttonClose.addEventListener('click', toClickButtonClose);

  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.toggle('modal-open');

  if (evt) {
    _refs.refs.modal.classList.remove('is-hidden');
  }

  const filmId = evt.currentTarget.dataset.idNumber;

  _notiflixLoadingAio.Loading.standard();

  getFilmInfo(filmId);

  _notiflixLoadingAio.Loading.remove();
}

async function getFilmInfo(filmId) {
  try {
    const filmInfo = await apiService.getMovieById(filmId); // console.log(filmInfo);

    _refs.refs.modalCard.innerHTML = (0, _modalFilmCardTemplate.default)(filmInfo);
    (0, _localStorage.setMovieObj)(filmInfo);
    const refWatchBtn = document.querySelector('.modal__watch-list');
    const refQueueBtn = document.querySelector('.modal__queue-list');

    if ((0, _localStorage.isInStorage)(filmInfo, 'watchedMovies')) {
      refWatchBtn.classList.add('inStorage');
      refWatchBtn.textContent = 'REMOVE WATCHED';
    }

    if ((0, _localStorage.isInStorage)(filmInfo, 'queueMovies')) {
      refQueueBtn.classList.add('inStorage');
      refQueueBtn.textContent = 'REMOVE QUEUE';
    }

    refWatchBtn.addEventListener('click', _localStorage.addRemoveWatched);
    refQueueBtn.addEventListener('click', _localStorage.addRemoveQueue);
  } catch (error) {
    console.error(error);
  }
}

function closeModalCard() {
  _refs.refs.modal.classList.add('is-hidden');

  _refs.refs.modal.removeEventListener('click', toClickOnOverlay);

  _refs.refs.buttonClose.removeEventListener('click', closeModalCard);

  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.toggle('modal-open');

  if (window.location.pathname === '/library.html') {
    const isInWatched = _refs.refs.watchedBtn.classList.contains('filter__btn--current');

    if (isInWatched) {
      const moviesArr = (0, _localStorage.getLocalStorageMovies)('watchedMovies');

      const page = _pagination.pagination.getCurrentPage();

      showLibraryPage(moviesArr, page);
    } else {
      const moviesArr = (0, _localStorage.getLocalStorageMovies)('queueMovies');

      const page = _pagination.pagination.getCurrentPage();

      showLibraryPage(moviesArr, page);
    }
  }

  document.querySelector('.modal__watch-list').removeEventListener('click', _localStorage.addRemoveWatched);
  document.querySelector('.modal__queue-list').removeEventListener('click', _localStorage.addRemoveQueue);
}

function showLibraryPage(moviesArr, page) {
  if (page === 1) {
    moviesArr.splice(20);
    showMoviesCards(moviesArr);
  } else {
    const startPageItem = page * 20 - 20;
    const endPageItem = startPageItem + 20;
    const pageToShow = moviesArr.slice(startPageItem, endPageItem);
    showMoviesCards(pageToShow);
  }
}

function showMoviesCards(movies) {
  //форматируем жанры
  movies.forEach(movie => {
    const genresArr = movie.genres.split(', ');

    if (genresArr.length > 2) {
      genresArr.splice(2, genresArr.length, 'Other');
    }

    movie.genres = genresArr.join(', ');
  }); //рендерим карточки фильмов

  _refs.refs.galleryList.innerHTML = (0, _libraryFilmCardTemplate.default)(movies); //вешаем слушатели на каждую карточку

  const cards = document.querySelectorAll('.film-list__item');
  cards.forEach(card => {
    card.addEventListener('click', openModalCard);
  }); //если нет ни одного фильма, покзываем заглушку

  if (movies.length === 0) {
    _refs.refs.emptyLibrary.classList.remove('hidden');
  }
}

function toClickButtonClose(evt) {
  if (evt) {
    closeModalCard();
  }
}

function toClickOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModalCard();
  }
}

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    closeModalCard();
  }
}
},{"notiflix/build/notiflix-loading-aio":"FqPt","../templates/modal-film-card-template.hbs":"svPa","../templates/library-film-card-template.hbs":"cEEA","./refs.js":"VyiV","./apiService.js":"eQwa","./pagination.js":"o8lo","./localStorage.js":"nnQC"}],"e4yY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollToTop = scrollToTop;
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.upbutton').fadeIn();
  } else {
    $('.upbutton').fadeOut();
  }
});
$('.upbutton').click(scrollToTop);

function scrollToTop() {
  $('html,body').animate({
    scrollTop: 0
  }, 600);
  return false;
}
},{}],"AAfK":[function(require,module,exports) {
"use strict";

var _notiflixNotifyAio = require("notiflix/build/notiflix-notify-aio");

var _notiflixLoadingAio = require("notiflix/build/notiflix-loading-aio");

var _pagination = require("./pagination.js");

var _refs = require("../js/refs.js");

var _modalFilmCard = require("./modal-film-card.js");

var _upBtn = require("./up-btn.js");

var _localStorage = require("./localStorage.js");

const currentPage = {
  watched: true,
  queue: false
}; //Вешаем слушатели на кнопки при загрузке страницы библиотеки

window.addEventListener('load', onWatchedBtnClick);

_refs.refs.watchedBtn.addEventListener('click', onWatchedBtnClick);

_refs.refs.queueBtn.addEventListener('click', onQueueBtnClick); //Колбек при нажатии на кнопку "Watched"


function onWatchedBtnClick() {
  _refs.refs.watchedBtn.classList.add('filter__btn--current');

  _refs.refs.queueBtn.classList.remove('filter__btn--current');

  currentPage.watched = true;
  currentPage.queue = false;
  const storageKey = 'watchedMovies';
  const message = 'Your watched list is empty. Add any movie.';
  renderGallery(storageKey, message);
} //Колбек при нажатии на кнопку "Queue"


function onQueueBtnClick() {
  _refs.refs.queueBtn.classList.add('filter__btn--current');

  _refs.refs.watchedBtn.classList.remove('filter__btn--current');

  currentPage.watched = false;
  currentPage.queue = true;
  const storageKey = 'queueMovies';
  const message = 'Your queue list is empty. Add any movie.';
  renderGallery(storageKey, message);
} //Функция рендера галереи


function renderGallery(storageKey, message) {
  _notiflixLoadingAio.Loading.standard();

  const moviesArr = (0, _localStorage.getLocalStorageMovies)(storageKey);

  if (!moviesArr.length) {
    _notiflixNotifyAio.Notify.failure(message);

    _refs.refs.galleryList.innerHTML = '';

    _refs.refs.emptyLibrary.classList.remove('hidden');

    _pagination.pagination.reset(0);

    _notiflixLoadingAio.Loading.remove();

    return;
  }

  _pagination.pagination.reset(moviesArr.length);

  moviesArr.splice(20);

  _refs.refs.emptyLibrary.classList.add('hidden');

  (0, _modalFilmCard.showMoviesCards)(moviesArr);

  _notiflixLoadingAio.Loading.remove();
} //функция пагинации


_pagination.pagination.on('afterMove', showNewPage);

function showNewPage(event) {
  let moviesArr;

  if (currentPage.watched) {
    moviesArr = (0, _localStorage.getLocalStorageMovies)(`watchedMovies`);
  } else if (currentPage.queue) {
    moviesArr = (0, _localStorage.getLocalStorageMovies)(`queueMovies`);
  }

  const page = event.page;

  if (page === 1) {
    moviesArr.splice(20);
    (0, _modalFilmCard.showMoviesCards)(moviesArr);
  } else {
    const startPageItem = page * 20 - 20;
    const endPageItem = startPageItem + 20;
    const pageToShow = moviesArr.slice(startPageItem, endPageItem);
    (0, _modalFilmCard.showMoviesCards)(pageToShow);
  }

  (0, _upBtn.scrollToTop)();
}
},{"notiflix/build/notiflix-notify-aio":"MeeU","notiflix/build/notiflix-loading-aio":"FqPt","./pagination.js":"o8lo","../js/refs.js":"VyiV","./modal-film-card.js":"MzUv","./up-btn.js":"e4yY","./localStorage.js":"nnQC"}],"U5J9":[function(require,module,exports) {
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
},{}],"GC14":[function(require,module,exports) {
"use strict";

var _refs = require("../refs.js");

const currentUser = JSON.parse(localStorage.getItem('userName'));
_refs.refs.authUser.innerHTML = `You sign in as "${currentUser}"`;
},{"../refs.js":"VyiV"}],"I9BA":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");

require("./js/film-library.js");

require("./js/modal-about-us.js");

require("./js/authorization/showCurrentUser.js");
},{"./sass/main.scss":"clu1","./js/film-library.js":"AAfK","./js/modal-about-us.js":"U5J9","./js/authorization/showCurrentUser.js":"GC14"}]},{},["I9BA"], null)