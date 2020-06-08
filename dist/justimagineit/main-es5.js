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
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_donate_donate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/donate/donate.component */
    "./src/app/components/donate/donate.component.ts");
    /* harmony import */


    var _components_education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/education/education.component */
    "./src/app/components/education/education.component.ts");
    /* harmony import */


    var _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/resource/resource.component */
    "./src/app/components/resource/resource.component.ts");
    /* harmony import */


    var _components_socialmediafeed_SocialMediaFeed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/socialmediafeed/SocialMediaFeed.component */
    "./src/app/components/socialmediafeed/SocialMediaFeed.component.ts");

    var routes = [{
      path: '',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }, {
      path: 'donate',
      component: _components_donate_donate_component__WEBPACK_IMPORTED_MODULE_3__["DonateComponent"]
    }, {
      path: 'education',
      component: _components_education_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"]
    }, {
      path: 'resources',
      component: _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_5__["ResourceComponent"]
    }, {
      path: 'blmfollow',
      component: _components_socialmediafeed_SocialMediaFeed_component__WEBPACK_IMPORTED_MODULE_6__["SocialMediaFeedComponent"]
    }, {
      path: '**',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
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


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'justimagineit';
      this.helpingHands = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHandsHelping"];
      this.heart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 29,
      vars: 2,
      consts: [[1, "header"], [1, "headerLogo"], ["routerLink", "/", "routerLinkActive", "active"], [3, "icon"], [1, "mainContent"], [1, "navigation"], ["mat-button", "", "routerLink", "/donate", "routerLinkActive", "active"], ["mat-button", "", "routerLink", "/education", "routerLinkActive", "active"], ["mat-button", "", "routerLink", "/resources", "routerLinkActive", "active"], ["mat-button", "", "routerLink", "/blmfollow", "routerLinkActive", "active"], [1, "navFooter"], [1, "contentWrapper"], [1, "routerContent"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " just imagine it. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-sidenav-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Donate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Resources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "#blacklivesmatter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Made with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "fa-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.helpingHands);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.heart);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 125px;\n  color: white;\n  background: #000;\n  padding: 10px 35px;\n}\n\nfa-icon[_ngcontent-%COMP%] {\n  margin: 10px;\n  font-size: larger;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background: black;\n  color: white;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  text-align: left;\n  height: 70px;\n  padding: 10px;\n  border-radius: 0;\n}\n\n.mat-drawer-content[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.mainContent[_ngcontent-%COMP%] {\n  display: flex;\n  width: inherit;\n  height: 100%;\n  overflow-y: hidden;\n}\n\n.header[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 3px #b9b9b9;\n}\n\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.header[_ngcontent-%COMP%]   .headerLogo[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  border: 2px solid white;\n  padding: 20px 13px;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: inherit;\n  width: 100%;\n  max-width: 200px;\n  min-width: 100px;\n  box-shadow: 2px 2px 3px #b9b9b9;\n}\n\n.contentWrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.routerContent[_ngcontent-%COMP%] {\n  height: inherit;\n}\n\n.navFooter[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  padding: 30px;\n}\n\n.navFooter[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXR0aXNoaW4vRG9jdW1lbnRzL1NhbmRib3gvanVzdGltYWdpbmVpdC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQU9FLCtCQUFBO0FDSEY7O0FESEU7RUFDRSxZQUFBO0FDS0o7O0FERUU7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElBO0VBQ0Usd0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwMDsgIFxuICBwYWRkaW5nOiAxMHB4IDM1cHg7XG59XG5cbmZhLWljb24ge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLm1hdC1kcmF3ZXItY29udGVudCB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1haW5Db250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uaGVhZGVyIHtcbiAgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLXdlYmtpdC1ib3gtc2hhZG93OjBweCAycHggM3B4ICNiOWI5Yjk7XG4gIC1tb3otYm94LXNoYWRvdzowcHggMnB4IDNweCAjYjliOWI5O1xuICBib3gtc2hhZG93OjBweCAycHggM3B4ICNiOWI5Yjk7XG5cbiAgLmhlYWRlckxvZ28ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgcGFkZGluZzogMjBweCAxM3B4O1xuICB9XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggI2I5YjliOTtcbn1cblxuLmNvbnRlbnRXcmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3V0ZXJDb250ZW50IHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4ubmF2Rm9vdGVyLFxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5uYXZGb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbiIsIm1hdC10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHggMzVweDtcbn1cblxuZmEtaWNvbiB7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ubWF0LWRyYXdlci1jb250ZW50IHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWFpbkNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggM3B4ICNiOWI5Yjk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAzcHggI2I5YjliOTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAzcHggI2I5YjliOTtcbn1cbi5oZWFkZXIgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZWFkZXIgLmhlYWRlckxvZ28ge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMjBweCAxM3B4O1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICNiOWI5Yjk7XG59XG5cbi5jb250ZW50V3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucm91dGVyQ29udGVudCB7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLm5hdkZvb3Rlcixcbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4ubmF2Rm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufSJdfQ== */"]
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _prompt_component_prompt_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./prompt-component/prompt-component.component */
    "./src/app/prompt-component/prompt-component.component.ts");
    /* harmony import */


    var _services_pwa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/pwa.service */
    "./src/app/services/pwa.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_donate_donate_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/donate/donate.component */
    "./src/app/components/donate/donate.component.ts");
    /* harmony import */


    var _components_education_education_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/education/education.component */
    "./src/app/components/education/education.component.ts");
    /* harmony import */


    var _components_socialmediafeed_SocialMediaFeed_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/socialmediafeed/SocialMediaFeed.component */
    "./src/app/components/socialmediafeed/SocialMediaFeed.component.ts");
    /* harmony import */


    var _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/resource/resource.component */
    "./src/app/components/resource/resource.component.ts");

    var initializer = function initializer(pwaService) {
      return function () {
        return pwaService.initPwaPrompt();
      };
    };

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
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: initializer,
        deps: [_services_pwa_service__WEBPACK_IMPORTED_MODULE_5__["PwaService"]],
        multi: true
      }],
      imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _prompt_component_prompt_component_component__WEBPACK_IMPORTED_MODULE_4__["PromptComponentComponent"], _components_donate_donate_component__WEBPACK_IMPORTED_MODULE_19__["DonateComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_20__["EducationComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_18__["MainComponent"], _components_socialmediafeed_SocialMediaFeed_component__WEBPACK_IMPORTED_MODULE_21__["SocialMediaFeedComponent"], _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_22__["ResourceComponent"]],
        imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _prompt_component_prompt_component_component__WEBPACK_IMPORTED_MODULE_4__["PromptComponentComponent"], _components_donate_donate_component__WEBPACK_IMPORTED_MODULE_19__["DonateComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_20__["EducationComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_18__["MainComponent"], _components_socialmediafeed_SocialMediaFeed_component__WEBPACK_IMPORTED_MODULE_21__["SocialMediaFeedComponent"], _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_22__["ResourceComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production
          })],
          entryComponents: [_prompt_component_prompt_component_component__WEBPACK_IMPORTED_MODULE_4__["PromptComponentComponent"]],
          providers: [{
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: initializer,
            deps: [_services_pwa_service__WEBPACK_IMPORTED_MODULE_5__["PwaService"]],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/donate/donate.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/donate/donate.component.ts ***!
    \*******************************************************/

  /*! exports provided: DonateComponent */

  /***/
  function srcAppComponentsDonateDonateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonateComponent", function () {
      return DonateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DonateComponent = /*#__PURE__*/function () {
      function DonateComponent() {
        _classCallCheck(this, DonateComponent);
      }

      _createClass(DonateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DonateComponent;
    }();

    DonateComponent.ɵfac = function DonateComponent_Factory(t) {
      return new (t || DonateComponent)();
    };

    DonateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DonateComponent,
      selectors: [["app-donate"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function DonateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Where to start donating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXR0aXNoaW4vRG9jdW1lbnRzL1NhbmRib3gvanVzdGltYWdpbmVpdC9zcmMvYXBwL2NvbXBvbmVudHMvZG9uYXRlL2RvbmF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kb25hdGUvZG9uYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kb25hdGUvZG9uYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyMHB4O1xufSIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-donate',
          templateUrl: './donate.component.html',
          styleUrls: ['./donate.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/education/education.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/education/education.component.ts ***!
    \*************************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppComponentsEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent() {
        _classCallCheck(this, EducationComponent);
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EducationComponent;
    }();

    EducationComponent.ɵfac = function EducationComponent_Factory(t) {
      return new (t || EducationComponent)();
    };

    EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EducationComponent,
      selectors: [["app-education"]],
      decls: 15,
      vars: 0,
      consts: [[1, "container"], [1, "wrapper"], [1, "listWrapper"], [1, "gridWrapper"], ["cols", "2", "rowHeight", "2:1"]],
      template: function EducationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Educate yourself");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTile"]],
      styles: [".container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nmat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXR0aXNoaW4vRG9jdW1lbnRzL1NhbmRib3gvanVzdGltYWdpbmVpdC9zcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxubWF0LWdyaWQtdGlsZSB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufVxuXG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG5tYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-education',
          templateUrl: './education.component.html',
          styleUrls: ['./education.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 28,
      vars: 0,
      consts: [[1, "container"], [1, "blockquote"], [1, "blockquoteFooter"], ["title", "Source Title"], [1, "wrapper"], [1, "listWrapper"], [1, "gridWrapper"], ["cols", "2", "rowHeight", "2:1"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "blockquote", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Somewhere off in outer space");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "There's a world, no wars, no hate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Where all the broken hearts are safe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "I don't know where it is");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I just imagine it");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " MKTO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "cite", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Just Imagine It");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-grid-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-grid-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_1__["MatGridTile"]],
      styles: [".container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.blockquote[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.blockquoteFooter[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6c757d;\n}\n\n.blockquoteFooter[_ngcontent-%COMP%]:before {\n  content: \"-\";\n}\n\nmat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXR0aXNoaW4vRG9jdW1lbnRzL1NhbmRib3gvanVzdGltYWdpbmVpdC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFLRSxrQkFBQTtFQUNBLGNBQUE7QUNIRjs7QURGRTtFQUNFLFlBQUE7QUNJSjs7QURHQTtFQUNJLHFCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLmJsb2NrcXVvdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ibG9ja3F1b3RlRm9vdGVye1xuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDonLSdcbiAgfVxuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2Yzc1N2Q7XG59XG5cbm1hdC1ncmlkLXRpbGUge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbn1cblxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLmJsb2NrcXVvdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ibG9ja3F1b3RlRm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzZjNzU3ZDtcbn1cbi5ibG9ja3F1b3RlRm9vdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiLVwiO1xufVxuXG5tYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/resource/resource.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/resource/resource.component.ts ***!
    \***********************************************************/

  /*! exports provided: ResourceComponent */

  /***/
  function srcAppComponentsResourceResourceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceComponent", function () {
      return ResourceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResourceComponent = /*#__PURE__*/function () {
      function ResourceComponent() {
        _classCallCheck(this, ResourceComponent);
      }

      _createClass(ResourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResourceComponent;
    }();

    ResourceComponent.ɵfac = function ResourceComponent_Factory(t) {
      return new (t || ResourceComponent)();
    };

    ResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceComponent,
      selectors: [["app-resource"]],
      decls: 39,
      vars: 0,
      consts: [[1, "container"], [1, "wrapper"], [1, "listWrapper"], ["href", "http://blacklivesmatters.carrd.co/", "target", "_blank"], ["href", "https://www.grassrootslaw.org/", "target", "_blank"], ["href", "https://www.staywoke.org/", "target", "_blank"], ["href", "https://www.votesaveamerica.com/", "target", "_blank"], ["href", "https://linktr.ee/southasians4blacklives", "target", "_blank"], ["href", "https://www.instagram.com/bldpwr/", "target", "_blank"], ["href", "https://www.instagram.com/blklivesmatter/", "target", "_blank"], ["href", "https://www.instagram.com/asiansforblacklivesmatter/", "target", "_blank"], ["href", "https://www.instagram.com/southasians4blacklives/", "target", "_blank"]],
      template: function ResourceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "More resources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " blacklivesmatters.carrd.co ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Grassroots Law ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Stay Woke ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Vote Save America ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " South Asians 4 Black Lives ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Instagram accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Build Power ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Black Lives Matter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Asians For Black Lives Matter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " South Asians 4 Black Lives ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXR0aXNoaW4vRG9jdW1lbnRzL1NhbmRib3gvanVzdGltYWdpbmVpdC9zcmMvYXBwL2NvbXBvbmVudHMvcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc291cmNlL3Jlc291cmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyMHB4O1xufVxuXG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resource',
          templateUrl: './resource.component.html',
          styleUrls: ['./resource.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/socialmediafeed/SocialMediaFeed.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/socialmediafeed/SocialMediaFeed.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SocialMediaFeedComponent */

  /***/
  function srcAppComponentsSocialmediafeedSocialMediaFeedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialMediaFeedComponent", function () {
      return SocialMediaFeedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SocialMediaFeedComponent = /*#__PURE__*/function () {
      function SocialMediaFeedComponent() {
        _classCallCheck(this, SocialMediaFeedComponent);
      }

      _createClass(SocialMediaFeedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SocialMediaFeedComponent;
    }();

    SocialMediaFeedComponent.ɵfac = function SocialMediaFeedComponent_Factory(t) {
      return new (t || SocialMediaFeedComponent)();
    };

    SocialMediaFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SocialMediaFeedComponent,
      selectors: [["app-socialmediafeed"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function SocialMediaFeedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "#blacklivesmatter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXR0aXNoaW4vRG9jdW1lbnRzL1NhbmRib3gvanVzdGltYWdpbmVpdC9zcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsbWVkaWFmZWVkL3NvY2lhbG1lZGlhZmVlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zb2NpYWxtZWRpYWZlZWQvc29jaWFsbWVkaWFmZWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb2NpYWxtZWRpYWZlZWQvc29jaWFsbWVkaWFmZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAyMHB4O1xufSIsIi5jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialMediaFeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-socialmediafeed',
          templateUrl: './socialmediafeed.component.html',
          styleUrls: ['./socialmediafeed.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/prompt-component/prompt-component.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/prompt-component/prompt-component.component.ts ***!
    \****************************************************************/

  /*! exports provided: PromptComponentComponent */

  /***/
  function srcAppPromptComponentPromptComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromptComponentComponent", function () {
      return PromptComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function PromptComponentComponent_mat_toolbar_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromptComponentComponent_mat_toolbar_0_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.installPwa();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add to Home screen ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromptComponentComponent_mat_toolbar_0_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PromptComponentComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromptComponentComponent_div_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "To install this web app on your device tap the Menu button and then 'Add to Home screen' button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "navigate_next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PromptComponentComponent = /*#__PURE__*/function () {
      function PromptComponentComponent(data, bottomSheetRef) {
        _classCallCheck(this, PromptComponentComponent);

        this.data = data;
        this.bottomSheetRef = bottomSheetRef;
      }

      _createClass(PromptComponentComponent, [{
        key: "installPwa",
        value: function installPwa() {
          this.data.promptEvent.prompt();
          this.close();
        }
      }, {
        key: "close",
        value: function close() {
          this.bottomSheetRef.dismiss();
        }
      }]);

      return PromptComponentComponent;
    }();

    PromptComponentComponent.ɵfac = function PromptComponentComponent_Factory(t) {
      return new (t || PromptComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]));
    };

    PromptComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PromptComponentComponent,
      selectors: [["app-prompt"]],
      decls: 2,
      vars: 2,
      consts: [["color", "primary", "class", "android-prompt", 4, "ngIf"], ["class", "ios-prompt", 4, "ngIf"], ["color", "primary", 1, "android-prompt"], ["mat-button", "", 3, "click"], ["mat-icon-button", "", 3, "click"], [1, "ios-prompt"], ["mat-button", "", "color", "primary", 1, "close-ios-inv", 3, "click"], ["src", "./assets/icon-72x72.png"]],
      template: function PromptComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PromptComponentComponent_mat_toolbar_0_Template, 6, 0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PromptComponentComponent_div_1_Template, 11, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.mobileType === "android");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.mobileType === "ios");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb21wdC1jb21wb25lbnQvcHJvbXB0LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromptComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-prompt',
          templateUrl: './prompt-component.component.html',
          styleUrls: ['./prompt-component.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]]
          }]
        }, {
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/pwa.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/pwa.service.ts ***!
    \*****************************************/

  /*! exports provided: PwaService */

  /***/
  function srcAppServicesPwaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PwaService", function () {
      return PwaService;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _prompt_component_prompt_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../prompt-component/prompt-component.component */
    "./src/app/prompt-component/prompt-component.component.ts");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");

    var PwaService = /*#__PURE__*/function () {
      function PwaService(bottomSheet, platform) {
        _classCallCheck(this, PwaService);

        this.bottomSheet = bottomSheet;
        this.platform = platform;
      }

      _createClass(PwaService, [{
        key: "initPwaPrompt",
        value: function initPwaPrompt() {
          var _this = this;

          if (this.platform.ANDROID) {
            window.addEventListener('beforeinstallprompt', function (event) {
              event.preventDefault();
              _this.promptEvent = event;

              _this.openPromptComponent('android');
            });
          }

          if (this.platform.IOS) {
            var isInStandaloneMode = 'standalone' in window.navigator && window.navigator['standalone'];

            if (!isInStandaloneMode) {
              this.openPromptComponent('ios');
            }
          }
        }
      }, {
        key: "openPromptComponent",
        value: function openPromptComponent(mobileType) {
          var _this2 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(3000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
            return _this2.bottomSheet.open(_prompt_component_prompt_component_component__WEBPACK_IMPORTED_MODULE_3__["PromptComponentComponent"], {
              data: {
                mobileType: mobileType,
                promptEvent: _this2.promptEvent
              }
            });
          });
        }
      }]);

      return PwaService;
    }();

    PwaService.ɵfac = function PwaService_Factory(t) {
      return new (t || PwaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]));
    };

    PwaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PwaService,
      factory: PwaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PwaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]
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
    /*! /Users/pattishin/Documents/Sandbox/justimagineit/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map