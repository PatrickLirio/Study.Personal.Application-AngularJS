import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card';

@Component({
  selector: 'app-to-do',
  imports: [CardComponent],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css',
})
export class ToDoComponent {}
