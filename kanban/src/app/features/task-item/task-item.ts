import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card';
import { TaskCardComponent } from '../../shared/task-card/task-card';

@Component({
  selector: 'app-task-item',
  imports: [CardComponent, TaskCardComponent],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {}
