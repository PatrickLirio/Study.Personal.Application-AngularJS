import { Inject, Injectable } from '@angular/core';
import { type TaskModel } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private DummyTasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      status: 'To Do',
      assignedTo: 'John Doe',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2',
      status: 'In Progress',
      assignedTo: 'Jane Smith',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description for Task 3',
      status: 'Done',
      assignedTo: 'Alice Johnson',
    },
    {
      id: 4,
      title: 'Task 4',
      description: 'Description for Task 4',
      status: 'Review',
      assignedTo: 'Bob Brown',
    },
  ];
  constructor() {
    const task = localStorage.getItem('tasks');
    if (task) {
      this.DummyTasks = JSON.parse(task);
    }
  }

  getTasks(status: string) {
    return this.DummyTasks.filter((task) => task.status === status);
  }

  addNewTask(taskData: TaskModel) {
    this.DummyTasks.unshift({
      id: new Date().getTime(),
      title: taskData.title,
      description: taskData.description,
      status: taskData.status,
      assignedTo: taskData.assignedTo,
    });
    this.saveTasksToLocalStorage();
  }

  //helper
  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.DummyTasks));
  }
}
