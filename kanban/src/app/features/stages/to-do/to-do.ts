import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card';

import { TaskCardComponent } from '../../../shared/task-card/task-card';

@Component({
  selector: 'app-to-do',
  imports: [CardComponent, TaskCardComponent],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDoComponent {}
