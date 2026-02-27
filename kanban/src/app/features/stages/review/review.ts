import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card';
import { TaskCardComponent } from '../../../shared/task-card/task-card';

@Component({
  selector: 'app-review',
  imports: [CardComponent, TaskCardComponent],
  templateUrl: './review.html',
  styleUrl: './review.css',
})
export class ReviewComponent {}
