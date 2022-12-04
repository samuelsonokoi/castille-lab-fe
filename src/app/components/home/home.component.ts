import { Component } from '@angular/core';
import { IPeople } from 'src/app/models/people';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  people: IPeople[] = [
    {
      name: 'Deborah Melinda Arlanda 🇲🇺',
      role: 'Senior Human Capital Consultant',
      image: './assets/images/deborah.svg',
    },
    {
      name: 'Fatma Ibrahimi 🇲🇦',
      role: 'Human Capital Consultant',
      image: './assets/images/fatma.svg',
    },
    {
      name: 'Vishalee Bikoo 🇲🇺',
      role: 'Human Capital Consultant',
      image: './assets/images/vishalee.svg',
    },
  ];
}
