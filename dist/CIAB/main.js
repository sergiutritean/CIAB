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

/***/ "./src/app/add-service/add-service.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-service/add-service.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"valign-wrapper row\">\r\n  <div class=\"col card hoverable s12\">\r\n    <form [formGroup] = 'form' (submit)=\"onSubmit()\">\r\n      <div class=\"card-content\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col s12\">\r\n            <p style=\"color: #9e9e9e\">Tip serviciu</p>\r\n            <p>\r\n              <input name=\"service_type\" type=\"radio\" id=\"offer\" [value]=\"'offer'\" formControlName=\"service_type\"/>\r\n              <label for=\"offer\">Ofertă</label>\r\n            </p>\r\n            <p>\r\n              <input name=\"service_type\" type=\"radio\" id=\"request\" [value]=\"'request'\" formControlName=\"service_type\"/>\r\n              <label for=\"request\">Cerere</label>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"input-field col s12\">\r\n            <label for='nsFormTitle'>Titlu</label>\r\n            <input type='text' id='nsFormTitle' name='title' formControlName=\"title\">\r\n          </div>\r\n\r\n          <div class=\"input-field col s12\">\r\n            <label for='nsFormDescription'>Descriere</label>\r\n            <textarea class=\"materialize-textarea\" id='nsFormDescription' name='description' formControlName=\"desc\"></textarea>\r\n          </div>\r\n\r\n\t\t\t\t\t<div class=\"input-field col s12\" materialize>\r\n\t\t\t\t\t\t<select materialize=\"material_select\" [materializeSelectOptions]=\"categories\" formControlName=\"category\">\r\n\t\t\t\t\t\t\t<option value=\"\" disabled selected>Alegeți categoria</option>\r\n\t\t\t\t\t\t\t<option *ngFor=\"let category of categories\" [value]=\"category\">\r\n\t\t\t\t\t\t\t\t{{ category }}\r\n\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<label>Categorie</label>\r\n\t\t\t\t\t</div>\r\n\r\n          <div class=\"file-field input-field col s12\">\r\n            <div class=\"btn\">\r\n              <span>Poze</span>\r\n              <input type=\"file\" multiple name=\"photos\" (change)=\"onChange($event)\">\r\n              <!--\r\n\t\t\t\t\t\t\t<input type=\"text\" #inputFiles>\r\n\t\t\t\t\t\t\t-->\r\n            </div>\r\n            <div class=\"file-path-wrapper\">\r\n              <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload one or more files\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col s12\">\r\n            <p>\r\n              <input type=\"checkbox\" class=\"filled-in\" id=\"barter\" checked=\"checked\" formControlName=\"barter\"/>\r\n              <label for=\"barter\">Barter</label>\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"input-field col s12\">\r\n            <label for='nsFormPrice'>Preț</label>\r\n            <input type='number' id='nsFormPrice' name='price' formControlName=\"price\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card-action center-align\">\r\n          <button class=\"waves-effect waves-light btn-large\" type=\"submit\">Creează serviciu</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-service/add-service.component.scss":
/*!********************************************************!*\
  !*** ./src/app/add-service/add-service.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-service/add-service.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-service/add-service.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var service_service_1 = __webpack_require__(/*! src/app/shared/services/service.service */ "./src/app/shared/services/service.service.ts");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var service_model_1 = __webpack_require__(/*! src/app/shared/service.model */ "./src/app/shared/service.model.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var angular2_materialize_1 = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
var AddServiceComponent = /** @class */ (function () {
    function AddServiceComponent(serviceService, userService, router) {
        this.serviceService = serviceService;
        this.userService = userService;
        this.router = router;
        this.form = new forms_1.FormGroup({
            service_type: new forms_1.FormControl('', [forms_1.Validators.required]),
            title: new forms_1.FormControl('', [forms_1.Validators.required]),
            desc: new forms_1.FormControl('', [forms_1.Validators.required]),
            barter: new forms_1.FormControl(''),
            price: new forms_1.FormControl('', [forms_1.Validators.required]),
            category: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    AddServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images = [];
        this.imagesURL = [];
        this.userService.getCategories().on('value', function (snap) {
            _this.categories = snap.val();
        });
    };
    AddServiceComponent.prototype.addImages = function (index) {
        var _this = this;
        if (!index)
            this.imagesURL = [];
        if (index === this.images.length) {
            this.serviceToAdd = new service_model_1.ServiceModel(this.form.value.barter, this.form.value.title, this.form.value.desc, 0, this.form.value.category, this.imagesURL, this.userService.uid, '', this.uid, this.form.value.service_type, 'my_service', this.form.value.price);
            return;
        }
        var url = 'services/' + this.userService.uid + '/' + this.uid + '/' + index;
        var uploadTask = this.serviceService.addImage(url, this.images[index]);
        uploadTask.on('state_changed', function (snapshot) { }, function (error) { console.log(error); }, function () {
            _this.userService.getImage(url).getDownloadURL().then(function (resp) {
                _this.imagesURL.push(resp);
                console.log(_this.imagesURL);
                console.log('Done image ' + index);
                _this.addImages(index + 1);
            });
        });
    };
    AddServiceComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form.value);
        if (this.form.valid) {
            this.uid = this.serviceService.getUniqueID();
            this.addImages(0);
            console.log(this.imagesURL);
            this.userService.getUsers().once('value', function (snap) {
                var users = snap.val();
                var index = users.findIndex(function (user) { return user.uid === _this.userService.uid; });
                var text = _this.form.value.service_type;
                if (!users[index][text])
                    users[index][text] = [];
                users[index][text].push(_this.uid);
                console.log(_this.serviceToAdd);
                _this.userService.updateDB(users).then(function () {
                    _this.serviceService.addService(_this.serviceToAdd, _this.serviceToAdd.fromUser).then(function () {
                        _this.form.reset();
                        angular2_materialize_1.toast('Service added succesfully!', 1000);
                        _this.router.navigate(['dashboard']);
                    })
                        .catch(function (err) { return console.log(err); });
                })
                    .catch(function (err) { return console.log(err); });
            });
        }
    };
    AddServiceComponent.prototype.onChange = function (event) {
        var _this = this;
        var files = [].slice.call(event.target.files);
        var indMax = files.length - 1;
        for (var i = 0; i <= indMax; ++i) {
            if (event.target.files && files[i]) {
                var reader = new FileReader();
                reader.onload = function (events) {
                    _this.imagesURL.push(events.target.result);
                };
                console.log(files[i]);
                reader.readAsDataURL(files[i]);
                this.images.push(files[i]);
            }
        }
    };
    AddServiceComponent = __decorate([
        core_1.Component({
            selector: 'app-add-service',
            template: __webpack_require__(/*! ./add-service.component.html */ "./src/app/add-service/add-service.component.html"),
            styles: [__webpack_require__(/*! ./add-service.component.scss */ "./src/app/add-service/add-service.component.scss")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            user_service_1.UserService,
            router_1.Router])
    ], AddServiceComponent);
    return AddServiceComponent;
}());
exports.AddServiceComponent = AddServiceComponent;


/***/ }),

/***/ "./src/app/all-services/all-offers/all-offers.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/all-services/all-offers/all-offers.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"services.length\">\r\n  <app-offer *ngFor=\"let item of services | paginate: { itemsPerPage: 4, currentPage: p }\" [service]=\"item\"></app-offer>\r\n  <div class=\"valign-wrapper\">\r\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/all-services/all-offers/all-offers.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/all-services/all-offers/all-offers.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".materialize-red {\n  background-color: #e51c23 !important; }\n\n.materialize-red-text {\n  color: #e51c23 !important; }\n\n.materialize-red.lighten-5 {\n  background-color: #fdeaeb !important; }\n\n.materialize-red-text.text-lighten-5 {\n  color: #fdeaeb !important; }\n\n.materialize-red.lighten-4 {\n  background-color: #f8c1c3 !important; }\n\n.materialize-red-text.text-lighten-4 {\n  color: #f8c1c3 !important; }\n\n.materialize-red.lighten-3 {\n  background-color: #f3989b !important; }\n\n.materialize-red-text.text-lighten-3 {\n  color: #f3989b !important; }\n\n.materialize-red.lighten-2 {\n  background-color: #ee6e73 !important; }\n\n.materialize-red-text.text-lighten-2 {\n  color: #ee6e73 !important; }\n\n.materialize-red.lighten-1 {\n  background-color: #ea454b !important; }\n\n.materialize-red-text.text-lighten-1 {\n  color: #ea454b !important; }\n\n.materialize-red.darken-1 {\n  background-color: #d0181e !important; }\n\n.materialize-red-text.text-darken-1 {\n  color: #d0181e !important; }\n\n.materialize-red.darken-2 {\n  background-color: #b9151b !important; }\n\n.materialize-red-text.text-darken-2 {\n  color: #b9151b !important; }\n\n.materialize-red.darken-3 {\n  background-color: #a21318 !important; }\n\n.materialize-red-text.text-darken-3 {\n  color: #a21318 !important; }\n\n.materialize-red.darken-4 {\n  background-color: #8b1014 !important; }\n\n.materialize-red-text.text-darken-4 {\n  color: #8b1014 !important; }\n\n.red {\n  background-color: #F44336 !important; }\n\n.red-text {\n  color: #F44336 !important; }\n\n.red.lighten-5 {\n  background-color: #FFEBEE !important; }\n\n.red-text.text-lighten-5 {\n  color: #FFEBEE !important; }\n\n.red.lighten-4 {\n  background-color: #FFCDD2 !important; }\n\n.red-text.text-lighten-4 {\n  color: #FFCDD2 !important; }\n\n.red.lighten-3 {\n  background-color: #EF9A9A !important; }\n\n.red-text.text-lighten-3 {\n  color: #EF9A9A !important; }\n\n.red.lighten-2 {\n  background-color: #E57373 !important; }\n\n.red-text.text-lighten-2 {\n  color: #E57373 !important; }\n\n.red.lighten-1 {\n  background-color: #EF5350 !important; }\n\n.red-text.text-lighten-1 {\n  color: #EF5350 !important; }\n\n.red.darken-1 {\n  background-color: #E53935 !important; }\n\n.red-text.text-darken-1 {\n  color: #E53935 !important; }\n\n.red.darken-2 {\n  background-color: #D32F2F !important; }\n\n.red-text.text-darken-2 {\n  color: #D32F2F !important; }\n\n.red.darken-3 {\n  background-color: #C62828 !important; }\n\n.red-text.text-darken-3 {\n  color: #C62828 !important; }\n\n.red.darken-4 {\n  background-color: #B71C1C !important; }\n\n.red-text.text-darken-4 {\n  color: #B71C1C !important; }\n\n.red.accent-1 {\n  background-color: #FF8A80 !important; }\n\n.red-text.text-accent-1 {\n  color: #FF8A80 !important; }\n\n.red.accent-2 {\n  background-color: #FF5252 !important; }\n\n.red-text.text-accent-2 {\n  color: #FF5252 !important; }\n\n.red.accent-3 {\n  background-color: #FF1744 !important; }\n\n.red-text.text-accent-3 {\n  color: #FF1744 !important; }\n\n.red.accent-4 {\n  background-color: #D50000 !important; }\n\n.red-text.text-accent-4 {\n  color: #D50000 !important; }\n\n.pink {\n  background-color: #e91e63 !important; }\n\n.pink-text {\n  color: #e91e63 !important; }\n\n.pink.lighten-5 {\n  background-color: #fce4ec !important; }\n\n.pink-text.text-lighten-5 {\n  color: #fce4ec !important; }\n\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important; }\n\n.pink-text.text-lighten-4 {\n  color: #f8bbd0 !important; }\n\n.pink.lighten-3 {\n  background-color: #f48fb1 !important; }\n\n.pink-text.text-lighten-3 {\n  color: #f48fb1 !important; }\n\n.pink.lighten-2 {\n  background-color: #f06292 !important; }\n\n.pink-text.text-lighten-2 {\n  color: #f06292 !important; }\n\n.pink.lighten-1 {\n  background-color: #ec407a !important; }\n\n.pink-text.text-lighten-1 {\n  color: #ec407a !important; }\n\n.pink.darken-1 {\n  background-color: #d81b60 !important; }\n\n.pink-text.text-darken-1 {\n  color: #d81b60 !important; }\n\n.pink.darken-2 {\n  background-color: #c2185b !important; }\n\n.pink-text.text-darken-2 {\n  color: #c2185b !important; }\n\n.pink.darken-3 {\n  background-color: #ad1457 !important; }\n\n.pink-text.text-darken-3 {\n  color: #ad1457 !important; }\n\n.pink.darken-4 {\n  background-color: #880e4f !important; }\n\n.pink-text.text-darken-4 {\n  color: #880e4f !important; }\n\n.pink.accent-1 {\n  background-color: #ff80ab !important; }\n\n.pink-text.text-accent-1 {\n  color: #ff80ab !important; }\n\n.pink.accent-2 {\n  background-color: #ff4081 !important; }\n\n.pink-text.text-accent-2 {\n  color: #ff4081 !important; }\n\n.pink.accent-3 {\n  background-color: #f50057 !important; }\n\n.pink-text.text-accent-3 {\n  color: #f50057 !important; }\n\n.pink.accent-4 {\n  background-color: #c51162 !important; }\n\n.pink-text.text-accent-4 {\n  color: #c51162 !important; }\n\n.purple {\n  background-color: #9c27b0 !important; }\n\n.purple-text {\n  color: #9c27b0 !important; }\n\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important; }\n\n.purple-text.text-lighten-5 {\n  color: #f3e5f5 !important; }\n\n.purple.lighten-4 {\n  background-color: #e1bee7 !important; }\n\n.purple-text.text-lighten-4 {\n  color: #e1bee7 !important; }\n\n.purple.lighten-3 {\n  background-color: #ce93d8 !important; }\n\n.purple-text.text-lighten-3 {\n  color: #ce93d8 !important; }\n\n.purple.lighten-2 {\n  background-color: #ba68c8 !important; }\n\n.purple-text.text-lighten-2 {\n  color: #ba68c8 !important; }\n\n.purple.lighten-1 {\n  background-color: #ab47bc !important; }\n\n.purple-text.text-lighten-1 {\n  color: #ab47bc !important; }\n\n.purple.darken-1 {\n  background-color: #8e24aa !important; }\n\n.purple-text.text-darken-1 {\n  color: #8e24aa !important; }\n\n.purple.darken-2 {\n  background-color: #7b1fa2 !important; }\n\n.purple-text.text-darken-2 {\n  color: #7b1fa2 !important; }\n\n.purple.darken-3 {\n  background-color: #6a1b9a !important; }\n\n.purple-text.text-darken-3 {\n  color: #6a1b9a !important; }\n\n.purple.darken-4 {\n  background-color: #4a148c !important; }\n\n.purple-text.text-darken-4 {\n  color: #4a148c !important; }\n\n.purple.accent-1 {\n  background-color: #ea80fc !important; }\n\n.purple-text.text-accent-1 {\n  color: #ea80fc !important; }\n\n.purple.accent-2 {\n  background-color: #e040fb !important; }\n\n.purple-text.text-accent-2 {\n  color: #e040fb !important; }\n\n.purple.accent-3 {\n  background-color: #d500f9 !important; }\n\n.purple-text.text-accent-3 {\n  color: #d500f9 !important; }\n\n.purple.accent-4 {\n  background-color: #aa00ff !important; }\n\n.purple-text.text-accent-4 {\n  color: #aa00ff !important; }\n\n.deep-purple {\n  background-color: #673ab7 !important; }\n\n.deep-purple-text {\n  color: #673ab7 !important; }\n\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important; }\n\n.deep-purple-text.text-lighten-5 {\n  color: #ede7f6 !important; }\n\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important; }\n\n.deep-purple-text.text-lighten-4 {\n  color: #d1c4e9 !important; }\n\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important; }\n\n.deep-purple-text.text-lighten-3 {\n  color: #b39ddb !important; }\n\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important; }\n\n.deep-purple-text.text-lighten-2 {\n  color: #9575cd !important; }\n\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important; }\n\n.deep-purple-text.text-lighten-1 {\n  color: #7e57c2 !important; }\n\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important; }\n\n.deep-purple-text.text-darken-1 {\n  color: #5e35b1 !important; }\n\n.deep-purple.darken-2 {\n  background-color: #512da8 !important; }\n\n.deep-purple-text.text-darken-2 {\n  color: #512da8 !important; }\n\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important; }\n\n.deep-purple-text.text-darken-3 {\n  color: #4527a0 !important; }\n\n.deep-purple.darken-4 {\n  background-color: #311b92 !important; }\n\n.deep-purple-text.text-darken-4 {\n  color: #311b92 !important; }\n\n.deep-purple.accent-1 {\n  background-color: #b388ff !important; }\n\n.deep-purple-text.text-accent-1 {\n  color: #b388ff !important; }\n\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important; }\n\n.deep-purple-text.text-accent-2 {\n  color: #7c4dff !important; }\n\n.deep-purple.accent-3 {\n  background-color: #651fff !important; }\n\n.deep-purple-text.text-accent-3 {\n  color: #651fff !important; }\n\n.deep-purple.accent-4 {\n  background-color: #6200ea !important; }\n\n.deep-purple-text.text-accent-4 {\n  color: #6200ea !important; }\n\n.indigo {\n  background-color: #3f51b5 !important; }\n\n.indigo-text {\n  color: #3f51b5 !important; }\n\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important; }\n\n.indigo-text.text-lighten-5 {\n  color: #e8eaf6 !important; }\n\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important; }\n\n.indigo-text.text-lighten-4 {\n  color: #c5cae9 !important; }\n\n.indigo.lighten-3 {\n  background-color: #9fa8da !important; }\n\n.indigo-text.text-lighten-3 {\n  color: #9fa8da !important; }\n\n.indigo.lighten-2 {\n  background-color: #7986cb !important; }\n\n.indigo-text.text-lighten-2 {\n  color: #7986cb !important; }\n\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important; }\n\n.indigo-text.text-lighten-1 {\n  color: #5c6bc0 !important; }\n\n.indigo.darken-1 {\n  background-color: #3949ab !important; }\n\n.indigo-text.text-darken-1 {\n  color: #3949ab !important; }\n\n.indigo.darken-2 {\n  background-color: #303f9f !important; }\n\n.indigo-text.text-darken-2 {\n  color: #303f9f !important; }\n\n.indigo.darken-3 {\n  background-color: #283593 !important; }\n\n.indigo-text.text-darken-3 {\n  color: #283593 !important; }\n\n.indigo.darken-4 {\n  background-color: #1a237e !important; }\n\n.indigo-text.text-darken-4 {\n  color: #1a237e !important; }\n\n.indigo.accent-1 {\n  background-color: #8c9eff !important; }\n\n.indigo-text.text-accent-1 {\n  color: #8c9eff !important; }\n\n.indigo.accent-2 {\n  background-color: #536dfe !important; }\n\n.indigo-text.text-accent-2 {\n  color: #536dfe !important; }\n\n.indigo.accent-3 {\n  background-color: #3d5afe !important; }\n\n.indigo-text.text-accent-3 {\n  color: #3d5afe !important; }\n\n.indigo.accent-4 {\n  background-color: #304ffe !important; }\n\n.indigo-text.text-accent-4 {\n  color: #304ffe !important; }\n\n.blue {\n  background-color: #2196F3 !important; }\n\n.blue-text {\n  color: #2196F3 !important; }\n\n.blue.lighten-5 {\n  background-color: #E3F2FD !important; }\n\n.blue-text.text-lighten-5 {\n  color: #E3F2FD !important; }\n\n.blue.lighten-4 {\n  background-color: #BBDEFB !important; }\n\n.blue-text.text-lighten-4 {\n  color: #BBDEFB !important; }\n\n.blue.lighten-3 {\n  background-color: #90CAF9 !important; }\n\n.blue-text.text-lighten-3 {\n  color: #90CAF9 !important; }\n\n.blue.lighten-2 {\n  background-color: #64B5F6 !important; }\n\n.blue-text.text-lighten-2 {\n  color: #64B5F6 !important; }\n\n.blue.lighten-1 {\n  background-color: #42A5F5 !important; }\n\n.blue-text.text-lighten-1 {\n  color: #42A5F5 !important; }\n\n.blue.darken-1 {\n  background-color: #1E88E5 !important; }\n\n.blue-text.text-darken-1 {\n  color: #1E88E5 !important; }\n\n.blue.darken-2 {\n  background-color: #1976D2 !important; }\n\n.blue-text.text-darken-2 {\n  color: #1976D2 !important; }\n\n.blue.darken-3 {\n  background-color: #1565C0 !important; }\n\n.blue-text.text-darken-3 {\n  color: #1565C0 !important; }\n\n.blue.darken-4 {\n  background-color: #0D47A1 !important; }\n\n.blue-text.text-darken-4 {\n  color: #0D47A1 !important; }\n\n.blue.accent-1 {\n  background-color: #82B1FF !important; }\n\n.blue-text.text-accent-1 {\n  color: #82B1FF !important; }\n\n.blue.accent-2 {\n  background-color: #448AFF !important; }\n\n.blue-text.text-accent-2 {\n  color: #448AFF !important; }\n\n.blue.accent-3 {\n  background-color: #2979FF !important; }\n\n.blue-text.text-accent-3 {\n  color: #2979FF !important; }\n\n.blue.accent-4 {\n  background-color: #2962FF !important; }\n\n.blue-text.text-accent-4 {\n  color: #2962FF !important; }\n\n.light-blue {\n  background-color: #03a9f4 !important; }\n\n.light-blue-text {\n  color: #03a9f4 !important; }\n\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important; }\n\n.light-blue-text.text-lighten-5 {\n  color: #e1f5fe !important; }\n\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important; }\n\n.light-blue-text.text-lighten-4 {\n  color: #b3e5fc !important; }\n\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important; }\n\n.light-blue-text.text-lighten-3 {\n  color: #81d4fa !important; }\n\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important; }\n\n.light-blue-text.text-lighten-2 {\n  color: #4fc3f7 !important; }\n\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important; }\n\n.light-blue-text.text-lighten-1 {\n  color: #29b6f6 !important; }\n\n.light-blue.darken-1 {\n  background-color: #039be5 !important; }\n\n.light-blue-text.text-darken-1 {\n  color: #039be5 !important; }\n\n.light-blue.darken-2 {\n  background-color: #0288d1 !important; }\n\n.light-blue-text.text-darken-2 {\n  color: #0288d1 !important; }\n\n.light-blue.darken-3 {\n  background-color: #0277bd !important; }\n\n.light-blue-text.text-darken-3 {\n  color: #0277bd !important; }\n\n.light-blue.darken-4 {\n  background-color: #01579b !important; }\n\n.light-blue-text.text-darken-4 {\n  color: #01579b !important; }\n\n.light-blue.accent-1 {\n  background-color: #80d8ff !important; }\n\n.light-blue-text.text-accent-1 {\n  color: #80d8ff !important; }\n\n.light-blue.accent-2 {\n  background-color: #40c4ff !important; }\n\n.light-blue-text.text-accent-2 {\n  color: #40c4ff !important; }\n\n.light-blue.accent-3 {\n  background-color: #00b0ff !important; }\n\n.light-blue-text.text-accent-3 {\n  color: #00b0ff !important; }\n\n.light-blue.accent-4 {\n  background-color: #0091ea !important; }\n\n.light-blue-text.text-accent-4 {\n  color: #0091ea !important; }\n\n.cyan {\n  background-color: #00bcd4 !important; }\n\n.cyan-text {\n  color: #00bcd4 !important; }\n\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important; }\n\n.cyan-text.text-lighten-5 {\n  color: #e0f7fa !important; }\n\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important; }\n\n.cyan-text.text-lighten-4 {\n  color: #b2ebf2 !important; }\n\n.cyan.lighten-3 {\n  background-color: #80deea !important; }\n\n.cyan-text.text-lighten-3 {\n  color: #80deea !important; }\n\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important; }\n\n.cyan-text.text-lighten-2 {\n  color: #4dd0e1 !important; }\n\n.cyan.lighten-1 {\n  background-color: #26c6da !important; }\n\n.cyan-text.text-lighten-1 {\n  color: #26c6da !important; }\n\n.cyan.darken-1 {\n  background-color: #00acc1 !important; }\n\n.cyan-text.text-darken-1 {\n  color: #00acc1 !important; }\n\n.cyan.darken-2 {\n  background-color: #0097a7 !important; }\n\n.cyan-text.text-darken-2 {\n  color: #0097a7 !important; }\n\n.cyan.darken-3 {\n  background-color: #00838f !important; }\n\n.cyan-text.text-darken-3 {\n  color: #00838f !important; }\n\n.cyan.darken-4 {\n  background-color: #006064 !important; }\n\n.cyan-text.text-darken-4 {\n  color: #006064 !important; }\n\n.cyan.accent-1 {\n  background-color: #84ffff !important; }\n\n.cyan-text.text-accent-1 {\n  color: #84ffff !important; }\n\n.cyan.accent-2 {\n  background-color: #18ffff !important; }\n\n.cyan-text.text-accent-2 {\n  color: #18ffff !important; }\n\n.cyan.accent-3 {\n  background-color: #00e5ff !important; }\n\n.cyan-text.text-accent-3 {\n  color: #00e5ff !important; }\n\n.cyan.accent-4 {\n  background-color: #00b8d4 !important; }\n\n.cyan-text.text-accent-4 {\n  color: #00b8d4 !important; }\n\n.teal {\n  background-color: #009688 !important; }\n\n.teal-text {\n  color: #009688 !important; }\n\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important; }\n\n.teal-text.text-lighten-5 {\n  color: #e0f2f1 !important; }\n\n.teal.lighten-4 {\n  background-color: #b2dfdb !important; }\n\n.teal-text.text-lighten-4 {\n  color: #b2dfdb !important; }\n\n.teal.lighten-3 {\n  background-color: #80cbc4 !important; }\n\n.teal-text.text-lighten-3 {\n  color: #80cbc4 !important; }\n\n.teal.lighten-2 {\n  background-color: #4db6ac !important; }\n\n.teal-text.text-lighten-2 {\n  color: #4db6ac !important; }\n\n.teal.lighten-1 {\n  background-color: #26a69a !important; }\n\n.teal-text.text-lighten-1 {\n  color: #26a69a !important; }\n\n.teal.darken-1 {\n  background-color: #00897b !important; }\n\n.teal-text.text-darken-1 {\n  color: #00897b !important; }\n\n.teal.darken-2 {\n  background-color: #00796b !important; }\n\n.teal-text.text-darken-2 {\n  color: #00796b !important; }\n\n.teal.darken-3 {\n  background-color: #00695c !important; }\n\n.teal-text.text-darken-3 {\n  color: #00695c !important; }\n\n.teal.darken-4 {\n  background-color: #004d40 !important; }\n\n.teal-text.text-darken-4 {\n  color: #004d40 !important; }\n\n.teal.accent-1 {\n  background-color: #a7ffeb !important; }\n\n.teal-text.text-accent-1 {\n  color: #a7ffeb !important; }\n\n.teal.accent-2 {\n  background-color: #64ffda !important; }\n\n.teal-text.text-accent-2 {\n  color: #64ffda !important; }\n\n.teal.accent-3 {\n  background-color: #1de9b6 !important; }\n\n.teal-text.text-accent-3 {\n  color: #1de9b6 !important; }\n\n.teal.accent-4 {\n  background-color: #00bfa5 !important; }\n\n.teal-text.text-accent-4 {\n  color: #00bfa5 !important; }\n\n.green {\n  background-color: #4CAF50 !important; }\n\n.green-text {\n  color: #4CAF50 !important; }\n\n.green.lighten-5 {\n  background-color: #E8F5E9 !important; }\n\n.green-text.text-lighten-5 {\n  color: #E8F5E9 !important; }\n\n.green.lighten-4 {\n  background-color: #C8E6C9 !important; }\n\n.green-text.text-lighten-4 {\n  color: #C8E6C9 !important; }\n\n.green.lighten-3 {\n  background-color: #A5D6A7 !important; }\n\n.green-text.text-lighten-3 {\n  color: #A5D6A7 !important; }\n\n.green.lighten-2 {\n  background-color: #81C784 !important; }\n\n.green-text.text-lighten-2 {\n  color: #81C784 !important; }\n\n.green.lighten-1 {\n  background-color: #66BB6A !important; }\n\n.green-text.text-lighten-1 {\n  color: #66BB6A !important; }\n\n.green.darken-1 {\n  background-color: #43A047 !important; }\n\n.green-text.text-darken-1 {\n  color: #43A047 !important; }\n\n.green.darken-2 {\n  background-color: #388E3C !important; }\n\n.green-text.text-darken-2 {\n  color: #388E3C !important; }\n\n.green.darken-3 {\n  background-color: #2E7D32 !important; }\n\n.green-text.text-darken-3 {\n  color: #2E7D32 !important; }\n\n.green.darken-4 {\n  background-color: #1B5E20 !important; }\n\n.green-text.text-darken-4 {\n  color: #1B5E20 !important; }\n\n.green.accent-1 {\n  background-color: #B9F6CA !important; }\n\n.green-text.text-accent-1 {\n  color: #B9F6CA !important; }\n\n.green.accent-2 {\n  background-color: #69F0AE !important; }\n\n.green-text.text-accent-2 {\n  color: #69F0AE !important; }\n\n.green.accent-3 {\n  background-color: #00E676 !important; }\n\n.green-text.text-accent-3 {\n  color: #00E676 !important; }\n\n.green.accent-4 {\n  background-color: #00C853 !important; }\n\n.green-text.text-accent-4 {\n  color: #00C853 !important; }\n\n.light-green {\n  background-color: #8bc34a !important; }\n\n.light-green-text {\n  color: #8bc34a !important; }\n\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important; }\n\n.light-green-text.text-lighten-5 {\n  color: #f1f8e9 !important; }\n\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important; }\n\n.light-green-text.text-lighten-4 {\n  color: #dcedc8 !important; }\n\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important; }\n\n.light-green-text.text-lighten-3 {\n  color: #c5e1a5 !important; }\n\n.light-green.lighten-2 {\n  background-color: #aed581 !important; }\n\n.light-green-text.text-lighten-2 {\n  color: #aed581 !important; }\n\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important; }\n\n.light-green-text.text-lighten-1 {\n  color: #9ccc65 !important; }\n\n.light-green.darken-1 {\n  background-color: #7cb342 !important; }\n\n.light-green-text.text-darken-1 {\n  color: #7cb342 !important; }\n\n.light-green.darken-2 {\n  background-color: #689f38 !important; }\n\n.light-green-text.text-darken-2 {\n  color: #689f38 !important; }\n\n.light-green.darken-3 {\n  background-color: #558b2f !important; }\n\n.light-green-text.text-darken-3 {\n  color: #558b2f !important; }\n\n.light-green.darken-4 {\n  background-color: #33691e !important; }\n\n.light-green-text.text-darken-4 {\n  color: #33691e !important; }\n\n.light-green.accent-1 {\n  background-color: #ccff90 !important; }\n\n.light-green-text.text-accent-1 {\n  color: #ccff90 !important; }\n\n.light-green.accent-2 {\n  background-color: #b2ff59 !important; }\n\n.light-green-text.text-accent-2 {\n  color: #b2ff59 !important; }\n\n.light-green.accent-3 {\n  background-color: #76ff03 !important; }\n\n.light-green-text.text-accent-3 {\n  color: #76ff03 !important; }\n\n.light-green.accent-4 {\n  background-color: #64dd17 !important; }\n\n.light-green-text.text-accent-4 {\n  color: #64dd17 !important; }\n\n.lime {\n  background-color: #cddc39 !important; }\n\n.lime-text {\n  color: #cddc39 !important; }\n\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important; }\n\n.lime-text.text-lighten-5 {\n  color: #f9fbe7 !important; }\n\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important; }\n\n.lime-text.text-lighten-4 {\n  color: #f0f4c3 !important; }\n\n.lime.lighten-3 {\n  background-color: #e6ee9c !important; }\n\n.lime-text.text-lighten-3 {\n  color: #e6ee9c !important; }\n\n.lime.lighten-2 {\n  background-color: #dce775 !important; }\n\n.lime-text.text-lighten-2 {\n  color: #dce775 !important; }\n\n.lime.lighten-1 {\n  background-color: #d4e157 !important; }\n\n.lime-text.text-lighten-1 {\n  color: #d4e157 !important; }\n\n.lime.darken-1 {\n  background-color: #c0ca33 !important; }\n\n.lime-text.text-darken-1 {\n  color: #c0ca33 !important; }\n\n.lime.darken-2 {\n  background-color: #afb42b !important; }\n\n.lime-text.text-darken-2 {\n  color: #afb42b !important; }\n\n.lime.darken-3 {\n  background-color: #9e9d24 !important; }\n\n.lime-text.text-darken-3 {\n  color: #9e9d24 !important; }\n\n.lime.darken-4 {\n  background-color: #827717 !important; }\n\n.lime-text.text-darken-4 {\n  color: #827717 !important; }\n\n.lime.accent-1 {\n  background-color: #f4ff81 !important; }\n\n.lime-text.text-accent-1 {\n  color: #f4ff81 !important; }\n\n.lime.accent-2 {\n  background-color: #eeff41 !important; }\n\n.lime-text.text-accent-2 {\n  color: #eeff41 !important; }\n\n.lime.accent-3 {\n  background-color: #c6ff00 !important; }\n\n.lime-text.text-accent-3 {\n  color: #c6ff00 !important; }\n\n.lime.accent-4 {\n  background-color: #aeea00 !important; }\n\n.lime-text.text-accent-4 {\n  color: #aeea00 !important; }\n\n.yellow {\n  background-color: #ffeb3b !important; }\n\n.yellow-text {\n  color: #ffeb3b !important; }\n\n.yellow.lighten-5 {\n  background-color: #fffde7 !important; }\n\n.yellow-text.text-lighten-5 {\n  color: #fffde7 !important; }\n\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important; }\n\n.yellow-text.text-lighten-4 {\n  color: #fff9c4 !important; }\n\n.yellow.lighten-3 {\n  background-color: #fff59d !important; }\n\n.yellow-text.text-lighten-3 {\n  color: #fff59d !important; }\n\n.yellow.lighten-2 {\n  background-color: #fff176 !important; }\n\n.yellow-text.text-lighten-2 {\n  color: #fff176 !important; }\n\n.yellow.lighten-1 {\n  background-color: #ffee58 !important; }\n\n.yellow-text.text-lighten-1 {\n  color: #ffee58 !important; }\n\n.yellow.darken-1 {\n  background-color: #fdd835 !important; }\n\n.yellow-text.text-darken-1 {\n  color: #fdd835 !important; }\n\n.yellow.darken-2 {\n  background-color: #fbc02d !important; }\n\n.yellow-text.text-darken-2 {\n  color: #fbc02d !important; }\n\n.yellow.darken-3 {\n  background-color: #f9a825 !important; }\n\n.yellow-text.text-darken-3 {\n  color: #f9a825 !important; }\n\n.yellow.darken-4 {\n  background-color: #f57f17 !important; }\n\n.yellow-text.text-darken-4 {\n  color: #f57f17 !important; }\n\n.yellow.accent-1 {\n  background-color: #ffff8d !important; }\n\n.yellow-text.text-accent-1 {\n  color: #ffff8d !important; }\n\n.yellow.accent-2 {\n  background-color: #ffff00 !important; }\n\n.yellow-text.text-accent-2 {\n  color: #ffff00 !important; }\n\n.yellow.accent-3 {\n  background-color: #ffea00 !important; }\n\n.yellow-text.text-accent-3 {\n  color: #ffea00 !important; }\n\n.yellow.accent-4 {\n  background-color: #ffd600 !important; }\n\n.yellow-text.text-accent-4 {\n  color: #ffd600 !important; }\n\n.amber {\n  background-color: #ffc107 !important; }\n\n.amber-text {\n  color: #ffc107 !important; }\n\n.amber.lighten-5 {\n  background-color: #fff8e1 !important; }\n\n.amber-text.text-lighten-5 {\n  color: #fff8e1 !important; }\n\n.amber.lighten-4 {\n  background-color: #ffecb3 !important; }\n\n.amber-text.text-lighten-4 {\n  color: #ffecb3 !important; }\n\n.amber.lighten-3 {\n  background-color: #ffe082 !important; }\n\n.amber-text.text-lighten-3 {\n  color: #ffe082 !important; }\n\n.amber.lighten-2 {\n  background-color: #ffd54f !important; }\n\n.amber-text.text-lighten-2 {\n  color: #ffd54f !important; }\n\n.amber.lighten-1 {\n  background-color: #ffca28 !important; }\n\n.amber-text.text-lighten-1 {\n  color: #ffca28 !important; }\n\n.amber.darken-1 {\n  background-color: #ffb300 !important; }\n\n.amber-text.text-darken-1 {\n  color: #ffb300 !important; }\n\n.amber.darken-2 {\n  background-color: #ffa000 !important; }\n\n.amber-text.text-darken-2 {\n  color: #ffa000 !important; }\n\n.amber.darken-3 {\n  background-color: #ff8f00 !important; }\n\n.amber-text.text-darken-3 {\n  color: #ff8f00 !important; }\n\n.amber.darken-4 {\n  background-color: #ff6f00 !important; }\n\n.amber-text.text-darken-4 {\n  color: #ff6f00 !important; }\n\n.amber.accent-1 {\n  background-color: #ffe57f !important; }\n\n.amber-text.text-accent-1 {\n  color: #ffe57f !important; }\n\n.amber.accent-2 {\n  background-color: #ffd740 !important; }\n\n.amber-text.text-accent-2 {\n  color: #ffd740 !important; }\n\n.amber.accent-3 {\n  background-color: #ffc400 !important; }\n\n.amber-text.text-accent-3 {\n  color: #ffc400 !important; }\n\n.amber.accent-4 {\n  background-color: #ffab00 !important; }\n\n.amber-text.text-accent-4 {\n  color: #ffab00 !important; }\n\n.orange {\n  background-color: #ff9800 !important; }\n\n.orange-text {\n  color: #ff9800 !important; }\n\n.orange.lighten-5 {\n  background-color: #fff3e0 !important; }\n\n.orange-text.text-lighten-5 {\n  color: #fff3e0 !important; }\n\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important; }\n\n.orange-text.text-lighten-4 {\n  color: #ffe0b2 !important; }\n\n.orange.lighten-3 {\n  background-color: #ffcc80 !important; }\n\n.orange-text.text-lighten-3 {\n  color: #ffcc80 !important; }\n\n.orange.lighten-2 {\n  background-color: #ffb74d !important; }\n\n.orange-text.text-lighten-2 {\n  color: #ffb74d !important; }\n\n.orange.lighten-1 {\n  background-color: #ffa726 !important; }\n\n.orange-text.text-lighten-1 {\n  color: #ffa726 !important; }\n\n.orange.darken-1 {\n  background-color: #fb8c00 !important; }\n\n.orange-text.text-darken-1 {\n  color: #fb8c00 !important; }\n\n.orange.darken-2 {\n  background-color: #f57c00 !important; }\n\n.orange-text.text-darken-2 {\n  color: #f57c00 !important; }\n\n.orange.darken-3 {\n  background-color: #ef6c00 !important; }\n\n.orange-text.text-darken-3 {\n  color: #ef6c00 !important; }\n\n.orange.darken-4 {\n  background-color: #e65100 !important; }\n\n.orange-text.text-darken-4 {\n  color: #e65100 !important; }\n\n.orange.accent-1 {\n  background-color: #ffd180 !important; }\n\n.orange-text.text-accent-1 {\n  color: #ffd180 !important; }\n\n.orange.accent-2 {\n  background-color: #ffab40 !important; }\n\n.orange-text.text-accent-2 {\n  color: #ffab40 !important; }\n\n.orange.accent-3 {\n  background-color: #ff9100 !important; }\n\n.orange-text.text-accent-3 {\n  color: #ff9100 !important; }\n\n.orange.accent-4 {\n  background-color: #ff6d00 !important; }\n\n.orange-text.text-accent-4 {\n  color: #ff6d00 !important; }\n\n.deep-orange {\n  background-color: #ff5722 !important; }\n\n.deep-orange-text {\n  color: #ff5722 !important; }\n\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important; }\n\n.deep-orange-text.text-lighten-5 {\n  color: #fbe9e7 !important; }\n\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important; }\n\n.deep-orange-text.text-lighten-4 {\n  color: #ffccbc !important; }\n\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important; }\n\n.deep-orange-text.text-lighten-3 {\n  color: #ffab91 !important; }\n\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important; }\n\n.deep-orange-text.text-lighten-2 {\n  color: #ff8a65 !important; }\n\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important; }\n\n.deep-orange-text.text-lighten-1 {\n  color: #ff7043 !important; }\n\n.deep-orange.darken-1 {\n  background-color: #f4511e !important; }\n\n.deep-orange-text.text-darken-1 {\n  color: #f4511e !important; }\n\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important; }\n\n.deep-orange-text.text-darken-2 {\n  color: #e64a19 !important; }\n\n.deep-orange.darken-3 {\n  background-color: #d84315 !important; }\n\n.deep-orange-text.text-darken-3 {\n  color: #d84315 !important; }\n\n.deep-orange.darken-4 {\n  background-color: #bf360c !important; }\n\n.deep-orange-text.text-darken-4 {\n  color: #bf360c !important; }\n\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important; }\n\n.deep-orange-text.text-accent-1 {\n  color: #ff9e80 !important; }\n\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important; }\n\n.deep-orange-text.text-accent-2 {\n  color: #ff6e40 !important; }\n\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important; }\n\n.deep-orange-text.text-accent-3 {\n  color: #ff3d00 !important; }\n\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important; }\n\n.deep-orange-text.text-accent-4 {\n  color: #dd2c00 !important; }\n\n.brown {\n  background-color: #795548 !important; }\n\n.brown-text {\n  color: #795548 !important; }\n\n.brown.lighten-5 {\n  background-color: #efebe9 !important; }\n\n.brown-text.text-lighten-5 {\n  color: #efebe9 !important; }\n\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important; }\n\n.brown-text.text-lighten-4 {\n  color: #d7ccc8 !important; }\n\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important; }\n\n.brown-text.text-lighten-3 {\n  color: #bcaaa4 !important; }\n\n.brown.lighten-2 {\n  background-color: #a1887f !important; }\n\n.brown-text.text-lighten-2 {\n  color: #a1887f !important; }\n\n.brown.lighten-1 {\n  background-color: #8d6e63 !important; }\n\n.brown-text.text-lighten-1 {\n  color: #8d6e63 !important; }\n\n.brown.darken-1 {\n  background-color: #6d4c41 !important; }\n\n.brown-text.text-darken-1 {\n  color: #6d4c41 !important; }\n\n.brown.darken-2 {\n  background-color: #5d4037 !important; }\n\n.brown-text.text-darken-2 {\n  color: #5d4037 !important; }\n\n.brown.darken-3 {\n  background-color: #4e342e !important; }\n\n.brown-text.text-darken-3 {\n  color: #4e342e !important; }\n\n.brown.darken-4 {\n  background-color: #3e2723 !important; }\n\n.brown-text.text-darken-4 {\n  color: #3e2723 !important; }\n\n.blue-grey {\n  background-color: #607d8b !important; }\n\n.blue-grey-text {\n  color: #607d8b !important; }\n\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important; }\n\n.blue-grey-text.text-lighten-5 {\n  color: #eceff1 !important; }\n\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important; }\n\n.blue-grey-text.text-lighten-4 {\n  color: #cfd8dc !important; }\n\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important; }\n\n.blue-grey-text.text-lighten-3 {\n  color: #b0bec5 !important; }\n\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important; }\n\n.blue-grey-text.text-lighten-2 {\n  color: #90a4ae !important; }\n\n.blue-grey.lighten-1 {\n  background-color: #78909c !important; }\n\n.blue-grey-text.text-lighten-1 {\n  color: #78909c !important; }\n\n.blue-grey.darken-1 {\n  background-color: #546e7a !important; }\n\n.blue-grey-text.text-darken-1 {\n  color: #546e7a !important; }\n\n.blue-grey.darken-2 {\n  background-color: #455a64 !important; }\n\n.blue-grey-text.text-darken-2 {\n  color: #455a64 !important; }\n\n.blue-grey.darken-3 {\n  background-color: #37474f !important; }\n\n.blue-grey-text.text-darken-3 {\n  color: #37474f !important; }\n\n.blue-grey.darken-4 {\n  background-color: #263238 !important; }\n\n.blue-grey-text.text-darken-4 {\n  color: #263238 !important; }\n\n.grey {\n  background-color: #9e9e9e !important; }\n\n.grey-text {\n  color: #9e9e9e !important; }\n\n.grey.lighten-5 {\n  background-color: #fafafa !important; }\n\n.grey-text.text-lighten-5 {\n  color: #fafafa !important; }\n\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important; }\n\n.grey-text.text-lighten-4 {\n  color: #f5f5f5 !important; }\n\n.grey.lighten-3 {\n  background-color: #eeeeee !important; }\n\n.grey-text.text-lighten-3 {\n  color: #eeeeee !important; }\n\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important; }\n\n.grey-text.text-lighten-2 {\n  color: #e0e0e0 !important; }\n\n.grey.lighten-1 {\n  background-color: #bdbdbd !important; }\n\n.grey-text.text-lighten-1 {\n  color: #bdbdbd !important; }\n\n.grey.darken-1 {\n  background-color: #757575 !important; }\n\n.grey-text.text-darken-1 {\n  color: #757575 !important; }\n\n.grey.darken-2 {\n  background-color: #616161 !important; }\n\n.grey-text.text-darken-2 {\n  color: #616161 !important; }\n\n.grey.darken-3 {\n  background-color: #424242 !important; }\n\n.grey-text.text-darken-3 {\n  color: #424242 !important; }\n\n.grey.darken-4 {\n  background-color: #212121 !important; }\n\n.grey-text.text-darken-4 {\n  color: #212121 !important; }\n\n.black {\n  background-color: #000000 !important; }\n\n.black-text {\n  color: #000000 !important; }\n\n.white {\n  background-color: #FFFFFF !important; }\n\n.white-text {\n  color: #FFFFFF !important; }\n\n.transparent {\n  background-color: transparent !important; }\n\n.transparent-text {\n  color: transparent !important; }\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS and IE text size adjust after device orientation change,\r\n *    without disabling user zoom.\r\n */\n\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Remove default margin.\r\n */\n\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\r\n */\n\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\n\na {\n  background-color: transparent; }\n\n/**\r\n * Improve readability of focused elements when they are also in an\r\n * active/hover state.\r\n */\n\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\n\nb,\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\n\ndfn {\n  font-style: italic; }\n\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\n\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\n\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\r\n   ========================================================================== */\n\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\n\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\n\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\n\nfigure {\n  margin: 1em 40px; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Contain overflow in all browsers.\r\n */\n\npre {\n  overflow: auto; }\n\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\r\n   ========================================================================== */\n\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\n\nbutton {\n  overflow: visible; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\n\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\n\ninput {\n  line-height: normal; }\n\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\r\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\n\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\n\ntextarea {\n  overflow: auto; }\n\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\n\noptgroup {\n  font-weight: bold; }\n\n/* Tables\r\n   ========================================================================== */\n\n/**\r\n * Remove most spacing between table cells.\r\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\nul:not(.browser-default) {\n  padding-left: 0;\n  list-style-type: none; }\n\nul:not(.browser-default) > li {\n    list-style-type: none; }\n\na {\n  color: #039be5;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent; }\n\n.valign-wrapper {\n  display: flex;\n  align-items: center; }\n\n.clearfix {\n  clear: both; }\n\n.z-depth-0 {\n  box-shadow: none !important; }\n\n.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-floating, .dropdown-content, .collapsible, .side-nav {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); }\n\n.z-depth-1-half, .btn:hover, .btn-large:hover, .btn-floating:hover {\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2); }\n\n.z-depth-2 {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3); }\n\n.z-depth-3 {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3); }\n\n.z-depth-4, .modal {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3); }\n\n.z-depth-5 {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3); }\n\n.hoverable {\n  transition: box-shadow .25s; }\n\n.hoverable:hover {\n    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e0e0e0; }\n\nblockquote {\n  margin: 20px 0;\n  padding-left: 1.5rem;\n  border-left: 5px solid #ee6e73; }\n\ni {\n  line-height: inherit; }\n\ni.left {\n    float: left;\n    margin-right: 15px; }\n\ni.right {\n    float: right;\n    margin-left: 15px; }\n\ni.tiny {\n    font-size: 1rem; }\n\ni.small {\n    font-size: 2rem; }\n\ni.medium {\n    font-size: 4rem; }\n\ni.large {\n    font-size: 6rem; }\n\nimg.responsive-img,\nvideo.responsive-video {\n  max-width: 100%;\n  height: auto; }\n\n.pagination li {\n  display: inline-block;\n  border-radius: 2px;\n  text-align: center;\n  vertical-align: top;\n  height: 30px; }\n\n.pagination li a {\n    color: #444;\n    display: inline-block;\n    font-size: 1.2rem;\n    padding: 0 10px;\n    line-height: 30px; }\n\n.pagination li.active a {\n    color: #fff; }\n\n.pagination li.active {\n    background-color: #ee6e73; }\n\n.pagination li.disabled a {\n    cursor: default;\n    color: #999; }\n\n.pagination li i {\n    font-size: 2rem; }\n\n.pagination li.pages ul li {\n  display: inline-block;\n  float: none; }\n\n@media only screen and (max-width: 992px) {\n  .pagination {\n    width: 100%; }\n    .pagination li.prev,\n    .pagination li.next {\n      width: 10%; }\n    .pagination li.pages {\n      width: 80%;\n      overflow: hidden;\n      white-space: nowrap; } }\n\n.breadcrumb {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.7); }\n\n.breadcrumb i,\n  .breadcrumb [class^=\"mdi-\"], .breadcrumb [class*=\"mdi-\"],\n  .breadcrumb i.material-icons {\n    display: inline-block;\n    float: left;\n    font-size: 24px; }\n\n.breadcrumb:before {\n    content: '\\E5CC';\n    color: rgba(255, 255, 255, 0.7);\n    vertical-align: top;\n    display: inline-block;\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 25px;\n    margin: 0 10px 0 8px;\n    -webkit-font-smoothing: antialiased; }\n\n.breadcrumb:first-child:before {\n    display: none; }\n\n.breadcrumb:last-child {\n    color: #fff; }\n\n.parallax-container {\n  position: relative;\n  overflow: hidden;\n  height: 500px; }\n\n.parallax-container .parallax {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1; }\n\n.parallax-container .parallax img {\n      display: none;\n      position: absolute;\n      left: 50%;\n      bottom: 0;\n      min-width: 100%;\n      min-height: 100%;\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n\n.pin-top, .pin-bottom {\n  position: relative; }\n\n.pinned {\n  position: fixed !important; }\n\n/*********************\r\n  Transition Classes\r\n**********************/\n\nul.staggered-list li {\n  opacity: 0; }\n\n.fade-in {\n  opacity: 0;\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%; }\n\n/*********************\r\n  Media Query Classes\r\n**********************/\n\n@media only screen and (max-width: 600px) {\n  .hide-on-small-only, .hide-on-small-and-down {\n    display: none !important; } }\n\n@media only screen and (max-width: 992px) {\n  .hide-on-med-and-down {\n    display: none !important; } }\n\n@media only screen and (min-width: 601px) {\n  .hide-on-med-and-up {\n    display: none !important; } }\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .hide-on-med-only {\n    display: none !important; } }\n\n@media only screen and (min-width: 993px) {\n  .hide-on-large-only {\n    display: none !important; } }\n\n@media only screen and (min-width: 993px) {\n  .show-on-large {\n    display: block !important; } }\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .show-on-medium {\n    display: block !important; } }\n\n@media only screen and (max-width: 600px) {\n  .show-on-small {\n    display: block !important; } }\n\n@media only screen and (min-width: 601px) {\n  .show-on-medium-and-up {\n    display: block !important; } }\n\n@media only screen and (max-width: 992px) {\n  .show-on-medium-and-down {\n    display: block !important; } }\n\n@media only screen and (max-width: 600px) {\n  .center-on-small-only {\n    text-align: center; } }\n\n.page-footer {\n  padding-top: 20px;\n  color: #fff;\n  background-color: #ee6e73; }\n\n.page-footer .footer-copyright {\n    overflow: hidden;\n    min-height: 50px;\n    display: flex;\n    align-items: center;\n    padding: 10px 0px;\n    color: rgba(255, 255, 255, 0.8);\n    background-color: rgba(51, 51, 51, 0.08); }\n\ntable, th, td {\n  border: none; }\n\ntable {\n  width: 100%;\n  display: table; }\n\ntable.bordered > thead > tr,\n  table.bordered > tbody > tr {\n    border-bottom: 1px solid #d0d0d0; }\n\ntable.striped > tbody > tr:nth-child(odd) {\n    background-color: #f2f2f2; }\n\ntable.striped > tbody > tr > td {\n    border-radius: 0; }\n\ntable.highlight > tbody > tr {\n    transition: background-color .25s ease; }\n\ntable.highlight > tbody > tr:hover {\n      background-color: #f2f2f2; }\n\ntable.centered thead tr th, table.centered tbody tr td {\n    text-align: center; }\n\nthead {\n  border-bottom: 1px solid #d0d0d0; }\n\ntd,\nth {\n  padding: 15px 5px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  border-radius: 2px; }\n\n@media only screen and (max-width: 992px) {\n  table.responsive-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: block;\n    position: relative;\n    /* sort out borders */ }\n    table.responsive-table td:empty:before {\n      content: '\\00a0'; }\n    table.responsive-table th,\n    table.responsive-table td {\n      margin: 0;\n      vertical-align: top; }\n    table.responsive-table th {\n      text-align: left; }\n    table.responsive-table thead {\n      display: block;\n      float: left; }\n      table.responsive-table thead tr {\n        display: block;\n        padding: 0 10px 0 0; }\n        table.responsive-table thead tr th::before {\n          content: \"\\00a0\"; }\n    table.responsive-table tbody {\n      display: block;\n      width: auto;\n      position: relative;\n      overflow-x: auto;\n      white-space: nowrap; }\n      table.responsive-table tbody tr {\n        display: inline-block;\n        vertical-align: top; }\n    table.responsive-table th {\n      display: block;\n      text-align: right; }\n    table.responsive-table td {\n      display: block;\n      min-height: 1.25em;\n      text-align: left; }\n    table.responsive-table tr {\n      padding: 0 10px; }\n    table.responsive-table thead {\n      border: 0;\n      border-right: 1px solid #d0d0d0; }\n    table.responsive-table.bordered th {\n      border-bottom: 0;\n      border-left: 0; }\n    table.responsive-table.bordered td {\n      border-left: 0;\n      border-right: 0;\n      border-bottom: 0; }\n    table.responsive-table.bordered tr {\n      border: 0; }\n    table.responsive-table.bordered tbody tr {\n      border-right: 1px solid #d0d0d0; } }\n\n.collection {\n  margin: 0.5rem 0 1rem 0;\n  border: 1px solid #e0e0e0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative; }\n\n.collection .collection-item {\n    background-color: #fff;\n    line-height: 1.5rem;\n    padding: 10px 20px;\n    margin: 0;\n    border-bottom: 1px solid #e0e0e0; }\n\n.collection .collection-item.avatar {\n      min-height: 84px;\n      padding-left: 72px;\n      position: relative; }\n\n.collection .collection-item.avatar:not(.circle-clipper) > .circle,\n      .collection .collection-item.avatar :not(.circle-clipper) > .circle {\n        position: absolute;\n        width: 42px;\n        height: 42px;\n        overflow: hidden;\n        left: 15px;\n        display: inline-block;\n        vertical-align: middle; }\n\n.collection .collection-item.avatar i.circle {\n        font-size: 18px;\n        line-height: 42px;\n        color: #fff;\n        background-color: #999;\n        text-align: center; }\n\n.collection .collection-item.avatar .title {\n        font-size: 16px; }\n\n.collection .collection-item.avatar p {\n        margin: 0; }\n\n.collection .collection-item.avatar .secondary-content {\n        position: absolute;\n        top: 16px;\n        right: 16px; }\n\n.collection .collection-item:last-child {\n      border-bottom: none; }\n\n.collection .collection-item.active {\n      background-color: #26a69a;\n      color: #eafaf9; }\n\n.collection .collection-item.active .secondary-content {\n        color: #fff; }\n\n.collection a.collection-item {\n    display: block;\n    transition: .25s;\n    color: #26a69a; }\n\n.collection a.collection-item:not(.active):hover {\n      background-color: #ddd; }\n\n.collection.with-header .collection-header {\n    background-color: #fff;\n    border-bottom: 1px solid #e0e0e0;\n    padding: 10px 20px; }\n\n.collection.with-header .collection-item {\n    padding-left: 30px; }\n\n.collection.with-header .collection-item.avatar {\n    padding-left: 72px; }\n\n.secondary-content {\n  float: right;\n  color: #26a69a; }\n\n.collapsible .collection {\n  margin: 0;\n  border: none; }\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden; }\n\n.video-container iframe, .video-container object, .video-container embed {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\n.progress {\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: #acece6;\n  border-radius: 2px;\n  margin: 0.5rem 0 1rem 0;\n  overflow: hidden; }\n\n.progress .determinate {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    background-color: #26a69a;\n    transition: width .3s linear; }\n\n.progress .indeterminate {\n    background-color: #26a69a; }\n\n.progress .indeterminate:before {\n      content: '';\n      position: absolute;\n      background-color: inherit;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      will-change: left, right;\n      -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n              animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite; }\n\n.progress .indeterminate:after {\n      content: '';\n      position: absolute;\n      background-color: inherit;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      will-change: left, right;\n      -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n              animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      -webkit-animation-delay: 1.15s;\n              animation-delay: 1.15s; }\n\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n\n/*******************\r\n  Utility Classes\r\n*******************/\n\n.hide {\n  display: none !important; }\n\n.left-align {\n  text-align: left; }\n\n.right-align {\n  text-align: right; }\n\n.center, .center-align {\n  text-align: center; }\n\n.left {\n  float: left !important; }\n\n.right {\n  float: right !important; }\n\n.no-select, input[type=range],\ninput[type=range] + .thumb {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.circle {\n  border-radius: 50%; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.truncate {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.no-padding {\n  padding: 0 !important; }\n\nspan.badge {\n  min-width: 3rem;\n  padding: 0 6px;\n  margin-left: 14px;\n  text-align: center;\n  font-size: 1rem;\n  line-height: 22px;\n  height: 22px;\n  color: #757575;\n  float: right;\n  box-sizing: border-box; }\n\nspan.badge.new {\n    font-weight: 300;\n    font-size: 0.8rem;\n    color: #fff;\n    background-color: #26a69a;\n    border-radius: 2px; }\n\nspan.badge.new:after {\n    content: \" new\"; }\n\nspan.badge[data-badge-caption]::after {\n    content: \" \" attr(data-badge-caption); }\n\nnav ul a span.badge {\n  display: inline-block;\n  float: none;\n  margin-left: 4px;\n  line-height: 22px;\n  height: 22px;\n  -webkit-font-smoothing: auto; }\n\n.collection-item span.badge {\n  margin-top: calc(0.75rem - 11px); }\n\n.collapsible span.badge {\n  margin-left: auto; }\n\n.side-nav span.badge {\n  margin-top: calc(24px - 11px); }\n\n/* This is needed for some mobile phones to display the Google Icon font properly */\n\n.material-icons {\n  text-rendering: optimizeLegibility;\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga'; }\n\n.container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%; }\n\n@media only screen and (min-width: 601px) {\n  .container {\n    width: 85%; } }\n\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 70%; } }\n\n.container .row {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem; }\n\n.section {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n\n.section.no-pad {\n    padding: 0; }\n\n.section.no-pad-bot {\n    padding-bottom: 0; }\n\n.section.no-pad-top {\n    padding-top: 0; }\n\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px; }\n\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.row .col {\n    float: left;\n    box-sizing: border-box;\n    padding: 0 0.75rem;\n    min-height: 1px; }\n\n.row .col[class*=\"push-\"], .row .col[class*=\"pull-\"] {\n      position: relative; }\n\n.row .col.s1 {\n      width: 8.33333333%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s2 {\n      width: 16.66666667%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s3 {\n      width: 25%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s4 {\n      width: 33.33333333%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s5 {\n      width: 41.66666667%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s6 {\n      width: 50%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s7 {\n      width: 58.33333333%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s8 {\n      width: 66.66666667%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s9 {\n      width: 75%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s10 {\n      width: 83.33333333%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s11 {\n      width: 91.66666667%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s12 {\n      width: 100%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.offset-s1 {\n      margin-left: 8.33333333%; }\n\n.row .col.pull-s1 {\n      right: 8.33333333%; }\n\n.row .col.push-s1 {\n      left: 8.33333333%; }\n\n.row .col.offset-s2 {\n      margin-left: 16.66666667%; }\n\n.row .col.pull-s2 {\n      right: 16.66666667%; }\n\n.row .col.push-s2 {\n      left: 16.66666667%; }\n\n.row .col.offset-s3 {\n      margin-left: 25%; }\n\n.row .col.pull-s3 {\n      right: 25%; }\n\n.row .col.push-s3 {\n      left: 25%; }\n\n.row .col.offset-s4 {\n      margin-left: 33.33333333%; }\n\n.row .col.pull-s4 {\n      right: 33.33333333%; }\n\n.row .col.push-s4 {\n      left: 33.33333333%; }\n\n.row .col.offset-s5 {\n      margin-left: 41.66666667%; }\n\n.row .col.pull-s5 {\n      right: 41.66666667%; }\n\n.row .col.push-s5 {\n      left: 41.66666667%; }\n\n.row .col.offset-s6 {\n      margin-left: 50%; }\n\n.row .col.pull-s6 {\n      right: 50%; }\n\n.row .col.push-s6 {\n      left: 50%; }\n\n.row .col.offset-s7 {\n      margin-left: 58.33333333%; }\n\n.row .col.pull-s7 {\n      right: 58.33333333%; }\n\n.row .col.push-s7 {\n      left: 58.33333333%; }\n\n.row .col.offset-s8 {\n      margin-left: 66.66666667%; }\n\n.row .col.pull-s8 {\n      right: 66.66666667%; }\n\n.row .col.push-s8 {\n      left: 66.66666667%; }\n\n.row .col.offset-s9 {\n      margin-left: 75%; }\n\n.row .col.pull-s9 {\n      right: 75%; }\n\n.row .col.push-s9 {\n      left: 75%; }\n\n.row .col.offset-s10 {\n      margin-left: 83.33333333%; }\n\n.row .col.pull-s10 {\n      right: 83.33333333%; }\n\n.row .col.push-s10 {\n      left: 83.33333333%; }\n\n.row .col.offset-s11 {\n      margin-left: 91.66666667%; }\n\n.row .col.pull-s11 {\n      right: 91.66666667%; }\n\n.row .col.push-s11 {\n      left: 91.66666667%; }\n\n.row .col.offset-s12 {\n      margin-left: 100%; }\n\n.row .col.pull-s12 {\n      right: 100%; }\n\n.row .col.push-s12 {\n      left: 100%; }\n\n@media only screen and (min-width: 601px) {\n      .row .col.m1 {\n        width: 8.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m2 {\n        width: 16.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m3 {\n        width: 25%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m4 {\n        width: 33.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m5 {\n        width: 41.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m6 {\n        width: 50%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m7 {\n        width: 58.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m8 {\n        width: 66.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m9 {\n        width: 75%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m10 {\n        width: 83.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m11 {\n        width: 91.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m12 {\n        width: 100%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.offset-m1 {\n        margin-left: 8.33333333%; }\n      .row .col.pull-m1 {\n        right: 8.33333333%; }\n      .row .col.push-m1 {\n        left: 8.33333333%; }\n      .row .col.offset-m2 {\n        margin-left: 16.66666667%; }\n      .row .col.pull-m2 {\n        right: 16.66666667%; }\n      .row .col.push-m2 {\n        left: 16.66666667%; }\n      .row .col.offset-m3 {\n        margin-left: 25%; }\n      .row .col.pull-m3 {\n        right: 25%; }\n      .row .col.push-m3 {\n        left: 25%; }\n      .row .col.offset-m4 {\n        margin-left: 33.33333333%; }\n      .row .col.pull-m4 {\n        right: 33.33333333%; }\n      .row .col.push-m4 {\n        left: 33.33333333%; }\n      .row .col.offset-m5 {\n        margin-left: 41.66666667%; }\n      .row .col.pull-m5 {\n        right: 41.66666667%; }\n      .row .col.push-m5 {\n        left: 41.66666667%; }\n      .row .col.offset-m6 {\n        margin-left: 50%; }\n      .row .col.pull-m6 {\n        right: 50%; }\n      .row .col.push-m6 {\n        left: 50%; }\n      .row .col.offset-m7 {\n        margin-left: 58.33333333%; }\n      .row .col.pull-m7 {\n        right: 58.33333333%; }\n      .row .col.push-m7 {\n        left: 58.33333333%; }\n      .row .col.offset-m8 {\n        margin-left: 66.66666667%; }\n      .row .col.pull-m8 {\n        right: 66.66666667%; }\n      .row .col.push-m8 {\n        left: 66.66666667%; }\n      .row .col.offset-m9 {\n        margin-left: 75%; }\n      .row .col.pull-m9 {\n        right: 75%; }\n      .row .col.push-m9 {\n        left: 75%; }\n      .row .col.offset-m10 {\n        margin-left: 83.33333333%; }\n      .row .col.pull-m10 {\n        right: 83.33333333%; }\n      .row .col.push-m10 {\n        left: 83.33333333%; }\n      .row .col.offset-m11 {\n        margin-left: 91.66666667%; }\n      .row .col.pull-m11 {\n        right: 91.66666667%; }\n      .row .col.push-m11 {\n        left: 91.66666667%; }\n      .row .col.offset-m12 {\n        margin-left: 100%; }\n      .row .col.pull-m12 {\n        right: 100%; }\n      .row .col.push-m12 {\n        left: 100%; } }\n\n@media only screen and (min-width: 993px) {\n      .row .col.l1 {\n        width: 8.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l2 {\n        width: 16.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l3 {\n        width: 25%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l4 {\n        width: 33.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l5 {\n        width: 41.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l6 {\n        width: 50%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l7 {\n        width: 58.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l8 {\n        width: 66.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l9 {\n        width: 75%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l10 {\n        width: 83.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l11 {\n        width: 91.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l12 {\n        width: 100%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.offset-l1 {\n        margin-left: 8.33333333%; }\n      .row .col.pull-l1 {\n        right: 8.33333333%; }\n      .row .col.push-l1 {\n        left: 8.33333333%; }\n      .row .col.offset-l2 {\n        margin-left: 16.66666667%; }\n      .row .col.pull-l2 {\n        right: 16.66666667%; }\n      .row .col.push-l2 {\n        left: 16.66666667%; }\n      .row .col.offset-l3 {\n        margin-left: 25%; }\n      .row .col.pull-l3 {\n        right: 25%; }\n      .row .col.push-l3 {\n        left: 25%; }\n      .row .col.offset-l4 {\n        margin-left: 33.33333333%; }\n      .row .col.pull-l4 {\n        right: 33.33333333%; }\n      .row .col.push-l4 {\n        left: 33.33333333%; }\n      .row .col.offset-l5 {\n        margin-left: 41.66666667%; }\n      .row .col.pull-l5 {\n        right: 41.66666667%; }\n      .row .col.push-l5 {\n        left: 41.66666667%; }\n      .row .col.offset-l6 {\n        margin-left: 50%; }\n      .row .col.pull-l6 {\n        right: 50%; }\n      .row .col.push-l6 {\n        left: 50%; }\n      .row .col.offset-l7 {\n        margin-left: 58.33333333%; }\n      .row .col.pull-l7 {\n        right: 58.33333333%; }\n      .row .col.push-l7 {\n        left: 58.33333333%; }\n      .row .col.offset-l8 {\n        margin-left: 66.66666667%; }\n      .row .col.pull-l8 {\n        right: 66.66666667%; }\n      .row .col.push-l8 {\n        left: 66.66666667%; }\n      .row .col.offset-l9 {\n        margin-left: 75%; }\n      .row .col.pull-l9 {\n        right: 75%; }\n      .row .col.push-l9 {\n        left: 75%; }\n      .row .col.offset-l10 {\n        margin-left: 83.33333333%; }\n      .row .col.pull-l10 {\n        right: 83.33333333%; }\n      .row .col.push-l10 {\n        left: 83.33333333%; }\n      .row .col.offset-l11 {\n        margin-left: 91.66666667%; }\n      .row .col.pull-l11 {\n        right: 91.66666667%; }\n      .row .col.push-l11 {\n        left: 91.66666667%; }\n      .row .col.offset-l12 {\n        margin-left: 100%; }\n      .row .col.pull-l12 {\n        right: 100%; }\n      .row .col.push-l12 {\n        left: 100%; } }\n\n@media only screen and (min-width: 1201px) {\n      .row .col.xl1 {\n        width: 8.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl2 {\n        width: 16.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl3 {\n        width: 25%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl4 {\n        width: 33.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl5 {\n        width: 41.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl6 {\n        width: 50%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl7 {\n        width: 58.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl8 {\n        width: 66.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl9 {\n        width: 75%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl10 {\n        width: 83.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl11 {\n        width: 91.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl12 {\n        width: 100%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.offset-xl1 {\n        margin-left: 8.33333333%; }\n      .row .col.pull-xl1 {\n        right: 8.33333333%; }\n      .row .col.push-xl1 {\n        left: 8.33333333%; }\n      .row .col.offset-xl2 {\n        margin-left: 16.66666667%; }\n      .row .col.pull-xl2 {\n        right: 16.66666667%; }\n      .row .col.push-xl2 {\n        left: 16.66666667%; }\n      .row .col.offset-xl3 {\n        margin-left: 25%; }\n      .row .col.pull-xl3 {\n        right: 25%; }\n      .row .col.push-xl3 {\n        left: 25%; }\n      .row .col.offset-xl4 {\n        margin-left: 33.33333333%; }\n      .row .col.pull-xl4 {\n        right: 33.33333333%; }\n      .row .col.push-xl4 {\n        left: 33.33333333%; }\n      .row .col.offset-xl5 {\n        margin-left: 41.66666667%; }\n      .row .col.pull-xl5 {\n        right: 41.66666667%; }\n      .row .col.push-xl5 {\n        left: 41.66666667%; }\n      .row .col.offset-xl6 {\n        margin-left: 50%; }\n      .row .col.pull-xl6 {\n        right: 50%; }\n      .row .col.push-xl6 {\n        left: 50%; }\n      .row .col.offset-xl7 {\n        margin-left: 58.33333333%; }\n      .row .col.pull-xl7 {\n        right: 58.33333333%; }\n      .row .col.push-xl7 {\n        left: 58.33333333%; }\n      .row .col.offset-xl8 {\n        margin-left: 66.66666667%; }\n      .row .col.pull-xl8 {\n        right: 66.66666667%; }\n      .row .col.push-xl8 {\n        left: 66.66666667%; }\n      .row .col.offset-xl9 {\n        margin-left: 75%; }\n      .row .col.pull-xl9 {\n        right: 75%; }\n      .row .col.push-xl9 {\n        left: 75%; }\n      .row .col.offset-xl10 {\n        margin-left: 83.33333333%; }\n      .row .col.pull-xl10 {\n        right: 83.33333333%; }\n      .row .col.push-xl10 {\n        left: 83.33333333%; }\n      .row .col.offset-xl11 {\n        margin-left: 91.66666667%; }\n      .row .col.pull-xl11 {\n        right: 91.66666667%; }\n      .row .col.push-xl11 {\n        left: 91.66666667%; }\n      .row .col.offset-xl12 {\n        margin-left: 100%; }\n      .row .col.pull-xl12 {\n        right: 100%; }\n      .row .col.push-xl12 {\n        left: 100%; } }\n\nnav {\n  color: #fff;\n  background-color: #ee6e73;\n  width: 100%;\n  height: 56px;\n  line-height: 56px; }\n\nnav.nav-extended {\n    height: auto; }\n\nnav.nav-extended .nav-wrapper {\n      min-height: 56px;\n      height: auto; }\n\nnav.nav-extended .nav-content {\n      position: relative;\n      line-height: normal; }\n\nnav a {\n    color: #fff; }\n\nnav i,\n  nav [class^=\"mdi-\"], nav [class*=\"mdi-\"],\n  nav i.material-icons {\n    display: block;\n    font-size: 24px;\n    height: 56px;\n    line-height: 56px; }\n\nnav .nav-wrapper {\n    position: relative;\n    height: 100%; }\n\n@media only screen and (min-width: 993px) {\n    nav a.button-collapse {\n      display: none; } }\n\nnav .button-collapse {\n    float: left;\n    position: relative;\n    z-index: 1;\n    height: 56px;\n    margin: 0 18px; }\n\nnav .button-collapse i {\n      height: 56px;\n      line-height: 56px; }\n\nnav .brand-logo {\n    position: absolute;\n    color: #fff;\n    display: inline-block;\n    font-size: 2.1rem;\n    padding: 0; }\n\nnav .brand-logo.center {\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n\n@media only screen and (max-width: 992px) {\n      nav .brand-logo {\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%); }\n        nav .brand-logo.left, nav .brand-logo.right {\n          padding: 0;\n          -webkit-transform: none;\n                  transform: none; }\n        nav .brand-logo.left {\n          left: 0.5rem; }\n        nav .brand-logo.right {\n          right: 0.5rem;\n          left: auto; } }\n\nnav .brand-logo.right {\n      right: 0.5rem;\n      padding: 0; }\n\nnav .brand-logo i,\n    nav .brand-logo [class^=\"mdi-\"], nav .brand-logo [class*=\"mdi-\"],\n    nav .brand-logo i.material-icons {\n      float: left;\n      margin-right: 15px; }\n\nnav .nav-title {\n    display: inline-block;\n    font-size: 32px;\n    padding: 28px 0; }\n\nnav ul {\n    margin: 0; }\n\nnav ul li {\n      transition: background-color .3s;\n      float: left;\n      padding: 0; }\n\nnav ul li.active {\n        background-color: rgba(0, 0, 0, 0.1); }\n\nnav ul a {\n      transition: background-color .3s;\n      font-size: 1rem;\n      color: #fff;\n      display: block;\n      padding: 0 15px;\n      cursor: pointer; }\n\nnav ul a.btn, nav ul a.btn-large, nav ul a.btn-large, nav ul a.btn-flat, nav ul a.btn-floating {\n        margin-top: -2px;\n        margin-left: 15px;\n        margin-right: 15px; }\n\nnav ul a.btn > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-flat > .material-icons, nav ul a.btn-floating > .material-icons {\n          height: inherit;\n          line-height: inherit; }\n\nnav ul a:hover {\n        background-color: rgba(0, 0, 0, 0.1); }\n\nnav ul.left {\n      float: left; }\n\nnav form {\n    height: 100%; }\n\nnav .input-field {\n    margin: 0;\n    height: 100%; }\n\nnav .input-field input {\n      height: 100%;\n      font-size: 1.2rem;\n      border: none;\n      padding-left: 2rem; }\n\nnav .input-field input:focus, nav .input-field input[type=text]:valid, nav .input-field input[type=password]:valid, nav .input-field input[type=email]:valid, nav .input-field input[type=url]:valid, nav .input-field input[type=date]:valid {\n        border: none;\n        box-shadow: none; }\n\nnav .input-field label {\n      top: 0;\n      left: 0; }\n\nnav .input-field label i {\n        color: rgba(255, 255, 255, 0.7);\n        transition: color .3s; }\n\nnav .input-field label.active i {\n        color: #fff; }\n\n.navbar-fixed {\n  position: relative;\n  height: 56px;\n  z-index: 997; }\n\n.navbar-fixed nav {\n    position: fixed; }\n\n@media only screen and (min-width: 601px) {\n  nav.nav-extended .nav-wrapper {\n    min-height: 64px; }\n  nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {\n    height: 64px;\n    line-height: 64px; }\n  .navbar-fixed {\n    height: 64px; } }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Thin), url('Roboto-Thin.woff2') format(\"woff2\"), url('Roboto-Thin.woff') format(\"woff\");\n  font-weight: 100; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Light), url('Roboto-Light.woff2') format(\"woff2\"), url('Roboto-Light.woff') format(\"woff\");\n  font-weight: 300; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Regular), url('Roboto-Regular.woff2') format(\"woff2\"), url('Roboto-Regular.woff') format(\"woff\");\n  font-weight: 400; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Medium), url('Roboto-Medium.woff2') format(\"woff2\"), url('Roboto-Medium.woff') format(\"woff\");\n  font-weight: 500; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Bold), url('Roboto-Bold.woff2') format(\"woff2\"), url('Roboto-Bold.woff') format(\"woff\");\n  font-weight: 700; }\n\na {\n  text-decoration: none; }\n\nhtml {\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.87); }\n\n@media only screen and (min-width: 0) {\n    html {\n      font-size: 14px; } }\n\n@media only screen and (min-width: 992px) {\n    html {\n      font-size: 14.5px; } }\n\n@media only screen and (min-width: 1200px) {\n    html {\n      font-size: 15px; } }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400;\n  line-height: 1.1; }\n\nh1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\n  font-weight: inherit; }\n\nh1 {\n  font-size: 4.2rem;\n  line-height: 110%;\n  margin: 2.1rem 0 1.68rem 0; }\n\nh2 {\n  font-size: 3.56rem;\n  line-height: 110%;\n  margin: 1.78rem 0 1.424rem 0; }\n\nh3 {\n  font-size: 2.92rem;\n  line-height: 110%;\n  margin: 1.46rem 0 1.168rem 0; }\n\nh4 {\n  font-size: 2.28rem;\n  line-height: 110%;\n  margin: 1.14rem 0 0.912rem 0; }\n\nh5 {\n  font-size: 1.64rem;\n  line-height: 110%;\n  margin: 0.82rem 0 0.656rem 0; }\n\nh6 {\n  font-size: 1rem;\n  line-height: 110%;\n  margin: 0.5rem 0 0.4rem 0; }\n\nem {\n  font-style: italic; }\n\nstrong {\n  font-weight: 500; }\n\nsmall {\n  font-size: 75%; }\n\n.light, .page-footer .footer-copyright {\n  font-weight: 300; }\n\n.thin {\n  font-weight: 200; }\n\n.flow-text {\n  font-weight: 300; }\n\n@media only screen and (min-width: 360px) {\n    .flow-text {\n      font-size: 1.2rem; } }\n\n@media only screen and (min-width: 390px) {\n    .flow-text {\n      font-size: 1.224rem; } }\n\n@media only screen and (min-width: 420px) {\n    .flow-text {\n      font-size: 1.248rem; } }\n\n@media only screen and (min-width: 450px) {\n    .flow-text {\n      font-size: 1.272rem; } }\n\n@media only screen and (min-width: 480px) {\n    .flow-text {\n      font-size: 1.296rem; } }\n\n@media only screen and (min-width: 510px) {\n    .flow-text {\n      font-size: 1.32rem; } }\n\n@media only screen and (min-width: 540px) {\n    .flow-text {\n      font-size: 1.344rem; } }\n\n@media only screen and (min-width: 570px) {\n    .flow-text {\n      font-size: 1.368rem; } }\n\n@media only screen and (min-width: 600px) {\n    .flow-text {\n      font-size: 1.392rem; } }\n\n@media only screen and (min-width: 630px) {\n    .flow-text {\n      font-size: 1.416rem; } }\n\n@media only screen and (min-width: 660px) {\n    .flow-text {\n      font-size: 1.44rem; } }\n\n@media only screen and (min-width: 690px) {\n    .flow-text {\n      font-size: 1.464rem; } }\n\n@media only screen and (min-width: 720px) {\n    .flow-text {\n      font-size: 1.488rem; } }\n\n@media only screen and (min-width: 750px) {\n    .flow-text {\n      font-size: 1.512rem; } }\n\n@media only screen and (min-width: 780px) {\n    .flow-text {\n      font-size: 1.536rem; } }\n\n@media only screen and (min-width: 810px) {\n    .flow-text {\n      font-size: 1.56rem; } }\n\n@media only screen and (min-width: 840px) {\n    .flow-text {\n      font-size: 1.584rem; } }\n\n@media only screen and (min-width: 870px) {\n    .flow-text {\n      font-size: 1.608rem; } }\n\n@media only screen and (min-width: 900px) {\n    .flow-text {\n      font-size: 1.632rem; } }\n\n@media only screen and (min-width: 930px) {\n    .flow-text {\n      font-size: 1.656rem; } }\n\n@media only screen and (min-width: 960px) {\n    .flow-text {\n      font-size: 1.68rem; } }\n\n@media only screen and (max-width: 360px) {\n    .flow-text {\n      font-size: 1.2rem; } }\n\n.scale-transition {\n  transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important; }\n\n.scale-transition.scale-out {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    transition: -webkit-transform .2s !important;\n    transition: transform .2s !important;\n    transition: transform .2s, -webkit-transform .2s !important; }\n\n.scale-transition.scale-in {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n\n.card-panel {\n  transition: box-shadow .25s;\n  padding: 24px;\n  margin: 0.5rem 0 1rem 0;\n  border-radius: 2px;\n  background-color: #fff; }\n\n.card {\n  position: relative;\n  margin: 0.5rem 0 1rem 0;\n  background-color: #fff;\n  transition: box-shadow .25s;\n  border-radius: 2px; }\n\n.card .card-title {\n    font-size: 24px;\n    font-weight: 300; }\n\n.card .card-title.activator {\n      cursor: pointer; }\n\n.card.small, .card.medium, .card.large {\n    position: relative; }\n\n.card.small .card-image, .card.medium .card-image, .card.large .card-image {\n      max-height: 60%;\n      overflow: hidden; }\n\n.card.small .card-image + .card-content, .card.medium .card-image + .card-content, .card.large .card-image + .card-content {\n      max-height: 40%; }\n\n.card.small .card-content, .card.medium .card-content, .card.large .card-content {\n      max-height: 100%;\n      overflow: hidden; }\n\n.card.small .card-action, .card.medium .card-action, .card.large .card-action {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; }\n\n.card.small {\n    height: 300px; }\n\n.card.medium {\n    height: 400px; }\n\n.card.large {\n    height: 500px; }\n\n.card.horizontal {\n    display: flex; }\n\n.card.horizontal.small .card-image, .card.horizontal.medium .card-image, .card.horizontal.large .card-image {\n      height: 100%;\n      max-height: none;\n      overflow: visible; }\n\n.card.horizontal.small .card-image img, .card.horizontal.medium .card-image img, .card.horizontal.large .card-image img {\n        height: 100%; }\n\n.card.horizontal .card-image {\n      max-width: 50%; }\n\n.card.horizontal .card-image img {\n        border-radius: 2px 0 0 2px;\n        max-width: 100%;\n        width: auto; }\n\n.card.horizontal .card-stacked {\n      display: flex;\n      flex-direction: column;\n      flex: 1;\n      position: relative; }\n\n.card.horizontal .card-stacked .card-content {\n        flex-grow: 1; }\n\n.card.sticky-action .card-action {\n    z-index: 2; }\n\n.card.sticky-action .card-reveal {\n    z-index: 1;\n    padding-bottom: 64px; }\n\n.card .card-image {\n    position: relative; }\n\n.card .card-image img {\n      display: block;\n      border-radius: 2px 2px 0 0;\n      position: relative;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      width: 100%; }\n\n.card .card-image .card-title {\n      color: #fff;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      max-width: 100%;\n      padding: 24px; }\n\n.card .card-content {\n    padding: 24px;\n    border-radius: 0 0 2px 2px; }\n\n.card .card-content p {\n      margin: 0;\n      color: inherit; }\n\n.card .card-content .card-title {\n      display: block;\n      line-height: 32px;\n      margin-bottom: 8px; }\n\n.card .card-content .card-title i {\n        line-height: 32px; }\n\n.card .card-action {\n    position: relative;\n    background-color: inherit;\n    border-top: 1px solid rgba(160, 160, 160, 0.2);\n    padding: 16px 24px; }\n\n.card .card-action:last-child {\n      border-radius: 0 0 2px 2px; }\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {\n      color: #ffab40;\n      margin-right: 24px;\n      transition: color .3s ease;\n      text-transform: uppercase; }\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {\n        color: #ffd8a6; }\n\n.card .card-reveal {\n    padding: 24px;\n    position: absolute;\n    background-color: #fff;\n    width: 100%;\n    overflow-y: auto;\n    left: 0;\n    top: 100%;\n    height: 100%;\n    z-index: 3;\n    display: none; }\n\n.card .card-reveal .card-title {\n      cursor: pointer;\n      display: block; }\n\n#toast-container {\n  display: block;\n  position: fixed;\n  z-index: 10000; }\n\n@media only screen and (max-width: 600px) {\n    #toast-container {\n      min-width: 100%;\n      bottom: 0%; } }\n\n@media only screen and (min-width: 601px) and (max-width: 992px) {\n    #toast-container {\n      left: 5%;\n      bottom: 7%;\n      max-width: 90%; } }\n\n@media only screen and (min-width: 993px) {\n    #toast-container {\n      top: 10%;\n      right: 7%;\n      max-width: 86%; } }\n\n.toast {\n  border-radius: 2px;\n  top: 35px;\n  width: auto;\n  margin-top: 10px;\n  position: relative;\n  max-width: 100%;\n  height: auto;\n  min-height: 48px;\n  line-height: 1.5em;\n  word-break: break-all;\n  background-color: #323232;\n  padding: 10px 25px;\n  font-size: 1.1rem;\n  font-weight: 300;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: default; }\n\n.toast .toast-action {\n    color: #eeff41;\n    font-weight: 500;\n    margin-right: -25px;\n    margin-left: 3rem; }\n\n.toast.rounded {\n    border-radius: 24px; }\n\n@media only screen and (max-width: 600px) {\n    .toast {\n      width: 100%;\n      border-radius: 0; } }\n\n.tabs {\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 48px;\n  width: 100%;\n  background-color: #fff;\n  margin: 0 auto;\n  white-space: nowrap; }\n\n.tabs.tabs-transparent {\n    background-color: transparent; }\n\n.tabs.tabs-transparent .tab a,\n    .tabs.tabs-transparent .tab.disabled a,\n    .tabs.tabs-transparent .tab.disabled a:hover {\n      color: rgba(255, 255, 255, 0.7); }\n\n.tabs.tabs-transparent .tab a:hover,\n    .tabs.tabs-transparent .tab a.active {\n      color: #fff; }\n\n.tabs.tabs-transparent .indicator {\n      background-color: #fff; }\n\n.tabs.tabs-fixed-width {\n    display: flex; }\n\n.tabs.tabs-fixed-width .tab {\n      flex-grow: 1; }\n\n.tabs .tab {\n    display: inline-block;\n    text-align: center;\n    line-height: 48px;\n    height: 48px;\n    padding: 0;\n    margin: 0;\n    text-transform: uppercase; }\n\n.tabs .tab a {\n      color: rgba(238, 110, 115, 0.7);\n      display: block;\n      width: 100%;\n      height: 100%;\n      padding: 0 24px;\n      font-size: 14px;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      transition: color .28s ease; }\n\n.tabs .tab a:hover, .tabs .tab a.active {\n        background-color: transparent;\n        color: #ee6e73; }\n\n.tabs .tab.disabled a,\n    .tabs .tab.disabled a:hover {\n      color: rgba(238, 110, 115, 0.7);\n      cursor: default; }\n\n.tabs .indicator {\n    position: absolute;\n    bottom: 0;\n    height: 2px;\n    background-color: #f6b2b5;\n    will-change: left, right; }\n\n@media only screen and (max-width: 992px) {\n  .tabs {\n    display: flex; }\n    .tabs .tab {\n      flex-grow: 1; }\n      .tabs .tab a {\n        padding: 0 12px; } }\n\n.material-tooltip {\n  padding: 10px 8px;\n  font-size: 1rem;\n  z-index: 2000;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #fff;\n  min-height: 36px;\n  line-height: 120%;\n  opacity: 0;\n  position: absolute;\n  text-align: center;\n  max-width: calc(100% - 4px);\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  visibility: hidden; }\n\n.backdrop {\n  position: absolute;\n  opacity: 0;\n  height: 7px;\n  width: 14px;\n  border-radius: 0 0 50% 50%;\n  background-color: #323232;\n  z-index: -1;\n  -webkit-transform-origin: 50% 0%;\n          transform-origin: 50% 0%;\n  visibility: hidden; }\n\n.btn, .btn-large,\n.btn-flat {\n  border: none;\n  border-radius: 2px;\n  display: inline-block;\n  height: 36px;\n  line-height: 36px;\n  padding: 0 2rem;\n  text-transform: uppercase;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent; }\n\n.btn.disabled, .disabled.btn-large,\n.btn-floating.disabled,\n.btn-large.disabled,\n.btn-flat.disabled,\n.btn:disabled,\n.btn-large:disabled,\n.btn-floating:disabled,\n.btn-large:disabled,\n.btn-flat:disabled,\n.btn[disabled],\n.btn-large[disabled],\n.btn-floating[disabled],\n.btn-large[disabled],\n.btn-flat[disabled] {\n  pointer-events: none;\n  background-color: #DFDFDF !important;\n  box-shadow: none;\n  color: #9F9F9F !important;\n  cursor: default; }\n\n.btn.disabled:hover, .disabled.btn-large:hover,\n  .btn-floating.disabled:hover,\n  .btn-large.disabled:hover,\n  .btn-flat.disabled:hover,\n  .btn:disabled:hover,\n  .btn-large:disabled:hover,\n  .btn-floating:disabled:hover,\n  .btn-large:disabled:hover,\n  .btn-flat:disabled:hover,\n  .btn[disabled]:hover,\n  .btn-large[disabled]:hover,\n  .btn-floating[disabled]:hover,\n  .btn-large[disabled]:hover,\n  .btn-flat[disabled]:hover {\n    background-color: #DFDFDF !important;\n    color: #9F9F9F !important; }\n\n.btn, .btn-large,\n.btn-floating,\n.btn-large,\n.btn-flat {\n  font-size: 1rem;\n  outline: 0; }\n\n.btn i, .btn-large i,\n  .btn-floating i,\n  .btn-large i,\n  .btn-flat i {\n    font-size: 1.3rem;\n    line-height: inherit; }\n\n.btn:focus, .btn-large:focus,\n.btn-floating:focus {\n  background-color: #1d7d74; }\n\n.btn, .btn-large {\n  text-decoration: none;\n  color: #fff;\n  background-color: #26a69a;\n  text-align: center;\n  letter-spacing: .5px;\n  transition: .2s ease-out;\n  cursor: pointer; }\n\n.btn:hover, .btn-large:hover {\n    background-color: #2bbbad; }\n\n.btn-floating {\n  display: inline-block;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  padding: 0;\n  background-color: #26a69a;\n  border-radius: 50%;\n  transition: .3s;\n  cursor: pointer;\n  vertical-align: middle; }\n\n.btn-floating:hover {\n    background-color: #26a69a; }\n\n.btn-floating:before {\n    border-radius: 0; }\n\n.btn-floating.btn-large {\n    width: 56px;\n    height: 56px; }\n\n.btn-floating.btn-large.halfway-fab {\n      bottom: -28px; }\n\n.btn-floating.btn-large i {\n      line-height: 56px; }\n\n.btn-floating.halfway-fab {\n    position: absolute;\n    right: 24px;\n    bottom: -20px; }\n\n.btn-floating.halfway-fab.left {\n      right: auto;\n      left: 24px; }\n\n.btn-floating i {\n    width: inherit;\n    display: inline-block;\n    text-align: center;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 40px; }\n\nbutton.btn-floating {\n  border: none; }\n\n.fixed-action-btn {\n  position: fixed;\n  right: 23px;\n  bottom: 23px;\n  padding-top: 15px;\n  margin-bottom: 0;\n  z-index: 997; }\n\n.fixed-action-btn.active ul {\n    visibility: visible; }\n\n.fixed-action-btn.horizontal {\n    padding: 0 0 0 15px; }\n\n.fixed-action-btn.horizontal ul {\n      text-align: right;\n      right: 64px;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      height: 100%;\n      left: auto;\n      width: 500px;\n      /*width 100% only goes to width of button container */ }\n\n.fixed-action-btn.horizontal ul li {\n        display: inline-block;\n        margin: 15px 15px 0 0; }\n\n.fixed-action-btn.toolbar {\n    padding: 0;\n    height: 56px; }\n\n.fixed-action-btn.toolbar.active > a i {\n      opacity: 0; }\n\n.fixed-action-btn.toolbar ul {\n      display: flex;\n      top: 0;\n      bottom: 0;\n      z-index: 1; }\n\n.fixed-action-btn.toolbar ul li {\n        flex: 1;\n        display: inline-block;\n        margin: 0;\n        height: 100%;\n        transition: none; }\n\n.fixed-action-btn.toolbar ul li a {\n          display: block;\n          overflow: hidden;\n          position: relative;\n          width: 100%;\n          height: 100%;\n          background-color: transparent;\n          box-shadow: none;\n          color: #fff;\n          line-height: 56px;\n          z-index: 1; }\n\n.fixed-action-btn.toolbar ul li a i {\n            line-height: inherit; }\n\n.fixed-action-btn ul {\n    left: 0;\n    right: 0;\n    text-align: center;\n    position: absolute;\n    bottom: 64px;\n    margin: 0;\n    visibility: hidden; }\n\n.fixed-action-btn ul li {\n      margin-bottom: 15px; }\n\n.fixed-action-btn ul a.btn-floating {\n      opacity: 0; }\n\n.fixed-action-btn .fab-backdrop {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    width: 40px;\n    height: 40px;\n    background-color: #26a69a;\n    border-radius: 50%;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n.btn-flat {\n  box-shadow: none;\n  background-color: transparent;\n  color: #343434;\n  cursor: pointer;\n  transition: background-color .2s; }\n\n.btn-flat:focus, .btn-flat:hover {\n    box-shadow: none; }\n\n.btn-flat:focus {\n    background-color: rgba(0, 0, 0, 0.1); }\n\n.btn-flat.disabled {\n    background-color: transparent !important;\n    color: #b3b2b2 !important;\n    cursor: default; }\n\n.btn-large {\n  height: 54px;\n  line-height: 54px; }\n\n.btn-large i {\n    font-size: 1.6rem; }\n\n.btn-block {\n  display: block; }\n\n.dropdown-content {\n  background-color: #fff;\n  margin: 0;\n  display: none;\n  min-width: 100px;\n  max-height: 650px;\n  overflow-y: auto;\n  opacity: 0;\n  position: absolute;\n  z-index: 999;\n  will-change: width, height; }\n\n.dropdown-content li {\n    clear: both;\n    color: rgba(0, 0, 0, 0.87);\n    cursor: pointer;\n    min-height: 50px;\n    line-height: 1.5rem;\n    width: 100%;\n    text-align: left;\n    text-transform: none; }\n\n.dropdown-content li:hover, .dropdown-content li.active, .dropdown-content li.selected {\n      background-color: #eee; }\n\n.dropdown-content li.active.selected {\n      background-color: #e1e1e1; }\n\n.dropdown-content li.divider {\n      min-height: 0;\n      height: 1px; }\n\n.dropdown-content li > a, .dropdown-content li > span {\n      font-size: 16px;\n      color: #26a69a;\n      display: block;\n      line-height: 22px;\n      padding: 14px 16px; }\n\n.dropdown-content li > span > label {\n      top: 1px;\n      left: 0;\n      height: 18px; }\n\n.dropdown-content li > a > i {\n      height: inherit;\n      line-height: inherit;\n      float: left;\n      margin: 0 24px 0 0;\n      width: 24px; }\n\n.input-field.col .dropdown-content [type=\"checkbox\"] + label {\n  top: 1px;\n  left: 0;\n  height: 18px; }\n\n/*!\r\n * Waves v0.6.0\r\n * http://fian.my.id/Waves\r\n *\r\n * Copyright 2014 Alfiana E. Sibuea and other contributors\r\n * Released under the MIT license\r\n * https://github.com/fians/Waves/blob/master/LICENSE\r\n */\n\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: .3s ease-out; }\n\n.waves-effect .waves-ripple {\n    position: absolute;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    margin-top: -10px;\n    margin-left: -10px;\n    opacity: 0;\n    background: rgba(0, 0, 0, 0.2);\n    transition: all 0.7s ease-out;\n    transition-property: opacity, -webkit-transform;\n    transition-property: transform, opacity;\n    transition-property: transform, opacity, -webkit-transform;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    pointer-events: none; }\n\n.waves-effect.waves-light .waves-ripple {\n    background-color: rgba(255, 255, 255, 0.45); }\n\n.waves-effect.waves-red .waves-ripple {\n    background-color: rgba(244, 67, 54, 0.7); }\n\n.waves-effect.waves-yellow .waves-ripple {\n    background-color: rgba(255, 235, 59, 0.7); }\n\n.waves-effect.waves-orange .waves-ripple {\n    background-color: rgba(255, 152, 0, 0.7); }\n\n.waves-effect.waves-purple .waves-ripple {\n    background-color: rgba(156, 39, 176, 0.7); }\n\n.waves-effect.waves-green .waves-ripple {\n    background-color: rgba(76, 175, 80, 0.7); }\n\n.waves-effect.waves-teal .waves-ripple {\n    background-color: rgba(0, 150, 136, 0.7); }\n\n.waves-effect input[type=\"button\"], .waves-effect input[type=\"reset\"], .waves-effect input[type=\"submit\"] {\n    border: 0;\n    font-style: normal;\n    font-size: inherit;\n    text-transform: inherit;\n    background: none; }\n\n.waves-effect img {\n    position: relative;\n    z-index: -1; }\n\n.waves-notransition {\n  transition: none !important; }\n\n.waves-circle {\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%); }\n\n.waves-input-wrapper {\n  border-radius: 0.2em;\n  vertical-align: bottom; }\n\n.waves-input-wrapper .waves-button-input {\n    position: relative;\n    top: 0;\n    left: 0;\n    z-index: 1; }\n\n.waves-circle {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none; }\n\n.waves-block {\n  display: block; }\n\n/* Firefox Bug: link not triggered */\n\n.waves-effect .waves-ripple {\n  z-index: -1; }\n\n.modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: #fafafa;\n  padding: 0;\n  max-height: 70%;\n  width: 55%;\n  margin: auto;\n  overflow-y: auto;\n  border-radius: 2px;\n  will-change: top, opacity; }\n\n@media only screen and (max-width: 992px) {\n    .modal {\n      width: 80%; } }\n\n.modal h1, .modal h2, .modal h3, .modal h4 {\n    margin-top: 0; }\n\n.modal .modal-content {\n    padding: 24px; }\n\n.modal .modal-close {\n    cursor: pointer; }\n\n.modal .modal-footer {\n    border-radius: 0 0 2px 2px;\n    background-color: #fafafa;\n    padding: 4px 6px;\n    height: 56px;\n    width: 100%;\n    text-align: right; }\n\n.modal .modal-footer .btn, .modal .modal-footer .btn-large, .modal .modal-footer .btn-flat {\n      margin: 6px 0; }\n\n.modal-overlay {\n  position: fixed;\n  z-index: 999;\n  top: -25%;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 125%;\n  width: 100%;\n  background: #000;\n  display: none;\n  will-change: opacity; }\n\n.modal.modal-fixed-footer {\n  padding: 0;\n  height: 70%; }\n\n.modal.modal-fixed-footer .modal-content {\n    position: absolute;\n    height: calc(100% - 56px);\n    max-height: 100%;\n    width: 100%;\n    overflow-y: auto; }\n\n.modal.modal-fixed-footer .modal-footer {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    position: absolute;\n    bottom: 0; }\n\n.modal.bottom-sheet {\n  top: auto;\n  bottom: -100%;\n  margin: 0;\n  width: 100%;\n  max-height: 45%;\n  border-radius: 0;\n  will-change: bottom, opacity; }\n\n.collapsible {\n  border-top: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  margin: 0.5rem 0 1rem 0; }\n\n.collapsible-header {\n  display: flex;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  line-height: 1.5;\n  padding: 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd; }\n\n.collapsible-header i {\n    width: 2rem;\n    font-size: 1.6rem;\n    display: inline-block;\n    text-align: center;\n    margin-right: 1rem; }\n\n.collapsible-body {\n  display: none;\n  border-bottom: 1px solid #ddd;\n  box-sizing: border-box;\n  padding: 2rem; }\n\n.side-nav .collapsible,\n.side-nav.fixed .collapsible {\n  border: none;\n  box-shadow: none; }\n\n.side-nav .collapsible li,\n  .side-nav.fixed .collapsible li {\n    padding: 0; }\n\n.side-nav .collapsible-header,\n.side-nav.fixed .collapsible-header {\n  background-color: transparent;\n  border: none;\n  line-height: inherit;\n  height: inherit;\n  padding: 0 16px; }\n\n.side-nav .collapsible-header:hover,\n  .side-nav.fixed .collapsible-header:hover {\n    background-color: rgba(0, 0, 0, 0.05); }\n\n.side-nav .collapsible-header i,\n  .side-nav.fixed .collapsible-header i {\n    line-height: inherit; }\n\n.side-nav .collapsible-body,\n.side-nav.fixed .collapsible-body {\n  border: 0;\n  background-color: #fff; }\n\n.side-nav .collapsible-body li a,\n  .side-nav.fixed .collapsible-body li a {\n    padding: 0 23.5px 0 31px; }\n\n.collapsible.popout {\n  border: none;\n  box-shadow: none; }\n\n.collapsible.popout > li {\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    margin: 0 24px;\n    transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94); }\n\n.collapsible.popout > li.active {\n    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n    margin: 16px 0; }\n\n.chip {\n  display: inline-block;\n  height: 32px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  line-height: 32px;\n  padding: 0 12px;\n  border-radius: 16px;\n  background-color: #e4e4e4;\n  margin-bottom: 5px;\n  margin-right: 5px; }\n\n.chip > img {\n    float: left;\n    margin: 0 8px 0 -12px;\n    height: 32px;\n    width: 32px;\n    border-radius: 50%; }\n\n.chip .close {\n    cursor: pointer;\n    float: right;\n    font-size: 16px;\n    line-height: 32px;\n    padding-left: 8px; }\n\n.chips {\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  box-shadow: none;\n  margin: 0 0 20px 0;\n  min-height: 45px;\n  outline: none;\n  transition: all .3s; }\n\n.chips.focus {\n    border-bottom: 1px solid #26a69a;\n    box-shadow: 0 1px 0 0 #26a69a; }\n\n.chips:hover {\n    cursor: text; }\n\n.chips .chip.selected {\n    background-color: #26a69a;\n    color: #fff; }\n\n.chips .input {\n    background: none;\n    border: 0;\n    color: rgba(0, 0, 0, 0.6);\n    display: inline-block;\n    font-size: 1rem;\n    height: 3rem;\n    line-height: 32px;\n    outline: 0;\n    margin: 0;\n    padding: 0 !important;\n    width: 120px !important; }\n\n.chips .input:focus {\n    border: 0 !important;\n    box-shadow: none !important; }\n\n.chips .autocomplete-content {\n    margin-top: 0;\n    margin-bottom: 0; }\n\n.prefix ~ .chips {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem); }\n\n.chips:empty ~ label {\n  font-size: 0.8rem;\n  -webkit-transform: translateY(-140%);\n          transform: translateY(-140%); }\n\n.materialboxed {\n  display: block;\n  cursor: zoom-in;\n  position: relative;\n  transition: opacity .4s;\n  -webkit-backface-visibility: hidden; }\n\n.materialboxed:hover:not(.active) {\n    opacity: .8; }\n\n.materialboxed.active {\n    cursor: zoom-out; }\n\n#materialbox-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #292929;\n  z-index: 1000;\n  will-change: opacity; }\n\n.materialbox-caption {\n  position: fixed;\n  display: none;\n  color: #fff;\n  line-height: 50px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  padding: 0% 15%;\n  height: 50px;\n  z-index: 1000;\n  -webkit-font-smoothing: antialiased; }\n\nselect:focus {\n  outline: 1px solid #c9f3ef; }\n\nbutton:focus {\n  outline: none;\n  background-color: #2ab7a9; }\n\nlabel {\n  font-size: 0.8rem;\n  color: #9e9e9e; }\n\n/* Text Inputs + Textarea\r\n   ========================================================================== */\n\n/* Style Placeholders */\n\n::-webkit-input-placeholder {\n  color: #d1d1d1; }\n\n::-ms-input-placeholder {\n  color: #d1d1d1; }\n\n::placeholder {\n  color: #d1d1d1; }\n\n/* Text inputs */\n\ninput:not([type]),\ninput[type=text]:not(.browser-default),\ninput[type=password]:not(.browser-default),\ninput[type=email]:not(.browser-default),\ninput[type=url]:not(.browser-default),\ninput[type=time]:not(.browser-default),\ninput[type=date]:not(.browser-default),\ninput[type=datetime]:not(.browser-default),\ninput[type=datetime-local]:not(.browser-default),\ninput[type=tel]:not(.browser-default),\ninput[type=number]:not(.browser-default),\ninput[type=search]:not(.browser-default),\ntextarea.materialize-textarea {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  border-radius: 0;\n  outline: none;\n  height: 3rem;\n  width: 100%;\n  font-size: 1rem;\n  margin: 0 0 20px 0;\n  padding: 0;\n  box-shadow: none;\n  box-sizing: content-box;\n  transition: all 0.3s; }\n\ninput:not([type]):disabled, input:not([type])[readonly=\"readonly\"],\n  input[type=text]:not(.browser-default):disabled,\n  input[type=text]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=password]:not(.browser-default):disabled,\n  input[type=password]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=email]:not(.browser-default):disabled,\n  input[type=email]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=url]:not(.browser-default):disabled,\n  input[type=url]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=time]:not(.browser-default):disabled,\n  input[type=time]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=date]:not(.browser-default):disabled,\n  input[type=date]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=datetime]:not(.browser-default):disabled,\n  input[type=datetime]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=datetime-local]:not(.browser-default):disabled,\n  input[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=tel]:not(.browser-default):disabled,\n  input[type=tel]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=number]:not(.browser-default):disabled,\n  input[type=number]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=search]:not(.browser-default):disabled,\n  input[type=search]:not(.browser-default)[readonly=\"readonly\"],\n  textarea.materialize-textarea:disabled,\n  textarea.materialize-textarea[readonly=\"readonly\"] {\n    color: rgba(0, 0, 0, 0.42);\n    border-bottom: 1px dotted rgba(0, 0, 0, 0.42); }\n\ninput:not([type]):disabled + label,\n  input:not([type])[readonly=\"readonly\"] + label,\n  input[type=text]:not(.browser-default):disabled + label,\n  input[type=text]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=password]:not(.browser-default):disabled + label,\n  input[type=password]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=email]:not(.browser-default):disabled + label,\n  input[type=email]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=url]:not(.browser-default):disabled + label,\n  input[type=url]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=time]:not(.browser-default):disabled + label,\n  input[type=time]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=date]:not(.browser-default):disabled + label,\n  input[type=date]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=datetime]:not(.browser-default):disabled + label,\n  input[type=datetime]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=datetime-local]:not(.browser-default):disabled + label,\n  input[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=tel]:not(.browser-default):disabled + label,\n  input[type=tel]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=number]:not(.browser-default):disabled + label,\n  input[type=number]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=search]:not(.browser-default):disabled + label,\n  input[type=search]:not(.browser-default)[readonly=\"readonly\"] + label,\n  textarea.materialize-textarea:disabled + label,\n  textarea.materialize-textarea[readonly=\"readonly\"] + label {\n    color: rgba(0, 0, 0, 0.42); }\n\ninput:not([type]):focus:not([readonly]),\n  input[type=text]:not(.browser-default):focus:not([readonly]),\n  input[type=password]:not(.browser-default):focus:not([readonly]),\n  input[type=email]:not(.browser-default):focus:not([readonly]),\n  input[type=url]:not(.browser-default):focus:not([readonly]),\n  input[type=time]:not(.browser-default):focus:not([readonly]),\n  input[type=date]:not(.browser-default):focus:not([readonly]),\n  input[type=datetime]:not(.browser-default):focus:not([readonly]),\n  input[type=datetime-local]:not(.browser-default):focus:not([readonly]),\n  input[type=tel]:not(.browser-default):focus:not([readonly]),\n  input[type=number]:not(.browser-default):focus:not([readonly]),\n  input[type=search]:not(.browser-default):focus:not([readonly]),\n  textarea.materialize-textarea:focus:not([readonly]) {\n    border-bottom: 1px solid #26a69a;\n    box-shadow: 0 1px 0 0 #26a69a; }\n\ninput:not([type]):focus:not([readonly]) + label,\n  input[type=text]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=password]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=email]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=url]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=time]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=date]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=datetime]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=datetime-local]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=tel]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=number]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=search]:not(.browser-default):focus:not([readonly]) + label,\n  textarea.materialize-textarea:focus:not([readonly]) + label {\n    color: #26a69a; }\n\ninput:not([type]).validate + label,\n  input[type=text]:not(.browser-default).validate + label,\n  input[type=password]:not(.browser-default).validate + label,\n  input[type=email]:not(.browser-default).validate + label,\n  input[type=url]:not(.browser-default).validate + label,\n  input[type=time]:not(.browser-default).validate + label,\n  input[type=date]:not(.browser-default).validate + label,\n  input[type=datetime]:not(.browser-default).validate + label,\n  input[type=datetime-local]:not(.browser-default).validate + label,\n  input[type=tel]:not(.browser-default).validate + label,\n  input[type=number]:not(.browser-default).validate + label,\n  input[type=search]:not(.browser-default).validate + label,\n  textarea.materialize-textarea.validate + label {\n    width: 100%; }\n\ninput:not([type]).invalid + label:after,\n  input:not([type]).valid + label:after,\n  input[type=text]:not(.browser-default).invalid + label:after,\n  input[type=text]:not(.browser-default).valid + label:after,\n  input[type=password]:not(.browser-default).invalid + label:after,\n  input[type=password]:not(.browser-default).valid + label:after,\n  input[type=email]:not(.browser-default).invalid + label:after,\n  input[type=email]:not(.browser-default).valid + label:after,\n  input[type=url]:not(.browser-default).invalid + label:after,\n  input[type=url]:not(.browser-default).valid + label:after,\n  input[type=time]:not(.browser-default).invalid + label:after,\n  input[type=time]:not(.browser-default).valid + label:after,\n  input[type=date]:not(.browser-default).invalid + label:after,\n  input[type=date]:not(.browser-default).valid + label:after,\n  input[type=datetime]:not(.browser-default).invalid + label:after,\n  input[type=datetime]:not(.browser-default).valid + label:after,\n  input[type=datetime-local]:not(.browser-default).invalid + label:after,\n  input[type=datetime-local]:not(.browser-default).valid + label:after,\n  input[type=tel]:not(.browser-default).invalid + label:after,\n  input[type=tel]:not(.browser-default).valid + label:after,\n  input[type=number]:not(.browser-default).invalid + label:after,\n  input[type=number]:not(.browser-default).valid + label:after,\n  input[type=search]:not(.browser-default).invalid + label:after,\n  input[type=search]:not(.browser-default).valid + label:after,\n  textarea.materialize-textarea.invalid + label:after,\n  textarea.materialize-textarea.valid + label:after {\n    display: none; }\n\ninput:not([type]).invalid + label.active:after,\n  input:not([type]).valid + label.active:after,\n  input[type=text]:not(.browser-default).invalid + label.active:after,\n  input[type=text]:not(.browser-default).valid + label.active:after,\n  input[type=password]:not(.browser-default).invalid + label.active:after,\n  input[type=password]:not(.browser-default).valid + label.active:after,\n  input[type=email]:not(.browser-default).invalid + label.active:after,\n  input[type=email]:not(.browser-default).valid + label.active:after,\n  input[type=url]:not(.browser-default).invalid + label.active:after,\n  input[type=url]:not(.browser-default).valid + label.active:after,\n  input[type=time]:not(.browser-default).invalid + label.active:after,\n  input[type=time]:not(.browser-default).valid + label.active:after,\n  input[type=date]:not(.browser-default).invalid + label.active:after,\n  input[type=date]:not(.browser-default).valid + label.active:after,\n  input[type=datetime]:not(.browser-default).invalid + label.active:after,\n  input[type=datetime]:not(.browser-default).valid + label.active:after,\n  input[type=datetime-local]:not(.browser-default).invalid + label.active:after,\n  input[type=datetime-local]:not(.browser-default).valid + label.active:after,\n  input[type=tel]:not(.browser-default).invalid + label.active:after,\n  input[type=tel]:not(.browser-default).valid + label.active:after,\n  input[type=number]:not(.browser-default).invalid + label.active:after,\n  input[type=number]:not(.browser-default).valid + label.active:after,\n  input[type=search]:not(.browser-default).invalid + label.active:after,\n  input[type=search]:not(.browser-default).valid + label.active:after,\n  textarea.materialize-textarea.invalid + label.active:after,\n  textarea.materialize-textarea.valid + label.active:after {\n    display: block; }\n\n/* Validation Sass Placeholders */\n\ninput.valid:not([type]), input.valid:not([type]):focus,\ninput.valid[type=text]:not(.browser-default),\ninput.valid[type=text]:not(.browser-default):focus,\ninput.valid[type=password]:not(.browser-default),\ninput.valid[type=password]:not(.browser-default):focus,\ninput.valid[type=email]:not(.browser-default),\ninput.valid[type=email]:not(.browser-default):focus,\ninput.valid[type=url]:not(.browser-default),\ninput.valid[type=url]:not(.browser-default):focus,\ninput.valid[type=time]:not(.browser-default),\ninput.valid[type=time]:not(.browser-default):focus,\ninput.valid[type=date]:not(.browser-default),\ninput.valid[type=date]:not(.browser-default):focus,\ninput.valid[type=datetime]:not(.browser-default),\ninput.valid[type=datetime]:not(.browser-default):focus,\ninput.valid[type=datetime-local]:not(.browser-default),\ninput.valid[type=datetime-local]:not(.browser-default):focus,\ninput.valid[type=tel]:not(.browser-default),\ninput.valid[type=tel]:not(.browser-default):focus,\ninput.valid[type=number]:not(.browser-default),\ninput.valid[type=number]:not(.browser-default):focus,\ninput.valid[type=search]:not(.browser-default),\ninput.valid[type=search]:not(.browser-default):focus,\ntextarea.materialize-textarea.valid,\ntextarea.materialize-textarea.valid:focus, .select-wrapper.valid > input.select-dropdown {\n  border-bottom: 1px solid #4CAF50;\n  box-shadow: 0 1px 0 0 #4CAF50; }\n\ninput.invalid:not([type]), input.invalid:not([type]):focus,\ninput.invalid[type=text]:not(.browser-default),\ninput.invalid[type=text]:not(.browser-default):focus,\ninput.invalid[type=password]:not(.browser-default),\ninput.invalid[type=password]:not(.browser-default):focus,\ninput.invalid[type=email]:not(.browser-default),\ninput.invalid[type=email]:not(.browser-default):focus,\ninput.invalid[type=url]:not(.browser-default),\ninput.invalid[type=url]:not(.browser-default):focus,\ninput.invalid[type=time]:not(.browser-default),\ninput.invalid[type=time]:not(.browser-default):focus,\ninput.invalid[type=date]:not(.browser-default),\ninput.invalid[type=date]:not(.browser-default):focus,\ninput.invalid[type=datetime]:not(.browser-default),\ninput.invalid[type=datetime]:not(.browser-default):focus,\ninput.invalid[type=datetime-local]:not(.browser-default),\ninput.invalid[type=datetime-local]:not(.browser-default):focus,\ninput.invalid[type=tel]:not(.browser-default),\ninput.invalid[type=tel]:not(.browser-default):focus,\ninput.invalid[type=number]:not(.browser-default),\ninput.invalid[type=number]:not(.browser-default):focus,\ninput.invalid[type=search]:not(.browser-default),\ninput.invalid[type=search]:not(.browser-default):focus,\ntextarea.materialize-textarea.invalid,\ntextarea.materialize-textarea.invalid:focus, .select-wrapper.invalid > input.select-dropdown {\n  border-bottom: 1px solid #F44336;\n  box-shadow: 0 1px 0 0 #F44336; }\n\ninput:not([type]).valid + label:after,\ninput:not([type]):focus.valid + label:after,\ninput[type=text]:not(.browser-default).valid + label:after,\ninput[type=text]:not(.browser-default):focus.valid + label:after,\ninput[type=password]:not(.browser-default).valid + label:after,\ninput[type=password]:not(.browser-default):focus.valid + label:after,\ninput[type=email]:not(.browser-default).valid + label:after,\ninput[type=email]:not(.browser-default):focus.valid + label:after,\ninput[type=url]:not(.browser-default).valid + label:after,\ninput[type=url]:not(.browser-default):focus.valid + label:after,\ninput[type=time]:not(.browser-default).valid + label:after,\ninput[type=time]:not(.browser-default):focus.valid + label:after,\ninput[type=date]:not(.browser-default).valid + label:after,\ninput[type=date]:not(.browser-default):focus.valid + label:after,\ninput[type=datetime]:not(.browser-default).valid + label:after,\ninput[type=datetime]:not(.browser-default):focus.valid + label:after,\ninput[type=datetime-local]:not(.browser-default).valid + label:after,\ninput[type=datetime-local]:not(.browser-default):focus.valid + label:after,\ninput[type=tel]:not(.browser-default).valid + label:after,\ninput[type=tel]:not(.browser-default):focus.valid + label:after,\ninput[type=number]:not(.browser-default).valid + label:after,\ninput[type=number]:not(.browser-default):focus.valid + label:after,\ninput[type=search]:not(.browser-default).valid + label:after,\ninput[type=search]:not(.browser-default):focus.valid + label:after,\ntextarea.materialize-textarea.valid + label:after,\ntextarea.materialize-textarea:focus.valid + label:after, .select-wrapper.valid + label:after {\n  content: attr(data-success);\n  color: #4CAF50;\n  opacity: 1;\n  -webkit-transform: translateY(9px);\n          transform: translateY(9px); }\n\ninput:not([type]).invalid + label:after,\ninput:not([type]):focus.invalid + label:after,\ninput[type=text]:not(.browser-default).invalid + label:after,\ninput[type=text]:not(.browser-default):focus.invalid + label:after,\ninput[type=password]:not(.browser-default).invalid + label:after,\ninput[type=password]:not(.browser-default):focus.invalid + label:after,\ninput[type=email]:not(.browser-default).invalid + label:after,\ninput[type=email]:not(.browser-default):focus.invalid + label:after,\ninput[type=url]:not(.browser-default).invalid + label:after,\ninput[type=url]:not(.browser-default):focus.invalid + label:after,\ninput[type=time]:not(.browser-default).invalid + label:after,\ninput[type=time]:not(.browser-default):focus.invalid + label:after,\ninput[type=date]:not(.browser-default).invalid + label:after,\ninput[type=date]:not(.browser-default):focus.invalid + label:after,\ninput[type=datetime]:not(.browser-default).invalid + label:after,\ninput[type=datetime]:not(.browser-default):focus.invalid + label:after,\ninput[type=datetime-local]:not(.browser-default).invalid + label:after,\ninput[type=datetime-local]:not(.browser-default):focus.invalid + label:after,\ninput[type=tel]:not(.browser-default).invalid + label:after,\ninput[type=tel]:not(.browser-default):focus.invalid + label:after,\ninput[type=number]:not(.browser-default).invalid + label:after,\ninput[type=number]:not(.browser-default):focus.invalid + label:after,\ninput[type=search]:not(.browser-default).invalid + label:after,\ninput[type=search]:not(.browser-default):focus.invalid + label:after,\ntextarea.materialize-textarea.invalid + label:after,\ntextarea.materialize-textarea:focus.invalid + label:after, .select-wrapper.invalid + label:after {\n  content: attr(data-error);\n  color: #F44336;\n  opacity: 1;\n  -webkit-transform: translateY(9px);\n          transform: translateY(9px); }\n\ninput:not([type]) + label:after,\ninput[type=text]:not(.browser-default) + label:after,\ninput[type=password]:not(.browser-default) + label:after,\ninput[type=email]:not(.browser-default) + label:after,\ninput[type=url]:not(.browser-default) + label:after,\ninput[type=time]:not(.browser-default) + label:after,\ninput[type=date]:not(.browser-default) + label:after,\ninput[type=datetime]:not(.browser-default) + label:after,\ninput[type=datetime-local]:not(.browser-default) + label:after,\ninput[type=tel]:not(.browser-default) + label:after,\ninput[type=number]:not(.browser-default) + label:after,\ninput[type=search]:not(.browser-default) + label:after,\ntextarea.materialize-textarea + label:after, .select-wrapper + label:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 0;\n  opacity: 0;\n  transition: .2s opacity ease-out, .2s color ease-out; }\n\n.input-field {\n  position: relative;\n  margin-top: 1rem; }\n\n.input-field.inline {\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 5px; }\n\n.input-field.inline input,\n    .input-field.inline .select-dropdown {\n      margin-bottom: 1rem; }\n\n.input-field.col label {\n    left: 0.75rem; }\n\n.input-field.col .prefix ~ label,\n  .input-field.col .prefix ~ .validate ~ label {\n    width: calc(100% - 3rem - 1.5rem); }\n\n.input-field label {\n    color: #9e9e9e;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    font-size: 1rem;\n    cursor: text;\n    transition: -webkit-transform .2s ease-out;\n    transition: transform .2s ease-out;\n    transition: transform .2s ease-out, -webkit-transform .2s ease-out;\n    -webkit-transform-origin: 0% 100%;\n            transform-origin: 0% 100%;\n    text-align: initial;\n    -webkit-transform: translateY(12px);\n            transform: translateY(12px);\n    pointer-events: none; }\n\n.input-field label:not(.label-icon).active {\n      -webkit-transform: translateY(-14px) scale(0.8);\n              transform: translateY(-14px) scale(0.8);\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0; }\n\n.input-field .prefix {\n    position: absolute;\n    width: 3rem;\n    font-size: 2rem;\n    transition: color .2s; }\n\n.input-field .prefix.active {\n      color: #26a69a; }\n\n.input-field .prefix ~ input,\n  .input-field .prefix ~ textarea,\n  .input-field .prefix ~ label,\n  .input-field .prefix ~ .validate ~ label,\n  .input-field .prefix ~ .autocomplete-content {\n    margin-left: 3rem;\n    width: 92%;\n    width: calc(100% - 3rem); }\n\n.input-field .prefix ~ label {\n    margin-left: 3rem; }\n\n@media only screen and (max-width: 992px) {\n    .input-field .prefix ~ input {\n      width: 86%;\n      width: calc(100% - 3rem); } }\n\n@media only screen and (max-width: 600px) {\n    .input-field .prefix ~ input {\n      width: 80%;\n      width: calc(100% - 3rem); } }\n\n/* Search Field */\n\n.input-field input[type=search] {\n  display: block;\n  line-height: inherit; }\n\n.nav-wrapper .input-field input[type=search] {\n    height: inherit;\n    padding-left: 4rem;\n    width: calc(100% - 4rem);\n    border: 0;\n    box-shadow: none; }\n\n.input-field input[type=search]:focus {\n    background-color: #fff;\n    border: 0;\n    box-shadow: none;\n    color: #444; }\n\n.input-field input[type=search]:focus + label i,\n    .input-field input[type=search]:focus ~ .mdi-navigation-close,\n    .input-field input[type=search]:focus ~ .material-icons {\n      color: #444; }\n\n.input-field input[type=search] + label {\n    left: 1rem; }\n\n.input-field input[type=search] ~ .mdi-navigation-close,\n  .input-field input[type=search] ~ .material-icons {\n    position: absolute;\n    top: 0;\n    right: 1rem;\n    color: transparent;\n    cursor: pointer;\n    font-size: 2rem;\n    transition: .3s color; }\n\n/* Textarea */\n\ntextarea {\n  width: 100%;\n  height: 3rem;\n  background-color: transparent; }\n\ntextarea.materialize-textarea {\n    overflow-y: hidden;\n    /* prevents scroll bar flash */\n    padding: .8rem 0 1.6rem 0;\n    /* prevents text jump on Enter keypress */\n    resize: none;\n    min-height: 3rem; }\n\ntextarea.materialize-textarea.validate + label {\n      height: 100%; }\n\ntextarea.materialize-textarea.validate + label::after {\n        top: calc(100% - 12px); }\n\ntextarea.materialize-textarea.validate + label:not(.label-icon).active {\n        -webkit-transform: translateY(-25px);\n                transform: translateY(-25px); }\n\n.hiddendiv {\n  display: none;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  /* future version of deprecated 'word-wrap' */\n  padding-top: 1.2rem;\n  /* prevents text jump on Enter keypress */\n  position: absolute;\n  top: 0; }\n\n/* Autocomplete */\n\n.autocomplete-content {\n  margin-top: -20px;\n  margin-bottom: 20px;\n  display: block;\n  opacity: 1;\n  position: static; }\n\n.autocomplete-content li .highlight {\n    color: #444; }\n\n.autocomplete-content li img {\n    height: 40px;\n    width: 40px;\n    margin: 5px 15px; }\n\n/* Radio Buttons\r\n   ========================================================================== */\n\n[type=\"radio\"]:not(:checked),\n[type=\"radio\"]:checked {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none; }\n\n[type=\"radio\"]:not(:checked) + label,\n[type=\"radio\"]:checked + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  transition: .28s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n[type=\"radio\"] + label:before,\n[type=\"radio\"] + label:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 4px;\n  width: 16px;\n  height: 16px;\n  z-index: 0;\n  transition: .28s ease; }\n\n/* Unchecked styles */\n\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:not(:checked) + label:after,\n[type=\"radio\"]:checked + label:before,\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:before,\n[type=\"radio\"].with-gap:checked + label:after {\n  border-radius: 50%; }\n\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:not(:checked) + label:after {\n  border: 2px solid #5a5a5a; }\n\n[type=\"radio\"]:not(:checked) + label:after {\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n/* Checked styles */\n\n[type=\"radio\"]:checked + label:before {\n  border: 2px solid transparent; }\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:before,\n[type=\"radio\"].with-gap:checked + label:after {\n  border: 2px solid #26a69a; }\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:after {\n  background-color: #26a69a; }\n\n[type=\"radio\"]:checked + label:after {\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02); }\n\n/* Radio With gap */\n\n[type=\"radio\"].with-gap:checked + label:after {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5); }\n\n/* Focused styles */\n\n[type=\"radio\"].tabbed:focus + label:before {\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1); }\n\n/* Disabled Radio With gap */\n\n[type=\"radio\"].with-gap:disabled:checked + label:before {\n  border: 2px solid rgba(0, 0, 0, 0.42); }\n\n[type=\"radio\"].with-gap:disabled:checked + label:after {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.42); }\n\n/* Disabled style */\n\n[type=\"radio\"]:disabled:not(:checked) + label:before,\n[type=\"radio\"]:disabled:checked + label:before {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.42); }\n\n[type=\"radio\"]:disabled + label {\n  color: rgba(0, 0, 0, 0.42); }\n\n[type=\"radio\"]:disabled:not(:checked) + label:before {\n  border-color: rgba(0, 0, 0, 0.42); }\n\n[type=\"radio\"]:disabled:checked + label:after {\n  background-color: rgba(0, 0, 0, 0.42);\n  border-color: #949494; }\n\n/* Checkboxes\r\n   ========================================================================== */\n\n/* CUSTOM CSS CHECKBOXES */\n\nform p {\n  margin-bottom: 10px;\n  text-align: left; }\n\nform p:last-child {\n  margin-bottom: 0; }\n\n/* Remove default checkbox */\n\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none; }\n\n[type=\"checkbox\"] {\n  /* checkbox aspect */ }\n\n[type=\"checkbox\"] + label {\n    position: relative;\n    padding-left: 35px;\n    cursor: pointer;\n    display: inline-block;\n    height: 25px;\n    line-height: 25px;\n    font-size: 1rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n[type=\"checkbox\"] + label:before,\n  [type=\"checkbox\"]:not(.filled-in) + label:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    z-index: 0;\n    border: 2px solid #5a5a5a;\n    border-radius: 1px;\n    margin-top: 2px;\n    transition: .2s; }\n\n[type=\"checkbox\"]:not(.filled-in) + label:after {\n    border: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n[type=\"checkbox\"]:not(:checked):disabled + label:before {\n    border: none;\n    background-color: rgba(0, 0, 0, 0.42); }\n\n[type=\"checkbox\"].tabbed:focus + label:after {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    border: 0;\n    border-radius: 50%;\n    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n    background-color: rgba(0, 0, 0, 0.1); }\n\n[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -5px;\n  width: 12px;\n  height: 22px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #26a69a;\n  border-bottom: 2px solid #26a69a;\n  -webkit-transform: rotate(40deg);\n          transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%; }\n\n[type=\"checkbox\"]:checked:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.42);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.42); }\n\n/* Indeterminate checkbox */\n\n[type=\"checkbox\"]:indeterminate + label:before {\n  top: -11px;\n  left: -12px;\n  width: 10px;\n  height: 22px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid #26a69a;\n  border-bottom: none;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%; }\n\n[type=\"checkbox\"]:indeterminate:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.42);\n  background-color: transparent; }\n\n[type=\"checkbox\"].filled-in + label:after {\n  border-radius: 2px; }\n\n[type=\"checkbox\"].filled-in + label:before,\n[type=\"checkbox\"].filled-in + label:after {\n  content: '';\n  left: 0;\n  position: absolute;\n  /* .1s delay is for check animation */\n  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  z-index: 1; }\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:before {\n  width: 0;\n  height: 0;\n  border: 3px solid transparent;\n  left: 6px;\n  top: 10px;\n  -webkit-transform: rotateZ(37deg);\n          transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%; }\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:after {\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 2px solid #5a5a5a;\n  top: 0px;\n  z-index: 0; }\n\n[type=\"checkbox\"].filled-in:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 8px;\n  height: 13px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  -webkit-transform: rotateZ(37deg);\n          transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%; }\n\n[type=\"checkbox\"].filled-in:checked + label:after {\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0; }\n\n[type=\"checkbox\"].filled-in.tabbed:focus + label:after {\n  border-radius: 2px;\n  border-color: #5a5a5a;\n  background-color: rgba(0, 0, 0, 0.1); }\n\n[type=\"checkbox\"].filled-in.tabbed:checked:focus + label:after {\n  border-radius: 2px;\n  background-color: #26a69a;\n  border-color: #26a69a; }\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:before {\n  background-color: transparent;\n  border: 2px solid transparent; }\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:after {\n  border-color: transparent;\n  background-color: #949494; }\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:before {\n  background-color: transparent; }\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:after {\n  background-color: #949494;\n  border-color: #949494; }\n\n/* Switch\r\n   ========================================================================== */\n\n.switch,\n.switch * {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.switch label {\n  cursor: pointer; }\n\n.switch label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n.switch label input[type=checkbox]:checked + .lever {\n    background-color: #84c7c1; }\n\n.switch label input[type=checkbox]:checked + .lever:before, .switch label input[type=checkbox]:checked + .lever:after {\n      left: 18px; }\n\n.switch label input[type=checkbox]:checked + .lever:after {\n      background-color: #26a69a; }\n\n.switch label .lever {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 36px;\n  height: 14px;\n  background-color: rgba(0, 0, 0, 0.38);\n  border-radius: 15px;\n  margin-right: 10px;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n  margin: 0 16px; }\n\n.switch label .lever:before, .switch label .lever:after {\n    content: \"\";\n    position: absolute;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    left: 0;\n    top: -3px;\n    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, -webkit-transform .1s ease;\n    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;\n    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-transform .1s ease; }\n\n.switch label .lever:before {\n    background-color: rgba(38, 166, 154, 0.15); }\n\n.switch label .lever:after {\n    background-color: #F1F1F1;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,\ninput[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before {\n  -webkit-transform: scale(2.4);\n          transform: scale(2.4);\n  background-color: rgba(38, 166, 154, 0.15); }\n\ninput[type=checkbox]:not(:disabled) ~ .lever:active:before,\ninput[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::before {\n  -webkit-transform: scale(2.4);\n          transform: scale(2.4);\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.switch input[type=checkbox][disabled] + .lever {\n  cursor: default;\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.switch label input[type=checkbox][disabled] + .lever:after,\n.switch label input[type=checkbox][disabled]:checked + .lever:after {\n  background-color: #949494; }\n\n/* Select Field\r\n   ========================================================================== */\n\nselect {\n  display: none; }\n\nselect.browser-default {\n  display: block; }\n\nselect {\n  background-color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #f2f2f2;\n  border-radius: 2px;\n  height: 3rem; }\n\n.input-field > select {\n  display: block;\n  position: absolute;\n  width: 0;\n  pointer-events: none;\n  height: 0;\n  top: 0;\n  left: 0;\n  opacity: 0; }\n\n.select-label {\n  position: absolute; }\n\n.select-wrapper {\n  position: relative; }\n\n.select-wrapper.valid + label,\n  .select-wrapper.invalid + label {\n    width: 100%;\n    pointer-events: none; }\n\n.select-wrapper input.select-dropdown {\n    position: relative;\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n    border-bottom: 1px solid #9e9e9e;\n    outline: none;\n    height: 3rem;\n    line-height: 3rem;\n    width: 100%;\n    font-size: 1rem;\n    margin: 0 0 20px 0;\n    padding: 0;\n    display: block;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.select-wrapper span.caret {\n    color: initial;\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    height: 10px;\n    margin: auto 0;\n    font-size: 10px;\n    line-height: 10px; }\n\n.select-wrapper + label {\n    position: absolute;\n    top: -26px;\n    font-size: 0.8rem; }\n\nselect:disabled {\n  color: rgba(0, 0, 0, 0.42); }\n\n.select-wrapper.disabled span.caret,\n.select-wrapper.disabled + label {\n  color: rgba(0, 0, 0, 0.42); }\n\n.select-wrapper input.select-dropdown:disabled {\n  color: rgba(0, 0, 0, 0.42);\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.select-wrapper i {\n  color: rgba(0, 0, 0, 0.3); }\n\n.select-dropdown li.disabled,\n.select-dropdown li.disabled > span,\n.select-dropdown li.optgroup {\n  color: rgba(0, 0, 0, 0.3);\n  background-color: transparent; }\n\n.select-dropdown.dropdown-content li.active {\n  background-color: transparent; }\n\n.select-dropdown.dropdown-content li:hover {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.select-dropdown.dropdown-content li.selected {\n  background-color: rgba(0, 0, 0, 0.03); }\n\n.prefix ~ .select-wrapper {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem); }\n\n.prefix ~ label {\n  margin-left: 3rem; }\n\n.select-dropdown li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n  float: right; }\n\n.select-dropdown li.optgroup {\n  border-top: 1px solid #eee; }\n\n.select-dropdown li.optgroup.selected > span {\n    color: rgba(0, 0, 0, 0.7); }\n\n.select-dropdown li.optgroup > span {\n    color: rgba(0, 0, 0, 0.4); }\n\n.select-dropdown li.optgroup ~ li.optgroup-option {\n    padding-left: 1rem; }\n\n/* File Input\r\n   ========================================================================== */\n\n.file-field {\n  position: relative; }\n\n.file-field .file-path-wrapper {\n    overflow: hidden;\n    padding-left: 10px; }\n\n.file-field input.file-path {\n    width: 100%; }\n\n.file-field .btn, .file-field .btn-large {\n    float: left;\n    height: 3rem;\n    line-height: 3rem; }\n\n.file-field span {\n    cursor: pointer; }\n\n.file-field input[type=file] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0); }\n\n.file-field input[type=file]::-webkit-file-upload-button {\n      display: none; }\n\n/* Range\r\n   ========================================================================== */\n\n.range-field {\n  position: relative; }\n\ninput[type=range],\ninput[type=range] + .thumb {\n  cursor: pointer; }\n\ninput[type=range] {\n  position: relative;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  margin: 15px 0;\n  padding: 0; }\n\ninput[type=range]:focus {\n    outline: none; }\n\ninput[type=range] + .thumb {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  border: none;\n  height: 0;\n  width: 0;\n  border-radius: 50%;\n  background-color: #26a69a;\n  margin-left: 7px;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\ninput[type=range] + .thumb .value {\n    display: block;\n    width: 30px;\n    text-align: center;\n    color: #26a69a;\n    font-size: 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n\ninput[type=range] + .thumb.active {\n    border-radius: 50% 50% 50% 0; }\n\ninput[type=range] + .thumb.active .value {\n      color: #fff;\n      margin-left: -1px;\n      margin-top: 8px;\n      font-size: 10px; }\n\ninput[type=range] {\n  -webkit-appearance: none; }\n\ninput[type=range]::-webkit-slider-runnable-track {\n  height: 3px;\n  background: #c2c0c2;\n  border: none; }\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background-color: #26a69a;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  margin: -5px 0 0 0;\n  transition: .3s; }\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #ccc; }\n\ninput[type=range] {\n  /* fix for FF unable to apply focus style bug  */\n  border: 1px solid white;\n  /*required for proper track sizing in FF*/ }\n\ninput[type=range]::-moz-range-track {\n  height: 3px;\n  background: #ddd;\n  border: none; }\n\ninput[type=range]::-moz-range-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  margin-top: -5px; }\n\ninput[type=range]:-moz-focusring {\n  outline: 1px solid #fff;\n  outline-offset: -1px; }\n\ninput[type=range]:focus::-moz-range-track {\n  background: #ccc; }\n\ninput[type=range]::-ms-track {\n  height: 3px;\n  background: transparent;\n  border-color: transparent;\n  border-width: 6px 0;\n  /*remove default tick marks*/\n  color: transparent; }\n\ninput[type=range]::-ms-fill-lower {\n  background: #777; }\n\ninput[type=range]::-ms-fill-upper {\n  background: #ddd; }\n\ninput[type=range]::-ms-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a; }\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: #888; }\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #ccc; }\n\n/***************\r\n    Nav List\r\n***************/\n\n.table-of-contents.fixed {\n  position: fixed; }\n\n.table-of-contents li {\n  padding: 2px 0; }\n\n.table-of-contents a {\n  display: inline-block;\n  font-weight: 300;\n  color: #757575;\n  padding-left: 20px;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  letter-spacing: .4;\n  display: inline-block; }\n\n.table-of-contents a:hover {\n    color: #a8a8a8;\n    padding-left: 19px;\n    border-left: 1px solid #ee6e73; }\n\n.table-of-contents a.active {\n    font-weight: 500;\n    padding-left: 18px;\n    border-left: 2px solid #ee6e73; }\n\n.side-nav {\n  position: fixed;\n  width: 300px;\n  left: 0;\n  top: 0;\n  margin: 0;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  height: 100%;\n  height: calc(100% + 60px);\n  height: -moz-calc(100%);\n  padding-bottom: 60px;\n  background-color: #fff;\n  z-index: 999;\n  overflow-y: auto;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translateX(-105%);\n          transform: translateX(-105%); }\n\n.side-nav.right-aligned {\n    right: 0;\n    -webkit-transform: translateX(105%);\n            transform: translateX(105%);\n    left: auto;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n\n.side-nav .collapsible {\n    margin: 0; }\n\n.side-nav li {\n    float: none;\n    line-height: 48px; }\n\n.side-nav li.active {\n      background-color: rgba(0, 0, 0, 0.05); }\n\n.side-nav li > a {\n    color: rgba(0, 0, 0, 0.87);\n    display: block;\n    font-size: 14px;\n    font-weight: 500;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 32px; }\n\n.side-nav li > a:hover {\n      background-color: rgba(0, 0, 0, 0.05); }\n\n.side-nav li > a.btn, .side-nav li > a.btn-large, .side-nav li > a.btn-large, .side-nav li > a.btn-flat, .side-nav li > a.btn-floating {\n      margin: 10px 15px; }\n\n.side-nav li > a.btn, .side-nav li > a.btn-large, .side-nav li > a.btn-large, .side-nav li > a.btn-floating {\n      color: #fff; }\n\n.side-nav li > a.btn-flat {\n      color: #343434; }\n\n.side-nav li > a.btn:hover, .side-nav li > a.btn-large:hover, .side-nav li > a.btn-large:hover {\n      background-color: #2bbbad; }\n\n.side-nav li > a.btn-floating:hover {\n      background-color: #26a69a; }\n\n.side-nav li > a > i,\n    .side-nav li > a > [class^=\"mdi-\"], .side-nav li > a li > a > [class*=\"mdi-\"],\n    .side-nav li > a > i.material-icons {\n      float: left;\n      height: 48px;\n      line-height: 48px;\n      margin: 0 32px 0 0;\n      width: 24px;\n      color: rgba(0, 0, 0, 0.54); }\n\n.side-nav .divider {\n    margin: 8px 0 0 0; }\n\n.side-nav .subheader {\n    cursor: initial;\n    pointer-events: none;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 48px; }\n\n.side-nav .subheader:hover {\n      background-color: transparent; }\n\n.side-nav .user-view,\n  .side-nav .userView {\n    position: relative;\n    padding: 32px 32px 0;\n    margin-bottom: 8px; }\n\n.side-nav .user-view > a,\n    .side-nav .userView > a {\n      height: auto;\n      padding: 0; }\n\n.side-nav .user-view > a:hover,\n      .side-nav .userView > a:hover {\n        background-color: transparent; }\n\n.side-nav .user-view .background,\n    .side-nav .userView .background {\n      overflow: hidden;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: -1; }\n\n.side-nav .user-view .circle, .side-nav .user-view .name, .side-nav .user-view .email,\n    .side-nav .userView .circle,\n    .side-nav .userView .name,\n    .side-nav .userView .email {\n      display: block; }\n\n.side-nav .user-view .circle,\n    .side-nav .userView .circle {\n      height: 64px;\n      width: 64px; }\n\n.side-nav .user-view .name,\n    .side-nav .user-view .email,\n    .side-nav .userView .name,\n    .side-nav .userView .email {\n      font-size: 14px;\n      line-height: 24px; }\n\n.side-nav .user-view .name,\n    .side-nav .userView .name {\n      margin-top: 16px;\n      font-weight: 500; }\n\n.side-nav .user-view .email,\n    .side-nav .userView .email {\n      padding-bottom: 16px;\n      font-weight: 400; }\n\n.drag-target {\n  height: 100%;\n  width: 10px;\n  position: fixed;\n  top: 0;\n  z-index: 998; }\n\n.side-nav.fixed {\n  left: 0;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  position: fixed; }\n\n.side-nav.fixed.right-aligned {\n    right: 0;\n    left: auto; }\n\n@media only screen and (max-width: 992px) {\n  .side-nav.fixed {\n    -webkit-transform: translateX(-105%);\n            transform: translateX(-105%); }\n    .side-nav.fixed.right-aligned {\n      -webkit-transform: translateX(105%);\n              transform: translateX(105%); }\n  .side-nav a {\n    padding: 0 16px; }\n  .side-nav .user-view,\n  .side-nav .userView {\n    padding: 16px 16px 0; } }\n\n.side-nav .collapsible-body > ul:not(.collapsible) > li.active,\n.side-nav.fixed .collapsible-body > ul:not(.collapsible) > li.active {\n  background-color: #ee6e73; }\n\n.side-nav .collapsible-body > ul:not(.collapsible) > li.active a,\n  .side-nav.fixed .collapsible-body > ul:not(.collapsible) > li.active a {\n    color: #fff; }\n\n.side-nav .collapsible-body {\n  padding: 0; }\n\n#sidenav-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 120vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 997;\n  will-change: opacity; }\n\n/*\r\n    @license\r\n    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.\r\n    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\r\n    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\r\n    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\r\n    Code distributed by Google as part of the polymer project is also\r\n    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\r\n */\n\n/**************************/\n\n/* STYLES FOR THE SPINNER */\n\n/**************************/\n\n/*\r\n * Constants:\r\n *      STROKEWIDTH = 3px\r\n *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\r\n *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\r\n *      ARCSTARTROT = 216 degrees (how much the start location of the arc\r\n *                                should rotate each time, 216 gives us a\r\n *                                5 pointed star shape (it's 360/5 * 3).\r\n *                                For a 7 pointed star, we might do\r\n *                                360/7 * 3 = 154.286)\r\n *      CONTAINERWIDTH = 28px\r\n *      SHRINK_TIME = 400ms\r\n */\n\n.preloader-wrapper {\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 50px; }\n\n.preloader-wrapper.small {\n    width: 36px;\n    height: 36px; }\n\n.preloader-wrapper.big {\n    width: 64px;\n    height: 64px; }\n\n.preloader-wrapper.active {\n    /* duration: 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n    -webkit-animation: container-rotate 1568ms linear infinite;\n    animation: container-rotate 1568ms linear infinite; }\n\n@-webkit-keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-color: #26a69a; }\n\n.spinner-blue,\n.spinner-blue-only {\n  border-color: #4285f4; }\n\n.spinner-red,\n.spinner-red-only {\n  border-color: #db4437; }\n\n.spinner-yellow,\n.spinner-yellow-only {\n  border-color: #f4b400; }\n\n.spinner-green,\n.spinner-green-only {\n  border-color: #0f9d58; }\n\n/**\r\n * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\r\n *\r\n * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\r\n * guarantee that the animation will start _exactly_ after that value. So we avoid using\r\n * animation-delay and instead set custom keyframes for each color (as redundant as it\r\n * seems).\r\n *\r\n * We write out each animation in full (instead of separating animation-name,\r\n * animation-duration, etc.) because under the polyfill, Safari does not recognize those\r\n * specific properties properly, treats them as -webkit-animation, and overrides the\r\n * other animation rules. See https://github.com/Polymer/platform/issues/53.\r\n */\n\n.active .spinner-layer.spinner-blue {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer.spinner-red {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer.spinner-yellow {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer.spinner-green {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer,\n.active .spinner-layer.spinner-blue-only,\n.active .spinner-layer.spinner-red-only,\n.active .spinner-layer.spinner-yellow-only,\n.active .spinner-layer.spinner-green-only {\n  /* durations: 4 * ARCTIME */\n  opacity: 1;\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n@-webkit-keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg); }\n  /* 0.5 * ARCSIZE */\n  25% {\n    -webkit-transform: rotate(270deg); }\n  /* 1   * ARCSIZE */\n  37.5% {\n    -webkit-transform: rotate(405deg); }\n  /* 1.5 * ARCSIZE */\n  50% {\n    -webkit-transform: rotate(540deg); }\n  /* 2   * ARCSIZE */\n  62.5% {\n    -webkit-transform: rotate(675deg); }\n  /* 2.5 * ARCSIZE */\n  75% {\n    -webkit-transform: rotate(810deg); }\n  /* 3   * ARCSIZE */\n  87.5% {\n    -webkit-transform: rotate(945deg); }\n  /* 3.5 * ARCSIZE */\n  to {\n    -webkit-transform: rotate(1080deg); }\n  /* 4   * ARCSIZE */ }\n\n@keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg); }\n  /* 0.5 * ARCSIZE */\n  25% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg); }\n  /* 1   * ARCSIZE */\n  37.5% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg); }\n  /* 1.5 * ARCSIZE */\n  50% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg); }\n  /* 2   * ARCSIZE */\n  62.5% {\n    -webkit-transform: rotate(675deg);\n            transform: rotate(675deg); }\n  /* 2.5 * ARCSIZE */\n  75% {\n    -webkit-transform: rotate(810deg);\n            transform: rotate(810deg); }\n  /* 3   * ARCSIZE */\n  87.5% {\n    -webkit-transform: rotate(945deg);\n            transform: rotate(945deg); }\n  /* 3.5 * ARCSIZE */\n  to {\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg); }\n  /* 4   * ARCSIZE */ }\n\n@-webkit-keyframes blue-fade-in-out {\n  from {\n    opacity: 1; }\n  25% {\n    opacity: 1; }\n  26% {\n    opacity: 0; }\n  89% {\n    opacity: 0; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@keyframes blue-fade-in-out {\n  from {\n    opacity: 1; }\n  25% {\n    opacity: 1; }\n  26% {\n    opacity: 0; }\n  89% {\n    opacity: 0; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes red-fade-in-out {\n  from {\n    opacity: 0; }\n  15% {\n    opacity: 0; }\n  25% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  51% {\n    opacity: 0; } }\n\n@keyframes red-fade-in-out {\n  from {\n    opacity: 0; }\n  15% {\n    opacity: 0; }\n  25% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  51% {\n    opacity: 0; } }\n\n@-webkit-keyframes yellow-fade-in-out {\n  from {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  76% {\n    opacity: 0; } }\n\n@keyframes yellow-fade-in-out {\n  from {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  76% {\n    opacity: 0; } }\n\n@-webkit-keyframes green-fade-in-out {\n  from {\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  75% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes green-fade-in-out {\n  from {\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  75% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/**\r\n * Patch the gap that appear between the two adjacent div.circle-clipper while the\r\n * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).\r\n */\n\n.gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n\n.gap-patch .circle {\n  width: 1000%;\n  left: -450%; }\n\n.circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n\n.circle-clipper .circle {\n    width: 200%;\n    height: 100%;\n    border-width: 3px;\n    /* STROKEWIDTH */\n    border-style: solid;\n    border-color: inherit;\n    border-bottom-color: transparent !important;\n    border-radius: 50%;\n    -webkit-animation: none;\n    animation: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0; }\n\n.circle-clipper.left .circle {\n    left: 0;\n    border-right-color: transparent !important;\n    -webkit-transform: rotate(129deg);\n    transform: rotate(129deg); }\n\n.circle-clipper.right .circle {\n    left: -100%;\n    border-left-color: transparent !important;\n    -webkit-transform: rotate(-129deg);\n    transform: rotate(-129deg); }\n\n.active .circle-clipper.left .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .circle-clipper.right .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n@-webkit-keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg); }\n  50% {\n    -webkit-transform: rotate(-5deg); }\n  to {\n    -webkit-transform: rotate(130deg); } }\n\n@keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg); }\n  50% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg); }\n  to {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg); } }\n\n@-webkit-keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg); }\n  50% {\n    -webkit-transform: rotate(5deg); }\n  to {\n    -webkit-transform: rotate(-130deg); } }\n\n@keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg); }\n  50% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg); }\n  to {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg); } }\n\n#spinnerContainer.cooldown {\n  /* duration: SHRINK_TIME */\n  -webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n  animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1); }\n\n@-webkit-keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.slider {\n  position: relative;\n  height: 400px;\n  width: 100%; }\n\n.slider.fullscreen {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.slider.fullscreen ul.slides {\n      height: 100%; }\n\n.slider.fullscreen ul.indicators {\n      z-index: 2;\n      bottom: 30px; }\n\n.slider .slides {\n    background-color: #9e9e9e;\n    margin: 0;\n    height: 400px; }\n\n.slider .slides li {\n      opacity: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%;\n      height: inherit;\n      overflow: hidden; }\n\n.slider .slides li img {\n        height: 100%;\n        width: 100%;\n        background-size: cover;\n        background-position: center; }\n\n.slider .slides li .caption {\n        color: #fff;\n        position: absolute;\n        top: 15%;\n        left: 15%;\n        width: 70%;\n        opacity: 0; }\n\n.slider .slides li .caption p {\n          color: #e0e0e0; }\n\n.slider .slides li.active {\n        z-index: 2; }\n\n.slider .indicators {\n    position: absolute;\n    text-align: center;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: 0; }\n\n.slider .indicators .indicator-item {\n      display: inline-block;\n      position: relative;\n      cursor: pointer;\n      height: 16px;\n      width: 16px;\n      margin: 0 12px;\n      background-color: #e0e0e0;\n      transition: background-color .3s;\n      border-radius: 50%; }\n\n.slider .indicators .indicator-item.active {\n        background-color: #4CAF50; }\n\n.carousel {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 400px;\n  -webkit-perspective: 500px;\n          perspective: 500px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n          transform-origin: 0% 50%; }\n\n.carousel.carousel-slider {\n    top: 0;\n    left: 0; }\n\n.carousel.carousel-slider .carousel-fixed-item {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 20px;\n      z-index: 1; }\n\n.carousel.carousel-slider .carousel-fixed-item.with-indicators {\n        bottom: 68px; }\n\n.carousel.carousel-slider .carousel-item {\n      width: 100%;\n      height: 100%;\n      min-height: 400px;\n      position: absolute;\n      top: 0;\n      left: 0; }\n\n.carousel.carousel-slider .carousel-item h2 {\n        font-size: 24px;\n        font-weight: 500;\n        line-height: 32px; }\n\n.carousel.carousel-slider .carousel-item p {\n        font-size: 15px; }\n\n.carousel .carousel-item {\n    display: none;\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.carousel .carousel-item > img {\n      width: 100%; }\n\n.carousel .indicators {\n    position: absolute;\n    text-align: center;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: 0; }\n\n.carousel .indicators .indicator-item {\n      display: inline-block;\n      position: relative;\n      cursor: pointer;\n      height: 8px;\n      width: 8px;\n      margin: 24px 4px;\n      background-color: rgba(255, 255, 255, 0.5);\n      transition: background-color .3s;\n      border-radius: 50%; }\n\n.carousel .indicators .indicator-item.active {\n        background-color: #fff; }\n\n.carousel.scrolling .carousel-item .materialboxed,\n  .carousel .carousel-item:not(.active) .materialboxed {\n    pointer-events: none; }\n\n.tap-target-wrapper {\n  width: 800px;\n  height: 800px;\n  position: fixed;\n  z-index: 1000;\n  visibility: hidden;\n  transition: visibility 0s .3s; }\n\n.tap-target-wrapper.open {\n  visibility: visible;\n  transition: visibility 0s; }\n\n.tap-target-wrapper.open .tap-target {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: .95;\n    transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1); }\n\n.tap-target-wrapper.open .tap-target-wave::before {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n\n.tap-target-wrapper.open .tap-target-wave::after {\n    visibility: visible;\n    -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n            animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n    transition: opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;\n    transition: opacity .3s,\r transform .3s,\r visibility 0s 1s;\n    transition: opacity .3s,\r transform .3s,\r visibility 0s 1s,\r -webkit-transform .3s; }\n\n.tap-target {\n  position: absolute;\n  font-size: 1rem;\n  border-radius: 50%;\n  background-color: #ee6e73;\n  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.14), 0 10px 50px 0 rgba(0, 0, 0, 0.12), 0 30px 10px -20px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1); }\n\n.tap-target-content {\n  position: relative;\n  display: table-cell; }\n\n.tap-target-wave {\n  position: absolute;\n  border-radius: 50%;\n  z-index: 10001; }\n\n.tap-target-wave::before, .tap-target-wave::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #ffffff; }\n\n.tap-target-wave::before {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s; }\n\n.tap-target-wave::after {\n    visibility: hidden;\n    transition: opacity .3s,\r visibility 0s,\r -webkit-transform .3s;\n    transition: opacity .3s,\r transform .3s,\r visibility 0s;\n    transition: opacity .3s,\r transform .3s,\r visibility 0s,\r -webkit-transform .3s;\n    z-index: -1; }\n\n.tap-target-origin {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 10002;\n  position: absolute !important; }\n\n.tap-target-origin:not(.btn):not(.btn-large), .tap-target-origin:not(.btn):not(.btn-large):hover {\n    background: none; }\n\n@media only screen and (max-width: 600px) {\n  .tap-target, .tap-target-wrapper {\n    width: 600px;\n    height: 600px; } }\n\n.pulse {\n  overflow: initial;\n  position: relative; }\n\n.pulse::before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: inherit;\n    border-radius: inherit;\n    transition: opacity .3s, -webkit-transform .3s;\n    transition: opacity .3s, transform .3s;\n    transition: opacity .3s, transform .3s, -webkit-transform .3s;\n    -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n            animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n    z-index: -1; }\n\n@-webkit-keyframes pulse-animation {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5); } }\n\n@keyframes pulse-animation {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5); } }\n\n/* ==========================================================================\r\n   $BASE-PICKER\r\n   ========================================================================== */\n\n/**\r\n * Note: the root picker element should *NOT* be styled more than what's here.\r\n */\n\n.picker {\n  font-size: 16px;\n  text-align: left;\n  line-height: 1.2;\n  color: #000000;\n  position: absolute;\n  z-index: 10000;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  outline: none; }\n\n/**\r\n * The picker input element.\r\n */\n\n.picker__input {\n  cursor: default; }\n\n/**\r\n * When the picker is opened, the input element is \"activated\".\r\n */\n\n.picker__input.picker__input--active {\n  border-color: #0089ec; }\n\n/**\r\n * The holder is the only \"scrollable\" top-level container element.\r\n */\n\n.picker__holder {\n  width: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n\n/*!\r\n * Default mobile-first, responsive styling for pickadate.js\r\n * Demo: http://amsul.github.io/pickadate.js\r\n */\n\n/**\r\n * Note: the root picker element should *NOT* be styled more than what's here.\r\n */\n\n/**\r\n * Make the holder and frame fullscreen.\r\n */\n\n.picker__holder,\n.picker__frame {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 100%; }\n\n/**\r\n * The holder should overlay the entire screen.\r\n */\n\n.picker__holder {\n  position: fixed;\n  transition: background 0.15s ease-out, top 0s 0.15s;\n  -webkit-backface-visibility: hidden; }\n\n/**\r\n * The frame that bounds the box contents of the picker.\r\n */\n\n.picker__frame {\n  position: absolute;\n  margin: 0 auto;\n  min-width: 256px;\n  width: 300px;\n  max-height: 350px;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  -moz-opacity: 0;\n  opacity: 0;\n  transition: all 0.15s ease-out; }\n\n@media (min-height: 28.875em) {\n  .picker__frame {\n    overflow: visible;\n    top: auto;\n    bottom: -100%;\n    max-height: 80%; } }\n\n@media (min-height: 40.125em) {\n  .picker__frame {\n    margin-bottom: 7.5%; } }\n\n/**\r\n * The wrapper sets the stage to vertically align the box contents.\r\n */\n\n.picker__wrap {\n  display: table;\n  width: 100%;\n  height: 100%; }\n\n@media (min-height: 28.875em) {\n  .picker__wrap {\n    display: block; } }\n\n/**\r\n * The box contains all the picker contents.\r\n */\n\n.picker__box {\n  background: #ffffff;\n  display: table-cell;\n  vertical-align: middle; }\n\n@media (min-height: 28.875em) {\n  .picker__box {\n    display: block;\n    border: 1px solid #777777;\n    border-top-color: #898989;\n    border-bottom-width: 0;\n    border-radius: 5px 5px 0 0;\n    box-shadow: 0 12px 36px 16px rgba(0, 0, 0, 0.24); } }\n\n/**\r\n * When the picker opens...\r\n */\n\n.picker--opened .picker__holder {\n  top: 0;\n  background: transparent;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)\";\n  zoom: 1;\n  background: rgba(0, 0, 0, 0.32);\n  transition: background 0.15s ease-out; }\n\n.picker--opened .picker__frame {\n  top: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n  -moz-opacity: 1;\n  opacity: 1; }\n\n@media (min-height: 35.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto; } }\n\n/**\r\n * For `large` screens, transform into an inline picker.\r\n */\n\n/* ==========================================================================\r\n   CUSTOM MATERIALIZE STYLES\r\n   ========================================================================== */\n\n.picker__input.picker__input--active {\n  border-color: #E3F2FD; }\n\n.picker__frame {\n  margin: 0 auto;\n  max-width: 325px; }\n\n@media (min-height: 38.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto; } }\n\n@media only screen and (min-width: 601px) {\n  .picker__box {\n    display: flex; }\n  .picker__frame {\n    width: 80%;\n    max-width: 600px; } }\n\n/* ==========================================================================\r\n   $BASE-DATE-PICKER\r\n   ========================================================================== */\n\n/**\r\n * The picker box.\r\n */\n\n.picker__box {\n  padding: 0;\n  border-radius: 2px;\n  overflow: hidden; }\n\n/**\r\n * The header containing the month and year stuff.\r\n */\n\n.picker__header {\n  text-align: center;\n  position: relative;\n  margin-top: .75em; }\n\n/**\r\n * The month and year labels.\r\n */\n\n.picker__month,\n.picker__year {\n  display: inline-block;\n  margin-left: .25em;\n  margin-right: .25em; }\n\n/**\r\n * The month and year selectors.\r\n */\n\n.picker__select--month,\n.picker__select--year {\n  height: 2em;\n  padding: 0;\n  margin-left: .25em;\n  margin-right: .25em; }\n\n.picker__select--month.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 40%; }\n\n.picker__select--year.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 26%; }\n\n.picker__select--month:focus,\n.picker__select--year:focus {\n  border-color: rgba(0, 0, 0, 0.05); }\n\n/**\r\n * The month navigation buttons.\r\n */\n\n.picker__nav--prev,\n.picker__nav--next {\n  position: absolute;\n  padding: .5em 1.25em;\n  width: 1em;\n  height: 1em;\n  box-sizing: content-box;\n  top: -0.25em; }\n\n.picker__nav--prev {\n  left: -1em;\n  padding-right: 1.25em; }\n\n.picker__nav--next {\n  right: -1em;\n  padding-left: 1.25em; }\n\n.picker__nav--disabled,\n.picker__nav--disabled:hover,\n.picker__nav--disabled:before,\n.picker__nav--disabled:before:hover {\n  cursor: default;\n  background: none;\n  border-right-color: #f5f5f5;\n  border-left-color: #f5f5f5; }\n\n/**\r\n * The calendar table of dates\r\n */\n\n.picker__table {\n  text-align: center;\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  font-size: 1rem;\n  width: 100%;\n  margin-top: .75em;\n  margin-bottom: .5em; }\n\n.picker__table th, .picker__table td {\n  text-align: center; }\n\n.picker__table td {\n  margin: 0;\n  padding: 0; }\n\n/**\r\n * The weekday labels\r\n */\n\n.picker__weekday {\n  width: 14.285714286%;\n  font-size: .75em;\n  padding-bottom: .25em;\n  color: #999999;\n  font-weight: 500;\n  /* Increase the spacing a tad */ }\n\n@media (min-height: 33.875em) {\n  .picker__weekday {\n    padding-bottom: .5em; } }\n\n/**\r\n * The days on the calendar\r\n */\n\n.picker__day--today {\n  position: relative;\n  color: #595959;\n  letter-spacing: -.3;\n  padding: .75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent; }\n\n.picker__day--disabled:before {\n  border-top-color: #aaaaaa; }\n\n.picker__day--infocus:hover {\n  cursor: pointer;\n  color: #000;\n  font-weight: 500; }\n\n.picker__day--outfocus {\n  display: none;\n  padding: .75rem 0;\n  color: #fff; }\n\n.picker__day--outfocus:hover {\n  cursor: pointer;\n  color: #dddddd;\n  font-weight: 500; }\n\n.picker__day--highlighted:hover,\n.picker--focused .picker__day--highlighted {\n  cursor: pointer; }\n\n.picker__day--selected,\n.picker__day--selected:hover,\n.picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  background: #0089ec;\n  color: #ffffff; }\n\n.picker__day--disabled,\n.picker__day--disabled:hover,\n.picker--focused .picker__day--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default; }\n\n.picker__day--highlighted.picker__day--disabled,\n.picker__day--highlighted.picker__day--disabled:hover {\n  background: #bbbbbb; }\n\n/**\r\n * The footer containing the \"today\", \"clear\", and \"close\" buttons.\r\n */\n\n.picker__footer {\n  text-align: right; }\n\n.picker__button--today,\n.picker__button--clear,\n.picker__button--close {\n  border: 1px solid #ffffff;\n  background: #ffffff;\n  font-size: .8em;\n  padding: .66em 0;\n  font-weight: bold;\n  width: 33%;\n  display: inline-block;\n  vertical-align: bottom; }\n\n.picker__button--today:hover,\n.picker__button--clear:hover,\n.picker__button--close:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n  border-bottom-color: #b1dcfb; }\n\n.picker__button--today:focus,\n.picker__button--clear:focus,\n.picker__button--close:focus {\n  background: #b1dcfb;\n  border-color: rgba(0, 0, 0, 0.05);\n  outline: none; }\n\n.picker__button--today:before,\n.picker__button--clear:before,\n.picker__button--close:before {\n  position: relative;\n  display: inline-block;\n  height: 0; }\n\n.picker__button--today:before,\n.picker__button--clear:before {\n  content: \" \";\n  margin-right: .45em; }\n\n.picker__button--today:before {\n  top: -0.05em;\n  width: 0;\n  border-top: 0.66em solid #0059bc;\n  border-left: .66em solid transparent; }\n\n.picker__button--clear:before {\n  top: -0.25em;\n  width: .66em;\n  border-top: 3px solid #ee2200; }\n\n.picker__button--close:before {\n  content: \"\\D7\";\n  top: -0.1em;\n  vertical-align: top;\n  font-size: 1.1em;\n  margin-right: .35em;\n  color: #777777; }\n\n.picker__button--today[disabled],\n.picker__button--today[disabled]:hover {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default; }\n\n.picker__button--today[disabled]:before {\n  border-top-color: #aaaaaa; }\n\n/* ==========================================================================\r\n   CUSTOM MATERIALIZE STYLES\r\n   ========================================================================== */\n\n/*.picker__box {\r\n  border-radius: 2px;\r\n  overflow: hidden;\r\n}*/\n\n.picker__date-display {\n  text-align: left;\n  background-color: #26a69a;\n  color: #fff;\n  padding: 18px;\n  font-weight: 300; }\n\n@media only screen and (min-width: 601px) {\n  .picker__date-display {\n    flex: 1; }\n  .picker__weekday-display {\n    display: block; }\n  .picker__container__wrapper {\n    flex: 2; } }\n\n.picker__nav--prev:hover,\n.picker__nav--next:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #a1ded8; }\n\n.picker__weekday-display {\n  font-weight: 500;\n  font-size: 2.8rem;\n  margin-right: 5px;\n  margin-top: 4px; }\n\n.picker__month-display {\n  font-size: 2.8rem;\n  font-weight: 500; }\n\n.picker__day-display {\n  font-size: 2.8rem;\n  font-weight: 500;\n  margin-right: 5px; }\n\n.picker__year-display {\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.7); }\n\n/*.picker__box {\r\n  padding: 0;\r\n}*/\n\n.picker__calendar-container {\n  padding: 0 1rem; }\n\n.picker__calendar-container thead {\n    border: none; }\n\n.picker__table {\n  margin-top: 0;\n  margin-bottom: .5em; }\n\n.picker__day--infocus {\n  color: rgba(0, 0, 0, 0.87);\n  letter-spacing: -.3px;\n  padding: 0.75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent; }\n\n@media only screen and (min-width: 601px) {\n  .picker__day--infocus {\n    padding: 1.1rem 0; } }\n\n.picker__day.picker__day--today {\n  color: #26a69a; }\n\n.picker__day.picker__day--today.picker__day--selected {\n  color: #fff; }\n\n.picker__weekday {\n  font-size: .9rem; }\n\n.picker__day--selected,\n.picker__day--selected:hover,\n.picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  background-color: #26a69a;\n  color: #ffffff; }\n\n.picker__day--selected.picker__day--outfocus,\n  .picker__day--selected:hover.picker__day--outfocus,\n  .picker--focused .picker__day--selected.picker__day--outfocus {\n    background-color: #a1ded8; }\n\n.picker__footer {\n  text-align: right;\n  padding: 5px 10px; }\n\n.picker__close, .picker__today, .picker__clear {\n  font-size: 1.1rem;\n  padding: 0 1rem;\n  color: #26a69a; }\n\n.picker__clear {\n  color: #f44336;\n  float: left; }\n\n.picker__nav--prev:before,\n.picker__nav--next:before {\n  content: \" \";\n  border-top: .5em solid transparent;\n  border-bottom: .5em solid transparent;\n  border-right: 0.75em solid #676767;\n  width: 0;\n  height: 0;\n  display: block;\n  margin: 0 auto; }\n\n.picker__nav--next:before {\n  border-right: 0;\n  border-left: 0.75em solid #676767; }\n\nbutton.picker__today:focus, button.picker__clear:focus, button.picker__close:focus {\n  background-color: #a1ded8; }\n\n/* ==========================================================================\r\n   $BASE-TIME-PICKER\r\n   ========================================================================== */\n\n/**\r\n * The list of times.\r\n */\n\n.picker__list {\n  list-style: none;\n  padding: 0.75em 0 4.2em;\n  margin: 0; }\n\n/**\r\n * The times on the clock.\r\n */\n\n.picker__list-item {\n  border-bottom: 1px solid #ddd;\n  border-top: 1px solid #ddd;\n  margin-bottom: -1px;\n  position: relative;\n  background: #fff;\n  padding: .75em 1.25em; }\n\n@media (min-height: 46.75em) {\n  .picker__list-item {\n    padding: .5em 1em; } }\n\n/* Hovered time */\n\n.picker__list-item:hover {\n  cursor: pointer;\n  color: #000;\n  background: #b1dcfb;\n  border-color: #0089ec;\n  z-index: 10; }\n\n/* Highlighted and hovered/focused time */\n\n.picker__list-item--highlighted {\n  border-color: #0089ec;\n  z-index: 10; }\n\n.picker__list-item--highlighted:hover,\n.picker--focused .picker__list-item--highlighted {\n  cursor: pointer;\n  color: #000;\n  background: #b1dcfb; }\n\n/* Selected and hovered/focused time */\n\n.picker__list-item--selected,\n.picker__list-item--selected:hover,\n.picker--focused .picker__list-item--selected {\n  background: #0089ec;\n  color: #fff;\n  z-index: 10; }\n\n/* Disabled time */\n\n.picker__list-item--disabled,\n.picker__list-item--disabled:hover,\n.picker--focused .picker__list-item--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #ddd;\n  cursor: default;\n  border-color: #ddd;\n  z-index: auto; }\n\n/**\r\n * The clear button\r\n */\n\n.picker--time .picker__button--clear {\n  display: block;\n  width: 80%;\n  margin: 1em auto 0;\n  padding: 1em 1.25em;\n  background: none;\n  border: 0;\n  font-weight: 500;\n  font-size: .67em;\n  text-align: center;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.87); }\n\n.picker--time .picker__button--clear:hover,\n.picker--time .picker__button--clear:focus {\n  color: #000;\n  background: #b1dcfb;\n  background: #ee2200;\n  border-color: #ee2200;\n  cursor: pointer;\n  color: #fff;\n  outline: none; }\n\n.picker--time .picker__button--clear:before {\n  top: -0.25em;\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 1.25em;\n  font-weight: bold; }\n\n.picker--time .picker__button--clear:hover:before,\n.picker--time .picker__button--clear:focus:before {\n  color: #fff; }\n\n/* ==========================================================================\r\n   $DEFAULT-TIME-PICKER\r\n   ========================================================================== */\n\n/**\r\n * The frame the bounds the time picker.\r\n */\n\n.picker--time .picker__frame {\n  min-width: 256px;\n  max-width: 320px; }\n\n/**\r\n * The picker box.\r\n */\n\n.picker--time .picker__box {\n  font-size: 1em;\n  background: #f2f2f2;\n  padding: 0; }\n\n@media (min-height: 40.125em) {\n  .picker--time .picker__box {\n    margin-bottom: 5em; } }\n\n/* ==========================================================================\r\n   $DEFAULT-TIME-PICKER\r\n   ========================================================================== */\n\n.clockpicker-display {\n  font-size: 4rem;\n  font-weight: bold;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 400;\n  clear: both;\n  position: relative; }\n\n.clockpicker-span-am-pm {\n  font-size: 1.3rem;\n  position: absolute;\n  right: 1rem;\n  bottom: 0.3rem;\n  line-height: 2rem;\n  font-weight: 500; }\n\n@media only screen and (min-width: 601px) {\n  .clockpicker-display {\n    top: 32%; }\n  .clockpicker-span-am-pm {\n    position: relative;\n    right: auto;\n    bottom: auto;\n    text-align: center;\n    margin-top: 1.2rem; } }\n\n.text-primary {\n  color: white; }\n\n.clockpicker-span-hours {\n  margin-right: 3px; }\n\n.clockpicker-span-minutes {\n  margin-left: 3px; }\n\n.clockpicker-span-hours,\n.clockpicker-span-minutes,\n.clockpicker-span-am-pm div {\n  cursor: pointer; }\n\n.clockpicker-moving {\n  cursor: move; }\n\n.clockpicker-plate {\n  background-color: #eee;\n  border-radius: 50%;\n  width: 270px;\n  height: 270px;\n  overflow: visible;\n  position: relative;\n  margin: auto;\n  margin-top: 25px;\n  margin-bottom: 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.clockpicker-canvas,\n.clockpicker-dial {\n  width: 270px;\n  height: 270px;\n  position: absolute;\n  left: -1px;\n  top: -1px; }\n\n.clockpicker-minutes {\n  visibility: hidden; }\n\n.clockpicker-tick {\n  border-radius: 50%;\n  color: rgba(0, 0, 0, 0.87);\n  line-height: 40px;\n  text-align: center;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  cursor: pointer; }\n\n.clockpicker-tick.active,\n.clockpicker-tick:hover {\n  background-color: rgba(38, 166, 154, 0.25); }\n\n.clockpicker-dial {\n  transition: opacity 350ms, -webkit-transform 350ms;\n  transition: transform 350ms, opacity 350ms;\n  transition: transform 350ms, opacity 350ms, -webkit-transform 350ms; }\n\n.clockpicker-dial-out {\n  opacity: 0; }\n\n.clockpicker-hours.clockpicker-dial-out {\n  -webkit-transform: scale(1.2, 1.2);\n  transform: scale(1.2, 1.2); }\n\n.clockpicker-minutes.clockpicker-dial-out {\n  -webkit-transform: scale(0.8, 0.8);\n  transform: scale(0.8, 0.8); }\n\n.clockpicker-canvas {\n  transition: opacity 175ms; }\n\n.clockpicker-canvas-out {\n  opacity: 0.25; }\n\n.clockpicker-canvas-bearing {\n  stroke: none;\n  fill: #26a69a; }\n\n.clockpicker-canvas-bg {\n  stroke: none;\n  fill: #26a69a; }\n\n.clockpicker-canvas-bg-trans {\n  fill: #26a69a; }\n\n.clockpicker-canvas line {\n  stroke: #26a69a;\n  stroke-width: 4;\n  stroke-linecap: round;\n  /*shape-rendering: crispEdges;*/ }\n\n/deep/ .ngx-pagination .ng-star-inserted.current {\n  background-color: #CC8C4D; }\n\n/deep/ .ngx-pagination .ng-star-inserted:not(.current):hover {\n  color: #CC8C4D; }\n\n.ngx-pagination {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  align-content: center; }\n\n.ngx-pagination li.current {\n    background: #26a69a; }\n"

/***/ }),

/***/ "./src/app/all-services/all-offers/all-offers.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/all-services/all-offers/all-offers.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var AllOffersComponent = /** @class */ (function () {
    function AllOffersComponent() {
    }
    AllOffersComponent.prototype.ngOnInit = function () {
        console.log(this.services);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AllOffersComponent.prototype, "services", void 0);
    AllOffersComponent = __decorate([
        core_1.Component({
            selector: 'app-all-offers',
            template: __webpack_require__(/*! ./all-offers.component.html */ "./src/app/all-services/all-offers/all-offers.component.html"),
            styles: [__webpack_require__(/*! ./all-offers.component.scss */ "./src/app/all-services/all-offers/all-offers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AllOffersComponent);
    return AllOffersComponent;
}());
exports.AllOffersComponent = AllOffersComponent;


/***/ }),

/***/ "./src/app/all-services/all-offers/offer/offer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/all-services/all-offers/offer/offer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row serviceItem hoverable\" [routerLink]=\"'/service/' + service.uid\">\r\n  <div class=\"col s3 servicePhoto\">\r\n    <img [src]=\"service.imagePath[0]\" width=\"100%\" height=\"100%\"/>\r\n  </div>\r\n  <div class=\"col s6 serviceData1\">\r\n    <p class=\"serviceTitle truncate\">{{ service.title }}</p>\r\n    <p class=\"serviceDesc truncate\">{{ service.desc }}</p>\r\n    <p class=\"serviceRating\"><span class=\"amber-text text-darken-1\">★</span>{{ service.rating }}</p>\r\n  </div>\r\n  <div class=\"col s3 serviceData2\">\r\n    <p class=\"servicePrice\">{{ service.price }} EUR</p>\r\n    <div *ngIf=\"service.barter\" style=\"flex: 1;\"></div>\r\n    <div *ngIf=\"!service.barter\" style=\"flex: 2;\"></div>\r\n    <p *ngIf=\"service.barter\" class=\"serviceBarter green white-text\"> ✓ Barter</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/all-services/all-offers/offer/offer.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/all-services/all-offers/offer/offer.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".serviceItem {\n  align-items: center;\n  margin-bottom: 1rem;\n  border-radius: .5rem;\n  border: 1px solid #DFDFDF;\n  height: 7.5rem; }\n  .serviceItem .col {\n    height: 100%; }\n  .serviceItem .servicePhoto {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    -o-object-fit: cover;\n       object-fit: cover;\n    overflow: hidden;\n    padding: 0;\n    border-radius: .5rem 0 0 .5rem; }\n  .serviceItem .servicePhoto img {\n      -o-object-fit: cover;\n         object-fit: cover; }\n  .serviceItem .serviceData1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n  .serviceItem .serviceData1 * {\n      margin: 0; }\n  .serviceItem .serviceData1 .serviceTitle {\n      font-size: 1.25rem;\n      font-weight: bold; }\n  .serviceItem .serviceData1 .serviceRating {\n      font-size: 1.35rem;\n      font-weight: bold; }\n  .serviceItem .serviceData2 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0; }\n  .serviceItem .serviceData2 * {\n      display: flex;\n      margin: 0;\n      text-align: right; }\n  .serviceItem .serviceData2 .servicePrice {\n      justify-content: flex-end;\n      align-items: flex-end;\n      margin-right: 1rem;\n      font-weight: bold;\n      flex: 3; }\n  .serviceItem .serviceData2 .serviceBarter {\n      justify-content: center;\n      align-items: center;\n      flex: 1;\n      font-weight: bold;\n      border-radius: .5rem 0;\n      padding: .25rem .75rem;\n      align-self: flex-end;\n      text-align: center;\n      white-space: nowrap; }\n"

/***/ }),

/***/ "./src/app/all-services/all-offers/offer/offer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/all-services/all-offers/offer/offer.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var OfferComponent = /** @class */ (function () {
    function OfferComponent() {
    }
    OfferComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OfferComponent.prototype, "service", void 0);
    OfferComponent = __decorate([
        core_1.Component({
            selector: 'app-offer',
            template: __webpack_require__(/*! ./offer.component.html */ "./src/app/all-services/all-offers/offer/offer.component.html"),
            styles: [__webpack_require__(/*! ./offer.component.scss */ "./src/app/all-services/all-offers/offer/offer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OfferComponent);
    return OfferComponent;
}());
exports.OfferComponent = OfferComponent;


/***/ }),

/***/ "./src/app/all-services/all-services.component.html":
/*!**********************************************************!*\
  !*** ./src/app/all-services/all-services.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col s4\">\r\n    <app-filter (onFilter)=\"filter($event)\" [category]=\"category\"></app-filter>\r\n  </div>\r\n  <div class=\"col s1\" style=\"width: initial;\"></div>\r\n  <div class=\"col s7\">\r\n    <app-all-offers [services] = \"servicesToShow\">\r\n\r\n    </app-all-offers>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/all-services/all-services.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/all-services/all-services.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  align-content: center; }\n\n:host {\n  padding-top: 2.5rem;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/all-services/all-services.component.ts":
/*!********************************************************!*\
  !*** ./src/app/all-services/all-services.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var service_service_1 = __webpack_require__(/*! src/app/shared/services/service.service */ "./src/app/shared/services/service.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var AllServicesComponent = /** @class */ (function () {
    function AllServicesComponent(userService, serviceService, activatedRoute) {
        this.userService = userService;
        this.serviceService = serviceService;
        this.activatedRoute = activatedRoute;
        this.services = [];
        this.servicesToShow = [];
        this.hasCategory = false;
        this.category = '';
    }
    AllServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceService.getServices().on('value', function (snap) {
            for (var key in snap.val())
                for (var key2 in snap.val()[key])
                    (_a = _this.services).push.apply(_a, snap.val()[key][key2]);
            _this.services = _this.services.filter(function (service) { return (service.fromUser !== _this.userService.uid && service.status === 'my_service'); });
            _this.servicesToShow = _this.services.slice();
            _this.activatedRoute.params.subscribe(function (params) {
                if (params['category']) {
                    _this.hasCategory = true;
                    _this.category = params['category'];
                    _this.filter({
                        'category': _this.category
                    });
                }
            });
            var _a;
        });
    };
    AllServicesComponent.prototype.filter = function (event) {
        console.log(event);
        this.servicesToShow = this.services.slice();
        console.log(this.servicesToShow, this.services);
        var title = event.title;
        var service_type = event.service_type;
        var all_categories = event.all;
        var price = event.price;
        var barter = event.barter;
        var category = event.category;
        //title
        if (title) {
            this.servicesToShow = this.servicesToShow.filter(function (service) {
                var s1 = service.title.toLowerCase();
                var s2 = title.toLowerCase();
                return s1.search(s2) === 0;
            });
        }
        //service_type
        if (service_type && service_type.offer ^ service_type.request) {
            this.servicesToShow = this.servicesToShow.filter(function (service) {
                return service.isOffer === (service_type.offer === true ? 'offer' : 'request');
            });
        }
        //all_categories
        if (!all_categories && category) {
            this.servicesToShow = this.servicesToShow.filter(function (service) {
                return service.category === category;
            });
        }
        /* TODO: To add categories*/
        //price
        if (price && price.max) {
            this.servicesToShow = this.servicesToShow.filter(function (service) {
                return service.price <= price.max;
            });
        }
        if (price && price.min) {
            this.servicesToShow = this.servicesToShow.filter(function (service) {
                return service.price >= price.min;
            });
        }
        //barter
        if (barter) {
            this.servicesToShow = this.servicesToShow.filter(function (service) {
                return service.barter === barter;
            });
        }
        console.log(this.servicesToShow);
    };
    AllServicesComponent = __decorate([
        core_1.Component({
            selector: 'app-all-services',
            template: __webpack_require__(/*! ./all-services.component.html */ "./src/app/all-services/all-services.component.html"),
            styles: [__webpack_require__(/*! ./all-services.component.scss */ "./src/app/all-services/all-services.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            service_service_1.ServiceService,
            router_1.ActivatedRoute])
    ], AllServicesComponent);
    return AllServicesComponent;
}());
exports.AllServicesComponent = AllServicesComponent;


/***/ }),

/***/ "./src/app/all-services/filter/filter.component.html":
/*!***********************************************************!*\
  !*** ./src/app/all-services/filter/filter.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"servicesFilter\">\r\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\r\n\t\t<div class=\"input-field col s12\">\r\n\t\t\t<input type=\"text\" placeholder=\"Caută\" formControlName=\"title\">\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col s12\" formGroupName=\"service_type\">\r\n\t\t\t<fieldset>\r\n\t\t\t\t<legend>Tip serviciu</legend>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<input name=\"service_type\" type=\"checkbox\" id=\"offer\" [checked]=\"'offer'\" formControlName=\"offer\"/>\r\n\t\t\t\t\t<label for=\"offer\">Ofertă</label>\r\n\t\t\t\t</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<input name=\"service_type\" type=\"checkbox\" id=\"request\" [checked]=\"'request'\" formControlName=\"request\"/>\r\n\t\t\t\t\t<label for=\"request\">Cerere</label>\r\n\t\t\t\t</p>\r\n\t\t\t</fieldset>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<fieldset>\r\n\t\t\t\t<legend>Categorie</legend>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t<input name=\"all\" type=\"checkbox\" id=\"all\" [value]=\"false\" formControlName=\"all\" checked=\"checked\"/>\r\n\t\t\t\t\t<label for=\"all\">Toate</label>\r\n\t\t\t\t</p>\r\n        <div>\r\n          <p-autoComplete formControlName=\"category\"\r\n                          [suggestions]=\"categoriesToShow\"\r\n                          (completeMethod)=\"search($event)\"\r\n                          [disabled]=\"this.form.get('all').value\"\r\n          ></p-autoComplete>\r\n        </div>\r\n\t\t\t</fieldset>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<fieldset formGroupName=\"price\">\r\n\t\t\t\t<legend>Preț</legend>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<input type=\"number\" placeholder=\"Minim\" formControlName=\"min\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<input type=\"number\" placeholder=\"Maxim\" formControlName=\"max\">\r\n\t\t\t\t</div>\r\n\t\t\t</fieldset>\r\n\t\t</div>\r\n\r\n    <div class=\"col s12\">\r\n      <fieldset>\r\n        <p>\r\n          <input type=\"checkbox\" id=\"barter\" checked=\"checked\" formControlName=\"barter\"/>\r\n          <label for=\"barter\">Barter</label>\r\n        </p>\r\n      </fieldset>\r\n    </div>\r\n\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<button class=\"waves-effect waves-light btn-large hoverable\" style=\"background-color: black\" type=\"submit\">Filtrează servicii</button>\r\n\t\t</div>\r\n  </form>\r\n</div>\r\n<!-- TODO: Make form usable-->\r\n"

/***/ }),

/***/ "./src/app/all-services/filter/filter.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/all-services/filter/filter.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form div {\n  margin-bottom: 1rem; }\n"

/***/ }),

/***/ "./src/app/all-services/filter/filter.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/all-services/filter/filter.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var FilterComponent = /** @class */ (function () {
    function FilterComponent(userService) {
        this.userService = userService;
        this.onFilter = new core_1.EventEmitter();
        this.form = new forms_1.FormGroup({
            service_type: new forms_1.FormGroup({
                offer: new forms_1.FormControl(''),
                request: new forms_1.FormControl('')
            }),
            title: new forms_1.FormControl(''),
            loc: new forms_1.FormControl(''),
            barter: new forms_1.FormControl(''),
            price: new forms_1.FormGroup({
                min: new forms_1.FormControl(''),
                max: new forms_1.FormControl('')
            }),
            all: new forms_1.FormControl(''),
            category: new forms_1.FormControl('')
        });
    }
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.patchValue({
            'barter': false,
            'all': false,
            'service_type': {
                'offer': true,
                'request': true
            },
            'category': this.category
        });
        this.userService.getCategories().on('value', function (snap) {
            _this.categories = snap.val();
        });
    };
    FilterComponent.prototype.onSubmit = function () {
        console.log(this.form.value);
        var ans = this.form.value;
        if (!ans.service_type.offer)
            ans.service_type.offer = false;
        if (!ans.service_type.request)
            ans.service_type.request = false;
        this.onFilter.emit(this.form.value);
    };
    FilterComponent.prototype.search = function (event) {
        this.categoriesToShow = this.categories.filter(function (category) {
            var s1 = category.toLowerCase();
            var s2 = event.query.toLowerCase();
            return s1.search(s2) === 0;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "category", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "onFilter", void 0);
    FilterComponent = __decorate([
        core_1.Component({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/all-services/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/all-services/filter/filter.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <app-header></app-header>\r\n</header>\r\n\r\n<!--<main style=\"margin-top: 5%\">-->\r\n<main>\r\n  <div class=\"container\" >\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</main>\r\n\r\n<footer class=\"footer page-footer\">\r\n    <app-footer></app-footer>\r\n</footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".materialize-red {\n  background-color: #e51c23 !important; }\n\n.materialize-red-text {\n  color: #e51c23 !important; }\n\n.materialize-red.lighten-5 {\n  background-color: #fdeaeb !important; }\n\n.materialize-red-text.text-lighten-5 {\n  color: #fdeaeb !important; }\n\n.materialize-red.lighten-4 {\n  background-color: #f8c1c3 !important; }\n\n.materialize-red-text.text-lighten-4 {\n  color: #f8c1c3 !important; }\n\n.materialize-red.lighten-3 {\n  background-color: #f3989b !important; }\n\n.materialize-red-text.text-lighten-3 {\n  color: #f3989b !important; }\n\n.materialize-red.lighten-2 {\n  background-color: #ee6e73 !important; }\n\n.materialize-red-text.text-lighten-2 {\n  color: #ee6e73 !important; }\n\n.materialize-red.lighten-1 {\n  background-color: #ea454b !important; }\n\n.materialize-red-text.text-lighten-1 {\n  color: #ea454b !important; }\n\n.materialize-red.darken-1 {\n  background-color: #d0181e !important; }\n\n.materialize-red-text.text-darken-1 {\n  color: #d0181e !important; }\n\n.materialize-red.darken-2 {\n  background-color: #b9151b !important; }\n\n.materialize-red-text.text-darken-2 {\n  color: #b9151b !important; }\n\n.materialize-red.darken-3 {\n  background-color: #a21318 !important; }\n\n.materialize-red-text.text-darken-3 {\n  color: #a21318 !important; }\n\n.materialize-red.darken-4 {\n  background-color: #8b1014 !important; }\n\n.materialize-red-text.text-darken-4 {\n  color: #8b1014 !important; }\n\n.red {\n  background-color: #F44336 !important; }\n\n.red-text {\n  color: #F44336 !important; }\n\n.red.lighten-5 {\n  background-color: #FFEBEE !important; }\n\n.red-text.text-lighten-5 {\n  color: #FFEBEE !important; }\n\n.red.lighten-4 {\n  background-color: #FFCDD2 !important; }\n\n.red-text.text-lighten-4 {\n  color: #FFCDD2 !important; }\n\n.red.lighten-3 {\n  background-color: #EF9A9A !important; }\n\n.red-text.text-lighten-3 {\n  color: #EF9A9A !important; }\n\n.red.lighten-2 {\n  background-color: #E57373 !important; }\n\n.red-text.text-lighten-2 {\n  color: #E57373 !important; }\n\n.red.lighten-1 {\n  background-color: #EF5350 !important; }\n\n.red-text.text-lighten-1 {\n  color: #EF5350 !important; }\n\n.red.darken-1 {\n  background-color: #E53935 !important; }\n\n.red-text.text-darken-1 {\n  color: #E53935 !important; }\n\n.red.darken-2 {\n  background-color: #D32F2F !important; }\n\n.red-text.text-darken-2 {\n  color: #D32F2F !important; }\n\n.red.darken-3 {\n  background-color: #C62828 !important; }\n\n.red-text.text-darken-3 {\n  color: #C62828 !important; }\n\n.red.darken-4 {\n  background-color: #B71C1C !important; }\n\n.red-text.text-darken-4 {\n  color: #B71C1C !important; }\n\n.red.accent-1 {\n  background-color: #FF8A80 !important; }\n\n.red-text.text-accent-1 {\n  color: #FF8A80 !important; }\n\n.red.accent-2 {\n  background-color: #FF5252 !important; }\n\n.red-text.text-accent-2 {\n  color: #FF5252 !important; }\n\n.red.accent-3 {\n  background-color: #FF1744 !important; }\n\n.red-text.text-accent-3 {\n  color: #FF1744 !important; }\n\n.red.accent-4 {\n  background-color: #D50000 !important; }\n\n.red-text.text-accent-4 {\n  color: #D50000 !important; }\n\n.pink {\n  background-color: #e91e63 !important; }\n\n.pink-text {\n  color: #e91e63 !important; }\n\n.pink.lighten-5 {\n  background-color: #fce4ec !important; }\n\n.pink-text.text-lighten-5 {\n  color: #fce4ec !important; }\n\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important; }\n\n.pink-text.text-lighten-4 {\n  color: #f8bbd0 !important; }\n\n.pink.lighten-3 {\n  background-color: #f48fb1 !important; }\n\n.pink-text.text-lighten-3 {\n  color: #f48fb1 !important; }\n\n.pink.lighten-2 {\n  background-color: #f06292 !important; }\n\n.pink-text.text-lighten-2 {\n  color: #f06292 !important; }\n\n.pink.lighten-1 {\n  background-color: #ec407a !important; }\n\n.pink-text.text-lighten-1 {\n  color: #ec407a !important; }\n\n.pink.darken-1 {\n  background-color: #d81b60 !important; }\n\n.pink-text.text-darken-1 {\n  color: #d81b60 !important; }\n\n.pink.darken-2 {\n  background-color: #c2185b !important; }\n\n.pink-text.text-darken-2 {\n  color: #c2185b !important; }\n\n.pink.darken-3 {\n  background-color: #ad1457 !important; }\n\n.pink-text.text-darken-3 {\n  color: #ad1457 !important; }\n\n.pink.darken-4 {\n  background-color: #880e4f !important; }\n\n.pink-text.text-darken-4 {\n  color: #880e4f !important; }\n\n.pink.accent-1 {\n  background-color: #ff80ab !important; }\n\n.pink-text.text-accent-1 {\n  color: #ff80ab !important; }\n\n.pink.accent-2 {\n  background-color: #ff4081 !important; }\n\n.pink-text.text-accent-2 {\n  color: #ff4081 !important; }\n\n.pink.accent-3 {\n  background-color: #f50057 !important; }\n\n.pink-text.text-accent-3 {\n  color: #f50057 !important; }\n\n.pink.accent-4 {\n  background-color: #c51162 !important; }\n\n.pink-text.text-accent-4 {\n  color: #c51162 !important; }\n\n.purple {\n  background-color: #9c27b0 !important; }\n\n.purple-text {\n  color: #9c27b0 !important; }\n\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important; }\n\n.purple-text.text-lighten-5 {\n  color: #f3e5f5 !important; }\n\n.purple.lighten-4 {\n  background-color: #e1bee7 !important; }\n\n.purple-text.text-lighten-4 {\n  color: #e1bee7 !important; }\n\n.purple.lighten-3 {\n  background-color: #ce93d8 !important; }\n\n.purple-text.text-lighten-3 {\n  color: #ce93d8 !important; }\n\n.purple.lighten-2 {\n  background-color: #ba68c8 !important; }\n\n.purple-text.text-lighten-2 {\n  color: #ba68c8 !important; }\n\n.purple.lighten-1 {\n  background-color: #ab47bc !important; }\n\n.purple-text.text-lighten-1 {\n  color: #ab47bc !important; }\n\n.purple.darken-1 {\n  background-color: #8e24aa !important; }\n\n.purple-text.text-darken-1 {\n  color: #8e24aa !important; }\n\n.purple.darken-2 {\n  background-color: #7b1fa2 !important; }\n\n.purple-text.text-darken-2 {\n  color: #7b1fa2 !important; }\n\n.purple.darken-3 {\n  background-color: #6a1b9a !important; }\n\n.purple-text.text-darken-3 {\n  color: #6a1b9a !important; }\n\n.purple.darken-4 {\n  background-color: #4a148c !important; }\n\n.purple-text.text-darken-4 {\n  color: #4a148c !important; }\n\n.purple.accent-1 {\n  background-color: #ea80fc !important; }\n\n.purple-text.text-accent-1 {\n  color: #ea80fc !important; }\n\n.purple.accent-2 {\n  background-color: #e040fb !important; }\n\n.purple-text.text-accent-2 {\n  color: #e040fb !important; }\n\n.purple.accent-3 {\n  background-color: #d500f9 !important; }\n\n.purple-text.text-accent-3 {\n  color: #d500f9 !important; }\n\n.purple.accent-4 {\n  background-color: #aa00ff !important; }\n\n.purple-text.text-accent-4 {\n  color: #aa00ff !important; }\n\n.deep-purple {\n  background-color: #673ab7 !important; }\n\n.deep-purple-text {\n  color: #673ab7 !important; }\n\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important; }\n\n.deep-purple-text.text-lighten-5 {\n  color: #ede7f6 !important; }\n\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important; }\n\n.deep-purple-text.text-lighten-4 {\n  color: #d1c4e9 !important; }\n\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important; }\n\n.deep-purple-text.text-lighten-3 {\n  color: #b39ddb !important; }\n\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important; }\n\n.deep-purple-text.text-lighten-2 {\n  color: #9575cd !important; }\n\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important; }\n\n.deep-purple-text.text-lighten-1 {\n  color: #7e57c2 !important; }\n\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important; }\n\n.deep-purple-text.text-darken-1 {\n  color: #5e35b1 !important; }\n\n.deep-purple.darken-2 {\n  background-color: #512da8 !important; }\n\n.deep-purple-text.text-darken-2 {\n  color: #512da8 !important; }\n\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important; }\n\n.deep-purple-text.text-darken-3 {\n  color: #4527a0 !important; }\n\n.deep-purple.darken-4 {\n  background-color: #311b92 !important; }\n\n.deep-purple-text.text-darken-4 {\n  color: #311b92 !important; }\n\n.deep-purple.accent-1 {\n  background-color: #b388ff !important; }\n\n.deep-purple-text.text-accent-1 {\n  color: #b388ff !important; }\n\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important; }\n\n.deep-purple-text.text-accent-2 {\n  color: #7c4dff !important; }\n\n.deep-purple.accent-3 {\n  background-color: #651fff !important; }\n\n.deep-purple-text.text-accent-3 {\n  color: #651fff !important; }\n\n.deep-purple.accent-4 {\n  background-color: #6200ea !important; }\n\n.deep-purple-text.text-accent-4 {\n  color: #6200ea !important; }\n\n.indigo {\n  background-color: #3f51b5 !important; }\n\n.indigo-text {\n  color: #3f51b5 !important; }\n\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important; }\n\n.indigo-text.text-lighten-5 {\n  color: #e8eaf6 !important; }\n\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important; }\n\n.indigo-text.text-lighten-4 {\n  color: #c5cae9 !important; }\n\n.indigo.lighten-3 {\n  background-color: #9fa8da !important; }\n\n.indigo-text.text-lighten-3 {\n  color: #9fa8da !important; }\n\n.indigo.lighten-2 {\n  background-color: #7986cb !important; }\n\n.indigo-text.text-lighten-2 {\n  color: #7986cb !important; }\n\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important; }\n\n.indigo-text.text-lighten-1 {\n  color: #5c6bc0 !important; }\n\n.indigo.darken-1 {\n  background-color: #3949ab !important; }\n\n.indigo-text.text-darken-1 {\n  color: #3949ab !important; }\n\n.indigo.darken-2 {\n  background-color: #303f9f !important; }\n\n.indigo-text.text-darken-2 {\n  color: #303f9f !important; }\n\n.indigo.darken-3 {\n  background-color: #283593 !important; }\n\n.indigo-text.text-darken-3 {\n  color: #283593 !important; }\n\n.indigo.darken-4 {\n  background-color: #1a237e !important; }\n\n.indigo-text.text-darken-4 {\n  color: #1a237e !important; }\n\n.indigo.accent-1 {\n  background-color: #8c9eff !important; }\n\n.indigo-text.text-accent-1 {\n  color: #8c9eff !important; }\n\n.indigo.accent-2 {\n  background-color: #536dfe !important; }\n\n.indigo-text.text-accent-2 {\n  color: #536dfe !important; }\n\n.indigo.accent-3 {\n  background-color: #3d5afe !important; }\n\n.indigo-text.text-accent-3 {\n  color: #3d5afe !important; }\n\n.indigo.accent-4 {\n  background-color: #304ffe !important; }\n\n.indigo-text.text-accent-4 {\n  color: #304ffe !important; }\n\n.blue {\n  background-color: #2196F3 !important; }\n\n.blue-text {\n  color: #2196F3 !important; }\n\n.blue.lighten-5 {\n  background-color: #E3F2FD !important; }\n\n.blue-text.text-lighten-5 {\n  color: #E3F2FD !important; }\n\n.blue.lighten-4 {\n  background-color: #BBDEFB !important; }\n\n.blue-text.text-lighten-4 {\n  color: #BBDEFB !important; }\n\n.blue.lighten-3 {\n  background-color: #90CAF9 !important; }\n\n.blue-text.text-lighten-3 {\n  color: #90CAF9 !important; }\n\n.blue.lighten-2 {\n  background-color: #64B5F6 !important; }\n\n.blue-text.text-lighten-2 {\n  color: #64B5F6 !important; }\n\n.blue.lighten-1 {\n  background-color: #42A5F5 !important; }\n\n.blue-text.text-lighten-1 {\n  color: #42A5F5 !important; }\n\n.blue.darken-1 {\n  background-color: #1E88E5 !important; }\n\n.blue-text.text-darken-1 {\n  color: #1E88E5 !important; }\n\n.blue.darken-2 {\n  background-color: #1976D2 !important; }\n\n.blue-text.text-darken-2 {\n  color: #1976D2 !important; }\n\n.blue.darken-3 {\n  background-color: #1565C0 !important; }\n\n.blue-text.text-darken-3 {\n  color: #1565C0 !important; }\n\n.blue.darken-4 {\n  background-color: #0D47A1 !important; }\n\n.blue-text.text-darken-4 {\n  color: #0D47A1 !important; }\n\n.blue.accent-1 {\n  background-color: #82B1FF !important; }\n\n.blue-text.text-accent-1 {\n  color: #82B1FF !important; }\n\n.blue.accent-2 {\n  background-color: #448AFF !important; }\n\n.blue-text.text-accent-2 {\n  color: #448AFF !important; }\n\n.blue.accent-3 {\n  background-color: #2979FF !important; }\n\n.blue-text.text-accent-3 {\n  color: #2979FF !important; }\n\n.blue.accent-4 {\n  background-color: #2962FF !important; }\n\n.blue-text.text-accent-4 {\n  color: #2962FF !important; }\n\n.light-blue {\n  background-color: #03a9f4 !important; }\n\n.light-blue-text {\n  color: #03a9f4 !important; }\n\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important; }\n\n.light-blue-text.text-lighten-5 {\n  color: #e1f5fe !important; }\n\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important; }\n\n.light-blue-text.text-lighten-4 {\n  color: #b3e5fc !important; }\n\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important; }\n\n.light-blue-text.text-lighten-3 {\n  color: #81d4fa !important; }\n\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important; }\n\n.light-blue-text.text-lighten-2 {\n  color: #4fc3f7 !important; }\n\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important; }\n\n.light-blue-text.text-lighten-1 {\n  color: #29b6f6 !important; }\n\n.light-blue.darken-1 {\n  background-color: #039be5 !important; }\n\n.light-blue-text.text-darken-1 {\n  color: #039be5 !important; }\n\n.light-blue.darken-2 {\n  background-color: #0288d1 !important; }\n\n.light-blue-text.text-darken-2 {\n  color: #0288d1 !important; }\n\n.light-blue.darken-3 {\n  background-color: #0277bd !important; }\n\n.light-blue-text.text-darken-3 {\n  color: #0277bd !important; }\n\n.light-blue.darken-4 {\n  background-color: #01579b !important; }\n\n.light-blue-text.text-darken-4 {\n  color: #01579b !important; }\n\n.light-blue.accent-1 {\n  background-color: #80d8ff !important; }\n\n.light-blue-text.text-accent-1 {\n  color: #80d8ff !important; }\n\n.light-blue.accent-2 {\n  background-color: #40c4ff !important; }\n\n.light-blue-text.text-accent-2 {\n  color: #40c4ff !important; }\n\n.light-blue.accent-3 {\n  background-color: #00b0ff !important; }\n\n.light-blue-text.text-accent-3 {\n  color: #00b0ff !important; }\n\n.light-blue.accent-4 {\n  background-color: #0091ea !important; }\n\n.light-blue-text.text-accent-4 {\n  color: #0091ea !important; }\n\n.cyan {\n  background-color: #00bcd4 !important; }\n\n.cyan-text {\n  color: #00bcd4 !important; }\n\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important; }\n\n.cyan-text.text-lighten-5 {\n  color: #e0f7fa !important; }\n\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important; }\n\n.cyan-text.text-lighten-4 {\n  color: #b2ebf2 !important; }\n\n.cyan.lighten-3 {\n  background-color: #80deea !important; }\n\n.cyan-text.text-lighten-3 {\n  color: #80deea !important; }\n\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important; }\n\n.cyan-text.text-lighten-2 {\n  color: #4dd0e1 !important; }\n\n.cyan.lighten-1 {\n  background-color: #26c6da !important; }\n\n.cyan-text.text-lighten-1 {\n  color: #26c6da !important; }\n\n.cyan.darken-1 {\n  background-color: #00acc1 !important; }\n\n.cyan-text.text-darken-1 {\n  color: #00acc1 !important; }\n\n.cyan.darken-2 {\n  background-color: #0097a7 !important; }\n\n.cyan-text.text-darken-2 {\n  color: #0097a7 !important; }\n\n.cyan.darken-3 {\n  background-color: #00838f !important; }\n\n.cyan-text.text-darken-3 {\n  color: #00838f !important; }\n\n.cyan.darken-4 {\n  background-color: #006064 !important; }\n\n.cyan-text.text-darken-4 {\n  color: #006064 !important; }\n\n.cyan.accent-1 {\n  background-color: #84ffff !important; }\n\n.cyan-text.text-accent-1 {\n  color: #84ffff !important; }\n\n.cyan.accent-2 {\n  background-color: #18ffff !important; }\n\n.cyan-text.text-accent-2 {\n  color: #18ffff !important; }\n\n.cyan.accent-3 {\n  background-color: #00e5ff !important; }\n\n.cyan-text.text-accent-3 {\n  color: #00e5ff !important; }\n\n.cyan.accent-4 {\n  background-color: #00b8d4 !important; }\n\n.cyan-text.text-accent-4 {\n  color: #00b8d4 !important; }\n\n.teal {\n  background-color: #009688 !important; }\n\n.teal-text {\n  color: #009688 !important; }\n\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important; }\n\n.teal-text.text-lighten-5 {\n  color: #e0f2f1 !important; }\n\n.teal.lighten-4 {\n  background-color: #b2dfdb !important; }\n\n.teal-text.text-lighten-4 {\n  color: #b2dfdb !important; }\n\n.teal.lighten-3 {\n  background-color: #80cbc4 !important; }\n\n.teal-text.text-lighten-3 {\n  color: #80cbc4 !important; }\n\n.teal.lighten-2 {\n  background-color: #4db6ac !important; }\n\n.teal-text.text-lighten-2 {\n  color: #4db6ac !important; }\n\n.teal.lighten-1 {\n  background-color: #26a69a !important; }\n\n.teal-text.text-lighten-1 {\n  color: #26a69a !important; }\n\n.teal.darken-1 {\n  background-color: #00897b !important; }\n\n.teal-text.text-darken-1 {\n  color: #00897b !important; }\n\n.teal.darken-2 {\n  background-color: #00796b !important; }\n\n.teal-text.text-darken-2 {\n  color: #00796b !important; }\n\n.teal.darken-3 {\n  background-color: #00695c !important; }\n\n.teal-text.text-darken-3 {\n  color: #00695c !important; }\n\n.teal.darken-4 {\n  background-color: #004d40 !important; }\n\n.teal-text.text-darken-4 {\n  color: #004d40 !important; }\n\n.teal.accent-1 {\n  background-color: #a7ffeb !important; }\n\n.teal-text.text-accent-1 {\n  color: #a7ffeb !important; }\n\n.teal.accent-2 {\n  background-color: #64ffda !important; }\n\n.teal-text.text-accent-2 {\n  color: #64ffda !important; }\n\n.teal.accent-3 {\n  background-color: #1de9b6 !important; }\n\n.teal-text.text-accent-3 {\n  color: #1de9b6 !important; }\n\n.teal.accent-4 {\n  background-color: #00bfa5 !important; }\n\n.teal-text.text-accent-4 {\n  color: #00bfa5 !important; }\n\n.green {\n  background-color: #4CAF50 !important; }\n\n.green-text {\n  color: #4CAF50 !important; }\n\n.green.lighten-5 {\n  background-color: #E8F5E9 !important; }\n\n.green-text.text-lighten-5 {\n  color: #E8F5E9 !important; }\n\n.green.lighten-4 {\n  background-color: #C8E6C9 !important; }\n\n.green-text.text-lighten-4 {\n  color: #C8E6C9 !important; }\n\n.green.lighten-3 {\n  background-color: #A5D6A7 !important; }\n\n.green-text.text-lighten-3 {\n  color: #A5D6A7 !important; }\n\n.green.lighten-2 {\n  background-color: #81C784 !important; }\n\n.green-text.text-lighten-2 {\n  color: #81C784 !important; }\n\n.green.lighten-1 {\n  background-color: #66BB6A !important; }\n\n.green-text.text-lighten-1 {\n  color: #66BB6A !important; }\n\n.green.darken-1 {\n  background-color: #43A047 !important; }\n\n.green-text.text-darken-1 {\n  color: #43A047 !important; }\n\n.green.darken-2 {\n  background-color: #388E3C !important; }\n\n.green-text.text-darken-2 {\n  color: #388E3C !important; }\n\n.green.darken-3 {\n  background-color: #2E7D32 !important; }\n\n.green-text.text-darken-3 {\n  color: #2E7D32 !important; }\n\n.green.darken-4 {\n  background-color: #1B5E20 !important; }\n\n.green-text.text-darken-4 {\n  color: #1B5E20 !important; }\n\n.green.accent-1 {\n  background-color: #B9F6CA !important; }\n\n.green-text.text-accent-1 {\n  color: #B9F6CA !important; }\n\n.green.accent-2 {\n  background-color: #69F0AE !important; }\n\n.green-text.text-accent-2 {\n  color: #69F0AE !important; }\n\n.green.accent-3 {\n  background-color: #00E676 !important; }\n\n.green-text.text-accent-3 {\n  color: #00E676 !important; }\n\n.green.accent-4 {\n  background-color: #00C853 !important; }\n\n.green-text.text-accent-4 {\n  color: #00C853 !important; }\n\n.light-green {\n  background-color: #8bc34a !important; }\n\n.light-green-text {\n  color: #8bc34a !important; }\n\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important; }\n\n.light-green-text.text-lighten-5 {\n  color: #f1f8e9 !important; }\n\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important; }\n\n.light-green-text.text-lighten-4 {\n  color: #dcedc8 !important; }\n\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important; }\n\n.light-green-text.text-lighten-3 {\n  color: #c5e1a5 !important; }\n\n.light-green.lighten-2 {\n  background-color: #aed581 !important; }\n\n.light-green-text.text-lighten-2 {\n  color: #aed581 !important; }\n\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important; }\n\n.light-green-text.text-lighten-1 {\n  color: #9ccc65 !important; }\n\n.light-green.darken-1 {\n  background-color: #7cb342 !important; }\n\n.light-green-text.text-darken-1 {\n  color: #7cb342 !important; }\n\n.light-green.darken-2 {\n  background-color: #689f38 !important; }\n\n.light-green-text.text-darken-2 {\n  color: #689f38 !important; }\n\n.light-green.darken-3 {\n  background-color: #558b2f !important; }\n\n.light-green-text.text-darken-3 {\n  color: #558b2f !important; }\n\n.light-green.darken-4 {\n  background-color: #33691e !important; }\n\n.light-green-text.text-darken-4 {\n  color: #33691e !important; }\n\n.light-green.accent-1 {\n  background-color: #ccff90 !important; }\n\n.light-green-text.text-accent-1 {\n  color: #ccff90 !important; }\n\n.light-green.accent-2 {\n  background-color: #b2ff59 !important; }\n\n.light-green-text.text-accent-2 {\n  color: #b2ff59 !important; }\n\n.light-green.accent-3 {\n  background-color: #76ff03 !important; }\n\n.light-green-text.text-accent-3 {\n  color: #76ff03 !important; }\n\n.light-green.accent-4 {\n  background-color: #64dd17 !important; }\n\n.light-green-text.text-accent-4 {\n  color: #64dd17 !important; }\n\n.lime {\n  background-color: #cddc39 !important; }\n\n.lime-text {\n  color: #cddc39 !important; }\n\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important; }\n\n.lime-text.text-lighten-5 {\n  color: #f9fbe7 !important; }\n\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important; }\n\n.lime-text.text-lighten-4 {\n  color: #f0f4c3 !important; }\n\n.lime.lighten-3 {\n  background-color: #e6ee9c !important; }\n\n.lime-text.text-lighten-3 {\n  color: #e6ee9c !important; }\n\n.lime.lighten-2 {\n  background-color: #dce775 !important; }\n\n.lime-text.text-lighten-2 {\n  color: #dce775 !important; }\n\n.lime.lighten-1 {\n  background-color: #d4e157 !important; }\n\n.lime-text.text-lighten-1 {\n  color: #d4e157 !important; }\n\n.lime.darken-1 {\n  background-color: #c0ca33 !important; }\n\n.lime-text.text-darken-1 {\n  color: #c0ca33 !important; }\n\n.lime.darken-2 {\n  background-color: #afb42b !important; }\n\n.lime-text.text-darken-2 {\n  color: #afb42b !important; }\n\n.lime.darken-3 {\n  background-color: #9e9d24 !important; }\n\n.lime-text.text-darken-3 {\n  color: #9e9d24 !important; }\n\n.lime.darken-4 {\n  background-color: #827717 !important; }\n\n.lime-text.text-darken-4 {\n  color: #827717 !important; }\n\n.lime.accent-1 {\n  background-color: #f4ff81 !important; }\n\n.lime-text.text-accent-1 {\n  color: #f4ff81 !important; }\n\n.lime.accent-2 {\n  background-color: #eeff41 !important; }\n\n.lime-text.text-accent-2 {\n  color: #eeff41 !important; }\n\n.lime.accent-3 {\n  background-color: #c6ff00 !important; }\n\n.lime-text.text-accent-3 {\n  color: #c6ff00 !important; }\n\n.lime.accent-4 {\n  background-color: #aeea00 !important; }\n\n.lime-text.text-accent-4 {\n  color: #aeea00 !important; }\n\n.yellow {\n  background-color: #ffeb3b !important; }\n\n.yellow-text {\n  color: #ffeb3b !important; }\n\n.yellow.lighten-5 {\n  background-color: #fffde7 !important; }\n\n.yellow-text.text-lighten-5 {\n  color: #fffde7 !important; }\n\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important; }\n\n.yellow-text.text-lighten-4 {\n  color: #fff9c4 !important; }\n\n.yellow.lighten-3 {\n  background-color: #fff59d !important; }\n\n.yellow-text.text-lighten-3 {\n  color: #fff59d !important; }\n\n.yellow.lighten-2 {\n  background-color: #fff176 !important; }\n\n.yellow-text.text-lighten-2 {\n  color: #fff176 !important; }\n\n.yellow.lighten-1 {\n  background-color: #ffee58 !important; }\n\n.yellow-text.text-lighten-1 {\n  color: #ffee58 !important; }\n\n.yellow.darken-1 {\n  background-color: #fdd835 !important; }\n\n.yellow-text.text-darken-1 {\n  color: #fdd835 !important; }\n\n.yellow.darken-2 {\n  background-color: #fbc02d !important; }\n\n.yellow-text.text-darken-2 {\n  color: #fbc02d !important; }\n\n.yellow.darken-3 {\n  background-color: #f9a825 !important; }\n\n.yellow-text.text-darken-3 {\n  color: #f9a825 !important; }\n\n.yellow.darken-4 {\n  background-color: #f57f17 !important; }\n\n.yellow-text.text-darken-4 {\n  color: #f57f17 !important; }\n\n.yellow.accent-1 {\n  background-color: #ffff8d !important; }\n\n.yellow-text.text-accent-1 {\n  color: #ffff8d !important; }\n\n.yellow.accent-2 {\n  background-color: #ffff00 !important; }\n\n.yellow-text.text-accent-2 {\n  color: #ffff00 !important; }\n\n.yellow.accent-3 {\n  background-color: #ffea00 !important; }\n\n.yellow-text.text-accent-3 {\n  color: #ffea00 !important; }\n\n.yellow.accent-4 {\n  background-color: #ffd600 !important; }\n\n.yellow-text.text-accent-4 {\n  color: #ffd600 !important; }\n\n.amber {\n  background-color: #ffc107 !important; }\n\n.amber-text {\n  color: #ffc107 !important; }\n\n.amber.lighten-5 {\n  background-color: #fff8e1 !important; }\n\n.amber-text.text-lighten-5 {\n  color: #fff8e1 !important; }\n\n.amber.lighten-4 {\n  background-color: #ffecb3 !important; }\n\n.amber-text.text-lighten-4 {\n  color: #ffecb3 !important; }\n\n.amber.lighten-3 {\n  background-color: #ffe082 !important; }\n\n.amber-text.text-lighten-3 {\n  color: #ffe082 !important; }\n\n.amber.lighten-2 {\n  background-color: #ffd54f !important; }\n\n.amber-text.text-lighten-2 {\n  color: #ffd54f !important; }\n\n.amber.lighten-1 {\n  background-color: #ffca28 !important; }\n\n.amber-text.text-lighten-1 {\n  color: #ffca28 !important; }\n\n.amber.darken-1 {\n  background-color: #ffb300 !important; }\n\n.amber-text.text-darken-1 {\n  color: #ffb300 !important; }\n\n.amber.darken-2 {\n  background-color: #ffa000 !important; }\n\n.amber-text.text-darken-2 {\n  color: #ffa000 !important; }\n\n.amber.darken-3 {\n  background-color: #ff8f00 !important; }\n\n.amber-text.text-darken-3 {\n  color: #ff8f00 !important; }\n\n.amber.darken-4 {\n  background-color: #ff6f00 !important; }\n\n.amber-text.text-darken-4 {\n  color: #ff6f00 !important; }\n\n.amber.accent-1 {\n  background-color: #ffe57f !important; }\n\n.amber-text.text-accent-1 {\n  color: #ffe57f !important; }\n\n.amber.accent-2 {\n  background-color: #ffd740 !important; }\n\n.amber-text.text-accent-2 {\n  color: #ffd740 !important; }\n\n.amber.accent-3 {\n  background-color: #ffc400 !important; }\n\n.amber-text.text-accent-3 {\n  color: #ffc400 !important; }\n\n.amber.accent-4 {\n  background-color: #ffab00 !important; }\n\n.amber-text.text-accent-4 {\n  color: #ffab00 !important; }\n\n.orange {\n  background-color: #ff9800 !important; }\n\n.orange-text {\n  color: #ff9800 !important; }\n\n.orange.lighten-5 {\n  background-color: #fff3e0 !important; }\n\n.orange-text.text-lighten-5 {\n  color: #fff3e0 !important; }\n\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important; }\n\n.orange-text.text-lighten-4 {\n  color: #ffe0b2 !important; }\n\n.orange.lighten-3 {\n  background-color: #ffcc80 !important; }\n\n.orange-text.text-lighten-3 {\n  color: #ffcc80 !important; }\n\n.orange.lighten-2 {\n  background-color: #ffb74d !important; }\n\n.orange-text.text-lighten-2 {\n  color: #ffb74d !important; }\n\n.orange.lighten-1 {\n  background-color: #ffa726 !important; }\n\n.orange-text.text-lighten-1 {\n  color: #ffa726 !important; }\n\n.orange.darken-1 {\n  background-color: #fb8c00 !important; }\n\n.orange-text.text-darken-1 {\n  color: #fb8c00 !important; }\n\n.orange.darken-2 {\n  background-color: #f57c00 !important; }\n\n.orange-text.text-darken-2 {\n  color: #f57c00 !important; }\n\n.orange.darken-3 {\n  background-color: #ef6c00 !important; }\n\n.orange-text.text-darken-3 {\n  color: #ef6c00 !important; }\n\n.orange.darken-4 {\n  background-color: #e65100 !important; }\n\n.orange-text.text-darken-4 {\n  color: #e65100 !important; }\n\n.orange.accent-1 {\n  background-color: #ffd180 !important; }\n\n.orange-text.text-accent-1 {\n  color: #ffd180 !important; }\n\n.orange.accent-2 {\n  background-color: #ffab40 !important; }\n\n.orange-text.text-accent-2 {\n  color: #ffab40 !important; }\n\n.orange.accent-3 {\n  background-color: #ff9100 !important; }\n\n.orange-text.text-accent-3 {\n  color: #ff9100 !important; }\n\n.orange.accent-4 {\n  background-color: #ff6d00 !important; }\n\n.orange-text.text-accent-4 {\n  color: #ff6d00 !important; }\n\n.deep-orange {\n  background-color: #ff5722 !important; }\n\n.deep-orange-text {\n  color: #ff5722 !important; }\n\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important; }\n\n.deep-orange-text.text-lighten-5 {\n  color: #fbe9e7 !important; }\n\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important; }\n\n.deep-orange-text.text-lighten-4 {\n  color: #ffccbc !important; }\n\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important; }\n\n.deep-orange-text.text-lighten-3 {\n  color: #ffab91 !important; }\n\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important; }\n\n.deep-orange-text.text-lighten-2 {\n  color: #ff8a65 !important; }\n\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important; }\n\n.deep-orange-text.text-lighten-1 {\n  color: #ff7043 !important; }\n\n.deep-orange.darken-1 {\n  background-color: #f4511e !important; }\n\n.deep-orange-text.text-darken-1 {\n  color: #f4511e !important; }\n\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important; }\n\n.deep-orange-text.text-darken-2 {\n  color: #e64a19 !important; }\n\n.deep-orange.darken-3 {\n  background-color: #d84315 !important; }\n\n.deep-orange-text.text-darken-3 {\n  color: #d84315 !important; }\n\n.deep-orange.darken-4 {\n  background-color: #bf360c !important; }\n\n.deep-orange-text.text-darken-4 {\n  color: #bf360c !important; }\n\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important; }\n\n.deep-orange-text.text-accent-1 {\n  color: #ff9e80 !important; }\n\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important; }\n\n.deep-orange-text.text-accent-2 {\n  color: #ff6e40 !important; }\n\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important; }\n\n.deep-orange-text.text-accent-3 {\n  color: #ff3d00 !important; }\n\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important; }\n\n.deep-orange-text.text-accent-4 {\n  color: #dd2c00 !important; }\n\n.brown {\n  background-color: #795548 !important; }\n\n.brown-text {\n  color: #795548 !important; }\n\n.brown.lighten-5 {\n  background-color: #efebe9 !important; }\n\n.brown-text.text-lighten-5 {\n  color: #efebe9 !important; }\n\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important; }\n\n.brown-text.text-lighten-4 {\n  color: #d7ccc8 !important; }\n\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important; }\n\n.brown-text.text-lighten-3 {\n  color: #bcaaa4 !important; }\n\n.brown.lighten-2 {\n  background-color: #a1887f !important; }\n\n.brown-text.text-lighten-2 {\n  color: #a1887f !important; }\n\n.brown.lighten-1 {\n  background-color: #8d6e63 !important; }\n\n.brown-text.text-lighten-1 {\n  color: #8d6e63 !important; }\n\n.brown.darken-1 {\n  background-color: #6d4c41 !important; }\n\n.brown-text.text-darken-1 {\n  color: #6d4c41 !important; }\n\n.brown.darken-2 {\n  background-color: #5d4037 !important; }\n\n.brown-text.text-darken-2 {\n  color: #5d4037 !important; }\n\n.brown.darken-3 {\n  background-color: #4e342e !important; }\n\n.brown-text.text-darken-3 {\n  color: #4e342e !important; }\n\n.brown.darken-4 {\n  background-color: #3e2723 !important; }\n\n.brown-text.text-darken-4 {\n  color: #3e2723 !important; }\n\n.blue-grey {\n  background-color: #607d8b !important; }\n\n.blue-grey-text {\n  color: #607d8b !important; }\n\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important; }\n\n.blue-grey-text.text-lighten-5 {\n  color: #eceff1 !important; }\n\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important; }\n\n.blue-grey-text.text-lighten-4 {\n  color: #cfd8dc !important; }\n\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important; }\n\n.blue-grey-text.text-lighten-3 {\n  color: #b0bec5 !important; }\n\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important; }\n\n.blue-grey-text.text-lighten-2 {\n  color: #90a4ae !important; }\n\n.blue-grey.lighten-1 {\n  background-color: #78909c !important; }\n\n.blue-grey-text.text-lighten-1 {\n  color: #78909c !important; }\n\n.blue-grey.darken-1 {\n  background-color: #546e7a !important; }\n\n.blue-grey-text.text-darken-1 {\n  color: #546e7a !important; }\n\n.blue-grey.darken-2 {\n  background-color: #455a64 !important; }\n\n.blue-grey-text.text-darken-2 {\n  color: #455a64 !important; }\n\n.blue-grey.darken-3 {\n  background-color: #37474f !important; }\n\n.blue-grey-text.text-darken-3 {\n  color: #37474f !important; }\n\n.blue-grey.darken-4 {\n  background-color: #263238 !important; }\n\n.blue-grey-text.text-darken-4 {\n  color: #263238 !important; }\n\n.grey {\n  background-color: #9e9e9e !important; }\n\n.grey-text {\n  color: #9e9e9e !important; }\n\n.grey.lighten-5 {\n  background-color: #fafafa !important; }\n\n.grey-text.text-lighten-5 {\n  color: #fafafa !important; }\n\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important; }\n\n.grey-text.text-lighten-4 {\n  color: #f5f5f5 !important; }\n\n.grey.lighten-3 {\n  background-color: #eeeeee !important; }\n\n.grey-text.text-lighten-3 {\n  color: #eeeeee !important; }\n\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important; }\n\n.grey-text.text-lighten-2 {\n  color: #e0e0e0 !important; }\n\n.grey.lighten-1 {\n  background-color: #bdbdbd !important; }\n\n.grey-text.text-lighten-1 {\n  color: #bdbdbd !important; }\n\n.grey.darken-1 {\n  background-color: #757575 !important; }\n\n.grey-text.text-darken-1 {\n  color: #757575 !important; }\n\n.grey.darken-2 {\n  background-color: #616161 !important; }\n\n.grey-text.text-darken-2 {\n  color: #616161 !important; }\n\n.grey.darken-3 {\n  background-color: #424242 !important; }\n\n.grey-text.text-darken-3 {\n  color: #424242 !important; }\n\n.grey.darken-4 {\n  background-color: #212121 !important; }\n\n.grey-text.text-darken-4 {\n  color: #212121 !important; }\n\n.black {\n  background-color: #000000 !important; }\n\n.black-text {\n  color: #000000 !important; }\n\n.white {\n  background-color: #FFFFFF !important; }\n\n.white-text {\n  color: #FFFFFF !important; }\n\n.transparent {\n  background-color: transparent !important; }\n\n.transparent-text {\n  color: transparent !important; }\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS and IE text size adjust after device orientation change,\r\n *    without disabling user zoom.\r\n */\n\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Remove default margin.\r\n */\n\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\r\n */\n\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\n\na {\n  background-color: transparent; }\n\n/**\r\n * Improve readability of focused elements when they are also in an\r\n * active/hover state.\r\n */\n\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\n\nb,\nstrong {\n  font-weight: bold; }\n\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\n\ndfn {\n  font-style: italic; }\n\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\r\n * Address styling not present in IE 8/9.\r\n */\n\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\n\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\r\n   ========================================================================== */\n\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\n\nimg {\n  border: 0; }\n\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\n\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\n\nfigure {\n  margin: 1em 40px; }\n\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\r\n * Contain overflow in all browsers.\r\n */\n\npre {\n  overflow: auto; }\n\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\r\n   ========================================================================== */\n\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\n\nbutton {\n  overflow: visible; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\n\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\n\ninput {\n  line-height: normal; }\n\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\r\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\n\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\n\ntextarea {\n  overflow: auto; }\n\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\n\noptgroup {\n  font-weight: bold; }\n\n/* Tables\r\n   ========================================================================== */\n\n/**\r\n * Remove most spacing between table cells.\r\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\nul:not(.browser-default) {\n  padding-left: 0;\n  list-style-type: none; }\n\nul:not(.browser-default) > li {\n    list-style-type: none; }\n\na {\n  color: #039be5;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent; }\n\n.valign-wrapper {\n  display: flex;\n  align-items: center; }\n\n.clearfix {\n  clear: both; }\n\n.z-depth-0 {\n  box-shadow: none !important; }\n\n.z-depth-1, nav, .card-panel, .card, .toast, .btn, .btn-large, .btn-floating, .dropdown-content, .collapsible, .side-nav {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); }\n\n.z-depth-1-half, .btn:hover, .btn-large:hover, .btn-floating:hover {\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2); }\n\n.z-depth-2 {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3); }\n\n.z-depth-3 {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3); }\n\n.z-depth-4, .modal {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3); }\n\n.z-depth-5 {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3); }\n\n.hoverable {\n  transition: box-shadow .25s; }\n\n.hoverable:hover {\n    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e0e0e0; }\n\nblockquote {\n  margin: 20px 0;\n  padding-left: 1.5rem;\n  border-left: 5px solid #ee6e73; }\n\ni {\n  line-height: inherit; }\n\ni.left {\n    float: left;\n    margin-right: 15px; }\n\ni.right {\n    float: right;\n    margin-left: 15px; }\n\ni.tiny {\n    font-size: 1rem; }\n\ni.small {\n    font-size: 2rem; }\n\ni.medium {\n    font-size: 4rem; }\n\ni.large {\n    font-size: 6rem; }\n\nimg.responsive-img,\nvideo.responsive-video {\n  max-width: 100%;\n  height: auto; }\n\n.pagination li {\n  display: inline-block;\n  border-radius: 2px;\n  text-align: center;\n  vertical-align: top;\n  height: 30px; }\n\n.pagination li a {\n    color: #444;\n    display: inline-block;\n    font-size: 1.2rem;\n    padding: 0 10px;\n    line-height: 30px; }\n\n.pagination li.active a {\n    color: #fff; }\n\n.pagination li.active {\n    background-color: #ee6e73; }\n\n.pagination li.disabled a {\n    cursor: default;\n    color: #999; }\n\n.pagination li i {\n    font-size: 2rem; }\n\n.pagination li.pages ul li {\n  display: inline-block;\n  float: none; }\n\n@media only screen and (max-width: 992px) {\n  .pagination {\n    width: 100%; }\n    .pagination li.prev,\n    .pagination li.next {\n      width: 10%; }\n    .pagination li.pages {\n      width: 80%;\n      overflow: hidden;\n      white-space: nowrap; } }\n\n.breadcrumb {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.7); }\n\n.breadcrumb i,\n  .breadcrumb [class^=\"mdi-\"], .breadcrumb [class*=\"mdi-\"],\n  .breadcrumb i.material-icons {\n    display: inline-block;\n    float: left;\n    font-size: 24px; }\n\n.breadcrumb:before {\n    content: '\\E5CC';\n    color: rgba(255, 255, 255, 0.7);\n    vertical-align: top;\n    display: inline-block;\n    font-family: 'Material Icons';\n    font-weight: normal;\n    font-style: normal;\n    font-size: 25px;\n    margin: 0 10px 0 8px;\n    -webkit-font-smoothing: antialiased; }\n\n.breadcrumb:first-child:before {\n    display: none; }\n\n.breadcrumb:last-child {\n    color: #fff; }\n\n.parallax-container {\n  position: relative;\n  overflow: hidden;\n  height: 500px; }\n\n.parallax-container .parallax {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1; }\n\n.parallax-container .parallax img {\n      display: none;\n      position: absolute;\n      left: 50%;\n      bottom: 0;\n      min-width: 100%;\n      min-height: 100%;\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n\n.pin-top, .pin-bottom {\n  position: relative; }\n\n.pinned {\n  position: fixed !important; }\n\n/*********************\r\n  Transition Classes\r\n**********************/\n\nul.staggered-list li {\n  opacity: 0; }\n\n.fade-in {\n  opacity: 0;\n  -webkit-transform-origin: 0 50%;\n          transform-origin: 0 50%; }\n\n/*********************\r\n  Media Query Classes\r\n**********************/\n\n@media only screen and (max-width: 600px) {\n  .hide-on-small-only, .hide-on-small-and-down {\n    display: none !important; } }\n\n@media only screen and (max-width: 992px) {\n  .hide-on-med-and-down {\n    display: none !important; } }\n\n@media only screen and (min-width: 601px) {\n  .hide-on-med-and-up {\n    display: none !important; } }\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .hide-on-med-only {\n    display: none !important; } }\n\n@media only screen and (min-width: 993px) {\n  .hide-on-large-only {\n    display: none !important; } }\n\n@media only screen and (min-width: 993px) {\n  .show-on-large {\n    display: block !important; } }\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .show-on-medium {\n    display: block !important; } }\n\n@media only screen and (max-width: 600px) {\n  .show-on-small {\n    display: block !important; } }\n\n@media only screen and (min-width: 601px) {\n  .show-on-medium-and-up {\n    display: block !important; } }\n\n@media only screen and (max-width: 992px) {\n  .show-on-medium-and-down {\n    display: block !important; } }\n\n@media only screen and (max-width: 600px) {\n  .center-on-small-only {\n    text-align: center; } }\n\n.page-footer {\n  padding-top: 20px;\n  color: #fff;\n  background-color: #ee6e73; }\n\n.page-footer .footer-copyright {\n    overflow: hidden;\n    min-height: 50px;\n    display: flex;\n    align-items: center;\n    padding: 10px 0px;\n    color: rgba(255, 255, 255, 0.8);\n    background-color: rgba(51, 51, 51, 0.08); }\n\ntable, th, td {\n  border: none; }\n\ntable {\n  width: 100%;\n  display: table; }\n\ntable.bordered > thead > tr,\n  table.bordered > tbody > tr {\n    border-bottom: 1px solid #d0d0d0; }\n\ntable.striped > tbody > tr:nth-child(odd) {\n    background-color: #f2f2f2; }\n\ntable.striped > tbody > tr > td {\n    border-radius: 0; }\n\ntable.highlight > tbody > tr {\n    transition: background-color .25s ease; }\n\ntable.highlight > tbody > tr:hover {\n      background-color: #f2f2f2; }\n\ntable.centered thead tr th, table.centered tbody tr td {\n    text-align: center; }\n\nthead {\n  border-bottom: 1px solid #d0d0d0; }\n\ntd,\nth {\n  padding: 15px 5px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  border-radius: 2px; }\n\n@media only screen and (max-width: 992px) {\n  table.responsive-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: block;\n    position: relative;\n    /* sort out borders */ }\n    table.responsive-table td:empty:before {\n      content: '\\00a0'; }\n    table.responsive-table th,\n    table.responsive-table td {\n      margin: 0;\n      vertical-align: top; }\n    table.responsive-table th {\n      text-align: left; }\n    table.responsive-table thead {\n      display: block;\n      float: left; }\n      table.responsive-table thead tr {\n        display: block;\n        padding: 0 10px 0 0; }\n        table.responsive-table thead tr th::before {\n          content: \"\\00a0\"; }\n    table.responsive-table tbody {\n      display: block;\n      width: auto;\n      position: relative;\n      overflow-x: auto;\n      white-space: nowrap; }\n      table.responsive-table tbody tr {\n        display: inline-block;\n        vertical-align: top; }\n    table.responsive-table th {\n      display: block;\n      text-align: right; }\n    table.responsive-table td {\n      display: block;\n      min-height: 1.25em;\n      text-align: left; }\n    table.responsive-table tr {\n      padding: 0 10px; }\n    table.responsive-table thead {\n      border: 0;\n      border-right: 1px solid #d0d0d0; }\n    table.responsive-table.bordered th {\n      border-bottom: 0;\n      border-left: 0; }\n    table.responsive-table.bordered td {\n      border-left: 0;\n      border-right: 0;\n      border-bottom: 0; }\n    table.responsive-table.bordered tr {\n      border: 0; }\n    table.responsive-table.bordered tbody tr {\n      border-right: 1px solid #d0d0d0; } }\n\n.collection {\n  margin: 0.5rem 0 1rem 0;\n  border: 1px solid #e0e0e0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative; }\n\n.collection .collection-item {\n    background-color: #fff;\n    line-height: 1.5rem;\n    padding: 10px 20px;\n    margin: 0;\n    border-bottom: 1px solid #e0e0e0; }\n\n.collection .collection-item.avatar {\n      min-height: 84px;\n      padding-left: 72px;\n      position: relative; }\n\n.collection .collection-item.avatar:not(.circle-clipper) > .circle,\n      .collection .collection-item.avatar :not(.circle-clipper) > .circle {\n        position: absolute;\n        width: 42px;\n        height: 42px;\n        overflow: hidden;\n        left: 15px;\n        display: inline-block;\n        vertical-align: middle; }\n\n.collection .collection-item.avatar i.circle {\n        font-size: 18px;\n        line-height: 42px;\n        color: #fff;\n        background-color: #999;\n        text-align: center; }\n\n.collection .collection-item.avatar .title {\n        font-size: 16px; }\n\n.collection .collection-item.avatar p {\n        margin: 0; }\n\n.collection .collection-item.avatar .secondary-content {\n        position: absolute;\n        top: 16px;\n        right: 16px; }\n\n.collection .collection-item:last-child {\n      border-bottom: none; }\n\n.collection .collection-item.active {\n      background-color: #26a69a;\n      color: #eafaf9; }\n\n.collection .collection-item.active .secondary-content {\n        color: #fff; }\n\n.collection a.collection-item {\n    display: block;\n    transition: .25s;\n    color: #26a69a; }\n\n.collection a.collection-item:not(.active):hover {\n      background-color: #ddd; }\n\n.collection.with-header .collection-header {\n    background-color: #fff;\n    border-bottom: 1px solid #e0e0e0;\n    padding: 10px 20px; }\n\n.collection.with-header .collection-item {\n    padding-left: 30px; }\n\n.collection.with-header .collection-item.avatar {\n    padding-left: 72px; }\n\n.secondary-content {\n  float: right;\n  color: #26a69a; }\n\n.collapsible .collection {\n  margin: 0;\n  border: none; }\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden; }\n\n.video-container iframe, .video-container object, .video-container embed {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\n.progress {\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: #acece6;\n  border-radius: 2px;\n  margin: 0.5rem 0 1rem 0;\n  overflow: hidden; }\n\n.progress .determinate {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    background-color: #26a69a;\n    transition: width .3s linear; }\n\n.progress .indeterminate {\n    background-color: #26a69a; }\n\n.progress .indeterminate:before {\n      content: '';\n      position: absolute;\n      background-color: inherit;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      will-change: left, right;\n      -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n              animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite; }\n\n.progress .indeterminate:after {\n      content: '';\n      position: absolute;\n      background-color: inherit;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      will-change: left, right;\n      -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n              animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n      -webkit-animation-delay: 1.15s;\n              animation-delay: 1.15s; }\n\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n\n/*******************\r\n  Utility Classes\r\n*******************/\n\n.hide {\n  display: none !important; }\n\n.left-align {\n  text-align: left; }\n\n.right-align {\n  text-align: right; }\n\n.center, .center-align {\n  text-align: center; }\n\n.left {\n  float: left !important; }\n\n.right {\n  float: right !important; }\n\n.no-select, input[type=range],\ninput[type=range] + .thumb {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.circle {\n  border-radius: 50%; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.truncate {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.no-padding {\n  padding: 0 !important; }\n\nspan.badge {\n  min-width: 3rem;\n  padding: 0 6px;\n  margin-left: 14px;\n  text-align: center;\n  font-size: 1rem;\n  line-height: 22px;\n  height: 22px;\n  color: #757575;\n  float: right;\n  box-sizing: border-box; }\n\nspan.badge.new {\n    font-weight: 300;\n    font-size: 0.8rem;\n    color: #fff;\n    background-color: #26a69a;\n    border-radius: 2px; }\n\nspan.badge.new:after {\n    content: \" new\"; }\n\nspan.badge[data-badge-caption]::after {\n    content: \" \" attr(data-badge-caption); }\n\nnav ul a span.badge {\n  display: inline-block;\n  float: none;\n  margin-left: 4px;\n  line-height: 22px;\n  height: 22px;\n  -webkit-font-smoothing: auto; }\n\n.collection-item span.badge {\n  margin-top: calc(0.75rem - 11px); }\n\n.collapsible span.badge {\n  margin-left: auto; }\n\n.side-nav span.badge {\n  margin-top: calc(24px - 11px); }\n\n/* This is needed for some mobile phones to display the Google Icon font properly */\n\n.material-icons {\n  text-rendering: optimizeLegibility;\n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga'; }\n\n.container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%; }\n\n@media only screen and (min-width: 601px) {\n  .container {\n    width: 85%; } }\n\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 70%; } }\n\n.container .row {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem; }\n\n.section {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n\n.section.no-pad {\n    padding: 0; }\n\n.section.no-pad-bot {\n    padding-bottom: 0; }\n\n.section.no-pad-top {\n    padding-top: 0; }\n\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px; }\n\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.row .col {\n    float: left;\n    box-sizing: border-box;\n    padding: 0 0.75rem;\n    min-height: 1px; }\n\n.row .col[class*=\"push-\"], .row .col[class*=\"pull-\"] {\n      position: relative; }\n\n.row .col.s1 {\n      width: 8.33333333%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s2 {\n      width: 16.66666667%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s3 {\n      width: 25%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s4 {\n      width: 33.33333333%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s5 {\n      width: 41.66666667%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s6 {\n      width: 50%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s7 {\n      width: 58.33333333%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s8 {\n      width: 66.66666667%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s9 {\n      width: 75%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s10 {\n      width: 83.33333333%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s11 {\n      width: 91.66666667%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.s12 {\n      width: 100%;\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n\n.row .col.offset-s1 {\n      margin-left: 8.33333333%; }\n\n.row .col.pull-s1 {\n      right: 8.33333333%; }\n\n.row .col.push-s1 {\n      left: 8.33333333%; }\n\n.row .col.offset-s2 {\n      margin-left: 16.66666667%; }\n\n.row .col.pull-s2 {\n      right: 16.66666667%; }\n\n.row .col.push-s2 {\n      left: 16.66666667%; }\n\n.row .col.offset-s3 {\n      margin-left: 25%; }\n\n.row .col.pull-s3 {\n      right: 25%; }\n\n.row .col.push-s3 {\n      left: 25%; }\n\n.row .col.offset-s4 {\n      margin-left: 33.33333333%; }\n\n.row .col.pull-s4 {\n      right: 33.33333333%; }\n\n.row .col.push-s4 {\n      left: 33.33333333%; }\n\n.row .col.offset-s5 {\n      margin-left: 41.66666667%; }\n\n.row .col.pull-s5 {\n      right: 41.66666667%; }\n\n.row .col.push-s5 {\n      left: 41.66666667%; }\n\n.row .col.offset-s6 {\n      margin-left: 50%; }\n\n.row .col.pull-s6 {\n      right: 50%; }\n\n.row .col.push-s6 {\n      left: 50%; }\n\n.row .col.offset-s7 {\n      margin-left: 58.33333333%; }\n\n.row .col.pull-s7 {\n      right: 58.33333333%; }\n\n.row .col.push-s7 {\n      left: 58.33333333%; }\n\n.row .col.offset-s8 {\n      margin-left: 66.66666667%; }\n\n.row .col.pull-s8 {\n      right: 66.66666667%; }\n\n.row .col.push-s8 {\n      left: 66.66666667%; }\n\n.row .col.offset-s9 {\n      margin-left: 75%; }\n\n.row .col.pull-s9 {\n      right: 75%; }\n\n.row .col.push-s9 {\n      left: 75%; }\n\n.row .col.offset-s10 {\n      margin-left: 83.33333333%; }\n\n.row .col.pull-s10 {\n      right: 83.33333333%; }\n\n.row .col.push-s10 {\n      left: 83.33333333%; }\n\n.row .col.offset-s11 {\n      margin-left: 91.66666667%; }\n\n.row .col.pull-s11 {\n      right: 91.66666667%; }\n\n.row .col.push-s11 {\n      left: 91.66666667%; }\n\n.row .col.offset-s12 {\n      margin-left: 100%; }\n\n.row .col.pull-s12 {\n      right: 100%; }\n\n.row .col.push-s12 {\n      left: 100%; }\n\n@media only screen and (min-width: 601px) {\n      .row .col.m1 {\n        width: 8.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m2 {\n        width: 16.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m3 {\n        width: 25%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m4 {\n        width: 33.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m5 {\n        width: 41.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m6 {\n        width: 50%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m7 {\n        width: 58.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m8 {\n        width: 66.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m9 {\n        width: 75%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m10 {\n        width: 83.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m11 {\n        width: 91.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.m12 {\n        width: 100%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.offset-m1 {\n        margin-left: 8.33333333%; }\n      .row .col.pull-m1 {\n        right: 8.33333333%; }\n      .row .col.push-m1 {\n        left: 8.33333333%; }\n      .row .col.offset-m2 {\n        margin-left: 16.66666667%; }\n      .row .col.pull-m2 {\n        right: 16.66666667%; }\n      .row .col.push-m2 {\n        left: 16.66666667%; }\n      .row .col.offset-m3 {\n        margin-left: 25%; }\n      .row .col.pull-m3 {\n        right: 25%; }\n      .row .col.push-m3 {\n        left: 25%; }\n      .row .col.offset-m4 {\n        margin-left: 33.33333333%; }\n      .row .col.pull-m4 {\n        right: 33.33333333%; }\n      .row .col.push-m4 {\n        left: 33.33333333%; }\n      .row .col.offset-m5 {\n        margin-left: 41.66666667%; }\n      .row .col.pull-m5 {\n        right: 41.66666667%; }\n      .row .col.push-m5 {\n        left: 41.66666667%; }\n      .row .col.offset-m6 {\n        margin-left: 50%; }\n      .row .col.pull-m6 {\n        right: 50%; }\n      .row .col.push-m6 {\n        left: 50%; }\n      .row .col.offset-m7 {\n        margin-left: 58.33333333%; }\n      .row .col.pull-m7 {\n        right: 58.33333333%; }\n      .row .col.push-m7 {\n        left: 58.33333333%; }\n      .row .col.offset-m8 {\n        margin-left: 66.66666667%; }\n      .row .col.pull-m8 {\n        right: 66.66666667%; }\n      .row .col.push-m8 {\n        left: 66.66666667%; }\n      .row .col.offset-m9 {\n        margin-left: 75%; }\n      .row .col.pull-m9 {\n        right: 75%; }\n      .row .col.push-m9 {\n        left: 75%; }\n      .row .col.offset-m10 {\n        margin-left: 83.33333333%; }\n      .row .col.pull-m10 {\n        right: 83.33333333%; }\n      .row .col.push-m10 {\n        left: 83.33333333%; }\n      .row .col.offset-m11 {\n        margin-left: 91.66666667%; }\n      .row .col.pull-m11 {\n        right: 91.66666667%; }\n      .row .col.push-m11 {\n        left: 91.66666667%; }\n      .row .col.offset-m12 {\n        margin-left: 100%; }\n      .row .col.pull-m12 {\n        right: 100%; }\n      .row .col.push-m12 {\n        left: 100%; } }\n\n@media only screen and (min-width: 993px) {\n      .row .col.l1 {\n        width: 8.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l2 {\n        width: 16.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l3 {\n        width: 25%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l4 {\n        width: 33.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l5 {\n        width: 41.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l6 {\n        width: 50%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l7 {\n        width: 58.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l8 {\n        width: 66.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l9 {\n        width: 75%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l10 {\n        width: 83.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l11 {\n        width: 91.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.l12 {\n        width: 100%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.offset-l1 {\n        margin-left: 8.33333333%; }\n      .row .col.pull-l1 {\n        right: 8.33333333%; }\n      .row .col.push-l1 {\n        left: 8.33333333%; }\n      .row .col.offset-l2 {\n        margin-left: 16.66666667%; }\n      .row .col.pull-l2 {\n        right: 16.66666667%; }\n      .row .col.push-l2 {\n        left: 16.66666667%; }\n      .row .col.offset-l3 {\n        margin-left: 25%; }\n      .row .col.pull-l3 {\n        right: 25%; }\n      .row .col.push-l3 {\n        left: 25%; }\n      .row .col.offset-l4 {\n        margin-left: 33.33333333%; }\n      .row .col.pull-l4 {\n        right: 33.33333333%; }\n      .row .col.push-l4 {\n        left: 33.33333333%; }\n      .row .col.offset-l5 {\n        margin-left: 41.66666667%; }\n      .row .col.pull-l5 {\n        right: 41.66666667%; }\n      .row .col.push-l5 {\n        left: 41.66666667%; }\n      .row .col.offset-l6 {\n        margin-left: 50%; }\n      .row .col.pull-l6 {\n        right: 50%; }\n      .row .col.push-l6 {\n        left: 50%; }\n      .row .col.offset-l7 {\n        margin-left: 58.33333333%; }\n      .row .col.pull-l7 {\n        right: 58.33333333%; }\n      .row .col.push-l7 {\n        left: 58.33333333%; }\n      .row .col.offset-l8 {\n        margin-left: 66.66666667%; }\n      .row .col.pull-l8 {\n        right: 66.66666667%; }\n      .row .col.push-l8 {\n        left: 66.66666667%; }\n      .row .col.offset-l9 {\n        margin-left: 75%; }\n      .row .col.pull-l9 {\n        right: 75%; }\n      .row .col.push-l9 {\n        left: 75%; }\n      .row .col.offset-l10 {\n        margin-left: 83.33333333%; }\n      .row .col.pull-l10 {\n        right: 83.33333333%; }\n      .row .col.push-l10 {\n        left: 83.33333333%; }\n      .row .col.offset-l11 {\n        margin-left: 91.66666667%; }\n      .row .col.pull-l11 {\n        right: 91.66666667%; }\n      .row .col.push-l11 {\n        left: 91.66666667%; }\n      .row .col.offset-l12 {\n        margin-left: 100%; }\n      .row .col.pull-l12 {\n        right: 100%; }\n      .row .col.push-l12 {\n        left: 100%; } }\n\n@media only screen and (min-width: 1201px) {\n      .row .col.xl1 {\n        width: 8.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl2 {\n        width: 16.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl3 {\n        width: 25%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl4 {\n        width: 33.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl5 {\n        width: 41.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl6 {\n        width: 50%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl7 {\n        width: 58.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl8 {\n        width: 66.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl9 {\n        width: 75%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl10 {\n        width: 83.33333333%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl11 {\n        width: 91.66666667%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.xl12 {\n        width: 100%;\n        margin-left: auto;\n        left: auto;\n        right: auto; }\n      .row .col.offset-xl1 {\n        margin-left: 8.33333333%; }\n      .row .col.pull-xl1 {\n        right: 8.33333333%; }\n      .row .col.push-xl1 {\n        left: 8.33333333%; }\n      .row .col.offset-xl2 {\n        margin-left: 16.66666667%; }\n      .row .col.pull-xl2 {\n        right: 16.66666667%; }\n      .row .col.push-xl2 {\n        left: 16.66666667%; }\n      .row .col.offset-xl3 {\n        margin-left: 25%; }\n      .row .col.pull-xl3 {\n        right: 25%; }\n      .row .col.push-xl3 {\n        left: 25%; }\n      .row .col.offset-xl4 {\n        margin-left: 33.33333333%; }\n      .row .col.pull-xl4 {\n        right: 33.33333333%; }\n      .row .col.push-xl4 {\n        left: 33.33333333%; }\n      .row .col.offset-xl5 {\n        margin-left: 41.66666667%; }\n      .row .col.pull-xl5 {\n        right: 41.66666667%; }\n      .row .col.push-xl5 {\n        left: 41.66666667%; }\n      .row .col.offset-xl6 {\n        margin-left: 50%; }\n      .row .col.pull-xl6 {\n        right: 50%; }\n      .row .col.push-xl6 {\n        left: 50%; }\n      .row .col.offset-xl7 {\n        margin-left: 58.33333333%; }\n      .row .col.pull-xl7 {\n        right: 58.33333333%; }\n      .row .col.push-xl7 {\n        left: 58.33333333%; }\n      .row .col.offset-xl8 {\n        margin-left: 66.66666667%; }\n      .row .col.pull-xl8 {\n        right: 66.66666667%; }\n      .row .col.push-xl8 {\n        left: 66.66666667%; }\n      .row .col.offset-xl9 {\n        margin-left: 75%; }\n      .row .col.pull-xl9 {\n        right: 75%; }\n      .row .col.push-xl9 {\n        left: 75%; }\n      .row .col.offset-xl10 {\n        margin-left: 83.33333333%; }\n      .row .col.pull-xl10 {\n        right: 83.33333333%; }\n      .row .col.push-xl10 {\n        left: 83.33333333%; }\n      .row .col.offset-xl11 {\n        margin-left: 91.66666667%; }\n      .row .col.pull-xl11 {\n        right: 91.66666667%; }\n      .row .col.push-xl11 {\n        left: 91.66666667%; }\n      .row .col.offset-xl12 {\n        margin-left: 100%; }\n      .row .col.pull-xl12 {\n        right: 100%; }\n      .row .col.push-xl12 {\n        left: 100%; } }\n\nnav {\n  color: #fff;\n  background-color: #ee6e73;\n  width: 100%;\n  height: 56px;\n  line-height: 56px; }\n\nnav.nav-extended {\n    height: auto; }\n\nnav.nav-extended .nav-wrapper {\n      min-height: 56px;\n      height: auto; }\n\nnav.nav-extended .nav-content {\n      position: relative;\n      line-height: normal; }\n\nnav a {\n    color: #fff; }\n\nnav i,\n  nav [class^=\"mdi-\"], nav [class*=\"mdi-\"],\n  nav i.material-icons {\n    display: block;\n    font-size: 24px;\n    height: 56px;\n    line-height: 56px; }\n\nnav .nav-wrapper {\n    position: relative;\n    height: 100%; }\n\n@media only screen and (min-width: 993px) {\n    nav a.button-collapse {\n      display: none; } }\n\nnav .button-collapse {\n    float: left;\n    position: relative;\n    z-index: 1;\n    height: 56px;\n    margin: 0 18px; }\n\nnav .button-collapse i {\n      height: 56px;\n      line-height: 56px; }\n\nnav .brand-logo {\n    position: absolute;\n    color: #fff;\n    display: inline-block;\n    font-size: 2.1rem;\n    padding: 0; }\n\nnav .brand-logo.center {\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n\n@media only screen and (max-width: 992px) {\n      nav .brand-logo {\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%); }\n        nav .brand-logo.left, nav .brand-logo.right {\n          padding: 0;\n          -webkit-transform: none;\n                  transform: none; }\n        nav .brand-logo.left {\n          left: 0.5rem; }\n        nav .brand-logo.right {\n          right: 0.5rem;\n          left: auto; } }\n\nnav .brand-logo.right {\n      right: 0.5rem;\n      padding: 0; }\n\nnav .brand-logo i,\n    nav .brand-logo [class^=\"mdi-\"], nav .brand-logo [class*=\"mdi-\"],\n    nav .brand-logo i.material-icons {\n      float: left;\n      margin-right: 15px; }\n\nnav .nav-title {\n    display: inline-block;\n    font-size: 32px;\n    padding: 28px 0; }\n\nnav ul {\n    margin: 0; }\n\nnav ul li {\n      transition: background-color .3s;\n      float: left;\n      padding: 0; }\n\nnav ul li.active {\n        background-color: rgba(0, 0, 0, 0.1); }\n\nnav ul a {\n      transition: background-color .3s;\n      font-size: 1rem;\n      color: #fff;\n      display: block;\n      padding: 0 15px;\n      cursor: pointer; }\n\nnav ul a.btn, nav ul a.btn-large, nav ul a.btn-large, nav ul a.btn-flat, nav ul a.btn-floating {\n        margin-top: -2px;\n        margin-left: 15px;\n        margin-right: 15px; }\n\nnav ul a.btn > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-flat > .material-icons, nav ul a.btn-floating > .material-icons {\n          height: inherit;\n          line-height: inherit; }\n\nnav ul a:hover {\n        background-color: rgba(0, 0, 0, 0.1); }\n\nnav ul.left {\n      float: left; }\n\nnav form {\n    height: 100%; }\n\nnav .input-field {\n    margin: 0;\n    height: 100%; }\n\nnav .input-field input {\n      height: 100%;\n      font-size: 1.2rem;\n      border: none;\n      padding-left: 2rem; }\n\nnav .input-field input:focus, nav .input-field input[type=text]:valid, nav .input-field input[type=password]:valid, nav .input-field input[type=email]:valid, nav .input-field input[type=url]:valid, nav .input-field input[type=date]:valid {\n        border: none;\n        box-shadow: none; }\n\nnav .input-field label {\n      top: 0;\n      left: 0; }\n\nnav .input-field label i {\n        color: rgba(255, 255, 255, 0.7);\n        transition: color .3s; }\n\nnav .input-field label.active i {\n        color: #fff; }\n\n.navbar-fixed {\n  position: relative;\n  height: 56px;\n  z-index: 997; }\n\n.navbar-fixed nav {\n    position: fixed; }\n\n@media only screen and (min-width: 601px) {\n  nav.nav-extended .nav-wrapper {\n    min-height: 64px; }\n  nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {\n    height: 64px;\n    line-height: 64px; }\n  .navbar-fixed {\n    height: 64px; } }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Thin), url('Roboto-Thin.woff2') format(\"woff2\"), url('Roboto-Thin.woff') format(\"woff\");\n  font-weight: 100; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Light), url('Roboto-Light.woff2') format(\"woff2\"), url('Roboto-Light.woff') format(\"woff\");\n  font-weight: 300; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Regular), url('Roboto-Regular.woff2') format(\"woff2\"), url('Roboto-Regular.woff') format(\"woff\");\n  font-weight: 400; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Medium), url('Roboto-Medium.woff2') format(\"woff2\"), url('Roboto-Medium.woff') format(\"woff\");\n  font-weight: 500; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Bold), url('Roboto-Bold.woff2') format(\"woff2\"), url('Roboto-Bold.woff') format(\"woff\");\n  font-weight: 700; }\n\na {\n  text-decoration: none; }\n\nhtml {\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.87); }\n\n@media only screen and (min-width: 0) {\n    html {\n      font-size: 14px; } }\n\n@media only screen and (min-width: 992px) {\n    html {\n      font-size: 14.5px; } }\n\n@media only screen and (min-width: 1200px) {\n    html {\n      font-size: 15px; } }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 400;\n  line-height: 1.1; }\n\nh1 a, h2 a, h3 a, h4 a, h5 a, h6 a {\n  font-weight: inherit; }\n\nh1 {\n  font-size: 4.2rem;\n  line-height: 110%;\n  margin: 2.1rem 0 1.68rem 0; }\n\nh2 {\n  font-size: 3.56rem;\n  line-height: 110%;\n  margin: 1.78rem 0 1.424rem 0; }\n\nh3 {\n  font-size: 2.92rem;\n  line-height: 110%;\n  margin: 1.46rem 0 1.168rem 0; }\n\nh4 {\n  font-size: 2.28rem;\n  line-height: 110%;\n  margin: 1.14rem 0 0.912rem 0; }\n\nh5 {\n  font-size: 1.64rem;\n  line-height: 110%;\n  margin: 0.82rem 0 0.656rem 0; }\n\nh6 {\n  font-size: 1rem;\n  line-height: 110%;\n  margin: 0.5rem 0 0.4rem 0; }\n\nem {\n  font-style: italic; }\n\nstrong {\n  font-weight: 500; }\n\nsmall {\n  font-size: 75%; }\n\n.light, .page-footer .footer-copyright {\n  font-weight: 300; }\n\n.thin {\n  font-weight: 200; }\n\n.flow-text {\n  font-weight: 300; }\n\n@media only screen and (min-width: 360px) {\n    .flow-text {\n      font-size: 1.2rem; } }\n\n@media only screen and (min-width: 390px) {\n    .flow-text {\n      font-size: 1.224rem; } }\n\n@media only screen and (min-width: 420px) {\n    .flow-text {\n      font-size: 1.248rem; } }\n\n@media only screen and (min-width: 450px) {\n    .flow-text {\n      font-size: 1.272rem; } }\n\n@media only screen and (min-width: 480px) {\n    .flow-text {\n      font-size: 1.296rem; } }\n\n@media only screen and (min-width: 510px) {\n    .flow-text {\n      font-size: 1.32rem; } }\n\n@media only screen and (min-width: 540px) {\n    .flow-text {\n      font-size: 1.344rem; } }\n\n@media only screen and (min-width: 570px) {\n    .flow-text {\n      font-size: 1.368rem; } }\n\n@media only screen and (min-width: 600px) {\n    .flow-text {\n      font-size: 1.392rem; } }\n\n@media only screen and (min-width: 630px) {\n    .flow-text {\n      font-size: 1.416rem; } }\n\n@media only screen and (min-width: 660px) {\n    .flow-text {\n      font-size: 1.44rem; } }\n\n@media only screen and (min-width: 690px) {\n    .flow-text {\n      font-size: 1.464rem; } }\n\n@media only screen and (min-width: 720px) {\n    .flow-text {\n      font-size: 1.488rem; } }\n\n@media only screen and (min-width: 750px) {\n    .flow-text {\n      font-size: 1.512rem; } }\n\n@media only screen and (min-width: 780px) {\n    .flow-text {\n      font-size: 1.536rem; } }\n\n@media only screen and (min-width: 810px) {\n    .flow-text {\n      font-size: 1.56rem; } }\n\n@media only screen and (min-width: 840px) {\n    .flow-text {\n      font-size: 1.584rem; } }\n\n@media only screen and (min-width: 870px) {\n    .flow-text {\n      font-size: 1.608rem; } }\n\n@media only screen and (min-width: 900px) {\n    .flow-text {\n      font-size: 1.632rem; } }\n\n@media only screen and (min-width: 930px) {\n    .flow-text {\n      font-size: 1.656rem; } }\n\n@media only screen and (min-width: 960px) {\n    .flow-text {\n      font-size: 1.68rem; } }\n\n@media only screen and (max-width: 360px) {\n    .flow-text {\n      font-size: 1.2rem; } }\n\n.scale-transition {\n  transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\n  transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important; }\n\n.scale-transition.scale-out {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    transition: -webkit-transform .2s !important;\n    transition: transform .2s !important;\n    transition: transform .2s, -webkit-transform .2s !important; }\n\n.scale-transition.scale-in {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n\n.card-panel {\n  transition: box-shadow .25s;\n  padding: 24px;\n  margin: 0.5rem 0 1rem 0;\n  border-radius: 2px;\n  background-color: #fff; }\n\n.card {\n  position: relative;\n  margin: 0.5rem 0 1rem 0;\n  background-color: #fff;\n  transition: box-shadow .25s;\n  border-radius: 2px; }\n\n.card .card-title {\n    font-size: 24px;\n    font-weight: 300; }\n\n.card .card-title.activator {\n      cursor: pointer; }\n\n.card.small, .card.medium, .card.large {\n    position: relative; }\n\n.card.small .card-image, .card.medium .card-image, .card.large .card-image {\n      max-height: 60%;\n      overflow: hidden; }\n\n.card.small .card-image + .card-content, .card.medium .card-image + .card-content, .card.large .card-image + .card-content {\n      max-height: 40%; }\n\n.card.small .card-content, .card.medium .card-content, .card.large .card-content {\n      max-height: 100%;\n      overflow: hidden; }\n\n.card.small .card-action, .card.medium .card-action, .card.large .card-action {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; }\n\n.card.small {\n    height: 300px; }\n\n.card.medium {\n    height: 400px; }\n\n.card.large {\n    height: 500px; }\n\n.card.horizontal {\n    display: flex; }\n\n.card.horizontal.small .card-image, .card.horizontal.medium .card-image, .card.horizontal.large .card-image {\n      height: 100%;\n      max-height: none;\n      overflow: visible; }\n\n.card.horizontal.small .card-image img, .card.horizontal.medium .card-image img, .card.horizontal.large .card-image img {\n        height: 100%; }\n\n.card.horizontal .card-image {\n      max-width: 50%; }\n\n.card.horizontal .card-image img {\n        border-radius: 2px 0 0 2px;\n        max-width: 100%;\n        width: auto; }\n\n.card.horizontal .card-stacked {\n      display: flex;\n      flex-direction: column;\n      flex: 1;\n      position: relative; }\n\n.card.horizontal .card-stacked .card-content {\n        flex-grow: 1; }\n\n.card.sticky-action .card-action {\n    z-index: 2; }\n\n.card.sticky-action .card-reveal {\n    z-index: 1;\n    padding-bottom: 64px; }\n\n.card .card-image {\n    position: relative; }\n\n.card .card-image img {\n      display: block;\n      border-radius: 2px 2px 0 0;\n      position: relative;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      width: 100%; }\n\n.card .card-image .card-title {\n      color: #fff;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      max-width: 100%;\n      padding: 24px; }\n\n.card .card-content {\n    padding: 24px;\n    border-radius: 0 0 2px 2px; }\n\n.card .card-content p {\n      margin: 0;\n      color: inherit; }\n\n.card .card-content .card-title {\n      display: block;\n      line-height: 32px;\n      margin-bottom: 8px; }\n\n.card .card-content .card-title i {\n        line-height: 32px; }\n\n.card .card-action {\n    position: relative;\n    background-color: inherit;\n    border-top: 1px solid rgba(160, 160, 160, 0.2);\n    padding: 16px 24px; }\n\n.card .card-action:last-child {\n      border-radius: 0 0 2px 2px; }\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {\n      color: #ffab40;\n      margin-right: 24px;\n      transition: color .3s ease;\n      text-transform: uppercase; }\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {\n        color: #ffd8a6; }\n\n.card .card-reveal {\n    padding: 24px;\n    position: absolute;\n    background-color: #fff;\n    width: 100%;\n    overflow-y: auto;\n    left: 0;\n    top: 100%;\n    height: 100%;\n    z-index: 3;\n    display: none; }\n\n.card .card-reveal .card-title {\n      cursor: pointer;\n      display: block; }\n\n#toast-container {\n  display: block;\n  position: fixed;\n  z-index: 10000; }\n\n@media only screen and (max-width: 600px) {\n    #toast-container {\n      min-width: 100%;\n      bottom: 0%; } }\n\n@media only screen and (min-width: 601px) and (max-width: 992px) {\n    #toast-container {\n      left: 5%;\n      bottom: 7%;\n      max-width: 90%; } }\n\n@media only screen and (min-width: 993px) {\n    #toast-container {\n      top: 10%;\n      right: 7%;\n      max-width: 86%; } }\n\n.toast {\n  border-radius: 2px;\n  top: 35px;\n  width: auto;\n  margin-top: 10px;\n  position: relative;\n  max-width: 100%;\n  height: auto;\n  min-height: 48px;\n  line-height: 1.5em;\n  word-break: break-all;\n  background-color: #323232;\n  padding: 10px 25px;\n  font-size: 1.1rem;\n  font-weight: 300;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: default; }\n\n.toast .toast-action {\n    color: #eeff41;\n    font-weight: 500;\n    margin-right: -25px;\n    margin-left: 3rem; }\n\n.toast.rounded {\n    border-radius: 24px; }\n\n@media only screen and (max-width: 600px) {\n    .toast {\n      width: 100%;\n      border-radius: 0; } }\n\n.tabs {\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 48px;\n  width: 100%;\n  background-color: #fff;\n  margin: 0 auto;\n  white-space: nowrap; }\n\n.tabs.tabs-transparent {\n    background-color: transparent; }\n\n.tabs.tabs-transparent .tab a,\n    .tabs.tabs-transparent .tab.disabled a,\n    .tabs.tabs-transparent .tab.disabled a:hover {\n      color: rgba(255, 255, 255, 0.7); }\n\n.tabs.tabs-transparent .tab a:hover,\n    .tabs.tabs-transparent .tab a.active {\n      color: #fff; }\n\n.tabs.tabs-transparent .indicator {\n      background-color: #fff; }\n\n.tabs.tabs-fixed-width {\n    display: flex; }\n\n.tabs.tabs-fixed-width .tab {\n      flex-grow: 1; }\n\n.tabs .tab {\n    display: inline-block;\n    text-align: center;\n    line-height: 48px;\n    height: 48px;\n    padding: 0;\n    margin: 0;\n    text-transform: uppercase; }\n\n.tabs .tab a {\n      color: rgba(238, 110, 115, 0.7);\n      display: block;\n      width: 100%;\n      height: 100%;\n      padding: 0 24px;\n      font-size: 14px;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      transition: color .28s ease; }\n\n.tabs .tab a:hover, .tabs .tab a.active {\n        background-color: transparent;\n        color: #ee6e73; }\n\n.tabs .tab.disabled a,\n    .tabs .tab.disabled a:hover {\n      color: rgba(238, 110, 115, 0.7);\n      cursor: default; }\n\n.tabs .indicator {\n    position: absolute;\n    bottom: 0;\n    height: 2px;\n    background-color: #f6b2b5;\n    will-change: left, right; }\n\n@media only screen and (max-width: 992px) {\n  .tabs {\n    display: flex; }\n    .tabs .tab {\n      flex-grow: 1; }\n      .tabs .tab a {\n        padding: 0 12px; } }\n\n.material-tooltip {\n  padding: 10px 8px;\n  font-size: 1rem;\n  z-index: 2000;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #fff;\n  min-height: 36px;\n  line-height: 120%;\n  opacity: 0;\n  position: absolute;\n  text-align: center;\n  max-width: calc(100% - 4px);\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  visibility: hidden; }\n\n.backdrop {\n  position: absolute;\n  opacity: 0;\n  height: 7px;\n  width: 14px;\n  border-radius: 0 0 50% 50%;\n  background-color: #323232;\n  z-index: -1;\n  -webkit-transform-origin: 50% 0%;\n          transform-origin: 50% 0%;\n  visibility: hidden; }\n\n.btn, .btn-large,\n.btn-flat {\n  border: none;\n  border-radius: 2px;\n  display: inline-block;\n  height: 36px;\n  line-height: 36px;\n  padding: 0 2rem;\n  text-transform: uppercase;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent; }\n\n.btn.disabled, .disabled.btn-large,\n.btn-floating.disabled,\n.btn-large.disabled,\n.btn-flat.disabled,\n.btn:disabled,\n.btn-large:disabled,\n.btn-floating:disabled,\n.btn-large:disabled,\n.btn-flat:disabled,\n.btn[disabled],\n.btn-large[disabled],\n.btn-floating[disabled],\n.btn-large[disabled],\n.btn-flat[disabled] {\n  pointer-events: none;\n  background-color: #DFDFDF !important;\n  box-shadow: none;\n  color: #9F9F9F !important;\n  cursor: default; }\n\n.btn.disabled:hover, .disabled.btn-large:hover,\n  .btn-floating.disabled:hover,\n  .btn-large.disabled:hover,\n  .btn-flat.disabled:hover,\n  .btn:disabled:hover,\n  .btn-large:disabled:hover,\n  .btn-floating:disabled:hover,\n  .btn-large:disabled:hover,\n  .btn-flat:disabled:hover,\n  .btn[disabled]:hover,\n  .btn-large[disabled]:hover,\n  .btn-floating[disabled]:hover,\n  .btn-large[disabled]:hover,\n  .btn-flat[disabled]:hover {\n    background-color: #DFDFDF !important;\n    color: #9F9F9F !important; }\n\n.btn, .btn-large,\n.btn-floating,\n.btn-large,\n.btn-flat {\n  font-size: 1rem;\n  outline: 0; }\n\n.btn i, .btn-large i,\n  .btn-floating i,\n  .btn-large i,\n  .btn-flat i {\n    font-size: 1.3rem;\n    line-height: inherit; }\n\n.btn:focus, .btn-large:focus,\n.btn-floating:focus {\n  background-color: #1d7d74; }\n\n.btn, .btn-large {\n  text-decoration: none;\n  color: #fff;\n  background-color: #26a69a;\n  text-align: center;\n  letter-spacing: .5px;\n  transition: .2s ease-out;\n  cursor: pointer; }\n\n.btn:hover, .btn-large:hover {\n    background-color: #2bbbad; }\n\n.btn-floating {\n  display: inline-block;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  padding: 0;\n  background-color: #26a69a;\n  border-radius: 50%;\n  transition: .3s;\n  cursor: pointer;\n  vertical-align: middle; }\n\n.btn-floating:hover {\n    background-color: #26a69a; }\n\n.btn-floating:before {\n    border-radius: 0; }\n\n.btn-floating.btn-large {\n    width: 56px;\n    height: 56px; }\n\n.btn-floating.btn-large.halfway-fab {\n      bottom: -28px; }\n\n.btn-floating.btn-large i {\n      line-height: 56px; }\n\n.btn-floating.halfway-fab {\n    position: absolute;\n    right: 24px;\n    bottom: -20px; }\n\n.btn-floating.halfway-fab.left {\n      right: auto;\n      left: 24px; }\n\n.btn-floating i {\n    width: inherit;\n    display: inline-block;\n    text-align: center;\n    color: #fff;\n    font-size: 1.6rem;\n    line-height: 40px; }\n\nbutton.btn-floating {\n  border: none; }\n\n.fixed-action-btn {\n  position: fixed;\n  right: 23px;\n  bottom: 23px;\n  padding-top: 15px;\n  margin-bottom: 0;\n  z-index: 997; }\n\n.fixed-action-btn.active ul {\n    visibility: visible; }\n\n.fixed-action-btn.horizontal {\n    padding: 0 0 0 15px; }\n\n.fixed-action-btn.horizontal ul {\n      text-align: right;\n      right: 64px;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      height: 100%;\n      left: auto;\n      width: 500px;\n      /*width 100% only goes to width of button container */ }\n\n.fixed-action-btn.horizontal ul li {\n        display: inline-block;\n        margin: 15px 15px 0 0; }\n\n.fixed-action-btn.toolbar {\n    padding: 0;\n    height: 56px; }\n\n.fixed-action-btn.toolbar.active > a i {\n      opacity: 0; }\n\n.fixed-action-btn.toolbar ul {\n      display: flex;\n      top: 0;\n      bottom: 0;\n      z-index: 1; }\n\n.fixed-action-btn.toolbar ul li {\n        flex: 1;\n        display: inline-block;\n        margin: 0;\n        height: 100%;\n        transition: none; }\n\n.fixed-action-btn.toolbar ul li a {\n          display: block;\n          overflow: hidden;\n          position: relative;\n          width: 100%;\n          height: 100%;\n          background-color: transparent;\n          box-shadow: none;\n          color: #fff;\n          line-height: 56px;\n          z-index: 1; }\n\n.fixed-action-btn.toolbar ul li a i {\n            line-height: inherit; }\n\n.fixed-action-btn ul {\n    left: 0;\n    right: 0;\n    text-align: center;\n    position: absolute;\n    bottom: 64px;\n    margin: 0;\n    visibility: hidden; }\n\n.fixed-action-btn ul li {\n      margin-bottom: 15px; }\n\n.fixed-action-btn ul a.btn-floating {\n      opacity: 0; }\n\n.fixed-action-btn .fab-backdrop {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    width: 40px;\n    height: 40px;\n    background-color: #26a69a;\n    border-radius: 50%;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n.btn-flat {\n  box-shadow: none;\n  background-color: transparent;\n  color: #343434;\n  cursor: pointer;\n  transition: background-color .2s; }\n\n.btn-flat:focus, .btn-flat:hover {\n    box-shadow: none; }\n\n.btn-flat:focus {\n    background-color: rgba(0, 0, 0, 0.1); }\n\n.btn-flat.disabled {\n    background-color: transparent !important;\n    color: #b3b2b2 !important;\n    cursor: default; }\n\n.btn-large {\n  height: 54px;\n  line-height: 54px; }\n\n.btn-large i {\n    font-size: 1.6rem; }\n\n.btn-block {\n  display: block; }\n\n.dropdown-content {\n  background-color: #fff;\n  margin: 0;\n  display: none;\n  min-width: 100px;\n  max-height: 650px;\n  overflow-y: auto;\n  opacity: 0;\n  position: absolute;\n  z-index: 999;\n  will-change: width, height; }\n\n.dropdown-content li {\n    clear: both;\n    color: rgba(0, 0, 0, 0.87);\n    cursor: pointer;\n    min-height: 50px;\n    line-height: 1.5rem;\n    width: 100%;\n    text-align: left;\n    text-transform: none; }\n\n.dropdown-content li:hover, .dropdown-content li.active, .dropdown-content li.selected {\n      background-color: #eee; }\n\n.dropdown-content li.active.selected {\n      background-color: #e1e1e1; }\n\n.dropdown-content li.divider {\n      min-height: 0;\n      height: 1px; }\n\n.dropdown-content li > a, .dropdown-content li > span {\n      font-size: 16px;\n      color: #26a69a;\n      display: block;\n      line-height: 22px;\n      padding: 14px 16px; }\n\n.dropdown-content li > span > label {\n      top: 1px;\n      left: 0;\n      height: 18px; }\n\n.dropdown-content li > a > i {\n      height: inherit;\n      line-height: inherit;\n      float: left;\n      margin: 0 24px 0 0;\n      width: 24px; }\n\n.input-field.col .dropdown-content [type=\"checkbox\"] + label {\n  top: 1px;\n  left: 0;\n  height: 18px; }\n\n/*!\r\n * Waves v0.6.0\r\n * http://fian.my.id/Waves\r\n *\r\n * Copyright 2014 Alfiana E. Sibuea and other contributors\r\n * Released under the MIT license\r\n * https://github.com/fians/Waves/blob/master/LICENSE\r\n */\n\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  transition: .3s ease-out; }\n\n.waves-effect .waves-ripple {\n    position: absolute;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    margin-top: -10px;\n    margin-left: -10px;\n    opacity: 0;\n    background: rgba(0, 0, 0, 0.2);\n    transition: all 0.7s ease-out;\n    transition-property: opacity, -webkit-transform;\n    transition-property: transform, opacity;\n    transition-property: transform, opacity, -webkit-transform;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    pointer-events: none; }\n\n.waves-effect.waves-light .waves-ripple {\n    background-color: rgba(255, 255, 255, 0.45); }\n\n.waves-effect.waves-red .waves-ripple {\n    background-color: rgba(244, 67, 54, 0.7); }\n\n.waves-effect.waves-yellow .waves-ripple {\n    background-color: rgba(255, 235, 59, 0.7); }\n\n.waves-effect.waves-orange .waves-ripple {\n    background-color: rgba(255, 152, 0, 0.7); }\n\n.waves-effect.waves-purple .waves-ripple {\n    background-color: rgba(156, 39, 176, 0.7); }\n\n.waves-effect.waves-green .waves-ripple {\n    background-color: rgba(76, 175, 80, 0.7); }\n\n.waves-effect.waves-teal .waves-ripple {\n    background-color: rgba(0, 150, 136, 0.7); }\n\n.waves-effect input[type=\"button\"], .waves-effect input[type=\"reset\"], .waves-effect input[type=\"submit\"] {\n    border: 0;\n    font-style: normal;\n    font-size: inherit;\n    text-transform: inherit;\n    background: none; }\n\n.waves-effect img {\n    position: relative;\n    z-index: -1; }\n\n.waves-notransition {\n  transition: none !important; }\n\n.waves-circle {\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%); }\n\n.waves-input-wrapper {\n  border-radius: 0.2em;\n  vertical-align: bottom; }\n\n.waves-input-wrapper .waves-button-input {\n    position: relative;\n    top: 0;\n    left: 0;\n    z-index: 1; }\n\n.waves-circle {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none; }\n\n.waves-block {\n  display: block; }\n\n/* Firefox Bug: link not triggered */\n\n.waves-effect .waves-ripple {\n  z-index: -1; }\n\n.modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: #fafafa;\n  padding: 0;\n  max-height: 70%;\n  width: 55%;\n  margin: auto;\n  overflow-y: auto;\n  border-radius: 2px;\n  will-change: top, opacity; }\n\n@media only screen and (max-width: 992px) {\n    .modal {\n      width: 80%; } }\n\n.modal h1, .modal h2, .modal h3, .modal h4 {\n    margin-top: 0; }\n\n.modal .modal-content {\n    padding: 24px; }\n\n.modal .modal-close {\n    cursor: pointer; }\n\n.modal .modal-footer {\n    border-radius: 0 0 2px 2px;\n    background-color: #fafafa;\n    padding: 4px 6px;\n    height: 56px;\n    width: 100%;\n    text-align: right; }\n\n.modal .modal-footer .btn, .modal .modal-footer .btn-large, .modal .modal-footer .btn-flat {\n      margin: 6px 0; }\n\n.modal-overlay {\n  position: fixed;\n  z-index: 999;\n  top: -25%;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 125%;\n  width: 100%;\n  background: #000;\n  display: none;\n  will-change: opacity; }\n\n.modal.modal-fixed-footer {\n  padding: 0;\n  height: 70%; }\n\n.modal.modal-fixed-footer .modal-content {\n    position: absolute;\n    height: calc(100% - 56px);\n    max-height: 100%;\n    width: 100%;\n    overflow-y: auto; }\n\n.modal.modal-fixed-footer .modal-footer {\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    position: absolute;\n    bottom: 0; }\n\n.modal.bottom-sheet {\n  top: auto;\n  bottom: -100%;\n  margin: 0;\n  width: 100%;\n  max-height: 45%;\n  border-radius: 0;\n  will-change: bottom, opacity; }\n\n.collapsible {\n  border-top: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  margin: 0.5rem 0 1rem 0; }\n\n.collapsible-header {\n  display: flex;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  line-height: 1.5;\n  padding: 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd; }\n\n.collapsible-header i {\n    width: 2rem;\n    font-size: 1.6rem;\n    display: inline-block;\n    text-align: center;\n    margin-right: 1rem; }\n\n.collapsible-body {\n  display: none;\n  border-bottom: 1px solid #ddd;\n  box-sizing: border-box;\n  padding: 2rem; }\n\n.side-nav .collapsible,\n.side-nav.fixed .collapsible {\n  border: none;\n  box-shadow: none; }\n\n.side-nav .collapsible li,\n  .side-nav.fixed .collapsible li {\n    padding: 0; }\n\n.side-nav .collapsible-header,\n.side-nav.fixed .collapsible-header {\n  background-color: transparent;\n  border: none;\n  line-height: inherit;\n  height: inherit;\n  padding: 0 16px; }\n\n.side-nav .collapsible-header:hover,\n  .side-nav.fixed .collapsible-header:hover {\n    background-color: rgba(0, 0, 0, 0.05); }\n\n.side-nav .collapsible-header i,\n  .side-nav.fixed .collapsible-header i {\n    line-height: inherit; }\n\n.side-nav .collapsible-body,\n.side-nav.fixed .collapsible-body {\n  border: 0;\n  background-color: #fff; }\n\n.side-nav .collapsible-body li a,\n  .side-nav.fixed .collapsible-body li a {\n    padding: 0 23.5px 0 31px; }\n\n.collapsible.popout {\n  border: none;\n  box-shadow: none; }\n\n.collapsible.popout > li {\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    margin: 0 24px;\n    transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94); }\n\n.collapsible.popout > li.active {\n    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n    margin: 16px 0; }\n\n.chip {\n  display: inline-block;\n  height: 32px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  line-height: 32px;\n  padding: 0 12px;\n  border-radius: 16px;\n  background-color: #e4e4e4;\n  margin-bottom: 5px;\n  margin-right: 5px; }\n\n.chip > img {\n    float: left;\n    margin: 0 8px 0 -12px;\n    height: 32px;\n    width: 32px;\n    border-radius: 50%; }\n\n.chip .close {\n    cursor: pointer;\n    float: right;\n    font-size: 16px;\n    line-height: 32px;\n    padding-left: 8px; }\n\n.chips {\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  box-shadow: none;\n  margin: 0 0 20px 0;\n  min-height: 45px;\n  outline: none;\n  transition: all .3s; }\n\n.chips.focus {\n    border-bottom: 1px solid #26a69a;\n    box-shadow: 0 1px 0 0 #26a69a; }\n\n.chips:hover {\n    cursor: text; }\n\n.chips .chip.selected {\n    background-color: #26a69a;\n    color: #fff; }\n\n.chips .input {\n    background: none;\n    border: 0;\n    color: rgba(0, 0, 0, 0.6);\n    display: inline-block;\n    font-size: 1rem;\n    height: 3rem;\n    line-height: 32px;\n    outline: 0;\n    margin: 0;\n    padding: 0 !important;\n    width: 120px !important; }\n\n.chips .input:focus {\n    border: 0 !important;\n    box-shadow: none !important; }\n\n.chips .autocomplete-content {\n    margin-top: 0;\n    margin-bottom: 0; }\n\n.prefix ~ .chips {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem); }\n\n.chips:empty ~ label {\n  font-size: 0.8rem;\n  -webkit-transform: translateY(-140%);\n          transform: translateY(-140%); }\n\n.materialboxed {\n  display: block;\n  cursor: zoom-in;\n  position: relative;\n  transition: opacity .4s;\n  -webkit-backface-visibility: hidden; }\n\n.materialboxed:hover:not(.active) {\n    opacity: .8; }\n\n.materialboxed.active {\n    cursor: zoom-out; }\n\n#materialbox-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #292929;\n  z-index: 1000;\n  will-change: opacity; }\n\n.materialbox-caption {\n  position: fixed;\n  display: none;\n  color: #fff;\n  line-height: 50px;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  padding: 0% 15%;\n  height: 50px;\n  z-index: 1000;\n  -webkit-font-smoothing: antialiased; }\n\nselect:focus {\n  outline: 1px solid #c9f3ef; }\n\nbutton:focus {\n  outline: none;\n  background-color: #2ab7a9; }\n\nlabel {\n  font-size: 0.8rem;\n  color: #9e9e9e; }\n\n/* Text Inputs + Textarea\r\n   ========================================================================== */\n\n/* Style Placeholders */\n\n::-webkit-input-placeholder {\n  color: #d1d1d1; }\n\n::-ms-input-placeholder {\n  color: #d1d1d1; }\n\n::placeholder {\n  color: #d1d1d1; }\n\n/* Text inputs */\n\ninput:not([type]),\ninput[type=text]:not(.browser-default),\ninput[type=password]:not(.browser-default),\ninput[type=email]:not(.browser-default),\ninput[type=url]:not(.browser-default),\ninput[type=time]:not(.browser-default),\ninput[type=date]:not(.browser-default),\ninput[type=datetime]:not(.browser-default),\ninput[type=datetime-local]:not(.browser-default),\ninput[type=tel]:not(.browser-default),\ninput[type=number]:not(.browser-default),\ninput[type=search]:not(.browser-default),\ntextarea.materialize-textarea {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  border-radius: 0;\n  outline: none;\n  height: 3rem;\n  width: 100%;\n  font-size: 1rem;\n  margin: 0 0 20px 0;\n  padding: 0;\n  box-shadow: none;\n  box-sizing: content-box;\n  transition: all 0.3s; }\n\ninput:not([type]):disabled, input:not([type])[readonly=\"readonly\"],\n  input[type=text]:not(.browser-default):disabled,\n  input[type=text]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=password]:not(.browser-default):disabled,\n  input[type=password]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=email]:not(.browser-default):disabled,\n  input[type=email]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=url]:not(.browser-default):disabled,\n  input[type=url]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=time]:not(.browser-default):disabled,\n  input[type=time]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=date]:not(.browser-default):disabled,\n  input[type=date]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=datetime]:not(.browser-default):disabled,\n  input[type=datetime]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=datetime-local]:not(.browser-default):disabled,\n  input[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=tel]:not(.browser-default):disabled,\n  input[type=tel]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=number]:not(.browser-default):disabled,\n  input[type=number]:not(.browser-default)[readonly=\"readonly\"],\n  input[type=search]:not(.browser-default):disabled,\n  input[type=search]:not(.browser-default)[readonly=\"readonly\"],\n  textarea.materialize-textarea:disabled,\n  textarea.materialize-textarea[readonly=\"readonly\"] {\n    color: rgba(0, 0, 0, 0.42);\n    border-bottom: 1px dotted rgba(0, 0, 0, 0.42); }\n\ninput:not([type]):disabled + label,\n  input:not([type])[readonly=\"readonly\"] + label,\n  input[type=text]:not(.browser-default):disabled + label,\n  input[type=text]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=password]:not(.browser-default):disabled + label,\n  input[type=password]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=email]:not(.browser-default):disabled + label,\n  input[type=email]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=url]:not(.browser-default):disabled + label,\n  input[type=url]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=time]:not(.browser-default):disabled + label,\n  input[type=time]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=date]:not(.browser-default):disabled + label,\n  input[type=date]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=datetime]:not(.browser-default):disabled + label,\n  input[type=datetime]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=datetime-local]:not(.browser-default):disabled + label,\n  input[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=tel]:not(.browser-default):disabled + label,\n  input[type=tel]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=number]:not(.browser-default):disabled + label,\n  input[type=number]:not(.browser-default)[readonly=\"readonly\"] + label,\n  input[type=search]:not(.browser-default):disabled + label,\n  input[type=search]:not(.browser-default)[readonly=\"readonly\"] + label,\n  textarea.materialize-textarea:disabled + label,\n  textarea.materialize-textarea[readonly=\"readonly\"] + label {\n    color: rgba(0, 0, 0, 0.42); }\n\ninput:not([type]):focus:not([readonly]),\n  input[type=text]:not(.browser-default):focus:not([readonly]),\n  input[type=password]:not(.browser-default):focus:not([readonly]),\n  input[type=email]:not(.browser-default):focus:not([readonly]),\n  input[type=url]:not(.browser-default):focus:not([readonly]),\n  input[type=time]:not(.browser-default):focus:not([readonly]),\n  input[type=date]:not(.browser-default):focus:not([readonly]),\n  input[type=datetime]:not(.browser-default):focus:not([readonly]),\n  input[type=datetime-local]:not(.browser-default):focus:not([readonly]),\n  input[type=tel]:not(.browser-default):focus:not([readonly]),\n  input[type=number]:not(.browser-default):focus:not([readonly]),\n  input[type=search]:not(.browser-default):focus:not([readonly]),\n  textarea.materialize-textarea:focus:not([readonly]) {\n    border-bottom: 1px solid #26a69a;\n    box-shadow: 0 1px 0 0 #26a69a; }\n\ninput:not([type]):focus:not([readonly]) + label,\n  input[type=text]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=password]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=email]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=url]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=time]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=date]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=datetime]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=datetime-local]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=tel]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=number]:not(.browser-default):focus:not([readonly]) + label,\n  input[type=search]:not(.browser-default):focus:not([readonly]) + label,\n  textarea.materialize-textarea:focus:not([readonly]) + label {\n    color: #26a69a; }\n\ninput:not([type]).validate + label,\n  input[type=text]:not(.browser-default).validate + label,\n  input[type=password]:not(.browser-default).validate + label,\n  input[type=email]:not(.browser-default).validate + label,\n  input[type=url]:not(.browser-default).validate + label,\n  input[type=time]:not(.browser-default).validate + label,\n  input[type=date]:not(.browser-default).validate + label,\n  input[type=datetime]:not(.browser-default).validate + label,\n  input[type=datetime-local]:not(.browser-default).validate + label,\n  input[type=tel]:not(.browser-default).validate + label,\n  input[type=number]:not(.browser-default).validate + label,\n  input[type=search]:not(.browser-default).validate + label,\n  textarea.materialize-textarea.validate + label {\n    width: 100%; }\n\ninput:not([type]).invalid + label:after,\n  input:not([type]).valid + label:after,\n  input[type=text]:not(.browser-default).invalid + label:after,\n  input[type=text]:not(.browser-default).valid + label:after,\n  input[type=password]:not(.browser-default).invalid + label:after,\n  input[type=password]:not(.browser-default).valid + label:after,\n  input[type=email]:not(.browser-default).invalid + label:after,\n  input[type=email]:not(.browser-default).valid + label:after,\n  input[type=url]:not(.browser-default).invalid + label:after,\n  input[type=url]:not(.browser-default).valid + label:after,\n  input[type=time]:not(.browser-default).invalid + label:after,\n  input[type=time]:not(.browser-default).valid + label:after,\n  input[type=date]:not(.browser-default).invalid + label:after,\n  input[type=date]:not(.browser-default).valid + label:after,\n  input[type=datetime]:not(.browser-default).invalid + label:after,\n  input[type=datetime]:not(.browser-default).valid + label:after,\n  input[type=datetime-local]:not(.browser-default).invalid + label:after,\n  input[type=datetime-local]:not(.browser-default).valid + label:after,\n  input[type=tel]:not(.browser-default).invalid + label:after,\n  input[type=tel]:not(.browser-default).valid + label:after,\n  input[type=number]:not(.browser-default).invalid + label:after,\n  input[type=number]:not(.browser-default).valid + label:after,\n  input[type=search]:not(.browser-default).invalid + label:after,\n  input[type=search]:not(.browser-default).valid + label:after,\n  textarea.materialize-textarea.invalid + label:after,\n  textarea.materialize-textarea.valid + label:after {\n    display: none; }\n\ninput:not([type]).invalid + label.active:after,\n  input:not([type]).valid + label.active:after,\n  input[type=text]:not(.browser-default).invalid + label.active:after,\n  input[type=text]:not(.browser-default).valid + label.active:after,\n  input[type=password]:not(.browser-default).invalid + label.active:after,\n  input[type=password]:not(.browser-default).valid + label.active:after,\n  input[type=email]:not(.browser-default).invalid + label.active:after,\n  input[type=email]:not(.browser-default).valid + label.active:after,\n  input[type=url]:not(.browser-default).invalid + label.active:after,\n  input[type=url]:not(.browser-default).valid + label.active:after,\n  input[type=time]:not(.browser-default).invalid + label.active:after,\n  input[type=time]:not(.browser-default).valid + label.active:after,\n  input[type=date]:not(.browser-default).invalid + label.active:after,\n  input[type=date]:not(.browser-default).valid + label.active:after,\n  input[type=datetime]:not(.browser-default).invalid + label.active:after,\n  input[type=datetime]:not(.browser-default).valid + label.active:after,\n  input[type=datetime-local]:not(.browser-default).invalid + label.active:after,\n  input[type=datetime-local]:not(.browser-default).valid + label.active:after,\n  input[type=tel]:not(.browser-default).invalid + label.active:after,\n  input[type=tel]:not(.browser-default).valid + label.active:after,\n  input[type=number]:not(.browser-default).invalid + label.active:after,\n  input[type=number]:not(.browser-default).valid + label.active:after,\n  input[type=search]:not(.browser-default).invalid + label.active:after,\n  input[type=search]:not(.browser-default).valid + label.active:after,\n  textarea.materialize-textarea.invalid + label.active:after,\n  textarea.materialize-textarea.valid + label.active:after {\n    display: block; }\n\n/* Validation Sass Placeholders */\n\ninput.valid:not([type]), input.valid:not([type]):focus,\ninput.valid[type=text]:not(.browser-default),\ninput.valid[type=text]:not(.browser-default):focus,\ninput.valid[type=password]:not(.browser-default),\ninput.valid[type=password]:not(.browser-default):focus,\ninput.valid[type=email]:not(.browser-default),\ninput.valid[type=email]:not(.browser-default):focus,\ninput.valid[type=url]:not(.browser-default),\ninput.valid[type=url]:not(.browser-default):focus,\ninput.valid[type=time]:not(.browser-default),\ninput.valid[type=time]:not(.browser-default):focus,\ninput.valid[type=date]:not(.browser-default),\ninput.valid[type=date]:not(.browser-default):focus,\ninput.valid[type=datetime]:not(.browser-default),\ninput.valid[type=datetime]:not(.browser-default):focus,\ninput.valid[type=datetime-local]:not(.browser-default),\ninput.valid[type=datetime-local]:not(.browser-default):focus,\ninput.valid[type=tel]:not(.browser-default),\ninput.valid[type=tel]:not(.browser-default):focus,\ninput.valid[type=number]:not(.browser-default),\ninput.valid[type=number]:not(.browser-default):focus,\ninput.valid[type=search]:not(.browser-default),\ninput.valid[type=search]:not(.browser-default):focus,\ntextarea.materialize-textarea.valid,\ntextarea.materialize-textarea.valid:focus, .select-wrapper.valid > input.select-dropdown {\n  border-bottom: 1px solid #4CAF50;\n  box-shadow: 0 1px 0 0 #4CAF50; }\n\ninput.invalid:not([type]), input.invalid:not([type]):focus,\ninput.invalid[type=text]:not(.browser-default),\ninput.invalid[type=text]:not(.browser-default):focus,\ninput.invalid[type=password]:not(.browser-default),\ninput.invalid[type=password]:not(.browser-default):focus,\ninput.invalid[type=email]:not(.browser-default),\ninput.invalid[type=email]:not(.browser-default):focus,\ninput.invalid[type=url]:not(.browser-default),\ninput.invalid[type=url]:not(.browser-default):focus,\ninput.invalid[type=time]:not(.browser-default),\ninput.invalid[type=time]:not(.browser-default):focus,\ninput.invalid[type=date]:not(.browser-default),\ninput.invalid[type=date]:not(.browser-default):focus,\ninput.invalid[type=datetime]:not(.browser-default),\ninput.invalid[type=datetime]:not(.browser-default):focus,\ninput.invalid[type=datetime-local]:not(.browser-default),\ninput.invalid[type=datetime-local]:not(.browser-default):focus,\ninput.invalid[type=tel]:not(.browser-default),\ninput.invalid[type=tel]:not(.browser-default):focus,\ninput.invalid[type=number]:not(.browser-default),\ninput.invalid[type=number]:not(.browser-default):focus,\ninput.invalid[type=search]:not(.browser-default),\ninput.invalid[type=search]:not(.browser-default):focus,\ntextarea.materialize-textarea.invalid,\ntextarea.materialize-textarea.invalid:focus, .select-wrapper.invalid > input.select-dropdown {\n  border-bottom: 1px solid #F44336;\n  box-shadow: 0 1px 0 0 #F44336; }\n\ninput:not([type]).valid + label:after,\ninput:not([type]):focus.valid + label:after,\ninput[type=text]:not(.browser-default).valid + label:after,\ninput[type=text]:not(.browser-default):focus.valid + label:after,\ninput[type=password]:not(.browser-default).valid + label:after,\ninput[type=password]:not(.browser-default):focus.valid + label:after,\ninput[type=email]:not(.browser-default).valid + label:after,\ninput[type=email]:not(.browser-default):focus.valid + label:after,\ninput[type=url]:not(.browser-default).valid + label:after,\ninput[type=url]:not(.browser-default):focus.valid + label:after,\ninput[type=time]:not(.browser-default).valid + label:after,\ninput[type=time]:not(.browser-default):focus.valid + label:after,\ninput[type=date]:not(.browser-default).valid + label:after,\ninput[type=date]:not(.browser-default):focus.valid + label:after,\ninput[type=datetime]:not(.browser-default).valid + label:after,\ninput[type=datetime]:not(.browser-default):focus.valid + label:after,\ninput[type=datetime-local]:not(.browser-default).valid + label:after,\ninput[type=datetime-local]:not(.browser-default):focus.valid + label:after,\ninput[type=tel]:not(.browser-default).valid + label:after,\ninput[type=tel]:not(.browser-default):focus.valid + label:after,\ninput[type=number]:not(.browser-default).valid + label:after,\ninput[type=number]:not(.browser-default):focus.valid + label:after,\ninput[type=search]:not(.browser-default).valid + label:after,\ninput[type=search]:not(.browser-default):focus.valid + label:after,\ntextarea.materialize-textarea.valid + label:after,\ntextarea.materialize-textarea:focus.valid + label:after, .select-wrapper.valid + label:after {\n  content: attr(data-success);\n  color: #4CAF50;\n  opacity: 1;\n  -webkit-transform: translateY(9px);\n          transform: translateY(9px); }\n\ninput:not([type]).invalid + label:after,\ninput:not([type]):focus.invalid + label:after,\ninput[type=text]:not(.browser-default).invalid + label:after,\ninput[type=text]:not(.browser-default):focus.invalid + label:after,\ninput[type=password]:not(.browser-default).invalid + label:after,\ninput[type=password]:not(.browser-default):focus.invalid + label:after,\ninput[type=email]:not(.browser-default).invalid + label:after,\ninput[type=email]:not(.browser-default):focus.invalid + label:after,\ninput[type=url]:not(.browser-default).invalid + label:after,\ninput[type=url]:not(.browser-default):focus.invalid + label:after,\ninput[type=time]:not(.browser-default).invalid + label:after,\ninput[type=time]:not(.browser-default):focus.invalid + label:after,\ninput[type=date]:not(.browser-default).invalid + label:after,\ninput[type=date]:not(.browser-default):focus.invalid + label:after,\ninput[type=datetime]:not(.browser-default).invalid + label:after,\ninput[type=datetime]:not(.browser-default):focus.invalid + label:after,\ninput[type=datetime-local]:not(.browser-default).invalid + label:after,\ninput[type=datetime-local]:not(.browser-default):focus.invalid + label:after,\ninput[type=tel]:not(.browser-default).invalid + label:after,\ninput[type=tel]:not(.browser-default):focus.invalid + label:after,\ninput[type=number]:not(.browser-default).invalid + label:after,\ninput[type=number]:not(.browser-default):focus.invalid + label:after,\ninput[type=search]:not(.browser-default).invalid + label:after,\ninput[type=search]:not(.browser-default):focus.invalid + label:after,\ntextarea.materialize-textarea.invalid + label:after,\ntextarea.materialize-textarea:focus.invalid + label:after, .select-wrapper.invalid + label:after {\n  content: attr(data-error);\n  color: #F44336;\n  opacity: 1;\n  -webkit-transform: translateY(9px);\n          transform: translateY(9px); }\n\ninput:not([type]) + label:after,\ninput[type=text]:not(.browser-default) + label:after,\ninput[type=password]:not(.browser-default) + label:after,\ninput[type=email]:not(.browser-default) + label:after,\ninput[type=url]:not(.browser-default) + label:after,\ninput[type=time]:not(.browser-default) + label:after,\ninput[type=date]:not(.browser-default) + label:after,\ninput[type=datetime]:not(.browser-default) + label:after,\ninput[type=datetime-local]:not(.browser-default) + label:after,\ninput[type=tel]:not(.browser-default) + label:after,\ninput[type=number]:not(.browser-default) + label:after,\ninput[type=search]:not(.browser-default) + label:after,\ntextarea.materialize-textarea + label:after, .select-wrapper + label:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 0;\n  opacity: 0;\n  transition: .2s opacity ease-out, .2s color ease-out; }\n\n.input-field {\n  position: relative;\n  margin-top: 1rem; }\n\n.input-field.inline {\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 5px; }\n\n.input-field.inline input,\n    .input-field.inline .select-dropdown {\n      margin-bottom: 1rem; }\n\n.input-field.col label {\n    left: 0.75rem; }\n\n.input-field.col .prefix ~ label,\n  .input-field.col .prefix ~ .validate ~ label {\n    width: calc(100% - 3rem - 1.5rem); }\n\n.input-field label {\n    color: #9e9e9e;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    font-size: 1rem;\n    cursor: text;\n    transition: -webkit-transform .2s ease-out;\n    transition: transform .2s ease-out;\n    transition: transform .2s ease-out, -webkit-transform .2s ease-out;\n    -webkit-transform-origin: 0% 100%;\n            transform-origin: 0% 100%;\n    text-align: initial;\n    -webkit-transform: translateY(12px);\n            transform: translateY(12px);\n    pointer-events: none; }\n\n.input-field label:not(.label-icon).active {\n      -webkit-transform: translateY(-14px) scale(0.8);\n              transform: translateY(-14px) scale(0.8);\n      -webkit-transform-origin: 0 0;\n              transform-origin: 0 0; }\n\n.input-field .prefix {\n    position: absolute;\n    width: 3rem;\n    font-size: 2rem;\n    transition: color .2s; }\n\n.input-field .prefix.active {\n      color: #26a69a; }\n\n.input-field .prefix ~ input,\n  .input-field .prefix ~ textarea,\n  .input-field .prefix ~ label,\n  .input-field .prefix ~ .validate ~ label,\n  .input-field .prefix ~ .autocomplete-content {\n    margin-left: 3rem;\n    width: 92%;\n    width: calc(100% - 3rem); }\n\n.input-field .prefix ~ label {\n    margin-left: 3rem; }\n\n@media only screen and (max-width: 992px) {\n    .input-field .prefix ~ input {\n      width: 86%;\n      width: calc(100% - 3rem); } }\n\n@media only screen and (max-width: 600px) {\n    .input-field .prefix ~ input {\n      width: 80%;\n      width: calc(100% - 3rem); } }\n\n/* Search Field */\n\n.input-field input[type=search] {\n  display: block;\n  line-height: inherit; }\n\n.nav-wrapper .input-field input[type=search] {\n    height: inherit;\n    padding-left: 4rem;\n    width: calc(100% - 4rem);\n    border: 0;\n    box-shadow: none; }\n\n.input-field input[type=search]:focus {\n    background-color: #fff;\n    border: 0;\n    box-shadow: none;\n    color: #444; }\n\n.input-field input[type=search]:focus + label i,\n    .input-field input[type=search]:focus ~ .mdi-navigation-close,\n    .input-field input[type=search]:focus ~ .material-icons {\n      color: #444; }\n\n.input-field input[type=search] + label {\n    left: 1rem; }\n\n.input-field input[type=search] ~ .mdi-navigation-close,\n  .input-field input[type=search] ~ .material-icons {\n    position: absolute;\n    top: 0;\n    right: 1rem;\n    color: transparent;\n    cursor: pointer;\n    font-size: 2rem;\n    transition: .3s color; }\n\n/* Textarea */\n\ntextarea {\n  width: 100%;\n  height: 3rem;\n  background-color: transparent; }\n\ntextarea.materialize-textarea {\n    overflow-y: hidden;\n    /* prevents scroll bar flash */\n    padding: .8rem 0 1.6rem 0;\n    /* prevents text jump on Enter keypress */\n    resize: none;\n    min-height: 3rem; }\n\ntextarea.materialize-textarea.validate + label {\n      height: 100%; }\n\ntextarea.materialize-textarea.validate + label::after {\n        top: calc(100% - 12px); }\n\ntextarea.materialize-textarea.validate + label:not(.label-icon).active {\n        -webkit-transform: translateY(-25px);\n                transform: translateY(-25px); }\n\n.hiddendiv {\n  display: none;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  /* future version of deprecated 'word-wrap' */\n  padding-top: 1.2rem;\n  /* prevents text jump on Enter keypress */\n  position: absolute;\n  top: 0; }\n\n/* Autocomplete */\n\n.autocomplete-content {\n  margin-top: -20px;\n  margin-bottom: 20px;\n  display: block;\n  opacity: 1;\n  position: static; }\n\n.autocomplete-content li .highlight {\n    color: #444; }\n\n.autocomplete-content li img {\n    height: 40px;\n    width: 40px;\n    margin: 5px 15px; }\n\n/* Radio Buttons\r\n   ========================================================================== */\n\n[type=\"radio\"]:not(:checked),\n[type=\"radio\"]:checked {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none; }\n\n[type=\"radio\"]:not(:checked) + label,\n[type=\"radio\"]:checked + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  transition: .28s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n[type=\"radio\"] + label:before,\n[type=\"radio\"] + label:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 4px;\n  width: 16px;\n  height: 16px;\n  z-index: 0;\n  transition: .28s ease; }\n\n/* Unchecked styles */\n\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:not(:checked) + label:after,\n[type=\"radio\"]:checked + label:before,\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:before,\n[type=\"radio\"].with-gap:checked + label:after {\n  border-radius: 50%; }\n\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:not(:checked) + label:after {\n  border: 2px solid #5a5a5a; }\n\n[type=\"radio\"]:not(:checked) + label:after {\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n/* Checked styles */\n\n[type=\"radio\"]:checked + label:before {\n  border: 2px solid transparent; }\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:before,\n[type=\"radio\"].with-gap:checked + label:after {\n  border: 2px solid #26a69a; }\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:after {\n  background-color: #26a69a; }\n\n[type=\"radio\"]:checked + label:after {\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02); }\n\n/* Radio With gap */\n\n[type=\"radio\"].with-gap:checked + label:after {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5); }\n\n/* Focused styles */\n\n[type=\"radio\"].tabbed:focus + label:before {\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1); }\n\n/* Disabled Radio With gap */\n\n[type=\"radio\"].with-gap:disabled:checked + label:before {\n  border: 2px solid rgba(0, 0, 0, 0.42); }\n\n[type=\"radio\"].with-gap:disabled:checked + label:after {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.42); }\n\n/* Disabled style */\n\n[type=\"radio\"]:disabled:not(:checked) + label:before,\n[type=\"radio\"]:disabled:checked + label:before {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.42); }\n\n[type=\"radio\"]:disabled + label {\n  color: rgba(0, 0, 0, 0.42); }\n\n[type=\"radio\"]:disabled:not(:checked) + label:before {\n  border-color: rgba(0, 0, 0, 0.42); }\n\n[type=\"radio\"]:disabled:checked + label:after {\n  background-color: rgba(0, 0, 0, 0.42);\n  border-color: #949494; }\n\n/* Checkboxes\r\n   ========================================================================== */\n\n/* CUSTOM CSS CHECKBOXES */\n\nform p {\n  margin-bottom: 10px;\n  text-align: left; }\n\nform p:last-child {\n  margin-bottom: 0; }\n\n/* Remove default checkbox */\n\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none; }\n\n[type=\"checkbox\"] {\n  /* checkbox aspect */ }\n\n[type=\"checkbox\"] + label {\n    position: relative;\n    padding-left: 35px;\n    cursor: pointer;\n    display: inline-block;\n    height: 25px;\n    line-height: 25px;\n    font-size: 1rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n[type=\"checkbox\"] + label:before,\n  [type=\"checkbox\"]:not(.filled-in) + label:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    z-index: 0;\n    border: 2px solid #5a5a5a;\n    border-radius: 1px;\n    margin-top: 2px;\n    transition: .2s; }\n\n[type=\"checkbox\"]:not(.filled-in) + label:after {\n    border: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n[type=\"checkbox\"]:not(:checked):disabled + label:before {\n    border: none;\n    background-color: rgba(0, 0, 0, 0.42); }\n\n[type=\"checkbox\"].tabbed:focus + label:after {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    border: 0;\n    border-radius: 50%;\n    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n    background-color: rgba(0, 0, 0, 0.1); }\n\n[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -5px;\n  width: 12px;\n  height: 22px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #26a69a;\n  border-bottom: 2px solid #26a69a;\n  -webkit-transform: rotate(40deg);\n          transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%; }\n\n[type=\"checkbox\"]:checked:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.42);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.42); }\n\n/* Indeterminate checkbox */\n\n[type=\"checkbox\"]:indeterminate + label:before {\n  top: -11px;\n  left: -12px;\n  width: 10px;\n  height: 22px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid #26a69a;\n  border-bottom: none;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%; }\n\n[type=\"checkbox\"]:indeterminate:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.42);\n  background-color: transparent; }\n\n[type=\"checkbox\"].filled-in + label:after {\n  border-radius: 2px; }\n\n[type=\"checkbox\"].filled-in + label:before,\n[type=\"checkbox\"].filled-in + label:after {\n  content: '';\n  left: 0;\n  position: absolute;\n  /* .1s delay is for check animation */\n  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  z-index: 1; }\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:before {\n  width: 0;\n  height: 0;\n  border: 3px solid transparent;\n  left: 6px;\n  top: 10px;\n  -webkit-transform: rotateZ(37deg);\n          transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%; }\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:after {\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 2px solid #5a5a5a;\n  top: 0px;\n  z-index: 0; }\n\n[type=\"checkbox\"].filled-in:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 8px;\n  height: 13px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  -webkit-transform: rotateZ(37deg);\n          transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%; }\n\n[type=\"checkbox\"].filled-in:checked + label:after {\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0; }\n\n[type=\"checkbox\"].filled-in.tabbed:focus + label:after {\n  border-radius: 2px;\n  border-color: #5a5a5a;\n  background-color: rgba(0, 0, 0, 0.1); }\n\n[type=\"checkbox\"].filled-in.tabbed:checked:focus + label:after {\n  border-radius: 2px;\n  background-color: #26a69a;\n  border-color: #26a69a; }\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:before {\n  background-color: transparent;\n  border: 2px solid transparent; }\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:after {\n  border-color: transparent;\n  background-color: #949494; }\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:before {\n  background-color: transparent; }\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:after {\n  background-color: #949494;\n  border-color: #949494; }\n\n/* Switch\r\n   ========================================================================== */\n\n.switch,\n.switch * {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.switch label {\n  cursor: pointer; }\n\n.switch label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n.switch label input[type=checkbox]:checked + .lever {\n    background-color: #84c7c1; }\n\n.switch label input[type=checkbox]:checked + .lever:before, .switch label input[type=checkbox]:checked + .lever:after {\n      left: 18px; }\n\n.switch label input[type=checkbox]:checked + .lever:after {\n      background-color: #26a69a; }\n\n.switch label .lever {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 36px;\n  height: 14px;\n  background-color: rgba(0, 0, 0, 0.38);\n  border-radius: 15px;\n  margin-right: 10px;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n  margin: 0 16px; }\n\n.switch label .lever:before, .switch label .lever:after {\n    content: \"\";\n    position: absolute;\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    left: 0;\n    top: -3px;\n    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, -webkit-transform .1s ease;\n    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;\n    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-transform .1s ease; }\n\n.switch label .lever:before {\n    background-color: rgba(38, 166, 154, 0.15); }\n\n.switch label .lever:after {\n    background-color: #F1F1F1;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active::before,\ninput[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before {\n  -webkit-transform: scale(2.4);\n          transform: scale(2.4);\n  background-color: rgba(38, 166, 154, 0.15); }\n\ninput[type=checkbox]:not(:disabled) ~ .lever:active:before,\ninput[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::before {\n  -webkit-transform: scale(2.4);\n          transform: scale(2.4);\n  background-color: rgba(0, 0, 0, 0.08); }\n\n.switch input[type=checkbox][disabled] + .lever {\n  cursor: default;\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.switch label input[type=checkbox][disabled] + .lever:after,\n.switch label input[type=checkbox][disabled]:checked + .lever:after {\n  background-color: #949494; }\n\n/* Select Field\r\n   ========================================================================== */\n\nselect {\n  display: none; }\n\nselect.browser-default {\n  display: block; }\n\nselect {\n  background-color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #f2f2f2;\n  border-radius: 2px;\n  height: 3rem; }\n\n.input-field > select {\n  display: block;\n  position: absolute;\n  width: 0;\n  pointer-events: none;\n  height: 0;\n  top: 0;\n  left: 0;\n  opacity: 0; }\n\n.select-label {\n  position: absolute; }\n\n.select-wrapper {\n  position: relative; }\n\n.select-wrapper.valid + label,\n  .select-wrapper.invalid + label {\n    width: 100%;\n    pointer-events: none; }\n\n.select-wrapper input.select-dropdown {\n    position: relative;\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n    border-bottom: 1px solid #9e9e9e;\n    outline: none;\n    height: 3rem;\n    line-height: 3rem;\n    width: 100%;\n    font-size: 1rem;\n    margin: 0 0 20px 0;\n    padding: 0;\n    display: block;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.select-wrapper span.caret {\n    color: initial;\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    height: 10px;\n    margin: auto 0;\n    font-size: 10px;\n    line-height: 10px; }\n\n.select-wrapper + label {\n    position: absolute;\n    top: -26px;\n    font-size: 0.8rem; }\n\nselect:disabled {\n  color: rgba(0, 0, 0, 0.42); }\n\n.select-wrapper.disabled span.caret,\n.select-wrapper.disabled + label {\n  color: rgba(0, 0, 0, 0.42); }\n\n.select-wrapper input.select-dropdown:disabled {\n  color: rgba(0, 0, 0, 0.42);\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.select-wrapper i {\n  color: rgba(0, 0, 0, 0.3); }\n\n.select-dropdown li.disabled,\n.select-dropdown li.disabled > span,\n.select-dropdown li.optgroup {\n  color: rgba(0, 0, 0, 0.3);\n  background-color: transparent; }\n\n.select-dropdown.dropdown-content li.active {\n  background-color: transparent; }\n\n.select-dropdown.dropdown-content li:hover {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.select-dropdown.dropdown-content li.selected {\n  background-color: rgba(0, 0, 0, 0.03); }\n\n.prefix ~ .select-wrapper {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem); }\n\n.prefix ~ label {\n  margin-left: 3rem; }\n\n.select-dropdown li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n  float: right; }\n\n.select-dropdown li.optgroup {\n  border-top: 1px solid #eee; }\n\n.select-dropdown li.optgroup.selected > span {\n    color: rgba(0, 0, 0, 0.7); }\n\n.select-dropdown li.optgroup > span {\n    color: rgba(0, 0, 0, 0.4); }\n\n.select-dropdown li.optgroup ~ li.optgroup-option {\n    padding-left: 1rem; }\n\n/* File Input\r\n   ========================================================================== */\n\n.file-field {\n  position: relative; }\n\n.file-field .file-path-wrapper {\n    overflow: hidden;\n    padding-left: 10px; }\n\n.file-field input.file-path {\n    width: 100%; }\n\n.file-field .btn, .file-field .btn-large {\n    float: left;\n    height: 3rem;\n    line-height: 3rem; }\n\n.file-field span {\n    cursor: pointer; }\n\n.file-field input[type=file] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0); }\n\n.file-field input[type=file]::-webkit-file-upload-button {\n      display: none; }\n\n/* Range\r\n   ========================================================================== */\n\n.range-field {\n  position: relative; }\n\ninput[type=range],\ninput[type=range] + .thumb {\n  cursor: pointer; }\n\ninput[type=range] {\n  position: relative;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  margin: 15px 0;\n  padding: 0; }\n\ninput[type=range]:focus {\n    outline: none; }\n\ninput[type=range] + .thumb {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  border: none;\n  height: 0;\n  width: 0;\n  border-radius: 50%;\n  background-color: #26a69a;\n  margin-left: 7px;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\ninput[type=range] + .thumb .value {\n    display: block;\n    width: 30px;\n    text-align: center;\n    color: #26a69a;\n    font-size: 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n\ninput[type=range] + .thumb.active {\n    border-radius: 50% 50% 50% 0; }\n\ninput[type=range] + .thumb.active .value {\n      color: #fff;\n      margin-left: -1px;\n      margin-top: 8px;\n      font-size: 10px; }\n\ninput[type=range] {\n  -webkit-appearance: none; }\n\ninput[type=range]::-webkit-slider-runnable-track {\n  height: 3px;\n  background: #c2c0c2;\n  border: none; }\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background-color: #26a69a;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  margin: -5px 0 0 0;\n  transition: .3s; }\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #ccc; }\n\ninput[type=range] {\n  /* fix for FF unable to apply focus style bug  */\n  border: 1px solid white;\n  /*required for proper track sizing in FF*/ }\n\ninput[type=range]::-moz-range-track {\n  height: 3px;\n  background: #ddd;\n  border: none; }\n\ninput[type=range]::-moz-range-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  margin-top: -5px; }\n\ninput[type=range]:-moz-focusring {\n  outline: 1px solid #fff;\n  outline-offset: -1px; }\n\ninput[type=range]:focus::-moz-range-track {\n  background: #ccc; }\n\ninput[type=range]::-ms-track {\n  height: 3px;\n  background: transparent;\n  border-color: transparent;\n  border-width: 6px 0;\n  /*remove default tick marks*/\n  color: transparent; }\n\ninput[type=range]::-ms-fill-lower {\n  background: #777; }\n\ninput[type=range]::-ms-fill-upper {\n  background: #ddd; }\n\ninput[type=range]::-ms-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a; }\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: #888; }\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #ccc; }\n\n/***************\r\n    Nav List\r\n***************/\n\n.table-of-contents.fixed {\n  position: fixed; }\n\n.table-of-contents li {\n  padding: 2px 0; }\n\n.table-of-contents a {\n  display: inline-block;\n  font-weight: 300;\n  color: #757575;\n  padding-left: 20px;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  letter-spacing: .4;\n  display: inline-block; }\n\n.table-of-contents a:hover {\n    color: #a8a8a8;\n    padding-left: 19px;\n    border-left: 1px solid #ee6e73; }\n\n.table-of-contents a.active {\n    font-weight: 500;\n    padding-left: 18px;\n    border-left: 2px solid #ee6e73; }\n\n.side-nav {\n  position: fixed;\n  width: 300px;\n  left: 0;\n  top: 0;\n  margin: 0;\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  height: 100%;\n  height: calc(100% + 60px);\n  height: -moz-calc(100%);\n  padding-bottom: 60px;\n  background-color: #fff;\n  z-index: 999;\n  overflow-y: auto;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translateX(-105%);\n          transform: translateX(-105%); }\n\n.side-nav.right-aligned {\n    right: 0;\n    -webkit-transform: translateX(105%);\n            transform: translateX(105%);\n    left: auto;\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n\n.side-nav .collapsible {\n    margin: 0; }\n\n.side-nav li {\n    float: none;\n    line-height: 48px; }\n\n.side-nav li.active {\n      background-color: rgba(0, 0, 0, 0.05); }\n\n.side-nav li > a {\n    color: rgba(0, 0, 0, 0.87);\n    display: block;\n    font-size: 14px;\n    font-weight: 500;\n    height: 48px;\n    line-height: 48px;\n    padding: 0 32px; }\n\n.side-nav li > a:hover {\n      background-color: rgba(0, 0, 0, 0.05); }\n\n.side-nav li > a.btn, .side-nav li > a.btn-large, .side-nav li > a.btn-large, .side-nav li > a.btn-flat, .side-nav li > a.btn-floating {\n      margin: 10px 15px; }\n\n.side-nav li > a.btn, .side-nav li > a.btn-large, .side-nav li > a.btn-large, .side-nav li > a.btn-floating {\n      color: #fff; }\n\n.side-nav li > a.btn-flat {\n      color: #343434; }\n\n.side-nav li > a.btn:hover, .side-nav li > a.btn-large:hover, .side-nav li > a.btn-large:hover {\n      background-color: #2bbbad; }\n\n.side-nav li > a.btn-floating:hover {\n      background-color: #26a69a; }\n\n.side-nav li > a > i,\n    .side-nav li > a > [class^=\"mdi-\"], .side-nav li > a li > a > [class*=\"mdi-\"],\n    .side-nav li > a > i.material-icons {\n      float: left;\n      height: 48px;\n      line-height: 48px;\n      margin: 0 32px 0 0;\n      width: 24px;\n      color: rgba(0, 0, 0, 0.54); }\n\n.side-nav .divider {\n    margin: 8px 0 0 0; }\n\n.side-nav .subheader {\n    cursor: initial;\n    pointer-events: none;\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 48px; }\n\n.side-nav .subheader:hover {\n      background-color: transparent; }\n\n.side-nav .user-view,\n  .side-nav .userView {\n    position: relative;\n    padding: 32px 32px 0;\n    margin-bottom: 8px; }\n\n.side-nav .user-view > a,\n    .side-nav .userView > a {\n      height: auto;\n      padding: 0; }\n\n.side-nav .user-view > a:hover,\n      .side-nav .userView > a:hover {\n        background-color: transparent; }\n\n.side-nav .user-view .background,\n    .side-nav .userView .background {\n      overflow: hidden;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: -1; }\n\n.side-nav .user-view .circle, .side-nav .user-view .name, .side-nav .user-view .email,\n    .side-nav .userView .circle,\n    .side-nav .userView .name,\n    .side-nav .userView .email {\n      display: block; }\n\n.side-nav .user-view .circle,\n    .side-nav .userView .circle {\n      height: 64px;\n      width: 64px; }\n\n.side-nav .user-view .name,\n    .side-nav .user-view .email,\n    .side-nav .userView .name,\n    .side-nav .userView .email {\n      font-size: 14px;\n      line-height: 24px; }\n\n.side-nav .user-view .name,\n    .side-nav .userView .name {\n      margin-top: 16px;\n      font-weight: 500; }\n\n.side-nav .user-view .email,\n    .side-nav .userView .email {\n      padding-bottom: 16px;\n      font-weight: 400; }\n\n.drag-target {\n  height: 100%;\n  width: 10px;\n  position: fixed;\n  top: 0;\n  z-index: 998; }\n\n.side-nav.fixed {\n  left: 0;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  position: fixed; }\n\n.side-nav.fixed.right-aligned {\n    right: 0;\n    left: auto; }\n\n@media only screen and (max-width: 992px) {\n  .side-nav.fixed {\n    -webkit-transform: translateX(-105%);\n            transform: translateX(-105%); }\n    .side-nav.fixed.right-aligned {\n      -webkit-transform: translateX(105%);\n              transform: translateX(105%); }\n  .side-nav a {\n    padding: 0 16px; }\n  .side-nav .user-view,\n  .side-nav .userView {\n    padding: 16px 16px 0; } }\n\n.side-nav .collapsible-body > ul:not(.collapsible) > li.active,\n.side-nav.fixed .collapsible-body > ul:not(.collapsible) > li.active {\n  background-color: #ee6e73; }\n\n.side-nav .collapsible-body > ul:not(.collapsible) > li.active a,\n  .side-nav.fixed .collapsible-body > ul:not(.collapsible) > li.active a {\n    color: #fff; }\n\n.side-nav .collapsible-body {\n  padding: 0; }\n\n#sidenav-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 120vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 997;\n  will-change: opacity; }\n\n/*\r\n    @license\r\n    Copyright (c) 2014 The Polymer Project Authors. All rights reserved.\r\n    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\r\n    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\r\n    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\r\n    Code distributed by Google as part of the polymer project is also\r\n    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\r\n */\n\n/**************************/\n\n/* STYLES FOR THE SPINNER */\n\n/**************************/\n\n/*\r\n * Constants:\r\n *      STROKEWIDTH = 3px\r\n *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\r\n *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\r\n *      ARCSTARTROT = 216 degrees (how much the start location of the arc\r\n *                                should rotate each time, 216 gives us a\r\n *                                5 pointed star shape (it's 360/5 * 3).\r\n *                                For a 7 pointed star, we might do\r\n *                                360/7 * 3 = 154.286)\r\n *      CONTAINERWIDTH = 28px\r\n *      SHRINK_TIME = 400ms\r\n */\n\n.preloader-wrapper {\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 50px; }\n\n.preloader-wrapper.small {\n    width: 36px;\n    height: 36px; }\n\n.preloader-wrapper.big {\n    width: 64px;\n    height: 64px; }\n\n.preloader-wrapper.active {\n    /* duration: 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n    -webkit-animation: container-rotate 1568ms linear infinite;\n    animation: container-rotate 1568ms linear infinite; }\n\n@-webkit-keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-color: #26a69a; }\n\n.spinner-blue,\n.spinner-blue-only {\n  border-color: #4285f4; }\n\n.spinner-red,\n.spinner-red-only {\n  border-color: #db4437; }\n\n.spinner-yellow,\n.spinner-yellow-only {\n  border-color: #f4b400; }\n\n.spinner-green,\n.spinner-green-only {\n  border-color: #0f9d58; }\n\n/**\r\n * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\r\n *\r\n * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\r\n * guarantee that the animation will start _exactly_ after that value. So we avoid using\r\n * animation-delay and instead set custom keyframes for each color (as redundant as it\r\n * seems).\r\n *\r\n * We write out each animation in full (instead of separating animation-name,\r\n * animation-duration, etc.) because under the polyfill, Safari does not recognize those\r\n * specific properties properly, treats them as -webkit-animation, and overrides the\r\n * other animation rules. See https://github.com/Polymer/platform/issues/53.\r\n */\n\n.active .spinner-layer.spinner-blue {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer.spinner-red {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer.spinner-yellow {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer.spinner-green {\n  /* durations: 4 * ARCTIME */\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .spinner-layer,\n.active .spinner-layer.spinner-blue-only,\n.active .spinner-layer.spinner-red-only,\n.active .spinner-layer.spinner-yellow-only,\n.active .spinner-layer.spinner-green-only {\n  /* durations: 4 * ARCTIME */\n  opacity: 1;\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n@-webkit-keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg); }\n  /* 0.5 * ARCSIZE */\n  25% {\n    -webkit-transform: rotate(270deg); }\n  /* 1   * ARCSIZE */\n  37.5% {\n    -webkit-transform: rotate(405deg); }\n  /* 1.5 * ARCSIZE */\n  50% {\n    -webkit-transform: rotate(540deg); }\n  /* 2   * ARCSIZE */\n  62.5% {\n    -webkit-transform: rotate(675deg); }\n  /* 2.5 * ARCSIZE */\n  75% {\n    -webkit-transform: rotate(810deg); }\n  /* 3   * ARCSIZE */\n  87.5% {\n    -webkit-transform: rotate(945deg); }\n  /* 3.5 * ARCSIZE */\n  to {\n    -webkit-transform: rotate(1080deg); }\n  /* 4   * ARCSIZE */ }\n\n@keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg); }\n  /* 0.5 * ARCSIZE */\n  25% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg); }\n  /* 1   * ARCSIZE */\n  37.5% {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg); }\n  /* 1.5 * ARCSIZE */\n  50% {\n    -webkit-transform: rotate(540deg);\n            transform: rotate(540deg); }\n  /* 2   * ARCSIZE */\n  62.5% {\n    -webkit-transform: rotate(675deg);\n            transform: rotate(675deg); }\n  /* 2.5 * ARCSIZE */\n  75% {\n    -webkit-transform: rotate(810deg);\n            transform: rotate(810deg); }\n  /* 3   * ARCSIZE */\n  87.5% {\n    -webkit-transform: rotate(945deg);\n            transform: rotate(945deg); }\n  /* 3.5 * ARCSIZE */\n  to {\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg); }\n  /* 4   * ARCSIZE */ }\n\n@-webkit-keyframes blue-fade-in-out {\n  from {\n    opacity: 1; }\n  25% {\n    opacity: 1; }\n  26% {\n    opacity: 0; }\n  89% {\n    opacity: 0; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@keyframes blue-fade-in-out {\n  from {\n    opacity: 1; }\n  25% {\n    opacity: 1; }\n  26% {\n    opacity: 0; }\n  89% {\n    opacity: 0; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes red-fade-in-out {\n  from {\n    opacity: 0; }\n  15% {\n    opacity: 0; }\n  25% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  51% {\n    opacity: 0; } }\n\n@keyframes red-fade-in-out {\n  from {\n    opacity: 0; }\n  15% {\n    opacity: 0; }\n  25% {\n    opacity: 1; }\n  50% {\n    opacity: 1; }\n  51% {\n    opacity: 0; } }\n\n@-webkit-keyframes yellow-fade-in-out {\n  from {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  76% {\n    opacity: 0; } }\n\n@keyframes yellow-fade-in-out {\n  from {\n    opacity: 0; }\n  40% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  76% {\n    opacity: 0; } }\n\n@-webkit-keyframes green-fade-in-out {\n  from {\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  75% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes green-fade-in-out {\n  from {\n    opacity: 0; }\n  65% {\n    opacity: 0; }\n  75% {\n    opacity: 1; }\n  90% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n/**\r\n * Patch the gap that appear between the two adjacent div.circle-clipper while the\r\n * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).\r\n */\n\n.gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n\n.gap-patch .circle {\n  width: 1000%;\n  left: -450%; }\n\n.circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit; }\n\n.circle-clipper .circle {\n    width: 200%;\n    height: 100%;\n    border-width: 3px;\n    /* STROKEWIDTH */\n    border-style: solid;\n    border-color: inherit;\n    border-bottom-color: transparent !important;\n    border-radius: 50%;\n    -webkit-animation: none;\n    animation: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0; }\n\n.circle-clipper.left .circle {\n    left: 0;\n    border-right-color: transparent !important;\n    -webkit-transform: rotate(129deg);\n    transform: rotate(129deg); }\n\n.circle-clipper.right .circle {\n    left: -100%;\n    border-left-color: transparent !important;\n    -webkit-transform: rotate(-129deg);\n    transform: rotate(-129deg); }\n\n.active .circle-clipper.left .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n.active .circle-clipper.right .circle {\n  /* duration: ARCTIME */\n  -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both; }\n\n@-webkit-keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg); }\n  50% {\n    -webkit-transform: rotate(-5deg); }\n  to {\n    -webkit-transform: rotate(130deg); } }\n\n@keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg); }\n  50% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg); }\n  to {\n    -webkit-transform: rotate(130deg);\n            transform: rotate(130deg); } }\n\n@-webkit-keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg); }\n  50% {\n    -webkit-transform: rotate(5deg); }\n  to {\n    -webkit-transform: rotate(-130deg); } }\n\n@keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg); }\n  50% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg); }\n  to {\n    -webkit-transform: rotate(-130deg);\n            transform: rotate(-130deg); } }\n\n#spinnerContainer.cooldown {\n  /* duration: SHRINK_TIME */\n  -webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n  animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1); }\n\n@-webkit-keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.slider {\n  position: relative;\n  height: 400px;\n  width: 100%; }\n\n.slider.fullscreen {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.slider.fullscreen ul.slides {\n      height: 100%; }\n\n.slider.fullscreen ul.indicators {\n      z-index: 2;\n      bottom: 30px; }\n\n.slider .slides {\n    background-color: #9e9e9e;\n    margin: 0;\n    height: 400px; }\n\n.slider .slides li {\n      opacity: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%;\n      height: inherit;\n      overflow: hidden; }\n\n.slider .slides li img {\n        height: 100%;\n        width: 100%;\n        background-size: cover;\n        background-position: center; }\n\n.slider .slides li .caption {\n        color: #fff;\n        position: absolute;\n        top: 15%;\n        left: 15%;\n        width: 70%;\n        opacity: 0; }\n\n.slider .slides li .caption p {\n          color: #e0e0e0; }\n\n.slider .slides li.active {\n        z-index: 2; }\n\n.slider .indicators {\n    position: absolute;\n    text-align: center;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: 0; }\n\n.slider .indicators .indicator-item {\n      display: inline-block;\n      position: relative;\n      cursor: pointer;\n      height: 16px;\n      width: 16px;\n      margin: 0 12px;\n      background-color: #e0e0e0;\n      transition: background-color .3s;\n      border-radius: 50%; }\n\n.slider .indicators .indicator-item.active {\n        background-color: #4CAF50; }\n\n.carousel {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 400px;\n  -webkit-perspective: 500px;\n          perspective: 500px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n          transform-origin: 0% 50%; }\n\n.carousel.carousel-slider {\n    top: 0;\n    left: 0; }\n\n.carousel.carousel-slider .carousel-fixed-item {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 20px;\n      z-index: 1; }\n\n.carousel.carousel-slider .carousel-fixed-item.with-indicators {\n        bottom: 68px; }\n\n.carousel.carousel-slider .carousel-item {\n      width: 100%;\n      height: 100%;\n      min-height: 400px;\n      position: absolute;\n      top: 0;\n      left: 0; }\n\n.carousel.carousel-slider .carousel-item h2 {\n        font-size: 24px;\n        font-weight: 500;\n        line-height: 32px; }\n\n.carousel.carousel-slider .carousel-item p {\n        font-size: 15px; }\n\n.carousel .carousel-item {\n    display: none;\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.carousel .carousel-item > img {\n      width: 100%; }\n\n.carousel .indicators {\n    position: absolute;\n    text-align: center;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: 0; }\n\n.carousel .indicators .indicator-item {\n      display: inline-block;\n      position: relative;\n      cursor: pointer;\n      height: 8px;\n      width: 8px;\n      margin: 24px 4px;\n      background-color: rgba(255, 255, 255, 0.5);\n      transition: background-color .3s;\n      border-radius: 50%; }\n\n.carousel .indicators .indicator-item.active {\n        background-color: #fff; }\n\n.carousel.scrolling .carousel-item .materialboxed,\n  .carousel .carousel-item:not(.active) .materialboxed {\n    pointer-events: none; }\n\n.tap-target-wrapper {\n  width: 800px;\n  height: 800px;\n  position: fixed;\n  z-index: 1000;\n  visibility: hidden;\n  transition: visibility 0s .3s; }\n\n.tap-target-wrapper.open {\n  visibility: visible;\n  transition: visibility 0s; }\n\n.tap-target-wrapper.open .tap-target {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: .95;\n    transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1); }\n\n.tap-target-wrapper.open .tap-target-wave::before {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n\n.tap-target-wrapper.open .tap-target-wave::after {\n    visibility: visible;\n    -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n            animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n    transition: opacity .3s,\r visibility 0s 1s,\r -webkit-transform .3s;\n    transition: opacity .3s,\r transform .3s,\r visibility 0s 1s;\n    transition: opacity .3s,\r transform .3s,\r visibility 0s 1s,\r -webkit-transform .3s; }\n\n.tap-target {\n  position: absolute;\n  font-size: 1rem;\n  border-radius: 50%;\n  background-color: #ee6e73;\n  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.14), 0 10px 50px 0 rgba(0, 0, 0, 0.12), 0 30px 10px -20px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);\n  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1); }\n\n.tap-target-content {\n  position: relative;\n  display: table-cell; }\n\n.tap-target-wave {\n  position: absolute;\n  border-radius: 50%;\n  z-index: 10001; }\n\n.tap-target-wave::before, .tap-target-wave::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: #ffffff; }\n\n.tap-target-wave::before {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    transition: -webkit-transform .3s;\n    transition: transform .3s;\n    transition: transform .3s, -webkit-transform .3s; }\n\n.tap-target-wave::after {\n    visibility: hidden;\n    transition: opacity .3s,\r visibility 0s,\r -webkit-transform .3s;\n    transition: opacity .3s,\r transform .3s,\r visibility 0s;\n    transition: opacity .3s,\r transform .3s,\r visibility 0s,\r -webkit-transform .3s;\n    z-index: -1; }\n\n.tap-target-origin {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 10002;\n  position: absolute !important; }\n\n.tap-target-origin:not(.btn):not(.btn-large), .tap-target-origin:not(.btn):not(.btn-large):hover {\n    background: none; }\n\n@media only screen and (max-width: 600px) {\n  .tap-target, .tap-target-wrapper {\n    width: 600px;\n    height: 600px; } }\n\n.pulse {\n  overflow: initial;\n  position: relative; }\n\n.pulse::before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: inherit;\n    border-radius: inherit;\n    transition: opacity .3s, -webkit-transform .3s;\n    transition: opacity .3s, transform .3s;\n    transition: opacity .3s, transform .3s, -webkit-transform .3s;\n    -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n            animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\n    z-index: -1; }\n\n@-webkit-keyframes pulse-animation {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5); } }\n\n@keyframes pulse-animation {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5); } }\n\n/* ==========================================================================\r\n   $BASE-PICKER\r\n   ========================================================================== */\n\n/**\r\n * Note: the root picker element should *NOT* be styled more than what's here.\r\n */\n\n.picker {\n  font-size: 16px;\n  text-align: left;\n  line-height: 1.2;\n  color: #000000;\n  position: absolute;\n  z-index: 10000;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  outline: none; }\n\n/**\r\n * The picker input element.\r\n */\n\n.picker__input {\n  cursor: default; }\n\n/**\r\n * When the picker is opened, the input element is \"activated\".\r\n */\n\n.picker__input.picker__input--active {\n  border-color: #0089ec; }\n\n/**\r\n * The holder is the only \"scrollable\" top-level container element.\r\n */\n\n.picker__holder {\n  width: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n\n/*!\r\n * Default mobile-first, responsive styling for pickadate.js\r\n * Demo: http://amsul.github.io/pickadate.js\r\n */\n\n/**\r\n * Note: the root picker element should *NOT* be styled more than what's here.\r\n */\n\n/**\r\n * Make the holder and frame fullscreen.\r\n */\n\n.picker__holder,\n.picker__frame {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 100%; }\n\n/**\r\n * The holder should overlay the entire screen.\r\n */\n\n.picker__holder {\n  position: fixed;\n  transition: background 0.15s ease-out, top 0s 0.15s;\n  -webkit-backface-visibility: hidden; }\n\n/**\r\n * The frame that bounds the box contents of the picker.\r\n */\n\n.picker__frame {\n  position: absolute;\n  margin: 0 auto;\n  min-width: 256px;\n  width: 300px;\n  max-height: 350px;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  -moz-opacity: 0;\n  opacity: 0;\n  transition: all 0.15s ease-out; }\n\n@media (min-height: 28.875em) {\n  .picker__frame {\n    overflow: visible;\n    top: auto;\n    bottom: -100%;\n    max-height: 80%; } }\n\n@media (min-height: 40.125em) {\n  .picker__frame {\n    margin-bottom: 7.5%; } }\n\n/**\r\n * The wrapper sets the stage to vertically align the box contents.\r\n */\n\n.picker__wrap {\n  display: table;\n  width: 100%;\n  height: 100%; }\n\n@media (min-height: 28.875em) {\n  .picker__wrap {\n    display: block; } }\n\n/**\r\n * The box contains all the picker contents.\r\n */\n\n.picker__box {\n  background: #ffffff;\n  display: table-cell;\n  vertical-align: middle; }\n\n@media (min-height: 28.875em) {\n  .picker__box {\n    display: block;\n    border: 1px solid #777777;\n    border-top-color: #898989;\n    border-bottom-width: 0;\n    border-radius: 5px 5px 0 0;\n    box-shadow: 0 12px 36px 16px rgba(0, 0, 0, 0.24); } }\n\n/**\r\n * When the picker opens...\r\n */\n\n.picker--opened .picker__holder {\n  top: 0;\n  background: transparent;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)\";\n  zoom: 1;\n  background: rgba(0, 0, 0, 0.32);\n  transition: background 0.15s ease-out; }\n\n.picker--opened .picker__frame {\n  top: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n  -moz-opacity: 1;\n  opacity: 1; }\n\n@media (min-height: 35.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto; } }\n\n/**\r\n * For `large` screens, transform into an inline picker.\r\n */\n\n/* ==========================================================================\r\n   CUSTOM MATERIALIZE STYLES\r\n   ========================================================================== */\n\n.picker__input.picker__input--active {\n  border-color: #E3F2FD; }\n\n.picker__frame {\n  margin: 0 auto;\n  max-width: 325px; }\n\n@media (min-height: 38.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto; } }\n\n@media only screen and (min-width: 601px) {\n  .picker__box {\n    display: flex; }\n  .picker__frame {\n    width: 80%;\n    max-width: 600px; } }\n\n/* ==========================================================================\r\n   $BASE-DATE-PICKER\r\n   ========================================================================== */\n\n/**\r\n * The picker box.\r\n */\n\n.picker__box {\n  padding: 0;\n  border-radius: 2px;\n  overflow: hidden; }\n\n/**\r\n * The header containing the month and year stuff.\r\n */\n\n.picker__header {\n  text-align: center;\n  position: relative;\n  margin-top: .75em; }\n\n/**\r\n * The month and year labels.\r\n */\n\n.picker__month,\n.picker__year {\n  display: inline-block;\n  margin-left: .25em;\n  margin-right: .25em; }\n\n/**\r\n * The month and year selectors.\r\n */\n\n.picker__select--month,\n.picker__select--year {\n  height: 2em;\n  padding: 0;\n  margin-left: .25em;\n  margin-right: .25em; }\n\n.picker__select--month.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 40%; }\n\n.picker__select--year.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 26%; }\n\n.picker__select--month:focus,\n.picker__select--year:focus {\n  border-color: rgba(0, 0, 0, 0.05); }\n\n/**\r\n * The month navigation buttons.\r\n */\n\n.picker__nav--prev,\n.picker__nav--next {\n  position: absolute;\n  padding: .5em 1.25em;\n  width: 1em;\n  height: 1em;\n  box-sizing: content-box;\n  top: -0.25em; }\n\n.picker__nav--prev {\n  left: -1em;\n  padding-right: 1.25em; }\n\n.picker__nav--next {\n  right: -1em;\n  padding-left: 1.25em; }\n\n.picker__nav--disabled,\n.picker__nav--disabled:hover,\n.picker__nav--disabled:before,\n.picker__nav--disabled:before:hover {\n  cursor: default;\n  background: none;\n  border-right-color: #f5f5f5;\n  border-left-color: #f5f5f5; }\n\n/**\r\n * The calendar table of dates\r\n */\n\n.picker__table {\n  text-align: center;\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  font-size: 1rem;\n  width: 100%;\n  margin-top: .75em;\n  margin-bottom: .5em; }\n\n.picker__table th, .picker__table td {\n  text-align: center; }\n\n.picker__table td {\n  margin: 0;\n  padding: 0; }\n\n/**\r\n * The weekday labels\r\n */\n\n.picker__weekday {\n  width: 14.285714286%;\n  font-size: .75em;\n  padding-bottom: .25em;\n  color: #999999;\n  font-weight: 500;\n  /* Increase the spacing a tad */ }\n\n@media (min-height: 33.875em) {\n  .picker__weekday {\n    padding-bottom: .5em; } }\n\n/**\r\n * The days on the calendar\r\n */\n\n.picker__day--today {\n  position: relative;\n  color: #595959;\n  letter-spacing: -.3;\n  padding: .75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent; }\n\n.picker__day--disabled:before {\n  border-top-color: #aaaaaa; }\n\n.picker__day--infocus:hover {\n  cursor: pointer;\n  color: #000;\n  font-weight: 500; }\n\n.picker__day--outfocus {\n  display: none;\n  padding: .75rem 0;\n  color: #fff; }\n\n.picker__day--outfocus:hover {\n  cursor: pointer;\n  color: #dddddd;\n  font-weight: 500; }\n\n.picker__day--highlighted:hover,\n.picker--focused .picker__day--highlighted {\n  cursor: pointer; }\n\n.picker__day--selected,\n.picker__day--selected:hover,\n.picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  background: #0089ec;\n  color: #ffffff; }\n\n.picker__day--disabled,\n.picker__day--disabled:hover,\n.picker--focused .picker__day--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default; }\n\n.picker__day--highlighted.picker__day--disabled,\n.picker__day--highlighted.picker__day--disabled:hover {\n  background: #bbbbbb; }\n\n/**\r\n * The footer containing the \"today\", \"clear\", and \"close\" buttons.\r\n */\n\n.picker__footer {\n  text-align: right; }\n\n.picker__button--today,\n.picker__button--clear,\n.picker__button--close {\n  border: 1px solid #ffffff;\n  background: #ffffff;\n  font-size: .8em;\n  padding: .66em 0;\n  font-weight: bold;\n  width: 33%;\n  display: inline-block;\n  vertical-align: bottom; }\n\n.picker__button--today:hover,\n.picker__button--clear:hover,\n.picker__button--close:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n  border-bottom-color: #b1dcfb; }\n\n.picker__button--today:focus,\n.picker__button--clear:focus,\n.picker__button--close:focus {\n  background: #b1dcfb;\n  border-color: rgba(0, 0, 0, 0.05);\n  outline: none; }\n\n.picker__button--today:before,\n.picker__button--clear:before,\n.picker__button--close:before {\n  position: relative;\n  display: inline-block;\n  height: 0; }\n\n.picker__button--today:before,\n.picker__button--clear:before {\n  content: \" \";\n  margin-right: .45em; }\n\n.picker__button--today:before {\n  top: -0.05em;\n  width: 0;\n  border-top: 0.66em solid #0059bc;\n  border-left: .66em solid transparent; }\n\n.picker__button--clear:before {\n  top: -0.25em;\n  width: .66em;\n  border-top: 3px solid #ee2200; }\n\n.picker__button--close:before {\n  content: \"\\D7\";\n  top: -0.1em;\n  vertical-align: top;\n  font-size: 1.1em;\n  margin-right: .35em;\n  color: #777777; }\n\n.picker__button--today[disabled],\n.picker__button--today[disabled]:hover {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default; }\n\n.picker__button--today[disabled]:before {\n  border-top-color: #aaaaaa; }\n\n/* ==========================================================================\r\n   CUSTOM MATERIALIZE STYLES\r\n   ========================================================================== */\n\n/*.picker__box {\r\n  border-radius: 2px;\r\n  overflow: hidden;\r\n}*/\n\n.picker__date-display {\n  text-align: left;\n  background-color: #26a69a;\n  color: #fff;\n  padding: 18px;\n  font-weight: 300; }\n\n@media only screen and (min-width: 601px) {\n  .picker__date-display {\n    flex: 1; }\n  .picker__weekday-display {\n    display: block; }\n  .picker__container__wrapper {\n    flex: 2; } }\n\n.picker__nav--prev:hover,\n.picker__nav--next:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #a1ded8; }\n\n.picker__weekday-display {\n  font-weight: 500;\n  font-size: 2.8rem;\n  margin-right: 5px;\n  margin-top: 4px; }\n\n.picker__month-display {\n  font-size: 2.8rem;\n  font-weight: 500; }\n\n.picker__day-display {\n  font-size: 2.8rem;\n  font-weight: 500;\n  margin-right: 5px; }\n\n.picker__year-display {\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.7); }\n\n/*.picker__box {\r\n  padding: 0;\r\n}*/\n\n.picker__calendar-container {\n  padding: 0 1rem; }\n\n.picker__calendar-container thead {\n    border: none; }\n\n.picker__table {\n  margin-top: 0;\n  margin-bottom: .5em; }\n\n.picker__day--infocus {\n  color: rgba(0, 0, 0, 0.87);\n  letter-spacing: -.3px;\n  padding: 0.75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent; }\n\n@media only screen and (min-width: 601px) {\n  .picker__day--infocus {\n    padding: 1.1rem 0; } }\n\n.picker__day.picker__day--today {\n  color: #26a69a; }\n\n.picker__day.picker__day--today.picker__day--selected {\n  color: #fff; }\n\n.picker__weekday {\n  font-size: .9rem; }\n\n.picker__day--selected,\n.picker__day--selected:hover,\n.picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  background-color: #26a69a;\n  color: #ffffff; }\n\n.picker__day--selected.picker__day--outfocus,\n  .picker__day--selected:hover.picker__day--outfocus,\n  .picker--focused .picker__day--selected.picker__day--outfocus {\n    background-color: #a1ded8; }\n\n.picker__footer {\n  text-align: right;\n  padding: 5px 10px; }\n\n.picker__close, .picker__today, .picker__clear {\n  font-size: 1.1rem;\n  padding: 0 1rem;\n  color: #26a69a; }\n\n.picker__clear {\n  color: #f44336;\n  float: left; }\n\n.picker__nav--prev:before,\n.picker__nav--next:before {\n  content: \" \";\n  border-top: .5em solid transparent;\n  border-bottom: .5em solid transparent;\n  border-right: 0.75em solid #676767;\n  width: 0;\n  height: 0;\n  display: block;\n  margin: 0 auto; }\n\n.picker__nav--next:before {\n  border-right: 0;\n  border-left: 0.75em solid #676767; }\n\nbutton.picker__today:focus, button.picker__clear:focus, button.picker__close:focus {\n  background-color: #a1ded8; }\n\n/* ==========================================================================\r\n   $BASE-TIME-PICKER\r\n   ========================================================================== */\n\n/**\r\n * The list of times.\r\n */\n\n.picker__list {\n  list-style: none;\n  padding: 0.75em 0 4.2em;\n  margin: 0; }\n\n/**\r\n * The times on the clock.\r\n */\n\n.picker__list-item {\n  border-bottom: 1px solid #ddd;\n  border-top: 1px solid #ddd;\n  margin-bottom: -1px;\n  position: relative;\n  background: #fff;\n  padding: .75em 1.25em; }\n\n@media (min-height: 46.75em) {\n  .picker__list-item {\n    padding: .5em 1em; } }\n\n/* Hovered time */\n\n.picker__list-item:hover {\n  cursor: pointer;\n  color: #000;\n  background: #b1dcfb;\n  border-color: #0089ec;\n  z-index: 10; }\n\n/* Highlighted and hovered/focused time */\n\n.picker__list-item--highlighted {\n  border-color: #0089ec;\n  z-index: 10; }\n\n.picker__list-item--highlighted:hover,\n.picker--focused .picker__list-item--highlighted {\n  cursor: pointer;\n  color: #000;\n  background: #b1dcfb; }\n\n/* Selected and hovered/focused time */\n\n.picker__list-item--selected,\n.picker__list-item--selected:hover,\n.picker--focused .picker__list-item--selected {\n  background: #0089ec;\n  color: #fff;\n  z-index: 10; }\n\n/* Disabled time */\n\n.picker__list-item--disabled,\n.picker__list-item--disabled:hover,\n.picker--focused .picker__list-item--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #ddd;\n  cursor: default;\n  border-color: #ddd;\n  z-index: auto; }\n\n/**\r\n * The clear button\r\n */\n\n.picker--time .picker__button--clear {\n  display: block;\n  width: 80%;\n  margin: 1em auto 0;\n  padding: 1em 1.25em;\n  background: none;\n  border: 0;\n  font-weight: 500;\n  font-size: .67em;\n  text-align: center;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.87); }\n\n.picker--time .picker__button--clear:hover,\n.picker--time .picker__button--clear:focus {\n  color: #000;\n  background: #b1dcfb;\n  background: #ee2200;\n  border-color: #ee2200;\n  cursor: pointer;\n  color: #fff;\n  outline: none; }\n\n.picker--time .picker__button--clear:before {\n  top: -0.25em;\n  color: rgba(0, 0, 0, 0.87);\n  font-size: 1.25em;\n  font-weight: bold; }\n\n.picker--time .picker__button--clear:hover:before,\n.picker--time .picker__button--clear:focus:before {\n  color: #fff; }\n\n/* ==========================================================================\r\n   $DEFAULT-TIME-PICKER\r\n   ========================================================================== */\n\n/**\r\n * The frame the bounds the time picker.\r\n */\n\n.picker--time .picker__frame {\n  min-width: 256px;\n  max-width: 320px; }\n\n/**\r\n * The picker box.\r\n */\n\n.picker--time .picker__box {\n  font-size: 1em;\n  background: #f2f2f2;\n  padding: 0; }\n\n@media (min-height: 40.125em) {\n  .picker--time .picker__box {\n    margin-bottom: 5em; } }\n\n/* ==========================================================================\r\n   $DEFAULT-TIME-PICKER\r\n   ========================================================================== */\n\n.clockpicker-display {\n  font-size: 4rem;\n  font-weight: bold;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 400;\n  clear: both;\n  position: relative; }\n\n.clockpicker-span-am-pm {\n  font-size: 1.3rem;\n  position: absolute;\n  right: 1rem;\n  bottom: 0.3rem;\n  line-height: 2rem;\n  font-weight: 500; }\n\n@media only screen and (min-width: 601px) {\n  .clockpicker-display {\n    top: 32%; }\n  .clockpicker-span-am-pm {\n    position: relative;\n    right: auto;\n    bottom: auto;\n    text-align: center;\n    margin-top: 1.2rem; } }\n\n.text-primary {\n  color: white; }\n\n.clockpicker-span-hours {\n  margin-right: 3px; }\n\n.clockpicker-span-minutes {\n  margin-left: 3px; }\n\n.clockpicker-span-hours,\n.clockpicker-span-minutes,\n.clockpicker-span-am-pm div {\n  cursor: pointer; }\n\n.clockpicker-moving {\n  cursor: move; }\n\n.clockpicker-plate {\n  background-color: #eee;\n  border-radius: 50%;\n  width: 270px;\n  height: 270px;\n  overflow: visible;\n  position: relative;\n  margin: auto;\n  margin-top: 25px;\n  margin-bottom: 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.clockpicker-canvas,\n.clockpicker-dial {\n  width: 270px;\n  height: 270px;\n  position: absolute;\n  left: -1px;\n  top: -1px; }\n\n.clockpicker-minutes {\n  visibility: hidden; }\n\n.clockpicker-tick {\n  border-radius: 50%;\n  color: rgba(0, 0, 0, 0.87);\n  line-height: 40px;\n  text-align: center;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  cursor: pointer; }\n\n.clockpicker-tick.active,\n.clockpicker-tick:hover {\n  background-color: rgba(38, 166, 154, 0.25); }\n\n.clockpicker-dial {\n  transition: opacity 350ms, -webkit-transform 350ms;\n  transition: transform 350ms, opacity 350ms;\n  transition: transform 350ms, opacity 350ms, -webkit-transform 350ms; }\n\n.clockpicker-dial-out {\n  opacity: 0; }\n\n.clockpicker-hours.clockpicker-dial-out {\n  -webkit-transform: scale(1.2, 1.2);\n  transform: scale(1.2, 1.2); }\n\n.clockpicker-minutes.clockpicker-dial-out {\n  -webkit-transform: scale(0.8, 0.8);\n  transform: scale(0.8, 0.8); }\n\n.clockpicker-canvas {\n  transition: opacity 175ms; }\n\n.clockpicker-canvas-out {\n  opacity: 0.25; }\n\n.clockpicker-canvas-bearing {\n  stroke: none;\n  fill: #26a69a; }\n\n.clockpicker-canvas-bg {\n  stroke: none;\n  fill: #26a69a; }\n\n.clockpicker-canvas-bg-trans {\n  fill: #26a69a; }\n\n.clockpicker-canvas line {\n  stroke: #26a69a;\n  stroke-width: 4;\n  stroke-linecap: round;\n  /*shape-rendering: crispEdges;*/ }\n\n.footer {\n  width: 100%;\n  background-color: black; }\n\nmain {\n  min-height: calc(100vh - 64px); }\n\nmain .container {\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    align-items: center;\n    padding-top: 2.5rem; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var firebase = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var config = {
            apiKey: 'AIzaSyDJ4HdgirCzrCx67C-D6wIBQD9vtz4ES_0',
            authDomain: 'caught-in-a-box.firebaseapp.com',
            databaseURL: 'https://caught-in-a-box.firebaseio.com',
            projectId: 'caught-in-a-box',
            storageBucket: 'gs://caught-in-a-box.appspot.com',
            messagingSenderId: '739449080424'
        };
        firebase.initializeApp(config);
    };
    AppComponent.prototype.onRatingChange = function (event) {
        console.log(event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular2_materialize_1 = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var header_component_1 = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var home_page_component_1 = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
var search_bar_component_1 = __webpack_require__(/*! ./home-page/search-bar/search-bar.component */ "./src/app/home-page/search-bar/search-bar.component.ts");
var partners_component_1 = __webpack_require__(/*! ./home-page/partners/partners.component */ "./src/app/home-page/partners/partners.component.ts");
var add_service_component_1 = __webpack_require__(/*! ./add-service/add-service.component */ "./src/app/add-service/add-service.component.ts");
var dashboard_component_1 = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var services_component_1 = __webpack_require__(/*! ./dashboard/services/services.component */ "./src/app/dashboard/services/services.component.ts");
var show_service_component_1 = __webpack_require__(/*! ./dashboard/services/show-service/show-service.component */ "./src/app/dashboard/services/show-service/show-service.component.ts");
var service_component_1 = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
var feedback_component_1 = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
var register_component_1 = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
var login_component_1 = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var profile_component_1 = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var reviews_component_1 = __webpack_require__(/*! ./service/reviews/reviews.component */ "./src/app/service/reviews/reviews.component.ts");
var review_component_1 = __webpack_require__(/*! ./service/reviews/review/review.component */ "./src/app/service/reviews/review/review.component.ts");
var filter_component_1 = __webpack_require__(/*! src/app/all-services/filter/filter.component */ "./src/app/all-services/filter/filter.component.ts");
var all_services_component_1 = __webpack_require__(/*! src/app/all-services/all-services.component */ "./src/app/all-services/all-services.component.ts");
var all_offers_component_1 = __webpack_require__(/*! src/app/all-services/all-offers/all-offers.component */ "./src/app/all-services/all-offers/all-offers.component.ts");
var offer_component_1 = __webpack_require__(/*! src/app/all-services/all-offers/offer/offer.component */ "./src/app/all-services/all-offers/offer/offer.component.ts");
var service_details_component_1 = __webpack_require__(/*! ./service/service-details/service-details.component */ "./src/app/service/service-details/service-details.component.ts");
var support_component_1 = __webpack_require__(/*! ./support/support.component */ "./src/app/support/support.component.ts");
var footer_component_1 = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var payment_service_component_1 = __webpack_require__(/*! src/app/service/payment-service/payment-service.component */ "./src/app/service/payment-service/payment-service.component.ts");
var angular_star_rating_1 = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/esm5/angular-star-rating.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var user_auth_guard_service_1 = __webpack_require__(/*! src/app/shared/services/user-auth-guard.service */ "./src/app/shared/services/user-auth-guard.service.ts");
var ngx_pagination_1 = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var autocomplete_1 = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var payment_service_1 = __webpack_require__(/*! src/app/shared/services/payment.service */ "./src/app/shared/services/payment.service.ts");
var review_form_component_1 = __webpack_require__(/*! ./review-form/review-form.component */ "./src/app/review-form/review-form.component.ts");
var reviews_user_component_1 = __webpack_require__(/*! ./profile/reviews-user/reviews-user.component */ "./src/app/profile/reviews-user/reviews-user.component.ts");
var services_user_component_1 = __webpack_require__(/*! ./profile/services-user/services-user.component */ "./src/app/profile/services-user/services-user.component.ts");
var appRoutes = [
    { path: '', component: home_page_component_1.HomePageComponent },
    { path: 'add_service', component: add_service_component_1.AddServiceComponent, canActivate: [user_auth_guard_service_1.UserAuthGuardService] },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [user_auth_guard_service_1.UserAuthGuardService] },
    { path: 'feedback', component: feedback_component_1.FeedbackComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'profile', children: [
            { path: '', component: profile_component_1.ProfileComponent, pathMatch: 'full' },
            { path: ':uid', component: profile_component_1.ProfileComponent, pathMatch: 'full' }
        ] },
    { path: 'services', children: [
            { path: '', component: all_services_component_1.AllServicesComponent, pathMatch: 'full' },
            { path: ':category', component: all_services_component_1.AllServicesComponent, pathMatch: 'full' }
        ] },
    { path: 'service', children: [
            { path: ':id', component: service_component_1.ServiceComponent }
        ] },
    { path: 'support', component: support_component_1.SupportComponent },
    { path: 'review', children: [
            { path: ':uid', component: review_form_component_1.ReviewFormComponent }
        ] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_page_component_1.HomePageComponent,
                search_bar_component_1.SearchBarComponent,
                partners_component_1.PartnersComponent,
                add_service_component_1.AddServiceComponent,
                dashboard_component_1.DashboardComponent,
                services_component_1.ServicesComponent,
                show_service_component_1.ShowServiceComponent,
                feedback_component_1.FeedbackComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent,
                profile_component_1.ProfileComponent,
                reviews_component_1.ReviewsComponent,
                review_component_1.ReviewComponent,
                filter_component_1.FilterComponent,
                all_offers_component_1.AllOffersComponent,
                offer_component_1.OfferComponent,
                service_details_component_1.ServiceDetailsComponent,
                support_component_1.SupportComponent,
                footer_component_1.FooterComponent,
                all_services_component_1.AllServicesComponent,
                service_component_1.ServiceComponent,
                payment_service_component_1.PaymentServiceComponent,
                review_form_component_1.ReviewFormComponent,
                reviews_user_component_1.ReviewsUserComponent,
                services_user_component_1.ServicesUserComponent
            ],
            imports: [
                angular2_materialize_1.MaterializeModule,
                platform_browser_1.BrowserModule,
                angular_star_rating_1.StarRatingModule.forRoot(),
                router_1.RouterModule.forRoot(appRoutes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_pagination_1.NgxPaginationModule,
                autocomplete_1.AutoCompleteModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [
                user_auth_guard_service_1.UserAuthGuardService,
                payment_service_1.PaymentService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Dashboard</h3>\r\n<div class=\"row\">\r\n  <div class=\"col s3 flow-text\"\r\n       (click)=\"changeStatus('services')\"\r\n       style=\"cursor: pointer\"\r\n       >Serviciile mele</div>\r\n\r\n  <div class=\"col s3 flow-text\"\r\n       (click)=\"changeStatus('services_progress')\"\r\n       style=\"cursor: pointer\">Servicii progress</div>\r\n\r\n  <div class=\"col s3 flow-text\"\r\n       (click)=\"changeStatus('services_done')\"\r\n       style=\"cursor: pointer\">Servicii terminate</div>\r\n\r\n  <div class=\"col s3 flow-text\"\r\n       (click)=\"changeStatus('services_waiting')\"\r\n       style=\"cursor: pointer\">Servicii în așteptare</div>\r\n</div>\r\n\r\n<app-services [services] = \"servicesToPass\" class=\"flow-text\" [status]=\"status\"></app-services>\r\n<!-- TODO: bold active texts-->\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n  :host div div {\n    font-size: 1.25rem; }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var service_service_1 = __webpack_require__(/*! src/app/shared/services/service.service */ "./src/app/shared/services/service.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(userService, serviceService) {
        this.userService = userService;
        this.serviceService = serviceService;
        this.services = [];
        this.my_services = [];
        this.services_done = [];
        this.services_progress = [];
        this.services_waiting = [];
        this.servicesToPass = [];
        this.status = '';
        this.isActive = new Map();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isActive['services'] = true;
        this.isActive['services_done'] = false;
        this.isActive['services_progress'] = false;
        this.isActive['services_waiting'] = false;
        this.serviceService.getServices().on('value', function (snap) {
            for (var key in snap.val())
                for (var key2 in snap.val()[key]) {
                    var serv = snap.val()[key][key2];
                    (_a = _this.services).push.apply(_a, serv.filter(function (service) { return service.fromUser === _this.userService.uid || service.toUser === _this.userService.uid; }));
                }
            _this.my_services = _this.services.filter(function (service) { return service.status === 'my_service' && service.fromUser === _this.userService.uid; });
            _this.services_done = _this.services.filter(function (service) { return service.status === 'done' && service.toUser === _this.userService.uid; });
            _this.services_waiting = _this.services.filter(function (service) { return service.status === 'waiting' && service.toUser === _this.userService.uid; });
            _this.services_progress = _this.services.filter(function (service) { return service.status === 'processing' && service.fromUser === _this.userService.uid; });
            _this.servicesToPass = _this.my_services;
            var _a;
        });
    };
    DashboardComponent.prototype.changeStatus = function (text) {
        console.log(text);
        this.isActive['services'] = false;
        this.isActive['services_done'] = false;
        this.isActive['services_progress'] = false;
        this.isActive['services_waiting'] = false;
        this.isActive[text] = true;
        this.status = text;
        switch (text) {
            case 'services': {
                this.servicesToPass = this.my_services;
                console.log('services');
                break;
            }
            case 'services_done': {
                this.servicesToPass = this.services_done;
                console.log('done');
                break;
            }
            case 'services_progress': {
                this.servicesToPass = this.services_progress;
                console.log('progress');
                break;
            }
            case 'services_waiting': {
                this.servicesToPass = this.services_waiting;
                console.log('waiting');
                break;
            }
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            service_service_1.ServiceService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/dashboard/services/services.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/services/services.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"services.length == 0\">\r\n  <p>No {{status}} available</p>\r\n</div>\r\n<app-show-service *ngFor=\"let service of services\"\r\n                  [service]=\"service\"\r\n                  [status]=\"status\"\r\n></app-show-service>\r\n<!-- Modal Trigger -->\r\n<!--<a (click)=\"openModal()\">Open</a>\r\n\r\n<div id=\"modaltest\" class=\"modal\" materialize=\"modal\"\r\n     [materializeParams]=\"[{dismissible: true}]\" [materializeSelectOptions]=\"[{startingTop:'0%'}]\" [materializeActions]=\"modalActions\">\r\nMerge\r\n</div>-->\r\n"

/***/ }),

/***/ "./src/app/dashboard/services/services.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/services/services.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/services/services.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/services/services.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
        console.log(this.services);
        /*this.services = [
          new ServiceModel(
            true,
            "Titlululululululu",
            "Descrierererererere",
            3,
            "Categorie",
            [],
            "bSUKBJOsf5NnZvuv5v6maicWeON2",
            "cine stie",
            true,
            "In Progress",
            69.99
          ),
          new ServiceModel(
            true,
            "Titlululululululu2",
            "Descrierererererere2",
            5,
            "Alta Categorie",
            [],
            "bSUKBJOsf5NnZvuv5v6maicWeON2",
            "cine stie",
            false,
            "Complete",
            99.99
          )
        ];*/
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], ServicesComponent.prototype, "services", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ServicesComponent.prototype, "status", void 0);
    ServicesComponent = __decorate([
        core_1.Component({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/dashboard/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/dashboard/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());
exports.ServicesComponent = ServicesComponent;


/***/ }),

/***/ "./src/app/dashboard/services/show-service/show-service.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/services/show-service/show-service.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"service\">\r\n<div class=\"row serviceItem hoverable\" >\r\n  <div class=\"col s3 servicePhoto\" [routerLink]=\"'../service/' + service.uid\">\r\n    <img [src]=\"service.imagePath[0]\" width=\"100%\" height=\"100%\"/>\r\n  </div>\r\n  <div class=\"col s3 serviceData1\" [routerLink]=\"'../service/' + service.uid\">\r\n    <p class=\"serviceTitle truncate\">{{ service.title }}</p>\r\n    <p class=\"serviceDesc truncate\">{{ service.desc }}</p>\r\n    <p class=\"serviceRating\"><span class=\"amber-text text-darken-1\">★</span>{{ service.rating }}</p>\r\n  </div>\r\n  <div class=\"col s3\" *ngIf=\"status !== 'services_waiting'\"></div>\r\n  <div class=\"col s3 waves-effect waves-light btn green valign-wrapper\" *ngIf=\"this.status === 'services_waiting'\" (click)=\"openModal()\">\r\n    <p >Confirm</p>\r\n  </div>\r\n  <div class=\"col s3 serviceData2\" [routerLink]=\"'../service/' + service.uid\">\r\n    <p class=\"servicePrice\">{{ service.price }} EUR</p>\r\n    <div *ngIf=\"service.barter\" style=\"flex: 1;\"></div>\r\n    <div *ngIf=\"!service.barter\" style=\"flex: 2;\"></div>\r\n    <p *ngIf=\"service.barter\" class=\"serviceBarter green white-text\"> ✓ Barter</p>\r\n  </div>\r\n</div>\r\n<div id=\"modaltest\" class=\"modal valign-wrapper\" materialize=\"modal\" style=\"transform: translateY(-50%) !important;\"\r\n     [materializeParams]=\"[{dismissible: true}]\" [materializeSelectOptions]=\"[{startingTop:'25%'}]\" [materializeActions]=\"modalActions\">\r\n  <div class=\"modal-content\">\r\n    <h4>Vreți să confirmați că serviciul a fost realizat?</h4>\r\n    <p>După ce confirmați veți fi redirecționat pentru a pune un review referitor la serviciul cumpărat.</p>\r\n    <div class=\"modal-footer\">\r\n      <div class=\"row\">\r\n        <a class=\"waves-effect waves-black btn-flat\" (click)=\"finishService()\">Da</a>\r\n        <a class=\"modal-close waves-effect waves-black btn-flat\" >Nu</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/services/show-service/show-service.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/services/show-service/show-service.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  font-size: 1.25rem; }\n\n.serviceItem {\n  align-items: center;\n  margin-bottom: 1rem;\n  border-radius: .5rem;\n  border: 1px solid #DFDFDF;\n  height: 7.5rem; }\n\n.serviceItem .col {\n    height: 100%; }\n\n.serviceItem .servicePhoto {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    -o-object-fit: cover;\n       object-fit: cover;\n    overflow: hidden;\n    padding: 0;\n    border-radius: .5rem 0 0 .5rem; }\n\n.serviceItem .servicePhoto img {\n      -o-object-fit: cover;\n         object-fit: cover; }\n\n.serviceItem .serviceData1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n\n.serviceItem .serviceData1 * {\n      margin: 0; }\n\n.serviceItem .serviceData1 .serviceTitle {\n      font-size: 1.25rem;\n      font-weight: bold; }\n\n.serviceItem .serviceData1 .serviceRating {\n      font-size: 1.35rem;\n      font-weight: bold; }\n\n.serviceItem .serviceData2 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0; }\n\n.serviceItem .serviceData2 * {\n      display: flex;\n      margin: 0;\n      text-align: right; }\n\n.serviceItem .serviceData2 .servicePrice {\n      justify-content: flex-end;\n      align-items: flex-end;\n      margin-right: 1rem;\n      font-weight: bold;\n      flex: 3; }\n\n.serviceItem .serviceData2 .serviceBarter {\n      justify-content: center;\n      align-items: center;\n      flex: 1;\n      font-weight: bold;\n      border-radius: .5rem 0;\n      padding: .25rem .75rem;\n      align-self: flex-end;\n      text-align: center;\n      white-space: nowrap; }\n"

/***/ }),

/***/ "./src/app/dashboard/services/show-service/show-service.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/services/show-service/show-service.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var service_model_1 = __webpack_require__(/*! ../../../shared/service.model */ "./src/app/shared/service.model.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ShowServiceComponent = /** @class */ (function () {
    function ShowServiceComponent(router) {
        this.router = router;
        this.modalActions = new core_1.EventEmitter();
    }
    ShowServiceComponent.prototype.ngOnInit = function () {
        console.log(this.service);
    };
    ShowServiceComponent.prototype.openModal = function () {
        console.log(this.status);
        this.modalActions.emit({ action: 'modal', params: ['open'] });
    };
    ShowServiceComponent.prototype.finishService = function () {
        this.modalActions.emit({ action: 'modal', params: ['close'] });
        this.router.navigate(['review/' + this.service.uid]);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", service_model_1.ServiceModel)
    ], ShowServiceComponent.prototype, "service", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ShowServiceComponent.prototype, "status", void 0);
    ShowServiceComponent = __decorate([
        core_1.Component({
            selector: 'app-show-service',
            template: __webpack_require__(/*! ./show-service.component.html */ "./src/app/dashboard/services/show-service/show-service.component.html"),
            styles: [__webpack_require__(/*! ./show-service.component.scss */ "./src/app/dashboard/services/show-service/show-service.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ShowServiceComponent);
    return ShowServiceComponent;
}());
exports.ShowServiceComponent = ShowServiceComponent;


/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Feedback</h1>\r\n<form>\r\n  <div class=\"card-content\">\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <p>\r\n          <label for='csFormName'>Nume și prenume</label>\r\n          <input type='text' id='csFormName'>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"input-field col s12\">\r\n        <p>\r\n          <label for='csFormMail'>Mail</label>\r\n          <input type='email' id='csFormMail'>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"col s12\">\r\n        <p>\r\n          <label for='csFormDesc'>Descrierea problemei</label>\r\n          <textarea id='csFormDesc'></textarea>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"col s12\">\r\n        <p>\r\n          <input type=\"submit\" class=\"btn  waves-effect waves-light\" value=\"Trimite\">\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/feedback/feedback.component.scss":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#csFormDesc {\n  resize: vertical; }\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent() {
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent = __decorate([
        core_1.Component({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.scss */ "./src/app/feedback/feedback.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackComponent);
    return FeedbackComponent;
}());
exports.FeedbackComponent = FeedbackComponent;


/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\">\r\n  <p>Mail</p>\r\n  <p>Telefon</p>\r\n  <p>Adresa</p>\r\n</div>\r\n<a id=\"support\">\r\n  Servicii Support\r\n</a>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n  align-items: center;\n  padding: 0 5rem; }\n\n#contact {\n  color: #dbdbdb; }\n\n#support {\n  background-color: #FFF;\n  color: #2D2D2D;\n  border-radius: 1rem;\n  padding: 1rem; }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div class=\"nav-wrapper white z-depth-1\" >\r\n    <a id='navLogo' class='brand-logo hoverable' routerLink = \"/\"><img src='../../../assets/images/CIAB.svg'></a>\r\n    <a data-activates=\"nav-mobile-client\" class=\"button-collapse\" materialize=\"sideNav\"\r\n       [materializeParams]=\"[{menuWidth: 300,edge: 'left', closeOnClick: true, draggable: true}]\"><i class=\"material-icons black-text\">menu</i>\r\n    </a>\r\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\" [ngSwitch]=\"isAuth()\">\r\n      <li routerLinkActive = \"active\" [routerLinkActiveOptions]=\"{ exact: true }\"><a routerLink=\"\" class=\"black-text\">Acasa</a></li>\r\n      <li routerLinkActive = \"active\"><a routerLink=\"/categories\" class=\"black-text\">Categorii</a></li> <!-- Dropdown -->\r\n      <li routerLinkActive = \"active\"><a routerLink=\"/services\" class=\"black-text\">Servicii</a></li> <!-- Dropdown -->\r\n      <li routerLinkActive = \"active\" *ngIf=\"isAuth()\"><a routerLink = \"/dashboard\" class=\"black-text\">Dashboard</a></li>\r\n      <li routerLinkActive = \"active\" *ngIf=\"isAuth()\"><a routerLink = \"/profile\" class=\"black-text\">Profile</a></li>\r\n      <li routerLinkActive = \"active\" *ngIf=\"isAuth()\"><a (click) = \"logout()\" class=\"black-text\">Delogare</a></li>\r\n      <li routerLinkActive = \"active\" *ngIf=\"!isAuth()\"><a routerLink=\"/register\" class=\"black-text\">Inregistrare</a></li>\r\n      <li routerLinkActive = \"active\" *ngIf=\"!isAuth()\"><a routerLink=\"/login\" class=\"black-text\">Logare</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<ul class=\"side-nav\" id=\"nav-mobile-client\">\r\n  <li routerLinkActive = \"active\" [routerLinkActiveOptions]=\"{ exact: true }\"><a routerLink=\"\">Acasa</a></li>\r\n  <li routerLinkActive = \"active\"><a routerLink=\"/categories\">Categorii</a></li> <!-- Dropdown -->\r\n  <li routerLinkActive = \"active\"><a routerLink=\"/services\">Servicii</a></li> <!-- Dropdown -->\r\n  <li routerLinkActive = \"active\" *ngIf=\"isAuth()\"><a routerLink = \"/dashboard\">Dashboard</a></li>\r\n  <li routerLinkActive = \"active\" *ngIf=\"isAuth()\"><a routerLink = \"/profile\">Profile</a></li>\r\n  <li routerLinkActive = \"active\" *ngIf=\"isAuth()\"><a (click) = \"logout()\">Delogare</a></li>\r\n  <li routerLinkActive = \"active\" *ngIf=\"!isAuth()\"><a routerLink=\"/register\">Inregistrare</a></li>\r\n  <li routerLinkActive = \"active\" *ngIf=\"!isAuth()\"><a routerLink=\"/login\">Logare</a></li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navLogo,\n#navLogo * {\n  height: 100%;\n  width: auto; }\n\n#navLogo {\n  position: initial; }\n\nnav ul li.active,\nul.side-nav li.active {\n  /*\r\n\tbackground-color: rgba(255, 255, 255, 0.1);\r\n\t*/\n  background-color: initial;\n  font-weight: bold; }\n\nnav ul li a {\n  font-size: 1.1rem; }\n\nnav,\nnav .nav-wrapper i,\nnav a.button-collapse,\nnav a.button-collapse i {\n  height: 85px;\n  line-height: 85px; }\n\n.nav-wrapper {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center; }\n\n@media only screen and (max-width: 992px) {\n  .nav-wrapper {\n    display: inherit; }\n  #navLogo {\n    position: absolute; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
//import * as $ from 'jquery';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.isAuth = function () {
        return (this.userService.token != null);
    };
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col s12\">\r\n    <app-search-bar></app-search-bar>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col s12\">\r\n    <div id=\"browseButtons\">\r\n      <div class=\"browseButton hoverable\">\r\n        <a routerLink=\"add_service\">Creează Serviciu</a>\r\n      </div>\r\n      <div class=\"browseButton hoverable\">\r\n        <a routerLink=\"services\">Caută Serviciu</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col s12\">\r\n    <app-partners ></app-partners>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  margin-top: -2.5rem; }\n\n.row:first-child .col.s12 {\n  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.75)), url('hs.jpg');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 50vh;\n  width: 100vw;\n  padding: 5rem; }\n\n#browseButtons {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-around;\n  align-content: center;\n  align-items: center; }\n\n#browseButtons .browseButton {\n    background-image: url(/assets/images/CIAB-NoText.svg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 14rem;\n    height: 14rem;\n    margin: 1rem; }\n\n#browseButtons .browseButton:nth-child(1) {\n      color: #FFFFFF;\n      background: linear-gradient(135deg, #FFE2C6, #CC8C4D); }\n\n#browseButtons .browseButton:nth-child(2) {\n      color: #FFFFFF;\n      background: linear-gradient(135deg, #63C5E3, #2C92B1); }\n\n#browseButtons .browseButton a {\n      display: flex;\n      justify-content: center;\n      align-content: center;\n      align-items: center;\n      width: 100%;\n      height: 100%;\n      font-weight: bold;\n      font-size: 1.25rem;\n      color: inherit; }\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;


/***/ }),

/***/ "./src/app/home-page/partners/partners.component.html":
/*!************************************************************!*\
  !*** ./src/app/home-page/partners/partners.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Parteneri</h2>\r\n<div id=\"partners\">\r\n  <div class=\"partner grey darken-2\"></div>\r\n  <div class=\"partner grey darken-2\"></div>\r\n  <div class=\"partner grey darken-2\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/home-page/partners/partners.component.scss":
/*!************************************************************!*\
  !*** ./src/app/home-page/partners/partners.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  font-weight: bold; }\n\n#partners {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  padding: 0rem; }\n\n.partner {\n  width: 10rem;\n  height: 10rem;\n  margin: 2rem 1rem; }\n"

/***/ }),

/***/ "./src/app/home-page/partners/partners.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home-page/partners/partners.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var PartnersComponent = /** @class */ (function () {
    function PartnersComponent() {
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    PartnersComponent = __decorate([
        core_1.Component({
            selector: 'app-partners',
            template: __webpack_require__(/*! ./partners.component.html */ "./src/app/home-page/partners/partners.component.html"),
            styles: [__webpack_require__(/*! ./partners.component.scss */ "./src/app/home-page/partners/partners.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnersComponent);
    return PartnersComponent;
}());
exports.PartnersComponent = PartnersComponent;


/***/ }),

/***/ "./src/app/home-page/search-bar/search-bar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/home-page/search-bar/search-bar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row valign-wrapper\">\r\n    <div id=\"newServ\" class=\"col s2\">\r\n      <button routerLink='/add_service' class=\"waves-effect waves-light btn-large black\">\r\n        <i class=\"material-icons hoverable\">add</i>\r\n      </button>\r\n\t\t</div>\r\n\t\t<div class=\"valign-wrapper col s10 hoverable\">\r\n\t\t\t<form id=\"homeSearch\" class=\"ui-fluid\" action=\"\">\r\n\t\t\t\t<p-autoComplete\r\n          [(ngModel)]=\"serviceSearchedTitle\"\r\n          placeholder=\"Search services\"\r\n\t\t\t\t\t[suggestions]=\"suggestions\"\r\n\t\t\t\t\t(completeMethod)=\"filterServices($event)\"\r\n\t\t\t\t\t[minLength]=\"1\"\r\n\t\t\t\t\t[ngModelOptions]=\"{standalone: true}\"\r\n\t\t\t\t\t[disabled] = \"!ok\">\r\n\t\t\t\t\t<ng-template pTemplate=\"item\" let-serv>\r\n            <div class=\"hoverable\">\r\n              <div class=\"ui-helper-clearfix acItem \" [routerLink]=\"'../service/'+serv.uid\" (click)=\"setTitle(serv.title)\">\r\n                <img [src]=\"serv.imagePath[0]\"/>\r\n                <div>{{ serv.title }}</div>\r\n                <div class=\"rating half label-left\">\r\n                  <star-rating [starType]=\"'svg'\" [rating]=\"serv.rating\"></star-rating>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\t\t\t\t\t</ng-template>\r\n        </p-autoComplete>\r\n\t\t\t</form>\r\n\t\t</div>\r\n  </div>\r\n  <div class=\"row hoverable\">\r\n    <ul class=\"collapsible\" materialize=\"collapsible\">\r\n      <li>\r\n        <div class=\"collapsible-header center-align\"><b>Categorii</b></div>\r\n        <div class=\"collapsible-body\">\r\n          <div id=\"homeCategories\" >\r\n            <div class=\"category\" *ngFor=\"let category of categories\">\r\n              <a [routerLink]=\"'services/' + category\">{{category}}</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/home-page/search-bar/search-bar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/home-page/search-bar/search-bar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category {\n  text-align: center; }\n\n.collapsible-body {\n  background-color: #ffe5b7; }\n\n.collapsible-body #homeCategories {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr; }\n\nform {\n  width: 100%; }\n\nform .acItem {\n    display: flex;\n    justify-content: flex-start;\n    align-content: center;\n    align-items: center; }\n\nform .acItem img {\n      width: 2rem;\n      height: 2rem;\n      -o-object-fit: cover;\n         object-fit: cover; }\n\nform .acItem div {\n      font-size: 1.4rem;\n      margin-left: .5rem; }\n\nform .acItem .rating {\n      flex: 1;\n      display: flex;\n      justify-content: flex-end;\n      align-content: center;\n      align-items: center; }\n\ninput[type=text]:not(.browser-default):focus:not([readonly]) {\n  border-bottom: 1px solid #feb872;\n  box-shadow: 0 1px 0 0 #feb872; }\n\n.category a {\n  color: #000; }\n\n.category a:hover {\n  color: inherit;\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/home-page/search-bar/search-bar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/home-page/search-bar/search-bar.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var service_service_1 = __webpack_require__(/*! src/app/shared/services/service.service */ "./src/app/shared/services/service.service.ts");
var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(userService, serviceService) {
        this.userService = userService;
        this.serviceService = serviceService;
        this.categories = [];
        this.servicesBrute = [];
        this.services = [];
        this.serviceSearchedTitle = '';
        this.ok = false;
        this.modified = 0;
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getCategories().on('value', function (snap) {
            _this.categories = snap.val();
            console.log(_this.categories);
        });
        this.serviceService.getServices().on('value', function (snap) {
            _this.servicesBrute = snap.val();
            for (var key in _this.servicesBrute)
                for (var key2 in _this.servicesBrute[key])
                    for (var _i = 0, _a = _this.servicesBrute[key][key2]; _i < _a.length; _i++) {
                        var service = _a[_i];
                        _this.services.push(service);
                    }
            _this.ok = true;
        });
    };
    SearchBarComponent.prototype.filterServices = function (event) {
        this.modified = 0;
        this.suggestions = this.services.filter(function (service) {
            var s1 = service.title.toLowerCase();
            var s2 = event.query.toLowerCase();
            return s1.search(s2) === 0 && service.status === 'my_service';
        });
        console.log.apply(console, this.suggestions);
    };
    SearchBarComponent.prototype.setTitle = function (title) {
        this.serviceSearchedTitle = title;
    };
    SearchBarComponent.prototype.canShow = function () {
        this.modified++;
        return this.modified == 1;
    };
    SearchBarComponent = __decorate([
        core_1.Component({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/home-page/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/home-page/search-bar/search-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            service_service_1.ServiceService])
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;


/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"valign-wrapper row login-box\">\r\n    <div class=\"col card hoverable s12\">\r\n      <form [formGroup]=\"form\" #f=\"ngForm\" (submit)=\"onSubmit()\">\r\n        <div class=\"card-content\">\r\n\r\n          <div class=\"row\">\r\n\r\n            <!--Email address-->\r\n            <div class=\"input-field col s12\">\r\n              <label for=\"email\">Email address</label>\r\n              <input type=\"email\" class=\"validate\" name=\"email\" id=\"email\" ngModel required formControlName=\"email\"/>\r\n              <span class=\"helper-text error\" *ngIf = \"!form.get('email').valid && (form.get('email').touched || f.submitted)\"> Please enter an email! </span>\r\n            </div>\r\n\r\n            <!--Password-->\r\n            <div class=\"input-field col s12\">\r\n              <label>Password</label>\r\n              <input type=\"password\" class=\"validate\" formControlName=\"password\"/>\r\n              <span class=\"helper-text error\" *ngIf = \"!form.get('password').valid && (form.get('password').touched || f.submitted)\"> Please enter a password! </span>\r\n            </div>\r\n\r\n\r\n          <span class=\"helper-text error\" *ngIf = \"error != null\"> {{ error }} </span>\r\n        </div>\r\n\r\n        <div class=\"card-action center-align\">\r\n          <input type=\"submit\" class=\"btn black waves-effect waves-light\" value=\"Login\">\r\n        </div>\r\n        <!--<div (click)=\"addCat()\">TICUU</div>-->\r\n        </div>\r\n      </form>\r\n    </div>\r\n   </div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var angular2_materialize_1 = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.form = new forms_1.FormGroup({
            email: new forms_1.FormControl(''),
            password: new forms_1.FormControl(''),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.error = '';
        var email = this.form.value.email;
        var password = this.form.value.password;
        this.userService.loginUser(email, password).then(function (response) {
            response.user.getIdToken().then(function (token) {
                _this.userService.token = token;
                _this.userService.uid = response.user.uid;
                _this.router.navigate(['dashboard']);
                angular2_materialize_1.toast('Loggin succesfull!', 1000);
            });
        }).catch(function (error) { return _this.error = error; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf = \"hasUser\">\r\n  <div class=\"col s3\">\r\n\t\t<div class=\"profileImage\">\r\n\t\t\t<img src=\"{{ user.imageURL }}\" alt=\"\" width=\"100%\" height=\"100%\">\r\n\t\t</div>\r\n  </div>\r\n  <div class=\"col s7\">\r\n    <h2>{{ user.name }}</h2>\r\n    <p>@{{ user.username }}</p>\r\n  </div>\r\n  <div class=\"col s2\">\r\n    <p><span class=\"amber-text text-darken-1\">★</span>{{ user.rating }}</p>\r\n    <p><b>{{ user.accountType }}</b></p>\r\n    <p *ngIf=\"user.barter\" class=\"profileBarter green-text\"> ✓ Barter</p>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf = \"hasUser\">\r\n  <div class=\"col\">\r\n  <h3>Descriere</h3>\r\n  <span>\r\n    {{ user.desc}}\r\n  </span>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf = \"hasUser\">\r\n  <div class=\"col\">\r\n    <h3>Contact</h3>\r\n    <ul>\r\n      <li><b>Mail: </b>   {{ user.email }}</li>\r\n      <li><b>Telefon: </b>{{ user.phone }}</li>\r\n      <li><b>Locatie: </b>{{ user.location }}</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf = \"hasUser\">\r\n  <div class=\"col s6\">\r\n    <h2>Reviews</h2>\r\n    <app-reviews-user></app-reviews-user>\r\n  </div>\r\n  <div class=\"col s6\">\r\n    <h2>Services</h2>\r\n    <app-services-user></app-services-user>\r\n  </div>\r\n</div>\r\n<!--TODO: Modifica ratingul la user-->\r\n<!--TODO: Modifica sa apara username-ul-->\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2, h3 {\n  font-weight: bold;\n  font-size: 2rem; }\n\n.profileImage img {\n  border-radius: .5rem;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.profileBarter {\n  white-space: nowrap;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var service_service_1 = __webpack_require__(/*! src/app/shared/services/service.service */ "./src/app/shared/services/service.service.ts");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var review_service_1 = __webpack_require__(/*! src/app/shared/services/review.service */ "./src/app/shared/services/review.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(serviceService, userService, reviewService, route, router) {
        this.serviceService = serviceService;
        this.userService = userService;
        this.reviewService = reviewService;
        this.route = route;
        this.router = router;
        this.reviews = [];
        this.services = [];
        this.hasUser = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
        });
        if (this.uid == undefined)
            this.uid = this.userService.uid;
        if (!this.userService.uid)
            this.router.navigate(['/login']);
        console.log(this.uid);
        // this.reviewService.getUserReviews(this.userService.uid).on('value', snap => {
        this.reviewService.getUserReviews(this.uid).on('value', function (snap) {
            _this.reviews = snap.val();
            _this.userService.getUsers().on('value', function (snap) {
                console.log(snap.val());
                // this.user = snap.val().filter( user => user.uid === this.userService.uid)[0];
                _this.user = snap.val().filter(function (user) { return user.uid === _this.uid; })[0];
                _this.hasUser = true;
                console.log(_this.user);
                // this.serviceService.getServices(this.userService.uid).on('value', snap => {
                _this.serviceService.getServices(_this.uid).on('value', function (snap) {
                    _this.services = snap.val();
                });
            });
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            user_service_1.UserService,
            review_service_1.ReviewService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/profile/reviews-user/reviews-user.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/profile/reviews-user/reviews-user.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/reviews-user/reviews-user.component.html":
/*!******************************************************************!*\
  !*** ./src/app/profile/reviews-user/reviews-user.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"reviewsContainer collection\" *ngFor=\"let review of reviews\">\r\n  <li class=\"review collection-item\" style=\"list-style: none\">\r\n    <p class=\"reviewTitle\"><b>User: </b>{{ review.fromUser }}</p>\r\n    <div class=\"reviewContent\">\r\n      {{ review.content}} <br>\r\n      <b>Rating: </b>{{review.rating}}\r\n      <star-rating\r\n        [starType]=\"'svg'\"\r\n        [rating]=\"review.rating\"\r\n        [readOnly]=\"true\">\r\n      </star-rating>\r\n    </div>\r\n    <div class=\"reviewPhotos\">\r\n      <div *ngFor=\"let photo of review.imagePath\">\r\n        <img\r\n          class=\"materialboxed\"\r\n          height=\"100px\"\r\n          width=\"auto\"\r\n          src='{{ photo }}'>\r\n      </div>\r\n    </div>\r\n  </li>\r\n\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/profile/reviews-user/reviews-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/profile/reviews-user/reviews-user.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var service_service_1 = __webpack_require__(/*! ../../shared/services/service.service */ "./src/app/shared/services/service.service.ts");
var user_service_1 = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var review_service_1 = __webpack_require__(/*! ../../shared/services/review.service */ "./src/app/shared/services/review.service.ts");
var ReviewsUserComponent = /** @class */ (function () {
    function ReviewsUserComponent(serviceService, userService, reviewService) {
        this.serviceService = serviceService;
        this.userService = userService;
        this.reviewService = reviewService;
    }
    ReviewsUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var serviceUID = [];
        this.serviceService.getServices(this.userService.uid).once('value', function (snap) {
            for (var uid in snap.val())
                serviceUID.push(uid);
        });
        console.log(serviceUID);
        this.reviewService.getReviews().on('value', function (snap) {
            _this.reviews = snap.val().filter(function (review) {
                console.log(review.idService);
                if (serviceUID.includes(review.idService)) {
                    review.fromUser = _this.userService.convertUIDtoName(review.fromUser);
                    return true;
                }
                return false;
            });
        });
    };
    ReviewsUserComponent = __decorate([
        core_1.Component({
            selector: 'app-reviews-user',
            template: __webpack_require__(/*! ./reviews-user.component.html */ "./src/app/profile/reviews-user/reviews-user.component.html"),
            styles: [__webpack_require__(/*! ./reviews-user.component.css */ "./src/app/profile/reviews-user/reviews-user.component.css")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            user_service_1.UserService,
            review_service_1.ReviewService])
    ], ReviewsUserComponent);
    return ReviewsUserComponent;
}());
exports.ReviewsUserComponent = ReviewsUserComponent;


/***/ }),

/***/ "./src/app/profile/services-user/services-user.component.html":
/*!********************************************************************!*\
  !*** ./src/app/profile/services-user/services-user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let service of services\">\r\n  <div class=\"row serviceItem hoverable\" [routerLink]=\"'/service/' + service.uid\">\r\n    <div class=\"col s3 servicePhoto\">\r\n      <img [src]=\"service.imagePath[0]\" width=\"100%\" height=\"100%\"/>\r\n    </div>\r\n    <div class=\"col s6 serviceData1\">\r\n      <p class=\"serviceTitle truncate\">{{ service.title }}</p>\r\n      <p class=\"serviceDesc truncate\">{{ service.desc }}</p>\r\n      <p class=\"serviceRating\"><span class=\"amber-text text-darken-1\">★</span>{{ service.rating }}</p>\r\n    </div>\r\n    <div class=\"col s3 serviceData2\">\r\n      <p class=\"servicePrice\">{{ service.price }} EUR</p>\r\n      <div *ngIf=\"service.barter\" style=\"flex: 1;\"></div>\r\n      <div *ngIf=\"!service.barter\" style=\"flex: 2;\"></div>\r\n      <p *ngIf=\"service.barter\" class=\"serviceBarter green white-text\"> ✓ Barter</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/services-user/services-user.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/profile/services-user/services-user.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".serviceItem {\n  align-items: center;\n  margin-bottom: 1rem;\n  border-radius: .5rem;\n  border: 1px solid #DFDFDF;\n  height: 7.5rem; }\n  .serviceItem .col {\n    height: 100%; }\n  .serviceItem .servicePhoto {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    -o-object-fit: cover;\n       object-fit: cover;\n    overflow: hidden;\n    padding: 0;\n    border-radius: .5rem 0 0 .5rem; }\n  .serviceItem .servicePhoto img {\n      -o-object-fit: cover;\n         object-fit: cover; }\n  .serviceItem .serviceData1 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n  .serviceItem .serviceData1 * {\n      margin: 0; }\n  .serviceItem .serviceData1 .serviceTitle {\n      font-size: 1.25rem;\n      font-weight: bold; }\n  .serviceItem .serviceData1 .serviceRating {\n      font-size: 1.35rem;\n      font-weight: bold; }\n  .serviceItem .serviceData2 {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0; }\n  .serviceItem .serviceData2 * {\n      display: flex;\n      margin: 0;\n      text-align: right; }\n  .serviceItem .serviceData2 .servicePrice {\n      justify-content: flex-end;\n      align-items: flex-end;\n      margin-right: 1rem;\n      font-weight: bold;\n      flex: 3; }\n  .serviceItem .serviceData2 .serviceBarter {\n      justify-content: center;\n      align-items: center;\n      flex: 1;\n      font-weight: bold;\n      border-radius: .5rem 0;\n      padding: .25rem .75rem;\n      align-self: flex-end;\n      text-align: center;\n      white-space: nowrap; }\n"

/***/ }),

/***/ "./src/app/profile/services-user/services-user.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/profile/services-user/services-user.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var service_service_1 = __webpack_require__(/*! ../../shared/services/service.service */ "./src/app/shared/services/service.service.ts");
var user_service_1 = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var ServicesUserComponent = /** @class */ (function () {
    function ServicesUserComponent(serviceService, userService) {
        this.serviceService = serviceService;
        this.userService = userService;
        this.services = [];
    }
    ServicesUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceService.getServices(this.userService.uid).on('value', function (snap) {
            console.log(snap.val());
            for (var key in snap.val()) {
                (_a = _this.services).push.apply(_a, snap.val()[key].filter(function (service) { return service.status === 'my_service'; }));
                console.log(key, snap.val(), snap.val()[key][0]);
            }
            var _a;
        });
        console.log(this.services);
    };
    ServicesUserComponent = __decorate([
        core_1.Component({
            selector: 'app-services-user',
            template: __webpack_require__(/*! ./services-user.component.html */ "./src/app/profile/services-user/services-user.component.html"),
            styles: [__webpack_require__(/*! ./services-user.component.scss */ "./src/app/profile/services-user/services-user.component.scss")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            user_service_1.UserService])
    ], ServicesUserComponent);
    return ServicesUserComponent;
}());
exports.ServicesUserComponent = ServicesUserComponent;


/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"valign-wrapper row login-box\">\r\n   <div class=\"col card hoverable s12 \">\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"onRegUser()\" #f=\"ngForm\">\r\n      <div class=\"card-content\">\r\n\r\n        <div class=\"row\">\r\n\r\n          <!--Profile image-->\r\n          <div class=\"image-upload col s12 poza center-align\">\r\n            <label for=\"file-input2\" class=\"center-align\">\r\n              <i class=\"large material-icons\" *ngIf=\"isNull()\" >add</i>\r\n              <img src=\"{{ imageURL }}\" alt=\"\" *ngIf=\"!isNull()\" width=\"100%\" height=\"100%\">\r\n            </label>\r\n            <input id=\"file-input2\" type=\"file\" (change)=\"onFileChanged($event)\"/>\r\n          </div>\r\n\r\n          <!--Account type-->\r\n          <div class=\"col s12\">\r\n            <p style=\"color: #9e9e9e\">Account type</p>\r\n            <p>\r\n              <input name=\"account_type\" type=\"radio\" id=\"regular-standard\" [value]=\"'regular_standard'\" formControlName=\"account_type\"/>\r\n              <label for=\"regular-standard\">Regular Standard</label>\r\n            </p>\r\n            <p>\r\n              <input name=\"account_type\" type=\"radio\" id=\"regular-platinum\" [value]=\"'regular_platinum'\" formControlName=\"account_type\"/>\r\n              <label for=\"regular-platinum\">Regular Platinum</label>\r\n            </p>\r\n            <p>\r\n              <input name=\"account_type\" type=\"radio\" id=\"business\" [value]=\"'business'\" formControlName=\"account_type\"/>\r\n              <label for=\"business\">Business</label>\r\n            </p>\r\n          </div>\r\n\r\n          <!--Full name-->\r\n          <div class=\"input-field col s12\">\r\n            <label>Full name</label>\r\n            <input type=\"text\" class=\"validate\" formControlName=\"name\"/>\r\n          </div>\r\n\r\n          <!--Username-->\r\n          <div class=\"input-field col s12\">\r\n            <label>Username</label>\r\n            <input type=\"text\" class=\"validate\" formControlName=\"username\"/>\r\n          </div>\r\n\r\n          <!--Email address-->\r\n          <div class=\"input-field col s12\">\r\n            <label for=\"email\">Email address</label>\r\n            <input type=\"email\" class=\"validate\" name=\"email\" id=\"email\" ngModel required formControlName=\"email\"/>\r\n            <span class=\"helper-text error\" *ngIf = \"!form.get('email').valid && (form.get('email').touched || f.submitted)\"> Please enter an email! </span>\r\n          </div>\r\n\r\n          <!--Password-->\r\n          <div class=\"input-field col s12\">\r\n            <label>Password</label>\r\n            <input type=\"password\" class=\"validate\" formControlName=\"password1\"/>\r\n            <span class=\"helper-text error\" *ngIf = \"!form.get('password1').valid && (form.get('password1').touched || f.submitted)\"> Please enter a password! </span>\r\n          </div>\r\n\r\n          <!--Password2-->\r\n          <div class=\"input-field col s12\">\r\n            <label>Re-enter password</label>\r\n            <input type=\"password\" class=\"validate\" formControlName=\"password2\"/>\r\n            <span class=\"helper-text error\" *ngIf = \"(form.get('password2').touched || false) && (form.get('password1').value !== form.get('password2').value)\"> Passwords don't match! </span>\r\n          </div>\r\n\r\n          <!--Location-->\r\n          <div class=\"input-field col s12\">\r\n            <label>Location</label>\r\n            <input type=\"text\" class=\"validate\" formControlName=\"location\"/>\r\n          </div>\r\n\r\n          <!--Description-->\r\n          <div class=\"input-field col s12\">\r\n            <label>Describe yourself</label>\r\n            <input type=\"text\" class=\"validate\" formControlName=\"desc\"/>\r\n          </div>\r\n\r\n          <!--Phone number-->\r\n          <div class=\"input-field col s12\">\r\n            <i class=\"material-icons prefix\">phone</i>\r\n            <input id=\"icon_telephone\" type=\"tel\" class=\"validate\" formControlName=\"phone\">\r\n            <label for=\"icon_telephone\">Nr. de telefon</label>\r\n          </div>\r\n\r\n          <!--Barter-->\r\n          <div class=\"col s12\">\r\n            <p>\r\n              <input type=\"checkbox\" class=\"filled-in\" id=\"barter\" checked=\"checked\" formControlName=\"barter\"/>\r\n              <label for=\"barter\">Barter</label>\r\n            </p>\r\n          </div>\r\n\r\n        <span class=\"helper-text error\" *ngIf = \"error != null \"> {{ error }} </span>\r\n      </div>\r\n\r\n      <div class=\"card-action center-align\">\r\n        <input type=\"submit\" class=\"btn green waves-effect waves-light\" value=\"Register\">\r\n      </div>\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "poza {\n  border: 2px solid #cfd8dc;\n  border-radius: 5px; }\n\n.image-upload > input {\n  display: none; }\n\nerror {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var user_model_1 = __webpack_require__(/*! src/app/shared/user.model */ "./src/app/shared/user.model.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var angular2_materialize_1 = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl(''),
            email: new forms_1.FormControl(''),
            account_type: new forms_1.FormControl(''),
            phone: new forms_1.FormControl(''),
            location: new forms_1.FormControl(''),
            desc: new forms_1.FormControl(''),
            username: new forms_1.FormControl(''),
            barter: new forms_1.FormControl(''),
            password1: new forms_1.FormControl(''),
            password2: new forms_1.FormControl('')
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.image = null;
        this.imageURL = null;
    };
    RegisterComponent.prototype.onRegUser = function () {
        var _this = this;
        this.error = null;
        this.currUser = new user_model_1.UserModel(this.form.value.name, '', this.form.value.email, this.form.value.account_type, this.form.value.phone, this.form.value.location, 0, this.form.value.desc, this.form.value.username, this.form.value.barter, '');
        if (this.form.value.password1 !== this.form.value.password2) {
            this.error = 'Passwords don\'t match!';
            return;
        }
        var email = this.form.value.email;
        var password = this.form.value.password1;
        this.userService.registerUser(email, password).then(function (resp) {
            _this.currUser.uid = resp.user.uid;
            _this.userService.uid = resp.user.uid;
            console.log(1);
            _this.userService.getUsers().once('value', function (snap) {
                var array = snap.val();
                if (array === null) {
                    array = [];
                }
                var path = _this.currUser.uid + '/profile';
                _this.userService.addImage(path, _this.image).on('state_changed', function (snapshot) { console.log(snapshot); }, function (error) { console.log(error); }, function () {
                    console.log(3);
                    _this.userService.getImage(path).getDownloadURL().then(function (resp) {
                        _this.currUser.imageURL = resp;
                        array.push(_this.currUser);
                        _this.userService.updateDB(array).then(function () {
                            console.log(3);
                            angular2_materialize_1.toast('User added succesfully!', 1000);
                            _this.router.navigate(['dashboard']);
                        }).catch(function (error) { return console.log(error); }); // Add user to database
                    });
                });
            });
        }).catch(function (error) { return _this.error = error; });
        console.log(this.currUser);
    };
    RegisterComponent.prototype.isNull = function () {
        return this.imageURL == null;
    };
    RegisterComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.imageURL = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
            this.image = event.target.files[0];
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/review-form/review-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/review-form/review-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/review-form/review-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/review-form/review-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"valign-wrapper row\">\r\n  <div class=\"col card hoverable s12\">\r\n    <form [formGroup] = 'form' (submit)=\"onSubmit()\">\r\n      <div class=\"card-content\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"input-field col s12\">\r\n            <label for='nsFormTitle'>Titlu</label>\r\n            <input type='text' id='nsFormTitle' name='title' formControlName=\"title\" class=\"validate\" required>\r\n          </div>\r\n\r\n          <div class=\"input-field col s12\">\r\n            <label for='nsFormDescription'>Descriere</label>\r\n            <textarea class=\"materialize-textarea validate\" id='nsFormDescription' name='description' formControlName=\"desc\" required></textarea>\r\n          </div>\r\n\r\n          <div class=\"col s3\"></div>\r\n          <div class=\"col s3\">\r\n            <p class=\"flow-text\">Nota: {{ form.value.rating }}</p>\r\n          </div>\r\n          <div class=\"col s3\">\r\n            <star-rating-control formControlName=\"rating\" [showHalfStars]=\"true\" [step]=\"0.5\" [hoverEnabled]=\"true\" size=\"large\"></star-rating-control>\r\n          </div>\r\n          <div class=\"col s3\"></div>\r\n\r\n          <div class=\"file-field input-field col s12\">\r\n            <div class=\"btn\">\r\n              <span>Poze</span>\r\n              <input type=\"file\" multiple name=\"photos\" (change)=\"onChange($event)\">\r\n            </div>\r\n            <div class=\"file-path-wrapper\">\r\n              <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload one or more files\">\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"card-action center-align\">\r\n          <button class=\"waves-effect waves-light btn-large\" type=\"submit\" [disabled]=\"notAuth()\">Trimite review-ul</button>\r\n        </div>\r\n        <p style=\"color: red\">{{error}}</p>\r\n        <p style=\"color: red\" *ngIf=\"notAuth()\">You have to be logged in to send a review!</p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/review-form/review-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/review-form/review-form.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var forms_2 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var service_service_1 = __webpack_require__(/*! src/app/shared/services/service.service */ "./src/app/shared/services/service.service.ts");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var review_model_1 = __webpack_require__(/*! src/app/shared/review.model */ "./src/app/shared/review.model.ts");
var angular2_materialize_1 = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
var review_service_1 = __webpack_require__(/*! ../shared/services/review.service */ "./src/app/shared/services/review.service.ts");
var ReviewFormComponent = /** @class */ (function () {
    function ReviewFormComponent(route, serviceService, userService, reviewService, router) {
        this.route = route;
        this.serviceService = serviceService;
        this.userService = userService;
        this.reviewService = reviewService;
        this.router = router;
        this.form = new forms_2.FormGroup({
            title: new forms_1.FormControl('', [forms_1.Validators.required]),
            desc: new forms_1.FormControl('', [forms_1.Validators.required]),
            rating: new forms_1.FormControl('')
        });
    }
    ReviewFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images = [];
        this.imagesURL = [];
        this.route.params.forEach(function (params) {
            _this.serviceUID = params['uid'];
        });
        this.serviceService.getServices().once('value', function (snap) {
            var users = snap.val();
            console.log(users);
            for (var key in users) {
                console.log(users[key]);
                if (users[key][_this.serviceUID]) {
                    // TODO: left
                    console.log(users[key][_this.serviceUID]);
                    console.log(_this.serviceUID);
                    if (users[key][_this.serviceUID].filter(function (service) { return service.status === 'my_service'; })[0])
                        _this.service = users[key][_this.serviceUID].filter(function (service) { return service.status === 'my_service'; })[0];
                    console.log(_this.service);
                }
            }
            console.log(_this.service);
        });
    };
    ReviewFormComponent.prototype.notAuth = function () {
        return !this.userService.isAuthenticated();
    };
    ReviewFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.error = '';
        console.log(this.form.value);
        if (!this.form.valid)
            return;
        if (!this.form.value.rating) {
            this.error = 'Te rugăm să dai o notă serviciului!';
            return;
        }
        this.reviewUID = this.serviceService.getUniqueID();
        this.addImages(0).then(function () {
            _this.reviewToAdd = new review_model_1.ReviewModel(_this.form.value.title, _this.form.value.desc, _this.form.value.rating, _this.imagesURL, _this.userService.uid, _this.serviceUID, _this.reviewUID);
            console.log(_this.reviewToAdd);
            _this.reviewService.getReviews(_this.serviceUID).once('value', function (snap) {
                var allReviews = snap.val();
                if (!allReviews)
                    allReviews = [];
                console.log(_this.reviewToAdd);
                allReviews.push(_this.reviewToAdd);
                var newRating = 0;
                console.log(allReviews);
                allReviews.forEach(function (review) { return newRating += review.rating; });
                newRating /= allReviews.length;
                _this.reviewService.updateDB(allReviews).then(function () {
                    angular2_materialize_1.toast('Review sent succsesfull!', 1500);
                    var users = '';
                    _this.serviceService.getServices().once('value', function (snap) {
                        users = snap.val();
                        console.log(users);
                        var uidBuyer = _this.userService.uid;
                        console.log(_this.service);
                        var uidSeller = _this.service.fromUser;
                        if (!_this.service.isOffer) {
                            var aux = uidBuyer;
                            uidBuyer = uidSeller;
                            uidSeller = aux;
                        }
                        //delete waiting
                        console.log(uidBuyer, _this.service.uid);
                        var ind = users[uidBuyer][_this.service.uid].findIndex(function (service) { return service.status === 'waiting'; });
                        console.log(users[uidBuyer][_this.service.uid][ind]);
                        users[uidBuyer][_this.serviceUID][ind].status = 'done';
                        //delete & modify original
                        users[uidSeller][_this.service.uid] = users[uidSeller][_this.service.uid].filter(function (service) { return service.status !== 'processing'; });
                        var ind2 = users[uidSeller][_this.service.uid].findIndex(function (service) { return service.status === 'my_service'; });
                        console.log(ind2);
                        users[uidSeller][_this.service.uid][ind2].rating = newRating;
                        _this.reviewService.modify_user_rating(_this.service.fromUser);
                    }).then(function () {
                        _this.serviceService.getServices().set(users);
                    });
                    _this.router.navigate(['dashboard']);
                });
            });
        });
    };
    ReviewFormComponent.prototype.onChange = function (event) {
        var _this = this;
        var files = [].slice.call(event.target.files);
        var indMax = files.length - 1;
        for (var i = 0; i <= indMax; ++i) {
            if (event.target.files && files[i]) {
                var reader = new FileReader();
                reader.onload = function (events) {
                    _this.imagesURL.push(events.target.result);
                };
                console.log(files[i]);
                reader.readAsDataURL(files[i]);
                this.images.push(files[i]);
            }
        }
    };
    ReviewFormComponent.prototype.addImages = function (index) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!index)
                _this.imagesURL = [];
            if (index === _this.images.length) {
                return;
            }
            var url = 'reviews/' + _this.reviewUID + '/' + index;
            var uploadTask = _this.serviceService.addImage(url, _this.images[index]);
            uploadTask.on('state_changed', function (snapshot) { }, function (error) { console.log(error); }, function () {
                _this.userService.getImage(url).getDownloadURL().then(function (resp) {
                    _this.imagesURL.push(resp);
                    console.log(_this.imagesURL);
                    console.log('Done image ' + index);
                    _this.addImages(index + 1);
                });
            });
            return resolve(null);
        });
    };
    ReviewFormComponent = __decorate([
        core_1.Component({
            selector: 'app-review-form',
            template: __webpack_require__(/*! ./review-form.component.html */ "./src/app/review-form/review-form.component.html"),
            styles: [__webpack_require__(/*! ./review-form.component.css */ "./src/app/review-form/review-form.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            service_service_1.ServiceService,
            user_service_1.UserService,
            review_service_1.ReviewService,
            router_1.Router])
    ], ReviewFormComponent);
    return ReviewFormComponent;
}());
exports.ReviewFormComponent = ReviewFormComponent;


/***/ }),

/***/ "./src/app/service/payment-service/payment-service.component.html":
/*!************************************************************************!*\
  !*** ./src/app/service/payment-service/payment-service.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #payElement>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/service/payment-service/payment-service.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/service/payment-service/payment-service.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/service/payment-service/payment-service.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/service/payment-service/payment-service.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var payment_service_1 = __webpack_require__(/*! src/app/shared/services/payment.service */ "./src/app/shared/services/payment.service.ts");
var core_2 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var PaymentServiceComponent = /** @class */ (function () {
    function PaymentServiceComponent(pmt) {
        this.pmt = pmt;
    }
    PaymentServiceComponent.prototype.ngOnInit = function () {
    };
    PaymentServiceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.paymentRequest = this.pmt.stripe.paymentRequest({
            country: 'RO',
            currency: 'eur',
            total: {
                amount: this.amount,
                label: this.label
            }
        });
        this.elements = this.pmt.stripe.elements();
        this.paymentRequest.on('source', function (event) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(event);
                setTimeout(function () {
                    event.complete('success');
                }, 1000);
                return [2 /*return*/];
            });
        }); });
        this.prButton = this.elements.create('paymentRequestButton', {
            paymentRequest: this.paymentRequest,
            style: {
                paymentRequestButton: {
                    type: 'buy',
                    theme: 'dark'
                }
            }
        });
        this.mountButton();
    };
    PaymentServiceComponent.prototype.mountButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.paymentRequest.canMakePayment()];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.prButton.mount(this.payElement.nativeElement);
                        }
                        else {
                            console.log('ceva cu browseru');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_2.Input(),
        __metadata("design:type", Number)
    ], PaymentServiceComponent.prototype, "amount", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", String)
    ], PaymentServiceComponent.prototype, "label", void 0);
    __decorate([
        core_1.ViewChild('payElement'),
        __metadata("design:type", Object)
    ], PaymentServiceComponent.prototype, "payElement", void 0);
    PaymentServiceComponent = __decorate([
        core_1.Component({
            selector: 'app-payment-service',
            template: __webpack_require__(/*! ./payment-service.component.html */ "./src/app/service/payment-service/payment-service.component.html"),
            styles: [__webpack_require__(/*! ./payment-service.component.scss */ "./src/app/service/payment-service/payment-service.component.scss")]
        }),
        __metadata("design:paramtypes", [payment_service_1.PaymentService])
    ], PaymentServiceComponent);
    return PaymentServiceComponent;
}());
exports.PaymentServiceComponent = PaymentServiceComponent;


/***/ }),

/***/ "./src/app/service/reviews/review/review.component.html":
/*!**************************************************************!*\
  !*** ./src/app/service/reviews/review/review.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"review collection-item\" style=\"list-style: none\">\r\n\t<p class=\"reviewTitle\"><b>User: </b>{{ review.fromUser }}</p>\r\n\t<div class=\"rating medium star-icon value-{{ review.rating-1  | number: 0 }} half label-left\">\r\n    <div class=\"rating half label-left\">\r\n      <b>Rating: </b>{{review.rating}}\r\n      <star-rating\r\n        [starType]=\"'svg'\"\r\n        [rating]=\"review.rating\"\r\n        [readOnly]=\"true\">\r\n      </star-rating>\r\n    </div>\r\n  </div>\r\n\t<div class=\"reviewContent\">\r\n\t\t{{ review.content}}\r\n\t</div>\r\n\t<div class=\"reviewPhotos\">\r\n\t\t<div *ngFor=\"let photo of review.imagePath\">\r\n\t\t\t<img\r\n\t\t\t\t\tclass=\"materialboxed\"\r\n\t\t\t\t\theight=\"100px\"\r\n\t\t\t\t\twidth=\"auto\"\r\n\t\t\t\t\tsrc='{{ photo }}'>\r\n\t\t</div>\r\n\t</div>\r\n</li>\r\n"

/***/ }),

/***/ "./src/app/service/reviews/review/review.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/service/reviews/review/review.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reviewPhotos {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: center;\n  align-items: center;\n  width: 100%;\n  margin: 1rem 0rem;\n  overflow: auto hidden; }\n  .reviewPhotos > div {\n    border-radius: .5rem;\n    border: 1px solid #DFDFDF;\n    margin-right: 1rem; }\n  .rating {\n  justify-content: flex-start; }\n"

/***/ }),

/***/ "./src/app/service/reviews/review/review.component.ts":
/*!************************************************************!*\
  !*** ./src/app/service/reviews/review/review.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var review_model_1 = __webpack_require__(/*! src/app/shared/review.model */ "./src/app/shared/review.model.ts");
var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", review_model_1.ReviewModel)
    ], ReviewComponent.prototype, "review", void 0);
    ReviewComponent = __decorate([
        core_1.Component({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/service/reviews/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.scss */ "./src/app/service/reviews/review/review.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());
exports.ReviewComponent = ReviewComponent;


/***/ }),

/***/ "./src/app/service/reviews/reviews.component.html":
/*!********************************************************!*\
  !*** ./src/app/service/reviews/reviews.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reviewsContainer collection\">\r\n  <app-review *ngFor=\"let review of reviews\"\r\n  [review]=\"review\">\r\n  </app-review>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/service/reviews/reviews.component.scss":
/*!********************************************************!*\
  !*** ./src/app/service/reviews/reviews.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reviewsContainer {\n  overflow: hidden auto;\n  max-height: 50vh; }\n"

/***/ }),

/***/ "./src/app/service/reviews/reviews.component.ts":
/*!******************************************************!*\
  !*** ./src/app/service/reviews/reviews.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var service_service_1 = __webpack_require__(/*! src/app/shared/services/service.service */ "./src/app/shared/services/service.service.ts");
var review_service_1 = __webpack_require__(/*! ../../shared/services/review.service */ "./src/app/shared/services/review.service.ts");
var ReviewsComponent = /** @class */ (function () {
    /*  reviews: ReviewModel[] = [
        new ReviewModel(
          4,
          [
            "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
            "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
            "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
          ],
          "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          "UserInFlacari",
          "sdf"
        )
      ];*/
    function ReviewsComponent(serviceService, userService, reviewService) {
        this.serviceService = serviceService;
        this.userService = userService;
        this.reviewService = reviewService;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reviewService.getReviews().once('value', function (snap) {
            _this.reviews = snap.val().filter(function (review) { return review.idService === _this.uid; });
            console.log(_this.reviews);
            _this.reviews.forEach(function (review) {
                _this.userService.getUsers().once('value', function (snap2) {
                    review.fromUser = snap2.val().filter(function (user) { return user.uid === review.fromUser; })[0].username;
                    console.log(review);
                });
            });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ReviewsComponent.prototype, "uid", void 0);
    ReviewsComponent = __decorate([
        core_1.Component({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/service/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.scss */ "./src/app/service/reviews/reviews.component.scss")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            user_service_1.UserService,
            review_service_1.ReviewService])
    ], ReviewsComponent);
    return ReviewsComponent;
}());
exports.ReviewsComponent = ReviewsComponent;


/***/ }),

/***/ "./src/app/service/service-details/service-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/service/service-details/service-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col s6\" id=\"servicePhotos\">\r\n    <div id=\"photoShow\">\r\n      <img height=\"300px\"\r\n           width=\"auto\"\r\n           [src]=\"service.imagePath[0]\">\r\n    </div>\r\n    <div id=\"photosMin\">\r\n      <div *ngFor=\"let photo of service.imagePath\">\r\n        <img materialize=\"materialbox\"\r\n             class=\"materialboxed\"\r\n             height=\"100px\"\r\n             width=\"auto\"\r\n             [src]=\"photo\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col s6\" id=\"serviceInfo\">\r\n    <div id=\"serviceData1\" class=\"\">\r\n      <h4 id=\"serviceTitle\"><b>Service: </b>{{ service.title }}</h4>\r\n      <a id=\"serviceAuthor\" routerLink = \"/profile/{{ service.fromUser }}\"><b>User: </b>{{ author.username }}</a>\r\n      <p id=\"serviceBarter\" class=\"green-text\" *ngIf=\"service.barter\">✓ Barter</p>\r\n    </div>\r\n    <div id=\"serviceData2\" class=\"\">\r\n\r\n      <div class=\"rating half label-left\"><b>Rating: </b>{{service.rating}}\r\n        <star-rating\r\n        [starType]=\"'svg'\"\r\n        [rating]=\"service.rating\"\r\n        [readOnly]=\"true\"></star-rating>\r\n        <!--[hoverEnabled]=\"true\"-->\r\n      </div>\r\n      <div class=\"payment\">\r\n        <p id=\"servicePrice\"><b>Price: </b>{{ service.price }} EUR</p>\r\n        <div id=\"paypal-button\" *ngIf=\"isAuth()\"></div>\r\n        <div class=\"tooltipped\" materialize=\"tooltip\"  data-position=\"bottom\" data-tooltip=\"You have to login to purchase this service\">\r\n          <a *ngIf=\"!isAuth()\" class = \"btn-large disabled\" >\r\n           Buy\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div id=\"serviceContent\">\r\n\t\t<h3>Descriere</h3>\r\n\t\t<p id=\"serviceDescription\">{{ service.desc }}</p>\r\n\t</div>\r\n</div>\r\n<!--TODO: Make possibe to see others profile-->\r\n"

/***/ }),

/***/ "./src/app/service/service-details/service-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/service/service-details/service-details.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#photoShow {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  border-radius: .5rem;\n  border: 1px solid #DFDFDF;\n  overflow: hidden; }\n\n#photosMin {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: center;\n  align-items: center;\n  width: 100%;\n  margin: 1rem 0rem;\n  overflow: auto hidden; }\n\n#photosMin > div {\n    border-radius: .5rem;\n    border: 1px solid #DFDFDF;\n    margin-right: 1rem; }\n\n#serviceInfo {\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: flex-start; }\n\n#serviceInfo #serviceData1 #serviceBarter {\n    font-weight: bold; }\n\n#serviceInfo #serviceData2 .rating {\n    justify-content: flex-start; }\n\n#serviceInfo #serviceData2 .payment {\n    display: flex;\n    justify-content: space-around;\n    align-content: center;\n    align-items: center; }\n\n#serviceInfo #serviceData2 .payment #servicePrice {\n      font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/service/service-details/service-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/service/service-details/service-details.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var service_model_1 = __webpack_require__(/*! src/app/shared/service.model */ "./src/app/shared/service.model.ts");
var angular2_materialize_1 = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
var service_service_1 = __webpack_require__(/*! src/app/shared/services/service.service */ "./src/app/shared/services/service.service.ts");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var ServiceDetailsComponent = /** @class */ (function () {
    function ServiceDetailsComponent(userService, serviceService) {
        this.userService = userService;
        this.serviceService = serviceService;
        this.amount = 0;
        this.label = '';
        this.isOpen = false;
        this.isOkay = false;
    }
    ServiceDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.service);
        this.amount = this.service.price;
        this.label = this.service.title;
        this.userService.getUsers().on('value', function (snap) {
            _this.author = snap.val().filter(function (user) { return user.uid === _this.service.fromUser; })[0];
        });
    };
    ServiceDetailsComponent.prototype.isAuth = function () {
        return this.userService.isAuthenticated();
    };
    ServiceDetailsComponent.prototype.doAfterPayment = function () {
        this.serviceService.whenBuyService(this.service);
    };
    ServiceDetailsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log(this.amount);
        this.loadExternalScript("https://www.paypalobjects.com/api/checkout.js").then(function () {
            paypal.Button.render({
                env: 'sandbox',
                client: {
                    production: '',
                    sandbox: 'Ae_nW2sZxXiUHhvEVgmpKJDH6PLk7QdVmRHszElpCPqghzJVDdYqi8B0em3jx7LFHPv2wHBlPQKj1wXN'
                },
                commit: true,
                style: {
                    size: 'responsive',
                    color: 'black',
                    shape: 'rect',
                    layout: 'vertical'
                },
                payment: function (data, actions) {
                    return actions.payment.create({
                        payment: {
                            transactions: [
                                {
                                    amount: { total: 1, currency: 'EUR' }
                                }
                            ]
                        }
                    });
                },
                onAuthorize: function (data, actions) {
                    return actions.payment.execute().then(function (payment) {
                        var serviceToAdd = _this.service;
                        serviceToAdd.status = 'waiting';
                        _this.serviceService.whenBuyService(serviceToAdd);
                        angular2_materialize_1.toast('Service bought succesfully!', 2000);
                    });
                }
            }, '#paypal-button');
        });
        console.log(this.isOkay);
    };
    ServiceDetailsComponent.prototype.loadExternalScript = function (scriptUrl) {
        return new Promise(function (resolve, reject) {
            var scriptElement = document.createElement('script');
            scriptElement.src = scriptUrl;
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", service_model_1.ServiceModel)
    ], ServiceDetailsComponent.prototype, "service", void 0);
    ServiceDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-service-details',
            template: __webpack_require__(/*! ./service-details.component.html */ "./src/app/service/service-details/service-details.component.html"),
            styles: [__webpack_require__(/*! ./service-details.component.scss */ "./src/app/service/service-details/service-details.component.scss")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, service_service_1.ServiceService])
    ], ServiceDetailsComponent);
    return ServiceDetailsComponent;
}());
exports.ServiceDetailsComponent = ServiceDetailsComponent;


/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-service-details *ngIf=\"service != null\" [service]=\"service\"></app-service-details>\r\n<div class=\"row\">\r\n  <div id=\"serviceReviews\">\r\n    <h3>Reviews</h3>\r\n    <app-reviews [uid]=\"service.uid\"></app-reviews>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/service/service.component.scss":
/*!************************************************!*\
  !*** ./src/app/service/service.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var service_service_1 = __webpack_require__(/*! src/app/shared/services/service.service */ "./src/app/shared/services/service.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ServiceComponent = /** @class */ (function () {
    function ServiceComponent(serviceService, route) {
        this.serviceService = serviceService;
        this.route = route;
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.serviceService.getServices().on('value', function (snap) {
                console.log(snap.val());
                for (var key in snap.val())
                    if (snap.val()[key][_this.id] && snap.val()[key][_this.id][0].status === 'my_service') {
                        _this.service = snap.val()[key][_this.id][0];
                        console.log(_this.service);
                        break;
                    }
            });
        });
    };
    ServiceComponent = __decorate([
        core_1.Component({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.scss */ "./src/app/service/service.component.scss")]
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            router_1.ActivatedRoute])
    ], ServiceComponent);
    return ServiceComponent;
}());
exports.ServiceComponent = ServiceComponent;


/***/ }),

/***/ "./src/app/shared/review.model.ts":
/*!****************************************!*\
  !*** ./src/app/shared/review.model.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReviewModel = /** @class */ (function () {
    function ReviewModel(title, content, rating, imagePath, fromUser, idService, reviewUID) {
        this.title = title;
        this.rating = rating;
        this.imagePath = imagePath;
        this.content = content;
        this.fromUser = fromUser;
        this.idService = idService;
        this.reviewUID = reviewUID;
    }
    return ReviewModel;
}());
exports.ReviewModel = ReviewModel;


/***/ }),

/***/ "./src/app/shared/service.model.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/service.model.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceModel = /** @class */ (function () {
    function ServiceModel(barter, title, desc, rating, category, imagePath, fromUser, toUser, uid, isOffer, status, price) {
        this.barter = barter;
        this.title = title;
        this.desc = desc;
        this.rating = rating;
        this.category = category;
        this.imagePath = imagePath;
        this.fromUser = fromUser;
        this.toUser = toUser;
        this.uid = uid;
        this.isOffer = isOffer;
        this.status = status;
        this.price = price;
    }
    return ServiceModel;
}());
exports.ServiceModel = ServiceModel;


/***/ }),

/***/ "./src/app/shared/services/payment.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/payment.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var PaymentService = /** @class */ (function () {
    function PaymentService() {
        this.stripe = Stripe('');
    }
    PaymentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PaymentService);
    return PaymentService;
}());
exports.PaymentService = PaymentService;


/***/ }),

/***/ "./src/app/shared/services/review.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/review.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var firebase = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
var service_service_1 = __webpack_require__(/*! ./service.service */ "./src/app/shared/services/service.service.ts");
var user_service_1 = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");
var ReviewService = /** @class */ (function () {
    function ReviewService(serviceService, userService) {
        this.serviceService = serviceService;
        this.userService = userService;
    }
    ReviewService.prototype.getUserReviews = function (uid) {
        return firebase.database().ref('reviews/' + uid);
    };
    ReviewService.prototype.modify_user_rating = function (userUID) {
        var _this = this;
        var keys = this.serviceService.get_all_service_keys(userUID);
        var goodRating = 0, nr = 0, sum = 0;
        this.getReviews().on('value', function (snap) {
            snap.val().forEach(function (review) {
                if (keys.includes(review.idService)) {
                    sum += review.rating;
                    nr++;
                }
            });
            _this.userService.getUsers().on('value', function (snap2) {
                snap2.val()[userUID].rating = sum / nr;
                _this.userService.updateDB(snap2.val());
            });
        });
    };
    ReviewService.prototype.updateDB = function (data) {
        return firebase.database().ref('reviews').set(data);
    };
    ReviewService.prototype.getReviews = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args)
            return firebase.database().ref('reviews/' + args);
        return firebase.database().ref('reviews');
    };
    ReviewService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [service_service_1.ServiceService,
            user_service_1.UserService])
    ], ReviewService);
    return ReviewService;
}());
exports.ReviewService = ReviewService;


/***/ }),

/***/ "./src/app/shared/services/service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/service.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var firebase = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var ServiceService = /** @class */ (function () {
    function ServiceService(userService) {
        this.userService = userService;
    }
    ServiceService.prototype.getUniqueID = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    ServiceService.prototype.addService = function (service, where) {
        var url = 'services/' + where + '/' + service.uid;
        var services = [];
        firebase.database().ref(url).once('value', function (snap) {
            services = snap.val();
        });
        if (!services)
            services = [];
        services.push(service);
        return firebase.database().ref(url).update(services);
    };
    ServiceService.prototype.whenBuyService = function (service) {
        //Add to buyer
        var url2 = ['services/' + this.userService.uid + '/' + service.uid,
            'services/' + service.fromUser + '/' + service.uid];
        var status = ['waiting', 'processing'];
        service.toUser = this.userService.uid;
        if (!service.isOffer) {
            var aux = service.toUser;
            service.toUser = service.fromUser;
            service.fromUser = aux;
        }
        url2.forEach(function (url, i) {
            var services = [];
            var copy = service;
            copy.status = status[i];
            firebase.database().ref(url).once('value', function (snap) {
                services = snap.val();
            });
            if (!services)
                services = [];
            services.push(service);
            firebase.database().ref(url).set(services);
        });
    };
    ServiceService.prototype.addImage = function (url, image) {
        return firebase.storage().ref(url).put(image);
    };
    ServiceService.prototype.getServices = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args)
            return firebase.database().ref('services/' + args);
        return firebase.database().ref('services');
    };
    ServiceService.prototype.get_all_service_keys = function (userUID) {
        var goodServices = [];
        this.getServices(userUID).on('value', function (snap) {
            console.log(snap.val());
            for (var key in snap.val()) {
                goodServices.push.apply(goodServices, snap.val()[key].filter(function (service) { return service.status === 'my_service'; }));
            }
            return goodServices;
        });
    };
    ServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], ServiceService);
    return ServiceService;
}());
exports.ServiceService = ServiceService;


/***/ }),

/***/ "./src/app/shared/services/user-auth-guard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/user-auth-guard.service.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var user_service_1 = __webpack_require__(/*! src/app/shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var UserAuthGuardService = /** @class */ (function () {
    function UserAuthGuardService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserAuthGuardService.prototype.canActivate = function (route, state) {
        if (!this.userService.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    UserAuthGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], UserAuthGuardService);
    return UserAuthGuardService;
}());
exports.UserAuthGuardService = UserAuthGuardService;


/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var firebase = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var UserService = /** @class */ (function () {
    function UserService(router) {
        this.router = router;
    }
    UserService.prototype.registerUser = function (email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    };
    UserService.prototype.loginUser = function (email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };
    UserService.prototype.getUsers = function () {
        return firebase.database().ref('users');
    };
    UserService.prototype.updateDB = function (data) {
        return firebase.database().ref('users').set(data);
    };
    UserService.prototype.addImage = function (url, image) {
        return firebase.storage().ref(url).put(image);
    };
    UserService.prototype.logout = function () {
        this.token = null;
        firebase.auth().signOut();
        this.uid = null;
        this.router.navigate(['/']);
    };
    UserService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    UserService.prototype.getImage = function (url) {
        return firebase.storage().ref(url);
    };
    UserService.prototype.getCategories = function () {
        return firebase.database().ref('categories');
    };
    UserService.prototype.convertUIDtoName = function (uid) {
        var name = '';
        this.getUsers().once('value', function (snap) {
            name = snap.val().filter(function (user) { return user.uid === uid; })[0].name;
        });
        return name;
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/app/shared/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/user.model.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserModel = /** @class */ (function () {
    function UserModel(name, uid, email, accountType, phone, location, rating, desc, username, barter, imageURL) {
        this.name = name;
        this.uid = uid;
        this.email = email;
        this.accountType = accountType;
        this.phone = phone;
        this.location = location;
        this.rating = rating;
        this.desc = desc;
        this.username = username;
        this.barter = barter;
        this.imageURL = imageURL;
    }
    return UserModel;
}());
exports.UserModel = UserModel;


/***/ }),

/***/ "./src/app/support/support.component.html":
/*!************************************************!*\
  !*** ./src/app/support/support.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Feedback</h1>\r\n<form>\r\n  <div class=\"card-content\">\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <p>\r\n          <label for='csFormTitle'>Titlu</label>\r\n          <input type='text' id='csFormTitle'>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"col s12\">\r\n        <p>\r\n          <label for='csFormDissat'>Nemulțumiri</label>\r\n          <textarea id='csFormDissat'></textarea>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"col s12\">\r\n        <p>\r\n          <label for='csFormSugg'>Sugestii</label>\r\n          <textarea id='csFormSugg'></textarea>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"col s12\">\r\n        <p>\r\n          <input type=\"submit\" class=\"btn  waves-effect waves-light\" value=\"Trimite\">\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/support/support.component.scss":
/*!************************************************!*\
  !*** ./src/app/support/support.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/support/support.component.ts":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var SupportComponent = /** @class */ (function () {
    function SupportComponent() {
    }
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent = __decorate([
        core_1.Component({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.scss */ "./src/app/support/support.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SupportComponent);
    return SupportComponent;
}());
exports.SupportComponent = SupportComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\CIAB2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map