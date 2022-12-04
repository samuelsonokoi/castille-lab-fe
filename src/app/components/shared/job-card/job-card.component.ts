import { Component, Input } from '@angular/core';
import { IJob } from 'src/app/models/job';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css'],
})
export class JobCardComponent {
  @Input() job!: IJob;
}
