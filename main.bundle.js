webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "form {\r\n    margin-top: 50px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!--app-form></app-form-->\n  <app-form2></app-form2>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_form_component__ = __webpack_require__("./src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form2_form2_component__ = __webpack_require__("./src/app/form2/form2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__form2_form2_component__["a" /* Form2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/***/ (function(module, exports) {

module.exports = "form {\r\n    margin-top: 50px;\r\n}"

/***/ }),

/***/ "./src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"xForm\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    <div *ngIf=\"!xForm.controls['email'].valid && xForm.controls['email'].touched\" class=\"alert alert-warning\" role=\"alert\">\n      This is a danger alert—check it out!\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n    <div *ngIf=\"!xForm.controls['password'].valid && xForm.controls['password'].touched\" class=\"alert alert-warning\" role=\"alert\">\n      This is a danger alert—check it out!\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleFormControlSelect1\">Permisos</label>\n    <select formControlName=\"permisos\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n      <option value=\"ADMIN\">Admin</option>\n      <option value=\"USER\">User</option>  \n    </select>\n    <!--div *ngIf=\"!xForm.controls['permiso'].valid && xFrom.controls['permiso'].touched\" class=\"alert alert-warning\" role=\"alert\">\n      This is a danger alert—check it out!\n    </div-->\n  </div>\n  <div class=\"form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Enviar(xForm.value)\" [disabled]=\"!xForm.valid\">Enviar</button>\n</form>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(form) {
        this.form = form;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.xForm = this.form.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(4)])],
            'permisos': ['ADMIN', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    FormComponent.prototype.Enviar = function (Data) {
        console.log(Data);
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("./src/app/form/form.component.html"),
            styles: [__webpack_require__("./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/form2/form2.component.css":
/***/ (function(module, exports) {

module.exports = "form {\r\n    margin-top: 50px;\r\n}"

/***/ }),

/***/ "./src/app/form2/form2.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registroForm\">\n  <div class=\"form-group\">\n    <label for=\"nombres\">Nombres</label>\n    <input formControlName=\"nombres\" type=\"text\" class=\"form-control\" id=\"nombres\" placeholder=\"Nombres\">\n    <div *ngIf=\"!registroForm.controls['nombres'].valid && registroForm.controls['nombres'].touched\" class=\"alert alert-warning\" role=\"alert\">\n      Error en el campo de nombres\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"ap_pat\">Apellido paterno</label>\n    <input formControlName=\"ap_pat\" type=\"text\" class=\"form-control\" id=\"ap_pat\" placeholder=\"Apellido Paterno\">\n    <div *ngIf=\"!registroForm.controls['ap_pat'].valid && registroForm.controls['ap_pat'].touched\" class=\"alert alert-warning\" role=\"alert\">\n      Error en el campo apellido paterno\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"ap_mat\">Apellido materno</label>\n    <input formControlName=\"ap_mat\" type=\"text\" class=\"form-control\" id=\"ap_mat\" placeholder=\"Apellido Materno\">\n    <div *ngIf=\"!registroForm.controls['ap_mat'].valid && registroForm.controls['ap_mat'].touched\" class=\"alert alert-warning\" role=\"alert\">\n      Error en el campo apellido materno\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"edad\">Edad</label>\n    <input formControlName=\"edad\" type=\"text\" class=\"form-control\" id=\"edad\" placeholder=\"Edad\">\n    <div *ngIf=\"!registroForm.controls['edad'].valid && registroForm.controls['edad'].touched\" class=\"alert alert-warning\" role=\"alert\">\n      Error en el campo edad\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n    <!--small id=\"email\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small-->\n    <div *ngIf=\"!registroForm.controls['email'].valid && registroForm.controls['email'].touched\" class=\"alert alert-warning\" role=\"alert\">\n      This is a danger alert—check it out!\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n    <div *ngIf=\"!registroForm.controls['password'].valid && registroForm.controls['password'].touched\" class=\"alert alert-warning\" role=\"alert\">\n      Error en el campo password\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"genero\">Género</label>\n    <select formControlName=\"genero\" class=\"form-control\" id=\"genero\">\n      <option value=\"Masculino\">Masculino</option>\n      <option value=\"Femenino\">Femenino</option>  \n    </select>\n    <!--div *ngIf=\"!registroForm.controls['permiso'].valid && xFrom.controls['permiso'].touched\" class=\"alert alert-warning\" role=\"alert\">\n      This is a danger alert—check it out!\n    </div-->\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Enviar(registroForm.value)\" [disabled]=\"!registroForm.valid\">Enviar</button>\n</form>"

/***/ }),

/***/ "./src/app/form2/form2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Form2Component = /** @class */ (function () {
    function Form2Component(form) {
        this.form = form;
    }
    Form2Component.prototype.ngOnInit = function () {
        this.registroForm = this.form.group({
            'nombres': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("[A-Za-zÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1_ ]+")])],
            'ap_pat': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1_ ]+")])],
            'ap_mat': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1_ ]+")])],
            'edad': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(18), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].max(70)])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(10)])],
            'genero': ['Masculino', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
    };
    Form2Component.prototype.Enviar = function (Data) {
        console.log(Data);
    };
    Form2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-form2',
            template: __webpack_require__("./src/app/form2/form2.component.html"),
            styles: [__webpack_require__("./src/app/form2/form2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], Form2Component);
    return Form2Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map