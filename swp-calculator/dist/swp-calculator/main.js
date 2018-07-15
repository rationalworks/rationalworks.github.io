(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dark-font\">\r\n\r\n  <ol class=\"breadcrumb cyan lighten-4\">\r\n    <li class=\"breadcrumb-item active\">SWP Calculator</li>\r\n  </ol>\r\n</div>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-2\"></div>\r\n    <!--Main content begin -->\r\n    <div class=\"col-8\">\r\n      <!-- Input begin -->\r\n      <ol class=\"breadcrumb cyan lighten-4\">\r\n        <li class=\"breadcrumb-item active\">Input</li>\r\n      </ol>\r\n      <!-- Input end -->\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"defaultFormLoginEmailEx\" class=\"grey-text\">Total Amount</label>\r\n          <input type=\"email\" class=\"form-control\" value=\"{{initialCapital}}\" >\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"defaultFormLoginEmailEx\" class=\"grey-text\">Equity Perentage (%)</label>\r\n          <input type=\"email\" class=\"form-control\" value=\"{{equityPerentage}}\">\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"defaultFormLoginEmailEx\" class=\"grey-text\">Debt Perentage (%)</label>\r\n          <input type=\"email\" class=\"form-control\" value=\"{{debtPercent}}\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"defaultFormLoginEmailEx\" class=\"grey-text\">Increase in Withdrawl (%)</label>\r\n          <input type=\"email\" class=\"form-control\" value=\"{{withdrawlIncreasePercent}}\">\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"defaultFormLoginEmailEx\" class=\"grey-text\">Equity Growth Perentage (%)</label>\r\n          <input type=\"email\" class=\"form-control\" value=\"{{equityGrowthPerentage}}\">\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <label for=\"defaultFormLoginEmailEx\" class=\"grey-text\">Debt Growth Perentage (%)</label>\r\n          <input type=\"email\" class=\"form-control\" value=\"{{debtGrowthPercent}}\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n              <label for=\"defaultFormLoginEmailEx\" class=\"grey-text\">Monthly withdrawl</label>\r\n              <input type=\"email\" class=\"form-control\"  value=\"{{initialWithdrawl}}\">\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n          </div>\r\n        </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"text-left\">\r\n            <button class=\"btn btn-indigo\" type=\"submit\" (click)=\"startSimulation()\" >Calculate</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Output begin -->\r\n      <ol class=\"breadcrumb cyan lighten-4\">\r\n        <li class=\"breadcrumb-item active\">Results</li>\r\n      </ol>\r\n\r\n      <table class=\"table table-hover\">\r\n          <thead>\r\n            <tr>\r\n              <th>Year</th>\r\n              <th>Initial Balence</th>\r\n              <th>Withdrawn</th>\r\n              <th>Intrest</th>\r\n              <th>Year End Balence</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <th scope=\"row\">1</th>\r\n              <td>Mark</td>\r\n              <td>Otto</td>\r\n              <td>@mdo</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">2</th>\r\n              <td>Jacob</td>\r\n              <td>Thornton</td>\r\n              <td>@fat</td>\r\n            </tr>\r\n            <tr>\r\n              <th scope=\"row\">3</th>\r\n              <td colspan=\"2\">Larry the Bird</td>\r\n              <td>@twitter</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n\r\n        <div style=\"display: block\">\r\n            <canvas mdbChart\r\n                [chartType]=\"chartType\"\r\n                [datasets]=\"chartDatasets\"\r\n                [labels]=\"chartLabels\"\r\n                [colors]=\"chartColors\"\r\n                [options]=\"chartOptions\"\r\n                [legend]=\"true\"\r\n                (chartHover)=\"chartHovered($event)\"\r\n                (chartClick)=\"chartClicked($event)\">\r\n            </canvas>\r\n        </div>\r\n\r\n      <!-- Output end -->\r\n\r\n    </div>\r\n    <!--Main content end -->\r\n    <div class=\"col-2\"></div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">.col-sm-4</div>\r\n    <div class=\"col-sm-4\">.col-sm-4</div>\r\n    <div class=\"col-sm-4\">.col-sm-4</div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">.col-md-4</div>\r\n    <div class=\"col-md-4\">.col-md-4</div>\r\n    <div class=\"col-md-4\">.col-md-4</div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">.col-lg-4</div>\r\n    <div class=\"col-lg-4\">.col-lg-4</div>\r\n    <div class=\"col-lg-4\">.col-lg-4</div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4\">.col-xl-4</div>\r\n    <div class=\"col-xl-4\">.col-xl-4</div>\r\n    <div class=\"col-xl-4\">.col-xl-4</div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Default form login -->\r\n<form>\r\n  <p class=\"h4 text-center mb-12\">Sign in</p>\r\n\r\n  <!-- Default input email -->\r\n  <label for=\"defaultFormLoginEmailEx\" class=\"grey-text\">Your email</label>\r\n  <input type=\"email\" id=\"defaultFormLoginEmailEx\" class=\"form-control\">\r\n\r\n  <br>\r\n\r\n  <!-- Default input password -->\r\n  <label for=\"defaultFormLoginPasswordEx\" class=\"grey-text\">Your password</label>\r\n  <input type=\"password\" id=\"defaultFormLoginPasswordEx\" class=\"form-control\">\r\n\r\n  <div class=\"text-center mt-4\">\r\n    <button class=\"btn btn-indigo\" type=\"submit\">Login</button>\r\n  </div>\r\n</form>\r\n<!-- Default form login -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.initialCapital = 100000;
        this.equityPerentage = 70;
        this.debtPercent = 30;
        this.equityGrowthPerentage = 16;
        this.debtGrowthPercent = 9;
        this.initialWithdrawl = 1000;
        this.withdrawlIncreasePercent = 9;
        this.currentYear = (new Date()).getFullYear();
        this.maxYearCount = 30;
        this.chartDatasets = [
            { data: [], label: 'Equity' },
            { data: [], label: 'Debt' },
            { data: [], label: 'Total value' }
        ];
        this.chartLabels = [];
        this.chartType = 'line';
        this.chartColors = [
            {
                backgroundColor: 'rgba(220,220,220,0.2)',
                borderColor: 'rgba(220,220,220,1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(220,220,220,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(220,220,220,1)'
            },
            {
                backgroundColor: 'rgba(151,187,205,0.2)',
                borderColor: 'rgba(151,187,205,1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(151,187,205,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(151,187,205,1)'
            }
        ];
        this.chartOptions = {
            responsive: true
        };
        //public chartClicked(e: any): void { }
        //public chartHovered(e: any): void { }
    }
    AppComponent.prototype.startSimulation = function () {
        this.chartDatasets[0].data = [];
        this.chartDatasets[1].data = [];
        this.chartLabels = [];
        var currentCapital = this.initialCapital;
        var currentWithdrawl = this.initialWithdrawl * 12;
        var currentEquityValue = currentCapital * (this.equityPerentage / 100);
        var currentDebtValue = currentCapital * (this.debtPercent / 100);
        var currentYearValue = this.currentYear;
        var itrInterst = 0;
        while (currentYearValue < (this.currentYear + this.maxYearCount) && (currentEquityValue + currentDebtValue) >= 0) {
            this.chartDatasets[0].data.push(currentEquityValue);
            this.chartDatasets[1].data.push(currentDebtValue);
            this.chartDatasets[2].data.push(currentCapital);
            this.chartLabels.push(currentYearValue);
            console.log("EQV:" + currentEquityValue + " DV:" + currentDebtValue + " WD:" + currentWithdrawl + " Y:" + currentYearValue);
            currentWithdrawl = currentWithdrawl + (currentWithdrawl * (this.withdrawlIncreasePercent / 100));
            currentEquityValue = currentEquityValue - (currentWithdrawl * (this.equityPerentage / 100));
            currentDebtValue = currentDebtValue - (currentWithdrawl * (this.debtPercent / 100));
            currentEquityValue = currentEquityValue + (currentEquityValue * (this.equityGrowthPerentage / 100));
            currentDebtValue = currentDebtValue + (currentDebtValue * (this.debtGrowthPercent / 100));
            currentCapital = currentEquityValue + currentDebtValue;
            currentYearValue++;
        }
        //console.log(this.chartDatasets[0].data);
        //console.log(this.chartDatasets[1].data);
        //console.log(this.chartLabels);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Projects\rationalworks.github.io\swp-calculator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map