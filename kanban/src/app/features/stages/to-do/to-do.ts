import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card';
import { TaskItem } from '../../task-item/task-item';
import { TaskCardComponent } from '../../../shared/task-card/task-card';

@Component({
  selector: 'app-to-do',
  imports: [CardComponent, TaskItem, TaskCardComponent],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDoComponent {}
