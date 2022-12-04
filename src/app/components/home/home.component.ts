import { Component } from '@angular/core';
import { IJob } from 'src/app/models/job';
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

  jobs: IJob[] = [
    {
      image: './assets/images/clevertech.svg',
      company: 'Clevertech',
      title: 'Senior Software Developer in Test',
      requirements: [
        {
          icon: './assets/images/sdt.svg',
          requirement: 'Software Developer in Test',
        },
        {
          icon: './assets/images/level.svg',
          requirement: 'Senior ( 5 - 9 years )',
        },
        {
          icon: './assets/images/sector.svg',
          requirement: 'Information Technology and Services',
        },
      ],
      tags: ['Automation', 'Cloud', 'Cybersecurity'],
    },
    {
      image: './assets/images/mozilla.svg',
      company: 'Mozilla',
      title: 'Senior Developer C++',
      requirements: [
        { icon: './assets/images/sdt.svg', requirement: 'Software Developer' },
        {
          icon: './assets/images/level.svg',
          requirement: 'Intermediate ( 3 - 5 years )',
        },
        {
          icon: './assets/images/sector.svg',
          requirement: 'Electrical and Electronic Manufacturing',
        },
      ],
      tags: ['Agile', 'C++', 'Python'],
    },
    {
      image: './assets/images/bitrise.svg',
      company: 'Bitrise',
      title: 'Software Development Engineer, Alexa AI',
      requirements: [
        {
          icon: './assets/images/sdt.svg',
          requirement: 'Software Development Manager',
        },
        {
          icon: './assets/images/level.svg',
          requirement: 'Junior ( 0 - 2 years )',
        },
        {
          icon: './assets/images/sector.svg',
          requirement: 'IT Services and IT Consulting',
        },
      ],
      tags: ['Operations', 'Software Developer', 'Python'],
    },
  ];
}
