import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent }   from './app.component';
import {UserListComponent} from './users-list/user-list.component';
import {HttpModule} from '@angular/http';
import {DataService} from './shared/data.service';
import {PersonInfoComponent} from './person-info/person-info.component';

const appRoutes:Routes = [
    {path: '', component: UserListComponent},
    {path: 'person/:id', component: PersonInfoComponent}
]

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, UserListComponent, PersonInfoComponent ],
    providers: [DataService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }