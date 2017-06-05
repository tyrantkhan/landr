webpackJsonp([6],{

/***/ "./.cache/api-runner-browser.js":
/***/ (function(module, exports) {

	"use strict";
	
	var plugins = [];
	"use strict";
	
	// During bootstrap, we write requires at top of this file which looks
	// basically like:
	// var plugins = [
	//   require('/path/to/plugin1/gatsby-browser.js'),
	//   require('/path/to/plugin2/gatsby-browser.js'),
	// ]
	
	module.exports = function (api, args, defaultReturn) {
	  // Run each plugin in series.
	  var results = plugins.map(function (plugin) {
	    if (plugin.plugin[api]) {
	      var result = plugin.plugin[api](args, plugin.options);
	      return result;
	    }
	  }
	
	  // Filter out undefined results.
	  );results = results.filter(function (result) {
	    return typeof result !== "undefined";
	  });
	
	  if (results.length > 0) {
	    return results;
	  } else if (defaultReturn) {
	    return [defaultReturn];
	  } else {
	    return [];
	  }
	};
	//# sourceMappingURL=api-runner-browser.js.map

/***/ }),

/***/ "./.cache/async-requires.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	// prefer default export if available
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	
	exports.components = {
	  "page-component---src-pages-changelog-js": __webpack_require__("./node_modules/bundle-loader/index.js?lazy&name=page-component---src-pages-changelog-js!./src/pages/changelog.js"),
	  "page-component---src-pages-index-js": __webpack_require__("./node_modules/bundle-loader/index.js?lazy&name=page-component---src-pages-index-js!./src/pages/index.js")
	};
	
	exports.json = {
	  "changelog.json": __webpack_require__("./node_modules/bundle-loader/index.js?lazy&name=path---changelog!./.cache/json/changelog.json"),
	  "index.json": __webpack_require__("./node_modules/bundle-loader/index.js?lazy&name=path---index!./.cache/json/index.json")
	};
	
	exports.layouts = {
	  "index": __webpack_require__("./node_modules/bundle-loader/index.js?lazy&name=layout-component---index!./src/layouts/index.js")
	};

/***/ }),

/***/ "./node_modules/bundle-loader/index.js?lazy&name=path---changelog!./.cache/json/changelog.json":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(cb) {
		__webpack_require__.e/* nsure */(5, function(require) {
			cb(__webpack_require__("./node_modules/json-loader/index.js!./.cache/json/changelog.json"));
		});
	}

/***/ }),

/***/ "./node_modules/bundle-loader/index.js?lazy&name=path---index!./.cache/json/index.json":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(cb) {
		__webpack_require__.e/* nsure */(4, function(require) {
			cb(__webpack_require__("./node_modules/json-loader/index.js!./.cache/json/index.json"));
		});
	}

/***/ }),

