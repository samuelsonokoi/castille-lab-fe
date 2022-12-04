import { Component, Input } from '@angular/core';
import { IPeople } from 'src/app/models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() people!: IPeople;
}
