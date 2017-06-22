import {Component,OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Person} from '../shared/person';
import {DataService} from '../shared/data.service';
// import {Response} from "@angular/http";


@Component({
  moduleId: module.id,
  selector: 'person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit, OnDestroy{
  person:Person;
  private id: string;
  private subscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService){
    this.subscription=activatedRoute.params.subscribe(params=>{this.id=params['id']});
    // this.dataService.getPersonInfo(this.id).subscribe((data:Response)=>{this.person=data.json(); console.log(this.person);});
  }
  ngOnInit(){
    // this.dataService.getPersonInfo(this.id).subscribe((data:Response)=>{this.person=data.json()});
    this.dataService.getPersonInfo(this.id).subscribe(data=>{this.person = data;});
  //  console.log(this.person);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}