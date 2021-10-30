function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
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

    var routes = [];

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
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./calculator/calculator.component */
    "./src/app/calculator/calculator.component.ts");
    /* harmony import */


    var _triangulator_triangulator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./triangulator/triangulator.component */
    "./src/app/triangulator/triangulator.component.ts");
    /* harmony import */


    var _misc_misc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./misc/misc.component */
    "./src/app/misc/misc.component.ts");
    /* harmony import */


    var _embeded_map_embeded_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./embeded-map/embeded-map.component */
    "./src/app/embeded-map/embeded-map.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'calculator';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 55,
      vars: 0,
      consts: [[1, "main"], [1, "app"], [1, "column", 2, "background-color", "rgb(156, 41, 250)", "color", "rgb(255, 255, 255)"], [1, "column", 2, "background-color", "rgb(151, 9, 194)", "color", "rgb(255, 255, 255)"], [1, "column", 2, "background-color", "rgb(98, 0, 155)", "color", "rgb(255, 255, 255)"], [1, "hints"], ["href", "https://forum.taucetistation.org/t/telenauka-dlya-malenkih-i-ne-ochen/20515/15"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-calculator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-triangulator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-misc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u0434\u043B\u044F \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0445 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u043D\u0435\u043B\u044C \u0442\u0435\u043B\u0435\u043F\u0430\u0434\u0430 \u043E\u0442\u0432\u0435\u0440\u0442\u043A\u043E\u0439, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043C\u0443\u043B\u044C\u0442\u0438\u0442\u0443\u043B, \u0437\u0430\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u0430\u043D\u0435\u043B\u044C, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043C\u0443\u043B\u044C\u0442\u0438\u0442\u0443\u043B \u043D\u0430 \u043A\u043E\u043D\u0441\u043E\u043B\u044C. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0441\u0435 \u0431\u043B\u044E\u0441\u043F\u0435\u0439\u0441 \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u044B \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0412\u044B\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u0435(Bearing) \u043D\u0430 0, \u041F\u043E\u0434\u044A\u0435\u043C(Elevation) \u043D\u0430 45, \u0421\u0438\u043B\u0443(Power) \u043D\u0430 25, \u0421\u0435\u043A\u0442\u043E\u0440(Sector) \u043D\u0430 5.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0432\u043E\u0440\u043E\u043D\u043A\u0443.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0412\u043E\u0437\u044C\u043C\u0438\u0442\u0435 \u0434\u0432\u0430 GPS, \u0432\u044B\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0442\u0435\u0433\u0438 \"GPS1\" \u0438 \"GPS2\".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 pull'\u043E\u043C GPS1 \u0432 \u0432\u043E\u0440\u043E\u043D\u043A\u0443.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0417\u0430\u043A\u0440\u043E\u0439\u0442\u0435 \u0432\u043E\u0440\u043E\u043D\u043A\u0443, \u0441\u043C\u0435\u043D\u0438\u0442\u0435 \u041F\u043E\u0434\u044A\u0435\u043C \u043D\u0430 50, \u0441\u043D\u043E\u0432\u0430 \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 GPS2 \u0432 \u0432\u043E\u0440\u043E\u043D\u043A\u0443.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0432\u043E\u0440\u043E\u043D\u043A\u0443.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0412\u0432\u0435\u0441\u0442\u0438 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B GPS1 \u0438 GPS2 \u0432 \u043F\u043E\u043B\u044F (X1,Y1), (X2,Y2).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0412\u0432\u0435\u0441\u0442\u0438 \u043F\u043E\u0437\u0438\u0446\u0438\u044E \u0442\u0435\u043B\u0435\u043F\u0430\u0434\u0430 (\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0430 \u0418\u0441\u0445\u043E\u0434\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0436\u0430\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0412\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0438.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0412\u0432\u0435\u0441\u0442\u0438 \u043D\u0443\u0436\u043D\u044B\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B, \u043D\u0430\u0436\u0430\u0442\u044C \"\u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435\", \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u0445 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u044C, \u0431\u0443\u043C \u0438 \u0433\u043E\u0442\u043E\u0432\u043E!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0420\u044F\u0434\u043E\u043C \u0441 \u043F\u043E\u043B\u044F\u043C\u0438 \u0432\u0432\u043E\u0434\u0430 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442 \u0435\u0441\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0438 \u0432 \u0432\u0438\u0434\u0435 \u0442\u043E\u0447\u0435\u043A, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043D\u0438\u0445 \u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0432 \u0432\u0438\u0434\u0435 Telesciece Lab(145,160,2) \u0438\u043B\u0438 Unknown shuttle x=150, y=12, z=unknown ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u0412\u044B\u0434\u0435\u043B\u044F\u0439\u0442\u0435 \u0441\u0442\u0440\u043E\u043A\u0438 \u0432 GPS \u0438\u043B\u0438 \u0431\u0443\u043C\u0430\u0433\u0435 \u0420\u0414, \u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0438 \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0439\u0442\u0435. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u0415\u0441\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u043E\u0434\u0441\u0432\u0435\u0447\u0435\u043D\u044B \u043A\u0440\u0430\u0441\u043D\u044B\u043C, \u0437\u043D\u0430\u0447\u0438\u0442 \u0432\u044B \u043E\u0448\u0438\u0431\u043B\u0438\u0441\u044C \u0432 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F\u0445");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0415\u0441\u043B\u0438 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u043E\u0434\u0441\u0432\u0435\u0447\u0435\u043D\u044B \u043A\u0440\u0430\u0441\u043D\u044B\u043C \u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u0447\u0438\u0441\u0435\u043B NaN, \u0437\u043D\u0430\u0447\u0438\u0442 \u0432\u044B \u0437\u0430\u0431\u044B\u043B\u0438 \u0432\u0432\u0435\u0441\u0442\u0438 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u0442\u0435\u043B\u0435\u043F\u0430\u0434\u0430 \u0438\u043B\u0438 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u0432\u043E\u0440\u043E\u043D\u043E\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u0421\u043B\u0435\u043F\u043E\u0439 \u043F\u0440\u044B\u0436\u043E\u043A, \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442 \u0432 \u043F\u043E\u043B\u044F \u043E\u0448\u0438\u0431\u043E\u043A \u0441\u0440\u0435\u0434\u043D\u0438\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F, \u044D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u0435\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u043D\u0435\u0442\u0443 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0430 \u043A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u041F\u0443\u0442\u0435\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043F\u043E \u0434\u0435\u0440\u0435\u043B\u0438\u043A\u0442\u0430\u043C \u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-embeded-map");
        }
      },
      directives: [_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_1__["CalculatorComponent"], _triangulator_triangulator_component__WEBPACK_IMPORTED_MODULE_2__["TriangulatorComponent"], _misc_misc_component__WEBPACK_IMPORTED_MODULE_3__["MiscComponent"], _embeded_map_embeded_map_component__WEBPACK_IMPORTED_MODULE_4__["EmbededMapComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n\n\n.column[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 500px;\n  border-radius: 10px;\n}\n\n\n\n@media (max-width: 600px) {\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.main[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlDQUFBO0FBQ0Y7O0FBSUEsNERBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBREY7O0FBUUEseUdBQUE7O0FBQ0E7RUFDRTtJQUVFLHNCQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFLGFBQUE7QUFORiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIENyZWF0ZSB0aHJlZSBlcXVhbCBjb2x1bW5zIHRoYXQgc2l0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuLmNvbHVtbiB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgdGhlIHRocmVlIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG5cclxufVxyXG4iXX0= */"]
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
      }], null, null);
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


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./calculator/calculator.component */
    "./src/app/calculator/calculator.component.ts");
    /* harmony import */


    var _point_point_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./point/point.component */
    "./src/app/point/point.component.ts");
    /* harmony import */


    var _triangulator_triangulator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./triangulator/triangulator.component */
    "./src/app/triangulator/triangulator.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _misc_misc_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./misc/misc.component */
    "./src/app/misc/misc.component.ts");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _embeded_map_embeded_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./embeded-map/embeded-map.component */
    "./src/app/embeded-map/embeded-map.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__["CalculatorComponent"], _point_point_component__WEBPACK_IMPORTED_MODULE_7__["PointComponent"], _triangulator_triangulator_component__WEBPACK_IMPORTED_MODULE_8__["TriangulatorComponent"], _misc_misc_component__WEBPACK_IMPORTED_MODULE_11__["MiscComponent"], _embeded_map_embeded_map_component__WEBPACK_IMPORTED_MODULE_13__["EmbededMapComponent"]],
        imports: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__["CalculatorComponent"], _point_point_component__WEBPACK_IMPORTED_MODULE_7__["PointComponent"], _triangulator_triangulator_component__WEBPACK_IMPORTED_MODULE_8__["TriangulatorComponent"], _misc_misc_component__WEBPACK_IMPORTED_MODULE_11__["MiscComponent"], _embeded_map_embeded_map_component__WEBPACK_IMPORTED_MODULE_13__["EmbededMapComponent"]],
          imports: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/calculator/calculator.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/calculator/calculator.component.ts ***!
    \****************************************************/

  /*! exports provided: CalculatorComponent */

  /***/
  function srcAppCalculatorCalculatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function () {
      return CalculatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../error.service */
    "./src/app/error.service.ts");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _point_point_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../point/point.component */
    "./src/app/point/point.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CalculatorComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u0434\u044A\u0435\u043C 1 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_ng_template_12_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.Elevation1 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u043E\u0434\u044A\u0435\u043C 2 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_ng_template_12_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.Elevation2 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.Elevation1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.Elevation2);
      }
    }

    function CalculatorComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0438\u043B\u0430 1 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_ng_template_13_Template_select_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.Power1 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "20");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "25");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "30");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "40");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "50");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "80");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0421\u0438\u043B\u0430 2 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_ng_template_13_Template_select_ngModelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.Power2 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "20");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "25");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "30");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "40");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "50");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "80");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.Power1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.Power2);
      }
    }

    function CalculatorComponent_label_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0418\u041B\u0410");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_label_15_Template_select_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.Power1 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "20");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "25");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "30");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "40");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "50");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "80");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "100");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.Power1);
      }
    }

    function CalculatorComponent_label_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u0434\u044A\u0435\u043C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_label_16_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.Elevation1 = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.Elevation1);
      }
    }

    function CalculatorComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r5.deltaBearing >= 0 - 10 && ctx_r5.deltaBearing <= 10 ? "transparent" : "red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0394Bearing: ", ctx_r5.deltaBearing, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r5.deltaElevation >= 0 - 25 && ctx_r5.deltaElevation <= 25 ? "transparent" : "red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0394Elevation: ", ctx_r5.deltaElevation, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r5.deltaPower >= 0 - 4 && ctx_r5.deltaPower <= 0 ? "transparent" : "red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0394Power: ", ctx_r5.deltaPower, "");
      }
    }

    var CalculatorComponent = /*#__PURE__*/function () {
      function CalculatorComponent(errorservice) {
        var _this = this;

        _classCallCheck(this, CalculatorComponent);

        this.Start = {
          x: NaN,
          y: NaN
        };
        this.End = {
          x: NaN,
          y: NaN
        };
        this.Telepad = {
          x: NaN,
          y: NaN
        };
        this.isElevation = true;
        this.Elevation1 = 45;
        this.Elevation2 = 50;
        this.Power1 = 25;
        this.Power2 = 30;
        this.Bearing = 0;
        this.hasResult = false;
        this.onCalculated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorservice = errorservice;
        this.errorservice.holopadUpdated$.subscribe(function (arg) {
          _this.Telepad.x = arg[0];
          _this.Telepad.y = arg[1];
        });
      }

      _createClass(CalculatorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'click').subscribe(function () {
            return _this2.errorservice.SetTelepad(_this2.Telepad.x, _this2.Telepad.y);
          });
        }
      }, {
        key: "calculateErrors",
        value: function calculateErrors() {
          var delta1 = {
            x: this.Start.x - this.Telepad.x,
            y: this.Start.y - this.Telepad.y
          };
          var delta2 = {
            x: this.End.x - this.Telepad.x,
            y: this.End.y - this.Telepad.y
          };
          var D1 = Math.hypot(delta1.x, delta1.y);
          var D2 = Math.hypot(delta2.x, delta2.y);
          var bearing1 = Math.atan2(delta1.x, delta1.y) * 180 / Math.PI;
          var bearing2 = Math.atan2(delta2.x, delta2.y) * 180 / Math.PI;
          this.deltaBearing = -Math.round((2 * this.Bearing - bearing1 - bearing2) / 2); //average

          if (this.isElevation) {
            this.deltaElevation = Math.ceil(90 / Math.PI * Math.atan((D2 * Math.sin(Math.PI / 90 * this.Elevation1) - D1 * Math.sin(Math.PI / 90 * this.Elevation2)) / ( ///* fix vim highlighting here
            D1 * Math.cos(Math.PI / 90 * this.Elevation2) - D2 * Math.cos(Math.PI / 90 * this.Elevation1))));
            var p1 = Math.sqrt(10 * D1 / Math.sin(Math.PI / 90 * (this.Elevation1 + this.deltaElevation)));
            var p2 = Math.sqrt(10 * D2 / Math.sin(Math.PI / 90 * (this.Elevation2 + this.deltaElevation)));
            this.deltaPower = -Math.round((2 * this.Power1 - p1 - p2) / 2);
          } else {
            this.deltaPower = this.clamp(Math.round((Math.sqrt(D2) * this.Power1 - Math.sqrt(D1) * this.Power2) / (Math.sqrt(D1) - Math.sqrt(D2))), -4, 0);
            var elev1 = Math.asin(10 * D1 / Math.pow(this.Power1 + this.deltaPower, 2)) * 90 / Math.PI;
            var elev2 = Math.asin(10 * D2 / Math.pow(this.Power2 + this.deltaPower, 2)) * 90 / Math.PI;

            if (Number.isNaN(this.Elevation1)) {
              this.deltaElevation = -Math.round(this.Elevation1 - elev2);
            } else if (Number.isNaN(this.Elevation2)) {
              this.deltaElevation = -Math.round(this.Elevation1 - elev1);
            } else {
              this.deltaElevation = -Math.round((2 * this.Elevation1 - elev1 - elev2) / 2);
            }
          }

          this.errorservice.ErrorsCalculated({
            power: this.deltaPower,
            elevation: this.deltaElevation,
            bearing: this.deltaBearing,
            tele_x: this.Telepad.x,
            tele_y: this.Telepad.y
          });
          this.hasResult = true;
        }
      }, {
        key: "clamp",
        value: function clamp(value, min, max) {
          return Math.max(min, Math.min(max, value));
        }
      }, {
        key: "loadTelepad",
        value: function loadTelepad(x, y) {
          this.Telepad.x = x;
          this.Telepad.y = y;
        }
      }, {
        key: "calculateErrorsv",
        value: function calculateErrorsv() {}
      }]);

      return CalculatorComponent;
    }();

    CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) {
      return new (t || CalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]));
    };

    CalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalculatorComponent,
      selectors: [["app-calculator"]],
      outputs: {
        onCalculated: "onCalculated"
      },
      decls: 24,
      vars: 16,
      consts: [[3, "ngModel", "ngModelChange"], ["id", "TELEPAD", 3, "cords", "x_label", "y_label", "cordsChange"], [3, "cords", "x_label", "y_label", "cordsChange"], [3, "ngIf", "ngIfElse"], ["power", ""], [4, "ngIf"], ["type", "number", 3, "ngModel", "ngModelChange"], [3, "click"], ["value", "5"], ["value", "10"], ["value", "20"], ["value", "25"], ["value", "30"], ["value", "40"], ["value", "50"], ["value", "80"], ["value", "100"]],
      template: function CalculatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0438\u043B\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-slide-toggle", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_mat_slide_toggle_ngModelChange_2_listener($event) {
            return ctx.isElevation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u043E\u0434\u044A\u0435\u043C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-point", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cordsChange", function CalculatorComponent_Template_app_point_cordsChange_6_listener($event) {
            return ctx.Telepad = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-point", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cordsChange", function CalculatorComponent_Template_app_point_cordsChange_8_listener($event) {
            return ctx.Start = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-point", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cordsChange", function CalculatorComponent_Template_app_point_cordsChange_10_listener($event) {
            return ctx.End = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CalculatorComponent_ng_template_12_Template, 6, 2, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CalculatorComponent_ng_template_13_Template, 42, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CalculatorComponent_label_15_Template, 21, 1, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CalculatorComponent_label_16_Template, 3, 1, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CalculatorComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.Bearing = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculatorComponent_Template_button_click_21_listener() {
            return ctx.calculateErrors();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0412\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0438\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CalculatorComponent_div_23_Template, 7, 9, "div", 5);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isElevation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cords", ctx.Telepad)("x_label", "X \u0422\u0435\u043B\u0435\u043F\u0430\u0434\u0430")("y_label", "Y \u0422\u0435\u043B\u0435\u043F\u0430\u0434\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cords", ctx.Start)("x_label", "X1:")("y_label", "Y1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cords", ctx.End)("x_label", "X2:")("y_label", "Y2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isElevation)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isElevation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isElevation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Bearing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasResult);
        }
      },
      directives: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _point_point_component__WEBPACK_IMPORTED_MODULE_5__["PointComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
      styles: ["label[_ngcontent-%COMP%] {\n  display: inline-block;\n  clear: left;\n  width: 160px;\n  text-align: right;\n}\n\ninput[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: right;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 68px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n  background-color: #045af8;\n  \n  color: white;\n  border-radius: 6px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: cornflowerblue;\n  \n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUVFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFBMkIsVUFBQTtFQUMzQixZQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFDQTtFQUNFLGdDQUFBO0VBQWtDLFVBQUE7RUFDbEMsWUFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjbGVhcjogbGVmdDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbmlucHV0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5zZWxlY3Rcclxue1xyXG4gIHdpZHRoOiA2OHB4O1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ1YWY4OyAvKiBHcmVlbiAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlOyAvKiBHcmVlbiAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-calculator',
          templateUrl: './calculator.component.html',
          styleUrls: ['./calculator.component.scss']
        }]
      }], function () {
        return [{
          type: _error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"]
        }];
      }, {
        onCalculated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/embeded-map/embeded-map.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/embeded-map/embeded-map.component.ts ***!
    \******************************************************/

  /*! exports provided: EmbededMapComponent */

  /***/
  function srcAppEmbededMapEmbededMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmbededMapComponent", function () {
      return EmbededMapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var EmbededMapComponent = /*#__PURE__*/function () {
      function EmbededMapComponent() {
        _classCallCheck(this, EmbededMapComponent);
      }

      _createClass(EmbededMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'click').subscribe(function () {
            return _this3.click();
          });
        }
      }, {
        key: "click",
        value: function click() {
          console.log("test");
        }
      }]);

      return EmbededMapComponent;
    }();

    EmbededMapComponent.ɵfac = function EmbededMapComponent_Factory(t) {
      return new (t || EmbededMapComponent)();
    };

    EmbededMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmbededMapComponent,
      selectors: [["app-embeded-map"]],
      decls: 1,
      vars: 0,
      consts: [["sandbox", "allow-same-origin allow-scripts allow-popups allow-forms", "src", "https://affectedarc07.github.io/SS13WebMap/TauCetiClassic/BoxStation/"]],
      template: function EmbededMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
        }
      },
      styles: ["iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1iZWRlZC1tYXAvZW1iZWRlZC1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsYUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvZW1iZWRlZC1tYXAvZW1iZWRlZC1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpZnJhbWUgXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmbededMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-embeded-map',
          templateUrl: './embeded-map.component.html',
          styleUrls: ['./embeded-map.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/error.service.ts":
  /*!**********************************!*\
    !*** ./src/app/error.service.ts ***!
    \**********************************/

  /*! exports provided: ErrorService */

  /***/
  function srcAppErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
      return ErrorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ErrorService = /*#__PURE__*/function () {
      function ErrorService() {
        _classCallCheck(this, ErrorService);

        this.errorSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.holopadSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.blindSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.saveSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.saveEvent = this.saveSource.asObservable();
        this.blindEvent = this.blindSource.asObservable();
        this.readyToPaste$ = this.errorSource.asObservable();
        this.holopadUpdated$ = this.holopadSource.asObservable();
      }

      _createClass(ErrorService, [{
        key: "ErrorsCalculated",
        value: function ErrorsCalculated(res) {
          this.errorSource.next(res);
        }
      }, {
        key: "SaveCords",
        value: function SaveCords(cords) {
          this.saveSource.next(cords);
        }
      }, {
        key: "SetTelepad",
        value: function SetTelepad(x, y) {
          this.holopadSource.next([x, y]);
        }
      }, {
        key: "BlindMode",
        value: function BlindMode() {
          this.blindSource.next();
        }
      }]);

      return ErrorService;
    }();

    ErrorService.ɵfac = function ErrorService_Factory(t) {
      return new (t || ErrorService)();
    };

    ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorService,
      factory: ErrorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/misc/misc.component.ts":
  /*!****************************************!*\
    !*** ./src/app/misc/misc.component.ts ***!
    \****************************************/

  /*! exports provided: MiscComponent */

  /***/
  function srcAppMiscMiscComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiscComponent", function () {
      return MiscComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../error.service */
    "./src/app/error.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");

    function MiscComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u0435: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u043E\u0434\u044A\u0435\u043C: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0421\u0438\u043B\u0430: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cord_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cord_r1.label, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", cord_r1.bearing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cord_r1.bearing, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", cord_r1.elevation);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cord_r1.elevation, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", cord_r1.power);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cord_r1.power, " ");
      }
    }

    var MiscComponent = /*#__PURE__*/function () {
      function MiscComponent(errorService, cdr) {
        var _this4 = this;

        _classCallCheck(this, MiscComponent);

        this.cdr = cdr;
        this.save_iterator = 0;
        this.savedCords = [];
        this.errorSerivce = errorService;
        errorService.saveEvent.subscribe(function (arg) {
          var label = window.prompt("Введите название", "Позиция");
          if (!label) return;

          _this4.savedCords.push({
            label: label,
            id: _this4.save_iterator,
            bearing: arg.bearing.toFixed(2),
            elevation: arg.elevation.toFixed(2),
            power: arg.power.toFixed(2)
          });

          cdr.detectChanges();
        });
      }

      _createClass(MiscComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadTelepad",
        value: function loadTelepad(x, y) {
          this.errorSerivce.SetTelepad(x, y);
        }
      }, {
        key: "BlindMode",
        value: function BlindMode() {
          this.errorSerivce.BlindMode();
        }
      }]);

      return MiscComponent;
    }();

    MiscComponent.ɵfac = function MiscComponent_Factory(t) {
      return new (t || MiscComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    MiscComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MiscComponent,
      selectors: [["app-misc"]],
      decls: 9,
      vars: 1,
      consts: [[3, "click"], [4, "ngFor", "ngForOf"], [2, "width", "100px", 3, "cdkCopyToClipboard"]],
      template: function MiscComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MiscComponent_Template_button_click_0_listener() {
            return ctx.loadTelepad(170, 133);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E \u0442\u0435\u043B\u0435\u043F\u0430\u0434\u0430 \u0434\u043B\u044F \"\u0418\u0441\u0445\u043E\u0434\u0430\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MiscComponent_Template_button_click_3_listener() {
            return ctx.BlindMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0421\u043B\u0435\u043F\u043E\u0439 \u043F\u0440\u044B\u0436\u043E\u043A!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u0432\u0435\u0441\u0442\u0438 \u0441\u0440\u0435\u0434\u043D\u0438\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043E\u0448\u0438\u0431\u043E\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MiscComponent_li_8_Template, 14, 7, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.savedCords);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["CdkCopyToClipboard"]],
      styles: ["button[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n  background-color: #045af8;\n  \n  color: white;\n  border-radius: 6px;\n  width: 150px;\n  height: 50px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: cornflowerblue;\n  \n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzYy9taXNjLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUEyQixVQUFBO0VBQzNCLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQ0FBQTtFQUFrQyxVQUFBO0VBQ2xDLFlBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL21pc2MvbWlzYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0NWFmODsgLyogR3JlZW4gKi9cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHdpZHRoOiAxNTBweCA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7IC8qIEdyZWVuICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiscComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-misc',
          templateUrl: './misc.component.html',
          styleUrls: ['./misc.component.scss']
        }]
      }], function () {
        return [{
          type: _error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/point/point.component.ts":
  /*!******************************************!*\
    !*** ./src/app/point/point.component.ts ***!
    \******************************************/

  /*! exports provided: PointComponent */

  /***/
  function srcAppPointPointComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PointComponent", function () {
      return PointComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var PointComponent = /*#__PURE__*/function () {
      function PointComponent() {
        _classCallCheck(this, PointComponent);

        this.point = {
          x: 0,
          y: 0
        };
        this.cordsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PointComponent, [{
        key: "enterRaw",
        value: function enterRaw() {
          var raw = prompt("Enter coordinated like Any(x,y,z)").replace(/\s/g, "");
          ;
          var reg = /\((\d*),(\d*),\d*\)/i;
          var res = reg.exec(raw);

          if (res && res.length == 3) {
            this.cords = {
              x: Number.parseInt(res[1]),
              y: Number.parseInt(res[2])
            };
          } else {
            this.cords = {
              x: Number.parseInt(/x=\d*/.exec(raw)[0].substr(2)),
              y: Number.parseInt(/y=\d*/.exec(raw)[0].substr(2))
            };
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cords",
        get: function get() {
          return this.point;
        },
        set: function set(value) {
          this.point = value;
          this.cordsChange.emit(this.cords);
        }
      }]);

      return PointComponent;
    }();

    PointComponent.ɵfac = function PointComponent_Factory(t) {
      return new (t || PointComponent)();
    };

    PointComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PointComponent,
      selectors: [["app-point"]],
      inputs: {
        x_label: "x_label",
        y_label: "y_label",
        cords: "cords"
      },
      outputs: {
        cordsChange: "cordsChange"
      },
      decls: 7,
      vars: 4,
      consts: [[3, "click"], ["type", "number", 3, "ngModel", "ngModelChange"]],
      template: function PointComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PointComponent_Template_button_click_0_listener() {
            return ctx.enterRaw();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PointComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.cords.x = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PointComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.cords.y = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.x_label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cords.x);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.y_label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cords.y);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 144px;\n  text-align: right;\n}\n\ninput[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: right;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9pbnQvcG9pbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFFRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3BvaW50L3BvaW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTQ0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5pbnB1dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5idXR0b25cclxue1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICBcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-point',
          templateUrl: './point.component.html',
          styleUrls: ['./point.component.scss']
        }]
      }], function () {
        return [];
      }, {
        x_label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        y_label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cordsChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        cords: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/triangulator/triangulator.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/triangulator/triangulator.component.ts ***!
    \********************************************************/

  /*! exports provided: TriangulatorComponent */

  /***/
  function srcAppTriangulatorTriangulatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TriangulatorComponent", function () {
      return TriangulatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../error.service */
    "./src/app/error.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _point_point_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../point/point.component */
    "./src/app/point/point.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");

    function TriangulatorComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriangulatorComponent_div_29_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.SaveCords();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r0.targetBearing.toFixed(2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u0435:", ctx_r0.targetBearing.toFixed(2), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r0.targeElevation.toFixed(2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041F\u043E\u0434\u044A\u0435\u043C:", ctx_r0.targeElevation.toFixed(2), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r0.targetPower.toFixed(2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0421\u0438\u043B\u0430:", ctx_r0.targetPower.toFixed(2), " ");
      }
    }

    var TriangulatorComponent = /*#__PURE__*/function () {
      function TriangulatorComponent(errorService) {
        var _this5 = this;

        _classCallCheck(this, TriangulatorComponent);

        this.telepad = {
          x: NaN,
          y: NaN
        };
        this.targetPower = NaN;
        this.targetBearing = NaN;
        this.targeElevation = NaN;
        this.hasResult = false;
        this.Errors = {
          power: NaN,
          bearing: NaN,
          elevation: NaN
        };
        this.TargetPos = {
          x: NaN,
          y: NaN
        };
        this.errorService = errorService;
        errorService.readyToPaste$.subscribe(function (arg) {
          _this5.Errors = {
            power: arg["power"],
            bearing: arg["bearing"],
            elevation: arg["elevation"]
          };
          _this5.telepad.x = arg["tele_x"];
          _this5.telepad.y = arg["tele_y"];
        });
        errorService.holopadUpdated$.subscribe(function (arg) {
          _this5.telepad.x = arg[0];
          _this5.telepad.y = arg[1];
        });
        errorService.blindEvent.subscribe(function (arg) {
          _this5.Errors.bearing = 0;
          _this5.Errors.elevation = 0;
          _this5.Errors.power = -2;
        });
      }

      _createClass(TriangulatorComponent, [{
        key: "SaveCords",
        value: function SaveCords() {
          this.errorService.SaveCords({
            bearing: this.targetBearing,
            elevation: this.targeElevation,
            power: this.targetPower
          });
        }
      }, {
        key: "Triangulate",
        value: function Triangulate(target, telepad, error) {
          var _this6 = this;

          var POWERS = [5, 10, 20, 25, 30, 40, 50, 80, 100];
          var distance = Math.hypot(target.x - telepad.x, target.y - telepad.y);
          var bearing = 180.0 * Math.atan2(target.y - telepad.y, target.x - telepad.x) / Math.PI;
          bearing = parseFloat((90 - bearing).toFixed(2));
          bearing = bearing < 0 ? bearing + 360 : bearing;
          var result_bearing = bearing - error.bearing;
          var num6 = error.elevation < 0 ? 1 : 45;
          var num7 = error.elevation < 0 ? 45 : 90;
          var RESULT = {
            bearing: NaN,
            elevation: NaN,
            power: NaN
          };
          POWERS.forEach(function (power) {
            var list = new Array();
            var correctedPower = power + error.power;
            var found = false;

            for (var i = num6; i <= num7; i += 0.1) {
              if (_this6.check(bearing, i, correctedPower, target.x - telepad.x, target.y - telepad.y)) {
                list.push(i);
                found = true;
              }
            }

            if (found) {
              list.forEach(function (elevation) {
                var num11 = elevation;
                num6 += num11;
              });
              RESULT.bearing = result_bearing;
              RESULT.elevation = Math.round(num6) / list.length - error.elevation;
              RESULT.power = power;
              return RESULT;
            }
          });
          return RESULT;
        }
      }, {
        key: "BeginTriangulation",
        value: function BeginTriangulation() {
          var target = Object.create(this.TargetPos);
          var result = this.Triangulate(target, this.telepad, this.Errors);
          this.targeElevation = result["elevation"];
          this.targetPower = result["power"];
          this.targetBearing = result["bearing"];
          this.hasResult = true;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "check",
        value: function check(bearing, elevation, power, x, y) {
          var num = power * power / 10 * Math.sin(Math.PI * elevation / 90);
          var possibleX = Math.round(num * Math.sin(Math.PI * bearing / 180));
          var possibleY = Math.round(num * Math.cos(Math.PI * bearing / 180));
          return possibleX == x && possibleY == y;
        }
      }]);

      return TriangulatorComponent;
    }();

    TriangulatorComponent.ɵfac = function TriangulatorComponent_Factory(t) {
      return new (t || TriangulatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorService"]));
    };

    TriangulatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TriangulatorComponent,
      selectors: [["app-triangulator"]],
      decls: 30,
      vars: 7,
      consts: [[1, "tg"], ["type", "number", 3, "ngModel", "ngModelChange"], [1, "target"], [3, "cords", "x_label", "y_label", "cordsChange"], [3, "click"], [4, "ngIf"], [1, "load", 3, "cdkCopyToClipboard"], [1, "save", 3, "click"]],
      template: function TriangulatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u0438\u043B\u0438 \u0432\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043D\u0438\u0436\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0394\u041E\u0422\u041A\u041B\u041E\u041D\u0415\u041D\u0418\u0415");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriangulatorComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.Errors.bearing = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0394\u041F\u041E\u0414\u042A\u0415\u041C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriangulatorComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.Errors.elevation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0394\u0421\u0418\u041B\u0410");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TriangulatorComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.Errors.power = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B, \u043A\u0443\u0434\u0430 \u043D\u0443\u0436\u043D\u043E \u0442\u0435\u043B\u0435\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-point", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cordsChange", function TriangulatorComponent_Template_app_point_cordsChange_25_listener($event) {
            return ctx.TargetPos = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TriangulatorComponent_Template_button_click_27_listener() {
            return ctx.BeginTriangulation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0412\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TriangulatorComponent_div_29_Template, 10, 6, "div", 5);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Errors.bearing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Errors.elevation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Errors.power);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cords", ctx.TargetPos)("x_label", "X \u0426\u0435\u043B\u0438")("y_label", "Y \u0426\u0435\u043B\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasResult);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _point_point_component__WEBPACK_IMPORTED_MODULE_3__["PointComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_5__["CdkCopyToClipboard"]],
      styles: [".target[_ngcontent-%COMP%] {\n  position: relative;\n  right: 0px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  transition-duration: 0.4s;\n  background-color: #045af8;\n  \n  color: white;\n  border-radius: 6px;\n}\n\n.load[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 40px;\n}\n\n.save[_ngcontent-%COMP%] {\n  background-color: yellowgreen;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: cornflowerblue;\n  \n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpYW5ndWxhdG9yL3RyaWFuZ3VsYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSw2QkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUZGIiwiZmlsZSI6InNyYy9hcHAvdHJpYW5ndWxhdG9yL3RyaWFuZ3VsYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXJnZXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0NWFmODtcclxuICAvKiBHcmVlbiAqL1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi5sb2FkIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uc2F2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XHJcbiAgLyogR3JlZW4gKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TriangulatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-triangulator',
          templateUrl: './triangulator.component.html',
          styleUrls: ['./triangulator.component.scss']
        }]
      }], function () {
        return [{
          type: _error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorService"]
        }];
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! C:\Users\Illia Bannitsyn\Desktop\I\projects\Telescience-SS13\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map