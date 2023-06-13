import { Component, Input } from '@angular/core';
import { DataServiceService, Feedback } from '../services/data-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @Input() difficulty?: string;
  @Input() time?: string;
  @Input() support?: string;
  @Input() classroom?: string;
  feedback!: Feedback;

  constructor(private dataService: DataServiceService) {}

  submit(): void{
    console.log(this.difficulty, this.time, this.support, this.classroom);

    this.feedback = {
      difficulty: this.difficulty,
      time: this.time,
      support: this.support,
      classroom: this.classroom
    }

    this.dataService.saveFeedback(this.feedback);
  }

}
