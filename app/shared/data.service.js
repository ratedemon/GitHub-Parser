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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.gitUrl = "https://api.github.com";
        this.url = this.gitUrl + "/users?since=";
        this.userUrl = this.gitUrl + '/users/';
        this.searchUrl = this.gitUrl + '/search/users?q=';
    }
    DataService.prototype.getUsers = function (counter) {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.url + counter, { headers: headers });
    };
    DataService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', 'Basic ' + btoa('ratedemon:demon13'));
    };
    DataService.prototype.getPersonInfo = function (id) {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.userUrl + id, { headers: headers }).map(this.parseData);
    };
    DataService.prototype.searchUser = function (name) {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        console.log(this.searchUrl + name, name);
        return this.http.get(this.searchUrl + name, { headers: headers }).map(function (data) {
            var userList = data.json().items;
            var total = data.json().total_count;
            return { users: userList, total: total };
        });
    };
    DataService.prototype.parseData = function (res) {
        var userList = res.json();
        return userList || [];
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map