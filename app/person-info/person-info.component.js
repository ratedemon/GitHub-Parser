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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_service_1 = require("../shared/data.service");
var PersonInfoComponent = (function () {
    function PersonInfoComponent(activatedRoute, dataService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.subscription = activatedRoute.params.subscribe(function (params) { _this.id = params['id']; });
        // this.dataService.getPersonInfo(this.id).subscribe((data:Response)=>{this.person=data.json(); console.log(this.person);});
    }
    PersonInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.dataService.getPersonInfo(this.id).subscribe((data:Response)=>{this.person=data.json()});
        this.dataService.getPersonInfo(this.id).subscribe(function (data) { _this.person = data; });
        this.dataService.getPersonRepos(this.id).subscribe(function (data) {
            _this.personRepos = data;
            _this.removed = _this.personRepos.splice(5);
        });
        //  console.log(this.person);
    };
    PersonInfoComponent.prototype.showMore = function () {
        var _this = this;
        console.log(this.removed);
        // this.personRepos = this.personRepos.concat(this.removed);
        this.removed.forEach(function (el, i) {
            _this.personRepos.push(el);
        });
    };
    PersonInfoComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return PersonInfoComponent;
}());
PersonInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'person-info',
        templateUrl: './person-info.component.html',
        styleUrls: ['./person-info.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, data_service_1.DataService])
], PersonInfoComponent);
exports.PersonInfoComponent = PersonInfoComponent;
//# sourceMappingURL=person-info.component.js.map