import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {DataService} from '../shared/data.service';
import {Response} from "@angular/http";
@Component({
  moduleId: module.id,
  selector: 'user-list',
  templateUrl: "./user-list.component.html",
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  // @Input() users: User[];
  users: User[]=[];
  // userAbout: any;
  constructor(private dataService: DataService){}
  ngOnInit(){
    this.dataService.getUsers().subscribe((data:Response)=>this.users=data.json());
  }
  // userInfo(id:string){
    // this.dataService.getMinInfo(id);
  // }

}