import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent }   from './app.component';
import {UserListComponent} from './users-list/user-list.component';
import {HttpModule} from '@angular/http';
import {DataService} from './shared/data.service';
import {PersonInfoComponent} from './person-info/person-info.component';
import {ScrollDirective} from './users-list/scroll.directive';
import {HideDirective} from './users-list/hide.directive';
import {SearchPageComponent} from './search-page/search-page.component';
// import {VirtualScrollModule} from 'angular2-virtual-scroll';


const appRoutes:Routes = [
    {path: '', component: UserListComponent},
    {path: 'search', component: SearchPageComponent},
    {path: 'user/:id', component: PersonInfoComponent},    
]


@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, UserListComponent, PersonInfoComponent, ScrollDirective, SearchPageComponent, HideDirective ],
    // declarations: [ AppComponent,NotFoundComponent, AboutComponent,HomeComponent],
    providers: [DataService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }