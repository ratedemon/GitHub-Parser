import {Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import {SearchUser} from '../shared/searchUser';
import {DataService} from '../shared/data.service';
import {Response} from "@angular/http";
@Component({
  moduleId: module.id,
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent{
  users: SearchUser[] = [];
  totalFound:number = 0;
  constructor(private dataService: DataService){}
  searchPeople(input: HTMLInputElement){
    console.log(typeof input, this.users, this.totalFound);
    this.dataService.searchUser(input).subscribe((data)=>{this.users=data.users; this.totalFound = data.total;})
  }
}