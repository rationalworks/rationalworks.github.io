function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(titleService, router, activatedRoute) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.titleService = titleService;
        this.title = 'app works!';
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            var title = _this.getTitle(router.routerState, router.routerState.root).join(' | ');

            titleService.setTitle(title);
          }
        });
      }

      _createClass(AppComponent, [{
        key: "getTitle",
        value: function getTitle(state, parent) {
          var data = [];

          if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            data.push(parent.snapshot.data.title);
          }

          if (state && parent) {
            data.push.apply(data, _toConsumableArray(this.getTitle(state, state.firstChild(parent))));
          }

          return data;
        }
      }, {
        key: "setTitle",
        value: function setTitle(newTitle) {
          this.titleService.setTitle(newTitle);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _template_blank_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./template/blank-template.component */
    "./src/app/template/blank-template.component.ts");
    /* harmony import */


    var _template_left_nav_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./template/left-nav-template.component */
    "./src/app/template/left-nav-template.component.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/navigation/navigation.component */
    "./src/app/shared/navigation/navigation.component.ts");
    /* harmony import */


    var _buy_house_buy_house_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./buy-house/buy-house.component */
    "./src/app/buy-house/buy-house.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["routes"], {
        useHash: true
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _template_blank_template_component__WEBPACK_IMPORTED_MODULE_4__["BlankTemplateComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _template_left_nav_template_component__WEBPACK_IMPORTED_MODULE_5__["LeftNavTemplateComponent"], _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _buy_house_buy_house_component__WEBPACK_IMPORTED_MODULE_10__["BuyHouseComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _template_blank_template_component__WEBPACK_IMPORTED_MODULE_4__["BlankTemplateComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _template_left_nav_template_component__WEBPACK_IMPORTED_MODULE_5__["LeftNavTemplateComponent"], _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _buy_house_buy_house_component__WEBPACK_IMPORTED_MODULE_10__["BuyHouseComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["routes"], {
            useHash: true
          }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _template_left_nav_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./template/left-nav-template.component */
    "./src/app/template/left-nav-template.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: '',
      component: _template_left_nav_template_component__WEBPACK_IMPORTED_MODULE_2__["LeftNavTemplateComponent"],
      data: {
        title: 'Angular Admin Template'
      },
      children: [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboard-dashboard-module */
          [__webpack_require__.e("default~dashboard-dashboard-module~ui-elements-ui-elements-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboard/dashboard.module */
          "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        },
        data: {
          title: 'Dashboard Page'
        }
      }, {
        path: 'ui-elements',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | ui-elements-ui-elements-module */
          [__webpack_require__.e("default~dashboard-dashboard-module~ui-elements-ui-elements-module"), __webpack_require__.e("ui-elements-ui-elements-module")]).then(__webpack_require__.bind(null,
          /*! ./ui-elements/ui-elements.module */
          "./src/app/ui-elements/ui-elements.module.ts")).then(function (m) {
            return m.UiElementsModule;
          });
        },
        data: {
          title: 'UI Elements'
        }
      }, {
        path: 'forms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forms-forms-module */
          "forms-forms-module").then(__webpack_require__.bind(null,
          /*! ./forms/forms.module */
          "./src/app/forms/forms.module.ts")).then(function (m) {
            return m.FormsModule;
          });
        },
        data: {
          title: 'Form Page'
        }
      }]
    }, {
      path: 'tables',
      component: _template_left_nav_template_component__WEBPACK_IMPORTED_MODULE_2__["LeftNavTemplateComponent"],
      data: {
        title: 'Tables'
      },
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tables-tables-module */
          "tables-tables-module").then(__webpack_require__.bind(null,
          /*! ./tables/tables.module */
          "./src/app/tables/tables.module.ts")).then(function (m) {
            return m.TablesModule;
          });
        }
      }]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          declarations: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/buy-house/buy-house.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/buy-house/buy-house.component.ts ***!
    \**************************************************/

  /*! exports provided: BuyHouseComponent */

  /***/
  function srcAppBuyHouseBuyHouseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyHouseComponent", function () {
      return BuyHouseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var financial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! financial */
    "./node_modules/financial/dist/financial.esm.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BuyHouseComponent_div_68_p_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Since you stil have your original capital with you after ", ctx_r1.loanTenure, " months, your house is technically free of cost.");
      }
    }

    function BuyHouseComponent_div_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Analysis");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "With all the deails you are provided. We have determined the following.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BuyHouseComponent_div_68_p_16_Template, 2, 1, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"]([" You need to have ", ctx_r0.currency, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 17, ctx_r0.currentCapitalNeeds), " (A) today in order for you to purchase a house worth ", ctx_r0.currency, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 19, ctx_r0.currentCost), ", with a monthly EMI of ", ctx_r0.currency, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 21, ctx_r0.emi * (0 - 1)), " (E). If you pay the full amount today and invest the remmaining amount, at the end of ", ctx_r0.loanTenure, " months you will have a house worth ", ctx_r0.currency, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 23, ctx_r0.currentCost), " and cash equivalent to ", ctx_r0.currency, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 25, ctx_r0.remainingAmountWithFullPay), ". If you instead choose to pay EMI from the amount you have accumulated, at the end of ", ctx_r0.loanTenure, " month you will have a house worth ", ctx_r0.currency, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 27, ctx_r0.currentCost), " and cash equivalent to ", ctx_r0.currency, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 29, ctx_r0.remainingAmountWithFullEmi), " [Try changing aditional amount or loan period, such that remaining amount after paying all EMI is more than the total you you had in the begining (A)]. "]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.remainingAmountWithFullEmi > ctx_r0.currentCapitalNeeds);
      }
    }

    var BuyHouseComponent =
    /*#__PURE__*/
    function () {
      function BuyHouseComponent() {
        _classCallCheck(this, BuyHouseComponent);

        this.currency = '₹';
        this.emi = 0;
        this.inflationAsjustedRequiredCapital = 0;
        this.currentCapitalNeeds = 0;
        this.currentCost = 0;
        this.loanTenure = 0;
        this.remainingAmountWithFullPay = 0;
        this.remainingAmountWithFullEmi = 0;
        this.currentAvailableFund = 0;
        this.showAnanlysis = false;
        this.houseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          currentCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)),
          loanTenure: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)),
          loanOnInterestRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)),
          returnRateOnInvestement: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)),
          rateOfInflation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)),
          currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
          currentAvailableFund: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
      }

      _createClass(BuyHouseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.houseForm.get("currentCost").setValue(3000000);
          this.houseForm.get("currentAvailableFund").setValue(0);
          this.houseForm.get("currency").setValue("rupee");
          this.houseForm.get("loanTenure").setValue(15);
          this.houseForm.get("loanOnInterestRate").setValue(9);
          this.houseForm.get("returnRateOnInvestement").setValue(10);
          this.houseForm.get("rateOfInflation").setValue(0);
          this.houseForm.get("currency").setValue("rupee");
          this.houseForm.get("currency").valueChanges.subscribe(function (newValue) {
            if (newValue == "doller") {
              _this2.currency = '$';
            }

            if (newValue == "pound") {
              _this2.currency = '£';
            }

            if (newValue == "rupee") {
              _this2.currency = '₹';
            }
          });
        }
      }, {
        key: "analyse",
        value: function analyse() {
          console.log("Analysing....");
          var loanAmount = this.houseForm.get("currentCost").value;
          var additionalAmount = this.houseForm.get("currentAvailableFund").value;
          var loanInterest = this.houseForm.get("loanOnInterestRate").value;
          var loanTeanure = this.houseForm.get("loanTenure").value;
          var returnOnInvestment = this.houseForm.get("returnRateOnInvestement").value;
          var rateOfInflation = this.houseForm.get("rateOfInflation").value;
          this.currentCost = loanAmount;
          this.loanTenure = loanTeanure * 12;
          this.emi = Object(financial__WEBPACK_IMPORTED_MODULE_1__["pmt"])(loanInterest / 1200, loanTeanure * 12, loanAmount);
          console.log("EMI is ", this.emi * -1);
          var minumumRequiredCapitalToPayEMI = Math.max(Object(financial__WEBPACK_IMPORTED_MODULE_1__["pv"])(returnOnInvestment / 1200, loanTeanure * 12, this.emi * -1, 0), loanAmount);
          console.log("Minimum capital required to pay EMI is ", minumumRequiredCapitalToPayEMI);
          var minumumRequiredCapitalToSave = Object(financial__WEBPACK_IMPORTED_MODULE_1__["pv"])(returnOnInvestment / 1200, loanTeanure * 12, 0, loanAmount) * -1;
          console.log("Minimum capital required to save loan amount ", minumumRequiredCapitalToSave);
          this.currentCapitalNeeds = additionalAmount + minumumRequiredCapitalToPayEMI + minumumRequiredCapitalToSave;
          console.log("Total capital need is ", this.currentCapitalNeeds);
          console.log("Availabe fund before full payment", this.currentCapitalNeeds - this.currentCost);
          this.remainingAmountWithFullPay = Object(financial__WEBPACK_IMPORTED_MODULE_1__["fv"])(returnOnInvestment / 1200, loanTeanure * 12, 0, (this.currentCapitalNeeds - this.currentCost) * -1);
          console.log("Remaining funds after full payment", this.remainingAmountWithFullPay);
          this.remainingAmountWithFullEmi = Object(financial__WEBPACK_IMPORTED_MODULE_1__["fv"])(returnOnInvestment / 1200, loanTeanure * 12, this.emi * -1, this.currentCapitalNeeds * -1);
          console.log("Remaining funds after all EMI payment", this.remainingAmountWithFullEmi);
          this.showAnanlysis = true;
        }
      }]);

      return BuyHouseComponent;
    }();

    BuyHouseComponent.ɵfac = function BuyHouseComponent_Factory(t) {
      return new (t || BuyHouseComponent)();
    };

    BuyHouseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BuyHouseComponent,
      selectors: [["app-buy-house"]],
      decls: 69,
      vars: 2,
      consts: [["id", "page-wrapper", 1, ""], [1, "container-fluid"], [1, "row", "row-stat"], [1, "col-sm-12"], [1, "panel", "panel-default"], [1, "panel-heading", "panel-heading-divider"], [1, "panel-subtitle", "title-description"], [1, "panel-body"], [1, "xs-mt-10", "xs-mb-10"], [1, "row"], [1, "col-md-8"], [1, "form-horizontal", 3, "formGroup"], [1, "form-group"], [1, "col-sm-3", "control-label"], [1, "col-sm-9"], [1, "radio"], ["type", "radio", "formControlName", "currency", "name", "currency", "value", "doller"], ["type", "radio", "formControlName", "currency", "name", "currency", "value", "pound"], ["type", "radio", "formControlName", "currency", "name", "currency", "value", "rupee", "checked", "checked"], ["for", "form-control-1", 1, "col-sm-3", "control-label"], [1, "col-sm-3"], ["formControlName", "currentAvailableFund", "type", "number"], ["formControlName", "currentCost", "type", "number"], ["formControlName", "loanTenure", "type", "number"], ["formControlName", "loanOnInterestRate", "type", "number"], ["formControlName", "returnRateOnInvestement", "type", "number"], ["for", "form-control-2", 1, "col-sm-3", "control-label"], ["type", "button", 1, "btn", "btn-space", "btn-success", 3, "click"], ["class", "form-group", 4, "ngIf"], [1, "form-control-static"], ["class", "form-control-static", 4, "ngIf"]],
      template: function BuyHouseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Getting a house for free - The rich mentality ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buying a place of one's own is a dream, no matter which part of the world you belong to. The process is extremely simple, find a house that you like which is available for sale, pay the price in full or take a partial or full loan from your local bank. Easy right... Well yes, but there is a way to become the owner of the house without paying anything from your pocket. Sounds unrealistic, it isn't. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Here's how you do it, gather small sum over a period of time and invest it, let's assume you accumulated an amount of A=(F+ a calculated amount), the price of the house you wish to buy is P, and your monthly EMI is say E, if you start withdrawing E every month from A, it can happen that after you pay the last EMI you still have full amount A remaining. The question here is how big should the amount A be, such that after paying all your EMI you still have A remaining. This kind of purchasing strategy makes the rich even richer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Choose currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " $ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \xA3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u20B9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Additional Availble Funds (F)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Current price of the House (P)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Loan tenure in years");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Loan Interest rate %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Expected annual rate of return on investement %");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyHouseComponent_Template_button_click_66_listener($event) {
            return ctx.analyse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Analyse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, BuyHouseComponent_div_68_Template, 17, 31, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.houseForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAnanlysis);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      styles: [".title-description[_ngcontent-%COMP%]{\r\n    font-size: large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5LWhvdXNlL2J1eS1ob3VzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYnV5LWhvdXNlL2J1eS1ob3VzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyHouseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-buy-house',
          templateUrl: './buy-house.component.html',
          styleUrls: ['./buy-house.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " page-not-found works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 4,
      vars: 0,
      consts: [[1, "headerwrapper"], [1, "header-left"], ["src", "/assets/images/logo.svg", 1, "logo"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".headerwrapper[_ngcontent-%COMP%] {\n  background-color: #474af5;\n  min-height: 60px;\n  width: 100%;\n  z-index: 1000;\n}\n.headerwrapper[_ngcontent-%COMP%]:after {\n  clear: both;\n  display: block;\n  content: \"\";\n}\n.header-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.header-right[_ngcontent-%COMP%] {\n  float: right;\n}\na.btn.btn-social-icon.btn-github[_ngcontent-%COMP%] {\n  color: #fff;\n  border: 1px solid #fff;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9DOlxcTXlEYXRhXFxnaXRodWJcXHJhdGlvbmFsd29ya3MuZ2l0aHViLmlvXFx0b29scy9zcmNcXGFwcFxcc2hhcmVkXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsdUNBQUE7QUFDQSx1Q0FBQTtBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRko7QURHSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0RSO0FESUE7RUFDSSxXQUFBO0FDREo7QURJQTtFQUNJLFlBQUE7QUNESjtBRElBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyoqKioqKioqKiogMy4gSEVBREVSIFNUWUxFUyAqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4uaGVhZGVyd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NGFmNTtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgfVxufVxuLmhlYWRlci1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmhlYWRlci1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5hLmJ0bi5idG4tc29jaWFsLWljb24uYnRuLWdpdGh1YiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBtYXJnaW46IDEwcHg7XG59IiwiLyoqKioqKioqKiogMy4gSEVBREVSIFNUWUxFUyAqKioqKioqKioqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmhlYWRlcndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc0YWY1O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5oZWFkZXJ3cmFwcGVyOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uaGVhZGVyLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmhlYWRlci1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuYS5idG4uYnRuLXNvY2lhbC1pY29uLmJ0bi1naXRodWIge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/navigation/navigation.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/navigation/navigation.component.ts ***!
    \***********************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppSharedNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/dashboard/house"];
    };

    var _c1 = function _c1() {
      return ["active"];
    };

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)();
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 15,
      vars: 4,
      consts: [[1, "sidebar", "hidden-sm-down"], ["type", "checkbox", "id", "openSidebarMenu", 1, "openSidebarMenu"], ["for", "openSidebarMenu", 1, "sidebarIconToggle"], [1, "spinner", "diagonal", "part-1"], [1, "spinner", "horizontal"], [1, "spinner", "diagonal", "part-2"], ["id", "sidebarMenu"], [1, "sidebarMenuInner"], [3, "routerLink", "routerLinkActive"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Personal Finance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buy a House");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Varela+Round\");\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0;\n  margin: 0;\n  font-family: \"Varela Round\", sans-serif;\n}\n.header[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 100%;\n  box-shadow: none;\n  background-color: #FC466B;\n  position: fixed;\n  height: 60px !important;\n  overflow: hidden;\n  z-index: 10;\n}\n.main[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: block;\n  height: 100%;\n  margin-top: 60px;\n}\n.mainInner[_ngcontent-%COMP%] {\n  display: table;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n}\n.mainInner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  font-size: 3em;\n  font-weight: bold;\n  letter-spacing: 1.25px;\n}\n#sidebarMenu[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  width: 250px;\n  margin-top: 60px;\n  -webkit-transform: translateX(-250px);\n          transform: translateX(-250px);\n  -webkit-transition: -webkit-transform 250ms ease-in-out;\n  transition: -webkit-transform 250ms ease-in-out;\n  transition: transform 250ms ease-in-out;\n  transition: transform 250ms ease-in-out, -webkit-transform 250ms ease-in-out;\n  background: -webkit-gradient(linear, left top, left bottom, from(#FC466B), to(#3F5EFB));\n  background: linear-gradient(180deg, #FC466B 0%, #3F5EFB 100%);\n}\n.sidebarMenuInner[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.sidebarMenuInner[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  color: #fff;\n  padding: 20px;\n  cursor: pointer;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.sidebarMenuInner[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.5);\n}\n.sidebarMenuInner[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  cursor: pointer;\n  text-decoration: none;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ #sidebarMenu[_ngcontent-%COMP%] {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  box-sizing: border-box;\n  display: none;\n}\n.sidebarIconToggle[_ngcontent-%COMP%] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: absolute;\n  z-index: 99;\n  height: 100%;\n  width: 100%;\n  top: 22px;\n  left: 15px;\n  height: 22px;\n  width: 22px;\n}\n.spinner[_ngcontent-%COMP%] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  box-sizing: border-box;\n  position: absolute;\n  height: 3px;\n  width: 100%;\n  background-color: #e43737;\n}\n.horizontal[_ngcontent-%COMP%] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  box-sizing: border-box;\n  position: relative;\n  float: left;\n  margin-top: 3px;\n}\n.diagonal.part-1[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  box-sizing: border-box;\n  float: left;\n}\n.diagonal.part-2[_ngcontent-%COMP%] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  box-sizing: border-box;\n  position: relative;\n  float: left;\n  margin-top: 3px;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ .sidebarIconToggle[_ngcontent-%COMP%]    > .horizontal[_ngcontent-%COMP%] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  box-sizing: border-box;\n  opacity: 0;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ .sidebarIconToggle[_ngcontent-%COMP%]    > .diagonal.part-1[_ngcontent-%COMP%] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  box-sizing: border-box;\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg);\n  margin-top: 8px;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    ~ .sidebarIconToggle[_ngcontent-%COMP%]    > .diagonal.part-2[_ngcontent-%COMP%] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  box-sizing: border-box;\n  -webkit-transform: rotate(-135deg);\n          transform: rotate(-135deg);\n  margin-top: -9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24vQzpcXE15RGF0YVxcZ2l0aHViXFxyYXRpb25hbHdvcmtzLmdpdGh1Yi5pb1xcdG9vbHMvc3JjXFxhcHBcXHNoYXJlZFxcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtRUFBQTtBQUNSO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURDQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtBQ0VKO0FEQUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0dKO0FEREE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0lKO0FERkE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0tKO0FESEE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNNSjtBREpBO0VBRUksZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsdURBQUE7RUFBQSwrQ0FBQTtFQUFBLHVDQUFBO0VBQUEsNEVBQUE7RUFDQSx1RkFBQTtFQUFBLDZEQUFBO0FDTUo7QURKQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7QUNPSjtBRExBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBR0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtBQ01KO0FESkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDT0o7QURMQTtFQUNJLFdBQUE7RUFHQSxlQUFBO0VBQ0EscUJBQUE7QUNNSjtBREpBO0VBQ0ksZ0NBQUE7VUFBQSx3QkFBQTtBQ09KO0FESkE7RUFDSSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDT0o7QURMQTtFQUNJLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNRSjtBRE5BO0VBQ0ksNEJBQUE7RUFBQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDU0o7QURQQTtFQUNJLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNVSjtBRFJBO0VBQ0ksa0JBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDV0o7QURUQTtFQUNJLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNZSjtBRFZBO0VBQ0ksNEJBQUE7RUFBQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ2FKO0FEWEE7RUFDSSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsZUFBQTtBQ2NKO0FEWkE7RUFDSSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNlSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVZhcmVsYStSb3VuZCcpO1xyXG5odG1sLCBib2R5IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdWYXJlbGEgUm91bmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQzQ2NkI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDYwcHghaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcbi5tYWluIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcbi5tYWluSW5uZXJ7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tYWluSW5uZXIgZGl2e1xyXG4gICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xyXG59XHJcbiNzaWRlYmFyTWVudSB7XHJcbiAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNTBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkM0NjZCIDAlLCAjM0Y1RUZCIDEwMCUpO1xyXG59XHJcbi5zaWRlYmFyTWVudUlubmVye1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwKTtcclxufVxyXG4uc2lkZWJhck1lbnVJbm5lciBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMCk7XHJcbn1cclxuLnNpZGViYXJNZW51SW5uZXIgbGkgc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCk7XHJcbn1cclxuLnNpZGViYXJNZW51SW5uZXIgbGkgYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAvLyBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+ICNzaWRlYmFyTWVudSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNpZGViYXJJY29uVG9nZ2xlIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDIycHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbn1cclxuLnNwaW5uZXIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDU1LCA1NSk7XHJcbn1cclxuLmhvcml6b250YWwge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLmRpYWdvbmFsLnBhcnQtMSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uZGlhZ29uYWwucGFydC0yIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiAuc2lkZWJhckljb25Ub2dnbGUgPiAuaG9yaXpvbnRhbCB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiAuc2lkZWJhckljb25Ub2dnbGUgPiAuZGlhZ29uYWwucGFydC0xIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB+IC5zaWRlYmFySWNvblRvZ2dsZSA+IC5kaWFnb25hbC5wYXJ0LTIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VmFyZWxhK1JvdW5kXCIpO1xuaHRtbCwgYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJWYXJlbGEgUm91bmRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZDNDY2QjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTA7XG59XG5cbi5tYWluIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi5tYWluSW5uZXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFpbklubmVyIGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbn1cblxuI3NpZGViYXJNZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjUwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGQzQ2NkIgMCUsICMzRjVFRkIgMTAwJSk7XG59XG5cbi5zaWRlYmFyTWVudUlubmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4uc2lkZWJhck1lbnVJbm5lciBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi5zaWRlYmFyTWVudUlubmVyIGxpIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4uc2lkZWJhck1lbnVJbm5lciBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkIH4gI3NpZGViYXJNZW51IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhckljb25Ub2dnbGUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDIycHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDIycHg7XG59XG5cbi5zcGlubmVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTQzNzM3O1xufVxuXG4uaG9yaXpvbnRhbCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5kaWFnb25hbC5wYXJ0LTEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmRpYWdvbmFsLnBhcnQtMiB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiAuc2lkZWJhckljb25Ub2dnbGUgPiAuaG9yaXpvbnRhbCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvcGFjaXR5OiAwO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkIH4gLnNpZGViYXJJY29uVG9nZ2xlID4gLmRpYWdvbmFsLnBhcnQtMSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiAuc2lkZWJhckljb25Ub2dnbGUgPiAuZGlhZ29uYWwucGFydC0yIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICBtYXJnaW4tdG9wOiAtOXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/blank-template.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/template/blank-template.component.ts ***!
    \******************************************************/

  /*! exports provided: BlankTemplateComponent */

  /***/
  function srcAppTemplateBlankTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankTemplateComponent", function () {
      return BlankTemplateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BlankTemplateComponent =
    /*#__PURE__*/
    function () {
      function BlankTemplateComponent() {
        _classCallCheck(this, BlankTemplateComponent);
      }

      _createClass(BlankTemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlankTemplateComponent;
    }();

    BlankTemplateComponent.ɵfac = function BlankTemplateComponent_Factory(t) {
      return new (t || BlankTemplateComponent)();
    };

    BlankTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlankTemplateComponent,
      selectors: [["ng-component"]],
      decls: 3,
      vars: 0,
      template: function BlankTemplateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "test\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './blank-template.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/left-nav-template.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/template/left-nav-template.component.ts ***!
    \*********************************************************/

  /*! exports provided: LeftNavTemplateComponent */

  /***/
  function srcAppTemplateLeftNavTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeftNavTemplateComponent", function () {
      return LeftNavTemplateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/navigation/navigation.component */
    "./src/app/shared/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LeftNavTemplateComponent =
    /*#__PURE__*/
    function () {
      function LeftNavTemplateComponent() {
        _classCallCheck(this, LeftNavTemplateComponent);
      }

      _createClass(LeftNavTemplateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LeftNavTemplateComponent;
    }();

    LeftNavTemplateComponent.ɵfac = function LeftNavTemplateComponent_Factory(t) {
      return new (t || LeftNavTemplateComponent)();
    };

    LeftNavTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeftNavTemplateComponent,
      selectors: [["ng-component"]],
      decls: 3,
      vars: 0,
      template: function LeftNavTemplateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }
      },
      directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _shared_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftNavTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: './left-nav-template.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\MyData\github\rationalworks.github.io\tools\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map