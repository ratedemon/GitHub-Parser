import { Component, Output, NgModule } from '@angular/core';
import {User} from './shared/user';
import {DataService} from './shared/data.service';
import {Response} from "@angular/http";
import {UserListComponent} from './users-list/user-list.component';
import {PersonInfoComponent} from './person-info/person-info.component';
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{ 
    title = "GitHub Users";
    @Output() users: User[] = [];
    constructor(private dataService: DataService){}
    // ngOnInit(){
    //     console.log('Begin');
    //     this.dataService.getUsers().subscribe((data:Response) => this.users=data.json());
    // }
}