import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [NgStyle],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class CardComponent {
  @Input() title: string = '';
  @Input() total: number = 0;
  @Input() buttonColor: string = '';
  @Input() icon: string = '';
}
