import {Component} from '@angular/core';
import {Person} from '../shared/person';

@Component({
  moduleId: module.id,
  selector: 'person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent{
  person: Person;
}