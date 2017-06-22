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
  fullList: User[] = [];
  counter=0;
  constructor(private dataService: DataService){}
  ngOnInit(){
    this.counter++;
    this.dataService.getUsers(this.counter).subscribe((data:Response)=>
    {
      this.users=data.json();
      this.fullList = [].concat(this.users);
      this.users.forEach((el,i)=>{
        this.counter = el.id;   
      })
    });
  }
  paginationsAdd(){
    this.dataService.getUsers(this.counter).subscribe((data:Response)=>{
      this.users=data.json();
      this.fullList = this.fullList.concat(this.users);
      this.users.forEach((el,i)=>{
        this.counter = el.id;   
      })
    });
  }
}