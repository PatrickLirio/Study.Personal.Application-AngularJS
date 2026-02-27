import { Component } from '@angular/core';
import { ToDoComponent } from './to-do/to-do';
import { ReviewComponent } from './review/review';
import { InProgressComponent } from './in-progress/in-progress';
import { DoneComponent } from './done/done';

@Component({
  selector: 'app-stages',
  imports: [ToDoComponent, ReviewComponent, InProgressComponent, DoneComponent],
  templateUrl: './stages.html',
  styleUrls: ['./stages.css'],
})
export class StagesComponent {}
