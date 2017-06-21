import { Component, OnInit, Output} from '@angular/core';
import {User} from './shared/user';
import {DataService} from './shared/data.service';
import {Response} from "@angular/http";
import {UserListComponent} from './users-list/user-list.component';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
    title = "GitHub Users";
    @Output() users: User[] = [];
    constructor(private dataService: DataService){}
    ngOnInit(){
        this.dataService.getUsers().subscribe((data:Response) => this.users=data.json());
    }
}