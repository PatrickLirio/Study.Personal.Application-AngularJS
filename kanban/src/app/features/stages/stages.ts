import { Component, ViewChild } from '@angular/core';
import { ToDoComponent } from './to-do/to-do';
import { ReviewComponent } from './review/review';
import { InProgressComponent } from './in-progress/in-progress';
import { DoneComponent } from './done/done';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskItemModalComponent } from '../../shared/task-item-modal/task-item-modal';

@Component({
  selector: 'app-stages',
  imports: [ToDoComponent, ReviewComponent, InProgressComponent, DoneComponent],
  templateUrl: './stages.html',
  styleUrls: ['./stages.css'],
})
export class StagesComponent {
  constructor(private modalService: NgbModal) {}

  openTaskModal() {
    const modalRef = this.modalService.open(TaskItemModalComponent, {
      backdrop: 'static',
      size: 'lg',
      centered: true,
    });
  }
}
