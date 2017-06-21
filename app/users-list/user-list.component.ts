import {Component, Input} from '@angular/core';
import {User} from '../shared/user';
import {DataService} from '../shared/data.service';
import {Response} from "@angular/http";
@Component({
  moduleId: module.id,
  selector: 'user-list',
  templateUrl: "./user-list.component.html",
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent{
  @Input() users: User[];
  userAbout: any;
  constructor(private dataService: DataService){}
  userInfo(id:string){
    this.dataService.getMinInfo(id);
  }
}