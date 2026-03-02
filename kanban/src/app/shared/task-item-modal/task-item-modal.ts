// import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import { Modal } from 'bootstrap';
import { Component, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-item-modal',
  // standalone: true,
  imports: [],
  templateUrl: './task-item-modal.html',
  styleUrls: ['./task-item-modal.css'],
})
export class TaskItemModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}
