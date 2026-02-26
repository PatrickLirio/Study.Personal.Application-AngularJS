import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { StagesComponent } from './stages/stages';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, StagesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('kanban');
}
