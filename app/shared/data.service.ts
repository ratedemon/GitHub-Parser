import {Injectable} from '@angular/core';
import {User} from './user';
import {Http, Response} from "@angular/http";
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

@Injectable()
export class DataService{
  // users: User[] = [];
  counter: number = 1;
  url: string = `https://api.github.com/users?since=${this.counter}`;
  userUrl: string = 'https://api.github.com/users/';
  constructor(private http: Http){}
  getUsers(){
    return this.http.get(this.url);
  }
  getMinInfo(id:string){
    return this.http.get(this.userUrl+id);
  }
  private parseData(res:Response){
    let userList = res.json();
    return userList || [];
  }
}