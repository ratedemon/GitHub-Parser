"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var user_list_component_1 = require("./users-list/user-list.component");
var http_1 = require("@angular/http");
var data_service_1 = require("./shared/data.service");
var person_info_component_1 = require("./person-info/person-info.component");
var scroll_directive_1 = require("./users-list/scroll.directive");
var hide_directive_1 = require("./users-list/hide.directive");
var search_page_component_1 = require("./search-page/search-page.component");
// import {VirtualScrollModule} from 'angular2-virtual-scroll';
var appRoutes = [
    { path: '', component: user_list_component_1.UserListComponent },
    { path: 'search', component: search_page_component_1.SearchPageComponent },
    { path: 'user/:id', component: person_info_component_1.PersonInfoComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, user_list_component_1.UserListComponent, person_info_component_1.PersonInfoComponent, scroll_directive_1.ScrollDirective, search_page_component_1.SearchPageComponent, hide_directive_1.HideDirective],
        // declarations: [ AppComponent,NotFoundComponent, AboutComponent,HomeComponent],
        providers: [data_service_1.DataService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map