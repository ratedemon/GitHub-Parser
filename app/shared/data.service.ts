import {Injectable} from '@angular/core';
import {User} from './user';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime'

@Injectable()
export class DataService{
  gitUrl: string = "https://api.github.com";
  url: string = this.gitUrl+"/users?since=";
  userUrl: string = this.gitUrl+'/users/';
  searchUrl: string = this.gitUrl+'/search/users?q=';
  repos: string = '/repos';
  constructor(private http: Http){}
  getUsers(counter:number){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.url+counter,{headers: headers});
  }
  private createAuthorizationHeader(headers: Headers){
    headers.append('Authorization', 'Basic ' + btoa('ratedemon:demon13')); 
  }
  getPersonInfo(id:string){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.userUrl+id, {headers: headers}).map(this.parseData);
  }
  getPersonRepos(id: string){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.userUrl+id+this.repos, {headers: headers}).map(this.parseData);
  }
  searchUser(name:string){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.searchUrl+name, {headers: headers}).map(
      (data:Response)=>{
        let userList = data.json().items;
        let total = data.json().total_count;
        return {users: userList, total: total}
      }
    ).debounceTime(1000);
  }
  private parseData(res:Response){
    let userList = res.json();
    return userList || [];
  }
}