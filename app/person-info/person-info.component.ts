import {Component,OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Person} from '../shared/person';
import {PersonMore} from '../shared/person';
import {User} from '../shared/user';
import {DataService} from '../shared/data.service';

@Component({
  moduleId: module.id,
  selector: 'person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit, OnDestroy{
  person:Person;
  personRepos: PersonMore[];
  removed: PersonMore[];
  private id: string;
  private subscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService){
    this.subscription=activatedRoute.params.subscribe(params=>{this.id=params['id']});
    // this.dataService.getPersonInfo(this.id).subscribe((data:Response)=>{this.person=data.json(); console.log(this.person);});
  }
  ngOnInit(){
    // this.dataService.getPersonInfo(this.id).subscribe((data:Response)=>{this.person=data.json()});
    this.dataService.getPersonInfo(this.id).subscribe(data=>{this.person = data;});
    this.dataService.getPersonRepos(this.id).subscribe(data=>
    {
      this.personRepos=data;
      this.removed = this.personRepos.splice(5);  
  })
  //  console.log(this.person);
  }
  showMore(){
    console.log(this.removed);
    // this.personRepos = this.personRepos.concat(this.removed);
    this.removed.forEach((el,i)=>{
      this.personRepos.push(el);
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}