/***/ "./.cache/pages.json":
/***/ (function(module, exports) {

	module.exports = [
		{
			"componentChunkName": "page-component---src-pages-changelog-js",
			"jsonName": "changelog.json",
			"path": "/changelog/"
		},
		{
			"componentChunkName": "page-component---src-pages-index-js",
			"jsonName": "index.json",
			"path": "/"
		}
	];

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _apiRunnerBrowser = __webpack_require__("./.cache/api-runner-browser.js");
	
	var _apiRunnerBrowser2 = _interopRequireDefault(_apiRunnerBrowser);
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouterDom = __webpack_require__("./node_modules/react-router-dom/index.js");
	
	var _reactRouterScroll = __webpack_require__("./node_modules/react-router-scroll/lib/index.js");
	
	var _createBrowserHistory = __webpack_require__("./node_modules/history/createBrowserHistory.js");
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _pages = __webpack_require__("./.cache/pages.json");
	
	var _pages2 = _interopRequireDefault(_pages);
	
	var _invariant = __webpack_require__("./node_modules/invariant/browser.js");
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _asyncRequires = __webpack_require__("./.cache/async-requires.js");
	
	var _asyncRequires2 = _interopRequireDefault(_asyncRequires);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	// Let the site/plugins run code very early.
	(0, _apiRunnerBrowser2.default)("onClientEntry");
	
	window.matchPath = _reactRouterDom.matchPath;
	
	// Find page
	var findPage = function findPage(pathname) {
	  var foundPage = void 0;
	  // Array.prototype.find is not supported in IE so we use this somewhat odd
	  // work around.
	  _pages2.default.some(function (page) {
	    if (page.matchPath) {
	      // Try both the path and matchPath
	      if ((0, _reactRouterDom.matchPath)(pathname, { path: page.path }) || (0, _reactRouterDom.matchPath)(pathname, {
	        path: page.matchPath
	      })) {
	        foundPage = page;
	        return true;
	      }
	    } else {
	      if ((0, _reactRouterDom.matchPath)(pathname, {
	        path: page.path,
	        exact: true
	      })) {
	        foundPage = page;
	        return true;
	      }
	    }
	
	    return false;
	  });
	
	  return foundPage;
	};
	
	// Load scripts
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	var scriptsCache = {};
	var loadScriptsForPath = function loadScriptsForPath(path) {
	  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	  var page = findPage(path);
	
	  var scripts = {
	    layout: false,
	    component: false,
	    pageData: false
	  };
	
	  if (!page) {
	    return cb(scripts);
	  }
	
	  if (scriptsCache[page.path]) {
	    return cb(scriptsCache[page.path]);
	  }
	
	  var loaded = function loaded() {
	    if (scripts.layout !== false && scripts.component !== false && scripts.pageData !== false) {
	      scriptsCache[page.path] = scripts;
	      cb(scripts);
	    }
	  };
	
	  // Load layout file.
	  if (_asyncRequires2.default.layouts.index) {
	    _asyncRequires2.default.layouts.index(function (layout) {
	      scripts.layout = preferDefault(layout);
	      loaded();
	    });
	  } else {
	    scripts.layout = "";
	    loaded();
	  }
	
	  _asyncRequires2.default.components[page.componentChunkName](function (component) {
	    scripts.component = preferDefault(component);
	    loaded();
	  });
	
	  _asyncRequires2.default.json[page.jsonName](function (pageData) {
	    scripts.pageData = pageData;
	    loaded();
	  });
	};
	
	var navigateTo = function navigateTo(pathname) {
	  loadScriptsForPath(pathname, function () {
	    window.___history.push(pathname);
	  });
	};
	
	window.___loadScriptsForPath = loadScriptsForPath;
	window.___navigateTo = navigateTo;
	
	var history = (0, _createBrowserHistory2.default)();
	history.listen(function (location, action) {
	  (0, _apiRunnerBrowser2.default)("onRouteUpdate", { location: location, action: action });
	});
	
	function shouldUpdateScroll(prevRouterProps, _ref) {
	  var pathname = _ref.location.pathname;
	
	  var results = (0, _apiRunnerBrowser2.default)("shouldUpdateScroll", {
	    prevRouterProps: prevRouterProps,
	    pathname: pathname
	  });
	  if (results.length > 0) {
	    return results[0];
	  }
	
	  if (prevRouterProps) {
	    var oldPathname = prevRouterProps.location.pathname;
	
	    if (oldPathname === pathname) {
	      return false;
	    }
	  }
	  return true;
	}
	
	// Load 404 page component and scripts
	var notFoundScripts = void 0;
	loadScriptsForPath("/404.html", function (scripts) {
	  notFoundScripts = scripts;
	});
	
	var renderPage = function renderPage(props) {
	  var page = findPage(props.location.pathname);
	  if (page) {
	    var pageCache = scriptsCache[page.path];
	
	    (0, _invariant2.default)(pageCache, "Page cache miss at " + props.location.pathname + " for key " + page.path + ". Available keys: " + (0, _keys2.default)(scriptsCache));
	
	    return $(pageCache.component, (0, _extends3.default)({}, props, pageCache.pageData));
	  } else if (notFoundScripts) {
	    return $(notFoundScripts.component, (0, _extends3.default)({}, props, notFoundScripts.pageData));
	  } else {
	    return null;
	  }
	};
	
	var $ = _react2.default.createElement;
	
	var AltRouter = (0, _apiRunnerBrowser2.default)("replaceRouterComponent", { history: history })[0];
	var DefaultRouter = function DefaultRouter(_ref2) {
	  var children = _ref2.children;
	  return _react2.default.createElement(_reactRouterDom.BrowserRouter, { history: history }, children);
	};
	
	loadScriptsForPath(window.location.pathname, function (scripts) {
	  // Use default layout if one isn't set.
	  var layout = void 0;
	  if (scripts.layout) {
	    layout = scripts.layout;
	  } else {
	    layout = function layout(props) {
	      return _react2.default.createElement("div", null, props.children());
	    };
	  }
	
	  var Root = function Root() {
	    return $(AltRouter ? AltRouter : DefaultRouter, null, $(_reactRouterScroll.ScrollContext, { shouldUpdateScroll: shouldUpdateScroll }, $((0, _reactRouterDom.withRouter)(layout), {
	      children: function children(layoutProps) {
	        return $(_reactRouterDom.Route, {
	          render: function render(routeProps) {
	            window.___history = routeProps.history;
	            var props = layoutProps ? layoutProps : routeProps;
	            return renderPage(props);
	          }
	        });
	      }
	    })));
	  };
	
	  var NewRoot = (0, _apiRunnerBrowser2.default)("wrapRootComponent", { Root: Root }, Root)[0];
	  _reactDom2.default.render(_react2.default.createElement(NewRoot, null), typeof window !== "undefined" ? document.getElementById("___gatsby") : void 0);
	});
	//# sourceMappingURL=production-app.js.map

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/index.js":
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {
	
	                }
	            }
	        }
	    }
	
	    return targetComponent;
	};


/***/ }),

/***/ "./node_modules/bundle-loader/index.js?lazy&name=layout-component---index!./src/layouts/index.js":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(cb) {
		__webpack_require__.e/* nsure */(1, function(require) {
			cb(__webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-preset-es2015/lib/index.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/layouts/index.js"));
		});
	}

/***/ }),

/***/ "./node_modules/bundle-loader/index.js?lazy&name=page-component---src-pages-changelog-js!./src/pages/changelog.js":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(cb) {
		__webpack_require__.e/* nsure */(3, function(require) {
			cb(__webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-preset-es2015/lib/index.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/changelog.js"));
		});
	}

/***/ }),

/***/ "./node_modules/bundle-loader/index.js?lazy&name=page-component---src-pages-index-js!./src/pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = function(cb) {
		__webpack_require__.e/* nsure */(2, function(require) {
			cb(__webpack_require__("./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-preset-es2015/lib/index.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-preset-stage-0/lib/index.js\",\"/Users/gaudi/work/modules/landr/packages/landr/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/index.js"));
		});
	}

/***/ })

});
//# sourceMappingURL=app-bf98295fb1167cf08bbc.js.map